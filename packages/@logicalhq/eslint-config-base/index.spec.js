const { CLIEngine } = require('eslint');

it('loads the config successfully', () => {
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js'
  });

  const code = 'const foo = false;\nconst bar = foo => foo;\nbar(foo);\n';

  expect(cli.executeOnText(code).errorCount).toBe(0);
});
