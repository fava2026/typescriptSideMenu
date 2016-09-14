angular.module('login.controllers', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('/app.login', {
                url: '/login',
                views: {
                    main: {
                        controller: 'LoginCtrl as loginCtrl',
                        templateUrl: 'login/views/login.html'
                    }
                }
            });
    });