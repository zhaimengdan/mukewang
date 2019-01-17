$(function(){
	var result=listData.data.list
	console.log(result)
	$('#articlelist').html("")
	for(var i=0;i<result.length;i++){
		var htmlmodel=$('#itemHtml').html()
		htmlmodel=htmlmodel.replace('$articleLz$',result[i].laizi)
		htmlmodel=htmlmodel.replace('imgs/09.jpg',result[i].coverImg)
		htmlmodel=htmlmodel.replace('$articleFrom$',result[i].from)
		htmlmodel=htmlmodel.replace('$articleAwn$',result[i].awn)
		htmlmodel=htmlmodel.replace('$articleContent$',result[i].content)
		htmlmodel=htmlmodel.replace('$articleTip$',result[i].tip)
		htmlmodel=htmlmodel.replace('$articleAnswer$',result[i].answer)
		htmlmodel=htmlmodel.replace('$articleFa$',result[i].fa)
		htmlmodel=htmlmodel.replace('$articleTxt$',result[i].text)
		htmlmodel=htmlmodel.replace('$articleClass$',result[i].class)
		htmlmodel=htmlmodel.replace('$articleFl$',result[i].feilei)
		$('#articlelist').append(htmlmodel)
	}
})