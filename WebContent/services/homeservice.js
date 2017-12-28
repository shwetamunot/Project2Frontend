/**
 * 
 */
app.factory('HomeService',function($http){
	var homeService={}
	var BASE_URL="http://localhost:8082/Proj2Middlewear"
homeService.getNotificationNotViewed=function(){
		return $http.get(BASE_URL +"/getnotification/"+0)
	}
	homeService.getNotificationViewed=function(){
		return $http.get(BASE_URL +"/getnotification/"+1)
	}
	
	homeService.updateNotification=function(id){
		return $http.put(BASE_URL +"/updatenotification/"+id)
	}
	
	return homeService;
})