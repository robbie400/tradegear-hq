// Load the TypeScript content modules without starting Next.js.
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = function (module, filename) {
  const source = fs.readFileSync(filename, 'utf8');
  module._compile(ts.transpileModule(source, {compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017,
    esModuleInterop: true,
  }}).outputText, filename);
};
