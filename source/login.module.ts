/// <reference path='../typings/tsd.d.ts' />
class LoginCtrl {
    public user: any;
    constructor(private $scope: angular.IScope) {
        this.user = {};
    }

    // Perform the login action when the user submits the login form
    public doLogin(user): void {
        this.user = user;
    }
}

angular.module('login.controllers', [])
    .controller('LoginCtrl', LoginCtrl);