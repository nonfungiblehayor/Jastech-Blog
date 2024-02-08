"use strict";exports.id=116,exports.ids=[116],exports.modules={9421:(e,i,t)=>{t.d(i,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=t(997),s=t(2804),a=t(7518),n=t.n(a);let d=n().div.withConfig({componentId:"sc-8b40bf8f-0"})`
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-top: 10px;
  .head {
    color: #f65050;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid #000;
    padding-bottom: 15px;
    width: 270px;
  }
  .socials {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 15px;
    row-gap: 10px;
  }
  .ads-div {
    width: 270px;
    height: 290px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("/img/bg1.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 20px;
    h1 {
      color: #fff;
    }
  }
  .each {
    width: 130px;
    height: 40px;
    p {
      color: #fff;
      font-size: 8px;
      font-weight: 500;
    }
  }
  .newsletter {
    width: 270px;
    background-color: #dedada;
    height: 195px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
  input {
    width: 220px;
    height: 40px;
    background-color: #fff;
    text-align: center;
    color: #000;
    font-size: 12px;
    font-weight: 400;
    border: none;
  }
  button {
    background-color: #f65050;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    width: 220px;
    border: none;
    height: 40px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`,__WEBPACK_DEFAULT_EXPORT__=({showAds:e})=>r.jsx(d,{children:(0,r.jsxs)("div",{children:[r.jsx("p",{className:"head",children:"Stay Connected"}),r.jsx("div",{className:"socials",children:[{type:"facebook",followers:"1500",bg:"#4281FF"},{type:"twitter",followers:"1500",bg:"#42C0F5"},{type:"instagram",followers:"1500",bg:"#C23785"},{type:"web",followers:"1500",bg:"#F7679D"}].map((e,i)=>(0,r.jsxs)("div",{className:"each flex-row",style:{backgroundColor:e.bg},children:[r.jsx(s.Z,{type:e.type}),(0,r.jsxs)("p",{children:["1500 ",r.jsx("br",{}),"web"!==e.type?"followers":"users"]})]},i))}),(0,r.jsxs)("div",{className:"newsletter",children:[r.jsx("input",{type:"email",placeholder:"Your email address"}),r.jsx("button",{children:"Subscribe"})]}),e?r.jsx("div",{className:"ads-div",children:r.jsx("h1",{children:"Ads"})}):""]})})},4581:(e,i,t)=>{t.d(i,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=t(997),s=t(5675),a=t.n(s);let __WEBPACK_DEFAULT_EXPORT__=()=>r.jsx("div",{children:r.jsx(a(),{src:"/img/spinner.gif",alt:"spinner",width:200,height:200})})},3116:(e,i,t)=>{t.a(e,async(e,r)=>{try{t.r(i),t.d(i,{StyledEachNewsPage:()=>f,default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=t(997),a=t(5675),n=t.n(a),d=t(7518),l=t.n(d),o=t(9421),c=t(6174),p=t(6689),x=t(1163),h=t(4581),g=e([c]);c=(g.then?(await g)():g)[0];let f=l().section.withConfig({componentId:"sc-dd712c1b-0"})`
  .each-section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
  color: #393939;
  .first-div {
    width: 60vw;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    gap: 20px;
    height: auto;
    border-right: 1px solid #393939;
    margin-right: 15px;
    padding-bottom: 40px;
  }
  .download {
    margin: auto;
    align-self: center;
    background-color: #24db24;
    border-radius: 10px;
    color: #393939;
    cursor: pointer;
    width: 150px;
    text-align: center;
    padding: 15px;
  }
  .error-div {
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 25px;
    p {
      font-size: 30px;
    }
  }
  h1 {
    align-self: center;
    width: 500px;
    align-self: flex-start;
  }
  .type_date {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    gap: 6px;
  }
  .tag {
    background-color: #0088ff;
    width: 120px;
    text-align: center;
    padding: 2px;
    color: #fff;
  }
  .cover-img {
    align-self: center;
  }
  .ads-pop {
    width: 300px;
    align-self: center;
    height: 300px;
    background-image: url("/img/bg1.png");
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-top: 25px;
  }
  .details {
    line-height: 20px;
    width: 58vw;
  }
  @media (max-width: 768px) {
    div:nth-of-type(2) {
      display: none;
    }
    .cover-img {
      width: 300px;
    }
    .first-div {
      border-right: none;
      width: 85vw;
    }
    .details {
      width: 80vw;
    }
    h1 {
      width: 80vw;
      font-size: 20px;
    }
  }
`,__WEBPACK_DEFAULT_EXPORT__=()=>{let e=(0,x.useRouter)(),[i,t]=(0,p.useState)(""),[r,a]=(0,p.useState)(),d=[{Headline:r?.Headline,Summary:r?.Summary,Type:r?.NewsType,Date:r?.Date,More:r?.more,Image:[{url:r?.Image[0].url}]}],getNewsDetail=()=>{c.api.get(`tblBY7uZiahFiNokE/${e.query.id}`).then(e=>a(e.data.fields)).catch(e=>t(e.response.data.error))};return(0,p.useEffect)(()=>{e.isReady&&getNewsDetail()},[e.isReady]),s.jsx(f,{children:(0,s.jsxs)("section",{className:"each-section",children:[""===i?d?.map((e,i)=>s.jsxs("div",{className:"first-div",children:[s.jsx("h1",{children:e.Headline}),s.jsx("p",{className:"type_date",children:e.Date}),s.jsx(n(),{src:e.Image[0].url||"/img/spinner.gif",alt:"news img",width:485,height:300,className:"cover-img"}),s.jsx("p",{className:"tag",children:e.Type}),s.jsx("h2",{children:e.Headline}),s.jsx("div",{className:"ads-pop",children:"Ads"}),s.jsx("p",{className:"details",children:e.Summary}),e.More?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"ads-pop",children:"Ads"}),s.jsx("p",{className:"details",children:e.More})]}):""]},i)):(0,s.jsxs)("div",{className:"error-div",children:[s.jsx(h.Z,{}),(0,s.jsxs)("p",{children:[i," check back later"]})]}),s.jsx(o.Z,{showAds:!0})]})})};r()}catch(e){r(e)}})}};