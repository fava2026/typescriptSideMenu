/// <reference path='../typings/tsd.d.ts' />
/// <reference path='./login.module.service.ts' />
var LoginCtrl = (function () {
    function LoginCtrl($scope, serviceHttp) {
        this.$scope = $scope;
        this.user = {};
        this.service = serviceHttp;
    }
    // Perform the login action when the user submits the login form
    LoginCtrl.prototype.doLogin = function (user) {
        console.log(this.user);
        this.service.getData().then(function (data) {
            console.log(data, 'Hola si');
        });
    };
    return LoginCtrl;
}());
angular.module('login.controllers', ['services'])
    .controller('LoginCtrl', [LoginCtrl]);
