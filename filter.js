/// <reference path="data.js" />

app.filter("place", function () {
            return function (place) {
                switch (place) {
                    case 1:
                        return "Noida";
                    case 2:
                        return "Delhi";
                    case 3:
                        return "Not disclosed";
                }
            }
        });