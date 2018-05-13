import {Controller, Get, Post, Req, Res} from "@nestjs/common";

const fs =require('fs');
let preguntasHtml=fs.readFileSync(__dirname+'/html/preguntasFrecuentes.html', 'utf8');
@Controller('PreguntasFrecuentes')
export class PreguntasFrecuentesController {

    preguntas_frecuentes=[];
    @Post('preguntasIngreso')
    anadirPreguntas(@Req() request, @Res() response){
        const parametrosConsulta=request.query;
         this.preguntas_frecuentes.push(new preguntasfrecuentesParametros(parametrosConsulta.pregunta, parametrosConsulta.respuesta));
        this.preguntas_frecuentes.forEach(value => {
            preguntasHtml=preguntasHtml.concat('<h1> Pregunta </h1> ',value.pregunta);
            preguntasHtml=preguntasHtml.concat('<p> Respuesta</p>', value.respuesta);
        });
        return response.send(this.preguntas_frecuentes);
    }

    @Get('preguntas')
    mostrarPreguntas(@Res () response){
       return response.status(200).send(preguntasHtml)
    }


}

class preguntasfrecuentesParametros{
    constructor(public pregunta:string,
                public respuesta: string){
    }

}