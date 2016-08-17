angular.module('waiterRater')
  .controller('mainCtrl', function($scope, mainServ) {
    $scope.getRestaurants = function() {
      mainServ.getRestaurants()
      .then(function(response) {
        $scope.restaurants = response.data;
      });
    };

    $scope.getRestaurants();

  });
