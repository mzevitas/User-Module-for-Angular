;(function (){
  
  'use strict';

  angular.module('UserModule', ['ui.router', 'ngCookies'])

  .controller('UserCtrl', ['$scope', 'UserFactory', '$location', 

    function ($scope, UserFactory, $location) {

      // If Currently Logged in - Leave this controller
      var user = UserFactory.user();
      if (user) {
        return $location.path('/');
      }

      // Add a new user
      $scope.registerUser = function (userObj) {
        UserFactory.register(userObj);
      };

      // Login Method
      $scope.loginUser = function (userObj) {
        UserFactory.login(userObj);
      };
    
    }

  ])

   .directive('logOut', function (UserFactory) {
      return {
        link: function ($scope, element, attrs) {
          element.bind('click', function () {
            UserFactory.logout();
          });
        }
      }
    });



}());