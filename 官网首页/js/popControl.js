//建站弹窗
$(function(){
  var pageUrl = window.location.href;
  if(pageUrl.indexOf('/jianzhan/') <= -1){
    return;
  }
  var zxkey = "popShow";
  if(getJsCookie(zxkey)==null){
    var popShow = setTimeout("$('.ZxkfTc').fadeIn(200);",20000);
  }
  $(".ZxkfTc_close").click(function(){
    if($("#noMessages").prop("checked")){
      setJsCookie(zxkey, "show", 30)
    }
    $(".ZxkfTc").hide();
  });
  $(".tcZxTj").click(function(){
    var name = $(".tcZxName").val();
    var phone = $(".tcZxPhone").val();
    var isEmpty,isTrue;
    if(name == undefined||name == ""||name == null){
      $(".tcZxName").next().html("不能为空！").show();
      return;
    }
    else{
      if(name.length>10){
        $(".tcZxName").next().html("姓名长度过长！").show();
        return;
      }
      $(".tcZxName").next().hide();
    }
    if(phone == undefined||phone == ""||phone == null){
      $(".tcZxPhone").next().html("不能为空！").show();
      return;
    }
    else if(!isTcPhone(phone)){
      $(".tcZxPhone").next().html("请输入正确的联系方式！").show();
      return;
    }
    else{
      $(".tcZxPhone").next().hide();
    }
    $(".tcFormDiv").append("<img src = 'http://marketsale-web.xinnet.com/partner/outer/save?userName="+name+"&userPhoneNumber="+phone+"'>");
    //$(".popMsgTc").fadeIn();
    alert("我们的产品顾问将尽快致电给您。该通话对您完全免费，请放心接听！");
    // var hidePop = setTimeout(function(){
    //   $(".popMsgTc").hide();
    // }, 3000)
  })
})
function setJsCookie(key,val,time){
  var date=new Date(); //获取当前时间
  var expiresDays=time;  //将date设置为n天以后的时间
  date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
  document.cookie=key + "="+ escape(val) +";expires="+date.toGMTString();  //设置cookie
}
function getJsCookie(name) 
{ 
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]); 
  else 
    return null; 
}
function isTcPhone(val){
        var isFixMob = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
        var isMobilePhone = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
       if(isMobilePhone.test(val)||isFixMob.test(val)){
           return true;
       }
      else{
          return false;
      }
   }