(function() {
    angular
        .module('app.header')
        .controller('headerCtrl', headerControl);

        headerControl.$inject = ['$http', '$state']

        function headerControl($http, $state) {
            // var vm = this;
            // vm.login = function(email, password) {
            //   var config = {
            //     method: 'POST',
            //     data: {
            //         email: email,
            //         password: password
            //     },
            //     url: '/login'
            //   }
            //   $http(config);
            //   $state.go('home');
            // }
        }
})();
