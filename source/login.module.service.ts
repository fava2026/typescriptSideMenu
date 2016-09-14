/// <reference path='../typings/tsd.d.ts' />

module MyValidateUser {
    export class UserService {
        public getWelcomeMessage():String {
            return 'User validate';
        }
        public notValidateUser():String {
            return 'User not validate'
        }
    }

    angular.module('app.services.myValidateService', []).factory('myValidateService', () => {
        return new UserService();
    });
}