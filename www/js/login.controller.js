/// <reference path='../typings/tsd.d.ts' />
var LoginCtrl = (function () {
    function LoginCtrl($scope, myService) {
        this.$scope = $scope;
        this.myService = myService;
        this.$inject = ['$scope', 'Service'];
        this.user = {};
        this.myService = myService;
        this.myService.getData().then(function (data) { console.log(data); });
    }
    // Perform the login action when the user submits the login form
    LoginCtrl.prototype.doLogin = function (user) {
        console.log(this.user);
    };
    return LoginCtrl;
}());
angular.module('login.controllers', ['services'])
    .controller('LoginCtrl', LoginCtrl);
