const rd=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}};rd();function od(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $c={exports:{}};(function(s,e){(function(t){s.exports=t()})(function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(i){return!(!i||!i.Window)&&i instanceof i.Window};var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.getWindow=function(i){return(0,t.default)(i)?i:(i.ownerDocument||i).defaultView||a.window},n.init=f,n.window=n.realWindow=void 0;var r=void 0;n.realWindow=r;var a=void 0;function f(i){n.realWindow=r=i;var o=i.document.createTextNode("");o.ownerDocument!==i.document&&typeof i.wrap=="function"&&i.wrap(o)===o&&(i=i.wrap(i)),n.window=a=i}n.window=a,typeof window!="undefined"&&window&&f(window);var l={};function h(i){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},h(i)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var p=function(i){return!!i&&h(i)==="object"},m=function(i){return typeof i=="function"},v={window:function(i){return i===n.window||(0,t.default)(i)},docFrag:function(i){return p(i)&&i.nodeType===11},object:p,func:m,number:function(i){return typeof i=="number"},bool:function(i){return typeof i=="boolean"},string:function(i){return typeof i=="string"},element:function(i){if(!i||h(i)!=="object")return!1;var o=n.getWindow(i)||n.window;return/object|function/.test(typeof Element=="undefined"?"undefined":h(Element))?i instanceof Element||i instanceof o.Element:i.nodeType===1&&typeof i.nodeName=="string"},plainObject:function(i){return p(i)&&!!i.constructor&&/function Object\b/.test(i.constructor.toString())},array:function(i){return p(i)&&i.length!==void 0&&m(i.splice)}};l.default=v;var _={};function S(i){var o=i.interaction;if(o.prepared.name==="drag"){var c=o.prepared.axis;c==="x"?(o.coords.cur.page.y=o.coords.start.page.y,o.coords.cur.client.y=o.coords.start.client.y,o.coords.velocity.client.y=0,o.coords.velocity.page.y=0):c==="y"&&(o.coords.cur.page.x=o.coords.start.page.x,o.coords.cur.client.x=o.coords.start.client.x,o.coords.velocity.client.x=0,o.coords.velocity.page.x=0)}}function A(i){var o=i.iEvent,c=i.interaction;if(c.prepared.name==="drag"){var u=c.prepared.axis;if(u==="x"||u==="y"){var d=u==="x"?"y":"x";o.page[d]=c.coords.start.page[d],o.client[d]=c.coords.start.client[d],o.delta[d]=0}}}Object.defineProperty(_,"__esModule",{value:!0}),_.default=void 0;var b={id:"actions/drag",install:function(i){var o=i.actions,c=i.Interactable,u=i.defaults;c.prototype.draggable=b.draggable,o.map.drag=b,o.methodDict.drag="draggable",u.actions.drag=b.defaults},listeners:{"interactions:before-action-move":S,"interactions:action-resume":S,"interactions:action-move":A,"auto-start:check":function(i){var o=i.interaction,c=i.interactable,u=i.buttons,d=c.options.drag;if(d&&d.enabled&&(!o.pointerIsDown||!/mouse|pointer/.test(o.pointerType)||(u&c.options.drag.mouseButtons)!=0))return i.action={name:"drag",axis:d.lockAxis==="start"?d.startAxis:d.lockAxis},!1}},draggable:function(i){return l.default.object(i)?(this.options.drag.enabled=i.enabled!==!1,this.setPerAction("drag",i),this.setOnEvents("drag",i),/^(xy|x|y|start)$/.test(i.lockAxis)&&(this.options.drag.lockAxis=i.lockAxis),/^(xy|x|y)$/.test(i.startAxis)&&(this.options.drag.startAxis=i.startAxis),this):l.default.bool(i)?(this.options.drag.enabled=i,this):this.options.drag},beforeMove:S,move:A,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},g=b;_.default=g;var E={};Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var F={init:function(i){var o=i;F.document=o.document,F.DocumentFragment=o.DocumentFragment||G,F.SVGElement=o.SVGElement||G,F.SVGSVGElement=o.SVGSVGElement||G,F.SVGElementInstance=o.SVGElementInstance||G,F.Element=o.Element||G,F.HTMLElement=o.HTMLElement||F.Element,F.Event=o.Event,F.Touch=o.Touch||G,F.PointerEvent=o.PointerEvent||o.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function G(){}var N=F;E.default=N;var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var B={init:function(i){var o=E.default.Element,c=i.navigator||{};B.supportsTouch="ontouchstart"in i||l.default.func(i.DocumentTouch)&&E.default.document instanceof i.DocumentTouch,B.supportsPointerEvent=c.pointerEnabled!==!1&&!!E.default.PointerEvent,B.isIOS=/iP(hone|od|ad)/.test(c.platform),B.isIOS7=/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),B.isIe9=/MSIE 9/.test(c.userAgent),B.isOperaMobile=c.appName==="Opera"&&B.supportsTouch&&/Presto/.test(c.userAgent),B.prefixedMatchesSelector="matches"in o.prototype?"matches":"webkitMatchesSelector"in o.prototype?"webkitMatchesSelector":"mozMatchesSelector"in o.prototype?"mozMatchesSelector":"oMatchesSelector"in o.prototype?"oMatchesSelector":"msMatchesSelector",B.pEventTypes=B.supportsPointerEvent?E.default.PointerEvent===i.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,B.wheelEvent=E.default.document&&"onmousewheel"in E.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},Y=B;D.default=Y;var T={};function U(i){var o=i.parentNode;if(l.default.docFrag(o)){for(;(o=o.host)&&l.default.docFrag(o););return o}return o}function J(i,o){return n.window!==n.realWindow&&(o=o.replace(/\/deep\//g," ")),i[D.default.prefixedMatchesSelector](o)}Object.defineProperty(T,"__esModule",{value:!0}),T.closest=function(i,o){for(;l.default.element(i);){if(J(i,o))return i;i=U(i)}return null},T.getActualElement=function(i){return i.correspondingUseElement||i},T.getElementClientRect=j,T.getElementRect=function(i){var o=j(i);if(!D.default.isIOS7&&o){var c=pe(n.getWindow(i));o.left+=c.x,o.right+=c.x,o.top+=c.y,o.bottom+=c.y}return o},T.getPath=function(i){for(var o=[];i;)o.push(i),i=U(i);return o},T.getScrollXY=pe,T.indexOfDeepestElement=function(i){for(var o,c=[],u=0;u<i.length;u++){var d=i[u],x=i[o];if(d&&u!==o)if(x){var w=$(d),y=$(x);if(w!==d.ownerDocument)if(y!==d.ownerDocument)if(w!==y){c=c.length?c:we(x);var M=void 0;if(x instanceof E.default.HTMLElement&&d instanceof E.default.SVGElement&&!(d instanceof E.default.SVGSVGElement)){if(d===y)continue;M=d.ownerSVGElement}else M=d;for(var C=we(M,x.ownerDocument),O=0;C[O]&&C[O]===c[O];)O++;var k=[C[O-1],C[O],c[O]];if(k[0])for(var Z=k[0].lastChild;Z;){if(Z===k[1]){o=u,c=C;break}if(Z===k[2])break;Z=Z.previousSibling}}else ne=d,W=x,(parseInt(n.getWindow(ne).getComputedStyle(ne).zIndex,10)||0)>=(parseInt(n.getWindow(W).getComputedStyle(W).zIndex,10)||0)&&(o=u);else o=u}else o=u}var ne,W;return o},T.matchesSelector=J,T.matchesUpTo=function(i,o,c){for(;l.default.element(i);){if(J(i,o))return!0;if((i=U(i))===c)return J(i,o)}return!1},T.nodeContains=function(i,o){if(i.contains)return i.contains(o);for(;o;){if(o===i)return!0;o=o.parentNode}return!1},T.parentNode=U,T.trySelector=function(i){return!!l.default.string(i)&&(E.default.document.querySelector(i),!0)};var $=function(i){return i.parentNode||i.host};function we(i,o){for(var c,u=[],d=i;(c=$(d))&&d!==o&&c!==d.ownerDocument;)u.unshift(d),d=c;return u}function pe(i){return{x:(i=i||n.window).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop}}function j(i){var o=i instanceof E.default.SVGElement?i.getBoundingClientRect():i.getClientRects()[0];return o&&{left:o.left,right:o.right,top:o.top,bottom:o.bottom,width:o.width||o.right-o.left,height:o.height||o.bottom-o.top}}var H={};Object.defineProperty(H,"__esModule",{value:!0}),H.default=function(i,o){for(var c in o)i[c]=o[c];return i};var q={};function ae(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}function le(i,o,c){return i==="parent"?(0,T.parentNode)(c):i==="self"?o.getRect(c):(0,T.closest)(c,i)}Object.defineProperty(q,"__esModule",{value:!0}),q.addEdges=function(i,o,c){i.left&&(o.left+=c.x),i.right&&(o.right+=c.x),i.top&&(o.top+=c.y),i.bottom&&(o.bottom+=c.y),o.width=o.right-o.left,o.height=o.bottom-o.top},q.getStringOptionResult=le,q.rectToXY=function(i){return i&&{x:"x"in i?i.x:i.left,y:"y"in i?i.y:i.top}},q.resolveRectLike=function(i,o,c,u){var d,x=i;return l.default.string(x)?x=le(x,o,c):l.default.func(x)&&(x=x.apply(void 0,function(w){if(Array.isArray(w))return ae(w)}(d=u)||function(w){if(typeof Symbol!="undefined"&&w[Symbol.iterator]!=null||w["@@iterator"]!=null)return Array.from(w)}(d)||function(w,y){if(w){if(typeof w=="string")return ae(w,y);var M=Object.prototype.toString.call(w).slice(8,-1);return M==="Object"&&w.constructor&&(M=w.constructor.name),M==="Map"||M==="Set"?Array.from(w):M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)?ae(w,y):void 0}}(d)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),l.default.element(x)&&(x=(0,T.getElementRect)(x)),x},q.tlbrToXywh=function(i){return!i||"x"in i&&"y"in i||((i=(0,H.default)({},i)).x=i.left||0,i.y=i.top||0,i.width=i.width||(i.right||0)-i.x,i.height=i.height||(i.bottom||0)-i.y),i},q.xywhToTlbr=function(i){return!i||"left"in i&&"top"in i||((i=(0,H.default)({},i)).left=i.x||0,i.top=i.y||0,i.right=i.right||i.left+i.width,i.bottom=i.bottom||i.top+i.height),i};var Q={};Object.defineProperty(Q,"__esModule",{value:!0}),Q.default=function(i,o,c){var u=i.options[c],d=u&&u.origin||i.options.origin,x=(0,q.resolveRectLike)(d,i,o,[i&&o]);return(0,q.rectToXY)(x)||{x:0,y:0}};var se={};function xe(i){return i.trim().split(/ +/)}Object.defineProperty(se,"__esModule",{value:!0}),se.default=function i(o,c,u){if(u=u||{},l.default.string(o)&&o.search(" ")!==-1&&(o=xe(o)),l.default.array(o))return o.reduce(function(M,C){return(0,H.default)(M,i(C,c,u))},u);if(l.default.object(o)&&(c=o,o=""),l.default.func(c))u[o]=u[o]||[],u[o].push(c);else if(l.default.array(c))for(var d=0;d<c.length;d++){var x;x=c[d],i(o,x,u)}else if(l.default.object(c))for(var w in c){var y=xe(w).map(function(M){return"".concat(o).concat(M)});i(y,c[w],u)}return u};var ue={};Object.defineProperty(ue,"__esModule",{value:!0}),ue.default=void 0,ue.default=function(i,o){return Math.sqrt(i*i+o*o)};var me={};Object.defineProperty(me,"__esModule",{value:!0}),me.default=function(i,o){i.__set||(i.__set={});var c=function(d){typeof i[d]!="function"&&d!=="__set"&&Object.defineProperty(i,d,{get:function(){return d in i.__set?i.__set[d]:i.__set[d]=o[d]},set:function(x){i.__set[d]=x},configurable:!0})};for(var u in o)c(u);return i};var re={};function De(i){return i instanceof E.default.Event||i instanceof E.default.Touch}function oe(i,o,c){return i=i||"page",(c=c||{}).x=o[i+"X"],c.y=o[i+"Y"],c}function at(i,o){return o=o||{x:0,y:0},D.default.isOperaMobile&&De(i)?(oe("screen",i,o),o.x+=window.scrollX,o.y+=window.scrollY):oe("page",i,o),o}function He(i,o){return o=o||{},D.default.isOperaMobile&&De(i)?oe("screen",i,o):oe("client",i,o),o}function ke(i){var o=[];return l.default.array(i)?(o[0]=i[0],o[1]=i[1]):i.type==="touchend"?i.touches.length===1?(o[0]=i.touches[0],o[1]=i.changedTouches[0]):i.touches.length===0&&(o[0]=i.changedTouches[0],o[1]=i.changedTouches[1]):(o[0]=i.touches[0],o[1]=i.touches[1]),o}function Pe(i){for(var o={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},c=0;c<i.length;c++){var u=i[c];for(var d in o)o[d]+=u[d]}for(var x in o)o[x]/=i.length;return o}Object.defineProperty(re,"__esModule",{value:!0}),re.coordsToEvent=function(i){return{coords:i,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},re.copyCoords=function(i,o){i.page=i.page||{},i.page.x=o.page.x,i.page.y=o.page.y,i.client=i.client||{},i.client.x=o.client.x,i.client.y=o.client.y,i.timeStamp=o.timeStamp},re.getClientXY=He,re.getEventTargets=function(i){var o=l.default.func(i.composedPath)?i.composedPath():i.path;return[T.getActualElement(o?o[0]:i.target),T.getActualElement(i.currentTarget)]},re.getPageXY=at,re.getPointerId=function(i){return l.default.number(i.pointerId)?i.pointerId:i.identifier},re.getPointerType=function(i){return l.default.string(i.pointerType)?i.pointerType:l.default.number(i.pointerType)?[void 0,void 0,"touch","pen","mouse"][i.pointerType]:/touch/.test(i.type||"")||i instanceof E.default.Touch?"touch":"mouse"},re.getTouchPair=ke,re.getXY=oe,re.isNativePointer=De,re.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},re.pointerAverage=Pe,Object.defineProperty(re,"pointerExtend",{enumerable:!0,get:function(){return me.default}}),re.setCoordDeltas=function(i,o,c){i.page.x=c.page.x-o.page.x,i.page.y=c.page.y-o.page.y,i.client.x=c.client.x-o.client.x,i.client.y=c.client.y-o.client.y,i.timeStamp=c.timeStamp-o.timeStamp},re.setCoordVelocity=function(i,o){var c=Math.max(o.timeStamp/1e3,.001);i.page.x=o.page.x/c,i.page.y=o.page.y/c,i.client.x=o.client.x/c,i.client.y=o.client.y/c,i.timeStamp=c},re.setCoords=function(i,o,c){var u=o.length>1?Pe(o):o[0];at(u,i.page),He(u,i.client),i.timeStamp=c},re.setZeroCoords=function(i){i.page.x=0,i.page.y=0,i.client.x=0,i.client.y=0},re.touchAngle=function(i,o){var c=o+"X",u=o+"Y",d=ke(i),x=d[1][c]-d[0][c],w=d[1][u]-d[0][u];return 180*Math.atan2(w,x)/Math.PI},re.touchBBox=function(i){if(!i.length)return null;var o=ke(i),c=Math.min(o[0].pageX,o[1].pageX),u=Math.min(o[0].pageY,o[1].pageY),d=Math.max(o[0].pageX,o[1].pageX),x=Math.max(o[0].pageY,o[1].pageY);return{x:c,y:u,left:c,top:u,right:d,bottom:x,width:d-c,height:x-u}},re.touchDistance=function(i,o){var c=o+"X",u=o+"Y",d=ke(i),x=d[0][c]-d[1][c],w=d[0][u]-d[1][u];return(0,ue.default)(x,w)};var Ze={};function Ye(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Be(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.BaseEvent=void 0;var yt=function(){function i(u){(function(d,x){if(!(d instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),Be(this,"immediatePropagationStopped",!1),Be(this,"propagationStopped",!1),this._interaction=u}var o,c;return o=i,(c=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&Ye(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();Ze.BaseEvent=yt,Object.defineProperty(yt.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Ve={};Object.defineProperty(Ve,"__esModule",{value:!0}),Ve.remove=Ve.merge=Ve.from=Ve.findIndex=Ve.find=Ve.contains=void 0,Ve.contains=function(i,o){return i.indexOf(o)!==-1},Ve.remove=function(i,o){return i.splice(i.indexOf(o),1)};var Mt=function(i,o){for(var c=0;c<o.length;c++){var u=o[c];i.push(u)}return i};Ve.merge=Mt,Ve.from=function(i){return Mt([],i)};var zt=function(i,o){for(var c=0;c<i.length;c++)if(o(i[c],c,i))return c;return-1};Ve.findIndex=zt,Ve.find=function(i,o){return i[zt(i,o)]};var lt={};function tt(i){return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},tt(i)}function qt(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Nt(i,o){return Nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Nt(i,o)}function I(i,o){if(o&&(tt(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(i)}function P(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function te(i){return te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},te(i)}function fe(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(lt,"__esModule",{value:!0}),lt.DropEvent=void 0;var be=function(i){(function(y,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(M&&M.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),Object.defineProperty(y,"prototype",{writable:!1}),M&&Nt(y,M)})(w,i);var o,c,u,d,x=(u=w,d=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var y,M=te(u);if(d){var C=te(this).constructor;y=Reflect.construct(M,arguments,C)}else y=M.apply(this,arguments);return I(this,y)});function w(y,M,C){var O;(function(W,de){if(!(W instanceof de))throw new TypeError("Cannot call a class as a function")})(this,w),fe(P(O=x.call(this,M._interaction)),"dropzone",void 0),fe(P(O),"dragEvent",void 0),fe(P(O),"relatedTarget",void 0),fe(P(O),"draggable",void 0),fe(P(O),"propagationStopped",!1),fe(P(O),"immediatePropagationStopped",!1);var k=C==="dragleave"?y.prev:y.cur,Z=k.element,ne=k.dropzone;return O.type=C,O.target=Z,O.currentTarget=Z,O.dropzone=ne,O.dragEvent=M,O.relatedTarget=M.target,O.draggable=M.interactable,O.timeStamp=M.timeStamp,O}return o=w,(c=[{key:"reject",value:function(){var y=this,M=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&M.cur.dropzone===this.dropzone&&M.cur.element===this.target)if(M.prev.dropzone=this.dropzone,M.prev.element=this.target,M.rejected=!0,M.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var C=M.activeDrops,O=Ve.findIndex(C,function(Z){var ne=Z.dropzone,W=Z.element;return ne===y.dropzone&&W===y.target});M.activeDrops.splice(O,1);var k=new w(M,this.dragEvent,"dropdeactivate");k.dropzone=this.dropzone,k.target=this.target,this.dropzone.fire(k)}else this.dropzone.fire(new w(M,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&qt(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),w}(Ze.BaseEvent);lt.DropEvent=be;var Ee={};function ze(i,o){for(var c=0;c<i.slice().length;c++){var u=i.slice()[c],d=u.dropzone,x=u.element;o.dropzone=d,o.target=x,d.fire(o),o.propagationStopped=o.immediatePropagationStopped=!1}}function L(i,o){for(var c=function(x,w){for(var y=x.interactables,M=[],C=0;C<y.list.length;C++){var O=y.list[C];if(O.options.drop.enabled){var k=O.options.drop.accept;if(!(l.default.element(k)&&k!==w||l.default.string(k)&&!T.matchesSelector(w,k)||l.default.func(k)&&!k({dropzone:O,draggableElement:w})))for(var Z=l.default.string(O.target)?O._context.querySelectorAll(O.target):l.default.array(O.target)?O.target:[O.target],ne=0;ne<Z.length;ne++){var W=Z[ne];W!==w&&M.push({dropzone:O,element:W,rect:O.getRect(W)})}}}return M}(i,o),u=0;u<c.length;u++){var d=c[u];d.rect=d.dropzone.getRect(d.element)}return c}function ce(i,o,c){for(var u=i.dropState,d=i.interactable,x=i.element,w=[],y=0;y<u.activeDrops.length;y++){var M=u.activeDrops[y],C=M.dropzone,O=M.element,k=M.rect;w.push(C.dropCheck(o,c,d,x,O,k)?O:null)}var Z=T.indexOfDeepestElement(w);return u.activeDrops[Z]||null}function Me(i,o,c){var u=i.dropState,d={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return c.type==="dragstart"&&(d.activate=new lt.DropEvent(u,c,"dropactivate"),d.activate.target=null,d.activate.dropzone=null),c.type==="dragend"&&(d.deactivate=new lt.DropEvent(u,c,"dropdeactivate"),d.deactivate.target=null,d.deactivate.dropzone=null),u.rejected||(u.cur.element!==u.prev.element&&(u.prev.dropzone&&(d.leave=new lt.DropEvent(u,c,"dragleave"),c.dragLeave=d.leave.target=u.prev.element,c.prevDropzone=d.leave.dropzone=u.prev.dropzone),u.cur.dropzone&&(d.enter=new lt.DropEvent(u,c,"dragenter"),c.dragEnter=u.cur.element,c.dropzone=u.cur.dropzone)),c.type==="dragend"&&u.cur.dropzone&&(d.drop=new lt.DropEvent(u,c,"drop"),c.dropzone=u.cur.dropzone,c.relatedTarget=u.cur.element),c.type==="dragmove"&&u.cur.dropzone&&(d.move=new lt.DropEvent(u,c,"dropmove"),d.move.dragmove=c,c.dropzone=u.cur.dropzone)),d}function ge(i,o){var c=i.dropState,u=c.activeDrops,d=c.cur,x=c.prev;o.leave&&x.dropzone.fire(o.leave),o.enter&&d.dropzone.fire(o.enter),o.move&&d.dropzone.fire(o.move),o.drop&&d.dropzone.fire(o.drop),o.deactivate&&ze(u,o.deactivate),c.prev.dropzone=d.dropzone,c.prev.element=d.element}function z(i,o){var c=i.interaction,u=i.iEvent,d=i.event;if(u.type==="dragmove"||u.type==="dragend"){var x=c.dropState;o.dynamicDrop&&(x.activeDrops=L(o,c.element));var w=u,y=ce(c,w,d);x.rejected=x.rejected&&!!y&&y.dropzone===x.cur.dropzone&&y.element===x.cur.element,x.cur.dropzone=y&&y.dropzone,x.cur.element=y&&y.element,x.events=Me(c,0,w)}}Object.defineProperty(Ee,"__esModule",{value:!0}),Ee.default=void 0;var ve={id:"actions/drop",install:function(i){var o=i.actions,c=i.interactStatic,u=i.Interactable,d=i.defaults;i.usePlugin(_.default),u.prototype.dropzone=function(x){return function(w,y){if(l.default.object(y)){if(w.options.drop.enabled=y.enabled!==!1,y.listeners){var M=(0,se.default)(y.listeners),C=Object.keys(M).reduce(function(O,k){return O[/^(enter|leave)/.test(k)?"drag".concat(k):/^(activate|deactivate|move)/.test(k)?"drop".concat(k):k]=M[k],O},{});w.off(w.options.drop.listeners),w.on(C),w.options.drop.listeners=C}return l.default.func(y.ondrop)&&w.on("drop",y.ondrop),l.default.func(y.ondropactivate)&&w.on("dropactivate",y.ondropactivate),l.default.func(y.ondropdeactivate)&&w.on("dropdeactivate",y.ondropdeactivate),l.default.func(y.ondragenter)&&w.on("dragenter",y.ondragenter),l.default.func(y.ondragleave)&&w.on("dragleave",y.ondragleave),l.default.func(y.ondropmove)&&w.on("dropmove",y.ondropmove),/^(pointer|center)$/.test(y.overlap)?w.options.drop.overlap=y.overlap:l.default.number(y.overlap)&&(w.options.drop.overlap=Math.max(Math.min(1,y.overlap),0)),"accept"in y&&(w.options.drop.accept=y.accept),"checker"in y&&(w.options.drop.checker=y.checker),w}return l.default.bool(y)?(w.options.drop.enabled=y,w):w.options.drop}(this,x)},u.prototype.dropCheck=function(x,w,y,M,C,O){return function(k,Z,ne,W,de,Se,he){var Ce=!1;if(!(he=he||k.getRect(Se)))return!!k.options.drop.checker&&k.options.drop.checker(Z,ne,Ce,k,Se,W,de);var Oe=k.options.drop.overlap;if(Oe==="pointer"){var Xe=(0,Q.default)(W,de,"drag"),st=re.getPageXY(Z);st.x+=Xe.x,st.y+=Xe.y;var ht=st.x>he.left&&st.x<he.right,Qe=st.y>he.top&&st.y<he.bottom;Ce=ht&&Qe}var ut=W.getRect(de);if(ut&&Oe==="center"){var fn=ut.left+ut.width/2,Hn=ut.top+ut.height/2;Ce=fn>=he.left&&fn<=he.right&&Hn>=he.top&&Hn<=he.bottom}return ut&&l.default.number(Oe)&&(Ce=Math.max(0,Math.min(he.right,ut.right)-Math.max(he.left,ut.left))*Math.max(0,Math.min(he.bottom,ut.bottom)-Math.max(he.top,ut.top))/(ut.width*ut.height)>=Oe),k.options.drop.checker&&(Ce=k.options.drop.checker(Z,ne,Ce,k,Se,W,de)),Ce}(this,x,w,y,M,C,O)},c.dynamicDrop=function(x){return l.default.bool(x)?(i.dynamicDrop=x,c):i.dynamicDrop},(0,H.default)(o.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),o.methodDict.drop="dropzone",i.dynamicDrop=!1,d.actions.drop=ve.defaults},listeners:{"interactions:before-action-start":function(i){var o=i.interaction;o.prepared.name==="drag"&&(o.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(i,o){var c=i.interaction,u=(i.event,i.iEvent);if(c.prepared.name==="drag"){var d=c.dropState;d.activeDrops=null,d.events=null,d.activeDrops=L(o,c.element),d.events=Me(c,0,u),d.events.activate&&(ze(d.activeDrops,d.events.activate),o.fire("actions/drop:start",{interaction:c,dragEvent:u}))}},"interactions:action-move":z,"interactions:after-action-move":function(i,o){var c=i.interaction,u=i.iEvent;c.prepared.name==="drag"&&(ge(c,c.dropState.events),o.fire("actions/drop:move",{interaction:c,dragEvent:u}),c.dropState.events={})},"interactions:action-end":function(i,o){if(i.interaction.prepared.name==="drag"){var c=i.interaction,u=i.iEvent;z(i,o),ge(c,c.dropState.events),o.fire("actions/drop:end",{interaction:c,dragEvent:u})}},"interactions:stop":function(i){var o=i.interaction;if(o.prepared.name==="drag"){var c=o.dropState;c&&(c.activeDrops=null,c.events=null,c.cur.dropzone=null,c.cur.element=null,c.prev.dropzone=null,c.prev.element=null,c.rejected=!1)}}},getActiveDrops:L,getDrop:ce,getDropEvents:Me,fireDropEvents:ge,defaults:{enabled:!1,accept:null,overlap:"pointer"}},_e=ve;Ee.default=_e;var Re={};function Te(i){var o=i.interaction,c=i.iEvent,u=i.phase;if(o.prepared.name==="gesture"){var d=o.pointers.map(function(C){return C.pointer}),x=u==="start",w=u==="end",y=o.interactable.options.deltaSource;if(c.touches=[d[0],d[1]],x)c.distance=re.touchDistance(d,y),c.box=re.touchBBox(d),c.scale=1,c.ds=0,c.angle=re.touchAngle(d,y),c.da=0,o.gesture.startDistance=c.distance,o.gesture.startAngle=c.angle;else if(w){var M=o.prevEvent;c.distance=M.distance,c.box=M.box,c.scale=M.scale,c.ds=0,c.angle=M.angle,c.da=0}else c.distance=re.touchDistance(d,y),c.box=re.touchBBox(d),c.scale=c.distance/o.gesture.startDistance,c.angle=re.touchAngle(d,y),c.ds=c.scale-o.gesture.scale,c.da=c.angle-o.gesture.angle;o.gesture.distance=c.distance,o.gesture.angle=c.angle,l.default.number(c.scale)&&c.scale!==1/0&&!isNaN(c.scale)&&(o.gesture.scale=c.scale)}}Object.defineProperty(Re,"__esModule",{value:!0}),Re.default=void 0;var Le={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(i){var o=i.actions,c=i.Interactable,u=i.defaults;c.prototype.gesturable=function(d){return l.default.object(d)?(this.options.gesture.enabled=d.enabled!==!1,this.setPerAction("gesture",d),this.setOnEvents("gesture",d),this):l.default.bool(d)?(this.options.gesture.enabled=d,this):this.options.gesture},o.map.gesture=Le,o.methodDict.gesture="gesturable",u.actions.gesture=Le.defaults},listeners:{"interactions:action-start":Te,"interactions:action-move":Te,"interactions:action-end":Te,"interactions:new":function(i){i.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(i){if(!(i.interaction.pointers.length<2)){var o=i.interactable.options.gesture;if(o&&o.enabled)return i.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},ye=Le;Re.default=ye;var Ne={};function ot(i,o,c,u,d,x,w){if(!o)return!1;if(o===!0){var y=l.default.number(x.width)?x.width:x.right-x.left,M=l.default.number(x.height)?x.height:x.bottom-x.top;if(w=Math.min(w,Math.abs((i==="left"||i==="right"?y:M)/2)),y<0&&(i==="left"?i="right":i==="right"&&(i="left")),M<0&&(i==="top"?i="bottom":i==="bottom"&&(i="top")),i==="left"){var C=y>=0?x.left:x.right;return c.x<C+w}if(i==="top"){var O=M>=0?x.top:x.bottom;return c.y<O+w}if(i==="right")return c.x>(y>=0?x.right:x.left)-w;if(i==="bottom")return c.y>(M>=0?x.bottom:x.top)-w}return!!l.default.element(u)&&(l.default.element(o)?o===u:T.matchesUpTo(u,o,d))}function it(i){var o=i.iEvent,c=i.interaction;if(c.prepared.name==="resize"&&c.resizeAxes){var u=o;c.interactable.options.resize.square?(c.resizeAxes==="y"?u.delta.x=u.delta.y:u.delta.y=u.delta.x,u.axes="xy"):(u.axes=c.resizeAxes,c.resizeAxes==="x"?u.delta.y=0:c.resizeAxes==="y"&&(u.delta.x=0))}}Object.defineProperty(Ne,"__esModule",{value:!0}),Ne.default=void 0;var pt={id:"actions/resize",before:["actions/drag"],install:function(i){var o=i.actions,c=i.browser,u=i.Interactable,d=i.defaults;pt.cursors=function(x){return x.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(c),pt.defaultMargin=c.supportsTouch||c.supportsPointerEvent?20:10,u.prototype.resizable=function(x){return function(w,y,M){return l.default.object(y)?(w.options.resize.enabled=y.enabled!==!1,w.setPerAction("resize",y),w.setOnEvents("resize",y),l.default.string(y.axis)&&/^x$|^y$|^xy$/.test(y.axis)?w.options.resize.axis=y.axis:y.axis===null&&(w.options.resize.axis=M.defaults.actions.resize.axis),l.default.bool(y.preserveAspectRatio)?w.options.resize.preserveAspectRatio=y.preserveAspectRatio:l.default.bool(y.square)&&(w.options.resize.square=y.square),w):l.default.bool(y)?(w.options.resize.enabled=y,w):w.options.resize}(this,x,i)},o.map.resize=pt,o.methodDict.resize="resizable",d.actions.resize=pt.defaults},listeners:{"interactions:new":function(i){i.interaction.resizeAxes="xy"},"interactions:action-start":function(i){(function(o){var c=o.iEvent,u=o.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var d=c,x=u.rect;u._rects={start:(0,H.default)({},x),corrected:(0,H.default)({},x),previous:(0,H.default)({},x),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},d.edges=u.prepared.edges,d.rect=u._rects.corrected,d.deltaRect=u._rects.delta}})(i),it(i)},"interactions:action-move":function(i){(function(o){var c=o.iEvent,u=o.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var d=c,x=u.interactable.options.resize.invert,w=x==="reposition"||x==="negate",y=u.rect,M=u._rects,C=M.start,O=M.corrected,k=M.delta,Z=M.previous;if((0,H.default)(Z,O),w){if((0,H.default)(O,y),x==="reposition"){if(O.top>O.bottom){var ne=O.top;O.top=O.bottom,O.bottom=ne}if(O.left>O.right){var W=O.left;O.left=O.right,O.right=W}}}else O.top=Math.min(y.top,C.bottom),O.bottom=Math.max(y.bottom,C.top),O.left=Math.min(y.left,C.right),O.right=Math.max(y.right,C.left);for(var de in O.width=O.right-O.left,O.height=O.bottom-O.top,O)k[de]=O[de]-Z[de];d.edges=u.prepared.edges,d.rect=O,d.deltaRect=k}})(i),it(i)},"interactions:action-end":function(i){var o=i.iEvent,c=i.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var u=o;u.edges=c.prepared.edges,u.rect=c._rects.corrected,u.deltaRect=c._rects.delta}},"auto-start:check":function(i){var o=i.interaction,c=i.interactable,u=i.element,d=i.rect,x=i.buttons;if(d){var w=(0,H.default)({},o.coords.cur.page),y=c.options.resize;if(y&&y.enabled&&(!o.pointerIsDown||!/mouse|pointer/.test(o.pointerType)||(x&y.mouseButtons)!=0)){if(l.default.object(y.edges)){var M={left:!1,right:!1,top:!1,bottom:!1};for(var C in M)M[C]=ot(C,y.edges[C],w,o._latestPointer.eventTarget,u,d,y.margin||pt.defaultMargin);M.left=M.left&&!M.right,M.top=M.top&&!M.bottom,(M.left||M.right||M.top||M.bottom)&&(i.action={name:"resize",edges:M})}else{var O=y.axis!=="y"&&w.x>d.right-pt.defaultMargin,k=y.axis!=="x"&&w.y>d.bottom-pt.defaultMargin;(O||k)&&(i.action={name:"resize",axes:(O?"x":"")+(k?"y":"")})}return!i.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(i){var o=i.edges,c=i.axis,u=i.name,d=pt.cursors,x=null;if(c)x=d[u+c];else if(o){for(var w="",y=["top","bottom","left","right"],M=0;M<y.length;M++){var C=y[M];o[C]&&(w+=C)}x=d[w]}return x},defaultMargin:null},ln=pt;Ne.default=ln;var mi={};Object.defineProperty(mi,"__esModule",{value:!0}),mi.default=void 0;var Qo={id:"actions",install:function(i){i.usePlugin(Re.default),i.usePlugin(Ne.default),i.usePlugin(_.default),i.usePlugin(Ee.default)}};mi.default=Qo;var Ut={};Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.default=void 0;var gn,vn,br=0,es={request:function(i){return gn(i)},cancel:function(i){return vn(i)},init:function(i){if(gn=i.requestAnimationFrame,vn=i.cancelAnimationFrame,!gn)for(var o=["ms","moz","webkit","o"],c=0;c<o.length;c++){var u=o[c];gn=i["".concat(u,"RequestAnimationFrame")],vn=i["".concat(u,"CancelAnimationFrame")]||i["".concat(u,"CancelRequestAnimationFrame")]}gn=gn&&gn.bind(i),vn=vn&&vn.bind(i),gn||(gn=function(d){var x=Date.now(),w=Math.max(0,16-(x-br)),y=i.setTimeout(function(){d(x+w)},w);return br=x+w,y},vn=function(d){return clearTimeout(d)})}};Ut.default=es;var Tn={};Object.defineProperty(Tn,"__esModule",{value:!0}),Tn.default=void 0,Tn.getContainer=R,Tn.getScroll=X,Tn.getScrollSize=function(i){return l.default.window(i)&&(i=window.document.body),{x:i.scrollWidth,y:i.scrollHeight}},Tn.getScrollSizeDelta=function(i,o){var c=i.interaction,u=i.element,d=c&&c.interactable.options[c.prepared.name].autoScroll;if(!d||!d.enabled)return o(),{x:0,y:0};var x=R(d.container,c.interactable,u),w=X(x);o();var y=X(x);return{x:y.x-w.x,y:y.y-w.y}};var Ue={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(i){Ue.isScrolling=!0,Ut.default.cancel(Ue.i),i.autoScroll=Ue,Ue.interaction=i,Ue.prevTime=Ue.now(),Ue.i=Ut.default.request(Ue.scroll)},stop:function(){Ue.isScrolling=!1,Ue.interaction&&(Ue.interaction.autoScroll=null),Ut.default.cancel(Ue.i)},scroll:function(){var i=Ue.interaction,o=i.interactable,c=i.element,u=i.prepared.name,d=o.options[u].autoScroll,x=R(d.container,o,c),w=Ue.now(),y=(w-Ue.prevTime)/1e3,M=d.speed*y;if(M>=1){var C={x:Ue.x*M,y:Ue.y*M};if(C.x||C.y){var O=X(x);l.default.window(x)?x.scrollBy(C.x,C.y):x&&(x.scrollLeft+=C.x,x.scrollTop+=C.y);var k=X(x),Z={x:k.x-O.x,y:k.y-O.y};(Z.x||Z.y)&&o.fire({type:"autoscroll",target:c,interactable:o,delta:Z,interaction:i,container:x})}Ue.prevTime=w}Ue.isScrolling&&(Ut.default.cancel(Ue.i),Ue.i=Ut.default.request(Ue.scroll))},check:function(i,o){var c;return(c=i.options[o].autoScroll)==null?void 0:c.enabled},onInteractionMove:function(i){var o=i.interaction,c=i.pointer;if(o.interacting()&&Ue.check(o.interactable,o.prepared.name))if(o.simulation)Ue.x=Ue.y=0;else{var u,d,x,w,y=o.interactable,M=o.element,C=o.prepared.name,O=y.options[C].autoScroll,k=R(O.container,y,M);if(l.default.window(k))w=c.clientX<Ue.margin,u=c.clientY<Ue.margin,d=c.clientX>k.innerWidth-Ue.margin,x=c.clientY>k.innerHeight-Ue.margin;else{var Z=T.getElementClientRect(k);w=c.clientX<Z.left+Ue.margin,u=c.clientY<Z.top+Ue.margin,d=c.clientX>Z.right-Ue.margin,x=c.clientY>Z.bottom-Ue.margin}Ue.x=d?1:w?-1:0,Ue.y=x?1:u?-1:0,Ue.isScrolling||(Ue.margin=O.margin,Ue.speed=O.speed,Ue.start(o))}}};function R(i,o,c){return(l.default.string(i)?(0,q.getStringOptionResult)(i,o,c):i)||(0,n.getWindow)(c)}function X(i){return l.default.window(i)&&(i=window.document.body),{x:i.scrollLeft,y:i.scrollTop}}var ee={id:"auto-scroll",install:function(i){var o=i.defaults,c=i.actions;i.autoScroll=Ue,Ue.now=function(){return i.now()},c.phaselessTypes.autoscroll=!0,o.perAction.autoScroll=Ue.defaults},listeners:{"interactions:new":function(i){i.interaction.autoScroll=null},"interactions:destroy":function(i){i.interaction.autoScroll=null,Ue.stop(),Ue.interaction&&(Ue.interaction=null)},"interactions:stop":Ue.stop,"interactions:action-move":function(i){return Ue.onInteractionMove(i)}}},K=ee;Tn.default=K;var ie={};Object.defineProperty(ie,"__esModule",{value:!0}),ie.copyAction=function(i,o){return i.name=o.name,i.axis=o.axis,i.edges=o.edges,i},ie.sign=void 0,ie.warnOnce=function(i,o){var c=!1;return function(){return c||(n.window.console.warn(o),c=!0),i.apply(this,arguments)}},ie.sign=function(i){return i>=0?1:-1};var Fe={};function We(i){return l.default.bool(i)?(this.options.styleCursor=i,this):i===null?(delete this.options.styleCursor,this):this.options.styleCursor}function qe(i){return l.default.func(i)?(this.options.actionChecker=i,this):i===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.default=void 0;var je={id:"auto-start/interactableMethods",install:function(i){var o=i.Interactable;o.prototype.getAction=function(c,u,d,x){var w=function(y,M,C,O,k){var Z=y.getRect(O),ne={action:null,interactable:y,interaction:C,element:O,rect:Z,buttons:M.buttons||{0:1,1:4,3:8,4:16}[M.button]};return k.fire("auto-start:check",ne),ne.action}(this,u,d,x,i);return this.options.actionChecker?this.options.actionChecker(c,u,w,this,x,d):w},o.prototype.ignoreFrom=(0,ie.warnOnce)(function(c){return this._backCompatOption("ignoreFrom",c)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),o.prototype.allowFrom=(0,ie.warnOnce)(function(c){return this._backCompatOption("allowFrom",c)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),o.prototype.actionChecker=qe,o.prototype.styleCursor=We}};Fe.default=je;var Ke={};function Je(i,o,c,u,d){return o.testIgnoreAllow(o.options[i.name],c,u)&&o.options[i.name].enabled&&_n(o,c,i,d)?i:null}function et(i,o,c,u,d,x,w){for(var y=0,M=u.length;y<M;y++){var C=u[y],O=d[y],k=C.getAction(o,c,i,O);if(k){var Z=Je(k,C,O,x,w);if(Z)return{action:Z,interactable:C,element:O}}}return{action:null,interactable:null,element:null}}function mt(i,o,c,u,d){var x=[],w=[],y=u;function M(O){x.push(O),w.push(y)}for(;l.default.element(y);){x=[],w=[],d.interactables.forEachMatch(y,M);var C=et(i,o,c,x,w,u,d);if(C.action&&!C.interactable.options[C.action.name].manualStart)return C;y=T.parentNode(y)}return{action:null,interactable:null,element:null}}function An(i,o,c){var u=o.action,d=o.interactable,x=o.element;u=u||{name:null},i.interactable=d,i.element=x,(0,ie.copyAction)(i.prepared,u),i.rect=d&&u.name?d.getRect(x):null,nt(i,c),c.fire("autoStart:prepared",{interaction:i})}function _n(i,o,c,u){var d=i.options,x=d[c.name].max,w=d[c.name].maxPerElement,y=u.autoStart.maxInteractions,M=0,C=0,O=0;if(!(x&&w&&y))return!1;for(var k=0;k<u.interactions.list.length;k++){var Z=u.interactions.list[k],ne=Z.prepared.name;if(Z.interacting()&&(++M>=y||Z.interactable===i&&((C+=ne===c.name?1:0)>=x||Z.element===o&&(O++,ne===c.name&&O>=w))))return!1}return y>0}function Bn(i,o){return l.default.number(i)?(o.autoStart.maxInteractions=i,this):o.autoStart.maxInteractions}function Yt(i,o,c){var u=c.autoStart.cursorElement;u&&u!==i&&(u.style.cursor=""),i.ownerDocument.documentElement.style.cursor=o,i.style.cursor=o,c.autoStart.cursorElement=o?i:null}function nt(i,o){var c=i.interactable,u=i.element,d=i.prepared;if(i.pointerType==="mouse"&&c&&c.options.styleCursor){var x="";if(d.name){var w=c.options[d.name].cursorChecker;x=l.default.func(w)?w(d,c,u,i._interacting):o.actions.map[d.name].getCursor(d)}Yt(i.element,x||"",o)}else o.autoStart.cursorElement&&Yt(o.autoStart.cursorElement,"",o)}Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.default=void 0;var ei={id:"auto-start/base",before:["actions"],install:function(i){var o=i.interactStatic,c=i.defaults;i.usePlugin(Fe.default),c.base.actionChecker=null,c.base.styleCursor=!0,(0,H.default)(c.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),o.maxInteractions=function(u){return Bn(u,i)},i.autoStart={maxInteractions:1/0,withinInteractionLimit:_n,cursorElement:null}},listeners:{"interactions:down":function(i,o){var c=i.interaction,u=i.pointer,d=i.event,x=i.eventTarget;c.interacting()||An(c,mt(c,u,d,x,o),o)},"interactions:move":function(i,o){(function(c,u){var d=c.interaction,x=c.pointer,w=c.event,y=c.eventTarget;d.pointerType!=="mouse"||d.pointerIsDown||d.interacting()||An(d,mt(d,x,w,y,u),u)})(i,o),function(c,u){var d=c.interaction;if(d.pointerIsDown&&!d.interacting()&&d.pointerWasMoved&&d.prepared.name){u.fire("autoStart:before-start",c);var x=d.interactable,w=d.prepared.name;w&&x&&(x.options[w].manualStart||!_n(x,d.element,d.prepared,u)?d.stop():(d.start(d.prepared,x,d.element),nt(d,u)))}}(i,o)},"interactions:stop":function(i,o){var c=i.interaction,u=c.interactable;u&&u.options.styleCursor&&Yt(c.element,"",o)}},maxInteractions:Bn,withinInteractionLimit:_n,validateAction:Je},bt=ei;Ke.default=bt;var Bt={};Object.defineProperty(Bt,"__esModule",{value:!0}),Bt.default=void 0;var Pn={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(i,o){var c=i.interaction,u=i.eventTarget,d=i.dx,x=i.dy;if(c.prepared.name==="drag"){var w=Math.abs(d),y=Math.abs(x),M=c.interactable.options.drag,C=M.startAxis,O=w>y?"x":w<y?"y":"xy";if(c.prepared.axis=M.lockAxis==="start"?O[0]:M.lockAxis,O!=="xy"&&C!=="xy"&&C!==O){c.prepared.name=null;for(var k=u,Z=function(W){if(W!==c.interactable){var de=c.interactable.options.drag;if(!de.manualStart&&W.testIgnoreAllow(de,k,u)){var Se=W.getAction(c.downPointer,c.downEvent,c,k);if(Se&&Se.name==="drag"&&function(he,Ce){if(!Ce)return!1;var Oe=Ce.options.drag.startAxis;return he==="xy"||Oe==="xy"||Oe===he}(O,W)&&Ke.default.validateAction(Se,W,k,u,o))return W}}};l.default.element(k);){var ne=o.interactables.forEachMatch(k,Z);if(ne){c.prepared.name="drag",c.interactable=ne,c.element=k;break}k=(0,T.parentNode)(k)}}}}}};Bt.default=Pn;var Cn={};function gi(i){var o=i.prepared&&i.prepared.name;if(!o)return null;var c=i.interactable.options;return c[o].hold||c[o].delay}Object.defineProperty(Cn,"__esModule",{value:!0}),Cn.default=void 0;var Dt={id:"auto-start/hold",install:function(i){var o=i.defaults;i.usePlugin(Ke.default),o.perAction.hold=0,o.perAction.delay=0},listeners:{"interactions:new":function(i){i.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(i){var o=i.interaction,c=gi(o);c>0&&(o.autoStartHoldTimer=setTimeout(function(){o.start(o.prepared,o.interactable,o.element)},c))},"interactions:move":function(i){var o=i.interaction,c=i.duplicate;o.autoStartHoldTimer&&o.pointerWasMoved&&!c&&(clearTimeout(o.autoStartHoldTimer),o.autoStartHoldTimer=null)},"autoStart:before-start":function(i){var o=i.interaction;gi(o)>0&&(o.prepared.name=null)}},getHoldDuration:gi},vi=Dt;Cn.default=vi;var ti={};Object.defineProperty(ti,"__esModule",{value:!0}),ti.default=void 0;var cn={id:"auto-start",install:function(i){i.usePlugin(Ke.default),i.usePlugin(Cn.default),i.usePlugin(Bt.default)}};ti.default=cn;var Bi={};function Iu(i){return/^(always|never|auto)$/.test(i)?(this.options.preventDefault=i,this):l.default.bool(i)?(this.options.preventDefault=i?"always":"never",this):this.options.preventDefault}function Ou(i){var o=i.interaction,c=i.event;o.interactable&&o.interactable.checkAndPreventDefault(c)}function Ra(i){var o=i.Interactable;o.prototype.preventDefault=Iu,o.prototype.checkAndPreventDefault=function(c){return function(u,d,x){var w=u.options.preventDefault;if(w!=="never")if(w!=="always"){if(d.events.supportsPassive&&/^touch(start|move)$/.test(x.type)){var y=(0,n.getWindow)(x.target).document,M=d.getDocOptions(y);if(!M||!M.events||M.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(x.type)||l.default.element(x.target)&&(0,T.matchesSelector)(x.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||x.preventDefault()}else x.preventDefault()}(this,i,c)},i.interactions.docEvents.push({type:"dragstart",listener:function(c){for(var u=0;u<i.interactions.list.length;u++){var d=i.interactions.list[u];if(d.element&&(d.element===c.target||(0,T.nodeContains)(d.element,c.target)))return void d.interactable.checkAndPreventDefault(c)}}})}Object.defineProperty(Bi,"__esModule",{value:!0}),Bi.default=void 0,Bi.install=Ra;var Fu={id:"core/interactablePreventDefault",install:Ra,listeners:["down","move","up","cancel"].reduce(function(i,o){return i["interactions:".concat(o)]=Ou,i},{})};Bi.default=Fu;var ts={};Object.defineProperty(ts,"__esModule",{value:!0}),ts.default=void 0,ts.default={};var Mr,ns={};Object.defineProperty(ns,"__esModule",{value:!0}),ns.default=void 0,function(i){i.touchAction="touchAction",i.boxSizing="boxSizing",i.noListeners="noListeners"}(Mr||(Mr={})),Mr.touchAction,Mr.boxSizing,Mr.noListeners;var zu={id:"dev-tools",install:function(){}};ns.default=zu;var _i={};Object.defineProperty(_i,"__esModule",{value:!0}),_i.default=function i(o){var c={};for(var u in o){var d=o[u];l.default.plainObject(d)?c[u]=i(d):l.default.array(d)?c[u]=Ve.from(d):c[u]=d}return c};var xi={};function Ia(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var d=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var x,w,y=[],M=!0,C=!1;try{for(d=d.call(c);!(M=(x=d.next()).done)&&(y.push(x.value),!u||y.length!==u);M=!0);}catch(O){C=!0,w=O}finally{try{M||d.return==null||d.return()}finally{if(C)throw w}}return y}}(i,o)||function(c,u){if(c){if(typeof c=="string")return Oa(c,u);var d=Object.prototype.toString.call(c).slice(8,-1);return d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set"?Array.from(c):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?Oa(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Oa(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}function Nu(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function yi(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(xi,"__esModule",{value:!0}),xi.default=void 0,xi.getRectOffset=Fa;var Uu=function(){function i(u){(function(d,x){if(!(d instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),yi(this,"states",[]),yi(this,"startOffset",{left:0,right:0,top:0,bottom:0}),yi(this,"startDelta",void 0),yi(this,"result",void 0),yi(this,"endResult",void 0),yi(this,"edges",void 0),yi(this,"interaction",void 0),this.interaction=u,this.result=Zr()}var o,c;return o=i,(c=[{key:"start",value:function(u,d){var x=u.phase,w=this.interaction,y=function(C){var O=C.interactable.options[C.prepared.name],k=O.modifiers;return k&&k.length?k:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(Z){var ne=O[Z];return ne&&ne.enabled&&{options:ne,methods:ne._methods}}).filter(function(Z){return!!Z})}(w);this.prepareStates(y),this.edges=(0,H.default)({},w.edges),this.startOffset=Fa(w.rect,d),this.startDelta={x:0,y:0};var M=this.fillArg({phase:x,pageCoords:d,preEnd:!1});return this.result=Zr(),this.startAll(M),this.result=this.setAll(M)}},{key:"fillArg",value:function(u){var d=this.interaction;return u.interaction=d,u.interactable=d.interactable,u.element=d.element,u.rect=u.rect||d.rect,u.edges=this.edges,u.startOffset=this.startOffset,u}},{key:"startAll",value:function(u){for(var d=0;d<this.states.length;d++){var x=this.states[d];x.methods.start&&(u.state=x,x.methods.start(u))}}},{key:"setAll",value:function(u){var d=u.phase,x=u.preEnd,w=u.skipModifiers,y=u.rect;u.coords=(0,H.default)({},u.pageCoords),u.rect=(0,H.default)({},y);for(var M=w?this.states.slice(w):this.states,C=Zr(u.coords,u.rect),O=0;O<M.length;O++){var k,Z=M[O],ne=Z.options,W=(0,H.default)({},u.coords),de=null;(k=Z.methods)!=null&&k.set&&this.shouldDo(ne,x,d)&&(u.state=Z,de=Z.methods.set(u),q.addEdges(this.interaction.edges,u.rect,{x:u.coords.x-W.x,y:u.coords.y-W.y})),C.eventProps.push(de)}C.delta.x=u.coords.x-u.pageCoords.x,C.delta.y=u.coords.y-u.pageCoords.y,C.rectDelta.left=u.rect.left-y.left,C.rectDelta.right=u.rect.right-y.right,C.rectDelta.top=u.rect.top-y.top,C.rectDelta.bottom=u.rect.bottom-y.bottom;var Se=this.result.coords,he=this.result.rect;if(Se&&he){var Ce=C.rect.left!==he.left||C.rect.right!==he.right||C.rect.top!==he.top||C.rect.bottom!==he.bottom;C.changed=Ce||Se.x!==C.coords.x||Se.y!==C.coords.y}return C}},{key:"applyToInteraction",value:function(u){var d=this.interaction,x=u.phase,w=d.coords.cur,y=d.coords.start,M=this.result,C=this.startDelta,O=M.delta;x==="start"&&(0,H.default)(this.startDelta,M.delta);for(var k=0;k<[[y,C],[w,O]].length;k++){var Z=Ia([[y,C],[w,O]][k],2),ne=Z[0],W=Z[1];ne.page.x+=W.x,ne.page.y+=W.y,ne.client.x+=W.x,ne.client.y+=W.y}var de=this.result.rectDelta,Se=u.rect||d.rect;Se.left+=de.left,Se.right+=de.right,Se.top+=de.top,Se.bottom+=de.bottom,Se.width=Se.right-Se.left,Se.height=Se.bottom-Se.top}},{key:"setAndApply",value:function(u){var d=this.interaction,x=u.phase,w=u.preEnd,y=u.skipModifiers,M=this.setAll(this.fillArg({preEnd:w,phase:x,pageCoords:u.modifiedCoords||d.coords.cur.page}));if(this.result=M,!M.changed&&(!y||y<this.states.length)&&d.interacting())return!1;if(u.modifiedCoords){var C=d.coords.cur.page,O={x:u.modifiedCoords.x-C.x,y:u.modifiedCoords.y-C.y};M.coords.x+=O.x,M.coords.y+=O.y,M.delta.x+=O.x,M.delta.y+=O.y}this.applyToInteraction(u)}},{key:"beforeEnd",value:function(u){var d=u.interaction,x=u.event,w=this.states;if(w&&w.length){for(var y=!1,M=0;M<w.length;M++){var C=w[M];u.state=C;var O=C.options,k=C.methods,Z=k.beforeEnd&&k.beforeEnd(u);if(Z)return this.endResult=Z,!1;y=y||!y&&this.shouldDo(O,!0,u.phase,!0)}y&&d.move({event:x,preEnd:!0})}}},{key:"stop",value:function(u){var d=u.interaction;if(this.states&&this.states.length){var x=(0,H.default)({states:this.states,interactable:d.interactable,element:d.element,rect:null},u);this.fillArg(x);for(var w=0;w<this.states.length;w++){var y=this.states[w];x.state=y,y.methods.stop&&y.methods.stop(x)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(u){this.states=[];for(var d=0;d<u.length;d++){var x=u[d],w=x.options,y=x.methods,M=x.name;this.states.push({options:w,methods:y,index:d,name:M})}return this.states}},{key:"restoreInteractionCoords",value:function(u){var d=u.interaction,x=d.coords,w=d.rect,y=d.modification;if(y.result){for(var M=y.startDelta,C=y.result,O=C.delta,k=C.rectDelta,Z=[[x.start,M],[x.cur,O]],ne=0;ne<Z.length;ne++){var W=Ia(Z[ne],2),de=W[0],Se=W[1];de.page.x-=Se.x,de.page.y-=Se.y,de.client.x-=Se.x,de.client.y-=Se.y}w.left-=k.left,w.right-=k.right,w.top-=k.top,w.bottom-=k.bottom}}},{key:"shouldDo",value:function(u,d,x,w){return!(!u||u.enabled===!1||w&&!u.endOnly||u.endOnly&&!d||x==="start"&&!u.setStart)}},{key:"copyFrom",value:function(u){this.startOffset=u.startOffset,this.startDelta=u.startDelta,this.edges=u.edges,this.states=u.states.map(function(d){return(0,_i.default)(d)}),this.result=Zr((0,H.default)({},u.result.coords),(0,H.default)({},u.result.rect))}},{key:"destroy",value:function(){for(var u in this)this[u]=null}}])&&Nu(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();function Zr(i,o){return{rect:o,coords:i,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Fa(i,o){return i?{left:o.x-i.left,top:o.y-i.top,right:i.right-o.x,bottom:i.bottom-o.y}:{left:0,top:0,right:0,bottom:0}}xi.default=Uu;var Rt={};function $r(i){var o=i.iEvent,c=i.interaction.modification.result;c&&(o.modifiers=c.eventProps)}Object.defineProperty(Rt,"__esModule",{value:!0}),Rt.addEventModifiers=$r,Rt.default=void 0,Rt.makeModifier=function(i,o){var c=i.defaults,u={start:i.start,set:i.set,beforeEnd:i.beforeEnd,stop:i.stop},d=function(x){var w=x||{};for(var y in w.enabled=w.enabled!==!1,c)y in w||(w[y]=c[y]);var M={options:w,methods:u,name:o,enable:function(){return w.enabled=!0,M},disable:function(){return w.enabled=!1,M}};return M};return o&&typeof o=="string"&&(d._defaults=c,d._methods=u),d};var ku={id:"modifiers/base",before:["actions"],install:function(i){i.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(i){var o=i.interaction;o.modification=new xi.default(o)},"interactions:before-action-start":function(i){var o=i.interaction.modification;o.start(i,i.interaction.coords.start.page),i.interaction.edges=o.edges,o.applyToInteraction(i)},"interactions:before-action-move":function(i){return i.interaction.modification.setAndApply(i)},"interactions:before-action-end":function(i){return i.interaction.modification.beforeEnd(i)},"interactions:action-start":$r,"interactions:action-move":$r,"interactions:action-end":$r,"interactions:after-action-start":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:after-action-move":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:stop":function(i){return i.interaction.modification.stop(i)}}},Bu=ku;Rt.default=Bu;var wr={};Object.defineProperty(wr,"__esModule",{value:!0}),wr.defaults=void 0,wr.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var Sr={};function is(i){return is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},is(i)}function Gu(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function rs(i,o){return rs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},rs(i,o)}function Vu(i,o){if(o&&(is(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ct(i)}function ct(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Kr(i){return Kr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},Kr(i)}function gt(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Sr,"__esModule",{value:!0}),Sr.InteractEvent=void 0;var za=function(i){(function(y,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(M&&M.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),Object.defineProperty(y,"prototype",{writable:!1}),M&&rs(y,M)})(w,i);var o,c,u,d,x=(u=w,d=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var y,M=Kr(u);if(d){var C=Kr(this).constructor;y=Reflect.construct(M,arguments,C)}else y=M.apply(this,arguments);return Vu(this,y)});function w(y,M,C,O,k,Z,ne){var W;(function(ht,Qe){if(!(ht instanceof Qe))throw new TypeError("Cannot call a class as a function")})(this,w),gt(ct(W=x.call(this,y)),"relatedTarget",null),gt(ct(W),"screenX",void 0),gt(ct(W),"screenY",void 0),gt(ct(W),"button",void 0),gt(ct(W),"buttons",void 0),gt(ct(W),"ctrlKey",void 0),gt(ct(W),"shiftKey",void 0),gt(ct(W),"altKey",void 0),gt(ct(W),"metaKey",void 0),gt(ct(W),"page",void 0),gt(ct(W),"client",void 0),gt(ct(W),"delta",void 0),gt(ct(W),"rect",void 0),gt(ct(W),"x0",void 0),gt(ct(W),"y0",void 0),gt(ct(W),"t0",void 0),gt(ct(W),"dt",void 0),gt(ct(W),"duration",void 0),gt(ct(W),"clientX0",void 0),gt(ct(W),"clientY0",void 0),gt(ct(W),"velocity",void 0),gt(ct(W),"speed",void 0),gt(ct(W),"swipe",void 0),gt(ct(W),"axes",void 0),gt(ct(W),"preEnd",void 0),k=k||y.element;var de=y.interactable,Se=(de&&de.options||wr.defaults).deltaSource,he=(0,Q.default)(de,k,C),Ce=O==="start",Oe=O==="end",Xe=Ce?ct(W):y.prevEvent,st=Ce?y.coords.start:Oe?{page:Xe.page,client:Xe.client,timeStamp:y.coords.cur.timeStamp}:y.coords.cur;return W.page=(0,H.default)({},st.page),W.client=(0,H.default)({},st.client),W.rect=(0,H.default)({},y.rect),W.timeStamp=st.timeStamp,Oe||(W.page.x-=he.x,W.page.y-=he.y,W.client.x-=he.x,W.client.y-=he.y),W.ctrlKey=M.ctrlKey,W.altKey=M.altKey,W.shiftKey=M.shiftKey,W.metaKey=M.metaKey,W.button=M.button,W.buttons=M.buttons,W.target=k,W.currentTarget=k,W.preEnd=Z,W.type=ne||C+(O||""),W.interactable=de,W.t0=Ce?y.pointers[y.pointers.length-1].downTime:Xe.t0,W.x0=y.coords.start.page.x-he.x,W.y0=y.coords.start.page.y-he.y,W.clientX0=y.coords.start.client.x-he.x,W.clientY0=y.coords.start.client.y-he.y,W.delta=Ce||Oe?{x:0,y:0}:{x:W[Se].x-Xe[Se].x,y:W[Se].y-Xe[Se].y},W.dt=y.coords.delta.timeStamp,W.duration=W.timeStamp-W.t0,W.velocity=(0,H.default)({},y.coords.velocity[Se]),W.speed=(0,ue.default)(W.velocity.x,W.velocity.y),W.swipe=Oe||O==="inertiastart"?W.getSwipe():null,W}return o=w,(c=[{key:"getSwipe",value:function(){var y=this._interaction;if(y.prevEvent.speed<600||this.timeStamp-y.prevEvent.timeStamp>150)return null;var M=180*Math.atan2(y.prevEvent.velocityY,y.prevEvent.velocityX)/Math.PI;M<0&&(M+=360);var C=112.5<=M&&M<247.5,O=202.5<=M&&M<337.5;return{up:O,down:!O&&22.5<=M&&M<157.5,left:C,right:!C&&(292.5<=M||M<67.5),angle:M,speed:y.prevEvent.speed,velocity:{x:y.prevEvent.velocityX,y:y.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Gu(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),w}(Ze.BaseEvent);Sr.InteractEvent=za,Object.defineProperties(za.prototype,{pageX:{get:function(){return this.page.x},set:function(i){this.page.x=i}},pageY:{get:function(){return this.page.y},set:function(i){this.page.y=i}},clientX:{get:function(){return this.client.x},set:function(i){this.client.x=i}},clientY:{get:function(){return this.client.y},set:function(i){this.client.y=i}},dx:{get:function(){return this.delta.x},set:function(i){this.delta.x=i}},dy:{get:function(){return this.delta.y},set:function(i){this.delta.y=i}},velocityX:{get:function(){return this.velocity.x},set:function(i){this.velocity.x=i}},velocityY:{get:function(){return this.velocity.y},set:function(i){this.velocity.y=i}}});var Er={};function Na(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Hu(i,o,c){return o&&Na(i.prototype,o),c&&Na(i,c),Object.defineProperty(i,"prototype",{writable:!1}),i}function Tr(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Er,"__esModule",{value:!0}),Er.PointerInfo=void 0;var Wu=Hu(function i(o,c,u,d,x){(function(w,y){if(!(w instanceof y))throw new TypeError("Cannot call a class as a function")})(this,i),Tr(this,"id",void 0),Tr(this,"pointer",void 0),Tr(this,"event",void 0),Tr(this,"downTime",void 0),Tr(this,"downTarget",void 0),this.id=o,this.pointer=c,this.event=u,this.downTime=d,this.downTarget=x});Er.PointerInfo=Wu;var Jr,Qr,Zt={};function ju(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function vt(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Zt,"__esModule",{value:!0}),Zt.Interaction=void 0,Object.defineProperty(Zt,"PointerInfo",{enumerable:!0,get:function(){return Er.PointerInfo}}),Zt.default=Zt._ProxyValues=Zt._ProxyMethods=void 0,Zt._ProxyValues=Jr,function(i){i.interactable="",i.element="",i.prepared="",i.pointerIsDown="",i.pointerWasMoved="",i._proxy=""}(Jr||(Zt._ProxyValues=Jr={})),Zt._ProxyMethods=Qr,function(i){i.start="",i.move="",i.end="",i.stop="",i.interacting=""}(Qr||(Zt._ProxyMethods=Qr={}));var Xu=0,Ua=function(){function i(u){var d=this,x=u.pointerType,w=u.scopeFire;(function(Z,ne){if(!(Z instanceof ne))throw new TypeError("Cannot call a class as a function")})(this,i),vt(this,"interactable",null),vt(this,"element",null),vt(this,"rect",null),vt(this,"_rects",void 0),vt(this,"edges",null),vt(this,"_scopeFire",void 0),vt(this,"prepared",{name:null,axis:null,edges:null}),vt(this,"pointerType",void 0),vt(this,"pointers",[]),vt(this,"downEvent",null),vt(this,"downPointer",{}),vt(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),vt(this,"prevEvent",null),vt(this,"pointerIsDown",!1),vt(this,"pointerWasMoved",!1),vt(this,"_interacting",!1),vt(this,"_ending",!1),vt(this,"_stopped",!0),vt(this,"_proxy",null),vt(this,"simulation",null),vt(this,"doMove",(0,ie.warnOnce)(function(Z){this.move(Z)},"The interaction.doMove() method has been renamed to interaction.move()")),vt(this,"coords",{start:re.newCoords(),prev:re.newCoords(),cur:re.newCoords(),delta:re.newCoords(),velocity:re.newCoords()}),vt(this,"_id",Xu++),this._scopeFire=w,this.pointerType=x;var y=this;this._proxy={};var M=function(Z){Object.defineProperty(d._proxy,Z,{get:function(){return y[Z]}})};for(var C in Jr)M(C);var O=function(Z){Object.defineProperty(d._proxy,Z,{value:function(){return y[Z].apply(y,arguments)}})};for(var k in Qr)O(k);this._scopeFire("interactions:new",{interaction:this})}var o,c;return o=i,c=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(u,d,x){var w=this.updatePointer(u,d,x,!0),y=this.pointers[w];this._scopeFire("interactions:down",{pointer:u,event:d,eventTarget:x,pointerIndex:w,pointerInfo:y,type:"down",interaction:this})}},{key:"start",value:function(u,d,x){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(u.name==="gesture"?2:1)||!d.options[u.name].enabled)&&((0,ie.copyAction)(this.prepared,u),this.interactable=d,this.element=x,this.rect=d.getRect(x),this.edges=this.prepared.edges?(0,H.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(u,d,x){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(u,d,x,!1);var w,y,M=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(w=this.coords.cur.client.x-this.coords.start.client.x,y=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,ue.default)(w,y)>this.pointerMoveTolerance);var C=this.getPointerIndex(u),O={pointer:u,pointerIndex:C,pointerInfo:this.pointers[C],event:d,type:"move",eventTarget:x,dx:w,dy:y,duplicate:M,interaction:this};M||re.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",O),M||this.simulation||(this.interacting()&&(O.type=null,this.move(O)),this.pointerWasMoved&&re.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(u){u&&u.event||re.setZeroCoords(this.coords.delta),(u=(0,H.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},u||{})).phase="move",this._doPhase(u)}},{key:"pointerUp",value:function(u,d,x,w){var y=this.getPointerIndex(u);y===-1&&(y=this.updatePointer(u,d,x,!1));var M=/cancel$/i.test(d.type)?"cancel":"up";this._scopeFire("interactions:".concat(M),{pointer:u,pointerIndex:y,pointerInfo:this.pointers[y],event:d,eventTarget:x,type:M,curEventTarget:w,interaction:this}),this.simulation||this.end(d),this.removePointer(u,d)}},{key:"documentBlur",value:function(u){this.end(u),this._scopeFire("interactions:blur",{event:u,type:"blur",interaction:this})}},{key:"end",value:function(u){var d;this._ending=!0,u=u||this._latestPointer.event,this.interacting()&&(d=this._doPhase({event:u,interaction:this,phase:"end"})),this._ending=!1,d===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(u){var d=re.getPointerId(u);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Ve.findIndex(this.pointers,function(x){return x.id===d})}},{key:"getPointerInfo",value:function(u){return this.pointers[this.getPointerIndex(u)]}},{key:"updatePointer",value:function(u,d,x,w){var y=re.getPointerId(u),M=this.getPointerIndex(u),C=this.pointers[M];return w=w!==!1&&(w||/(down|start)$/i.test(d.type)),C?C.pointer=u:(C=new Er.PointerInfo(y,u,d,null,null),M=this.pointers.length,this.pointers.push(C)),re.setCoords(this.coords.cur,this.pointers.map(function(O){return O.pointer}),this._now()),re.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),w&&(this.pointerIsDown=!0,C.downTime=this.coords.cur.timeStamp,C.downTarget=x,re.pointerExtend(this.downPointer,u),this.interacting()||(re.copyCoords(this.coords.start,this.coords.cur),re.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=d,this.pointerWasMoved=!1)),this._updateLatestPointer(u,d,x),this._scopeFire("interactions:update-pointer",{pointer:u,event:d,eventTarget:x,down:w,pointerInfo:C,pointerIndex:M,interaction:this}),M}},{key:"removePointer",value:function(u,d){var x=this.getPointerIndex(u);if(x!==-1){var w=this.pointers[x];this._scopeFire("interactions:remove-pointer",{pointer:u,event:d,eventTarget:null,pointerIndex:x,pointerInfo:w,interaction:this}),this.pointers.splice(x,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(u,d,x){this._latestPointer.pointer=u,this._latestPointer.event=d,this._latestPointer.eventTarget=x}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(u,d,x,w){return new Sr.InteractEvent(this,u,this.prepared.name,d,this.element,x,w)}},{key:"_fireEvent",value:function(u){var d;(d=this.interactable)==null||d.fire(u),(!this.prevEvent||u.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=u)}},{key:"_doPhase",value:function(u){var d=u.event,x=u.phase,w=u.preEnd,y=u.type,M=this.rect;if(M&&x==="move"&&(q.addEdges(this.edges,M,this.coords.delta[this.interactable.options.deltaSource]),M.width=M.right-M.left,M.height=M.bottom-M.top),this._scopeFire("interactions:before-action-".concat(x),u)===!1)return!1;var C=u.iEvent=this._createPreparedEvent(d,x,w,y);return this._scopeFire("interactions:action-".concat(x),u),x==="start"&&(this.prevEvent=C),this._fireEvent(C),this._scopeFire("interactions:after-action-".concat(x),u),!0}},{key:"_now",value:function(){return Date.now()}}],c&&ju(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();Zt.Interaction=Ua;var qu=Ua;Zt.default=qu;var bi={};function ka(i){i.pointerIsDown&&(ss(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)}function Ba(i){os(i.interaction)}function os(i){if(!function(c){return!(!c.offset.pending.x&&!c.offset.pending.y)}(i))return!1;var o=i.offset.pending;return ss(i.coords.cur,o),ss(i.coords.delta,o),q.addEdges(i.edges,i.rect,o),o.x=0,o.y=0,!0}function Yu(i){var o=i.x,c=i.y;this.offset.pending.x+=o,this.offset.pending.y+=c,this.offset.total.x+=o,this.offset.total.y+=c}function ss(i,o){var c=i.page,u=i.client,d=o.x,x=o.y;c.x+=d,c.y+=x,u.x+=d,u.y+=x}Object.defineProperty(bi,"__esModule",{value:!0}),bi.addTotal=ka,bi.applyPending=os,bi.default=void 0,Zt._ProxyMethods.offsetBy="";var Zu={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(i){i.Interaction.prototype.offsetBy=Yu},listeners:{"interactions:new":function(i){i.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(i){return ka(i.interaction)},"interactions:before-action-start":Ba,"interactions:before-action-move":Ba,"interactions:before-action-end":function(i){var o=i.interaction;if(os(o))return o.move({offset:!0}),o.end(),!1},"interactions:stop":function(i){var o=i.interaction;o.offset.total.x=0,o.offset.total.y=0,o.offset.pending.x=0,o.offset.pending.y=0}}},$u=Zu;bi.default=$u;var Gi={};function Ku(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Ct(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Gi,"__esModule",{value:!0}),Gi.default=Gi.InertiaState=void 0;var Ga=function(){function i(u){(function(d,x){if(!(d instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),Ct(this,"active",!1),Ct(this,"isModified",!1),Ct(this,"smoothEnd",!1),Ct(this,"allowResume",!1),Ct(this,"modification",void 0),Ct(this,"modifierCount",0),Ct(this,"modifierArg",void 0),Ct(this,"startCoords",void 0),Ct(this,"t0",0),Ct(this,"v0",0),Ct(this,"te",0),Ct(this,"targetOffset",void 0),Ct(this,"modifiedOffset",void 0),Ct(this,"currentOffset",void 0),Ct(this,"lambda_v0",0),Ct(this,"one_ve_v0",0),Ct(this,"timeout",void 0),Ct(this,"interaction",void 0),this.interaction=u}var o,c;return o=i,(c=[{key:"start",value:function(u){var d=this.interaction,x=eo(d);if(!x||!x.enabled)return!1;var w=d.coords.velocity.client,y=(0,ue.default)(w.x,w.y),M=this.modification||(this.modification=new xi.default(d));if(M.copyFrom(d.modification),this.t0=d._now(),this.allowResume=x.allowResume,this.v0=y,this.currentOffset={x:0,y:0},this.startCoords=d.coords.cur.page,this.modifierArg=M.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-d.coords.cur.timeStamp<50&&y>x.minSpeed&&y>x.endSpeed)this.startInertia();else{if(M.result=M.setAll(this.modifierArg),!M.result.changed)return!1;this.startSmoothEnd()}return d.modification.result.rect=null,d.offsetBy(this.targetOffset),d._doPhase({interaction:d,event:u,phase:"inertiastart"}),d.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),d.modification.result.rect=null,this.active=!0,d.simulation=this,!0}},{key:"startInertia",value:function(){var u=this,d=this.interaction.coords.velocity.client,x=eo(this.interaction),w=x.resistance,y=-Math.log(x.endSpeed/this.v0)/w;this.targetOffset={x:(d.x-y)/w,y:(d.y-y)/w},this.te=y,this.lambda_v0=w/this.v0,this.one_ve_v0=1-x.endSpeed/this.v0;var M=this.modification,C=this.modifierArg;C.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},M.result=M.setAll(C),M.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+M.result.delta.x,y:this.targetOffset.y+M.result.delta.y}),this.onNextFrame(function(){return u.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var u=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return u.smoothEndTick()})}},{key:"onNextFrame",value:function(u){var d=this;this.timeout=Ut.default.request(function(){d.active&&u()})}},{key:"inertiaTick",value:function(){var u,d,x,w,y,M=this,C=this.interaction,O=eo(C).resistance,k=(C._now()-this.t0)/1e3;if(k<this.te){var Z,ne=1-(Math.exp(-O*k)-this.lambda_v0)/this.one_ve_v0;this.isModified?(u=this.targetOffset.x,d=this.targetOffset.y,x=this.modifiedOffset.x,w=this.modifiedOffset.y,Z={x:Va(y=ne,0,u,x),y:Va(y,0,d,w)}):Z={x:this.targetOffset.x*ne,y:this.targetOffset.y*ne};var W={x:Z.x-this.currentOffset.x,y:Z.y-this.currentOffset.y};this.currentOffset.x+=W.x,this.currentOffset.y+=W.y,C.offsetBy(W),C.move(),this.onNextFrame(function(){return M.inertiaTick()})}else C.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var u=this,d=this.interaction,x=d._now()-this.t0,w=eo(d).smoothEndDuration;if(x<w){var y={x:Ha(x,0,this.targetOffset.x,w),y:Ha(x,0,this.targetOffset.y,w)},M={x:y.x-this.currentOffset.x,y:y.y-this.currentOffset.y};this.currentOffset.x+=M.x,this.currentOffset.y+=M.y,d.offsetBy(M),d.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return u.smoothEndTick()})}else d.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(u){var d=u.pointer,x=u.event,w=u.eventTarget,y=this.interaction;y.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),y.updatePointer(d,x,w,!0),y._doPhase({interaction:y,event:x,phase:"resume"}),(0,re.copyCoords)(y.coords.prev,y.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Ut.default.cancel(this.timeout)}}])&&Ku(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();function eo(i){var o=i.interactable,c=i.prepared;return o&&o.options&&c.name&&o.options[c.name].inertia}Gi.InertiaState=Ga;var Ju={id:"inertia",before:["modifiers","actions"],install:function(i){var o=i.defaults;i.usePlugin(bi.default),i.usePlugin(Rt.default),i.actions.phases.inertiastart=!0,i.actions.phases.resume=!0,o.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(i){var o=i.interaction;o.inertia=new Ga(o)},"interactions:before-action-end":function(i){var o=i.interaction,c=i.event;return(!o._interacting||o.simulation||!o.inertia.start(c))&&null},"interactions:down":function(i){var o=i.interaction,c=i.eventTarget,u=o.inertia;if(u.active)for(var d=c;l.default.element(d);){if(d===o.element){u.resume(i);break}d=T.parentNode(d)}},"interactions:stop":function(i){var o=i.interaction.inertia;o.active&&o.stop()},"interactions:before-action-resume":function(i){var o=i.interaction.modification;o.stop(i),o.start(i,i.interaction.coords.cur.page),o.applyToInteraction(i)},"interactions:before-action-inertiastart":function(i){return i.interaction.modification.setAndApply(i)},"interactions:action-resume":Rt.addEventModifiers,"interactions:action-inertiastart":Rt.addEventModifiers,"interactions:after-action-inertiastart":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:after-action-resume":function(i){return i.interaction.modification.restoreInteractionCoords(i)}}};function Va(i,o,c,u){var d=1-i;return d*d*o+2*d*i*c+i*i*u}function Ha(i,o,c,u){return-c*(i/=u)*(i-2)+o}var Qu=Ju;Gi.default=Qu;var Ar={};function ef(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Pr(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}function Wa(i,o){for(var c=0;c<o.length;c++){var u=o[c];if(i.immediatePropagationStopped)break;u(i)}}Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.Eventable=void 0;var tf=function(){function i(u){(function(d,x){if(!(d instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),Pr(this,"options",void 0),Pr(this,"types",{}),Pr(this,"propagationStopped",!1),Pr(this,"immediatePropagationStopped",!1),Pr(this,"global",void 0),this.options=(0,H.default)({},u||{})}var o,c;return o=i,(c=[{key:"fire",value:function(u){var d,x=this.global;(d=this.types[u.type])&&Wa(u,d),!u.propagationStopped&&x&&(d=x[u.type])&&Wa(u,d)}},{key:"on",value:function(u,d){var x=(0,se.default)(u,d);for(u in x)this.types[u]=Ve.merge(this.types[u]||[],x[u])}},{key:"off",value:function(u,d){var x=(0,se.default)(u,d);for(u in x){var w=this.types[u];if(w&&w.length)for(var y=0;y<x[u].length;y++){var M=x[u][y],C=w.indexOf(M);C!==-1&&w.splice(C,1)}}}},{key:"getRect",value:function(u){return null}}])&&ef(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();Ar.Eventable=tf;var Cr={};Object.defineProperty(Cr,"__esModule",{value:!0}),Cr.default=function(i,o){if(o.phaselessTypes[i])return!0;for(var c in o.map)if(i.indexOf(c)===0&&i.substr(c.length)in o.phases)return!0;return!1};var as={};Object.defineProperty(as,"__esModule",{value:!0}),as.createInteractStatic=function(i){var o=function c(u,d){var x=i.interactables.get(u,d);return x||((x=i.interactables.new(u,d)).events.global=c.globalEvents),x};return o.getPointerAverage=re.pointerAverage,o.getTouchBBox=re.touchBBox,o.getTouchDistance=re.touchDistance,o.getTouchAngle=re.touchAngle,o.getElementRect=T.getElementRect,o.getElementClientRect=T.getElementClientRect,o.matchesSelector=T.matchesSelector,o.closest=T.closest,o.globalEvents={},o.version="1.10.14",o.scope=i,o.use=function(c,u){return this.scope.usePlugin(c,u),this},o.isSet=function(c,u){return!!this.scope.interactables.get(c,u&&u.context)},o.on=(0,ie.warnOnce)(function(c,u,d){if(l.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),l.default.array(c)){for(var x=0;x<c.length;x++){var w=c[x];this.on(w,u,d)}return this}if(l.default.object(c)){for(var y in c)this.on(y,c[y],u);return this}return(0,Cr.default)(c,this.scope.actions)?this.globalEvents[c]?this.globalEvents[c].push(u):this.globalEvents[c]=[u]:this.scope.events.add(this.scope.document,c,u,{options:d}),this},"The interact.on() method is being deprecated"),o.off=(0,ie.warnOnce)(function(c,u,d){if(l.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),l.default.array(c)){for(var x=0;x<c.length;x++){var w=c[x];this.off(w,u,d)}return this}if(l.default.object(c)){for(var y in c)this.off(y,c[y],u);return this}var M;return(0,Cr.default)(c,this.scope.actions)?c in this.globalEvents&&(M=this.globalEvents[c].indexOf(u))!==-1&&this.globalEvents[c].splice(M,1):this.scope.events.remove(this.scope.document,c,u,d),this},"The interact.off() method is being deprecated"),o.debug=function(){return this.scope},o.supportsTouch=function(){return D.default.supportsTouch},o.supportsPointerEvent=function(){return D.default.supportsPointerEvent},o.stop=function(){for(var c=0;c<this.scope.interactions.list.length;c++)this.scope.interactions.list[c].stop();return this},o.pointerMoveTolerance=function(c){return l.default.number(c)?(this.scope.interactions.pointerMoveTolerance=c,this):this.scope.interactions.pointerMoveTolerance},o.addDocument=function(c,u){this.scope.addDocument(c,u)},o.removeDocument=function(c){this.scope.removeDocument(c)},o};var to={};function nf(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Gn(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(to,"__esModule",{value:!0}),to.Interactable=void 0;var rf=function(){function i(u,d,x,w){(function(y,M){if(!(y instanceof M))throw new TypeError("Cannot call a class as a function")})(this,i),Gn(this,"options",void 0),Gn(this,"_actions",void 0),Gn(this,"target",void 0),Gn(this,"events",new Ar.Eventable),Gn(this,"_context",void 0),Gn(this,"_win",void 0),Gn(this,"_doc",void 0),Gn(this,"_scopeEvents",void 0),Gn(this,"_rectChecker",void 0),this._actions=d.actions,this.target=u,this._context=d.context||x,this._win=(0,n.getWindow)((0,T.trySelector)(u)?this._context:u),this._doc=this._win.document,this._scopeEvents=w,this.set(d)}var o,c;return o=i,(c=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(u,d){return l.default.func(d.onstart)&&this.on("".concat(u,"start"),d.onstart),l.default.func(d.onmove)&&this.on("".concat(u,"move"),d.onmove),l.default.func(d.onend)&&this.on("".concat(u,"end"),d.onend),l.default.func(d.oninertiastart)&&this.on("".concat(u,"inertiastart"),d.oninertiastart),this}},{key:"updatePerActionListeners",value:function(u,d,x){(l.default.array(d)||l.default.object(d))&&this.off(u,d),(l.default.array(x)||l.default.object(x))&&this.on(u,x)}},{key:"setPerAction",value:function(u,d){var x=this._defaults;for(var w in d){var y=w,M=this.options[u],C=d[y];y==="listeners"&&this.updatePerActionListeners(u,M.listeners,C),l.default.array(C)?M[y]=Ve.from(C):l.default.plainObject(C)?(M[y]=(0,H.default)(M[y]||{},(0,_i.default)(C)),l.default.object(x.perAction[y])&&"enabled"in x.perAction[y]&&(M[y].enabled=C.enabled!==!1)):l.default.bool(C)&&l.default.object(x.perAction[y])?M[y].enabled=C:M[y]=C}}},{key:"getRect",value:function(u){return u=u||(l.default.element(this.target)?this.target:null),l.default.string(this.target)&&(u=u||this._context.querySelector(this.target)),(0,T.getElementRect)(u)}},{key:"rectChecker",value:function(u){var d=this;return l.default.func(u)?(this._rectChecker=u,this.getRect=function(x){var w=(0,H.default)({},d._rectChecker(x));return"width"in w||(w.width=w.right-w.left,w.height=w.bottom-w.top),w},this):u===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(u,d){if((0,T.trySelector)(d)||l.default.object(d)){for(var x in this.options[u]=d,this._actions.map)this.options[x][u]=d;return this}return this.options[u]}},{key:"origin",value:function(u){return this._backCompatOption("origin",u)}},{key:"deltaSource",value:function(u){return u==="page"||u==="client"?(this.options.deltaSource=u,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(u){return this._context===u.ownerDocument||(0,T.nodeContains)(this._context,u)}},{key:"testIgnoreAllow",value:function(u,d,x){return!this.testIgnore(u.ignoreFrom,d,x)&&this.testAllow(u.allowFrom,d,x)}},{key:"testAllow",value:function(u,d,x){return!u||!!l.default.element(x)&&(l.default.string(u)?(0,T.matchesUpTo)(x,u,d):!!l.default.element(u)&&(0,T.nodeContains)(u,x))}},{key:"testIgnore",value:function(u,d,x){return!(!u||!l.default.element(x))&&(l.default.string(u)?(0,T.matchesUpTo)(x,u,d):!!l.default.element(u)&&(0,T.nodeContains)(u,x))}},{key:"fire",value:function(u){return this.events.fire(u),this}},{key:"_onOff",value:function(u,d,x,w){l.default.object(d)&&!l.default.array(d)&&(w=x,x=null);var y=u==="on"?"add":"remove",M=(0,se.default)(d,x);for(var C in M){C==="wheel"&&(C=D.default.wheelEvent);for(var O=0;O<M[C].length;O++){var k=M[C][O];(0,Cr.default)(C,this._actions)?this.events[u](C,k):l.default.string(this.target)?this._scopeEvents["".concat(y,"Delegate")](this.target,this._context,C,k,w):this._scopeEvents[y](this.target,C,k,w)}}return this}},{key:"on",value:function(u,d,x){return this._onOff("on",u,d,x)}},{key:"off",value:function(u,d,x){return this._onOff("off",u,d,x)}},{key:"set",value:function(u){var d=this._defaults;for(var x in l.default.object(u)||(u={}),this.options=(0,_i.default)(d.base),this._actions.methodDict){var w=x,y=this._actions.methodDict[w];this.options[w]={},this.setPerAction(w,(0,H.default)((0,H.default)({},d.perAction),d.actions[w])),this[y](u[w])}for(var M in u)l.default.func(this[M])&&this[M](u[M]);return this}},{key:"unset",value:function(){if(l.default.string(this.target))for(var u in this._scopeEvents.delegatedEvents)for(var d=this._scopeEvents.delegatedEvents[u],x=d.length-1;x>=0;x--){var w=d[x],y=w.selector,M=w.context,C=w.listeners;y===this.target&&M===this._context&&d.splice(x,1);for(var O=C.length-1;O>=0;O--)this._scopeEvents.removeDelegate(this.target,this._context,u,C[O][0],C[O][1])}else this._scopeEvents.remove(this.target,"all")}}])&&nf(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();to.Interactable=rf;var no={};function of(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function ls(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(no,"__esModule",{value:!0}),no.InteractableSet=void 0;var sf=function(){function i(u){var d=this;(function(x,w){if(!(x instanceof w))throw new TypeError("Cannot call a class as a function")})(this,i),ls(this,"list",[]),ls(this,"selectorMap",{}),ls(this,"scope",void 0),this.scope=u,u.addListeners({"interactable:unset":function(x){var w=x.interactable,y=w.target,M=w._context,C=l.default.string(y)?d.selectorMap[y]:y[d.scope.id],O=Ve.findIndex(C,function(k){return k.context===M});C[O]&&(C[O].context=null,C[O].interactable=null),C.splice(O,1)}})}var o,c;return o=i,(c=[{key:"new",value:function(u,d){d=(0,H.default)(d||{},{actions:this.scope.actions});var x=new this.scope.Interactable(u,d,this.scope.document,this.scope.events),w={context:x._context,interactable:x};return this.scope.addDocument(x._doc),this.list.push(x),l.default.string(u)?(this.selectorMap[u]||(this.selectorMap[u]=[]),this.selectorMap[u].push(w)):(x.target[this.scope.id]||Object.defineProperty(u,this.scope.id,{value:[],configurable:!0}),u[this.scope.id].push(w)),this.scope.fire("interactable:new",{target:u,options:d,interactable:x,win:this.scope._win}),x}},{key:"get",value:function(u,d){var x=d&&d.context||this.scope.document,w=l.default.string(u),y=w?this.selectorMap[u]:u[this.scope.id];if(!y)return null;var M=Ve.find(y,function(C){return C.context===x&&(w||C.interactable.inContext(u))});return M&&M.interactable}},{key:"forEachMatch",value:function(u,d){for(var x=0;x<this.list.length;x++){var w=this.list[x],y=void 0;if((l.default.string(w.target)?l.default.element(u)&&T.matchesSelector(u,w.target):u===w.target)&&w.inContext(u)&&(y=d(w)),y!==void 0)return y}}}])&&of(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();no.InteractableSet=sf;var io={};function af(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function cs(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}function us(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var d=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var x,w,y=[],M=!0,C=!1;try{for(d=d.call(c);!(M=(x=d.next()).done)&&(y.push(x.value),!u||y.length!==u);M=!0);}catch(O){C=!0,w=O}finally{try{M||d.return==null||d.return()}finally{if(C)throw w}}return y}}(i,o)||function(c,u){if(c){if(typeof c=="string")return ja(c,u);var d=Object.prototype.toString.call(c).slice(8,-1);return d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set"?Array.from(c):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?ja(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ja(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}Object.defineProperty(io,"__esModule",{value:!0}),io.default=void 0;var lf=function(){function i(u){(function(d,x){if(!(d instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),cs(this,"currentTarget",void 0),cs(this,"originalEvent",void 0),cs(this,"type",void 0),this.originalEvent=u,(0,me.default)(this,u)}var o,c;return o=i,(c=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&af(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();function Lr(i){if(!l.default.object(i))return{capture:!!i,passive:!1};var o=(0,H.default)({},i);return o.capture=!!i.capture,o.passive=!!i.passive,o}var cf={id:"events",install:function(i){var o,c=[],u={},d=[],x={add:w,remove:y,addDelegate:function(O,k,Z,ne,W){var de=Lr(W);if(!u[Z]){u[Z]=[];for(var Se=0;Se<d.length;Se++){var he=d[Se];w(he,Z,M),w(he,Z,C,!0)}}var Ce=u[Z],Oe=Ve.find(Ce,function(Xe){return Xe.selector===O&&Xe.context===k});Oe||(Oe={selector:O,context:k,listeners:[]},Ce.push(Oe)),Oe.listeners.push([ne,de])},removeDelegate:function(O,k,Z,ne,W){var de,Se=Lr(W),he=u[Z],Ce=!1;if(he)for(de=he.length-1;de>=0;de--){var Oe=he[de];if(Oe.selector===O&&Oe.context===k){for(var Xe=Oe.listeners,st=Xe.length-1;st>=0;st--){var ht=us(Xe[st],2),Qe=ht[0],ut=ht[1],fn=ut.capture,Hn=ut.passive;if(Qe===ne&&fn===Se.capture&&Hn===Se.passive){Xe.splice(st,1),Xe.length||(he.splice(de,1),y(k,Z,M),y(k,Z,C,!0)),Ce=!0;break}}if(Ce)break}}},delegateListener:M,delegateUseCapture:C,delegatedEvents:u,documents:d,targets:c,supportsOptions:!1,supportsPassive:!1};function w(O,k,Z,ne){var W=Lr(ne),de=Ve.find(c,function(Se){return Se.eventTarget===O});de||(de={eventTarget:O,events:{}},c.push(de)),de.events[k]||(de.events[k]=[]),O.addEventListener&&!Ve.contains(de.events[k],Z)&&(O.addEventListener(k,Z,x.supportsOptions?W:W.capture),de.events[k].push(Z))}function y(O,k,Z,ne){var W=Lr(ne),de=Ve.findIndex(c,function(st){return st.eventTarget===O}),Se=c[de];if(Se&&Se.events)if(k!=="all"){var he=!1,Ce=Se.events[k];if(Ce){if(Z==="all"){for(var Oe=Ce.length-1;Oe>=0;Oe--)y(O,k,Ce[Oe],W);return}for(var Xe=0;Xe<Ce.length;Xe++)if(Ce[Xe]===Z){O.removeEventListener(k,Z,x.supportsOptions?W:W.capture),Ce.splice(Xe,1),Ce.length===0&&(delete Se.events[k],he=!0);break}}he&&!Object.keys(Se.events).length&&c.splice(de,1)}else for(k in Se.events)Se.events.hasOwnProperty(k)&&y(O,k,"all")}function M(O,k){for(var Z=Lr(k),ne=new lf(O),W=u[O.type],de=us(re.getEventTargets(O),1)[0],Se=de;l.default.element(Se);){for(var he=0;he<W.length;he++){var Ce=W[he],Oe=Ce.selector,Xe=Ce.context;if(T.matchesSelector(Se,Oe)&&T.nodeContains(Xe,de)&&T.nodeContains(Xe,Se)){var st=Ce.listeners;ne.currentTarget=Se;for(var ht=0;ht<st.length;ht++){var Qe=us(st[ht],2),ut=Qe[0],fn=Qe[1],Hn=fn.capture,Ls=fn.passive;Hn===Z.capture&&Ls===Z.passive&&ut(ne)}}}Se=T.parentNode(Se)}}function C(O){return M(O,!0)}return(o=i.document)==null||o.createElement("div").addEventListener("test",null,{get capture(){return x.supportsOptions=!0},get passive(){return x.supportsPassive=!0}}),i.events=x,x}};io.default=cf;var ro={};Object.defineProperty(ro,"__esModule",{value:!0}),ro.default=void 0;var oo={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(i){for(var o=0;o<oo.methodOrder.length;o++){var c;c=oo.methodOrder[o];var u=oo[c](i);if(u)return u}return null},simulationResume:function(i){var o=i.pointerType,c=i.eventType,u=i.eventTarget,d=i.scope;if(!/down|start/i.test(c))return null;for(var x=0;x<d.interactions.list.length;x++){var w=d.interactions.list[x],y=u;if(w.simulation&&w.simulation.allowResume&&w.pointerType===o)for(;y;){if(y===w.element)return w;y=T.parentNode(y)}}return null},mouseOrPen:function(i){var o,c=i.pointerId,u=i.pointerType,d=i.eventType,x=i.scope;if(u!=="mouse"&&u!=="pen")return null;for(var w=0;w<x.interactions.list.length;w++){var y=x.interactions.list[w];if(y.pointerType===u){if(y.simulation&&!Xa(y,c))continue;if(y.interacting())return y;o||(o=y)}}if(o)return o;for(var M=0;M<x.interactions.list.length;M++){var C=x.interactions.list[M];if(!(C.pointerType!==u||/down/i.test(d)&&C.simulation))return C}return null},hasPointer:function(i){for(var o=i.pointerId,c=i.scope,u=0;u<c.interactions.list.length;u++){var d=c.interactions.list[u];if(Xa(d,o))return d}return null},idle:function(i){for(var o=i.pointerType,c=i.scope,u=0;u<c.interactions.list.length;u++){var d=c.interactions.list[u];if(d.pointers.length===1){var x=d.interactable;if(x&&(!x.options.gesture||!x.options.gesture.enabled))continue}else if(d.pointers.length>=2)continue;if(!d.interacting()&&o===d.pointerType)return d}return null}};function Xa(i,o){return i.pointers.some(function(c){return c.id===o})}var uf=oo;ro.default=uf;var so={};function fs(i){return fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},fs(i)}function qa(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var d=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var x,w,y=[],M=!0,C=!1;try{for(d=d.call(c);!(M=(x=d.next()).done)&&(y.push(x.value),!u||y.length!==u);M=!0);}catch(O){C=!0,w=O}finally{try{M||d.return==null||d.return()}finally{if(C)throw w}}return y}}(i,o)||function(c,u){if(c){if(typeof c=="string")return Ya(c,u);var d=Object.prototype.toString.call(c).slice(8,-1);return d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set"?Array.from(c):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?Ya(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Ya(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}function ff(i,o){if(!(i instanceof o))throw new TypeError("Cannot call a class as a function")}function df(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function ds(i,o){return ds=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},ds(i,o)}function hf(i,o){if(o&&(fs(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(i)}function ao(i){return ao=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},ao(i)}Object.defineProperty(so,"__esModule",{value:!0}),so.default=void 0;var hs=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Za(i,o){return function(c){var u=o.interactions.list,d=re.getPointerType(c),x=qa(re.getEventTargets(c),2),w=x[0],y=x[1],M=[];if(/^touch/.test(c.type)){o.prevTouchTime=o.now();for(var C=0;C<c.changedTouches.length;C++){var O=c.changedTouches[C],k={pointer:O,pointerId:re.getPointerId(O),pointerType:d,eventType:c.type,eventTarget:w,curEventTarget:y,scope:o},Z=$a(k);M.push([k.pointer,k.eventTarget,k.curEventTarget,Z])}}else{var ne=!1;if(!D.default.supportsPointerEvent&&/mouse/.test(c.type)){for(var W=0;W<u.length&&!ne;W++)ne=u[W].pointerType!=="mouse"&&u[W].pointerIsDown;ne=ne||o.now()-o.prevTouchTime<500||c.timeStamp===0}if(!ne){var de={pointer:c,pointerId:re.getPointerId(c),pointerType:d,eventType:c.type,curEventTarget:y,eventTarget:w,scope:o},Se=$a(de);M.push([de.pointer,de.eventTarget,de.curEventTarget,Se])}}for(var he=0;he<M.length;he++){var Ce=qa(M[he],4),Oe=Ce[0],Xe=Ce[1],st=Ce[2];Ce[3][i](Oe,c,Xe,st)}}}function $a(i){var o=i.pointerType,c=i.scope,u={interaction:ro.default.search(i),searchDetails:i};return c.fire("interactions:find",u),u.interaction||c.interactions.new({pointerType:o})}function ps(i,o){var c=i.doc,u=i.scope,d=i.options,x=u.interactions.docEvents,w=u.events,y=w[o];for(var M in u.browser.isIOS&&!d.events&&(d.events={passive:!1}),w.delegatedEvents)y(c,M,w.delegateListener),y(c,M,w.delegateUseCapture,!0);for(var C=d&&d.events,O=0;O<x.length;O++){var k=x[O];y(c,k.type,k.listener,C)}}var pf={id:"core/interactions",install:function(i){for(var o={},c=0;c<hs.length;c++){var u=hs[c];o[u]=Za(u,i)}var d,x=D.default.pEventTypes;function w(){for(var y=0;y<i.interactions.list.length;y++){var M=i.interactions.list[y];if(M.pointerIsDown&&M.pointerType==="touch"&&!M._interacting)for(var C=function(){var k=M.pointers[O];i.documents.some(function(Z){var ne=Z.doc;return(0,T.nodeContains)(ne,k.downTarget)})||M.removePointer(k.pointer,k.event)},O=0;O<M.pointers.length;O++)C()}}(d=E.default.PointerEvent?[{type:x.down,listener:w},{type:x.down,listener:o.pointerDown},{type:x.move,listener:o.pointerMove},{type:x.up,listener:o.pointerUp},{type:x.cancel,listener:o.pointerUp}]:[{type:"mousedown",listener:o.pointerDown},{type:"mousemove",listener:o.pointerMove},{type:"mouseup",listener:o.pointerUp},{type:"touchstart",listener:w},{type:"touchstart",listener:o.pointerDown},{type:"touchmove",listener:o.pointerMove},{type:"touchend",listener:o.pointerUp},{type:"touchcancel",listener:o.pointerUp}]).push({type:"blur",listener:function(y){for(var M=0;M<i.interactions.list.length;M++)i.interactions.list[M].documentBlur(y)}}),i.prevTouchTime=0,i.Interaction=function(y){(function(W,de){if(typeof de!="function"&&de!==null)throw new TypeError("Super expression must either be null or a function");W.prototype=Object.create(de&&de.prototype,{constructor:{value:W,writable:!0,configurable:!0}}),Object.defineProperty(W,"prototype",{writable:!1}),de&&ds(W,de)})(ne,y);var M,C,O,k,Z=(O=ne,k=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var W,de=ao(O);if(k){var Se=ao(this).constructor;W=Reflect.construct(de,arguments,Se)}else W=de.apply(this,arguments);return hf(this,W)});function ne(){return ff(this,ne),Z.apply(this,arguments)}return M=ne,(C=[{key:"pointerMoveTolerance",get:function(){return i.interactions.pointerMoveTolerance},set:function(W){i.interactions.pointerMoveTolerance=W}},{key:"_now",value:function(){return i.now()}}])&&df(M.prototype,C),Object.defineProperty(M,"prototype",{writable:!1}),ne}(Zt.default),i.interactions={list:[],new:function(y){y.scopeFire=function(C,O){return i.fire(C,O)};var M=new i.Interaction(y);return i.interactions.list.push(M),M},listeners:o,docEvents:d,pointerMoveTolerance:1},i.usePlugin(Bi.default)},listeners:{"scope:add-document":function(i){return ps(i,"add")},"scope:remove-document":function(i){return ps(i,"remove")},"interactable:unset":function(i,o){for(var c=i.interactable,u=o.interactions.list.length-1;u>=0;u--){var d=o.interactions.list[u];d.interactable===c&&(d.stop(),o.fire("interactions:destroy",{interaction:d}),d.destroy(),o.interactions.list.length>2&&o.interactions.list.splice(u,1))}}},onDocSignal:ps,doOnInteractions:Za,methodNames:hs},mf=pf;so.default=mf;var Dr={};function ms(i){return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ms(i)}function Rr(){return Rr=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(i,o,c){var u=gf(i,o);if(u){var d=Object.getOwnPropertyDescriptor(u,o);return d.get?d.get.call(arguments.length<3?i:c):d.value}},Rr.apply(this,arguments)}function gf(i,o){for(;!Object.prototype.hasOwnProperty.call(i,o)&&(i=ni(i))!==null;);return i}function gs(i,o){return gs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},gs(i,o)}function vf(i,o){if(o&&(ms(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(i)}function ni(i){return ni=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},ni(i)}function Ka(i,o){if(!(i instanceof o))throw new TypeError("Cannot call a class as a function")}function Ja(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Qa(i,o,c){return o&&Ja(i.prototype,o),c&&Ja(i,c),Object.defineProperty(i,"prototype",{writable:!1}),i}function It(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.Scope=void 0,Dr.initScope=el;var _f=function(){function i(){var o=this;Ka(this,i),It(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),It(this,"isInitialized",!1),It(this,"listenerMaps",[]),It(this,"browser",D.default),It(this,"defaults",(0,_i.default)(wr.defaults)),It(this,"Eventable",Ar.Eventable),It(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),It(this,"interactStatic",(0,as.createInteractStatic)(this)),It(this,"InteractEvent",Sr.InteractEvent),It(this,"Interactable",void 0),It(this,"interactables",new no.InteractableSet(this)),It(this,"_win",void 0),It(this,"document",void 0),It(this,"window",void 0),It(this,"documents",[]),It(this,"_plugins",{list:[],map:{}}),It(this,"onWindowUnload",function(u){return o.removeDocument(u.target)});var c=this;this.Interactable=function(u){(function(M,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(C&&C.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),C&&gs(M,C)})(y,u);var d,x,w=(d=y,x=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,C=ni(d);if(x){var O=ni(this).constructor;M=Reflect.construct(C,arguments,O)}else M=C.apply(this,arguments);return vf(this,M)});function y(){return Ka(this,y),w.apply(this,arguments)}return Qa(y,[{key:"_defaults",get:function(){return c.defaults}},{key:"set",value:function(M){return Rr(ni(y.prototype),"set",this).call(this,M),c.fire("interactable:set",{options:M,interactable:this}),this}},{key:"unset",value:function(){Rr(ni(y.prototype),"unset",this).call(this);var M=c.interactables.list.indexOf(this);M<0||(Rr(ni(y.prototype),"unset",this).call(this),c.interactables.list.splice(M,1),c.fire("interactable:unset",{interactable:this}))}}]),y}(to.Interactable)}return Qa(i,[{key:"addListeners",value:function(o,c){this.listenerMaps.push({id:c,map:o})}},{key:"fire",value:function(o,c){for(var u=0;u<this.listenerMaps.length;u++){var d=this.listenerMaps[u].map[o];if(d&&d(c,this,o)===!1)return!1}}},{key:"init",value:function(o){return this.isInitialized?this:el(this,o)}},{key:"pluginIsInstalled",value:function(o){return this._plugins.map[o.id]||this._plugins.list.indexOf(o)!==-1}},{key:"usePlugin",value:function(o,c){if(!this.isInitialized)return this;if(this.pluginIsInstalled(o))return this;if(o.id&&(this._plugins.map[o.id]=o),this._plugins.list.push(o),o.install&&o.install(this,c),o.listeners&&o.before){for(var u=0,d=this.listenerMaps.length,x=o.before.reduce(function(y,M){return y[M]=!0,y[tl(M)]=!0,y},{});u<d;u++){var w=this.listenerMaps[u].id;if(x[w]||x[tl(w)])break}this.listenerMaps.splice(u,0,{id:o.id,map:o.listeners})}else o.listeners&&this.listenerMaps.push({id:o.id,map:o.listeners});return this}},{key:"addDocument",value:function(o,c){if(this.getDocIndex(o)!==-1)return!1;var u=n.getWindow(o);c=c?(0,H.default)({},c):{},this.documents.push({doc:o,options:c}),this.events.documents.push(o),o!==this.document&&this.events.add(u,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:o,window:u,scope:this,options:c})}},{key:"removeDocument",value:function(o){var c=this.getDocIndex(o),u=n.getWindow(o),d=this.documents[c].options;this.events.remove(u,"unload",this.onWindowUnload),this.documents.splice(c,1),this.events.documents.splice(c,1),this.fire("scope:remove-document",{doc:o,window:u,scope:this,options:d})}},{key:"getDocIndex",value:function(o){for(var c=0;c<this.documents.length;c++)if(this.documents[c].doc===o)return c;return-1}},{key:"getDocOptions",value:function(o){var c=this.getDocIndex(o);return c===-1?null:this.documents[c].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),i}();function el(i,o){return i.isInitialized=!0,l.default.window(o)&&n.init(o),E.default.init(o),D.default.init(o),Ut.default.init(o),i.window=o,i.document=o.document,i.usePlugin(so.default),i.usePlugin(io.default),i}function tl(i){return i&&i.replace(/\/.*$/,"")}Dr.Scope=_f;var vs={},Et={};Object.defineProperty(Et,"__esModule",{value:!0});var xf={};Et.default=void 0,Object.keys(vs).forEach(function(i){i!=="default"&&i!=="__esModule"&&(Object.prototype.hasOwnProperty.call(xf,i)||i in Et&&Et[i]===vs[i]||Object.defineProperty(Et,i,{enumerable:!0,get:function(){return vs[i]}}))});var nl=new Dr.Scope,yf=nl.interactStatic;Et.default=yf;var bf=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:void 0;nl.init(bf);var lo={};Object.defineProperty(lo,"__esModule",{value:!0}),lo.default=void 0,lo.default=function(){};var co={};Object.defineProperty(co,"__esModule",{value:!0}),co.default=void 0,co.default=function(){};var uo={};function il(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var d=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(d!=null){var x,w,y=[],M=!0,C=!1;try{for(d=d.call(c);!(M=(x=d.next()).done)&&(y.push(x.value),!u||y.length!==u);M=!0);}catch(O){C=!0,w=O}finally{try{M||d.return==null||d.return()}finally{if(C)throw w}}return y}}(i,o)||function(c,u){if(c){if(typeof c=="string")return rl(c,u);var d=Object.prototype.toString.call(c).slice(8,-1);return d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set"?Array.from(c):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?rl(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function rl(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}Object.defineProperty(uo,"__esModule",{value:!0}),uo.default=void 0,uo.default=function(i){var o=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(u){var d=il(u,2),x=d[0],w=d[1];return x in i||w in i}),c=function(u,d){for(var x=i.range,w=i.limits,y=w===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:w,M=i.offset,C=M===void 0?{x:0,y:0}:M,O={range:x,grid:i,x:null,y:null},k=0;k<o.length;k++){var Z=il(o[k],2),ne=Z[0],W=Z[1],de=Math.round((u-C.x)/i[ne]),Se=Math.round((d-C.y)/i[W]);O[ne]=Math.max(y.left,Math.min(y.right,de*i[ne]+C.x)),O[W]=Math.max(y.top,Math.min(y.bottom,Se*i[W]+C.y))}return O};return c.grid=i,c.coordFields=o,c};var Ir={};Object.defineProperty(Ir,"__esModule",{value:!0}),Object.defineProperty(Ir,"edgeTarget",{enumerable:!0,get:function(){return lo.default}}),Object.defineProperty(Ir,"elements",{enumerable:!0,get:function(){return co.default}}),Object.defineProperty(Ir,"grid",{enumerable:!0,get:function(){return uo.default}});var fo={};Object.defineProperty(fo,"__esModule",{value:!0}),fo.default=void 0;var Mf={id:"snappers",install:function(i){var o=i.interactStatic;o.snappers=(0,H.default)(o.snappers||{},Ir),o.createSnapGrid=o.snappers.grid}},wf=Mf;fo.default=wf;var Vi={};function ol(i,o){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);o&&(u=u.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),c.push.apply(c,u)}return c}function _s(i){for(var o=1;o<arguments.length;o++){var c=arguments[o]!=null?arguments[o]:{};o%2?ol(Object(c),!0).forEach(function(u){Sf(i,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(c)):ol(Object(c)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(c,u))})}return i}function Sf(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Vi,"__esModule",{value:!0}),Vi.default=Vi.aspectRatio=void 0;var sl={start:function(i){var o=i.state,c=i.rect,u=i.edges,d=i.pageCoords,x=o.options.ratio,w=o.options,y=w.equalDelta,M=w.modifiers;x==="preserve"&&(x=c.width/c.height),o.startCoords=(0,H.default)({},d),o.startRect=(0,H.default)({},c),o.ratio=x,o.equalDelta=y;var C=o.linkedEdges={top:u.top||u.left&&!u.bottom,left:u.left||u.top&&!u.right,bottom:u.bottom||u.right&&!u.top,right:u.right||u.bottom&&!u.left};if(o.xIsPrimaryAxis=!(!u.left&&!u.right),o.equalDelta){var O=(C.left?1:-1)*(C.top?1:-1);o.edgeSign={x:O,y:O}}else o.edgeSign={x:C.left?-1:1,y:C.top?-1:1};if((0,H.default)(i.edges,C),M&&M.length){var k=new xi.default(i.interaction);k.copyFrom(i.interaction.modification),k.prepareStates(M),o.subModification=k,k.startAll(_s({},i))}},set:function(i){var o=i.state,c=i.rect,u=i.coords,d=(0,H.default)({},u),x=o.equalDelta?Ef:Tf;if(x(o,o.xIsPrimaryAxis,u,c),!o.subModification)return null;var w=(0,H.default)({},c);(0,q.addEdges)(o.linkedEdges,w,{x:u.x-d.x,y:u.y-d.y});var y=o.subModification.setAll(_s(_s({},i),{},{rect:w,edges:o.linkedEdges,pageCoords:u,prevCoords:u,prevRect:w})),M=y.delta;return y.changed&&(x(o,Math.abs(M.x)>Math.abs(M.y),y.coords,y.rect),(0,H.default)(u,y.coords)),y.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function Ef(i,o,c){var u=i.startCoords,d=i.edgeSign;o?c.y=u.y+(c.x-u.x)*d.y:c.x=u.x+(c.y-u.y)*d.x}function Tf(i,o,c,u){var d=i.startRect,x=i.startCoords,w=i.ratio,y=i.edgeSign;if(o){var M=u.width/w;c.y=x.y+(M-d.height)*y.y}else{var C=u.height*w;c.x=x.x+(C-d.width)*y.x}}Vi.aspectRatio=sl;var Af=(0,Rt.makeModifier)(sl,"aspectRatio");Vi.default=Af;var Mi={};Object.defineProperty(Mi,"__esModule",{value:!0}),Mi.default=void 0;var al=function(){};al._defaults={};var Pf=al;Mi.default=Pf;var xs={};Object.defineProperty(xs,"__esModule",{value:!0}),Object.defineProperty(xs,"default",{enumerable:!0,get:function(){return Mi.default}});var Gt={};function ys(i,o,c){return l.default.func(i)?q.resolveRectLike(i,o.interactable,o.element,[c.x,c.y,o]):q.resolveRectLike(i,o.interactable,o.element)}Object.defineProperty(Gt,"__esModule",{value:!0}),Gt.default=void 0,Gt.getRestrictionRect=ys,Gt.restrict=void 0;var ll={start:function(i){var o=i.rect,c=i.startOffset,u=i.state,d=i.interaction,x=i.pageCoords,w=u.options,y=w.elementRect,M=(0,H.default)({left:0,top:0,right:0,bottom:0},w.offset||{});if(o&&y){var C=ys(w.restriction,d,x);if(C){var O=C.right-C.left-o.width,k=C.bottom-C.top-o.height;O<0&&(M.left+=O,M.right+=O),k<0&&(M.top+=k,M.bottom+=k)}M.left+=c.left-o.width*y.left,M.top+=c.top-o.height*y.top,M.right+=c.right-o.width*(1-y.right),M.bottom+=c.bottom-o.height*(1-y.bottom)}u.offset=M},set:function(i){var o=i.coords,c=i.interaction,u=i.state,d=u.options,x=u.offset,w=ys(d.restriction,c,o);if(w){var y=q.xywhToTlbr(w);o.x=Math.max(Math.min(y.right-x.right,o.x),y.left+x.left),o.y=Math.max(Math.min(y.bottom-x.bottom,o.y),y.top+x.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Gt.restrict=ll;var Cf=(0,Rt.makeModifier)(ll,"restrict");Gt.default=Cf;var Ln={};Object.defineProperty(Ln,"__esModule",{value:!0}),Ln.restrictEdges=Ln.default=void 0;var cl={top:1/0,left:1/0,bottom:-1/0,right:-1/0},ul={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function fl(i,o){for(var c=["top","left","bottom","right"],u=0;u<c.length;u++){var d=c[u];d in i||(i[d]=o[d])}return i}var dl={noInner:cl,noOuter:ul,start:function(i){var o,c=i.interaction,u=i.startOffset,d=i.state,x=d.options;if(x){var w=(0,Gt.getRestrictionRect)(x.offset,c,c.coords.start.page);o=q.rectToXY(w)}o=o||{x:0,y:0},d.offset={top:o.y+u.top,left:o.x+u.left,bottom:o.y-u.bottom,right:o.x-u.right}},set:function(i){var o=i.coords,c=i.edges,u=i.interaction,d=i.state,x=d.offset,w=d.options;if(c){var y=(0,H.default)({},o),M=(0,Gt.getRestrictionRect)(w.inner,u,y)||{},C=(0,Gt.getRestrictionRect)(w.outer,u,y)||{};fl(M,cl),fl(C,ul),c.top?o.y=Math.min(Math.max(C.top+x.top,y.y),M.top+x.top):c.bottom&&(o.y=Math.max(Math.min(C.bottom+x.bottom,y.y),M.bottom+x.bottom)),c.left?o.x=Math.min(Math.max(C.left+x.left,y.x),M.left+x.left):c.right&&(o.x=Math.max(Math.min(C.right+x.right,y.x),M.right+x.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Ln.restrictEdges=dl;var Lf=(0,Rt.makeModifier)(dl,"restrictEdges");Ln.default=Lf;var Hi={};Object.defineProperty(Hi,"__esModule",{value:!0}),Hi.restrictRect=Hi.default=void 0;var Df=(0,H.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(i){}},Gt.restrict.defaults),hl={start:Gt.restrict.start,set:Gt.restrict.set,defaults:Df};Hi.restrictRect=hl;var Rf=(0,Rt.makeModifier)(hl,"restrictRect");Hi.default=Rf;var Wi={};Object.defineProperty(Wi,"__esModule",{value:!0}),Wi.restrictSize=Wi.default=void 0;var If={width:-1/0,height:-1/0},Of={width:1/0,height:1/0},pl={start:function(i){return Ln.restrictEdges.start(i)},set:function(i){var o=i.interaction,c=i.state,u=i.rect,d=i.edges,x=c.options;if(d){var w=q.tlbrToXywh((0,Gt.getRestrictionRect)(x.min,o,i.coords))||If,y=q.tlbrToXywh((0,Gt.getRestrictionRect)(x.max,o,i.coords))||Of;c.options={endOnly:x.endOnly,inner:(0,H.default)({},Ln.restrictEdges.noInner),outer:(0,H.default)({},Ln.restrictEdges.noOuter)},d.top?(c.options.inner.top=u.bottom-w.height,c.options.outer.top=u.bottom-y.height):d.bottom&&(c.options.inner.bottom=u.top+w.height,c.options.outer.bottom=u.top+y.height),d.left?(c.options.inner.left=u.right-w.width,c.options.outer.left=u.right-y.width):d.right&&(c.options.inner.right=u.left+w.width,c.options.outer.right=u.left+y.width),Ln.restrictEdges.set(i),c.options=x}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Wi.restrictSize=pl;var Ff=(0,Rt.makeModifier)(pl,"restrictSize");Wi.default=Ff;var bs={};Object.defineProperty(bs,"__esModule",{value:!0}),Object.defineProperty(bs,"default",{enumerable:!0,get:function(){return Mi.default}});var ii={};Object.defineProperty(ii,"__esModule",{value:!0}),ii.snap=ii.default=void 0;var ml={start:function(i){var o,c=i.interaction,u=i.interactable,d=i.element,x=i.rect,w=i.state,y=i.startOffset,M=w.options,C=M.offsetWithOrigin?function(Z){var ne=Z.interaction.element;return(0,q.rectToXY)((0,q.resolveRectLike)(Z.state.options.origin,null,null,[ne]))||(0,Q.default)(Z.interactable,ne,Z.interaction.prepared.name)}(i):{x:0,y:0};if(M.offset==="startCoords")o={x:c.coords.start.page.x,y:c.coords.start.page.y};else{var O=(0,q.resolveRectLike)(M.offset,u,d,[c]);(o=(0,q.rectToXY)(O)||{x:0,y:0}).x+=C.x,o.y+=C.y}var k=M.relativePoints;w.offsets=x&&k&&k.length?k.map(function(Z,ne){return{index:ne,relativePoint:Z,x:y.left-x.width*Z.x+o.x,y:y.top-x.height*Z.y+o.y}}):[{index:0,relativePoint:null,x:o.x,y:o.y}]},set:function(i){var o=i.interaction,c=i.coords,u=i.state,d=u.options,x=u.offsets,w=(0,Q.default)(o.interactable,o.element,o.prepared.name),y=(0,H.default)({},c),M=[];d.offsetWithOrigin||(y.x-=w.x,y.y-=w.y);for(var C=0;C<x.length;C++)for(var O=x[C],k=y.x-O.x,Z=y.y-O.y,ne=0,W=d.targets.length;ne<W;ne++){var de,Se=d.targets[ne];(de=l.default.func(Se)?Se(k,Z,o._proxy,O,ne):Se)&&M.push({x:(l.default.number(de.x)?de.x:k)+O.x,y:(l.default.number(de.y)?de.y:Z)+O.y,range:l.default.number(de.range)?de.range:d.range,source:Se,index:ne,offset:O})}for(var he={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Ce=0;Ce<M.length;Ce++){var Oe=M[Ce],Xe=Oe.range,st=Oe.x-y.x,ht=Oe.y-y.y,Qe=(0,ue.default)(st,ht),ut=Qe<=Xe;Xe===1/0&&he.inRange&&he.range!==1/0&&(ut=!1),he.target&&!(ut?he.inRange&&Xe!==1/0?Qe/Xe<he.distance/he.range:Xe===1/0&&he.range!==1/0||Qe<he.distance:!he.inRange&&Qe<he.distance)||(he.target=Oe,he.distance=Qe,he.range=Xe,he.inRange=ut,he.delta.x=st,he.delta.y=ht)}return he.inRange&&(c.x=he.target.x,c.y=he.target.y),u.closest=he,he},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};ii.snap=ml;var zf=(0,Rt.makeModifier)(ml,"snap");ii.default=zf;var Vn={};function gl(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}Object.defineProperty(Vn,"__esModule",{value:!0}),Vn.snapSize=Vn.default=void 0;var vl={start:function(i){var o=i.state,c=i.edges,u=o.options;if(!c)return null;i.state={options:{targets:null,relativePoints:[{x:c.left?0:1,y:c.top?0:1}],offset:u.offset||"self",origin:{x:0,y:0},range:u.range}},o.targetFields=o.targetFields||[["width","height"],["x","y"]],ii.snap.start(i),o.offsets=i.state.offsets,i.state=o},set:function(i){var o,c,u=i.interaction,d=i.state,x=i.coords,w=d.options,y=d.offsets,M={x:x.x-y[0].x,y:x.y-y[0].y};d.options=(0,H.default)({},w),d.options.targets=[];for(var C=0;C<(w.targets||[]).length;C++){var O=(w.targets||[])[C],k=void 0;if(k=l.default.func(O)?O(M.x,M.y,u):O){for(var Z=0;Z<d.targetFields.length;Z++){var ne=(o=d.targetFields[Z],c=2,function(he){if(Array.isArray(he))return he}(o)||function(he,Ce){var Oe=he==null?null:typeof Symbol!="undefined"&&he[Symbol.iterator]||he["@@iterator"];if(Oe!=null){var Xe,st,ht=[],Qe=!0,ut=!1;try{for(Oe=Oe.call(he);!(Qe=(Xe=Oe.next()).done)&&(ht.push(Xe.value),!Ce||ht.length!==Ce);Qe=!0);}catch(fn){ut=!0,st=fn}finally{try{Qe||Oe.return==null||Oe.return()}finally{if(ut)throw st}}return ht}}(o,c)||function(he,Ce){if(he){if(typeof he=="string")return gl(he,Ce);var Oe=Object.prototype.toString.call(he).slice(8,-1);return Oe==="Object"&&he.constructor&&(Oe=he.constructor.name),Oe==="Map"||Oe==="Set"?Array.from(he):Oe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Oe)?gl(he,Ce):void 0}}(o,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),W=ne[0],de=ne[1];if(W in k||de in k){k.x=k[W],k.y=k[de];break}}d.options.targets.push(k)}}var Se=ii.snap.set(i);return d.options=w,Se},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};Vn.snapSize=vl;var Nf=(0,Rt.makeModifier)(vl,"snapSize");Vn.default=Nf;var ji={};Object.defineProperty(ji,"__esModule",{value:!0}),ji.snapEdges=ji.default=void 0;var _l={start:function(i){var o=i.edges;return o?(i.state.targetFields=i.state.targetFields||[[o.left?"left":"right",o.top?"top":"bottom"]],Vn.snapSize.start(i)):null},set:Vn.snapSize.set,defaults:(0,H.default)((0,_i.default)(Vn.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};ji.snapEdges=_l;var Uf=(0,Rt.makeModifier)(_l,"snapEdges");ji.default=Uf;var Ms={};Object.defineProperty(Ms,"__esModule",{value:!0}),Object.defineProperty(Ms,"default",{enumerable:!0,get:function(){return Mi.default}});var ws={};Object.defineProperty(ws,"__esModule",{value:!0}),Object.defineProperty(ws,"default",{enumerable:!0,get:function(){return Mi.default}});var Xi={};Object.defineProperty(Xi,"__esModule",{value:!0}),Xi.default=void 0;var kf={aspectRatio:Vi.default,restrictEdges:Ln.default,restrict:Gt.default,restrictRect:Hi.default,restrictSize:Wi.default,snapEdges:ji.default,snap:ii.default,snapSize:Vn.default,spring:Ms.default,avoid:xs.default,transform:ws.default,rubberband:bs.default};Xi.default=kf;var ho={};Object.defineProperty(ho,"__esModule",{value:!0}),ho.default=void 0;var Bf={id:"modifiers",install:function(i){var o=i.interactStatic;for(var c in i.usePlugin(Rt.default),i.usePlugin(fo.default),o.modifiers=Xi.default,Xi.default){var u=Xi.default[c],d=u._defaults,x=u._methods;d._methods=x,i.defaults.perAction[c]=d}}},Gf=Bf;ho.default=Gf;var wi={};function Ss(i){return Ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ss(i)}function Vf(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Es(i,o){return Es=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Es(i,o)}function Hf(i,o){if(o&&(Ss(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ts(i)}function Ts(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function po(i){return po=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},po(i)}Object.defineProperty(wi,"__esModule",{value:!0}),wi.default=wi.PointerEvent=void 0;var Wf=function(i){(function(y,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(M&&M.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),Object.defineProperty(y,"prototype",{writable:!1}),M&&Es(y,M)})(w,i);var o,c,u,d,x=(u=w,d=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var y,M=po(u);if(d){var C=po(this).constructor;y=Reflect.construct(M,arguments,C)}else y=M.apply(this,arguments);return Hf(this,y)});function w(y,M,C,O,k,Z){var ne;if(function(Se,he){if(!(Se instanceof he))throw new TypeError("Cannot call a class as a function")}(this,w),ne=x.call(this,k),re.pointerExtend(Ts(ne),C),C!==M&&re.pointerExtend(Ts(ne),M),ne.timeStamp=Z,ne.originalEvent=C,ne.type=y,ne.pointerId=re.getPointerId(M),ne.pointerType=re.getPointerType(M),ne.target=O,ne.currentTarget=null,y==="tap"){var W=k.getPointerIndex(M);ne.dt=ne.timeStamp-k.pointers[W].downTime;var de=ne.timeStamp-k.tapTime;ne.double=!!k.prevTap&&k.prevTap.type!=="doubletap"&&k.prevTap.target===ne.target&&de<500}else y==="doubletap"&&(ne.dt=M.timeStamp-k.tapTime,ne.double=!0);return ne}return o=w,(c=[{key:"_subtractOrigin",value:function(y){var M=y.x,C=y.y;return this.pageX-=M,this.pageY-=C,this.clientX-=M,this.clientY-=C,this}},{key:"_addOrigin",value:function(y){var M=y.x,C=y.y;return this.pageX+=M,this.pageY+=C,this.clientX+=M,this.clientY+=C,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&Vf(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),w}(Ze.BaseEvent);wi.PointerEvent=wi.default=Wf;var Or={};Object.defineProperty(Or,"__esModule",{value:!0}),Or.default=void 0;var mo={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(i){i.pointerEvents=mo,i.defaults.actions.pointerEvents=mo.defaults,(0,H.default)(i.actions.phaselessTypes,mo.types)},listeners:{"interactions:new":function(i){var o=i.interaction;o.prevTap=null,o.tapTime=0},"interactions:update-pointer":function(i){var o=i.down,c=i.pointerInfo;!o&&c.hold||(c.hold={duration:1/0,timeout:null})},"interactions:move":function(i,o){var c=i.interaction,u=i.pointer,d=i.event,x=i.eventTarget;i.duplicate||c.pointerIsDown&&!c.pointerWasMoved||(c.pointerIsDown&&As(i),ri({interaction:c,pointer:u,event:d,eventTarget:x,type:"move"},o))},"interactions:down":function(i,o){(function(c,u){for(var d=c.interaction,x=c.pointer,w=c.event,y=c.eventTarget,M=c.pointerIndex,C=d.pointers[M].hold,O=T.getPath(y),k={interaction:d,pointer:x,event:w,eventTarget:y,type:"hold",targets:[],path:O,node:null},Z=0;Z<O.length;Z++){var ne=O[Z];k.node=ne,u.fire("pointerEvents:collect-targets",k)}if(k.targets.length){for(var W=1/0,de=0;de<k.targets.length;de++){var Se=k.targets[de].eventable.options.holdDuration;Se<W&&(W=Se)}C.duration=W,C.timeout=setTimeout(function(){ri({interaction:d,eventTarget:y,pointer:x,event:w,type:"hold"},u)},W)}})(i,o),ri(i,o)},"interactions:up":function(i,o){As(i),ri(i,o),function(c,u){var d=c.interaction,x=c.pointer,w=c.event,y=c.eventTarget;d.pointerWasMoved||ri({interaction:d,eventTarget:y,pointer:x,event:w,type:"tap"},u)}(i,o)},"interactions:cancel":function(i,o){As(i),ri(i,o)}},PointerEvent:wi.PointerEvent,fire:ri,collectEventTargets:xl,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function ri(i,o){var c=i.interaction,u=i.pointer,d=i.event,x=i.eventTarget,w=i.type,y=i.targets,M=y===void 0?xl(i,o):y,C=new wi.PointerEvent(w,u,d,x,c,o.now());o.fire("pointerEvents:new",{pointerEvent:C});for(var O={interaction:c,pointer:u,event:d,eventTarget:x,targets:M,type:w,pointerEvent:C},k=0;k<M.length;k++){var Z=M[k];for(var ne in Z.props||{})C[ne]=Z.props[ne];var W=(0,Q.default)(Z.eventable,Z.node);if(C._subtractOrigin(W),C.eventable=Z.eventable,C.currentTarget=Z.node,Z.eventable.fire(C),C._addOrigin(W),C.immediatePropagationStopped||C.propagationStopped&&k+1<M.length&&M[k+1].node!==C.currentTarget)break}if(o.fire("pointerEvents:fired",O),w==="tap"){var de=C.double?ri({interaction:c,pointer:u,event:d,eventTarget:x,type:"doubletap"},o):C;c.prevTap=de,c.tapTime=de.timeStamp}return C}function xl(i,o){var c=i.interaction,u=i.pointer,d=i.event,x=i.eventTarget,w=i.type,y=c.getPointerIndex(u),M=c.pointers[y];if(w==="tap"&&(c.pointerWasMoved||!M||M.downTarget!==x))return[];for(var C=T.getPath(x),O={interaction:c,pointer:u,event:d,eventTarget:x,type:w,path:C,targets:[],node:null},k=0;k<C.length;k++){var Z=C[k];O.node=Z,o.fire("pointerEvents:collect-targets",O)}return w==="hold"&&(O.targets=O.targets.filter(function(ne){var W;return ne.eventable.options.holdDuration===((W=c.pointers[y])==null?void 0:W.hold.duration)})),O.targets}function As(i){var o=i.interaction,c=i.pointerIndex,u=o.pointers[c].hold;u&&u.timeout&&(clearTimeout(u.timeout),u.timeout=null)}var jf=mo;Or.default=jf;var go={};function Xf(i){var o=i.interaction;o.holdIntervalHandle&&(clearInterval(o.holdIntervalHandle),o.holdIntervalHandle=null)}Object.defineProperty(go,"__esModule",{value:!0}),go.default=void 0;var qf={id:"pointer-events/holdRepeat",install:function(i){i.usePlugin(Or.default);var o=i.pointerEvents;o.defaults.holdRepeatInterval=0,o.types.holdrepeat=i.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(i,o){return i["pointerEvents:".concat(o)]=Xf,i},{"pointerEvents:new":function(i){var o=i.pointerEvent;o.type==="hold"&&(o.count=(o.count||0)+1)},"pointerEvents:fired":function(i,o){var c=i.interaction,u=i.pointerEvent,d=i.eventTarget,x=i.targets;if(u.type==="hold"&&x.length){var w=x[0].eventable.options.holdRepeatInterval;w<=0||(c.holdIntervalHandle=setTimeout(function(){o.pointerEvents.fire({interaction:c,eventTarget:d,type:"hold",pointer:u,event:u},o)},w))}}})},Yf=qf;go.default=Yf;var vo={};function Zf(i){return(0,H.default)(this.events.options,i),this}Object.defineProperty(vo,"__esModule",{value:!0}),vo.default=void 0;var $f={id:"pointer-events/interactableTargets",install:function(i){var o=i.Interactable;o.prototype.pointerEvents=Zf;var c=o.prototype._backCompatOption;o.prototype._backCompatOption=function(u,d){var x=c.call(this,u,d);return x===this&&(this.events.options[u]=d),x}},listeners:{"pointerEvents:collect-targets":function(i,o){var c=i.targets,u=i.node,d=i.type,x=i.eventTarget;o.interactables.forEachMatch(u,function(w){var y=w.events,M=y.options;y.types[d]&&y.types[d].length&&w.testIgnoreAllow(M,u,x)&&c.push({node:u,eventable:y,props:{interactable:w}})})},"interactable:new":function(i){var o=i.interactable;o.events.getRect=function(c){return o.getRect(c)}},"interactable:set":function(i,o){var c=i.interactable,u=i.options;(0,H.default)(c.events.options,o.pointerEvents.defaults),(0,H.default)(c.events.options,u.pointerEvents||{})}}},Kf=$f;vo.default=Kf;var _o={};Object.defineProperty(_o,"__esModule",{value:!0}),_o.default=void 0;var Jf={id:"pointer-events",install:function(i){i.usePlugin(Or),i.usePlugin(go.default),i.usePlugin(vo.default)}},Qf=Jf;_o.default=Qf;var Fr={};function yl(i){var o=i.Interactable;i.actions.phases.reflow=!0,o.prototype.reflow=function(c){return function(u,d,x){for(var w=l.default.string(u.target)?Ve.from(u._context.querySelectorAll(u.target)):[u.target],y=x.window.Promise,M=y?[]:null,C=function(){var k=w[O],Z=u.getRect(k);if(!Z)return"break";var ne=Ve.find(x.interactions.list,function(Ce){return Ce.interacting()&&Ce.interactable===u&&Ce.element===k&&Ce.prepared.name===d.name}),W=void 0;if(ne)ne.move(),M&&(W=ne._reflowPromise||new y(function(Ce){ne._reflowResolve=Ce}));else{var de=(0,q.tlbrToXywh)(Z),Se={page:{x:de.x,y:de.y},client:{x:de.x,y:de.y},timeStamp:x.now()},he=re.coordsToEvent(Se);W=function(Ce,Oe,Xe,st,ht){var Qe=Ce.interactions.new({pointerType:"reflow"}),ut={interaction:Qe,event:ht,pointer:ht,eventTarget:Xe,phase:"reflow"};Qe.interactable=Oe,Qe.element=Xe,Qe.prevEvent=ht,Qe.updatePointer(ht,ht,Xe,!0),re.setZeroCoords(Qe.coords.delta),(0,ie.copyAction)(Qe.prepared,st),Qe._doPhase(ut);var fn=Ce.window.Promise,Hn=fn?new fn(function(Ls){Qe._reflowResolve=Ls}):void 0;return Qe._reflowPromise=Hn,Qe.start(st,Oe,Xe),Qe._interacting?(Qe.move(ut),Qe.end(ht)):(Qe.stop(),Qe._reflowResolve()),Qe.removePointer(ht,ht),Hn}(x,u,k,d,he)}M&&M.push(W)},O=0;O<w.length&&C()!=="break";O++);return M&&y.all(M).then(function(){return u})}(this,c,i)}}Object.defineProperty(Fr,"__esModule",{value:!0}),Fr.default=void 0,Fr.install=yl;var ed={id:"reflow",install:yl,listeners:{"interactions:stop":function(i,o){var c=i.interaction;c.pointerType==="reflow"&&(c._reflowResolve&&c._reflowResolve(),Ve.remove(o.interactions.list,c))}}},td=ed;Fr.default=td;var un={exports:{}};function Ps(i){return Ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ps(i)}Object.defineProperty(un.exports,"__esModule",{value:!0}),un.exports.default=void 0,Et.default.use(Bi.default),Et.default.use(bi.default),Et.default.use(_o.default),Et.default.use(Gi.default),Et.default.use(ho.default),Et.default.use(ti.default),Et.default.use(mi.default),Et.default.use(Tn.default),Et.default.use(Fr.default);var nd=Et.default;if(un.exports.default=nd,Ps(un)==="object"&&un)try{un.exports=Et.default}catch{}Et.default.default=Et.default,un=un.exports;var Si={exports:{}};function Cs(i){return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Cs(i)}Object.defineProperty(Si.exports,"__esModule",{value:!0}),Si.exports.default=void 0;var id=un.default;if(Si.exports.default=id,Cs(Si)==="object"&&Si)try{Si.exports=un.default}catch{}return un.default.default=un.default,Si.exports})})($c);var sd=od($c.exports);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="141",qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,bl=1,ld=2,Kc=1,cd=2,Br=3,Vr=0,En=1,pi=2,ud=1,di=0,dr=1,Ml=2,wl=3,Sl=4,fd=5,cr=100,dd=101,hd=102,El=103,Tl=104,pd=200,md=201,gd=202,vd=203,Jc=204,Qc=205,_d=206,xd=207,yd=208,bd=209,Md=210,wd=0,Sd=1,Ed=2,ha=3,Td=4,Ad=5,Pd=6,Cd=7,Xo=0,Ld=1,Dd=2,Kn=0,Rd=1,Id=2,Od=3,Fd=4,zd=5,eu=300,pr=301,mr=302,pa=303,ma=304,qo=306,ga=1e3,wn=1001,va=1002,$t=1003,Al=1004,Pl=1005,pn=1006,Nd=1007,Yo=1008,zi=1009,Ud=1010,kd=1011,tu=1012,Bd=1013,Di=1014,Ri=1015,Hr=1016,Gd=1017,Vd=1018,hr=1020,Hd=1021,Wd=1022,Sn=1023,jd=1024,Xd=1025,Oi=1026,gr=1027,qd=1028,Yd=1029,Zd=1030,$d=1031,Kd=1033,Ds=33776,Rs=33777,Is=33778,Os=33779,Cl=35840,Ll=35841,Dl=35842,Rl=35843,Jd=36196,Il=37492,Ol=37496,Fl=37808,zl=37809,Nl=37810,Ul=37811,kl=37812,Bl=37813,Gl=37814,Vl=37815,Hl=37816,Wl=37817,jl=37818,Xl=37819,ql=37820,Yl=37821,Zl=36492,Ni=3e3,_t=3001,Qd=3200,eh=3201,_r=0,th=1,Zn="srgb",Ii="srgb-linear",Fs=7680,nh=519,$l=35044,Go=35040,Kl="300 es",_a=1035;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,f=r.length;a<f;a++)r[a].call(this,e);e.target=null}}}const Ot=[];for(let s=0;s<256;s++)Ot[s]=(s<16?"0":"")+s.toString(16);const zs=Math.PI/180,Jl=180/Math.PI;function Wr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Vt(s,e,t){return Math.max(e,Math.min(t,s))}function ih(s,e){return(s%e+e)%e}function Ns(s,e,t){return(1-t)*s+t*e}function Ql(s){return(s&s-1)===0&&s!==0}function xa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class Ge{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,f=this.y-e.y;return this.x=a*n-f*r+e.x,this.y=a*r+f*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,a,f,l,h,p){const m=this.elements;return m[0]=e,m[1]=r,m[2]=l,m[3]=t,m[4]=a,m[5]=h,m[6]=n,m[7]=f,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,f=n[0],l=n[3],h=n[6],p=n[1],m=n[4],v=n[7],_=n[2],S=n[5],A=n[8],b=r[0],g=r[3],E=r[6],F=r[1],G=r[4],N=r[7],D=r[2],B=r[5],Y=r[8];return a[0]=f*b+l*F+h*D,a[3]=f*g+l*G+h*B,a[6]=f*E+l*N+h*Y,a[1]=p*b+m*F+v*D,a[4]=p*g+m*G+v*B,a[7]=p*E+m*N+v*Y,a[2]=_*b+S*F+A*D,a[5]=_*g+S*G+A*B,a[8]=_*E+S*N+A*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],f=e[4],l=e[5],h=e[6],p=e[7],m=e[8];return t*f*m-t*l*p-n*a*m+n*l*h+r*a*p-r*f*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],f=e[4],l=e[5],h=e[6],p=e[7],m=e[8],v=m*f-l*p,_=l*h-m*a,S=p*a-f*h,A=t*v+n*_+r*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(r*p-m*n)*b,e[2]=(l*n-r*f)*b,e[3]=_*b,e[4]=(m*t-r*h)*b,e[5]=(r*a-l*t)*b,e[6]=S*b,e[7]=(n*h-p*t)*b,e[8]=(f*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,f,l){const h=Math.cos(a),p=Math.sin(a);return this.set(n*h,n*p,-n*(h*f+p*l)+f+e,-r*p,r*h,-r*(-p*f+h*l)+l+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,a=r[0],f=r[3],l=r[6],h=r[1],p=r[4],m=r[7];return r[0]=t*a+n*h,r[3]=t*f+n*p,r[6]=t*l+n*m,r[1]=-n*a+t*h,r[4]=-n*f+t*p,r[7]=-n*l+t*m,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function nu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function Wo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Us={[Zn]:{[Ii]:Fi},[Ii]:{[Zn]:Vo}},xn={legacyMode:!0,get workingColorSpace(){return Ii},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Us[e]&&Us[e][t]!==void 0){const n=Us[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tt={r:0,g:0,b:0},yn={h:0,s:0,l:0},xo={h:0,s:0,l:0};function ks(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function yo(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ii){return this.r=e,this.g=t,this.b=n,xn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ii){if(e=ih(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,f=2*n-a;this.r=ks(f,a,e+1/3),this.g=ks(f,a,e),this.b=ks(f,a,e-1/3)}return xn.toWorkingColorSpace(this,r),this}setStyle(e,t=Zn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const f=r[1],l=r[2];switch(f){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,xn.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,xn.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const h=parseFloat(a[1])/360,p=parseInt(a[2],10)/100,m=parseInt(a[3],10)/100;return n(a[4]),this.setHSL(h,p,m,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],f=a.length;if(f===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,xn.toWorkingColorSpace(this,t),this;if(f===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,xn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Zn){const n=iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return xn.fromWorkingColorSpace(yo(this,Tt),e),Vt(Tt.r*255,0,255)<<16^Vt(Tt.g*255,0,255)<<8^Vt(Tt.b*255,0,255)<<0}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ii){xn.fromWorkingColorSpace(yo(this,Tt),t);const n=Tt.r,r=Tt.g,a=Tt.b,f=Math.max(n,r,a),l=Math.min(n,r,a);let h,p;const m=(l+f)/2;if(l===f)h=0,p=0;else{const v=f-l;switch(p=m<=.5?v/(f+l):v/(2-f-l),f){case n:h=(r-a)/v+(r<a?6:0);break;case r:h=(a-n)/v+2;break;case a:h=(n-r)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=Ii){return xn.fromWorkingColorSpace(yo(this,Tt),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Zn){return xn.fromWorkingColorSpace(yo(this,Tt),e),e!==Zn?`color(${e} ${Tt.r} ${Tt.g} ${Tt.b})`:`rgb(${Tt.r*255|0},${Tt.g*255|0},${Tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(yn),yn.h+=e,yn.s+=t,yn.l+=n,this.setHSL(yn.h,yn.s,yn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(xo);const n=Ns(yn.h,xo.h,t),r=Ns(yn.s,xo.s,t),a=Ns(yn.l,xo.l,t);return this.setHSL(n,r,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ie.NAMES=iu;let Zi;class ru{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=Wo("canvas")),Zi.width=e.width,Zi.height=e.height;const n=Zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Wo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let f=0;f<a.length;f++)a[f]=Fi(a[f]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ou{constructor(e=null){this.isSource=!0,this.uuid=Wr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let f=0,l=r.length;f<l;f++)r[f].isDataTexture?a.push(Bs(r[f].image)):a.push(Bs(r[f]))}else a=Bs(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Bs(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ru.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rh=0;class mn extends ki{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=wn,r=wn,a=pn,f=Yo,l=Sn,h=zi,p=1,m=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Wr(),this.name="",this.source=new ou(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=f,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ga:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ga:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=eu;class xt{constructor(e=0,t=0,n=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,f=e.elements;return this.x=f[0]*t+f[4]*n+f[8]*r+f[12]*a,this.y=f[1]*t+f[5]*n+f[9]*r+f[13]*a,this.z=f[2]*t+f[6]*n+f[10]*r+f[14]*a,this.w=f[3]*t+f[7]*n+f[11]*r+f[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const h=e.elements,p=h[0],m=h[4],v=h[8],_=h[1],S=h[5],A=h[9],b=h[2],g=h[6],E=h[10];if(Math.abs(m-_)<.01&&Math.abs(v-b)<.01&&Math.abs(A-g)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+b)<.1&&Math.abs(A+g)<.1&&Math.abs(p+S+E-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const G=(p+1)/2,N=(S+1)/2,D=(E+1)/2,B=(m+_)/4,Y=(v+b)/4,T=(A+g)/4;return G>N&&G>D?G<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(G),r=B/n,a=Y/n):N>D?N<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(N),n=B/r,a=T/r):D<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(D),n=Y/a,r=T/a),this.set(n,r,a,t),this}let F=Math.sqrt((g-A)*(g-A)+(v-b)*(v-b)+(_-m)*(_-m));return Math.abs(F)<.001&&(F=1),this.x=(g-A)/F,this.y=(v-b)/F,this.z=(_-m)/F,this.w=Math.acos((p+S+E-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hi extends ki{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ou(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class su extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oh extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,a,f,l){let h=n[r+0],p=n[r+1],m=n[r+2],v=n[r+3];const _=a[f+0],S=a[f+1],A=a[f+2],b=a[f+3];if(l===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(l===1){e[t+0]=_,e[t+1]=S,e[t+2]=A,e[t+3]=b;return}if(v!==b||h!==_||p!==S||m!==A){let g=1-l;const E=h*_+p*S+m*A+v*b,F=E>=0?1:-1,G=1-E*E;if(G>Number.EPSILON){const D=Math.sqrt(G),B=Math.atan2(D,E*F);g=Math.sin(g*B)/D,l=Math.sin(l*B)/D}const N=l*F;if(h=h*g+_*N,p=p*g+S*N,m=m*g+A*N,v=v*g+b*N,g===1-l){const D=1/Math.sqrt(h*h+p*p+m*m+v*v);h*=D,p*=D,m*=D,v*=D}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,a,f){const l=n[r],h=n[r+1],p=n[r+2],m=n[r+3],v=a[f],_=a[f+1],S=a[f+2],A=a[f+3];return e[t]=l*A+m*v+h*S-p*_,e[t+1]=h*A+m*_+p*v-l*S,e[t+2]=p*A+m*S+l*_-h*v,e[t+3]=m*A-l*v-h*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,a=e._z,f=e._order,l=Math.cos,h=Math.sin,p=l(n/2),m=l(r/2),v=l(a/2),_=h(n/2),S=h(r/2),A=h(a/2);switch(f){case"XYZ":this._x=_*m*v+p*S*A,this._y=p*S*v-_*m*A,this._z=p*m*A+_*S*v,this._w=p*m*v-_*S*A;break;case"YXZ":this._x=_*m*v+p*S*A,this._y=p*S*v-_*m*A,this._z=p*m*A-_*S*v,this._w=p*m*v+_*S*A;break;case"ZXY":this._x=_*m*v-p*S*A,this._y=p*S*v+_*m*A,this._z=p*m*A+_*S*v,this._w=p*m*v-_*S*A;break;case"ZYX":this._x=_*m*v-p*S*A,this._y=p*S*v+_*m*A,this._z=p*m*A-_*S*v,this._w=p*m*v+_*S*A;break;case"YZX":this._x=_*m*v+p*S*A,this._y=p*S*v+_*m*A,this._z=p*m*A-_*S*v,this._w=p*m*v-_*S*A;break;case"XZY":this._x=_*m*v-p*S*A,this._y=p*S*v-_*m*A,this._z=p*m*A+_*S*v,this._w=p*m*v+_*S*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],f=t[1],l=t[5],h=t[9],p=t[2],m=t[6],v=t[10],_=n+l+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-h)*S,this._y=(a-p)*S,this._z=(f-r)*S}else if(n>l&&n>v){const S=2*Math.sqrt(1+n-l-v);this._w=(m-h)/S,this._x=.25*S,this._y=(r+f)/S,this._z=(a+p)/S}else if(l>v){const S=2*Math.sqrt(1+l-n-v);this._w=(a-p)/S,this._x=(r+f)/S,this._y=.25*S,this._z=(h+m)/S}else{const S=2*Math.sqrt(1+v-n-l);this._w=(f-r)/S,this._x=(a+p)/S,this._y=(h+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,f=e._w,l=t._x,h=t._y,p=t._z,m=t._w;return this._x=n*m+f*l+r*p-a*h,this._y=r*m+f*h+a*l-n*p,this._z=a*m+f*p+n*h-r*l,this._w=f*m-n*l-r*h-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,f=this._w;let l=f*e._w+n*e._x+r*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=f,this._x=n,this._y=r,this._z=a,this;const h=1-l*l;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*n+t*this._x,this._y=S*r+t*this._y,this._z=S*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(h),m=Math.atan2(p,l),v=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=f*v+this._w*_,this._x=n*v+this._x*_,this._y=r*v+this._y*_,this._z=a*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,f=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*f,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*f,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*f,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,f=e.y,l=e.z,h=e.w,p=h*t+f*r-l*n,m=h*n+l*t-a*r,v=h*r+a*n-f*t,_=-a*t-f*n-l*r;return this.x=p*h+_*-a+m*-l-v*-f,this.y=m*h+_*-f+v*-a-p*-l,this.z=v*h+_*-l+p*-f-m*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,f=t.x,l=t.y,h=t.z;return this.x=r*h-a*l,this.y=a*f-n*h,this.z=n*l-r*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new V,ec=new Ui;class jr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,a=-1/0,f=-1/0,l=-1/0;for(let h=0,p=e.length;h<p;h+=3){const m=e[h],v=e[h+1],_=e[h+2];m<t&&(t=m),v<n&&(n=v),_<r&&(r=_),m>a&&(a=m),v>f&&(f=v),_>l&&(l=_)}return this.min.set(t,n,r),this.max.set(a,f,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,a=-1/0,f=-1/0,l=-1/0;for(let h=0,p=e.count;h<p;h++){const m=e.getX(h),v=e.getY(h),_=e.getZ(h);m<t&&(t=m),v<n&&(n=v),_<r&&(r=_),m>a&&(a=m),v>f&&(f=v),_>l&&(l=_)}return this.min.set(t,n,r),this.max.set(a,f,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let f=0,l=a.count;f<l;f++)Ei.fromBufferAttribute(a,f).applyMatrix4(e.matrixWorld),this.expandByPoint(Ei)}else n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox),Vs.applyMatrix4(e.matrixWorld),this.union(Vs);const r=e.children;for(let a=0,f=r.length;a<f;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),bo.subVectors(this.max,zr),$i.subVectors(e.a,zr),Ki.subVectors(e.b,zr),Ji.subVectors(e.c,zr),oi.subVectors(Ki,$i),si.subVectors(Ji,Ki),Ti.subVectors($i,Ji);let t=[0,-oi.z,oi.y,0,-si.z,si.y,0,-Ti.z,Ti.y,oi.z,0,-oi.x,si.z,0,-si.x,Ti.z,0,-Ti.x,-oi.y,oi.x,0,-si.y,si.x,0,-Ti.y,Ti.x,0];return!Hs(t,$i,Ki,Ji,bo)||(t=[1,0,0,0,1,0,0,0,1],!Hs(t,$i,Ki,Ji,bo))?!1:(Mo.crossVectors(oi,si),t=[Mo.x,Mo.y,Mo.z],Hs(t,$i,Ki,Ji,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ei.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new V,new V,new V,new V,new V,new V,new V,new V],Ei=new V,Vs=new jr,$i=new V,Ki=new V,Ji=new V,oi=new V,si=new V,Ti=new V,zr=new V,bo=new V,Mo=new V,Ai=new V;function Hs(s,e,t,n,r){for(let a=0,f=s.length-3;a<=f;a+=3){Ai.fromArray(s,a);const l=r.x*Math.abs(Ai.x)+r.y*Math.abs(Ai.y)+r.z*Math.abs(Ai.z),h=e.dot(Ai),p=t.dot(Ai),m=n.dot(Ai);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>l)return!1}return!0}const sh=new jr,tc=new V,wo=new V,Ws=new V;class Zo{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sh.setFromPoints(e).getCenter(n);let r=0;for(let a=0,f=e.length;a<f;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(Ws.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?wo.set(0,0,1).multiplyScalar(e.radius):wo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(tc.copy(e.center).add(wo)),this.expandByPoint(tc.copy(e.center).sub(wo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new V,js=new V,So=new V,ai=new V,Xs=new V,Eo=new V,qs=new V;class wa{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.direction).multiplyScalar(t).add(this.origin),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){js.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(js);const a=e.distanceTo(t)*.5,f=-this.direction.dot(So),l=ai.dot(this.direction),h=-ai.dot(So),p=ai.lengthSq(),m=Math.abs(1-f*f);let v,_,S,A;if(m>0)if(v=f*h-l,_=f*l-h,A=a*m,v>=0)if(_>=-A)if(_<=A){const b=1/m;v*=b,_*=b,S=v*(v+f*_+2*l)+_*(f*v+_+2*h)+p}else _=a,v=Math.max(0,-(f*_+l)),S=-v*v+_*(_+2*h)+p;else _=-a,v=Math.max(0,-(f*_+l)),S=-v*v+_*(_+2*h)+p;else _<=-A?(v=Math.max(0,-(-f*a+l)),_=v>0?-a:Math.min(Math.max(-a,-h),a),S=-v*v+_*(_+2*h)+p):_<=A?(v=0,_=Math.min(Math.max(-a,-h),a),S=_*(_+2*h)+p):(v=Math.max(0,-(f*a+l)),_=v>0?a:Math.min(Math.max(-a,-h),a),S=-v*v+_*(_+2*h)+p);else _=f>0?-a:a,v=Math.max(0,-(f*_+l)),S=-v*v+_*(_+2*h)+p;return n&&n.copy(this.direction).multiplyScalar(v).add(this.origin),r&&r.copy(So).multiplyScalar(_).add(js),S}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),r=jn.dot(jn)-n*n,a=e.radius*e.radius;if(r>a)return null;const f=Math.sqrt(a-r),l=n-f,h=n+f;return l<0&&h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,f,l,h;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(n=(e.min.x-_.x)*p,r=(e.max.x-_.x)*p):(n=(e.max.x-_.x)*p,r=(e.min.x-_.x)*p),m>=0?(a=(e.min.y-_.y)*m,f=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,f=(e.min.y-_.y)*m),n>f||a>r||((a>n||n!==n)&&(n=a),(f<r||r!==r)&&(r=f),v>=0?(l=(e.min.z-_.z)*v,h=(e.max.z-_.z)*v):(l=(e.max.z-_.z)*v,h=(e.min.z-_.z)*v),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,r,a){Xs.subVectors(t,e),Eo.subVectors(n,e),qs.crossVectors(Xs,Eo);let f=this.direction.dot(qs),l;if(f>0){if(r)return null;l=1}else if(f<0)l=-1,f=-f;else return null;ai.subVectors(this.origin,e);const h=l*this.direction.dot(Eo.crossVectors(ai,Eo));if(h<0)return null;const p=l*this.direction.dot(Xs.cross(ai));if(p<0||h+p>f)return null;const m=-l*ai.dot(qs);return m<0?null:this.at(m/f,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,a,f,l,h,p,m,v,_,S,A,b,g){const E=this.elements;return E[0]=e,E[4]=t,E[8]=n,E[12]=r,E[1]=a,E[5]=f,E[9]=l,E[13]=h,E[2]=p,E[6]=m,E[10]=v,E[14]=_,E[3]=S,E[7]=A,E[11]=b,E[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),a=1/Qi.setFromMatrixColumn(e,1).length(),f=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*f,t[9]=n[9]*f,t[10]=n[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,a=e.z,f=Math.cos(n),l=Math.sin(n),h=Math.cos(r),p=Math.sin(r),m=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const _=f*m,S=f*v,A=l*m,b=l*v;t[0]=h*m,t[4]=-h*v,t[8]=p,t[1]=S+A*p,t[5]=_-b*p,t[9]=-l*h,t[2]=b-_*p,t[6]=A+S*p,t[10]=f*h}else if(e.order==="YXZ"){const _=h*m,S=h*v,A=p*m,b=p*v;t[0]=_+b*l,t[4]=A*l-S,t[8]=f*p,t[1]=f*v,t[5]=f*m,t[9]=-l,t[2]=S*l-A,t[6]=b+_*l,t[10]=f*h}else if(e.order==="ZXY"){const _=h*m,S=h*v,A=p*m,b=p*v;t[0]=_-b*l,t[4]=-f*v,t[8]=A+S*l,t[1]=S+A*l,t[5]=f*m,t[9]=b-_*l,t[2]=-f*p,t[6]=l,t[10]=f*h}else if(e.order==="ZYX"){const _=f*m,S=f*v,A=l*m,b=l*v;t[0]=h*m,t[4]=A*p-S,t[8]=_*p+b,t[1]=h*v,t[5]=b*p+_,t[9]=S*p-A,t[2]=-p,t[6]=l*h,t[10]=f*h}else if(e.order==="YZX"){const _=f*h,S=f*p,A=l*h,b=l*p;t[0]=h*m,t[4]=b-_*v,t[8]=A*v+S,t[1]=v,t[5]=f*m,t[9]=-l*m,t[2]=-p*m,t[6]=S*v+A,t[10]=_-b*v}else if(e.order==="XZY"){const _=f*h,S=f*p,A=l*h,b=l*p;t[0]=h*m,t[4]=-v,t[8]=p*m,t[1]=_*v+b,t[5]=f*m,t[9]=S*v-A,t[2]=A*v-S,t[6]=l*m,t[10]=b*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ah,e,lh)}lookAt(e,t,n){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),li.crossVectors(n,Qt),li.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),li.crossVectors(n,Qt)),li.normalize(),To.crossVectors(Qt,li),r[0]=li.x,r[4]=To.x,r[8]=Qt.x,r[1]=li.y,r[5]=To.y,r[9]=Qt.y,r[2]=li.z,r[6]=To.z,r[10]=Qt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,f=n[0],l=n[4],h=n[8],p=n[12],m=n[1],v=n[5],_=n[9],S=n[13],A=n[2],b=n[6],g=n[10],E=n[14],F=n[3],G=n[7],N=n[11],D=n[15],B=r[0],Y=r[4],T=r[8],U=r[12],J=r[1],$=r[5],we=r[9],pe=r[13],j=r[2],H=r[6],q=r[10],ae=r[14],le=r[3],Q=r[7],se=r[11],xe=r[15];return a[0]=f*B+l*J+h*j+p*le,a[4]=f*Y+l*$+h*H+p*Q,a[8]=f*T+l*we+h*q+p*se,a[12]=f*U+l*pe+h*ae+p*xe,a[1]=m*B+v*J+_*j+S*le,a[5]=m*Y+v*$+_*H+S*Q,a[9]=m*T+v*we+_*q+S*se,a[13]=m*U+v*pe+_*ae+S*xe,a[2]=A*B+b*J+g*j+E*le,a[6]=A*Y+b*$+g*H+E*Q,a[10]=A*T+b*we+g*q+E*se,a[14]=A*U+b*pe+g*ae+E*xe,a[3]=F*B+G*J+N*j+D*le,a[7]=F*Y+G*$+N*H+D*Q,a[11]=F*T+G*we+N*q+D*se,a[15]=F*U+G*pe+N*ae+D*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],f=e[1],l=e[5],h=e[9],p=e[13],m=e[2],v=e[6],_=e[10],S=e[14],A=e[3],b=e[7],g=e[11],E=e[15];return A*(+a*h*v-r*p*v-a*l*_+n*p*_+r*l*S-n*h*S)+b*(+t*h*S-t*p*_+a*f*_-r*f*S+r*p*m-a*h*m)+g*(+t*p*v-t*l*S-a*f*v+n*f*S+a*l*m-n*p*m)+E*(-r*l*m-t*h*v+t*l*_+r*f*v-n*f*_+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],f=e[4],l=e[5],h=e[6],p=e[7],m=e[8],v=e[9],_=e[10],S=e[11],A=e[12],b=e[13],g=e[14],E=e[15],F=v*g*p-b*_*p+b*h*S-l*g*S-v*h*E+l*_*E,G=A*_*p-m*g*p-A*h*S+f*g*S+m*h*E-f*_*E,N=m*b*p-A*v*p+A*l*S-f*b*S-m*l*E+f*v*E,D=A*v*h-m*b*h-A*l*_+f*b*_+m*l*g-f*v*g,B=t*F+n*G+r*N+a*D;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/B;return e[0]=F*Y,e[1]=(b*_*a-v*g*a-b*r*S+n*g*S+v*r*E-n*_*E)*Y,e[2]=(l*g*a-b*h*a+b*r*p-n*g*p-l*r*E+n*h*E)*Y,e[3]=(v*h*a-l*_*a-v*r*p+n*_*p+l*r*S-n*h*S)*Y,e[4]=G*Y,e[5]=(m*g*a-A*_*a+A*r*S-t*g*S-m*r*E+t*_*E)*Y,e[6]=(A*h*a-f*g*a-A*r*p+t*g*p+f*r*E-t*h*E)*Y,e[7]=(f*_*a-m*h*a+m*r*p-t*_*p-f*r*S+t*h*S)*Y,e[8]=N*Y,e[9]=(A*v*a-m*b*a-A*n*S+t*b*S+m*n*E-t*v*E)*Y,e[10]=(f*b*a-A*l*a+A*n*p-t*b*p-f*n*E+t*l*E)*Y,e[11]=(m*l*a-f*v*a-m*n*p+t*v*p+f*n*S-t*l*S)*Y,e[12]=D*Y,e[13]=(m*b*r-A*v*r+A*n*_-t*b*_-m*n*g+t*v*g)*Y,e[14]=(A*l*r-f*b*r-A*n*h+t*b*h+f*n*g-t*l*g)*Y,e[15]=(f*v*r-m*l*r+m*n*h-t*v*h-f*n*_+t*l*_)*Y,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,f=e.x,l=e.y,h=e.z,p=a*f,m=a*l;return this.set(p*f+n,p*l-r*h,p*h+r*l,0,p*l+r*h,m*l+n,m*h-r*f,0,p*h-r*l,m*h+r*f,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,f){return this.set(1,n,a,0,e,1,f,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,f=t._y,l=t._z,h=t._w,p=a+a,m=f+f,v=l+l,_=a*p,S=a*m,A=a*v,b=f*m,g=f*v,E=l*v,F=h*p,G=h*m,N=h*v,D=n.x,B=n.y,Y=n.z;return r[0]=(1-(b+E))*D,r[1]=(S+N)*D,r[2]=(A-G)*D,r[3]=0,r[4]=(S-N)*B,r[5]=(1-(_+E))*B,r[6]=(g+F)*B,r[7]=0,r[8]=(A+G)*Y,r[9]=(g-F)*Y,r[10]=(1-(_+b))*Y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Qi.set(r[0],r[1],r[2]).length();const f=Qi.set(r[4],r[5],r[6]).length(),l=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const p=1/a,m=1/f,v=1/l;return bn.elements[0]*=p,bn.elements[1]*=p,bn.elements[2]*=p,bn.elements[4]*=m,bn.elements[5]*=m,bn.elements[6]*=m,bn.elements[8]*=v,bn.elements[9]*=v,bn.elements[10]*=v,t.setFromRotationMatrix(bn),n.x=a,n.y=f,n.z=l,this}makePerspective(e,t,n,r,a,f){f===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const l=this.elements,h=2*a/(t-e),p=2*a/(n-r),m=(t+e)/(t-e),v=(n+r)/(n-r),_=-(f+a)/(f-a),S=-2*f*a/(f-a);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=p,l[9]=v,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,f){const l=this.elements,h=1/(t-e),p=1/(n-r),m=1/(f-a),v=(t+e)*h,_=(n+r)*p,S=(f+a)*m;return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-v,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=-2*m,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new V,bn=new St,ah=new V(0,0,0),lh=new V(1,1,1),li=new V,To=new V,Qt=new V,nc=new St,ic=new Ui;class Xr{constructor(e=0,t=0,n=0,r=Xr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],f=r[4],l=r[8],h=r[1],p=r[5],m=r[9],v=r[2],_=r[6],S=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Vt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(l,S));break;case"XZY":this._z=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ic.setFromEuler(this),this.setFromQuaternion(ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Xr.DefaultOrder="XYZ";Xr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Sa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ch=0;const rc=new V,er=new Ui,Xn=new St,Ao=new V,Nr=new V,uh=new V,fh=new Ui,oc=new V(1,0,0),sc=new V(0,1,0),ac=new V(0,0,1),dh={type:"added"},lc={type:"removed"};class an extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DefaultUp.clone();const e=new V,t=new Xr,n=new Ui,r=new V(1,1,1);function a(){n.setFromEuler(t,!1)}function f(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Nn}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=an.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(ac,e)}translateOnAxis(e,t){return rc.copy(e).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(ac,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ao.copy(e):Ao.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Nr,Ao,this.up):Xn.lookAt(Ao,Nr,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),er.setFromRotationMatrix(Xn),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(lc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const f=this.children[n].getObjectByProperty(e,t);if(f!==void 0)return f}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,fh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,f=r.length;a<f;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const v=h[p];a(e.shapes,v)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,p=this.material.length;h<p;h++)l.push(a(e.materials,this.material[h]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(a(e.animations,h))}}if(t){const l=f(e.geometries),h=f(e.materials),p=f(e.textures),m=f(e.images),v=f(e.shapes),_=f(e.skeletons),S=f(e.animations),A=f(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),p.length>0&&(n.textures=p),m.length>0&&(n.images=m),v.length>0&&(n.shapes=v),_.length>0&&(n.skeletons=_),S.length>0&&(n.animations=S),A.length>0&&(n.nodes=A)}return n.object=r,n;function f(l){const h=[];for(const p in l){const m=l[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}an.DefaultUp=new V(0,1,0);an.DefaultMatrixAutoUpdate=!0;const Mn=new V,qn=new V,Ys=new V,Yn=new V,tr=new V,nr=new V,cc=new V,Zs=new V,$s=new V,Ks=new V;class Fn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mn.subVectors(e,t),r.cross(Mn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Mn.subVectors(r,t),qn.subVectors(n,t),Ys.subVectors(e,t);const f=Mn.dot(Mn),l=Mn.dot(qn),h=Mn.dot(Ys),p=qn.dot(qn),m=qn.dot(Ys),v=f*p-l*l;if(v===0)return a.set(-2,-1,-1);const _=1/v,S=(p*h-l*m)*_,A=(f*m-l*h)*_;return a.set(1-S-A,A,S)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn),Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,t,n,r,a,f,l,h){return this.getBarycoord(e,t,n,r,Yn),h.set(0,0),h.addScaledVector(a,Yn.x),h.addScaledVector(f,Yn.y),h.addScaledVector(l,Yn.z),h}static isFrontFacing(e,t,n,r){return Mn.subVectors(n,t),qn.subVectors(e,t),Mn.cross(qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Mn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return Fn.getUV(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let f,l;tr.subVectors(r,n),nr.subVectors(a,n),Zs.subVectors(e,n);const h=tr.dot(Zs),p=nr.dot(Zs);if(h<=0&&p<=0)return t.copy(n);$s.subVectors(e,r);const m=tr.dot($s),v=nr.dot($s);if(m>=0&&v<=m)return t.copy(r);const _=h*v-m*p;if(_<=0&&h>=0&&m<=0)return f=h/(h-m),t.copy(n).addScaledVector(tr,f);Ks.subVectors(e,a);const S=tr.dot(Ks),A=nr.dot(Ks);if(A>=0&&S<=A)return t.copy(a);const b=S*p-h*A;if(b<=0&&p>=0&&A<=0)return l=p/(p-A),t.copy(n).addScaledVector(nr,l);const g=m*A-S*v;if(g<=0&&v-m>=0&&S-A>=0)return cc.subVectors(a,r),l=(v-m)/(v-m+(S-A)),t.copy(r).addScaledVector(cc,l);const E=1/(g+b+_);return f=b*E,l=_*E,t.copy(n).addScaledVector(tr,f).addScaledVector(nr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hh=0;class Ft extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=dr,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Jc,this.blendDst=Qc,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===ud;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==Vr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(a){const f=[];for(const l in a){const h=a[l];delete h.metadata,f.push(h)}return f}if(t){const a=r(e.textures),f=r(e.images);a.length>0&&(n.textures=a),f.length>0&&(n.images=f)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}Ft.fromType=function(){return null};class $o extends Ft{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new V,Po=new Ge;class Wt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=$l,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,a=e.length;r<a;r++){let f=e[r];f===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),f=new Ie),t[n++]=f.r,t[n++]=f.g,t[n++]=f.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,a=e.length;r<a;r++){let f=e[r];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),f=new Ge),t[n++]=f.x,t[n++]=f.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,a=e.length;r<a;r++){let f=e[r];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),f=new V),t[n++]=f.x,t[n++]=f.y,t[n++]=f.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,a=e.length;r<a;r++){let f=e[r];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),f=new xt),t[n++]=f.x,t[n++]=f.y,t[n++]=f.z,t[n++]=f.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class au extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lu extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ph=0;const dn=new St,Js=new an,ir=new V,en=new jr,Ur=new jr,Lt=new V;class Jt extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?lu:au)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Nn().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Js.lookAt(e),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];en.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let a=0,f=t.length;a<f;a++){const l=t[a];Ur.setFromBufferAttribute(l),this.morphTargetsRelative?(Lt.addVectors(en.min,Ur.min),en.expandByPoint(Lt),Lt.addVectors(en.max,Ur.max),en.expandByPoint(Lt)):(en.expandByPoint(Ur.min),en.expandByPoint(Ur.max))}en.getCenter(n);let r=0;for(let a=0,f=e.count;a<f;a++)Lt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Lt));if(t)for(let a=0,f=t.length;a<f;a++){const l=t[a],h=this.morphTargetsRelative;for(let p=0,m=l.count;p<m;p++)Lt.fromBufferAttribute(l,p),h&&(ir.fromBufferAttribute(e,p),Lt.add(ir)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,f=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*l),4));const h=this.getAttribute("tangent").array,p=[],m=[];for(let J=0;J<l;J++)p[J]=new V,m[J]=new V;const v=new V,_=new V,S=new V,A=new Ge,b=new Ge,g=new Ge,E=new V,F=new V;function G(J,$,we){v.fromArray(r,J*3),_.fromArray(r,$*3),S.fromArray(r,we*3),A.fromArray(f,J*2),b.fromArray(f,$*2),g.fromArray(f,we*2),_.sub(v),S.sub(v),b.sub(A),g.sub(A);const pe=1/(b.x*g.y-g.x*b.y);!isFinite(pe)||(E.copy(_).multiplyScalar(g.y).addScaledVector(S,-b.y).multiplyScalar(pe),F.copy(S).multiplyScalar(b.x).addScaledVector(_,-g.x).multiplyScalar(pe),p[J].add(E),p[$].add(E),p[we].add(E),m[J].add(F),m[$].add(F),m[we].add(F))}let N=this.groups;N.length===0&&(N=[{start:0,count:n.length}]);for(let J=0,$=N.length;J<$;++J){const we=N[J],pe=we.start,j=we.count;for(let H=pe,q=pe+j;H<q;H+=3)G(n[H+0],n[H+1],n[H+2])}const D=new V,B=new V,Y=new V,T=new V;function U(J){Y.fromArray(a,J*3),T.copy(Y);const $=p[J];D.copy($),D.sub(Y.multiplyScalar(Y.dot($))).normalize(),B.crossVectors(T,$);const pe=B.dot(m[J])<0?-1:1;h[J*4]=D.x,h[J*4+1]=D.y,h[J*4+2]=D.z,h[J*4+3]=pe}for(let J=0,$=N.length;J<$;++J){const we=N[J],pe=we.start,j=we.count;for(let H=pe,q=pe+j;H<q;H+=3)U(n[H+0]),U(n[H+1]),U(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,S=n.count;_<S;_++)n.setXYZ(_,0,0,0);const r=new V,a=new V,f=new V,l=new V,h=new V,p=new V,m=new V,v=new V;if(e)for(let _=0,S=e.count;_<S;_+=3){const A=e.getX(_+0),b=e.getX(_+1),g=e.getX(_+2);r.fromBufferAttribute(t,A),a.fromBufferAttribute(t,b),f.fromBufferAttribute(t,g),m.subVectors(f,a),v.subVectors(r,a),m.cross(v),l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,b),p.fromBufferAttribute(n,g),l.add(m),h.add(m),p.add(m),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(g,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)r.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),f.fromBufferAttribute(t,_+2),m.subVectors(f,a),v.subVectors(r,a),m.cross(v),n.setXYZ(_+0,m.x,m.y,m.z),n.setXYZ(_+1,m.x,m.y,m.z),n.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const f=n[r].array,l=e.attributes[r],h=l.array,p=l.itemSize*t,m=Math.min(h.length,f.length-p);for(let v=0,_=p;v<m;v++,_++)f[_]=h[v]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(l,h){const p=l.array,m=l.itemSize,v=l.normalized,_=new p.constructor(h.length*m);let S=0,A=0;for(let b=0,g=h.length;b<g;b++){l.isInterleavedBufferAttribute?S=h[b]*l.data.stride+l.offset:S=h[b]*m;for(let E=0;E<m;E++)_[A++]=p[S++]}return new Wt(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],p=e(h,n);t.setAttribute(l,p)}const a=this.morphAttributes;for(const l in a){const h=[],p=a[l];for(let m=0,v=p.length;m<v;m++){const _=p[m],S=e(_,n);h.push(S)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let l=0,h=f.length;l<h;l++){const p=f[l];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const p=n[h];e.data.attributes[h]=p.toJSON(e.data)}const r={};let a=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(r[h]=m,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const m=r[p];this.setAttribute(p,m.clone(t))}const a=e.morphAttributes;for(const p in a){const m=[],v=a[p];for(let _=0,S=v.length;_<S;_++)m.push(v[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,m=f.length;p<m;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const uc=new St,rr=new wa,Qs=new Zo,ci=new V,ui=new V,fi=new V,ea=new V,ta=new V,na=new V,Co=new V,Lo=new V,Do=new V,Ro=new Ge,Io=new Ge,Oo=new Ge,ia=new V,Fo=new V;class Un extends an{constructor(e=new Jt,t=new $o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=r.length;a<f;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(a),e.ray.intersectsSphere(Qs)===!1)||(uc.copy(a).invert(),rr.copy(e.ray).applyMatrix4(uc),n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1))return;let f;const l=n.index,h=n.attributes.position,p=n.morphAttributes.position,m=n.morphTargetsRelative,v=n.attributes.uv,_=n.attributes.uv2,S=n.groups,A=n.drawRange;if(l!==null)if(Array.isArray(r))for(let b=0,g=S.length;b<g;b++){const E=S[b],F=r[E.materialIndex],G=Math.max(E.start,A.start),N=Math.min(l.count,Math.min(E.start+E.count,A.start+A.count));for(let D=G,B=N;D<B;D+=3){const Y=l.getX(D),T=l.getX(D+1),U=l.getX(D+2);f=zo(this,F,e,rr,h,p,m,v,_,Y,T,U),f&&(f.faceIndex=Math.floor(D/3),f.face.materialIndex=E.materialIndex,t.push(f))}}else{const b=Math.max(0,A.start),g=Math.min(l.count,A.start+A.count);for(let E=b,F=g;E<F;E+=3){const G=l.getX(E),N=l.getX(E+1),D=l.getX(E+2);f=zo(this,r,e,rr,h,p,m,v,_,G,N,D),f&&(f.faceIndex=Math.floor(E/3),t.push(f))}}else if(h!==void 0)if(Array.isArray(r))for(let b=0,g=S.length;b<g;b++){const E=S[b],F=r[E.materialIndex],G=Math.max(E.start,A.start),N=Math.min(h.count,Math.min(E.start+E.count,A.start+A.count));for(let D=G,B=N;D<B;D+=3){const Y=D,T=D+1,U=D+2;f=zo(this,F,e,rr,h,p,m,v,_,Y,T,U),f&&(f.faceIndex=Math.floor(D/3),f.face.materialIndex=E.materialIndex,t.push(f))}}else{const b=Math.max(0,A.start),g=Math.min(h.count,A.start+A.count);for(let E=b,F=g;E<F;E+=3){const G=E,N=E+1,D=E+2;f=zo(this,r,e,rr,h,p,m,v,_,G,N,D),f&&(f.faceIndex=Math.floor(E/3),t.push(f))}}}}function mh(s,e,t,n,r,a,f,l){let h;if(e.side===En?h=n.intersectTriangle(f,a,r,!0,l):h=n.intersectTriangle(r,a,f,e.side!==pi,l),h===null)return null;Fo.copy(l),Fo.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Fo);return p<t.near||p>t.far?null:{distance:p,point:Fo.clone(),object:s}}function zo(s,e,t,n,r,a,f,l,h,p,m,v){ci.fromBufferAttribute(r,p),ui.fromBufferAttribute(r,m),fi.fromBufferAttribute(r,v);const _=s.morphTargetInfluences;if(a&&_){Co.set(0,0,0),Lo.set(0,0,0),Do.set(0,0,0);for(let A=0,b=a.length;A<b;A++){const g=_[A],E=a[A];g!==0&&(ea.fromBufferAttribute(E,p),ta.fromBufferAttribute(E,m),na.fromBufferAttribute(E,v),f?(Co.addScaledVector(ea,g),Lo.addScaledVector(ta,g),Do.addScaledVector(na,g)):(Co.addScaledVector(ea.sub(ci),g),Lo.addScaledVector(ta.sub(ui),g),Do.addScaledVector(na.sub(fi),g)))}ci.add(Co),ui.add(Lo),fi.add(Do)}s.isSkinnedMesh&&(s.boneTransform(p,ci),s.boneTransform(m,ui),s.boneTransform(v,fi));const S=mh(s,e,t,n,ci,ui,fi,ia);if(S){l&&(Ro.fromBufferAttribute(l,p),Io.fromBufferAttribute(l,m),Oo.fromBufferAttribute(l,v),S.uv=Fn.getUV(ia,ci,ui,fi,Ro,Io,Oo,new Ge)),h&&(Ro.fromBufferAttribute(h,p),Io.fromBufferAttribute(h,m),Oo.fromBufferAttribute(h,v),S.uv2=Fn.getUV(ia,ci,ui,fi,Ro,Io,Oo,new Ge));const A={a:p,b:m,c:v,normal:new V,materialIndex:0};Fn.getNormal(ci,ui,fi,A.normal),S.face=A}return S}class qr extends Jt{constructor(e=1,t=1,n=1,r=1,a=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:f};const l=this;r=Math.floor(r),a=Math.floor(a),f=Math.floor(f);const h=[],p=[],m=[],v=[];let _=0,S=0;A("z","y","x",-1,-1,n,t,e,f,a,0),A("z","y","x",1,-1,n,t,-e,f,a,1),A("x","z","y",1,1,e,n,t,r,f,2),A("x","z","y",1,-1,e,n,-t,r,f,3),A("x","y","z",1,-1,e,t,n,r,a,4),A("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(h),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(m,3)),this.setAttribute("uv",new sn(v,2));function A(b,g,E,F,G,N,D,B,Y,T,U){const J=N/Y,$=D/T,we=N/2,pe=D/2,j=B/2,H=Y+1,q=T+1;let ae=0,le=0;const Q=new V;for(let se=0;se<q;se++){const xe=se*$-pe;for(let ue=0;ue<H;ue++){const me=ue*J-we;Q[b]=me*F,Q[g]=xe*G,Q[E]=j,p.push(Q.x,Q.y,Q.z),Q[b]=0,Q[g]=0,Q[E]=B>0?1:-1,m.push(Q.x,Q.y,Q.z),v.push(ue/Y),v.push(1-se/T),ae+=1}}for(let se=0;se<T;se++)for(let xe=0;xe<Y;xe++){const ue=_+xe+H*se,me=_+xe+H*(se+1),re=_+(xe+1)+H*(se+1),De=_+(xe+1)+H*se;h.push(ue,me,De),h.push(me,re,De),le+=6}l.addGroup(S,le,U),S+=le,_+=ae}}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function kt(s){const e={};for(let t=0;t<s.length;t++){const n=vr(s[t]);for(const r in n)e[r]=n[r]}return e}const gh={clone:vr,merge:kt};var vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Ft{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=vh,this.fragmentShader=_h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const f=this.uniforms[r].value;f&&f.isTexture?t.uniforms[r]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[r]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[r]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[r]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[r]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[r]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[r]={type:"m4",value:f.toArray()}:t.uniforms[r]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cu extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends cu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jl*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;a+=f.offsetX*r/h,t-=f.offsetY*n/p,r*=f.width/h,n*=f.height/p}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const or=90,sr=1;class xh extends an{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new nn(or,sr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new V(1,0,0)),this.add(r);const a=new nn(or,sr,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new V(-1,0,0)),this.add(a);const f=new nn(or,sr,e,t);f.layers=this.layers,f.up.set(0,0,1),f.lookAt(new V(0,1,0)),this.add(f);const l=new nn(or,sr,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new V(0,-1,0)),this.add(l);const h=new nn(or,sr,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new V(0,0,1)),this.add(h);const p=new nn(or,sr,e,t);p.layers=this.layers,p.up.set(0,-1,0),p.lookAt(new V(0,0,-1)),this.add(p)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,a,f,l,h,p]=this.children,m=e.getRenderTarget(),v=e.toneMapping,_=e.xr.enabled;e.toneMapping=Kn,e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,f),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=S,e.setRenderTarget(n,5),e.render(t,p),e.setRenderTarget(m),e.toneMapping=v,e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class uu extends mn{constructor(e,t,n,r,a,f,l,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,n,r,a,f,l,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yh extends hi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new uu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qr(5,5,5),a=new Jn({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:di});a.uniforms.tEquirect.value=t;const f=new Un(r,a),l=t.minFilter;return t.minFilter===Yo&&(t.minFilter=pn),new xh(1,10,this).update(e,f),t.minFilter=l,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,n,r);e.setRenderTarget(a)}}const ra=new V,bh=new V,Mh=new Nn;class Pi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ra.subVectors(n,t).cross(bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ra),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mh.getNormalMatrix(e),r=this.coplanarPoint(ra).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Zo,No=new V;class Ea{constructor(e=new Pi,t=new Pi,n=new Pi,r=new Pi,a=new Pi,f=new Pi){this.planes=[e,t,n,r,a,f]}set(e,t,n,r,a,f){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(f),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],a=n[1],f=n[2],l=n[3],h=n[4],p=n[5],m=n[6],v=n[7],_=n[8],S=n[9],A=n[10],b=n[11],g=n[12],E=n[13],F=n[14],G=n[15];return t[0].setComponents(l-r,v-h,b-_,G-g).normalize(),t[1].setComponents(l+r,v+h,b+_,G+g).normalize(),t[2].setComponents(l+a,v+p,b+S,G+E).normalize(),t[3].setComponents(l-a,v-p,b-S,G-E).normalize(),t[4].setComponents(l-f,v-m,b-A,G-F).normalize(),t[5].setComponents(l+f,v+m,b+A,G+F).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fu(){let s=null,e=!1,t=null,n=null;function r(a,f){t(a,f),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function wh(s,e){const t=e.isWebGL2,n=new WeakMap;function r(p,m){const v=p.array,_=p.usage,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,v,_),p.onUploadCallback();let A;if(v instanceof Float32Array)A=5126;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)A=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=5123;else if(v instanceof Int16Array)A=5122;else if(v instanceof Uint32Array)A=5125;else if(v instanceof Int32Array)A=5124;else if(v instanceof Int8Array)A=5120;else if(v instanceof Uint8Array)A=5121;else if(v instanceof Uint8ClampedArray)A=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:S,type:A,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version}}function a(p,m,v){const _=m.array,S=m.updateRange;s.bindBuffer(v,p),S.count===-1?s.bufferSubData(v,0,_):(t?s.bufferSubData(v,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):s.bufferSubData(v,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1)}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),n.get(p)}function l(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=n.get(p);m&&(s.deleteBuffer(m.buffer),n.delete(p))}function h(p,m){if(p.isGLBufferAttribute){const _=n.get(p);(!_||_.version<p.version)&&n.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=n.get(p);v===void 0?n.set(p,r(p,m)):v.version<p.version&&(a(v.buffer,p,m),v.version=p.version)}return{get:f,remove:l,update:h}}class Ko extends Jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,f=t/2,l=Math.floor(n),h=Math.floor(r),p=l+1,m=h+1,v=e/l,_=t/h,S=[],A=[],b=[],g=[];for(let E=0;E<m;E++){const F=E*_-f;for(let G=0;G<p;G++){const N=G*v-a;A.push(N,-F,0),b.push(0,0,1),g.push(G/l),g.push(1-E/h)}}for(let E=0;E<h;E++)for(let F=0;F<l;F++){const G=F+p*E,N=F+p*(E+1),D=F+1+p*(E+1),B=F+1+p*E;S.push(G,N,B),S.push(N,D,B)}this.setIndex(S),this.setAttribute("position",new sn(A,3)),this.setAttribute("normal",new sn(b,3)),this.setAttribute("uv",new sn(g,2))}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Th=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh="vec3 transformed = vec3( position );",Dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ih=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Oh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Wh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$h="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,vp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,_p=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Op=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Np=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,hm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,pm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,mm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,gm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,vm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_m=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,xm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Em=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Um=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$e={alphamap_fragment:Sh,alphamap_pars_fragment:Eh,alphatest_fragment:Th,alphatest_pars_fragment:Ah,aomap_fragment:Ph,aomap_pars_fragment:Ch,begin_vertex:Lh,beginnormal_vertex:Dh,bsdfs:Rh,iridescence_fragment:Ih,bumpmap_pars_fragment:Oh,clipping_planes_fragment:Fh,clipping_planes_pars_fragment:zh,clipping_planes_pars_vertex:Nh,clipping_planes_vertex:Uh,color_fragment:kh,color_pars_fragment:Bh,color_pars_vertex:Gh,color_vertex:Vh,common:Hh,cube_uv_reflection_fragment:Wh,defaultnormal_vertex:jh,displacementmap_pars_vertex:Xh,displacementmap_vertex:qh,emissivemap_fragment:Yh,emissivemap_pars_fragment:Zh,encodings_fragment:$h,encodings_pars_fragment:Kh,envmap_fragment:Jh,envmap_common_pars_fragment:Qh,envmap_pars_fragment:ep,envmap_pars_vertex:tp,envmap_physical_pars_fragment:dp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:rp,fog_fragment:op,fog_pars_fragment:sp,gradientmap_pars_fragment:ap,lightmap_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_vertex:up,lights_pars_begin:fp,lights_toon_fragment:hp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:vp,lights_physical_pars_fragment:_p,lights_fragment_begin:xp,lights_fragment_maps:yp,lights_fragment_end:bp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:Ep,map_fragment:Tp,map_pars_fragment:Ap,map_particle_fragment:Pp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Dp,morphcolor_vertex:Rp,morphnormal_vertex:Ip,morphtarget_pars_vertex:Op,morphtarget_vertex:Fp,normal_fragment_begin:zp,normal_fragment_maps:Np,normal_pars_fragment:Up,normal_pars_vertex:kp,normal_vertex:Bp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:jp,output_fragment:Xp,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:$p,dithering_pars_fragment:Kp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:rm,skinning_pars_vertex:om,skinning_vertex:sm,skinnormal_vertex:am,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:um,tonemapping_pars_fragment:fm,transmission_fragment:dm,transmission_pars_fragment:hm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,uv2_pars_fragment:vm,uv2_pars_vertex:_m,uv2_vertex:xm,worldpos_vertex:ym,background_vert:bm,background_frag:Mm,cube_vert:wm,cube_frag:Sm,depth_vert:Em,depth_frag:Tm,distanceRGBA_vert:Am,distanceRGBA_frag:Pm,equirect_vert:Cm,equirect_frag:Lm,linedashed_vert:Dm,linedashed_frag:Rm,meshbasic_vert:Im,meshbasic_frag:Om,meshlambert_vert:Fm,meshlambert_frag:zm,meshmatcap_vert:Nm,meshmatcap_frag:Um,meshnormal_vert:km,meshnormal_frag:Bm,meshphong_vert:Gm,meshphong_frag:Vm,meshphysical_vert:Hm,meshphysical_frag:Wm,meshtoon_vert:jm,meshtoon_frag:Xm,points_vert:qm,points_frag:Ym,shadow_vert:Zm,shadow_frag:$m,sprite_vert:Km,sprite_frag:Jm},Ae={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nn},uv2Transform:{value:new Nn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nn}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nn}}},On={basic:{uniforms:kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.fog,Ae.lights,{emissive:{value:new Ie(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:kt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:kt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ie(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:kt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:kt([Ae.points,Ae.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:kt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:kt([Ae.common,Ae.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:kt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:kt([Ae.sprite,Ae.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Nn},t2D:{value:null}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},cube:{uniforms:kt([Ae.envmap,{opacity:{value:1}}]),vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:kt([Ae.common,Ae.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:kt([Ae.lights,Ae.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};On.physical={uniforms:kt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};function Qm(s,e,t,n,r,a){const f=new Ie(0);let l=r===!0?0:1,h,p,m=null,v=0,_=null;function S(b,g){let E=!1,F=g.isScene===!0?g.background:null;F&&F.isTexture&&(F=e.get(F));const G=s.xr,N=G.getSession&&G.getSession();N&&N.environmentBlendMode==="additive"&&(F=null),F===null?A(f,l):F&&F.isColor&&(A(F,1),E=!0),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),F&&(F.isCubeTexture||F.mapping===qo)?(p===void 0&&(p=new Un(new qr(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:vr(On.cube.uniforms),vertexShader:On.cube.vertexShader,fragmentShader:On.cube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,B,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(p)),p.material.uniforms.envMap.value=F,p.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,(m!==F||v!==F.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,m=F,v=F.version,_=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):F&&F.isTexture&&(h===void 0&&(h=new Un(new Ko(2,2),new Jn({name:"BackgroundMaterial",uniforms:vr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=F,F.matrixAutoUpdate===!0&&F.updateMatrix(),h.material.uniforms.uvTransform.value.copy(F.matrix),(m!==F||v!==F.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,m=F,v=F.version,_=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function A(b,g){t.buffers.color.setClear(b.r,b.g,b.b,g,a)}return{getClearColor:function(){return f},setClearColor:function(b,g=1){f.set(b),l=g,A(f,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,A(f,l)},render:S}}function eg(s,e,t,n){const r=s.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),f=n.isWebGL2||a!==null,l={},h=g(null);let p=h,m=!1;function v(j,H,q,ae,le){let Q=!1;if(f){const se=b(ae,q,H);p!==se&&(p=se,S(p.object)),Q=E(j,ae,q,le),Q&&F(j,ae,q,le)}else{const se=H.wireframe===!0;(p.geometry!==ae.id||p.program!==q.id||p.wireframe!==se)&&(p.geometry=ae.id,p.program=q.id,p.wireframe=se,Q=!0)}le!==null&&t.update(le,34963),(Q||m)&&(m=!1,T(j,H,q,ae),le!==null&&s.bindBuffer(34963,t.get(le).buffer))}function _(){return n.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function S(j){return n.isWebGL2?s.bindVertexArray(j):a.bindVertexArrayOES(j)}function A(j){return n.isWebGL2?s.deleteVertexArray(j):a.deleteVertexArrayOES(j)}function b(j,H,q){const ae=q.wireframe===!0;let le=l[j.id];le===void 0&&(le={},l[j.id]=le);let Q=le[H.id];Q===void 0&&(Q={},le[H.id]=Q);let se=Q[ae];return se===void 0&&(se=g(_()),Q[ae]=se),se}function g(j){const H=[],q=[],ae=[];for(let le=0;le<r;le++)H[le]=0,q[le]=0,ae[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:ae,object:j,attributes:{},index:null}}function E(j,H,q,ae){const le=p.attributes,Q=H.attributes;let se=0;const xe=q.getAttributes();for(const ue in xe)if(xe[ue].location>=0){const re=le[ue];let De=Q[ue];if(De===void 0&&(ue==="instanceMatrix"&&j.instanceMatrix&&(De=j.instanceMatrix),ue==="instanceColor"&&j.instanceColor&&(De=j.instanceColor)),re===void 0||re.attribute!==De||De&&re.data!==De.data)return!0;se++}return p.attributesNum!==se||p.index!==ae}function F(j,H,q,ae){const le={},Q=H.attributes;let se=0;const xe=q.getAttributes();for(const ue in xe)if(xe[ue].location>=0){let re=Q[ue];re===void 0&&(ue==="instanceMatrix"&&j.instanceMatrix&&(re=j.instanceMatrix),ue==="instanceColor"&&j.instanceColor&&(re=j.instanceColor));const De={};De.attribute=re,re&&re.data&&(De.data=re.data),le[ue]=De,se++}p.attributes=le,p.attributesNum=se,p.index=ae}function G(){const j=p.newAttributes;for(let H=0,q=j.length;H<q;H++)j[H]=0}function N(j){D(j,0)}function D(j,H){const q=p.newAttributes,ae=p.enabledAttributes,le=p.attributeDivisors;q[j]=1,ae[j]===0&&(s.enableVertexAttribArray(j),ae[j]=1),le[j]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,H),le[j]=H)}function B(){const j=p.newAttributes,H=p.enabledAttributes;for(let q=0,ae=H.length;q<ae;q++)H[q]!==j[q]&&(s.disableVertexAttribArray(q),H[q]=0)}function Y(j,H,q,ae,le,Q){n.isWebGL2===!0&&(q===5124||q===5125)?s.vertexAttribIPointer(j,H,q,le,Q):s.vertexAttribPointer(j,H,q,ae,le,Q)}function T(j,H,q,ae){if(n.isWebGL2===!1&&(j.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;G();const le=ae.attributes,Q=q.getAttributes(),se=H.defaultAttributeValues;for(const xe in Q){const ue=Q[xe];if(ue.location>=0){let me=le[xe];if(me===void 0&&(xe==="instanceMatrix"&&j.instanceMatrix&&(me=j.instanceMatrix),xe==="instanceColor"&&j.instanceColor&&(me=j.instanceColor)),me!==void 0){const re=me.normalized,De=me.itemSize,oe=t.get(me);if(oe===void 0)continue;const at=oe.buffer,He=oe.type,ke=oe.bytesPerElement;if(me.isInterleavedBufferAttribute){const Pe=me.data,Ze=Pe.stride,Ye=me.offset;if(Pe.isInstancedInterleavedBuffer){for(let Be=0;Be<ue.locationSize;Be++)D(ue.location+Be,Pe.meshPerAttribute);j.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Be=0;Be<ue.locationSize;Be++)N(ue.location+Be);s.bindBuffer(34962,at);for(let Be=0;Be<ue.locationSize;Be++)Y(ue.location+Be,De/ue.locationSize,He,re,Ze*ke,(Ye+De/ue.locationSize*Be)*ke)}else{if(me.isInstancedBufferAttribute){for(let Pe=0;Pe<ue.locationSize;Pe++)D(ue.location+Pe,me.meshPerAttribute);j.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Pe=0;Pe<ue.locationSize;Pe++)N(ue.location+Pe);s.bindBuffer(34962,at);for(let Pe=0;Pe<ue.locationSize;Pe++)Y(ue.location+Pe,De/ue.locationSize,He,re,De*ke,De/ue.locationSize*Pe*ke)}}else if(se!==void 0){const re=se[xe];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(ue.location,re);break;case 3:s.vertexAttrib3fv(ue.location,re);break;case 4:s.vertexAttrib4fv(ue.location,re);break;default:s.vertexAttrib1fv(ue.location,re)}}}}B()}function U(){we();for(const j in l){const H=l[j];for(const q in H){const ae=H[q];for(const le in ae)A(ae[le].object),delete ae[le];delete H[q]}delete l[j]}}function J(j){if(l[j.id]===void 0)return;const H=l[j.id];for(const q in H){const ae=H[q];for(const le in ae)A(ae[le].object),delete ae[le];delete H[q]}delete l[j.id]}function $(j){for(const H in l){const q=l[H];if(q[j.id]===void 0)continue;const ae=q[j.id];for(const le in ae)A(ae[le].object),delete ae[le];delete q[j.id]}}function we(){pe(),m=!0,p!==h&&(p=h,S(p.object))}function pe(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:v,reset:we,resetDefaultState:pe,dispose:U,releaseStatesOfGeometry:J,releaseStatesOfProgram:$,initAttributes:G,enableAttribute:N,disableUnusedAttributes:B}}function tg(s,e,t,n){const r=n.isWebGL2;let a;function f(p){a=p}function l(p,m){s.drawArrays(a,p,m),t.update(m,a,1)}function h(p,m,v){if(v===0)return;let _,S;if(r)_=s,S="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](a,p,m,v),t.update(m,a,v)}this.setMode=f,this.render=l,this.renderInstances=h}function ng(s,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(Y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(Y){if(Y==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";Y="mediump"}return Y==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let l=t.precision!==void 0?t.precision:"highp";const h=a(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=f||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,v=s.getParameter(34930),_=s.getParameter(35660),S=s.getParameter(3379),A=s.getParameter(34076),b=s.getParameter(34921),g=s.getParameter(36347),E=s.getParameter(36348),F=s.getParameter(36349),G=_>0,N=f||e.has("OES_texture_float"),D=G&&N,B=f?s.getParameter(36183):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:r,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:m,maxTextures:v,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:A,maxAttributes:b,maxVertexUniforms:g,maxVaryings:E,maxFragmentUniforms:F,vertexTextures:G,floatFragmentTextures:N,floatVertexTextures:D,maxSamples:B}}function ig(s){const e=this;let t=null,n=0,r=!1,a=!1;const f=new Pi,l=new Nn,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_,S){const A=v.length!==0||_||n!==0||r;return r=_,t=m(v,S,0),n=v.length,A},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1,p()},this.setState=function(v,_,S){const A=v.clippingPlanes,b=v.clipIntersection,g=v.clipShadows,E=s.get(v);if(!r||A===null||A.length===0||a&&!g)a?m(null):p();else{const F=a?0:n,G=F*4;let N=E.clippingState||null;h.value=N,N=m(A,_,G,S);for(let D=0;D!==G;++D)N[D]=t[D];E.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=F}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(v,_,S,A){const b=v!==null?v.length:0;let g=null;if(b!==0){if(g=h.value,A!==!0||g===null){const E=S+b*4,F=_.matrixWorldInverse;l.getNormalMatrix(F),(g===null||g.length<E)&&(g=new Float32Array(E));for(let G=0,N=S;G!==b;++G,N+=4)f.copy(v[G]).applyMatrix4(F,l),f.normal.toArray(g,N),g[N+3]=f.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function rg(s){let e=new WeakMap;function t(f,l){return l===pa?f.mapping=pr:l===ma&&(f.mapping=mr),f}function n(f){if(f&&f.isTexture&&f.isRenderTargetTexture===!1){const l=f.mapping;if(l===pa||l===ma)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new yh(h.height/2);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",r),t(p.texture,f.mapping)}else return null}}return f}function r(f){const l=f.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class og extends cu{constructor(e=-1,t=1,n=1,r=-1,a=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,f=n+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,f=a+p*this.view.width,l-=m*this.view.offsetY,h=l-m*this.view.height}this.projectionMatrix.makeOrthographic(a,f,l,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,fc=[.125,.215,.35,.446,.526,.582],Li=20,oa=new og,dc=new Ie;let sa=null;const Ci=(1+Math.sqrt(5))/2,lr=1/Ci,hc=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Ci,lr),new V(0,Ci,-lr),new V(lr,0,Ci),new V(-lr,0,Ci),new V(Ci,lr,0),new V(-Ci,lr,0)];class pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){sa=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sa),e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Hr,format:Sn,encoding:Ni,depthBuffer:!1},r=mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(a)),this._blurMaterial=ag(a,e,t)}return r}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,r){const l=new nn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,_=m.toneMapping;m.getClearColor(dc),m.toneMapping=Kn,m.autoClear=!1;const S=new $o({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),A=new Un(new qr,S);let b=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,b=!0):(S.color.copy(dc),b=!0);for(let E=0;E<6;E++){const F=E%3;F===0?(l.up.set(0,h[E],0),l.lookAt(p[E],0,0)):F===1?(l.up.set(0,0,h[E]),l.lookAt(0,p[E],0)):(l.up.set(0,h[E],0),l.lookAt(0,0,p[E]));const G=this._cubeSize;Uo(r,F*G,E>2?G:0,G,G),m.setRenderTarget(r),b&&m.render(A,l),m.render(e,l)}A.geometry.dispose(),A.material.dispose(),m.toneMapping=_,m.autoClear=v,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const a=r?this._cubemapMaterial:this._equirectMaterial,f=new Un(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const h=this._cubeSize;Uo(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(f,oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),f=hc[(r-1)%hc.length];this._blur(e,r-1,r,a,f)}t.autoClear=n}_blur(e,t,n,r,a){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,n,r,"latitudinal",a),this._halfBlur(f,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,f,l){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Un(this._lodPlanes[r],p),_=p.uniforms,S=this._sizeLods[n]-1,A=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Li-1),b=a/A,g=isFinite(a)?1+Math.floor(m*b):Li;g>Li&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Li}`);const E=[];let F=0;for(let Y=0;Y<Li;++Y){const T=Y/b,U=Math.exp(-T*T/2);E.push(U),Y===0?F+=U:Y<g&&(F+=2*U)}for(let Y=0;Y<E.length;Y++)E[Y]=E[Y]/F;_.envMap.value=e.texture,_.samples.value=g,_.weights.value=E,_.latitudinal.value=f==="latitudinal",l&&(_.poleAxis.value=l);const{_lodMax:G}=this;_.dTheta.value=A,_.mipInt.value=G-n;const N=this._sizeLods[r],D=3*N*(r>G-ur?r-G+ur:0),B=4*(this._cubeSize-N);Uo(t,D,B,3*N,2*N),h.setRenderTarget(t),h.render(v,oa)}}function sg(s){const e=[],t=[],n=[];let r=s;const a=s-ur+1+fc.length;for(let f=0;f<a;f++){const l=Math.pow(2,r);t.push(l);let h=1/l;f>s-ur?h=fc[f-s+ur-1]:f===0&&(h=0),n.push(h);const p=1/(l-2),m=-p,v=1+p,_=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,A=6,b=3,g=2,E=1,F=new Float32Array(b*A*S),G=new Float32Array(g*A*S),N=new Float32Array(E*A*S);for(let B=0;B<S;B++){const Y=B%3*2/3-1,T=B>2?0:-1,U=[Y,T,0,Y+2/3,T,0,Y+2/3,T+1,0,Y,T,0,Y+2/3,T+1,0,Y,T+1,0];F.set(U,b*A*B),G.set(_,g*A*B);const J=[B,B,B,B,B,B];N.set(J,E*A*B)}const D=new Jt;D.setAttribute("position",new Wt(F,b)),D.setAttribute("uv",new Wt(G,g)),D.setAttribute("faceIndex",new Wt(N,E)),e.push(D),r>ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mc(s,e,t){const n=new hi(s,e,t);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function ag(s,e,t){const n=new Float32Array(Li),r=new V(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function gc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function vc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lg(s){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,p=h===pa||h===ma,m=h===pr||h===mr;if(p||m)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let v=e.get(l);return t===null&&(t=new pc(s)),v=p?t.fromEquirectangular(l,v):t.fromCubemap(l,v),e.set(l,v),v.texture}else{if(e.has(l))return e.get(l).texture;{const v=l.image;if(p&&v&&v.height>0||m&&v&&r(v)){t===null&&(t=new pc(s));const _=p?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,_),l.addEventListener("dispose",a),_.texture}else return null}}}return l}function r(l){let h=0;const p=6;for(let m=0;m<p;m++)l[m]!==void 0&&h++;return h===p}function a(l){const h=l.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:f}}function cg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ug(s,e,t,n){const r={},a=new WeakMap;function f(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const A in _.attributes)e.remove(_.attributes[A]);_.removeEventListener("dispose",f),delete r[_.id];const S=a.get(_);S&&(e.remove(S),a.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(v,_){return r[_.id]===!0||(_.addEventListener("dispose",f),r[_.id]=!0,t.memory.geometries++),_}function h(v){const _=v.attributes;for(const A in _)e.update(_[A],34962);const S=v.morphAttributes;for(const A in S){const b=S[A];for(let g=0,E=b.length;g<E;g++)e.update(b[g],34962)}}function p(v){const _=[],S=v.index,A=v.attributes.position;let b=0;if(S!==null){const F=S.array;b=S.version;for(let G=0,N=F.length;G<N;G+=3){const D=F[G+0],B=F[G+1],Y=F[G+2];_.push(D,B,B,Y,Y,D)}}else{const F=A.array;b=A.version;for(let G=0,N=F.length/3-1;G<N;G+=3){const D=G+0,B=G+1,Y=G+2;_.push(D,B,B,Y,Y,D)}}const g=new(nu(_)?lu:au)(_,1);g.version=b;const E=a.get(v);E&&e.remove(E),a.set(v,g)}function m(v){const _=a.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return a.get(v)}return{get:l,update:h,getWireframeAttribute:m}}function fg(s,e,t,n){const r=n.isWebGL2;let a;function f(_){a=_}let l,h;function p(_){l=_.type,h=_.bytesPerElement}function m(_,S){s.drawElements(a,S,l,_*h),t.update(S,a,1)}function v(_,S,A){if(A===0)return;let b,g;if(r)b=s,g="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[g](a,S,l,_*h,A),t.update(S,a,A)}this.setMode=f,this.setIndex=p,this.render=m,this.renderInstances=v}function dg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,f,l){switch(t.calls++,f){case 4:t.triangles+=l*(a/3);break;case 1:t.lines+=l*(a/2);break;case 3:t.lines+=l*(a-1);break;case 2:t.lines+=l*a;break;case 0:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hg(s,e){return s[0]-e[0]}function pg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function aa(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function mg(s,e,t){const n={},r=new Float32Array(8),a=new WeakMap,f=new xt,l=[];for(let p=0;p<8;p++)l[p]=[p,0];function h(p,m,v,_){const S=p.morphTargetInfluences;if(e.isWebGL2===!0){const b=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,g=b!==void 0?b.length:0;let E=a.get(m);if(E===void 0||E.count!==g){let q=function(){j.dispose(),a.delete(m),m.removeEventListener("dispose",q)};var A=q;E!==void 0&&E.texture.dispose();const N=m.morphAttributes.position!==void 0,D=m.morphAttributes.normal!==void 0,B=m.morphAttributes.color!==void 0,Y=m.morphAttributes.position||[],T=m.morphAttributes.normal||[],U=m.morphAttributes.color||[];let J=0;N===!0&&(J=1),D===!0&&(J=2),B===!0&&(J=3);let $=m.attributes.position.count*J,we=1;$>e.maxTextureSize&&(we=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const pe=new Float32Array($*we*4*g),j=new su(pe,$,we,g);j.type=Ri,j.needsUpdate=!0;const H=J*4;for(let ae=0;ae<g;ae++){const le=Y[ae],Q=T[ae],se=U[ae],xe=$*we*4*ae;for(let ue=0;ue<le.count;ue++){const me=ue*H;N===!0&&(f.fromBufferAttribute(le,ue),le.normalized===!0&&aa(f,le),pe[xe+me+0]=f.x,pe[xe+me+1]=f.y,pe[xe+me+2]=f.z,pe[xe+me+3]=0),D===!0&&(f.fromBufferAttribute(Q,ue),Q.normalized===!0&&aa(f,Q),pe[xe+me+4]=f.x,pe[xe+me+5]=f.y,pe[xe+me+6]=f.z,pe[xe+me+7]=0),B===!0&&(f.fromBufferAttribute(se,ue),se.normalized===!0&&aa(f,se),pe[xe+me+8]=f.x,pe[xe+me+9]=f.y,pe[xe+me+10]=f.z,pe[xe+me+11]=se.itemSize===4?f.w:1)}}E={count:g,texture:j,size:new Ge($,we)},a.set(m,E),m.addEventListener("dispose",q)}let F=0;for(let N=0;N<S.length;N++)F+=S[N];const G=m.morphTargetsRelative?1:1-F;_.getUniforms().setValue(s,"morphTargetBaseInfluence",G),_.getUniforms().setValue(s,"morphTargetInfluences",S),_.getUniforms().setValue(s,"morphTargetsTexture",E.texture,t),_.getUniforms().setValue(s,"morphTargetsTextureSize",E.size)}else{const b=S===void 0?0:S.length;let g=n[m.id];if(g===void 0||g.length!==b){g=[];for(let D=0;D<b;D++)g[D]=[D,0];n[m.id]=g}for(let D=0;D<b;D++){const B=g[D];B[0]=D,B[1]=S[D]}g.sort(pg);for(let D=0;D<8;D++)D<b&&g[D][1]?(l[D][0]=g[D][0],l[D][1]=g[D][1]):(l[D][0]=Number.MAX_SAFE_INTEGER,l[D][1]=0);l.sort(hg);const E=m.morphAttributes.position,F=m.morphAttributes.normal;let G=0;for(let D=0;D<8;D++){const B=l[D],Y=B[0],T=B[1];Y!==Number.MAX_SAFE_INTEGER&&T?(E&&m.getAttribute("morphTarget"+D)!==E[Y]&&m.setAttribute("morphTarget"+D,E[Y]),F&&m.getAttribute("morphNormal"+D)!==F[Y]&&m.setAttribute("morphNormal"+D,F[Y]),r[D]=T,G+=T):(E&&m.hasAttribute("morphTarget"+D)===!0&&m.deleteAttribute("morphTarget"+D),F&&m.hasAttribute("morphNormal"+D)===!0&&m.deleteAttribute("morphNormal"+D),r[D]=0)}const N=m.morphTargetsRelative?1:1-G;_.getUniforms().setValue(s,"morphTargetBaseInfluence",N),_.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:h}}function gg(s,e,t,n){let r=new WeakMap;function a(h){const p=n.render.frame,m=h.geometry,v=e.get(h,m);return r.get(v)!==p&&(e.update(v),r.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),v}function f(){r=new WeakMap}function l(h){const p=h.target;p.removeEventListener("dispose",l),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:f}}const du=new mn,hu=new su,pu=new oh,mu=new uu,_c=[],xc=[],yc=new Float32Array(16),bc=new Float32Array(9),Mc=new Float32Array(4);function xr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let a=_c[r];if(a===void 0&&(a=new Float32Array(r),_c[r]=a),e!==0){n.toArray(a,0);for(let f=1,l=0;f!==e;++f)l+=t,s[f].toArray(a,l)}return a}function jt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Jo(s,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2fv(this.addr,e),Xt(t,e)}}function xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;s.uniform3fv(this.addr,e),Xt(t,e)}}function yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4fv(this.addr,e),Xt(t,e)}}function bg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;Mc.set(n),s.uniformMatrix2fv(this.addr,!1,Mc),Xt(t,n)}}function Mg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;bc.set(n),s.uniformMatrix3fv(this.addr,!1,bc),Xt(t,n)}}function wg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;yc.set(n),s.uniformMatrix4fv(this.addr,!1,yc),Xt(t,n)}}function Sg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Eg(s,e){const t=this.cache;jt(t,e)||(s.uniform2iv(this.addr,e),Xt(t,e))}function Tg(s,e){const t=this.cache;jt(t,e)||(s.uniform3iv(this.addr,e),Xt(t,e))}function Ag(s,e){const t=this.cache;jt(t,e)||(s.uniform4iv(this.addr,e),Xt(t,e))}function Pg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Cg(s,e){const t=this.cache;jt(t,e)||(s.uniform2uiv(this.addr,e),Xt(t,e))}function Lg(s,e){const t=this.cache;jt(t,e)||(s.uniform3uiv(this.addr,e),Xt(t,e))}function Dg(s,e){const t=this.cache;jt(t,e)||(s.uniform4uiv(this.addr,e),Xt(t,e))}function Rg(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||du,r)}function Ig(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||pu,r)}function Og(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||mu,r)}function Fg(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||hu,r)}function zg(s){switch(s){case 5126:return vg;case 35664:return _g;case 35665:return xg;case 35666:return yg;case 35674:return bg;case 35675:return Mg;case 35676:return wg;case 5124:case 35670:return Sg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Pg;case 36294:return Cg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Fg}}function Ng(s,e){s.uniform1fv(this.addr,e)}function Ug(s,e){const t=xr(e,this.size,2);s.uniform2fv(this.addr,t)}function kg(s,e){const t=xr(e,this.size,3);s.uniform3fv(this.addr,t)}function Bg(s,e){const t=xr(e,this.size,4);s.uniform4fv(this.addr,t)}function Gg(s,e){const t=xr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Vg(s,e){const t=xr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Hg(s,e){const t=xr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Wg(s,e){s.uniform1iv(this.addr,e)}function jg(s,e){s.uniform2iv(this.addr,e)}function Xg(s,e){s.uniform3iv(this.addr,e)}function qg(s,e){s.uniform4iv(this.addr,e)}function Yg(s,e){s.uniform1uiv(this.addr,e)}function Zg(s,e){s.uniform2uiv(this.addr,e)}function $g(s,e){s.uniform3uiv(this.addr,e)}function Kg(s,e){s.uniform4uiv(this.addr,e)}function Jg(s,e,t){const n=e.length,r=Jo(t,n);s.uniform1iv(this.addr,r);for(let a=0;a!==n;++a)t.setTexture2D(e[a]||du,r[a])}function Qg(s,e,t){const n=e.length,r=Jo(t,n);s.uniform1iv(this.addr,r);for(let a=0;a!==n;++a)t.setTexture3D(e[a]||pu,r[a])}function ev(s,e,t){const n=e.length,r=Jo(t,n);s.uniform1iv(this.addr,r);for(let a=0;a!==n;++a)t.setTextureCube(e[a]||mu,r[a])}function tv(s,e,t){const n=e.length,r=Jo(t,n);s.uniform1iv(this.addr,r);for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||hu,r[a])}function nv(s){switch(s){case 5126:return Ng;case 35664:return Ug;case 35665:return kg;case 35666:return Bg;case 35674:return Gg;case 35675:return Vg;case 35676:return Hg;case 5124:case 35670:return Wg;case 35667:case 35671:return jg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Zg;case 36295:return $g;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}class iv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=zg(t.type)}}class rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=nv(t.type)}}class ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,f=r.length;a!==f;++a){const l=r[a];l.setValue(e,t[l.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function wc(s,e){s.seq.push(e),s.map[e.id]=e}function sv(s,e,t){const n=s.name,r=n.length;for(la.lastIndex=0;;){const a=la.exec(n),f=la.lastIndex;let l=a[1];const h=a[2]==="]",p=a[3];if(h&&(l=l|0),p===void 0||p==="["&&f+2===r){wc(t,p===void 0?new iv(l,s,e):new rv(l,s,e));break}else{let v=t.map[l];v===void 0&&(v=new ov(l),wc(t,v)),t=v}}}class Ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),f=e.getUniformLocation(t,a.name);sv(a,f,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,f=t.length;a!==f;++a){const l=t[a],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const f=e[r];f.id in t&&n.push(f)}return n}}function Sc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let av=0;function lv(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let f=r;f<a;f++){const l=f+1;n.push(`${l===e?">":" "} ${l}: ${t[f]}`)}return n.join(`
`)}function cv(s){switch(s){case Ni:return["Linear","( value )"];case _t:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ec(s,e,t){const n=s.getShaderParameter(e,35713),r=s.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const f=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+lv(s.getShaderSource(e),f)}else return r}function uv(s,e){const t=cv(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function fv(s,e){let t;switch(e){case Rd:t="Linear";break;case Id:t="Reinhard";break;case Od:t="OptimizedCineon";break;case Fd:t="ACESFilmic";break;case zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dv(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gr).join(`
`)}function hv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pv(s,e){const t={},n=s.getProgramParameter(e,35721);for(let r=0;r<n;r++){const a=s.getActiveAttrib(e,r),f=a.name;let l=1;a.type===35674&&(l=2),a.type===35675&&(l=3),a.type===35676&&(l=4),t[f]={type:a.type,location:s.getAttribLocation(e,f),locationSize:l}}return t}function Gr(s){return s!==""}function Tc(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(s){return s.replace(mv,gv)}function gv(s,e){const t=$e[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ya(t)}const vv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,_v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(s){return s.replace(_v,gu).replace(vv,xv)}function xv(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),gu(s,e,t,n)}function gu(s,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Cc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Br&&(e="SHADOWMAP_TYPE_VSM"),e}function bv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function wv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ld:e="ENVMAP_BLENDING_MIX";break;case Dd:e="ENVMAP_BLENDING_ADD";break}return e}function Sv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ev(s,e,t,n){const r=s.getContext(),a=t.defines;let f=t.vertexShader,l=t.fragmentShader;const h=yv(t),p=bv(t),m=Mv(t),v=wv(t),_=Sv(t),S=t.isWebGL2?"":dv(t),A=hv(a),b=r.createProgram();let g,E,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[A].filter(Gr).join(`
`),g.length>0&&(g+=`
`),E=[S,A].filter(Gr).join(`
`),E.length>0&&(E+=`
`)):(g=[Cc(t),"#define SHADER_NAME "+t.shaderName,A,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),E=[S,Cc(t),"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Kn?fv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.encodings_pars_fragment,uv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),f=ya(f),f=Tc(f,t),f=Ac(f,t),l=ya(l),l=Tc(l,t),l=Ac(l,t),f=Pc(f),l=Pc(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,E=["#define varying in",t.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const G=F+g+f,N=F+E+l,D=Sc(r,35633,G),B=Sc(r,35632,N);if(r.attachShader(b,D),r.attachShader(b,B),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b),s.debug.checkShaderErrors){const U=r.getProgramInfoLog(b).trim(),J=r.getShaderInfoLog(D).trim(),$=r.getShaderInfoLog(B).trim();let we=!0,pe=!0;if(r.getProgramParameter(b,35714)===!1){we=!1;const j=Ec(r,D,"vertex"),H=Ec(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,35715)+`

Program Info Log: `+U+`
`+j+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(J===""||$==="")&&(pe=!1);pe&&(this.diagnostics={runnable:we,programLog:U,vertexShader:{log:J,prefix:g},fragmentShader:{log:$,prefix:E}})}r.deleteShader(D),r.deleteShader(B);let Y;this.getUniforms=function(){return Y===void 0&&(Y=new Ho(r,b)),Y};let T;return this.getAttributes=function(){return T===void 0&&(T=pv(r,b)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.name=t.shaderName,this.id=av++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=B,this}let Tv=0;class Av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),f=this._getShaderCacheForMaterial(e);return f.has(r)===!1&&(f.add(r),r.usedTimes++),f.has(a)===!1&&(f.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Pv(e);t.set(e,n)}return t.get(e)}}class Pv{constructor(e){this.id=Tv++,this.code=e,this.usedTimes=0}}function Cv(s,e,t,n,r,a,f){const l=new Sa,h=new Av,p=[],m=r.isWebGL2,v=r.logarithmicDepthBuffer,_=r.vertexTextures;let S=r.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T,U,J,$,we){const pe=$.fog,j=we.geometry,H=T.isMeshStandardMaterial?$.environment:null,q=(T.isMeshStandardMaterial?t:e).get(T.envMap||H),ae=!!q&&q.mapping===qo?q.image.height:null,le=A[T.type];T.precision!==null&&(S=r.getMaxPrecision(T.precision),S!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const Q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,se=Q!==void 0?Q.length:0;let xe=0;j.morphAttributes.position!==void 0&&(xe=1),j.morphAttributes.normal!==void 0&&(xe=2),j.morphAttributes.color!==void 0&&(xe=3);let ue,me,re,De;if(le){const Ze=On[le];ue=Ze.vertexShader,me=Ze.fragmentShader}else ue=T.vertexShader,me=T.fragmentShader,h.update(T),re=h.getVertexShaderID(T),De=h.getFragmentShaderID(T);const oe=s.getRenderTarget(),at=T.alphaTest>0,He=T.clearcoat>0,ke=T.iridescence>0;return{isWebGL2:m,shaderID:le,shaderName:T.type,vertexShader:ue,fragmentShader:me,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:De,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,instancing:we.isInstancedMesh===!0,instancingColor:we.isInstancedMesh===!0&&we.instanceColor!==null,supportsVertexTextures:_,outputEncoding:oe===null?s.outputEncoding:oe.isXRRenderTarget===!0?oe.texture.encoding:Ni,map:!!T.map,matcap:!!T.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:ae,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===th,tangentSpaceNormalMap:T.normalMapType===_r,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===_t,clearcoat:He,clearcoatMap:He&&!!T.clearcoatMap,clearcoatRoughnessMap:He&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:He&&!!T.clearcoatNormalMap,iridescence:ke,iridescenceMap:ke&&!!T.iridescenceMap,iridescenceThicknessMap:ke&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===dr,alphaMap:!!T.alphaMap,alphaTest:at,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!j.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||T.transmission>0||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||T.sheen>0||!!T.sheenColorMap||!!T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!pe,useFog:T.fog===!0,fogExp2:pe&&pe.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:v,skinning:we.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:xe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:T.toneMapped?s.toneMapping:Kn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pi,flipSided:T.side===En,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:m||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||n.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const J in T.defines)U.push(J),U.push(T.defines[J]);return T.isRawShaderMaterial===!1&&(E(U,T),F(U,T),U.push(s.outputEncoding)),U.push(T.customProgramCacheKey),U.join()}function E(T,U){T.push(U.precision),T.push(U.outputEncoding),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.combine),T.push(U.vertexUvs),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function F(T,U){l.disableAll(),U.isWebGL2&&l.enable(0),U.supportsVertexTextures&&l.enable(1),U.instancing&&l.enable(2),U.instancingColor&&l.enable(3),U.map&&l.enable(4),U.matcap&&l.enable(5),U.envMap&&l.enable(6),U.lightMap&&l.enable(7),U.aoMap&&l.enable(8),U.emissiveMap&&l.enable(9),U.bumpMap&&l.enable(10),U.normalMap&&l.enable(11),U.objectSpaceNormalMap&&l.enable(12),U.tangentSpaceNormalMap&&l.enable(13),U.clearcoat&&l.enable(14),U.clearcoatMap&&l.enable(15),U.clearcoatRoughnessMap&&l.enable(16),U.clearcoatNormalMap&&l.enable(17),U.iridescence&&l.enable(18),U.iridescenceMap&&l.enable(19),U.iridescenceThicknessMap&&l.enable(20),U.displacementMap&&l.enable(21),U.specularMap&&l.enable(22),U.roughnessMap&&l.enable(23),U.metalnessMap&&l.enable(24),U.gradientMap&&l.enable(25),U.alphaMap&&l.enable(26),U.alphaTest&&l.enable(27),U.vertexColors&&l.enable(28),U.vertexAlphas&&l.enable(29),U.vertexUvs&&l.enable(30),U.vertexTangents&&l.enable(31),U.uvsVertexOnly&&l.enable(32),U.fog&&l.enable(33),T.push(l.mask),l.disableAll(),U.useFog&&l.enable(0),U.flatShading&&l.enable(1),U.logarithmicDepthBuffer&&l.enable(2),U.skinning&&l.enable(3),U.morphTargets&&l.enable(4),U.morphNormals&&l.enable(5),U.morphColors&&l.enable(6),U.premultipliedAlpha&&l.enable(7),U.shadowMapEnabled&&l.enable(8),U.physicallyCorrectLights&&l.enable(9),U.doubleSided&&l.enable(10),U.flipSided&&l.enable(11),U.useDepthPacking&&l.enable(12),U.dithering&&l.enable(13),U.specularIntensityMap&&l.enable(14),U.specularColorMap&&l.enable(15),U.transmission&&l.enable(16),U.transmissionMap&&l.enable(17),U.thicknessMap&&l.enable(18),U.sheen&&l.enable(19),U.sheenColorMap&&l.enable(20),U.sheenRoughnessMap&&l.enable(21),U.decodeVideoTexture&&l.enable(22),U.opaque&&l.enable(23),T.push(l.mask)}function G(T){const U=A[T.type];let J;if(U){const $=On[U];J=gh.clone($.uniforms)}else J=T.uniforms;return J}function N(T,U){let J;for(let $=0,we=p.length;$<we;$++){const pe=p[$];if(pe.cacheKey===U){J=pe,++J.usedTimes;break}}return J===void 0&&(J=new Ev(s,U,T,a),p.push(J)),J}function D(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),T.destroy()}}function B(T){h.remove(T)}function Y(){h.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:G,acquireProgram:N,releaseProgram:D,releaseShaderCache:B,programs:p,dispose:Y}}function Lv(){let s=new WeakMap;function e(a){let f=s.get(a);return f===void 0&&(f={},s.set(a,f)),f}function t(a){s.delete(a)}function n(a,f,l){s.get(a)[f]=l}function r(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Dv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Lc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dc(){const s=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function f(v,_,S,A,b,g){let E=s[e];return E===void 0?(E={id:v.id,object:v,geometry:_,material:S,groupOrder:A,renderOrder:v.renderOrder,z:b,group:g},s[e]=E):(E.id=v.id,E.object=v,E.geometry=_,E.material=S,E.groupOrder=A,E.renderOrder=v.renderOrder,E.z=b,E.group=g),e++,E}function l(v,_,S,A,b,g){const E=f(v,_,S,A,b,g);S.transmission>0?n.push(E):S.transparent===!0?r.push(E):t.push(E)}function h(v,_,S,A,b,g){const E=f(v,_,S,A,b,g);S.transmission>0?n.unshift(E):S.transparent===!0?r.unshift(E):t.unshift(E)}function p(v,_){t.length>1&&t.sort(v||Dv),n.length>1&&n.sort(_||Lc),r.length>1&&r.sort(_||Lc)}function m(){for(let v=e,_=s.length;v<_;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:l,unshift:h,finish:m,sort:p}}function Rv(){let s=new WeakMap;function e(n,r){let a;return s.has(n)===!1?(a=new Dc,s.set(n,[a])):r>=s.get(n).length?(a=new Dc,s.get(n).push(a)):a=s.get(n)[r],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Iv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ie};break;case"SpotLight":t={position:new V,direction:new V,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function Ov(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Fv=0;function zv(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Nv(s,e){const t=new Iv,n=Ov(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let m=0;m<9;m++)r.probe.push(new V);const a=new V,f=new St,l=new St;function h(m,v){let _=0,S=0,A=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let b=0,g=0,E=0,F=0,G=0,N=0,D=0,B=0;m.sort(zv);const Y=v!==!0?Math.PI:1;for(let U=0,J=m.length;U<J;U++){const $=m[U],we=$.color,pe=$.intensity,j=$.distance,H=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)_+=we.r*pe*Y,S+=we.g*pe*Y,A+=we.b*pe*Y;else if($.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector($.sh.coefficients[q],pe);else if($.isDirectionalLight){const q=t.get($);if(q.color.copy($.color).multiplyScalar($.intensity*Y),$.castShadow){const ae=$.shadow,le=n.get($);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,r.directionalShadow[b]=le,r.directionalShadowMap[b]=H,r.directionalShadowMatrix[b]=$.shadow.matrix,N++}r.directional[b]=q,b++}else if($.isSpotLight){const q=t.get($);if(q.position.setFromMatrixPosition($.matrixWorld),q.color.copy(we).multiplyScalar(pe*Y),q.distance=j,q.coneCos=Math.cos($.angle),q.penumbraCos=Math.cos($.angle*(1-$.penumbra)),q.decay=$.decay,$.castShadow){const ae=$.shadow,le=n.get($);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,r.spotShadow[E]=le,r.spotShadowMap[E]=H,r.spotShadowMatrix[E]=$.shadow.matrix,B++}r.spot[E]=q,E++}else if($.isRectAreaLight){const q=t.get($);q.color.copy(we).multiplyScalar(pe),q.halfWidth.set($.width*.5,0,0),q.halfHeight.set(0,$.height*.5,0),r.rectArea[F]=q,F++}else if($.isPointLight){const q=t.get($);if(q.color.copy($.color).multiplyScalar($.intensity*Y),q.distance=$.distance,q.decay=$.decay,$.castShadow){const ae=$.shadow,le=n.get($);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,le.shadowCameraNear=ae.camera.near,le.shadowCameraFar=ae.camera.far,r.pointShadow[g]=le,r.pointShadowMap[g]=H,r.pointShadowMatrix[g]=$.shadow.matrix,D++}r.point[g]=q,g++}else if($.isHemisphereLight){const q=t.get($);q.skyColor.copy($.color).multiplyScalar(pe*Y),q.groundColor.copy($.groundColor).multiplyScalar(pe*Y),r.hemi[G]=q,G++}}F>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=A;const T=r.hash;(T.directionalLength!==b||T.pointLength!==g||T.spotLength!==E||T.rectAreaLength!==F||T.hemiLength!==G||T.numDirectionalShadows!==N||T.numPointShadows!==D||T.numSpotShadows!==B)&&(r.directional.length=b,r.spot.length=E,r.rectArea.length=F,r.point.length=g,r.hemi.length=G,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotShadowMatrix.length=B,T.directionalLength=b,T.pointLength=g,T.spotLength=E,T.rectAreaLength=F,T.hemiLength=G,T.numDirectionalShadows=N,T.numPointShadows=D,T.numSpotShadows=B,r.version=Fv++)}function p(m,v){let _=0,S=0,A=0,b=0,g=0;const E=v.matrixWorldInverse;for(let F=0,G=m.length;F<G;F++){const N=m[F];if(N.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(E),_++}else if(N.isSpotLight){const D=r.spot[A];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(E),D.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(E),A++}else if(N.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(E),l.identity(),f.copy(N.matrixWorld),f.premultiply(E),l.extractRotation(f),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(l),D.halfHeight.applyMatrix4(l),b++}else if(N.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(E),S++}else if(N.isHemisphereLight){const D=r.hemi[g];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(E),g++}}}return{setup:h,setupView:p,state:r}}function Rc(s,e){const t=new Nv(s,e),n=[],r=[];function a(){n.length=0,r.length=0}function f(v){n.push(v)}function l(v){r.push(v)}function h(v){t.setup(n,v)}function p(v){t.setupView(n,v)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:h,setupLightsView:p,pushLight:f,pushShadow:l}}function Uv(s,e){let t=new WeakMap;function n(a,f=0){let l;return t.has(a)===!1?(l=new Rc(s,e),t.set(a,[l])):f>=t.get(a).length?(l=new Rc(s,e),t.get(a).push(l)):l=t.get(a)[f],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class vu extends Ft{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _u extends Ft{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gv(s,e,t){let n=new Ea;const r=new Ge,a=new Ge,f=new xt,l=new vu({depthPacking:eh}),h=new _u,p={},m=t.maxTextureSize,v={0:En,1:Vr,2:pi},_=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:kv,fragmentShader:Bv}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const A=new Jt;A.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Un(A,_),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc,this.render=function(N,D,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const Y=s.getRenderTarget(),T=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),J=s.state;J.setBlending(di),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);for(let $=0,we=N.length;$<we;$++){const pe=N[$],j=pe.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const H=j.getFrameExtents();if(r.multiply(H),a.copy(j.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/H.x),r.x=a.x*H.x,j.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/H.y),r.y=a.y*H.y,j.mapSize.y=a.y)),j.map===null&&!j.isPointLightShadow&&this.type===Br&&(j.map=new hi(r.x,r.y),j.map.texture.name=pe.name+".shadowMap",j.mapPass=new hi(r.x,r.y),j.camera.updateProjectionMatrix()),j.map===null){const ae={minFilter:$t,magFilter:$t,format:Sn};j.map=new hi(r.x,r.y,ae),j.map.texture.name=pe.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const q=j.getViewportCount();for(let ae=0;ae<q;ae++){const le=j.getViewport(ae);f.set(a.x*le.x,a.y*le.y,a.x*le.z,a.y*le.w),J.viewport(f),j.updateMatrices(pe,ae),n=j.getFrustum(),G(D,B,j.camera,pe,this.type)}!j.isPointLightShadow&&this.type===Br&&E(j,B),j.needsUpdate=!1}g.needsUpdate=!1,s.setRenderTarget(Y,T,U)};function E(N,D){const B=e.update(b);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),_.uniforms.shadow_pass.value=N.map.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(D,null,B,_,b,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(D,null,B,S,b,null)}function F(N,D,B,Y,T,U){let J=null;const $=B.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if($!==void 0?J=$:J=B.isPointLight===!0?h:l,s.localClippingEnabled&&D.clipShadows===!0&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0){const we=J.uuid,pe=D.uuid;let j=p[we];j===void 0&&(j={},p[we]=j);let H=j[pe];H===void 0&&(H=J.clone(),j[pe]=H),J=H}return J.visible=D.visible,J.wireframe=D.wireframe,U===Br?J.side=D.shadowSide!==null?D.shadowSide:D.side:J.side=D.shadowSide!==null?D.shadowSide:v[D.side],J.alphaMap=D.alphaMap,J.alphaTest=D.alphaTest,J.clipShadows=D.clipShadows,J.clippingPlanes=D.clippingPlanes,J.clipIntersection=D.clipIntersection,J.displacementMap=D.displacementMap,J.displacementScale=D.displacementScale,J.displacementBias=D.displacementBias,J.wireframeLinewidth=D.wireframeLinewidth,J.linewidth=D.linewidth,B.isPointLight===!0&&J.isMeshDistanceMaterial===!0&&(J.referencePosition.setFromMatrixPosition(B.matrixWorld),J.nearDistance=Y,J.farDistance=T),J}function G(N,D,B,Y,T){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Br)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,N.matrixWorld);const $=e.update(N),we=N.material;if(Array.isArray(we)){const pe=$.groups;for(let j=0,H=pe.length;j<H;j++){const q=pe[j],ae=we[q.materialIndex];if(ae&&ae.visible){const le=F(N,ae,Y,B.near,B.far,T);s.renderBufferDirect(B,null,$,le,N,q)}}}else if(we.visible){const pe=F(N,we,Y,B.near,B.far,T);s.renderBufferDirect(B,null,$,pe,N,null)}}const J=N.children;for(let $=0,we=J.length;$<we;$++)G(J[$],D,B,Y,T)}}function Vv(s,e,t){const n=t.isWebGL2;function r(){let z=!1;const ve=new xt;let _e=null;const Re=new xt(0,0,0,0);return{setMask:function(Te){_e!==Te&&!z&&(s.colorMask(Te,Te,Te,Te),_e=Te)},setLocked:function(Te){z=Te},setClear:function(Te,Le,ye,Ne,ot){ot===!0&&(Te*=Ne,Le*=Ne,ye*=Ne),ve.set(Te,Le,ye,Ne),Re.equals(ve)===!1&&(s.clearColor(Te,Le,ye,Ne),Re.copy(ve))},reset:function(){z=!1,_e=null,Re.set(-1,0,0,0)}}}function a(){let z=!1,ve=null,_e=null,Re=null;return{setTest:function(Te){Te?De(2929):oe(2929)},setMask:function(Te){ve!==Te&&!z&&(s.depthMask(Te),ve=Te)},setFunc:function(Te){if(_e!==Te){if(Te)switch(Te){case wd:s.depthFunc(512);break;case Sd:s.depthFunc(519);break;case Ed:s.depthFunc(513);break;case ha:s.depthFunc(515);break;case Td:s.depthFunc(514);break;case Ad:s.depthFunc(518);break;case Pd:s.depthFunc(516);break;case Cd:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);_e=Te}},setLocked:function(Te){z=Te},setClear:function(Te){Re!==Te&&(s.clearDepth(Te),Re=Te)},reset:function(){z=!1,ve=null,_e=null,Re=null}}}function f(){let z=!1,ve=null,_e=null,Re=null,Te=null,Le=null,ye=null,Ne=null,ot=null;return{setTest:function(it){z||(it?De(2960):oe(2960))},setMask:function(it){ve!==it&&!z&&(s.stencilMask(it),ve=it)},setFunc:function(it,pt,ln){(_e!==it||Re!==pt||Te!==ln)&&(s.stencilFunc(it,pt,ln),_e=it,Re=pt,Te=ln)},setOp:function(it,pt,ln){(Le!==it||ye!==pt||Ne!==ln)&&(s.stencilOp(it,pt,ln),Le=it,ye=pt,Ne=ln)},setLocked:function(it){z=it},setClear:function(it){ot!==it&&(s.clearStencil(it),ot=it)},reset:function(){z=!1,ve=null,_e=null,Re=null,Te=null,Le=null,ye=null,Ne=null,ot=null}}}const l=new r,h=new a,p=new f;let m={},v={},_=new WeakMap,S=[],A=null,b=!1,g=null,E=null,F=null,G=null,N=null,D=null,B=null,Y=!1,T=null,U=null,J=null,$=null,we=null;const pe=s.getParameter(35661);let j=!1,H=0;const q=s.getParameter(7938);q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=H>=1):q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=H>=2);let ae=null,le={};const Q=s.getParameter(3088),se=s.getParameter(2978),xe=new xt().fromArray(Q),ue=new xt().fromArray(se);function me(z,ve,_e){const Re=new Uint8Array(4),Te=s.createTexture();s.bindTexture(z,Te),s.texParameteri(z,10241,9728),s.texParameteri(z,10240,9728);for(let Le=0;Le<_e;Le++)s.texImage2D(ve+Le,0,6408,1,1,0,6408,5121,Re);return Te}const re={};re[3553]=me(3553,3553,1),re[34067]=me(34067,34069,6),l.setClear(0,0,0,1),h.setClear(1),p.setClear(0),De(2929),h.setFunc(ha),yt(!1),Ve(bl),De(2884),Ye(di);function De(z){m[z]!==!0&&(s.enable(z),m[z]=!0)}function oe(z){m[z]!==!1&&(s.disable(z),m[z]=!1)}function at(z,ve){return v[z]!==ve?(s.bindFramebuffer(z,ve),v[z]=ve,n&&(z===36009&&(v[36160]=ve),z===36160&&(v[36009]=ve)),!0):!1}function He(z,ve){let _e=S,Re=!1;if(z)if(_e=_.get(ve),_e===void 0&&(_e=[],_.set(ve,_e)),z.isWebGLMultipleRenderTargets){const Te=z.texture;if(_e.length!==Te.length||_e[0]!==36064){for(let Le=0,ye=Te.length;Le<ye;Le++)_e[Le]=36064+Le;_e.length=Te.length,Re=!0}}else _e[0]!==36064&&(_e[0]=36064,Re=!0);else _e[0]!==1029&&(_e[0]=1029,Re=!0);Re&&(t.isWebGL2?s.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function ke(z){return A!==z?(s.useProgram(z),A=z,!0):!1}const Pe={[cr]:32774,[dd]:32778,[hd]:32779};if(n)Pe[El]=32775,Pe[Tl]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(Pe[El]=z.MIN_EXT,Pe[Tl]=z.MAX_EXT)}const Ze={[pd]:0,[md]:1,[gd]:768,[Jc]:770,[Md]:776,[yd]:774,[_d]:772,[vd]:769,[Qc]:771,[bd]:775,[xd]:773};function Ye(z,ve,_e,Re,Te,Le,ye,Ne){if(z===di){b===!0&&(oe(3042),b=!1);return}if(b===!1&&(De(3042),b=!0),z!==fd){if(z!==g||Ne!==Y){if((E!==cr||N!==cr)&&(s.blendEquation(32774),E=cr,N=cr),Ne)switch(z){case dr:s.blendFuncSeparate(1,771,1,771);break;case Ml:s.blendFunc(1,1);break;case wl:s.blendFuncSeparate(0,769,0,1);break;case Sl:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case dr:s.blendFuncSeparate(770,771,1,771);break;case Ml:s.blendFunc(770,1);break;case wl:s.blendFuncSeparate(0,769,0,1);break;case Sl:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}F=null,G=null,D=null,B=null,g=z,Y=Ne}return}Te=Te||ve,Le=Le||_e,ye=ye||Re,(ve!==E||Te!==N)&&(s.blendEquationSeparate(Pe[ve],Pe[Te]),E=ve,N=Te),(_e!==F||Re!==G||Le!==D||ye!==B)&&(s.blendFuncSeparate(Ze[_e],Ze[Re],Ze[Le],Ze[ye]),F=_e,G=Re,D=Le,B=ye),g=z,Y=null}function Be(z,ve){z.side===pi?oe(2884):De(2884);let _e=z.side===En;ve&&(_e=!_e),yt(_e),z.blending===dr&&z.transparent===!1?Ye(di):Ye(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),h.setFunc(z.depthFunc),h.setTest(z.depthTest),h.setMask(z.depthWrite),l.setMask(z.colorWrite);const Re=z.stencilWrite;p.setTest(Re),Re&&(p.setMask(z.stencilWriteMask),p.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),p.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),zt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?De(32926):oe(32926)}function yt(z){T!==z&&(z?s.frontFace(2304):s.frontFace(2305),T=z)}function Ve(z){z!==ad?(De(2884),z!==U&&(z===bl?s.cullFace(1029):z===ld?s.cullFace(1028):s.cullFace(1032))):oe(2884),U=z}function Mt(z){z!==J&&(j&&s.lineWidth(z),J=z)}function zt(z,ve,_e){z?(De(32823),($!==ve||we!==_e)&&(s.polygonOffset(ve,_e),$=ve,we=_e)):oe(32823)}function lt(z){z?De(3089):oe(3089)}function tt(z){z===void 0&&(z=33984+pe-1),ae!==z&&(s.activeTexture(z),ae=z)}function qt(z,ve){ae===null&&tt();let _e=le[ae];_e===void 0&&(_e={type:void 0,texture:void 0},le[ae]=_e),(_e.type!==z||_e.texture!==ve)&&(s.bindTexture(z,ve||re[z]),_e.type=z,_e.texture=ve)}function Nt(){const z=le[ae];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function I(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function P(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function L(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(z){xe.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),xe.copy(z))}function Me(z){ue.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),ue.copy(z))}function ge(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ae=null,le={},v={},_=new WeakMap,S=[],A=null,b=!1,g=null,E=null,F=null,G=null,N=null,D=null,B=null,Y=!1,T=null,U=null,J=null,$=null,we=null,xe.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),l.reset(),h.reset(),p.reset()}return{buffers:{color:l,depth:h,stencil:p},enable:De,disable:oe,bindFramebuffer:at,drawBuffers:He,useProgram:ke,setBlending:Ye,setMaterial:Be,setFlipSided:yt,setCullFace:Ve,setLineWidth:Mt,setPolygonOffset:zt,setScissorTest:lt,activeTexture:tt,bindTexture:qt,unbindTexture:Nt,compressedTexImage2D:I,texImage2D:ze,texImage3D:L,texStorage2D:be,texStorage3D:Ee,texSubImage2D:P,texSubImage3D:te,compressedTexSubImage2D:fe,scissor:ce,viewport:Me,reset:ge}}function Hv(s,e,t,n,r,a,f){const l=r.isWebGL2,h=r.maxTextures,p=r.maxCubemapSize,m=r.maxTextureSize,v=r.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=/OculusBrowser/g.test(navigator.userAgent),A=new WeakMap;let b;const g=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function F(I,P){return E?new OffscreenCanvas(I,P):Wo("canvas")}function G(I,P,te,fe){let be=1;if((I.width>fe||I.height>fe)&&(be=fe/Math.max(I.width,I.height)),be<1||P===!0)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap){const Ee=P?xa:Math.floor,ze=Ee(be*I.width),L=Ee(be*I.height);b===void 0&&(b=F(ze,L));const ce=te?F(ze,L):b;return ce.width=ze,ce.height=L,ce.getContext("2d").drawImage(I,0,0,ze,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+ze+"x"+L+")."),ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function N(I){return Ql(I.width)&&Ql(I.height)}function D(I){return l?!1:I.wrapS!==wn||I.wrapT!==wn||I.minFilter!==$t&&I.minFilter!==pn}function B(I,P){return I.generateMipmaps&&P&&I.minFilter!==$t&&I.minFilter!==pn}function Y(I){s.generateMipmap(I)}function T(I,P,te,fe,be=!1){if(l===!1)return P;if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ee=P;return P===6403&&(te===5126&&(Ee=33326),te===5131&&(Ee=33325),te===5121&&(Ee=33321)),P===33319&&(te===5126&&(Ee=33328),te===5131&&(Ee=33327),te===5121&&(Ee=33323)),P===6408&&(te===5126&&(Ee=34836),te===5131&&(Ee=34842),te===5121&&(Ee=fe===_t&&be===!1?35907:32856),te===32819&&(Ee=32854),te===32820&&(Ee=32855)),(Ee===33325||Ee===33326||Ee===33327||Ee===33328||Ee===34842||Ee===34836)&&e.get("EXT_color_buffer_float"),Ee}function U(I,P,te){return B(I,te)===!0||I.isFramebufferTexture&&I.minFilter!==$t&&I.minFilter!==pn?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function J(I){return I===$t||I===Al||I===Pl?9728:9729}function $(I){const P=I.target;P.removeEventListener("dispose",$),pe(P),P.isVideoTexture&&A.delete(P)}function we(I){const P=I.target;P.removeEventListener("dispose",we),H(P)}function pe(I){const P=n.get(I);if(P.__webglInit===void 0)return;const te=I.source,fe=g.get(te);if(fe){const be=fe[P.__cacheKey];be.usedTimes--,be.usedTimes===0&&j(I),Object.keys(fe).length===0&&g.delete(te)}n.remove(I)}function j(I){const P=n.get(I);s.deleteTexture(P.__webglTexture);const te=I.source,fe=g.get(te);delete fe[P.__cacheKey],f.memory.textures--}function H(I){const P=I.texture,te=n.get(I),fe=n.get(P);if(fe.__webglTexture!==void 0&&(s.deleteTexture(fe.__webglTexture),f.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let be=0;be<6;be++)s.deleteFramebuffer(te.__webglFramebuffer[be]),te.__webglDepthbuffer&&s.deleteRenderbuffer(te.__webglDepthbuffer[be]);else{if(s.deleteFramebuffer(te.__webglFramebuffer),te.__webglDepthbuffer&&s.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&s.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let be=0;be<te.__webglColorRenderbuffer.length;be++)te.__webglColorRenderbuffer[be]&&s.deleteRenderbuffer(te.__webglColorRenderbuffer[be]);te.__webglDepthRenderbuffer&&s.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let be=0,Ee=P.length;be<Ee;be++){const ze=n.get(P[be]);ze.__webglTexture&&(s.deleteTexture(ze.__webglTexture),f.memory.textures--),n.remove(P[be])}n.remove(P),n.remove(I)}let q=0;function ae(){q=0}function le(){const I=q;return I>=h&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+h),q+=1,I}function Q(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.encoding),P.join()}function se(I,P){const te=n.get(I);if(I.isVideoTexture&&qt(I),I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){const fe=I.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(te,I,P);return}}t.activeTexture(33984+P),t.bindTexture(3553,te.__webglTexture)}function xe(I,P){const te=n.get(I);if(I.version>0&&te.__version!==I.version){He(te,I,P);return}t.activeTexture(33984+P),t.bindTexture(35866,te.__webglTexture)}function ue(I,P){const te=n.get(I);if(I.version>0&&te.__version!==I.version){He(te,I,P);return}t.activeTexture(33984+P),t.bindTexture(32879,te.__webglTexture)}function me(I,P){const te=n.get(I);if(I.version>0&&te.__version!==I.version){ke(te,I,P);return}t.activeTexture(33984+P),t.bindTexture(34067,te.__webglTexture)}const re={[ga]:10497,[wn]:33071,[va]:33648},De={[$t]:9728,[Al]:9984,[Pl]:9986,[pn]:9729,[Nd]:9985,[Yo]:9987};function oe(I,P,te){if(te?(s.texParameteri(I,10242,re[P.wrapS]),s.texParameteri(I,10243,re[P.wrapT]),(I===32879||I===35866)&&s.texParameteri(I,32882,re[P.wrapR]),s.texParameteri(I,10240,De[P.magFilter]),s.texParameteri(I,10241,De[P.minFilter])):(s.texParameteri(I,10242,33071),s.texParameteri(I,10243,33071),(I===32879||I===35866)&&s.texParameteri(I,32882,33071),(P.wrapS!==wn||P.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(I,10240,J(P.magFilter)),s.texParameteri(I,10241,J(P.minFilter)),P.minFilter!==$t&&P.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(P.type===Ri&&e.has("OES_texture_float_linear")===!1||l===!1&&P.type===Hr&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(s.texParameterf(I,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function at(I,P){let te=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",$));const fe=P.source;let be=g.get(fe);be===void 0&&(be={},g.set(fe,be));const Ee=Q(P);if(Ee!==I.__cacheKey){be[Ee]===void 0&&(be[Ee]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,te=!0),be[Ee].usedTimes++;const ze=be[I.__cacheKey];ze!==void 0&&(be[I.__cacheKey].usedTimes--,ze.usedTimes===0&&j(P)),I.__cacheKey=Ee,I.__webglTexture=be[Ee].texture}return te}function He(I,P,te){let fe=3553;P.isDataArrayTexture&&(fe=35866),P.isData3DTexture&&(fe=32879);const be=at(I,P),Ee=P.source;if(t.activeTexture(33984+te),t.bindTexture(fe,I.__webglTexture),Ee.version!==Ee.__currentVersion||be===!0){s.pixelStorei(37440,P.flipY),s.pixelStorei(37441,P.premultiplyAlpha),s.pixelStorei(3317,P.unpackAlignment),s.pixelStorei(37443,0);const ze=D(P)&&N(P.image)===!1;let L=G(P.image,ze,!1,m);L=Nt(P,L);const ce=N(L)||l,Me=a.convert(P.format,P.encoding);let ge=a.convert(P.type),z=T(P.internalFormat,Me,ge,P.encoding,P.isVideoTexture);oe(fe,P,ce);let ve;const _e=P.mipmaps,Re=l&&P.isVideoTexture!==!0,Te=Ee.__currentVersion===void 0||be===!0,Le=U(P,L,ce);if(P.isDepthTexture)z=6402,l?P.type===Ri?z=36012:P.type===Di?z=33190:P.type===hr?z=35056:z=33189:P.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Oi&&z===6402&&P.type!==tu&&P.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Di,ge=a.convert(P.type)),P.format===gr&&z===6402&&(z=34041,P.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=hr,ge=a.convert(P.type))),Te&&(Re?t.texStorage2D(3553,1,z,L.width,L.height):t.texImage2D(3553,0,z,L.width,L.height,0,Me,ge,null));else if(P.isDataTexture)if(_e.length>0&&ce){Re&&Te&&t.texStorage2D(3553,Le,z,_e[0].width,_e[0].height);for(let ye=0,Ne=_e.length;ye<Ne;ye++)ve=_e[ye],Re?t.texSubImage2D(3553,ye,0,0,ve.width,ve.height,Me,ge,ve.data):t.texImage2D(3553,ye,z,ve.width,ve.height,0,Me,ge,ve.data);P.generateMipmaps=!1}else Re?(Te&&t.texStorage2D(3553,Le,z,L.width,L.height),t.texSubImage2D(3553,0,0,0,L.width,L.height,Me,ge,L.data)):t.texImage2D(3553,0,z,L.width,L.height,0,Me,ge,L.data);else if(P.isCompressedTexture){Re&&Te&&t.texStorage2D(3553,Le,z,_e[0].width,_e[0].height);for(let ye=0,Ne=_e.length;ye<Ne;ye++)ve=_e[ye],P.format!==Sn?Me!==null?Re?t.compressedTexSubImage2D(3553,ye,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(3553,ye,z,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage2D(3553,ye,0,0,ve.width,ve.height,Me,ge,ve.data):t.texImage2D(3553,ye,z,ve.width,ve.height,0,Me,ge,ve.data)}else if(P.isDataArrayTexture)Re?(Te&&t.texStorage3D(35866,Le,z,L.width,L.height,L.depth),t.texSubImage3D(35866,0,0,0,0,L.width,L.height,L.depth,Me,ge,L.data)):t.texImage3D(35866,0,z,L.width,L.height,L.depth,0,Me,ge,L.data);else if(P.isData3DTexture)Re?(Te&&t.texStorage3D(32879,Le,z,L.width,L.height,L.depth),t.texSubImage3D(32879,0,0,0,0,L.width,L.height,L.depth,Me,ge,L.data)):t.texImage3D(32879,0,z,L.width,L.height,L.depth,0,Me,ge,L.data);else if(P.isFramebufferTexture){if(Te)if(Re)t.texStorage2D(3553,Le,z,L.width,L.height);else{let ye=L.width,Ne=L.height;for(let ot=0;ot<Le;ot++)t.texImage2D(3553,ot,z,ye,Ne,0,Me,ge,null),ye>>=1,Ne>>=1}}else if(_e.length>0&&ce){Re&&Te&&t.texStorage2D(3553,Le,z,_e[0].width,_e[0].height);for(let ye=0,Ne=_e.length;ye<Ne;ye++)ve=_e[ye],Re?t.texSubImage2D(3553,ye,0,0,Me,ge,ve):t.texImage2D(3553,ye,z,Me,ge,ve);P.generateMipmaps=!1}else Re?(Te&&t.texStorage2D(3553,Le,z,L.width,L.height),t.texSubImage2D(3553,0,0,0,Me,ge,L)):t.texImage2D(3553,0,z,Me,ge,L);B(P,ce)&&Y(fe),Ee.__currentVersion=Ee.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function ke(I,P,te){if(P.image.length!==6)return;const fe=at(I,P),be=P.source;if(t.activeTexture(33984+te),t.bindTexture(34067,I.__webglTexture),be.version!==be.__currentVersion||fe===!0){s.pixelStorei(37440,P.flipY),s.pixelStorei(37441,P.premultiplyAlpha),s.pixelStorei(3317,P.unpackAlignment),s.pixelStorei(37443,0);const Ee=P.isCompressedTexture||P.image[0].isCompressedTexture,ze=P.image[0]&&P.image[0].isDataTexture,L=[];for(let ye=0;ye<6;ye++)!Ee&&!ze?L[ye]=G(P.image[ye],!1,!0,p):L[ye]=ze?P.image[ye].image:P.image[ye],L[ye]=Nt(P,L[ye]);const ce=L[0],Me=N(ce)||l,ge=a.convert(P.format,P.encoding),z=a.convert(P.type),ve=T(P.internalFormat,ge,z,P.encoding),_e=l&&P.isVideoTexture!==!0,Re=be.__currentVersion===void 0||fe===!0;let Te=U(P,ce,Me);oe(34067,P,Me);let Le;if(Ee){_e&&Re&&t.texStorage2D(34067,Te,ve,ce.width,ce.height);for(let ye=0;ye<6;ye++){Le=L[ye].mipmaps;for(let Ne=0;Ne<Le.length;Ne++){const ot=Le[Ne];P.format!==Sn?ge!==null?_e?t.compressedTexSubImage2D(34069+ye,Ne,0,0,ot.width,ot.height,ge,ot.data):t.compressedTexImage2D(34069+ye,Ne,ve,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(34069+ye,Ne,0,0,ot.width,ot.height,ge,z,ot.data):t.texImage2D(34069+ye,Ne,ve,ot.width,ot.height,0,ge,z,ot.data)}}}else{Le=P.mipmaps,_e&&Re&&(Le.length>0&&Te++,t.texStorage2D(34067,Te,ve,L[0].width,L[0].height));for(let ye=0;ye<6;ye++)if(ze){_e?t.texSubImage2D(34069+ye,0,0,0,L[ye].width,L[ye].height,ge,z,L[ye].data):t.texImage2D(34069+ye,0,ve,L[ye].width,L[ye].height,0,ge,z,L[ye].data);for(let Ne=0;Ne<Le.length;Ne++){const it=Le[Ne].image[ye].image;_e?t.texSubImage2D(34069+ye,Ne+1,0,0,it.width,it.height,ge,z,it.data):t.texImage2D(34069+ye,Ne+1,ve,it.width,it.height,0,ge,z,it.data)}}else{_e?t.texSubImage2D(34069+ye,0,0,0,ge,z,L[ye]):t.texImage2D(34069+ye,0,ve,ge,z,L[ye]);for(let Ne=0;Ne<Le.length;Ne++){const ot=Le[Ne];_e?t.texSubImage2D(34069+ye,Ne+1,0,0,ge,z,ot.image[ye]):t.texImage2D(34069+ye,Ne+1,ve,ge,z,ot.image[ye])}}}B(P,Me)&&Y(34067),be.__currentVersion=be.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function Pe(I,P,te,fe,be){const Ee=a.convert(te.format,te.encoding),ze=a.convert(te.type),L=T(te.internalFormat,Ee,ze,te.encoding);n.get(P).__hasExternalTextures||(be===32879||be===35866?t.texImage3D(be,0,L,P.width,P.height,P.depth,0,Ee,ze,null):t.texImage2D(be,0,L,P.width,P.height,0,Ee,ze,null)),t.bindFramebuffer(36160,I),tt(P)?_.framebufferTexture2DMultisampleEXT(36160,fe,be,n.get(te).__webglTexture,0,lt(P)):s.framebufferTexture2D(36160,fe,be,n.get(te).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ze(I,P,te){if(s.bindRenderbuffer(36161,I),P.depthBuffer&&!P.stencilBuffer){let fe=33189;if(te||tt(P)){const be=P.depthTexture;be&&be.isDepthTexture&&(be.type===Ri?fe=36012:be.type===Di&&(fe=33190));const Ee=lt(P);tt(P)?_.renderbufferStorageMultisampleEXT(36161,Ee,fe,P.width,P.height):s.renderbufferStorageMultisample(36161,Ee,fe,P.width,P.height)}else s.renderbufferStorage(36161,fe,P.width,P.height);s.framebufferRenderbuffer(36160,36096,36161,I)}else if(P.depthBuffer&&P.stencilBuffer){const fe=lt(P);te&&tt(P)===!1?s.renderbufferStorageMultisample(36161,fe,35056,P.width,P.height):tt(P)?_.renderbufferStorageMultisampleEXT(36161,fe,35056,P.width,P.height):s.renderbufferStorage(36161,34041,P.width,P.height),s.framebufferRenderbuffer(36160,33306,36161,I)}else{const fe=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let be=0;be<fe.length;be++){const Ee=fe[be],ze=a.convert(Ee.format,Ee.encoding),L=a.convert(Ee.type),ce=T(Ee.internalFormat,ze,L,Ee.encoding),Me=lt(P);te&&tt(P)===!1?s.renderbufferStorageMultisample(36161,Me,ce,P.width,P.height):tt(P)?_.renderbufferStorageMultisampleEXT(36161,Me,ce,P.width,P.height):s.renderbufferStorage(36161,ce,P.width,P.height)}}s.bindRenderbuffer(36161,null)}function Ye(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),se(P.depthTexture,0);const fe=n.get(P.depthTexture).__webglTexture,be=lt(P);if(P.depthTexture.format===Oi)tt(P)?_.framebufferTexture2DMultisampleEXT(36160,36096,3553,fe,0,be):s.framebufferTexture2D(36160,36096,3553,fe,0);else if(P.depthTexture.format===gr)tt(P)?_.framebufferTexture2DMultisampleEXT(36160,33306,3553,fe,0,be):s.framebufferTexture2D(36160,33306,3553,fe,0);else throw new Error("Unknown depthTexture format")}function Be(I){const P=n.get(I),te=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Ye(P.__webglFramebuffer,I)}else if(te){P.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(36160,P.__webglFramebuffer[fe]),P.__webglDepthbuffer[fe]=s.createRenderbuffer(),Ze(P.__webglDepthbuffer[fe],I,!1)}else t.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=s.createRenderbuffer(),Ze(P.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function yt(I,P,te){const fe=n.get(I);P!==void 0&&Pe(fe.__webglFramebuffer,I,I.texture,36064,3553),te!==void 0&&Be(I)}function Ve(I){const P=I.texture,te=n.get(I),fe=n.get(P);I.addEventListener("dispose",we),I.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=P.version,f.memory.textures++);const be=I.isWebGLCubeRenderTarget===!0,Ee=I.isWebGLMultipleRenderTargets===!0,ze=N(I)||l;if(be){te.__webglFramebuffer=[];for(let L=0;L<6;L++)te.__webglFramebuffer[L]=s.createFramebuffer()}else{if(te.__webglFramebuffer=s.createFramebuffer(),Ee)if(r.drawBuffers){const L=I.texture;for(let ce=0,Me=L.length;ce<Me;ce++){const ge=n.get(L[ce]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&I.samples>0&&tt(I)===!1){const L=Ee?P:[P];te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer);for(let ce=0;ce<L.length;ce++){const Me=L[ce];te.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(36161,te.__webglColorRenderbuffer[ce]);const ge=a.convert(Me.format,Me.encoding),z=a.convert(Me.type),ve=T(Me.internalFormat,ge,z,Me.encoding),_e=lt(I);s.renderbufferStorageMultisample(36161,_e,ve,I.width,I.height),s.framebufferRenderbuffer(36160,36064+ce,36161,te.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(36161,null),I.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),Ze(te.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}}if(be){t.bindTexture(34067,fe.__webglTexture),oe(34067,P,ze);for(let L=0;L<6;L++)Pe(te.__webglFramebuffer[L],I,P,36064,34069+L);B(P,ze)&&Y(34067),t.unbindTexture()}else if(Ee){const L=I.texture;for(let ce=0,Me=L.length;ce<Me;ce++){const ge=L[ce],z=n.get(ge);t.bindTexture(3553,z.__webglTexture),oe(3553,ge,ze),Pe(te.__webglFramebuffer,I,ge,36064+ce,3553),B(ge,ze)&&Y(3553)}t.unbindTexture()}else{let L=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(l?L=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,fe.__webglTexture),oe(L,P,ze),Pe(te.__webglFramebuffer,I,P,36064,L),B(P,ze)&&Y(L),t.unbindTexture()}I.depthBuffer&&Be(I)}function Mt(I){const P=N(I)||l,te=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let fe=0,be=te.length;fe<be;fe++){const Ee=te[fe];if(B(Ee,P)){const ze=I.isWebGLCubeRenderTarget?34067:3553,L=n.get(Ee).__webglTexture;t.bindTexture(ze,L),Y(ze),t.unbindTexture()}}}function zt(I){if(l&&I.samples>0&&tt(I)===!1){const P=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],te=I.width,fe=I.height;let be=16384;const Ee=[],ze=I.stencilBuffer?33306:36096,L=n.get(I),ce=I.isWebGLMultipleRenderTargets===!0;if(ce)for(let Me=0;Me<P.length;Me++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let Me=0;Me<P.length;Me++){Ee.push(36064+Me),I.depthBuffer&&Ee.push(ze);const ge=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(ge===!1&&(I.depthBuffer&&(be|=256),I.stencilBuffer&&(be|=1024)),ce&&s.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[Me]),ge===!0&&(s.invalidateFramebuffer(36008,[ze]),s.invalidateFramebuffer(36009,[ze])),ce){const z=n.get(P[Me]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,z,0)}s.blitFramebuffer(0,0,te,fe,0,0,te,fe,be,9728),S&&s.invalidateFramebuffer(36008,Ee)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ce)for(let Me=0;Me<P.length;Me++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Me,36161,L.__webglColorRenderbuffer[Me]);const ge=n.get(P[Me]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Me,3553,ge,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function lt(I){return Math.min(v,I.samples)}function tt(I){const P=n.get(I);return l&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function qt(I){const P=f.render.frame;A.get(I)!==P&&(A.set(I,P),I.update())}function Nt(I,P){const te=I.encoding,fe=I.format,be=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===_a||te!==Ni&&(te===_t?l===!1?e.has("EXT_sRGB")===!0&&fe===Sn?(I.format=_a,I.minFilter=pn,I.generateMipmaps=!1):P=ru.sRGBToLinear(P):(fe!==Sn||be!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",te)),P}this.allocateTextureUnit=le,this.resetTextureUnits=ae,this.setTexture2D=se,this.setTexture2DArray=xe,this.setTexture3D=ue,this.setTextureCube=me,this.rebindTextures=yt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=tt}function Wv(s,e,t){const n=t.isWebGL2;function r(a,f=null){let l;if(a===zi)return 5121;if(a===Gd)return 32819;if(a===Vd)return 32820;if(a===Ud)return 5120;if(a===kd)return 5122;if(a===tu)return 5123;if(a===Bd)return 5124;if(a===Di)return 5125;if(a===Ri)return 5126;if(a===Hr)return n?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===Hd)return 6406;if(a===Sn)return 6408;if(a===jd)return 6409;if(a===Xd)return 6410;if(a===Oi)return 6402;if(a===gr)return 34041;if(a===qd)return 6403;if(a===Wd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===_a)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===Yd)return 36244;if(a===Zd)return 33319;if(a===$d)return 33320;if(a===Kd)return 36249;if(a===Ds||a===Rs||a===Is||a===Os)if(f===_t)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Ds)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Rs)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Is)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Os)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Ds)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Rs)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Is)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Os)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Cl||a===Ll||a===Dl||a===Rl)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Cl)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ll)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Dl)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Rl)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Jd)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Il||a===Ol)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Il)return f===_t?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Ol)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Fl||a===zl||a===Nl||a===Ul||a===kl||a===Bl||a===Gl||a===Vl||a===Hl||a===Wl||a===jl||a===Xl||a===ql||a===Yl)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Fl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===zl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Nl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ul)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===kl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Bl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Gl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Vl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Hl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Wl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===jl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Xl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ql)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Yl)return f===_t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Zl)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Zl)return f===_t?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===hr?n?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:r}}class jv extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ko extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xv={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,f=null;const l=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(l!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Xv))),p&&e.hand){f=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,n);if(p.joints[b.jointName]===void 0){const F=new ko;F.matrixAutoUpdate=!1,F.visible=!1,p.joints[b.jointName]=F,p.add(F)}const E=p.joints[b.jointName];g!==null&&(E.matrix.fromArray(g.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.jointRadius=g.radius),E.visible=g!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=m.position.distanceTo(v.position),S=.02,A=.005;p.inputState.pinching&&_>S+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),p!==null&&(p.visible=f!==null),this}}class qv extends mn{constructor(e,t,n,r,a,f,l,h,p,m){if(m=m!==void 0?m:Oi,m!==Oi&&m!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===Oi&&(n=Di),n===void 0&&m===gr&&(n=hr),super(null,r,a,f,l,h,m,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:$t,this.minFilter=h!==void 0?h:$t,this.flipY=!1,this.generateMipmaps=!1}}class Yv extends ki{constructor(e,t){super();const n=this;let r=null,a=1,f=null,l="local-floor",h=null,p=null,m=null,v=null,_=null,S=null;const A=t.getContextAttributes();let b=null,g=null;const E=[],F=new Map,G=new nn;G.layers.enable(1),G.viewport=new xt;const N=new nn;N.layers.enable(2),N.viewport=new xt;const D=[G,N],B=new jv;B.layers.enable(1),B.layers.enable(2);let Y=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=E[Q];return se===void 0&&(se=new ca,E[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=E[Q];return se===void 0&&(se=new ca,E[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=E[Q];return se===void 0&&(se=new ca,E[Q]=se),se.getHandSpace()};function U(Q){const se=F.get(Q.inputSource);se!==void 0&&se.dispatchEvent({type:Q.type,data:Q.inputSource})}function J(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",$),F.forEach(function(Q,se){Q!==void 0&&Q.disconnect(se)}),F.clear(),Y=null,T=null,e.setRenderTarget(b),_=null,v=null,m=null,r=null,g=null,le.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",J),r.addEventListener("inputsourceschange",$),A.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:r.renderState.layers===void 0?A.antialias:!0,alpha:A.alpha,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:_}),g=new hi(_.framebufferWidth,_.framebufferHeight,{format:Sn,type:zi,encoding:e.outputEncoding})}else{let se=null,xe=null,ue=null;A.depth&&(ue=A.stencil?35056:33190,se=A.stencil?gr:Oi,xe=A.stencil?hr:Di);const me={colorFormat:e.outputEncoding===_t?35907:32856,depthFormat:ue,scaleFactor:a};m=new XRWebGLBinding(r,t),v=m.createProjectionLayer(me),r.updateRenderState({layers:[v]}),g=new hi(v.textureWidth,v.textureHeight,{format:Sn,type:zi,depthTexture:new qv(v.textureWidth,v.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:A.stencil,encoding:e.outputEncoding,samples:A.antialias?4:0});const re=e.properties.get(g);re.__ignoreDepthValues=v.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),h=null,f=await r.requestReferenceSpace(l),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function $(Q){const se=r.inputSources;for(let xe=0;xe<se.length;xe++){const ue=se[xe].handedness==="right"?1:0;F.set(se[xe],E[ue])}for(let xe=0;xe<Q.removed.length;xe++){const ue=Q.removed[xe],me=F.get(ue);me&&(me.dispatchEvent({type:"disconnected",data:ue}),F.delete(ue))}for(let xe=0;xe<Q.added.length;xe++){const ue=Q.added[xe],me=F.get(ue);me&&me.dispatchEvent({type:"connected",data:ue})}}const we=new V,pe=new V;function j(Q,se,xe){we.setFromMatrixPosition(se.matrixWorld),pe.setFromMatrixPosition(xe.matrixWorld);const ue=we.distanceTo(pe),me=se.projectionMatrix.elements,re=xe.projectionMatrix.elements,De=me[14]/(me[10]-1),oe=me[14]/(me[10]+1),at=(me[9]+1)/me[5],He=(me[9]-1)/me[5],ke=(me[8]-1)/me[0],Pe=(re[8]+1)/re[0],Ze=De*ke,Ye=De*Pe,Be=ue/(-ke+Pe),yt=Be*-ke;se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(yt),Q.translateZ(Be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const Ve=De+Be,Mt=oe+Be,zt=Ze-yt,lt=Ye+(ue-yt),tt=at*oe/Mt*Ve,qt=He*oe/Mt*Ve;Q.projectionMatrix.makePerspective(zt,lt,tt,qt,Ve,Mt)}function H(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;B.near=N.near=G.near=Q.near,B.far=N.far=G.far=Q.far,(Y!==B.near||T!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),Y=B.near,T=B.far);const se=Q.parent,xe=B.cameras;H(B,se);for(let me=0;me<xe.length;me++)H(xe[me],se);B.matrixWorld.decompose(B.position,B.quaternion,B.scale),Q.position.copy(B.position),Q.quaternion.copy(B.quaternion),Q.scale.copy(B.scale),Q.matrix.copy(B.matrix),Q.matrixWorld.copy(B.matrixWorld);const ue=Q.children;for(let me=0,re=ue.length;me<re;me++)ue[me].updateMatrixWorld(!0);xe.length===2?j(B,G,N):B.projectionMatrix.copy(G.projectionMatrix)},this.getCamera=function(){return B},this.getFoveation=function(){if(v!==null)return v.fixedFoveation;if(_!==null)return _.fixedFoveation},this.setFoveation=function(Q){v!==null&&(v.fixedFoveation=Q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Q)};let q=null;function ae(Q,se){if(p=se.getViewerPose(h||f),S=se,p!==null){const ue=p.views;_!==null&&(e.setRenderTargetFramebuffer(g,_.framebuffer),e.setRenderTarget(g));let me=!1;ue.length!==B.cameras.length&&(B.cameras.length=0,me=!0);for(let re=0;re<ue.length;re++){const De=ue[re];let oe=null;if(_!==null)oe=_.getViewport(De);else{const He=m.getViewSubImage(v,De);oe=He.viewport,re===0&&(e.setRenderTargetTextures(g,He.colorTexture,v.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(g))}let at=D[re];at===void 0&&(at=new nn,at.layers.enable(re),at.viewport=new xt,D[re]=at),at.matrix.fromArray(De.transform.matrix),at.projectionMatrix.fromArray(De.projectionMatrix),at.viewport.set(oe.x,oe.y,oe.width,oe.height),re===0&&B.matrix.copy(at.matrix),me===!0&&B.cameras.push(at)}}const xe=r.inputSources;for(let ue=0;ue<E.length;ue++){const me=xe[ue],re=F.get(me);re!==void 0&&re.update(me,se,h||f)}q&&q(Q,se),S=null}const le=new fu;le.setAnimationLoop(ae),this.setAnimationLoop=function(Q){q=Q},this.dispose=function(){}}}function Zv(s,e){function t(b,g){b.fogColor.value.copy(g.color),g.isFog?(b.fogNear.value=g.near,b.fogFar.value=g.far):g.isFogExp2&&(b.fogDensity.value=g.density)}function n(b,g,E,F,G){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(b,g):g.isMeshToonMaterial?(r(b,g),m(b,g)):g.isMeshPhongMaterial?(r(b,g),p(b,g)):g.isMeshStandardMaterial?(r(b,g),v(b,g),g.isMeshPhysicalMaterial&&_(b,g,G)):g.isMeshMatcapMaterial?(r(b,g),S(b,g)):g.isMeshDepthMaterial?r(b,g):g.isMeshDistanceMaterial?(r(b,g),A(b,g)):g.isMeshNormalMaterial?r(b,g):g.isLineBasicMaterial?(a(b,g),g.isLineDashedMaterial&&f(b,g)):g.isPointsMaterial?l(b,g,E,F):g.isSpriteMaterial?h(b,g):g.isShadowMaterial?(b.color.value.copy(g.color),b.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(b,g){b.opacity.value=g.opacity,g.color&&b.diffuse.value.copy(g.color),g.emissive&&b.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(b.map.value=g.map),g.alphaMap&&(b.alphaMap.value=g.alphaMap),g.bumpMap&&(b.bumpMap.value=g.bumpMap,b.bumpScale.value=g.bumpScale,g.side===En&&(b.bumpScale.value*=-1)),g.displacementMap&&(b.displacementMap.value=g.displacementMap,b.displacementScale.value=g.displacementScale,b.displacementBias.value=g.displacementBias),g.emissiveMap&&(b.emissiveMap.value=g.emissiveMap),g.normalMap&&(b.normalMap.value=g.normalMap,b.normalScale.value.copy(g.normalScale),g.side===En&&b.normalScale.value.negate()),g.specularMap&&(b.specularMap.value=g.specularMap),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest);const E=e.get(g).envMap;if(E&&(b.envMap.value=E,b.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=g.reflectivity,b.ior.value=g.ior,b.refractionRatio.value=g.refractionRatio),g.lightMap){b.lightMap.value=g.lightMap;const N=s.physicallyCorrectLights!==!0?Math.PI:1;b.lightMapIntensity.value=g.lightMapIntensity*N}g.aoMap&&(b.aoMap.value=g.aoMap,b.aoMapIntensity.value=g.aoMapIntensity);let F;g.map?F=g.map:g.specularMap?F=g.specularMap:g.displacementMap?F=g.displacementMap:g.normalMap?F=g.normalMap:g.bumpMap?F=g.bumpMap:g.roughnessMap?F=g.roughnessMap:g.metalnessMap?F=g.metalnessMap:g.alphaMap?F=g.alphaMap:g.emissiveMap?F=g.emissiveMap:g.clearcoatMap?F=g.clearcoatMap:g.clearcoatNormalMap?F=g.clearcoatNormalMap:g.clearcoatRoughnessMap?F=g.clearcoatRoughnessMap:g.iridescenceMap?F=g.iridescenceMap:g.iridescenceThicknessMap?F=g.iridescenceThicknessMap:g.specularIntensityMap?F=g.specularIntensityMap:g.specularColorMap?F=g.specularColorMap:g.transmissionMap?F=g.transmissionMap:g.thicknessMap?F=g.thicknessMap:g.sheenColorMap?F=g.sheenColorMap:g.sheenRoughnessMap&&(F=g.sheenRoughnessMap),F!==void 0&&(F.isWebGLRenderTarget&&(F=F.texture),F.matrixAutoUpdate===!0&&F.updateMatrix(),b.uvTransform.value.copy(F.matrix));let G;g.aoMap?G=g.aoMap:g.lightMap&&(G=g.lightMap),G!==void 0&&(G.isWebGLRenderTarget&&(G=G.texture),G.matrixAutoUpdate===!0&&G.updateMatrix(),b.uv2Transform.value.copy(G.matrix))}function a(b,g){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity}function f(b,g){b.dashSize.value=g.dashSize,b.totalSize.value=g.dashSize+g.gapSize,b.scale.value=g.scale}function l(b,g,E,F){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity,b.size.value=g.size*E,b.scale.value=F*.5,g.map&&(b.map.value=g.map),g.alphaMap&&(b.alphaMap.value=g.alphaMap),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest);let G;g.map?G=g.map:g.alphaMap&&(G=g.alphaMap),G!==void 0&&(G.matrixAutoUpdate===!0&&G.updateMatrix(),b.uvTransform.value.copy(G.matrix))}function h(b,g){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity,b.rotation.value=g.rotation,g.map&&(b.map.value=g.map),g.alphaMap&&(b.alphaMap.value=g.alphaMap),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest);let E;g.map?E=g.map:g.alphaMap&&(E=g.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),b.uvTransform.value.copy(E.matrix))}function p(b,g){b.specular.value.copy(g.specular),b.shininess.value=Math.max(g.shininess,1e-4)}function m(b,g){g.gradientMap&&(b.gradientMap.value=g.gradientMap)}function v(b,g){b.roughness.value=g.roughness,b.metalness.value=g.metalness,g.roughnessMap&&(b.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(b.metalnessMap.value=g.metalnessMap),e.get(g).envMap&&(b.envMapIntensity.value=g.envMapIntensity)}function _(b,g,E){b.ior.value=g.ior,g.sheen>0&&(b.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),b.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(b.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(b.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(b.clearcoat.value=g.clearcoat,b.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(b.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(b.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),b.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===En&&b.clearcoatNormalScale.value.negate())),g.iridescence>0&&(b.iridescence.value=g.iridescence,b.iridescenceIOR.value=g.iridescenceIOR,b.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(b.iridescenceMap.value=g.iridescenceMap),g.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=g.iridescenceThicknessMap)),g.transmission>0&&(b.transmission.value=g.transmission,b.transmissionSamplerMap.value=E.texture,b.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(b.transmissionMap.value=g.transmissionMap),b.thickness.value=g.thickness,g.thicknessMap&&(b.thicknessMap.value=g.thicknessMap),b.attenuationDistance.value=g.attenuationDistance,b.attenuationColor.value.copy(g.attenuationColor)),b.specularIntensity.value=g.specularIntensity,b.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(b.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(b.specularColorMap.value=g.specularColorMap)}function S(b,g){g.matcap&&(b.matcap.value=g.matcap)}function A(b,g){b.referencePosition.value.copy(g.referencePosition),b.nearDistance.value=g.nearDistance,b.farDistance.value=g.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function $v(){const s=Wo("canvas");return s.style.display="block",s}function xu(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:$v(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,f=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,l=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,h=s.powerPreference!==void 0?s.powerPreference:"default",p=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let m;t!==null?m=t.getContextAttributes().alpha:m=s.alpha!==void 0?s.alpha:!1;let v=null,_=null;const S=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ni,this.physicallyCorrectLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const b=this;let g=!1,E=0,F=0,G=null,N=-1,D=null;const B=new xt,Y=new xt;let T=null,U=e.width,J=e.height,$=1,we=null,pe=null;const j=new xt(0,0,U,J),H=new xt(0,0,U,J);let q=!1;const ae=new Ea;let le=!1,Q=!1,se=null;const xe=new St,ue=new Ge,me=new V,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return G===null?$:1}let oe=t;function at(R,X){for(let ee=0;ee<R.length;ee++){const K=R[ee],ie=e.getContext(K,X);if(ie!==null)return ie}return null}try{const R={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:f,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ma}`),e.addEventListener("webglcontextlost",z,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",_e,!1),oe===null){const X=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&X.shift(),oe=at(X,R),oe===null)throw at(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}oe.getShaderPrecisionFormat===void 0&&(oe.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let He,ke,Pe,Ze,Ye,Be,yt,Ve,Mt,zt,lt,tt,qt,Nt,I,P,te,fe,be,Ee,ze,L,ce;function Me(){He=new cg(oe),ke=new ng(oe,He,s),He.init(ke),L=new Wv(oe,He,ke),Pe=new Vv(oe,He,ke),Ze=new dg,Ye=new Lv,Be=new Hv(oe,He,Pe,Ye,ke,L,Ze),yt=new rg(b),Ve=new lg(b),Mt=new wh(oe,ke),ce=new eg(oe,He,Mt,ke),zt=new ug(oe,Mt,Ze,ce),lt=new gg(oe,zt,Mt,Ze),be=new mg(oe,ke,Be),P=new ig(Ye),tt=new Cv(b,yt,Ve,He,ke,ce,P),qt=new Zv(b,Ye),Nt=new Rv,I=new Uv(He,ke),fe=new Qm(b,yt,Pe,lt,m,f),te=new Gv(b,lt,ke),Ee=new tg(oe,He,Ze,ke),ze=new fg(oe,He,Ze,ke),Ze.programs=tt.programs,b.capabilities=ke,b.extensions=He,b.properties=Ye,b.renderLists=Nt,b.shadowMap=te,b.state=Pe,b.info=Ze}Me();const ge=new Yv(b,oe);this.xr=ge,this.getContext=function(){return oe},this.getContextAttributes=function(){return oe.getContextAttributes()},this.forceContextLoss=function(){const R=He.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=He.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(U,J,!1))},this.getSize=function(R){return R.set(U,J)},this.setSize=function(R,X,ee){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,J=X,e.width=Math.floor(R*$),e.height=Math.floor(X*$),ee!==!1&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(U*$,J*$).floor()},this.setDrawingBufferSize=function(R,X,ee){U=R,J=X,$=ee,e.width=Math.floor(R*ee),e.height=Math.floor(X*ee),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(j)},this.setViewport=function(R,X,ee,K){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,X,ee,K),Pe.viewport(B.copy(j).multiplyScalar($).floor())},this.getScissor=function(R){return R.copy(H)},this.setScissor=function(R,X,ee,K){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,X,ee,K),Pe.scissor(Y.copy(H).multiplyScalar($).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(R){Pe.setScissorTest(q=R)},this.setOpaqueSort=function(R){we=R},this.setTransparentSort=function(R){pe=R},this.getClearColor=function(R){return R.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(R=!0,X=!0,ee=!0){let K=0;R&&(K|=16384),X&&(K|=256),ee&&(K|=1024),oe.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",z,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",_e,!1),Nt.dispose(),I.dispose(),Ye.dispose(),yt.dispose(),Ve.dispose(),lt.dispose(),ce.dispose(),tt.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ot),ge.removeEventListener("sessionend",it),se&&(se.dispose(),se=null),pt.stop()};function z(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const R=Ze.autoReset,X=te.enabled,ee=te.autoUpdate,K=te.needsUpdate,ie=te.type;Me(),Ze.autoReset=R,te.enabled=X,te.autoUpdate=ee,te.needsUpdate=K,te.type=ie}function _e(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Re(R){const X=R.target;X.removeEventListener("dispose",Re),Te(X)}function Te(R){Le(R),Ye.remove(R)}function Le(R){const X=Ye.get(R).programs;X!==void 0&&(X.forEach(function(ee){tt.releaseProgram(ee)}),R.isShaderMaterial&&tt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ee,K,ie,Fe){X===null&&(X=re);const We=ie.isMesh&&ie.matrixWorld.determinant()<0,qe=es(R,X,ee,K,ie);Pe.setMaterial(K,We);let je=ee.index;const Ke=ee.attributes.position;if(je===null){if(Ke===void 0||Ke.count===0)return}else if(je.count===0)return;let Je=1;K.wireframe===!0&&(je=zt.getWireframeAttribute(ee),Je=2),ce.setup(ie,K,qe,ee,je);let et,mt=Ee;je!==null&&(et=Mt.get(je),mt=ze,mt.setIndex(et));const An=je!==null?je.count:Ke.count,_n=ee.drawRange.start*Je,Bn=ee.drawRange.count*Je,Yt=Fe!==null?Fe.start*Je:0,nt=Fe!==null?Fe.count*Je:1/0,ei=Math.max(_n,Yt),bt=Math.min(An,_n+Bn,Yt+nt)-1,Bt=Math.max(0,bt-ei+1);if(Bt!==0){if(ie.isMesh)K.wireframe===!0?(Pe.setLineWidth(K.wireframeLinewidth*De()),mt.setMode(1)):mt.setMode(4);else if(ie.isLine){let Pn=K.linewidth;Pn===void 0&&(Pn=1),Pe.setLineWidth(Pn*De()),ie.isLineSegments?mt.setMode(1):ie.isLineLoop?mt.setMode(2):mt.setMode(3)}else ie.isPoints?mt.setMode(0):ie.isSprite&&mt.setMode(4);if(ie.isInstancedMesh)mt.renderInstances(ei,Bt,ie.count);else if(ee.isInstancedBufferGeometry){const Pn=Math.min(ee.instanceCount,ee._maxInstanceCount);mt.renderInstances(ei,Bt,Pn)}else mt.render(ei,Bt)}},this.compile=function(R,X){_=I.get(R),_.init(),A.push(_),R.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),_.setupLights(b.physicallyCorrectLights),R.traverse(function(ee){const K=ee.material;if(K)if(Array.isArray(K))for(let ie=0;ie<K.length;ie++){const Fe=K[ie];vn(Fe,R,ee)}else vn(K,R,ee)}),A.pop(),_=null};let ye=null;function Ne(R){ye&&ye(R)}function ot(){pt.stop()}function it(){pt.start()}const pt=new fu;pt.setAnimationLoop(Ne),typeof self!="undefined"&&pt.setContext(self),this.setAnimationLoop=function(R){ye=R,ge.setAnimationLoop(R),R===null?pt.stop():pt.start()},ge.addEventListener("sessionstart",ot),ge.addEventListener("sessionend",it),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;R.autoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(X),X=ge.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,X,G),_=I.get(R,A.length),_.init(),A.push(_),xe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ae.setFromProjectionMatrix(xe),Q=this.localClippingEnabled,le=P.init(this.clippingPlanes,Q,X),v=Nt.get(R,S.length),v.init(),S.push(v),ln(R,X,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(we,pe),le===!0&&P.beginShadows();const ee=_.state.shadowsArray;if(te.render(ee,R,X),le===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(v,R),_.setupLights(b.physicallyCorrectLights),X.isArrayCamera){const K=X.cameras;for(let ie=0,Fe=K.length;ie<Fe;ie++){const We=K[ie];mi(v,R,We,We.viewport)}}else mi(v,R,X);G!==null&&(Be.updateMultisampleRenderTarget(G),Be.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(b,R,X),ce.resetDefaultState(),N=-1,D=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,S.pop(),S.length>0?v=S[S.length-1]:v=null};function ln(R,X,ee,K){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ae.intersectsSprite(R)){K&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xe);const We=lt.update(R),qe=R.material;qe.visible&&v.push(R,We,qe,ee,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Ze.render.frame&&(R.skeleton.update(),R.skeleton.frame=Ze.render.frame),!R.frustumCulled||ae.intersectsObject(R))){K&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xe);const We=lt.update(R),qe=R.material;if(Array.isArray(qe)){const je=We.groups;for(let Ke=0,Je=je.length;Ke<Je;Ke++){const et=je[Ke],mt=qe[et.materialIndex];mt&&mt.visible&&v.push(R,We,mt,ee,me.z,et)}}else qe.visible&&v.push(R,We,qe,ee,me.z,null)}}const Fe=R.children;for(let We=0,qe=Fe.length;We<qe;We++)ln(Fe[We],X,ee,K)}function mi(R,X,ee,K){const ie=R.opaque,Fe=R.transmissive,We=R.transparent;_.setupLightsView(ee),Fe.length>0&&Qo(ie,X,ee),K&&Pe.viewport(B.copy(K)),ie.length>0&&Ut(ie,X,ee),Fe.length>0&&Ut(Fe,X,ee),We.length>0&&Ut(We,X,ee),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Qo(R,X,ee){const K=ke.isWebGL2;se===null&&(se=new hi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?Hr:zi,minFilter:Yo,samples:K&&a===!0?4:0})),b.getDrawingBufferSize(ue),K?se.setSize(ue.x,ue.y):se.setSize(xa(ue.x),xa(ue.y));const ie=b.getRenderTarget();b.setRenderTarget(se),b.clear();const Fe=b.toneMapping;b.toneMapping=Kn,Ut(R,X,ee),b.toneMapping=Fe,Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se),b.setRenderTarget(ie)}function Ut(R,X,ee){const K=X.isScene===!0?X.overrideMaterial:null;for(let ie=0,Fe=R.length;ie<Fe;ie++){const We=R[ie],qe=We.object,je=We.geometry,Ke=K===null?We.material:K,Je=We.group;qe.layers.test(ee.layers)&&gn(qe,X,ee,je,Ke,Je)}}function gn(R,X,ee,K,ie,Fe){R.onBeforeRender(b,X,ee,K,ie,Fe),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(b,X,ee,K,R,Fe),ie.transparent===!0&&ie.side===pi?(ie.side=En,ie.needsUpdate=!0,b.renderBufferDirect(ee,X,K,ie,R,Fe),ie.side=Vr,ie.needsUpdate=!0,b.renderBufferDirect(ee,X,K,ie,R,Fe),ie.side=pi):b.renderBufferDirect(ee,X,K,ie,R,Fe),R.onAfterRender(b,X,ee,K,ie,Fe)}function vn(R,X,ee){X.isScene!==!0&&(X=re);const K=Ye.get(R),ie=_.state.lights,Fe=_.state.shadowsArray,We=ie.state.version,qe=tt.getParameters(R,ie.state,Fe,X,ee),je=tt.getProgramCacheKey(qe);let Ke=K.programs;K.environment=R.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(R.isMeshStandardMaterial?Ve:yt).get(R.envMap||K.environment),Ke===void 0&&(R.addEventListener("dispose",Re),Ke=new Map,K.programs=Ke);let Je=Ke.get(je);if(Je!==void 0){if(K.currentProgram===Je&&K.lightsStateVersion===We)return br(R,qe),Je}else qe.uniforms=tt.getUniforms(R),R.onBuild(ee,qe,b),R.onBeforeCompile(qe,b),Je=tt.acquireProgram(qe,je),Ke.set(je,Je),K.uniforms=qe.uniforms;const et=K.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=P.uniform),br(R,qe),K.needsLights=Ue(R),K.lightsStateVersion=We,K.needsLights&&(et.ambientLightColor.value=ie.state.ambient,et.lightProbe.value=ie.state.probe,et.directionalLights.value=ie.state.directional,et.directionalLightShadows.value=ie.state.directionalShadow,et.spotLights.value=ie.state.spot,et.spotLightShadows.value=ie.state.spotShadow,et.rectAreaLights.value=ie.state.rectArea,et.ltc_1.value=ie.state.rectAreaLTC1,et.ltc_2.value=ie.state.rectAreaLTC2,et.pointLights.value=ie.state.point,et.pointLightShadows.value=ie.state.pointShadow,et.hemisphereLights.value=ie.state.hemi,et.directionalShadowMap.value=ie.state.directionalShadowMap,et.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,et.spotShadowMap.value=ie.state.spotShadowMap,et.spotShadowMatrix.value=ie.state.spotShadowMatrix,et.pointShadowMap.value=ie.state.pointShadowMap,et.pointShadowMatrix.value=ie.state.pointShadowMatrix);const mt=Je.getUniforms(),An=Ho.seqWithValue(mt.seq,et);return K.currentProgram=Je,K.uniformsList=An,Je}function br(R,X){const ee=Ye.get(R);ee.outputEncoding=X.outputEncoding,ee.instancing=X.instancing,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function es(R,X,ee,K,ie){X.isScene!==!0&&(X=re),Be.resetTextureUnits();const Fe=X.fog,We=K.isMeshStandardMaterial?X.environment:null,qe=G===null?b.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Ni,je=(K.isMeshStandardMaterial?Ve:yt).get(K.envMap||We),Ke=K.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!K.normalMap&&!!ee.attributes.tangent,et=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,An=!!ee.morphAttributes.color,_n=K.toneMapped?b.toneMapping:Kn,Bn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Yt=Bn!==void 0?Bn.length:0,nt=Ye.get(K),ei=_.state.lights;if(le===!0&&(Q===!0||R!==D)){const cn=R===D&&K.id===N;P.setState(K,R,cn)}let bt=!1;K.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==ei.state.version||nt.outputEncoding!==qe||ie.isInstancedMesh&&nt.instancing===!1||!ie.isInstancedMesh&&nt.instancing===!0||ie.isSkinnedMesh&&nt.skinning===!1||!ie.isSkinnedMesh&&nt.skinning===!0||nt.envMap!==je||K.fog===!0&&nt.fog!==Fe||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==P.numPlanes||nt.numIntersection!==P.numIntersection)||nt.vertexAlphas!==Ke||nt.vertexTangents!==Je||nt.morphTargets!==et||nt.morphNormals!==mt||nt.morphColors!==An||nt.toneMapping!==_n||ke.isWebGL2===!0&&nt.morphTargetsCount!==Yt)&&(bt=!0):(bt=!0,nt.__version=K.version);let Bt=nt.currentProgram;bt===!0&&(Bt=vn(K,X,ie));let Pn=!1,Cn=!1,gi=!1;const Dt=Bt.getUniforms(),vi=nt.uniforms;if(Pe.useProgram(Bt.program)&&(Pn=!0,Cn=!0,gi=!0),K.id!==N&&(N=K.id,Cn=!0),Pn||D!==R){if(Dt.setValue(oe,"projectionMatrix",R.projectionMatrix),ke.logarithmicDepthBuffer&&Dt.setValue(oe,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),D!==R&&(D=R,Cn=!0,gi=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const cn=Dt.map.cameraPosition;cn!==void 0&&cn.setValue(oe,me.setFromMatrixPosition(R.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dt.setValue(oe,"isOrthographic",R.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||ie.isSkinnedMesh)&&Dt.setValue(oe,"viewMatrix",R.matrixWorldInverse)}if(ie.isSkinnedMesh){Dt.setOptional(oe,ie,"bindMatrix"),Dt.setOptional(oe,ie,"bindMatrixInverse");const cn=ie.skeleton;cn&&(ke.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Dt.setValue(oe,"boneTexture",cn.boneTexture,Be),Dt.setValue(oe,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ti=ee.morphAttributes;return(ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0&&ke.isWebGL2===!0)&&be.update(ie,ee,K,Bt),(Cn||nt.receiveShadow!==ie.receiveShadow)&&(nt.receiveShadow=ie.receiveShadow,Dt.setValue(oe,"receiveShadow",ie.receiveShadow)),Cn&&(Dt.setValue(oe,"toneMappingExposure",b.toneMappingExposure),nt.needsLights&&Tn(vi,gi),Fe&&K.fog===!0&&qt.refreshFogUniforms(vi,Fe),qt.refreshMaterialUniforms(vi,K,$,J,se),Ho.upload(oe,nt.uniformsList,vi,Be)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ho.upload(oe,nt.uniformsList,vi,Be),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dt.setValue(oe,"center",ie.center),Dt.setValue(oe,"modelViewMatrix",ie.modelViewMatrix),Dt.setValue(oe,"normalMatrix",ie.normalMatrix),Dt.setValue(oe,"modelMatrix",ie.matrixWorld),Bt}function Tn(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Ue(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,X,ee){Ye.get(R.texture).__webglTexture=X,Ye.get(R.depthTexture).__webglTexture=ee;const K=Ye.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=ee===void 0,K.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){const ee=Ye.get(R);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,ee=0){G=R,E=X,F=ee;let K=!0;if(R){const je=Ye.get(R);je.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(36160,null),K=!1):je.__webglFramebuffer===void 0?Be.setupRenderTarget(R):je.__hasExternalTextures&&Be.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture)}let ie=null,Fe=!1,We=!1;if(R){const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture)&&(We=!0);const Ke=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ie=Ke[X],Fe=!0):ke.isWebGL2&&R.samples>0&&Be.useMultisampledRTT(R)===!1?ie=Ye.get(R).__webglMultisampledFramebuffer:ie=Ke,B.copy(R.viewport),Y.copy(R.scissor),T=R.scissorTest}else B.copy(j).multiplyScalar($).floor(),Y.copy(H).multiplyScalar($).floor(),T=q;if(Pe.bindFramebuffer(36160,ie)&&ke.drawBuffers&&K&&Pe.drawBuffers(R,ie),Pe.viewport(B),Pe.scissor(Y),Pe.setScissorTest(T),Fe){const je=Ye.get(R.texture);oe.framebufferTexture2D(36160,36064,34069+X,je.__webglTexture,ee)}else if(We){const je=Ye.get(R.texture),Ke=X||0;oe.framebufferTextureLayer(36160,36064,je.__webglTexture,ee||0,Ke)}N=-1},this.readRenderTargetPixels=function(R,X,ee,K,ie,Fe,We){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(qe=qe[We]),qe){Pe.bindFramebuffer(36160,qe);try{const je=R.texture,Ke=je.format,Je=je.type;if(Ke!==Sn&&L.convert(Ke)!==oe.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=Je===Hr&&(He.has("EXT_color_buffer_half_float")||ke.isWebGL2&&He.has("EXT_color_buffer_float"));if(Je!==zi&&L.convert(Je)!==oe.getParameter(35738)&&!(Je===Ri&&(ke.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-K&&ee>=0&&ee<=R.height-ie&&oe.readPixels(X,ee,K,ie,L.convert(Ke),L.convert(Je),Fe)}finally{const je=G!==null?Ye.get(G).__webglFramebuffer:null;Pe.bindFramebuffer(36160,je)}}},this.copyFramebufferToTexture=function(R,X,ee=0){const K=Math.pow(2,-ee),ie=Math.floor(X.image.width*K),Fe=Math.floor(X.image.height*K);Be.setTexture2D(X,0),oe.copyTexSubImage2D(3553,ee,0,0,R.x,R.y,ie,Fe),Pe.unbindTexture()},this.copyTextureToTexture=function(R,X,ee,K=0){const ie=X.image.width,Fe=X.image.height,We=L.convert(ee.format),qe=L.convert(ee.type);Be.setTexture2D(ee,0),oe.pixelStorei(37440,ee.flipY),oe.pixelStorei(37441,ee.premultiplyAlpha),oe.pixelStorei(3317,ee.unpackAlignment),X.isDataTexture?oe.texSubImage2D(3553,K,R.x,R.y,ie,Fe,We,qe,X.image.data):X.isCompressedTexture?oe.compressedTexSubImage2D(3553,K,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,We,X.mipmaps[0].data):oe.texSubImage2D(3553,K,R.x,R.y,We,qe,X.image),K===0&&ee.generateMipmaps&&oe.generateMipmap(3553),Pe.unbindTexture()},this.copyTextureToTexture3D=function(R,X,ee,K,ie=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=R.max.x-R.min.x+1,We=R.max.y-R.min.y+1,qe=R.max.z-R.min.z+1,je=L.convert(K.format),Ke=L.convert(K.type);let Je;if(K.isData3DTexture)Be.setTexture3D(K,0),Je=32879;else if(K.isDataArrayTexture)Be.setTexture2DArray(K,0),Je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}oe.pixelStorei(37440,K.flipY),oe.pixelStorei(37441,K.premultiplyAlpha),oe.pixelStorei(3317,K.unpackAlignment);const et=oe.getParameter(3314),mt=oe.getParameter(32878),An=oe.getParameter(3316),_n=oe.getParameter(3315),Bn=oe.getParameter(32877),Yt=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;oe.pixelStorei(3314,Yt.width),oe.pixelStorei(32878,Yt.height),oe.pixelStorei(3316,R.min.x),oe.pixelStorei(3315,R.min.y),oe.pixelStorei(32877,R.min.z),ee.isDataTexture||ee.isData3DTexture?oe.texSubImage3D(Je,ie,X.x,X.y,X.z,Fe,We,qe,je,Ke,Yt.data):ee.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),oe.compressedTexSubImage3D(Je,ie,X.x,X.y,X.z,Fe,We,qe,je,Yt.data)):oe.texSubImage3D(Je,ie,X.x,X.y,X.z,Fe,We,qe,je,Ke,Yt),oe.pixelStorei(3314,et),oe.pixelStorei(32878,mt),oe.pixelStorei(3316,An),oe.pixelStorei(3315,_n),oe.pixelStorei(32877,Bn),ie===0&&K.generateMipmaps&&oe.generateMipmap(Je),Pe.unbindTexture()},this.initTexture=function(R){Be.setTexture2D(R,0),Pe.unbindTexture()},this.resetState=function(){E=0,F=0,G=null,Pe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Kv extends xu{}Kv.prototype.isWebGL1Renderer=!0;class Aa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new Aa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Jv extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Qv extends Ft{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class yr extends Ft{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ic=new V,Oc=new V,Fc=new St,ua=new wa,Bo=new Zo;class e0 extends an{constructor(e=new Jt,t=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Ic.fromBufferAttribute(t,r-1),Oc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ic.distanceTo(Oc);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,f=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Bo.radius+=a,e.ray.intersectsSphere(Bo)===!1)return;Fc.copy(r).invert(),ua.copy(e.ray).applyMatrix4(Fc);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,p=new V,m=new V,v=new V,_=new V,S=this.isLineSegments?2:1,A=n.index,g=n.attributes.position;if(A!==null){const E=Math.max(0,f.start),F=Math.min(A.count,f.start+f.count);for(let G=E,N=F-1;G<N;G+=S){const D=A.getX(G),B=A.getX(G+1);if(p.fromBufferAttribute(g,D),m.fromBufferAttribute(g,B),ua.distanceSqToSegment(p,m,_,v)>h)continue;_.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(_);T<e.near||T>e.far||t.push({distance:T,point:v.clone().applyMatrix4(this.matrixWorld),index:G,face:null,faceIndex:null,object:this})}}else{const E=Math.max(0,f.start),F=Math.min(g.count,f.start+f.count);for(let G=E,N=F-1;G<N;G+=S){if(p.fromBufferAttribute(g,G),m.fromBufferAttribute(g,G+1),ua.distanceSqToSegment(p,m,_,v)>h)continue;_.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(_);B<e.near||B>e.far||t.push({distance:B,point:v.clone().applyMatrix4(this.matrixWorld),index:G,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=r.length;a<f;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}const zc=new V,Nc=new V;class Pa extends e0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)zc.fromBufferAttribute(t,r),Nc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+zc.distanceTo(Nc);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class t0 extends Ft{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class n0 extends mn{constructor(e,t,n,r,a,f,l,h,p){super(e,t,n,r,a,f,l,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}new V;new V;new V;new V;new Fn;class Ca extends Jt{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,f=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:f,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(f+l,Math.PI);let p=0;const m=[],v=new V,_=new V,S=[],A=[],b=[],g=[];for(let E=0;E<=n;E++){const F=[],G=E/n;let N=0;E==0&&f==0?N=.5/t:E==n&&h==Math.PI&&(N=-.5/t);for(let D=0;D<=t;D++){const B=D/t;v.x=-e*Math.cos(r+B*a)*Math.sin(f+G*l),v.y=e*Math.cos(f+G*l),v.z=e*Math.sin(r+B*a)*Math.sin(f+G*l),A.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),g.push(B+N,1-G),F.push(p++)}m.push(F)}for(let E=0;E<n;E++)for(let F=0;F<t;F++){const G=m[E][F+1],N=m[E][F],D=m[E+1][F],B=m[E+1][F+1];(E!==0||f>0)&&S.push(G,N,B),(E!==n-1||h<Math.PI)&&S.push(N,D,B)}this.setIndex(S),this.setAttribute("position",new sn(A,3)),this.setAttribute("normal",new sn(b,3)),this.setAttribute("uv",new sn(g,2))}static fromJSON(e){return new Ca(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class i0 extends Ft{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class r0 extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yu extends Ft{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class o0 extends yu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class s0 extends Ft{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class a0 extends Ft{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class l0 extends Ft{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class bu extends Ft{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class c0 extends Ft{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ie(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class u0 extends yr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const f0={ShadowMaterial:i0,SpriteMaterial:Qv,RawShaderMaterial:r0,ShaderMaterial:Jn,PointsMaterial:t0,MeshPhysicalMaterial:o0,MeshStandardMaterial:yu,MeshPhongMaterial:s0,MeshToonMaterial:a0,MeshNormalMaterial:l0,MeshLambertMaterial:bu,MeshDepthMaterial:vu,MeshDistanceMaterial:_u,MeshBasicMaterial:$o,MeshMatcapMaterial:c0,LineDashedMaterial:u0,LineBasicMaterial:yr,Material:Ft};Ft.fromType=function(s){return new f0[s]};class Mu extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Uc=new St,kc=new V,Bc=new V;class d0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gc=new St,kr=new V,fa=new V;class h0 extends d0{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),kr.setFromMatrixPosition(e.matrixWorld),n.position.copy(kr),fa.copy(n.position),fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fa),n.updateMatrixWorld(),r.makeTranslation(-kr.x,-kr.y,-kr.z),Gc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc)}}class p0 extends Mu{constructor(e,t,n=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new h0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class m0 extends Mu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const wu="\\[\\]\\.:\\/",La="[^"+wu+"]",g0="[^"+wu.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",La);/(WCOD+)?/.source.replace("WCOD",g0);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",La);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",La);class v0{constructor(e,t,n=0,r=1/0){this.ray=new wa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ba(e,this,n,t),n.sort(Vc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)ba(e[r],this,n,t);return n.sort(Vc),n}}function Vc(s,e){return s.distance-e.distance}function ba(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const r=s.children;for(let a=0,f=r.length;a<f;a++)ba(r[a],e,t,!0)}}class Hc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Dn=new Uint32Array(512),Rn=new Uint32Array(512);for(let s=0;s<256;++s){const e=s-127;e<-27?(Dn[s]=0,Dn[s|256]=32768,Rn[s]=24,Rn[s|256]=24):e<-14?(Dn[s]=1024>>-e-14,Dn[s|256]=1024>>-e-14|32768,Rn[s]=-e-1,Rn[s|256]=-e-1):e<=15?(Dn[s]=e+15<<10,Dn[s|256]=e+15<<10|32768,Rn[s]=13,Rn[s|256]=13):e<128?(Dn[s]=31744,Dn[s|256]=64512,Rn[s]=24,Rn[s|256]=24):(Dn[s]=31744,Dn[s|256]=64512,Rn[s]=13,Rn[s|256]=13)}const Su=new Uint32Array(2048),Yr=new Uint32Array(64),_0=new Uint32Array(64);for(let s=1;s<1024;++s){let e=s<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Su[s]=e|t}for(let s=1024;s<2048;++s)Su[s]=939524096+(s-1024<<13);for(let s=1;s<31;++s)Yr[s]=s<<23;Yr[31]=1199570944;Yr[32]=2147483648;for(let s=33;s<63;++s)Yr[s]=2147483648+(s-32<<23);Yr[63]=3347054592;for(let s=1;s<64;++s)s!==32&&(_0[s]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);let dt=location.search.includes("spheric")?1:location.search.includes("euclidean")?0:-1;const Wc=s=>{dt=s},Ht=([s,e])=>fr([0,0,1],[-s,e,dt<0?Math.sqrt(s*s+e*e+1):1]),jc=(s,e)=>(dt<0?b0(s,e):dt>0?M0(s,e):Tu(s,e),s),fr=(s,e)=>(dt<0?x0(s,e):dt>0?y0(s,e):Tu(s,e),s),Eu=(s,e,t)=>{const n=(dt>0?-1:1)*e/2,r=(dt>0?-1:1)*t/2;return[fr(Ht([n,r]),s),fr(Ht([n,-r]),s),fr(Ht([-n,-r]),s),fr(Ht([-n,r]),s)]},jo=([s,e,t],[n,r,a])=>[e*a-r*t,t*n-a*s,s*r-n*e],x0=(s,e)=>{if(e[0]===0&&e[1]===0)return s;const t=[0,0,1],n=[e[0],e[1],e[2]+1],r=jo(e,t);r[2]*=-1;const a=jo(n,r),f=2*kn(s,a)/kn(a,a);s[0]-=f*a[0],s[1]-=f*a[1],s[2]-=f*a[2];const l=[e[0],e[1],0],h=2*kn(l,[s[0],s[1],0])/kn(l,l);return s[0]-=h*l[0],s[1]-=h*l[1],s},y0=(s,e)=>{if(e[0]===0&&e[1]===0)return s[0]*=-1,s[1]*=-1,s;const t=[0,0,1],n=[e[0],e[1],e[2]+1],r=jo(e,t),a=jo(n,r),f=2*kn(s,a)/kn(a,a);s[0]-=f*a[0],s[1]-=f*a[1],s[2]-=f*a[2];const l=[e[0],e[1],0],h=2*kn(l,[s[0],s[1],0])/kn(l,l);return s[0]-=h*l[0],s[1]-=h*l[1],s[0]*=-1,s[1]*=-1,s},b0=(s,e)=>{const[t,n,r]=s;let[a,f]=e;a*=-Math.tanh(1/Math.abs(f));const l=Math.sqrt(1+a*a),h=Math.sqrt(1+f*f),p=t,m=n*f+r*h;return s[0]=p*l-m*a,s[1]=n*h+r*f,s[2]=-p*a+m*l,s},M0=(s,e)=>{const[t,n,r]=s;let[a,f]=e;f*=-1;const l=Math.sqrt(1-a*a),h=Math.sqrt(1-f*f),p=t,m=n*f+r*h;return s[0]=p*l+m*a,s[1]=n*h-r*f,s[2]=-p*a+m*l,s},Tu=(s,e)=>{let[t,n]=s;const[r,a]=e;return s[0]=t+r,s[1]=n+a,s[2]=1,s},kn=([s,e,t],[n,r,a],f=dt)=>s*n+e*r+f*t*a,w0=(s,e,t,n)=>{let r=Math.acos(kn(s,e));n&&(r=2*Math.PI-r);const a=Math.sin(r);if(a===0)return[s,e];const f=[s];for(let l=t;l<1;l+=t){const h=Math.sin((1-l)*r)/a,p=Math.sin(l*r)/a;f.push([s[0]*h+e[0]*p,s[1]*h+e[1]*p,s[2]*h+e[2]*p])}return f.push(e),f},S0=(s,e,t)=>{const n=Math.acosh(-kn(s,e)),r=Math.sinh(n);if(r===0)return[s,e];const a=[s];for(let f=t;f<1;f+=t){const l=Math.sinh((1-f)*n)/r,h=Math.sinh(f*n)/r;a.push([s[0]*l+e[0]*h,s[1]*l+e[1]*h,s[2]*l+e[2]*h])}return a.push(e),a},Kt=(s,e,t,n=dt,r=!1)=>n>0?w0(s,e,t,r):n<0?S0(s,e,t):[s,e],Au=([s,e,t])=>{const n=2/(1+t);return[-s*n,e*n]},E0=([s,e])=>{s*=.5,e*=.5;const t=2/(1+s*s+e*e);return[s*t,e*t,t-1]};window.project=Au;window.unproject=E0;window.curvatureTranslate=fr;const Xc={type:"change"},da={type:"start"},qc={type:"end"};class T0 extends ki{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Nt),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xc),n.update(),a=r.NONE},this.update=function(){const L=new V,ce=new Ui().setFromUnitVectors(e.up,new V(0,1,0)),Me=ce.clone().invert(),ge=new V,z=new Ui,ve=2*Math.PI;return function(){const Re=n.object.position;L.copy(Re).sub(n.target),L.applyQuaternion(ce),l.setFromVector3(L),n.autoRotate&&a===r.NONE&&U(Y()),n.enableDamping?(l.theta+=h.theta*n.dampingFactor,l.phi+=h.phi*n.dampingFactor):(l.theta+=h.theta,l.phi+=h.phi);let Te=n.minAzimuthAngle,Le=n.maxAzimuthAngle;return isFinite(Te)&&isFinite(Le)&&(Te<-Math.PI?Te+=ve:Te>Math.PI&&(Te-=ve),Le<-Math.PI?Le+=ve:Le>Math.PI&&(Le-=ve),Te<=Le?l.theta=Math.max(Te,Math.min(Le,l.theta)):l.theta=l.theta>(Te+Le)/2?Math.max(Te,l.theta):Math.min(Le,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=p,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),L.setFromSpherical(l),L.applyQuaternion(Me),Re.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),m.set(0,0,0)),p=1,v||ge.distanceToSquared(n.object.position)>f||8*(1-z.dot(n.object.quaternion))>f?(n.dispatchEvent(Xc),ge.copy(n.object.position),z.copy(n.object.quaternion),v=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",te),n.domElement.removeEventListener("pointerdown",yt),n.domElement.removeEventListener("pointercancel",zt),n.domElement.removeEventListener("wheel",qt),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",Mt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Nt)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const f=1e-6,l=new Hc,h=new Hc;let p=1;const m=new V;let v=!1;const _=new Ge,S=new Ge,A=new Ge,b=new Ge,g=new Ge,E=new Ge,F=new Ge,G=new Ge,N=new Ge,D=[],B={};function Y(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function U(L){h.theta-=L}function J(L){h.phi-=L}const $=function(){const L=new V;return function(Me,ge){L.setFromMatrixColumn(ge,0),L.multiplyScalar(-Me),m.add(L)}}(),we=function(){const L=new V;return function(Me,ge){n.screenSpacePanning===!0?L.setFromMatrixColumn(ge,1):(L.setFromMatrixColumn(ge,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Me),m.add(L)}}(),pe=function(){const L=new V;return function(Me,ge){const z=n.domElement;if(n.object.isPerspectiveCamera){const ve=n.object.position;L.copy(ve).sub(n.target);let _e=L.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),$(2*Me*_e/z.clientHeight,n.object.matrix),we(2*ge*_e/z.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(Me*(n.object.right-n.object.left)/n.object.zoom/z.clientWidth,n.object.matrix),we(ge*(n.object.top-n.object.bottom)/n.object.zoom/z.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(L){n.object.isPerspectiveCamera?p/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(L){n.object.isPerspectiveCamera?p*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(L){_.set(L.clientX,L.clientY)}function ae(L){F.set(L.clientX,L.clientY)}function le(L){b.set(L.clientX,L.clientY)}function Q(L){S.set(L.clientX,L.clientY),A.subVectors(S,_).multiplyScalar(n.rotateSpeed);const ce=n.domElement;U(2*Math.PI*A.x/ce.clientHeight),J(2*Math.PI*A.y/ce.clientHeight),_.copy(S),n.update()}function se(L){G.set(L.clientX,L.clientY),N.subVectors(G,F),N.y>0?j(T()):N.y<0&&H(T()),F.copy(G),n.update()}function xe(L){g.set(L.clientX,L.clientY),E.subVectors(g,b).multiplyScalar(n.panSpeed),pe(E.x,E.y),b.copy(g),n.update()}function ue(L){L.deltaY<0?H(T()):L.deltaY>0&&j(T()),n.update()}function me(L){let ce=!1;switch(L.code){case n.keys.UP:pe(0,n.keyPanSpeed),ce=!0;break;case n.keys.BOTTOM:pe(0,-n.keyPanSpeed),ce=!0;break;case n.keys.LEFT:pe(n.keyPanSpeed,0),ce=!0;break;case n.keys.RIGHT:pe(-n.keyPanSpeed,0),ce=!0;break}ce&&(L.preventDefault(),n.update())}function re(){if(D.length===1)_.set(D[0].pageX,D[0].pageY);else{const L=.5*(D[0].pageX+D[1].pageX),ce=.5*(D[0].pageY+D[1].pageY);_.set(L,ce)}}function De(){if(D.length===1)b.set(D[0].pageX,D[0].pageY);else{const L=.5*(D[0].pageX+D[1].pageX),ce=.5*(D[0].pageY+D[1].pageY);b.set(L,ce)}}function oe(){const L=D[0].pageX-D[1].pageX,ce=D[0].pageY-D[1].pageY,Me=Math.sqrt(L*L+ce*ce);F.set(0,Me)}function at(){n.enableZoom&&oe(),n.enablePan&&De()}function He(){n.enableZoom&&oe(),n.enableRotate&&re()}function ke(L){if(D.length==1)S.set(L.pageX,L.pageY);else{const Me=ze(L),ge=.5*(L.pageX+Me.x),z=.5*(L.pageY+Me.y);S.set(ge,z)}A.subVectors(S,_).multiplyScalar(n.rotateSpeed);const ce=n.domElement;U(2*Math.PI*A.x/ce.clientHeight),J(2*Math.PI*A.y/ce.clientHeight),_.copy(S)}function Pe(L){if(D.length===1)g.set(L.pageX,L.pageY);else{const ce=ze(L),Me=.5*(L.pageX+ce.x),ge=.5*(L.pageY+ce.y);g.set(Me,ge)}E.subVectors(g,b).multiplyScalar(n.panSpeed),pe(E.x,E.y),b.copy(g)}function Ze(L){const ce=ze(L),Me=L.pageX-ce.x,ge=L.pageY-ce.y,z=Math.sqrt(Me*Me+ge*ge);G.set(0,z),N.set(0,Math.pow(G.y/F.y,n.zoomSpeed)),j(N.y),F.copy(G)}function Ye(L){n.enableZoom&&Ze(L),n.enablePan&&Pe(L)}function Be(L){n.enableZoom&&Ze(L),n.enableRotate&&ke(L)}function yt(L){n.enabled!==!1&&(D.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Ve),n.domElement.addEventListener("pointerup",Mt)),fe(L),L.pointerType==="touch"?I(L):lt(L))}function Ve(L){n.enabled!==!1&&(L.pointerType==="touch"?P(L):tt(L))}function Mt(L){be(L),D.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",Mt)),n.dispatchEvent(qc),a=r.NONE}function zt(L){be(L)}function lt(L){let ce;switch(L.button){case 0:ce=n.mouseButtons.LEFT;break;case 1:ce=n.mouseButtons.MIDDLE;break;case 2:ce=n.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case qi.DOLLY:if(n.enableZoom===!1)return;ae(L),a=r.DOLLY;break;case qi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;le(L),a=r.PAN}else{if(n.enableRotate===!1)return;q(L),a=r.ROTATE}break;case qi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;q(L),a=r.ROTATE}else{if(n.enablePan===!1)return;le(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(da)}function tt(L){if(n.enabled!==!1)switch(a){case r.ROTATE:if(n.enableRotate===!1)return;Q(L);break;case r.DOLLY:if(n.enableZoom===!1)return;se(L);break;case r.PAN:if(n.enablePan===!1)return;xe(L);break}}function qt(L){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(L.preventDefault(),n.dispatchEvent(da),ue(L),n.dispatchEvent(qc))}function Nt(L){n.enabled===!1||n.enablePan===!1||me(L)}function I(L){switch(Ee(L),D.length){case 1:switch(n.touches.ONE){case Yi.ROTATE:if(n.enableRotate===!1)return;re(),a=r.TOUCH_ROTATE;break;case Yi.PAN:if(n.enablePan===!1)return;De(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;at(),a=r.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;He(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(da)}function P(L){switch(Ee(L),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ke(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Pe(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ye(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Be(L),n.update();break;default:a=r.NONE}}function te(L){n.enabled!==!1&&L.preventDefault()}function fe(L){D.push(L)}function be(L){delete B[L.pointerId];for(let ce=0;ce<D.length;ce++)if(D[ce].pointerId==L.pointerId){D.splice(ce,1);return}}function Ee(L){let ce=B[L.pointerId];ce===void 0&&(ce=new Ge,B[L.pointerId]=ce),ce.set(L.pageX,L.pageY)}function ze(L){const ce=L.pointerId===D[0].pointerId?D[1]:D[0];return B[ce.pointerId]}n.domElement.addEventListener("contextmenu",te),n.domElement.addEventListener("pointerdown",yt),n.domElement.addEventListener("pointercancel",zt),n.domElement.addEventListener("wheel",qt,{passive:!1}),this.update()}}const A0=[],In=2;for(let s=-In;s<=In;s++)for(let e=-In;e<=In;e++)A0.push({text:`${s}x${e}`,center:Ht([s,e]),color:[(s+In)/(2*In),(e+In)/(2*In),Math.abs(s*e)/(In*In)]});const ft=[{text:"Origin!",center:Ht([0,0]),color:[.5,.75,0]},{text:"Foo",center:Ht([.4,.9]),color:[.15,.5,.6]},{text:"Bar",center:Ht([1,-1.5]),color:[.8,.5,.2]},{text:"Hello World",center:Ht([-2,-2]),color:[.5,0,.9]},{text:"\u2014<>[]^\xB1\u2212\xF7\xD7",center:Ht([-1,2]),color:[.5,.7,.9]}],Qn=[{boxes:[ft[0],ft[1]]},{boxes:[ft[2],ft[4]]},{boxes:[ft[3],ft[1]]}];window.boxes=ft;window.links=Qn;const Pu=1/50,Cu=s=>{const e=Kt(s.boxes[0].center,s.boxes[1].center,Pu).length,t=new Float32Array(3*e),n=new Jt;n.setAttribute("position",new Wt(t,3).setUsage(Go));const r=new yr({linewidth:4,color:new Ie("#000000")}),a=new Pa(n,r);a.scale.set(1.09,1.09,1.09),s.line=a,Lu(s)},Lu=s=>{const{line:e,boxes:t}=s,n=e.geometry.attributes.position.array;let r=0;const a=[],f=t[0].center,l=t[1].center,h=Kt(f,l,Pu);for(let p=0;p<h.length;p++){const[m,v,_]=h[p];n[r*3]=m,n[r*3+1]=v,n[r*3+2]=_+.01,r>0&&a.push(r-1,r),r++}e.geometry.setIndex(a),e.geometry.setDrawRange(0,a.length),e.geometry.attributes.position.needsUpdate=!0,e.material.color=t.every(p=>p.selected)?new Ie("#ff0000"):new Ie("#000000"),e.material.needsUpdate=!0},P0=s=>{Cu(s),rt.add(s.line),Qn.push(s)},Yc=s=>{rt.remove(s.line),Qn.splice(Qn.indexOf(s),1)};let rn;const C0=()=>{let e;const t=new bu({side:pi,color:17663,transparent:!0,opacity:.1});if(dt>0)e=new Ca(1.04);else if(dt<0){const n=new Float32Array(3e4),r=[];for(let a=0;a<100;a++)for(let f=0;f<100;f++){const l=a-50,h=f-100/2,p=Math.sqrt(l*l+h*h+1);n[3*(a*100+f)]=l,n[3*(a*100+f)+1]=h,n[3*(a*100+f)+2]=p+.04,a>0&&f<100-1&&(r.push((a-1)*100+f,a*100+f,(a-1)*100+f+1),r.push(a*100+f,a*100+f+1,(a-1)*100+f+1))}e=new Jt,e.setAttribute("position",new Wt(n,3)),e.setIndex(r),e.setDrawRange(0,r.length),e.computeVertexNormals()}else{e=new Ko(100,100,100,100);for(let n=2;n<e.attributes.position.array.length;n+=3)e.attributes.position.array[n]=1.04}return e.computeBoundingSphere(),rn=new Un(e,t),rn.visible=!1,rn};let on;const L0=()=>{const s=dt>0?15:100,e=dt>0?.001:50,t=dt<0?6:.129,n=new Jt,r=new yr({color:39423,transparent:!0,opacity:.25,linewidth:1}),a=[],f=[];if(dt){let l=0;for(let h=-s;h<=s;h++){const p=Kt(Ht([-e,h*t]),Ht([e,h*t]),.01,dt,!0);for(let m=0;m<p.length;m++)a.push(p[m][0],p[m][1],p[m][2]),m>0&&f.push(l-1,l),l++}for(let h=-s;h<=s;h++){const p=Kt(Ht([h*t,-e]),Ht([h*t,e]),.01,dt,!0);for(let m=0;m<p.length;m++)a.push(p[m][0],p[m][1],p[m][2]),m>0&&f.push(l-1,l),l++}}else{let l=0;for(let h=-s;h<=s;h++)a.push(-e,h,1.02),l++,a.push(e,h,1.02),l++,f.push(l-2,l-1);for(let h=-s;h<=s;h++)a.push(h,-e,1.02),l++,a.push(h,e,1.02),l++,f.push(l-2,l-1)}return n.setAttribute("position",new sn(a,3)),n.setIndex(f),n.setDrawRange(0,f.length),n.attributes.position.needsUpdate=!0,n.computeBoundingSphere(),on=new Pa(n,r),on.visible=!1,dt>0?on.scale.set(1.02,1.02,1.02):dt<0&&on.position.set(0,0,.02),on};let hn,Pt,rt,$n,tn;const D0=()=>{hn=new xu({antialias:!0}),hn.setPixelRatio(window.devicePixelRatio),hn.setSize(window.innerWidth,window.innerHeight),hn.setClearColor(new Ie(16777215),1),hn.domElement.id="c3d",document.body.appendChild(hn.domElement),Pt=new nn(90,window.innerWidth/window.innerHeight,.01,1e3),Pt.position.set(0,0,-.99),Pt.up.set(0,1,0),Pt.lookAt(0,0,10),Pt.zoom=Math.min(1,window.innerWidth/window.innerHeight),Pt.updateProjectionMatrix(),$n=new v0,rt=new Jv,rt.background=new Ie(16777215),rt.fog=new Aa(16777215,.1,0);const s=new m0(16777215);rt.add(s);const e=new p0(16777215,1);return Pt.add(e),Pt.updateProjectionMatrix(),rt.add(Pt),tn=new T0(Pt,hn.domElement),tn.target.set(0,0,0),tn.minDistance=0,tn.maxDistance=100,tn.addEventListener("change",()=>hn.render(rt,Pt)),tn.update(),{renderer:hn,scene:rt,camera:Pt,controls:tn,raycaster:$n}},R0=s=>{const e=document.createElement("canvas"),t=256,n="serif",r=64,a=e.getContext("2d");a.font=`${t}px ${n}`;const f=a.measureText(s),l=f.width,h=f.fontBoundingBoxAscent+f.fontBoundingBoxDescent;return e.width=l+r*2,e.height=h+r*2,a.fillStyle="#ffffff",a.fillRect(0,0,e.width,e.height),a.font=`${t}px ${n}`,a.textAlign="center",a.textBaseline="middle",a.fillStyle="#000",a.fillText(s,e.width/2,e.height/2),{canvas:e,width:e.width,height:e.height}},At=()=>{I0(),hn.render(rt,Pt)},I0=()=>{ft.forEach(Ru),Qn.forEach(Lu)},Du=()=>{C0(),rt.add(rn),L0(),rt.add(on),ft.forEach(s=>{Da(s),rt.add(s.mesh),rt.add(s.line)}),Qn.forEach(s=>{Cu(s),rt.add(s.line)})},Zc=s=>{const e={surface:rn.visible,grid:on.visible};rt.remove(rn),rt.remove(on),ft.forEach(t=>{rt.remove(t.mesh),rt.remove(t.line)}),Qn.forEach(t=>{rt.remove(t.line)}),ft.forEach(t=>{s>0&&(t.center=Au(t.center)),dt>=0&&(t.center[0]*=-1),t.center=Ht(t.center)}),Du(),rn.visible=e.surface,on.visible=e.grid};window.render=At;const zn=1/25,Da=s=>{const{canvas:e,width:t,height:n}=R0(s.text),r=.001;s.width=t*r,s.height=n*r,s.points=Eu(s.center,s.width,s.height);const{points:a}=s,[f,l,h,p]=a,m=Kt(f,l,zn),v=Kt(l,h,zn),_=Kt(h,p,zn),S=Kt(p,f,zn),A=[..._].reverse(),b=m.concat(v).concat(_).concat(S).length,g=m.map((J,$)=>Kt(J,A[$],zn).length).reduce((J,$)=>J+$,0),E=new Float32Array(3*g),F=new Float32Array(2*g),G=new Jt;G.setAttribute("position",new Wt(E,3).setUsage(Go)),G.setAttribute("uv",new Wt(F,2).setUsage(Go));const N=new Float32Array(3*b),D=new Jt;D.setAttribute("position",new Wt(N,3).setUsage(Go));const B=new $o({side:pi,color:new Ie().fromArray(s.color),map:new n0(e)});B.map.needsUpdate=!0;const Y=new yr({linewidth:4,color:new Ie("#000000")}),T=new Un(G,B),U=new Pa(D,Y);U.scale.setScalar(.999),T.add(U),s.mesh=T,s.line=U,Ru(s)},Ru=s=>{const{mesh:e,line:t,points:n}=s,r=e.geometry.attributes.position.array,a=e.geometry.attributes.uv.array,f=t.geometry.attributes.position.array;let l=0,h=0;const p=[],m=[],[v,_,S,A]=n,b=Kt(v,_,zn),g=Kt(_,S,zn),E=Kt(S,A,zn),F=Kt(A,v,zn),G=[...E].reverse(),N=h,D=b.concat(g).concat(E).concat(F);for(let B=0;B<D.length;B++){const[Y,T,U]=D[B];f[h*3]=Y,f[h*3+1]=T,f[h*3+2]=U,h>N&&m.push(h-1,h),h++}m.push(h-1,N);for(let B=0;B<b.length;B++){const Y=b[B],T=G[B],U=Kt(Y,T,zn),J=U.length,$=l;for(let we=0;we<U.length;we++){const[pe,j,H]=U[we];a[l*2+1]=1-B/(b.length-1),a[l*2]=1-we/(U.length-1),r[l*3]=pe,r[l*3+1]=j,r[l*3+2]=H,B!==0&&l>$&&(p.push(l-J-1,l-1,l-J),p.push(l-J,l-1,l)),l++}}e.geometry.setIndex(p),e.geometry.setDrawRange(0,p.length),e.geometry.attributes.position.needsUpdate=!0,e.geometry.computeBoundingSphere(),t.geometry.setIndex(m),t.geometry.setDrawRange(0,m.length),t.geometry.attributes.position.needsUpdate=!0,t.geometry.computeBoundingSphere(),t.material.color=s.selected?new Ie("#ff0000"):new Ie("#000000"),t.material.needsUpdate=!0},O0=s=>{Da(s),rt.add(s.mesh),rt.add(s.line),ft.push(s)},F0=s=>{rt.remove(s.mesh),rt.remove(s.line),ft.splice(ft.indexOf(s),1)},z0=(s,e)=>{rt.remove(s.mesh),rt.remove(s.line),s.text=e,Da(s),rt.add(s.mesh),rt.add(s.line)},N0=()=>{const s=t=>{const n=ft.every(r=>!r.selected);ft.forEach(({points:r,center:a,selected:f})=>{(n||f)&&(r.forEach(l=>jc(l,t)),jc(a,t))})};window.rotate=s;const e=(t,n,r,a,f)=>{const l=new Ge;l.x=2*t/window.innerWidth-1,l.y=1-2*n/window.innerHeight;const h=ft.filter(m=>m.selected);if(!r&&!a&&(!f||h.length===1)&&h.forEach(m=>{m.selected=!1}),h.length>1&&!(r||a)&&f)return;$n.setFromCamera(l,Pt);const p=$n.intersectObjects(ft.map(m=>m.mesh));if(p.length){const[{object:m}]=p,v=ft.find(_=>_.mesh===m);v.selected=a?!v.selected:!0}};tn.enabled=!1,sd("#c3d").draggable({inertia:!0,listeners:{start:t=>{e(t.x0,t.y0,t.shiftKey,t.ctrlKey,!0),At()},move:t=>{const n=t.ctrlKey?.5:t.altKey?.25:1;if(!tn.enabled){const r=Math.min(window.innerWidth,window.innerHeight)*.9*n;s([-t.dx/r,-t.dy/r]),At()}},end:()=>{}}}).on("tap",t=>{if(t.altKey){const n=new Ge;n.x=2*t.x/window.innerWidth-1,n.y=1-2*t.y/window.innerHeight,$n.setFromCamera(n,Pt),$n.intersectObject(rn).forEach(({point:r})=>{console.log(r.x,r.y,r.z)});return}e(t.x,t.y,t.shiftKey,t.ctrlKey),At()}).on("doubletap",t=>{const n=new Ge;n.x=2*t.x/window.innerWidth-1,n.y=1-2*t.y/window.innerHeight,$n.setFromCamera(n,Pt);const r=$n.intersectObjects(ft.map(a=>a.mesh));if(r.length){const[{object:a}]=r,f=ft.find(h=>h.mesh===a),l=prompt(`Text for "${f.text}" box?`,f.text);if(!l)return;z0(f,l)}else $n.intersectObject(rn).forEach(({point:a})=>{const f=prompt("Text for new box?");!f||O0({text:f,center:[a.x,a.y,a.z],color:[Math.random(),Math.random(),Math.random()]})});At()}).on("hold",t=>{if(t.y>window.innerHeight*.5)if(t.x>window.innerHeight*.5){const n=dt;Wc(dt===-1?0:dt===0?1:-1),Zc(n),At()}else tn.enabled=!tn.enabled;else t.x>window.innerHeight*.5?(on.visible=!on.visible,At()):(rn.visible=!rn.visible,At())}),addEventListener("keydown",t=>{if(t.key==="c")tn.enabled=!tn.enabled;else if(t.key==="a")ft.forEach(n=>{n.selected=!0}),At();else if(t.code==="Escape")ft.forEach(n=>{n.selected=!1}),At();else if(t.key==="l"){const n=ft.filter(r=>r.selected);n.length>1&&(n.reduce((a,f,l)=>{const h=n.slice(l+1);return h&&h.forEach(p=>{a.push([f,p])}),a},[]).forEach(a=>P0({boxes:a})),At())}else if(t.key==="u"){const n=ft.filter(r=>r.selected);n.length>1&&(Qn.filter(r=>r.boxes.every(a=>n.includes(a))).forEach(r=>Yc(r)),At())}else if(t.key==="r")ft.filter(r=>r.selected).forEach(r=>{r.points=Eu(r.center,r.width,r.height)}),At();else if(t.key==="v"){const n=dt;Wc(dt===-1?0:dt===0?1:-1),Zc(n),At()}else t.key==="g"?(on.visible=!on.visible,At()):t.key==="s"?(rn.visible=!rn.visible,At()):t.key==="f"?(rt.fog.near=rt.fog.far?.1:1,rt.fog.far=rt.fog.far?0:40,At()):t.code==="Delete"&&(ft.filter(r=>r.selected).forEach(r=>{Qn.filter(a=>a.boxes.includes(r)).forEach(a=>Yc(a)),F0(r)}),At())})};D0();Du();const U0=()=>{const e=window.innerWidth*1,t=window.innerHeight*1,n=hn.domElement;(n.width!==e||n.height!==t)&&(Pt.aspect=e/t,Pt.zoom=Math.min(1,e/t),Pt.updateProjectionMatrix(),hn.setSize(e,t),n.style.width=e+"px",n.style.height=t+"px"),At()};window.ondeviceorientation=window.onresize=U0;N0();
