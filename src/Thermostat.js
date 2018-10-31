'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MED_ENERGY_USAGE_LIMIT = 18;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MIN_TEMP;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (!this.powerSavingMode) {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
  return this.temperature === this.MAX_TEMP_PSM_ON;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  if (this.temperature > this.MAX_TEMP_PSM_ON) {
    this.temperature = this.MAX_TEMP_PSM_ON;
  }
  this.powerSavingMode = true;
}

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.temperature < this.MED_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temperature < this.MAX_TEMP_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
}

Thermostat.prototype.getPowerStatus = function() {
  return this.powerSavingMode ? 'On' : 'Off';
}
