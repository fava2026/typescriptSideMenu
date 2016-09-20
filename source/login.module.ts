/// <reference path='../typings/tsd.d.ts' />

module Start {
  export class Module {
      public app: ng.IModule;

        constructor( name: string, modules: Array< string > ) {
            this.app = angular.module( name, modules );
        };

        public addController( name: string, controller: Function ) {
            this.app.controller( name, controller );
        };

        public addService( name: string, service: Function ): void {
            this.app.service( name, service );
        }
    };
};
