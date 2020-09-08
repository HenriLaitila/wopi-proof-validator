const BN = require("bn.js");
const milisecondEpochDiff = 62135596800000;

module.exports = function(timeString) {
    var time = new BN(timeString);
    var approximateTimestamp = time
        .div(new BN('10000'))
        .sub(new BN('62135596800000'))
        .toNumber();
    return approximateTimestamp;
}