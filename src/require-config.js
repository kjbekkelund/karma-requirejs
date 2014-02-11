requirejs.config({
    paths: {
        'jquery': '../lib/jquery',
        'underscore': '../lib/underscore'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});