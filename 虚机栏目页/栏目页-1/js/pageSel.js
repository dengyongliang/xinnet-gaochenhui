//选择页面
(function($){
	var usList = ["Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)","Baiduspider-image+(+http://www.baidu.com/search/spider.htm)","Mozilla/5.0 (compatible; Baiduspider-render/2.0; +http://www.baidu.com/search/spider.html)","Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; Baiduspider-render/2.0; +http://www.baidu.com/search/spider.html)","Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0); 360Spider","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)","Googlebot-Image/1.0","Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)","Sosospider+(+http://help.soso.com/webspider.htm)","Sosoimagespider+(+http://help.soso.com/soso-image-spider.htm)","http://pic.sogou.com” “Sogou Pic Spider/3.0(+http://www.sogou.com/docs/help/webmasters.htm#07)","Sogou web spider/4.0(+http://www.sogou.com/docs/help/webmasters.htm#07)"];
	var broAgent = navigator.userAgent;
	var toFor = null;
	for(var i=0;i<usList.length;i++){
		if(broAgent.indexOf(usList[i])!=-1){
			toFor = true;
			break;
		}
	}
	if(!toFor){
		//随机1~10数字
		var cookieName = "pageSel";
		var goPage = function(num){
			if(num>=1&&num<=7){
			window.location.href = "http://www.xinnet.com/virtualhost/virtualhost.html";
			}
			else{
				window.location.href = "http://www.xinnet.com/virtualhost/virtualhostNovice.html";
			}
		};
		if(!$.cookie(cookieName)){
			var randomNum = Math.floor(Math.random()*10+1);
			$.cookie(cookieName, randomNum, {
				expires:30,
				secure:false
			});
			goPage(randomNum);
		}
		else{
			var ckNum = $.cookie(cookieName);
			if(ckNum>7){
				window.location.href = "http://www.xinnet.com/virtualhost/virtualhostNovice.html";
			}		
		}
	}
})(jQuery);