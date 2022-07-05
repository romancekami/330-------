// 设计缓动函数
var scrollSmoothTo = function (position) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            return setTimeout(callback, 17);
        };
    }
    // 当前滚动高度
    var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    // 滚动step方法
    var step = function () {
        // 距离目标滚动距离
        var distance = position - scrollTop;
        // 目标滚动位置
        scrollTop = scrollTop + distance / 5;
        if (Math.abs(distance) < 1) {
            window.scrollTo(0, position);
        } else {
            window.scrollTo(0, scrollTop);
            requestAnimationFrame(step);
        }
    };
    step();
};

document.addEventListener("DOMContentLoaded", function () {
    // 使用函数
    var sect = document.getElementById("sect");
    // 获取子节点
    var zhuan = sect.children;
    // var san = document.querySelector('.sixstar').children;
    var sixstar = document.querySelector(".sixstar");
    var san = sixstar.children;
    // console.log(san);
    // 这边必须是let i 不能是var i，不然i会一直是数组长度+1后是6，这样会导致var scrollhei = san[i].offsetTop;报错
    for (let i = 0; i < zhuan.length; i++) {
        // zhuan[i].index = i;
        // console.log(zhuan[i].index);
        zhuan[i].onclick = function () {
            console.log(i);
            // var j = i;
            // 获取到下面6个球星介绍方块分别到浏览器顶部的距离，使用时-200px来让图片看起来是在屏幕中央。
            var scrollhei = san[i].offsetTop;
            // console.log(scrollhei);
            scrollSmoothTo(scrollhei - 200);
            // scrollSmoothTo(800);
            // console.log(j);
            // 或者使用下面的，不过两个缓动效果都一般...
            // window.scrollTo({
            //     top: scrollhei,
            //     left: 0,
            //     behavior: "smooth",
            // });
        };
    }
});
