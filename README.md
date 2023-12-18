# Astro Start

```sh
git clone https://github.com/supremacia/astro-start.git
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/supremacia/astro-start) [![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/supremacia/astro-start)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
|   └── favicon.svg
|
├── src/
|   ├── assets/
│   |   ├── css
│   |   |   ├── root.css
│   |   |   ├── layout.css
│   |   |   ├── reset.css
│   |   |   └── style.css
|   |   |
│   |   └── js
│   |       └── app.ts
|   |
|   ├── components/
│   |   ├── Footer.astro
│   |   ├── Head.astro
│   |   ├── Header.astro
│   |   └── Utils/
│   |       ├── Utils.astro
│   |       ├── utils.css
│   |       └── utils.ts
|   |
|   ├── layouts/
│   |   └── Layout.astro
|   |
│   └── pages/
│       ├── index.astro
│       ├── signin.astro
│       └── 404.astro
|
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

Author site: https://rocha.rf.gd
