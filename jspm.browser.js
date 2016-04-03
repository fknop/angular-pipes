SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  packages: {
      
      '.': {
          defaultExtension: 'ts'  
      },
      
      'src': {
          defaultExtension: 'ts'
      },
      'test': {
          defaultExtension: 'ts'
      }
  }
});
