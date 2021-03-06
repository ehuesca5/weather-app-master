// Spokane
$.simpleWeather({
    location: '99203',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.spokane .temp').text(weather.temp);
      $('.spokane .city').text(weather.city);
      $('.spokane img').attr('src', weather.image);
      $('.spokane .title').text(weather.title);
      $('.spokane .currently').text(weather.currently);
        
        
        //Forecast
        $('.spokane .forecast .date').text(weather.forecast[1].date);
        $('.spokane .forecast .day').text(weather.forecast[1].day);
        $('.spokane .forecast .high').text(weather.forecast[1].high);
        $('.spokane .forecast .low').text(weather.forecast[1].low);
  
  
  
      // If this condition, show this icon
        if ( 51 >= weather.code && 90 <= weather.code  ) {
            
         $('.spokane .wi').addClass('wi-day-sunny-overcast');   
            
        }
         if ( 31 >= weather.code && 50 <= weather.code  ) {
            
         $('.spokane .wi').addClass('wi-day-haze');   
            
        }
        if ( 26 >= weather.code && 30 <= weather.code  ) {
            
         $('.spokane .wi').addClass('wi-day-cloudy');
            
            
        }
        if ( 20 >= weather.code && 25 <= weather.code  ) {
            
         $('.spokane .wi').addClass('wi-day-sleet');   
            
        }
        
        if ( 10 >= weather.code && 19 <= weather.code  ) {
            
         $('.spokane .wi').addClass('wi-snow');  
       
            
        }
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
      $('body').append('<p>No Weather. :-|</>');    
    }
  
  });

// Seattle
$.simpleWeather({
    location: '98105',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.seattle .temp').text(weather.temp);
      $('.seattle .city').text(weather.city);
      $('.seattle img').attr('src', weather.image);
       $('.seattle .title').text(weather.title);
         $('.seattle .currently').text(weather.currently);
                //Forecast
        $('.seattle .forecast .date').text(weather.forecast[1].date);
        $('.seattle .forecast .day').text(weather.forecast[1].day);
        $('.seattle .forecast .high').text(weather.forecast[1].high);
        $('.seattle .forecast .low').text(weather.forecast[1].low);
  
              // If this condition, show this icon
        if ( 51 >= weather.code && 90 <= weather.code  ) {
            
         $('.seattle .wi').addClass('wi-day-sunny-overcast');   
            
        }
         if ( 31 >= weather.code && 50 <= weather.code  ) {
            
         $('.seattle .wi').addClass('wi-day-haze');   
            
        }
        if ( 26 >= weather.code && 30 <= weather.code  ) {
            
         $('.seattle .wi').addClass('wi-day-cloudy');   
            
        }
        if ( 20 >= weather.code && 25 <= weather.code  ) {
            
         $('.seattle .wi').addClass('wi-day-sleet');   
            
        }
        if ( 10 >= weather.code && 19 <= weather.code  ) {
            
         $('.seattle .wi').addClass('wi-snow');   
           
        }
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
      $('body').append('<p>No Weather. :-|</>');    
    }
  
  });


// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Get geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
      $('.geo img').attr('src', weather.image);
      $('.geo .title').text(weather.title);  
         $('.geo .currently').text(weather.currently);
                //Forecast
        $('.geo .forecast .date').text(weather.forecast[1].date);
        $('.geo .forecast .day').text(weather.forecast[1].day);
        $('.geo .forecast .high').text(weather.forecast[1].high);
        $('geo .forecast .low').text(weather.forecast[1].low);
  
        
          // If this condition, show this icon
        if ( 51 >= weather.code && 90 <= weather.code  ) {
            
         $('.geo .wi').addClass('wi-day-sunny-overcast');   
            
        }
         if ( 31 >= weather.code && 50 <= weather.code  ) {
            
         $('.geo .wi').addClass('wi-day-haze');   
            
        }
        if ( 26 >= weather.code && 30 <= weather.code  ) {
            
         $('.geo .wi').addClass('wi-day-cloudy');   
            
        }
        if ( 20 >= weather.code && 25 <= weather.code  ) {
            
         $('.geo .wi').addClass('wi-day-sleet');   
            
        }
        if ( 10 >= weather.code && 19 <= weather.code  ) {
            
         $('.geo .wi').addClass('wi-snow');   
           
        }
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
    
};