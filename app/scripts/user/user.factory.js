;(function (){
  
  'use strict';

  angular.module('UserModule', ['ngMessages'])

  .factory('UserFactory', ['$http', 'PARSE', '$cookies', '$location',

    function ($http, PARSE, $cookies, $location) {
    
      // Get Current User
      var currentUser = function (data) {
         $cookies.put('sessionToken', data.sessionToken);
          $cookies.put('userObjectId', data.objectId);
      };

      // Check User Status
      var checkLoginStatus = function () {
        var user = currentUser();
        if (data) {
          PARSE.CONFIG.headers['X-PARSE-Session-Token'] = data.sessionToken;
        }
      };



      // Add a new User
      var addUser = function (userObj) {
        $http.post(PARSE.URL + 'users', userObj, PARSE.CONFIG)
          .then( function (res) { 
            console.log(res);
          }
        );
      };

      // Log in a User
      var loginUser = function (userObj) {

        $http ({
          method: 'GET',
          url: PARSE.URL + 'login',
          headers: PARSE.CONFIG.headers,
          params: userObj
        }).success (function (res) {
          console.log(res);
          currentUser(res);

        });
        
      };

      // Logout Method
      var logoutUser = function () {
        $cookies.remove('sessionToken');
        $cookies.remove('userObjectId');
        $location.path('/login');
      } 
  
      return {
        register : addUser, 
        login : loginUser,
        user : currentUser,
        status : checkLoginStatus,
        logout : logoutUser
      };

    }

  ]);

}());