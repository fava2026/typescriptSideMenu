/// <reference path='../typings/tsd.d.ts' />
var MyValidateUser;
(function (MyValidateUser) {
    var UserService = (function () {
        function UserService() {
        }
        UserService.prototype.getWelcomeMessage = function () {
            return 'User validate';
        };
        UserService.prototype.notValidateUser = function () {
            return 'User not validate';
        };
        return UserService;
    }());
    MyValidateUser.UserService = UserService;
    angular.module('app.services.myValidateService', []).factory('myValidateService', function () {
        return new UserService();
    });
})(MyValidateUser || (MyValidateUser = {}));
