var mykb = {
	v:'1.0',
	isMobile:false,
	lan:'en',
	zindex:2600,
	bxid:"glbkbbx",
	kbid:'glbkbkb',
	targetobjid:undefined,
	targetobj:undefined,
	handleid:undefined,
	oldoffset:undefined,
	isshow:true,
	type:'',
	isFullKeybdUppercase:false,
	priceKbKey:{
		10:10,
		20:20,
		50:50,
		100:100
	},
	backspace:function(){
		var obj = mykb.targetobj;
		var old = obj.val();
		var n = obj.getCursorPosition();
		obj.val(mykb.removeOneValue(old,n)).selectRange(n-1);
		obj.keyup();
		//alert('backspace');
	},
	capsLock:function(t){
		mykb.isFullKeybdUppercase = !mykb.isFullKeybdUppercase;
		mykb.addFullKb(mykb.targetobjid,mykb.kbid,t);
		if(mykb.isFullKeybdUppercase){$("#myKs_CAPSLOCK").addClass("mykbOnClc");}
	},
	mykeyAbc:[
		{keys:[ {v:'q',},{v:'w',},{v:'e',},{v:'r',},{v:'t',},{v:'y',},{v:'u',},{v:'i',},{v:'o',},{v:'p',}, ]},
		{keys:[ {v:'a',},{v:'s',},{v:'d',},{v:'f',},{v:'g',},{v:'h',},{v:'j',},{v:'k',},{v:'l',}]},
		{keys:[ {v:'z',},{v:'x',},{v:'c',},{v:'v',},{v:'b',},{v:'n',},{v:'m',}]},
		],
	mykey123_1:[
		{keys:[ {v:'1'},{v:'2'},{v:'3'}, ]},	
		{keys:[ {v:'4'},{v:'5'},{v:'6'}, ]},	
		{keys:[ {v:'7'},{v:'8'},{v:'9'}, ]},	
		{keys:[ {v:'*'},{v:'0'},{v:'#'}, ]},	
		],
	mykey123_2:[
		{keys:[ {v:'1'},{v:'2'},{v:'3'}, ]},	
		{keys:[ {v:'4'},{v:'5'},{v:'6'}, ]},	
		{keys:[ {v:'7'},{v:'8'},{v:'9'}, ]},	
		{keys:[ {v:'00'},{v:'0'},{v:'.'}, ]},	
		],
	mykey123_3:[
		{keys:[ {v:'1'},{v:'2'},{v:'3'}, ]},	
		{keys:[ {v:'4'},{v:'5'},{v:'6'}, ]},	
		{keys:[ {v:'7'},{v:'8'},{v:'9'}, ]},	
		{keys:[ {v:'-'},{v:'0'},{v:'<',c:1,f:function(){mykb.backspace();}},]},	
		],
	mykey123_search:[
		{keys:[ {v:'1'},{v:'2'},{v:'3'}, ]},	
		{keys:[ {v:'4'},{v:'5'},{v:'6'}, ]},	
		{keys:[ {v:'7'},{v:'8'},{v:'9'}, ]},	
		{keys:[ {v:'/'},{v:'0'},{v:'+',c:1,f:function(){mykb.backspace();}},]},	
		],
	mykeyexten:{
		addr:[
		{keys:[ {v:'#',}, ]},
		{keys:[ {v:'-',},{v:'Backspace',l:2,c:1,f:function(){mykb.backspace();}},]},
		{keys:[ {v:'Apt. '},{v:'St.'},{v:'Rd.'},{v:'Ave.'},{v:'Blvd.'},{v:'&nbsp;',l:3,c:4},{v:'CapsLock',l:2,c:3,f:function(){mykb.capsLock('addr');}},]}
		],
		apt:[
		{keys:[ {v:'#',}, ]},
		{keys:[ {v:'-',},{v:'Backspace',l:2,c:1,f:function(){mykb.backspace();}},]},
		{keys:[ {v:'(&nbsp;'},{v:'&nbsp;)'},{v:'.&nbsp;'},{v:'&nbsp;['},{v:']&nbsp;'},{v:'&nbsp;',l:3,c:4},{v:'CapsLock',l:2,c:3,f:function(){mykb.capsLock('');}},]}
		],
		dishnote:[
		{keys:[ {v:'&',}, ]},
		{keys:[ {v:'-',},{v:'Backspace',l:2,c:1,f:function(){mykb.backspace();}},]},
		{keys:[ {v:'No '},{v:'Less '},{v:'Add '},{v:'&comma;'},{v:'&colon;'},{v:'&nbsp;',l:3,c:4},{v:'CapsLock',l:2,c:3,f:function(){mykb.capsLock('dishnote');}},]}
		],
		dishvoid:[
		{keys:[ {v:'.',}, ]},
		{keys:[ {v:',',},{v:'Backspace',l:2,c:1,f:function(){mykb.backspace();}},]},
		{keys:[ {v:'CUST '},{v:'Wrong '},{v:'Too '},{v:'Void '},{v:'By '},{v:'&nbsp;',l:3,c:4},{v:'CapsLock',l:2,c:3,f:function(){mykb.capsLock('dishvoid');}},]}
		],
		dishSearch:[
		{keys:[ {v:'.',}, ]},
		{keys:[ {v:',',},{v:'Backspace',l:2,c:1,f:function(){mykb.backspace();}},]},
		{keys:[ {v:'Special'},{v:'Chicken'},{v:'Beef'},{v:'Pork'},{v:'Vege'},{v:'&nbsp;',l:3,c:4},{v:'CapsLock',l:2,c:3,f:function(){mykb.capsLock('dishSearch');}},]}
		],
		phone:[
		{keys:[ {v:'#',}, ]},
		{keys:[ {v:'*',},{v:'Backspace',l:2,c:1,f:function(){mykb.backspace();}},]},
		{keys:[ {v:'Home '},{v:'Cell '},{v:'Office '},{v:'Msg '},{v:'Fix '},{v:'&nbsp;',l:3,c:4},{v:'CapsLock',l:2,c:3,f:function(){mykb.capsLock('phone');}},]}
		],
		name:[
		{keys:[ {v:',',}, ]},
		{keys:[ {v:'.',},{v:'Backspace',l:2,c:1,f:function(){mykb.backspace();}},]},
		{keys:[ {v:'Mr.'},{v:'Ms.'},{v:'Mrs.'},{v:'Miss.'},{v:'Boss '},{v:'&nbsp;',l:3,c:4},{v:'CapsLock',l:2,c:3,f:function(){mykb.capsLock('name');}},]}
		],
		},
	add:function(obj,isNotReplaceSelect){
		if(!mykb.isMobile)
			obj.each(function(){mykb.attachone($(this));});
		if(!isNotReplaceSelect)
			obj.each(function(){mykb.setSelect($(this));});
	},
	attachone:function(obj){
		if(!(obj.is("input")||obj.is("textarea")))return;
		obj.focus(mykb.showkb);
		obj.select(function(){mykb.getSelectInfo($(this));});
	},
	getSelectInfo : function(obj){
		var r = obj.getSelectRange();
		obj.attr('start',r.start).attr('end',r.end);
	},
	setSelect:function(obj){
		obj.select(function(){$(this).attr('slct',window.getSelection().toString());});
		//obj.blur(function(){$(this).attr('slct','');});
		obj.click(function(){$(this).attr('slct','');});
	},
	hidekb:function(){
		var obj = $("#"+mykb.handleid);
		
		obj.offset(mykb.oldoffset);
		
		mykb.oldoffset = undefined;
		$("#"+mykb.bxid).remove();
		//Han, don't remove this before V1.6.0
		// if(isVkeyOpen()){
				// VirtualKeyboard.onkeydown = undefined;
				// VirtualKeyboard.toggle();				
		// }
		mykb.targetobjid = undefined;
	},
	showkb:function(obj){
		if(!mykb.isshow){mykb.isshow=true;return;}
		//if(paras.blockallkybd)return;
		obj = getthisobj(obj);
		if(mykb.targetobjid==obj.attr('id'))return;
		mykb.hidekb();
		mykb.targetobjid = obj.attr('id');

		obj.unbind("remove", mykb.hidekb);
		obj.on("remove", mykb.hidekb);
		
		
		
		var lan = mykb.lan;
		var type = obj.attr("type");
		
		var exten = obj.attr("exten");
		if(!!exten)exten=JSON.parse(exten);
		
		
		if(!type) type = 'text';
		if(type == 'text'||type == 'date'||type == 'number'||type == 'email'||type == 'password'||type == 'datetime-local'||type == 'time'||type == 'url'){
			var mytype = obj.attr('mytype');
			var nextgoid = obj.attr("nextgo");
			var lastobjid = obj.attr("TabL");
			var nextobjid = obj.attr("TabN");
			if(!!nextgoid) var nextobj = $("#"+nextgoid);
			if(!!mytype)
				mykb.type = mytype;
			else
				switch(type){
					case 'number'://float '0-9'+'.'
						mykb.type = 'fp';//float plus
					break;
					case 'password':
						mykb.type = 'n';
					break;
					case 'date':
					case 'datetime-local':
					case 'time':
						mykb.type = 'nd';//'np'phone
					break;
					case 'text':
					case 'url':
					default:
						mykb.type = 'w';
				}
			mykb.setkbbx(obj,nextobj,lastobjid,nextobjid);
			mykb.setkb(mykb.type,lan,exten);
		}
		else
			return;
		

		var bxoffset = $("#"+mykb.bxid).offset();
		
		var handleid = obj.attr("movehandle");
		if(!handleid)return;//handleid = mykb.targetobjid;
		
		var isfix = obj.attr('isfix')==true;
		if(!isfix){
			mykb.handleid = handleid;
			var handleobj = $("#"+mykb.handleid);
			mykb.oldoffset = handleobj.offset();
			handleobj.offset({left:mykb.oldoffset.left,top:(mykb.oldoffset.top-(obj.offset().top-bxoffset.top/2))});
		}
		
		mykb.isshow=false;
		obj.focus();
	},
	removeAll:function(obj){
		if(obj.length>0) obj = obj;
		else obj = $("#"+mykb.targetobjid);
		if(obj.attr('mytype')=='f')obj.val('0.00');
		else obj.val('');
	},
	setkbbx:function(thisobj,nextobj,lastid,nextid){
		//if(!!nextobj&&nextobj.length==0)nextobj=undefined;
		var zindex = mykb.zindex;
		$("#"+mykb.bxid).remove();
		var obj = getGrandpa(thisobj);
		
		var kbx = getBt(mykb.bxid,['lbl','ab'],'','');
		kbx.css({"z-index":zindex});
		//fp.setElmt(zindex,kbx);
		
			var lftbx = getBt('kblft',['ab'],'','');
				var tpbx = getBt('kbtype',['ab'],'','');
				var lgnbx = getBt('kblan',['ab'],'','');
				lftbx.append(tpbx).append(lgnbx);
			var kbkbbx = getBt('kbmdl',['ab'],'','');
				var kbbx = getBt(mykb.kbid,['ab'],'','');
				kbkbbx.append(kbbx);
			var rhtbx = getBt('kbrht',['ab'],'','');
				var upbtbx = getBt('kbrbtsu',['ab'],'','');
					var hidebt = getBt('kbrhide',['dbl','fpblbt','ab'],'',mykb.hidekb);
					var hideicon = getBt('',['kbhideicon','re'],'','');
					hidebt.append(hideicon);
					//hidebt.html("V");
					upbtbx.append(hidebt);
					var lastbt = getBt('kbrlast',['dbl','fpblbt','ab',"kbrIvsb"],'','');
					var nextbt = getBt('kbrnext',['dbl','fpblbt','ab',"kbrIvsb"],'','');
					upbtbx.append(lastbt);
					upbtbx.append(nextbt);
					if(!!lastid){
						lastbt.attr("gotoid",lastid);
						var icon = getBt('',['kblasticon','re'],'','');
						lastbt.append(icon);
						lastbt.removeClass("kbrIvsb");
						lastbt.click(function(){$("#"+$(this).attr('gotoid')).focus();});
					}
					if(!!nextid){
						nextbt.attr("gotoid",nextid);
						var icon = getBt('',['kbnexticon','re'],'','');
						nextbt.append(icon);
						nextbt.removeClass("kbrIvsb");
						nextbt.click(function(){$("#"+$(this).attr('gotoid')).focus();});
					}
				var lwbtbx = getBt('kbrbtsl',['ab'],'','');
					var clcbt = getBt('kbrclc',['dbl','fpblbt','ab'],'','');
					clcbt.html("C");
					clcbt.click(mykb.removeAll);
					lwbtbx.append(clcbt);
					if(!!nextobj){
						var gobt = getBt('kbrgo',['dbl','fpblbt','ab'],'','');
						gobt.html(nextobj.html());
						gobt.click(function(){mykb.hidekb();nextobj.click();});
						lwbtbx.append(gobt);
					}
			rhtbx.append(upbtbx).append(lwbtbx);
		kbx.append(lftbx).append(kbkbbx).append(rhtbx);
		kbx.click(mystopeventpop);
		obj.after(kbx);
	},
	setkb:function(t,l,x){
		switch (t){
			case 'w':
			//don't remove this before 1.6.0
				// if(!isVkeyOpen()){
					// VirtualKeyboard.onkeydown = function(){mykb.targetobj = $("#"+mykb.targetobjid);mykb.targetobj.keyup();};
					// VirtualKeyboard.toggle(mykb.targetobjid,mykb.kbid);
				// }
			break;
			case 'dishnote':
			case 'phone':
			case 'addr':
			case 'apt':
			case 'name':
			case 'dishvoid':
				mykb.addFullKb(mykb.targetobjid,mykb.kbid,t);
			break;
			case 'dishSearch':
				mykb.addFullKb(mykb.targetobjid,mykb.kbid,t);
			break;
			case 'fp':
			case 'ph':
			case 'f':
			case 'n':
			case 'd':
			case 'nd':
			case 'time':
			case 'date':
				mykb.addFloatKb(mykb.targetobjid,mykb.kbid,t,x);
			break;
			case 'select':
				mykb.addSelectKb(mykb.targetobjid,mykb.kbid,t,x);
			break;
		};
	},
	selectAll:function(){
		//mykb.isshow=false;
		var obj = $(this);
		var l = obj.val().length;
		obj.selectRange(l);
	},
	getNumberKb:function(extbtlist,type){
			var mykbflbxl = getBt('mykbflbxl',[extbtlist.lenth>0?'mykbflbxl1':'mykbflbxl2','ab','lbl'],'','');
			var mykbflkeybxhlp = getBt('mykbflbxhelp',['mmflt'],'','');
			var mykbflkeybx = getBt('mykbflkeybx',['mdhlp','re'],'','');
				var mykbflbxll1 = getBt('mykbflbxll1',['ab'],'','');
					var mykbfln1 = getBt('mykbfl_1',['mykbfllbt','dbl','re'],'','');
					var mykbfln2 = getBt('mykbfl_2',['mykbfllbt','dbl','re'],'','');
					var mykbfln3 = getBt('mykbfl_3',['mykbfllbt','dbl','re'],'','');
					
					var mykbfln1bx = getBt('',['mykbfllbt1','ab'],'','');mykbfln1bx.append(mykbfln1);
					var mykbfln2bx = getBt('',['mykbfllbt2','ab'],'','');mykbfln2bx.append(mykbfln2);
					var mykbfln3bx = getBt('',['mykbfllbt3','ab'],'','');mykbfln3bx.append(mykbfln3);
					mykbflbxll1.append(mykbfln1bx).append(mykbfln2bx).append(mykbfln3bx);
				var mykbflbxll2 = getBt('mykbflbxll2',['ab'],'','');
					var mykbfln4 = getBt('mykbfl_4',['mykbfllbt','dbl','re'],'','');
					var mykbfln5 = getBt('mykbfl_5',['mykbfllbt','dbl','re'],'','');
					var mykbfln6 = getBt('mykbfl_6',['mykbfllbt','dbl','re'],'','');

					var mykbfln1bx = getBt('',['mykbfllbt1','ab'],'','');mykbfln1bx.append(mykbfln4);
					var mykbfln2bx = getBt('',['mykbfllbt2','ab'],'','');mykbfln2bx.append(mykbfln5);
					var mykbfln3bx = getBt('',['mykbfllbt3','ab'],'','');mykbfln3bx.append(mykbfln6);
					mykbflbxll2.append(mykbfln1bx).append(mykbfln2bx).append(mykbfln3bx);
				var mykbflbxll3 = getBt('mykbflbxll3',['ab'],'','');
					var mykbfln7 = getBt('mykbfl_7',['mykbfllbt','dbl','re'],'','');
					var mykbfln8 = getBt('mykbfl_8',['mykbfllbt','dbl','re'],'','');
					var mykbfln9 = getBt('mykbfl_9',['mykbfllbt','dbl','re'],'','');
					
					var mykbfln1bx = getBt('',['mykbfllbt1','ab'],'','');mykbfln1bx.append(mykbfln7);
					var mykbfln2bx = getBt('',['mykbfllbt2','ab'],'','');mykbfln2bx.append(mykbfln8);
					var mykbfln3bx = getBt('',['mykbfllbt3','ab'],'','');mykbfln3bx.append(mykbfln9);
					mykbflbxll3.append(mykbfln1bx).append(mykbfln2bx).append(mykbfln3bx);
				var mykbflbxll4 = getBt('mykbflbxll4',['ab'],'','');
					var mykbfln0 = getBt('mykbfl_0',['mykbfllbt','dbl','re'],'','');
					if(type == 'fp'){
						var mykbfln0l = getBt('mykbfl_00',['mykbfllbt','dbl','re'],'','');
						var mykbfln0r = getBt('mykbfl_dot',['mykbfllbt','dbl','re'],'','');
					}
					else if(type == 'f'||type == 'n'||type == 'd'){
						var mykbfln0l = getBt('mykbfl_00',['mykbfllbt','dbl','re'],'','');
						var mykbfln0r = getBt('mykbfl_back',['mykbfllbt','dbl','re'],'','');
					}
					else if(type == 'ph'){
						var mykbfln0l = getBt('mykbfl_C',['mykbfllbt','dbl','re'],'','');
						var mykbfln0r = getBt('mykbfl_back',['mykbfllbt','dbl','re'],'','');
					}
					else if(type == 'time'){
						var mykbfln0l = getBt('mykbfl_:',['mykbfllbt','dbl','re'],'','');
						var mykbfln0r = getBt('mykbfl_back',['mykbfllbt','dbl','re'],'','');
					}
					else if(type == 'date'){
						var mykbfln0l = getBt('mykbfl_/',['mykbfllbt','dbl','re'],'','');
						var mykbfln0r = getBt('mykbfl_back',['mykbfllbt','dbl','re'],'','');
					}
					else{
						var mykbfln0l = getBt('mykbfl_',['mykbfllbt','dbl','re'],'','');
						var mykbfln0r = getBt('mykbfl_',['mykbfllbt','dbl','re'],'','');
					}
					
					var mykbfln1bx = getBt('',['mykbfllbt1','ab'],'','');mykbfln1bx.append(mykbfln0l);
					var mykbfln2bx = getBt('',['mykbfllbt2','ab'],'','');mykbfln2bx.append(mykbfln0);
					var mykbfln3bx = getBt('',['mykbfllbt3','ab'],'','');mykbfln3bx.append(mykbfln0r);
					mykbflbxll4.append(mykbfln1bx).append(mykbfln2bx).append(mykbfln3bx);
				mykbflkeybx.append(mykbflbxll1).append(mykbflbxll2).append(mykbflbxll3).append(mykbflbxll4);
				mykbflbxl.append(mykbflkeybxhlp).append(mykbflkeybx);
			return mykbflbxl;
	},
	clickkb:function(obj){
		var id = obj.target.id.split('_')[1];
		var obj = mykb.targetobj;
		var old = obj.val();
		id = id.replace('&nbsp;',' ').replace('&colon;',':').replace('&comma;',',');
		//var p = obj.getCursorPosition();
		var n = obj.getCursorPosition();
		obj.val(mykb.addValue(old,id,n,obj.attr("slct"))).selectRange(n+id.length);
		obj.keyup();
	},
	addValue:function(oldmsg,newmsg,n,selectvalue){
		if(!selectvalue)
			return oldmsg.substr(0,n)+newmsg+oldmsg.substr(n);
		else{
			var sl = selectvalue.length;
			var f = oldmsg.substr(0,n);
			var b = oldmsg.substr(n);
			if(b.substr(0,sl) == selectvalue)
				return f+newmsg+b.substr(sl);
			else if(f.substr(f.length-sl) == selectvalue)
				return f.substr(0,f.length-sl)+newmsg+b;
			else
				return f+newmsg+b;
		}
	},
	removeOneValue:function(oldmsg,n){
		return oldmsg.substr(0,n-1)+oldmsg.substr(n);
	},
	addFullKb:function(targetid,kbid,type){
		if(type == 'addr'){
			var mykeyext = mykb.mykeyexten.addr;
			var mykey123 = mykb.mykey123_1;
		}
		else if(type == 'dishnote'){
			var mykeyext = mykb.mykeyexten.dishnote;
			var mykey123 = mykb.mykey123_2;
		}
		else if(type == 'dishvoid'){
			var mykeyext = mykb.mykeyexten.dishvoid;
			var mykey123 = mykb.mykey123_2;
		}
		else if(type == 'dishSearch'){
			var mykeyext = mykb.mykeyexten.dishSearch;
			var mykey123 = mykb.mykey123_search;
		}
		else if(type == 'phone'){
			var mykeyext = mykb.mykeyexten.phone;
			var mykey123 = mykb.mykey123_1;
		}
		else if(type == 'name'){
			var mykeyext = mykb.mykeyexten.name;
			var mykey123 = mykb.mykey123_3;
		}
		else if(type == 'apt'){
			var mykeyext = mykb.mykeyexten.apt;
			var mykey123 = mykb.mykey123_1;
		}
		var keys = {linesabc:mykb.mykeyAbc,lines123:mykey123};
		keys.linesabc[1].keys[9] = mykeyext[0].keys[0];
		keys.linesabc[2].keys[9] = mykeyext[1].keys[0];
		keys.linesabc[2].keys[10] = mykeyext[1].keys[1];
		keys.linesabc[3] = mykeyext[2];
		var boxobj = $("#"+kbid);
		mykb.targetobj = $("#"+targetid);
		//mykb.targetobj.unbind("click",mykb.selectAll);
		//mykb.targetobj.click(mykb.selectAll);
		boxobj.html('');
		var mykybxout = getBt('mykboutbx',['','re','dbl'],'','');
			var myKbAbc = getBt('myAbcKb',['','ab',''],'','');
				var ls = keys.linesabc;
				for(var i in ls){if(goipad(i))continue;
					var myline = getBt('',['myAbcLine','re',''],'','');
					var ks = ls[i].keys;
					for(var j in ks){if(goipad(j))continue;
						var v = ks[j].v;if(mykb.isFullKeybdUppercase&&v != '&nbsp;')(v = v.toUpperCase());
						var fsz = Math.ceil(v.length/2);
						var l = ks[j].l;
						var kcls = !!l?l:1;
						var f = ks[j].f;
						var cnm2=v.length>2?2:0;
						var cnm = ks[j].c;cnm=!!cnm?cnm:cnm2;
						if(!f)f=mykb.clickkb;
						var myks = getBt('myKs_'+v,['myKs','fsz'+fsz,'kbcl_'+cnm,'mykslga'+kcls,'re',''],'',f);
						myks.html(v);
						myline.append(myks);
					}
					myKbAbc.append(myline);
				}
			var myKb123 = getBt('my123Kb',['','ab',''],'','');
				var ls = keys.lines123;
				for(var i in ls){if(goipad(i))continue;
					var myline = getBt('',['my123Line','re',''],'','');
					var ks = ls[i].keys;
					for(var j in ks){if(goipad(j))continue;
						var v = ks[j].v;
						var l = ks[j].l;
						var fsz = Math.ceil(v.length/2);
						var kcls = !!l?l:1;
						var f = ks[j].f;
						var cnm = ks[j].c;cnm=!!cnm2?cnm:0;
						if(!f)f=mykb.clickkb;
						var myks = getBt('myKs_'+v,['myKs','fsz'+fsz,'kbcl_'+cnm,'mykslg1'+kcls,'re',''],'',f);
						myks.html(v);
						myline.append(myks);
					}
					myKb123.append(myline);
				}
		mykybxout.append(myKbAbc).append(myKb123);
		boxobj.append(mykybxout);
	},
	addSelectKb:function(targetid,kbid,type,extbtlist)
	{
		var boxobj = $("#"+kbid);
		mykb.targetobj = $("#"+targetid);
		
		var maxlength = mykb.targetobj.attr("maxlength");
		var isautojump = !!maxlength;
		if(isautojump)var nextIpt = $("#"+mykb.targetobj.attr("TabN"));
		var lastIpt = $("#"+mykb.targetobj.attr("TabL"));
		
		if(!extbtlist)extbtlist = [];
		boxobj.html('');
		
		var mykbflbx = getBt('mykbflbx',[extbtlist.lenth>0?'mykbflbx1':'mykbflbx2','re','dbl'],'','');
			var mykbflbxr = getBt('mykbflbxrSelect',[extbtlist.lenth>0?'mykbflbxr1':'mykbflbxr2','ab','lbl'],'','');
				for(var i in extbtlist){if(goipad(i))continue;
					var mykbflext = getBt('mykbflext_'+extbtlist[i].val,['mykbfllbtextSelect','re','fpblbt'],'','');
					var name = !!extbtlist[i].name?('('+extbtlist[i].name+")"):'';
					mykbflext.html(extbtlist[i].val+name);
					mykbflbxr.append(mykbflext);
				}
			mykbflbx.append(mykbflbxr);
			if(!!extbtlist&&extbtlist.length>0)
				mykbflbx.append(mykbflbxr);
				
			var gettxt = function(txt){
				if(txt=='dot')return '.';
				if(txt=='back')return '<';
				else if(txt == undefined) return '';
				else return txt;
			};
			var settxt = function(){
				var obj = $(this);
				var tx = gettxt(obj.attr('id').split('_')[1]);
				//var oldtx = mykb.targetobj.val();
				//if(tx == '<')mykb.targetobj.val( oldtx.substr(0,oldtx.length-1) );
				if(tx=='C')mykb.targetobj.val("");
				else mykb.targetobj.val(tx);
				
				mykb.targetobj.change();
				if(isautojump&&!!nextIpt)nextIpt.focus();
			};
			
			var clcbt2 = function(){
				var obj = $(this);
				var tx = obj.attr('id').split('_')[1];
				
				obj.click(settxt);
			};
			
			mykbflbx.find(".mykbfllbtextSelect").each(clcbt2);
			boxobj.append(mykbflbx);				
	},
	addFloatKb:function(targetid,kbid,type,extbtlist){
		var boxobj = $("#"+kbid);
		mykb.targetobj = $("#"+targetid);
		
		var maxlength = mykb.targetobj.attr("maxlength");
		var isautojump = !!maxlength;
		if(isautojump)var nextIpt = $("#"+mykb.targetobj.attr("TabN"));
		var lastIpt = $("#"+mykb.targetobj.attr("TabL"));		

		if(!extbtlist)extbtlist = [];
		boxobj.html('');
		var mykbflbx = getBt('mykbflbx',[extbtlist.lenth>0?'mykbflbx1':'mykbflbx2','re','dbl'],'','');
			var mykbflbxl = mykb.getNumberKb(extbtlist,type);
			var mykbflbxr = getBt('mykbflbxr',[extbtlist.lenth>0?'mykbflbxr1':'mykbflbxr2','ab','lbl'],'','');
				for(var i in extbtlist){if(goipad(i))continue;
					var mykbflext = getBt('mykbflext_'+extbtlist[i].val,['mykbfllbtext',"mySelect",'re','fpblbt'],'','');
					var name = !!extbtlist[i].name?('('+extbtlist[i].name+")"):'';
					mykbflext.html(extbtlist[i].val+name);
					mykbflbxr.append(mykbflext);
				}
			mykbflbx.append(mykbflbxl);
			if(!!extbtlist&&extbtlist.length>0)
				mykbflbx.append(mykbflbxr);
			
			var gettxt = function(txt){
				if(txt=='dot')return '.';
				if(txt=='back')return '<';
				else if(txt == undefined) return '';
				else return txt;
			};
			
			var settxtflt = function(){
				var obj = $(this);
				var tx = gettxt(obj.attr('id').split('_')[1]);
				if(tx.indexOf('.')>-1)
					mykb.targetobj.val(tx);
				else{
					var oldtx = mykb.targetobj.val();
					var slcttx = mykb.targetobj.attr('slct');
					var pt = oldtx.split(".")[1];
					if(!!pt)
						var pointNum = pt.length;
					else
						var pointNum = 0;
						
					if(oldtx == ''){oldtx="0.00";}
					
					var setval = "0.00";
					
					var thezero = "";
					for(var i=0;i<pointNum;i++){
						thezero+="0";
					}
					if(oldtx == slcttx){
						oldtx = "0."+thezero;
					}
					if(tx == '<') setval = parseFloat((oldtx.substr(0,oldtx.length-1))/10).mytoFixed(pointNum);//这里加入是零删除的逻辑
					else if(tx=='00')setval = (parseFloat(oldtx)*100).mytoFixed(pointNum);
					else if(tx=='C')setval = "0."+thezero;
					else setval = (parseFloat(oldtx)*10+parseFloat(tx)*Math.pow(0.1,pointNum)).mytoFixed(pointNum);
					
					setval = setval+'';
					
					pt = setval.split(".")[1];
					if(!pt)setval+="."+thezero;
					else {
						for(var i=pt.length;i<pointNum;i++){
							setval+="0";
						}
					}
					
					setval == 0?mykb.targetobj.val("0."+thezero):mykb.targetobj.val(setval);
				}
				mykb.targetobj.change();
			};
			
			var settxt = function(){
				var obj = $(this);
				var tx = gettxt(obj.attr('id').split('_')[1]);
				var l = tx.length;
				var old = mykb.targetobj.val();
				var n = mykb.targetobj.getCursorPosition();
				if(tx == '<')
					mykb.targetobj.val(mykb.removeOneValue(old,n)).selectRange(n-1);
				else if(tx=='C')mykb.targetobj.val("");
				else {
						mykb.targetobj.val(mykb.addValue(old,tx,n,mykb.targetobj.attr("slct"))).selectRange(n+tx.length);
				}		
				var m = mykb.targetobj.val();	
				var l = m.length;
				if(l>maxlength)mykb.targetobj.val(m.substr(0,maxlength));
				mykb.targetobj.change();
				if(isautojump&&!!nextIpt&&l>=maxlength)
					nextIpt.focus();
				if(l==0&&!!lastIpt)
					lastIpt.focus();
			};
			var settxt2 = function(){
				var obj = $(this);
				var tx = gettxt(obj.attr('id').split('_')[1]);
				if(tx=='C')mykb.targetobj.val("");
				else mykb.targetobj.val(tx);
				mykb.targetobj.change();
				
				if(isautojump&&!!nextIpt)nextIpt.focus();
			};
			
			var clcbt = function(){
				var obj = $(this);
				var tx = obj.attr('id').split('_')[1];
				obj.html(gettxt(tx));
				if(type == 'fp'||type == 'f')obj.click(settxtflt);
				else obj.click(settxt);
			};
			var clcbt2 = function(){
				var obj = $(this);
				var tx = obj.attr('id').split('_')[1];
				if(type == 'fp'||type == 'f')obj.click(settxtflt);
				else obj.click(settxt);
			};
			var clcbt3 = function(){
				var obj = $(this);
				var tx = obj.attr('id').split('_')[1];
				obj.click(settxt2);
			};
			
			mykbflbx.find(".mykbfllbt").each(clcbt);
			mykbflbx.find(".mySelect").each(clcbt3);
			boxobj.append(mykbflbx);
	}
};
