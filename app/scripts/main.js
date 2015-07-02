;(function() {

    'use strict';


    angular.module('app', [ 'ui.router', 'ngCookies','UserModule'])
        .constant('PARSE', {
            URL: 'https://api.parse.com/1/',
            CONFIG: {
                headers: {
                    'X-Parse-Application-Id': '',
                    'X-Parse-REST-API-Key': '',
                    'Content-Type': 'application/json'
                }
            }
        })
		.config( function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		      $stateProvider

		      .state( 'login', {
		        url: '/',
		        templateUrl: 'scripts/User/login.tpl.html',
		        controller: 'UserCtrl'
		      })
		      .state('register', {
		        url: '/register',
		        templateUrl: 'scripts/User/register.tpl.html',
		        controller: 'UserCtrl'  
		      });
		     
		      

		    });


}());
