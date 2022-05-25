//Adding Data Model For GET Operation Only Data Field To Fetch.

function IotData(id, vehicle, name) { {
            this.Id = id;
            this.Vehicle = vehicle;
            this.Name = name;
    }
}

module.exports = IotData;