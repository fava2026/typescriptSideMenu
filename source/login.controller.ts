/// <reference path='../typings/tsd.d.ts' />
/// <reference path='./login.service.ts' />

class LoginCtrl {
    public user: any;
    public $inject = ['$scope', 'Service'];
    public data: any;
    public service: any;
    public state: any;

    constructor(private $scope: angular.IScope, Service: Service.ServiceHttp, $state: ng.ui.IStateProvider) {
        this.user = {};
        this.state = $state;
        this.service = Service;
    }

    // Perform the login action when the user submits the login form
    public doLogin(user): void {
        this.user = user;
        this.service.getData().then(data => {
            var data = data.data.users;
            if (data[0].username === this.user.username &&
                data[0].password === this.user.password) {
                this.state.go('app.playlists');
            }
            else {
                return;
            }
        });
    }
}

angular.module('login.controllers', ['services'])
    .controller('LoginCtrl', LoginCtrl);