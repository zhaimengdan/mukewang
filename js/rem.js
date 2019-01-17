(function(doc,win){
	var docEl=document.documentElement
	//设备重置  orientationchange:屏幕旋转   ||  resize
	//DOMContentLoaded   dom是否加载完成
	resizeEvt='orientationchange' in window? 'orientationchange':'resize',  
	relalc=function(){
		//获取屏幕宽度
		var clrentWidth=docEl.clientWidth
		if(!clrentWidth) return
		docEl.style.fontSize=clrentWidth/7.5+'px'
	}
	
	if(!addEventListener) return
	win.addEventListener(resizeEvt,relalc,false)
	doc.addEventListener('DOMContentLoaded',relalc,false)			
})(document,window)

var w=window.screen.width;
var target=750;
var scale=w/750;
var meta=document.createElement('meta');
meta.name='viewport';
meta.content='initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale;
document.head.appendChild(meta)