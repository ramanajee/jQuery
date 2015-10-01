var Register = Register || {};

(function (Register) {
    var usernameElement = document.getElementById('txtUserName');
    var passwordElement = document.getElementById('txtPassword');
    document.getElementById('btnSubmit').addEventListener('click', function () {
        if (validation()) {
            var userName = document.getElementById('txtUserName').value;
            var password = document.getElementById('txtPassword').value;
            document.getElementById('result').innerHTML = "user name :" + userName + "<br>" + "password" + password;
        }
    })
    document.getElementById('btnReset').addEventListener('click', function() {
        usernameElement.value = '';
        passwordElement.value = '';
    })
    function validation() {
        var username = usernameElement.value;
        var password = passwordElement.value;
        if (!username) {
            usernameElement.style.borderColor = 'red';
            return false;
        }
        else if (!password) {
            passwordElement.style.borderColor = 'red';
            return false;
        }
        else {
            usernameElement.style.borderColor = '';
            passwordElement.style.borderColor = '';
            return true;
        }
    }
})();
function theme() {
    var resultDiv = document.getElementById('result');
    resultDiv.style.borderColor = "blue";
    resultDiv.style.backgroundColor = "green"
    resultDiv.style.height = "200";
    resultDiv.style.width = "600";
}


