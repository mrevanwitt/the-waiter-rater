angular.module('waiterRater')
  .controller('waiterCtrl', function($scope, $stateParams, mainServ) {

    $scope.getServer = function (id) {
      mainServ.getServer(id).then(function (response) {
        $scope.server = response.data;
        console.log(response)
      });
    };

    $scope.getServer($stateParams.id);
  });
