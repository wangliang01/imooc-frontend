import{_ as d,J as _,c as a,b as e,G as m,H as p,e as i,K as h,d as g,j as y,k as n,t as s,l as b}from"./index-1yECeLeH.js";const f={},v={class:"fly-panel fly-panel-user !mb-0",pad20:""},k={id:"LAY_msg",class:"layui-tab layui-tab-brief","lay-filter":"user",style:{"margin-top":"15px"}},C={id:"LAY_minemsg",style:{"margin-top":"10px"}},A={class:"mine-msg"},j={class:"layui-elem-quote"},L={href:"/jump?username=Absolutely",target:"_blank"},B={target:"_blank",href:"/jie/8153.html/page/0/#item-1489505778669"},D=["onClick"];function N(t,o){const r=y("imooc-page"),c=_("richtext");return n(),a("div",v,[e("div",k,[e("button",{id:"LAY_delallmsg",class:"layui-btn layui-btn-danger",onClick:o[0]||(o[0]=l=>t.clearAll())},"清空全部消息"),e("div",C,[e("ul",A,[(n(!0),a(m,null,p(t.lists,(l,u)=>(n(),a("li",{key:"comments"+u},[e("blockquote",j,[e("a",L,[e("cite",null,s(l.cuid.name),1)]),b("回答了您的求解 "),e("a",B,[e("cite",null,s(l.title),1)])]),i(e("div",null,null,512),[[c,l.content]]),e("p",null,[e("span",null,s(l.created),1),e("a",{href:"javascript:;",class:"layui-btn layui-btn-small layui-btn-danger fly-delete",onClick:V=>t.clear(l)},"删除",8,D)])]))),128))]),i(g(r,{total:t.total,current:t.page,align:"left","has-total":!0,"has-select":!0,onChangeCurrent:t.handleChange},null,8,["total","current","onChangeCurrent"]),[[h,t.total>0]])])])])}const q=d(f,[["render",N]]);export{q as default};
