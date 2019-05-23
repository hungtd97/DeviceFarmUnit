

export function isEmptyObject(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

export function getYmdDot(d) {
    return `${d.getFullYear()}/${('0' + (d.getMonth() + 1)).slice(-2)}/${('0' + d.getDate()).slice(-2)}`
}

export function getTime() {
    var time = new Date().toLocaleTimeString();
    var hours = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    if (time.search('AM') != -1 || time.search('PM') != -1) {
        var AMPM = time.match(/\s(.*)$/)[1];
        if (AMPM == 'PM' && hours < 12) hours = hours + 12;
        if (AMPM == 'AM' && hours == 12) hours = hours - 12;
    }
    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    if (hours < 10) sHours = '0' + sHours;
    if (minutes < 10) sMinutes = '0' + sMinutes;
    hours = sHours + ':' + sMinutes;
    return hours;
    // return '16:00';
}