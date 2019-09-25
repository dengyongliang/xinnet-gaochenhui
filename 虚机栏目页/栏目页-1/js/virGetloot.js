//banner活动点击事件
var pcBindActiveUrl = "http://www.xinnet.com";
var discountStrs = "B201803202975|91534021V90767212";
var countstr = 'B201803202975|91534021V90767212';
var tmptag = 0;
var tmpbind = 0;
$(function(){
	$(".tc_cha, .bgw_btn").click(function(){
				$(".bgw_tc").fadeOut(100);
			})
	// $("#tc_sure").html("马上注册").attr("href", "http://www.xinnet.com/user/user.do?method=toRegister");
	// bgw_tc("此活动仅限新用户参加，请先注册再回来参加活动");
	$(".getVir_yhq").click(function(){
		var lxNum = $(this).parents(".virHost_divs_con").find(".virHost_part2_bot>a").data("index");
		if(loginId != "notLogin"){
			validateInfo3(discountStrs);
			if(tmptag == 1){
				bindcount(countstr);
				if(tmpbind == 1){
					$(".bgw_btn").attr("href", "http://www.xinnet.com/virtualhost/vhost-buy-detail.html?type=lx1&xh="+lxNum+"&year=2");
					$(".bgw_tc").show();
					bgw_tc("领取成功", "前去使用");
				}
				else if(tmpbind == 2){
					$(".bgw_btn").attr("href", "javascript:;");
					bgw_tc("只有在活动期间新注册会员可领取！", "确定");
					// bgw_tc("只有在活动期间新注册会员可领取！");
					// addSalepushToCart("F");
				}
				else if(tmpbind == 3){
					alert("重复领劵！");
				}
			}
			else if(tmptag == 2){
				// bgw_tc("每个用户仅限参与一次活动！");
				// addSalepushToCart("F");
				$(".bgw_btn").attr("href", "http://www.xinnet.com/virtualhost/vhost-buy-detail.html?type=lx1&xh="+lxNum+"&year=2");
				bgw_tc("您已领取过！", "前去使用");

			}
			else{
				//bgw_tc("只有新注册会员可参加此活动！");
			}
		}
		else{
			window.location.href = "http://www.xinnet.com/user/user.do?method=toRegister";
		}
	})

})
function bgw_tc(txt, txt1){
				$(".bgw_div2 p").html(txt);
				$(".bgw_btn").html(txt1);
				$(".bgw_tc").fadeIn(200);
			}
// 判断是否可以领劵
		function validateInfo3(discount){
		     var discountStr=discount;
		     $.ajax({
		         url:pcBindActiveUrl+'/usercenter/user.do?method=validateInfo3',
		         type: 'get',
		         dataType:"json",
		         data:{discountStr:discountStr},
		         async:false,
		       success: function(json){
		        if (json != null) {
		               // alert(json.message);
		          if(json.message=="0"){
		                    tmptag=3;
		          }
		          if(json.message=="notLogin"){
		            //window.location.href="${ctx}/views/login/login.jsp";
		                    tmptag=3;
		                   // return 'notLogin';
		          }else if(json.message=="canGet"){
		              //  jBox.open($('#win2').html(), '提示', 405, 'auto', {id: 'win2-1',
		                //    buttons: {}
		                     // alert('can');
		                      tmptag=1;


		          } else if (json.message=="canNextGet"){    //判断领过并且用过
		                    tmptag=2;
		          //  return 'not';
		          }
		        }
		       },
		          error: function (XmlHttpRequest, textStatus, errorThrown) {

		          }
		      });
   			}
   		// 判断是否领劵成功
   		function  bindcount(bindDiscount) {
	       $.ajax({
	         url:pcBindActiveUrl+'/usercenter/user.do?method=bindDiscount2',
	         type: 'get',
	        // dataType:"jsonp",
	         dataType:"json",
	         data:{bindDiscount:bindDiscount},
	         async:false,
	       success: function(json){
	        if (json != null) {
	          if(json.message=="notLogin"){
	            window.location.href="https://login.xinnet.com/login?service=http://www.xinnet.com/views/login/login.jsp?redirect=http%3A%2F%2Fwww.xinnet.com%2F&r=2";
	          }else if(json.message=="bindSuccess"){
	                    tmpbind = 1;
	             // return 'su';
	          }else if(json.message=="repeat"){
	                    tmpbind = 3;
	               // return 'repeat';
	          }else if(json.message=="bindFail"){
	                    tmpbind = 2;
	            // return 'fail';
	          }
	        } else {
	                tmpbind = 2;
	            //return 'fail';
	        }
	       },
	          error: function (XmlHttpRequest, textStatus, errorThrown) {
	             tmpbind = 2;
	        //return 'fail';
	          }
	      });
		}