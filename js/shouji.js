$(function(){
	var result=listData.data.list
	console.log(result)
	$('#articlelist').html("")
	var val=$('.nav a span').eq(0).html()
	// console.log(val)
	for(var i=0;i<result.length;i++){
		var htmlmodel=$('#itemHtml').html()
		htmlmodel=htmlmodel.replace('$articleTitle$',result[i].title)
		htmlmodel=htmlmodel.replace('img/a1.jpg',result[i].coverImg)
		htmlmodel=htmlmodel.replace('$articleOrigin$',result[i].origin)
		htmlmodel=htmlmodel.replace('$describe$',result[i].describe)
		htmlmodel=htmlmodel.replace('$number$',result[i].number)
		htmlmodel=htmlmodel.replace('$number1$',result[i].number1)
		htmlmodel=htmlmodel.replace('$articleFl$',result[i].articleFl)
		$('#articlelist').append(htmlmodel)
		$('#articlelist li').filter("[articleFl="+val+"]").show()
	}
	$('#articlelist li').filter("[number="+1+"]").find('.original').hide()
	$('#articlelist li').filter("[number1="+2+"]").find('img').hide()
	$('#articlelist .original').eq(2).hide()
	$('#articlelist img').eq(2).hide()
})
$(function(){
	$('.nav a').click(function(){
		$(this).find('.red-line').show()
		$(this).siblings().find('.red-line').hide()
		var val=$(this).find('span').html()
		// console.log(val)
		var index=$('#articlelist li')
		index.hide()
		for(var i=0;i<index.length;i++){
			index.eq(i).filter("[articleFl="+val+"]").show()
			index.filter("[number="+1+"]").find('.original').hide()
			$('#articlelist li').filter("[number1="+2+"]").find('img').hide()
		}
		
	})
})


$(function(){
	var swiper = new Swiper('.banner-container', {
		
		loop : true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay:{
				delay: 2000,
				disableOnInteraction:false,
		},
	});
	
})