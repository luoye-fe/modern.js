import path from 'path';
import type { Page } from 'puppeteer';
import {
  launchApp,
  killApp,
  getPort,
  modernBuild,
  modernServe,
  openPage,
} from '../../../utils/modernTestUtils';
import {
  nestedRouteOverPage,
  renderDynamaticRoute,
  renderPageRoute,
  renderSelfRoute,
  supportDefineInit,
  supportGlobalLayout,
  supportLayout,
  supportLoaderForCSR,
  supportNestedRouteAndPage,
} from './supports';

const appDir = path.resolve(__dirname, '../');

describe('dev', () => {
  let app: unknown;
  let appPort: number;
  let page: Page;
  const errors: string[] = [];
  beforeAll(async () => {
    appPort = await getPort();
    app = await launchApp(appDir, appPort, {}, {});
    page = await openPage();
    page.on('pageerror', error => {
      errors.push(error.message);
    });
  });

  describe('self control route', () => {
    test('should render correctly', async () =>
      renderSelfRoute(errors, appPort, page));
  });

  describe('pages routes', () => {
    test('render pages route correctly', async () =>
      renderPageRoute(errors, appPort, page));

    test('render dynamic pages route correctly', async () =>
      renderDynamaticRoute(errors, appPort, page));

    test('support global layout', async () =>
      supportGlobalLayout(errors, appPort, page));

    test('support _layout', async () => supportLayout(errors, appPort, page));
  });

  describe('support both page route and nested route', () => {
    test('nested route has higher priority', async () =>
      nestedRouteOverPage(errors, appPort, page));

    test('support works together', async () =>
      supportNestedRouteAndPage(errors, appPort, page));
  });

  describe('global configuration', () => {
    test('support app init', async () =>
      supportDefineInit(errors, appPort, page));
  });

  afterAll(async () => {
    await killApp(app);
    await page.close();
  });
});

describe('build', () => {
  let appPort: number;
  let app: unknown;
  let page: Page;
  const errors: string[] = [];

  beforeAll(async () => {
    appPort = await getPort();
    await modernBuild(appDir);
    app = await modernServe(appDir, appPort, {
      cwd: appDir,
    });
    page = await openPage();
    page.on('pageerror', error => {
      errors.push(error.message);
    });
  });

  describe('self control route', () => {
    test('should render correctly', async () =>
      renderSelfRoute(errors, appPort, page));
  });

  describe('pages routes', () => {
    test('render pages route correctly', async () =>
      renderPageRoute(errors, appPort, page));

    test('render dynamic pages route correctly', async () =>
      renderDynamaticRoute(errors, appPort, page));

    test('support global layout', async () =>
      supportGlobalLayout(errors, appPort, page));

    test('support _layout', async () => supportLayout(errors, appPort, page));
  });

  describe('suppot both page route and nested route', () => {
    test('nested route has higher priority', async () =>
      nestedRouteOverPage(errors, appPort, page));

    test('support works together', async () =>
      supportNestedRouteAndPage(errors, appPort, page));
  });

  describe('loader', () => {
    test('support loader for csr', () =>
      supportLoaderForCSR(errors, appPort, page));
  });

  describe('global configuration', () => {
    test('support app init', async () =>
      supportDefineInit(errors, appPort, page));
  });

  afterAll(async () => {
    await killApp(app);
    await page.close();
  });
});
