/// <reference path='../typings/tsd.d.ts' />
var Service;
(function (Service) {
    var ServiceHttp = (function () {
        function ServiceHttp($http) {
            this.$http = $http;
            this.$inject = ['$http'];
            this.http = $http;
        }
        ServiceHttp.prototype.getData = function () {
            return this.http.get('https://randomuser.me/api/?results=10').then(function (data, status, headers, config) {
                return data;
            }).catch(function (data, status, headers, config) {
                throw new Error('Error');
            });
        };
        return ServiceHttp;
    }());
    Service.ServiceHttp = ServiceHttp;
})(Service || (Service = {}));
angular.module('services', []).service('Service', Service.ServiceHttp);
