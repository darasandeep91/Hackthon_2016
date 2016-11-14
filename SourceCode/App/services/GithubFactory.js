(function(){
	
	var GithubFactory = function($http)
	{
		GithubFactory.GetUser = function(strEmail)
		{
			var URI = "https://api.github.com/users/"
			return $http.get(URI+strEmail);
		}
		return GithubFactory;
	}
	GithubFactory.$inject=['$http'];
	angular.module("Mlab").service('GithubFactory',GithubFactory);
}());