;(function() {

    'use strict';


    angular.module('app', [ 'ui.router', 'ngCookies','UserModule'])
        .constant('PARSE', {
            URL: 'https://api.parse.com/1/',
            CONFIG: {
                headers: {
                    'X-Parse-Application-Id': 'pFf3UIa1ZDK5xiCOpBLW6t3iNGdkObsnTlcllhOo',
                    'X-Parse-REST-API-Key': 'jVsXe2jpAWWcNOUP6oiND5U4o1fbbdGggI2W8zKd',
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
		     
		      

		    })

		 .run([ '$rootScope', 'UserFactory', 'PARSE',

			    function ($rootScope, UserFactory, PARSE) {

			      $rootScope.$on('$routeChangeStart', function () {
			        
			        // Run my Login Status
			        UserFactory.status();

		 });
    
   }

  ]);


}());
