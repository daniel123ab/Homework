window.onload = function() {

    var time_start = this.startClock();
    var time_lbone = this.startLbOne();
    var time_lbtwo = this.startLbTwo();
    var time_lbfour = this.startLbFour();
    var time_lbfive = this.startLbFive();
    //下拉菜单显示隐藏
    //我的京东
    document.getElementById("myjd").onmouseover = function() {
        document.getElementById("my").setAttribute("style", "display:block");
        document.getElementById("myjd").setAttribute("style", "background-color:white;border-left: 0.8px solid #989898;border-right: 0.8px solid #989898;");
    }
    document.getElementById("my").onmouseover = function() {
        document.getElementById("my").setAttribute("style", "display:block");
        document.getElementById("myjd").setAttribute("style", "background-color:white;border-left: 0.8px solid #989898;border-right: 0.8px solid #989898;");
    }
    document.getElementById("my").onmouseleave = function() {
        document.getElementById("my").setAttribute("style", "display:none");
        document.getElementById("myjd").setAttribute("style", "background-color:none;border:none");
    }
    document.getElementById("myjd").onmouseleave = function() {
            document.getElementById("my").setAttribute("style", "display:none");
            document.getElementById("myjd").setAttribute("style", "background-color:none;border:none");
        }
        //企业采购
    document.getElementById("qycgg").onmouseover = function() {
        document.getElementById("qycg").setAttribute("style", "display:block");
        document.getElementById("qycgg").setAttribute("style", "background-color:white;border-left: 0.8px solid #989898;border-right: 0.8px solid #989898;");
    }
    document.getElementById("qycg").onmouseover = function() {
        document.getElementById("qycg").setAttribute("style", "display:block");
        document.getElementById("qycgg").setAttribute("style", "background-color:white;border-left: 0.8px solid #989898;border-right: 0.8px solid #989898;");
    }
    document.getElementById("qycg").onmouseleave = function() {
        document.getElementById("qycg").setAttribute("style", "display:none");
        document.getElementById("qycgg").setAttribute("style", "background-color:none;border:none");
    }
    document.getElementById("qycgg").onmouseleave = function() {
            document.getElementById("qycg").setAttribute("style", "display:none");
            document.getElementById("qycgg").setAttribute("style", "background-color:none;border:none");
        }
        //客户服务
    document.getElementById("khfww").onmouseover = function() {
        document.getElementById("khfw").setAttribute("style", "display:block");
        document.getElementById("khfww").setAttribute("style", "background-color:white;border-left: 0.8px solid #989898;border-right: 0.8px solid #989898;");
    }
    document.getElementById("khfw").onmouseover = function() {
        document.getElementById("khfw").setAttribute("style", "display:block");
        document.getElementById("khfww").setAttribute("style", "background-color:white;border-left: 0.8px solid #989898;border-right: 0.8px solid #989898;");
    }
    document.getElementById("khfw").onmouseleave = function() {
        document.getElementById("khfw").setAttribute("style", "display:none");
        document.getElementById("khfww").setAttribute("style", "background-color:none;border:none");
    }
    document.getElementById("khfww").onmouseleave = function() {
        document.getElementById("khfw").setAttribute("style", "display:none");
        document.getElementById("khfww").setAttribute("style", "background-color:none;border:none");
    }

    //网站导航
    document.getElementById("wzdhh").onmouseover = function() {
        document.getElementById("wzdh").setAttribute("style", "display:block");
        document.getElementById("wzdhh").setAttribute("style", "background-color:white;border-left: 0.8px solid #989898;border-right: 0.8px solid #989898;");
    }
    document.getElementById("wzdh").onmouseover = function() {
        document.getElementById("wzdh").setAttribute("style", "display:block");
        document.getElementById("wzdhh").setAttribute("style", "background-color:white;border-left: 0.8px solid #989898;border-right: 0.8px solid #989898;");
    }
    document.getElementById("wzdh").onmouseleave = function() {
        document.getElementById("wzdh").setAttribute("style", "display:none");
        document.getElementById("wzdhh").setAttribute("style", "background-color:none;border:none");
    }
    document.getElementById("wzdhh").onmouseleave = function() {
        document.getElementById("wzdh").setAttribute("style", "display:none");
        document.getElementById("wzdhh").setAttribute("style", "background-color:none;border:none");
    }

    //左侧分类
    var item = document.getElementsByClassName("item_menu");
    for (i in item) {
        document.getElementsByClassName("item_menu")[i].onmouseover = function() {
            document.getElementById("more").setAttribute("style", "display:block");
        }
        document.getElementById("more").onmouseover = function() {
            document.getElementById("more").setAttribute("style", "display:block");
        }
        document.getElementsByClassName("item_menu")[i].onmouseleave = function() {
            document.getElementById("more").setAttribute("style", "display:none");
        }
        document.getElementById("more").onmouseleave = function() {
            document.getElementById("more").setAttribute("style", "display:none");
        }
    }


    //图片轮播1
    var piclist1 = document.getElementsByClassName("piccc");
    var index = 0;
    document.getElementById("button_right").onclick = function() {
        //找到当前图片的下一张图片 进行显示  同时让其他都消失
        index++;
        if (index == piclist1.length) {
            index = 0;
        }
        // console.log(index);
        for (var i = 0; i < piclist1.length; i++) {
            piclist1[i].style.display = "none";
        }
        piclist1[index].style.display = "block";
    }
    document.getElementById("button_left").onclick = function() {
        //找到当前图片的下一张图片 进行显示  同时让其他都消失
        index--;
        if (index == -1) {
            index = piclist1.length - 1;
        }
        // console.log(index);
        for (var i = 0; i < piclist1.length; i++) {
            piclist1[i].style.display = "none";
        }
        piclist1[index].style.display = "block";
    }

    //图片轮播2
    var piclist21 = document.getElementsByClassName("piccc21");
    var piclist22 = document.getElementsByClassName("piccc22");
    var piclist23 = document.getElementsByClassName("piccc23");
    var index1 = 0;
    var index2 = 0;
    var index3 = 0;
    document.getElementById("b2_right").onclick = function() {
        //找到当前图片的下一张图片 进行显示  同时让其他都消失
        index1++;
        index2++;
        index3++;
        if (index1 == piclist21.length) {
            index1 = 0;
        }
        if (index2 == piclist22.length) {
            index2 = 0;
        }
        if (index3 == piclist23.length) {
            index3 = 0;
        }
        // console.log(index2);
        for (var i = 0; i < piclist21.length; i++) {
            piclist21[i].style.display = "none";
        }
        for (var i = 0; i < piclist22.length; i++) {
            piclist22[i].style.display = "none";
        }
        for (var i = 0; i < piclist23.length; i++) {
            piclist23[i].style.display = "none";
        }
        piclist21[index1].style.display = "block";
        piclist22[index2].style.display = "block";
        piclist23[index3].style.display = "block";
    }
    document.getElementById("b2_left").onclick = function() {
        //找到当前图片的下一张图片 进行显示  同时让其他都消失
        index1--;
        index2--;
        index3--;
        if (index1 == -1) {
            index1 = piclist21.length - 1;
        }
        if (index2 == -1) {
            index2 = piclist22.length - 1;
        }
        if (index3 == -1) {
            index3 = piclist23.length - 1;
        }
        for (var i = 0; i < piclist21.length; i++) {
            piclist21[i].style.display = "none";
        }
        for (var i = 0; i < piclist22.length; i++) {
            piclist22[i].style.display = "none";
        }
        for (var i = 0; i < piclist23.length; i++) {
            piclist23[i].style.display = "none";
        }
        piclist21[index1].style.display = "block";
        piclist22[index2].style.display = "block";
        piclist23[index3].style.display = "block";
    }


    //图片轮播3
    var piclist31 = document.getElementsByClassName("seckill_right_1");
    var piclist32 = document.getElementsByClassName("seckill_right_2");
    var piclist33 = document.getElementsByClassName("seckill_right_3");
    var piclist34 = document.getElementsByClassName("seckill_right_4");
    var index31 = 0;
    var index32 = 0;
    var index33 = 0;
    var index34 = 0;
    document.getElementById("b3_right").onclick = function() {
        //找到当前图片的下一张图片 进行显示  同时让其他都消失
        index31++;
        index32++;
        index33++;
        index34++;
        if (index31 == piclist31.length) {
            index31 = 0;
        }
        if (index32 == piclist32.length) {
            index32 = 0;
        }
        if (index33 == piclist33.length) {
            index33 = 0;
        }
        if (index34 == piclist34.length) {
            index34 = 0;
        }
        for (var i = 0; i < piclist31.length; i++) {
            piclist31[i].style.display = "none";
        }
        for (var i = 0; i < piclist32.length; i++) {
            piclist32[i].style.display = "none";
        }
        for (var i = 0; i < piclist33.length; i++) {
            piclist33[i].style.display = "none";
        }
        for (var i = 0; i < piclist34.length; i++) {
            piclist34[i].style.display = "none";
        }
        piclist31[index31].style.display = "block";
        piclist32[index32].style.display = "block";
        piclist33[index33].style.display = "block";
        piclist34[index34].style.display = "block";
    }
    document.getElementById("b3_left").onclick = function() {
        //找到当前图片的下一张图片 进行显示  同时让其他都消失
        index31--;
        index32--;
        index33--;
        index34--;
        if (index31 == -1) {
            index31 = piclist31.length - 1;
        }
        if (index32 == -1) {
            index32 = piclist32.length - 1;
        }
        if (index33 == -1) {
            index33 = piclist33.length - 1;
        }
        if (index34 == -1) {
            index34 = piclist34.length - 1;
        }
        for (var i = 0; i < piclist31.length; i++) {
            piclist31[i].style.display = "none";
        }
        for (var i = 0; i < piclist32.length; i++) {
            piclist32[i].style.display = "none";
        }
        for (var i = 0; i < piclist33.length; i++) {
            piclist33[i].style.display = "none";
        }
        for (var i = 0; i < piclist34.length; i++) {
            piclist34[i].style.display = "none";
        }
        piclist31[index31].style.display = "block";
        piclist32[index32].style.display = "block";
        piclist33[index33].style.display = "block";
        piclist34[index34].style.display = "block";
    }


    //图片轮播4
    var piclist4 = document.getElementsByClassName("ccc");
    var index4 = 0;
    document.getElementById("b4_right").onclick = function() {
        //找到当前图片的下一张图片 进行显示  同时让其他都消失
        index4++;
        if (index4 == piclist4.length) {
            index4 = 0;
        }
        // console.log(index4);
        for (var i = 0; i < piclist4.length; i++) {
            piclist4[i].style.display = "none";
        }
        piclist4[index4].style.display = "block";
    }
    document.getElementById("b4_left").onclick = function() {
        //找到当前图片的下一张图片 进行显示  同时让其他都消失
        index4--;
        if (index4 == -1) {
            index4 = piclist4.length - 1;
        }
        // console.log(index4);
        for (var i = 0; i < piclist4.length; i++) {
            piclist4[i].style.display = "none";
        }
        piclist4[index4].style.display = "block";
    }













}

window.onunload = function() {
    var stop_time = this.stopClock();
    var stop_lbone = this.stopLbOne();
    var stop_lbtwo = this.stopLbTwo();
    var stop_lbfour = this.stopLbFour();
    var stop_lbfive = this.stopLbFive();
}



//京东秒杀获取时间
var timer = null;

function displayClock(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}

function stopClock() {
    clearTimeout(timer);
}

function startClock() {
    var time = new Date();
    var h = displayClock(time.getHours()) + ":";
    var m = displayClock(time.getMinutes()) + ":";
    var s = displayClock(time.getSeconds());
    document.getElementById("tim").innerHTML = h + m + s;
    timer = setTimeout("startClock()", 1000);

}

//自动轮播1
var piclist1 = document.getElementsByClassName("piccc");
var index = 0;

function stopLbOne() {
    clearTimeout(pp);
}

function startLbOne() {
    index++;
    if (index == piclist1.length) {
        index = 0;
    }
    // console.log(index);
    for (var i = 0; i < piclist1.length; i++) {
        piclist1[i].style.display = "none";
    }
    piclist1[index].style.display = "block";
    pp = setTimeout("startLbOne()", 2500);

}


//自动轮播2
var piclist21 = document.getElementsByClassName("piccc21");
var piclist22 = document.getElementsByClassName("piccc22");
var piclist23 = document.getElementsByClassName("piccc23");
var index1 = 0;
var index2 = 0;
var index3 = 0;

function stopLbTwo() {
    clearTimeout(pp1);
}

function startLbTwo() {
    index1++;
    index2++;
    index3++;
    if (index1 == piclist21.length) {
        index1 = 0;
    }
    if (index2 == piclist22.length) {
        index2 = 0;
    }
    if (index3 == piclist23.length) {
        index3 = 0;
    }
    // console.log(index2);
    for (var i = 0; i < piclist21.length; i++) {
        piclist21[i].style.display = "none";
    }
    for (var i = 0; i < piclist22.length; i++) {
        piclist22[i].style.display = "none";
    }
    for (var i = 0; i < piclist23.length; i++) {
        piclist23[i].style.display = "none";
    }
    piclist21[index1].style.display = "block";
    piclist22[index2].style.display = "block";
    piclist23[index3].style.display = "block";
    pp1 = setTimeout("startLbTwo()", 2000);

}

//自动轮播4
var piclist4 = document.getElementsByClassName("ccc");
var index4 = 0;

function stopLbFour() {
    clearTimeout(pp4);
}

function startLbFour() {
    index4++;
    if (index4 == piclist4.length) {
        index4 = 0;
    }
    // console.log(index2);
    for (var i = 0; i < piclist4.length; i++) {
        piclist4[i].style.display = "none";
    }
    piclist4[index4].style.display = "block";
    pp4 = setTimeout("startLbFour()", 1600);

}

//自动轮播5
var piclist5 = document.getElementsByClassName("lb51");
var index5 = 0;

function stopLbFive() {
    clearTimeout(pp5);
}

function startLbFive() {
    index5++;
    if (index5 == piclist5.length) {
        index5 = 0;
    }
    for (var i = 0; i < piclist5.length; i++) {
        piclist5[i].style.display = "none";
    }
    piclist5[index5].style.display = "block";
    pp5 = setTimeout("startLbFive()", 1600);

}