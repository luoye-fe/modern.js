const path = require('path');
const { readFile, writeFile } = require('fs/promises');
const { transformAsync } = require('@babel/core');
const { performance } = require('perf_hooks');

async function compileRetryRuntime() {
  const { minify } = await import('terser');
  const runtimeCode = await readFile(
    path.join(__dirname, '../dist/runtime/assetsRetry.js'),
    'utf8',
  );
  const distPath = path.join(__dirname, '../compiled/assetsRetry.js');
  const { code } = await transformAsync(runtimeCode, {
    presets: [
      [
        '@babel/preset-env',
        {
          targets:
            'iOS >= 9, Android >= 4.4, last 2 versions, > 0.2%, not dead',
        },
      ],
    ],
  });
  const { code: minifiedRuntimeCode } = await minify(
    {
      [distPath]: code,
    },
    {
      ecma: 5,
    },
  );
  await writeFile(distPath, minifiedRuntimeCode);
}

async function compile() {
  const startTime = performance.now();
  await compileRetryRuntime();
  // eslint-disable-next-line no-console
  console.log(
    `Compiled assets retry runtime code. Time cost: ${(
      performance.now() - startTime
    ).toFixed(2)}ms`,
  );
}

compile();
