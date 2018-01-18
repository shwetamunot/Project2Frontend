/**
'
 * 
 */
var app=angular.module('app',['ngRoute','ngCookies'])

app.config(function($routeProvider){
	alert("configured")
	$routeProvider
	.when('/registration',{
		templateUrl:'view/registration.html',
		controller:'UserControl'
	})
	.when('/login',{
	templateUrl:'view/login.html',
	controller:'UserControl'		
	})
	.when('/editprofile',{
		templateUrl:'view/editprofile.html',
		controller:'UserControl'
	})
.when('/addjob',{
	templateUrl:'view/addjob.html',
	controller:'JobControl'
}) 
.when('/getjobs',{
	templateUrl:'view/joblist.html',
		controller:'JobControl'
})
.when('/addblogs',{
	templateUrl:'view/blogs.html',
	controller:'BlogControl'
})
.when('/getblogs',{
	templateUrl:'view/bloglist.html',
	controller:'BlogControl'
})
.when('/admin/getblog/:id',{
	templateUrl:'view/approvalform.html',
	controller:'BlogDetailControl'
})
.when('/getblog/:id',{
	templateUrl:'view/blogDetails.html',
	controller:'BlogDetailControl'
})
.when('/home',{
	templateUrl:'view/home.html',
	controller:'HomeControl'
})
.when('/uploadpic',{
	templateUrl:'view/profilepicture.html'
})

.when('/suggested',{
	templateUrl:'view/suggestion.html',
	controller:'FriendControl'
		})
.when('/friendlists',{
   templateUrl:'view/friendlist.html',
	   controller:'FriendControl'
})
.when('/chat',{
	templateUrl:'view/chatss.html',
	controller:'ChatControl'
})

		.otherwise({templateUrl:'view/home.html',controller:'HomeControl'})
})	

		
		app.run(function($rootScope,$cookieStore,$location,UserService){
	alert($cookieStore.get('currentUser'))
		if($rootScope.currentUser==undefined)
//	
	$rootScope.currentUser=$cookieStore.get('currentUser')
	  
$rootScope.logout=function(){
				UserService.logout().then(function(response){
					delete $rootScope.currentUser;
					$cookieStore.remove('currentUser')
					$location.path('/home')
				},function(response){
					console.log(response.data)
					$location.path('/login')
				})
				
			}
})

