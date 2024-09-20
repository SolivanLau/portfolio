<div align="center">
    <img src="./assets/graphics/slLogo.svg" alt="Solivan Lau Logo" width="60">
</div>

# Portfolio Overview

This is a portfolio built with HTML, CSS, JavaScript and SCSS, showcasing projects about my technical skills in web and email development.

## Usage

Naming conventions in HTML, CSS and JavaScript all use `camelCase`.

This project uses Vite as a build tool to:

-   launch a live development server on [localhost:5173](http://localhost:5173/)
-   minify and optimize `html` `css` and `js` files during build.
-   bundle from `src` directory to the `/dist` folder for production.

To get started, open your cli of choice and run the following script to install the project

```shell
# install project dependencies
pnpm install
```

To start the development server on [localhost:5173](http://localhost:5173/), run the `dev` command :

```shell
# watch and compile at localhost:5173
pnpm dev
```

`scss` files are included in Hot Module Replacement (HMR) with Vite. Feel free to take a look at the script in `package.json` file for more details.

## SCSS Structure

SCSS organization is loosely adapting Kitty Giraudel's SCSS architecture from [SASS Guidelines](https://sass-guidelin.es/). The idea is to have a few folders separating partial functions, making styles easily maintainable and scalable.

As a general overview:

-   `sass/abstracts` contains normalize, variables and utilities (mixins and global classes).
-   `sass/base` contains global styles.
-   `sass/pages` contains sub-folders dedicated to each page, home and email, each having partials for each major section of the page.
-   media queries are coded within their respective partial - section by section using the responsive style mix-in.

Each partial folder has an `index.scss` file forwarding all partials to be used in the main `styles.scss`.

## JS Structure

Each page has its own dedicated `.js` file in `/scripts`, using ES6 Import syntax to bring in necessary modules per page from `/scripts/modules`.

```HTML
  <!-- to be added at the end of each HTML file -->
  <script type="module" src="./scripts/index.js"></script>
```
