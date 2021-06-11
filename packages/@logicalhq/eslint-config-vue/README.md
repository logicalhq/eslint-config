<h1 align="center">@logicalhq/eslint-config-vue</h1>
<br>
<p align="center">
  <img src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" width="150" alt=""/>
</p>

<p align="center">
  The ESLint config we use with Vue at <a href="https://logical.work">Logical</a>.
</p>

<p align="center">
  <a href="https://logical.work">
    <img src="https://logicalhq.s3.ca-central-1.amazonaws.com/badges/logical-badge.svg" alt="Logical"/>
  </a>
  <img src="https://flat.badgen.net/npm/v/@logicalhq/eslint-config-vue" alt="Version"/>
  <a href="https://circleci.com/gh/logicalhq/eslint-config">
    <img src="https://flat.badgen.net/github/status/logicalhq/eslint-config/main/ci/circleci" alt="CircleCI Status"/>
  </a>
</p>

<hr>

## Getting Started

Make sure you have [eslint](https://github.com/eslint/eslint), [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import), [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) installed, then install the plugin:

```bash
yarn add -D @logicalhq/eslint-config-vue
```

Don't forget to also update your `.eslintrc` configuration file:

```
{
  "extends": "@logicalhq/eslint-config-vue"
}
```

## License

This package is licensed under [BSD 2-Clause](https://spdx.org/licenses/BSD-2-Clause.html).
