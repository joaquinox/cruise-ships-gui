
function Ship(startingPort) {
    this.startingPort = startingPort;
}

Ship.prototype.setSail = function() {
    this.startingPort = !true;
    return 'Bon voyage!';
};

module.exports = Ship;
