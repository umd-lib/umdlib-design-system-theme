var xi=Object.create;var xt=Object.defineProperty;var ki=Object.getOwnPropertyDescriptor;var jt=(n,t)=>(t=Symbol[n])?t:Symbol.for("Symbol."+n),ot=n=>{throw TypeError(n)};var Dt=(n,t,e)=>t in n?xt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Mt=(n,t)=>xt(n,"name",{value:t,configurable:!0});var S=n=>[,,,xi(n?.[jt("metadata")]??null)],Bt=["class","method","getter","setter","accessor","field","value","get","set"],nt=n=>n!==void 0&&typeof n!="function"?ot("Function expected"):n,Ai=(n,t,e,i,a)=>({kind:Bt[n],name:t,metadata:i,addInitializer:s=>e._?ot("Already initialized"):a.push(nt(s||null))}),E=(n,t)=>Dt(t,jt("metadata"),n[3]),o=(n,t,e,i)=>{for(var a=0,s=n[t>>1],r=s&&s.length;a<r;a++)t&1?s[a].call(e):i=s[a].call(e,i);return i},d=(n,t,e,i,a,s)=>{var r,m,u,b,f,g=t&7,L=!!(t&8),y=!!(t&16),q=g>3?n.length+1:g?L?1:2:0,Ot=Bt[g+5],Ht=g>3&&(n[q-1]=[]),$i=n[q]||(n[q]=[]),R=g&&(!y&&!L&&(a=a.prototype),g<5&&(g>3||!y)&&ki(g<4?a:{get[e](){return Rt(this,s)},set[e](z){return Tt(this,s,z)}},e));g?y&&g<4&&Mt(s,(g>2?"set ":g>1?"get ":"")+e):Mt(a,e);for(var wt=i.length-1;wt>=0;wt--)b=Ai(g,e,u={},n[3],$i),g&&(b.static=L,b.private=y,f=b.access={has:y?z=>Ei(a,z):z=>e in z},g^3&&(f.get=y?z=>(g^1?Rt:Si)(z,a,g^4?s:R.get):z=>z[e]),g>2&&(f.set=y?(z,$t)=>Tt(z,a,$t,g^4?s:R.set):(z,$t)=>z[e]=$t)),m=(0,i[wt])(g?g<4?y?s:R[Ot]:g>4?void 0:{get:R.get,set:R.set}:a,b),u._=1,g^4||m===void 0?nt(m)&&(g>4?Ht.unshift(m):g?y?s=m:R[Ot]=m:a=m):typeof m!="object"||m===null?ot("Object expected"):(nt(r=m.get)&&(R.get=r),nt(r=m.set)&&(R.set=r),nt(r=m.init)&&Ht.unshift(r));return g||E(n,a),R&&xt(a,e,R),y?g^4?s:R:a},l=(n,t,e)=>Dt(n,typeof t!="symbol"?t+"":t,e),kt=(n,t,e)=>t.has(n)||ot("Cannot "+e),Ei=(n,t)=>Object(t)!==t?ot('Cannot use the "in" operator on this value'):n.has(t),Rt=(n,t,e)=>(kt(n,t,"read from private field"),e?e.call(n):t.get(n));var Tt=(n,t,e,i)=>(kt(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),Si=(n,t,e)=>(kt(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();const pt=globalThis,Et=pt.ShadowRoot&&(pt.ShadyCSS===void 0||pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),Nt=new WeakMap;let bi=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Et&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Nt.set(e,t))}return t}toString(){return this.cssText}};const C=n=>new bi(typeof n=="string"?n:n+"",void 0,St),mt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,a,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+n[s+1],n[0]);return new bi(e,n,St)},Ci=(n,t)=>{if(Et)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),a=pt.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=e.cssText,n.appendChild(i)}},It=Et?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return C(e)})(n):n;const{is:Li,defineProperty:zi,getOwnPropertyDescriptor:Pi,getOwnPropertyNames:Oi,getOwnPropertySymbols:Hi,getPrototypeOf:Mi}=Object,yt=globalThis,Vt=yt.trustedTypes,Ri=Vt?Vt.emptyScript:"",Ti=yt.reactiveElementPolyfillSupport,lt=(n,t)=>n,bt={toAttribute(n,t){switch(t){case Boolean:n=n?Ri:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Ct=(n,t)=>!Li(n,t),qt={attribute:!0,type:String,converter:bt,reflect:!1,useDefault:!1,hasChanged:Ct};Symbol.metadata??=Symbol("metadata"),yt.litPropertyMetadata??=new WeakMap;let Q=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=qt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);a!==void 0&&zi(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:s}=Pi(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:a,set(r){const m=a?.call(this);s?.call(this,r),this.requestUpdate(t,m,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qt}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const t=Mi(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const e=this.properties,i=[...Oi(e),...Hi(e)];for(const a of i)this.createProperty(a,e[a])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,a]of e)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const a=this._$Eu(e,i);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const a of i)e.unshift(It(a))}else t!==void 0&&e.push(It(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ci(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:bt).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const s=i.getPropertyOptions(a),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:bt;this._$Em=a;const m=r.fromAttribute(e,s.type);this[a]=m??this._$Ej?.get(a)??m,this._$Em=null}}requestUpdate(t,e,i,a=!1,s){if(t!==void 0){const r=this.constructor;if(a===!1&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??Ct)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,s]of i){const{wrapped:r}=s,m=this[a];r!==!0||this._$AL.has(a)||m===void 0||this.C(a,void 0,s,m)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},Q[lt("elementProperties")]=new Map,Q[lt("finalized")]=new Map,Ti?.({ReactiveElement:Q}),(yt.reactiveElementVersions??=[]).push("2.1.2");const Lt=globalThis,Wt=n=>n,ft=Lt.trustedTypes,Kt=ft?ft.createPolicy("lit-html",{createHTML:n=>n}):void 0,fi="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,yi="?"+K,ji=`<${yi}>`,G=document,dt=()=>G.createComment(""),ct=n=>n===null||typeof n!="object"&&typeof n!="function",zt=Array.isArray,Di=n=>zt(n)||typeof n?.[Symbol.iterator]=="function",At=`[ 	
\f\r]`,st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ut=/-->/g,Zt=/>/g,U=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ft=/'/g,Yt=/"/g,_i=/^(?:script|style|textarea|title)$/i,Bi=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),h=Bi(1),it=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Jt=new WeakMap,X=G.createTreeWalker(G,129);function wi(n,t){if(!zt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kt!==void 0?Kt.createHTML(t):t}const Ni=(n,t)=>{const e=n.length-1,i=[];let a,s=t===2?"<svg>":t===3?"<math>":"",r=st;for(let m=0;m<e;m++){const u=n[m];let b,f,g=-1,L=0;for(;L<u.length&&(r.lastIndex=L,f=r.exec(u),f!==null);)L=r.lastIndex,r===st?f[1]==="!--"?r=Ut:f[1]!==void 0?r=Zt:f[2]!==void 0?(_i.test(f[2])&&(a=RegExp("</"+f[2],"g")),r=U):f[3]!==void 0&&(r=U):r===U?f[0]===">"?(r=a??st,g=-1):f[1]===void 0?g=-2:(g=r.lastIndex-f[2].length,b=f[1],r=f[3]===void 0?U:f[3]==='"'?Yt:Ft):r===Yt||r===Ft?r=U:r===Ut||r===Zt?r=st:(r=U,a=void 0);const y=r===U&&n[m+1].startsWith("/>")?" ":"";s+=r===st?u+ji:g>=0?(i.push(b),u.slice(0,g)+fi+u.slice(g)+K+y):u+K+(g===-2?m:y)}return[wi(n,s+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class ht{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let s=0,r=0;const m=t.length-1,u=this.parts,[b,f]=Ni(t,e);if(this.el=ht.createElement(b,i),X.currentNode=this.el.content,e===2||e===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(a=X.nextNode())!==null&&u.length<m;){if(a.nodeType===1){if(a.hasAttributes())for(const g of a.getAttributeNames())if(g.endsWith(fi)){const L=f[r++],y=a.getAttribute(g).split(K),q=/([.?@])?(.*)/.exec(L);u.push({type:1,index:s,name:q[2],strings:y,ctor:q[1]==="."?Vi:q[1]==="?"?qi:q[1]==="@"?Wi:_t}),a.removeAttribute(g)}else g.startsWith(K)&&(u.push({type:6,index:s}),a.removeAttribute(g));if(_i.test(a.tagName)){const g=a.textContent.split(K),L=g.length-1;if(L>0){a.textContent=ft?ft.emptyScript:"";for(let y=0;y<L;y++)a.append(g[y],dt()),X.nextNode(),u.push({type:2,index:++s});a.append(g[L],dt())}}}else if(a.nodeType===8)if(a.data===yi)u.push({type:2,index:s});else{let g=-1;for(;(g=a.data.indexOf(K,g+1))!==-1;)u.push({type:7,index:s}),g+=K.length-1}s++}}static createElement(t,e){const i=G.createElement("template");return i.innerHTML=t,i}}function at(n,t,e=n,i){if(t===it)return t;let a=i!==void 0?e._$Co?.[i]:e._$Cl;const s=ct(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(n),a._$AT(n,e,i)),i!==void 0?(e._$Co??=[])[i]=a:e._$Cl=a),a!==void 0&&(t=at(n,a._$AS(n,t.values),a,i)),t}class Ii{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??G).importNode(e,!0);X.currentNode=a;let s=X.nextNode(),r=0,m=0,u=i[0];for(;u!==void 0;){if(r===u.index){let b;u.type===2?b=new gt(s,s.nextSibling,this,t):u.type===1?b=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(b=new Ki(s,this,t)),this._$AV.push(b),u=i[++m]}r!==u?.index&&(s=X.nextNode(),r++)}return X.currentNode=G,a}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class gt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=at(this,t,e),ct(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==it&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Di(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==x&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.T(G.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ht.createElement(wi(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{const s=new Ii(a,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Jt.get(t.strings);return e===void 0&&Jt.set(t.strings,e=new ht(t)),e}k(t){zt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const s of t)a===e.length?e.push(i=new gt(this.O(dt()),this.O(dt()),this,this.options)):i=e[a],i._$AI(s),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=Wt(t).nextSibling;Wt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class _t{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}_$AI(t,e=this,i,a){const s=this.strings;let r=!1;if(s===void 0)t=at(this,t,e,0),r=!ct(t)||t!==this._$AH&&t!==it,r&&(this._$AH=t);else{const m=t;let u,b;for(t=s[0],u=0;u<s.length-1;u++)b=at(this,m[i+u],e,u),b===it&&(b=this._$AH[u]),r||=!ct(b)||b!==this._$AH[u],b===x?t=x:t!==x&&(t+=(b??"")+s[u+1]),this._$AH[u]=b}r&&!a&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vi extends _t{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}}class qi extends _t{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}}class Wi extends _t{constructor(t,e,i,a,s){super(t,e,i,a,s),this.type=5}_$AI(t,e=this){if((t=at(this,t,e,0)??x)===it)return;const i=this._$AH,a=t===x&&i!==x||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==x&&(i===x||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ki{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){at(this,t)}}const Ui=Lt.litHtmlPolyfillSupport;Ui?.(ht,gt),(Lt.litHtmlVersions??=[]).push("3.3.3");const Zi=(n,t,e)=>{const i=e?.renderBefore??t;let a=i._$litPart$;if(a===void 0){const s=e?.renderBefore??null;i._$litPart$=a=new gt(t.insertBefore(dt(),s),s,void 0,e??{})}return a._$AI(n),a};const Pt=globalThis;class k extends Q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zi(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return it}}k._$litElement$=!0,k.finalized=!0,Pt.litElementHydrateSupport?.({LitElement:k});const Fi=Pt.litElementPolyfillSupport;Fi?.({LitElement:k});(Pt.litElementVersions??=[]).push("4.2.2");const Yi={attribute:!0,type:String,converter:bt,reflect:!1,hasChanged:Ct},Ji=(n=Yi,t,e)=>{const{kind:i,metadata:a}=e;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),s.set(e.name,n),i==="accessor"){const{name:r}=e;return{set(m){const u=t.get.call(this);t.set.call(this,m),this.requestUpdate(r,u,n,!0,m)},init(m){return m!==void 0&&this.C(r,void 0,n,m),m}}}if(i==="setter"){const{name:r}=e;return function(m){const u=this[r];t.call(this,m),this.requestUpdate(r,u,n,!0,m)}}throw Error("Unsupported decorator location: "+i)};function c(n){return(t,e)=>typeof e=="object"?Ji(n,t,e):((i,a,s)=>{const r=a.hasOwnProperty(s);return a.constructor.createProperty(s,i),r?Object.getOwnPropertyDescriptor(a,s):void 0})(n,t,e)}const Xi=".separator{width:100%;margin:var(--space-lg) auto;border:0;border-top:1px solid}.separator--red{border-color:#e21833}.separator--yellow{border-color:#ffd200}.separator--gray{border-color:#e6e6e6}.separator--bronze{border-color:#ad7231}.separator--black{border-color:#000}.separator--wide{margin:var(--space-lg) auto}.separator--medium{margin:var(--space-sm) auto}.separator--small{margin:var(--space-xs) auto}";var Xt,Gt,Qt,te,D;class tt extends(te=k,Qt=[c()],Gt=[c()],Xt=[c()],te){constructor(){super(...arguments);l(this,"variant",o(D,8,this,"red")),o(D,11,this);l(this,"margin",o(D,12,this,"medium")),o(D,15,this);l(this,"componentid",o(D,16,this,"")),o(D,19,this)}render(){return h`<hr
      id=${this.componentid}
      class="separator separator--${this.variant} separator--${this.margin}"
      aria-hidden="true"
    >`}}D=S(te),d(D,5,"variant",Qt,tt),d(D,5,"margin",Gt,tt),d(D,5,"componentid",Xt,tt),E(D,tt),l(tt,"styles",C(Xi));customElements.define("umd-separator",tt);const j=mt`
  :host {
    display: block;
  }

  .s-margin-general-medium {
    margin-bottom: var(--space-md);
  }

  .t-body-small {
    font-size: 1rem;
    line-height: 1.375rem;
  }

  .t-italic {
    font-style: italic;
  }

  .c-bg-secondary {
    background-color: var(--lightest-gray);
  }

  .s-box-medium-h {
    padding-inline: var(--space-md);
  }

  .s-box-medium-v {
    padding-block: var(--space-md);
  }

  .wysiwyg-editor ::slotted(*) {
    margin-block: 0 var(--space-sm);
  }

  .wysiwyg-editor ::slotted(*:last-child) {
    margin-bottom: 0;
  }
`,Gi=".umd-lib.image{width:100%;height:auto;display:block}.umd-lib.image .image--image{width:100%;height:auto;object-fit:cover;object-position:center}.umd-lib.image .image--image.freeform{aspect-ratio:auto}.umd-lib.image .image--image.one_to_one{aspect-ratio:1 / 1}.umd-lib.image.landscape .image--image.four_to_three{aspect-ratio:4 / 3}.umd-lib.image.landscape .image--image.three_to_two{aspect-ratio:3 / 2}.umd-lib.image.landscape .image--image.sixteen_to_nine{aspect-ratio:16 / 9}.umd-lib.image.portrait .image--image.four_to_three{aspect-ratio:3 / 4}.umd-lib.image.portrait .image--image.three_to_two{aspect-ratio:2 / 3}.umd-lib.image.portrait .image--image.sixteen_to_nine{aspect-ratio:9 / 16}.umd-lib.image .image--caption{text-align:center}.umd-lib.image .image--caption>*:first-child{padding-top:var(--space-xs)}.wysiwyg-editor .umd-lib.image{display:table;width:auto;max-width:100%;height:auto}.wysiwyg-editor .umd-lib.image .image--image{width:auto;max-width:100%;height:auto;object-fit:cover;object-position:center}.wysiwyg-editor .umd-lib.image .image--caption{width:0;min-width:100%;overflow-wrap:break-word}@media(min-width:768px){.umd-lib.image .image--caption>*:first-child{padding-top:var(--space-sm)}}";var ee,ie,ae,ne,oe,se,A;class W extends(se=k,oe=[c()],ne=[c()],ae=[c()],ie=[c()],ee=[c()],se){constructor(){super(...arguments);l(this,"src",o(A,8,this,"")),o(A,11,this);l(this,"alt",o(A,12,this,"")),o(A,15,this);l(this,"variant",o(A,16,this,"freeform")),o(A,19,this);l(this,"orientation",o(A,20,this,"landscape")),o(A,23,this);l(this,"componentid",o(A,24,this,"")),o(A,27,this)}render(){return h`
      <figure id=${this.componentid} class="umd-lib image ${this.orientation} s-margin-general-medium">
        <img
          class="image--image ${this.variant}"
          src=${this.src}
          alt=${this.alt}
          loading="lazy"
        >
        <figcaption class="image--caption s-box-medium-h t-body-small t-italic wysiwyg-editor">
          <slot name="caption"></slot>
        </figcaption>
      </figure>
    `}}A=S(se),d(A,5,"src",oe,W),d(A,5,"alt",ne,W),d(A,5,"variant",ae,W),d(A,5,"orientation",ie,W),d(A,5,"componentid",ee,W),E(A,W),l(W,"styles",[j,C(Gi),mt`
    figure {
      margin: 0 0 var(--space-md);
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    figcaption {
      color: var(--dark-gray);
    }
  `]);customElements.define("umd-image",W);const Qi="h3.s-lc-ea-h3{display:none}.s-lc-ea-tb{width:100%;border-bottom:none!important;font:inherit!important}.s-lc-ea-tb td,.s-lc-ea-tb td>*{padding-bottom:var(--space-sm)!important;font-size:1rem!important}.s-lc-ea-tb tr:last-child td,.s-lc-ea-tb td>*:last-child{padding-bottom:0!important}.s-lc-ea-l{font-weight:700!important;width:9rem!important}@media(min-width:768px){.s-lc-ea-tb td,.s-lc-ea-tb td>*{padding-bottom:var(--space-md)!important;font-size:1.125rem!important}}.s-lc-ea-noe{font-size:1rem!important}@media(min-width:768px){.s-lc-ea-noe{font-size:1.125rem!important}}";var re,le,de,ce,B;class et extends(ce=k,de=[c()],le=[c()],re=[c({attribute:"component-class"})],ce){constructor(){super(...arguments);l(this,"label",o(B,8,this,"")),o(B,11,this);l(this,"componentid",o(B,12,this,"")),o(B,15,this);l(this,"componentClass",o(B,16,this,"")),o(B,19,this)}render(){return h`
      <div
        id=${this.componentid}
        class="umd-lib body body--content wysiwyg-editor s-margin-general-medium ${this.componentClass}"
      >
        ${this.label?h`<span class="text--label c-content-secondary">${this.label}</span>`:""}
        <slot></slot>
      </div>
    `}}B=S(ce),d(B,5,"label",de,et),d(B,5,"componentid",le,et),d(B,5,"componentClass",re,et),E(B,et),l(et,"styles",[j,C(Qi),mt`
    .body {
      margin-bottom: var(--space-md);
    }

    .text--label {
      display: block;
      color: var(--dark-gray);
      margin-bottom: var(--space-xs);
    }
  `]);customElements.define("umd-text",et);const ta=".text-callout--feature{border-left:4px solid var(--maryland-red)}.text-callout--text>*:last-child{margin-bottom:0rem!important}";var he,me,ut;class vt extends(me=k,he=[c()],me){constructor(){super(...arguments);l(this,"componentid",o(ut,8,this,"")),o(ut,11,this)}render(){return h`
      <div
        id=${this.componentid}
        class="umd-lib text-callout--feature c-bg-secondary s-box-medium-v s-box-medium-h s-margin-general-medium"
        role="note"
        aria-label="text callout"
      >
        <div class="text-callout--text wysiwyg-editor">
          <slot></slot>
        </div>
      </div>
    `}}ut=S(me),d(ut,5,"componentid",he,vt),E(ut,vt),l(vt,"styles",[j,C(ta),css`
    .text-callout--feature {
      margin-bottom: var(--space-md);
    }

  `]);customElements.define("umd-text-callout",vt);const ea='.accordion-child--headline{width:100%;display:flex;padding-right:3.5rem!important;border-top:.125rem solid var(--lightest-gray);transition:all .3s ease-in-out;position:relative;text-align:start}.accordion-child--headline:hover,.accordion-child--headline:focus,.accordion-child--headline[aria-expanded=true]{border-color:var(--maryland-red)}.accordion-child--headline:hover div,.accordion-child--headline:hover div p,.accordion-child--headline:focus div,.accordion-child--headline:focus div p,.accordion-child--headline[aria-expanded=true] div,.accordion-child--headline[aria-expanded=true] div p{color:var(--maryland-red)}.accordion-child--body-wrapper{transition:height .3s ease-out;overflow:hidden}.accordion-child--headline:before,.accordion-child--headline:after{content:"";width:18px;height:4px;position:absolute;top:calc(50% - 2px);right:32px;background-color:var(--maryland-red);transition:transform .5s}.accordion-child--headline:after{transform:rotate(270deg)}.accordion-child--headline[aria-expanded=true]:after{transform:rotate(180deg)}div:has(+div>div.umd-lib.accordion--container)>div.umd-lib.accordion--container,div.wysiwyg-editor>div.umd-lib.accordion--container:has(+div.umd-lib.accordion--container){margin-bottom:var(--space-xs)}';let ia=0;var ge,ue,pe,ve,be,fe,ye,_;class N extends(ye=k,fe=[c()],be=[c({attribute:"heading-level"})],ve=[c({type:Boolean,attribute:"default-open"})],pe=[c()],ue=[c()],ge=[c({type:Boolean,state:!0})],ye){constructor(){super();l(this,"componentid",o(_,8,this,"")),o(_,11,this);l(this,"headingLevel",o(_,12,this,"h3")),o(_,15,this);l(this,"defaultOpen",o(_,16,this,!1)),o(_,19,this);l(this,"linkText",o(_,20,this,"")),o(_,23,this);l(this,"linkUrl",o(_,24,this,"")),o(_,27,this);l(this,"open",o(_,28,this,!1)),o(_,31,this);this.accordionId=`accordion-${++ia}`,this.open=this.defaultOpen}updated(e){e.has("defaultOpen")&&!e.has("open")&&(this.open=this.defaultOpen)}toggle(){this.open=!this.open}render(){const e=this.componentid||this.accordionId,i=/^h[2-6]$/.test(this.headingLevel)?this.headingLevel:"h3",a=`${e}-body`;return h`
      <div class="umd-lib accordion--container s-margin-general-medium" id=${this.componentid}>
        <div class="accordion-child--container">
          ${this.renderHeading(i,h`
            <button
              type="button"
              class="accordion-child--headline c-bg-secondary s-box-medium-v s-box-medium-h"
              aria-expanded=${this.open}
              aria-controls=${a}
              @click=${this.toggle}
            >
              <div class="t-interactive c-content-primary"><slot name="title"></slot></div>
            </button>
          `)}
          <div
            role="region"
            id=${a}
            class="accordion-child--body-wrapper c-bg-secondary"
            aria-labelledby=${e}
            aria-hidden=${!this.open}
            style=${this.open?"height: auto;":"display: none;"}
          >
            <div class="accordion-child--body s-box-medium-h s-box-medium-v-bottom wysiwyg-editor">
              <slot name="body"></slot>
            </div>
            ${this.linkText&&this.linkUrl?h`
              <div class="accordion-child--body-button s-box-medium-h s-box-medium-v-bottom">
                <a href=${this.linkUrl} class="emphasized-link--text t-body-small t-bold c-content-primary">
                  ${this.linkText}
                </a>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}renderHeading(e,i){switch(e){case"h2":return h`<h2>${i}</h2>`;case"h4":return h`<h4>${i}</h4>`;case"h5":return h`<h5>${i}</h5>`;case"h6":return h`<h6>${i}</h6>`;default:return h`<h3>${i}</h3>`}}}_=S(ye),d(_,5,"componentid",fe,N),d(_,5,"headingLevel",be,N),d(_,5,"defaultOpen",ve,N),d(_,5,"linkText",pe,N),d(_,5,"linkUrl",ue,N),d(_,5,"open",ge,N),E(_,N),l(N,"styles",[j,C(ea)]);customElements.define("umd-accordion",N);const aa=".alert--site_wide{background-color:var(--maryland-yellow);border-left:.5rem solid var(--maryland-red)}.alert--site_wide .alert--title{padding-right:1.5rem}.alert--in_page .alert--content{border:.25rem solid var(--maryland-yellow)}.alert--site_wide .alert--content>div:last-of-type h2,.alert--site_wide .alert--content>div:last-of-type p{margin-bottom:0}.alert--content{position:relative}.alert--button-close{position:absolute;top:0;right:0}.alert--button-close button{width:25px;height:25px}.alert--button-close svg{height:1.5rem}.alert--content-with-image{display:flex;flex-direction:column-reverse;gap:var(--space-sm);align-items:stretch}.alert--content-text{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:space-between}.alert--image{flex-shrink:0;max-width:100%;aspect-ratio:3 / 2;align-self:flex-start;overflow:hidden}.alert--image img{width:100%;height:100%;object-fit:cover;display:block}.alert--site_wide.information{background-color:var(--lightest-gray)}@media(min-width:768px){.alert--content-with-image{flex-direction:row;gap:var(--space-md)}.alert--image{max-width:300px}}";var _e,we,$e,xe,ke,Ae,Ee,Se,Ce,Le,p;class M extends(Le=k,Ce=[c()],Se=[c({attribute:"heading-level"})],Ee=[c()],Ae=[c()],ke=[c({attribute:"image-alt"})],xe=[c({attribute:"link-text"})],$e=[c({attribute:"link-url"})],we=[c({attribute:"customization-class"})],_e=[c({type:Boolean,state:!0})],Le){constructor(){super(...arguments);l(this,"variant",o(p,8,this,"in_page")),o(p,11,this);l(this,"headingLevel",o(p,12,this,"h2")),o(p,15,this);l(this,"componentid",o(p,16,this,"")),o(p,19,this);l(this,"image",o(p,20,this,"")),o(p,23,this);l(this,"imageAlt",o(p,24,this,"")),o(p,27,this);l(this,"linkText",o(p,28,this,"")),o(p,31,this);l(this,"linkUrl",o(p,32,this,"")),o(p,35,this);l(this,"customizationClass",o(p,36,this,"")),o(p,39,this);l(this,"dismissed",o(p,40,this,!1)),o(p,43,this)}get isSiteWide(){return this.variant==="site_wide"}dismiss(){this.dismissed=!0}render(){const e=this.componentid||"alert",i=/^h[2-6]$/.test(this.headingLevel)?this.headingLevel:"h2",a=`${e}-title`,s=this.isSiteWide&&this.image&&this.imageAlt;return this.dismissed?"":h`
      <div
        id=${e}
        class="umd-lib alert alert--${this.variant} ${this.customizationClass}"
        role=${this.isSiteWide?"region":"note"}
        aria-labelledby=${a}
      >
        <div class="alert--container ${this.isSiteWide?"s-box-page-medium-h s-center s-page-lock":"s-margin-general-medium"}">
          <div class="alert--content s-box-medium-v ${this.isSiteWide?"":"s-box-medium-h"}">
            <div class="alert--title">
              ${this.isSiteWide?h`<p id=${a} class="t-title-small c-content-primary s-stack-small"><slot name="title"></slot></p>`:this.renderHeading(i,a)}
            </div>
            ${s?h`
              <div class="alert--content-with-image">
                <div class="alert--content-text">
                  ${this.renderDescription()}
                  ${this.renderLink()}
                </div>
                <div class="alert--image">
                  <img src=${this.image} alt=${this.imageAlt} loading="lazy">
                </div>
              </div>
            `:h`
              ${this.renderDescription()}
              ${this.renderLink()}
            `}
            ${this.isSiteWide?h`
              <div class="alert--button-close s-box-medium-v">
                <button type="button" aria-label="Close site notification" aria-controls=${e} @click=${this.dismiss}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="2" />
                  </svg>
                </button>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}renderDescription(){return h`<div class="alert--description wysiwyg-editor"><slot name="description"></slot></div>`}renderHeading(e,i){const a=h`<slot name="title"></slot>`,s="t-title-small c-content-primary s-stack-small";switch(e){case"h3":return h`<h3 id=${i} class=${s}>${a}</h3>`;case"h4":return h`<h4 id=${i} class=${s}>${a}</h4>`;case"h5":return h`<h5 id=${i} class=${s}>${a}</h5>`;case"h6":return h`<h6 id=${i} class=${s}>${a}</h6>`;default:return h`<h2 id=${i} class=${s}>${a}</h2>`}}renderLink(){return this.linkText&&this.linkUrl?h`<a class="emphasized-link--text t-body-small t-bold c-content-primary" href=${this.linkUrl}>${this.linkText}</a>`:""}}p=S(Le),d(p,5,"variant",Ce,M),d(p,5,"headingLevel",Se,M),d(p,5,"componentid",Ee,M),d(p,5,"image",Ae,M),d(p,5,"imageAlt",ke,M),d(p,5,"linkText",xe,M),d(p,5,"linkUrl",$e,M),d(p,5,"customizationClass",we,M),d(p,5,"dismissed",_e,M),E(p,M),l(M,"styles",[j,C(aa),mt`
    .alert--description ::slotted(*) {
      margin-block: 0 var(--space-sm);
    }

    .alert--description ::slotted(*:last-child) {
      margin-bottom: 0;
    }

    .alert--button-close button {
      border: 0;
      background: transparent;
      cursor: pointer;
    }

    .alert--button-close svg {
      display: block;
    }
  `]);customElements.define("umd-alert",M);const na=".scroll-top--container{position:fixed;bottom:69px;right:1.5rem;z-index:250;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.scroll-top--container.visible{opacity:1;visibility:visible}.scroll-top--button{padding:1rem;border:1px solid var(--maryland-yellow)}@media(min-width:768px){.scroll-top--container{right:3rem}}@media(min-width:1024px){.scroll-top--container{right:4rem}}@media(min-width:1440px){.scroll-top--container{right:7.5rem}}";var ze,Pe,Oe,Z;class rt extends(Oe=k,Pe=[c({type:Number})],ze=[c({type:Boolean,state:!0})],Oe){constructor(){super(...arguments);l(this,"threshold",o(Z,8,this,300)),o(Z,11,this);l(this,"visible",o(Z,12,this,!1)),o(Z,15,this)}connectedCallback(){super.connectedCallback(),this.handleScroll=this.handleScroll.bind(this),window.addEventListener("scroll",this.handleScroll,{passive:!0}),this.handleScroll()}disconnectedCallback(){window.removeEventListener("scroll",this.handleScroll),super.disconnectedCallback()}handleScroll(){this.visible=window.scrollY>this.threshold}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}render(){return h`
      <div class="umd-lib scroll-top--container ${this.visible?"visible":""}">
        <button class="scroll-top--button c-bg-dark-primary" type="button" @click=${this.scrollToTop}>
          <svg title="arrow icon" aria-hidden="true" width="16" height="19" viewBox="0 0 16 19" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 6.86768L0.708333 12.5L0.708333 7.45542L7.90396 0.0985589L7.97502 0.169624L8.04608 0.0985618L15.2417 7.45542V12.5L9.66667 6.91771V18.9583H6.33333L6.33333 6.86768Z" fill="white"></path>
          </svg>
          <span class="sr-only">Scroll To Top</span>
        </button>
      </div>
    `}}Z=S(Oe),d(Z,5,"threshold",Pe,rt),d(Z,5,"visible",ze,rt),E(Z,rt),l(rt,"styles",C(na));customElements.define("umd-scroll-to-top",rt);const oa=".tabs--triggers{width:fit-content;display:flex;flex-direction:row;position:relative}.tabs--triggers.vertical{flex-direction:column}.tabs--triggers-deco{max-width:100%;height:2px;background-color:var(--light-gray);position:absolute}.tabs--triggers-deco .tabs--triggers-deco-activeline{width:50px;height:2px;background-color:var(--maryland-red);position:absolute;top:0;left:0;transition:width .5s ease-in-out,height .5s ease-in-out,transform .5s ease-in-out}.tab--trigger{width:fit-content;display:flex;flex-direction:row;align-items:start;text-align:left}.tab--trigger.active{color:var(--black)}.tab--trigger span{text-wrap:nowrap}.tab--content h3{margin-bottom:1rem}";var He,Me,Re,Te,je,P;class F extends(je=k,Te=[c({attribute:"default-tab"})],Re=[c({attribute:"tab-label"})],Me=[c()],He=[c({type:Boolean,state:!0})],je){constructor(){super(...arguments);l(this,"defaultTab",o(P,8,this,"")),o(P,11,this);l(this,"tabLabel",o(P,12,this,"")),o(P,15,this);l(this,"componentid",o(P,16,this,"")),o(P,19,this);l(this,"vertical",o(P,20,this,!1)),o(P,23,this);l(this,"handleHashChange",()=>{const e=this.getHashValue();e&&this.triggers.some(i=>this.tabValue(i)===e)&&this.selectTab(e)});l(this,"handleResize",()=>this.updateDecoration())}firstUpdated(){this.triggerSlot=this.shadowRoot.querySelector("slot[name=triggers]"),this.contentSlot=this.shadowRoot.querySelector("slot[name=content]"),this.triggerSlot.addEventListener("slotchange",()=>this.initialize()),this.contentSlot.addEventListener("slotchange",()=>this.initialize()),window.addEventListener("resize",this.handleResize),window.addEventListener("hashchange",this.handleHashChange),this.initialize()}disconnectedCallback(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("hashchange",this.handleHashChange),super.disconnectedCallback()}get triggers(){return this.triggerSlot?.assignedElements({flatten:!0}).filter(e=>e.getAttribute("role")==="tab")||[]}get panels(){return this.contentSlot?.assignedElements({flatten:!0}).filter(e=>e.getAttribute("role")==="tabpanel")||[]}initialize(){const e=this.triggers;if(!e.length)return;e.forEach((r,m)=>{r.onclick=()=>this.selectTab(this.tabValue(r),!0),r.onkeydown=u=>this.handleKeyDown(u,m)});const a=this.getHashValue()||this.defaultTab,s=e.find(r=>this.tabValue(r)===a)||e[0];this.selectTab(this.tabValue(s),!1),this.updateDecoration()}tabValue(e){return e.id.replace(/^tab-/,"")}getHashValue(){const e=window.location.hash.slice(1);if(!e)return"";const i=e.indexOf("--"),a=this.componentid||this.id;return i>=0?e.slice(0,i)===a?e.slice(i+2):"":e}updateURLHash(e){const i=this.componentid||this.id,a=i?`${i}--${e}`:e;history.pushState(null,"",`#${a}`)}selectTab(e,i=!1){const a=this.triggers,s=this.panels;a.forEach(r=>{const m=this.tabValue(r)===e;r.setAttribute("aria-selected",String(m)),r.setAttribute("tabindex",m?"0":"-1"),r.classList.toggle("active",m)}),s.forEach(r=>{const m=r.id===`tabpanel-${e}`;r.hidden=!m,r.classList.toggle("active",m),r.classList.toggle("hidden",!m)}),i&&this.updateURLHash(e),requestAnimationFrame(()=>this.updateDecoration())}handleKeyDown(e,i){const a=this.vertical?"ArrowDown":"ArrowRight",s=this.vertical?"ArrowUp":"ArrowLeft";let r=i;if(e.key===a&&(r=(i+1)%this.triggers.length),e.key===s&&(r=(i-1+this.triggers.length)%this.triggers.length),e.key==="Home"&&(r=0),e.key==="End"&&(r=this.triggers.length-1),r!==i){e.preventDefault();const m=this.triggers[r];m.focus(),this.selectTab(this.tabValue(m),!0)}}updateDecoration(){const e=this.shadowRoot?.querySelector(".tabs--triggers-deco"),i=this.shadowRoot?.querySelector(".tabs--triggers-deco-activeline"),a=this.triggers.find(m=>m.getAttribute("aria-selected")==="true");if(!e||!i||!a)return;const s=a.getBoundingClientRect(),r=e.parentElement.getBoundingClientRect();i.style.width=`${s.width}px`,i.style.transform=`translateX(${s.left-r.left}px)`}render(){return h`
      <div class="umd-lib tabs--container c-bg-primary c-content-primary s-margin-general-medium" id=${this.componentid}>
        ${this.tabLabel?h`<p class="sr-only">${this.tabLabel}</p>`:""}
        <div class="tabs--triggers" role="tablist" aria-label=${this.tabLabel||"Tabs"}>
          <slot name="triggers"></slot>
          <div class="tabs--triggers-deco" aria-hidden="true">
            <span class="tabs--triggers-deco-activeline"></span>
          </div>
        </div>
        <div class="tabs--content">
          <slot name="content"></slot>
        </div>
      </div>
    `}}P=S(je),d(P,5,"defaultTab",Te,F),d(P,5,"tabLabel",Re,F),d(P,5,"componentid",Me,F),d(P,5,"vertical",He,F),E(P,F),l(F,"styles",[j,C(oa),mt`
    :host {
      display: block;
    }

    ::slotted([role="tab"]) {
      width: fit-content;
      display: flex;
      padding: var(--space-sm) var(--space-md);
      border: 0;
      background: transparent;
      color: var(--dark-gray);
      font: inherit;
      cursor: pointer;
    }

    ::slotted([role="tab"][aria-selected="true"]) {
      color: var(--black);
    }

    ::slotted([role="tabpanel"]) {
      padding: var(--space-md);
    }

    ::slotted([role="tabpanel"][hidden]) {
      display: none;
    }

    .tabs--triggers-deco {
      inset-inline: 0;
      bottom: 0;
    }
  `]);customElements.define("umd-tabs",F);const sa='.hero--minimal .hero--container,.hero--overlay .hero--container{display:flex;flex-direction:column;width:100%;max-width:1680px}.hero--minimal .hero--content,.hero--overlay .hero--content{order:2;z-index:2}.hero--minimal .hero--image,.hero--overlay .hero--image{width:auto;height:100%;z-index:0;order:1}.hero--minimal .hero--image figure,.hero--overlay .hero--image figure{height:100%;width:100%;position:relative}.hero--minimal .hero--image figure img,.hero--overlay .hero--image figure img{aspect-ratio:16/9;object-fit:cover;object-position:center;height:100%;width:100%}.hero--minimal .hero--image figure figcaption,.hero--overlay .hero--image figure figcaption{position:absolute;bottom:0;right:0;width:fit-content;padding:.25rem .5rem;background-color:#0009;color:#fff;text-align:end;z-index:3}.hero--minimal .hero--image figure figcaption *,.hero--overlay .hero--image figure figcaption *{color:#fff}.hero--minimal .hero--image figure figcaption a,.hero--overlay .hero--image figure figcaption a{color:#ffd200}.hero--minimal .hero--content .hero--headline:last-child,.hero--overlay .hero--content .hero--headline:last-child{margin-bottom:0rem!important}.hero--minimal .hero--content .hero--content-inner{width:auto;border-left:2px solid var(--maryland-red);padding-left:var(--space-sm)}.hero--overlay .hero--eyebrow{color:var(--black);background-color:var(--maryland-yellow);padding:.5rem 1.5rem;display:inline-block;clip-path:polygon(8% 0,100% 0,92% 100%,0 100%)}.hero--overlay .hero--eyebrow p{color:var(--black)}.hero--overlay.dark-theme .hero--content a{color:#fff!important;background-color:#e21833!important}@media(min-width:768px){.hero--minimal .hero--content .hero--content-inner{padding-left:var(--space-2xl)}}@media(min-width:1024px){.hero--minimal,.hero--overlay{position:relative}.hero--minimal .hero--image{position:absolute;right:0;top:0;width:50%;height:100%}.hero--overlay .hero--image{position:absolute;right:0;top:0;width:100%;height:100%}.hero--minimal .hero--content,.hero--overlay .hero--content{width:50%}.hero--overlay .hero--content{position:relative;z-index:2}.hero--minimal .hero--content.text-only,.hero--overlay .hero--content.text-only{width:100%}.hero--overlay .hero--image:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(90deg,#fafafa 40%,#fafafacc 50%,#fafafa00 75%);z-index:1}.hero--overlay.dark-theme .hero--image:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(90deg,#000 40%,#000c 50%,#0000 75%);z-index:1}.hero--minimal .hero--image figure figcaption{max-width:100%}.hero--overlay .hero--image figure figcaption{max-width:50%}}';var De,Be,Ne,Ie,Ve,O;class Y extends(Ve=k,Ie=[c()],Ne=[c()],Be=[c()],De=[c({attribute:"image-alt"})],Ve){constructor(){super(...arguments);l(this,"variant",o(O,8,this,"minimal")),o(O,11,this);l(this,"theme",o(O,12,this,"light")),o(O,15,this);l(this,"image",o(O,16,this,"")),o(O,19,this);l(this,"imageAlt",o(O,20,this,"")),o(O,23,this)}render(){const e=["minimal","overlay"].includes(this.variant)?this.variant:"minimal",i=this.theme==="dark"?"c-bg-primary c-content-primary dark-theme":"c-bg-secondary c-content-primary";return h`
      <div class="umd-lib hero--${e} ${i}" role="none">
        <div class="hero--container s-center">
          <div class="hero--content ${this.image?"":"text-only"} s-box-page-medium-h s-box-page-medium-v">
            <div class="hero--content-inner">
              <div class="hero--eyebrow ${e==="minimal"?"c-content-secondary":""} t-eyebrow s-stack-small">
                <slot name="eyebrow"></slot>
              </div>
              <h1 class="hero--headline t-display s-stack-medium"><slot name="title"></slot></h1>
              <div class="hero--description c-content-secondary t-body-medium wysiwyg-editor">
                <slot name="description"></slot>
              </div>
            </div>
          </div>
          ${this.image?h`
            <div class="hero--image">
              <figure>
                <img alt=${this.imageAlt} src=${this.image} loading="lazy">
                <figcaption class="t-label wysiwyg-editor"><slot name="caption"></slot></figcaption>
              </figure>
            </div>
          `:""}
        </div>
      </div>
    `}}O=S(Ve),d(O,5,"variant",Ie,Y),d(O,5,"theme",Ne,Y),d(O,5,"image",Be,Y),d(O,5,"imageAlt",De,Y),E(O,Y),l(Y,"styles",[j,C(sa)]);customElements.define("umd-hero",Y);const ra=`.navigation{width:100%}.navigation ul{padding:0;margin:0;list-style:none}.navigation a{text-decoration:none;color:var(--black)}.navigation a:hover,.navigation a:focus{text-decoration:none;color:var(--maryland-red)}.navigation ul a.is-active{background-image:linear-gradient(var(--maryland-yellow),var(--maryland-yellow));background-position:left bottom;background-repeat:no-repeat;background-size:100% 2px;font-weight:700}.navigation button{min-width:25px;min-height:25px;background:none;border:none;padding:0;margin:0;font:inherit;color:inherit;cursor:pointer;outline:none}.navigation button:focus{outline:revert}.navigation__content{max-width:1680px;display:flex;justify-content:space-between;align-items:center;flex-direction:row}.navigation__logo{height:4rem}.navigation__logo img{padding:0 2rem 0 0;height:100%;width:auto;object-fit:contain}.navigation__menu-button{height:25px;width:25px;display:block;position:relative}.navigation__menu-icon,.navigation__menu-icon:before{width:25px;height:2px;content:"";position:absolute;transition:left 0s,width 0s,top .2s,transform .2s;background-color:var(--black)}.navigation__menu-icon:after{width:16px;height:2px;content:"";position:absolute;transition:left 0s,width 0s,top .2s,transform .2s;background-color:var(--black)}.navigation__menu-icon{top:50%;left:50%;transform:translate(-50%,-50%)}.navigation__menu-icon:before{top:-8px;left:0}.navigation__menu-icon:after{bottom:-8px;left:8px}.navigation__menu-button.is-active .navigation__menu-icon{background:transparent}.navigation__menu-button.is-active .navigation__menu-icon:before{top:0;transform:rotate(45deg)}.navigation__menu-button.is-active .navigation__menu-icon:after{width:25px;top:0;left:0;transform:rotate(-45deg)}.navigation span.i-chevron-down{display:block;transform:rotate(270deg);transition:all .3s ease}.navigation span.i-chevron-down:hover,.navigation span.i-chevron-down:focus{transform:translate(4px) rotate(270deg)}.navigation__rows{width:100%;height:calc(100vh - 152px);padding:1.5rem;position:fixed;top:152px;left:0;transform:translate(-100%);transition:transform .3s ease;background-color:var(--white);border-bottom:8px solid var(--maryland-red);overflow:hidden;overflow-y:auto;z-index:400}.navigation__rows.is-open{transform:translate(0)}.navigation__rows.is-open.submenu-open{overflow-y:hidden}.navigation__rows>div{display:none}.navigation__rows.is-open>div{display:revert}.navigation__menu-item{padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;margin-bottom:1.5rem;display:flex;flex-direction:row;justify-content:space-between;border-bottom:solid 1px var(--light-gray)}.navigation__row-sec .navigation__menu-item{display:flex;flex-direction:row;padding-bottom:0rem;margin-bottom:1.5rem;border-bottom:none}.navigation__menu-link,.navigation__site-search,.navigation__row-sec .navigation__menu-link{font-size:1rem;font-weight:400}.navigation__row-sec .navigation__menu-item:last-child{padding-bottom:1.5rem;margin-bottom:1.5rem;border-bottom:solid 1px var(--light-gray)}.navigation__site-search{padding-left:1rem;padding-right:1rem;display:flex;flex-direction:row;justify-content:space-between}.navigation__site-search-button{display:flex}.navigation__submenu{width:100%;height:100%;padding:1.5rem;display:none;position:fixed;top:0;left:0;flex-direction:column;transform:translate(100%);transition:transform .3s ease;background-color:var(--white);overflow-y:auto;z-index:401}.navigation__submenu.is-open,.navigation__submenu.is-active{display:flex}.navigation__submenu.is-open .navigation__submenu-content,.navigation__submenu.is-open .navigation__submenu-header{display:none}.navigation__submenu.is-open.is-active .navigation__submenu-content,.navigation__submenu.is-open.is-active .navigation__submenu-header{display:revert}.navigation__submenu.is-open.is-active,.navigation__dropdown.is-open.is-active{transform:translate(0);overflow:hidden}.navigation__submenu.is-open.is-active{overflow-y:auto}.navigation__submenu-content{padding:0rem 1rem}.navigation .navigation__back-button span.i-chevron-down{display:block;transform:rotate(90deg);transition:all .3s ease}.navigation__submenu-header{padding-bottom:1.5rem;margin-bottom:1.5rem;border-bottom:solid 1px var(--light-gray);order:-1}.navigation__back-button{display:flex;flex-direction:row;align-items:center;gap:.5rem;text-transform:uppercase}.navigation__submenu-title{margin-bottom:1.5rem;font-size:1rem;font-weight:700}.navigation__submenu-title a.is-active{background-image:none!important}.navigation__submenu-item{padding-left:1rem;padding-right:0rem;padding-bottom:0rem;margin-bottom:1rem;border-bottom:none}.umd-lib.navigation__menu-item.utility-content#website-search{padding-top:1.5rem;border-top:solid 1px var(--light-gray)}.umd-lib.navigation__menu-item.utility-content#website-search a{padding-left:1.25rem;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M6.37158 1.5C3.31306 1.50019 0.833682 3.97957 0.833496 7.03809C0.833496 10.0968 3.31295 12.577 6.37158 12.5771C7.44259 12.5771 8.44213 12.2715 9.28955 11.7451L11.9634 14.4199H15.1665L10.9624 10.1367C11.5605 9.25236 11.9106 8.18605 11.9106 7.03809C11.9105 3.97945 9.43026 1.5 6.37158 1.5ZM6.37158 3.44336C8.357 3.44336 9.9671 5.05271 9.96729 7.03809C9.96729 9.02362 8.35711 10.6338 6.37158 10.6338C4.38621 10.6336 2.77686 9.0235 2.77686 7.03809C2.77704 5.05283 4.38632 3.44355 6.37158 3.44336Z' fill='black'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position-y:3px}.umd-lib.navigation__menu-item.utility-content#website-search a:hover,.umd-lib.navigation__menu-item.utility-content#website-search a:focus{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M6.37158 1.5C3.31306 1.50019 0.833682 3.97957 0.833496 7.03809C0.833496 10.0968 3.31295 12.577 6.37158 12.5771C7.44259 12.5771 8.44213 12.2715 9.28955 11.7451L11.9634 14.4199H15.1665L10.9624 10.1367C11.5605 9.25236 11.9106 8.18605 11.9106 7.03809C11.9105 3.97945 9.43026 1.5 6.37158 1.5ZM6.37158 3.44336C8.357 3.44336 9.9671 5.05271 9.96729 7.03809C9.96729 9.02362 8.35711 10.6338 6.37158 10.6338C4.38621 10.6336 2.77686 9.0235 2.77686 7.03809C2.77704 5.05283 4.38632 3.44355 6.37158 3.44336Z' fill='%23E21833'/%3E%3C/svg%3E")}@media(min-width:1100px){.navigation__rows{height:calc(100vh - 140px);top:140px}.umd-lib.navigation__menu-item.utility-content#website-search{padding-top:unset;border-top:none}.umd-lib.navigation__menu-item.utility-content#website-search a{background-position-y:0px}}@media(min-width:1240px){.navigation__menu-button,#navigation-in-menu-button{display:none}.navigation__rows{width:initial;height:initial;display:flex;flex-direction:column-reverse;align-items:flex-end;padding:0rem;position:initial;transform:translate(0);background-color:initial;border-bottom:none;overflow-x:unset;overflow-y:unset}.navigation__rows>div{display:revert}.navigation__row-sec{margin-bottom:1rem}.navigation__menu-list,.navigation__secmenu-list{display:flex;flex-direction:row;gap:24px}.navigation__menu-item{padding-left:0rem;padding-right:0rem;padding-bottom:0rem;margin-bottom:0rem;justify-content:initial;position:relative;border-bottom:none}.navigation__menu-item>div{text-align:center}.navigation__submenu-item>div{text-align:start}.navigation__submenu-title>a{text-align:start}.navigation__menu-link{margin-right:.5rem}.navigation span.i-chevron-down{transform:rotate(0)}.navigation .navigation__menu-item:hover span.i-chevron-down{transform:rotate(180deg)}.navigation__row-sec{display:flex;flex-direction:row}.navigation__secmenu-list{height:17px;gap:1rem}.navigation__row-sec .navigation__menu-item{padding-left:1rem;margin-bottom:0rem;border-left:solid 1px var(--dark-gray)}.navigation__row-sec .navigation__menu-item>div{text-align:start}.navigation__row-sec .navigation__menu-item:first-child{padding-left:0rem;border-left:none}.navigation__row-sec .navigation__menu-item:last-child{margin-right:.5rem}.navigation__row-sec .navigation__menu-link{margin-right:0rem;font-size:.875rem;font-weight:400;line-height:.875rem;display:flex;flex-direction:row;align-items:center}.navigation__row-sec .navigation__menu-item:last-child{padding-bottom:0rem;margin-bottom:0rem;border-bottom:none}.navigation__row-sec .navigation__submenu-button{clip:rect(0,0,0,0);border-width:0;height:1px;width:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap}.navigation__menu-item:hover .navigation__submenu,.navigation__menu-item:focus .navigation__submenu{display:block}.navigation__site-search{padding-left:1rem;padding-right:0rem;flex-direction:row-reverse;justify-content:initial;font-size:.875rem;font-weight:400;line-height:.875rem;border-left:solid 1px var(--dark-gray)}button.navigation__site-search-button{min-width:17px;min-height:17px}button.navigation__site-search-button span{width:17px;height:17px;background-size:90%;background-position-x:-2px;background-position-y:-1px}.navigation__submenu{width:fit-content;height:unset;padding:1rem 0rem 0rem;display:none;position:absolute;top:100%;left:50%;transform:translate(-50%);transition:transform .5s;overflow-y:unset}.navigation__submenu:last-child{left:unset;right:0;transform:translate(0)}.navigation__row-sec .navigation__submenu{left:unset;right:0;transform:translate(0)}.navigation__submenu-header,.navigation__submenu-title{display:none}ul.navigation__submenu-list{padding:1.5rem}.navigation__submenu-content{padding:0rem;border-top:2px solid var(--maryland-red);box-shadow:-1px 9px 32px -10px #00000030}.navigation__submenu-item{width:max-content;min-width:7.5rem;max-width:14.375rem;padding-left:0rem;margin-bottom:1.5rem}.navigation__submenu-item:last-child{margin-bottom:0rem}.navigation__submenu-link{width:fit-content;display:inline}}@media(max-width:1239px){html{scrollbar-gutter:stable}body:has(.navigation__menu-button.is-active){padding-top:140px}body:has(.navigation__menu-button.is-active) #umdheader-main{position:fixed;top:0;left:0;right:0;z-index:499}body:has(.navigation__menu-button.is-active) #umdlib-navigation{position:fixed;top:44px;left:0;right:0;z-index:499;background-color:var(--white)}}@media(max-width:1099px){body:has(.navigation__menu-button.is-active){padding-top:152px}body:has(.navigation__menu-button.is-active) #umdlib-navigation{top:56px}}`;var qe,We,Ke,Ue,Ze,Fe,Ye,w;class I extends(Ye=k,Fe=[c({attribute:"logo-url"})],Ze=[c({type:Boolean,attribute:"sub-site"})],Ue=[c({type:Boolean,attribute:"search-option"})],Ke=[c({attribute:"search-label"})],We=[c({attribute:"search-url"})],qe=[c({type:Boolean,state:!0})],Ye){constructor(){super(...arguments);l(this,"logoUrl",o(w,8,this,"/logo.svg")),o(w,11,this);l(this,"subSite",o(w,12,this,!1)),o(w,15,this);l(this,"searchOption",o(w,16,this,!1)),o(w,19,this);l(this,"searchLabel",o(w,20,this,"Search")),o(w,23,this);l(this,"searchUrl",o(w,24,this,"/search")),o(w,27,this);l(this,"open",o(w,28,this,!1)),o(w,31,this);l(this,"toggleMenu",()=>{this.open=!this.open,this.menuButton.classList.toggle("is-active",this.open),this.menuButton.setAttribute("aria-expanded",String(this.open)),this.rows.classList.toggle("is-open",this.open),document.body.style.overflow=this.open?"hidden":""});l(this,"handleKeydown",e=>{e.key==="Escape"&&this.open&&this.toggleMenu()});l(this,"handleClick",e=>{const i=e.target.closest(".navigation__submenu-button"),a=e.target.closest(".navigation__back-button");if(i){const s=this.querySelector(`#${CSS.escape(i.getAttribute("aria-controls"))}`);if(s){const r=s.classList.toggle("is-active");i.setAttribute("aria-expanded",String(r)),this.rows.classList.toggle("submenu-open",r)}}a&&(this.shadowRoot.querySelectorAll(".navigation__submenu.is-active").forEach(s=>s.classList.remove("is-active")),this.rows.classList.remove("submenu-open"))})}firstUpdated(){this.rows=this.shadowRoot.querySelector(".navigation__rows"),this.menuButton=this.shadowRoot.querySelector(".navigation__menu-button"),this.menuButton.addEventListener("click",this.toggleMenu),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){this.menuButton?.removeEventListener("click",this.toggleMenu),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeydown),document.body.style.overflow="",super.disconnectedCallback()}render(){return h`
      <div class="umd-lib navigation" id="umdlib-navigation">
        <div class="navigation__content s-box-page-medium-h s-box-page-small-v s-center">
          <div class="navigation__header">
            <div class="navigation__logo">
              <a href="/" title="University Libraries Home" class="navigation__logo-link" aria-label="University Libraries Home">
                <img alt="University Libraries" loading="lazy" width="270" height="81" src=${this.logoUrl}>
              </a>
            </div>
          </div>
          <button class="navigation__menu-button" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="navigation-rows" type="button">
            <span class="navigation__menu-icon" aria-hidden="true"></span>
          </button>
          <div class="navigation__rows" id="navigation-rows">
            <div class="navigation__row-main">
              <nav role="navigation" aria-label="Main navigation"><ul class="navigation__menu-list"><slot name="main"></slot></ul></nav>
            </div>
            <div class="navigation__row-sec">
              <nav aria-label="Secondary navigation"><ul class="navigation__secmenu-list">
                ${this.subSite?h`<li class="umd-lib navigation__menu-item utility-content"><a href="https://lib.umd.edu/" class="navigation__menu-link">Libraries' Main Website</a></li>`:""}
                <slot name="utility"></slot>
                ${this.searchOption?h`<li class="umd-lib navigation__menu-item utility-content" id="website-search"><a href=${this.searchUrl} class="navigation__menu-link">${this.searchLabel}</a></li>`:""}
              </ul></nav>
            </div>
          </div>
        </div>
      </div>
    `}}w=S(Ye),d(w,5,"logoUrl",Fe,I),d(w,5,"subSite",Ze,I),d(w,5,"searchOption",Ue,I),d(w,5,"searchLabel",Ke,I),d(w,5,"searchUrl",We,I),d(w,5,"open",qe,I),E(w,I),l(I,"styles",[j,C(ra)]);customElements.define("umd-navigation",I);const la="footer{width:100%}footer a{color:var(--light-gray);text-decoration:none}footer a:hover,footer a:focus{color:var(--light-gray)}footer ul,footer ol{padding:0;margin:0}footer li{list-style:none}.footer--content,.footer--sub-content{max-width:1680px}.footer--content{display:flex;flex-direction:column}.footer--header{display:flex;flex-direction:column;gap:var(--space-md)}.footer--columns{display:flex;flex-direction:column}.footer--columns-main{flex-grow:1}.footer--columns-main nav,.footer--columns-main>div{break-inside:avoid}.footer--columns-main ul{border-left:1px solid var(--dark-gray)}.footer--columns-secondary-item{display:flex;align-items:center;gap:var(--space-sm)}.footer--sub-content,.footer--sub ul{display:flex;flex-direction:column;gap:var(--space-sm)}.social-media-list{display:flex;flex-direction:row;flex-wrap:wrap;gap:.5rem}ul.social-media-list li{margin-bottom:0rem}.social-media-list-item{display:flex;align-items:center;width:2rem;height:2rem}.social-media-list-item img,.social-media-list-item svg{margin:auto}@media(min-width:768px){.footer--header{display:flex;flex-direction:row;align-items:center;gap:var(--space-lg);margin-bottom:var(--space-xl)!important}.footer--columns{gap:var(--space-lg)}.footer--columns-main{flex-grow:1;column-width:18rem;column-gap:var(--space-xl)}.footer--columns-secondary{display:flex;flex-direction:column;align-items:flex-end}.footer--sub-content,.footer--sub ul{flex-direction:row}.footer--sub ul li{display:flex}.footer--sub ul li:not(:first-child),.footer--sub>div>div{padding-left:var(--space-sm);border-left:1px solid var(--dark-gray)}}@media(min-width:1024px){.footer--columns{flex-direction:row;align-items:flex-end;gap:0rem}.footer--columns-main{column-width:16rem}}@media(min-width:1440px){.footer--columns{gap:var(--space-lg)}}";var Je,Xe,Ge,Qe,ti,H;class J extends(ti=k,Qe=[c()],Ge=[c({attribute:"logo-url"})],Xe=[c({attribute:"campaign-logo-url"})],Je=[c({attribute:"depository-logo-url"})],ti){constructor(){super(...arguments);l(this,"telephone",o(H,8,this,"")),o(H,11,this);l(this,"logoUrl",o(H,12,this,"/logo-dark.svg")),o(H,15,this);l(this,"campaignLogoUrl",o(H,16,this,"/fearlessly-forward.svg")),o(H,19,this);l(this,"depositoryLogoUrl",o(H,20,this,"/rfdl.svg")),o(H,23,this)}render(){const e=this.telephone.replaceAll(".","");return h`
      <footer class="umd-lib footer c-bg-dark-primary c-content-dark-primary">
        <div class="footer--content s-box-page-medium-h s-box-page-medium-v s-center">
          <div class="footer--header s-stack-large">
            <div class="footer--logo"><img alt="University Libraries" loading="lazy" width="270" height="81" src=${this.logoUrl}></div>
            <div class="footer--title">
              <h2 class="t-title-small c-content-dark-primary"><slot name="institution"></slot></h2>
              <address>
                <p class="c-content-dark-secondary t-body-medium"><slot name="address"></slot></p>
                <a href=${`tel:+${e}`} class="c-content-dark-secondary t-body-medium">${this.telephone}</a>
              </address>
            </div>
          </div>
          <div class="footer--columns">
            <div class="footer--columns-main s-stack-large">
              <slot name="navigation"></slot>
              <slot name="social"></slot>
            </div>
            <div class="footer--columns-secondary">
              <a class="footer--columns-secondary-item s-stack-medium" href="https://fearlesslyforward.umd.edu/" target="_blank" rel="noreferrer noopener" aria-label="Link to the Fearlessly Forward Brand website">
                <img alt="University of Maryland Fearlessly Forward Campaign Logo" loading="lazy" width="156" height="67" src=${this.campaignLogoUrl}>
              </a>
              <div class="footer--columns-secondary-item">
                <img alt="" loading="lazy" width="37" height="33" src=${this.depositoryLogoUrl}>
                <p class="t-body-small c-content-dark-primary">Regional Federal Depository Library</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer--sub c-bg-dark-secondary">
          <div class="footer--sub-content s-box-page-small-v s-box-page-medium-h s-center">
            <slot name="legal"></slot>
            <div><p class="t-label c-content-dark-primary">© ${new Date().getFullYear()} UNIVERSITY OF MARYLAND</p></div>
          </div>
        </div>
      </footer>
    `}}H=S(ti),d(H,5,"telephone",Qe,J),d(H,5,"logoUrl",Ge,J),d(H,5,"campaignLogoUrl",Xe,J),d(H,5,"depositoryLogoUrl",Je,J),E(H,J),l(J,"styles",[j,C(la)]);customElements.define("umd-footer",J);const da='.umd-lib.card{height:100%;position:relative}.umd-lib.card .card--content .card--title .card--link:after{content:"";position:absolute;inset:0}.card--image img{aspect-ratio:3 / 2;object-fit:cover;object-position:center;width:100%;height:100%}.card--content{height:auto;flex-grow:1;display:flex;flex-direction:column}.card--eyebrow{margin-bottom:var(--space-xs)}.card--headline a span{display:inline-block;min-width:1rem;max-width:1rem;background-position-y:-3px;background-position-x:-3px}.card--details{margin-bottom:auto}.card--text p{font-size:1rem;line-height:1.375rem}.card--content-icon{display:flex;align-items:center;justify-content:center}.card--content-text{flex-grow:1;display:flex;flex-direction:column}.card--content-text .card--details{margin-bottom:0rem}.card--icon-lucide{height:4rem;width:4rem}.card--icon .card--content{flex-direction:row;gap:.5rem}.card--icon .card--content .card--text{margin-bottom:0!important}.card--icon .card--content .card--text p{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;align-self:stretch;overflow:hidden}@media(min-width:1024px){.umd-lib.card{max-width:45rem}.homepage-news .umd-lib.card--standard:first-child{position:relative}.homepage-news .umd-lib.card--standard:first-child .card--content{padding:1.5rem;position:absolute;bottom:0;background:linear-gradient(180deg,#fff0,#00000080 44%,#000000bf 61%,#000);display:flex;flex-direction:column;justify-content:flex-end;height:100%}.homepage-news .umd-lib.card--standard:first-child .card--content .card--eyebrow,.homepage-news .umd-lib.card--standard:first-child .card--content .card--link,.homepage-news .umd-lib.card--standard:first-child .card--content .card--text,.homepage-news .umd-lib.card--standard:first-child .card--content .card--date{color:var(--white)}.homepage-news .umd-lib.card--standard:first-child .card--content .card--link{background-image:linear-gradient(var(--white),var(--white))}.homepage-news .umd-lib.card--standard:first-child .card--content .card--details{margin:0}.homepage-news .umd-lib.card--standard:first-child .card--image{position:absolute;bottom:0;top:0}}';var ei,ii,ai,ni,oi,si,ri,li,di,v;class T extends(di=k,li=[c()],ri=[c({attribute:"heading-level"})],si=[c({attribute:"card-url"})],oi=[c({attribute:"image-url"})],ni=[c({attribute:"image-alt"})],ai=[c({attribute:"card-date"})],ii=[c({attribute:"icon-name"})],ei=[c()],di){constructor(){super(...arguments);l(this,"variant",o(v,8,this,"standard")),o(v,11,this);l(this,"headingLevel",o(v,12,this,"h3")),o(v,15,this);l(this,"cardUrl",o(v,16,this,"")),o(v,19,this);l(this,"imageUrl",o(v,20,this,"")),o(v,23,this);l(this,"imageAlt",o(v,24,this,"")),o(v,27,this);l(this,"cardDate",o(v,28,this,"")),o(v,31,this);l(this,"iconName",o(v,32,this,"info")),o(v,35,this);l(this,"componentid",o(v,36,this,"")),o(v,39,this)}render(){const e=["standard","overlay","icon"].includes(this.variant)?this.variant:"standard";return h`
      <div id=${this.componentid} class="umd-lib card card--${e} ${e==="standard"?"":"c-bg-secondary"} c-content-primary s-margin-general-medium">
        ${e==="standard"&&this.imageUrl?h`<div class="card--image"><img alt=${this.imageAlt} src=${this.imageUrl} loading="lazy"></div>`:""}
        <div class="card--content s-box-medium-v ${e==="standard"?"":"s-box-medium-h"}">
          ${e==="icon"?h`<div class="card--content-text">${this.renderContent(e)}</div>`:this.renderContent(e)}
          ${e==="icon"?h`<div class="card--content-icon"><span class="card--icon-lucide" aria-hidden="true">${this.iconName}</span></div>`:""}
        </div>
      </div>
    `}renderContent(e){const i=this.renderHeading(h`${this.cardUrl?h`<a href=${this.cardUrl} class="card--link"><slot name="title"></slot><span></span></a>`:h`<slot name="title"></slot>`}`);return h`
      <div class="card--title">
        ${e!=="icon"?h`<p class="card--eyebrow t-eyebrow"><slot name="eyebrow"></slot></p>`:""}
        ${i}
      </div>
      <div class="card--details">
        <div class="card--text t-body-small c-content-secondary wysiwyg-editor"><slot name="description"></slot></div>
        ${this.cardDate&&e!=="icon"?h`<div class="card--date t-label c-content-tertiary">${this.cardDate}</div>`:""}
      </div>
    `}renderHeading(e){const i="card--headline t-title-medium";switch(this.headingLevel){case"h2":return h`<h2 class=${i}>${e}</h2>`;case"h4":return h`<h4 class=${i}>${e}</h4>`;case"h5":return h`<h5 class=${i}>${e}</h5>`;case"h6":return h`<h6 class=${i}>${e}</h6>`;default:return h`<h3 class=${i}>${e}</h3>`}}}v=S(di),d(v,5,"variant",li,T),d(v,5,"headingLevel",ri,T),d(v,5,"cardUrl",si,T),d(v,5,"imageUrl",oi,T),d(v,5,"imageAlt",ni,T),d(v,5,"cardDate",ai,T),d(v,5,"iconName",ii,T),d(v,5,"componentid",ei,T),E(v,T),l(T,"styles",[j,C(da)]);customElements.define("umd-card",T);const ca='.umd-lib.list{border-bottom:solid 1px var(--light-gray);padding-top:0rem!important;padding:var(--space-md) 0rem;position:relative}.umd-lib.list .list--eyebrow{margin-bottom:.5rem}.umd-lib.list .list--title h2 a:after{content:"";position:absolute;inset:0}.umd-lib.list .list--details{display:flex;gap:.5rem;flex-direction:column-reverse;justify-content:space-between}.umd-lib.list .list--information{display:flex;flex-direction:column;justify-content:space-between}.umd-lib.list .list--content{display:flex;flex-direction:column;gap:.5rem}.umd-lib.list .list--description{margin-bottom:.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;align-self:stretch;overflow:hidden}.umd-lib.list .list--image img{aspect-ratio:16/9;object-fit:cover}@media(min-width:768px){.umd-lib.list{padding:var(--space-lg) 0rem}.umd-lib.list .list--details{gap:1em;flex-direction:row;justify-content:space-between}.umd-lib.list .list--image img{height:10rem;min-width:17rem}}';let ha=0;var ci,hi,mi,gi,ui,pi,vi,$;class V extends(vi=k,pi=[c({attribute:"heading-level"})],ui=[c({attribute:"list-url"})],gi=[c({attribute:"image-url"})],mi=[c({attribute:"image-alt"})],hi=[c({attribute:"list-date"})],ci=[c()],vi){constructor(){super();l(this,"headingLevel",o($,8,this,"h2")),o($,11,this);l(this,"listUrl",o($,12,this,"")),o($,15,this);l(this,"imageUrl",o($,16,this,"")),o($,19,this);l(this,"imageAlt",o($,20,this,"")),o($,23,this);l(this,"listDate",o($,24,this,"")),o($,27,this);l(this,"componentid",o($,28,this,"")),o($,31,this);this.listId=`list-${++ha}`}render(){return h`
      <div class="umd-lib list s-margin-general-medium" id=${this.componentid} role="article" aria-labelledby=${this.listId}>
        <div class="list--title-section s-stack-small">
          <div class="list--eyebrow t-eyebrow c-content-primary"><slot name="eyebrow"></slot></div>
          <div class="list--title">${this.renderHeading()}</div>
        </div>
        <div class="list--details">
          <div class="list--information">
            <div class="list--content">
              <div class="list--description t-body-small wysiwyg-editor"><slot name="description"></slot></div>
              ${this.listDate?h`<div class="list--date t-label c-content-tertiary">${this.listDate}</div>`:""}
            </div>
          </div>
          ${this.imageUrl?h`<div class="list--image"><img alt=${this.imageAlt} src=${this.imageUrl} loading="lazy"></div>`:""}
        </div>
      </div>
    `}renderHeading(){const e=h`<a href=${this.listUrl}><slot name="title"></slot></a>`;switch(this.headingLevel){case"h3":return h`<h3 class="t-title-medium c-content-primary" id=${this.listId}>${e}</h3>`;case"h4":return h`<h4 class="t-title-medium c-content-primary" id=${this.listId}>${e}</h4>`;case"h5":return h`<h5 class="t-title-medium c-content-primary" id=${this.listId}>${e}</h5>`;case"h6":return h`<h6 class="t-title-medium c-content-primary" id=${this.listId}>${e}</h6>`;default:return h`<h2 class="t-title-medium c-content-primary" id=${this.listId}>${e}</h2>`}}}$=S(vi),d($,5,"headingLevel",pi,V),d($,5,"listUrl",ui,V),d($,5,"imageUrl",gi,V),d($,5,"imageAlt",mi,V),d($,5,"listDate",hi,V),d($,5,"componentid",ci,V),E($,V),l(V,"styles",[j,C(ca)]);customElements.define("umd-list",V);
