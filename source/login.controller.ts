/// <reference path='../typings/tsd.d.ts' />

class LoginCtrl {
    public user: any;
    public $inject = ['$scope', 'Service'];

    constructor(private $scope: angular.IScope, private myService: Service.Service) {
        this.user = {};
        this.myService = myService;
        this.myService.getData().then(data => { console.log(data); });
    }

    // Perform the login action when the user submits the login form
    public doLogin(user): void {
        console.log(this.user);
    }
}

angular.module('login.controllers', ['services'])
    .controller('LoginCtrl', LoginCtrl);