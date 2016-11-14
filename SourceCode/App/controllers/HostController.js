(function () {

	var HostController = function ($scope, $location,AngularFactory, GithubFactory) {
		$scope.currentDate = new Date();
		$scope.dateFormat = 'medium';
		var names = [];
		/*$scope.HackthonEvents = [];*/


		$scope.AddUser = function () {
			
			var UserName = $scope.UserName;
			var GithubURI = $scope.GithubURI;
			var GroupName = $scope.GroupName;
			var HackthonEvent =$scope.HackthonEvent
			var CollectionName = "HackthonUsers"
			var GithubId = "N/A";

			GithubFactory.GetUser(GithubURI).success(function (data, status, headers, config) {
				if (data.id != null) {
					GithubId = data.id;
				}

				var Data = JSON.stringify({
					'UserName': UserName,
					'GroupName':GroupName,
					'GithubName': GithubURI,
					'GithubId': GithubId,
					'HackthonEvent': HackthonEvent
				});
				AngularFactory.AddData(Data, CollectionName).success(function (data, status, headers, config) {


				})

			})

		}

		$scope.Test = function()
		{
			var ss = $scope.UserName;
			names.push(ss);
		}
		
		$scope.Navigate = function(path)
		{
			$location.path(path)
		}

		$scope.AddEvent = function () {
			var EventName = $scope.EventName;
			var EventLocation = $scope.EventLocation;
			var EventStartDate = $scope.EventStartDate;
			var EventEndDate = $scope.EventEndDate
			var CollectionName = 'Hackthon_Events';

			var Data = JSON.stringify({
				'EventName': EventName,
				'EventLocation': EventLocation,
				'EventStartDate': EventStartDate,
				'EventEndDate':EventEndDate
			});
			AngularFactory.AddData(Data, CollectionName).success(function (data, status, headers, config) {

				init();
			})


		}
		
		var init = function () {
			var CollectionName = 'Hackthon_Events';
			AngularFactory.GetAllData(CollectionName).success(function (data, status, headers, config) {
				$scope.HackthonEvents = data;
			})
		}
		

		init();
	}
	HostController.$inject = ['$scope','$location' ,'AngularFactory', 'GithubFactory'];
	angular.module('Mlab').controller('HostController', HostController);
}());