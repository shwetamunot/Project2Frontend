/**
 * 
 */
app.controller('UserControl',function($scope,UserService,$location){
	$scope.registerUser=function(){
		//console.log($scope.user)
		UserService.registerUser($scope.user).then(function(response){
				$scope.user={}
	alert("inserted succesfully")
			$location.path('/home')
		},function(response){
			$scope.error=response.data
	console.log(response.status)
		})
	}
})