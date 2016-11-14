(function(){
	
	var HomeController = function($scope,$location,AngularFactory,UserFactory)
	{
		$scope.FirstName = UserFactory.getFirstName();
		$scope.LastName = UserFactory.getLastName();
		$scope.EmailId = UserFactory.getEmail();
		$scope.Password = UserFactory.getPassword();
		$scope.currentDate = new Date();
  		$scope.dateFormat = 'medium';
		
		$scope.Delete = function()
		{
			var EmailId= $scope.EmailId;
			AngularFactory.DeleteUser(EmailId).success(function (data, status, headers, config) {
				if (status == 200) {
					alert("Deleted Succesfully");
					$location.path('/')
					
				} else {
					$scope.status = "Failed";
				}

			})
		}
		
		$scope.Update = function()
		{
			var FirstName = document.getElementById("Table_FirstName").innerText.trim();
			var LastName = document.getElementById("Table_LastName").innerText.trim();
			var Password = document.getElementById("Table_Password").innerText.trim();
			var EmailId = $scope.EmailId;
			AngularFactory.UpdateUser(FirstName,LastName,EmailId,Password).success(function (data, status, headers, config) {
				if (status == 200) {
					alert("Updated Succesfully");
				} else {
					$scope.status = "Failed";
				}

			})
		}
		
	}
	HomeController.$inject = ['$scope','$location','AngularFactory','UserFactory']
	angular.module('Mlab').controller('HomeController',HomeController)
}());