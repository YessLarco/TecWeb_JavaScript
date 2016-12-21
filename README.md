# Repositorio de Tecnologías Web con Js

Este repositorio forma parte del [curso de tecnologías web](https://github.com/adrianeguez/Tec_Web_Js_2016_B)


## Comando importantes

## Instalar sailsjs

Sailsjs es un servidor web que permite el manejo de bases de dato en linea sin necesidad de instalar
...

>npm install -g sails
...

## Crear un proyecto en SAilsjs
...
>sail new NombreProyecto
...

## Levantas el servidor

´´´
>sails lift
´´´
´´´
>node app.js
´´´

el sails les pide opciones si no estann definidas, las opciones son:
-1: SAFE MODE no se va a alterar la base de daros
-2: ALTER MODE se va alteras la base de datos si nosotros hicimos cambios en los modelos por ejemplo
-3: DELETE MODE borra todos los datos de la BDD y vuelve a crear los modelos

## Servidor Web de sails
el servidor web de sails se encuentra ubicado en la carpeta **assets**

## Grunt (i dont know)

## Views de la carpeta de mi proyecto
- Los archivos ejs son templates de javascript para los errores del servidor

## Generar controladores en Sailsjs
Para generar controladores se utiliza el siguiente comando
´´´
>sails generate controller NombreControlador
´´´

## Generador de APIs

>sails generate api NombreApi

Un api es la fusion de un **controlador**  y de un **modelo**

## Generador de modelo

>sails generate model NombreModelo

