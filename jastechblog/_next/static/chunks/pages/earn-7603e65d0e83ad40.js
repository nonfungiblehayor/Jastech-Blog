(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[391],{5631:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/earn",function(){return t(1489)}])},6086:function(e,n,t){"use strict";var a=t(2729),i=t(5893),r=t(508);function _templateObject(){let e=(0,a._)(["\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    button {\n        width: 83vw;\n        border-radius: 8px;\n        height: 46px;\n        text-align: center;\n        background-color: #f65050;\n        color: #fff;\n        font-size: 18px;\n        font-weight: 500;\n        align-self: center;\n        margin: auto;\n        margin-top: 20px;\n        border: none;\n    }\n"]);return _templateObject=function(){return e},e}let s=r.ZP.div.withConfig({componentId:"sc-434d37a2-0"})(_templateObject());n.Z=e=>{let{label:n,onClick:t,className:a}=e;return(0,i.jsx)(s,{children:(0,i.jsx)("div",{className:"flex-row",children:(0,i.jsx)("button",{className:a,onClick:t,children:n})})})}},4581:function(e,n,t){"use strict";var a=t(5893),i=t(5675),r=t.n(i);n.Z=()=>(0,a.jsx)("div",{children:(0,a.jsx)(r(),{src:"/img/spinner.gif",alt:"spinner",width:200,height:200})})},1489:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return earn}});var a=t(5893),i=t(3892),r=t.n(i),s=t(2729),o=t(5675),c=t.n(o),l=t(1664),d=t.n(l),p=t(508),m=t(7294),u=t(6805),x=t(4581),f=t(6086);function _templateObject(){let e=(0,s._)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  .container {\n    width: 85vw;\n    display: grid;\n    grid-template-columns: auto auto auto auto;\n    justify-content: space-between;\n    row-gap: 30px;\n    column-gap: 10px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n  }\n  .border-bottom {\n    border-bottom: 1px solid #000;\n    padding-bottom: 15px;\n  }\n  .each {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 250px;\n    gap: 10px;\n    padding-left: 10px;\n    padding-bottom: 15px;\n    border: 1px solid #000;\n  }\n  .btn {\n    margin-bottom: 25px;\n  }\n  p {\n    font-size: 10px;\n    font-weight: 400;\n    color: #393939;\n  }\n  h3 {\n    font-size: 14px;\n    font-weight: 500;\n    width: 270px;\n    color: #000;\n  }\n  @media (max-width: 768px) {\n    .container {\n      grid-template-columns: auto;\n      justify-content: center;\n    }\n  }\n"]);return _templateObject=function(){return e},e}let h=p.ZP.section.withConfig({componentId:"sc-e20c455c-0"})(_templateObject());var Earn=()=>{let e="tbl0SQtXFoUFuoXu6",[n,t]=(0,m.useState)(),[i,r]=(0,m.useState)(),[s,o]=(0,m.useState)(!1),[l,p]=(0,m.useState)(),[g,b]=(0,m.useState)(),[j,_]=(0,m.useState)(!1),[w,N]=(0,m.useState)(0),getUpdate=()=>{o(!0),u.h.get("".concat(e,"?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BNew%7D+%3D+'Yes')&maxRecords=8")).then(e=>(t(e.data.records),o(!1))).catch(e=>p(e.response.data.error.message)).finally(()=>o(!1))},loadMore=n=>{_(!0),u.h.get("".concat(e,"?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BNew%7D+%3D+'No')&maxRecords=").concat(w+n)).then(e=>(r(e.data.records),_(!1),N(n))).catch(e=>b(e.response.data.error.message)).finally(()=>_(!1))};return(0,m.useEffect)(()=>{getUpdate()},[]),(0,a.jsx)(h,{children:(0,a.jsxs)("section",{children:[l?(0,a.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"25px"},children:l}):s?(0,a.jsx)(x.Z,{}):(0,a.jsx)("div",{className:"container border-bottom",children:null==n?void 0:n.map((e,n)=>(0,a.jsx)(d(),{href:"/earn/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(c(),{src:e.fields.Image[0].url,alt:"image",className:"bgImg",width:240,height:200}),(0,a.jsxs)("p",{children:["Valid till - ",e.fields.Date]}),(0,a.jsx)("h3",{children:e.fields.Update})]})},n))}),g?(0,a.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"25px"},children:g}):j?(0,a.jsx)(x.Z,{}):(0,a.jsx)("div",{className:"container",children:null==i?void 0:i.map((e,n)=>(0,a.jsx)(d(),{href:"/earn/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(c(),{src:e.fields.Image[0].url,alt:"image",className:"bgImg",width:240,height:200}),(0,a.jsxs)("p",{children:["Valid till - ",e.fields.Date]}),(0,a.jsx)("h3",{children:e.fields.Update})]})},n))}),(0,a.jsx)(f.Z,{label:"Load more",className:"btn",onClick:()=>loadMore(6)})]})})},earn=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("main",{className:" ".concat(r().className),children:(0,a.jsx)(Earn,{})})})},3892:function(e){e.exports={style:{fontFamily:"'__Sofia_Sans_bb8899', '__Sofia_Sans_Fallback_bb8899'",fontStyle:"normal"},className:"__className_bb8899"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5631)}),_N_E=e.O()}]);