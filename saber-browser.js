/* eslint-disable import/no-extraneous-dependencies */

import 'tailwindcss/base.css';
import 'tailwindcss/components.css';

import Vue from 'vue';
import TheWrap from './components/TheWrap.vue';

((function registerGlobalAppComponents() {
  const appComponents = require.context('./components', false, /App.*\.vue$/);

  appComponents.keys().forEach((fileName) => {
    const componentConfig = appComponents(fileName);
    const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '');

    Vue.component(componentName, componentConfig.default || componentConfig);
  });
})());

export default (context) => {
  context.setRootComponent(TheWrap);

  if (process.browser) {
    const nprogress = require('nprogress'); // eslint-disable-line global-require
    require('nprogress/nprogress.css'); // eslint-disable-line global-require

    const loadedPages = [];

    context.router.beforeEach((to, from, next) => {
      if (!loadedPages.includes(to.path)) nprogress.start();
      next();
    });

    context.router.afterEach((to) => {
      loadedPages.push(to.path);
      nprogress.done();
    });
  }
};
