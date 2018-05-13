import {Get, Controller, Req, Res} from '@nestjs/common';

const fs=require("fs");
@Controller()
export class AppController {

  @Get()
  root(@Req() request, @Res() response) {
    console.log('Inicio');
    let contenidoHtml ='';
    console.log(contenidoHtml,contenidoHtml);
    fs.readFile(
        __dirname+"/html/Index.html",'utf8',(error, contenidoDelArchivo) =>{
          console.log('respondio');

          if (error){
            console.log('Error', error);
            console.log('contenidoHtml', contenidoHtml);
            return response.send('Error');
          } else {
            contenidoHtml= contenidoDelArchivo;
            return response.send(contenidoHtml);
          }
        }
    )
  }
}
