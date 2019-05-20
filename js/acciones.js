// JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready",OnDeviceReady,false);
	
});

	function onDeviceready(){
		
		$('#posicion').on('click',function(){
			getPosition ();
		});
	}
		
	function getPosition(){
		var options={
			enableHighAccuracy :true,
			maximumAge:3600000	
		}
		
		var watchID= navigator.geolocation.getCurrentPosition(OnSuccess,onError,options);
		
		function onSuccess(position){
			
			alert('Latitude:' +   position.coords.latitude    +'\n'+ 
		'Longitude:' +   position.coords.longitude    +'\n');
		};
		
function onError(error){
	alert('code:' +  error.code  +'\n' + 'message:' + error.message + '\n');
}
	}

