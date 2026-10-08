(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const O=globalThis,j=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),W=new WeakMap;let it=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(j&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=W.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&W.set(e,t))}return t}toString(){return this.cssText}};const u=n=>new it(typeof n=="string"?n:n+"",void 0,I),E=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,a,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+n[o+1],n[0]);return new it(e,n,I)},lt=(n,t)=>{if(j)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),a=O.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=e.cssText,n.appendChild(i)}},F=j?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return u(e)})(n):n;const{is:dt,defineProperty:ct,getOwnPropertyDescriptor:ht,getOwnPropertyNames:mt,getOwnPropertySymbols:gt,getPrototypeOf:pt}=Object,R=globalThis,K=R.trustedTypes,ut=K?K.emptyScript:"",vt=R.reactiveElementPolyfillSupport,C=(n,t)=>n,D={toAttribute(n,t){switch(t){case Boolean:n=n?ut:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},at=(n,t)=>!dt(n,t),Z={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:at};Symbol.metadata??=Symbol("metadata"),R.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);a!==void 0&&ct(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:o}=ht(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:a,set(s){const c=a?.call(this);o?.call(this,s),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Z}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=pt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,i=[...mt(e),...gt(e)];for(const a of i)this.createProperty(a,e[a])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,a]of e)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const a=this._$Eu(e,i);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const a of i)e.unshift(F(a))}else t!==void 0&&e.push(F(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const o=i.getPropertyOptions(a),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:D;this._$Em=a;const c=s.fromAttribute(e,o.type);this[a]=c??this._$Ej?.get(a)??c,this._$Em=null}}requestUpdate(t,e,i,a=!1,o){if(t!==void 0){const s=this.constructor;if(a===!1&&(o=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??at)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,o]of i){const{wrapped:s}=o,c=this[a];s!==!0||this._$AL.has(a)||c===void 0||this.C(a,void 0,o,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[C("elementProperties")]=new Map,x[C("finalized")]=new Map,vt?.({ReactiveElement:x}),(R.reactiveElementVersions??=[]).push("2.1.2");const B=globalThis,Y=n=>n,P=B.trustedTypes,J=P?P.createPolicy("lit-html",{createHTML:n=>n}):void 0,ot="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,nt="?"+y,bt=`<${nt}>`,$=document,U=()=>$.createComment(""),L=n=>n===null||typeof n!="object"&&typeof n!="function",V=Array.isArray,ft=n=>V(n)||typeof n?.[Symbol.iterator]=="function",N=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,G=/>/g,_=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,tt=/"/g,st=/^(?:script|style|textarea|title)$/i,yt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),r=yt(1),k=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),et=new WeakMap,w=$.createTreeWalker($,129);function rt(n,t){if(!V(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return J!==void 0?J.createHTML(t):t}const _t=(n,t)=>{const e=n.length-1,i=[];let a,o=t===2?"<svg>":t===3?"<math>":"",s=S;for(let c=0;c<e;c++){const l=n[c];let h,p,d=-1,b=0;for(;b<l.length&&(s.lastIndex=b,p=s.exec(l),p!==null);)b=s.lastIndex,s===S?p[1]==="!--"?s=X:p[1]!==void 0?s=G:p[2]!==void 0?(st.test(p[2])&&(a=RegExp("</"+p[2],"g")),s=_):p[3]!==void 0&&(s=_):s===_?p[0]===">"?(s=a??S,d=-1):p[1]===void 0?d=-2:(d=s.lastIndex-p[2].length,h=p[1],s=p[3]===void 0?_:p[3]==='"'?tt:Q):s===tt||s===Q?s=_:s===X||s===G?s=S:(s=_,a=void 0);const f=s===_&&n[c+1].startsWith("/>")?" ":"";o+=s===S?l+bt:d>=0?(i.push(h),l.slice(0,d)+ot+l.slice(d)+y+f):l+y+(d===-2?c:f)}return[rt(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class H{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let o=0,s=0;const c=t.length-1,l=this.parts,[h,p]=_t(t,e);if(this.el=H.createElement(h,i),w.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(a=w.nextNode())!==null&&l.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(const d of a.getAttributeNames())if(d.endsWith(ot)){const b=p[s++],f=a.getAttribute(d).split(y),z=/([.?@])?(.*)/.exec(b);l.push({type:1,index:o,name:z[2],strings:f,ctor:z[1]==="."?$t:z[1]==="?"?xt:z[1]==="@"?kt:M}),a.removeAttribute(d)}else d.startsWith(y)&&(l.push({type:6,index:o}),a.removeAttribute(d));if(st.test(a.tagName)){const d=a.textContent.split(y),b=d.length-1;if(b>0){a.textContent=P?P.emptyScript:"";for(let f=0;f<b;f++)a.append(d[f],U()),w.nextNode(),l.push({type:2,index:++o});a.append(d[b],U())}}}else if(a.nodeType===8)if(a.data===nt)l.push({type:2,index:o});else{let d=-1;for(;(d=a.data.indexOf(y,d+1))!==-1;)l.push({type:7,index:o}),d+=y.length-1}o++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function A(n,t,e=n,i){if(t===k)return t;let a=i!==void 0?e._$Co?.[i]:e._$Cl;const o=L(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),o===void 0?a=void 0:(a=new o(n),a._$AT(n,e,i)),i!==void 0?(e._$Co??=[])[i]=a:e._$Cl=a),a!==void 0&&(t=A(n,a._$AS(n,t.values),a,i)),t}class wt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??$).importNode(e,!0);w.currentNode=a;let o=w.nextNode(),s=0,c=0,l=i[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new T(o,o.nextSibling,this,t):l.type===1?h=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(h=new At(o,this,t)),this._$AV.push(h),l=i[++c]}s!==l?.index&&(o=w.nextNode(),s++)}return w.currentNode=$,a}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),L(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ft(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=H.createElement(rt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{const o=new wt(a,this),s=o.u(this.options);o.p(e),this.T(s),this._$AH=o}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new H(t)),e}k(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const o of t)a===e.length?e.push(i=new T(this.O(U()),this.O(U()),this,this.options)):i=e[a],i._$AI(o),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=Y(t).nextSibling;Y(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class M{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(t,e=this,i,a){const o=this.strings;let s=!1;if(o===void 0)t=A(this,t,e,0),s=!L(t)||t!==this._$AH&&t!==k,s&&(this._$AH=t);else{const c=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=A(this,c[i+l],e,l),h===k&&(h=this._$AH[l]),s||=!L(h)||h!==this._$AH[l],h===m?t=m:t!==m&&(t+=(h??"")+o[l+1]),this._$AH[l]=h}s&&!a&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class $t extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}class xt extends M{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}}class kt extends M{constructor(t,e,i,a,o){super(t,e,i,a,o),this.type=5}_$AI(t,e=this){if((t=A(this,t,e,0)??m)===k)return;const i=this._$AH,a=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==m&&(i===m||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class At{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const Et=B.litHtmlPolyfillSupport;Et?.(H,T),(B.litHtmlVersions??=[]).push("3.3.3");const St=(n,t,e)=>{const i=e?.renderBefore??t;let a=i._$litPart$;if(a===void 0){const o=e?.renderBefore??null;i._$litPart$=a=new T(t.insertBefore(U(),o),o,void 0,e??{})}return a._$AI(n),a};const q=globalThis;class g extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=St(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}}g._$litElement$=!0,g.finalized=!0,q.litElementHydrateSupport?.({LitElement:g});const Ct=q.litElementPolyfillSupport;Ct?.({LitElement:g});(q.litElementVersions??=[]).push("4.2.2");const Ut=".separator{width:100%;margin:var(--space-lg) auto;border:0;border-top:1px solid}.separator--red{border-color:#e21833}.separator--yellow{border-color:#ffd200}.separator--gray{border-color:#e6e6e6}.separator--bronze{border-color:#ad7231}.separator--black{border-color:#000}.separator--wide{margin:var(--space-lg) auto}.separator--medium{margin:var(--space-sm) auto}.separator--small{margin:var(--space-xs) auto}";class Lt extends g{static styles=u(Ut);static properties={variant:{},margin:{},componentid:{}};variant="red";margin="medium";componentid="";render(){return r`<hr
      id=${this.componentid}
      class="separator separator--${this.variant} separator--${this.margin}"
      aria-hidden="true"
    >`}}customElements.define("umd-separator",Lt);const v=E`
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
`,Ht=".umd-lib.image{width:100%;height:auto;display:block}.umd-lib.image .image--image{width:100%;height:auto;object-fit:cover;object-position:center}.umd-lib.image .image--image.freeform{aspect-ratio:auto}.umd-lib.image .image--image.one_to_one{aspect-ratio:1 / 1}.umd-lib.image.landscape .image--image.four_to_three{aspect-ratio:4 / 3}.umd-lib.image.landscape .image--image.three_to_two{aspect-ratio:3 / 2}.umd-lib.image.landscape .image--image.sixteen_to_nine{aspect-ratio:16 / 9}.umd-lib.image.portrait .image--image.four_to_three{aspect-ratio:3 / 4}.umd-lib.image.portrait .image--image.three_to_two{aspect-ratio:2 / 3}.umd-lib.image.portrait .image--image.sixteen_to_nine{aspect-ratio:9 / 16}.umd-lib.image .image--caption{text-align:center}.umd-lib.image .image--caption>*:first-child{padding-top:var(--space-xs)}.wysiwyg-editor .umd-lib.image{display:table;width:auto;max-width:100%;height:auto}.wysiwyg-editor .umd-lib.image .image--image{width:auto;max-width:100%;height:auto;object-fit:cover;object-position:center}.wysiwyg-editor .umd-lib.image .image--caption{width:0;min-width:100%;overflow-wrap:break-word}@media(min-width:768px){.umd-lib.image .image--caption>*:first-child{padding-top:var(--space-sm)}}";class Tt extends g{static styles=[v,u(Ht),E`
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
  `];static properties={src:{},alt:{},variant:{},orientation:{},componentid:{}};src="";alt="";variant="freeform";orientation="landscape";componentid="";render(){return r`
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
    `}}customElements.define("umd-image",Tt);const zt="h3.s-lc-ea-h3{display:none}.s-lc-ea-tb{width:100%;border-bottom:none!important;font:inherit!important}.s-lc-ea-tb td,.s-lc-ea-tb td>*{padding-bottom:var(--space-sm)!important;font-size:1rem!important}.s-lc-ea-tb tr:last-child td,.s-lc-ea-tb td>*:last-child{padding-bottom:0!important}.s-lc-ea-l{font-weight:700!important;width:9rem!important}@media(min-width:768px){.s-lc-ea-tb td,.s-lc-ea-tb td>*{padding-bottom:var(--space-md)!important;font-size:1.125rem!important}}.s-lc-ea-noe{font-size:1rem!important}@media(min-width:768px){.s-lc-ea-noe{font-size:1.125rem!important}}";class Ot extends g{static styles=[v,u(zt),E`
    .body {
      margin-bottom: var(--space-md);
    }

    .text--label {
      display: block;
      color: var(--dark-gray);
      margin-bottom: var(--space-xs);
    }
  `];static properties={label:{},componentid:{},componentClass:{attribute:"component-class"}};label="";componentid="";componentClass="";render(){return r`
      <div
        id=${this.componentid}
        class="umd-lib body body--content wysiwyg-editor s-margin-general-medium ${this.componentClass}"
      >
        ${this.label?r`<span class="text--label c-content-secondary">${this.label}</span>`:""}
        <slot></slot>
      </div>
    `}}customElements.define("umd-text",Ot);const Pt=".text-callout--feature{border-left:4px solid var(--maryland-red)}.text-callout--text>*:last-child{margin-bottom:0rem!important}";class Rt extends g{static styles=[v,u(Pt),E`
    .text-callout--feature {
      margin-bottom: var(--space-md);
    }

  `];static properties={componentid:{}};componentid="";render(){return r`
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
    `}}customElements.define("umd-text-callout",Rt);const Mt='.accordion-child--headline{width:100%;display:flex;padding-right:3.5rem!important;border-top:.125rem solid var(--lightest-gray);transition:all .3s ease-in-out;position:relative;text-align:start}.accordion-child--headline:hover,.accordion-child--headline:focus,.accordion-child--headline[aria-expanded=true]{border-color:var(--maryland-red)}.accordion-child--headline:hover div,.accordion-child--headline:hover div p,.accordion-child--headline:focus div,.accordion-child--headline:focus div p,.accordion-child--headline[aria-expanded=true] div,.accordion-child--headline[aria-expanded=true] div p{color:var(--maryland-red)}.accordion-child--body-wrapper{transition:height .3s ease-out;overflow:hidden}.accordion-child--headline:before,.accordion-child--headline:after{content:"";width:18px;height:4px;position:absolute;top:calc(50% - 2px);right:32px;background-color:var(--maryland-red);transition:transform .5s}.accordion-child--headline:after{transform:rotate(270deg)}.accordion-child--headline[aria-expanded=true]:after{transform:rotate(180deg)}div:has(+div>div.umd-lib.accordion--container)>div.umd-lib.accordion--container,div.wysiwyg-editor>div.umd-lib.accordion--container:has(+div.umd-lib.accordion--container){margin-bottom:var(--space-xs)}';let Nt=0;class Dt extends g{static styles=[v,u(Mt)];static properties={componentid:{},headingLevel:{attribute:"heading-level"},defaultOpen:{type:Boolean,attribute:"default-open",converter:{fromAttribute:t=>t!==null&&t!=="false"}},linkText:{attribute:"link-text"},linkUrl:{attribute:"link-url"},open:{state:!0}};constructor(){super(),this.componentid="",this.headingLevel="h3",this.defaultOpen=!1,this.linkText="",this.linkUrl="",this.open=!1,this.accordionId=`accordion-${++Nt}`,this.accordionInitialized=!1,this.transitionEndHandler=null}willUpdate(t){t.has("defaultOpen")&&(!this.hasUpdated||!t.has("open"))&&(this.open=this.defaultOpen)}updated(){const t=this.shadowRoot.querySelector(".accordion-child--body-wrapper");if(!this.accordionInitialized){t.style.display=this.open?"block":"none",t.style.height=this.open?"auto":"0px",this.previousOpen=this.open,this.accordionInitialized=!0;return}this.previousOpen!==this.open&&(this.previousOpen=this.open,this.transitionEndHandler&&t.removeEventListener("transitionend",this.transitionEndHandler),this.transitionEndHandler=null,this.open?(t.style.display="block",t.style.height="0px",t.offsetHeight,t.style.height=`${t.scrollHeight}px`,this.transitionEndHandler=e=>{e.target!==t||e.propertyName!=="height"||(t.style.height="auto",t.removeEventListener("transitionend",this.transitionEndHandler),this.transitionEndHandler=null)},t.addEventListener("transitionend",this.transitionEndHandler)):(t.style.height=`${t.scrollHeight}px`,t.offsetHeight,t.style.height="0px"))}toggle=()=>{this.open=!this.open};render(){const t=this.accordionId,e=/^h[2-6]$/.test(this.headingLevel)?this.headingLevel:"h3",i=`${t}-body`;return r`
      <div class="umd-lib accordion--container s-margin-general-medium" id=${this.componentid}>
        <div class="accordion-child--container">
          ${this.renderHeading(e,r`
            <button
              type="button"
              id=${t}
              class="accordion-child--headline c-bg-secondary s-box-medium-v s-box-medium-h"
              aria-expanded=${this.open}
              aria-controls=${i}
              @click=${this.toggle}
            >
              <div class="t-interactive c-content-primary"><slot name="title"></slot></div>
            </button>
          `)}
          <div
            role="region"
            id=${i}
            class="accordion-child--body-wrapper c-bg-secondary"
            aria-labelledby=${t}
            aria-hidden=${!this.open}
            style="display: none; height: 0px;"
          >
            <div class="accordion-child--body s-box-medium-h s-box-medium-v-bottom wysiwyg-editor">
              <slot name="body"></slot>
              <p>Test</p>
            </div>
            ${this.linkText&&this.linkUrl?r`
              <div class="accordion-child--body-button s-box-medium-h s-box-medium-v-bottom">
                <a href=${this.linkUrl} class="emphasized-link--text t-body-small t-bold c-content-primary">
                  ${this.linkText}
                </a>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}renderHeading(t,e){switch(t){case"h2":return r`<h2>${e}</h2>`;case"h4":return r`<h4>${e}</h4>`;case"h5":return r`<h5>${e}</h5>`;case"h6":return r`<h6>${e}</h6>`;default:return r`<h3>${e}</h3>`}}}customElements.define("umd-accordion",Dt);const jt=".alert--site_wide{background-color:var(--maryland-yellow);border-left:.5rem solid var(--maryland-red)}.alert--site_wide .alert--title{padding-right:1.5rem}.alert--in_page .alert--content{border:.25rem solid var(--maryland-yellow)}.alert--site_wide .alert--content>div:last-of-type h2,.alert--site_wide .alert--content>div:last-of-type p{margin-bottom:0}.alert--content{position:relative}.alert--button-close{position:absolute;top:0;right:0}.alert--button-close button{width:25px;height:25px}.alert--button-close svg{height:1.5rem}.alert--content-with-image{display:flex;flex-direction:column-reverse;gap:var(--space-sm);align-items:stretch}.alert--content-text{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:space-between}.alert--image{flex-shrink:0;max-width:100%;aspect-ratio:3 / 2;align-self:flex-start;overflow:hidden}.alert--image img{width:100%;height:100%;object-fit:cover;display:block}.alert--site_wide.information{background-color:var(--lightest-gray)}@media(min-width:768px){.alert--content-with-image{flex-direction:row;gap:var(--space-md)}.alert--image{max-width:300px}}";class It extends g{static styles=[v,u(jt),E`
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
  `];static properties={variant:{},headingLevel:{attribute:"heading-level"},componentid:{},image:{},imageAlt:{attribute:"image-alt"},linkText:{attribute:"link-text"},linkUrl:{attribute:"link-url"},customizationClass:{attribute:"customization-class"},dismissed:{state:!0}};variant="in_page";headingLevel="h2";componentid="";image="";imageAlt="";linkText="";linkUrl="";customizationClass="";dismissed=!1;get isSiteWide(){return this.variant==="site_wide"}dismiss(){this.dismissed=!0}render(){const t=this.componentid||"alert",e=/^h[2-6]$/.test(this.headingLevel)?this.headingLevel:"h2",i=`${t}-title`,a=this.isSiteWide&&this.image&&this.imageAlt;return this.dismissed?"":r`
      <div
        id=${t}
        class="umd-lib alert alert--${this.variant} ${this.customizationClass}"
        role=${this.isSiteWide?"region":"note"}
        aria-labelledby=${i}
      >
        <div class="alert--container ${this.isSiteWide?"s-box-page-medium-h s-center s-page-lock":"s-margin-general-medium"}">
          <div class="alert--content s-box-medium-v ${this.isSiteWide?"":"s-box-medium-h"}">
            <div class="alert--title">
              ${this.isSiteWide?r`<p id=${i} class="t-title-small c-content-primary s-stack-small"><slot name="title"></slot></p>`:this.renderHeading(e,i)}
            </div>
            ${a?r`
              <div class="alert--content-with-image">
                <div class="alert--content-text">
                  ${this.renderDescription()}
                  ${this.renderLink()}
                </div>
                <div class="alert--image">
                  <img src=${this.image} alt=${this.imageAlt} loading="lazy">
                </div>
              </div>
            `:r`
              ${this.renderDescription()}
              ${this.renderLink()}
            `}
            ${this.isSiteWide?r`
              <div class="alert--button-close s-box-medium-v">
                <button type="button" aria-label="Close site notification" aria-controls=${t} @click=${this.dismiss}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="2" />
                  </svg>
                </button>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}renderDescription(){return r`<div class="alert--description wysiwyg-editor"><slot name="description"></slot></div>`}renderHeading(t,e){const i=r`<slot name="title"></slot>`,a="t-title-small c-content-primary s-stack-small";switch(t){case"h3":return r`<h3 id=${e} class=${a}>${i}</h3>`;case"h4":return r`<h4 id=${e} class=${a}>${i}</h4>`;case"h5":return r`<h5 id=${e} class=${a}>${i}</h5>`;case"h6":return r`<h6 id=${e} class=${a}>${i}</h6>`;default:return r`<h2 id=${e} class=${a}>${i}</h2>`}}renderLink(){return this.linkText&&this.linkUrl?r`<a class="emphasized-link--text t-body-small t-bold c-content-primary" href=${this.linkUrl}>${this.linkText}</a>`:""}}customElements.define("umd-alert",It);const Bt=".scroll-top--container{position:fixed;bottom:69px;right:1.5rem;z-index:250;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.scroll-top--container.visible{opacity:1;visibility:visible}.scroll-top--button{padding:1rem;border:1px solid var(--maryland-yellow)}@media(min-width:768px){.scroll-top--container{right:3rem}}@media(min-width:1024px){.scroll-top--container{right:4rem}}@media(min-width:1440px){.scroll-top--container{right:7.5rem}}";class Vt extends g{static styles=u(Bt);static properties={threshold:{type:Number},visible:{state:!0}};threshold=300;visible=!1;connectedCallback(){super.connectedCallback(),this.handleScroll=this.handleScroll.bind(this),window.addEventListener("scroll",this.handleScroll,{passive:!0}),this.handleScroll()}disconnectedCallback(){window.removeEventListener("scroll",this.handleScroll),super.disconnectedCallback()}handleScroll(){this.visible=window.scrollY>this.threshold}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}render(){return r`
      <div class="umd-lib scroll-top--container ${this.visible?"visible":""}">
        <button class="scroll-top--button c-bg-dark-primary" type="button" @click=${this.scrollToTop}>
          <svg title="arrow icon" aria-hidden="true" width="16" height="19" viewBox="0 0 16 19" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 6.86768L0.708333 12.5L0.708333 7.45542L7.90396 0.0985589L7.97502 0.169624L8.04608 0.0985618L15.2417 7.45542V12.5L9.66667 6.91771V18.9583H6.33333L6.33333 6.86768Z" fill="white"></path>
          </svg>
          <span class="sr-only">Scroll To Top</span>
        </button>
      </div>
    `}}customElements.define("umd-scroll-to-top",Vt);const qt=".tabs--triggers{width:fit-content;display:flex;flex-direction:row;position:relative}.tabs--triggers.vertical{flex-direction:column}.tabs--triggers-deco{max-width:100%;height:2px;background-color:var(--light-gray);position:absolute}.tabs--triggers-deco .tabs--triggers-deco-activeline{width:50px;height:2px;background-color:var(--maryland-red);position:absolute;top:0;left:0;transition:width .5s ease-in-out,height .5s ease-in-out,transform .5s ease-in-out}.tab--trigger{width:fit-content;display:flex;flex-direction:row;align-items:start;text-align:left}.tab--trigger.active{color:var(--black)}.tab--trigger span{text-wrap:nowrap}.tab--content h3{margin-bottom:1rem}";class Wt extends g{static styles=[v,u(qt),E`
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
  `];static properties={defaultTab:{attribute:"default-tab"},tabLabel:{attribute:"tab-label"},componentid:{},vertical:{type:Boolean,state:!0}};defaultTab="";tabLabel="";componentid="";vertical=!1;firstUpdated(){this.triggerSlot=this.shadowRoot.querySelector("slot[name=triggers]"),this.contentSlot=this.shadowRoot.querySelector("slot[name=content]"),this.triggerSlot.addEventListener("slotchange",()=>this.initialize()),this.contentSlot.addEventListener("slotchange",()=>this.initialize()),window.addEventListener("resize",this.handleResize),window.addEventListener("hashchange",this.handleHashChange),this.initialize()}disconnectedCallback(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("hashchange",this.handleHashChange),super.disconnectedCallback()}get triggers(){return this.triggerSlot?.assignedElements({flatten:!0}).filter(t=>t.getAttribute("role")==="tab")||[]}get panels(){return this.contentSlot?.assignedElements({flatten:!0}).filter(t=>t.getAttribute("role")==="tabpanel")||[]}initialize(){const t=this.triggers;if(!t.length)return;t.forEach((o,s)=>{o.onclick=()=>this.selectTab(this.tabValue(o),!0),o.onkeydown=c=>this.handleKeyDown(c,s)});const i=this.getHashValue()||this.defaultTab,a=t.find(o=>this.tabValue(o)===i)||t[0];this.selectTab(this.tabValue(a),!1),this.updateDecoration()}tabValue(t){return t.id.replace(/^tab-/,"")}getHashValue(){const t=window.location.hash.slice(1);if(!t)return"";const e=t.indexOf("--"),i=this.componentid||this.id;return e>=0?t.slice(0,e)===i?t.slice(e+2):"":t}updateURLHash(t){const e=this.componentid||this.id,i=e?`${e}--${t}`:t;history.pushState(null,"",`#${i}`)}selectTab(t,e=!1){const i=this.triggers,a=this.panels;i.forEach(o=>{const s=this.tabValue(o)===t;o.setAttribute("aria-selected",String(s)),o.setAttribute("tabindex",s?"0":"-1"),o.classList.toggle("active",s)}),a.forEach(o=>{const s=o.id===`tabpanel-${t}`;o.hidden=!s,o.classList.toggle("active",s),o.classList.toggle("hidden",!s)}),e&&this.updateURLHash(t),requestAnimationFrame(()=>this.updateDecoration())}handleKeyDown(t,e){const i=this.vertical?"ArrowDown":"ArrowRight",a=this.vertical?"ArrowUp":"ArrowLeft";let o=e;if(t.key===i&&(o=(e+1)%this.triggers.length),t.key===a&&(o=(e-1+this.triggers.length)%this.triggers.length),t.key==="Home"&&(o=0),t.key==="End"&&(o=this.triggers.length-1),o!==e){t.preventDefault();const s=this.triggers[o];s.focus(),this.selectTab(this.tabValue(s),!0)}}handleHashChange=()=>{const t=this.getHashValue();t&&this.triggers.some(e=>this.tabValue(e)===t)&&this.selectTab(t)};handleResize=()=>this.updateDecoration();updateDecoration(){const t=this.shadowRoot?.querySelector(".tabs--triggers-deco"),e=this.shadowRoot?.querySelector(".tabs--triggers-deco-activeline"),i=this.triggers.find(s=>s.getAttribute("aria-selected")==="true");if(!t||!e||!i)return;const a=i.getBoundingClientRect(),o=t.parentElement.getBoundingClientRect();e.style.width=`${a.width}px`,e.style.transform=`translateX(${a.left-o.left}px)`}render(){return r`
      <div class="umd-lib tabs--container c-bg-primary c-content-primary s-margin-general-medium" id=${this.componentid}>
        ${this.tabLabel?r`<p class="sr-only">${this.tabLabel}</p>`:""}
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
    `}}customElements.define("umd-tabs",Wt);const Ft='.hero--minimal .hero--container,.hero--overlay .hero--container{display:flex;flex-direction:column;width:100%;max-width:1680px}.hero--minimal .hero--content,.hero--overlay .hero--content{order:2;z-index:2}.hero--minimal .hero--image,.hero--overlay .hero--image{width:auto;height:100%;z-index:0;order:1}.hero--minimal .hero--image figure,.hero--overlay .hero--image figure{height:100%;width:100%;position:relative}.hero--minimal .hero--image figure img,.hero--overlay .hero--image figure img{aspect-ratio:16/9;object-fit:cover;object-position:center;height:100%;width:100%}.hero--minimal .hero--image figure figcaption,.hero--overlay .hero--image figure figcaption{position:absolute;bottom:0;right:0;width:fit-content;padding:.25rem .5rem;background-color:#0009;color:#fff;text-align:end;z-index:3}.hero--minimal .hero--image figure figcaption *,.hero--overlay .hero--image figure figcaption *{color:#fff}.hero--minimal .hero--image figure figcaption a,.hero--overlay .hero--image figure figcaption a{color:#ffd200}.hero--minimal .hero--content .hero--headline:last-child,.hero--overlay .hero--content .hero--headline:last-child{margin-bottom:0rem!important}.hero--minimal .hero--content .hero--content-inner{width:auto;border-left:2px solid var(--maryland-red);padding-left:var(--space-sm)}.hero--overlay .hero--eyebrow{color:var(--black);background-color:var(--maryland-yellow);padding:.5rem 1.5rem;display:inline-block;clip-path:polygon(8% 0,100% 0,92% 100%,0 100%)}.hero--overlay .hero--eyebrow p{color:var(--black)}.hero--overlay.dark-theme .hero--content a{color:#fff!important;background-color:#e21833!important}.hero--overlay.dark-theme .use-button h2 a{padding:10px 15px;border:1px solid white}@media(min-width:768px){.hero--minimal .hero--content .hero--content-inner{padding-left:var(--space-2xl)}}@media(min-width:1024px){.hero--minimal,.hero--overlay{position:relative}.hero--minimal .hero--image{position:absolute;right:0;top:0;width:50%;height:100%}.hero--overlay .hero--image{position:absolute;right:0;top:0;width:100%;height:100%}.hero--minimal .hero--content,.hero--overlay .hero--content{width:50%}.hero--overlay .hero--content{position:relative;z-index:2}.hero--minimal .hero--content.text-only,.hero--overlay .hero--content.text-only{width:100%}.hero--overlay .hero--image:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(90deg,#fafafa 40%,#fafafacc 50%,#fafafa00 75%);z-index:1}.hero--overlay.dark-theme .hero--image:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(90deg,#000 40%,#000c 50%,#0000 75%);z-index:1}.hero--minimal .hero--image figure figcaption{max-width:100%}.hero--overlay .hero--image figure figcaption{max-width:50%}}';class Kt extends g{static styles=[v,u(Ft)];static properties={variant:{},theme:{},image:{},imageAlt:{attribute:"image-alt"}};variant="minimal";theme="light";image="";imageAlt="";render(){const t=["minimal","overlay"].includes(this.variant)?this.variant:"minimal",e=this.theme==="dark"?"c-bg-primary c-content-primary dark-theme":"c-bg-secondary c-content-primary";return r`
      <div class="umd-lib hero--${t} ${e}" role="none">
        <div class="hero--container s-center">
          <div class="hero--content ${this.image?"":"text-only"} s-box-page-medium-h s-box-page-medium-v">
            <div class="hero--content-inner">
              <div class="hero--eyebrow ${t==="minimal"?"c-content-secondary":""} t-eyebrow s-stack-small">
                <slot name="eyebrow"></slot>
              </div>
              <h1 class="hero--headline t-display s-stack-medium"><slot name="title"></slot></h1>
              <div class="hero--description c-content-secondary t-body-medium wysiwyg-editor">
                <slot name="description"></slot>
              </div>
            </div>
          </div>
          ${this.image?r`
            <div class="hero--image">
              <figure>
                <img alt=${this.imageAlt} src=${this.image} loading="lazy">
                <figcaption class="t-label wysiwyg-editor"><slot name="caption"></slot></figcaption>
              </figure>
            </div>
          `:""}
        </div>
      </div>
    `}}customElements.define("umd-hero",Kt);const Zt=`.navigation{width:100%}.navigation ul{padding:0;margin:0;list-style:none}.navigation a{text-decoration:none;color:var(--black)}.navigation a:hover,.navigation a:focus{text-decoration:none;color:var(--maryland-red)}.navigation ul a.is-active{background-image:linear-gradient(var(--maryland-yellow),var(--maryland-yellow));background-position:left bottom;background-repeat:no-repeat;background-size:100% 2px;font-weight:700}.navigation button{min-width:25px;min-height:25px;background:none;border:none;padding:0;margin:0;font:inherit;color:inherit;cursor:pointer;outline:none}.navigation button:focus{outline:revert}.navigation__content{max-width:1680px;display:flex;justify-content:space-between;align-items:center;flex-direction:row}.navigation__logo{height:4rem}.navigation__logo img{padding:0 2rem 0 0;height:100%;width:auto;object-fit:contain}.navigation__menu-button{height:25px;width:25px;display:block;position:relative}.navigation__menu-icon,.navigation__menu-icon:before{width:25px;height:2px;content:"";position:absolute;transition:left 0s,width 0s,top .2s,transform .2s;background-color:var(--black)}.navigation__menu-icon:after{width:16px;height:2px;content:"";position:absolute;transition:left 0s,width 0s,top .2s,transform .2s;background-color:var(--black)}.navigation__menu-icon{top:50%;left:50%;transform:translate(-50%,-50%)}.navigation__menu-icon:before{top:-8px;left:0}.navigation__menu-icon:after{bottom:-8px;left:8px}.navigation__menu-button.is-active .navigation__menu-icon{background:transparent}.navigation__menu-button.is-active .navigation__menu-icon:before{top:0;transform:rotate(45deg)}.navigation__menu-button.is-active .navigation__menu-icon:after{width:25px;top:0;left:0;transform:rotate(-45deg)}.navigation span.i-chevron-down{display:block;transform:rotate(270deg);transition:all .3s ease}.navigation span.i-chevron-down:hover,.navigation span.i-chevron-down:focus{transform:translate(4px) rotate(270deg)}.navigation__rows{width:100%;height:calc(100vh - 152px);padding:1.5rem;position:fixed;top:152px;left:0;transform:translate(-100%);transition:transform .3s ease;background-color:var(--white);border-bottom:8px solid var(--maryland-red);overflow:hidden;overflow-y:auto;z-index:400}.navigation__rows.is-open{transform:translate(0)}.navigation__rows.is-open.submenu-open{overflow-y:hidden}.navigation__rows>div{display:none}.navigation__rows.is-open>div{display:revert}.navigation__menu-item{padding-left:1rem;padding-right:1rem;padding-bottom:1.5rem;margin-bottom:1.5rem;display:flex;flex-direction:row;justify-content:space-between;border-bottom:solid 1px var(--light-gray)}.navigation__row-sec .navigation__menu-item{display:flex;flex-direction:row;padding-bottom:0rem;margin-bottom:1.5rem;border-bottom:none}.navigation__menu-link,.navigation__site-search,.navigation__row-sec .navigation__menu-link{font-size:1rem;font-weight:400}.navigation__row-sec .navigation__menu-item:last-child{padding-bottom:1.5rem;margin-bottom:1.5rem;border-bottom:solid 1px var(--light-gray)}.navigation__site-search{padding-left:1rem;padding-right:1rem;display:flex;flex-direction:row;justify-content:space-between}.navigation__site-search-button{display:flex}.navigation__submenu{width:100%;height:100%;padding:1.5rem;display:none;position:fixed;top:0;left:0;flex-direction:column;transform:translate(100%);transition:transform .3s ease;background-color:var(--white);overflow-y:auto;z-index:401}.navigation__submenu.is-open,.navigation__submenu.is-active{display:flex}.navigation__submenu.is-open .navigation__submenu-content,.navigation__submenu.is-open .navigation__submenu-header{display:none}.navigation__submenu.is-open.is-active .navigation__submenu-content,.navigation__submenu.is-open.is-active .navigation__submenu-header{display:revert}.navigation__submenu.is-open.is-active,.navigation__dropdown.is-open.is-active{transform:translate(0);overflow:hidden}.navigation__submenu.is-open.is-active{overflow-y:auto}.navigation__submenu-content{padding:0rem 1rem}.navigation .navigation__back-button span.i-chevron-down{display:block;transform:rotate(90deg);transition:all .3s ease}.navigation__submenu-header{padding-bottom:1.5rem;margin-bottom:1.5rem;border-bottom:solid 1px var(--light-gray);order:-1}.navigation__back-button{display:flex;flex-direction:row;align-items:center;gap:.5rem;text-transform:uppercase}.navigation__submenu-title{margin-bottom:1.5rem;font-size:1rem;font-weight:700}.navigation__submenu-title a.is-active{background-image:none!important}.navigation__submenu-item{padding-left:1rem;padding-right:0rem;padding-bottom:0rem;margin-bottom:1rem;border-bottom:none}.umd-lib.navigation__menu-item.utility-content#website-search{padding-top:1.5rem;border-top:solid 1px var(--light-gray)}.umd-lib.navigation__menu-item.utility-content#website-search a{padding-left:1.25rem;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M6.37158 1.5C3.31306 1.50019 0.833682 3.97957 0.833496 7.03809C0.833496 10.0968 3.31295 12.577 6.37158 12.5771C7.44259 12.5771 8.44213 12.2715 9.28955 11.7451L11.9634 14.4199H15.1665L10.9624 10.1367C11.5605 9.25236 11.9106 8.18605 11.9106 7.03809C11.9105 3.97945 9.43026 1.5 6.37158 1.5ZM6.37158 3.44336C8.357 3.44336 9.9671 5.05271 9.96729 7.03809C9.96729 9.02362 8.35711 10.6338 6.37158 10.6338C4.38621 10.6336 2.77686 9.0235 2.77686 7.03809C2.77704 5.05283 4.38632 3.44355 6.37158 3.44336Z' fill='black'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position-y:3px}.umd-lib.navigation__menu-item.utility-content#website-search a:hover,.umd-lib.navigation__menu-item.utility-content#website-search a:focus{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M6.37158 1.5C3.31306 1.50019 0.833682 3.97957 0.833496 7.03809C0.833496 10.0968 3.31295 12.577 6.37158 12.5771C7.44259 12.5771 8.44213 12.2715 9.28955 11.7451L11.9634 14.4199H15.1665L10.9624 10.1367C11.5605 9.25236 11.9106 8.18605 11.9106 7.03809C11.9105 3.97945 9.43026 1.5 6.37158 1.5ZM6.37158 3.44336C8.357 3.44336 9.9671 5.05271 9.96729 7.03809C9.96729 9.02362 8.35711 10.6338 6.37158 10.6338C4.38621 10.6336 2.77686 9.0235 2.77686 7.03809C2.77704 5.05283 4.38632 3.44355 6.37158 3.44336Z' fill='%23E21833'/%3E%3C/svg%3E")}@media(min-width:1100px){.navigation__rows{height:calc(100vh - 140px);top:140px}.umd-lib.navigation__menu-item.utility-content#website-search{padding-top:unset;border-top:none}.umd-lib.navigation__menu-item.utility-content#website-search a{background-position-y:0px}}@media(min-width:1240px){.navigation__menu-button,#navigation-in-menu-button{display:none}.navigation__rows{width:initial;height:initial;display:flex;flex-direction:column-reverse;align-items:flex-end;padding:0rem;position:initial;transform:translate(0);background-color:initial;border-bottom:none;overflow-x:unset;overflow-y:unset}.navigation__rows>div{display:revert}.navigation__row-sec{margin-bottom:1rem}.navigation__menu-list,.navigation__secmenu-list{display:flex;flex-direction:row;gap:24px}.navigation__menu-item{padding-left:0rem;padding-right:0rem;padding-bottom:0rem;margin-bottom:0rem;justify-content:initial;position:relative;border-bottom:none}.navigation__menu-item>div{text-align:center}.navigation__submenu-item>div{text-align:start}.navigation__submenu-title>a{text-align:start}.navigation__menu-link{margin-right:.5rem}.navigation span.i-chevron-down{transform:rotate(0)}.navigation .navigation__menu-item:hover span.i-chevron-down{transform:rotate(180deg)}.navigation__row-sec{display:flex;flex-direction:row}.navigation__secmenu-list{height:17px;gap:1rem}.navigation__row-sec .navigation__menu-item{padding-left:1rem;margin-bottom:0rem;border-left:solid 1px var(--dark-gray)}.navigation__row-sec .navigation__menu-item>div{text-align:start}.navigation__row-sec .navigation__menu-item:first-child{padding-left:0rem;border-left:none}.navigation__row-sec .navigation__menu-item:last-child{margin-right:.5rem}.navigation__row-sec .navigation__menu-link{margin-right:0rem;font-size:.875rem;font-weight:400;line-height:.875rem;display:flex;flex-direction:row;align-items:center}.navigation__row-sec .navigation__menu-item:last-child{padding-bottom:0rem;margin-bottom:0rem;border-bottom:none}.navigation__row-sec .navigation__submenu-button{clip:rect(0,0,0,0);border-width:0;height:1px;width:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap}.navigation__menu-item:hover .navigation__submenu,.navigation__menu-item:focus .navigation__submenu{display:block}.navigation__site-search{padding-left:1rem;padding-right:0rem;flex-direction:row-reverse;justify-content:initial;font-size:.875rem;font-weight:400;line-height:.875rem;border-left:solid 1px var(--dark-gray)}button.navigation__site-search-button{min-width:17px;min-height:17px}button.navigation__site-search-button span{width:17px;height:17px;background-size:90%;background-position-x:-2px;background-position-y:-1px}.navigation__submenu{width:fit-content;height:unset;padding:1rem 0rem 0rem;display:none;position:absolute;top:100%;left:50%;transform:translate(-50%);transition:transform .5s;overflow-y:unset}.navigation__submenu:last-child{left:unset;right:0;transform:translate(0)}.navigation__row-sec .navigation__submenu{left:unset;right:0;transform:translate(0)}.navigation__submenu-header,.navigation__submenu-title{display:none}ul.navigation__submenu-list{padding:1.5rem}.navigation__submenu-content{padding:0rem;border-top:2px solid var(--maryland-red);box-shadow:-1px 9px 32px -10px #00000030}.navigation__submenu-item{width:max-content;min-width:7.5rem;max-width:14.375rem;padding-left:0rem;margin-bottom:1.5rem}.navigation__submenu-item:last-child{margin-bottom:0rem}.navigation__submenu-link{width:fit-content;display:inline}}@media(max-width:1239px){html{scrollbar-gutter:stable}body:has(.navigation__menu-button.is-active){padding-top:140px}body:has(.navigation__menu-button.is-active) #umdheader-main{position:fixed;top:0;left:0;right:0;z-index:499}body:has(.navigation__menu-button.is-active) #umdlib-navigation{position:fixed;top:44px;left:0;right:0;z-index:499;background-color:var(--white)}}@media(max-width:1099px){body:has(.navigation__menu-button.is-active){padding-top:152px}body:has(.navigation__menu-button.is-active) #umdlib-navigation{top:56px}}`;class Yt extends g{static styles=[v,u(Zt)];static properties={logoUrl:{attribute:"logo-url"},subSite:{type:Boolean,attribute:"sub-site"},searchOption:{type:Boolean,attribute:"search-option"},searchLabel:{attribute:"search-label"},searchUrl:{attribute:"search-url"},open:{state:!0}};logoUrl="/logo.svg";subSite=!1;searchOption=!1;searchLabel="Search";searchUrl="/search";open=!1;firstUpdated(){this.rows=this.shadowRoot.querySelector(".navigation__rows"),this.menuButton=this.shadowRoot.querySelector(".navigation__menu-button"),this.menuButton.addEventListener("click",this.toggleMenu),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){this.menuButton?.removeEventListener("click",this.toggleMenu),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeydown),document.body.style.overflow="",super.disconnectedCallback()}toggleMenu=()=>{this.open=!this.open,this.menuButton.classList.toggle("is-active",this.open),this.menuButton.setAttribute("aria-expanded",String(this.open)),this.rows.classList.toggle("is-open",this.open),document.body.style.overflow=this.open?"hidden":""};handleKeydown=t=>{t.key==="Escape"&&this.open&&this.toggleMenu()};handleClick=t=>{const e=t.target.closest(".navigation__submenu-button"),i=t.target.closest(".navigation__back-button");if(e){const a=this.querySelector(`#${CSS.escape(e.getAttribute("aria-controls"))}`);if(a){const o=a.classList.toggle("is-active");e.setAttribute("aria-expanded",String(o)),this.rows.classList.toggle("submenu-open",o)}}i&&(this.shadowRoot.querySelectorAll(".navigation__submenu.is-active").forEach(a=>a.classList.remove("is-active")),this.rows.classList.remove("submenu-open"))};render(){return r`
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
                ${this.subSite?r`<li class="umd-lib navigation__menu-item utility-content"><a href="https://lib.umd.edu/" class="navigation__menu-link">Libraries' Main Website</a></li>`:""}
                <slot name="utility"></slot>
                ${this.searchOption?r`<li class="umd-lib navigation__menu-item utility-content" id="website-search"><a href=${this.searchUrl} class="navigation__menu-link">${this.searchLabel}</a></li>`:""}
              </ul></nav>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("umd-navigation",Yt);const Jt="footer{width:100%}footer a{color:var(--light-gray);text-decoration:none}footer a:hover,footer a:focus{color:var(--light-gray)}footer ul,footer ol{padding:0;margin:0}footer li{list-style:none}.footer--content,.footer--sub-content{max-width:1680px}.footer--content{display:flex;flex-direction:column}.footer--header{display:flex;flex-direction:column;gap:var(--space-md)}.footer--columns{display:flex;flex-direction:column}.footer--columns-main{flex-grow:1}.footer--columns-main nav,.footer--columns-main>div{break-inside:avoid}.footer--columns-main ul{border-left:1px solid var(--dark-gray)}.footer--columns-secondary-item{display:flex;align-items:center;gap:var(--space-sm)}.footer--sub-content,.footer--sub ul{display:flex;flex-direction:column;gap:var(--space-sm)}.social-media-list{display:flex;flex-direction:row;flex-wrap:wrap;gap:.5rem}ul.social-media-list li{margin-bottom:0rem}.social-media-list-item{display:flex;align-items:center;width:2rem;height:2rem}.social-media-list-item img,.social-media-list-item svg{margin:auto}@media(min-width:768px){.footer--header{display:flex;flex-direction:row;align-items:center;gap:var(--space-lg);margin-bottom:var(--space-xl)!important}.footer--columns{gap:var(--space-lg)}.footer--columns-main{flex-grow:1;column-width:18rem;column-gap:var(--space-xl)}.footer--columns-secondary{display:flex;flex-direction:column;align-items:flex-end}.footer--sub-content,.footer--sub ul{flex-direction:row}.footer--sub ul li{display:flex}.footer--sub ul li:not(:first-child),.footer--sub>div>div{padding-left:var(--space-sm);border-left:1px solid var(--dark-gray)}}@media(min-width:1024px){.footer--columns{flex-direction:row;align-items:flex-end;gap:0rem}.footer--columns-main{column-width:16rem}}@media(min-width:1440px){.footer--columns{gap:var(--space-lg)}}";class Xt extends g{static styles=[v,u(Jt)];static properties={telephone:{},logoUrl:{attribute:"logo-url"},campaignLogoUrl:{attribute:"campaign-logo-url"},depositoryLogoUrl:{attribute:"depository-logo-url"}};telephone="";logoUrl="/logo-dark.svg";campaignLogoUrl="/fearlessly-forward.svg";depositoryLogoUrl="/rfdl.svg";render(){const t=this.telephone.replaceAll(".","");return r`
      <footer class="umd-lib footer c-bg-dark-primary c-content-dark-primary">
        <div class="footer--content s-box-page-medium-h s-box-page-medium-v s-center">
          <div class="footer--header s-stack-large">
            <div class="footer--logo"><img alt="University Libraries" loading="lazy" width="270" height="81" src=${this.logoUrl}></div>
            <div class="footer--title">
              <h2 class="t-title-small c-content-dark-primary"><slot name="institution"></slot></h2>
              <address>
                <p class="c-content-dark-secondary t-body-medium"><slot name="address"></slot></p>
                <a href=${`tel:+${t}`} class="c-content-dark-secondary t-body-medium">${this.telephone}</a>
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
    `}}customElements.define("umd-footer",Xt);const Gt='.umd-lib.card{height:100%;position:relative}.umd-lib.card .card--content .card--title .card--link:after{content:"";position:absolute;inset:0}.card--image img{aspect-ratio:3 / 2;object-fit:cover;object-position:center;width:100%;height:100%}.card--content{height:auto;flex-grow:1;display:flex;flex-direction:column}.card--eyebrow{margin-bottom:var(--space-xs)}.card--headline a span{display:inline-block;min-width:1rem;max-width:1rem;background-position-y:-3px;background-position-x:-3px}.card--details{margin-bottom:auto}.card--text p{font-size:1rem;line-height:1.375rem}.card--content-icon{display:flex;align-items:center;justify-content:center}.card--content-text{flex-grow:1;display:flex;flex-direction:column}.card--content-text .card--details{margin-bottom:0rem}.card--icon-lucide{height:4rem;width:4rem}.card--icon .card--content{flex-direction:row;gap:.5rem}.card--icon .card--content .card--text{margin-bottom:0!important}.card--icon .card--content .card--text p{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;align-self:stretch;overflow:hidden}@media(min-width:1024px){.umd-lib.card{max-width:45rem}.homepage-news .umd-lib.card--standard:first-child{position:relative}.homepage-news .umd-lib.card--standard:first-child .card--content{padding:1.5rem;position:absolute;bottom:0;background:linear-gradient(180deg,#fff0,#00000080 44%,#000000bf 61%,#000);display:flex;flex-direction:column;justify-content:flex-end;height:100%}.homepage-news .umd-lib.card--standard:first-child .card--content .card--eyebrow,.homepage-news .umd-lib.card--standard:first-child .card--content .card--link,.homepage-news .umd-lib.card--standard:first-child .card--content .card--text,.homepage-news .umd-lib.card--standard:first-child .card--content .card--date{color:var(--white)}.homepage-news .umd-lib.card--standard:first-child .card--content .card--link{background-image:linear-gradient(var(--white),var(--white))}.homepage-news .umd-lib.card--standard:first-child .card--content .card--details{margin:0}.homepage-news .umd-lib.card--standard:first-child .card--image{position:absolute;bottom:0;top:0}}';class Qt extends g{static styles=[v,u(Gt)];static properties={variant:{},headingLevel:{attribute:"heading-level"},cardUrl:{attribute:"card-url"},imageUrl:{attribute:"image-url"},imageAlt:{attribute:"image-alt"},cardDate:{attribute:"card-date"},iconName:{attribute:"icon-name"},componentid:{}};variant="standard";headingLevel="h3";cardUrl="";imageUrl="";imageAlt="";cardDate="";iconName="info";componentid="";render(){const t=["standard","overlay","icon"].includes(this.variant)?this.variant:"standard";return r`
      <div id=${this.componentid} class="umd-lib card card--${t} ${t==="standard"?"":"c-bg-secondary"} c-content-primary s-margin-general-medium">
        ${t==="standard"&&this.imageUrl?r`<div class="card--image"><img alt=${this.imageAlt} src=${this.imageUrl} loading="lazy"></div>`:""}
        <div class="card--content s-box-medium-v ${t==="standard"?"":"s-box-medium-h"}">
          ${t==="icon"?r`<div class="card--content-text">${this.renderContent(t)}</div>`:this.renderContent(t)}
          ${t==="icon"?r`<div class="card--content-icon"><span class="card--icon-lucide" aria-hidden="true">${this.iconName}</span></div>`:""}
        </div>
      </div>
    `}renderContent(t){const e=this.renderHeading(r`${this.cardUrl?r`<a href=${this.cardUrl} class="card--link"><slot name="title"></slot><span></span></a>`:r`<slot name="title"></slot>`}`);return r`
      <div class="card--title">
        ${t!=="icon"?r`<p class="card--eyebrow t-eyebrow"><slot name="eyebrow"></slot></p>`:""}
        ${e}
      </div>
      <div class="card--details">
        <div class="card--text t-body-small c-content-secondary wysiwyg-editor"><slot name="description"></slot></div>
        ${this.cardDate&&t!=="icon"?r`<div class="card--date t-label c-content-tertiary">${this.cardDate}</div>`:""}
      </div>
    `}renderHeading(t){const e="card--headline t-title-medium";switch(this.headingLevel){case"h2":return r`<h2 class=${e}>${t}</h2>`;case"h4":return r`<h4 class=${e}>${t}</h4>`;case"h5":return r`<h5 class=${e}>${t}</h5>`;case"h6":return r`<h6 class=${e}>${t}</h6>`;default:return r`<h3 class=${e}>${t}</h3>`}}}customElements.define("umd-card",Qt);const te='.umd-lib.list{border-bottom:solid 1px var(--light-gray);padding-top:0rem!important;padding:var(--space-md) 0rem;position:relative}.umd-lib.list .list--eyebrow{margin-bottom:.5rem}.umd-lib.list .list--title h2 a:after{content:"";position:absolute;inset:0}.umd-lib.list .list--details{display:flex;gap:.5rem;flex-direction:column-reverse;justify-content:space-between}.umd-lib.list .list--information{display:flex;flex-direction:column;justify-content:space-between}.umd-lib.list .list--content{display:flex;flex-direction:column;gap:.5rem}.umd-lib.list .list--description{margin-bottom:.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;align-self:stretch;overflow:hidden}.umd-lib.list .list--image img{aspect-ratio:16/9;object-fit:cover}@media(min-width:768px){.umd-lib.list{padding:var(--space-lg) 0rem}.umd-lib.list .list--details{gap:1em;flex-direction:row;justify-content:space-between}.umd-lib.list .list--image img{height:10rem;min-width:17rem}}';let ee=0;class ie extends g{static styles=[v,u(te)];static properties={headingLevel:{attribute:"heading-level"},listUrl:{attribute:"list-url"},imageUrl:{attribute:"image-url"},imageAlt:{attribute:"image-alt"},listDate:{attribute:"list-date"},componentid:{}};headingLevel="h2";listUrl="";imageUrl="";imageAlt="";listDate="";componentid="";constructor(){super(),this.listId=`list-${++ee}`}render(){return r`
      <div class="umd-lib list s-margin-general-medium" id=${this.componentid} role="article" aria-labelledby=${this.listId}>
        <div class="list--title-section s-stack-small">
          <div class="list--eyebrow t-eyebrow c-content-primary"><slot name="eyebrow"></slot></div>
          <div class="list--title">${this.renderHeading()}</div>
        </div>
        <div class="list--details">
          <div class="list--information">
            <div class="list--content">
              <div class="list--description t-body-small wysiwyg-editor"><slot name="description"></slot></div>
              ${this.listDate?r`<div class="list--date t-label c-content-tertiary">${this.listDate}</div>`:""}
            </div>
          </div>
          ${this.imageUrl?r`<div class="list--image"><img alt=${this.imageAlt} src=${this.imageUrl} loading="lazy"></div>`:""}
        </div>
      </div>
    `}renderHeading(){const t=r`<a href=${this.listUrl}><slot name="title"></slot></a>`;switch(this.headingLevel){case"h3":return r`<h3 class="t-title-medium c-content-primary" id=${this.listId}>${t}</h3>`;case"h4":return r`<h4 class="t-title-medium c-content-primary" id=${this.listId}>${t}</h4>`;case"h5":return r`<h5 class="t-title-medium c-content-primary" id=${this.listId}>${t}</h5>`;case"h6":return r`<h6 class="t-title-medium c-content-primary" id=${this.listId}>${t}</h6>`;default:return r`<h2 class="t-title-medium c-content-primary" id=${this.listId}>${t}</h2>`}}}customElements.define("umd-list",ie);
