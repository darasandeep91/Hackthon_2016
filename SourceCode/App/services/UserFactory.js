(function(){
	var UserFactory = function()
	{
		var Data = {
			FirstName:'',
			LastName:'',
			EmailId:'',
			Password:''
		}
		
		UserFactory.getFirstName = function()
		{
			return Data.FirstName;
		}
		UserFactory.setFirstName = function(strFirstName)
		{
			Data.FirstName = strFirstName;
		}
		
		UserFactory.setLastName = function(strLastName)
		{
			Data.LastName = strLastName;
		}
		UserFactory.getLastName = function()
		{
			return Data.LastName;
		}
		
		UserFactory.setEmail = function(strEmailId)
		{
			Data.EmailId = strEmailId;
		}
		UserFactory.getEmail = function()
		{
			return Data.EmailId;
		}
		
		UserFactory.setPassword = function(strPassword)
		{
			Data.Password = strPassword;
		}
		UserFactory.getPassword = function()
		{
			return Data.Password;
		}
	
		
	
		return UserFactory;
	}
	angular.module('Mlab').service('UserFactory',UserFactory);
}());