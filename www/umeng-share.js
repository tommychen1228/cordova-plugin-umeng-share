var UMengShare = {};

UMengShare.init = function(successHandler, errorHandler){
	cordova.exec(successHandler, errorHandler, "UMengSharePlugin", "init", []);
};

UMengShare.share:function(text, title, url, successHandler, errorHandler){
	cordova.exec(successHandler, errorHandler, "UMengSharePlugin", "share", [text, title, url]);
};