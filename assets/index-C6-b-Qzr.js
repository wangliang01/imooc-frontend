import{r as f,u as g,B as w,k as m,n as i,c as n,b as s,d as e,w as l,C as r,F as _,D as k,E as v,p as o,t as N,g as h}from"./index-D-FjaANc.js";const b={class:"fly-panel fly-column"},B={class:"layui-container"},C={class:"layui-clear"},L=s("a",null,"首页",-1),V=[L],S={key:0,class:"layui-badge-dot"},D=s("li",{class:"layui-hide-xs layui-hide-sm layui-show-md-inline-block"},[s("span",{class:"fly-mid"})],-1),E={class:"layui-hide-xs layui-hide-sm layui-show-md-inline-block"},F={class:"layui-hide-xs layui-hide-sm layui-show-md-inline-block"},$={class:"px-5 fly-column-right layui-hide-xs"},z=s("span",{class:"fly-search"},[s("i",{class:"layui-icon"},"")],-1),P={class:"layui-hide-sm layui-show-xs-block",style:{"margin-top":"-10px","padding-bottom":"10px","text-align":"center"}},T={__name:"Panel",setup(y){const d=f([{name:"提问",path:"/index/ask",isNew:!1},{name:"分享",path:"/index/share",isNew:!0},{name:"讨论",path:"/index/discuss",isNew:!1},{name:"建议",path:"/index/advise",isNew:!1},{name:"公告",path:"/index/notice",isNew:!1},{name:"动态",path:"/index/logs",isNew:!1}]),c=g();console.log(c.isLogin);const u=w(()=>c.isLogin);return(j,q)=>{const a=m("router-link");return i(),n("div",b,[s("div",B,[s("ul",C,[e(a,{to:"/"},{default:l(({isExactActive:t})=>[s("li",{class:r([{"layui-this":t},"layui-hide-xs layui-col-sm4 layui-col-md3 layui-col-lg1"])},V,2)]),_:1}),(i(!0),n(_,null,k(d.value,(t,p)=>(i(),v(a,{key:"panel"+p,to:t.path},{default:l(({isExactActive:x})=>[s("li",{class:r([{"layui-this":x},"layui-col-sm4 layui-col-md3 layui-col-lg1"])},[s("a",null,[o(N(t.name)+" ",1),t.isNew?(i(),n("span",S)):h("",!0)])],2)]),_:2},1032,["to"]))),128)),D,u.value?(i(),n(_,{key:0},[s("li",E,[e(a,null,{default:l(()=>[o("我发表的贴")]),_:1})]),s("li",F,[e(a,null,{default:l(()=>[o("我收藏的贴")]),_:1})])],64)):h("",!0)]),s("div",$,[z,e(a,{class:"layui-btn"},{default:l(()=>[o("发表新帖")]),_:1})]),s("div",P,[e(a,{to:"/index/post",class:"layui-btn"},{default:l(()=>[o("发表新帖")]),_:1})])])])}}},U={class:"home"},G={__name:"index",setup(y){return(d,c)=>{const u=m("router-view");return i(),n("div",U,[e(T),e(u)])}}};export{G as default};
