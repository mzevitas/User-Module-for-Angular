;(function (){
  
  'use strict';

  angular.module('UserModule')

  .controller('UserCtrl', ['$scope', 'UserFactory', '$location', 

    function ($scope, UserFactory, $location) {

     
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

   // .directive('logIn', [ function () {
   //   return {
   //     restrict: 'EA',

   //     templateUrl: 'scripts/user/login.tpl.html' 

   //       };

   // }]);
   


}());