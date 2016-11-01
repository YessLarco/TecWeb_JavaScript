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
  * <a href="#npm">NPM</a>
  * <a href="#xml">XML</a>
  * <a href="#tags">Tags HTML</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

___

## Tema

El tema de la Práctica es: **Introducción a la Web - HTML**

___

## Objetivos

* Conocer los conceptos básicos en torno a una página web.
* Aprender el uso de lenguaje HTML y las etiquetas de HTML.
* Conocer el funcionamiento de los HTTP Methods y los codigos de HTTP.
* Conocer qué es W3C y W3C Schools y para qué sirve.

---

## Marco teórico 
<a name="XML"></a>**Lenguaje de marcado XML:** siglas en inglés de *eXtensible Markup Language ("lenguaje de marcas Extensible")*, es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium (W3C) utilizado para almacenar datos en forma legible. XML fue diseñado para almacenar y transportar datos.

<a name="WWW"></a>**WWW:** *World Wide Web (WWW)* o red informática mundial es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esos sitios usando hiperenlaces.

<a name="W3C"></a>**W3C: **  *Consorcio WWW*, en inglés: *World Wide Web Consortium (W3C)*, es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo. Fue creado en octubre de 1994.

<a name="HTTP"></a>**Protocolo HTTP: ** *Protocolo de Transferencia de HiperTexto (Hypertext Transfer Protocol)* es un sencillo protocolo cliente-servidor que articula los intercambios de información entre los clientes Web y los servidores HTTP. Fue propuesto por Tim Berners-Lee, atendiendo a las necesidades de un sistema global de distribución de información como el World Wide Web.

**HTTP** se basa en sencillas operaciones de solicitud/respuesta. Un cliente establece una conexión con un servidor y envía un mensaje con los datos de la solicitud. El servidor responde con un mensaje similar, que contiene el estado de la operación y su posible resultado. Todas las operaciones pueden adjuntar un objeto o recurso sobre el que actúan; cada objeto Web (documento HTML, fichero multimedia o aplicación CGI) es conocido por su URL.

<p align="center">
<img src="\Graficos\http-protocolo-peticion.png">
</p>

        Figura 1. Ejemplo Petición HTTP

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