window.onload = function() {
    var reg = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/;
    document.getElementById("text").onclick = function() {
        if (document.getElementById("phone").value == '') {
            alert("请输入手机号");
        } else if (!reg.test(document.getElementById("phone").value)) {
            alert("格式错误");
        } else {
            window.location.href = "index.html";
        }
    }

    document.getElementById("next").onclick = function() {
        if (document.getElementById("phone").value == '') {
            alert("请输入手机号");
        } else if (!reg.test(document.getElementById("phone").value)) {
            alert("格式错误");
        } else {
            window.location.href = "index.html";
        }
    }

}