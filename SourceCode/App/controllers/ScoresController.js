(function () {

	var ScoresController = function ($scope, AngularFactory) {

		var init = function () {
			var CollectionName = 'PublishedScores';
			AngularFactory.GetAllData(CollectionName).success(function (data, status, headers, config) {
				$scope.HackthonEvents = data;
			})
		}

		$scope.DrawChart = function () {
			
			google.charts.load("current", {
				packages: ["corechart"]
			});
			google.charts.setOnLoadCallback(drawBasic);
		}


		var drawBasic= function () {
			var UserGroupName = document.getElementById("GroupName").innerHTML;
			var data = $scope.GroupData;
			var data1=0;
			var data2=0;
			var data3=0;
			var data4=0;
			var data5=0;
			for (var i = 0; i < data.length; i++) {

				if(data[i].GroupName == UserGroupName)
					{
			var data1 = parseInt($scope.GroupData[i].Factor1);
			var data2 = parseInt($scope.GroupData[i].Factor2);
			var data3 = parseInt($scope.GroupData[i].Factor3);
			var data4 = parseInt($scope.GroupData[i].Factor4);
			var data5 = parseInt($scope.GroupData[i].Factor5);

					}
			}
			

			var data = google.visualization.arrayToDataTable([
        ['Grading Criterial', 'Score', ],
        ['User Interface', data1],
        ['Functionality', data2],
        ['Coding Standards', data3],
		['Cordination', data4],
		['Creativity', data5]

      ]);

			var options = {
				title: 'Hackthon Scores',
				chartArea: {
					width: '50%'
				},
				hAxis: {
					title: 'Score',
					minValue: 0
				},
				vAxis: {
					title: 'Grading Points'
				}
			};

			var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

			chart.draw(data, options);
		}

		$scope.GetResults = function () {
			var Groups = [];
			var EventName = $scope.HackthonEvent;
			AngularFactory.GetResults(EventName).success(function (data, status, headers, config) {

				if (data.length != 0) {
					$scope.GroupData = data[0].Data;
					//DrawChart();
				}
			})

		}

		//drawBasic();
		init();
	}
	ScoresController.$inject = ['$scope', 'AngularFactory'];
	angular.module("Mlab").controller('ScoresController', ScoresController)
}());