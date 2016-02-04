(function(global, factory) {
    // 判断是否支持 CommonJS 规范
    if (typeof module === "object" && typeof module.exports === "object") {
        /* ... 省略进一步判断是否存在 document ...  */
    } else {
        // 不支持 CommonJS 规范时执行
        factory(global);
    }

    // 判断 window 对象是否存在，若否则代入全局的 this，即 Node 环境下的 global 对象
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    /* ... 省略 jQuery 主体 ...  */

    // 检测是否支持 AMD 规范，如果支持则会 return
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return jQuery;
        });
    }

    // 不支持 AMD 模块时才会执行以下代码
    // 由于 factory(global) 没有传入 noGlobal，所以值是 undefined
    // 不支持 CommonJS，也不支持 AMD，则将 jQuery 暴露为全局变量
    if (typeof noGlobal === "undefined") {
        window.jQuery = window.$ = jQuery;
    }

    return jQuery;
}));
