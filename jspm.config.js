SystemJS.config({
  devConfig: {
    "map": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.6",
      "es6-shim": "github:es-shims/es6-shim@0.35.0",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha",
      "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.9",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "reflect-metadata": "npm:reflect-metadata@0.1.3",
      "rxjs": "npm:rxjs@5.0.0-beta.11",
      "zone.js": "npm:zone.js@0.6.17"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@4.0.9": {
        "map": {
          "typescript": "npm:typescript@1.8.10"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "npm:rxjs@5.0.0-beta.11": {
        "map": {
          "symbol-observable": "npm:symbol-observable@1.0.2"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  typescriptOptions: {
    "tsconfig": true
  },
  packages: {
    ".": {
      "main": "index.ts",
      "defaultExtension": "ts"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {},
  packages: {}
});
