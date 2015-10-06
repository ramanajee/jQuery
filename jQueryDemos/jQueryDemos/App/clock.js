function digitalClock() {
    var d = new Date()
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var now = new Date();
    now.getDate();
    var t = d.toLocaleTimeString()
    document.getElementById("clock-large").innerHTML = t + "<br>" + days[now.getDay()];

}
setInterval(function () { digitalClock() }, 1000)