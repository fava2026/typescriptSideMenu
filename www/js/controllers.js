/// <reference path='../typings/tsd.d.ts' />
var AppCtrl = (function () {
    function AppCtrl() {
    }
    return AppCtrl;
}());
var PlaylistCtrl = (function () {
    function PlaylistCtrl($stateParams) {
        this.$stateParams = $stateParams;
        this.playlistId = $stateParams["playlistId"];
    }
    return PlaylistCtrl;
}());
var PlaylistsCtrl = (function () {
    function PlaylistsCtrl() {
        this.playlists = [
            { title: "Reggae", id: 1 },
            { title: "Chill", id: 2 },
            { title: "Dubstep", id: 3 },
            { title: "Indie", id: 4 },
            { title: "Rap", id: 5 },
            { title: "Cowbell", id: 6 }
        ];
    }
    return PlaylistsCtrl;
}());
angular.module('starter.controllers', ['services'])
    .controller('AppCtrl', AppCtrl)
    .controller('PlaylistCtrl', PlaylistCtrl)
    .controller('PlaylistsCtrl', PlaylistsCtrl);
//angular.module('plunker', ['controllers', 'services']);
angular.module('login.controllers', ['services']);
angular.module('services', []);
