## INFORME N°1
***
### MATERIA:        `Tecnologías Web con JavaScript`
### TEMA:           `Introducción a la Web - HTML`
### FECHA:          `2016-10-18`
### ESTUDIANTE:     `Yessenia Larco`
### PROFESOR:       `Tania Calle - Adrian Eguez`

***
## <a name="indice"></a> Indice de contenidos

- <a href="#objetivos">Objetivos</a>
- <a href="#marco">Marco Teorico</a>
  * <a href="#XML">XML</a>
  * <a href="#WWW">WWW</a>
  * <a href="#HTTP">Protocolo HTTP</a>
  * <a href="#MetodosHTTP">Métodos HTTP</a>
  * <a href="#codigos">Códigos de respuesta HTTP</a>
  * <a href="#her-insp">Herramienta Inspeccionar</a>
  * <a href="#postman">Postman</a>
  * <a href="#tags">Tags HTML</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

___

## Tema

El tema de la Práctica es: **Introducción a la Web - HTML**

___

## Objetivos

* Conocer los conceptos básicos en torno a una página web.
* Conocer qué es W3C y W3C Schools y para qué sirve.
* Conocer el funcionamiento de los HTTP Methods y los codigos de HTTP.
*  Aprender el uso de lenguaje HTML y las etiquetas de HTML.

---

## Marco teórico 
<a name="XML"></a>**Lenguaje de marcado XML:** siglas en inglés de *eXtensible Markup Language ("lenguaje de marcas Extensible")*, es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium (W3C) utilizado para almacenar datos en forma legible. XML fue diseñado para almacenar y transportar datos.

<a name="WWW"></a>**WWW:** *World Wide Web (WWW)* o red informática mundial es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esos sitios usando hiperenlaces.

<a name="W3C"></a>**W3C: **  *Consorcio WWW*, en inglés: *World Wide Web Consortium (W3C)*, es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo. Fue creado en octubre de 1994.

<a name="HTTP"></a>**Protocolo HTTP: ** *Protocolo de Transferencia de HiperTexto (Hypertext Transfer Protocol)* es un sencillo protocolo cliente-servidor que articula los intercambios de información entre los clientes Web y los servidores HTTP. Fue propuesto por Tim Berners-Lee, atendiendo a las necesidades de un sistema global de distribución de información como el World Wide Web.

**HTTP** se basa en sencillas operaciones de solicitud/respuesta. Un cliente establece una conexión con un servidor y envía un mensaje con los datos de la solicitud. El servidor responde con un mensaje similar, que contiene el estado de la operación y su posible resultado. Todas las operaciones pueden adjuntar un objeto o recurso sobre el que actúan; cada objeto Web (documento HTML, fichero multimedia o aplicación CGI) es conocido por su URL.

![Petición HTTP](https://raw.githubusercontent.com/YessLarco/TecWeb_JavaScript/1_HTML/Informe1/Gr%C3%A1ficos/http-protocolo-peticion.png "HTTP")
*Figura 1. Ejemplo Petición HTTP*

<a name="MetodosHTTP"></a>**Métodos HTTP: ** permiten realizar diferentes tipos de peticiones *REQUEST/RESPONSE* a un servidor dependiendo de las necesidades de la aplicación. Los diferentes tipos de metodos son: 
- ***GET:*** Solicita el recurso ubicado en la URL especificada.
- ***HEAD:*** Solicita el encabezado del recurso ubicado en la URL especificada.
- ***POST:*** Envía datos al programa ubicado en la URL especificada
- ***PUT:*** Envía datos a la URL especificada
- ***DELETE:*** Borra el recurso ubicado en la URL especificada

<a href="#codigos"></a>**Codigos de respuesta HTTP:** Son los códigos que se ven cuando el navegador no puede mostrar la página solicitada. El código de respuesta está formado por tres dígitos: el primero indica el estado y los dos siguientes explican la naturaleza exacta del error.

Estos códigos pueden ser:
- ***1xx:*** Respuestas informativas, indicando que la petición se recibió y se está procesando. El más común es el 100.

- ***2xx:*** Respuestas correctas, donde indica que la solicitud se procesó correctamente. El típico es el 200 (OK).

- ***3xx:*** Respuestas de redirección, indica que el cliente deberá realizar más acciones para finalizar esta solicitud.

- ***4xx:*** Errores causados por el cliente, donde indica que ha ocurrido un error cuando se estaba procesando la solicitud probablemente porque el cliente hizo algo mal. Generalmente porque la dirección URL es incorrecta, que es el error más típico, el 404. También el 403 - Forbidden (prohibido) es usual.

- ***5xx:*** Errores causados por el servidor, con esto indica que ha ocurrido un error al procesar la solicitud por un fallo en en el servidor. La más usual es 500 - Internal Server Error.

<a name="her-insp"></a>**Herramienta Inspeccionar:** es una herramienta proporcionada por los navegadores que permite identificar con precisión el código HTML de todos los elementos que se ven en una página web.

<a name="postman"></a>**Postman:** herramienta que permite revisar la comunicacion entre las APIs.

<a name="tags"></a>**Tags HTML:** son una marca con clase que delimita una región en los lenguajes basados en XML.

---
## Desarrollo de la Práctica

En esta práctica se ve la estructura básica de una página web con HTML.

Se procede ha hacer la declaración del documento HTML, el cual tiene la siguiente estructura:
<p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
*Figura 2. Declaración de un documento HTML*

A continuación se hace uso de las etiquetas básicas de HTML.

**1. HEAD (```<h></h>```):** 

Este tag sirve para definir encabezados van desde el ```<h1>``` hasta el ```<h6>```, donde ```<h1>``` es el de mayor tamaño e importancia y ```<h6>``` es el más pequeño y menos importante.
![Imagen Cabeceras](Graficos/cabeceras1 "Cabecera") ![](https://raw.githubusercontent.com/YessLarco/TecWeb_JavaScript/1_HTML/Informe1/Gr%C3%A1ficos/http-protocolo-peticion.png)

*Figura 3. Uso de cabeceras*

**2. LISTAS (```<ul>```)** 

Una lista en codigo HTML se la declara haciendo uso del tag ```<ul>```, para listas no ordenadas, ```<ol>``` para listas ordenadas. Además se debe hacer uso del tag ```<li>``` dentro de los tags anteriores para listar cada uno de los elementos.
![Imagen Cabeceras](https://raw.githubusercontent.com/YessLarco/TecWeb_JavaScript/1_HTML/Informe1/Gr%C3%A1ficos/http-protocolo-peticion.png "Cabecera") ![](https://raw.githubusercontent.com/YessLarco/TecWeb_JavaScript/1_HTML/Informe1/Gr%C3%A1ficos/http-protocolo-peticion.png)
*Figura 4. Uso de listas ordenadas y desordenadas*

**3. PÁRRAFOS (```<p>```)**

El tag ```<p>``` se usa redactar todo el contenido necesario como un párrafo.
![Imagen Cabeceras](https://raw.githubusercontent.com/YessLarco/TecWeb_JavaScript/1_HTML/Informe1/Gr%C3%A1ficos/http-protocolo-peticion.png "Cabecera") ![](https://raw.githubusercontent.com/YessLarco/TecWeb_JavaScript/1_HTML/Informe1/Gr%C3%A1ficos/http-protocolo-peticion.png)
*Figura 5. Ejemplo de creacion de parrafos*

**4. IMÁGENES (<img src="">)**

Para referenciar una imagen se utiliza el tag  ```<img src="" alt="">``` en donde ```scr``` hace referencia a la direccion de ubicacion de la imagen y ```alt``` es un texto auxiliar el cual sirve para describir el contenido de la imagen o se pueden enviar mensajes de error en caso de que no haya sido posible encintrarla.
<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase1-HTML/Informe%201/Imagenes/Imagen.png">
</p>
*Figura 6. Ejemplo de insercion de imagenes*

**5. LINKS ** 

Se hace uso del tag  ```<a href="" target="">```. En donde ```href``` hace referencia a la pagina a la cual se quiere acceder y ```target``` determina el destino de apertura, es decir, una nueva pestaña, una nueva ventana, en la misma ventana, etc.
<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase1-HTML/Informe%201/Imagenes/Links.png">
</p>
*Figura 7. Ejemplo de creacion de links*

**6. CLASES**

Dentro de los tags se pueden definir clases que determinan el comportamiento que tendrá el elemento contenido por el tag. Como por ejemplo el estilo que este tendra. para poder hacer uso de dichas clases se debe dentro del tag definir la clase a utilizar y el valor de dicha clase, ejemplo:
```
<h2 style="background-color:pink">Listas desordenadas</h2>
    
```
<p align="center">
<img src="https://raw.githubusercontent.com/mauseb20/Tec_Web_MC/Clase1-HTML/Informe%201/Imagenes/Clases.png">
</p>
*Figura 8. Ejemplo de uso de la clase ```style```*

<a href="#indice">Volver al Indice</a>
***
<a name="conrec"></a>

## Conclusiones y Recomendaciones

- La WWW es un recurso muy poderoso, ya que nos permite compartir mucha información hacia el mundo. Esta información puede ser texto, imágenes, videos, etc.
- Existen organizaciones que regulan y presentan información acerca de Intenet, uno de ellos es W3C.
- HTTP es el protocolo usado en la red para obtener recursos compartidos y de igual forma para compartirlos.
- HTTP contiene métodos que son útiles para decir a un servidor que es lo que se desea. Pero no siempre las respuestas que se reciben del servidor son las mismas, es por eso que HTTP hace uso de códigos de estado que son los que informan al usuario que es lo que pasó en caso de fallo en la petición de un recurso.
- HTML es un lenguaje de marcado que se usa para dar forma a las páginas web que se encuentra alojadas en un servidor y las cuáles se puede acceder por medio de un browser.
  
  
  - Para estructurar una página web, es necesario el uso de un editor de texto, como por ejemplo Brackets
  - Existen herramientas que facilitan el uso de HTML, una de ellas es EMMET que se la puede añadir a Brackets, con la cual no se nos olvidaran cerrar los tags en una estrutura HTML.
  
  <a href="#indice">Volver al Indice</a>
***

##Gracias por la atención

#####Autor: Yessenia Larco