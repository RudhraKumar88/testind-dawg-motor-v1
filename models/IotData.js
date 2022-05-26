//Adding Data Model For GET Operation Only Data Field To Fetch.

function IotData(id, satellitecount, latitude, longitude, altitude, direction, year, month, day, hh, mm, ss, vehicleid) { {
    this.Id = id;
    this.SatelliteCount = satellitecount;
    this.Latitude = latitude;
    this.Longitude = longitude;
    this.Altitude = altitude;
    this.Direction = direction;
    this.Year = year;
    this.Month = month;
    this.Day = day;
    this.HH = hh;
    this.MM = mm;
    this.SS = ss;
    this.VehicleID = vehicleid;
    }
}

module.exports = IotData;