var cordinate,lat,long,temp,api,key,weather;

api="http://api.openweathermap.org/data/2.5/weather?";
key="&appid=690660b930904f0cee1975853d5a2375";


var getWeather = function(units){
	$.getJSON("http://ipinfo.io", function(data) {
 	var cordinate=data.loc.split(',');
 	lat="lat="+cordinate[0];
 	long="&lon="+cordinate[1];
    $("#ippart").html(data.city);
    $.getJSON(api + lat + long + key, function(weather){

    	//checking the temperature
    	switch(units){
    		case celsius:
    			temp = Math.round(weather.main.temp - 273.15);
        		unit = "&#8451";
       			break;
      		case fahrenheit:
		        temp = Math.round((weather.main.temp - 273.15) * 1.8 + 32.00);
		        unit = "&#8457";
		        break; 
    	}

    	//getting the background to change

    	wtype = weather.weather[0].main;
    	console.log(wtype);					
    	switch (wtype){
    		case "Clear":
				$("body").css("background-image","url(./image/clear.jpg)");
				break;
			case "Clouds":
				$("body").css("background-image","url(./image/cloud.jpg)");
				break;
            case "Snow":
              $("body").css("background-image","url(./image/snow.jpg)");
              break;
            case "Rain":
				$("body").css("background-image","url(./image/rain.jpg)");
				break;
			case "Mist":
			case "Haze":
				$("body").css("background-image","url(./image/mist.jpg)");
				break;
            case "Thunderstorm":
              $("body").css("background-image","url(./image/thunder.jpg)");
              break;
			// default:
			// 	$("body").css("background-image","url('http://gdurl.com/0gii')");
    	}

    	$('#wed').html(temp + unit);
    	$('#sign').html(weather.weather[0].main + '<br /><img src="http://openweathermap.org/img/w/'+ weather.weather[0].icon + '.png">');
    
    });
});
};
window.onload=getWeather(celsius);
$(document).ready(function(){
	$("#celsius").click(function(){
		getWeather(celsius);
	});
});
$(document).ready(function(){
	$("#fahrenheit").click(function(){
		getWeather(fahrenheit);
	});
});

