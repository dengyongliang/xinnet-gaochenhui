/*动态添加首页轮播统计代码*/
$(function(){
	$(".slide-banner .slide-banner-b").each(function(i){
		$(this).find(".public_banner_a,p>a").attr("onclick", "traker.traceCount('xinnet.com','110','bn0"+(i+1)+"')");
		$(".banner_slide_ul li").eq(i).find("a").attr("onclick", "traker.traceCount('xinnet.com','110','b00"+(i+1)+"')");
	})
})