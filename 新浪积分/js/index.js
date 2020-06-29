   /*/www.bbsmax.com开源*/
    $(document).ready(function () {/*ready准备*/
        var now=0;
        var oul = $(".myslidetwo");
        var numbers = $(".label li");
        var wid = $(".myslide").eq(0).width();/*大盒子*/
    
        //数字图标轮播实现
        numbers.click(function () {//addClass() 添加一个新的类和 removeClass() 来移除一个类
            var index = $(this).index();
            $(this).addClass("current").siblings().removeClass();//遍历返回被选元素的同级元素（其余）
            oul.animate({'left': -wid * index}, 500);/*轮播时left属性的最终值*/
        })


        //手动轮播
        $(".left_s").click(function () {
            if (now>=1) now--;
            else now=4;
            way();
        });
        $(".right_s").click(function () {
            if (now == numbers.size() - 1) {
                now = 0;
            }
            else now++;
            way();
        });
        //动画函数
        function way(){
            numbers.eq(now).addClass("current").siblings().removeClass();
            oul.animate({'left': -wid * now}, 500);
        }
        //自动轮播
        var _interval=setInterval(showTime,1000);
        function  showTime() {
            if (now == numbers.size() - 1) {
                now = 0;
            }
            else now++;
            way();
        }
        //鼠标事件
        $(".myslide").mouseover(function(){
            clearTimeout(_interval);
        });
        $(".myslide").mouseout(function(){
            _interval=setInterval(showTime,1000);
        });
       
    });


