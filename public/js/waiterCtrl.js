angular.module('waiterRater')
    .controller('waiterCtrl', function($scope, $stateParams, mainServ) {



        $scope.getServer = function(id) {
            mainServ.getServer(id).then(function(response) {
                $scope.server = response.data;
                $scope.firstName = response.data[0].first_name;
                $scope.lastName = response.data[0].last_name;
                console.log(response)
            });
        };
        $scope.getServer($stateParams.id);

        google.charts.load('current', {
            'packages': ['line', 'corechart']
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {



            var chartDiv = document.getElementById('chart_div');

            var data = new google.visualization.DataTable();

            data.addColumn('number', 'Records');
            data.addColumn('number', "Customer Service");
            data.addColumn('number', "Appearance");
            data.addColumn('number', "Drinks");
            data.addColumn('number', "Timliness")
            data.addColumn('number', "Accuracy");
            data.addColumn('number', 'Average');

            for(var i = 0; i < $scope.server.length; i++) {

              var cust = $scope.server[i].customer_service_rating;
              var appear = $scope.server[i].appearance_rating;
              var drinks = $scope.server[i].drinks_rating;
              var time = $scope.server[i].timeliness_rating;
              var accur = $scope.server[i].accuracy_rating;
              var avg = (cust + appear + drinks + time + accur) / 5;

              data.addRows([
                [i + 1, cust, appear, drinks, time, accur, avg]
              ])
            }

            // data.addRows([
            //     [1, 1,],
            //     [2, 2,],
            //     [3, 6,],
            //     [4, 4,]
            // ]);

            var options = {
                chart: {
                    title: 'Server Data'
                },
                width: 900,
                height: 500,
                series: {
                    // Gives each series an axis name that matches the Y-axis below.
                    0: {
                        axis: 'Rating'
                    },
                },
                axes: {
                    // Adds labels to each axis; they don't have to match the axis names.
                    y: {
                        Rating: {
                            label: 'Rating'
                        },
                    }
                }
            };

            function drawChart() {
                var chart = new google.charts.Line(chartDiv);
                chart.draw(data, options);
            }

            drawChart();

        }


  //  var hideExp = document.getElementById("hideExpenses");
  //  hideExp.onclick = function()
  //  {
  //     view = new google.visualization.DataView(data);
  //     view.hideColumns([2]);
  //     chart.draw(view, options);
  //  }

    });
