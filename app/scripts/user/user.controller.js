;(function (){
  
  'use strict';

  angular.module('UserModule')

  .controller('UserCtrl', ['$scope', 'UserFactory', '$state', 

    function ($scope, UserFactory, $state) {

     
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
    })

   .directive('logIn', [ function () {
     return {
       restrict: 'EA',

       templateUrl: 'scripts/user/login.tpl.html' 

         };

   }]);
   


}());