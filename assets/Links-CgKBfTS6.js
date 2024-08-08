import{_ as ht,k as gt,l as Mt,a as _t,o as x,c as L,b as a,F as it,e as ot,d as tt,w as at,t as B,f as et,g as ct,j as dt,v as ft,n as P,m as U,p as kt,q as bt,r as A,i as wt}from"./index-B-j0TeU-.js";import{r as Dt}from"./request-CeBTa6qP.js";var lt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pt(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var mt={exports:{}};(function(p,H){(function(f,v){p.exports=v()})(lt,function(){var f=1e3,v=6e4,$=36e5,m="millisecond",h="second",w="minute",c="hour",u="day",g="week",l="month",N="quarter",Y="year",D="date",y="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},R=function(r,n,t){var s=String(r);return!s||s.length>=n?r:""+Array(n+1-s.length).join(t)+r},I={s:R,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),s=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+R(s,2,"0")+":"+R(e,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var s=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(s,l),i=t-e<0,o=n.clone().add(s+(i?-1:1),l);return+(-(s+(t-e)/(i?e-o:o-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:l,y:Y,w:g,d:u,D,h:c,m:w,s:h,ms:m,Q:N}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},O="en",T={};T[O]=Q;var q="$isDayjsObject",F=function(r){return r instanceof st||!(!r||!r[q])},nt=function r(n,t,s){var e;if(!n)return O;if(typeof n=="string"){var i=n.toLowerCase();T[i]&&(e=i),t&&(T[i]=t,e=i);var o=n.split("-");if(!e&&o.length>1)return r(o[0])}else{var _=n.name;T[_]=n,e=_}return!s&&e&&(O=e),e||!s&&O},k=function(r,n){if(F(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new st(t)},d=I;d.l=nt,d.i=F,d.w=function(r,n){return k(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var st=function(){function r(t){this.$L=nt(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[q]=!0}var n=r.prototype;return n.parse=function(t){this.$d=function(s){var e=s.date,i=s.utc;if(e===null)return new Date(NaN);if(d.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var o=e.match(E);if(o){var _=o[2]-1||0,M=(o[7]||"0").substring(0,3);return i?new Date(Date.UTC(o[1],_,o[3]||1,o[4]||0,o[5]||0,o[6]||0,M)):new Date(o[1],_,o[3]||1,o[4]||0,o[5]||0,o[6]||0,M)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return d},n.isValid=function(){return this.$d.toString()!==y},n.isSame=function(t,s){var e=k(t);return this.startOf(s)<=e&&e<=this.endOf(s)},n.isAfter=function(t,s){return k(t)<this.startOf(s)},n.isBefore=function(t,s){return this.endOf(s)<k(t)},n.$g=function(t,s,e){return d.u(t)?this[s]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,s){var e=this,i=!!d.u(s)||s,o=d.p(t),_=function(V,C){var z=d.w(e.$u?Date.UTC(e.$y,C,V):new Date(e.$y,C,V),e);return i?z:z.endOf(u)},M=function(V,C){return d.w(e.toDate()[V].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(C)),e)},b=this.$W,S=this.$M,j=this.$D,J="set"+(this.$u?"UTC":"");switch(o){case Y:return i?_(1,0):_(31,11);case l:return i?_(1,S):_(0,S+1);case g:var W=this.$locale().weekStart||0,K=(b<W?b+7:b)-W;return _(i?j-K:j+(6-K),S);case u:case D:return M(J+"Hours",0);case c:return M(J+"Minutes",1);case w:return M(J+"Seconds",2);case h:return M(J+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,s){var e,i=d.p(t),o="set"+(this.$u?"UTC":""),_=(e={},e[u]=o+"Date",e[D]=o+"Date",e[l]=o+"Month",e[Y]=o+"FullYear",e[c]=o+"Hours",e[w]=o+"Minutes",e[h]=o+"Seconds",e[m]=o+"Milliseconds",e)[i],M=i===u?this.$D+(s-this.$W):s;if(i===l||i===Y){var b=this.clone().set(D,1);b.$d[_](M),b.init(),this.$d=b.set(D,Math.min(this.$D,b.daysInMonth())).$d}else _&&this.$d[_](M);return this.init(),this},n.set=function(t,s){return this.clone().$set(t,s)},n.get=function(t){return this[d.p(t)]()},n.add=function(t,s){var e,i=this;t=Number(t);var o=d.p(s),_=function(S){var j=k(i);return d.w(j.date(j.date()+Math.round(S*t)),i)};if(o===l)return this.set(l,this.$M+t);if(o===Y)return this.set(Y,this.$y+t);if(o===u)return _(1);if(o===g)return _(7);var M=(e={},e[w]=v,e[c]=$,e[h]=f,e)[o]||1,b=this.$d.getTime()+t*M;return d.w(b,this)},n.subtract=function(t,s){return this.add(-1*t,s)},n.format=function(t){var s=this,e=this.$locale();if(!this.isValid())return e.invalidDate||y;var i=t||"YYYY-MM-DDTHH:mm:ssZ",o=d.z(this),_=this.$H,M=this.$m,b=this.$M,S=e.weekdays,j=e.months,J=e.meridiem,W=function(C,z,X,rt){return C&&(C[z]||C(s,i))||X[z].slice(0,rt)},K=function(C){return d.s(_%12||12,C,"0")},V=J||function(C,z,X){var rt=C<12?"AM":"PM";return X?rt.toLowerCase():rt};return i.replace(G,function(C,z){return z||function(X){switch(X){case"YY":return String(s.$y).slice(-2);case"YYYY":return d.s(s.$y,4,"0");case"M":return b+1;case"MM":return d.s(b+1,2,"0");case"MMM":return W(e.monthsShort,b,j,3);case"MMMM":return W(j,b);case"D":return s.$D;case"DD":return d.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return W(e.weekdaysMin,s.$W,S,2);case"ddd":return W(e.weekdaysShort,s.$W,S,3);case"dddd":return S[s.$W];case"H":return String(_);case"HH":return d.s(_,2,"0");case"h":return K(1);case"hh":return K(2);case"a":return V(_,M,!0);case"A":return V(_,M,!1);case"m":return String(M);case"mm":return d.s(M,2,"0");case"s":return String(s.$s);case"ss":return d.s(s.$s,2,"0");case"SSS":return d.s(s.$ms,3,"0");case"Z":return o}return null}(C)||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,s,e){var i,o=this,_=d.p(s),M=k(t),b=(M.utcOffset()-this.utcOffset())*v,S=this-M,j=function(){return d.m(o,M)};switch(_){case Y:i=j()/12;break;case l:i=j();break;case N:i=j()/3;break;case g:i=(S-b)/6048e5;break;case u:i=(S-b)/864e5;break;case c:i=S/$;break;case w:i=S/v;break;case h:i=S/f;break;default:i=S}return e?i:d.a(i)},n.daysInMonth=function(){return this.endOf(l).$D},n.$locale=function(){return T[this.$L]},n.locale=function(t,s){if(!t)return this.$L;var e=this.clone(),i=nt(t,s,!0);return i&&(e.$L=i),e},n.clone=function(){return d.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),ut=st.prototype;return k.prototype=ut,[["$ms",m],["$s",h],["$m",w],["$H",c],["$W",u],["$M",l],["$y",Y],["$D",D]].forEach(function(r){ut[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),k.extend=function(r,n){return r.$i||(r(n,st,k),r.$i=!0),k},k.locale=nt,k.isDayjs=F,k.unix=function(r){return k(1e3*r)},k.en=T[O],k.Ls=T,k.p={},k})})(mt);var yt=mt.exports;const Z=pt(yt);var vt={exports:{}};(function(p,H){(function(f,v){p.exports=v()})(lt,function(){return function(f,v,$){f=f||{};var m=v.prototype,h={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function w(u,g,l,N){return m.fromToBase(u,g,l,N)}$.en.relativeTime=h,m.fromToBase=function(u,g,l,N,Y){for(var D,y,E,G=l.$locale().relativeTime||h,Q=f.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],R=Q.length,I=0;I<R;I+=1){var O=Q[I];O.d&&(D=N?$(u).diff(l,O.d,!0):l.diff(u,O.d,!0));var T=(f.rounding||Math.round)(Math.abs(D));if(E=D>0,T<=O.r||!O.r){T<=1&&I>0&&(O=Q[I-1]);var q=G[O.l];Y&&(T=Y(""+T)),y=typeof q=="string"?q.replace("%d",T):q(T,g,O.l,E);break}}if(g)return y;var F=E?G.future:G.past;return typeof F=="function"?F(y):F.replace("%s",y)},m.to=function(u,g){return w(u,g,this,!0)},m.from=function(u,g){return w(u,g,this)};var c=function(u){return u.$u?$.utc():$()};m.toNow=function(u){return this.to(c(this),u)},m.fromNow=function(u){return this.from(c(this),u)}}})})(vt);var Yt=vt.exports;const St=pt(Yt);var xt={exports:{}};(function(p,H){(function(f,v){p.exports=v(yt)})(lt,function(f){function v(h){return h&&typeof h=="object"&&"default"in h?h:{default:h}}var $=v(f),m={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(h,w){return w==="W"?h+"周":h+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(h,w){var c=100*h+w;return c<600?"凌晨":c<900?"早上":c<1100?"上午":c<1300?"中午":c<1800?"下午":"晚上"}};return $.default.locale(m,null,!0),m})})(xt);const $t=p=>(kt("data-v-c4b7260a"),p=p(),bt(),p),Lt={class:"fly-list"},Ot=["src"],Tt={class:"flex items-center"},Ct={class:"layui-badge"},Ht={class:"fly-list-info flex items-center"},Et={key:0,class:"layui-badge fly-badge-vip"},jt={class:"fly-list-kiss layui-hide-xs",title:"悬赏飞吻"},Bt=$t(()=>a("i",{class:"iconfont icon-kiss"},null,-1)),Nt={class:"layui-badge fly-badge-accept layui-hide-xs"},At={class:"fly-list-nums"},zt=$t(()=>a("i",{class:"iconfont icon-pinglun1",title:"回答"},null,-1)),It={class:"fly-list-badge"},Ft={key:0,style:{"text-align":"center"}},Wt={key:0,class:"laypage-main"},Vt={key:1,class:"nomore gray"},Pt={__name:"ListItems",props:{list:{default:()=>[],type:Array},isShow:{default:!0,type:Boolean},isEnd:{default:!1,type:Boolean}},emits:["nextpage"],setup(p,{emit:H}){Z.extend(St),Z.locale("zh-cn");const f=p;gt(()=>f.list,c=>{console.log("🚀 ~ watch ~ value:",c)},{immediate:!0,deep:!0});const v=H,$={index:"",ask:"提问",share:"分享",logs:"动态",notice:"公告",advise:"建议",discuss:"交流"},m=Mt(()=>{const c=[...f.list];return console.log("🚀 ~ items ~ clonedList:",c),c.forEach(u=>{u.category=$[u.category]||u.category}),c});function h(){v("nextpage")}const w=c=>Z(c).isBefore(Z().subtract(7,"day"))?Z(c).format("YYYY-MM-DD"):Z(c).fromNow();return(c,u)=>{const g=_t("router-link");return x(),L("div",null,[a("ul",Lt,[(x(!0),L(it,null,ot(m.value,(l,N)=>(x(),L("li",{key:"listitem"+N},[tt(g,{class:"fly-avatar borderd"},{default:at(()=>[a("img",{src:l.user.avatar?l.user.avatar:"/img/header.jpg",alt:"贤心"},null,8,Ot)]),_:2},1024),a("h2",Tt,[a("a",Ct,B(l.category),1),tt(g,null,{default:at(()=>[et(B(l.title),1)]),_:2},1024)]),a("div",Ht,[tt(g,{to:{name:"home",params:{uid:l.user.id}}},{default:at(()=>[a("cite",null,B(l.user.nickname),1),l.user.vip!=="0"?(x(),L("i",Et,B("VIP"+l.user.vip),1)):ct("",!0)]),_:2},1032,["to"]),a("span",null,B(w(l.created)),1),a("span",jt,[Bt,et(" "+B(l.fav),1)]),dt(a("span",Nt,"已结",512),[[ft,l.status!=="0"]]),a("span",At,[zt,et(" "+B(l.answerNum),1)])]),dt(a("div",It,[(x(!0),L(it,null,ot(l.tags,(Y,D)=>(x(),L("span",{class:P(["layui-badge",Y.class]),key:"tag"+D},B(Y.name),3))),128))],512),[[ft,l.tags.length>0&&l.tags[0].name!==""]])]))),128))]),p.isShow?(x(),L("div",Ft,[p.isEnd?(x(),L("div",Vt,"没有更多了")):(x(),L("div",Wt,[a("a",{onClick:U(h,["prevent"]),class:"laypage-next cursor-pointer"},"更多求解")]))])):ct("",!0)])}}},Ut=ht(Pt,[["__scopeId","data-v-c4b7260a"]]);function qt(p){return Dt.get("/public/list",p)}const Jt={class:"fly-panel",style:{"margin-bottom":"0"}},Zt={class:"fly-panel-title fly-filter"},Gt=a("span",{class:"fly-mid"},null,-1),Qt=a("span",{class:"fly-mid"},null,-1),Rt=a("span",{class:"fly-mid"},null,-1),Kt={class:"fly-filter-right layui-hide-xs"},Xt=a("span",{class:"fly-mid"},null,-1),ve={__name:"List",setup(p){const H=A([]),f=A(""),v=A("created"),$=A(""),m=A(!1),h=A("0"),w=A(1),c=A(10),u=A("index"),g=A(!1),l=D=>{switch(D){case 0:f.value="0",$.value="";break;case 1:f.value="1",$.value="";break;case 2:f.value="",$.value="精华";break;case 3:v.value="created";break;case 4:v.value="answer";break;default:f.value="",$.value="";break}},N=()=>{console.log("handleNextPage")},Y=async()=>{if(g.value||m.value)return;g.value=!0;const D={type:h.value,page:w.value,size:c.value,category:u.value,status:f.value,sort:v.value},y=await qt(D).finally(()=>{g.value=!1});H.value=y.data,y.data.length<c.value&&(m.value=!0),console.log("🚀 ~ const_getList= ~  list.value:",H.value)};return wt(()=>{Y()}),(D,y)=>(x(),L("div",Jt,[a("div",Zt,[a("a",{class:P([{"layui-this":f.value===""&&$.value===""},"cursor-pointer"]),onClick:y[0]||(y[0]=U(E=>l(),["prevent"]))},"综合",2),Gt,a("a",{class:P([{"layui-this":f.value==="0"},"cursor-pointer"]),onClick:y[1]||(y[1]=U(E=>l(0),["prevent"]))},"未结",2),Qt,a("a",{class:P([{"layui-this":f.value==="1"},"cursor-pointer"]),onClick:y[2]||(y[2]=U(E=>l(1),["prevent"]))},"已结",2),Rt,a("a",{class:P([{"layui-this":f.value===""&&$.value==="精华"},"cursor-pointer"]),onClick:y[3]||(y[3]=U(E=>l(2),["prevent"]))},"精华",2),a("span",Kt,[a("a",{class:P([{"layui-this":v.value==="created"},"cursor-pointer"]),onClick:y[4]||(y[4]=U(E=>l(3),["prevent"]))},"按最新",2),Xt,a("a",{class:P([{"layui-this":v.value==="answer"},"cursor-pointer"]),onClick:y[5]||(y[5]=U(E=>l(4),["prevent"]))},"按热议",2)])]),tt(Ut,{list:H.value,isEnd:m.value,onNextpage:y[6]||(y[6]=E=>N())},null,8,["list","isEnd"])]))}},te={class:"fly-panel fly-list-one"},ee=a("dt",{class:"fly-panel-title"},"本周热议",-1),ne=a("i",{class:"iconfont icon-pinglun1"},null,-1),$e={__name:"HotList",setup(p){const H=[];return(f,v)=>{const $=_t("router-link");return x(),L("div",null,[a("dl",te,[ee,(x(),L(it,null,ot(H,(m,h)=>a("dd",{key:"hotlist"+h},[tt($,{to:{name:"detail",params:{tid:m._id}}},{default:at(()=>[et(B(m.title),1)]),_:2},1032,["to"]),a("span",null,[ne,et(" "+B(m.answer),1)])])),64))])])}}},se={},re={class:"fly-panel"},ae=a("div",{class:"fly-panel-title"},"在线课程",-1),ie=a("div",{class:"fly-panel-main"},[a("a",{href:"https://class.imooc.com/sale/webfullstack?mc_marking=1eb5ce0be2ada8da4a6387b391f00b92&mc_channel=syzcjj1",target:"_blank",class:"fly-zanzhu",style:{"background-color":"#5FB878"}},"大前端-更高层面进阶前端"),a("a",{href:"https://www.imooc.com/learn/1091",target:"_blank",class:"fly-zanzhu",style:{"background-color":"#5FB878"}},"3小时速成 Vue2.x 核心技术")],-1),oe=[ae,ie];function le(p,H){return x(),L("div",re,oe)}const ge=ht(se,[["render",le]]),ue={class:"fly-panel fly-link"},ce=a("h3",{class:"fly-panel-title"},"友情链接",-1),de={class:"fly-panel-main"},fe=["href"],he=a("dd",null,null,-1),_e=a("dd",null,[a("a",{href:"mailto:brian@toimc.com?subject=%E7%94%B3%E8%AF%B7Fly%E7%A4%BE%E5%8C%BA%E5%8F%8B%E9%93%BE",class:"fly-link"},"申请友链")],-1),pe=a("dd",null,null,-1),Me={__name:"Links",setup(p){const H=[];return(f,v)=>(x(),L("div",ue,[ce,a("dl",de,[(x(),L(it,null,ot(H,($,m)=>a("dd",{key:"links"+m},[a("a",{href:$.link,target:"_blank"},B($.title),9,fe)])),64)),he,_e,pe])]))}};export{ge as A,Ut as L,ve as _,$e as a,Me as b,qt as g};
