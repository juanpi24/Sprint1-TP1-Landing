# TP 2 - RoboKids - Landing Page de Robótica Educativa

## Qué es
Landing page interactiva para una academia de robótica educativa dirigida a niños y adolescentes. Desarrollada con React y Tailwind CSS v4, traduce una maqueta visual diseñada previamente con Inteligencia Artificial a componentes desacoplados y reutilizables en React.

## Estructura de Componentes
El proyecto se encuentra organizado modularmente dentro de `src/components/`:

* **`Navbar.jsx`**: Menú de navegación superior que itera los enlaces desde `src/data/navLinks.js` con `.map()`.
* **`Hero.jsx`**: Encabezado principal con propuesta de valor, título de impacto y botones con llamadas a la acción (CTA) y animación con motion.
* **`Courses.jsx`**: Contenedor de cursos que importa el listado de cursos desde `src/data/courses.js` y mapea los datos con un condicional card que va a mostrar el badge.
* **`Benefits.jsx`**: Tarjeta individual de beneficios, con un renderizado condicional de clase.
* **`Footer.jsx`**: Pie de página semántico con derechos reservados y créditos de la academia.
* **`ContactForm.jsx`**: Formulario de contacto simple con boton.

## Cómo correrlo

1. Clonar el repositorio e ingresar a la carpeta del proyecto:
   ```bash
   git clone https://github.com/juanpi24/Sprint1-TP1-Landing 
   cd Sprint1-TP1-Landing

2. Instalar las dependencias:
    ```bash
    npm install

3. Iniciar el servidor de desarrollo local:
    ```bash
    npm run dev

## 🚀 Deploy online (Netlify)
* [Ir al Porfolio ](https://sprint1-tp1-landing.netlify.app/) 

## Uso de IA
* Herramientas utilizadas: Google Stitch para la generación visual del prototipo UI y Copilot para asistencia en redacción de prompts y Claude codigo.
* Qué generé y qué corregí: Utilicé la IA para estructurar el archivo de datos inicial **`src/data/skills.js`**. Diseñé el layout inicial en Stitch. Exporté el HTML plano y la captura visual para la carpeta **`_design/`**. Traduje todo ese código estático a mano y con ayuda de IA Claude, fragmentándolo en 6 componentes independientes de React, definiendo arreglos de datos en **`src/data/`** y conectando el paso de props.

## Lo que me costó
* Adaptar la configuración de Tailwind CSS en **`src/index.css`** utilizando la directiva **`@theme`** para definir los colores globales del proyecto en un solo lugar. Lo resolví consultando la documentación oficial de Tailwind v4. También me costo generar el prompt para Stich.