$(function(){

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

    $(".vir2Hov").click(function(){
        $(".virErwm").fadeIn(200);
    })
    $(".virErwm_c").click(function(){
        $(".virErwm").fadeOut(100);
    })
    $("#tc_sure,#tc_cha").click(function(){
                $("#tc_anniv").fadeOut(100);
            })
    $(".jySubmit").click(function(){
        if(loginId!="notLogin"){
            $.ajax({
                url:"https://xhs.xinnet.com/xhs/comment",
                type:"GET",
                dataType:"jsonp",
                data:{
                    user:""
                },
                success:function(data){
                    bgw_tc("<span style = 'color:#4242e2;'>建议已提交成功</span><br/>如果此建议被采纳，您将获得专属荣誉优惠券一张（采纳结果将已短信形式发送到您的会员账号绑定手机）");
                }
            })
        }
    })
    
})
function bgw_tc(txt){
                $("#tc_annivP").append(txt);
                $("#tc_anniv").fadeIn(200);
            }