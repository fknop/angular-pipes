module.exports = function (config) {
    
    config.set({
        
        basePath: './',
        
        files: [
            { pattern: 'src/base.spec.ts' },
            { pattern: 'src/**/*.ts' }
        ],

        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },

        frameworks: ['jasmine', 'karma-typescript'],
        browsers: ['Firefox'],
        plugins: [
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-firefox-launcher',
            'karma-typescript'
        ],

        karmaTypescriptConfig: {
            reports: {
                text: ""
            },
            coverageOptions: {
                exclude: /((\.(d|spec|test|module))|index\.ts)/
            },
            tsconfig: './tsconfig.json'
        },
        
        reporters: ['spec', 'karma-typescript'],
        singleRun: true,
        autoWatch: false,
        colors: true,
        logLevel: config.LOG_INFO
    });
    
}
