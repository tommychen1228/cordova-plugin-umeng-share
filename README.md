# cordova-plugin-umeng-share
cordova友盟分享插件

目前使用的是umeng分享的5.0版本，支持分享到微信，微博和qq。目前个平台的key使用的是umeng的测试key。后续会增加修改的地方

#安装
cordova plugin add https://github.com/tommychen1228/cordova-plugin-umeng-share.git --variable API_KEY=YOUR_UMENG_APP_KEY 

#使用
##初始化
在页面js开始能执行的地方
```
UMengShare.init(function () {
	console.log('UMengShare init success');
});
```

##分享
```
UMengShare.share('内容','标题','http://www.baidu.com', function(){
    console.log('分享成功');
}, function(){
    console.log('分享失败');
});

```