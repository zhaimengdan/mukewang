$(function(){
	var global=global||{};	
	global.loadStart=0;   //控制加载次数，刚开始加载次数为0
	loadArticleList()
	function loadArticleList(){
		// 1.判断是不是第一次加载
		if(global.loadStart==0){
			$('#articlelist').html('')
		}
		//2.请求数据
		var result=listData['listData0'+global.loadStart]
		var list=result.data.list
		console.log(list)

		
		
		//3.判断数据到底存不存在
		if (!list||!list.length) {  //数据不存在或者请求的数据不等于list的长度
			$('#articlelist').html('您请求的数据不存在')
		} else{
			//如果数据存在
			for(var i=0;i<list.length;i++){
				var htmlmodel=$('#itemHtml').html()
				console.log()
				htmlmodel=htmlmodel.replace('$articleLz$',list[i].laizi)
				htmlmodel=htmlmodel.replace('imgs/09.jpg',list[i].coverImg)
				htmlmodel=htmlmodel.replace('$articleFrom$',list[i].from)
				htmlmodel=htmlmodel.replace('$articleAwn$',list[i].awn)
				htmlmodel=htmlmodel.replace('$articleContent$',list[i].content)
				htmlmodel=htmlmodel.replace('$articleTip$',list[i].tip)
				htmlmodel=htmlmodel.replace('$articleAnswer$',list[i].answer)
				htmlmodel=htmlmodel.replace('$articleFa$',list[i].fa)
				htmlmodel=htmlmodel.replace('$articleTxt$',list[i].text)
				htmlmodel=htmlmodel.replace('$articleClass$',list[i].class)
				htmlmodel=htmlmodel.replace('$articleFl$',list[i].feilei)
				$('#articlelist').append(htmlmodel)
			}
		}
		//4.数据加载
		global.loadStart++   //加载的次数++
		global.loadCount=Math.ceil(result.data.count/result.data.pageSize)  //总共要加载几页
		//pagestart  页数  pagesize  每页的条数  count 总条数
		
		//5.加载到最后一页，点击的那个图片消失
		if(global.loadStart>=global.loadCount){
			$('.more-block a').html("没有更多了")
		}
	
	}
	//6.点击事件，加载
		$('.more-block').click(function(){
		loadArticleList()
	})
})