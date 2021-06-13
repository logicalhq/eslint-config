const { ESLint } = require('eslint');

it('loads the config successfully', async () => {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: 'index.js'
  });

  const [result] = await eslint.lintFiles('./sample.ts');
  expect(result.errorCount).toBe(0);
});
