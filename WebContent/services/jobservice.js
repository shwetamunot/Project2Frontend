/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	jobService.addJob=function(job)
	{
		return $http.post("http://localhost:8082/Proj2Middlewear/savejob",job)
	}
	jobService.getAllJobs=function()
{
		return $http.get("http://localhost:8082/Proj2Middlewear/getalljob")
		}
	jobService.getJob=function(id)
	{
		return $http.get("http://localhost:8082/Proj2Middlewear/getjob/"+id)
	}
	return jobService
})