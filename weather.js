$(document).ready(function(){
    
   $("#submitCity").click(function(){
       return getWeather();
       
   }) 
    
    
});


function getWeather() {
    var city = $("#city").val();
    
    if(city != ''){
        
        $.ajax({
           url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=487cea78a89bc7fa83c75a45969f36fc",
            type: "GET",
            dataType: "jsonp", 
            success: function(data){
                
                console.log(data);
                
                $("#showWeather").html();
            } 
            
        });
        
        
    } else {
        $("#error").html("<div>City Field Cannot be empty</div>")
    }
}