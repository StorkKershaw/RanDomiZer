(function(e){function n(n){for(var r,i,c=n[0],u=n[1],s=n[2],m=0,p=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(p.length)p.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/RanDomiZer/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("b-container",[t("b-row",[t("randomizer-result"),t("randomizer-setting")],1)],1)],1)},o=[],i=t("ed09"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-col",{staticClass:"randomizer-result",attrs:{md:"6"},on:{touchstart:function(n){return e.increment()},touchend:function(n){return e.reset()},touchcancel:function(n){return e.reset()},mousedown:function(n){return e.increment()},mouseup:function(n){return e.reset()},mouseleave:function(n){return e.reset()}}},[t("h4",[e._v("サプライ")]),t("small",[e._v("タップしてコピー / ロングタップしてシャッフル")]),t("b-overlay",{attrs:{show:"",opacity:e.overlay.opacity},scopedSlots:e._u([{key:"overlay",fn:function(){return[t("vue-ellipse-progress",{attrs:{size:70,line:"square",thickness:"5%",animation:"default 0 0",color:e.overlay.circleColor,"empty-color":e.overlay.circleEmptyColor,progress:e.interaction.current,legend:!1}})]},proxy:!0}])},[t("b-table-simple",{attrs:{striped:""}},[t("b-tbody",e._l(e.state.supply,(function(n,r){var a=n.expansionName,o=n.kingdomName;return t("b-tr",{key:"result-row__"+r},[t("b-td",{staticStyle:{width:"1rem"}},[e._v(e._s(r+1))]),t("b-td",{staticStyle:{width:"2rem"}},[e._v(e._s(a))]),t("b-td",{staticStyle:{width:"7rem"}},[e._v(e._s(o))])],1)})),1)],1)],1)],1)},u=[],s=t("1da1"),l=(t("96cf"),t("b680"),t("a4d3"),t("e01a"),t("d3b7"),Symbol("randomizer-store-key"));function m(e){throw new Error(e)}var p=Object(i["d"])({setup:function(e,n){var t,r=n.root,a=null!==(t=Object(i["e"])(l))&&void 0!==t?t:m("dependency injection failed"),o=a.state,c=a.refresh,u=a.toText,p=Object(i["h"])({current:1,delay:20,timer:null}),d=Object(i["a"])((function(){var e=(p.current/100).toFixed(2);return{circleColor:"rgba(25, 181, 254, ".concat(e,")"),circleEmptyColor:p.current>1?"#e6e9f0":"rgba(255, 255, 255, 0)",opacity:p.current>1?"0.3":"0"}})),f=function(){p.timer=setInterval((function(){if(p.delay>0)p.delay--;else{var e=p.current,n=Math.max(1,.07*e);e<100&&(p.current=Math.min(100,e+n))}}),20)},b=function(){null!==p.timer&&(clearTimeout(p.timer),p.timer=null),p.delay<20&&1===p.current&&v(),100===p.current&&c(),p.current=1,p.delay=20},v=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:navigator.clipboard.writeText(u()),r.$bvToast.toast("サプライをクリップボードにコピーしました。",{solid:!0,autoHideDelay:2e3,noHoverPause:!0,noCloseButton:!0});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{state:o,interaction:p,overlay:d,increment:f,reset:b}}}),d=p,f=t("2877"),b=Object(f["a"])(d,c,u,!1,null,null,null),v=b.exports,y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-col",{attrs:{md:"6"}},[t("h4",[e._v("設定")]),t("b-table-simple",{attrs:{striped:"",small:""}},[t("b-tbody",e._l(e.zip(e.expansionNames,e.state.counts),(function(n,r){var a=n[0],o=n[1];return t("b-tr",{key:"setting-row__"+r},[t("b-td",{staticClass:"align-middle"},[e._v(e._s(a))]),t("b-td",{staticClass:"px-0 align-middle"},[t("b-button",{attrs:{squared:"",variant:"outline-danger"},on:{click:function(n){return n.preventDefault(),e.increment(r)}}},[t("b-icon-chevron-double-up")],1)],1),t("b-td",{staticClass:"align-middle",staticStyle:{"min-width":"5rem"}},[e._v(e._s(o>=0?o:"Random"))]),t("b-td",{staticClass:"px-0 align-middle"},[t("b-button",{attrs:{squared:"",variant:"outline-primary"},on:{click:function(n){return n.preventDefault(),e.decrement(r)}}},[t("b-icon-chevron-double-down")],1)],1)],1)})),1)],1)],1)},h=[],g=(t("d81d"),t("4ec9"),t("3ca3"),t("ddb0"),[{expansionName:"基本",kingdomNames:["地下貯蔵庫","礼拝堂","堀","家臣","工房","商人","前駆者","村","改築","鍛冶屋","金貸し","玉座の間","密猟者","民兵","役人","庭園","市場","衛兵","議事堂","研究所","鉱山","祝祭","書庫","山賊","魔女","職人"]},{expansionName:"陰謀",kingdomNames:["手先","中庭","待ち伏せ","仮面舞踏会","執事","願いの井戸","貧民街","詐欺師","隠し通路","共謀者","鉱山の村","男爵","鉄工所","橋","外交官","風車","改良","交易場","廷臣","パトロール","拷問人","寵臣","身代わり","公爵","貴族","ハーレム"]},{expansionName:"海辺",kingdomNames:["原住民の村","真珠採り","抑留","停泊所","灯台","倉庫","密輸人","見張り","大使","漁村","航海士","宝の地図","引揚水夫","海の妖婆","海賊船","巾着切り","隊商","島","探検家","バザー","宝物庫","幽霊船","前哨地","策士","商船","船着場"]},{expansionName:"錬金術",kingdomNames:["薬草商","弟子","変成","ブドウ園","薬師","大学","念視の泉","錬金術師","使い魔","賢者の石","ゴーレム","支配"]},{expansionName:"繁栄",kingdomNames:["交易路","望楼","借金","記念碑","司教","労働者の村","護符","石切場","会計所","造幣所","都市","保管庫","大衆","香具師","玉璽","禁制品","投機","大市場","ならず者","隠し財産","拡張","宮廷","鍛造","銀行","行商人"]},{expansionName:"収穫祭",kingdomNames:["村落","移動動物園","占い師","再建","農村","馬上槍試合","魔女娘","馬商人","収穫","狩猟団","道化師","豊穣の角笛","品評会"]},{expansionName:"異郷",kingdomNames:["岐路","公爵夫人","愚者の黄金","オアシス","開発","画策","神託","坑道","香辛料商人","遊牧民の野営地","よろずや","義賊","交易人","シルクロード","街道","官吏","厩舎","大使館","地図職人","値切り屋","宿屋","辺境伯","不正利得","埋蔵金","国境の村","農地"]},{expansionName:"暗黒時代",kingdomNames:["救貧院","従者","浮浪者","物乞い","隠遁者","賢者","採集者","物置","浮浪児","青空市場","金物商","吟遊詩人","行進","ゴミあさり","城塞","ネズミ","武器庫","死の荷車","襲撃者","封土","屑屋","山賊の宿営地","建て直し","地下墓所","墓暴き","伯爵","はみだし者","秘術師","盗賊","略奪","狂信者","騎士","偽造通貨","狩場","祭壇"]},{expansionName:"ギルド",kingdomNames:["蝋燭職人","石工","医者","名品","助言者","広場","収税吏","伝令官","熟練工","商人ギルド","肉屋","パン屋","予言者"]},{expansionName:"冒険",kingdomNames:["騎士見習い","倒壊","農民","鼠取り","法貨","地下牢","道具","魔除け","隊商の護衛","案内人","カササギ","使者","守銭奴","港町","山守","複製","変容","失われし都市","語り部","工匠","巨人","沼の妖婆","呪いの森","橋の下のトロル","御料車","ワイン商","遠隔地","掘出物","遺物","雇人"]},{expansionName:"帝国",kingdomNames:["戦車競走","農家の市場","女魔術師","生贄","ヴィラ","神殿","公共広場","庭師","ワイルドハント","軍団兵","資料庫","御守り","元手","冠","技術者","王室の鍛冶屋","市街","大君主","開拓者/騒がしい村","陣地/鹵獲品","パトリキ/エンポリウム","剣闘士/大金","投石機/石","城"]},{expansionName:"夜想曲",kingdomNames:["ドルイド","ピクシー","追跡者","忠犬","修道院","守護者","愚者","レプラコーン","秘密の洞窟","取り替え子","夜警","ゴーストタウン","詩人","恵みの村","コンクラーベ","ネクロマンサー","羊飼い","暗躍者","悪魔の工房","悪魔祓い","墓地","呪われた村","プーカ","聖なる木立ち","悲劇のヒーロー","迫害者","カブラー","納骨堂","悪人のアジト","吸血鬼","人狼","偶像","夜襲"]},{expansionName:"ルネサンス",kingdomNames:["国境警備隊","追従者","ドゥカート金貨","劇団","実験","増築","貨物船","旗手","絹商人","山村","司祭","根城","発明家","研究","パトロン","学者","剣客","出納官","先見者","彫刻家","徴募官","悪党","老魔女","王笏","香辛料"]},{expansionName:"移動動物園",kingdomNames:["そり","黒猫","配給品","ラクダの隊列","ヤギ飼い","がらくた","雪深い村","牧羊犬","備蓄品","賞金稼ぎ","騎兵隊","馬丁","旅籠","枢機卿","村有緑地","強制退去","狩猟小屋","炉","貸し馬屋","パドック","聖域","魔女の集会","艀","首謀者","門番","鷹匠","漁師","デストリエ","行人","動物見本市"]}]),x=g.map((function(e){var n=e.expansionName;return n})),N=new Map(g.map((function(e,n){var t=e.expansionName;return[t,n]}))),k=g.map((function(e){var n=e.expansionName,t=e.kingdomNames;return t.map((function(e){return{expansionName:n,kingdomName:e}}))})),j=t("ade3"),O=t("3835");t("d28b"),t("a630");function w(){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e={},Object(j["a"])(e,Symbol.iterator,regeneratorRuntime.mark((function e(){var n,r,a,o,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.map((function(e){return e[Symbol.iterator]()})),r=function(e,n){var t=Object(O["a"])(e,2),r=t[0],a=t[1],o=n.next(),i=o.value,c=o.done;return r.push(i),[r,a||c]};case 2:if(a=n.reduce(r,[[],!1]),o=Object(O["a"])(a,2),i=o[0],c=o[1],!c){e.next=6;break}return e.abrupt("break",10);case 6:return e.next=8,i;case 8:e.next=2;break;case 10:case"end":return e.stop()}}),e)}))),Object(j["a"])(e,"asArray",(function(){return Array.from(this)})),e}var _=Object(i["d"])({setup:function(){var e,n=null!==(e=Object(i["e"])(l))&&void 0!==e?e:m("dependency injection failed"),t=n.state,r=n.increment,a=n.decrement;return{expansionNames:x,zip:w,state:t,increment:r,decrement:a}}}),S=_,R=Object(f["a"])(S,y,h,!1,null,null,null),z=R.exports,C=t("2909"),M=t("b85c"),P=(t("a434"),t("fb6a"),t("4e82"),t("a15b"),t("99af"),regeneratorRuntime.mark(T));function T(e,n){var t,r,a,o=arguments;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t=o.length>2&&void 0!==o[2]?o[2]:1,void 0===n&&(n=e,e=0),0!==t){i.next=4;break}throw new Error("argument 3 must not be zero");case 4:if(!(t>0)){i.next=14;break}r=e;case 6:if(!(r<n)){i.next=12;break}return i.next=9,r;case 9:r+=t,i.next=6;break;case 12:i.next=21;break;case 14:a=e;case 15:if(!(a>n)){i.next=21;break}return i.next=18,a;case 18:a+=t,i.next=15;break;case 21:case"end":return i.stop()}}),P)}function E(e){var n,t=Object(M["a"])(T(e.length-1,0,-1));try{for(t.s();!(n=t.n()).done;){var r=n.value,a=Math.floor(Math.random()*(r+1)),o=[e[a],e[r]];e[r]=o[0],e[a]=o[1]}}catch(i){t.e(i)}finally{t.f()}return e}function A(){var e=Object(i["h"])({counts:Array.from({length:15},(function(e,n){return n?0:10})),limit:10,supply:[]}),n=Object(i["a"])((function(){return e.counts.reduce((function(e,n){return n>0?e+n:e}),0)})),t=function(t){var r=e.counts[t];e.counts.splice(t,1,-1===r||n.value<e.limit?r+1:-1)},r=function(t){var r=e.counts[t];e.counts.splice(t,1,r>=0?r-1:e.limit-n.value)},a=function(){var n,t=[],r=[],a=e.limit,o=Object(M["a"])(w(e.counts,k));try{for(o.s();!(n=o.n()).done;){var i=Object(O["a"])(n.value,2),c=i[0],u=i[1];-1===c?r.push.apply(r,Object(C["a"])(u)):(t.push.apply(t,Object(C["a"])(E(u).slice(0,c))),a-=c)}}catch(s){o.e(s)}finally{o.f()}t.push.apply(t,Object(C["a"])(E(r).slice(0,a))),e.supply=t.sort((function(e,n){var t,r,a=e.expansionName,o=n.expansionName;return(null!==(t=N.get(a))&&void 0!==t?t:m())-(null!==(r=N.get(o))&&void 0!==r?r:m())}))},o=function(){return e.supply.map((function(e,n){var t=e.expansionName,r=e.kingdomName;return"".concat(n+1,". ").concat(r," (").concat(t,")")})).join("\n")};return Object(i["f"])((function(){return a()})),{state:Object(i["i"])(e),increment:t,decrement:r,refresh:a,toText:o}}var D=Object(i["d"])({components:{RandomizerResult:v,RandomizerSetting:z},setup:function(){Object(i["g"])(l,A())}}),$=D,q=(t("5c0b"),Object(f["a"])($,a,o,!1,null,null,null)),H=q.exports,J=t("9949"),B=t.n(J),F=t("5f5b"),I=t("b1e0");t("f9e3"),t("2dd8");r["default"].use(i["c"]);var Z=Object(i["b"])({render:function(e){return e(H)}});Z.config.productionTip=!1,Z.use(B.a).use(F["a"]).use(I["a"]),Z.mount("#app")}});
//# sourceMappingURL=app.fd11b3ad.js.map