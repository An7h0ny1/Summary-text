
https://github.com/An7h0ny1/Summary-text/assets/91570972/dc01db97-57a0-40f5-921c-3b54191f2c87


# Resumen de Texto Automático con Django
Este proyecto consiste en una aplicación web desarrollada con Django que permite resumir automáticamente texto en español. Utiliza la biblioteca Sumy para realizar el procesamiento de texto y generar resúmenes.

# Instalación
Clona este repositorio en tu máquina local:

> git clone https://github.com/An7h0ny1/Summary-text.git

## Configuración
Antes de ejecutar la aplicación, que generes una nueva SECRET_KEY utilizando el comando de <i> startproject </i>

### settings.py
> SECRET_KEY = 'TuNuevaSecretKeyAquí'


## Uso

Ejecuta el servidor de desarrollo de Django:


> python manage.py runserver

 ## Accede a la aplicación en tu navegador web:

>http://localhost:8000/

Ingresa el texto que deseas resumir en el primer cuadro de texto y presiona el botón "Resumir".

El texto resumido se mostrará en el segundo cuadro de texto automáticamente.

## Estructura del Proyecto

### El proyecto está organizado de la siguiente manera:

<ul> 
  <li>procesamiento_texto: Aplicación Django que contiene la lógica principal de procesamiento de texto.</li>
    <ul><li>views.py: Contiene las vistas de Django para procesar el texto y generar resúmenes.</li></ul>
  <li>static: Carpeta que contiene archivos estáticos como scripts JavaScript y hojas de estilo CSS.</li>
    <ul>
      <li>script.js: Script JavaScript para manejar la funcionalidad de ajuste de altura de textarea y contar caracteres.</li>
      <li>style.css: Hoja de estilo CSS para estilizar la interfaz de usuario.</li>
    </ul>
  <li>templates: Carpeta que contiene los archivos HTML de las plantillas de Django.</li>
  <ul>
      <li>index.html: Plantilla HTML que define la interfaz de usuario de la aplicación.</li>
      <li>layout: Carpeta que contiene la plantilla base HTML para la estructura de la página.</li>
    </ul>
</ul>



## Contribución
Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar pull requests con tus mejoras. Asegúrate de seguir las pautas de contribución del proyecto.
