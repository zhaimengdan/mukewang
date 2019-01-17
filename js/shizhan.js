$(function(){
	var result=listData.data.list
	console.log(result)
	$('#articlelist').html("")
	for(var i=0;i<result.length;i++){
		var htmlmodel=$('#itemHtml').html()
		htmlmodel=htmlmodel.replace('$articleTitle$',result[i].title)
		htmlmodel=htmlmodel.replace('image/01.jpg',result[i].coverImg)
		htmlmodel=htmlmodel.replace('$describe$',result[i].describe)
		htmlmodel=htmlmodel.replace('$articleStudy$',result[i].study)
		htmlmodel=htmlmodel.replace('$articlePrice$',result[i].price)
		htmlmodel=htmlmodel.replace('$articleOrigin$',result[i].origin)
		htmlmodel=htmlmodel.replace('$articleEnd$',result[i].time)
		
		
		htmlmodel=htmlmodel.replace('$articleFl$',result[i].articleFl)
		htmlmodel=htmlmodel.replace('$articleSf$',result[i].articleSf)
		htmlmodel=htmlmodel.replace('$articleYun$',result[i].articleYun)
		htmlmodel=htmlmodel.replace('$articleIdd$',result[i].articleIdd)
		$('#articlelist').append(htmlmodel)
		
	}
	$('#articlelist li').eq(3).find('a').html("<img src='image/aaa.jpg' >")
	$('#articlelist li').eq(7).find('a').html("<img src='image/bbb.jpg' >")
	$('#articlelist li').eq(0).find('.origin-price').show()
	$('#articlelist li').eq(1).find('.origin-price').show()
	$('#articlelist li').eq(2).find('.origin-price').show()
})
$(function(){
	$('.course-class li').click(function(){
		$(this).addClass('active').siblings('li').removeClass('active')
		var li=$('#articlelist li')
		li.hide()
		var val=$(this).find('a').html()
		var num=$(this).attr("data-name")
		// var num1=li.attr("articleIdd")
		console.log(num)
		for(var i=0;i<li.length;i++){
			if(val==="全部"){
				li.show()
			}else{
				li.eq(i).filter("[articleFl="+val+"]").show()
				li.eq(i).filter("[articleSf="+val+"]").show()
				li.eq(i).filter("[articleYun="+val+"]").show()
				// console.log(val)
			}
			li.eq(i).filter("[articleIdd="+num+"]").show()
		}
		
	})
})