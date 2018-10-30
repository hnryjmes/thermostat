describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should start temperature at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('should be able to increase temperature', function() {
    thermostat.up();
    expect(thermostat.temp).toEqual(21);
  });
});
