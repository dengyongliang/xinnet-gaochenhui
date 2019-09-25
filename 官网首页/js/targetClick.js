function virTzLink(){
  // event.preventDefault();
  var xjcName = getXjCookie("xjTzName");
  if(!xjcName){
    var random = Math.floor(Math.random()*2 + 1);
    if(random == 1){
      setStaticCookie("xjTzName","virtualhost",7);
      window.location = "http://www.xinnet.com/virtualhost/virtualhost.html";
    }
    else if(random == 2){
      setStaticCookie("xjTzName","virtualhostNovice",7);
      window.location = "http://www.xinnet.com/virtualhost/virtualhostNovice.html";
    }
  }
  else{
    if(xjcName == "virtualhost"){
      window.location = "http://www.xinnet.com/virtualhost/virtualhost.html";
    }
    else{
      window.location = "http://www.xinnet.com/virtualhost/virtualhostNovice.html";
    }
  }
}
function setStaticCookie(key,val,time){
  var date=new Date(); //获取当前时间
  var expiresDays=time;  //将date设置为n天以后的时间
  date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
  document.cookie=key + "="+ escape(val) +";expires="+date.toGMTString()+"; path=/";  //设置cookie
}
function getXjCookie(name) 
{ 
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]); 
  else 
    return null; 
} 