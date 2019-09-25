//add register
$(function(){
  var locHref = location.href;
  if(getCookieFuc("registerType")){
    return;
  }
  if(locHref === 'http://www.xinnet.com/' || locHref.indexOf("/composite/")>-1){
    setCookieFuc("registerType", "1", 30)
  }
  else if(locHref.indexOf("/domain/")>-1){
    setCookieFuc("registerType", "P-domain", 30)
  }
  else if(locHref.indexOf("/mail/")>-1){
    setCookieFuc("registerType", "P-mail", 30)
  }
  else if(locHref.indexOf("/cs/")>-1 || locHref.indexOf("/newcloud/")>-1 || locHref.indexOf("/idc/")>-1 || locHref.indexOf("/chicloud/")>-1){
    setCookieFuc("registerType", "P-CS", 30)
  }
  else if(locHref.indexOf("/jianzhan/")>-1 || locHref.indexOf("/site/")>-1){
    setCookieFuc("registerType", "P-site", 30)
  }
  else if(locHref.indexOf("/virtualhost/")>-1){
    setCookieFuc("registerType", "V-host", 30)
  }
})


function setCookieFuc(key,val,time){
  var date=new Date(); //获取当前时间
  var expiresDays=time;  //将date设置为n天以后的时间
  date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
  document.cookie=key + "="+ escape(val) +";expires="+date.toGMTString()+"; path=/";  //设置cookie
}
function getCookieFuc(name) 
{ 
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else 
    return null; 
}