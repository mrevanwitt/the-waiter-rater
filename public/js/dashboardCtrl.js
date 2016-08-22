angular.module('waiterRater')
  .controller('dashboardCtrl', function($scope, $stateParams, mainServ) {
    $scope.getServerDataManagerId = function(id) {
      mainServ.getServerDataManagerId(id)
        .then(function(response) {
          console.log(response)
          $scope.serverData = response.data
          $scope.restaurantName = response.data[0].restaurant_name;
          $scope.restaurantId = response.data[0].restaurant_id;
        })
    }
    $scope.getServerDataManagerId($stateParams.id)

    $scope.clicked = function(value) {
      console.log(value);
    }
  });
