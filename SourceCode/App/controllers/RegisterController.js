(function () {

	var RegisterController = function ($scope, $location, AngularFactory) {

		$scope.RegisterUser = function () {

			var FirstName = $scope.FirstName;
			var LastName = $scope.LastName;
			var EmailId = $scope.EmailId;
			var Password = $scope.Password;
			var UserType = $scope.UserType
			AngularFactory.CreateUser(FirstName, LastName, EmailId, Password, UserType).success(function (data, status, headers, config) {
				if (status == 200) {
					$location.path('/')
				} else {
					$scope.status = "Failed";
				}

			})
		}

		$scope.go = function (strPath) {
			$location.path(strPath);
		};
	}
	RegisterController.$inject = ['$scope', '$location', 'AngularFactory']
	angular.module('Mlab').controller('RegisterController', RegisterController);
}());