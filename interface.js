$( document ).ready(function() {
var thermostat = new Thermostat();

$('#temperature').text( thermostat.temperature )

$(document).click(function() {
  $('#temperature').text( thermostat.temperature )
});

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

});
