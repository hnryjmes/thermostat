function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.maxTemp = 25;
  this.powerSave = true;
}

Thermostat.prototype.up = function() {
  if (this.temp >= this.maxTemp) {
    this.temp = this.maxTemp;
  } else {
    this.temp++;
  }};

Thermostat.prototype.down = function() {
  if (this.temp <= this.MIN_TEMP) {
    this.temp = this.MIN_TEMP;
  } else {
    this.temp--;
  }
};

Thermostat.prototype.togglePowerSave = function() {
  if(this.powerSave) {
    this.maxTemp = 32;
    this.powerSave = false;
  } else {
    this.maxTemp = 25;
    this.powerSave = true;
  }
};
