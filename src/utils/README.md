#
- https://markus.oberlehner.net/blog/distributed-vue-applications-loading-components-via-http/
- https://cli.vuejs.org/guide/build-targets.html#async-web-component


```
npx vue-cli-service build --target lib --formats umd-min --no-clean --dest server/components/Browser --name "Browser.[chunkhash]" src/components/browser/Browser.vue```

npx vue-cli-service build --target lib --formats umd-min --no-clean --dest server/components/Browser --name "Browser" src/components/browser/Browser.vue
