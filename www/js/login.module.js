/// <reference path='../typings/tsd.d.ts' />
var LoginCtrl = (function () {
    function LoginCtrl($scope) {
        this.$scope = $scope;
        this.user = {};
    }
    // Perform the login action when the user submits the login form
    LoginCtrl.prototype.doLogin = function (user) {
        this.user = user;
    };
    return LoginCtrl;
}());
angular.module('login.controllers', [])
    .controller('LoginCtrl', LoginCtrl);
