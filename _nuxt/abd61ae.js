(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{364:function(t,n,e){"use strict";e.d(n,"a",(function(){return E})),e.d(n,"b",(function(){return $}));var r=function(a,b){return a<b?-1:a>b?1:a>=b?0:NaN};var o,c;1===(o=r).length&&(c=o,o=function(t,n){return r(c(t),n)});var f=Array.prototype;f.slice,f.map,Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var l=function(t,n){var e,r,o=t.length,i=-1;if(null==n){for(;++i<o;)if(null!=(e=t[i])&&e>=e)for(r=e;++i<o;)null!=(e=t[i])&&e>r&&(r=e)}else for(;++i<o;)if(null!=(e=n(t[i],i,t))&&e>=e)for(r=e;++i<o;)null!=(e=n(t[i],i,t))&&e>r&&(r=e);return r},h=function(t,n){var e,r,o=t.length,i=-1;if(null==n){for(;++i<o;)if(null!=(e=t[i])&&e>=e)for(r=e;++i<o;)null!=(e=t[i])&&r>e&&(r=e)}else for(;++i<o;)if(null!=(e=n(t[i],i,t))&&e>=e)for(r=e;++i<o;)null!=(e=n(t[i],i,t))&&r>e&&(r=e);return r},_=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o};function y(t,n){return t.sourceLinks.length?t.depth:n-1}function d(t){return function(){return t}}function v(a,b){return w(a.source,b.source)||a.index-b.index}function m(a,b){return w(a.target,b.target)||a.index-b.index}function w(a,b){return a.y0-b.y0}function x(t){return t.value}function k(t){return t.index}function A(t){return t.nodes}function L(t){return t.links}function M(t,n){const e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function S({nodes:t}){for(const n of t){let t=n.y0,e=t;for(const link of n.sourceLinks)link.y0=t+link.width/2,t+=link.width;for(const link of n.targetLinks)link.y1=e+link.width/2,e+=link.width}}function E(){let t,n,e,r=0,o=0,c=1,f=1,E=24,N=8,C=k,P=y,T=A,z=L,B=6;function D(){const t={nodes:T.apply(null,arguments),links:z.apply(null,arguments)};return O(t),I(t),V(t),j(t),H(t),S(t),t}function O({nodes:t,links:n}){for(const[i,n]of t.entries())n.index=i,n.sourceLinks=[],n.targetLinks=[];const r=new Map(t.map(((n,i)=>[C(n,i,t),n])));for(const[i,link]of n.entries()){link.index=i;let{source:source,target:t}=link;"object"!=typeof source&&(source=link.source=M(r,source)),"object"!=typeof t&&(t=link.target=M(r,t)),source.sourceLinks.push(link),t.targetLinks.push(link)}if(null!=e)for(const{sourceLinks:n,targetLinks:r}of t)n.sort(e),r.sort(e)}function I({nodes:t}){for(const n of t)n.value=void 0===n.fixedValue?Math.max(_(n.sourceLinks,x),_(n.targetLinks,x)):n.fixedValue}function V({nodes:t}){const n=t.length;let e=new Set(t),r=new Set,o=0;for(;e.size;){for(const t of e){t.depth=o;for(const{target:n}of t.sourceLinks)r.add(n)}if(++o>n)throw new Error("circular link");e=r,r=new Set}}function j({nodes:t}){const n=t.length;let e=new Set(t),r=new Set,o=0;for(;e.size;){for(const t of e){t.height=o;for(const{source:source}of t.targetLinks)r.add(source)}if(++o>n)throw new Error("circular link");e=r,r=new Set}}function H(e){const y=function({nodes:t}){const e=l(t,(t=>t.depth))+1,o=(c-r-E)/(e-1),f=new Array(e);for(const n of t){const i=Math.max(0,Math.min(e-1,Math.floor(P.call(null,n,e))));n.layer=i,n.x0=r+i*o,n.x1=n.x0+E,f[i]?f[i].push(n):f[i]=[n]}if(n)for(const t of f)t.sort(n);return f}(e);t=Math.min(N,(f-o)/(l(y,(t=>t.length))-1)),function(n){const e=h(n,(n=>(f-o-(n.length-1)*t)/_(n,x)));for(const r of n){let n=o;for(const o of r){o.y0=n,o.y1=n+o.value*e,n=o.y1+t;for(const link of o.sourceLinks)link.width=link.value*e}n=(f-n+t)/(r.length+1);for(let i=0;i<r.length;++i){const t=r[i];t.y0+=n*(i+1),t.y1+=n*(i+1)}W(r)}}(y);for(let i=0;i<B;++i){const t=Math.pow(.99,i),n=Math.max(1-t,(i+1)/B);U(y,t,n),R(y,t,n)}}function R(t,e,r){for(let i=1,o=t.length;i<o;++i){const o=t[i];for(const t of o){let n=0,r=0;for(const{source:source,value:e}of t.targetLinks){let o=e*(t.layer-source.layer);n+=X(source,t)*o,r+=o}if(!(r>0))continue;let o=(n/r-t.y0)*e;t.y0+=o,t.y1+=o,Q(t)}void 0===n&&o.sort(w),J(o,r)}}function U(t,e,r){for(let i=t.length-2;i>=0;--i){const o=t[i];for(const source of o){let t=0,n=0;for(const{target:e,value:r}of source.sourceLinks){let o=r*(e.layer-source.layer);t+=F(source,e)*o,n+=o}if(!(n>0))continue;let r=(t/n-source.y0)*e;source.y0+=r,source.y1+=r,Q(source)}void 0===n&&o.sort(w),J(o,r)}}function J(n,e){const i=n.length>>1,r=n[i];$(n,r.y0-t,i-1,e),Z(n,r.y1+t,i+1,e),$(n,f,n.length-1,e),Z(n,o,0,e)}function Z(n,e,i,r){for(;i<n.length;++i){const o=n[i],c=(e-o.y0)*r;c>1e-6&&(o.y0+=c,o.y1+=c),e=o.y1+t}}function $(n,e,i,r){for(;i>=0;--i){const o=n[i],c=(o.y1-e)*r;c>1e-6&&(o.y0-=c,o.y1-=c),e=o.y0-t}}function Q({sourceLinks:t,targetLinks:n}){if(void 0===e){for(const{source:{sourceLinks:t}}of n)t.sort(m);for(const{target:{targetLinks:n}}of t)n.sort(v)}}function W(t){if(void 0===e)for(const{sourceLinks:n,targetLinks:e}of t)n.sort(m),e.sort(v)}function X(source,n){let e=source.y0-(source.sourceLinks.length-1)*t/2;for(const{target:r,width:o}of source.sourceLinks){if(r===n)break;e+=o+t}for(const{source:t,width:r}of n.targetLinks){if(t===source)break;e-=r}return e}function F(source,n){let e=n.y0-(n.targetLinks.length-1)*t/2;for(const{source:r,width:o}of n.targetLinks){if(r===source)break;e+=o+t}for(const{target:t,width:r}of source.sourceLinks){if(t===n)break;e-=r}return e}return D.update=function(t){return S(t),t},D.nodeId=function(t){return arguments.length?(C="function"==typeof t?t:d(t),D):C},D.nodeAlign=function(t){return arguments.length?(P="function"==typeof t?t:d(t),D):P},D.nodeSort=function(t){return arguments.length?(n=t,D):n},D.nodeWidth=function(t){return arguments.length?(E=+t,D):E},D.nodePadding=function(n){return arguments.length?(N=t=+n,D):N},D.nodes=function(t){return arguments.length?(T="function"==typeof t?t:d(t),D):T},D.links=function(t){return arguments.length?(z="function"==typeof t?t:d(t),D):z},D.linkSort=function(t){return arguments.length?(e=t,D):e},D.size=function(t){return arguments.length?(r=o=0,c=+t[0],f=+t[1],D):[c-r,f-o]},D.extent=function(t){return arguments.length?(r=+t[0][0],c=+t[1][0],o=+t[0][1],f=+t[1][1],D):[[r,o],[c,f]]},D.iterations=function(t){return arguments.length?(B=+t,D):B},D}var N=Math.PI,C=2*N,P=1e-6,T=C-P;function z(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function path(){return new z}z.prototype=path.prototype={constructor:z,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,o,c){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+o)+","+(this._y1=+c)},arcTo:function(t,n,e,r,o){t=+t,n=+n,e=+e,r=+r,o=+o;var c=this._x1,f=this._y1,l=e-t,h=r-n,_=c-t,y=f-n,d=_*_+y*y;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(d>P)if(Math.abs(y*l-h*_)>P&&o){var v=e-c,m=r-f,w=l*l+h*h,x=v*v+m*m,k=Math.sqrt(w),A=Math.sqrt(d),L=o*Math.tan((N-Math.acos((w+d-x)/(2*k*A)))/2),M=L/A,S=L/k;Math.abs(M-1)>P&&(this._+="L"+(t+M*_)+","+(n+M*y)),this._+="A"+o+","+o+",0,0,"+ +(y*v>_*m)+","+(this._x1=t+S*l)+","+(this._y1=n+S*h)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,o,c){t=+t,n=+n,c=!!c;var f=(e=+e)*Math.cos(r),l=e*Math.sin(r),h=t+f,_=n+l,y=1^c,d=c?r-o:o-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+h+","+_:(Math.abs(this._x1-h)>P||Math.abs(this._y1-_)>P)&&(this._+="L"+h+","+_),e&&(d<0&&(d=d%C+C),d>T?this._+="A"+e+","+e+",0,1,"+y+","+(t-f)+","+(n-l)+"A"+e+","+e+",0,1,"+y+","+(this._x1=h)+","+(this._y1=_):d>P&&(this._+="A"+e+","+e+",0,"+ +(d>=N)+","+y+","+(this._x1=t+e*Math.cos(o))+","+(this._y1=n+e*Math.sin(o))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var B=path,D=Array.prototype.slice,O=function(t){return function(){return t}};function I(p){return p[0]}function V(p){return p[1]}function j(t){return t.source}function H(t){return t.target}function R(t){var source=j,n=H,e=I,r=V,o=null;function link(){var c,f=D.call(arguments),s=source.apply(this,f),l=n.apply(this,f);if(o||(o=c=B()),t(o,+e.apply(this,(f[0]=s,f)),+r.apply(this,f),+e.apply(this,(f[0]=l,f)),+r.apply(this,f)),c)return o=null,c+""||null}return link.source=function(t){return arguments.length?(source=t,link):source},link.target=function(t){return arguments.length?(n=t,link):n},link.x=function(t){return arguments.length?(e="function"==typeof t?t:O(+t),link):e},link.y=function(t){return arguments.length?(r="function"==typeof t?t:O(+t),link):r},link.context=function(t){return arguments.length?(o=null==t?null:t,link):o},link}function U(t,n,e,r,o){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,o,r,o)}function J(t){return[t.source.x1,t.y0]}function Z(t){return[t.target.x0,t.y1]}var $=function(){return R(U).source(J).target(Z)}},368:function(t,n,e){"use strict";function r(){}var o=function(t){return null==t?r:function(){return this.querySelector(t)}};function c(){return[]}var f=function(t){return new Array(t.length)};function l(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}l.prototype={constructor:l,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function h(t,n,e,r,o,data){for(var c,i=0,f=n.length,h=data.length;i<h;++i)(c=n[i])?(c.__data__=data[i],r[i]=c):e[i]=new l(t,data[i]);for(;i<f;++i)(c=n[i])&&(o[i]=c)}function _(t,n,e,r,o,data,c){var i,f,h,_={},y=n.length,d=data.length,v=new Array(y);for(i=0;i<y;++i)(f=n[i])&&(v[i]=h="$"+c.call(f,f.__data__,i,n),h in _?o[i]=f:_[h]=f);for(i=0;i<d;++i)(f=_[h="$"+c.call(t,data[i],i,data)])?(r[i]=f,f.__data__=data[i],_[h]=null):e[i]=new l(t,data[i]);for(i=0;i<y;++i)(f=n[i])&&_[v[i]]===f&&(o[i]=f)}function y(a,b){return a<b?-1:a>b?1:a>=b?0:NaN}var d="http://www.w3.org/1999/xhtml",v={svg:"http://www.w3.org/2000/svg",xhtml:d,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},m=function(t){var n=t+="",i=n.indexOf(":");return i>=0&&"xmlns"!==(n=t.slice(0,i))&&(t=t.slice(i+1)),v.hasOwnProperty(n)?{space:v[n],local:t}:t};function w(t){return function(){this.removeAttribute(t)}}function x(t){return function(){this.removeAttributeNS(t.space,t.local)}}function k(t,n){return function(){this.setAttribute(t,n)}}function A(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function L(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function M(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}var S=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function E(t){return function(){this.style.removeProperty(t)}}function N(t,n,e){return function(){this.style.setProperty(t,n,e)}}function C(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function P(t,n){return t.style.getPropertyValue(n)||S(t).getComputedStyle(t,null).getPropertyValue(n)}function T(t){return function(){delete this[t]}}function z(t,n){return function(){this[t]=n}}function B(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function D(t){return t.trim().split(/^|\s+/)}function O(t){return t.classList||new I(t)}function I(t){this._node=t,this._names=D(t.getAttribute("class")||"")}function V(t,n){for(var e=O(t),i=-1,r=n.length;++i<r;)e.add(n[i])}function j(t,n){for(var e=O(t),i=-1,r=n.length;++i<r;)e.remove(n[i])}function H(t){return function(){V(this,t)}}function R(t){return function(){j(this,t)}}function U(t,n){return function(){(n.apply(this,arguments)?V:j)(this,t)}}I.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var i=this._names.indexOf(t);i>=0&&(this._names.splice(i,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function J(){this.textContent=""}function Z(t){return function(){this.textContent=t}}function $(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function Q(){this.innerHTML=""}function W(t){return function(){this.innerHTML=t}}function X(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function F(){this.nextSibling&&this.parentNode.appendChild(this)}function G(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function K(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===d&&n.documentElement.namespaceURI===d?n.createElement(t):n.createElementNS(e,t)}}function Y(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var tt=function(t){var n=m(t);return(n.local?Y:K)(n)};function nt(){return null}function et(){var t=this.parentNode;t&&t.removeChild(this)}function it(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function ot(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}var ut={},st=null;"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(ut={mouseenter:"mouseover",mouseleave:"mouseout"}));function ct(t,n,e){return t=ft(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function ft(t,n,e){return function(r){var o=st;st=r;try{t.call(this,this.__data__,n,e)}finally{st=o}}}function at(t){return t.trim().split(/^|\s+/).map((function(t){var n="",i=t.indexOf(".");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{type:t,name:n}}))}function lt(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function ht(t,n,e){var r=ut.hasOwnProperty(t.type)?ct:ft;return function(o,i,c){var f,l=this.__on,h=r(n,i,c);if(l)for(var _=0,y=l.length;_<y;++_)if((f=l[_]).type===t.type&&f.name===t.name)return this.removeEventListener(f.type,f.listener,f.capture),this.addEventListener(f.type,f.listener=h,f.capture=e),void(f.value=n);this.addEventListener(t.type,h,e),f={type:t.type,name:t.name,value:n,listener:h,capture:e},l?l.push(f):this.__on=[f]}}function pt(t,n,e){var r=S(t),o=r.CustomEvent;"function"==typeof o?o=new o(n,e):(o=r.document.createEvent("Event"),e?(o.initEvent(n,e.bubbles,e.cancelable),o.detail=e.detail):o.initEvent(n,!1,!1)),t.dispatchEvent(o)}function _t(t,n){return function(){return pt(this,t,n)}}function yt(t,n){return function(){return pt(this,t,n.apply(this,arguments))}}var gt=[null];function vt(t,n){this._groups=t,this._parents=n}function mt(){return new vt([[document.documentElement]],gt)}vt.prototype=mt.prototype={constructor:vt,select:function(select){"function"!=typeof select&&(select=o(select));for(var t=this._groups,n=t.length,e=new Array(n),r=0;r<n;++r)for(var c,f,l=t[r],h=l.length,_=e[r]=new Array(h),i=0;i<h;++i)(c=l[i])&&(f=select.call(c,c.__data__,i,l))&&("__data__"in c&&(f.__data__=c.__data__),_[i]=f);return new vt(e,this._parents)},selectAll:function(select){var t;"function"!=typeof select&&(select=null==(t=select)?c:function(){return this.querySelectorAll(t)});for(var n=this._groups,e=n.length,r=[],o=[],f=0;f<e;++f)for(var l,h=n[f],_=h.length,i=0;i<_;++i)(l=h[i])&&(r.push(select.call(l,l.__data__,i,h)),o.push(l));return new vt(r,o)},filter:function(t){var n;"function"!=typeof t&&(n=t,t=function(){return this.matches(n)});for(var e=this._groups,r=e.length,o=new Array(r),c=0;c<r;++c)for(var f,l=e[c],h=l.length,_=o[c]=[],i=0;i<h;++i)(f=l[i])&&t.call(f,f.__data__,i,l)&&_.push(f);return new vt(o,this._parents)},data:function(t,n){if(!t)return data=new Array(this.size()),v=-1,this.each((function(t){data[++v]=t})),data;var e,r=n?_:h,o=this._parents,c=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var f=c.length,l=new Array(f),y=new Array(f),d=new Array(f),v=0;v<f;++v){var m=o[v],w=c[v],x=w.length,data=t.call(m,m&&m.__data__,v,o),k=data.length,A=y[v]=new Array(k),L=l[v]=new Array(k);r(m,w,A,L,d[v]=new Array(x),data,n);for(var M,S,E=0,N=0;E<k;++E)if(M=A[E]){for(E>=N&&(N=E+1);!(S=L[N])&&++N<k;);M._next=S||null}}return(l=new vt(l,o))._enter=y,l._exit=d,l},enter:function(){return new vt(this._enter||this._groups.map(f),this._parents)},exit:function(){return new vt(this._exit||this._groups.map(f),this._parents)},join:function(t,n,e){var r=this.enter(),o=this,c=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(o=n(o)),null==e?c.remove():e(c),r&&o?r.merge(o).order():o},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,o=e.length,c=Math.min(r,o),f=new Array(r),l=0;l<c;++l)for(var h,_=n[l],y=e[l],d=_.length,v=f[l]=new Array(d),i=0;i<d;++i)(h=_[i]||y[i])&&(v[i]=h);for(;l<r;++l)f[l]=n[l];return new vt(f,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,o=t[n],i=o.length-1,c=o[i];--i>=0;)(r=o[i])&&(c&&4^r.compareDocumentPosition(c)&&c.parentNode.insertBefore(r,c),c=r);return this},sort:function(t){function n(a,b){return a&&b?t(a.__data__,b.__data__):!a-!b}t||(t=y);for(var e=this._groups,r=e.length,o=new Array(r),c=0;c<r;++c){for(var f,l=e[c],h=l.length,_=o[c]=new Array(h),i=0;i<h;++i)(f=l[i])&&(_[i]=f);_.sort(n)}return new vt(o,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),i=-1;return this.each((function(){t[++i]=this})),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var c=r[i];if(c)return c}return null},size:function(){var t=0;return this.each((function(){++t})),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var o,c=n[e],i=0,f=c.length;i<f;++i)(o=c[i])&&t.call(o,o.__data__,i,c);return this},attr:function(t,n){var e=m(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?x:w:"function"==typeof n?e.local?M:L:e.local?A:k)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?E:"function"==typeof n?C:N)(t,n,null==e?"":e)):P(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?T:"function"==typeof n?B:z)(t,n)):this.node()[t]},classed:function(t,n){var e=D(t+"");if(arguments.length<2){for(var r=O(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?U:n?H:R)(e,n))},text:function(t){return arguments.length?this.each(null==t?J:("function"==typeof t?$:Z)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Q:("function"==typeof t?X:W)(t)):this.node().innerHTML},raise:function(){return this.each(F)},lower:function(){return this.each(G)},append:function(t){var n="function"==typeof t?t:tt(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:tt(t),select=null==n?nt:"function"==typeof n?n:o(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),select.apply(this,arguments)||null)}))},remove:function(){return this.each(et)},clone:function(t){return this.select(t?ot:it)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var i,r,o=at(t+""),c=o.length;if(!(arguments.length<2)){for(f=n?ht:lt,null==e&&(e=!1),i=0;i<c;++i)this.each(f(o[i],n,e));return this}var f=this.node().__on;if(f)for(var l,h=0,_=f.length;h<_;++h)for(i=0,l=f[h];i<c;++i)if((r=o[i]).type===l.type&&r.name===l.name)return l.value},dispatch:function(t,n){return this.each(("function"==typeof n?yt:_t)(t,n))}};n.a=function(t){return"string"==typeof t?new vt([[document.querySelector(t)]],[document.documentElement]):new vt([[t]],gt)}}}]);