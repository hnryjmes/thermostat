$( document ).ready(function() {
var thermostat = new Thermostat();
const API_KEY = '53c595b5439bec609a86dee8177fd19f';
const API_CALL = `http://api.openweathermap.org/data/2.5/weather?q={London}&units=metric&APPID={${API_KEY}}`;

const someJSON = '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}';

$('#temperature').text( thermostat.temperature )

$('#power-status').text( "PSM " + thermostat.getPowerStatus() );

$(document).click(function() {
  $('#temperature').text( thermostat.temperature );
  $('#power-status').text( "PSM " + thermostat.getPowerStatus() );
  $('#temperature').attr('class', thermostat.currentEnergyUsage());
})

$( "#tempUp" ).click(function( event ) {
  thermostat.up();
});

$( "#tempDown" ).click(function( event ) {
  thermostat.down();
});

$( "#reset" ).click(function( event ) {
  thermostat.reset();
});

$( "#powerSavingModeOn" ).click(function( event ) {
  thermostat.switchPowerSavingModeOn();
});
$( "#powerSavingModeOff" ).click(function( event ) {
  thermostat.switchPowerSavingModeOff();
});

//
$.get(API_CALL, function(response) {
  $('#cityTemp').text( "London: " + response.main.temp );
});

$('#cityTemp2').text( "London: " + JSON.parse(someJSON).main.temp );

});
