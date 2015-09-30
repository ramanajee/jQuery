/// <reference path="C:\Users\RAMANAJEE\Source\Repos\jQuery\jQueryDemos\jQueryDemos\Scripts/jquery-2.1.4.js" />


$(document).ready(function() {
    alert('ready method executed')
})

$(window).load(function() {
    alert('windows.load method executed');
});

$('#iframe').load(function () {
    alert('iframe.load metghod executed')
});