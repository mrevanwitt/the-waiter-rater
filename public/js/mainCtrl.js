angular.module('waiterRater')
  .controller('mainCtrl', function($scope, mainServ) {
    $scope.test = mainServ.test
  });
