(function () {

	var AngularFactory = function ($http) {

		var API_KEY = 'WQdetFzPianTtgBryFsYkPkNE-osQ-Ue';

		var config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		AngularFactory.AddData = function (Data, CollectionName) {
			var URI = 'https://api.mlab.com/api/1/databases/umkc/collections/' + CollectionName + '?apiKey=' + API_KEY
			return $http.post(URI, Data, config)
		}

		AngularFactory.Publish = function (Data) {
			var URI = 'https://api.mlab.com/api/1/databases/umkc/collections/PublishedScores?apiKey=' + API_KEY
			return $http.post(URI, Data, config)
		}

		
		AngularFactory.CreateUser = function (FirstName, LastName, Email, Password,UserType) {


			var Data = JSON.stringify({
				'FirstName': FirstName,
				'LastName': LastName,
				'EmailId': Email,
				'Password': Password,
				'UserType':UserType
				
			});
			var URI = 'https://api.mlab.com/api/1/databases/umkc/collections/user_details?apiKey=' + API_KEY
			return $http.post(URI, Data, config)
		}

		AngularFactory.GetUser = function (EmailId) {

			var URI = 'https://api.mlab.com/api/1/databases/umkc/collections/user_details?apiKey=' + API_KEY + '&q={"EmailId":' + '"' + EmailId + '"' + '}'
			return $http.get(URI)
		}

		AngularFactory.GetResults = function (EventName) {

			var URI = 'https://api.mlab.com/api/1/databases/umkc/collections/HackthonResults?apiKey=' + API_KEY + '&q={"EventName":' + '"' + EventName + '"' + '}'
			return $http.get(URI)
		}
		
		AngularFactory.getEvents = function(EventName)
		{
			var URI = 'https://api.mlab.com/api/1/databases/umkc/collections/Hackthon_Events?apiKey=' + API_KEY + '&q={"EventName":' + '"' + EventName + '"' + '}'
			return $http.get(URI)
		}

		AngularFactory.UpdateResults_Get = function(EventName)
		{
			var URI = 'https://api.mlab.com/api/1/databases/umkc/collections/HackthonResults?apiKey=' + API_KEY + '&q={"EventName":' + '"' + EventName + '"' + '}'
			return $http.get(URI);
		}
		AngularFactory.UpdateResults_Post = function(data,EventName)
		{
			var URI = 'https://api.mlab.com/api/1/databases/umkc/collections/HackthonResults?apiKey=' + API_KEY
			return $http.post(URI,data,config);
		}
		AngularFactory.UpdateResults_Put = function(data,EventName)
		{
			var URI = 'https://api.mlab.com/api/1/databases/umkc/collections/HackthonResults?apiKey=' + API_KEY + '&q={"EventName":' + '"' + EventName + '"' + '}'
			return $http.put(URI,data,config);
		}
		
		AngularFactory.GetUserInEvent = function (EventName) {

			var URI = 'https://api.mlab.com/api/1/databases/umkc/collections/HackthonUsers?apiKey=' + API_KEY + '&q={"HackthonEvent":' + '"' + EventName + '"' + '}'
			return $http.get(URI)
		}

		AngularFactory.GetAllData = function (CollectionName) {

			var URI = 'https://api.mlab.com/api/1/databases/umkc/collections/' + CollectionName + '?apiKey=' + API_KEY
			return $http.get(URI)
		}

		/*AngularFactory.DeleteUser = function (EmailId) {
			var URI = 'https://api.mlab.com/api/1/databases/mlab/collections/user_details?apiKey=' + API_KEY + '&q={"EmailId":' + '"' + EmailId + '"' + '}'
			var Empty = JSON.stringify({
				'': ''
			})
			return $http.put(URI, Empty, config);
		}*/

		/*AngularFactory.UpdateUser = function (FirstName, LastName, EmailId, Password) {
			var Data = JSON.stringify({
				'FirstName': FirstName,
				'LastName': LastName,
				'EmailId': EmailId,
				'Password': Password,
			});
			var URI = 'https://api.mlab.com/api/1/databases/mlab/collections/user_details?apiKey=' + API_KEY + '&q={"EmailId":' + '"' + EmailId + '"' + '}'
			return $http.put(URI, Data, config)
		}*/

		return AngularFactory;
	}
	AngularFactory.$inject = ['$http'];
	angular.module('Mlab').service('AngularFactory', AngularFactory);

}());