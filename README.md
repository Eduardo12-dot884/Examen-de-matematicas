# MateLab — quiz interactivo de matemáticas

Aplicación web hecha con HTML5, CSS3 y JavaScript puro. No usa frameworks, servicios remotos ni bibliotecas externas.

## Archivos

- `index.html`: estructura de la aplicación.
- `style.css`: diseño adaptable y temas claro/oscuro.
- `script.js`: resúmenes extraídos del PDF, banco local de reactivos, corrección, adaptación y almacenamiento.

## Cómo abrirla

1. Descarga `index.html`, `style.css` y `script.js` en una misma carpeta.
2. Abre `index.html` en un navegador actualizado.
3. El progreso se guarda en el almacenamiento local de ese navegador y dispositivo.

## Publicarla en GitHub Pages

1. Crea un repositorio y sube los tres archivos a la raíz.
2. Abre **Settings → Pages**.
3. En **Build and deployment**, elige publicar desde la rama principal y la carpeta raíz (`/root`).
4. Guarda los cambios y abre la URL que GitHub Pages muestre.

## Funciones incluidas

- Resúmenes por tema y apartado, con referencias a las páginas del PDF.
- Modos de práctica, adaptativo y examen; evaluación por unidad y examen final.
- Selección aleatoria de reactivos y de opciones, máximo de 20 preguntas por tema en un intento individual.
- Ajuste de dificultad según los resultados, explicación inmediata en práctica y corrección al final del examen.
- Registro de errores, preguntas marcadas como difíciles, progreso, racha e historial mediante `localStorage`.
- Modo claro/oscuro, diseño adaptable, navegación por teclado y opción de reiniciar con confirmación.

## Nota sobre una operación del PDF

La página 55 muestra `500 − 186` con resultado `377`, aunque no coincide con la operación. La aplicación señala la discrepancia y utiliza el resultado correcto: `314`.
