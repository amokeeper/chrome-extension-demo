var url = chrome.extension.getURL("toolbar.html");
var height = '35px';
var iframe = "<iframe src='"+url+"' id='myOwnCustomToolBar' style='height:"+height+"'></iframe>";

$("html").append(iframe);
$("body").css({
	"-webkit-transform":"translateY("+height+")"
});