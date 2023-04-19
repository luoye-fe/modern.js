import appTools, { defineConfig } from '@modern-js/app-tools';

export default defineConfig({
  plugins: [appTools({ bundler: 'experimental-rspack' })],
  runtime: {
    router: true,
    state: false,
  },
  output: {
    disableMinimize: true,
  },
  server: {
    ssr: true,
  },
});
