/**
 * 
 */
app.controller('BlogControl',function($scope,BlogService,$location,$rootScope){
	$scope.saveBlog=function(){
		BlogService.saveBlog($scope.blog).then(function(response){
			alert("blog inserted succesfully and waiting for approval")
			$location.path('/home')
			
		},function(response){
			if(response.status==401){
				$location.path('/login')
			}
		if(response.status==500){
			$scope.error=response.data
			
		}
			})
		
	}
	
	BlogService.getBlogsApproved().then(function(response){
		$scope.blogsApproved=response.data
	},function(response){
		if(response.data==401)
			$location.path('/login')
		})
	
		if($rootScope.currentUser.role=='Admin'){
		BlogService.getBlogsWaitingForApproval().then(function(response){
			$scope.blogsWaitingForApproval=response.data
		},function(response){
			if(response.status==401){
			if(response.data.code==5){
				$location.path('/login')	
			}else{
				alert(response.data.message)
				$location.path('/home')
			}
			}
		
		})
		}
})