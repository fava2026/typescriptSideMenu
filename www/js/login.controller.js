/// <reference path='../typings/tsd.d.ts' />
var LoginCtrl = (function () {
    function LoginCtrl($scope, Service, $state) {
        this.$scope = $scope;
        this.$inject = ['$scope', 'Service'];
        this.user = {};
        this.state = $state;
        this.service = Service;
        this.scope = $scope;
    }
    // Perform the login action when the user submits the login form
    LoginCtrl.prototype.doLogin = function (user) {
        var _this = this;
        this.user = user;
        this.service.getData().then(function (data) {
            var data = data.data.users;
            if (data[0].username === _this.user.username &&
                data[0].password === _this.user.password) {
                _this.state.go('app.playlists');
            }
            else {
                _this.scope.message = 'Invalid user';
                return;
            }
        });
    };
    return LoginCtrl;
}());
angular.module('login.controllers', ['services'])
    .controller('LoginCtrl', LoginCtrl);
