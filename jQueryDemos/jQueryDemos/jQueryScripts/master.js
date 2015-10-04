/// <reference path="C:\Users\RAMANAJEE\Source\Repos\jQuery\jQueryDemos\jQueryDemos\Scripts/jquery-2.1.4.js" />


$(document).ready(function() {
    window.userName = '';
    window.password = '';
})

$(window).load(function () {
    alert('user name is ' + window.userName + ' ::::: ' + 'password: ' + window.password);
});

$('#iframe').load(function () {
    window.userName = ' Ramanajee';
    window.password = ' yourpasswordisincorrect';
});

$('#content').load("https://desktop.github.com/");


(function ($) {
    var number = $('txtValue').val();
    console.log(number);
    $('#increase').click(function() {
        $('#txtValue').val( number + 1);
    });
    $('#decrease').click(function () {
        $('#txtValue').val(number - 1);
    });
})(jQuery);