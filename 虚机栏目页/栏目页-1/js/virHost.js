var clou_slide = tclou_slide = 0,count_slide_l; //初始化轮播索引，间歇调用变量，轮播图片数量
$(function(){
	// 活动红包雨弹窗数据
	var tc_data = [{"name":"经济型","yhxx":"购买5年立省215元","yhjm":"91534021V26552972","Href":"http://www.xinnet.com/virtualhost/vhost-buy-detail.html?type=v1&p=p1&year=4"},
	{"name":"普惠型-1","yhxx":"购买2年及以上9折","yhjm":"91534021V10800229","Href":"http://www.xinnet.com/virtualhost/vhost-buy-detail.html?type=v2&p=p1&year=2"},
	{"name":"普惠型-2","yhxx":"购买2年及以上9折","yhjm":"91534021V28480530","Href":"http://www.xinnet.com/virtualhost/vhost-buy-detail.html?type=v2&p=p2&year=2"},
	//{"name":"普惠型-3","yhxx":"购买3年立省200元","yhjm":"91534021V72643400","Href":"http://www.xinnet.com/virtualhost/vhost-buy-detail.html?type=v2&p=p3&year=3"},
	{"name":"超享型","yhxx":"购买3年及以上8折","yhjm":"91534021V87916578","Href":"http://www.xinnet.com/virtualhost/vhost-buy-detail.html?type=v3&p=p1&year=3"},
	{"name":"尊贵型","yhxx":"购买3年及以上8折","yhjm":"91534021V84651355","Href":"http://www.xinnet.com/virtualhost/vhost-buy-detail.html?type=v4&p=p1&year=3"}
	];
	$(".virHost_part2 .virHost_divs_con").hover(function(){
		$(this).addClass("virHost_divs_ons").siblings().removeClass("virHost_divs_ons");
	})
	 //$(".virHost_xhDivs").prepend("<div class = 'virHost_yhtz'><img src='http://imgi.xinnet.com/www/virtualhost/images/virgx180131_03.png' alt = ''>满两年享<span>5折</span>，最高立省：<span>¥5497/年</span></div>");
	 //ssl证书hover
	 $(".virHostthtz_sp1,.virHostthtz_div").hover(function(){
	 	$(".virHostthtz_div").show();
	 },function(){
	 	$(".virHostthtz_div").hide();
	 })

	// 导航
	var doc = $(document);
	var pt1_hei = $(".virHost_part1").height();
	var virHost_topBar = $(".virHost_topBar");
	var virHost_part3 = $(".virHost_part3");
	var virHost_part3_head = $(".virHost_part3_head");
	var li_index = $(".virHost_part3_head ul li")
	var virHost_cspz = $(".virHost_cspz");
	var virHost_khal = $(".virHost_khal");
	var virHost_cjwt = $(".virHost_cjwt");
	var virHost_cpys = $(".virHost_cpys");
	li_index.click(function(){
		var index = $(this).index();
		var top = $(".virHost_part3_con>div").eq(index).offset().top;
				$("html,body").animate({scrollTop:top-150},200);
	})


	$(".divTab1>div.divListH").hover(function(){
        $(this).addClass("vOn").siblings().removeClass("vOn");
    },function(){})
	// 滚轮事件
    var doc = $(document);
    var divTop0 = $(".headBar").offset().top;
    var virHost_topBar = $(".virHost_topBar");
    var pt1_hei = $(".virHost_part1").height();
    var fixDiv = $(".headBarFixed");
    var divTop1 = $(".virHost4_cpgs");
    var divTop2 = $(".virHost4_cjwt");
    var divTop3 = $(".virHost4_tjjy");
    var divTop4 = $(".virHost4_khal");
    var divTop5 = $(".virHost4_cpbz");
    var fixLi = $(".headBarFixed li");
    fixLi.click(function(){
        var index = $(this).index();
        var goTop = $(".virHost_part3New>div").eq(index+1).offset().top;
        $("html,body").animate({scrollTop:goTop-129},200);
    })
    $(window).scroll(function(){
        var top = doc.scrollTop();
        var top1 = divTop1.offset().top;
        var top2 = divTop2.offset().top;
        var top3 = divTop3.offset().top;
        var top4 = divTop4.offset().top;
        var top5 = divTop5.offset().top;
        if(top>65){
            virHost_topBar.addClass("topBar_fixed");
        }
        else{
            virHost_topBar.removeClass("topBar_fixed")
        }
        if(top>pt1_hei){
            virHost_topBar.css("background", "#1f1f1f")
        }
        else{
            virHost_topBar.css("background", "rgba(0, 0, 0, .3)")
        }
        if(top>divTop0-30){
            fixDiv.addClass("ulFixed");
        }
        else{
            fixDiv.removeClass("ulFixed");
        }
        if(top>top1-130){
            fixLi.eq(0).addClass("vOn").siblings().removeClass("vOn");
        }
        if(top>top2-130){
            fixLi.eq(1).addClass("vOn").siblings().removeClass("vOn");
        }
        if(top>top3-130){
            fixLi.eq(2).addClass("vOn").siblings().removeClass("vOn");
        }
        if(top>top4-130){
            fixLi.eq(3).addClass("vOn").siblings().removeClass("vOn");
        }
        if(top>top5-130){
            fixLi.eq(4).addClass("vOn").siblings().removeClass("vOn");
        }
    })
    // 参数配置点击事件
    $(".virHost_cspz_top").click(function(){
        var hei1 = $(this).next().height();
        // $(this).next().slideDown(300);
        if($(this).next().css("display") != "none"){
            $(this).next().slideUp(300);
            $(this).find("span").text("+");
        }
        else{
            $(this).parent().siblings().find(".virHost_cspz_tab").filter(":visible").slideUp(300).prev().find("span").text("+");
            $(this).next().slideDown(300);
            $(this).find("span").text("-");
        }
    })
    // radio点击事件

    $(".virHost_radio input").click(function(){
        var index = $(this).data("index")
        var divsmian = $(this).parent().next();
        divsmian.children("div").eq(index).css("display", "block").siblings().css("display", "none");
    })
    $("#cspz_win").click(function(){
        $(this).parent().next().removeClass("virHost_zjzc2");
    })
    $("#cspz_lin").click(function(){
        $(this).parent().next().addClass("virHost_zjzc2");
    })
    // 常见问题slide
    $(".proSlide_h").click(function(){
        if(!$(this).hasClass("pOpen")){
            $(this).addClass("pOpen").parent().siblings().find(".proSlide_h").removeClass("pOpen");
            $(this).next().slideDown(200);
            $(this).parent().siblings().find(".proSlide_con").hide();
        }
    })
	// 滑动事件
	// $(window).scroll(function(){
	// 	var top = doc.scrollTop();
	// 	var top0 = virHost_cpys.offset().top;
	// 	var top1 = virHost_part3.offset().top;
	// 	var top2 = virHost_cspz.offset().top;
	// 	var top3 = virHost_khal.offset().top;
	// 	var top4 = virHost_cjwt.offset().top;
	// 	if(top>65){
	// 		virHost_topBar.addClass("topBar_fixed");
	// 	}
	// 	else{
	// 		virHost_topBar.removeClass("topBar_fixed")
	// 	}
	// 	if(top>pt1_hei){
	// 		virHost_topBar.css("background", "#1f1f1f")
	// 	}
	// 	else{
	// 		virHost_topBar.css("background", "rgba(0, 0, 0, .3)")
	// 	}
	// 	if(top>top1-50){
	// 		virHost_part3_head.addClass("part3_head_fixed");
	// 		$(".virHost_part3_head_by").css("display", "block");
	// 	}
	// 	else{
	// 		virHost_part3_head.removeClass("part3_head_fixed");
	// 		$(".virHost_part3_head_by").css("display", "none");
	// 	}
	// 	if(top>top0-160){
	// 		li_index.eq(0).addClass("virHost_part3_on").siblings().removeClass("virHost_part3_on");
	// 	}
	// 	if(top>top2-160){
	// 		li_index.eq(1).addClass("virHost_part3_on").siblings().removeClass("virHost_part3_on");
	// 	}
	// 	if(top>top3-160){
	// 		li_index.eq(2).addClass("virHost_part3_on").siblings().removeClass("virHost_part3_on");
	// 	}
	// 	if(top>top4-160){
	// 		li_index.eq(3).addClass("virHost_part3_on").siblings().removeClass("virHost_part3_on");
	// 	}
	// })
	// 参数配置点击事件
	// $(".virHost_cspz_top").click(function(){
	// 	var hei1 = $(this).next().height();
	// 	// $(this).next().slideDown(300);
	// 	if($(this).next().css("display") != "none"){
	// 		$(this).next().slideUp(300);
	// 		$(this).find("span").text("+");
	// 	}
	// 	else{
	// 		$(this).parent().siblings().find(".virHost_cspz_tab").filter(":visible").slideUp(300).prev().find("span").text("+");
	// 		$(this).next().slideDown(300);
	// 		$(this).find("span").text("-");
	// 	}
	// })

	// radio点击事件

	// $(".virHost_radio input").click(function(){
	// 	var index = $(this).data("index")
	// 	var divsmian = $(this).parent().next();
	// 	divsmian.children("div").eq(index).css("display", "block").siblings().css("display", "none");
	// })
	// $("#cspz_win").click(function(){
	// 	$(this).parent().next().removeClass("virHost_zjzc2");
	// })
	// $("#cspz_lin").click(function(){
	// 	$(this).parent().next().addClass("virHost_zjzc2");
	// })
	//轮播图片
			var list_wh = $("#slide_main_ul").width()*-1;
			$("#slide_main_ul").css("margin-left", list_wh/2);
			//首页banner轮播动画
		    count_slide_l = $(".slide_main>div").length;
		    $(".slide_main>div:not(:first-child)").hide();
		    tclou_slide = setInterval("Cbanner_showImg()", 5000);
		    $(".slide_main").parent().hover(function(){
		    	clearInterval(tclou_slide);
		    }, function(){
		    	tclou_slide = setInterval("Cbanner_showImg()", 5000);
		    });
		    $(".slide_main_ul li").click(function(event){
		    	event.stopPropagation();
		    	var li_index = $(this).index();
		    	var show_index = $(".slide_main>div").filter(":visible").index();
		    	if(li_index != show_index){
		    		$(".slide_main>div").filter(":visible").fadeOut(500).parent().children().eq(li_index).fadeIn(600);
			    	$(this).addClass("slide_main_on").siblings().removeClass("slide_main_on");
			    	clou_slide = li_index;
		    	}
		    });
    // hover事件
    $(".virHostXh_ul li").click(function(){
    	var index = $(this).index();
    	$(".virHost2_sbtn").show();
    	$(".virHost_yhtz").show(); //优惠通知
    	$(".topMorepz").show();
    	$(this).addClass("virHostXh_ulOn").siblings().removeClass("virHostXh_ulOn");
    	$(".virHost_part2_divs>div").eq(index).show().siblings().hide();
    	$(".xhDivs_uls .xhDivs_ul").eq(index).show().siblings().hide();
    	if(index == 4){
    		$(".xhDivs_uls .xhDivs_ul").hide();
    		$(".virHost2_sbtn").hide();
    		$(".virHost_yhtz").hide();//优惠通知隐藏
    		$(".topMorepz").hide();
    	}
    	switch (index) {
    		case 0:
    			$(".topMorepz a").attr("href","http://www.xinnet.com/virtualhost/zt1_quanneng.html");
    			break;
    		case 1:
    			$(".topMorepz a").attr("href","http://www.xinnet.com/virtualhost/zt1_zhuanye.html");
    			break;
    		case 2:
    			$(".topMorepz a").attr("href","http://www.xinnet.com/virtualhost/zt1_mianbeian.html");
    			break;
    		case 3:
    			$(".topMorepz a").attr("href","http://www.xinnet.com/virtualhost/zt1_qingyingyong.html");
    			break;
    		default:
    			// statements_def
    			break;
    	}
    	// 
    })
    // 增值服务弹窗
    $(".fwzzUl_btn0").click(function(){
    	var parIndex = $(this).parents("li").index();
    	$(".virZzfw_tc"+parIndex).fadeIn(200);
    })
    $(".virZzfw_close").click(function(){
    	$(".virZzfw_tc").fadeOut(100);
    })
    // 型号左右点击
    $(".xhDivs_ul li").click(function(){
    	var index = $(this).index();
    	$(this).addClass("slOn").siblings().removeClass("slOn");
    	if(index == 0){
    		$(".virHost_part2_divs>div").filter(":visible").animate({marginLeft:10}, 200);
    	}
    	else if(index == 1){
    		$(".virHost_part2_divs>div").filter(":visible").animate({marginLeft:-1186}, 200);
    	}
    	else if(index == 2){
    		$(".virHost_part2_divs>div").filter(":visible").animate({marginLeft:-2381}, 200);
    	}
    })
    $(".virHost2_sbtnL").click(function(){
    	var index = $(".xhDivs_ul").filter(":visible").find("li.slOn").index();
    	if(index>0){
    		$(".xhDivs_ul").filter(":visible").find("li").eq(index-1).trigger("click");
    	}
    })
    $(".virHost2_sbtnR").click(function(){
    	var index = $(".xhDivs_ul").filter(":visible").find("li.slOn").index();
    	if(index<2){
    		$(".xhDivs_ul").filter(":visible").find("li").eq(index+1).trigger("click");
    	}
    })

    // 动态添加送域名、角标、立省价格
    var pBox = $(".virHost_divs_con .virHost_part2_p1");
    var qn01Div = $(".virHost_part2_divs>div:nth-child(1)");
    var zy01Div = $(".virHost_part2_divs>div:nth-child(2)");
    //$(".virHost_sp3,.virHost_sp3_txt").remove();
    $(".hovSp0").hover(function(){$(this).next().show();},function(){$(this).next().hide();})
  //  pBox.append("<span class='virHost_sp3'>送域名</span><span class='virHost_sp3_txt' style='display: none;'>赠送英文.online/.store/.tech域名11元优惠券一张（3选1注册），限首年注册使用<i class='virHost_cir'></i></span>");
    //qn01Div.find(".div_jj>div:nth-child(1) .virHost_sp3,.div_jj>div:nth-child(1) .virHost_sp3_txt").remove();
    //zy01Div.find(".div_jj>div:nth-child(1) .virHost_sp3,.div_jj>div:nth-child(1) .virHost_sp3_txt").remove();

    $(".virHost_part2_divs .virHost_divs_head").removeClass("virHost_divs_bg virHost_divs_bg1");
    // $(".virHost_part2_divs .virHost_divs_head").removeClass("virHost_divs_bg virHost_divs_bg1").addClass("virHost_divs_bg2");
    // qn01Div.find(".div_jj>div:nth-child(1) .virHost_divs_head").removeClass("virHost_divs_bg2");
    // zy01Div.find(".div_jj>div:nth-child(1) .virHost_divs_head").removeClass("virHost_divs_bg2");
    $(".virHost_divs_con").each(function(i){
    	var price = $(this).find(".virHost_sp2").html();
    	var fivePrice = parseInt((price*5)/2);
    	//$(this).find(".virHost_part2_p2 span").html("最高立省：¥"+fivePrice+"/5年");
  //   	if(i == 0||i == 12){
  //   		$(this).find(".virHost_part2_p2 span").html("");  //全能01专业01忽略
  //   	}
		// if(i == 1||i == 13){
		// 	$(this).find(".virHost_part2_p2 span").html("");
		// 	$(this).find(".virHost_divs_head").append("<p>适合初创型中小企业网站</p>").find("h6").css("padding-top","18px");
		// }
		// if(i == 2||i == 14){
		// 	$(this).find(".virHost_part2_p2 span").html("");
		// 	$(this).find(".virHost_divs_head").addClass("virHost_divs_bg5").append("<p>适合企业、政府官网、社区网站</p>").find("h6").css("padding-top","18px");
		// }
		// if(i == 10||i == 22){
		// 	$(this).find(".virHost_divs_head").addClass("virHost_divs_bg3").append("<p>适合电商、视频、团购类网站</p>").find("h6").css("padding-top","18px");
		// } 
    })
    //在线帮助
    //在线帮助
    var xTool = $(".x-tool").css("top");
    var xToolLen = xTool.length;
    xTool = xTool.substring(0, xToolLen-2);
    xTool = parseFloat(xTool)+327;
    $(".virHelp_tc").css("top", xTool+"px");
    $(".virHelp_btn").click(function(){
        $(".virHelp_div").fadeIn(100);
    })
    $(".virHelp_close").click(function(){
        $(".virHelp_div").fadeOut(50);
    })
    $(window).scroll(function(){
        var scrTop = $(document).scrollTop();
        if(scrTop>400){
            $(".virHelp_tc").css("top", (xTool+65)+"px");
        }
        else{
            $(".virHelp_tc").css("top", xTool+"px");
        }
    })
    $(".virHelp_bar").click(function(){
        var thistxt = $(this).next();
        if(thistxt.css("display") == "none"){
            $(this).addClass("on").parent().siblings().find(".virHelp_bar").removeClass("on");
            thistxt.slideDown(200).parent().siblings().find(".virHelp_txt").slideUp(200);
        }
        else{
            $(this).removeClass("on")   
            thistxt.slideUp(200);
        }
    })
    $(".proMore a").click(function(){$(".virHelp_div").fadeIn(100);});

    //卡片点击正反转换
    // $(".cardbg01,.cardbg02,.cardPo_sp0").click(function(){
    // 	var parentDiv = $(this).parents(".virHost_divs_con");
    // 	parentDiv.find(".cardPositive").fadeOut(100);
    // 	parentDiv.find(".cardOpposite").fadeIn(400);
    // })
    $(".cardOpposite,.cardOppBg").hover(function(){},function(){
    	$(this).fadeOut(100);
    	$(this).prev().fadeIn(400);
   	})
   	$(".cardbg03").click(function(){
   		var parentDiv = $(this).parents(".virHost_divs_con");
   		parentDiv.find(".cardPositive").fadeOut(100);
    	parentDiv.find(".cardOppBg").fadeIn(400);
 	});


    // 红包降雨
    /*var hbHtml = $(".virHost_Hbdivs_main").html();
    var hdani = setTimeout(function(){
    	// alert("hhhh");
    	$(".virHost_Hbdivs_main").append(hbHtml);
    },32000)

    $("#yhm_btn").click(function(){
    	$("#yhm_txt").select();
    	document.execCommand("Copy");
    	alert("复制成功！");
    })
	$("#tc_cha,#jx_btn").click(function(){
		$("#tc_anniv").fadeOut(200);
	})
	$(document).on("click",'.virHost_Hbdivs_main>div',function(){
		var data_len = tc_data.length;
		var sjNum = Math.random()*data_len + 0;
			sjNum = parseInt(sjNum,10);
			$("#xh_name").html(tc_data[sjNum].name);
			$("#xh_yhxx").html(tc_data[sjNum].yhxx);
			$("#yhm_txt").val(tc_data[sjNum].yhjm);
			$("#use_btn").attr("href", tc_data[sjNum].Href);
			$("#tc_anniv").fadeIn(300);
	});*/
	var urlPars = urlSerch();
	var rebate = $.cookie("rebateId") ? $.cookie("rebateId") : urlPars["rebatecode"];
 	if(rebate){
 		$(".virHost_part2_bot>a").each(function(ind){
 			var link = $(this).attr("href")+"&rebatecode="+rebate;
 			$(this).attr("href", link);
 		});
 	}
 	$("#tc_sure,#tc_cha").click(function(){
                $("#tc_anniv").fadeOut(100);
            })
    $(".jySubmit").click(function(){
    	var username,comment;
    	if(loginId!="notLogin"){
    		username = $(".username").text();
    	}
    	else{
    		username = "未登录用户";
    	}
    	comment = $.trim($(".commentJy").val());
    	if(comment==""||comment==undefined){
    		bgw_tcNew("提交内容不能为空！");
    	}
    	else{
    		$(this).parent().append("<img src = 'https://xhs.xinnet.com/xhs/comment?user="+username+"&comment="+comment+"'>");
    		bgw_tcNew("<span style = 'color:#4242e2;'>建议已提交成功</span><br/>如果此建议被采纳，您将获得新网虚拟主机专属荣誉优惠券一张（采纳结果将以短信形式发送到您的会员账号绑定手机）");
    	}
    })
})
function bgw_tcNew(txt){
                $("#tc_annivP").html("").append(txt);
                $("#tc_anniv").fadeIn(200);
            }
//显示图片
    function Cbanner_showImg(){
    	clou_slide = clou_slide >= (count_slide_l - 1) ? 0 : ++clou_slide;  //n的值 0 ，1 ，2...
		$(".slide_main_ul li").eq(clou_slide).trigger("click");
 }
 //获取连接参数
function urlSerch(){
	var qs = (location.search.length>0?location.search.substring(1):"");
	var args = {};
	var items = qs.length?qs.split("&"):[];
	var len = items.length;
	var item = null;
	var name = null;
	var value = null;
	for(var i = 0;i<len;i++){
		item = items[i].split("=");
		item[name] = item[0];
		item[value] = item[1];
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if(name.length){
			args[name] = value;
		}
	}
	return args;
}