# Bundles

**Bundles are not appropriate for production ! Use a module bundler like rollup or closure compiler with the ESM files to allow tree-shaking !**

Since 5.8.0, `angular-pipes` distributes two UMD bundles:

* `bundles/bundle.umd.js` 
* `bundles/bundle.umd.min.js` (minified version)

You can import these in SystemJS for example:

```javascript
// ...
// SystemJS configuration
// ...
map: {
  'angular-pipes': 'node_modules/angular-pipes/bundles/bundle.umd.js'
}
```

Same thing with `bundle.umd.min.js`.


**Note**: To avoid a breaking change, these bundles are not the default `main` file. The standard unbundled JS files will remain the default for now.