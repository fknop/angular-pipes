SystemJS.config({
  baseURL: "/",
  paths: {
    "app": "src",
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  packages: {
    "src/boolean": {
      "main": "index",
      "defaultExtension": "ts"
    },
    "src/array": {
      "main": "index",
      "defaultExtension": "ts"
    },
    "src/string": {
      "main": "index",
      "defaultExtension": "ts"
    },
    "src/object": {
      "main": "index",
      "defaultExtension": "ts"
    },
    "src/math": {
      "main": "index",
      "defaultExtension": "ts"
    }
  },
  map: {
    "@angular/testing": "jspm_packages/npm/@angular/core@2.1.0/testing.js"
  }
});
