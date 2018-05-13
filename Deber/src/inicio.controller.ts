import {Controller, Get, Res, Req, HttpCode} from "@nestjs/common";
const fs = require('fs');
@Controller()
export class InicioController{
    @Get('Home')
    @HttpCode(202)
    mostrar(@Req()request, @Res() response){
        let htmlfooter=fs.readFileSync(__dirname+'/html/footer.html', 'utf8');
        let htmlheader= fs.readFileSync(__dirname+'/html/header.html', 'utf8');
        let htmlcontenido= fs.readFileSync(__dirname+'/html/contenido.html', 'utf8');
        let cadena= htmlheader+htmlcontenido+htmlfooter;
        console.log(response.status(202).send(cadena));
        return response.status(202).send(cadena);

    }

}