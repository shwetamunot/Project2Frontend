/**
 * 
 */
app.controller('FriendControl',function($scope,$location,FriendService){
	function getAllSuggestedUsers(){

		FriendService.getAllSuggestedUsers().then(function(response){
	$scope.suggesteduser=response.data
	//alert($scope.suggesteduser)
},function(response){
	if(response.status==401)
		$location.path('/login')
})
}
	function getAllFriends(){
	FriendService.getAllFriends().then(function(response){
		$scope.friends=response.data
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})
	}
	$scope.addFriendRequest=function(ToId){
		FriendService.addFriendRequest(ToId).then(function(response){
			alert("friend request has been succesfully")
			getAllSuggestedUsers()
		},function(response){

			if(response.status==401)
				$location.path('/login')
		})
	}
	getAllSuggestedUsers()
	getAllFriends()
})