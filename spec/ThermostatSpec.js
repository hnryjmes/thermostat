describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should start with temperature at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('should be able to increase temperature', function() {
    thermostat.up();
    expect(thermostat.temp).toEqual(21);
  });

  it('should be able to decrease temperature', function() {
    thermostat.down();
    expect(thermostat.temp).toEqual(19);
  });

  it('should not set temperature below 10', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.temp).toEqual(10);
  });

  it('should not set temperature above 25', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.temp).toEqual(25);
  });

  it('should report current energy usage when temp is 20', function() {
    expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');

  });

  it('should report current energy usage when temp is 17', function() {
    for (var i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.currentEnergyUsage()).toEqual('low-usage');

  });
  it('should report current energy usage when temp is 25', function() {
    for (var i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
  });
});
