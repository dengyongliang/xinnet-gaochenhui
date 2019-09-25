var n_slide = t_slide = 0,count_slide; //初始化轮播索引，间歇调用变量，轮播图片数量
$(function(){


	var baner_ul_len = $(".banner_slide_ul").width()/2*-1;
	$(".banner_slide_ul").css("margin-left", baner_ul_len);
	// alert(baner_ul_len);
	/* 从新网开始你的互联网之旅-选项卡 begin */
    /*$('.i-m-subNav a').click(function(){
        var _eq = $(this).parents('li').index();
        $(this).parents('ul').find('a').removeClass('on');
        $(this).addClass('on');
        $(this).parents('ul').siblings('.i-m-con').hide().eq(_eq).show().find('.i-m-c-r').css({left: '170px',opacity: '0'}).animate({"left":"200px","opacity": 1}, 500).siblings('.i-m-c-l').find('.c-text').css({"margin-left":'20px',opacity: '0'}).animate({"margin-left":"0","opacity": 1}, 500);
    })*/
    var tt2;
    $('.i-m-subNav a').hover(function(){
    	clearTimeout(tt2);
    	var _this=$(this);
    	tt2=setTimeout(function(){
    		var _eq = _this.parents('li').index();
    		_this.parents('ul').find('a').removeClass('on');
    		_this.addClass('on');
    		_this.parents('ul').siblings('.i-m-con').hide().eq(_eq).show().find('.i-m-c-r').css({left: '170px',opacity: '0'}).animate({"left":"200px","opacity": 1}, 500).siblings('.i-m-c-l').find('.c-text').css({"margin-left":'20px',opacity: '0'}).animate({"margin-left":"0","opacity": 1}, 500);
    	},200);
    },function(){})
    /* 内部动画 begin */
    $('.r-m').hover(function(){
    	$(this).toggleClass('on');
    })
    $('.r-m-list li').hover(function(){
    	$(this).siblings().removeClass('on-ico');
    	$(this).addClass('on-ico');;
    })
    /* 内部动画 end */
    /* 从新网开始你的互联网之旅-选项卡 end */

    //首页banner轮播动画
    count_slide = $(".slide-banner .slide-banner-b").length;
    $(".slide-banner .slide-banner-b:not(:first-child)").hide();
    t_slide = setInterval("Banner_showImg()", 5000);
    $(".header3-1 .slide-banner").hover(function(){
    	clearInterval(t_slide);
    }, function(){
    	t_slide = setInterval("Banner_showImg()", 5000);
    });
    $(".slide-banner li a").click(function(){
    	var li_index = $(this).parent().index();
    	var show_index = $(".slide-banner .slide-banner-b").filter(":visible").index();
    	if(li_index != show_index){
    		$(".slide-banner .slide-banner-b").filter(":visible").fadeOut(500).parent().children().eq(li_index).fadeIn(600);
	    	$(this).addClass("on").parent().siblings().find("a").removeClass("on");
	    	n_slide = li_index;
    	}
    });

	$(".yumingsousuo-b22 input").focus(function(){
		if(this.value=="输入域名，如：xinnet"){
			this.value="";
			this.style.color="#333";
		}
	}).blur(function(){
		if(this.value==""){
			this.style.color="#ccc";
			this.value="输入域名，如：xinnet";
		}
	})

	$(".yumingsousuo-b22-ymxl li").hover(function(){
		this.style.backgroundColor="#f6f6f6";
	},function(){
		this.style.backgroundColor="";
	})

	$(".yumingsousuo-b22-ym").click(function(e){
		$(".yumingsousuo-b22-ymxl").css("display","");

		e.stopPropagation();
	})

	document.body.onclick=function(){
		$(".yumingsousuo-b22-ymxl").css("display","none");
	}

	$(".yumingsousuo-b22-ymxl li").click(function(){
		$(".yumingsousuo-b22-ym").html($(this).html());
	})

	$(".yumingsousuo-r1").roller({line:1,speed:500,timer:3000,up:"",down:"",hovers:false});
	$(".yumingsousuo-r2").roller({line:1,speed:500,timer:3000,up:"",down:"",hovers:false});
	$(".yumingsousuo-r3").roller({line:1,speed:500,timer:3000,up:"",down:"",hovers:false});

	setInterval(function(){
		$(".yumingsousuo-b21-yumingjiageCon").stop(true,true);
		$(".yumingsousuo-b21-yumingjiageCon").animate({scrollLeft:500 },500,function(){
			$(".yumingsousuo-b21-yumingjiageCon1")[0].appendChild($(".yumingsousuo-b21-yumingjiage")[0]);
			$(".yumingsousuo-b21-yumingjiageCon").scrollLeft(0);
		});
	},5000);
})


/*为什么选择新网、客户案例*/
var iNum = 0;
var caseLiNum;
var wid;
$(function (){

	caseLiNum = $(".case-container li").length;
	$(".case-list").css("width",1071*caseLiNum);
	$(".chose-xinnet-con-03").mouseover(function(){
		$(".btn-div").css("display","block");
		$(".left-btn").stop(true,true);
		$(".right-btn").stop(true,true);
		clearInterval(wid);
		$(".case-container").stop(true,true);
		$(".case-container").animate({scrollLeft:1071 * iNum},500);
	});
	$(".chose-xinnet-con-03").mouseout(function(){
		$(".btn-div").css("display","none");
		wid = setInterval("lbAutoPlay()",3000);
	});
	$(".left-btn").click(function(){
		iNum--;
		if(iNum<0){iNum = caseLiNum-1;}
		$(".case-container").stop(true,true);
		$(".case-container").animate({scrollLeft:1071 * iNum},500);
		$(".btn-div li a").removeClass('on').eq(iNum).addClass('on');
	})
	$(".right-btn").click(function(){
		iNum++;
		if(iNum>=caseLiNum){iNum = 0;}
		$(".case-container").stop(true,true);
		$(".case-container").animate({scrollLeft:1071 * iNum},500);
		$(".btn-div li a").removeClass('on').eq(iNum).addClass('on');
	})
	$(".btn-div li").hover(function(){
		$(".case-container").stop(true,true);
           // $(".case-container").animate({scrollLeft:1071 * $(this).index()},500);
           $(".btn-div li a").removeClass('on');
           $(this).find('a').addClass("on");
           clearInterval(wid);
           iNum = $(this).index();
       })
	wid = setInterval("lbAutoPlay()",3000);
});
function lbAutoPlay(){
	iNum++;
	if(iNum>=caseLiNum) iNum = 0;
	$(".case-container").stop(true,true);
	$(".case-container").animate({scrollLeft:1071 * iNum},500);
	$(".btn-div li a").removeClass('on');
	$(".btn-div li a").eq(iNum).addClass('on');
}
/*客户案例 End*/

    //显示图片
    function Banner_showImg(){
    	n_slide = n_slide >= (count_slide - 1) ? 0 : ++n_slide;  //n的值 0 ，1 ，2...
		$(".slide-banner li a").eq(n_slide).trigger("click");
 }
  