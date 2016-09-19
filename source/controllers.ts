/// <reference path='../typings/tsd.d.ts' />

class AppCtrl {
    public loginData: any;
}

class PlaylistCtrl {
    public playlistId: number;

    constructor(private $stateParams: ng.ui.IStateParamsService) {
        this.playlistId = $stateParams["playlistId"];
    }
}

class PlaylistsCtrl {
    public playlists: [{
        id: number;
        title: string;
    }];

    constructor() {
        this.playlists = [
            { title: "Reggae", id: 1 },
            { title: "Chill", id: 2 },
            { title: "Dubstep", id: 3 },
            { title: "Indie", id: 4 },
            { title: "Rap", id: 5 },
            { title: "Cowbell", id: 6 }
        ];
    }
}

angular.module('starter.controllers', ['services'])
    .controller('AppCtrl', AppCtrl)
    .controller('PlaylistCtrl', PlaylistCtrl)
    .controller('PlaylistsCtrl', PlaylistsCtrl)
//angular.module('plunker', ['controllers', 'services']);
angular.module('login.controllers', ['services']);
angular.module('services', []);
