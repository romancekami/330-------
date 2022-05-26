function scrollToTop(duration) {
    if (document.scrollingElement.scrollTop === 0) return;

    const totalScrollDistance = document.scrollingElement.scrollTop;
    let scrollY = totalScrollDistance,
        oldTimestamp = null;

    function step(newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollY will be -Infinity
            scrollY -=
                (totalScrollDistance * (newTimestamp - oldTimestamp)) /
                duration;
            if (scrollY <= 0) return (document.scrollingElement.scrollTop = 0);
            document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

// 返回顶部按钮js
document.addEventListener("DOMContentLoaded", function () {
    var dingbu = document.getElementsByClassName("backtop")[0];
    dingbu.addEventListener("click", function () {
        // 单击返回顶部
        // window.scrollTo(0,0);
        // 或者
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        // window.scrollTo({ top: 0, behavior: "smooth" });
        scrollToTop(400);
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
