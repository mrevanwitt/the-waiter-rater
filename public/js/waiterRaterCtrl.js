angular.module('waiterRater')
  .controller('waiterRaterCtrl', function($scope, $stateParams, mainServ, $state) {
    $scope.getServers = function(id) {
      console.log(id);
      mainServ.getServers(id)
        .then(function(response) {
          $scope.servers = response.data;
        });
    };
    $scope.getServers($stateParams.id);

    $scope.lowRange = 0;
    $scope.highRange = 0;

    $scope.errorMessage = "Error Message";

    $scope.lowData = {
      model: null,
      options: [
        {name: '0%', value: 0},
        {name: '5%', value: 5},
        {name: '10%', value: 10},
        {name: '15%', value: 15},
        {name: '20%', value: 20}
      ]
    };

    $scope.highData = {
      model: null,
      options: [
        {name: '15%', value: 15},
        {name: '20%', value: 20},
        {name: '25%', value: 25},
        {name: '30%', value: 30},
        {name: '35%', value: 35}
      ]
    };

    $scope.serverData = {};

    $scope.customerServiceVal = 0;
    $scope.timelinessVal = 0;
    $scope.accuracyVal = 0;
    $scope.drinksVal = 0;
    $scope.appearanceVal = 0;

    $scope.calculate = function(billTotal, serverId, feedback) {

      var custServ = parseInt($scope.customerServiceVal);
      var time = parseInt($scope.timelinessVal);
      var accur = parseInt($scope.accuracyVal);
      var drinks = parseInt($scope.drinksVal);
      var appear = parseInt($scope.appearanceVal);

      var high = parseInt($scope.highData.model);
      var low = parseInt($scope.lowData.model);

      var avg = ((custServ + time + accur + drinks + appear) / 5);
      var mult = ((high - low) / 5);
      var tipPerc = ((low + (mult * avg)) / 100);
      var tipAmtStr = (billTotal * tipPerc).toFixed(2);
      var tipAmt = parseFloat(tipAmtStr);
      var finalTotalStr = (billTotal + tipAmt).toFixed(2);
      var finalTotal = parseFloat(finalTotalStr);

      //console.log(finalTotal)

      $scope.serverData.server_id = parseInt(serverId);
      $scope.serverData.bill_total = billTotal;
      $scope.serverData.feedback = feedback;
      $scope.serverData.lowest_percent = low;
      $scope.serverData.highest_percent = high;
      $scope.serverData.customer_service_rating = custServ;
      $scope.serverData.timeliness_rating = time;
      $scope.serverData.accuracy_rating = accur;
      $scope.serverData.drinks_rating = drinks;
      $scope.serverData.appearance_rating = appear;
      $scope.serverData.average = avg;
      $scope.serverData.tip_percent = (tipPerc * 100).toFixed(1) + "%";
      $scope.serverData.tip_amount = tipAmt;
      $scope.serverData.final_bill_total = finalTotal;
      $scope.serverData.date_created = new Date();


      mainServ.postServerData($scope.serverData).then(function(response) {
        console.log("New Server Data: ", response.data);
        $state.go('thankYou', {id: response.data.id});
      });



      //console.log(typeof $scope.serverId);


      //console.log(typeof $scope.serverData.custServ);
      //console.log($scope.serverData);
      //console.log('typeOf: ' + typeof value);
    };


    $( document ).ready(function() {

      function createHoverState (myobject){
        myobject.hover(function() {
          $(this).prev().toggleClass('hilite');
        });
        myobject.mousedown(function() {
          $(this).prev().addClass('dragging');
          $("*").mouseup(function() {
            $(myobject).prev().removeClass('dragging');
          });
        });
      }

      $(".slider").slider({
        orientation: "horizontal",
        range: "min",
        max: 100,
        value: 0,
        animate: 1300
      });
      $("#blue").slider( "value", 100 );
      $('.slider').each(function(index) {
        $(this).slider( "value", 75-index*(50/($('.slider').length-1)));
      });

      createHoverState($(".slider a.ui-slider-handle"));

    });



  });
