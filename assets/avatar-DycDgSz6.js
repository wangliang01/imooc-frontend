import{_ as o,c as l,b as a,l as t,k as n}from"./index-CCZXz4s1.js";const c={},d={class:"layui-form layui-form-pane layui-tab-item layui-show"},r={class:"layui-form-item"},p={class:"avatar-add"},u=a("p",null,"建议尺寸168*168，支持jpg、png、gif，最大不能超过50KB",-1),_=a("label",{for:"pic",class:"layui-btn upload-img"},[a("i",{class:"layui-icon"},""),t("上传头像 ")],-1),m=["src"],f=a("span",{class:"loading"},null,-1);function g(s,e){return n(),l("div",d,[a("div",r,[a("div",p,[u,_,a("input",{id:"pic",type:"file",name:"file",accept:"image/png, image/gif, image/jpg",onChange:e[0]||(e[0]=(...i)=>s.upload&&s.upload(...i))},null,32),a("img",{src:s.pic},null,8,m),f])])])}const y=o(c,[["render",g]]);export{y as default};
