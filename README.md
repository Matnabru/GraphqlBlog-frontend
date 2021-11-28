# Getting started



Download the repo

```sh
npm i
```

```sh
npm run dev
```

# Missing package-lock.json

Due to heroku deployment package-lock.json had to be removed
rename "package-lock copy.json" to "package-lock.json " if needed


## Envs

Create Your own .env.development and .env.production files in root folder to define environment variables for development and production in this format:

```sh
NEXT_PUBLIC_HOST=https://somegraphqlbackend.com/graphql
```

## Concepts

This repo boilerplate uses nextjs TypeScript Emotion and zeus
