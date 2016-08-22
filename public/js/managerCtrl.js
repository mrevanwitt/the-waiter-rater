angular.module('waiterRater')
  .controller('managerCtrl', function($scope, mainServ) {
    $scope.testData = "Test Data"

    $scope.getManagers = function() {
      mainServ.getManagers()
        .then(function(response) {
          $scope.managers = response.data
        })
    }

    $scope.getManagers();
  })
