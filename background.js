localStorage.setItem("proxyStatus", localStorage.getItem("proxyStatus") == null ? 0 : localStorage.getItem("proxyStatus"))
var showStatusFun = function () {
    var proxyStatusVal=localStorage.getItem("proxyStatus");
    $("#showStatus").text( proxyStatusVal== 0 ? "禁用" : "启用")
    changeIcon(proxyStatusVal== 0?"off.png":"on.png")
}
var changeIcon = function (imagePath) {
    chrome.browserAction.setIcon({path: imagePath});
}
showStatusFun()
