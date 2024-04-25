<div align="center">
    <img src="./assets/graphics/slLogo.svg" alt="Solivan Lau Logo" width="60">
</div>

# Portfolio Overview

This is a portfolio built with HTML, CSS, JavaScript and SCSS, showcasing projects about my technical skills in web and email development.

## Usage

Naming conventions in HTML, CSS and JavaScript all use `camelCase`.

This project uses dart sass to compiled from `/styles/sass/styles.scss` to `/styles/css/styles.css` with **no source map**.

Open your cli and run the following script to have sass watch and compile edits live:

```shell
# watch and compile sass during dev process
npm run sass
```

Feel free to take a look at the script in `package.json` file for more details.

## SCSS Structure

SCSS organization is loosely adapting Kitty Giraudel's SCSS architecture from [SASS Guidelines](https://sass-guidelin.es/). The idea is to have a few folders separating partial functions, making styles easily maintainable and scalable.

As a general overview:

-  `sass/abstracts` folder contains normalize, variables and utilities (mixins and global classes).
-  `sass/base` folder contains global styles (global styles, utility classes, typography)
-  `sass/pages` folder contains sub-folders dedicated to each page, home and email, each having partials for each major section of the page.
-  media queries are dealt with in their respective partial - section by section.

Each partial folder has an `index.scss` file forwarding all partials to be used in the main `styles.scss`

## JS Structure

Each page has its own dedicated `.js` file in `/scripts`, using ES6 Import syntax to bring in necessary modules per page from `/scripts/modules`.

```HTML
  <!-- to be added at the end of each HTML file -->
  <script type="module" src="./scripts/index.js"></script>
```
