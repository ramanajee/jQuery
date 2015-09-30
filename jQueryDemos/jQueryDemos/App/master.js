var Test = Test || {};
(function (Test) {
    document.getElementById('increase').addEventListener('click', function () {
        var element = document.getElementById('txtValue');
        element.value = parseInt(element.value) + 1;
    });
    document.getElementById('decrease').addEventListener('click', function () {
        var element = document.getElementById('txtValue');
        element.value = parseInt(element.value) - 1;
    });

    document.getElementById('colorBox').addEventListener('click', function () {
        // 16777215 == ffffff
        this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.style.borderColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    })

    setInterval(function () {
        document.getElementById('colorBox').click();
    }, 1000);
})();