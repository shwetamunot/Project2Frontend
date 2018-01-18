/**
 * 
 */
app.filter('reverse',function() {
	return function(items){
		return items.slice().reverse();
	}
})
app.factory('socket',function($rootScope){
	alert("appfactory")
	var socket=new SockJS("/Proj2Middlewear/chatmodule")
	alert("accept");
	var stompClient=Stomp.over(socket);
	stompClient.connect('','',function(frame){
		alert("ds")
		$rootScope.$broadcast('sockConnected',frame);
		alert("connected");
	})
	return{
		stompClient:stompClient
	}
})