import{_ as r,o as t,c as e,b as s,F as _,e as u,t as o,f as l,i as y,v as p,d as a}from"./index-_5IH-Uls.js";import{_ as h,a as m,A as g,b as $}from"./Links-BWpsWIA5.js";const v={},k={class:"fly-panel"},b=s("div",{class:"fly-panel-title fly-filter"},[s("a",null,"置顶"),s("a",{href:"#signin",class:"layui-hide-sm layui-show-xs-block fly-right",id:"LAY_goSignin",style:{color:"#FF5722"}},"去签到")],-1),w=[b];function A(i,n){return t(),e("div",k,w)}const L=r(v,[["render",A]]),S={class:"fly-panel"},T=s("h3",{class:"fly-panel-title"},"温馨通道",-1),F={class:"fly-panel-main layui-row"},Y={class:"layui-clear imooc-quick"},B=["href"],C={__name:"Tips",setup(i){const n=[];return(c,P)=>(t(),e("div",S,[T,s("div",F,[s("ul",Y,[(t(),e(_,null,u(n,(d,f)=>s("li",{class:"layui-col-xs6",key:"tips"+f},[s("a",{href:d.link,target:"_blank"},o(d.title),9,B)])),64))])])]))}},I={},N={class:"fly-panel fly-signin"},V={class:"fly-panel-title"},j=s("i",{class:"fly-mid"},null,-1),D=s("i",{class:"fly-mid"},null,-1),q=s("span",{class:"layui-badge-dot"},null,-1),E={class:"fly-signin-days"},H={class:"fly-panel-main fly-signin-main"},x={class:"layui-btn layui-btn-disabled"};function z(i,n){return t(),e("div",N,[s("div",V,[l(" 签到 "),j,s("a",{href:"javascript:;",class:"fly-link",id:"LAY_signinHelp",onClick:n[0]||(n[0]=c=>i.showInfo())},"说明"),D,s("a",{href:"javascript:;",class:"fly-link",id:"LAY_signinTop",onClick:n[1]||(n[1]=c=>i.showTop())},[l(" 活跃榜 "),q]),y(s("span",E,[l(" 已连续签到 "),s("cite",null,o(i.count),1),l("天 ")],512),[[p,i.isSign||i.isLogin]])]),s("div",H,[i.isSign?(t(),e(_,{key:1},[s("button",x,o(i.msg),1),s("span",null,[l(" 获得了 "),s("cite",null,o(i.favs),1),l("飞吻 ")])],64)):(t(),e(_,{key:0},[s("button",{class:"layui-btn layui-btn-danger",id:"LAY_signin",onClick:n[2]||(n[2]=c=>i.sign())},"今日签到"),s("span",null,[l(" 可获得 "),s("cite",null,o(i.favs),1),l("飞吻 ")])],64))])])}const G=r(I,[["render",z]]),J={class:"layui-container"},K={class:"layui-row flex gap-4"},M={class:"layui-col-md8"},O={class:"layui-col-md4"},U={__name:"tpl1",setup(i){return(n,c)=>(t(),e("div",J,[s("div",K,[s("div",M,[a(L),a(h)]),s("div",O,[a(C),a(G),a(m),a(g),a($)])])]))}};export{U as default};
