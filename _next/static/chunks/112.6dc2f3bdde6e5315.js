(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{6112:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(2729),i=r(5893),o=r(3100),s=r(6829),a=r(1163),l=r(7294),c=r(5518),d=r(1649),w=r(2320),u=r(2617);function m(e){let{command:t,terminal:r,router:n}=e,i=t.trim();switch(r.write("\r\n"),i){case"help":c.isMobileOnly?(r.write("\r\nAvailable commands:"),r.write("\r\n  start	access GUI"),r.write("\r\n  shutdown	shut the site down"),r.write("\r\n  reboot	restart the site"),r.write("\r\n  clear		clear the terminal\r\n")):(r.write("\r\nAvailable commands:"),r.write("\r\n	start		access GUI"),r.write("\r\n	shutdown	shut the site down"),r.write("\r\n	reboot		restart the site"),r.write("\r\n	clear		clear the terminal\r\n"));break;case"start":n.pathname.includes("desktop")?r.write("GUI already active"):n.replace("/desktop");break;case"shutdown":r.write("\rSite is shutting down..."),n.replace("/shutdown/process");break;case"reboot":r.write("\rSite is rebooting..."),n.replace("/shutdown/process?reboot=true");break;case"clear":r.write("\x1bc");break;case"helo":case"hepl":case"hep":case"hel":case"helpp":case"gelp":r.write("command not found: "+t),r.write("\r\ndid you mean 'help' ?\r\n");break;case"star":case"tart":r.write("command not found: "+t),r.write("\r\ndid you mean 'start' ?\r\n");break;case"clea":case"clera":case"lear":r.write("command not found: "+t),r.write("\r\ndid you mean 'clear' ?\r\n");break;default:""!==t&&(r.write("command not found: "+t),r.write("\r\nto see available commands, use 'help'\r\n"))}}var p=r(4878);function h(){let e=(0,n._)(["\n  .xterm-viewport {\n    overflow-y: auto;\n  }\n"]);return h=function(){return e},e}let b=(0,s.Z)(o.xu)(h()),f=e=>["\x1b[A","\x1b[B","\x1b[C","\x1b[D"].includes(e);function k(e){let t=(0,l.useRef)(null),r=(0,a.useRouter)(),n=(0,d.I0)(),o=(0,l.useCallback)(e=>n((0,p.as)(e)),[n]),s="\x1b[0;32mguest@stasi.dev \x1b[0;34m~\x1b[0;37m$ ";return(0,l.useEffect)(()=>{if(t.current){let n=new w.Terminal({cursorBlink:!0,lineHeight:c.isAndroid?1.4:1.2,fontFamily:"monospace"}),i=new u.FitAddon,a="";if(n.loadAddon(i),n.open(t.current),i.fit(),n.focus(),e.withHelp&&(n.write("To see available commands\r\n"),n.write("type 'help' and hit ENTER or RETURN\r\n\r\n")),c.isAndroid){n.write(s),n.write("\x1b[?25l");let e="",t=0;n.onData(r=>{"%7F"===encodeURIComponent(r)?e.length>0&&(t+=1,e=e.slice(0,-1*t)+decodeURIComponent(" ".repeat(t)),n.write("\r"+s),n.write(e)):"%0D"===encodeURIComponent(r)||(t>0&&(e=e.slice(0,-1*t),t=0),e+=r,n.write("\r"+s),n.write(e))}),n.onKey(t=>{let i=t.domEvent;"Enter"===i.key?(("%0D"===encodeURIComponent(e)||0===e.trim().length)&&(e=""),m({command:e,terminal:n,router:r}),"reboot"===e||"shutdown"===e?(o("DesktopMainView"),n.write("\r\n"+s)):""===e?n.write("\r"+s):n.write("\r\n"+s),e=""):"Backspace"!==i.key&&(f(t.key)||(e+=t.key,n.write(t.key)))})}else n.write("\r\n"),n.write(s),n.onKey(e=>{let t=e.domEvent;"Enter"===t.key?(m({command:a,terminal:n,router:r}),"reboot"===a||"shutdown"===a?(o("DesktopMainView"),n.write("\r\n"+s)):""===a?n.write(s):n.write("\r\n"+s),a=""):"Backspace"===t.key?""!==a&&(a=a.slice(0,-1),n.write("\b \b")):f(e.key)||(a+=e.key,n.write(e.key))})}},[e.withHelp,t,r,o]),(0,i.jsx)(b,{ref:t,bgColor:"green",w:"100%"})}},1163:function(e,t,r){e.exports=r(6885)},2617:function(e){var t,r;self,e.exports=(Object.defineProperty(r=t={},"__esModule",{value:!0}),r.FitAddon=void 0,r.FitAddon=class{constructor(){}activate(e){this._terminal=e}dispose(){}fit(){let e=this.proposeDimensions();if(!e||!this._terminal||isNaN(e.cols)||isNaN(e.rows))return;let t=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}proposeDimensions(){if(!this._terminal||!this._terminal.element||!this._terminal.element.parentElement)return;let e=this._terminal._core,t=e._renderService.dimensions;if(0===t.css.cell.width||0===t.css.cell.height)return;let r=0===this._terminal.options.scrollback?0:e.viewport.scrollBarWidth,n=window.getComputedStyle(this._terminal.element.parentElement),i=parseInt(n.getPropertyValue("height")),o=Math.max(0,parseInt(n.getPropertyValue("width"))),s=window.getComputedStyle(this._terminal.element),a=i-(parseInt(s.getPropertyValue("padding-top"))+parseInt(s.getPropertyValue("padding-bottom"))),l=o-(parseInt(s.getPropertyValue("padding-right"))+parseInt(s.getPropertyValue("padding-left")))-r;return{cols:Math.max(2,Math.floor(l/t.css.cell.width)),rows:Math.max(1,Math.floor(a/t.css.cell.height))}}},t)},2729:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{_:function(){return n}})}}]);