import{r as V,l as S,a as B,b as D,c as l,d as s,e as $,w as H,f as _,v as p,u as e,m as f,i as y,t as v,h,j as O,o as i,k as j}from"./index-hKYUDb57.js";import{u as E,c as w,a as G,g as Y,r as z}from"./index.esm-DgPJVmqa.js";import{u as I,v as J}from"./global-B-KuY4hQ.js";const K={class:"layui-container fly-marginTop"},W={class:"fly-panel fly-panel-user",pad20:""},X={class:"layui-tab layui-tab-brief","lay-filter":"user"},Z={class:"layui-tab-title"},ss=s("li",{class:"layui-this"},"注册",-1),es={class:"layui-form layui-tab-content",id:"LAY_ucm",style:{padding:"20px 0"}},as={class:"layui-tab-item layui-show"},os={class:"layui-form layui-form-pane"},ts={class:"layui-form-item"},ls={class:"layui-row"},is=s("label",{for:"L_email",class:"layui-form-label"},"用户名",-1),ns={class:"layui-input-inline"},rs=s("div",{class:"layui-form-mid layui-word-aux"}," 将会成为您唯一的登入名 ",-1),cs={class:"layui-row"},ds={key:0,class:"text-red-600"},us={class:"layui-form-item"},ms=s("label",{for:"nickname",class:"layui-form-label"},"昵称",-1),_s={class:"layui-input-inline"},ps={class:"layui-form-mid"},fs={key:0,class:"text-red-600"},ys={class:"layui-form-item"},vs={class:"layui-row"},hs=s("label",{for:"L_pass",class:"layui-form-label"},"密码",-1),ws={class:"layui-input-inline"},gs=s("div",{class:"layui-form-mid layui-word-aux"},"6到16个字符",-1),ks={class:"layui-row"},bs={key:0,class:"text-red-600"},xs={class:"layui-form-item"},Ps={class:"layui-row"},Vs=s("label",{for:"confirmPassword",class:"layui-form-label"},"确认密码",-1),As={class:"layui-input-inline"},Cs={class:"layui-row"},Ls={key:0,class:"text-red-600"},Ts={class:"layui-form-item"},Us={class:"layui-row"},qs=s("label",{for:"L_vercode",class:"layui-form-label"},"验证码",-1),Fs={class:"layui-input-inline"},Ms={class:""},Rs=["innerHTML"],Ns={class:"layui-form-mid"},Qs={key:0,class:"text-red-600"},Ss=s("div",{class:"layui-form-item fly-form-app"},[s("span",null,"或者直接使用社交账号快捷注册"),s("a",{href:"",onclick:"layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})",class:"iconfont icon-qq",title:"QQ登入"}),s("a",{href:"",onclick:"layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})",class:"iconfont icon-weibo",title:"微博登入"})],-1),Os={__name:"register",setup(Bs){const x=V(""),g=I(),A=S(),P=V(null),{defineField:n,errors:o,validate:C,resetForm:L}=E({validationSchema:{username:w().required({message:"请输入用户名"}).email({message:"请输入正确的邮箱"}),nickname:w().optional().min(2,{message:"昵称不能少于2位"}).max(10,{message:"昵称不能超过10位"}),password:w().required({message:"请输入密码"}).min(6,{message:"密码不能少于6位"}).max(16,{message:"密码不能超过16位"}),confirmPassword:w().oneOf([G("$password")],{message:"两次输入的密码不一致"}),code:w().required({message:"请输入验证码"}).min(4,{message:"验证码只支持4位"}).max(4,{message:"验证码只支持4位"})}}),[r,T]=n("username",{validateOnModelUpdate:!0}),[c,U]=n("nickname"),[d,q]=n("password"),[u,F]=n("confirmPassword"),[m,M]=n("code"),R=async()=>{const k=g.sid,a=await Y(k);x.value=a},N=()=>{r.value="",c.value="",d.value="",u.value="",m.value="",console.log("resetFields",P.value),L()},Q=async k=>{console.log("register"),k.preventDefault();const{valid:a}=await C();if(console.log("valid",a),!a)return!1;const b={username:r.value,nickname:c.value,password:d.value,confirmPassword:u.value,code:m.value,sid:g.sid};console.log("params",b),await z(b),O("注册成功"),N(),setTimeout(()=>{A.push({path:"/login"})},1e3)};return B(()=>{g.sid||g.setSid(J()),R()}),(k,a)=>{const b=D("router-link");return i(),l("div",K,[s("div",W,[s("div",X,[s("ul",Z,[s("li",null,[$(b,{to:{name:"login"}},{default:H(()=>[j("登入")]),_:1})]),ss]),s("div",es,[s("div",as,[s("div",os,[s("form",{method:"post",ref_key:"formRef",ref:P},[s("div",ts,[s("div",ls,[is,s("div",ns,[_(s("input",f({type:"text",name:"username","onUpdate:modelValue":a[0]||(a[0]=t=>y(r)?r.value=t:null)},e(T),{placeholder:"请输入用户名",autocomplete:"off",class:"layui-input"}),null,16),[[p,e(r)]])]),rs]),s("div",cs,[e(o).username?(i(),l("span",ds,v(e(o).username.message),1)):h("",!0)])]),s("div",us,[ms,s("div",_s,[_(s("input",f({type:"text",name:"nickname","onUpdate:modelValue":a[1]||(a[1]=t=>y(c)?c.value=t:null)},e(U),{placeholder:"请输入昵称",autocomplete:"off",class:"layui-input"}),null,16),[[p,e(c)]])]),s("div",ps,[e(o).nickname?(i(),l("span",fs,v(e(o).nickname.message),1)):h("",!0)])]),s("div",ys,[s("div",vs,[hs,s("div",ws,[_(s("input",f({type:"password",name:"password","onUpdate:modelValue":a[2]||(a[2]=t=>y(d)?d.value=t:null)},e(q),{placeholder:"请输入密码",autocomplete:"off",class:"layui-input"}),null,16),[[p,e(d)]])]),gs]),s("div",ks,[e(o).password?(i(),l("span",bs,v(e(o).password.message),1)):h("",!0)])]),s("div",xs,[s("div",Ps,[Vs,s("div",As,[_(s("input",f({type:"password",name:"confirmPassword","onUpdate:modelValue":a[3]||(a[3]=t=>y(u)?u.value=t:null)},e(F),{placeholder:"请输入密码",autocomplete:"off",class:"layui-input"}),null,16),[[p,e(u)]])])]),s("div",Cs,[e(o).confirmPassword?(i(),l("span",Ls,v(e(o).confirmPassword.message),1)):h("",!0)])]),s("div",Ts,[s("div",Us,[qs,s("div",Fs,[_(s("input",f({type:"text",name:"code","onUpdate:modelValue":a[4]||(a[4]=t=>y(m)?m.value=t:null)},e(M),{placeholder:"请输入验证码",autocomplete:"off",class:"layui-input"}),null,16),[[p,e(m)]])]),s("div",Ms,[s("span",{class:"svg",innerHTML:x.value},null,8,Rs)])]),s("div",Ns,[e(o).code?(i(),l("span",Qs,v(e(o).code.message),1)):h("",!0)])]),s("div",{class:"layui-form-item"},[s("button",{class:"layui-btn",type:"button",onClick:Q},"立即注册")]),Ss],512)])])])])])])}}};export{Os as default};
