module.exports = function (config) {
    
    config.set({
        
        basePath: './',
        
        files: [
            { pattern: 'node_modules/zone.js/dist/zone.js', watched: false },
            { pattern: 'node_modules/reflect-metadata/Reflect.js', watched: false },
            { pattern: 'dist/test/**/*.js', watched: false }
        ],
        preprocessors: {
            'dist/test/**/*.js': ['webpack']
        },

        webpack: {

        },
        // files: [
            // 'jspm_packages/npm/zone.js@0.6.18/dist/zone.js',
            // 'jspm_packages/npm/reflect-metadata@0.1.8/Reflect.js'
        // ],
        
        // proxies: {
        //     '/index.ts': '/base/index.ts',
        //     '/math.ts': '/base/math.ts',
        //     '/aggregate.ts': '/base/aggregate.ts',
        //     '/boolean.ts': '/base/boolean.ts',
        //     '/array.ts': '/base/array.ts',
        //     '/string.ts': '/base/string.ts',
        //     '/object.ts': '/base/object.ts',
        //     '/test': '/base/test',
        //     '/src': '/base/src',
        //     '/jspm_packages': '/base/jspm_packages',
        //     '/node_modules': '/base/node_modules',
        //     '/tsconfig.json': '/base/tsconfig.json'
        // },
        
        // jspm: {
        //     serveFiles: [
        //         '*.ts',
        //         'src/**/*.ts',
        //         'test/**/*.ts',
        //         'tsconfig.json'
        //     ],
        //     loadFiles: [
        //         'test/main.spec.ts'
        //     ],
        //     packages: 'jspm_packages',
        //     config: 'jspm.config.js',
        //     browser: 'jspm.browser.js'
        // },
        
        frameworks: ['jasmine'],
        browsers: ['Firefox'],
        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-firefox-launcher'
        ],
        
        reporters: ['spec'],
        singleRun: true,
        autoWatch: false,
        colors: true,
        logLevel: config.LOG_INFO
    })
    
}
