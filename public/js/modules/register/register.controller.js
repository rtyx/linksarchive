(function() {
    angular
        .module('app.register')
        .controller('registerCtrl', registerControl);

        registerControl.$inject = ['$http']

        function registerControl($http) {
            var vm = this;
            vm.register = function(user_name, email, password) {
              var config = {
                method: 'POST',
                data: {
                    user_name: user_name,
                    email: email,
                    password: password
                },
                url: '/register'
              }
              $http(config)
            }
        }
})();
