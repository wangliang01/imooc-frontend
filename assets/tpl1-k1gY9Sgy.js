import{L as h,g,a as v,_ as $,b as k,A as x,c as L}from"./Links-B-4oz3iu.js";import{r as a,o as p,k as o,c,d as e,g as w,b as s,G as b,H as S,t as A}from"./index-CCZXz4s1.js";import{S as B}from"./Sign-Cj71YAeW.js";import"./request-CR1ppc3G.js";const N={key:0,class:"fly-panel"},T=s("div",{class:"fly-panel-title fly-filter"},[s("a",null,"置顶"),s("a",{id:"LAY_goSignin",href:"#signin",class:"layui-hide-sm layui-show-xs-block fly-right",style:{color:"#ff5722"}},"去签到")],-1),V={__name:"Top",setup(_){const t=a([]),l=a(""),r=a("created"),i=a("1"),n=a(1),f=a(10),m=a("index"),y=async()=>{const u={type:i.value,page:n.value,size:f.value,category:m.value,status:l.value,sort:r.value},d=await g(u);t.value=d.data,console.log("🚀 ~ const_getList= ~ list.value:",t.value)};return p(()=>{y()}),(u,d)=>t.value.length>0?(o(),c("div",N,[T,e(h,{list:t.value,"is-show":!1},null,8,["list"])])):w("",!0)}},z={class:"fly-panel"},q=s("h3",{class:"fly-panel-title"},"温馨通道",-1),C={class:"fly-panel-main layui-row"},D={class:"layui-clear imooc-quick"},E=["href"],F={__name:"Tips",setup(_){const t=a([]);return p(async()=>{const l=await v();t.value=l.data}),(l,r)=>(o(),c("div",z,[q,s("div",C,[s("ul",D,[(o(!0),c(b,null,S(t.value,(i,n)=>(o(),c("li",{key:"tips"+n,class:"layui-col-xs6"},[s("a",{href:i.link,target:"_blank"},A(i.title),9,E)]))),128))])])]))}},G={class:"layui-container"},H={class:"layui-row flex gap-4"},I={class:"layui-col-md8"},M={class:"layui-col-md4"},O={__name:"tpl1",setup(_){return(t,l)=>(o(),c("div",G,[s("div",H,[s("div",I,[e(V),e($)]),s("div",M,[e(F),e(B),e(k),e(x),e(L)])])]))}};export{O as default};
