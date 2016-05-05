System.config({
    baseURL: '.',
    transpiler: 'typescript',
    packages: {
        'src': {
            defaultExtension: 'ts'
        },
        'node_modules': {
            defaultExtension: 'js'
        },
        '.': {
            defaultExtension: 'ts'
        },
        'test': {
            defaultExtension: 'ts'
        }
    },
    map: {
        'reflect-metadata': 'node_modules/reflect-metadata/Reflect.js',
        'zone.js': 'node_modules/zone.js/dist/zone.js',
        'systemjs': 'node_modules/systemjs/dist/system.js',
        'phantomjs-prebuilt': 'node_modules/phantomjs-prebuilt',
        '@angular/core': 'node_modules/@angular/core/index.js',
        '@angular/testing': 'node_modules/@angular/core/testing.js',
        'typescript': 'node_modules/typescript/lib/typescript.js',
        "rxjs": "node_modules/rxjs",
        "symbol-observable": "node_modules/symbol-observable/index.js"
    }
});