/// <reference path='../typings/tsd.d.ts' />
var Start;
(function (Start) {
    var Module = (function () {
        function Module(name, modules) {
            this.app = angular.module(name, modules);
        }
        ;
        Module.prototype.addController = function (name, controller) {
            this.app.controller(name, controller);
        };
        ;
        Module.prototype.addService = function (name, service) {
            this.app.service(name, service);
        };
        return Module;
    }());
    Start.Module = Module;
    ;
})(Start || (Start = {}));
;
