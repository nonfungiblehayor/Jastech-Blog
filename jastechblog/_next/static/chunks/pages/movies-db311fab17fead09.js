(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{1491:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies",function(){return s(4898)}])},6086:function(e,t,s){"use strict";var a=s(2729),i=s(5893),n=s(508);function _templateObject(){let e=(0,a._)(["\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    button {\n        width: 83vw;\n        border-radius: 8px;\n        height: 46px;\n        text-align: center;\n        background-color: #f65050;\n        color: #fff;\n        font-size: 18px;\n        font-weight: 500;\n        align-self: center;\n        margin: auto;\n        margin-top: 20px;\n        border: none;\n    }\n"]);return _templateObject=function(){return e},e}let r=n.ZP.div.withConfig({componentId:"sc-434d37a2-0"})(_templateObject());t.Z=e=>{let{label:t,onClick:s,className:a}=e;return(0,i.jsx)(r,{children:(0,i.jsx)("div",{className:"flex-row",children:(0,i.jsx)("button",{className:a,onClick:s,children:t})})})}},4581:function(e,t,s){"use strict";var a=s(5893),i=s(5675),n=s.n(i);t.Z=()=>(0,a.jsx)("div",{children:(0,a.jsx)(n(),{src:"/img/spinner.gif",alt:"spinner",width:200,height:200})})},4898:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return movies}});var a=s(5893),i=s(2052),n=s.n(i),r=s(5675),o=s.n(r),l=s(1664),c=s.n(l),d=s(2729),m=s(508);function _templateObject(){let e=(0,d._)(["\n  width: 85vw;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 25px;\n  h1 {\n    color: #f65050;\n    font-size: 30px;\n    font-weight: 700;\n    border-bottom: 1px solid #000;\n    padding-bottom: 8px;\n    width: 85vw;\n    margin-top: 15px;\n    margin-bottom: 20px;\n  }\n  .news-grid {\n    display: grid;\n    grid-template-columns: auto auto auto auto;\n    row-gap: 20px;\n  }\n  .action-movies {\n    display: grid;\n    grid-template-columns: auto auto auto auto auto;\n    justify-content: space-around;\n    gap: 10px;\n  }\n  .each {\n    width: 183px;\n    height: 281px;\n    border: 1px solid #000;\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 10px;\n  }\n  p {\n    font-size: 12px;\n    font-weight: 700;\n    color: #000;\n    margin-left: 10px;\n    margin-top: 8px;\n  }\n  .btn {\n    width: 83vw;\n    border-radius: 8px;\n    height: 46px;\n    text-align: center;\n    background-color: #f65050;\n    color: #fff;\n    font-size: 18px;\n    font-weight: 500;\n    align-self: center;\n    margin: auto;\n    margin-top: 20px;\n  }\n  @media (max-width: 768px) {\n    .action-movies {\n      grid-template-columns: auto auto;\n    }\n    .each {\n      width: 47vw;\n    }\n    .movie-img {\n      width: 46.5vw;\n    }\n    h1 {\n      text-align: center;\n    }\n    .news-grid {\n      grid-template-columns: auto;\n    }\n  }\n"]);return _templateObject=function(){return e},e}let h=m.ZP.div.withConfig({componentId:"sc-326d07d1-0"})(_templateObject());var x=s(7294),g=s(4581),u=s(6805),p=s(6086),actionMovies=()=>{let[e,t]=(0,x.useState)(""),[s,i]=(0,x.useState)(!1),n="tbldr5TyjPSgS9aDa",[r,l]=(0,x.useState)(!1),[d,m]=(0,x.useState)(0),[j,f]=(0,x.useState)(),[v,D]=(0,x.useState)(""),[N,y]=(0,x.useState)(),[S,w]=(0,x.useState)(),getMovieCategory=()=>{i(!0),u.h.get("".concat(n,"?filterByFormula=AND(%7BType%7D+%3D+'Action'%2C%7BLatest%7D+%3D+'Yes')&maxRecords=5")).then(e=>e.data.records.length>0?(w(e.data.records),i(!1)):(i(!1),t("ooops!!!! our Action movie catalogue is empty check back later"))).catch(e=>(t(e.response.data.error.message),i(!1))).finally(()=>i(!1))},loadMore=e=>{l(!0),u.h.get("".concat(n,"?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BTYpe%7D+%3D+'Action'%2C%7BLatest%7D+%3D+'No')&maxRecords=").concat(d+e)).then(t=>(y(t.data.records),l(!1),m(e))).catch(e=>f(e.response.data.error.message)).finally(()=>l(!1))};return(0,x.useEffect)(()=>{getMovieCategory()},[]),(0,a.jsx)(h,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Action Movies"}),s?(0,a.jsx)(g.Z,{}):""!==e?(0,a.jsx)("p",{style:{textAlign:"center"},children:e}):(0,a.jsx)("div",{className:"action-movies",children:null==S?void 0:S.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))}),N?r?(0,a.jsx)(g.Z,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{style:{marginTop:"40px"},children:" Old News"}),j?(0,a.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"25px"},children:j}):(0,a.jsx)("div",{className:"top-news news-grid",children:null==N?void 0:N.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))})]}):"",(0,a.jsx)(p.Z,{label:"Load more",className:"btn",onClick:()=>loadMore(6)})]})})},animation=()=>{let[e,t]=(0,x.useState)(""),[s,i]=(0,x.useState)(!1),n="tbldr5TyjPSgS9aDa",[r,l]=(0,x.useState)(!1),[d,m]=(0,x.useState)(0),[j,f]=(0,x.useState)(),[v,D]=(0,x.useState)(""),[N,y]=(0,x.useState)(),[S,w]=(0,x.useState)(),getMovieCategory=()=>{i(!0),u.h.get("".concat(n,"?filterByFormula=AND(%7BType%7D+%3D+'Animation'%2C%7BLatest%7D+%3D+'Yes')&maxRecords=5")).then(e=>e.data.records.length>0?(w(e.data.records),i(!1)):(i(!1),t("ooops!!!! our Animations catalogue is empty check back later"))).catch(e=>(t(e.response.data.error.message),i(!1))).finally(()=>i(!1))},loadMore=e=>{l(!0),u.h.get("".concat(n,"?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BTYpe%7D+%3D+'Animation'%2C%7BLatest%7D+%3D+'No')&maxRecords=").concat(d+e)).then(t=>(y(t.data.records),l(!1),m(e))).catch(e=>f(e.response.data.error.message)).finally(()=>l(!1))};return(0,x.useEffect)(()=>{getMovieCategory()},[]),(0,a.jsx)(h,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Animations"}),s?(0,a.jsx)(g.Z,{}):""!==e?(0,a.jsx)("p",{style:{textAlign:"center"},children:e}):(0,a.jsx)("div",{className:"action-movies",children:null==S?void 0:S.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))}),N?r?(0,a.jsx)(g.Z,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{style:{marginTop:"40px"},children:" Old News"}),j?(0,a.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"25px"},children:j}):(0,a.jsx)("div",{className:"top-news news-grid",children:null==N?void 0:N.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))})]}):"",(0,a.jsx)(p.Z,{label:"Load more",className:"btn",onClick:()=>loadMore(6)})]})})},bollywood=()=>{let[e,t]=(0,x.useState)(""),[s,i]=(0,x.useState)(!1),n="tbldr5TyjPSgS9aDa",[r,l]=(0,x.useState)(!1),[d,m]=(0,x.useState)(0),[j,f]=(0,x.useState)(),[v,D]=(0,x.useState)(""),[N,y]=(0,x.useState)(),[S,w]=(0,x.useState)(),getMovieCategory=()=>{i(!0),u.h.get("".concat(n,"?filterByFormula=AND(%7BType%7D+%3D+'Bollywood'%2C%7BLatest%7D+%3D+'Yes')&maxRecords=5")).then(e=>e.data.records.length>0?(w(e.data.records),i(!1)):(i(!1),t("ooops!!!! our Bollywood catalogue is empty check back later"))).catch(e=>(t(e.response.data.error.message),i(!1))).finally(()=>i(!1))},loadMore=e=>{l(!0),u.h.get("".concat(n,"?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BTYpe%7D+%3D+'Bollywood'%2C%7BLatest%7D+%3D+'No')&maxRecords=").concat(d+e)).then(t=>(y(t.data.records),l(!1),m(e))).catch(e=>f(e.response.data.error.message)).finally(()=>l(!1))};return(0,x.useEffect)(()=>{getMovieCategory()},[]),(0,a.jsx)(h,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Bollywood"}),s?(0,a.jsx)(g.Z,{}):""!==e?(0,a.jsx)("p",{style:{textAlign:"center"},children:e}):(0,a.jsx)("div",{className:"action-movies",children:null==S?void 0:S.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))}),N?r?(0,a.jsx)(g.Z,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{style:{marginTop:"40px"},children:" Old News"}),j?(0,a.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"25px"},children:j}):(0,a.jsx)("div",{className:"top-news news-grid",children:null==N?void 0:N.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))})]}):"",(0,a.jsx)(p.Z,{label:"Load more",className:"btn",onClick:()=>loadMore(6)})]})})},kDrama=()=>{let[e,t]=(0,x.useState)(""),[s,i]=(0,x.useState)(!1),n="tbldr5TyjPSgS9aDa",[r,l]=(0,x.useState)(!1),[d,m]=(0,x.useState)(0),[j,f]=(0,x.useState)(),[v,D]=(0,x.useState)(""),[N,y]=(0,x.useState)(),[S,w]=(0,x.useState)(),getMovieCategory=()=>{i(!0),u.h.get("".concat(n,"?filterByFormula=AND(%7BType%7D+%3D+'K-drama'%2C%7BLatest%7D+%3D+'Yes')&maxRecords=5")).then(e=>e.data.records.length>0?(w(e.data.records),i(!1)):(i(!1),t("ooops!!!! our K-drama catalogue is empty check back later"))).catch(e=>(t(e.response.data.error.message),i(!1))).finally(()=>i(!1))},loadMore=e=>{l(!0),u.h.get("".concat(n,"?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BTYpe%7D+%3D+'K-drama'%2C%7BLatest%7D+%3D+'No')&maxRecords=").concat(d+e)).then(t=>(y(t.data.records),l(!1),m(e))).catch(e=>f(e.response.data.error.message)).finally(()=>l(!1))};return(0,x.useEffect)(()=>{getMovieCategory()},[]),(0,a.jsx)(h,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"K-Drama"}),s?(0,a.jsx)(g.Z,{}):""!==e?(0,a.jsx)("p",{style:{textAlign:"center"},children:e}):(0,a.jsx)("div",{className:"action-movies",children:null==S?void 0:S.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))}),N?r?(0,a.jsx)(g.Z,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{style:{marginTop:"40px"},children:" Old News"}),j?(0,a.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"25px"},children:j}):(0,a.jsx)("div",{className:"top-news news-grid",children:null==N?void 0:N.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))})]}):"",(0,a.jsx)(p.Z,{label:"Load more",className:"btn",onClick:()=>loadMore(6)})]})})},nollywood=()=>{let[e,t]=(0,x.useState)(""),[s,i]=(0,x.useState)(!1),n="tbldr5TyjPSgS9aDa",[r,l]=(0,x.useState)(!1),[d,m]=(0,x.useState)(0),[j,f]=(0,x.useState)(),[v,D]=(0,x.useState)(""),[N,y]=(0,x.useState)(),[S,w]=(0,x.useState)(),getMovieCategory=()=>{i(!0),u.h.get("".concat(n,"?filterByFormula=AND(%7BType%7D+%3D+'Nollywood'%2C%7BLatest%7D+%3D+'Yes')&maxRecords=5")).then(e=>e.data.records.length>0?(w(e.data.records),i(!1)):(i(!1),t("ooops!!!! our Nollywood catalogue is empty check back later"))).catch(e=>(t(e.response.data.error.message),i(!1))).finally(()=>i(!1))},loadMore=e=>{l(!0),u.h.get("".concat(n,"?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BTYpe%7D+%3D+'Nollywood'%2C%7BLatest%7D+%3D+'No')&maxRecords=").concat(d+e)).then(t=>(y(t.data.records),l(!1),m(e))).catch(e=>f(e.response.data.error.message)).finally(()=>l(!1))};return(0,x.useEffect)(()=>{getMovieCategory()},[]),(0,a.jsx)(h,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Nollywood"}),s?(0,a.jsx)(g.Z,{}):""!==e?(0,a.jsx)("p",{style:{textAlign:"center"},children:e}):(0,a.jsx)("div",{className:"action-movies",children:null==S?void 0:S.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))}),N?r?(0,a.jsx)(g.Z,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{style:{marginTop:"40px"},children:" Old News"}),j?(0,a.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"25px"},children:j}):(0,a.jsx)("div",{className:"top-news news-grid",children:null==N?void 0:N.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))})]}):"",(0,a.jsx)(p.Z,{label:"Load more",className:"btn",onClick:()=>loadMore(6)})]})})},sci_fi=()=>{let[e,t]=(0,x.useState)(""),[s,i]=(0,x.useState)(!1),n="tbldr5TyjPSgS9aDa",[r,l]=(0,x.useState)(!1),[d,m]=(0,x.useState)(0),[j,f]=(0,x.useState)(),[v,D]=(0,x.useState)(""),[N,y]=(0,x.useState)(),[S,w]=(0,x.useState)(),getMovieCategory=()=>{i(!0),u.h.get("".concat(n,"?filterByFormula=AND(%7BType%7D+%3D+'Sci-fi'%2C%7BLatest%7D+%3D+'Yes')&maxRecords=5")).then(e=>e.data.records.length>0?(w(e.data.records),i(!1)):(i(!1),t("ooops!!!! our Sci-fi catalogue is empty check back later"))).catch(e=>(t(e.response.data.error.message),i(!1))).finally(()=>i(!1))},loadMore=e=>{l(!0),u.h.get("".concat(n,"?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BTYpe%7D+%3D+'Sci-fi'%2C%7BLatest%7D+%3D+'No')&maxRecords=").concat(d+e)).then(t=>(y(t.data.records),l(!1),m(e))).catch(e=>f(e.response.data.error.message)).finally(()=>l(!1))};return(0,x.useEffect)(()=>{getMovieCategory()},[]),(0,a.jsx)(h,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Sci-fi"}),s?(0,a.jsx)(g.Z,{}):""!==e?(0,a.jsx)("p",{style:{textAlign:"center"},children:e}):(0,a.jsx)("div",{className:"action-movies",children:null==S?void 0:S.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))}),N?r?(0,a.jsx)(g.Z,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{style:{marginTop:"40px"},children:" Old News"}),j?(0,a.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"25px"},children:j}):(0,a.jsx)("div",{className:"top-news news-grid",children:null==N?void 0:N.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))})]}):"",(0,a.jsx)(p.Z,{label:"Load more",className:"btn",onClick:()=>loadMore(6)})]})})},series=()=>{let[e,t]=(0,x.useState)(""),[s,i]=(0,x.useState)(!1),n="tbldr5TyjPSgS9aDa",[r,l]=(0,x.useState)(!1),[d,m]=(0,x.useState)(0),[j,f]=(0,x.useState)(),[v,D]=(0,x.useState)(""),[N,y]=(0,x.useState)(),[S,w]=(0,x.useState)(),getMovieCategory=()=>{i(!0),u.h.get("".concat(n,"?filterByFormula=AND(%7BType%7D+%3D+'Series'%2C%7BLatest%7D+%3D+'Yes')&maxRecords=5")).then(e=>e.data.records.length>0?(w(e.data.records),i(!1)):(i(!1),t("ooops!!!! our Tv-series catalogue is empty check back later"))).catch(e=>(t(e.response.data.error.message),i(!1))).finally(()=>i(!1))},loadMore=e=>{l(!0),u.h.get("".concat(n,"?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BTYpe%7D+%3D+'Series'%2C%7BLatest%7D+%3D+'No')&maxRecords=").concat(d+e)).then(t=>(y(t.data.records),l(!1),m(e))).catch(e=>f(e.response.data.error.message)).finally(()=>l(!1))};return(0,x.useEffect)(()=>{getMovieCategory()},[]),(0,a.jsx)(h,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Tv-series"}),s?(0,a.jsx)(g.Z,{}):""!==e?(0,a.jsx)("p",{style:{textAlign:"center"},children:e}):(0,a.jsx)("div",{className:"action-movies",children:null==S?void 0:S.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))}),N?r?(0,a.jsx)(g.Z,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{style:{marginTop:"40px"},children:" Old News"}),j?(0,a.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"25px"},children:j}):(0,a.jsx)("div",{className:"top-news news-grid",children:null==N?void 0:N.map((e,t)=>(0,a.jsx)(c(),{href:"/movie/".concat(e.id),children:(0,a.jsxs)("div",{className:"each",children:[(0,a.jsx)(o(),{src:e.fields.Image[0].url,className:"movie-img",alt:"movie image",width:182,height:231}),(0,a.jsx)("p",{children:e.fields.Name})]})},t))})]}):"",(0,a.jsx)(p.Z,{label:"Load more",className:"btn",onClick:()=>loadMore(6)})]})})},Movies=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(actionMovies,{}),(0,a.jsx)(animation,{}),(0,a.jsx)(bollywood,{}),(0,a.jsx)(kDrama,{}),(0,a.jsx)(nollywood,{}),(0,a.jsx)(sci_fi,{}),(0,a.jsx)(series,{})]}),movies=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("main",{className:" ".concat(n().className),children:(0,a.jsx)(Movies,{})})})},2052:function(e){e.exports={style:{fontFamily:"'__Sofia_Sans_bb8899', '__Sofia_Sans_Fallback_bb8899'",fontStyle:"normal"},className:"__className_bb8899"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1491)}),_N_E=e.O()}]);