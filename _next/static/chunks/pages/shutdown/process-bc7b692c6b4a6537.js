(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{3959:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shutdown/process",function(){return n(8718)}])},4245:function(t,e,n){"use strict";n.d(e,{C:function(){return r}});var s=n(5893),i=n(204);function r(t){let{children:e}=t;return(0,s.jsx)(i.k,{h:"100vh",bgColor:"black",p:"10px",flexDir:"column",color:"white",fontFamily:"monospace",height:"auto",minHeight:"100vh",children:e})}},9554:function(t,e,n){"use strict";n.d(e,{F:function(){return l}});var s=n(5893),i=n(9564),r=n(8419),a=n(2200);let o=t=>{switch(t){case"Ok":return"OK";case"Error":return"ERROR";default:return""}};function u(t){let{text:e,startTime:n=0,endTime:u=.2,status:l,duration:c=1}=t,d=(0,a.Z)();return(0,s.jsxs)(r.E.p,{style:{color:"white",whiteSpace:"nowrap",opacity:"0%",fontFamily:"monospace",fontSize:d?"12px":"18px"},animate:{opacity:[0,1,1]},transition:{times:[n,u,1],ease:"linear",duration:c},children:["Loading"!==l&&(0,s.jsx)(i.x,{as:"span",mr:d?0:4,children:"["}),(0,s.jsx)(i.x,{as:"span",color:"Ok"===l?"green":"red",width:"50px",display:"inline-block",textAlign:"center",children:o(l)}),"Loading"!==l&&(0,s.jsx)(i.x,{as:"span",ml:d?0:4,mr:2,children:"]"}),(0,s.jsx)(i.x,{as:"span",ml:"Loading"===l?d?"22px":"60px":0,children:e})]})}function l(t){let{text:e,stepTimeInSecond:n=.5}=t,i=e.length*n,r=1/e.length;return(0,s.jsx)(s.Fragment,{children:e.map((t,e)=>(0,s.jsx)(u,{text:t.value,startTime:e*r,endTime:e*r+r,status:t.status,duration:i},e))})}},8718:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var s=n(5893),i=n(4245),r=n(1163),a=n(7294),o=n(9554);let u=()=>[{value:"Shutdown process is started",status:"Ok"},{value:"Don't close the browser window...",status:"Loading"},{value:". . .",status:"Loading"},{value:". . .",status:"Error"},{value:"Retrying shutdown process",status:"Loading"},{value:". . .",status:"Loading"},{value:"Site is down",status:"Ok"},{value:"3",status:"Loading"},{value:"2",status:"Loading"},{value:"1",status:"Loading"},{value:"Thank you for visiting, see you later!",status:"Ok"}];function l(){let t=u(),e=.25*t.length,n=(0,r.useRouter)(),i=n.query.reboot;return(0,a.useEffect)(()=>{i?setTimeout(()=>n.replace("/boot-up"),1e3*e+1e3):setTimeout(()=>n.replace("/shutdown"),1e3*e+1e3)},[e,i,n]),(0,s.jsx)(o.F,{text:t,stepTimeInSecond:.25})}function c(){return(0,s.jsx)(i.C,{children:(0,s.jsx)(l,{})})}},1163:function(t,e,n){t.exports=n(6885)},204:function(t,e,n){"use strict";n.d(e,{k:function(){return a}});var s=n(5059),i=n(7489),r=n(5893),a=(0,s.G)(function(t,e){let{direction:n,align:s,justify:a,wrap:o,basis:u,grow:l,shrink:c,...d}=t;return(0,r.jsx)(i.m.div,{ref:e,__css:{display:"flex",flexDirection:n,alignItems:s,justifyContent:a,flexWrap:o,flexBasis:u,flexGrow:l,flexShrink:c},...d})});a.displayName="Flex"},9564:function(t,e,n){"use strict";n.d(e,{x:function(){return l}});var s=n(5059),i=n(4662),r=n(3179),a=n(7489),o=n(5432),u=n(5893),l=(0,s.G)(function(t,e){let n=(0,i.mq)("Text",t),{className:s,align:l,decoration:c,casing:d,...f}=(0,r.Lr)(t),x=function(t){let e=Object.assign({},t);for(let t in e)void 0===e[t]&&delete e[t];return e}({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return(0,u.jsx)(a.m.p,{ref:e,className:(0,o.cx)("chakra-text",t.className),...x,...f,__css:n})});l.displayName="Text"}},function(t){t.O(0,[774,888,179],function(){return t(t.s=3959)}),_N_E=t.O()}]);