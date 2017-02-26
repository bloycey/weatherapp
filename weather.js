$(document).ready(function(){
    
   $("#submitCity").click(function(){
       return getWeather();
       
   }) 
   
   document.addEventListener('keypress', function(event) {
    
    if (event.keyCode === 13 || event.which === 13) {
        return getWeather();
    }
   });
                             
    
    
});


function getWeather() {
    var city = $("#city").val();
    $("#error").html("");
    
    if(city != ''){
        
        $.ajax({
           url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=487cea78a89bc7fa83c75a45969f36fc",
            type: "GET",
            dataType: "jsonp", 
            success: function(data){
                
                var widget = showResults(data)
                
                $("#showWeather").html(widget);
                
                $("#city").val('');
            } 
            
        });
        
        
    } else {
        $("#error").html("<div>City Field Cannot be empty</div>")
    }
}

function showResults(data){
    return  "<h2>Current Weather for: <strong>" + data.name + ", </strong>" + data.sys.country + "</h2>" +
            "<br>" +
            "<p>Temperature: " + data.main.temp + "&deg;C</p>" +
            "<p>Pressure: " + data.main.pressure + "</p>" + 
            "<p>Humidity: " + data.main.humidity + "</p>" +
            "<p>Min Temperature: " + data.main.temp_min + "</p>" +
            "<p>Max Temperature: " + data.main.temp_max + "</p>" +
            "<p>Wind Speed: " + data.wind.speed + "</p>";
}

















