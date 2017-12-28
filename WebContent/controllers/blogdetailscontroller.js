/**
 * 
 */
app.controller('BlogDetailControl',function($scope,$location,$routeParams,BlogService){
	var id=$routeParams.id
$scope.isRejected=false
	$scope.showComment=false
	
BlogService.getBlogPost(id).then(function(response){
	$scope.blogPost=response.data
},function(response){
	if(response.status==401){
		$location.path('/login')
	}
		
})

BlogService.userLikes(id).then(function(response){
     if(response.data=='')
         $scope.liked=false
     else
		$scope.liked=true
      alert($scope.liked)
},function(response){
	if(response.status==401){
		$location.path('/login')
	}
	
})



$scope.showRejectionTxt=function(val){
		$scope.isRejected=val
}

	
$scope.updateBlogPost=function(){
		BlogService.updateBlogPost($scope.blogPost,$scope.rejectionReason).then(function(response){
		alert("save")
			$location.path('/getblogs')
		},function(response){
		if(response.status==401){
			$location.path('/login')
			}
		if(response.status==500){
			alert("erorr")
			alert(response.data)
		}
		})
	}

$scope.updateLikes=function(){
	BlogService.updateLikes($scope.blogPost).then(function(response){
		$scope.blogPost=response.data
		$scope.liked=!$scope.liked;
	},function(response){
		if(response.status==401){
			$location.path('/login')
		}	
	})
  }
$scope.addComment=function(){
if($scope.commentText==undefined){
	alert("please enter some comment")
}else
	BlogService.addComment($scope.commentText,id).then(function(response){
		alert("succesfully posted")
		$scope.commentText=''
		$scope.blogPost=response.data
	},function(response){
		if(response.status==401){
			$location.path('/login')
			}
		if(response.status==500){
			alert("erorr")
	$scope.error=response.data
		}
		
	})
}
$scope.showComments=function(){
	$scope.showComment=!$scope.showComment
}
})