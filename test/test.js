const BeaconScanner = require("./lib/scanner");

var scanner = new BeaconScanner();

scanner.onDiscover = (peripheral) => {
    // console.log(JSON.stringify(peripheral, null, "    "));
    console.log(JSON.stringify(peripheral));
    // console.log(peripheral);
    console.log("====");
    // var beacon = peripheral["iBeacon"];
    // beacon.rssi = peripheral["rssi"];
    // console.log(JSON.stringify(beacon, null, "    "))
    // console.log("------");
};

scanner.startScan().then(() => {
    console.log("Scanning for BLE devices...")  ;
}).catch((error) => {
    console.error(error);
});
