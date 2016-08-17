angular.module('waiterRater')
  .controller('waiterRaterCtrl', function($scope, $stateParams, mainServ) {
    $scope.getServers = function(id) {
      mainServ.getServers(id)
        .then(function(response) {
          $scope.servers = response.data
        })
    };

    $scope.getServers($stateParams.id);
  });
