/**
**/
var _jsonVhostDatasNews = eval("("+_jsonVhostDatasNews+")");

var xhDatas = [{"xhcodes":["72350418043560","18275448615775","13990197141198","GA000000000005","02102203083907","86816799614579","GA000000000006","10176472207367","77224856276641","GA000000000007","18319868165346","05765231969256"],"xhname":["全能01","全能02","全能03","全能04","全能05","全能06","全能07","全能08","全能09","全能10","超大流量02","超大空间02"]},{"xhcodes":["GA000000000004","01124782914946","GA000000000013","38726593246985","83363175510010","GA000000000014","53961832849521","60656337571635","GA000000000015","78480324732901","16326139901664","94082277935854"],"xhname":["专业01","专业02","专业03","专业04","专业05","专业06","专业07","专业08","专业09","专业10","超大流量01","超大空间01"]},{"xhcodes":["42015976175667","74200704845019","92630668358826","GA000000000020","57868757607754","GA000000000021","GA000000000018","GA000000000022","GA000000000023","75744160992317","GA000000000024","28863452374830"],"xhname":["全能01-US","全能03-US","全能06-US","全能07-US","全能09-US","全能10-US","专业01-US","专业03-US","专业06-US","专业07-US","专业09-US","专业10-US"]},{"xhcodes":["16062837929507","49067357995839","92329344508297","77629531607016","15606823174081","81802883478614","70805948750784","95235901248917"],"xhname":["入门","体验","经济","基础","标准","加强","高配","豪华"]}]

$(function(){
	$(".virjgnew").html("200元");//初始化增值服务价格
	//$(".virtualBuy_slide_ul li").not(":first-child").append("<div class = 'virtualBuy_bg1' style = 'display: none;'>5折</div>"); 

   // $(".virtualBuy_slide_ul li:nth-child(2)").append("<div class = 'virtualBuy_bg' style = 'display: none;'>送1年</div>");
	//$(".virtualBuy_slide_ul li").not(":first-child").append("<div class = 'virtualBuy_bg1' style = 'display: none;'>8折</div>");
	
	
	//购买年限五折活动
	$(".virjg1").parent().append("<span class = 'prePrice' style = 'text-decoration: line-through;color: #ff3434;margin-left: 5px;display:none;font-size:12px;'></span>");
	$(".virtualBuy_price_sp1").parent().css("width", "280px").append("<span class = 'lsPrice' style = 'font-size: 12px;color: #ff1331;margin-left: 3px;display:none;'></span>")
	
	
	// 产品型号点击事件
	var selUl = $(".virXh_sel ul");
	$(".virXh_selDiv").click(function(event){
		event.stopPropagation();
		if(selUl.is(":visible"))
			$(".virXh_sel ul").hide();
		else
			$(".virXh_sel ul").show();
	})
	$(document).on("click", ".cpxh_ul li", function(event){
		// event.stopPropagation();
		$(this).addClass("on").siblings().removeClass("on");
		var liTxt = $(this).html();
		var goodCodes = $(this).attr("data-code");   //产品codes
		$(".virXh_selDiv").html(liTxt).attr("data-code", goodCodes);
		$("#web_sp").html(_jsonVhostDatasNews[goodCodes]["webSp"]);
		$("#ll_sp").html(_jsonVhostDatasNews[goodCodes]["llSp"]);
		$("#datalx").html(_jsonVhostDatasNews[goodCodes]["datalx"]);
		$("#sql_sp").html(_jsonVhostDatasNews[goodCodes]["sqlSp"]);
		$("#mLanguage").html(_jsonVhostDatasNews[goodCodes]["language"]);
		$("#xh_name").html(liTxt);
		$("#vir_host").html(_jsonVhostDatasNews[goodCodes]["hostHouse"]);
		$("#vir_sys").html(_jsonVhostDatasNews[goodCodes]["system"]);
		var selYear = $("#year_gmnx").html();
		var xh_price = getPrice(goodCodes,selYear);
		/*if(goodCodes != "72350418043560"&&goodCodes != "GA000000000004"){    //五折价格
			$(".virtualBuy_bg1").show(); //五折
			if(selYear != 1){
				$(".prePrice").html("(原价："+xh_price+"元)").show();  //五折价格
				xh_price = parseInt(xh_price/2);
				$(".lsPrice").html("(立省："+xh_price+"元)").show();
			}
			else{
				$(".prePrice").hide();
				$(".lsPrice").hide();
			}	
		}
		else{
			$(".virtualBuy_bg1").hide(); //五折
			$(".prePrice").hide();
			$(".lsPrice").hide();
		}*/

		// 活动控制显示div
		$(".virtualBuy_bg").show();
		if(goodCodes == "72350418043560"||goodCodes == "GA000000000004"){
			$(".virtualBuy_bg").hide();
		}
		
		
		$(".virjg1").html(xh_price+'元');
		// 机房操作系统图标控制显示
		if(_jsonVhostDatasNews[goodCodes]["hostHouse"] == "美国机房"){
			$(".iconDiv1").addClass("iconAin");
		}
		else{
			$(".iconDiv1").removeClass("iconAin");
		}
		if(_jsonVhostDatasNews[goodCodes]["system"] == "Linux"){
			$(".iconDiv2").addClass("iconLin");
		}
		else{
			$(".iconDiv2").removeClass("iconLin");
		}
		//购买年限显示控制
		//$(".virtualBuy_bg").show();
		//if(goodCodes == "72350418043560"||goodCodes == "GA000000000004"){
		//	$(".virtualBuy_bg").hide();
		//}
		// 赠送信息显示控制
		$(".virHd_div").hide();
		$(".zzfw_p2_01").show();
		$(".zzfw_p2_00").hide();
		zzfwPrice(200);
		switch(goodCodes){
			case "13990197141198":
			case "GA000000000013":
				$(".virHd_div1").show();   //送shop域名
				break;
			case "GA000000000007":
			case "GA000000000004":
			case "GA000000000014":
			case "GA000000000015":
				$(".virHd_div2").show();   // 送域名三选一
				break;
			case "38726593246985":
				$(".virHd_div3").show();  // 赠送邮箱信息
				break;
			case "53961832849521":
				$(".virHd_div4").show();  //赠送邮箱及云推送信息
				break;
			case "GA000000000006":
				$(".virHd_div5").show();  //送shop页面也送邮箱
				break;
			case "GA000000000005":
				$(".virHd_div6").show();  //送shop页面也送邮箱
				break;
			case "72350418043560":
				// $(".zzfw_p2_00").hide().next().show();
				zzfwPrice(200);
			default:
				$(".virHd_div").hide();
		}
		$(".virtualBuy_price_sp1").find("strong").html(allPrice()+"元"); //合计价格
		//参数进度条显示控制
		var cxLen1 = _jsonVhostDatasNews[goodCodes]["llSp"].length;
		var cxNum1 = parseFloat(_jsonVhostDatasNews[goodCodes]["llSp"].substring(0, cxLen1-1));//月流量

		var cxLen2 = _jsonVhostDatasNews[goodCodes]["webSp"].length;
		var lastWord = _jsonVhostDatasNews[goodCodes]["webSp"].substring(cxLen2-1);
		// _jsonVhostDatasNews[goodCodes]["webSp"].substring(cxLen2-2, cxLen2-1)=="G"?
		var cxNum2 = _jsonVhostDatasNews[goodCodes]["webSp"].substring(0, cxLen2-1);//网页空间
		cxNum2 = (lastWord == "M") ? parseFloat(cxNum2)/1000:parseFloat(cxNum2);

		var cxLen3 = _jsonVhostDatasNews[goodCodes]["sqlSp"].length;
		var lastWor2 = _jsonVhostDatasNews[goodCodes]["sqlSp"].substring(cxLen3-1);
		var cxNum3 = _jsonVhostDatasNews[goodCodes]["sqlSp"].substring(0, cxLen3-1);//数据库空间
		cxNum3 = (lastWor2 == "M") ? parseFloat(cxNum3)/1000:parseFloat(cxNum3);
		var widthSlide = $(".cpcs_slide").width();
		var wid1 = widthSlide*(cxNum1/100)>widthSlide ? widthSlide: widthSlide*(cxNum1/100);
		var wid2 = widthSlide*(cxNum2/3)>widthSlide ? widthSlide: widthSlide*(cxNum2/3);
		var wid3 = widthSlide*(cxNum3/1.2)>widthSlide ? widthSlide: widthSlide*(cxNum3/1.2);
		$(".cpcs_progress1").animate({width:wid1}, 200, function(){
			if(wid1<=(widthSlide*0.3)){
				$(this).addClass("col_err");
			}
			else{$(this).removeClass("col_err");}
		});
		$(".cpcs_progress2").animate({width:wid2}, 200,function(){
			if(wid2<=(widthSlide*0.3)){
				$(this).addClass("col_err");
			}
			else{$(this).removeClass("col_err");}
		});
		$(".cpcs_progress3").animate({width:wid3}, 200,function(){
			if(wid3<=(widthSlide*0.3)){
				$(this).addClass("col_err");
			}
			else{$(this).removeClass("col_err");}
		});

		//控制ssl显示隐藏
		var twoTxt = liTxt.substring(0, 2);
		if(twoTxt == "专业"||$(".virBuy_cplx li").eq(1).hasClass("xhOn")){
			$(".zzfw_noClick").show();
			if($(".zzfw_sel0").parent().hasClass("zzfwOn")){
			$(".zzfw_sel0").trigger("click");
			}
		}
		else{
			// if(!$(".zzfw_sel0").parent().hasClass("zzfwOn")){
			// 	$(".zzfw_sel0").trigger("click");
			// }
			$(".zzfw_noClick").hide();
		}

	})
	// $(".cpxh_ul li").click(function(){
	// 	var liTxt = $(this).html();
	// 	alert($(this).data("code"));
	// 	$(".virXh_selDiv").html(liTxt);
	// })
	$(document).click(function(){
		$(".virXh_sel ul").hide();
	})
	// 产品类型点击事件
	$(".virBuy_cplx li").click(function(){
		var index = $(this).index();
		$(this).addClass("xhOn").siblings().removeClass("xhOn");
		$(".cpxh_ul").empty();
		var len = xhDatas[index].xhcodes.length;
		var xhlist = '';
		for(var i = 0; i < len; i++){
			xhlist+="<li data-code = "+xhDatas[index].xhcodes[i]+">"+xhDatas[index].xhname[i]+"</li>";
		}
		$(".cpxh_ul").append(xhlist);
		$(".cpxh_ul li").eq(0).trigger("click");
	})
	$(".virBuy_cplx li").eq(0).trigger("click");
    	//切换年限
	$("#cpuRange").change(function (event, value){
		var mYears=$("#year_gmnx").html();
		var code_key=$(".virXh_selDiv").attr("data-code");
		var price=getPrice(code_key,mYears);
		//$(".prePrice").html("(原价："+price+"元)");	
		/*if(code_key != "72350418043560"&&code_key != "GA000000000004"&&mYears!=1){    //五折价格
			$(".prePrice").show();
			$(".lsPrice").show();
			price = parseInt(price/2);
			$(".lsPrice").html("(立省："+price+"元)");
		}
		else{
			price=getPrice(code_key,mYears);
			$(".prePrice").hide();
			$(".lsPrice").hide();
		}*/	
		
		
		
		$(".virjg1").html(price+'元');
        $(".virtualBuy_price_sp1").find("strong").html(allPrice()+"元");	
		
	});
	//加购物车	
	$(".virtualBuy_price_btn").click(function(){
		var years=$("#year_gmnx").html();
		var goodsCode=$(".virXh_selDiv").attr("data-code");
		addShopCart(goodsCode,years);	
	});	
	 //锚点控制
	var len_ul = $(".virBuy_cplx li").length;
	var len_li =$(".cpxh_ul li").length;
	var protype= getQueryString("type");
	var typeNum = protype ? parseInt(protype.substring(2)):null;
	var xhNum = parseInt(getQueryString("xh"));
	var year = parseInt(getQueryString("year"));

	if(typeNum>0&&typeNum<=len_ul){
		$(".virBuy_cplx li").eq(typeNum-1).trigger("click");
		if(xhNum>0&&xhNum<=len_li){
			$(".cpxh_ul li").eq(xhNum-1).trigger("click");
			if(year>0&&typeNum<=5){
				setYears(year);
			}
		}
	}
	// 栏目页锚点控制
	var len_ul2 = $(".virHostXh_ul li").length;
	var protype2 = getQueryString("lmtype");
	var typeNum2 = protype2 ? parseInt(protype2.substring(4)):null;
	var xhNum2 = parseInt(getQueryString("lmxh"));
	var xhHover = parseInt(getQueryString("lmnum"));

	if(typeNum2>0&&typeNum2<=len_ul2){
		$(".virHostXh_ul li").eq(typeNum2-1).trigger("click");
		if(xhNum2>0&&xhNum2<=3){
			 $(".xhDivs_uls .xhDivs_ul").eq(typeNum2-1).find("li").eq(xhNum2-1).trigger("click");
			if(xhHover>0&&xhHover<=4){
				$(".virHost_part2_divs>div:visible>div").eq(xhNum2-1).find(".virHost_divs_con").eq(xhHover-1).addClass("virHost_divs_ons").siblings().removeClass("virHost_divs_ons");
			}
		}
	}
	// 栏目页动态添加锚链接
	var lmyBtns = $(".virHost_part2_divs>div");
	lmyBtns.each(function(i){
		lmyBtns.eq(i).find(".virHost_part2_bot>a").each(function(j){
			switch(i){
				case 0:
					lmyBtns.eq(0).find(".virHost_part2_bot").eq(j).prepend("<p><a href = 'http://www.xinnet.com/virtualhost/zt1_quanneng.html' target = '_blank'>更多价位、更多配置&gt;</a></p>");
					break;
				case 1:
					lmyBtns.eq(1).find(".virHost_part2_bot").eq(j).prepend("<p><a href = 'http://www.xinnet.com/virtualhost/zt1_zhuanye.html' target = '_blank'>更多价位、更多配置&gt;</a></p>");
					break;
				case 2:
					lmyBtns.eq(2).find(".virHost_part2_bot").eq(j).prepend("<p><a href = 'http://www.xinnet.com/virtualhost/zt1_mianbeian.html' target = '_blank'>更多价位、更多配置&gt;</a></p>");
					break;
				case 3:
					lmyBtns.eq(3).find(".virHost_part2_bot").eq(j).prepend("<p><a href = 'http://www.xinnet.com/virtualhost/zt1_qingyingyong.html' target = '_blank'>更多价位、更多配置&gt;</a></p>");
					break;
			}
			// var index = lmyBtns.eq(i).find(".virHost_part2_bot>a").eq(j).data("index");
			// lmyBtns.eq(i).find(".virHost_part2_bot>a").eq(j).attr({"target":"_blank", "href":"http://www.xinnet.com/virtualhost/vhost-buy-detail.html?type=lx"+(i+1)+"&xh="+index+"&year=3"});
			// lmyBtns.eq(i).find(".cardOp_buy").eq(j).attr({"target":"_blank", "href":"http://www.xinnet.com/virtualhost/vhost-buy-detail.html?type=lx"+(i+1)+"&xh="+index+"&year=3"});
		})
	})
	//动态添加购买咨询按钮
	$(".virHost_divs_con").each(function(i){
		$(".virHost_divs_con").eq(i).append("<a href='https://xinnetkefu.qiyukf.com/client?k=795e8dbf75db9e403d4ccf3d5c73087sa&wp=1&gid=885693&robotShuntSwitch=1&robotId=150529' onclick=\"traker.traceCount('xinnet.com','110','a"+(291+i)+"');\" target='_blank' class = 'vir_buyzx'>购买咨询</a>");
	});

	$(".mb-close").click(function(){$(this).parent().hide();});
	if($("li.zzfwOn").length){
		$(".fwqd_div").show();
	}
	// 增值服务点击

	$(".tc_cha,.bgw_btn1").click(function(){$(".bgw_tc").fadeOut(100);})
	var zzfwClic = false;

	$(".bgw_btn2").click(function(){
		zzfwClic = true;
		$(".zzfw_sel").eq(0).trigger("click");
		$(".bgw_tc").fadeOut(100);
		zzfwClic = false;
	})
	$(".zzfw_sel").click(function(){
		var selFath = $(this).parent();
		var index = selFath.index();
		var zzPrice = $(".li_fwqd"+index).find(".virjgnew").data("price");
			if($(".virXh_selDiv").attr("data-code") == "72350418043560"){
				// $(".li_fwqd"+index).find(".virjgnew").html("200元");
			}
		if(selFath.hasClass("zzfwOn")){
			selFath.removeClass("zzfwOn");
			$(".li_fwqd"+index).hide().find(".virtualBuy_mid span").html("1");
			$(".virtualBuy_price_sp1").find("strong").html(allPrice()+"元");
			if(!$("li.zzfwOn").length){
				$(".fwqd_div").hide();
			}
		}
		else{
			selFath.addClass("zzfwOn");
			$(".fwqd_div").show();
			$(".li_fwqd"+index).show();
			$(".li_fwqd"+index).find(".virjgnew").html(zzPrice+"元");
			$(".virtualBuy_price_sp1").find("strong").html(allPrice()+"元");
		}
		$(".li_fwqd"+index).find(".virjgnew").html(zzPrice+"元");
	})
	// 购买年限点击
    $("#wzsj_sub,#sjksj_sub,#ssl_sub").click(function(){
    	var qdspan = $(this).next().find("span");
    	var spanNum = qdspan.html();
    	if(spanNum>1){
    		spanNum--;
    		// alert()
    	}
    	qdspan.html(spanNum);
    	var zzPrice = $(this).parents("li").next().find(".virjgnew").data("price");
    	$(this).parents("li").next().find(".virjgnew").html(spanNum*zzPrice+"元");
    	if($(".virXh_selDiv").attr("data-code") == "72350418043560"){
				$(this).parents("li").next().find(".virjgnew").html(spanNum*zzPrice+"元");
			}
    	$(".virtualBuy_price_sp1").find("strong").html(allPrice()+"元");
    })
    // 购买年限点击
    $("#wzsj_add,#sjksj_add,#ssl_add").click(function(){
    	var qdspan = $(this).prev().find("span");
    	var spanNum = parseInt(qdspan.html());
    	if(spanNum<100){
    		spanNum++;
    	}
    	qdspan.html(spanNum);
    	var zzPrice = $(this).parents("li").next().find(".virjgnew").data("price");
    	$(this).parents("li").next().find(".virjgnew").html(spanNum*zzPrice+"元");
    	if($(".virXh_selDiv").attr("data-code") == "72350418043560"){
				$(this).parents("li").next().find(".virjgnew").html(spanNum*zzPrice+"元");
			}
    	$(".virtualBuy_price_sp1").find("strong").html(allPrice()+"元");
    })

	// 动态添加统计代码
	$(".xhDivs_uls li").each(function(i){
		var tjCou = (64+i)>=100 ? (64+i) : "0"+(64+i);
		$(this).attr("onclick", "traker.traceCount('xinnet.com','110','a"+tjCou+"');");
		if(i==10){
			$(this).removeAttr("onclick");
		}
	})
	$(".virHost_part2_divs .virHost_part2_bot>a").each(function(i){
		var tjCou = (74+i)>=100 ? (74+i) : "0"+(74+i);
		var tjCou2 = 130+i;
		$(this).attr("onclick", "traker.traceCount('xinnet.com','110','a"+tjCou+"');");
		$(this).parent().find("p a").attr("onclick", "traker.traceCount('xinnet.com','110','a"+tjCou2+"');");
	})
	$(".virHostXh_ul li").each(function(i){
		var tjCou0 = 174+i;
		$(this).attr("onclick", "traker.traceCount('xinnet.com','110','a"+tjCou0+"');");
	})
	// 统计代码end

});
	
function getPrice(code_key,years){
		var yArr={"1":"one","2":"two","3":"three","5":"five"};	
		var price=_jsonVhostDatasNews[code_key]['price_'+yArr[years]];
		return price;
}	

/**
加入购物车
**/
function addShopCart(goodsCode,years){		
		var purchaseYears=years*12;
		var yArr={"1":"one","2":"two","3":"three","5":"five"};		
		var purchaseSum=_jsonVhostDatasNews[goodsCode]['price_'+yArr[years]];
		var priceCode=_jsonVhostDatasNews[goodsCode]['pricecode_'+yArr[years]];
		var param=_jsonVhostDatasNews[goodsCode]['param'];
		var selectRoom=_jsonVhostDatasNews[goodsCode]['selectRoom'];

		$.ajax({
				url: "/vhost/vhostAction.do?method=addVhostToCar",
				data: {
					"purchaseYears":purchaseYears,
					"purchaseSum":purchaseSum,
					"goodsCode":goodsCode,
					"priceCode":priceCode,
					"param":param,
					"selectRoom":selectRoom					
					},
				cache: false,
				datatype: "html",
				async: false,
				type: "POST",
				success: function(txtDoc){
					if (txtDoc&&txtDoc.indexOf("<")<0){
						   $('#cartview_nolink').show();
						   getShopCartNum();
					}
				}
		});	
		
        if(goodsCode=="GA000000000005"||goodsCode=="38726593246985"){
		 		addMailShopCart();
		}
		if(goodsCode=="GA000000000006"||goodsCode=="53961832849521"){
			addMailShopCart();
			//addNewOfficeToShopCart(20,1,"M","ty");
			addSalepushToCart("F");
		}
		//增值服务加入购物车
		if($(".virtualBuy_zzfw ul li").eq(1).hasClass("zzfwOn")){
			addZzfwShopCart("73951070859430", $("#wzsj_count").html());
		}
		if($(".virtualBuy_zzfw ul li").eq(2).hasClass("zzfwOn")){
			addZzfwShopCart("35058484901229", $("#sjksj_count").html());
		}
		if($(".virtualBuy_zzfw ul li").eq(0).hasClass("zzfwOn")){
			addZzfwShopCart("39849294889596", $("#sjksj_count").html());
		}

}	
function addNewOfficeToShopCart(userNumber,buyYears,timeUnit,goodsType){	
		$.ajax({
			url:"http://www.xinnet.com/newoffice/standard.do",
			type:'post',
			async: false,
			data:{
				method:"addNewOfficeToShopCart",
				userNumber:userNumber,
				buyYears:buyYears,
				goodsType:goodsType,
				timeUnit:timeUnit
			},
			beforeSend:function(){},
			success:function(txtDoc){				
				getShopCartNum();
				$('#cartview_nolink').show();				
			}
			,error: function(XMLHttpRequest, textStatus, errorThrown){
				alert(textStatus);
			}
		});	
}

function addSalepushToCart(goodsType){		
	$.ajax({
		url:"http://www.xinnet.com/uc/salepush.do",
		type:'post',
		dataType:"json",
		async: false,
		data:{
			method:"addToShopCart",			
			goodsType:goodsType			
		},
		beforeSend:function(){},
		success:function(jsonObj){			
			if (!$.isEmptyObject(jsonObj)){
				
			}
			getShopCartNum();	
		}
	});	
}
function addMailShopCart(){
	$.ajax({
			url:"http://www.xinnet.com/mail/cloudmail.do",
			type:'post',
			async: false,
			data:{
				method:"addMailToShopCart",
				userNumber:"5",
				goodsType:"gn",
				qznumber:0,
				kjNumber:10,
				jkNumber:0,
				buyYears:"3",
				timeUnit:"M"
			},
				beforeSend:function(){},
				success:function(txtDoc){					
					getShopCartNum();
				}
			});		
}
function addZzfwShopCart(goodsCode, buyNumber){
	$.ajax({
			url:"http://www.xinnet.com/service/valueAddedService.do?method=addServices2ShopCart",
			type:'post',
			async: false,
			data:{
				goodsCode:goodsCode,
				buyNumber:buyNumber
			},
			beforeSend:function(){},
			success:function(txtDoc){				
				getShopCartNum();
           $('#cartview_nolink').show();					
			}
			,error: function(XMLHttpRequest, textStatus, errorThrown){
				alert(textStatus);
			}
		});	
}
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return (r[2]); return null; 
}
function printPrice(goodsCode,years){
	var price=getPrice(goodsCode,years);		
	$(".virjg1").html(price+'元');
	$(".virtualBuy_price_sp1").find("strong").html(price+'元');	
}
function setYears(years){
	var host = {};
	host.selfs = $("#cpuRange").data('rangeinput');
	host.selfs.setValue(years);
	$("#cpuRange").trigger("change",years);
	
}
// 共计价格
function allPrice(){
	var jg_one = $(".virjg1").html();
	var jg_two = $(".virtualBuy_zzfw ul li").eq(1).hasClass("zzfwOn") ? $(".virjg2").html() : "0元";
	var jg_three = $(".virtualBuy_zzfw ul li").eq(2).hasClass("zzfwOn") ? $(".virjg3").html() : "0元";
	var jg_four = $(".virtualBuy_zzfw ul li").eq(0).hasClass("zzfwOn") ? $(".virjg4").html() : "0元";
	jg_one = parseInt(jg_one.substring(0, jg_one.length-1));
	jg_two = parseInt(jg_two.substring(0, jg_two.length-1));
	jg_three = parseInt(jg_three.substring(0, jg_three.length-1));
	jg_four = parseInt(jg_four.substring(0, jg_four.length-1));
	var allprice = jg_one+jg_two+jg_three+jg_four;
	return allprice;
}
function zzfwPrice(price){
	var zzfwCount1 = $("#wzsj_count").html();
	var zzfwCount2 = $("#sjksj_count").html();
	var zzfwCount3 = $("#ssl_count").html();
	$(".virjg2").html(price*zzfwCount1+"元");
	$(".virjg3").html(price*zzfwCount2+"元");
	$(".virjg4").html(500*zzfwCount3+"元");
}