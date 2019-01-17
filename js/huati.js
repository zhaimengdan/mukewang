$(function(){
	var result=listData.data.list
	console.log(result)
	$('#articlelist').html("")
	for(var i=0;i<result.length;i++){
		var htmlmodel=$('#itemHtml').html()
		htmlmodel=htmlmodel.replace('$rticleTitle$',result[i].title)
		htmlmodel=htmlmodel.replace('imgs/a1.jpg',result[i].coverimage)
		htmlmodel=htmlmodel.replace('$articleContent$',result[i].word)
		htmlmodel=htmlmodel.replace('$articleNum$',result[i].look)
		htmlmodel=htmlmodel.replace('$articleTxt$',result[i].see)
		$('#articlelist').append(htmlmodel)
	}
	
	
})                                            