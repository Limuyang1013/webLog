define(['jquery'], function($) {
    var draw = function() {
        return $('#el').html('加载成功！');
    };

    return {
        setText: draw
    };
});
