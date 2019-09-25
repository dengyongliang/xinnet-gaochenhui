/*20180323*/
$(function(){
	var cookieName = "fcShow";
	if(!$.cookie(cookieName)){
		var fcshow = setTimeout("$('.virZxkf').fadeIn(200);",30000);
	}
	$(".virZxkf_close,.Zxkf_no").click(function(){
		if($("#noMessages").prop("checked")){
			$.cookie(cookieName, "yes",
				{
				expires:30,
				// path:"/",
				// domain:"地址",
				secure:false
				}
			);
		}
		$(".virZxkf").fadeOut(100);
	});
	$(".Zxkf_sure").click(function(){
		if($("#noMessages").prop("checked")){
			$.cookie(cookieName, "yes",
				{
				expires:7,
				// path:"/",
				// domain:"地址",
				secure:false
				}
			);
		}
		$(".virZxkf").fadeOut(100);
		window.open("https://xinnetkefu.qiyukf.com/client?k=795e8dbf75db9e403d4ccf3d5c73087a&wp=1&gid=885693&robotShuntSwitch=1&robotId=150529","_blank");
	})
})