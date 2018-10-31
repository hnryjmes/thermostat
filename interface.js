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

$( "#powerSavingOn" ).click(function( event ) {
  thermostat.switchPowerSavingModeOn();
});
$( "#powerSavingOff" ).click(function( event ) {
  thermostat.switchPowerSavingModeOff();
});

});
