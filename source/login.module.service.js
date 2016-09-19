/// <reference path='../typings/tsd.d.ts' />
var services;
(function (services) {
    var ServiceHttp = (function () {
        function ServiceHttp($http) {
            this.$http = $http;
            this.http = $http;
        }
        ServiceHttp.prototype.getData = function () {
            return this.http.get('https://randomuser.me/api/?results=10').success(function (data, status, headers, config) {
                return data;
            }).error(function (data, status, headers, config) {
                throw new Error("Error");
            });
        };
        return ServiceHttp;
    }());
    services.ServiceHttp = ServiceHttp;
    ServiceHttp.$inject = ['$http'];
})(services || (services = {}));
var serviceHttp = services;
/*
module services {
    export class ServiceHttp {
        private http: any;
        constructor(public $http: ng.IHttpService) {
            this.http = $http;
        }
        public getData(): ng.IPromise<string> {
            return this.http.get('https://randomuser.me/api/?results=10').success(function (data, status, headers, config) {
                return data;
            }).error(function (data, status, headers, config) {
                throw new Error("Error");
            });
        }

        static Factory($http: ng.IHttpService) {
            return new ServiceHttp($http);
        }
    }
    ServiceHttp.$inject = ['$http'];

    angular.module('services').service('ServiceHttp', services.ServiceHttp.Factory);
}*/ 
