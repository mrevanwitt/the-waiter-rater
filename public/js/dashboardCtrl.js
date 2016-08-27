angular.module('waiterRater')
  .controller('dashboardCtrl', function($uibModal, $log, $scope, $stateParams, mainServ) {
    $scope.getServerDataManagerId = function(id) {
      mainServ.getServerDataManagerId(id)
        .then(function(response) {
          console.log(response)
          $scope.serverData = response.data
          $scope.restaurantName = response.data[0].restaurant_name;
          $scope.restaurantId = response.data[0].restaurant_id;

          var date = response.data[15].date_created.toString();
          var year = date.slice(0,4);
          var monthDay = date.slice(5,7)
          var day = date.slice(8,10);

          var months = {'jan', 'feb'}

          console.log(year, monthDay, day);

        })
    }
    $scope.getServerDataManagerId($stateParams.id)

    $scope.clicked = function(value) {
      console.log(value);
    }




    var $ctrl = this;

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    // modalInstance.result.then(function (selectedItem) {
    //   $ctrl.selected = selectedItem;
    // }, function () {
    //   $log.info('Modal dismissed at: ' + new Date());
    // });
  };

  // $ctrl.openComponentModal = function () {
  //   var modalInstance = $uibModal.open({
  //     animation: true,
  //     component: 'modalComponent',
  //     resolve: {
  //       items: function () {
  //         return $ctrl.items;
  //       }
  //     }
  //   });
  //
  //   modalInstance.result.then(function (selectedItem) {
  //     $ctrl.selected = selectedItem;
  //   }, function () {
  //     $log.info('modal-component dismissed at: ' + new Date());
  //   });
  // };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('waiterRater').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;


  $ctrl.ok = function () {
    $uibModalInstance.close();
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('waiterRater').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }





  });
