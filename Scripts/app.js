$(document).ready(function(data){

	var long;
	var lat;
// checking geolocation support and finding longitude and latitude 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos){

        	 long = pos.coords.longitude;
        	 lat = pos.coords.latitude;
        	 // $('#Weather').html('longitude '+long+'<br>latitude '+lat);

        	 var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=8aff20e04dea9242d1b8fc46290a3264";
        	 // console.log(api)

             // getting json data from api 
        	 $.getJSON(api,function(data){

        	  var weatherType = data.weather[0].description;
        	  var windSpeed = data.wind.speed;
        	  var temp = data.main.temp;
        	  var humidity = data.main.humidity;
        	  var city = data.name;	
        	  var country = data.sys.country;
        	  var tempVar = true;
        	  var sunrise = new Date((data.sys.sunrise)*1000)
        	  var sunset = new Date((data.sys.sunset)*1000)

			  var ftemp // temparature for fahrenheit 
			  var ctemp // temparature for celcius
			  // conversions from kelvin to fahrenheit
			  ftemp = ((temp)*(9/5) - 459.67).toFixed(1);
			// conversion from kelvin to ceclcius
				ctemp =  (temp -273).toFixed(1);
			// winspeed into miles for hour 
				windSpeed = (2.237*(windSpeed)).toFixed(1);

        	  // console.log(weatherType);
        	  // console.log(windSpeed);
        	  // console.log(temp);
        	  // console.log(humidity);
        	  // console.log(city);
        	  // console.log(country);
        	  // console.log(sunrise);
        	  // console.log(sunset);

              //appending data to html page 
        	   $('#city').html(city+", "+country);
        	   $('#ftemp').html(ftemp+" &#8457;");
        	   $('#weatherType').html(weatherType);
        	   $('#windSpeed').html(windSpeed+" mph");
        	   $('#humidity').html(humidity);
        	   $('#sunrise').html(sunrise);
        	   $('#sunset').html(sunset);

               // assigning background image based on weather type 
        	   if(weatherType == "clear sky"){
        	   	$('body').css('background-image','url(http://www.textures.wpgallery.com/images/almost-clear-sky-texture-for-2200x1463-40-210.jpg)');
        	   }
        	   else if(weatherType=='few clouds'){
        	   		$('body').css('background-image','url(http://theroadoflittlemiracles.ghost.io/content/images/2014/Aug/DSC02433.JPG)');
        	   }
        	   else if(weatherType=='scattered clouds'){
        	   		$('body').css('background-image','url(http://www.publicdomainpictures.net/pictures/150000/velka/scattered-clouds-in-a-blue-sky.jpg)');
        	   }
        	   else if(weatherType=='rain'){
        	   		$('body').css('background-image','url(http://www.weatherwizkids.com/wp-content/uploads/2015/02/rain21.jpg)');
        	   }
        	   else if(weatherType=='thunderstorm'){
        	   		$('body').css('background-image','url(http://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg)');
        	   }

        	   else if(weatherType=='snow'){
        	   		$('body').css('background-image','url(http://az616578.vo.msecnd.net/files/2015/11/23/635838532283961018522422338_snow.jpg)');
        	   }

        	   else if(weatherType=='mist'){
        	   		$('body').css('background-image','url(http://www.mrwallpaper.com/wallpapers/Morning-mist.jpg)');
        	   }
        	   else if(weatherType=='shower rain'){
        	   		$('body').css('background-image','url(https://s3-eu-west-1.amazonaws.com/evokeuploads/2015/03/weather1.jpg)');
        	   }
        	   else{
        	   	$('body').css('background-image','url(http://anewscafe.com/wp-content/uploads/2011/03/rainbow-weather.jpg)');
        	   }

        	   // click function for changing the value of fahrenheit to celsius vice versa 
        	   $('#ftemp').click(function(){
        	   		if(tempVar == false){
        	   			$('#ftemp').html(ftemp+" &#8457;");
        	   			tempVar = true;
        	   		}
        	   		else{
        	   			$('#ftemp').html(ctemp+" &#8451;");
        	   			tempVar = false
        	   		}
        	   });
        	  


        	 });

        });
    } 

});


