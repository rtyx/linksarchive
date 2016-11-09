(function() {

    console.log("Loading main app...");

    angular
        .module('app', [
            // Angular modules.
            'ui.router',
            'ngCookies',

            // Custom modules.
            'app.router',
            'app.home',
            'app.register',
            'app.login'
        ]);
})();
