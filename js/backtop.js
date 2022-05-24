// 返回顶部按钮js
document.addEventListener("DOMContentLoaded", function () {
    var dingbu = document.getElementsByClassName("backtop")[0];
    dingbu.addEventListener("click", function () {
        // 单击返回顶部
        // window.scrollTo(0,0);
        // 或者
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
    // 控制显示和隐藏
    window.addEventListener("scroll", function () {
        var scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop < 30) {
            dingbu.style.display = "none";
        } else {
            dingbu.style.display = "block";
        }
    });
});
