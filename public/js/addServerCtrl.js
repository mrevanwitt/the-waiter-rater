angular.module('waiterRater')
  .controller('addServerCtrl', function($scope, $stateParams, mainServ) {

    $scope.addServer = function(firstName, lastName) {

      firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
      lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
      var firstNameLastInitial = firstName + " " + lastName.slice(0, 1) + ".";
      var id = $stateParams.id;

      $scope.newServer = {};

      $scope.newServer.first_name = firstName;
      $scope.newServer.last_name = lastName;
      $scope.newServer.first_name_last_initial = firstNameLastInitial;
      $scope.newServer.restaurant_id = id;

      console.log($scope.newServer)

      $scope.sendData = function(newServer) {
        mainServ.AddServer(newServer);
      }

      $scope.sendData($scope.newServer);

    }
  });
