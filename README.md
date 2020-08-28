# Astronomer ESLint Config

Add `eslint` and `@astronomer/eslint-config-astro` as a `devDependency` to your project:

```bash
yarn add eslint @astronomer/eslint-config-astro --dev
```

Add a `lint` script in your project `package.json` file:

```json
{
  "name": "stargazer",
  "scripts": {
    "lint": "eslint src"
  }
}
```

To lint the `src` directory of your project run:

```bash
yarn run lint
```
