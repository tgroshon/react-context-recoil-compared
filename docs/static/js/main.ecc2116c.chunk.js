(this["webpackJsonprecoil-tryout-2"]=this["webpackJsonprecoil-tryout-2"]||[]).push([[0],{15:function(e,t,r){e.exports=r(43)},43:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(8),c=r.n(o),l=r(1),i=r(3);function u(e,t){return function(e,t){var r=parseInt(e,16),n=Math.round(2.55*t),a=(r>>16)+n,o=(r>>8&255)+n,c=(255&r)+n;return(16777216+65536*(a<255?a<1?0:a:255)+256*(o<255?o<1?0:o:255)+(c<255?c<1?0:c:255)).toString(16).slice(1)}(Math.floor(16777215*Math.random()).toString(16),20)}var s=a.a.createContext([[[]],function(){}]);function d(e){var t=e.x,r=e.y,o=(e.atom,Object(n.useContext)(s)),c=Object(i.a)(o,2),l=c[0],d=c[1],p="#".concat(u()),m=function(){var e=JSON.parse(JSON.stringify(l));e[t][r]=e[t][r]+1,d(e)};return a.a.createElement("div",{style:{width:"40px",display:"inline-block",backgroundColor:p,padding:"8px",margin:0,textAlign:"center"},onMouseEnter:m,onTouchStart:m,onTouchMove:m},l[t][r])}var p=function(e){var t=e.size,r=e.x,o=Object(n.useContext)(s),c=Object(i.a)(o,1)[0],p=Object(l.a)(Array(t).keys()).map((function(e,t){return a.a.createElement(d,{key:t,x:r,y:t})}));return p.push(a.a.createElement("div",{key:t+1,style:{width:"40px",display:"inline-block",padding:"6px",margin:0,textAlign:"center",fontWeight:"bold",border:"2px solid red",borderColor:"#".concat(u())}},c[r].reduce((function(e,t){return e+t}),0))),a.a.createElement("div",{style:{border:"1px",borderColor:"green"}},p)};var m=function(e){var t=e.size,r=Object(l.a)(Array(t).keys()).map((function(e,r){return a.a.createElement(p,{key:r,x:r,size:t})}));return a.a.createElement("div",{style:{display:"inline-block",border:"1px",borderColor:"yellow",padding:"8px"}},r)};var y=function(){var e=Object(l.a)(Array(6).keys()).map((function(e){return Object(l.a)(Array(6).keys()).map((function(e){return 0}))})),t=Object(n.useState)(e);return a.a.createElement("div",{className:"App"},a.a.createElement(s.Provider,{value:t},a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"24px"}},a.a.createElement(m,{size:6}),a.a.createElement(m,{size:6}))))},b=r(2),v=r(9),x=r.n(v),f=x()((function(e,t){return Object(b.atom)({key:"cell-".concat(e,"-").concat(t),default:0})})),E=x()((function(e,t){return Object(b.selector)({key:"row-".concat(e),get:function(r){for(var n=r.get,a=0,o=0;o<t;o++)a+=n(f(e,o));return a}})}));function g(e){var t=e.x,r=e.y,n=Object(b.useRecoilState)(f(t,r)),o=Object(i.a)(n,2),c=o[0],l=o[1],s="#".concat(u()),d=function(){return l(c+1)};return a.a.createElement("div",{style:{width:"40px",display:"inline-block",backgroundColor:s,padding:"8px",margin:0,textAlign:"center"},onMouseEnter:d,onTouchStart:d,onTouchMove:d},c)}function h(e){var t=e.x,r=e.size,n=Object(b.useRecoilValue)(E(t,r));return a.a.createElement("div",{style:{width:"40px",display:"inline-block",padding:"6px",margin:0,textAlign:"center",fontWeight:"bold",border:"2px solid red",borderColor:"#".concat(u())}},n)}var k=function(e){var t=e.size,r=e.x,n=Object(l.a)(Array(t).keys()).map((function(e,t){return a.a.createElement(g,{key:t,x:r,y:t})}));return n.push(a.a.createElement(h,{key:t+100,x:r,size:t})),a.a.createElement("div",{style:{border:"1px",borderColor:"green"}},n)};var j=function(e){var t=e.size,r=Object(l.a)(Array(t).keys()).map((function(e,r){return a.a.createElement(k,{key:r,x:r,size:t})}));return a.a.createElement("div",{style:{display:"inline-block",border:"1px",borderColor:"yellow",padding:"8px"}},r)};var O=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(b.RecoilRoot,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"24px"}},a.a.createElement(j,{size:6}),a.a.createElement(j,{size:6}))))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement("div",null,a.a.createElement("div",{style:{float:"right"}},a.a.createElement("a",{href:"https://github.com/aaronshaf/react-context-recoil-compared"},"GitHub")),a.a.createElement("h1",null,"React Context vs. Recoil Rerenders"),a.a.createElement("div",null,"Color updates represent rerenders. Touch or hover over cells."),a.a.createElement("h2",null,"React Context"),a.a.createElement(y,null),a.a.createElement("h2",null,"Recoil"),a.a.createElement(O,null))),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ecc2116c.chunk.js.map