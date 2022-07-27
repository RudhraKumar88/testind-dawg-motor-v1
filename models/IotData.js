//Adding Data Model For GET Operation Only Data Field To Fetch.

// function IotData(id, satellitecount, latitude, longitude, altitude, direction, vehicleid, created,) { {
//     this.Id = id;
//     this.SatelliteCount = satellitecount;
//     this.Latitude = latitude;
//     this.Longitude = longitude;
//     this.Altitude = altitude;
//     this.Direction = direction;
//     this.VehicleID = vehicleid;
//     this.Created = created;
//     }
// }

// module.exports = IotData;

function IotData(id, absolulte_barometric_pressure, air_intake_temperature, 
    ambient_air_temperature, acceleration, altitude, angular_rate,
    calculated_engine_load, control_module_voltage, created, 
    distance_traveled_with_mil_on, direction, engine_RPM,
    fuel_system_status, latitude, longitude, run_time_since_engine_start,
    satellitecount, speed, temperature, vehicle_speed, vehicleid ) { {
this.Id = id;
this.ABSOLULTE_BAROMETRIC_PRESSURE = absolulte_barometric_pressure;
this.AIR_INTAKE_TEMPERATURE = air_intake_temperature;
this.AMBIENT_AIR_TEMPERATURE = ambient_air_temperature;
this.Acceleration = acceleration;
this.Altitude = altitude;
this.Angular_rate = angular_rate;
this.CALCULATED_ENGINE_LOAD = calculated_engine_load;
this.CONTROL_MODULE_VOLTAGE = control_module_voltage;
this.Created = created;
this.DISTANCE_TRAVELED_WITH_MIL_ON = distance_traveled_with_mil_on;
this.Direction = direction;
this.ENGINE_RPM = engine_RPM;
this.FUEL_SYSTEM_STATUS = fuel_system_status;
this.Latitude = latitude;
this.Longitude = longitude;
this.RUN_TIME_SINCE_ENGINE_START = run_time_since_engine_start;
this.SatelliteCount = satellitecount;
this.Speed = speed;
this.Temperature = temperature;
this.VEHICLE_SPEED = vehicle_speed;
this.VehicleID = vehicleid;
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