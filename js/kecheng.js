$(function() {
	function getUrlParams(name) {
		var reg = new RegExp("(^|&)" + name + "=([^|&]*)(&|$)");
		var value = window.location.search.substr(1).match(reg);
		//window.location.search.substr(1)获取的是url？后面的字符串，这里的问号是不需要的，所以用substr(1)把它剔除
		//这里match方法可以把符合正则的字符找出来，是以数组形式给出
		if(value != null) {
			return value[2]    //写getParams()这个函数就是为了找xiaoniaoNews1
		} else {
			return ""
		}
	}
	var art = getUrlParams("articleId")
	var result = listData["articleId" + art]
	var list = result.data.list
	var list1 = result.data1.list
	var list2 = result.data2.list
console.log(list)
	function addList(arr,where,how) {
		for(var i = 0; i < arr.length; i++) {
			var modelHtml = where.html()
			modelHtml = modelHtml.replace("$title$", arr[i].title);
			modelHtml = modelHtml.replace("$describe$", arr[i].describe);
			modelHtml = modelHtml.replace("$creatByFullName$", arr[i].creatByFullName);
			modelHtml = modelHtml.replace("img/img1/01.jpg", arr[i].coverImg);
			how.append(modelHtml)
		}
	}
	//基础
	addList(list,$(".moban1"),$(".jichu"))
	//进阶
	addList(list1,$(".moban1"),$(".jinjie"))
	//底下的
	addList(list2,$(".moban2"),$(".dixiacontent"))
	console.log(art)
	if(art==1){
		$(".div1 .title").show()
		$(".div1 .jichu").show()
	}else{
		$(".div1 .title").hide()
		$(".div1 .jichu").hide()
	}
	
	$('.asideLeft li').eq(art).addClass('active').siblings().removeClass('active')
	
})

