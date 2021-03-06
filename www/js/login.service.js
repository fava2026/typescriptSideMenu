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
            return this.http.get('http://localhost:8100/data/data.json').then(function (data, status, headers, config) {
                return data;
            }).catch(function (data, status, headers, config) {
                throw new Error('Error');
            });
        };
        return ServiceHttp;
    }());
    Service.ServiceHttp = ServiceHttp;
    angular.module('services', []).service('Service', Service.ServiceHttp);
})(Service || (Service = {}));
