/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	var BASE_URL="http://localhost:8082/Proj2Middlewear"
friendService.getAllSuggestedUsers=function(){
		return $http.get(BASE_URL+"/suggestedusers")
	}
	
	friendService.addFriendRequest=function(ToId){
		return $http.post(BASE_URL+"/addfriendrequest/"+ToId)
	}
	
	friendService.getAllFriends=function(){
		return $http.get(BASE_URL+"/getfriend")
	}
	return friendService;
})