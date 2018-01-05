/**
 * 
 */
app.controller('HomeControl',function($rootScope,$location,HomeService){
	function getNotification(){
		HomeService.getNotificationNotViewed().then(function(response){
			$rootScope.notificationNotViewed=response.data
			$rootScope.notificationNotViewedLength=$rootScope.notificationNotViewed.length
			alert($rootScope.notificationNotViewedLength)
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
		HomeService.getNotificationViewed().then(function(response){
			$rootScope.notificationViewed=response.data
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	if($rootScope.currentUser!=undefined)
	{
	getNotification()
	getAllPendingRequests()
	}
	$rootScope.updatelength=function(){
		$rootScope.notificationNotViewedLength=0
	}
	
	$rootScope.updateNotification=function(id){
	HomeService.updateNotification(id).then(function(response){
		getNotification()
		},function(response){
			if(response.status==401)
				$location.path('/login')
		
	})
	}
	function getAllPendingRequests(){
		HomeService.getAllPendingRequests().then(function(response){
		$rootScope.pendingrequests=response.data
		$rootScope.pendingrequestLength=$rootScope.pendingrequests.length
		},function(response){
			if(response.status==401)
				$location.path('/login')		
		})
	}
	$rootScope.updatePendingRequest=function(pendingrequest,updatedstatus){
		pendingrequest.status=updatedstatus
		HomeService.updatePendingRequest(pendingrequest).then(function(response){
			getAllPendingRequests()
		},function(response){
		if(response.status==401)
				$location.path('/login')		
		
		})
	}
	
})