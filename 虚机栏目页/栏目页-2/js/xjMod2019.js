$(function(){
  $(".xjNewDiv_ul2 li").click(function(){
    var index = $(this).index();
    $(this).addClass('vOn').siblings().removeClass('vOn');
    $(this).parents(".xjNewlist_item").find(".xjNew_info").eq(index).show().siblings().hide();
  })
  $(".xjNewDiv_ul1 li").click(function(){
    var index = $(this).index();
    $(this).addClass('vOn').siblings().removeClass('vOn');
    $(this).parents(".xjNewDiv").find(".xjNewlist_item").eq(index).show().siblings().hide();
  })
  $(".xjNewBar_ul li").click(function(){
    var index = $(this).index();
    $(this).addClass('vOn').siblings().removeClass('vOn');
    $(".xjNewCon .xjNewDiv").eq(index).show().siblings().hide();
  })
})