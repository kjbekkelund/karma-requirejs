var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src',

    // ask Require.js to load the application Require.js configuration
    deps: ['/base/src/require-config.js'],

    callback: function() {
        // ask Require.js to load these files (all our tests)
        // start test run, once Require.js is done
        requirejs(tests, window.__karma__.start);
    }
});