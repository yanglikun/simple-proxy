//后期再优化修改

//localStorage.setItem("proxyStatus", localStorage.getItem("proxyStatus") == null ? 0 : localStorage.getItem("proxyStatus"))
$(function () {
    $("#enProxyBtn").click(function () {
        enProxy();
    })
    $("#disProxyBtn").click(function () {
        disProxy();
    })
    showStatusFun();
})
var proxyConfig = {
    mode: "fixed_servers",
    rules: {
        singleProxy: {
            scheme: "http",
            host: "192.168.147.89",
            port: 8123
        },
        bypassList: ["ip138.com"]
    }
};

var sytemConfig = {
    mode: "system"
};
var enProxy = function () {
    chrome.proxy.settings.set(
        {value: proxyConfig, scope: 'regular'},
        function () {
        });
    localStorage.setItem("proxyStatus", 1)
    showStatusFun();
}
var disProxy = function () {
    chrome.proxy.settings.set(
        {value: sytemConfig, scope: 'regular'},
        function () {
        });
    localStorage.setItem("proxyStatus", 0)
    showStatusFun();
}
