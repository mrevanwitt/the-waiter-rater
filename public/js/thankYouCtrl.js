angular.module('waiterRater')
  .controller('thankYouCtrl', function($scope, $stateParams, mainServ) {

    $scope.getServerData = function(id) {
      mainServ.getServerDataById(id)
        .then(function(response) {
          $scope.serverData = response.data[0];
          console.log(response.data[0].first_name)
          console.log($scope.serverData)
        });
    };

    console.log($scope.serverData)

    $scope.getServerData($stateParams.id);
  });
