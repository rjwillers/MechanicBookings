var FakeMechanicService = {
    getClients: function () {
            return [{ name: "abc", email: "abc@mail.com" }];
        },
        getJobs: function () {
            return [{ name: "minor service", cost: "200" }];
        },
        getMechanics: function () {
            return [{ "name": "Roger" }];
        },
        getAllBookings: function () {
            return [{ client: "abc", jobs: ["minor service", "gear works"], date: "10/02/2014" }];
        },
        makeBooking: function (inClient, inJobsList, inMechanic, inDate) {
            return true;
        },
        confirmBooking: function () {
            return true;
        },
        retrieveBooking: function () {
            return [{ "Client": "Masha", "Job": "gear works", "Mechanic": "Andy", "Date": "2014-03-01" }];
        }
};

var FakeLocation = {
    route: "",
    path: function (path) {
        this.route = path;
    }
};
