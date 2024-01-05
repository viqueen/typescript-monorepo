## typescript-monorepo

Monorepo template for TypeScript projects

### environment

- **[nvm](https://github.com/nvm-sh/nvm)** to manage node versions.

```bash
brew install nvm
```

- **[yarn](https://yarnpkg.com/)** as node package manager

```bash
brew install yarn
```

### development

- start backend

```bash
yarn workspace @product-be/app dev
```

- start frontend

```bash
yarn workspace @product-fe/app dev
```

### house-keeping

- build it

```bash
yarn build
```

- format it

```bash
yarn format
```

- lint it

```bash
yarn lint
yarn lint --fix
```

- test it

```bash
yarn test
```
