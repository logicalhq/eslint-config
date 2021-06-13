<h1 align="center">@logicalhq/eslint-config-nestjs</h1>
<br>
<p align="center">
  <img src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" width="150" alt=""/>
</p>

<p align="center">
  The ESLint config we use with NestJS at <a href="https://logical.work">Logical</a>.
</p>

<p align="center">
  <a href="https://logical.work">
    <img src="https://logicalhq.s3.ca-central-1.amazonaws.com/badges/logical-badge.svg" alt="Logical"/>
  </a>
  <img src="https://flat.badgen.net/npm/v/@logicalhq/eslint-config-nestjs" alt="Version"/>
  <a href="https://circleci.com/gh/logicalhq/eslint-config">
    <img src="https://flat.badgen.net/github/status/logicalhq/eslint-config/main/ci/circleci" alt="CircleCI Status"/>
  </a>
</p>

<hr>

## Getting Started

Make sure you have those peer dependencies installed:

```bash
yarn add -D eslint eslint-plugin-import eslint-plugin-jest eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Then install the plugin:

```bash
yarn add -D @logicalhq/eslint-config-nestjs
```

Don't forget to also update your `.eslintrc` configuration file:

```
{
  "extends": "@logicalhq/eslint-config-nestjs"
}
```

## License

This package is licensed under [BSD 2-Clause](https://spdx.org/licenses/BSD-2-Clause.html).
