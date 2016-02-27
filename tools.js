var newSqlIconBt = function(id,classlist,textid,fun,islargeicon){
	var $bt = getBt(id,classlist,undefined,fun);
	
	var iconcls = !!islargeicon?"GsqbticonL":"Gsqbticon";
	var $imgbx = getBt(id+'icon',[iconcls,"re","fs"],undefined,undefined);
	var $txbx = getBt(id+'txt',['Gsqbttx',"ab","fs"],id+'txt',undefined);
	$bt.append($txbx);
	$bt.append($imgbx);
	
	return $bt;
};
var iconplusiptBx = function(id,classlist,text,isipteditable){
	var $bt = getBt(id+'bx',classlist,undefined,undefined);
		var icon = getBt(id+'icon',['iconipticon','ab'],undefined,undefined);
		var textbx = isipteditable?getIpt(id,['iconipttxtipt','ab'],undefined,undefined):getBt(id,['iconipttxt','ab'],undefined,undefined);
		if(!!text)textbx.html(text);
		$bt.append(icon).append(textbx);
	return {bx:$bt,tx:textbx};
};
$.fn.selectRange = function(start, end) {
    if(!end) end = start; 
    return this.each(function() {
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(start, end);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
};

/**
 * ReplaceAll by Fagner Brack (MIT Licensed)
 * Replaces all occurrences of a substring in a string
 */
String.prototype.replaceAll = function( token, newToken, ignoreCase ) {
    var _token;
    var str = this + "";
    var i = -1;

    if ( typeof token === "string" ) {
        if ( ignoreCase ) {
            _token = token.toLowerCase();
            while( (
                i = str.toLowerCase().indexOf(
                    token, i >= 0 ? i + newToken.length : 0
                ) ) !== -1
            ) {
                str = str.substring( 0, i ) +
                    newToken +
                    str.substring( i + token.length );
            }
        } else {
            return this.split( token ).join( newToken );
        }
    }
	return str;
};

var overV = '001.00007.02';
var getBt = function(id,classlist,textid,fun){return getElmt(id,classlist,textid,fun,'div');};
var getIpt = function(id,classlist,textid,fun,type){var attr = undefined;if(!!type)attr = {'type':type}; return getElmt(id,classlist,textid,fun,'input',attr);};
var getImg = function(id,classlist,url,fun){var img = getElmt(id,classlist,undefined,fun,'img');img.attr('src',url);return img;};
var getTextArea = function(id,classlist,textid,fun){return getElmt(id,classlist,textid,fun,'textarea');};
var getiframe = function(id,classlist,textid,fun){return getElmt(id,classlist,textid,fun,'iframe');};

var getElmt = function(id,classlist,textid,fun,etype,attrlist){
	var str = {};
	if(!!id)str.id = id;
	if(!!classlist){
		if(typeof(classlist)=='string')str.class = classlist;
		if(typeof(classlist)=='object')str.class = classlist.join(" ");
	}
	if(!!attrlist)
		for(var i in attrlist){if(goipad(i))continue;str[i] = attrlist[i];}
	if(!!textid)str.html = language.getTxtById(textid,pwipt.lan);

	var $div = $("<"+etype+"/>",str);
	
	if(!!id){
		if(!!fun){
			$div.click(fun);
			$div.click(function(){logging.log(id);});
		}
	}
	else{
		if(!!fun)$div.click(fun);
	}
	
	return $div;	
};

var getMyPanelHelp = function(zindex,myheight,innerbxobj,otherobj){
	var outbx = getBt('',['myPnloutbx','ab'],'','');
	outbx.css({'z-index':zindex+10});
	var bxHhelper =  getBt('',['myPnlHhlp','re'],'','');
	var bxVhelper =  getBt('',['myPnlVhlp','mmflt'],'','');
	var height = innerbxobj.css('height');
	innerbxobj.css('height',myheight);
	bxVhelper.css('margin-bottom',parseInt(0-myheight)/2);
	bxHhelper.append(bxVhelper).append(innerbxobj);
	outbx.append(bxHhelper);
	if(!!otherobj)outbx.append(otherobj);
	
	bxHhelper.click(mystopeventpop);
	outbx.click(function(){fp.hide(zindex);});
	return outbx;
};

var setorderpage = {
	dishpagebx:'',
	orderlist:'',
	dishespnl:'',
	ctgynl:'',
	grpnl:'',
	odBack:'',
	odSend:'',
	searchedit:'',
	setOrderPage:function(){
		var offset = {left:0};
		
		var l = offset.left+415+5;
		var w = $(document).width()-l;
		//setorderpage.dishespnl.css({width:w,left:l});
		setorderpage.odish.css({width:w,left:l});
		
	},
	onselforder:function(){
		thisorder.isselforder = true;
		
		setorderpage.odBack.css({width:"47%"});
		setorderpage.odSend.css({left:'50%',width:"47%"});
	}
};

var getUndefinedStr = function(str,instd){
		if(str == undefined){
			if(instd == undefined)return '-';
			else return instd;
		}
		else return str;
};

var add0formatter = function(num)
{
	num = parseInt(num);
	if(num>=10)	return num;
	else return "0"+num;
};

var setObjEnterAction = function(iptobj,clickobj){
	var obj = iptobj;
	obj.each(
		function(){
			var obj = $(this);
			obj.die('keypress');
			obj.live('keypress',function(e){
					if(e.keyCode == 13){
						clickobj.click();
					}
				});
			});
};

function launchFullScreen(element) {  
	if(!("paras" in window)||!paras.isFullScreen)return;
	if(isOverV(overV))
		element = document.getElementById('vippage');//myhaha
	if(element.requestFullscreen) {  
		element.requestFullscreen();  
	}
	else if(element.mozRequestFullScreen) {  
    element.mozRequestFullScreen();  
  } else if(element.webkitRequestFullscreen) {  
    element.webkitRequestFullscreen();  
  } else if(element.msRequestFullscreen) {  
    element.msRequestFullscreen();  
  }
}


function isOverV(num){//myhaha
	if(!!companyProfile&&!!companyProfile.appinfo&&!!companyProfile.appinfo.version){
		var vnum = companyProfile.appinfo.version.split('.');
		vnum[0] = Number(vnum[0]);
		vnum[1] = Number(vnum[1]);
		vnum[2] = Number(vnum[2]);
		num = num.split('.');
		num[0] = Number(num[0]);
		num[1] = Number(num[1]);
		num[2] = Number(num[2]);
		if(num[0]<vnum[0]) return true;
		else if(num[0]>vnum[0])return false;
		else if(num[1]<vnum[1])return true;
		else if(num[1]>vnum[1])return false;
		else if(num[2]<=vnum[2])return true;
		else return false;
	}
	else
		return true;
}


Number.prototype.mytoFixed = function(num){
	var tempnum = this.toFixed(num+4);
	 return Number(Math.round(tempnum+'e'+num)+'e-'+num);
};


var isInPage = function(name)
{
	if(name == 'tables')
	{
		for(var i in table.areaPgNameList){if(goipad(i))continue;
			if($.mobile.activePage.is("#"+table.areaPgNameList[i]))
				return true;
		}
		return false;
	}
	else
		return $.mobile.activePage.is("#"+name);
};

var getthisobj = function(thisobj){//change into $(thisobj)
	try{return $("#"+thisobj.target.id);}
	catch(e){return thisobj;}
};

var mystopeventpop = function(e){
	var mye = e||event;
	if(!!mye)mye.stopPropagation();
	everysec.hometimer = 0;
};

var getStrById = function(id,str)
{
	for(var i in str){if(goipad(i))continue;
		if(str[i].id == id)
			return str[i];
	}
	return '';
};

var getPageObj = function(){
	var url = window.location.href;
	var pageid = url.split('#');
	if(pageid.length == 1||pageid[pageid.length-1].indexOf('/')>=0||pageid[pageid.length-1]=='/window.html')
		var pageobj = $("#loginPage");
	else
		var pageobj = $("#"+pageid[pageid.length-1]);
	
	if(pageobj.lenght>0)return pageobj;
	else return $("body");
};

var getGrandpa = function(obj,isAllpage)
{
	var pageobj = getPageObj();
	
	if(isAllpage)return pageobj;
	else return pageobj.children().first();
};


var isEmptyObject = function(obj){
    for(var name in obj){return false;}
    return true;
};
var funNon = function(obj){};

function loadjscssfile(filename, filetype){
	if (filetype=="js"){
		var fileref=document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", filename);
	}
	else if (filetype=="css"){
		var fileref=document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	if (typeof fileref!="undefined"){
		document.getElementsByTagName("head")[0].appendChild(fileref);
		var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none";
		return fileref.getAttribute(targetattr);
	}
}

function removejscssfile(filename, filetype){
	var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none";
	var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none";
	var allsuspects=document.getElementsByTagName(targetelement);
	for (var i=allsuspects.length; i>=0; i--){
	if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
	   allsuspects[i].parentNode.removeChild(allsuspects[i]);
	}
}

function createjscssfile(filename, filetype){
	if (filetype=="js"){
		var fileref=document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", filename);
	}
	else if (filetype=="css"){
		var fileref=document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	return fileref;
}

function replacejscssfile(oldfilename, newfilename, filetype){
	var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none";
	var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none";
	var allsuspects=document.getElementsByTagName(targetelement);
	for (var i=allsuspects.length; i>=0; i--){
		if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1){
   			var newelement=createjscssfile(newfilename, filetype);
   			allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i]);
		}
	}
}

var iskeydown={
	ctrl:false,
	addListener:function(key){
		if(key == 'ctrl'){
			$(document).keydown(function(event){if(event.ctrlKey)iskeydown.ctrl=true;});
			$(document).keyup(function(event){
						if(iskeydown.ctrl)
							iskeydown.ctrl=false;
					}
				);
		}
	}
};

var setFontSize = function(wordbox,bxobj){
	var maxHeight = bxobj.height();  
	var maxWidth = bxobj.width();  
	var minFontSize = 8;
	
	wordbox.css('font-size', minFontSize+'px');
	
	for (var i = minFontSize; i < 43; i++) {
	    if (wordbox.height() > maxHeight||wordbox.width() > maxWidth) {
	        wordbox.css('font-size', (i - 3) + 'px');
	        break;
	    } else {
	        wordbox.css('font-size', i + 'px');
	    }
	}
	wordbox.css({width:'100%'});
};

var myMaxLenth = function(obj,n){
	obj.attr('maxLength',n);
	var removeError = function(){$(this).removeClass("errorIpt");};
	var addError = function(){var o = $(this);if(o.val().length>o.attr('maxLength'))o.addClass("errorIpt");};
	obj.unbind('foucs',removeError).unbind('blur',addError);
	obj.foucs(removeError).blur(addError);
};

var actionDict = {
	 'Backspace':8,
	 'Tab':9,
	 'Enter':13,
	 'Left':37,
	 'Up':38,
	 'Right':39,
	 'Down':40,
};

// jQuery.fn.myinput = function(character) {  
  // try{jQuery(this).trigger({
  		 // type: 'keypress',
  		 // which: character.charCodeAt(0)});}
   // catch(e){};
// }; 
// 
// jQuery.fn.myAction = function(action) { 
	// var code = actionDict[action];
	// if(!!code)
	  	// try{jQuery(this).trigger({
	  		 // type: 'keypress',
	  		 // which: code});}
	   	// catch(e){};
// }; 

var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
        
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            Sys:Sys,
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase(),
};

var isThidIpad = undefined;
var isIpad = function(){
	if(isThidIpad == undefined)
		isThidIpad = browser.versions.iPad;
	return isThidIpad;
};

var isSurface = function(){
	return !("paras" in window)?false:paras.deviceType==1;
};

var isMobile = function(){
	return browser.versions.mobile||browser.versions.android||browser.versions.iPad||browser.versions.iPhone;
};

var isAndroid = function(){
	return browser.versions.android;
};

var isIOS = function(){
	return !!browser.versions.Sys.safari;
};
var dishstrtemp = undefined;

//only use for match ipad localstorge requirment
var getDishesMenu = function(){
	if(!!dishstrtemp)return dishstrtemp;
	if(isIOS()&&!isOverV(overV))
		return dishstrtemp = JSON.parse(localStorage.getItem(fjm.d('alldishes',0)));
	else
		return dishstrtemp = JSON.parse(fjm.e(localStorage.getItem(fjm.d('alldishes',0)),fjm.tsi));
};

var mydateParse = function(time){
	if(!isOverV(overV)){
		var arr = time.split(/[- :]/);
   		var thisdate = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
	}
	else
		var thisdate = Date.parse(time);
	return thisdate;
};

var dataTransHtml = function(str){
	var t = str.replace(/&/g,'&amp;');
	t = t.replace(/>/g,'&gt;');
	t = t.replace(/</g,'&lt;');
	return t;
};

var flashBt = function(objs){
	objs.each(function(){
		var obj = $(this);
		//var oldcolor = obj.css('background');
		//var newcolor = "#DD3D2F";
		var speed = 300;
		obj.addClass('rdbt');
		window.setTimeout(
			function(){
				obj.removeClass('rdbt');
				window.setTimeout(
					function(){
						obj.addClass('rdbt');
						window.setTimeout(
							function(){
								obj.removeClass('rdbt');
							},
							speed
						);
					},
					speed
				);
			},
			speed
		);
	});
};

var setDishesMenu = function(obj){
	lb = fjm.d('alldishes',0);
	if(isIOS()&&!isOverV(overV))
		var c = JSON.stringify(obj);
	else
		var c = fjm.d(JSON.stringify(obj),fjm.tsi);
	localStorage.setItem(lb,c);
};

var iptRemoveOnchangeFun = function(obj){
	obj.unbind('change');
	obj.unbind('keyup');
};

var goipad=function(i){
	return i == 'lastIndexOf';
};

jQuery.fn.myChange = function(fun)
{
	var obj = jQuery(this);
	obj.data('val',  obj.val() );
	obj.change(function() {
		fun(obj.val());
	});
	obj.keyup(function() {
		var val = obj.val();
		var oldval = obj.data('val');
        if( val !=  oldval){
			obj.data('val',  val );
			$(this).change();
        	}
	});
};

jQuery.fn.addmask = function(mask){//mask format:'(XXX)XXX-XXXX';/{2:'-',5:'(',6')'}
	if(isString(mask)){
		var mt = mask.split("X");
		var maskstr = {};
		for(var i in mt){if(goipad(i))continue;if(mt[i]!=='')maskstr[i]=mt[i];}
	}
	else{
		var maskstr = mask;
	}
    var obj = jQuery(this);
    var maskerlist = {};
    for(var i in maskstr){if(goipad(i))continue;maskerlist[maskstr[i]]=1;}
    obj.myChange(function(){
        var val = obj.val();
        for(var i in maskerlist){if(goipad(i))continue;val = val.replaceAll(i,'');}
        obj.attr("myvalue",val);
        var newval = '',last = 0,l = val.length,masklength=0;
        for(var i in maskstr){if(goipad(i))continue;
            if(i>=l)break;
            newval += val.substring(last,i)+maskstr[i];
            masklength+=maskstr[last=i].length;
        }
        if(newval.length-masklength<l)newval += val.substr(last);
        // var n = obj.getCursorPosition();
		obj.val(newval);//.selectRange(n+masklength);
    });
};

function getCursortPosition (ctrl) {
	var CaretPos = ctrl.selectionStart;
	return (CaretPos);
}

var logging = {
	running : false,
	dict:{
	//'logging id':{lvl:'level:info bug ...',msg:'Sort message',exp:'Longer Message only for display'},
	'ds':			{lvl:'INFO',msg:'SavePw',exp:'Save Pw, Login page'},
	'splitod':		{lvl:'INFO',msg:'SpltOd',exp:'Click Split Order Button'},
	'editod':		{lvl:'INFO',msg:'EditOd',exp:'Click Edit Order Button'},
	'unsplitOd':	{lvl:'INFO',msg:'SpltUd',exp:'Click Split page Undo Button'},
	'pplcgclbt':	{lvl:'INFO',msg:'CnclPy',exp:'Click cancel button on settle page'},
	'pplcgppbt':	{lvl:'INFO',msg:'PyandP',exp:'Click pay and print button on settle page'},
	'pplcgpybt':	{lvl:'INFO',msg:'ClcPay',exp:'Click pay button on settle page'},


	},
	qid:0,
	list:[],
	log:function(id,m){
		if(!("paras" in window)||!paras.islogging)return;
		var ids = id.split("_");
		id = ids.splice(0,1);
		if(ids.length>0){
			if(!m)m = ids.join("_");
			else m+=ids.join("_");
		}
		var msgobj = logging.dict[id];
		var a = {
			msg:(logging.qid++)+
			'|'+new Date().getTime()+//read clock display window  //everymin.mt.html()
			'|'+(!!msgobj?msgobj.msg:id)+
			'|'+(!!m?m:''),
		};
		if(!!msgobj)if(!!msgobj.lvl)  a.level = msgobj.lvl;
		if(!!pwipt.thisuser.userid) a.msg += "|"+pwipt.thisuser.userid;
		logging.list.push(a);
		logging.gosave();
	},
	timeOutId:undefined,
	gosave:function(){
		window.clearTimeout(logging.timeOutId);
		logging.timeOutId = window.setTimeout(logging.gosaveHelper,5000);
	},
	gosaveHelper:function(){
		var n = logging.list.length;
		var l = jQuery.extend(true,[],logging.list.splice(0,n));
		if(l.length == 0)return;
		ws.send(JSON.stringify({"logs":l}));
	},
};

var myInclude = function(str){
	var scriptNode = document.createElement('script');
	scriptNode.src = str;
	document.head.appendChild(scriptNode);
};

var MS = {
	O:false,
	"order":function(){if(MS.O)return thisorder;},
	"paras":function(){if(MS.O)return paras;},
	"dishes":function(){if(MS.O)return dishes;},
};

var testipad = function(str){
	if(!isIpad())
		return;
	else
		alert(str);
};
var apiQueryId = 0;
var apiQueryIdLocker = false;
var checkUpArray = {
	
};
var getQueryId = function(){
	if(apiQueryIdLocker)return undefined;
	else{
		apiQueryIdLocker = true;
		++apiQueryId;
		apiQueryIdLocker = false;
		return apiQueryId; 
	}
};

var setQueryArray = function(id,gid,name){
	var myarray = checkUpArray[gid];
	if(id!=undefined){
		if(!myarray||!myarray[id])
			console.log('untracked thread: '+name);
		else{
			delete myarray[id];
			if(isEmptyObject(myarray))return true;
		}
	}
	return false;
};

var getCont = function(e,a,tag){
	if(!!tag)
	{var c=0;for(var i in a){if(goipad(i))continue;if(a[i][tag]==e)c++;}return c;}
	else
	{var c=0;for(var i in a){if(goipad(i))continue;if(a[i]==e)c++;}return c;}
};

var getRomaNum = function(num){
	if(isNaN(num)) return num;
	var a=[["","I","II","III","IV","V","VI","VII","VIII","IX"],
		["","X","XX","XXX","XL","L","LX","LXX","LXXX","XCC"],
		["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];
	var roman = "";
	var t=0;
	for(var m=0, i=1000; m<3; m++,i/=10){
		t=Math.floor((num%i)/(i/10));
		roman += a[2-m][t];
	}
	return roman;
};

function padLeft(str,lenght){
	if(str.length >= lenght)
		return str;
	else
		return padLeft("0" +str,lenght);
}

function padRight(str,lenght){
	if(str.length >= lenght)
		return str;
	else
		return padRight(str+"0",lenght);
}

var everysec = {
	hometimer: 0,
	checkLogoff: function(){
		everysec.hometimer++;
		if(("paras" in window)&&everysec.hometimer >= paras.autologoff*60){
			thisorder.isNdSave=false;
			if(!$.mobile.activePage.is('#loginPage'))
				checkPwB4jump("#loginPage","pop",true);
			pwipt.unsavepw();
			everysec.hometimer = 0;
		}
	},
	go:function()
	{
		if(("paras" in window)&&paras.autologoff > 0){
			everysec.checkLogoff();
		}
	}
};


(function ($) {
  'use strict';

  var caretClass   = 'textarea-helper-caret'
    , dataKey      = 'textarea-helper'

    // Styles that could influence size of the mirrored element.
    , mirrorStyles = [ 
                       // Box Styles.
                       'box-sizing', 'height', 'width', 'padding-bottom'
                     , 'padding-left', 'padding-right', 'padding-top'
  
                       // Font stuff.
                     , 'font-family', 'font-size', 'font-style' 
                     , 'font-variant', 'font-weight'
  
                       // Spacing etc.
                     , 'word-spacing', 'letter-spacing', 'line-height'
                     , 'text-decoration', 'text-indent', 'text-transform' 
                     
                      // The direction.
                     , 'direction'
                     ];

  var TextareaHelper = function (elem) {
    if (elem.nodeName.toLowerCase() !== 'textarea') return;
    this.$text = $(elem);
    this.$mirror = $('<div/>').css({ 'position'    : 'absolute'
                                   , 'overflow'    : 'auto'
                                   , 'white-space' : 'pre-wrap'
                                   , 'word-wrap'   : 'break-word'
                                   , 'top'         : 0
                                   , 'left'        : -9999
                                   }).insertAfter(this.$text);
  };

  (function () {
    this.update = function () {

      // Copy styles.
      var styles = {};
      for(var i = 0, style; style = mirrorStyles[i]; i++) {
        styles[style] = this.$text.css(style);
      }
      this.$mirror.css(styles).empty();
      
      // Update content and insert caret.
      var caretPos = this.getOriginalCaretPos()
        , str      = this.$text.val()
        , pre      = document.createTextNode(str.substring(0, caretPos))
        , post     = document.createTextNode(str.substring(caretPos))
        , $car     = $('<span/>').addClass(caretClass).css('position', 'absolute').html('&nbsp;');
      this.$mirror.append(pre, $car, post)
                  .scrollTop(this.$text.scrollTop());
    };

    this.destroy = function () {
      this.$mirror.remove();
      this.$text.removeData(dataKey);
      return null;
    };

    this.caretPos = function () {
      this.update();
      var $caret = this.$mirror.find('.' + caretClass)
        , pos    = $caret.position();
      if (this.$text.css('direction') === 'rtl') {
        pos.right = this.$mirror.innerWidth() - pos.left - $caret.width();
        pos.left = 'auto';
      }

      return pos;
    };

    this.height = function () {
      this.update();
      this.$mirror.css('height', '');
      return this.$mirror.height();
    };

    // XBrowser caret position
    // Adapted from http://stackoverflow.com/questions/263743/how-to-get-caret-position-in-textarea
    this.getOriginalCaretPos = function () {
      var text = this.$text[0];
      if (text.selectionStart) {
        return text.selectionStart;
      } else if (document.selection) {
        text.focus();
        var r = document.selection.createRange();
        if (r == null) {
          return 0;
        }
        var re = text.createTextRange()
          , rc = re.duplicate();
        re.moveToBookmark(r.getBookmark());
        rc.setEndPoint('EndToStart', re);
        return rc.text.length;
      } 
      return 0;
    };

  }).call(TextareaHelper.prototype);
  
  $.fn.textareaHelper = function (method) {
    this.each(function () {
      var $this    = $(this)
        , instance = $this.data(dataKey);
      if (!instance) {
        instance = new TextareaHelper(this);
        $this.data(dataKey, instance);
      }
    });
    if (method) {
      var instance = this.first().data(dataKey);
      return instance[method]();
    } else {
      return this;
    }
  };

	$.fn.selectRange = function(start, end) {
	    if(!end) end = start; 
	    return this.each(function() {
	        if (this.setSelectionRange) {
	            this.focus();
	            this.setSelectionRange(start, end);
	        } else if (this.createTextRange) {
	            var range = this.createTextRange();
	            range.collapse(true);
	            range.moveEnd('character', end);
	            range.moveStart('character', start);
	            range.select();
	        }
	    });
	};
	$.fn.getCursorPosition = function() {
        var el = $(this).get(0);
        var pos = 0;
        if('selectionStart' in el) {
            try{pos = el.selectionStart;}
            catch(e){pos = 0}
        } else if('selection' in document) {
            el.focus();
            var Sel = document.selection.createRange();
            var SelLength = document.selection.createRange().text.length;
            Sel.moveStart('character', -el.value.length);
            pos = Sel.text.length - SelLength;
        }
        return pos;
    };
    $.fn.getSelectRange = function(){
        var el = $(this).get(0);
        var s = 0,e = 0;
        if('selectionStart' in el) {
            try{
            	s = el.selectionStart;
				e = el.selectionEnd;
            }
            catch(e){s=0;e=0}
        }
        return {start:s,end:e};
    };
})(jQuery);

//if(browser.versions.iPad){alert("ipad_"+'tools');};
if(jQuery) (function(){
	$.extend($.fn, {
		longPress: function(handler,clickfun){
			var timeout = undefined;
			var isLongPress = false;
			$(this).each( function() {
				$(this).touchstart( function(e) {
					var id = $(this).attr('id');
					timeout = window.setTimeout(
						function(){
							isLongPress = true;
							handler.call($(this),e,id);
						},1000
					);
					return true;
				});
				$(this).touchend( function(e) {
					window.clearTimeout(timeout);
					if(!isLongPress)
						clickfun.call($(this),e);
					isLongPress = false;
					return true;
				});
			});
			return $(this);
		},
		rightClick: function(handler) {
			$(this).each( function() {
				$(this).mousedown( function(e) {
					var evt = e;
					$(this).mouseup( function() {
						$(this).unbind('mouseup');
						if( evt.button == 2 ) {
							handler.call( $(this), evt );
							return false;
						} else {
							return true;
						}
					});
				});
				$(this)[0].oncontextmenu = function() {
					return false;
				};
			});
			return $(this);
		},	
		rightMouseDown: function(handler) {
			$(this).each( function() {
				$(this).mousedown( function(e) {
					if( e.button == 2 ) {
						handler.call( $(this), e );
						return false;
					} else {
						return true;
					}
				});
				$(this)[0].oncontextmenu = function() {
					return false;
				};
			});
			return $(this);
		},
		rightMouseUp: function(handler) {
			$(this).each( function() {
				$(this).mouseup( function(e) {
					if( e.button == 2 ) {
						handler.call( $(this), e );
						return false;
					} else {
						return true;
					}
				});
				$(this)[0].oncontextmenu = function() {
					return false;
				};
			});
			return $(this);
		},
		noContext: function() {
			$(this).each( function() {
				$(this)[0].oncontextmenu = function() {
					return false;
				};
			});
			return $(this);
		}
	});
})(jQuery);	