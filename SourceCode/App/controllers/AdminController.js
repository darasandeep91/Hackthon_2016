(function () {

	var AdminController = function ($scope, AngularFactory) {

		var Diff = "";

		$scope.GetResults = function () {
			var Groups = [];
			var EventName = $scope.HackthonEvent;
			AngularFactory.GetResults(EventName).success(function (data, status, headers, config) {

				if (data.length != 0) 
				{
					$scope.GroupData = data[0].Data;
				} else {
					var GroupName = $scope.HackthonEvent;
					AngularFactory.GetUserInEvent(GroupName).success(function (data, status, headers, config) {
						
						for (var i = 0; i < data.length; i++)
						{
							var Name = data[i].GroupName;
							if (Groups.indexOf(Name) == -1) 
							{
								Groups.push(Name);
							}
						}
						$scope.NoGroups = Groups;
					})
				}

			})
		}


		$scope.SubmitScores = function () {
			var EventName = $scope.HackthonEvent;
			var data = [];
			var table = document.getElementById("mytab1");
			for (var i = 1, row; row = table.rows[i]; i++) {
				var GroupName = row.cells[0].innerText;
				var Factor1 = row.cells[1].innerText;
				var Factor2 = row.cells[2].innerText;
				var Factor3 = row.cells[3].innerText;
				var Factor4 = row.cells[4].innerText;
				var Factor5 = row.cells[5].innerText;

				data.push({

					"GroupName": GroupName,
					"Factor1": Factor1,
					"Factor2": Factor2,
					"Factor3": Factor3,
					"Factor4": Factor4,
					"Factor5": Factor5
				})


			}
			var FinalResults = JSON.stringify({
				"EventName": EventName,
				"Data": data
			})
			AngularFactory.UpdateResults_Get(EventName).success(function (data, status, headers, config) {

				if (data.length == 0) {
					AngularFactory.UpdateResults_Post(FinalResults, EventName).success(function (data, status, headers, config) {
						alert("Posted Newly")
					})
				} else {
					AngularFactory.UpdateResults_Put(FinalResults, EventName).success(function (data, status, headers, config) {
						alert("Updated");
					})
				}

			})
		}

		$scope.CheckDates = function () {
			var SelectedEvent = $scope.HackthonEvent;
			AngularFactory.getEvents(SelectedEvent).success(function (data, status, headers, config) {
				var CurrentDate = Date.now()
				var EventStartDate = new Date(data[0].EventStartDate);
				var EventEndDate = new Date(data[0].EventEndDate);
				if (CurrentDate > EventStartDate && CurrentDate < EventEndDate) {

					var Diffrence = EventEndDate - CurrentDate;

					Diff = new Date(Diffrence).getMinutes();
					$scope.Text = "Event will End in "
					$scope.Diff = Diff;
					//interval();
				} else if (CurrentDate < EventStartDate) {
					$scope.Text = "Event will Start in"
					var Diffrence = EventStartDate - CurrentDate;
					Diff = new Date(Diffrence).getMinutes();
					document.getElementById('timer_div').innerHTML = Diff
					interval()
				} else if (CurrentDate > EventStartDate && CurrentDate > EventEndDate) {
					alert("Event Ended")
				}


			})
		}

		var interval = function () 
		{
			setInterval(function(){ Timer() }, 1000)
		};

		$scope.Diable = function()
		{
			$scope.Disable = true;
			clearInterval(interval);
		}
		
		$scope.PublishScores = function()
		{
			var EventName =$scope.HackthonEvent;
			var data = JSON.stringify({"EventName":EventName})
			AngularFactory.Publish(data).success(function(data, status, headers, config){
				
			})
		}

		var Timer = function () 
		{
			document.getElementById('timer_div').innerHTML = --Diff;
			if (Diff <= 0) 
			{
				clearInterval(interval);
				document.getElementById('timer_div').innerHTML = "You are Ready!";
				
			}
			
		}

		var init = function () {
			var CollectionName = 'Hackthon_Events';
			AngularFactory.GetAllData(CollectionName).success(function (data, status, headers, config) {
				$scope.HackthonEvents = data;
			})
		}

		init();
	}
	AdminController.$inject = ['$scope', 'AngularFactory']
	angular.module('Mlab').controller('AdminController', AdminController);
}());