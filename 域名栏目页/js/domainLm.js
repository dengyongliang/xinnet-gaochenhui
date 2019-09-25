var clou_slide = (tclou_slide = 0),
  count_slide_l; //初始化轮播索引，间歇调用变量，轮播图片数量
$(function() {
  //轮播图片
  var list_wh = $('#slide_main_ul').width() * -1;
  $('#slide_main_ul').css('margin-left', list_wh / 2);
  //首页banner轮播动画
  count_slide_l = $('.slide_main>div').length;
  $('.slide_main>div:not(:first-child)').hide();
  tclou_slide = setInterval('Cbanner_showImg()', 5000);
  $('.slide_main')
    .parent()
    .hover(
      function() {
        clearInterval(tclou_slide);
      },
      function() {
        tclou_slide = setInterval('Cbanner_showImg()', 5000);
      }
    );
  $('.slide_main_ul li').click(function(e) {
    e.stopPropagation();
    var li_index = $(this).index();
    var show_index = $('.slide_main>div')
      .filter(':visible')
      .index();
    if (li_index != show_index) {
      $('.slide_main>div')
        .filter(':visible')
        .fadeOut(500)
        .parent()
        .children()
        .eq(li_index)
        .fadeIn(600);
      $(this)
        .addClass('slide_main_on')
        .siblings()
        .removeClass('slide_main_on');
      clou_slide = li_index;
    }
  });
  $('.navBtns a').click(function() {
    var index = $(this).index();
    $(this)
      .addClass('dmOn')
      .siblings()
      .removeClass('dmOn');
    $('.searNav>div')
      .eq(index)
      .show()
      .siblings()
      .hide();
  });
  $('.dmNav li').click(function() {
    var index = $(this).index();
    $(this)
      .addClass('dmOn')
      .siblings()
      .removeClass('dmOn');
    $('.dmNav_item')
      .eq(index)
      .show()
      .siblings()
      .hide();
  });
  $('.dmSlide_l').click(function() {
    var parent = $(this).parents('.dmNav_item');
    var con = parent.find('.dmSlide_con');
    var ulDom = parent.find('.ym-list-tple');
    var width = $('.ym-list-tple').width();
    var last = ulDom.last();
    con.prepend(last).css('left', -1 * width + 'px');
    con.animate({ left: 0 }, 500);
  });
  $('.dmSlide_r').click(function() {
    var parent = $(this).parents('.dmNav_item');
    var con = parent.find('.dmSlide_con');
    var ulDom = parent.find('.ym-list-tple');
    var width = $('.ym-list-tple').width();
    var first = ulDom.first();
    con.animate({ left: -1 * width }, 500, function() {
      con.append(first).css('left', '0px');
    });
  });
  $('.chDiv_nav a').click(function() {
    var index = $(this).index();
    $(this)
      .addClass('dmOn')
      .siblings()
      .removeClass('dmOn');
    $('.domainReg_domainsDiv')
      .eq(index)
      .show()
      .siblings()
      .hide();
  });
  $('.fSelRad').click(function() {
    $(this)
      .parents('.domainReg_domainsDiv')
      .find('.domainReg_domainsUl')
      .find('label')
      .addClass('chec_box');
    $(this)
      .parents('.domainReg_domainsDiv')
      .find('.domainReg_domainsUl')
      .find('input')
      .attr('checked', 'true');
  });
  $('.sSelRad').click(function() {
    $(this)
      .parents('.domainReg_domainsDiv')
      .find('.domainReg_domainsUl')
      .find('label')
      .removeClass('chec_box');
    $(this)
      .parents('.domainReg_domainsDiv')
      .find('.domainReg_domainsUl')
      .find('input')
      .removeAttr('checked');
  });
  $('.tSelRad').click(function() {
    $(this)
      .parents('.domainReg_domainsDiv')
      .find('.domainReg_domainsUl')
      .find('label')
      .removeClass('chec_box');
    $(this)
      .parents('.domainReg_domainsDiv')
      .find('.domainReg_domainsUl')
      .find('input')
      .removeAttr('checked');
    $(this)
      .parents('.domainReg_domainsDiv')
      .find('.domainReg_domainsUl')
      .find('.domain_cy')
      .addClass('chec_box');
    $(this)
      .parents('.domainReg_domainsDiv')
      .find('.domainReg_domainsUl')
      .find('.domain_cy')
      .find('input')
      .attr('checked', 'true');
  });
  $('.tSelRad').trigger('click');
  $('.domainReg_domainsUl li label').click(function() {
    if (
      $(this)
        .find('input')
        .attr('checked')
    ) {
      $(this).addClass('chec_box');
    } else {
      $(this).removeClass('chec_box');
    }
  });
  $('#dmSearipu').click(function(event) {
    event.stopPropagation();
    $('.checkedDiv').show();
  });
  $('.dmSear_d2').click(function(event) {
    event.stopPropagation();
    $('.checkedDiv').show();
  });
  $('.checkedDiv').click(function(event) {
    event.stopPropagation();
  });
  $(document).click(function() {
    $('.checkedDiv').hide();
  });
  $('.domainReg_domainsUl li').hover(
    function() {
      var labWi = $(this)
        .find('label')
        .width();
      // alert(labWi);
      $(this)
        .find('.domainReg_jg')
        .css('left', labWi / 2 - 45)
        .fadeIn(200);
    },
    function() {
      $(this)
        .find('.domainReg_jg')
        .fadeOut(0);
    }
  );
  $('.popClose, .xinPopBtn').click(function() {
    $('.popShad').hide();
    $('.xinPop_h p').html('提示');
  });
});

//显示图片
function Cbanner_showImg() {
  clou_slide = clou_slide >= count_slide_l - 1 ? 0 : ++clou_slide; //n的值 0 ，1 ，2...
  $('.slide_main_ul li')
    .eq(clou_slide)
    .trigger('click');
}
// lrSlide
function lrSlideTime() {
  $('#lrSlide_rbtn').trigger('click');
}
function doSearch() {
  var prefix = $('#dmSearipu').val();
  if (!myIsDomain(prefix)) {
    showPop('请检查你要查询的域名');
    return;
  } else {
    var arrlist = '';
    var index = $('.chDiv_nav a.dmOn').index();
    $('.domainReg_domainsDiv')
      .eq(index)
      .find('.chec_box')
      .each(function() {
        arrlist =
          arrlist +
          $(this)
            .find('input[type=checkbox][name=suffixes]')
            .val() +
          ',';
      });

    // document.domainForm.domainSuffixType.value = 0;
    //  document.domainForm.suffix.value = arrlist;
    // document.domainForm.prefix.value = prefix;
    //  document.domainForm.action="http://www.xinnet.com/domain/domainQueryResult.html?prefix="+prefix+"&suffix="+arrlist;
    window.location.href = encodeURI(
      'http://www.xinnet.com/domain/domainQueryResult.html?prefix=' +
        prefix +
        '&suffix=' +
        arrlist
    );
  }
}
// 商标查询
function doSearchSb() {
  //searchFormCom("searchFormCom");
  //var prefix = document.getElementById("prefix").value;
  var prefix = $('#sbValue').val();
  if (prefix != '') {
    window.location.href = encodeURI(
      'http://www.xinnet.com/trademark/trademarkQueryResult.html?tmName=' +
        prefix
    );
  }
  //}
}
function showPop(txt, href, btnTxt) {
  $('.xinPop_p0')
    .html('')
    .append(txt);
  $('.popShad').show();
  if (href != undefined && href != '') {
    $('.xinPopBtn')
      .attr('href', href)
      .text(btnTxt);
  } else {
    $('.xinPopBtn')
      .attr('href', 'javascript:;')
      .text('我知道了');
  }
}
