/**
 * 
 */
app.controller('UserControl',function($scope,UserService,$location,$rootScope,$cookieStore){
	if($rootScope.currentUser!=undefined)
	{
	UserService.getUser().then(function(response){
	
		$scope.user=response.data
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	
	$scope.registerUser=function(){
		//console.log($scope.user)
		UserService.registerUser($scope.user).then(function(response){
				$scope.user={}
	alert("inserted succesfully")
			$location.path('/login')
		},function(response){
			console.log(response.data)
			console.log(response.status)
			$scope.error=response.data
	console.log(response.status)
		})
	}

	$scope.login=function(){
		UserService.login($scope.user).then(function(response){
		$rootScope.currentUser=response.data
	$cookieStore.put('currentUser',response.data)
		//$cookieStore.put('currentUser',response.data)
			$location.path('/home')
			},function(response){
				if(response.status==401)
					{
					$scope.error=response.data
					$location.path('/login')
					}
			})
	}
	$scope.editUserProfile=function(){
		UserService.editUserProfile($scope.user).then(function(response){
			alert("Updated successfully");
			$location.path('/home')
		},function(response){
			if(response.status==401)
				$location.path('/login')
				if(response.status==500)
		$scope.error=response.data
		$location.path('/editprofile')
		})
	}
})
