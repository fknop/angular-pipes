SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "app": "src"
  },
  map: {
    "@angular/testing": "jspm_packages/npm/@angular/core@2.0.0-rc.1/testing.js"
  }
});
