import{r as M,o as V,c,b as e,d as L,w as T,e as _,v as p,f as s,m as y,i as f,t as v,g as h,j as N,k as U,n as d,p as A}from"./index-BgoIZPg-.js";import{u as B,c as g}from"./index.esm-zHvk0GO9.js";const S={class:"layui-container fly-marginTop"},q={class:"fly-panel fly-panel-user",pad20:""},D={class:"layui-tab layui-tab-brief","lay-filter":"user"},F={class:"layui-tab-title"},H=e("li",{class:"layui-this"}," 找回密码 ",-1),O={id:"LAY_ucm",class:"layui-form layui-tab-content",style:{padding:"20px 0"}},j={class:"layui-tab-item layui-show"},E={class:"layui-form layui-form-pane"},P={method:"post"},R={class:"layui-form-item"},Y=e("label",{for:"L_email",class:"layui-form-label"},"用户名",-1),$={class:"layui-input-inline"},z={class:"layui-form-mid"},G={key:0,class:"text-red-600"},I={class:"layui-form-item"},J={class:"layui-row"},K=e("label",{for:"L_vercode",class:"layui-form-label"},"验证码",-1),Q={class:"layui-input-inline"},W={class:""},X=["innerHTML"],Z={class:"layui-form-mid"},ee={key:0,class:"text-red-600"},oe={__name:"forget",setup(se){const r=M(""),{defineField:u,errors:t,validate:b}=B({validationSchema:{username:g().required({message:"请输入用户名"}).email({message:"请输入正确的邮箱"}),code:g().required({message:"请输入验证码"}).min(4,{message:"验证码只支持4位"}).max(4,{message:"验证码只支持4位"})}}),[o,x]=u("username",{validateOnModelUpdate:!0}),[l,k]=u("code",{validateOnModelUpdate:!0}),m=async()=>{const i=await N();r.value=i},w=async()=>{if(!await b())return!1;console.log("submit")};return V(()=>{m()}),(i,a)=>{const C=U("router-link");return d(),c("div",S,[e("div",q,[e("div",D,[e("ul",F,[e("li",null,[L(C,{to:{name:"login"}},{default:T(()=>[A("登入")]),_:1})]),H]),e("div",O,[e("div",j,[e("div",E,[e("form",P,[e("div",R,[Y,e("div",$,[_(e("input",y({"onUpdate:modelValue":a[0]||(a[0]=n=>f(o)?o.value=n:null),type:"text",name:"username"},s(x),{placeholder:"请输入用户名",autocomplete:"off",class:"layui-input"}),null,16),[[p,s(o)]])]),e("div",z,[s(t).username?(d(),c("span",G,v(s(t).username.message),1)):h("",!0)])]),e("div",I,[e("div",J,[K,e("div",Q,[_(e("input",y({"onUpdate:modelValue":a[1]||(a[1]=n=>f(l)?l.value=n:null),type:"text",name:"code"},s(k),{placeholder:"请输入验证码",autocomplete:"off",class:"layui-input"}),null,16),[[p,s(l)]])]),e("div",W,[e("span",{class:"svg",onClick:m,innerHTML:r.value},null,8,X)])]),e("div",Z,[s(t).code?(d(),c("span",ee,v(s(t).code.message),1)):h("",!0)])]),e("div",{class:"layui-form-item"},[e("button",{type:"button",class:"layui-btn",alert:"1",onClick:w},"提交")])])])])])])])])}}};export{oe as default};
