requirejs(['require-config'], function() {
    requirejs(['app', 'jquery'], function (App, $) {
        var app = new App($('body'));
        app.render();
    });
});