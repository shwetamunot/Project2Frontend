/**
 * 
 */
app.factory('UserService',function($http){
		var BASE_URL="http://localhost:8082/Proj2Middlewear"
var userService={}
userService.registerUser=function(user){
			return $http.post(BASE_URL+"/registeruser",user);
			
}
return userService;
})