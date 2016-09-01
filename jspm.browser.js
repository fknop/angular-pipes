SystemJS.config({
  baseURL: "/",
  paths: {
    "app": "src",
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  map: {
    "@angular/testing": "jspm_packages/npm/@angular/core@2.0.0-rc.6/testing.js"
  }
});
