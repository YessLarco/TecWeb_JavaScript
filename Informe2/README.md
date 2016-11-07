## INFORME N°2
***
### MATERIA:        `Tecnologías Web con JavaScript`
### TEMA:           `Uso de CSS`
### FECHA:          `2016-10-25`
### ESTUDIANTE:     `Yessenia Larco`
### PROFESOR:       `Tania Calle - Adrian Eguez`

***
## <a name="indice"></a> Indice de contenidos

- <a href="#objetivos">Objetivos</a>
- <a href="#marco">Marco Teorico</a>
  * <a href="#CSS">CSS</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

___

## Tema

El tema de la Práctica es: **Uso de CSS**

___

## Objetivos

* Aprender CSS para dar estilo a páginas web.
* Conocer el uso de CSS en conjunto con HTML.
* Aprender el uso de hojas de estilo CSS externas.

---

## Marco teórico 
<a name="CSS"></a>**CSS:** siglas en inglés de * **C**ascading **S**tyle **S**heets ("Hojas de estilo en cascada")*, es un lenguaje de hojas de estilo para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado. 

Junto con HTML y JavaScript, CSS es una tecnologia usada por muchos sitios web para crear páginas visualmente atractivas, interfaces de usuario para aplicaciones web, y GUIs para muchas aplicaciones móviles.

CSS ahorra mucho trabajo. Este puede controlar el despliqgue de múltiples páginas web de una sola vez. Hojas de estilo externas son almacenadas en archivos CSS.


---
## Desarrollo de la Práctica

* Para el desarrollo de esta práctica, hay que empezar recordando la estructura básica de una página web con HTML. Se crea un archivo con esta extensión. Posteriormente se procede primero a instalar el servidor web para poder mostrar nuestros archivos, esto se lo realiza con el comando *npm install -g http-server* (-g es para instalarlo globalmente y no solo en la dirección especificada)

<p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 1. Instalación del servidor web*
</p>
         
* Como segundo paso se procede a levantar el servidor web en la carpeta donde se encuentran nuestros archivos, haciendo uso del comando *http-server -c10* (-c10 nos permite especificar que se borre la caché cada 10 milisegundos)

<p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 2. Iniciación del servidor web*
</p>

* Una vez levantado el servidor, se procede a hacer las pruebas de CSS con código HTML.

* Se pone una estructura básica de una página HTML, con su etiquetado. Dentro del tag ```<head>``` se puede utilizar el tag ```<style>``` para dar formato a la página web, esto se lo puede hacer poniendo un nombre cualquiera a un TAG que modifiquen las diferentes propiedades de los tags de HTML, como se muestra en la figura 3. 

<p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 3. Ejemplo de declaración de TAG*
</p>

* Estos tags pueden ser cualquiera de los que tiene el lenguaje HTML, como por ejemplo el color de fondo (background-color) de toda la página (```<html>```), sólo de un título (```<h1>```) o de un párrafo completo (```<p>```). El siguiente imagen se puede ver como se definen los tags y dentro el valor de la propiedad que se desea cambiar.

<p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 4. Ejemplo de TAG con asignación de valor a la propiedad*
</p>

* Si esto lo ejecutamos en el browser, se puede ver como cada uno de los tags tienen diferentes colores de fondo, así como lo definimos.
<p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 5. Visualización del estilo*
</p>

* Otra forma en la que se puede poner estilos a una hoja es declarando clases, en la cual se pone su nombre y de igual forma se puede dar valores a propiedades. En la figura 6 se muestra un ejemplo de como se las declara. Estas se las puede llamar por su nombre o por ID.
<p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 6. Declaración de clases*
</p>

* Para poder hacer uso de estas clases, dentro del tag HTML se hace referencia a ellas utilizando sus propiedades de la siguiente manera:
 1. Si se hace el llamado de una propiedad por medio de su nombre, dentro del tag se hace uso de la propiedad *class=""*.
 <p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 7. Llamado de clase por su nombre*
</p>
 2. En cambio si se desea hacerlo por medio del ID, se hace uso de la propiedad *id=""*
 <p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 8. Llamado de clase por su ID*
</p>
 
 Sea como se haga el llamado de las clases, estas funcionan igual, a continuación se muestra el resultado del cambio de estilo. (Figura 9)
 <p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 9. Cambio de estilo de TAGs*
</p>
 
* Haciendo uso de CSS, se tiene una ventaja y es que se puede hacer una hoja con extensión .css, en donde se declaren todos los tags y clases de estilos. Para esto se necesita hacer una referencia al archivo mediante el tag ```<link>``` en donde las clases ```rel=""``` permiten definir que se trata de una hoja de estilos y ```href=""``` es el path de donde se encuentra la hoja a la que se quiere acceder.
 <p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 10. Referenciación a una hoja de estilos externa*
</p>
 
* Hay que recordar que la hoja de estilos debe estar en la misma carpeta donde se encuentra albergado el archivo .html. Además se pueden crear infinitas hojas de estilo y carpetas. 
* No se puede acceder a una carpeta que esté superior a la que se inició el servidor web, solo se puede a las que están por debajo (Jerarquía).
* Otra ventaja que se tiene con CSS es que se pueden definir etiquetas con cualquier nombre, por ejemplo ```<cualquiera>``` y luego en la hoja de estilos se pueden cambiar sus propiedades.
  <p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 11. Definición de una etiqueta*
</p>

* También se tienen ya hojas de estilos predefinidas para cada etiqueta, estas se las encuentra en BootStrap. Para hacer uso de estas hojas ya predefinidas se necesita hacer referencia al link de la página en la que se encuentra, esta referencia es similar a hacer a una hoja de estilos normal.
  <p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 12. Referencia a una hoja de BootStrap*
</p>
 
 * Estas hojas tienen definidos sus propios estilos para cada tag, inlcuso para el tamaño y estilo de letra, como se muestra en la siguiente figura, donde se muestra la página en el browser.
   <p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 13. Visualización de estilos de BootStrap*
</p>

* Dentro de la etiqueta ```<div>``` se pueden definir diferentes clases para poder armar una tabla. Se tienen la clase ```container``` que es la que va a contener a las otras clases, en si se puede decir que es la tabla. Luego se tiene la clases ```row``` la cual define las filas de la tabla y la clase ```column``` la cual define las columnas.
* La clase *container* puede tener varios *row* y a su vez la clase *row* puede tener varias clases *column*.
* A la clase *column* se le pueden definir diferentes tamaños, dependiendo del que sea a cierto numero de pixeles las columnas se irán haciendo pequeñas y poniéndose hacia abajo. En la figura a continuaci'on se explica esto.
   <p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 14. Definicion de container*
</p>

* Si se tiene a la tabla en un tamaño grande se pueden visualizar todas las columnas definidas, pero mientras se la va haciendo pequeña se puede ir viendo como se van haciendo pequeñas.
   <p align="center">
<img src="Graficos/http-protocolo-peticion.png">
</p>
<p align="center">
*Figura 15. Visualización la clase container*
</p>

* Esta característica de la clase *column* es muy útil sobre todo cuando se hace a la página responsive.

<a href="#indice">Volver al Indice</a>

 ----
## Conclusiones y Recomendaciones

- El legunaje CSS es aquel que nos permite dar diferentes estilos a las etiquetas de HTML definiendo ya sea clases o etiquetas y dentro de estas cambiando el valor de sus propiedades.
- El uso de hojas de estilo externas hace que el código de la página no se torne muy largo y hace más fácil el control del diseño.
- Existen estilos de páginas predeterminados que sin duda ayudaran a ahorrar tiempo en el momento de estructurar una página, ya que no se tendrá que pensar en que diseño se le va a dar.

- Se recomienda el uso de páginas predeterminadas, siempre y cuando estos estilos sean de libre uso.
- Hay que tener en cuenta que para referenciar una hoja de estilo dentro del código solo se pueden hacer de archivos que en jeraquía estén por debajo del path donde nos encontremos.
- Es muy recomendable hacer tomar en cuenta los tamaños de las etiquetas que se usan y tratar en lo posible que sea compatible con la propiedad responsive.
  
  <a href="#indice">Volver al Indice</a>
***

##Gracias por la atención

#####Autor: Yessenia Larco