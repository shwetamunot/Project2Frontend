/**
 * 
 */
app.controller('JobControl',function($scope,JobService,$location){
	$scope.showDetails=false
	$scope.addJob=function(){
		JobService.addJob($scope.job).then(function(response){
			alert("job details inserted successfully");
$location.path('/home')
		},function(response){
			if(response.status==401){
				if(resonse.code==6)
				alert("access denied")
				else{
				$scope.error=response.data
				$location.path('/login')
					
				}
			}
			if(response.status==500)
			{
				$scope.error=response.data
				$location.path('/addjob')
			}
			})
	}
	
	$scope.getJob=function(id)
	{
		$scope.showDetails=true
			JobService.getJob(id).then(function(response){
			alert("view job")
				$scope.job=response.data
		},function(response)
		{
			if(response.status==401)
				$scope.error=response.data
				$location.path('/login')
		})
	}
	
	function getAllJobs(){
		JobService.getAllJobs().then(function(response){
			$scope.jobs=response.data
			},function(response)
			{
				if(response.data==401){
					$scope.error=response.data
					$location.path('/login')
				}
			})
	}
	getAllJobs()
})