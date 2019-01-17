$(function(){
	// console.log(listData)
	var result=listData.data.list
	console.log(result)
	$('#articlelist').html("")
	for(var i=0;i<result.length;i++){
		var htmlmodel=$('#itemHtml').html()
		htmlmodel=htmlmodel.replace('$articleTitle$',result[i].title)
		htmlmodel=htmlmodel.replace('img/01.jpg',result[i].coverImg)
		htmlmodel=htmlmodel.replace('$describe$',result[i].describe)
		htmlmodel=htmlmodel.replace('$articlePrice$',result[i].price)
		$('#articlelist').append(htmlmodel)
		
	}
})
