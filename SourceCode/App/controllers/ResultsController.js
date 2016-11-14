(function () {

	var ResultsController = function ($scope, AngularFactory, GithubFactory) {



		$scope.GetUser = function (EventName) {
			AngularFactory.GetUserInEvent(EventName).success(function (data, status, headers, config) {

				$scope.HackUsers = data;
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
	ResultsController.$inject = ['$scope', 'AngularFactory', 'GithubFactory'];
	angular.module('Mlab').controller('ResultsController', ResultsController);
}());