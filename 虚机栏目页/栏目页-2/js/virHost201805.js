/*20180525*/
var clou_slide = tclou_slide = 0,count_slide_l; //初始化轮播索引，间歇调用变量，轮播图片数量
$(function(){
    //轮播图片
    //首页banner轮播动画
    count_slide_l = $(".slide_main>div").length;
    var slideLi = "";
    for(var i = 0;i<count_slide_l;i++){
        slideLi += "<li></li>";
    }
    $(".slide_main_ul ul").append(slideLi).find("li").eq(0).addClass("slide_main_on");
    var list_wh = $("#slide_main_ul").width()*-1;
    $("#slide_main_ul").css("margin-left", list_wh/2);
    $(".slide_main>div:not(:first-child)").hide();
    tclou_slide = setTimeout("Cbanner_showImg()", 5000);
    $(".slide_main").parent().hover(function(){
        clearTimeout(tclou_slide);
    }, function(){
        tclou_slide = setTimeout("Cbanner_showImg()", 5000);
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
    // 型号卡片hover
    $(".virHostXh_div>div").hover(function(){
        $(this).addClass("cardOn").siblings().removeClass("cardOn");
    },function(){})
    $(".divTab1>div.divListH").hover(function(){
        $(this).addClass("vOn").siblings().removeClass("vOn");
    },function(){})
    // 型号点击切换
    $(".virHostXh_ul li").click(function(){
        var index = $(this).index();
        var offHei = $(".virHost3_div3").offset().top;
        if(index!=4){
            $(this).addClass("vOn").siblings().removeClass("vOn");
            $(".virHost_xh .virHostXh_div").eq(index).show().siblings().hide();
        }
        else{
            $("html,body").animate({scrollTop:offHei-50}, 200);
        }
    })
    // 增值服务弹窗
    $(".fwzzUl_btn0").click(function(){
        var parIndex = $(this).parents("li").index();
        $(".virZzfw_tc"+parIndex).fadeIn(200);
    })
    $(".virZzfw_close").click(function(){
        $(".virZzfw_tc").fadeOut(100);
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
    //卡片点击正反转换
    $(".cardbg01,.cardbg02,.cardImgsp").click(function(){
        var parentDiv = $(this).parents(".xhCard2");
        parentDiv.find(".cardPositive").fadeOut(100);
        parentDiv.find(".cardOpposite").fadeIn(400);
    })
    $(".cardbg03").click(function(){
        var parentDiv = $(this).parents(".xhCard2");
        parentDiv.find(".oppHdBg").fadeIn(200);
    })
    $(".cardOpposite,.oppHdBg").hover(function(){},function(){
        $(this).fadeOut(100);
    })
    // 滚轮事件
    var doc = $(document);
    var divTop0 = $(".headBar").offset().top;
    var virHost_topBar = $(".virHost_topBar");
    var pt1_hei = $(".virHost_part1").height();
    var fixDiv = $(".headBarFixed");
    var divTop1 = $(".virHost4_cpgs");
    var divTop2 = $(".virHost4_cjwt");
    var divTop3 = $(".virHost4_khal");
    var divTop4 = $(".virHost4_cpbz");
    var fixLi = $(".headBarFixed li");
    fixLi.click(function(){
        var index = $(this).index();
        var goTop = $(".virHost_part4>div").eq(index+1).offset().top;
        $("html,body").animate({scrollTop:goTop-129},200);
    })
    $(window).scroll(function(){
        var top = doc.scrollTop();
        var top1 = divTop1.offset().top;
        var top2 = divTop2.offset().top;
        var top3 = divTop3.offset().top;
        var top4 = divTop4.offset().top;
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
    })
    // //在线帮助
    // var xTool = $(".x-tool").css("top");
    // var xToolLen = xTool.length;
    // xTool = xTool.substring(0, xToolLen-2);
    // xTool = parseFloat(xTool)+327;
    // $(".virHelp_tc").css("top", xTool+"px");
    // $(".virHelp_btn").click(function(){
    //     $(".virHelp_div").fadeIn(100);
    // })
    // $(".virHelp_close").click(function(){
    //     $(".virHelp_div").fadeOut(50);
    // })
    // $(window).scroll(function(){
    //     var scrTop = $(document).scrollTop();
    //     if(scrTop>400){
    //         $(".virHelp_tc").css("top", (xTool+65)+"px");
    //     }
    //     else{
    //         $(".virHelp_tc").css("top", xTool+"px");
    //     }
    // })
    // $(".virHelp_bar").click(function(){
    //     var thistxt = $(this).next();
    //     if(thistxt.css("display") == "none"){
    //         $(this).addClass("on").parent().siblings().find(".virHelp_bar").removeClass("on");
    //         thistxt.slideDown(200).parent().siblings().find(".virHelp_txt").slideUp(200);
    //     }
    //     else{
    //         $(this).removeClass("on")   
    //         thistxt.slideUp(200);
    //     }
    // })
    // $(".proMore a").click(function(){$(".virHelp_div").fadeIn(100);});

    // $(".vir2Hov").click(function(){
    //     $(".virErwm").fadeIn(200);
    // })
    // $(".virErwm_c").click(function(){
    //     $(".virErwm").fadeOut(100);
    // })

    //动态添加统计代码
    $(".Card2_btns").each(function(i){
        $(this).parent().find("p .virLink1").attr("onclick", "traker.traceCount('xinnet.com','110','a"+(366+i)+"')");
        $(this).children().eq(0).attr("onclick", "traker.traceCount('xinnet.com','110','a"+(386+i)+"')");
        $(this).children().eq(1).attr("onclick", "traker.traceCount('xinnet.com','110','a"+(346+i)+"')");
    });
})
//显示图片
    function Cbanner_showImg(){
        clou_slide = clou_slide >= (count_slide_l - 1) ? 0 : ++clou_slide;  //n的值 0 ，1 ，2...
        $(".slide_main_ul li").eq(clou_slide).trigger("click");
        tclou_slide = setTimeout("Cbanner_showImg()", 5000);
 }