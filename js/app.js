'use strict';

angular.module('reservasApp', [
  'ngMaterial',
  'ngRoute'
])

.config(function( $mdIconProvider, $mdThemingProvider,$routeProvider,$locationProvider ){

          // Register the user `avatar` icons
          $mdIconProvider
                  .defaultIconSet("./assets/svg/avatars.svg", 128);
                   $mdIconProvider.icon("share", "./assets/svg/share.svg", 24);

    //                $mdThemingProvider
    // .theme('default')
    // .primaryPalette('green')
    // .accentPalette('pink')
    // .warnPalette('red')
    // .backgroundPalette('green')

    $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginCtrl'
    })
    .when('/usuarios', {
      templateUrl: 'views/usuarios.html',
      controller: 'usuariosCtrl'
    })
      .otherwise({
        redirectTo: '/login'
      });


});
