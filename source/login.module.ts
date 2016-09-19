/// <reference path='../typings/tsd.d.ts' />
/// <reference path='./login.module.service.ts' />

class LoginCtrl {
    public user: any;
    public service: services.ServiceHttp;

    constructor(private $scope: angular.IScope, serviceHttp: services.ServiceHttp) {
        this.user = {};
        this.service = serviceHttp;
    }

    // Perform the login action when the user submits the login form
    public doLogin(user): void {
        console.log(this.user);

        this.service.getData().then(function (data) {
            console.log(data, 'Hola si');
        });
    }
}

angular.module('login.controllers', ['services'])
    .controller('LoginCtrl', [LoginCtrl]);