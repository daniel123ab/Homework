window.onload = function() {

    //扫码账户切换
    document.getElementById("sm").onclick = function() {
        document.getElementById("sm").setAttribute("style", "color:#B10012;font-weight: bold");
        document.getElementById("zh").setAttribute("style", "color:#4e4e4e;font-weight: inherit");
        document.getElementById("smm").setAttribute("style", "display:block");
        document.getElementById("zhh").setAttribute("style", "display:none");
    }
    document.getElementById("zh").onclick = function() {
        document.getElementById("zh").setAttribute("style", "color:#B10012;font-weight: bold");
        document.getElementById("sm").setAttribute("style", "color:#4e4e4e;font-weight: inherit");
        document.getElementById("zhh").setAttribute("style", "display:block");
        document.getElementById("smm").setAttribute("style", "display:none");
    }

    //账号登录审核
    var email = /^\w+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
    var phone = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/;
    var pass = /^[a-zA-Z]\w{5,17}$/;
    document.getElementById("login").onclick = function() {
        if (document.getElementById("name").value == '' && document.getElementById("password").value == '') {
            document.getElementById("warn").setAttribute("style", "display:block");
            document.getElementById("warn").innerHTML = '请输入用户名和密码';
        } else if (document.getElementById("password").value == '') {
            document.getElementById("warn").setAttribute("style", "display:block");
            document.getElementById("warn").innerHTML = '请输入密码';
        } else if (document.getElementById("name").value == '') {
            document.getElementById("warn").setAttribute("style", "display:block");
            document.getElementById("warn").innerHTML = '请输入用户名';
        } else if (!pass.test(document.getElementById("password").value)) {
            document.getElementById("warn").setAttribute("style", "display:block");
            document.getElementById("warn").innerHTML = '密码格式错误';
        } else if (phone.test(document.getElementById("name").value)) {
            window.location.href = "index.html";
        } else if (email.test(document.getElementById("name").value)) {
            window.location.href = "index.html";
        } else {
            document.getElementById("warn").setAttribute("style", "display:block");
            document.getElementById("warn").innerHTML = '账户名和密码不匹配';
        }
    }
}