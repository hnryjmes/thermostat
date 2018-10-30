function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
}

Thermostat.prototype.up = function() {
  if (this.temp >= this.MAX_TEMP) {
    this.temp = this.MAX_TEMP;
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
