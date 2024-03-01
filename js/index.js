window.addEventListener('resize', function() {
    // 获取设备宽度
    var deviceWidth = document.documentElement.clientWidth;

    // 设置基准字体大小
    var baseFontSize = deviceWidth / 10 + 'px';

    // 将基准字体大小应用到html根元素
    document.documentElement.style.fontSize = baseFontSize;
});