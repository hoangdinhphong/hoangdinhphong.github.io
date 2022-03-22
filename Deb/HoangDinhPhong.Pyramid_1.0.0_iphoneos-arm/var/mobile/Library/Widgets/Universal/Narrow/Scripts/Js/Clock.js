function clock(options) {
    var getTimes = function () {
            var d = new Date(),
                funcs = {
                    hour: function () {
                        var hour = (options.twentyfour === true) ? d.getHours() : (d.getHours() + 11) % 12 + 1;
                        hour = (options.padzero === true) ? (hour < 10 ? "0" + hour : "" + hour) : hour;
                        return hour;
                    },
                    rawhour: function () {
                        return d.getHours();
                    },
                    minute: function () {
                        return (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
                    },
                    rawminute: function () {
                        return d.getMinutes();
                    },
                    am: function () {
                        if (options.twentyfour === true) {
                            return ' ';
                        }
                        return (d.getHours() > 11) ? "PM" : "AM";
                    },
                    date: function () {
                        return d.getDate();
                    },
                    datepadded: function () {
                        return (d.getDate() < 10) ? "0" + d.getDate() : d.getDate();
                    },
                    day: function () {
                        return d.getDay();
                    },
                    month: function () {
                        return d.getMonth();
                    },
                    monthnum: function () {
                        return d.getMonth() + 1;
                    },
                    year: function () {
                        return d.getFullYear();
                    },
                    nth: function (d) {
                        if (d > 3 && d < 21) {
                            return 'th';
                        }
                        switch (d % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                        }
                    },
                    dateplus: function () {
                        return this.date() + this.nth(Number(this.date()));
                    }
                };
            options.success(funcs);
            setTimeout(function () {
                getTimes();
            }, options.refresh);
        };
    getTimes();
}