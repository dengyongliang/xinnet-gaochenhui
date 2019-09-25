$(function(){
  //查询参数
  // var searchObj = {name: "zzjz", type: "standard"}  //默认
  var searchObj = getSerch()
  if(!(searchObj.name && searchObj.type)){
    searchObj.name = "zzjz"
    searchObj.type = "standard"
  }
  var productData = {},title;
  if(searchObj.name === 'zzjz'){
    title = jsonParams_zzjz.jzname
    productData = jsonParams_zzjz.data[searchObj.type]
  }
  else if(searchObj.name === 'dzjz'){
    title = jsonParams_dzjz.jzname
    productData = jsonParams_dzjz.data[searchObj.type]
  }
  $(document).on("click", "#languageList li", function(){
    // var pzLists = $(".pzList li");
    // var parent = $(".pzList")
    // var that = $(this);
    // var title = $("#proName").html()

    $(this).addClass("jzOn").siblings().removeClass("jzOn")
    $(".language").html($(this).html())
    getAllPrice(productData.price)

    // if($(this).hasClass('jzOn')){
    //   if($(this).parent().find(".jzOn").length<=1){
    //     alert("至少选择一款语言！");
    //     return;
    //   }
    //   pzLists.each(function(item){
    //     if($(this).find(".language").html() == that.html()){
    //       $(this).remove();
    //     }
    //   })
    //   $(this).removeClass("jzOn")
    // }
    // else{
    //   $(this).addClass("jzOn")
    //   var year = $("#buyYears li.jzOn span").html() ? $("#buyYears li.jzOn span").html() : 1
    //   var liDom = ""
    //   var tcgg = $("#dzgg li.jzOn").html() ? $("#dzgg li.jzOn").html() : ''
    //   if(searchObj.name === 'zzjz'){
    //     liDom = "<li><div class = 'pzList_h'>"+title+"</div><div class = 'pzList_body'><p><span>语言版本：</span><span class = 'language'>"+$(this).html()+"</span></p><p><span>购买时长：</span><span class = 'yearSel'>"+year+"年</span></p></div></li>"
    //   }
    //   else if(searchObj.name === 'dzjz'){
    //     liDom = "<li><div class = 'pzList_h'>"+title+"</div><div class = 'pzList_body'><p><span>语言版本：</span><span class = 'language'>"+$(this).html()+"</span></p><p><span>套餐规格：</span><span class = 'tcgg'>"+tcgg+"</span></p><p><span>购买时长：</span><span class = 'yearSel'>"+year+"年</span></p></div></li>"
    //   }
    //   parent.append(liDom)
    // }
  })
  $(document).on("click", "#dzgg li", function(){
    $(this).addClass("jzOn").siblings().removeClass("jzOn")
    var tcgg = $(this).html()
    $(".tcggl").html(tcgg)
    var num = $("#ggNum li.jzOn span").html()
    $(".buyNuml").html(num)
    if($(this).attr("dataInfo") === '0'){
      $(".tcggLi").hide()
      $("#ggNum").parent().hide()
    }
    else{
      $(".tcggLi").show()
      $("#ggNum").parent().show()
    }
    getAllPrice(productData.price)
  })
  $(document).on("click", "#buyYears li", function(){
    $(this).addClass("jzOn").siblings().removeClass("jzOn")
    var year = $("#buyYears li.jzOn span").html()
    $(".yearSel").html(year+"年")
    getAllPrice(productData.price)
  })
  //初始化
  initDomData(productData, title, searchObj)
  if(searchObj.type === "free"){
    $(".djtc").hide();
    $(".tcggLi").hide();
  }
  if(searchObj.language){
    var arr = searchObj.language.split("|")
    arr.forEach(function(currentValue, index){
      $("#languageList li[datakey="+currentValue+"]").trigger("click")
    })
  }
  else{
    $("#languageList li").eq(0).trigger("click")
  }
  if(searchObj.year){
    $("#buyYears li").eq(searchObj.year-1).trigger("click")
  }
  else{
    $("#buyYears li").eq(0).trigger("click")
  }
  if(searchObj.tc){
    $("#dzgg li[datainfo^="+searchObj.tc+"]").trigger("click")
  }
  else{
    $("#dzgg li").eq(0).trigger("click")
  }
  // 关闭弹窗
  $(".mb-close").click(function(){$(this).parent().hide();});
  //购买
  $(".jzBuyBtn").click(function(){
      var purchaseYears = parseInt($("#buyYears li.jzOn span").html())
      var goodsCode = productData.goodsCode
      var language = $("#languageList li.jzOn").attr("dataKey")
      var data
      if(!productData.tcArr || $("#dzgg li.jzOn").attr("dataInfo") === "0"){
        data = {method: "addToCart",purchaseYears: purchaseYears,purchaseUnit: "Y",goodsCode: goodsCode,language: language}
      }
      else{
        var subGoodsCode = $("#dzgg li.jzOn").attr("datainfo").split("|")[0]
        data = {method: "addToCart",purchaseYears: purchaseYears,purchaseUnit: "Y",goodsCode: goodsCode,subGoodsCode: subGoodsCode,language: language}
      }
      $.ajax({
        url: 'http://www.xinnet.com/marketSite.do',
        type: 'post',
        async: false,
        data: data,
        beforeSend: function(){
          $(".loadingBox").show()
        },
        success: function(res){
          //
          $(".loadingBox").hide()
          $('#cartview_nolink').show();
          getShopCartNum();
        }
      })
    })
})

//更新函数
function initDomData(productData, title, searchObj){
  $("#jztil1").html("建站云-"+title)
  $("#jztil2").html(title+"-套餐规格")
  $(".pzList_h1").html("建站云-"+title)
  $(".pzList_h2").html(title+"-套餐规格")
  $("#proName").html(productData.productName)
  $(".tcBb").html(productData.productName)
  var lanList = "", yearList = "", ggList = ""
  for(var item in productData.language){
    lanList += "<li dataKey="+item+">"+productData.language[item]+"</li>"
  }
  $("#languageList").append(lanList)
  for(var item in productData.years){
    yearList += "<li><span>"+productData.years[item]+"</span>年</li>"
  }
  $("#buyYears").append(yearList)
  if(productData.tcArr){
    for(var index in productData.tcArr){
      ggList += "<li dataInfo="+productData.tcArr[index].code+"|"+productData.tcArr[index].price+">"+productData.tcArr[index].tcName+"</li>"
    }
    if(searchObj.name === "zzjz"){
      ggList+="<li dataInfo='0'>无</li>"
    }
    $("#dzgg").append(ggList)
  }
  // $(".jzBuyl_ul li:first-child").trigger("click")
}
function getAllPrice(price){
  var index = $("#buyYears li.jzOn").index()
  // var len = $(".pzList li").length;
  var ggPrice = 0
  // var data = $("#dzgg li.jzOn").attr("dataInfo")
  // ggPrice = parseInt(data.split("|")[1])
  $(".priceShow1 span").html(price[index])
  if($("#dzgg li.jzOn").length>0 && $("#dzgg li.jzOn").attr("dataInfo") !== "0"){
    var data = $("#dzgg li.jzOn").attr("dataInfo")
    ggPrice = parseInt(data.split("|")[1])
  }
  $(".priceShow2 span").html(ggPrice)
  var allPrice = price[index] + ggPrice

  $(".jzPrice_p0 span").html(allPrice)
}
// 获取查询参数
function getSerch() {
  var qs = (location.search.length > 0 ? location.search.substring(1) : "");
  var items = qs.length ? qs.split("&") : [];
  var args = {}
  var item, name, value;
  for(var i = 0; i<items.length; i++){
    item = items[i].split("=");
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])
    if(item[0].length){
      args[name] = value
    }
  }
  return args
}