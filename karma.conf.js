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

        webpackMiddleware: {
            stats: 'errors-only'
        },

        frameworks: ['jasmine'],
        browsers: ['Firefox'],
        plugins: [
            'karma-webpack',
            'karma-coverage',
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
