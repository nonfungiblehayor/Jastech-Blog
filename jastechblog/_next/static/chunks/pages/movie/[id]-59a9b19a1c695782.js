(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[937],{3747:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movie/[id]",function(){return t(9107)}])},9421:function(n,e,t){"use strict";var i=t(2729),s=t(5893),a=t(2804),r=t(508);function _templateObject(){let n=(0,i._)(['\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  margin-top: 10px;\n  .head {\n    color: #f65050;\n    font-size: 18px;\n    font-weight: 700;\n    border-bottom: 1px solid #000;\n    padding-bottom: 15px;\n    width: 270px;\n  }\n  .socials {\n    display: grid;\n    grid-template-columns: auto auto;\n    margin-top: 15px;\n    row-gap: 10px;\n  }\n  .ads-div {\n    width: 270px;\n    height: 290px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-image: url("/img/bg1.png");\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-top: 20px;\n    h1 {\n      color: #fff;\n    }\n  }\n  .each {\n    width: 130px;\n    height: 40px;\n    p {\n      color: #fff;\n      font-size: 8px;\n      font-weight: 500;\n    }\n  }\n  .newsletter {\n    width: 270px;\n    background-color: #dedada;\n    height: 195px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 15px;\n    margin-top: 20px;\n  }\n  input {\n    width: 220px;\n    height: 40px;\n    background-color: #fff;\n    text-align: center;\n    color: #000;\n    font-size: 12px;\n    font-weight: 400;\n    border: none;\n  }\n  button {\n    background-color: #f65050;\n    color: #fff;\n    text-align: center;\n    font-size: 18px;\n    font-weight: 700;\n    width: 220px;\n    border: none;\n    height: 40px;\n  }\n  @media (max-width: 768px) {\n    display: none;\n  }\n']);return _templateObject=function(){return n},n}let l=r.ZP.div.withConfig({componentId:"sc-8b40bf8f-0"})(_templateObject());e.Z=n=>{let{showAds:e}=n;return(0,s.jsx)(l,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"head",children:"Stay Connected"}),(0,s.jsx)("div",{className:"socials",children:[{type:"facebook",followers:"1500",bg:"#4281FF"},{type:"twitter",followers:"1500",bg:"#42C0F5"},{type:"instagram",followers:"1500",bg:"#C23785"},{type:"web",followers:"1500",bg:"#F7679D"}].map((n,e)=>(0,s.jsxs)("div",{className:"each flex-row",style:{backgroundColor:n.bg},children:[(0,s.jsx)(a.Z,{type:n.type}),(0,s.jsxs)("p",{children:["1500 ",(0,s.jsx)("br",{}),"web"!==n.type?"followers":"users"]})]},e))}),(0,s.jsxs)("div",{className:"newsletter",children:[(0,s.jsx)("input",{type:"email",placeholder:"Your email address"}),(0,s.jsx)("button",{children:"Subscribe"})]}),e?(0,s.jsx)("div",{className:"ads-div",children:(0,s.jsx)("h1",{children:"Ads"})}):""]})})}},4581:function(n,e,t){"use strict";var i=t(5893),s=t(5675),a=t.n(s);e.Z=()=>(0,i.jsx)("div",{children:(0,i.jsx)(a(),{src:"/img/spinner.gif",alt:"spinner",width:200,height:200})})},9107:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return movie_id_}});var i=t(5893),s=t(2729),a=t(508);function _templateObject(){let n=(0,s._)(["\n  iframe {\n    width: 55vw;\n  }\n  @media (max-width: 768px) {\n    iframe {\n      width: 85vw;\n    }\n  }\n"]);return _templateObject=function(){return n},n}let r=a.ZP.div.withConfig({componentId:"sc-dcc1c7eb-0"})(_templateObject());var EmbedWebsite=n=>{let{url:e}=n;return(0,i.jsx)(r,{children:(0,i.jsx)("div",{children:(0,i.jsx)("iframe",{className:"embed",height:500,src:e})})})},l=t(9421),o=t(3116),d=t(7294),c=t(1163),p=t(1664),h=t.n(p),x=t(6805),Movies_EachMoviePage=()=>{let n=(0,c.useRouter)(),[e,t]=(0,d.useState)(""),[s,a]=(0,d.useState)(),getMoviesDetail=()=>{x.h.get("".concat("tbldr5TyjPSgS9aDa","/").concat(n.query.id)).then(n=>(a(n.data.fields),console.log(n))).catch(n=>t(n.response.data.error))},r=[{Name:null==s?void 0:s.Name,Description:null==s?void 0:s.Description,Latest:null==s?void 0:s.Latest,youtube:null==s?void 0:s.Youtube,link:null==s?void 0:s.link}];return(0,d.useEffect)(()=>{n.isReady&&getMoviesDetail()},[n.isReady]),(0,i.jsx)(o.StyledEachNewsPage,{children:(0,i.jsxs)("section",{className:"each-section",children:[r.map((n,e)=>(0,i.jsxs)("div",{className:"first-div",children:[(0,i.jsx)(EmbedWebsite,{url:"https://www.youtube.com/embed/".concat(n.youtube)}),(0,i.jsx)("div",{className:"ads-pop",children:"Ads"}),(0,i.jsxs)("h1",{children:[n.Name," "]}),(0,i.jsx)("p",{children:n.Description}),(0,i.jsx)("div",{className:"ads-pop",children:"Ads"}),(0,i.jsx)(h(),{href:"".concat(n.link),children:(0,i.jsx)("p",{className:"download",children:"Download Link"})})]},e)),(0,i.jsx)(l.Z,{showAds:!0})]})})},movie_id_=()=>(0,i.jsx)("div",{children:(0,i.jsx)(Movies_EachMoviePage,{})})},3116:function(n,e,t){"use strict";t.r(e),t.d(e,{StyledEachNewsPage:function(){return x}});var i=t(2729),s=t(5893),a=t(5675),r=t.n(a),l=t(508),o=t(9421),d=t(6805),c=t(7294),p=t(1163),h=t(4581);function _templateObject(){let n=(0,i._)(['\n  .each-section {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: center;\n  }\n  color: #393939;\n  .first-div {\n    width: 60vw;\n    display: flex;\n    flex-direction: column;\n    padding-top: 25px;\n    gap: 20px;\n    height: auto;\n    border-right: 1px solid #393939;\n    margin-right: 15px;\n    padding-bottom: 40px;\n  }\n  .download {\n    margin: auto;\n    align-self: center;\n    background-color: #24db24;\n    border-radius: 10px;\n    color: #393939;\n    cursor: pointer;\n    width: 150px;\n    text-align: center;\n    padding: 15px;\n  }\n  .error-div {\n    width: 60vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    gap: 25px;\n    p {\n      font-size: 30px;\n    }\n  }\n  h1 {\n    align-self: center;\n    width: 500px;\n    align-self: flex-start;\n  }\n  .type_date {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-self: flex-start;\n    gap: 6px;\n  }\n  .tag {\n    background-color: #0088ff;\n    width: 120px;\n    text-align: center;\n    padding: 2px;\n    color: #fff;\n  }\n  .cover-img {\n    align-self: center;\n  }\n  .ads-pop {\n    width: 300px;\n    align-self: center;\n    height: 300px;\n    background-image: url("/img/bg1.png");\n    background-size: cover;\n    background-repeat: no-repeat;\n    color: #fff;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  h2 {\n    margin-top: 25px;\n  }\n  .details {\n    line-height: 20px;\n    width: 58vw;\n  }\n  @media (max-width: 768px) {\n    div:nth-of-type(2) {\n      display: none;\n    }\n    .cover-img {\n      width: 300px;\n    }\n    .first-div {\n      border-right: none;\n      width: 85vw;\n    }\n    .details {\n      width: 80vw;\n    }\n    h1 {\n      width: 80vw;\n      font-size: 20px;\n    }\n  }\n']);return _templateObject=function(){return n},n}let x=l.ZP.section.withConfig({componentId:"sc-dd712c1b-0"})(_templateObject());e.default=()=>{let n=(0,p.useRouter)(),[e,t]=(0,c.useState)(""),[i,a]=(0,c.useState)(),l=[{Headline:null==i?void 0:i.Headline,Summary:null==i?void 0:i.Summary,Type:null==i?void 0:i.NewsType,Date:null==i?void 0:i.Date,More:null==i?void 0:i.more,Image:[{url:null==i?void 0:i.Image[0].url}]}],getNewsDetail=()=>{d.h.get("".concat("tblBY7uZiahFiNokE","/").concat(n.query.id)).then(n=>a(n.data.fields)).catch(n=>t(n.response.data.error))};return(0,c.useEffect)(()=>{n.isReady&&getNewsDetail()},[n.isReady]),(0,s.jsx)(x,{children:(0,s.jsxs)("section",{className:"each-section",children:[""===e?null==l?void 0:l.map((n,e)=>(0,s.jsxs)("div",{className:"first-div",children:[(0,s.jsx)("h1",{children:n.Headline}),(0,s.jsx)("p",{className:"type_date",children:n.Date}),(0,s.jsx)(r(),{src:n.Image[0].url||"/img/spinner.gif",alt:"news img",width:485,height:300,className:"cover-img"}),(0,s.jsx)("p",{className:"tag",children:n.Type}),(0,s.jsx)("h2",{children:n.Headline}),(0,s.jsx)("div",{className:"ads-pop",children:"Ads"}),(0,s.jsx)("p",{className:"details",children:n.Summary}),n.More?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"ads-pop",children:"Ads"}),(0,s.jsx)("p",{className:"details",children:n.More})]}):""]},e)):(0,s.jsxs)("div",{className:"error-div",children:[(0,s.jsx)(h.Z,{}),(0,s.jsxs)("p",{children:[e," check back later"]})]}),(0,s.jsx)(o.Z,{showAds:!0})]})})}},1163:function(n,e,t){n.exports=t(9974)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=3747)}),_N_E=n.O()}]);