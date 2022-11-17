// $(document).ready(function(){
//   getWeather();
// });

function getWeather(searchQuery) {
 var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&APPID="+apiKey;

 $.ajax(url,{success: function(data){
  $(".city").text();
  $(".temp").text(data.main.temp);
 }, error: function(error){
  $(".error-message").text("An error occured");
 }})
};

function searchWeather() {
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}