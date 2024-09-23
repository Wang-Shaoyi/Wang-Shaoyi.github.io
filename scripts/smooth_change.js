$(document).ready(function() {
    // 初始状态，只为Home设置selected类
    //$('#main-menu a').removeClass('selected');  // 移除所有链接的selected类
    //$('#main-menu a[href*="index"]').addClass('selected');  // 为Home链接添加selected类

    // 点击事件处理
    $('a[href*="#"]').click(function(e) {
        const hash = this.href.split('#')[1]; // 提取锚点部分

        $('#main-menu a').removeClass('selected');  // 移除所有链接的selected类
        $(this).addClass('selected');  // 为当前点击的链接添加selected类

        if (hash === 'index' || hash === 'home') {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0 // 滚动到页面顶部
            }, 800); // 持续时间 (ms)
        } else {
            const target = $('#' + hash);

            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800); // 持续时间 (ms)
            }
        }
    });
});