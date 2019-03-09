
function Ship(port) {
  this.currentPort = port;
}

Ship.prototype.setSail = function setSail() {
  this.currentPort = false;
};

Ship.prototype.dock = function dock(port) {
  this.currentPort = port;
};

module.exports = Ship;
