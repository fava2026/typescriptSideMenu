/// <reference path='../typings/tsd.d.ts' />

module services {
    export interface Service {
        getData(): any;
    }
    export class ServiceHttp implements Service {
        public $inject = ['$http'];
        private http: any;
        constructor(public $http: ng.IHttpService) {
            this.http = $http;
        }
        public getData(): any {
            return this.http.get('https://randomuser.me/api/?results=10').then((data, status, headers, config) => {
                return data;
            }).catch((data, status, headers, config) => {
                throw new Error('Error');
            });
        }
    }
}

angular.module( 'services', []).service( 'Service', ServiceHttp );
