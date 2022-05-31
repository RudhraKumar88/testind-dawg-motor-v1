//Adding Data Model For GET Operation Only Data Field To Fetch.

function IotData(id, satellitecount, latitude, longitude, altitude, direction, vehicleid, created,) { {
    this.Id = id;
    this.SatelliteCount = satellitecount;
    this.Latitude = latitude;
    this.Longitude = longitude;
    this.Altitude = altitude;
    this.Direction = direction;
    this.VehicleID = vehicleid;
    this.Created = created;
    }
}

module.exports = IotData;


// {
//     "Id" : "id",
//     "SatelliteCount" : "satellitecount",
//     "Latitude" : "latitude",
//     "Longitude" : "longitude",
//     "Altitude" : "altitude",
//     "Direction" : "direction",
//     "Year" : "year",
//     "Month" : "month",
//     "Day" : "day",
//     "HH" : "hh",
//     "MM" : "mm",
//     "SS" : "ss",
//     "VehicleID" : "vehicleid"
// }