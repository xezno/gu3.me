# gu3.me

This repository contains the code for [my personal website](https://alex.gu3.me/), hosted on [Netlify](https://www.netlify.com/), and written in [JavaScript](https://www.javascript.com/) using the [Nuxt.js](https://nuxtjs.org/) framework.

## Modifying

This website is pretty data-oriented. You can find all the data in the `data` directory. The `data` directory contains the following files:
- `experience.json`: Contains a timeline of work experience.
- `projects.json`: Contains a list of portfolio projects.
- `skills.json`: Contains a list of technical skills.
- `options.json`: Contains misc options (name, avatar URL, etc.)

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```
