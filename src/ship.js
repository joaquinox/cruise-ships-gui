
function Ship(port) {
  this.currentPort = port;
  // this.currentPort.addShip(this);
}

Ship.prototype.setSail = function setSail() {
  this.currentPort = !true;
};

Ship.prototype.dock = function dock(port) {
  this.currentPort = port;
};

module.exports = Ship;
