(function(t){function e(e){for(var i,c,r=e[0],o=e[1],u=e[2],h=0,d=[];h<r.length;h++)c=r[h],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},s=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"08c2":function(t,e,n){},"08d4":function(t,e,n){"use strict";n("57de")},1660:function(t,e,n){},"26b8":function(t,e,n){"use strict";n("b821")},2758:function(t,e,n){"use strict";n("cbe9")},"2ad1":function(t,e,n){},3067:function(t,e,n){t.exports=n.p+"static/img/music.a8dc2bb2.jpg"},3511:function(t,e,n){t.exports=n.p+"static/img/lulus.730432dd.jpg"},"515a":function(t,e,n){"use strict";n("824b")},"52ce":function(t,e,n){"use strict";n("e791")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("home")],1)},s=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home",on:{"!click":function(e){return t.removeAnimation.apply(null,arguments)}}},[i("s-animation"),i("div",{ref:"contentRef",staticClass:"content"},[i("music-control",{staticClass:"music-control animate__animated",on:{play:t.showMusic}}),i("img",{staticClass:"animate__animated",attrs:{src:n("3511"),alt:"Zhihaot1"}}),i("span",{staticClass:"animate__animated"},[t._v("lulu / 扎着丸子头的牛栏山小仙女")]),i("search",{staticClass:"search animate__animated",on:{click:t.clickSearch}})],1),i("music-bounce",{class:["music-bounce","animate__animated",{animate__zoomInDown:t.isPlay},{animate__zoomOut:!t.isPlay}]}),i("zh-footer",{staticClass:"version-footer"})],1)},r=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"font-swiper"},[n("h2",[t._v("When The 0209, And You Are "),n("div",{staticClass:"mask"},[n("span",{attrs:{"data-show":""}},[t._v("The Setting Sun In Quiet River In Afternoon")]),n("span",[t._v("Blooming flowers in the valley after rain")]),n("span",[t._v("The moon in a clear sky")]),n("span",[t._v("My Sunshine")])])])])}],l={name:"FontSwiper",mounted:function(){this.move()},methods:{move:function(){setInterval((function(){var t=document.querySelector("span[data-show]"),e=t.nextElementSibling||document.querySelector(".mask span:first-child"),n=document.querySelector("span[data-up]");n&&n.removeAttribute("data-up"),t.removeAttribute("data-show"),t.setAttribute("data-up",""),e.setAttribute("data-show","")}),3e3)}}},h=l,d=(n("515a"),n("2877")),m=Object(d["a"])(h,o,u,!1,null,"4ef94055",null),f=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{ref:"canvas",staticClass:"cursorEvent"},[t._v("如果浏览器兼容此标签置换元素内的内容会被替换掉，否则会被替换(在js中)")])},v=[],_=(n("a434"),n("262e")),b=n("2caf"),g=n("d4ec"),y=n("bee2"),w=(n("cb29"),n("99af"),function(){function t(e,n,i){Object(g["a"])(this,t),this.w=e,this.h=n,this.cas=i}return Object(y["a"])(t,[{key:"run",value:function(){(this.x-this.r<=0||this.x+this.r>=this.w)&&(this.xSpeed=-this.xSpeed),this.x+=this.xSpeed,(this.y-this.r<=0||this.y+this.r>=this.h)&&(this.ySpeed=-this.ySpeed),this.y+=this.ySpeed}},{key:"random",value:function(t){return Math.random()*t}},{key:"drawText",value:function(t,e,n){this.cas.font="20px 微软雅黑",this.cas.textAlign="top",this.cas.textBaseline="middle",this.cas.fillText(t,e,n)}},{key:"drawCircle",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#000";n>0&&(this.cas.beginPath(),this.cas.arc(t,e,n,0,2*Math.PI),this.cas.fillStyle=i,this.cas.fill())}}]),t}()),x=function(t){Object(_["a"])(n,t);var e=Object(b["a"])(n);function n(t,i,a,s,c){var r;return Object(g["a"])(this,n),r=e.call(this,a,s,c),r.x=t,r.y=i,r.r=r.random(5),r.color="rgb(".concat(parseInt(255*Math.random()),", ").concat(parseInt(255*Math.random()),", ").concat(parseInt(255*Math.random()),")"),r.xSpeed=r.random(10)-5,r.ySpeed=r.random(10)-5,r}return Object(y["a"])(n,[{key:"show",value:function(){this.run(),this.r-=.05,this.drawCircle(this.x,this.y,this.r,this.color,this.cas)}}]),n}(w),k={name:"ColorfulBall",data:function(){return{cas:null,w:0,h:0,ballArr:[],timer:null}},mounted:function(){var t=this;this.$nextTick((function(){t.cas=t.$refs.canvas.getContext("2d"),t.w=document.documentElement.clientWidth-6,t.h=document.documentElement.clientHeight-6,t.$refs.canvas.width=t.w,t.$refs.canvas.height=t.h,window.document.onmousemove=function(e){var n=new x(e.x,e.y,t.w,t.h,t.cas);t.ballArr.push(n)},t.timer=window.setInterval((function(){t.cas.clearRect(0,0,t.w,t.h);for(var e=t.ballArr.length,n=0;n<e;n++){var i=t.ballArr[n];i.r>0&&(i.r<0?t.ballArr.splice(n,1):i.show())}}),30)}))}},C=k,M=(n("e4d3"),Object(d["a"])(C,p,v,!1,null,"141f4017",null)),S=M.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"girl-animation"},[n("div",{staticClass:"girl"})])}],$={name:"girl-animation",data:function(){return{}}},j=$,E=(n("2758"),Object(d["a"])(j,T,O,!1,null,"b999c950",null)),P=E.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zh-footer"},[n("span",{staticClass:"border",on:{click:t.toGithub}},[t._v("© 2021 Zhihaot1")]),n("span",{staticClass:"border"},[t._v("创作不易，请多多支持")]),n("span",[t._v("关于")])])},L=[],B={name:"zh-footer",data:function(){return{}},methods:{toGithub:function(){window.open("https://github.com/Caococos")}}},I=B,D=(n("7c46"),Object(d["a"])(I,A,L,!1,null,"0785bbe5",null)),F=D.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search",on:{click:function(e){return t.$emit("click")}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"text",attrs:{type:"text",placeholder:"What do u want to know?"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchContent.apply(null,arguments)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("div",{staticClass:"btn iconfont icon-icon-test",on:{click:t.searchContent}})])},q=[],R=(n("ac1f"),n("841c"),{name:"search",data:function(){return{search:""}},methods:{searchContent:function(){if(this.search){var t="http://www.baidu.com/s?wd=".concat(this.search);window.open(t),this.search=""}}}}),z=R,U=(n("bdd1"),Object(d["a"])(z,N,q,!1,null,"785e399f",null)),W=U.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock"},[n("div",{staticClass:"time"},[t._v(t._s(t.newTime))]),n("div",{staticClass:"week"},[t._v(t._s(t.week))]),n("div",{staticClass:"data"},[t._v(t._s(t.newDate))])])},G=[],H={name:"clock",data:function(){return{newTime:"",newDate:"",week:""}},mounted:function(){this.getLangDate()},methods:{dateFilter:function(t){return t<10?"0"+t:t},getLangDate:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,i=t.getDate(),a=t.getDay(),s=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];this.week=s[a];var c=t.getHours(),r=t.getMinutes(),o=t.getSeconds();this.newDate=this.dateFilter(e)+"-"+this.dateFilter(n)+"-"+this.dateFilter(i),this.newTime=this.dateFilter(c)+":"+this.dateFilter(r)+":"+this.dateFilter(o),setTimeout(this.getLangDate,1e3)}}},Z=H,J=(n("08d4"),Object(d["a"])(Z,X,G,!1,null,"a4614af4",null)),Y=J.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("h1",[t._v("0209")])])}],V={name:"logo",data:function(){return{}}},tt=V,et=(n("52ce"),Object(d["a"])(tt,Q,K,!1,null,"40bddb18",null)),nt=et.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note"},[t._v(t._s(t.msg))])},at=[],st={name:"note",data:function(){return{message:["阳光就像一只温暖的大手轻轻抚平你容貌上的小瑕疵","洁白的大腿和蓬松的纱裙、纤细的手指和精致的蕾丝、玲珑的锁骨和长长的睫毛，是你啊","对你的喜欢，就像小肚腩，藏呀，藏不住呀","月色与雪色之间，你是第三种绝色","逐渐变得粉色的水，那是我喜欢你的颜色","我泡在你的海水里，可凉，可凉了","每一个日子都普通，除了见你的那一天。天空是粉色，喝白水有甜味，阳光软软地盖在身上，连风路过的时候好像都打着好看的卷儿","你知道吗？并不是每棵树都长得一样。有的开花，有的结果，有的可以长得很高很高……他们都不一样，就好像我们。“我们也都不一样。”你也许跑不快，长得不高，也许不聪明……但你是你，你有你独一无二的地方。你不完美的样子也很好。因为这是你之所以是你的理由","请相信自己是很美好的存在，不用怀疑这是宇宙独一无二的色彩","愿你被这个世界温柔以待，心中装满爱，卸下所有防备，自由自在","女人都是大猪蹄子，只有你散发着猪头肉的清香"]}},methods:{random:function(){return Math.floor(Math.random()*this.message.length)}},computed:{msg:function(){return this.message[this.random()]}}},ct=st,rt=(n("26b8"),Object(d["a"])(ct,it,at,!1,null,"0b34c597",null)),ot=rt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"s-animation",on:{click:t.enter}},[n("ul",{staticClass:"stacks"},[n("li",{style:{transform:t.showBg?"translateX(0)":"translateX(-50vw)"}}),n("li",{style:{transform:t.showBg?"translateX(0)":"translateX(50vw)"}})]),n("div",{class:["light-text","animate__animated",{animate__zoomOutUp:!t.showText}],attrs:{"data-spotlight":t.lightText}},[t._v(" "+t._s(t.lightText)+" ")])])},lt=[],ht=(n("caad"),n("159b"),{name:"s-animation",data:function(){return{msg1:"",msg2:"",lightText:"",showBg:!0,showText:!0,open:!0,currMonth:(new Date).getMonth()+1}},computed:{getSeason1:function(){var t=[3,4,5],e=[6,7,8],n=[9,10,11],i=[12,1,2];return t.includes(this.currMonth)?"请相信自己是很美好的存在":e.includes(this.currMonth)?"有个少女经过你的眼前":n.includes(this.currMonth)?"下次，如果再有谁对你品头论足":i.includes(this.currMonth)?"愿你被这个世界温柔以待，心中装满爱":void 0},getSeason2:function(){var t=[3,4,5],e=[6,7,8],n=[9,10,11],i=[12,1,2];return t.includes(this.currMonth)?"不用怀疑这是宇宙独一无二的色彩":e.includes(this.currMonth)?"带着你的视线，跑进了夏天":n.includes(this.currMonth)?"请你也勇敢怼回去":i.includes(this.currMonth)?"卸下所有防备，自由自在":void 0}},mounted:function(){var t=this,e=["请相信自己是很美好的存在","有个少女经过你的眼前","下次，如果再有谁对你品头论足","愿你被这个世界温柔以待，心中装满爱"],n=["不用怀疑这是宇宙独一无二的色彩！","带着你的视线，跑进了夏天~","请你也勇敢怼回去！","卸下所有防备，自由自在~"],i=["请相信自己是很美好的存在，不用怀疑这是宇宙独一无二的色彩！","有个少女经过你的眼前，带着你的视线，跑进了夏天~","下次，如果再有谁对你品头论足，请你也勇敢怼回去！","愿你被这个世界温柔以待，心中装满爱，卸下所有防备，自由自在~"],a=this.randomNum(0,3);this.msg1=e[a],this.msg2=n[a],this.lightText=i[a],this.$nextTick((function(){t.typing()}))},methods:{enter:function(){var t=this;this.showText=!1,setTimeout((function(){t.showBg=!1}),900),setTimeout((function(){t.open=!1}),2e3)},typing:function(){var t=document.querySelectorAll("#h1")[0],e=document.querySelectorAll("#h1")[1],n=0;document.querySelectorAll("#h1 span").forEach((function(t,e){n+=.1,4!==e&&10!==e&&17!==e||(n+=.3),t.style.setProperty("--delay","".concat(n,"s"))})),t.addEventListener("animationend",(function(n){n.target===document.querySelector(".one span:last-child")&&setTimeout((function(){t.removeAttribute("data-h1"),e.setAttribute("data-h1","")}),300)})),e.addEventListener("animationend",(function(t){t.target===document.querySelector(".two span:last-child")&&e.classList.add("ended")}))},randomNum:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}}}),dt=ht,mt=(n("7198"),Object(d["a"])(dt,ut,lt,!1,null,"6f7c1e7a",null)),ft=mt.exports,pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music-control"},[i("div",{staticClass:"music__main"},[i("div",{class:["music__cover",t.isPlay?"active":""],on:{click:t.play}},[i("img",{attrs:{src:n("3067")}})]),i("div",{staticClass:"music__main__timeBar"},[i("div",{staticClass:"time"},[i("span",[t._v(t._s(t.realMusicTime))]),i("span",[t._v(t._s(t.totalMusicTime))])]),i("div",{ref:"bar",staticClass:"bar",on:{click:t.handClickBar}},[i("div",{ref:"slid",staticClass:"bar__slid",on:{click:t.handClickBar}})])])]),i("div",{staticClass:"music__btn"},[i("i",{staticClass:"iconfont icon-shuaxin",on:{click:t.switchMusic}})]),i("div",{staticClass:"music__mask"}),i("audio",{ref:"music",attrs:{src:t.audioSrc}})])},vt=[],_t=(n("b680"),{name:"music-control",data:function(){return this.audioSrcs=["http://music.163.com/song/media/outer/url?id=30251317.mp3","http://music.163.com/song/media/outer/url?id=1840459406.mp3","http://music.163.com/song/media/outer/url?id=541499338.mp3"],{isPlay:!1,realMusicTime:"00:00",totalMusicTime:"00:00",audioSrc:this.audioSrcs[0]}},mounted:function(){this.watchMusicTime(),this.music.volume=.2},methods:{play:function(){this.music.paused?(this.music.play(),this.isPlay=!0):(this.music.pause(),this.isPlay=!1),this.$emit("play",this.isPlay)},handlMusicTime:function(){var t=Math.floor(this.music.currentTime),e=parseInt(t/60);e<10&&(e="0"+e);var n=Math.round(t%60);n<10&&(n="0"+n),this.realMusicTime=e+":"+n},handMusicBar:function(){var t=this.$refs.slid,e=this.music.duration,n=(this.music.currentTime/e*100).toFixed(2)+"%";t.style.width=n},handClickBar:function(t){var e=this,n=this.bar.offsetWidth,i=t.target.getBoundingClientRect(),a=t.pageX-i.left;this.music.currentTime=a/n*this.music.duration,this.$nextTick((function(){e.music.play(),e.isPlay=!0}))},switchMusic:function(){var t=this;this.isPlay=!1,this.audioSrc=this.audioSrcs[Math.floor(Math.random()*this.audioSrcs.length)],this.music.load(),this.music.addEventListener("canplaythrough",(function(){t.music.play(),t.isPlay=!0}))},watchMusicTime:function(){var t=this;this.music=this.$refs.music,this.bar=this.$refs.bar,this.music.addEventListener("timeupdate",(function(){t.handlMusicTime(),t.$nextTick((function(){t.handMusicBar()}))}),!1),this.music.addEventListener("ended",(function(){t.switchMusic()})),this.music.oncanplaythrough=function(){var e=t.music.duration,n=parseInt(e/60);n<10&&(n="0"+n);var i=Math.round(e%60);i<10&&(i="0"+i),t.totalMusicTime=n+":"+i}}}}),bt=_t,gt=(n("e0a9"),Object(d["a"])(bt,pt,vt,!1,null,"7436f812",null)),yt=gt.exports,wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-bounce"},[n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span")])}],kt={name:"MusicBounce",data:function(){return{}}},Ct=kt,Mt=(n("a7c8"),Object(d["a"])(Ct,wt,xt,!1,null,"be4d6864",null)),St=Mt.exports,Tt={name:"home",data:function(){return{isShow:!1,clickNum:0,isPlay:!1}},components:{MusicControl:yt,ColorfulBall:S,SAnimation:ft,FontSwiper:f,GirlAni:P,Search:W,ZhFooter:F,Clock:Y,Logo:nt,Note:ot,MusicBounce:St},methods:{clickSearch:function(){this.clickNum=2;for(var t=this.$refs.contentRef.children,e=0;e<t.length;e++)if(3!==e){var n=t[e];n.classList.add("animate__fadeOutUp")}},removeAnimation:function(){for(var t=this.$refs.contentRef.children,e=0;e<t.length;e++){var n=t[e];n.classList.remove("animate__fadeInUp"),n.classList.remove("animate__fadeInDown"),n.classList.remove("animate__fadeOutUp"),n.classList.remove("animate__fadeOutDown"),1===this.clickNum&&0!==e&&n.classList.add("animate__fadeInUp"),2===this.clickNum&&3!==e&&n.classList.add("animate__fadeInDown")}this.clickNum=0},showMusic:function(t){this.isPlay=t,this.clickNum=1;for(var e=this.$refs.contentRef.children,n=0;n<e.length;n++)if(0!==n){var i=e[n];i.classList.add("animate__fadeOutDown")}}}},Ot=Tt,$t=(n("7b25"),Object(d["a"])(Ot,c,r,!1,null,"771f871d",null)),jt=$t.exports,Et={name:"app",components:{Home:jt}},Pt=Et,At=(n("034f"),Object(d["a"])(Pt,a,s,!1,null,null,null)),Lt=At.exports;n("77ed"),n("a2f0");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Lt)}}).$mount("#app")},"57de":function(t,e,n){},5934:function(t,e,n){},7198:function(t,e,n){"use strict";n("c519")},"7b25":function(t,e,n){"use strict";n("bdfb")},"7c46":function(t,e,n){"use strict";n("5934")},"824b":function(t,e,n){},"85ec":function(t,e,n){},a2f0:function(t,e,n){},a7c8:function(t,e,n){"use strict";n("08c2")},b821:function(t,e,n){},bdd1:function(t,e,n){"use strict";n("1660")},bdfb:function(t,e,n){},c519:function(t,e,n){},cbe9:function(t,e,n){},e0a9:function(t,e,n){"use strict";n("2ad1")},e4d3:function(t,e,n){"use strict";n("eed3")},e791:function(t,e,n){},eed3:function(t,e,n){}});
//# sourceMappingURL=app.941a7fdc.js.map