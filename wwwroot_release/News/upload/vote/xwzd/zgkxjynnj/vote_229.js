function clickInput(id){	document.getElementById(id+'_Button').checked = true;}function checkVote(id){	var f = document.getElementById('voteForm_'+id);	var dts = f.getElementsByTagName('dt');	var arrs = [];	for(var i=0;i<dts.length;i++){		var subjectID = dts[i].getAttribute('id');		arrs.push(subjectID);	}		var str='';	var position = '';	var err = false;	for(var i=0;i<arrs.length;i++){		var sid = arrs[i];		var eles = document.getElementsByName('Subject_'+sid);		var flag = false;		if (eles!=null && eles.length==1) {			if (eles[0].getAttribute('type')=='radio' || eles[0].getAttribute('type')=='checkbox') {				if (eles[0].checked) {					flag = true;				}			} else if (eles[0].value && eles[0].value.trim()) {				continue;			}		} else {			for(var j=0;j<eles.length;j++){				if(eles[j].checked){					flag = true;					break;				}			}		}				if(!flag){			err = true;			if(document.getElementById(arrs[i])){				if(document.getElementById(arrs[i]).innerText){					str+=document.getElementById(arrs[i]).innerText;				}else{					str+=document.getElementById(arrs[i]).textContent;				}				if(!position){					position = sid;				}			}		}	}	if(err){		var url = window.location+'';		alert('您还有以下调查没有填写：'+str);		window.location = url.substring(0,url.lastIndexOf('#'))+'#'+position;		return false;	}	return true;}var style_1379083689755 =document.createElement('style');style_1379083689755.setAttribute('type','text/css');document.getElementsByTagName('head')[0].appendChild(style_1379083689755); if(style_1379083689755.styleSheet){style_1379083689755.styleSheet.cssText ='.votecontainer{	margin:0 auto;	padding:0 10px;}.votecontainer h2{font-size:12px;font-weight:bold;padding:0;margin:0;padding-left:5px;line-height:30px;}.votecontainer dl{	clear:both;	line-height:20px;	margin:0;	overflow:hidden;	padding:10px 0 0;	_height:1%;	_overflow:visible;}.votecontainer dl dt{	clear:both;	font-size:12px;	font-weight:bold;	margin:0;	padding:10px 0 0;}.votecontainer dl dd{	display:inline;	float:left;	margin:0;	padding:0;	padding-left:10px;}';}else {style_1379083689755.innerHTML ='.votecontainer{	margin:0 auto;	padding:0 10px;}.votecontainer h2{font-size:12px;font-weight:bold;padding:0;margin:0;padding-left:5px;line-height:30px;}.votecontainer dl{	clear:both;	line-height:20px;	margin:0;	overflow:hidden;	padding:10px 0 0;	_height:1%;	_overflow:visible;}.votecontainer dl dt{	clear:both;	font-size:12px;	font-weight:bold;	margin:0;	padding:10px 0 0;}.votecontainer dl dd{	display:inline;	float:left;	margin:0;	padding:0;	padding-left:10px;}';}(function(){var vote=document.getElementById('votejs_229');var escapeForm=/MSIE/i.test(window.navigator.userAgent)&&(function (vote){var node=vote,tagName;do{node=node.parentNode;tagName=node.tagName.toLowerCase();if(tagName==='form'){return true;}}while(tagName!=='body');return false;}(vote));var html="<div id='vote_229' class='votecontainer' style='text-align:left' >"+(!escapeForm?"<form id='voteForm_229' name='voteForm_229' action='http://news.2x.zving.com/zcms/vote/result' method='post' target='_blank'>":"<div id='voteForm_229' name='voteForm_229'>")+"<input type='hidden' id='vote_VoteID' name='vote_VoteID' value='229'><input type='hidden' id='vote_SiteID' name='vote_SiteID' value='14'><input type='hidden' id='vote_VoteFlag' name='vote_VoteFlag' value='Y'><dl> <dt id='90'>1.莫言获奖之前你看过他几部作品</dt><dd><label><input name='Subject_90' type='radio' value='317' />从来没听说过这个名字</label></dd><dd><label><input name='Subject_90' type='radio' value='318' />听说过这个名字但从没看过他的作品</label></dd><dd><label><input name='Subject_90' type='radio' value='319' />翻过几页但是没有系统的看过</label></dd><dd><label><input name='Subject_90' type='radio' value='320' />基本上完整的看过1-2部</label></dd><dd><label><input name='Subject_90' type='radio' value='321' />基本上完整的看过3-5部</label></dd><dd><label><input name='Subject_90' type='radio' value='322' />看过5部以上莫言的作品</label></dd> <dt id='92'>2.你看过哪些莫言的作品</dt><dd><label><input name='Subject_92' type='checkbox' value='357' />檀香刑</label></dd><dd><label><input name='Subject_92' type='checkbox' value='358' />生死疲劳</label></dd><dd><label><input name='Subject_92' type='checkbox' value='359' />丰乳肥臀</label></dd><dd><label><input name='Subject_92' type='checkbox' value='360' />红高粱家族</label></dd><dd><label><input name='Subject_92' type='checkbox' value='361' />透明的红萝卜</label></dd><dd><label><input name='Subject_92' type='checkbox' value='362' />藏宝图</label></dd><dd><label><input name='Subject_92' type='checkbox' value='363' />四十一炮</label></dd><dd><label><input name='Subject_92' type='checkbox' value='364' />月光斩</label></dd><dd><label><input name='Subject_92' type='checkbox' value='365' />老枪宝刀</label></dd><dd><label><input name='Subject_92' type='checkbox' value='366' />司令的女人</label></dd><dd><label><input name='Subject_92' type='checkbox' value='367' />白狗秋千架</label></dd><dd><label><input name='Subject_92' type='checkbox' value='368' />酒国</label></dd><dd><label><input name='Subject_92' type='checkbox' value='369' />食草家族</label></dd><dd><label><input name='Subject_92' type='checkbox' value='370' />白棉花</label></dd><dd><label><input name='Subject_92' type='checkbox' value='371' />红树林</label></dd><dd><label><input name='Subject_92' type='checkbox' value='372' />其它</label></dd><dl><dd><input type='submit' value='提交' onclick='return checkVote(229);'>&nbsp;&nbsp<input type='button' value='查看' onclick='javascript:window.open(\"http://news.2x.zving.com/zcms/vote/result?vote_View=true&vote_VoteID=229&vote_SiteID=14\")'></dd></dl>"+(!escapeForm?'</form>':'</div>')+"</div>";vote.innerHTML=html;}())