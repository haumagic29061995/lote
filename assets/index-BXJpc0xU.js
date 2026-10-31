var Xd=Object.defineProperty;var Qd=(t,n,e)=>n in t?Xd(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var tg=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var g2=(t,n,e)=>Qd(t,typeof n!="symbol"?n+"":n,e);var Pb=tg((Ib,Ir)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=e(o);fetch(o.href,l)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function be(t){const n=Object.create(null);for(const e of t.split(","))n[e]=1;return e=>e in n}const x2={},_3=[],yt=()=>{},ng=()=>!1,Xr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Me=t=>t.startsWith("onUpdate:"),J2=Object.assign,ke=(t,n)=>{const e=t.indexOf(n);e>-1&&t.splice(e,1)},rg=Object.prototype.hasOwnProperty,h2=(t,n)=>rg.call(t,n),N0=Array.isArray,d3=t=>x4(t)==="[object Map]",M3=t=>x4(t)==="[object Set]",$9=t=>x4(t)==="[object Date]",G0=t=>typeof t=="function",W2=t=>typeof t=="string",Tt=t=>typeof t=="symbol",k2=t=>t!==null&&typeof t=="object",gs=t=>(k2(t)||G0(t))&&G0(t.then)&&G0(t.catch),ps=Object.prototype.toString,x4=t=>ps.call(t),eg=t=>x4(t).slice(8,-1),ms=t=>x4(t)==="[object Object]",Ce=t=>W2(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,t4=be(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qr=t=>{const n=Object.create(null);return e=>n[e]||(n[e]=t(e))},ig=/-(\w)/g,Z1=Qr(t=>t.replace(ig,(n,e)=>e?e.toUpperCase():"")),sg=/\B([A-Z])/g,Vn=Qr(t=>t.replace(sg,"-$1").toLowerCase()),t5=Qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),N6=Qr(t=>t?`on${t5(t)}`:""),vn=(t,n)=>!Object.is(t,n),Dr=(t,...n)=>{for(let e=0;e<t.length;e++)t[e](...n)},vs=(t,n,e,s=!1)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:s,value:e})},Hr=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let Y9;const n5=()=>Y9||(Y9=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function De(t){if(N0(t)){const n={};for(let e=0;e<t.length;e++){const s=t[e],o=W2(s)?ag(s):De(s);if(o)for(const l in o)n[l]=o[l]}return n}else if(W2(t)||k2(t))return t}const og=/;(?![^(]*\))/g,ug=/:([^]+)/,lg=/\/\*[^]*?\*\//g;function ag(t){const n={};return t.replace(lg,"").split(og).forEach(e=>{if(e){const s=e.split(ug);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function pt(t){let n="";if(W2(t))n=t;else if(N0(t))for(let e=0;e<t.length;e++){const s=pt(t[e]);s&&(n+=s+" ")}else if(k2(t))for(const e in t)t[e]&&(n+=e+" ");return n.trim()}const cg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fg=be(cg);function ys(t){return!!t||t===""}function hg(t,n){if(t.length!==n.length)return!1;let e=!0;for(let s=0;e&&s<t.length;s++)e=w4(t[s],n[s]);return e}function w4(t,n){if(t===n)return!0;let e=$9(t),s=$9(n);if(e||s)return e&&s?t.getTime()===n.getTime():!1;if(e=Tt(t),s=Tt(n),e||s)return t===n;if(e=N0(t),s=N0(n),e||s)return e&&s?hg(t,n):!1;if(e=k2(t),s=k2(n),e||s){if(!e||!s)return!1;const o=Object.keys(t).length,l=Object.keys(n).length;if(o!==l)return!1;for(const a in t){const f=t.hasOwnProperty(a),h=n.hasOwnProperty(a);if(f&&!h||!f&&h||!w4(t[a],n[a]))return!1}}return String(t)===String(n)}function Ae(t,n){return t.findIndex(e=>w4(e,n))}const Ts=t=>!!(t&&t.__v_isRef===!0),Q=t=>W2(t)?t:t==null?"":N0(t)||k2(t)&&(t.toString===ps||!G0(t.toString))?Ts(t)?Q(t.value):JSON.stringify(t,xs,2):String(t),xs=(t,n)=>Ts(n)?xs(t,n.value):d3(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((e,[s,o],l)=>(e[R6(s,l)+" =>"]=o,e),{})}:M3(n)?{[`Set(${n.size})`]:[...n.values()].map(e=>R6(e))}:Tt(n)?R6(n):k2(n)&&!N0(n)&&!ms(n)?String(n):n,R6=(t,n="")=>{var e;return Tt(t)?`Symbol(${(e=t.description)!=null?e:n})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let B1;class _g{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=B1,!n&&B1&&(this.index=(B1.scopes||(B1.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,e;if(this.scopes)for(n=0,e=this.scopes.length;n<e;n++)this.scopes[n].pause();for(n=0,e=this.effects.length;n<e;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,e;if(this.scopes)for(n=0,e=this.scopes.length;n<e;n++)this.scopes[n].resume();for(n=0,e=this.effects.length;n<e;n++)this.effects[n].resume()}}run(n){if(this._active){const e=B1;try{return B1=this,n()}finally{B1=e}}}on(){B1=this}off(){B1=this.parent}stop(n){if(this._active){this._active=!1;let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(this.effects.length=0,e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function dg(){return B1}let M2;const P6=new WeakSet;class ws{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,B1&&B1.active&&B1.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,P6.has(this)&&(P6.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,V9(this),Ms(this);const n=M2,e=st;M2=this,st=!0;try{return this.fn()}finally{ks(this),M2=n,st=e,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Ee(n);this.deps=this.depsTail=void 0,V9(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?P6.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ne(this)&&this.run()}get dirty(){return ne(this)}}let Ss=0,n4,r4;function bs(t,n=!1){if(t.flags|=8,n){t.next=r4,r4=t;return}t.next=n4,n4=t}function Le(){Ss++}function Oe(){if(--Ss>0)return;if(r4){let n=r4;for(r4=void 0;n;){const e=n.next;n.next=void 0,n.flags&=-9,n=e}}let t;for(;n4;){let n=n4;for(n4=void 0;n;){const e=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){t||(t=s)}n=e}}if(t)throw t}function Ms(t){for(let n=t.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function ks(t){let n,e=t.depsTail,s=e;for(;s;){const o=s.prevDep;s.version===-1?(s===e&&(e=o),Ee(s),gg(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}t.deps=n,t.depsTail=e}function ne(t){for(let n=t.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Cs(n.dep.computed)||n.dep.version!==n.version))return!0;return!!t._dirty}function Cs(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===a4))return;t.globalVersion=a4;const n=t.dep;if(t.flags|=2,n.version>0&&!t.isSSR&&t.deps&&!ne(t)){t.flags&=-3;return}const e=M2,s=st;M2=t,st=!0;try{Ms(t);const o=t.fn(t._value);(n.version===0||vn(o,t._value))&&(t._value=o,n.version++)}catch(o){throw n.version++,o}finally{M2=e,st=s,ks(t),t.flags&=-3}}function Ee(t,n=!1){const{dep:e,prevSub:s,nextSub:o}=t;if(s&&(s.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=s,t.nextSub=void 0),e.subs===t&&(e.subs=s,!s&&e.computed)){e.computed.flags&=-5;for(let l=e.computed.deps;l;l=l.nextDep)Ee(l,!0)}!n&&!--e.sc&&e.map&&e.map.delete(e.key)}function gg(t){const{prevDep:n,nextDep:e}=t;n&&(n.nextDep=e,t.prevDep=void 0),e&&(e.prevDep=n,t.nextDep=void 0)}let st=!0;const Ds=[];function Tn(){Ds.push(st),st=!1}function xn(){const t=Ds.pop();st=t===void 0?!0:t}function V9(t){const{cleanup:n}=t;if(t.cleanup=void 0,n){const e=M2;M2=void 0;try{n()}finally{M2=e}}}let a4=0;class pg{constructor(n,e){this.sub=n,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ne{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!M2||!st||M2===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==M2)e=this.activeLink=new pg(M2,this),M2.deps?(e.prevDep=M2.depsTail,M2.depsTail.nextDep=e,M2.depsTail=e):M2.deps=M2.depsTail=e,As(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const s=e.nextDep;s.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=s),e.prevDep=M2.depsTail,e.nextDep=void 0,M2.depsTail.nextDep=e,M2.depsTail=e,M2.deps===e&&(M2.deps=s)}return e}trigger(n){this.version++,a4++,this.notify(n)}notify(n){Le();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Oe()}}}function As(t){if(t.dep.sc++,t.sub.flags&4){const n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)As(s)}const e=t.dep.subs;e!==t&&(t.prevSub=e,e&&(e.nextSub=t)),t.dep.subs=t}}const re=new WeakMap,Hn=Symbol(""),ee=Symbol(""),c4=Symbol("");function l1(t,n,e){if(st&&M2){let s=re.get(t);s||re.set(t,s=new Map);let o=s.get(e);o||(s.set(e,o=new Ne),o.map=s,o.key=e),o.track()}}function Yt(t,n,e,s,o,l){const a=re.get(t);if(!a){a4++;return}const f=h=>{h&&h.trigger()};if(Le(),n==="clear")a.forEach(f);else{const h=N0(t),p=h&&Ce(e);if(h&&e==="length"){const y=Number(s);a.forEach((x,b)=>{(b==="length"||b===c4||!Tt(b)&&b>=y)&&f(x)})}else switch((e!==void 0||a.has(void 0))&&f(a.get(e)),p&&f(a.get(c4)),n){case"add":h?p&&f(a.get("length")):(f(a.get(Hn)),d3(t)&&f(a.get(ee)));break;case"delete":h||(f(a.get(Hn)),d3(t)&&f(a.get(ee)));break;case"set":d3(t)&&f(a.get(Hn));break}}Oe()}function s3(t){const n=f2(t);return n===t?n:(l1(n,"iterate",c4),z1(t)?n:n.map(a1))}function r5(t){return l1(t=f2(t),"iterate",c4),t}const mg={__proto__:null,[Symbol.iterator](){return B6(this,Symbol.iterator,a1)},concat(...t){return s3(this).concat(...t.map(n=>N0(n)?s3(n):n))},entries(){return B6(this,"entries",t=>(t[1]=a1(t[1]),t))},every(t,n){return Pt(this,"every",t,n,void 0,arguments)},filter(t,n){return Pt(this,"filter",t,n,e=>e.map(a1),arguments)},find(t,n){return Pt(this,"find",t,n,a1,arguments)},findIndex(t,n){return Pt(this,"findIndex",t,n,void 0,arguments)},findLast(t,n){return Pt(this,"findLast",t,n,a1,arguments)},findLastIndex(t,n){return Pt(this,"findLastIndex",t,n,void 0,arguments)},forEach(t,n){return Pt(this,"forEach",t,n,void 0,arguments)},includes(...t){return I6(this,"includes",t)},indexOf(...t){return I6(this,"indexOf",t)},join(t){return s3(this).join(t)},lastIndexOf(...t){return I6(this,"lastIndexOf",t)},map(t,n){return Pt(this,"map",t,n,void 0,arguments)},pop(){return W3(this,"pop")},push(...t){return W3(this,"push",t)},reduce(t,...n){return F9(this,"reduce",t,n)},reduceRight(t,...n){return F9(this,"reduceRight",t,n)},shift(){return W3(this,"shift")},some(t,n){return Pt(this,"some",t,n,void 0,arguments)},splice(...t){return W3(this,"splice",t)},toReversed(){return s3(this).toReversed()},toSorted(t){return s3(this).toSorted(t)},toSpliced(...t){return s3(this).toSpliced(...t)},unshift(...t){return W3(this,"unshift",t)},values(){return B6(this,"values",a1)}};function B6(t,n,e){const s=r5(t),o=s[n]();return s!==t&&!z1(t)&&(o._next=o.next,o.next=()=>{const l=o._next();return l.value&&(l.value=e(l.value)),l}),o}const vg=Array.prototype;function Pt(t,n,e,s,o,l){const a=r5(t),f=a!==t&&!z1(t),h=a[n];if(h!==vg[n]){const x=h.apply(t,l);return f?a1(x):x}let p=e;a!==t&&(f?p=function(x,b){return e.call(this,a1(x),b,t)}:e.length>2&&(p=function(x,b){return e.call(this,x,b,t)}));const y=h.call(a,p,s);return f&&o?o(y):y}function F9(t,n,e,s){const o=r5(t);let l=e;return o!==t&&(z1(t)?e.length>3&&(l=function(a,f,h){return e.call(this,a,f,h,t)}):l=function(a,f,h){return e.call(this,a,a1(f),h,t)}),o[n](l,...s)}function I6(t,n,e){const s=f2(t);l1(s,"iterate",c4);const o=s[n](...e);return(o===-1||o===!1)&&Be(e[0])?(e[0]=f2(e[0]),s[n](...e)):o}function W3(t,n,e=[]){Tn(),Le();const s=f2(t)[n].apply(t,e);return Oe(),xn(),s}const yg=be("__proto__,__v_isRef,__isVue"),Ls=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tt));function Tg(t){Tt(t)||(t=String(t));const n=f2(this);return l1(n,"has",t),n.hasOwnProperty(t)}class Os{constructor(n=!1,e=!1){this._isReadonly=n,this._isShallow=e}get(n,e,s){if(e==="__v_skip")return n.__v_skip;const o=this._isReadonly,l=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return l;if(e==="__v_raw")return s===(o?l?Lg:Ps:l?Rs:Ns).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const a=N0(n);if(!o){let h;if(a&&(h=mg[e]))return h;if(e==="hasOwnProperty")return Tg}const f=Reflect.get(n,e,f1(n)?n:s);return(Tt(e)?Ls.has(e):yg(e))||(o||l1(n,"get",e),l)?f:f1(f)?a&&Ce(e)?f:f.value:k2(f)?o?Is(f):e5(f):f}}class Es extends Os{constructor(n=!1){super(!1,n)}set(n,e,s,o){let l=n[e];if(!this._isShallow){const h=$n(l);if(!z1(s)&&!$n(s)&&(l=f2(l),s=f2(s)),!N0(n)&&f1(l)&&!f1(s))return h?!1:(l.value=s,!0)}const a=N0(n)&&Ce(e)?Number(e)<n.length:h2(n,e),f=Reflect.set(n,e,s,f1(n)?n:o);return n===f2(o)&&(a?vn(s,l)&&Yt(n,"set",e,s):Yt(n,"add",e,s)),f}deleteProperty(n,e){const s=h2(n,e);n[e];const o=Reflect.deleteProperty(n,e);return o&&s&&Yt(n,"delete",e,void 0),o}has(n,e){const s=Reflect.has(n,e);return(!Tt(e)||!Ls.has(e))&&l1(n,"has",e),s}ownKeys(n){return l1(n,"iterate",N0(n)?"length":Hn),Reflect.ownKeys(n)}}class xg extends Os{constructor(n=!1){super(!0,n)}set(n,e){return!0}deleteProperty(n,e){return!0}}const wg=new Es,Sg=new xg,bg=new Es(!0),ie=t=>t,yr=t=>Reflect.getPrototypeOf(t);function Mg(t,n,e){return function(...s){const o=this.__v_raw,l=f2(o),a=d3(l),f=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,p=o[t](...s),y=e?ie:n?se:a1;return!n&&l1(l,"iterate",h?ee:Hn),{next(){const{value:x,done:b}=p.next();return b?{value:x,done:b}:{value:f?[y(x[0]),y(x[1])]:y(x),done:b}},[Symbol.iterator](){return this}}}}function Tr(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function kg(t,n){const e={get(o){const l=this.__v_raw,a=f2(l),f=f2(o);t||(vn(o,f)&&l1(a,"get",o),l1(a,"get",f));const{has:h}=yr(a),p=n?ie:t?se:a1;if(h.call(a,o))return p(l.get(o));if(h.call(a,f))return p(l.get(f));l!==a&&l.get(o)},get size(){const o=this.__v_raw;return!t&&l1(f2(o),"iterate",Hn),Reflect.get(o,"size",o)},has(o){const l=this.__v_raw,a=f2(l),f=f2(o);return t||(vn(o,f)&&l1(a,"has",o),l1(a,"has",f)),o===f?l.has(o):l.has(o)||l.has(f)},forEach(o,l){const a=this,f=a.__v_raw,h=f2(f),p=n?ie:t?se:a1;return!t&&l1(h,"iterate",Hn),f.forEach((y,x)=>o.call(l,p(y),p(x),a))}};return J2(e,t?{add:Tr("add"),set:Tr("set"),delete:Tr("delete"),clear:Tr("clear")}:{add(o){!n&&!z1(o)&&!$n(o)&&(o=f2(o));const l=f2(this);return yr(l).has.call(l,o)||(l.add(o),Yt(l,"add",o,o)),this},set(o,l){!n&&!z1(l)&&!$n(l)&&(l=f2(l));const a=f2(this),{has:f,get:h}=yr(a);let p=f.call(a,o);p||(o=f2(o),p=f.call(a,o));const y=h.call(a,o);return a.set(o,l),p?vn(l,y)&&Yt(a,"set",o,l):Yt(a,"add",o,l),this},delete(o){const l=f2(this),{has:a,get:f}=yr(l);let h=a.call(l,o);h||(o=f2(o),h=a.call(l,o)),f&&f.call(l,o);const p=l.delete(o);return h&&Yt(l,"delete",o,void 0),p},clear(){const o=f2(this),l=o.size!==0,a=o.clear();return l&&Yt(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Mg(o,t,n)}),e}function Re(t,n){const e=kg(t,n);return(s,o,l)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?s:Reflect.get(h2(e,o)&&o in s?e:s,o,l)}const Cg={get:Re(!1,!1)},Dg={get:Re(!1,!0)},Ag={get:Re(!0,!1)},Ns=new WeakMap,Rs=new WeakMap,Ps=new WeakMap,Lg=new WeakMap;function Og(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eg(t){return t.__v_skip||!Object.isExtensible(t)?0:Og(eg(t))}function e5(t){return $n(t)?t:Pe(t,!1,wg,Cg,Ns)}function Bs(t){return Pe(t,!1,bg,Dg,Rs)}function Is(t){return Pe(t,!0,Sg,Ag,Ps)}function Pe(t,n,e,s,o){if(!k2(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const l=o.get(t);if(l)return l;const a=Eg(t);if(a===0)return t;const f=new Proxy(t,a===2?s:e);return o.set(t,f),f}function g3(t){return $n(t)?g3(t.__v_raw):!!(t&&t.__v_isReactive)}function $n(t){return!!(t&&t.__v_isReadonly)}function z1(t){return!!(t&&t.__v_isShallow)}function Be(t){return t?!!t.__v_raw:!1}function f2(t){const n=t&&t.__v_raw;return n?f2(n):t}function Ng(t){return!h2(t,"__v_skip")&&Object.isExtensible(t)&&vs(t,"__v_skip",!0),t}const a1=t=>k2(t)?e5(t):t,se=t=>k2(t)?Is(t):t;function f1(t){return t?t.__v_isRef===!0:!1}function Y0(t){return Hs(t,!1)}function Rg(t){return Hs(t,!0)}function Hs(t,n){return f1(t)?t:new Pg(t,n)}class Pg{constructor(n,e){this.dep=new Ne,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?n:f2(n),this._value=e?n:a1(n),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(n){const e=this._rawValue,s=this.__v_isShallow||z1(n)||$n(n);n=s?n:f2(n),vn(n,e)&&(this._rawValue=n,this._value=s?n:a1(n),this.dep.trigger())}}function m2(t){return f1(t)?t.value:t}const Bg={get:(t,n,e)=>n==="__v_raw"?t:m2(Reflect.get(t,n,e)),set:(t,n,e,s)=>{const o=t[n];return f1(o)&&!f1(e)?(o.value=e,!0):Reflect.set(t,n,e,s)}};function Gs(t){return g3(t)?t:new Proxy(t,Bg)}class Ig{constructor(n,e,s){this.fn=n,this.setter=e,this._value=void 0,this.dep=new Ne(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=a4-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&M2!==this)return bs(this,!0),!0}get value(){const n=this.dep.track();return Cs(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Hg(t,n,e=!1){let s,o;return G0(t)?s=t:(s=t.get,o=t.set),new Ig(s,o,e)}const xr={},Gr=new WeakMap;let Rn;function Gg(t,n=!1,e=Rn){if(e){let s=Gr.get(e);s||Gr.set(e,s=[]),s.push(t)}}function $g(t,n,e=x2){const{immediate:s,deep:o,once:l,scheduler:a,augmentJob:f,call:h}=e,p=a0=>o?a0:z1(a0)||o===!1||o===0?Vt(a0,1):Vt(a0);let y,x,b,C,q=!1,W=!1;if(f1(t)?(x=()=>t.value,q=z1(t)):g3(t)?(x=()=>p(t),q=!0):N0(t)?(W=!0,q=t.some(a0=>g3(a0)||z1(a0)),x=()=>t.map(a0=>{if(f1(a0))return a0.value;if(g3(a0))return p(a0);if(G0(a0))return h?h(a0,2):a0()})):G0(t)?n?x=h?()=>h(t,2):t:x=()=>{if(b){Tn();try{b()}finally{xn()}}const a0=Rn;Rn=y;try{return h?h(t,3,[C]):t(C)}finally{Rn=a0}}:x=yt,n&&o){const a0=x,h0=o===!0?1/0:o;x=()=>Vt(a0(),h0)}const r0=dg(),i0=()=>{y.stop(),r0&&r0.active&&ke(r0.effects,y)};if(l&&n){const a0=n;n=(...h0)=>{a0(...h0),i0()}}let t0=W?new Array(t.length).fill(xr):xr;const u0=a0=>{if(!(!(y.flags&1)||!y.dirty&&!a0))if(n){const h0=y.run();if(o||q||(W?h0.some((C0,S0)=>vn(C0,t0[S0])):vn(h0,t0))){b&&b();const C0=Rn;Rn=y;try{const S0=[h0,t0===xr?void 0:W&&t0[0]===xr?[]:t0,C];h?h(n,3,S0):n(...S0),t0=h0}finally{Rn=C0}}}else y.run()};return f&&f(u0),y=new ws(x),y.scheduler=a?()=>a(u0,!1):u0,C=a0=>Gg(a0,!1,y),b=y.onStop=()=>{const a0=Gr.get(y);if(a0){if(h)h(a0,4);else for(const h0 of a0)h0();Gr.delete(y)}},n?s?u0(!0):t0=y.run():a?a(u0.bind(null,!0),!0):y.run(),i0.pause=y.pause.bind(y),i0.resume=y.resume.bind(y),i0.stop=i0,i0}function Vt(t,n=1/0,e){if(n<=0||!k2(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),n--,f1(t))Vt(t.value,n,e);else if(N0(t))for(let s=0;s<t.length;s++)Vt(t[s],n,e);else if(M3(t)||d3(t))t.forEach(s=>{Vt(s,n,e)});else if(ms(t)){for(const s in t)Vt(t[s],n,e);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Vt(t[s],n,e)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function S4(t,n,e,s){try{return s?t(...s):t()}catch(o){i5(o,n,e)}}function xt(t,n,e,s){if(G0(t)){const o=S4(t,n,e,s);return o&&gs(o)&&o.catch(l=>{i5(l,n,e)}),o}if(N0(t)){const o=[];for(let l=0;l<t.length;l++)o.push(xt(t[l],n,e,s));return o}}function i5(t,n,e,s=!0){const o=n?n.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:a}=n&&n.appContext.config||x2;if(n){let f=n.parent;const h=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${e}`;for(;f;){const y=f.ec;if(y){for(let x=0;x<y.length;x++)if(y[x](t,h,p)===!1)return}f=f.parent}if(l){Tn(),S4(l,null,10,[t,h,p]),xn();return}}Yg(t,e,o,s,a)}function Yg(t,n,e,s=!0,o=!1){if(o)throw t;console.error(t)}const v1=[];let gt=-1;const p3=[];let fn=null,l3=0;const $s=Promise.resolve();let $r=null;function Ie(t){const n=$r||$s;return t?n.then(this?t.bind(this):t):n}function Vg(t){let n=gt+1,e=v1.length;for(;n<e;){const s=n+e>>>1,o=v1[s],l=f4(o);l<t||l===t&&o.flags&2?n=s+1:e=s}return n}function He(t){if(!(t.flags&1)){const n=f4(t),e=v1[v1.length-1];!e||!(t.flags&2)&&n>=f4(e)?v1.push(t):v1.splice(Vg(n),0,t),t.flags|=1,Ys()}}function Ys(){$r||($r=$s.then(Fs))}function Fg(t){N0(t)?p3.push(...t):fn&&t.id===-1?fn.splice(l3+1,0,t):t.flags&1||(p3.push(t),t.flags|=1),Ys()}function W9(t,n,e=gt+1){for(;e<v1.length;e++){const s=v1[e];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;v1.splice(e,1),e--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Vs(t){if(p3.length){const n=[...new Set(p3)].sort((e,s)=>f4(e)-f4(s));if(p3.length=0,fn){fn.push(...n);return}for(fn=n,l3=0;l3<fn.length;l3++){const e=fn[l3];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}fn=null,l3=0}}const f4=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fs(t){try{for(gt=0;gt<v1.length;gt++){const n=v1[gt];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),S4(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;gt<v1.length;gt++){const n=v1[gt];n&&(n.flags&=-2)}gt=-1,v1.length=0,Vs(),$r=null,(v1.length||p3.length)&&Fs()}}let I1=null,Ws=null;function Yr(t){const n=I1;return I1=t,Ws=t&&t.type.__scopeId||null,n}function Wg(t,n=I1,e){if(!n||t._n)return t;const s=(...o)=>{s._d&&Q9(-1);const l=Yr(n);let a;try{a=t(...o)}finally{Yr(l),s._d&&Q9(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function i2(t,n){if(I1===null)return t;const e=l5(I1),s=t.dirs||(t.dirs=[]);for(let o=0;o<n.length;o++){let[l,a,f,h=x2]=n[o];l&&(G0(l)&&(l={mounted:l,updated:l}),l.deep&&Vt(a),s.push({dir:l,instance:e,value:a,oldValue:void 0,arg:f,modifiers:h}))}return t}function On(t,n,e,s){const o=t.dirs,l=n&&n.dirs;for(let a=0;a<o.length;a++){const f=o[a];l&&(f.oldValue=l[a].value);let h=f.dir[s];h&&(Tn(),xt(h,e,8,[t.el,f,t,n]),xn())}}const Ug=Symbol("_vte"),qg=t=>t.__isTeleport;function Ge(t,n){t.shapeFlag&6&&t.component?(t.transition=n,Ge(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}/*! #__NO_SIDE_EFFECTS__ */function b4(t,n){return G0(t)?J2({name:t.name},n,{setup:t}):t}function Us(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Vr(t,n,e,s,o=!1){if(N0(t)){t.forEach((q,W)=>Vr(q,n&&(N0(n)?n[W]:n),e,s,o));return}if(e4(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Vr(t,n,e,s.component.subTree);return}const l=s.shapeFlag&4?l5(s.component):s.el,a=o?null:l,{i:f,r:h}=t,p=n&&n.r,y=f.refs===x2?f.refs={}:f.refs,x=f.setupState,b=f2(x),C=x===x2?()=>!1:q=>h2(b,q);if(p!=null&&p!==h&&(W2(p)?(y[p]=null,C(p)&&(x[p]=null)):f1(p)&&(p.value=null)),G0(h))S4(h,f,12,[a,y]);else{const q=W2(h),W=f1(h);if(q||W){const r0=()=>{if(t.f){const i0=q?C(h)?x[h]:y[h]:h.value;o?N0(i0)&&ke(i0,l):N0(i0)?i0.includes(l)||i0.push(l):q?(y[h]=[l],C(h)&&(x[h]=y[h])):(h.value=[l],t.k&&(y[t.k]=h.value))}else q?(y[h]=a,C(h)&&(x[h]=a)):W&&(h.value=a,t.k&&(y[t.k]=a))};a?(r0.id=-1,P1(r0,e)):r0()}}}n5().requestIdleCallback;n5().cancelIdleCallback;const e4=t=>!!t.type.__asyncLoader,qs=t=>t.type.__isKeepAlive;function Kg(t,n){Ks(t,"a",n)}function jg(t,n){Ks(t,"da",n)}function Ks(t,n,e=c1){const s=t.__wdc||(t.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(s5(n,s,e),e){let o=e.parent;for(;o&&o.parent;)qs(o.parent.vnode)&&zg(s,n,e,o),o=o.parent}}function zg(t,n,e,s){const o=s5(n,t,s,!0);zs(()=>{ke(s[n],o)},e)}function s5(t,n,e=c1,s=!1){if(e){const o=e[t]||(e[t]=[]),l=n.__weh||(n.__weh=(...a)=>{Tn();const f=M4(e),h=xt(n,e,t,a);return f(),xn(),h});return s?o.unshift(l):o.push(l),l}}const Zt=t=>(n,e=c1)=>{(!_4||t==="sp")&&s5(t,(...s)=>n(...s),e)},Zg=Zt("bm"),js=Zt("m"),Jg=Zt("bu"),Xg=Zt("u"),Qg=Zt("bum"),zs=Zt("um"),tp=Zt("sp"),np=Zt("rtg"),rp=Zt("rtc");function ep(t,n=c1){s5("ec",t,n)}const ip="components",Zs=Symbol.for("v-ndc");function wr(t){return W2(t)?sp(ip,t,!1)||t:t||Zs}function sp(t,n,e=!0,s=!1){const o=I1||c1;if(o){const l=o.type;{const f=qp(l,!1);if(f&&(f===n||f===Z1(n)||f===t5(Z1(n))))return l}const a=U9(o[t]||l[t],n)||U9(o.appContext[t],n);return!a&&s?l:a}}function U9(t,n){return t&&(t[n]||t[Z1(n)]||t[t5(Z1(n))])}function N2(t,n,e,s){let o;const l=e,a=N0(t);if(a||W2(t)){const f=a&&g3(t);let h=!1;f&&(h=!z1(t),t=r5(t)),o=new Array(t.length);for(let p=0,y=t.length;p<y;p++)o[p]=n(h?a1(t[p]):t[p],p,void 0,l)}else if(typeof t=="number"){o=new Array(t);for(let f=0;f<t;f++)o[f]=n(f+1,f,void 0,l)}else if(k2(t))if(t[Symbol.iterator])o=Array.from(t,(f,h)=>n(f,h,void 0,l));else{const f=Object.keys(t);o=new Array(f.length);for(let h=0,p=f.length;h<p;h++){const y=f[h];o[h]=n(t[y],y,h,l)}}else o=[];return o}const oe=t=>t?mo(t)?l5(t):oe(t.parent):null,i4=J2(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>oe(t.parent),$root:t=>oe(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$e(t),$forceUpdate:t=>t.f||(t.f=()=>{He(t.update)}),$nextTick:t=>t.n||(t.n=Ie.bind(t.proxy)),$watch:t=>kp.bind(t)}),H6=(t,n)=>t!==x2&&!t.__isScriptSetup&&h2(t,n),op={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:e,setupState:s,data:o,props:l,accessCache:a,type:f,appContext:h}=t;let p;if(n[0]!=="$"){const C=a[n];if(C!==void 0)switch(C){case 1:return s[n];case 2:return o[n];case 4:return e[n];case 3:return l[n]}else{if(H6(s,n))return a[n]=1,s[n];if(o!==x2&&h2(o,n))return a[n]=2,o[n];if((p=t.propsOptions[0])&&h2(p,n))return a[n]=3,l[n];if(e!==x2&&h2(e,n))return a[n]=4,e[n];ue&&(a[n]=0)}}const y=i4[n];let x,b;if(y)return n==="$attrs"&&l1(t.attrs,"get",""),y(t);if((x=f.__cssModules)&&(x=x[n]))return x;if(e!==x2&&h2(e,n))return a[n]=4,e[n];if(b=h.config.globalProperties,h2(b,n))return b[n]},set({_:t},n,e){const{data:s,setupState:o,ctx:l}=t;return H6(o,n)?(o[n]=e,!0):s!==x2&&h2(s,n)?(s[n]=e,!0):h2(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(l[n]=e,!0)},has({_:{data:t,setupState:n,accessCache:e,ctx:s,appContext:o,propsOptions:l}},a){let f;return!!e[a]||t!==x2&&h2(t,a)||H6(n,a)||(f=l[0])&&h2(f,a)||h2(s,a)||h2(i4,a)||h2(o.config.globalProperties,a)},defineProperty(t,n,e){return e.get!=null?t._.accessCache[n]=0:h2(e,"value")&&this.set(t,n,e.value,null),Reflect.defineProperty(t,n,e)}};function q9(t){return N0(t)?t.reduce((n,e)=>(n[e]=null,n),{}):t}let ue=!0;function up(t){const n=$e(t),e=t.proxy,s=t.ctx;ue=!1,n.beforeCreate&&K9(n.beforeCreate,t,"bc");const{data:o,computed:l,methods:a,watch:f,provide:h,inject:p,created:y,beforeMount:x,mounted:b,beforeUpdate:C,updated:q,activated:W,deactivated:r0,beforeDestroy:i0,beforeUnmount:t0,destroyed:u0,unmounted:a0,render:h0,renderTracked:C0,renderTriggered:S0,errorCaptured:J0,serverPrefetch:V0,expose:l2,inheritAttrs:w2,components:P2,directives:L2,filters:i1}=n;if(p&&lp(p,s,null),a)for(const I0 in a){const R0=a[I0];G0(R0)&&(s[I0]=R0.bind(e))}if(o){const I0=o.call(e,e);k2(I0)&&(t.data=e5(I0))}if(ue=!0,l)for(const I0 in l){const R0=l[I0],s1=G0(R0)?R0.bind(e,e):G0(R0.get)?R0.get.bind(e,e):yt,S2=!G0(R0)&&G0(R0.set)?R0.set.bind(e):yt,y2=p2({get:s1,set:S2});Object.defineProperty(s,I0,{enumerable:!0,configurable:!0,get:()=>y2.value,set:O2=>y2.value=O2})}if(f)for(const I0 in f)Js(f[I0],s,e,I0);if(h){const I0=G0(h)?h.call(e):h;Reflect.ownKeys(I0).forEach(R0=>{Ar(R0,I0[R0])})}y&&K9(y,t,"c");function n2(I0,R0){N0(R0)?R0.forEach(s1=>I0(s1.bind(e))):R0&&I0(R0.bind(e))}if(n2(Zg,x),n2(js,b),n2(Jg,C),n2(Xg,q),n2(Kg,W),n2(jg,r0),n2(ep,J0),n2(rp,C0),n2(np,S0),n2(Qg,t0),n2(zs,a0),n2(tp,V0),N0(l2))if(l2.length){const I0=t.exposed||(t.exposed={});l2.forEach(R0=>{Object.defineProperty(I0,R0,{get:()=>e[R0],set:s1=>e[R0]=s1})})}else t.exposed||(t.exposed={});h0&&t.render===yt&&(t.render=h0),w2!=null&&(t.inheritAttrs=w2),P2&&(t.components=P2),L2&&(t.directives=L2),V0&&Us(t)}function lp(t,n,e=yt){N0(t)&&(t=le(t));for(const s in t){const o=t[s];let l;k2(o)?"default"in o?l=Ut(o.from||s,o.default,!0):l=Ut(o.from||s):l=Ut(o),f1(l)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:a=>l.value=a}):n[s]=l}}function K9(t,n,e){xt(N0(t)?t.map(s=>s.bind(n.proxy)):t.bind(n.proxy),n,e)}function Js(t,n,e,s){let o=s.includes(".")?fo(e,s):()=>e[s];if(W2(t)){const l=n[t];G0(l)&&Lr(o,l)}else if(G0(t))Lr(o,t.bind(e));else if(k2(t))if(N0(t))t.forEach(l=>Js(l,n,e,s));else{const l=G0(t.handler)?t.handler.bind(e):n[t.handler];G0(l)&&Lr(o,l,t)}}function $e(t){const n=t.type,{mixins:e,extends:s}=n,{mixins:o,optionsCache:l,config:{optionMergeStrategies:a}}=t.appContext,f=l.get(n);let h;return f?h=f:!o.length&&!e&&!s?h=n:(h={},o.length&&o.forEach(p=>Fr(h,p,a,!0)),Fr(h,n,a)),k2(n)&&l.set(n,h),h}function Fr(t,n,e,s=!1){const{mixins:o,extends:l}=n;l&&Fr(t,l,e,!0),o&&o.forEach(a=>Fr(t,a,e,!0));for(const a in n)if(!(s&&a==="expose")){const f=ap[a]||e&&e[a];t[a]=f?f(t[a],n[a]):n[a]}return t}const ap={data:j9,props:z9,emits:z9,methods:X3,computed:X3,beforeCreate:m1,created:m1,beforeMount:m1,mounted:m1,beforeUpdate:m1,updated:m1,beforeDestroy:m1,beforeUnmount:m1,destroyed:m1,unmounted:m1,activated:m1,deactivated:m1,errorCaptured:m1,serverPrefetch:m1,components:X3,directives:X3,watch:fp,provide:j9,inject:cp};function j9(t,n){return n?t?function(){return J2(G0(t)?t.call(this,this):t,G0(n)?n.call(this,this):n)}:n:t}function cp(t,n){return X3(le(t),le(n))}function le(t){if(N0(t)){const n={};for(let e=0;e<t.length;e++)n[t[e]]=t[e];return n}return t}function m1(t,n){return t?[...new Set([].concat(t,n))]:n}function X3(t,n){return t?J2(Object.create(null),t,n):n}function z9(t,n){return t?N0(t)&&N0(n)?[...new Set([...t,...n])]:J2(Object.create(null),q9(t),q9(n??{})):n}function fp(t,n){if(!t)return n;if(!n)return t;const e=J2(Object.create(null),t);for(const s in n)e[s]=m1(t[s],n[s]);return e}function Xs(){return{app:null,config:{isNativeTag:ng,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hp=0;function _p(t,n){return function(s,o=null){G0(s)||(s=J2({},s)),o!=null&&!k2(o)&&(o=null);const l=Xs(),a=new WeakSet,f=[];let h=!1;const p=l.app={_uid:hp++,_component:s,_props:o,_container:null,_context:l,_instance:null,version:jp,get config(){return l.config},set config(y){},use(y,...x){return a.has(y)||(y&&G0(y.install)?(a.add(y),y.install(p,...x)):G0(y)&&(a.add(y),y(p,...x))),p},mixin(y){return l.mixins.includes(y)||l.mixins.push(y),p},component(y,x){return x?(l.components[y]=x,p):l.components[y]},directive(y,x){return x?(l.directives[y]=x,p):l.directives[y]},mount(y,x,b){if(!h){const C=p._ceVNode||D1(s,o);return C.appContext=l,b===!0?b="svg":b===!1&&(b=void 0),x&&n?n(C,y):t(C,y,b),h=!0,p._container=y,y.__vue_app__=p,l5(C.component)}},onUnmount(y){f.push(y)},unmount(){h&&(xt(f,p._instance,16),t(null,p._container),delete p._container.__vue_app__)},provide(y,x){return l.provides[y]=x,p},runWithContext(y){const x=m3;m3=p;try{return y()}finally{m3=x}}};return p}}let m3=null;function Ar(t,n){if(c1){let e=c1.provides;const s=c1.parent&&c1.parent.provides;s===e&&(e=c1.provides=Object.create(s)),e[t]=n}}function Ut(t,n,e=!1){const s=c1||I1;if(s||m3){const o=m3?m3._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return e&&G0(n)?n.call(s&&s.proxy):n}}const Qs={},to=()=>Object.create(Qs),no=t=>Object.getPrototypeOf(t)===Qs;function dp(t,n,e,s=!1){const o={},l=to();t.propsDefaults=Object.create(null),ro(t,n,o,l);for(const a in t.propsOptions[0])a in o||(o[a]=void 0);e?t.props=s?o:Bs(o):t.type.props?t.props=o:t.props=l,t.attrs=l}function gp(t,n,e,s){const{props:o,attrs:l,vnode:{patchFlag:a}}=t,f=f2(o),[h]=t.propsOptions;let p=!1;if((s||a>0)&&!(a&16)){if(a&8){const y=t.vnode.dynamicProps;for(let x=0;x<y.length;x++){let b=y[x];if(o5(t.emitsOptions,b))continue;const C=n[b];if(h)if(h2(l,b))C!==l[b]&&(l[b]=C,p=!0);else{const q=Z1(b);o[q]=ae(h,f,q,C,t,!1)}else C!==l[b]&&(l[b]=C,p=!0)}}}else{ro(t,n,o,l)&&(p=!0);let y;for(const x in f)(!n||!h2(n,x)&&((y=Vn(x))===x||!h2(n,y)))&&(h?e&&(e[x]!==void 0||e[y]!==void 0)&&(o[x]=ae(h,f,x,void 0,t,!0)):delete o[x]);if(l!==f)for(const x in l)(!n||!h2(n,x))&&(delete l[x],p=!0)}p&&Yt(t.attrs,"set","")}function ro(t,n,e,s){const[o,l]=t.propsOptions;let a=!1,f;if(n)for(let h in n){if(t4(h))continue;const p=n[h];let y;o&&h2(o,y=Z1(h))?!l||!l.includes(y)?e[y]=p:(f||(f={}))[y]=p:o5(t.emitsOptions,h)||(!(h in s)||p!==s[h])&&(s[h]=p,a=!0)}if(l){const h=f2(e),p=f||x2;for(let y=0;y<l.length;y++){const x=l[y];e[x]=ae(o,h,x,p[x],t,!h2(p,x))}}return a}function ae(t,n,e,s,o,l){const a=t[e];if(a!=null){const f=h2(a,"default");if(f&&s===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&G0(h)){const{propsDefaults:p}=o;if(e in p)s=p[e];else{const y=M4(o);s=p[e]=h.call(null,n),y()}}else s=h;o.ce&&o.ce._setProp(e,s)}a[0]&&(l&&!f?s=!1:a[1]&&(s===""||s===Vn(e))&&(s=!0))}return s}const pp=new WeakMap;function eo(t,n,e=!1){const s=e?pp:n.propsCache,o=s.get(t);if(o)return o;const l=t.props,a={},f=[];let h=!1;if(!G0(t)){const y=x=>{h=!0;const[b,C]=eo(x,n,!0);J2(a,b),C&&f.push(...C)};!e&&n.mixins.length&&n.mixins.forEach(y),t.extends&&y(t.extends),t.mixins&&t.mixins.forEach(y)}if(!l&&!h)return k2(t)&&s.set(t,_3),_3;if(N0(l))for(let y=0;y<l.length;y++){const x=Z1(l[y]);Z9(x)&&(a[x]=x2)}else if(l)for(const y in l){const x=Z1(y);if(Z9(x)){const b=l[y],C=a[x]=N0(b)||G0(b)?{type:b}:J2({},b),q=C.type;let W=!1,r0=!0;if(N0(q))for(let i0=0;i0<q.length;++i0){const t0=q[i0],u0=G0(t0)&&t0.name;if(u0==="Boolean"){W=!0;break}else u0==="String"&&(r0=!1)}else W=G0(q)&&q.name==="Boolean";C[0]=W,C[1]=r0,(W||h2(C,"default"))&&f.push(x)}}const p=[a,f];return k2(t)&&s.set(t,p),p}function Z9(t){return t[0]!=="$"&&!t4(t)}const io=t=>t[0]==="_"||t==="$stable",Ye=t=>N0(t)?t.map(mt):[mt(t)],mp=(t,n,e)=>{if(n._n)return n;const s=Wg((...o)=>Ye(n(...o)),e);return s._c=!1,s},so=(t,n,e)=>{const s=t._ctx;for(const o in t){if(io(o))continue;const l=t[o];if(G0(l))n[o]=mp(o,l,s);else if(l!=null){const a=Ye(l);n[o]=()=>a}}},oo=(t,n)=>{const e=Ye(n);t.slots.default=()=>e},uo=(t,n,e)=>{for(const s in n)(e||s!=="_")&&(t[s]=n[s])},vp=(t,n,e)=>{const s=t.slots=to();if(t.vnode.shapeFlag&32){const o=n._;o?(uo(s,n,e),e&&vs(s,"_",o,!0)):so(n,s)}else n&&oo(t,n)},yp=(t,n,e)=>{const{vnode:s,slots:o}=t;let l=!0,a=x2;if(s.shapeFlag&32){const f=n._;f?e&&f===1?l=!1:uo(o,n,e):(l=!n.$stable,so(n,o)),a=n}else n&&(oo(t,n),a={default:1});if(l)for(const f in o)!io(f)&&a[f]==null&&delete o[f]},P1=Np;function Tp(t){return xp(t)}function xp(t,n){const e=n5();e.__VUE__=!0;const{insert:s,remove:o,patchProp:l,createElement:a,createText:f,createComment:h,setText:p,setElementText:y,parentNode:x,nextSibling:b,setScopeId:C=yt,insertStaticContent:q}=t,W=(m,T,A,Y=null,R=null,F=null,s0=void 0,X=null,z=!!T.dynamicChildren)=>{if(m===T)return;m&&!U3(m,T)&&(Y=I(m),O2(m,R,F,!0),m=null),T.patchFlag===-2&&(z=!1,T.dynamicChildren=null);const{type:K,ref:k0,shapeFlag:d0}=T;switch(K){case u5:r0(m,T,A,Y);break;case Yn:i0(m,T,A,Y);break;case Or:m==null&&t0(T,A,Y,s0);break;case P0:P2(m,T,A,Y,R,F,s0,X,z);break;default:d0&1?h0(m,T,A,Y,R,F,s0,X,z):d0&6?L2(m,T,A,Y,R,F,s0,X,z):(d0&64||d0&128)&&K.process(m,T,A,Y,R,F,s0,X,z,E)}k0!=null&&R&&Vr(k0,m&&m.ref,F,T||m,!T)},r0=(m,T,A,Y)=>{if(m==null)s(T.el=f(T.children),A,Y);else{const R=T.el=m.el;T.children!==m.children&&p(R,T.children)}},i0=(m,T,A,Y)=>{m==null?s(T.el=h(T.children||""),A,Y):T.el=m.el},t0=(m,T,A,Y)=>{[m.el,m.anchor]=q(m.children,T,A,Y,m.el,m.anchor)},u0=({el:m,anchor:T},A,Y)=>{let R;for(;m&&m!==T;)R=b(m),s(m,A,Y),m=R;s(T,A,Y)},a0=({el:m,anchor:T})=>{let A;for(;m&&m!==T;)A=b(m),o(m),m=A;o(T)},h0=(m,T,A,Y,R,F,s0,X,z)=>{T.type==="svg"?s0="svg":T.type==="math"&&(s0="mathml"),m==null?C0(T,A,Y,R,F,s0,X,z):V0(m,T,R,F,s0,X,z)},C0=(m,T,A,Y,R,F,s0,X)=>{let z,K;const{props:k0,shapeFlag:d0,transition:x0,dirs:L0}=m;if(z=m.el=a(m.type,F,k0&&k0.is,k0),d0&8?y(z,m.children):d0&16&&J0(m.children,z,null,Y,R,G6(m,F),s0,X),L0&&On(m,null,Y,"created"),S0(z,m,m.scopeId,s0,Y),k0){for(const U0 in k0)U0!=="value"&&!t4(U0)&&l(z,U0,null,k0[U0],F,Y);"value"in k0&&l(z,"value",null,k0.value,F),(K=k0.onVnodeBeforeMount)&&dt(K,Y,m)}L0&&On(m,null,Y,"beforeMount");const $0=wp(R,x0);$0&&x0.beforeEnter(z),s(z,T,A),((K=k0&&k0.onVnodeMounted)||$0||L0)&&P1(()=>{K&&dt(K,Y,m),$0&&x0.enter(z),L0&&On(m,null,Y,"mounted")},R)},S0=(m,T,A,Y,R)=>{if(A&&C(m,A),Y)for(let F=0;F<Y.length;F++)C(m,Y[F]);if(R){let F=R.subTree;if(T===F||_o(F.type)&&(F.ssContent===T||F.ssFallback===T)){const s0=R.vnode;S0(m,s0,s0.scopeId,s0.slotScopeIds,R.parent)}}},J0=(m,T,A,Y,R,F,s0,X,z=0)=>{for(let K=z;K<m.length;K++){const k0=m[K]=X?hn(m[K]):mt(m[K]);W(null,k0,T,A,Y,R,F,s0,X)}},V0=(m,T,A,Y,R,F,s0)=>{const X=T.el=m.el;let{patchFlag:z,dynamicChildren:K,dirs:k0}=T;z|=m.patchFlag&16;const d0=m.props||x2,x0=T.props||x2;let L0;if(A&&En(A,!1),(L0=x0.onVnodeBeforeUpdate)&&dt(L0,A,T,m),k0&&On(T,m,A,"beforeUpdate"),A&&En(A,!0),(d0.innerHTML&&x0.innerHTML==null||d0.textContent&&x0.textContent==null)&&y(X,""),K?l2(m.dynamicChildren,K,X,A,Y,G6(T,R),F):s0||R0(m,T,X,null,A,Y,G6(T,R),F,!1),z>0){if(z&16)w2(X,d0,x0,A,R);else if(z&2&&d0.class!==x0.class&&l(X,"class",null,x0.class,R),z&4&&l(X,"style",d0.style,x0.style,R),z&8){const $0=T.dynamicProps;for(let U0=0;U0<$0.length;U0++){const z0=$0[U0],U2=d0[z0],H2=x0[z0];(H2!==U2||z0==="value")&&l(X,z0,U2,H2,R,A)}}z&1&&m.children!==T.children&&y(X,T.children)}else!s0&&K==null&&w2(X,d0,x0,A,R);((L0=x0.onVnodeUpdated)||k0)&&P1(()=>{L0&&dt(L0,A,T,m),k0&&On(T,m,A,"updated")},Y)},l2=(m,T,A,Y,R,F,s0)=>{for(let X=0;X<T.length;X++){const z=m[X],K=T[X],k0=z.el&&(z.type===P0||!U3(z,K)||z.shapeFlag&70)?x(z.el):A;W(z,K,k0,null,Y,R,F,s0,!0)}},w2=(m,T,A,Y,R)=>{if(T!==A){if(T!==x2)for(const F in T)!t4(F)&&!(F in A)&&l(m,F,T[F],null,R,Y);for(const F in A){if(t4(F))continue;const s0=A[F],X=T[F];s0!==X&&F!=="value"&&l(m,F,X,s0,R,Y)}"value"in A&&l(m,"value",T.value,A.value,R)}},P2=(m,T,A,Y,R,F,s0,X,z)=>{const K=T.el=m?m.el:f(""),k0=T.anchor=m?m.anchor:f("");let{patchFlag:d0,dynamicChildren:x0,slotScopeIds:L0}=T;L0&&(X=X?X.concat(L0):L0),m==null?(s(K,A,Y),s(k0,A,Y),J0(T.children||[],A,k0,R,F,s0,X,z)):d0>0&&d0&64&&x0&&m.dynamicChildren?(l2(m.dynamicChildren,x0,A,R,F,s0,X),(T.key!=null||R&&T===R.subTree)&&lo(m,T,!0)):R0(m,T,A,k0,R,F,s0,X,z)},L2=(m,T,A,Y,R,F,s0,X,z)=>{T.slotScopeIds=X,m==null?T.shapeFlag&512?R.ctx.activate(T,A,Y,s0,z):i1(T,A,Y,R,F,s0,z):y1(m,T,z)},i1=(m,T,A,Y,R,F,s0)=>{const X=m.component=Yp(m,Y,R);if(qs(m)&&(X.ctx.renderer=E),Vp(X,!1,s0),X.asyncDep){if(R&&R.registerDep(X,n2,s0),!m.el){const z=X.subTree=D1(Yn);i0(null,z,T,A)}}else n2(X,m,T,A,R,F,s0)},y1=(m,T,A)=>{const Y=T.component=m.component;if(Op(m,T,A))if(Y.asyncDep&&!Y.asyncResolved){I0(Y,T,A);return}else Y.next=T,Y.update();else T.el=m.el,Y.vnode=T},n2=(m,T,A,Y,R,F,s0)=>{const X=()=>{if(m.isMounted){let{next:d0,bu:x0,u:L0,parent:$0,vnode:U0}=m;{const Z=ao(m);if(Z){d0&&(d0.el=U0.el,I0(m,d0,s0)),Z.asyncDep.then(()=>{m.isUnmounted||X()});return}}let z0=d0,U2;En(m,!1),d0?(d0.el=U0.el,I0(m,d0,s0)):d0=U0,x0&&Dr(x0),(U2=d0.props&&d0.props.onVnodeBeforeUpdate)&&dt(U2,$0,d0,U0),En(m,!0);const H2=$6(m),z2=m.subTree;m.subTree=H2,W(z2,H2,x(z2.el),I(z2),m,R,F),d0.el=H2.el,z0===null&&Ep(m,H2.el),L0&&P1(L0,R),(U2=d0.props&&d0.props.onVnodeUpdated)&&P1(()=>dt(U2,$0,d0,U0),R)}else{let d0;const{el:x0,props:L0}=T,{bm:$0,m:U0,parent:z0,root:U2,type:H2}=m,z2=e4(T);if(En(m,!1),$0&&Dr($0),!z2&&(d0=L0&&L0.onVnodeBeforeMount)&&dt(d0,z0,T),En(m,!0),x0&&p0){const Z=()=>{m.subTree=$6(m),p0(x0,m.subTree,m,R,null)};z2&&H2.__asyncHydrate?H2.__asyncHydrate(x0,m,Z):Z()}else{U2.ce&&U2.ce._injectChildStyle(H2);const Z=m.subTree=$6(m);W(null,Z,A,Y,m,R,F),T.el=Z.el}if(U0&&P1(U0,R),!z2&&(d0=L0&&L0.onVnodeMounted)){const Z=T;P1(()=>dt(d0,z0,Z),R)}(T.shapeFlag&256||z0&&e4(z0.vnode)&&z0.vnode.shapeFlag&256)&&m.a&&P1(m.a,R),m.isMounted=!0,T=A=Y=null}};m.scope.on();const z=m.effect=new ws(X);m.scope.off();const K=m.update=z.run.bind(z),k0=m.job=z.runIfDirty.bind(z);k0.i=m,k0.id=m.uid,z.scheduler=()=>He(k0),En(m,!0),K()},I0=(m,T,A)=>{T.component=m;const Y=m.vnode.props;m.vnode=T,m.next=null,gp(m,T.props,Y,A),yp(m,T.children,A),Tn(),W9(m),xn()},R0=(m,T,A,Y,R,F,s0,X,z=!1)=>{const K=m&&m.children,k0=m?m.shapeFlag:0,d0=T.children,{patchFlag:x0,shapeFlag:L0}=T;if(x0>0){if(x0&128){S2(K,d0,A,Y,R,F,s0,X,z);return}else if(x0&256){s1(K,d0,A,Y,R,F,s0,X,z);return}}L0&8?(k0&16&&B2(K,R,F),d0!==K&&y(A,d0)):k0&16?L0&16?S2(K,d0,A,Y,R,F,s0,X,z):B2(K,R,F,!0):(k0&8&&y(A,""),L0&16&&J0(d0,A,Y,R,F,s0,X,z))},s1=(m,T,A,Y,R,F,s0,X,z)=>{m=m||_3,T=T||_3;const K=m.length,k0=T.length,d0=Math.min(K,k0);let x0;for(x0=0;x0<d0;x0++){const L0=T[x0]=z?hn(T[x0]):mt(T[x0]);W(m[x0],L0,A,null,R,F,s0,X,z)}K>k0?B2(m,R,F,!0,!1,d0):J0(T,A,Y,R,F,s0,X,z,d0)},S2=(m,T,A,Y,R,F,s0,X,z)=>{let K=0;const k0=T.length;let d0=m.length-1,x0=k0-1;for(;K<=d0&&K<=x0;){const L0=m[K],$0=T[K]=z?hn(T[K]):mt(T[K]);if(U3(L0,$0))W(L0,$0,A,null,R,F,s0,X,z);else break;K++}for(;K<=d0&&K<=x0;){const L0=m[d0],$0=T[x0]=z?hn(T[x0]):mt(T[x0]);if(U3(L0,$0))W(L0,$0,A,null,R,F,s0,X,z);else break;d0--,x0--}if(K>d0){if(K<=x0){const L0=x0+1,$0=L0<k0?T[L0].el:Y;for(;K<=x0;)W(null,T[K]=z?hn(T[K]):mt(T[K]),A,$0,R,F,s0,X,z),K++}}else if(K>x0)for(;K<=d0;)O2(m[K],R,F,!0),K++;else{const L0=K,$0=K,U0=new Map;for(K=$0;K<=x0;K++){const H=T[K]=z?hn(T[K]):mt(T[K]);H.key!=null&&U0.set(H.key,K)}let z0,U2=0;const H2=x0-$0+1;let z2=!1,Z=0;const v=new Array(H2);for(K=0;K<H2;K++)v[K]=0;for(K=L0;K<=d0;K++){const H=m[K];if(U2>=H2){O2(H,R,F,!0);continue}let U;if(H.key!=null)U=U0.get(H.key);else for(z0=$0;z0<=x0;z0++)if(v[z0-$0]===0&&U3(H,T[z0])){U=z0;break}U===void 0?O2(H,R,F,!0):(v[U-$0]=K+1,U>=Z?Z=U:z2=!0,W(H,T[U],A,null,R,F,s0,X,z),U2++)}const J=z2?Sp(v):_3;for(z0=J.length-1,K=H2-1;K>=0;K--){const H=$0+K,U=T[H],_0=H+1<k0?T[H+1].el:Y;v[K]===0?W(null,U,A,_0,R,F,s0,X,z):z2&&(z0<0||K!==J[z0]?y2(U,A,_0,2):z0--)}}},y2=(m,T,A,Y,R=null)=>{const{el:F,type:s0,transition:X,children:z,shapeFlag:K}=m;if(K&6){y2(m.component.subTree,T,A,Y);return}if(K&128){m.suspense.move(T,A,Y);return}if(K&64){s0.move(m,T,A,E);return}if(s0===P0){s(F,T,A);for(let d0=0;d0<z.length;d0++)y2(z[d0],T,A,Y);s(m.anchor,T,A);return}if(s0===Or){u0(m,T,A);return}if(Y!==2&&K&1&&X)if(Y===0)X.beforeEnter(F),s(F,T,A),P1(()=>X.enter(F),R);else{const{leave:d0,delayLeave:x0,afterLeave:L0}=X,$0=()=>s(F,T,A),U0=()=>{d0(F,()=>{$0(),L0&&L0()})};x0?x0(F,$0,U0):U0()}else s(F,T,A)},O2=(m,T,A,Y=!1,R=!1)=>{const{type:F,props:s0,ref:X,children:z,dynamicChildren:K,shapeFlag:k0,patchFlag:d0,dirs:x0,cacheIndex:L0}=m;if(d0===-2&&(R=!1),X!=null&&Vr(X,null,A,m,!0),L0!=null&&(T.renderCache[L0]=void 0),k0&256){T.ctx.deactivate(m);return}const $0=k0&1&&x0,U0=!e4(m);let z0;if(U0&&(z0=s0&&s0.onVnodeBeforeUnmount)&&dt(z0,T,m),k0&6)X2(m.component,A,Y);else{if(k0&128){m.suspense.unmount(A,Y);return}$0&&On(m,null,T,"beforeUnmount"),k0&64?m.type.remove(m,T,A,E,Y):K&&!K.hasOnce&&(F!==P0||d0>0&&d0&64)?B2(K,T,A,!1,!0):(F===P0&&d0&384||!R&&k0&16)&&B2(z,T,A),Y&&T1(m)}(U0&&(z0=s0&&s0.onVnodeUnmounted)||$0)&&P1(()=>{z0&&dt(z0,T,m),$0&&On(m,null,T,"unmounted")},A)},T1=m=>{const{type:T,el:A,anchor:Y,transition:R}=m;if(T===P0){x1(A,Y);return}if(T===Or){a0(m);return}const F=()=>{o(A),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(m.shapeFlag&1&&R&&!R.persisted){const{leave:s0,delayLeave:X}=R,z=()=>s0(A,F);X?X(m.el,F,z):z()}else F()},x1=(m,T)=>{let A;for(;m!==T;)A=b(m),o(m),m=A;o(T)},X2=(m,T,A)=>{const{bum:Y,scope:R,job:F,subTree:s0,um:X,m:z,a:K}=m;J9(z),J9(K),Y&&Dr(Y),R.stop(),F&&(F.flags|=8,O2(s0,m,T,A)),X&&P1(X,T),P1(()=>{m.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},B2=(m,T,A,Y=!1,R=!1,F=0)=>{for(let s0=F;s0<m.length;s0++)O2(m[s0],T,A,Y,R)},I=m=>{if(m.shapeFlag&6)return I(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const T=b(m.anchor||m.el),A=T&&T[Ug];return A?b(A):T};let N=!1;const M=(m,T,A)=>{m==null?T._vnode&&O2(T._vnode,null,null,!0):W(T._vnode||null,m,T,null,null,null,A),T._vnode=m,N||(N=!0,W9(),Vs(),N=!1)},E={p:W,um:O2,m:y2,r:T1,mt:i1,mc:J0,pc:R0,pbc:l2,n:I,o:t};let $,p0;return{render:M,hydrate:$,createApp:_p(M,$)}}function G6({type:t,props:n},e){return e==="svg"&&t==="foreignObject"||e==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:e}function En({effect:t,job:n},e){e?(t.flags|=32,n.flags|=4):(t.flags&=-33,n.flags&=-5)}function wp(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function lo(t,n,e=!1){const s=t.children,o=n.children;if(N0(s)&&N0(o))for(let l=0;l<s.length;l++){const a=s[l];let f=o[l];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=o[l]=hn(o[l]),f.el=a.el),!e&&f.patchFlag!==-2&&lo(a,f)),f.type===u5&&(f.el=a.el)}}function Sp(t){const n=t.slice(),e=[0];let s,o,l,a,f;const h=t.length;for(s=0;s<h;s++){const p=t[s];if(p!==0){if(o=e[e.length-1],t[o]<p){n[s]=o,e.push(s);continue}for(l=0,a=e.length-1;l<a;)f=l+a>>1,t[e[f]]<p?l=f+1:a=f;p<t[e[l]]&&(l>0&&(n[s]=e[l-1]),e[l]=s)}}for(l=e.length,a=e[l-1];l-- >0;)e[l]=a,a=n[a];return e}function ao(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:ao(n)}function J9(t){if(t)for(let n=0;n<t.length;n++)t[n].flags|=8}const bp=Symbol.for("v-scx"),Mp=()=>Ut(bp);function Lr(t,n,e){return co(t,n,e)}function co(t,n,e=x2){const{immediate:s,deep:o,flush:l,once:a}=e,f=J2({},e),h=n&&s||!n&&l!=="post";let p;if(_4){if(l==="sync"){const C=Mp();p=C.__watcherHandles||(C.__watcherHandles=[])}else if(!h){const C=()=>{};return C.stop=yt,C.resume=yt,C.pause=yt,C}}const y=c1;f.call=(C,q,W)=>xt(C,y,q,W);let x=!1;l==="post"?f.scheduler=C=>{P1(C,y&&y.suspense)}:l!=="sync"&&(x=!0,f.scheduler=(C,q)=>{q?C():He(C)}),f.augmentJob=C=>{n&&(C.flags|=4),x&&(C.flags|=2,y&&(C.id=y.uid,C.i=y))};const b=$g(t,n,f);return _4&&(p?p.push(b):h&&b()),b}function kp(t,n,e){const s=this.proxy,o=W2(t)?t.includes(".")?fo(s,t):()=>s[t]:t.bind(s,s);let l;G0(n)?l=n:(l=n.handler,e=n);const a=M4(this),f=co(o,l.bind(s),e);return a(),f}function fo(t,n){const e=n.split(".");return()=>{let s=t;for(let o=0;o<e.length&&s;o++)s=s[e[o]];return s}}const Cp=(t,n)=>n==="modelValue"||n==="model-value"?t.modelModifiers:t[`${n}Modifiers`]||t[`${Z1(n)}Modifiers`]||t[`${Vn(n)}Modifiers`];function Dp(t,n,...e){if(t.isUnmounted)return;const s=t.vnode.props||x2;let o=e;const l=n.startsWith("update:"),a=l&&Cp(s,n.slice(7));a&&(a.trim&&(o=e.map(y=>W2(y)?y.trim():y)),a.number&&(o=e.map(Hr)));let f,h=s[f=N6(n)]||s[f=N6(Z1(n))];!h&&l&&(h=s[f=N6(Vn(n))]),h&&xt(h,t,6,o);const p=s[f+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[f])return;t.emitted[f]=!0,xt(p,t,6,o)}}function ho(t,n,e=!1){const s=n.emitsCache,o=s.get(t);if(o!==void 0)return o;const l=t.emits;let a={},f=!1;if(!G0(t)){const h=p=>{const y=ho(p,n,!0);y&&(f=!0,J2(a,y))};!e&&n.mixins.length&&n.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!l&&!f?(k2(t)&&s.set(t,null),null):(N0(l)?l.forEach(h=>a[h]=null):J2(a,l),k2(t)&&s.set(t,a),a)}function o5(t,n){return!t||!Xr(n)?!1:(n=n.slice(2).replace(/Once$/,""),h2(t,n[0].toLowerCase()+n.slice(1))||h2(t,Vn(n))||h2(t,n))}function $6(t){const{type:n,vnode:e,proxy:s,withProxy:o,propsOptions:[l],slots:a,attrs:f,emit:h,render:p,renderCache:y,props:x,data:b,setupState:C,ctx:q,inheritAttrs:W}=t,r0=Yr(t);let i0,t0;try{if(e.shapeFlag&4){const a0=o||s,h0=a0;i0=mt(p.call(h0,a0,y,x,C,b,q)),t0=f}else{const a0=n;i0=mt(a0.length>1?a0(x,{attrs:f,slots:a,emit:h}):a0(x,null)),t0=n.props?f:Ap(f)}}catch(a0){s4.length=0,i5(a0,t,1),i0=D1(Yn)}let u0=i0;if(t0&&W!==!1){const a0=Object.keys(t0),{shapeFlag:h0}=u0;a0.length&&h0&7&&(l&&a0.some(Me)&&(t0=Lp(t0,l)),u0=x3(u0,t0,!1,!0))}return e.dirs&&(u0=x3(u0,null,!1,!0),u0.dirs=u0.dirs?u0.dirs.concat(e.dirs):e.dirs),e.transition&&Ge(u0,e.transition),i0=u0,Yr(r0),i0}const Ap=t=>{let n;for(const e in t)(e==="class"||e==="style"||Xr(e))&&((n||(n={}))[e]=t[e]);return n},Lp=(t,n)=>{const e={};for(const s in t)(!Me(s)||!(s.slice(9)in n))&&(e[s]=t[s]);return e};function Op(t,n,e){const{props:s,children:o,component:l}=t,{props:a,children:f,patchFlag:h}=n,p=l.emitsOptions;if(n.dirs||n.transition)return!0;if(e&&h>=0){if(h&1024)return!0;if(h&16)return s?X9(s,a,p):!!a;if(h&8){const y=n.dynamicProps;for(let x=0;x<y.length;x++){const b=y[x];if(a[b]!==s[b]&&!o5(p,b))return!0}}}else return(o||f)&&(!f||!f.$stable)?!0:s===a?!1:s?a?X9(s,a,p):!0:!!a;return!1}function X9(t,n,e){const s=Object.keys(n);if(s.length!==Object.keys(t).length)return!0;for(let o=0;o<s.length;o++){const l=s[o];if(n[l]!==t[l]&&!o5(e,l))return!0}return!1}function Ep({vnode:t,parent:n},e){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=n.vnode).el=e,n=n.parent;else break}}const _o=t=>t.__isSuspense;function Np(t,n){n&&n.pendingBranch?N0(t)?n.effects.push(...t):n.effects.push(t):Fg(t)}const P0=Symbol.for("v-fgt"),u5=Symbol.for("v-txt"),Yn=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),s4=[];let H1=null;function o0(t=!1){s4.push(H1=t?null:[])}function Rp(){s4.pop(),H1=s4[s4.length-1]||null}let h4=1;function Q9(t,n=!1){h4+=t,t<0&&H1&&n&&(H1.hasOnce=!0)}function go(t){return t.dynamicChildren=h4>0?H1||_3:null,Rp(),h4>0&&H1&&H1.push(t),t}function g0(t,n,e,s,o,l){return go(S(t,n,e,s,o,l,!0))}function f3(t,n,e,s,o){return go(D1(t,n,e,s,o,!0))}function Wr(t){return t?t.__v_isVNode===!0:!1}function U3(t,n){return t.type===n.type&&t.key===n.key}const po=({key:t})=>t??null,Er=({ref:t,ref_key:n,ref_for:e})=>(typeof t=="number"&&(t=""+t),t!=null?W2(t)||f1(t)||G0(t)?{i:I1,r:t,k:n,f:!!e}:t:null);function S(t,n=null,e=null,s=0,o=null,l=t===P0?0:1,a=!1,f=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&po(n),ref:n&&Er(n),scopeId:Ws,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:I1};return f?(Ve(h,e),l&128&&t.normalize(h)):e&&(h.shapeFlag|=W2(e)?8:16),h4>0&&!a&&H1&&(h.patchFlag>0||l&6)&&h.patchFlag!==32&&H1.push(h),h}const D1=Pp;function Pp(t,n=null,e=null,s=0,o=null,l=!1){if((!t||t===Zs)&&(t=Yn),Wr(t)){const f=x3(t,n,!0);return e&&Ve(f,e),h4>0&&!l&&H1&&(f.shapeFlag&6?H1[H1.indexOf(t)]=f:H1.push(f)),f.patchFlag=-2,f}if(Kp(t)&&(t=t.__vccOpts),n){n=Bp(n);let{class:f,style:h}=n;f&&!W2(f)&&(n.class=pt(f)),k2(h)&&(Be(h)&&!N0(h)&&(h=J2({},h)),n.style=De(h))}const a=W2(t)?1:_o(t)?128:qg(t)?64:k2(t)?4:G0(t)?2:0;return S(t,n,e,s,o,a,l,!0)}function Bp(t){return t?Be(t)||no(t)?J2({},t):t:null}function x3(t,n,e=!1,s=!1){const{props:o,ref:l,patchFlag:a,children:f,transition:h}=t,p=n?Hp(o||{},n):o,y={__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&po(p),ref:n&&n.ref?e&&l?N0(l)?l.concat(Er(n)):[l,Er(n)]:Er(n):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:f,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==P0?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&x3(t.ssContent),ssFallback:t.ssFallback&&x3(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&s&&Ge(y,h.clone(y)),y}function l0(t=" ",n=0){return D1(u5,null,t,n)}function Ip(t,n){const e=D1(Or,null,t);return e.staticCount=n,e}function Bn(t="",n=!1){return n?(o0(),f3(Yn,null,t)):D1(Yn,null,t)}function mt(t){return t==null||typeof t=="boolean"?D1(Yn):N0(t)?D1(P0,null,t.slice()):Wr(t)?hn(t):D1(u5,null,String(t))}function hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:x3(t)}function Ve(t,n){let e=0;const{shapeFlag:s}=t;if(n==null)n=null;else if(N0(n))e=16;else if(typeof n=="object")if(s&65){const o=n.default;o&&(o._c&&(o._d=!1),Ve(t,o()),o._c&&(o._d=!0));return}else{e=32;const o=n._;!o&&!no(n)?n._ctx=I1:o===3&&I1&&(I1.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else G0(n)?(n={default:n,_ctx:I1},e=32):(n=String(n),s&64?(e=16,n=[l0(n)]):e=8);t.children=n,t.shapeFlag|=e}function Hp(...t){const n={};for(let e=0;e<t.length;e++){const s=t[e];for(const o in s)if(o==="class")n.class!==s.class&&(n.class=pt([n.class,s.class]));else if(o==="style")n.style=De([n.style,s.style]);else if(Xr(o)){const l=n[o],a=s[o];a&&l!==a&&!(N0(l)&&l.includes(a))&&(n[o]=l?[].concat(l,a):a)}else o!==""&&(n[o]=s[o])}return n}function dt(t,n,e,s=null){xt(t,n,7,[e,s])}const Gp=Xs();let $p=0;function Yp(t,n,e){const s=t.type,o=(n?n.appContext:t.appContext)||Gp,l={uid:$p++,vnode:t,type:s,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eo(s,o),emitsOptions:ho(s,o),emit:null,emitted:null,propsDefaults:x2,inheritAttrs:s.inheritAttrs,ctx:x2,data:x2,props:x2,attrs:x2,slots:x2,refs:x2,setupState:x2,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=Dp.bind(null,l),t.ce&&t.ce(l),l}let c1=null,Ur,ce;{const t=n5(),n=(e,s)=>{let o;return(o=t[e])||(o=t[e]=[]),o.push(s),l=>{o.length>1?o.forEach(a=>a(l)):o[0](l)}};Ur=n("__VUE_INSTANCE_SETTERS__",e=>c1=e),ce=n("__VUE_SSR_SETTERS__",e=>_4=e)}const M4=t=>{const n=c1;return Ur(t),t.scope.on(),()=>{t.scope.off(),Ur(n)}},ti=()=>{c1&&c1.scope.off(),Ur(null)};function mo(t){return t.vnode.shapeFlag&4}let _4=!1;function Vp(t,n=!1,e=!1){n&&ce(n);const{props:s,children:o}=t.vnode,l=mo(t);dp(t,s,l,n),vp(t,o,e);const a=l?Fp(t,n):void 0;return n&&ce(!1),a}function Fp(t,n){const e=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,op);const{setup:s}=e;if(s){Tn();const o=t.setupContext=s.length>1?Up(t):null,l=M4(t),a=S4(s,t,0,[t.props,o]),f=gs(a);if(xn(),l(),(f||t.sp)&&!e4(t)&&Us(t),f){if(a.then(ti,ti),n)return a.then(h=>{ni(t,h,n)}).catch(h=>{i5(h,t,0)});t.asyncDep=a}else ni(t,a,n)}else vo(t,n)}function ni(t,n,e){G0(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:k2(n)&&(t.setupState=Gs(n)),vo(t,e)}let ri;function vo(t,n,e){const s=t.type;if(!t.render){if(!n&&ri&&!s.render){const o=s.template||$e(t).template;if(o){const{isCustomElement:l,compilerOptions:a}=t.appContext.config,{delimiters:f,compilerOptions:h}=s,p=J2(J2({isCustomElement:l,delimiters:f},a),h);s.render=ri(o,p)}}t.render=s.render||yt}{const o=M4(t);Tn();try{up(t)}finally{xn(),o()}}}const Wp={get(t,n){return l1(t,"get",""),t[n]}};function Up(t){const n=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Wp),slots:t.slots,emit:t.emit,expose:n}}function l5(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Gs(Ng(t.exposed)),{get(n,e){if(e in n)return n[e];if(e in i4)return i4[e](t)},has(n,e){return e in n||e in i4}})):t.proxy}function qp(t,n=!0){return G0(t)?t.displayName||t.name:t.name||n&&t.__name}function Kp(t){return G0(t)&&"__vccOpts"in t}const p2=(t,n)=>Hg(t,n,_4);function _n(t,n,e){const s=arguments.length;return s===2?k2(n)&&!N0(n)?Wr(n)?D1(t,null,[n]):D1(t,n):D1(t,null,n):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&Wr(e)&&(e=[e]),D1(t,n,e))}const jp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fe;const ei=typeof window<"u"&&window.trustedTypes;if(ei)try{fe=ei.createPolicy("vue",{createHTML:t=>t})}catch{}const yo=fe?t=>fe.createHTML(t):t=>t,zp="http://www.w3.org/2000/svg",Zp="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,ii=Gt&&Gt.createElement("template"),Jp={insert:(t,n,e)=>{n.insertBefore(t,e||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,e,s)=>{const o=n==="svg"?Gt.createElementNS(zp,t):n==="mathml"?Gt.createElementNS(Zp,t):e?Gt.createElement(t,{is:e}):Gt.createElement(t);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>Gt.createTextNode(t),createComment:t=>Gt.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gt.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,e,s,o,l){const a=e?e.previousSibling:n.lastChild;if(o&&(o===l||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),e),!(o===l||!(o=o.nextSibling)););else{ii.innerHTML=yo(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const f=ii.content;if(s==="svg"||s==="mathml"){const h=f.firstChild;for(;h.firstChild;)f.appendChild(h.firstChild);f.removeChild(h)}n.insertBefore(f,e)}return[a?a.nextSibling:n.firstChild,e?e.previousSibling:n.lastChild]}},Xp=Symbol("_vtc");function Qp(t,n,e){const s=t[Xp];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?t.removeAttribute("class"):e?t.setAttribute("class",n):t.className=n}const si=Symbol("_vod"),tm=Symbol("_vsh"),nm=Symbol(""),rm=/(^|;)\s*display\s*:/;function em(t,n,e){const s=t.style,o=W2(e);let l=!1;if(e&&!o){if(n)if(W2(n))for(const a of n.split(";")){const f=a.slice(0,a.indexOf(":")).trim();e[f]==null&&Nr(s,f,"")}else for(const a in n)e[a]==null&&Nr(s,a,"");for(const a in e)a==="display"&&(l=!0),Nr(s,a,e[a])}else if(o){if(n!==e){const a=s[nm];a&&(e+=";"+a),s.cssText=e,l=rm.test(e)}}else n&&t.removeAttribute("style");si in t&&(t[si]=l?s.display:"",t[tm]&&(s.display="none"))}const oi=/\s*!important$/;function Nr(t,n,e){if(N0(e))e.forEach(s=>Nr(t,n,s));else if(e==null&&(e=""),n.startsWith("--"))t.setProperty(n,e);else{const s=im(t,n);oi.test(e)?t.setProperty(Vn(s),e.replace(oi,""),"important"):t[s]=e}}const ui=["Webkit","Moz","ms"],Y6={};function im(t,n){const e=Y6[n];if(e)return e;let s=Z1(n);if(s!=="filter"&&s in t)return Y6[n]=s;s=t5(s);for(let o=0;o<ui.length;o++){const l=ui[o]+s;if(l in t)return Y6[n]=l}return n}const li="http://www.w3.org/1999/xlink";function ai(t,n,e,s,o,l=fg(n)){s&&n.startsWith("xlink:")?e==null?t.removeAttributeNS(li,n.slice(6,n.length)):t.setAttributeNS(li,n,e):e==null||l&&!ys(e)?t.removeAttribute(n):t.setAttribute(n,l?"":Tt(e)?String(e):e)}function ci(t,n,e,s,o){if(n==="innerHTML"||n==="textContent"){e!=null&&(t[n]=n==="innerHTML"?yo(e):e);return}const l=t.tagName;if(n==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?t.getAttribute("value")||"":t.value,h=e==null?t.type==="checkbox"?"on":"":String(e);(f!==h||!("_value"in t))&&(t.value=h),e==null&&t.removeAttribute(n),t._value=e;return}let a=!1;if(e===""||e==null){const f=typeof t[n];f==="boolean"?e=ys(e):e==null&&f==="string"?(e="",a=!0):f==="number"&&(e=0,a=!0)}try{t[n]=e}catch{}a&&t.removeAttribute(o||n)}function gn(t,n,e,s){t.addEventListener(n,e,s)}function sm(t,n,e,s){t.removeEventListener(n,e,s)}const fi=Symbol("_vei");function om(t,n,e,s,o=null){const l=t[fi]||(t[fi]={}),a=l[n];if(s&&a)a.value=s;else{const[f,h]=um(n);if(s){const p=l[n]=cm(s,o);gn(t,f,p,h)}else a&&(sm(t,f,a,h),l[n]=void 0)}}const hi=/(?:Once|Passive|Capture)$/;function um(t){let n;if(hi.test(t)){n={};let s;for(;s=t.match(hi);)t=t.slice(0,t.length-s[0].length),n[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vn(t.slice(2)),n]}let V6=0;const lm=Promise.resolve(),am=()=>V6||(lm.then(()=>V6=0),V6=Date.now());function cm(t,n){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;xt(fm(s,e.value),n,5,[s])};return e.value=t,e.attached=am(),e}function fm(t,n){if(N0(n)){const e=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{e.call(t),t._stopped=!0},n.map(s=>o=>!o._stopped&&s&&s(o))}else return n}const _i=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hm=(t,n,e,s,o,l)=>{const a=o==="svg";n==="class"?Qp(t,s,a):n==="style"?em(t,e,s):Xr(n)?Me(n)||om(t,n,e,s,l):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):_m(t,n,s,a))?(ci(t,n,s),!t.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&ai(t,n,s,a,l,n!=="value")):t._isVueCE&&(/[A-Z]/.test(n)||!W2(s))?ci(t,Z1(n),s,l,n):(n==="true-value"?t._trueValue=s:n==="false-value"&&(t._falseValue=s),ai(t,n,s,a))};function _m(t,n,e,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in t&&_i(n)&&G0(e));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return _i(n)&&W2(e)?!1:n in t}const w3=t=>{const n=t.props["onUpdate:modelValue"]||!1;return N0(n)?e=>Dr(n,e):n};function dm(t){t.target.composing=!0}function di(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const qt=Symbol("_assign"),V2={created(t,{modifiers:{lazy:n,trim:e,number:s}},o){t[qt]=w3(o);const l=s||o.props&&o.props.type==="number";gn(t,n?"change":"input",a=>{if(a.target.composing)return;let f=t.value;e&&(f=f.trim()),l&&(f=Hr(f)),t[qt](f)}),e&&gn(t,"change",()=>{t.value=t.value.trim()}),n||(gn(t,"compositionstart",dm),gn(t,"compositionend",di),gn(t,"change",di))},mounted(t,{value:n}){t.value=n??""},beforeUpdate(t,{value:n,oldValue:e,modifiers:{lazy:s,trim:o,number:l}},a){if(t[qt]=w3(a),t.composing)return;const f=(l||t.type==="number")&&!/^0\d/.test(t.value)?Hr(t.value):t.value,h=n??"";f!==h&&(document.activeElement===t&&t.type!=="range"&&(s&&n===e||o&&t.value.trim()===h)||(t.value=h))}},F6={deep:!0,created(t,n,e){t[qt]=w3(e),gn(t,"change",()=>{const s=t._modelValue,o=d4(t),l=t.checked,a=t[qt];if(N0(s)){const f=Ae(s,o),h=f!==-1;if(l&&!h)a(s.concat(o));else if(!l&&h){const p=[...s];p.splice(f,1),a(p)}}else if(M3(s)){const f=new Set(s);l?f.add(o):f.delete(o),a(f)}else a(To(t,l))})},mounted:gi,beforeUpdate(t,n,e){t[qt]=w3(e),gi(t,n,e)}};function gi(t,{value:n,oldValue:e},s){t._modelValue=n;let o;if(N0(n))o=Ae(n,s.props.value)>-1;else if(M3(n))o=n.has(s.props.value);else{if(n===e)return;o=w4(n,To(t,!0))}t.checked!==o&&(t.checked=o)}const cn={deep:!0,created(t,{value:n,modifiers:{number:e}},s){const o=M3(n);gn(t,"change",()=>{const l=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>e?Hr(d4(a)):d4(a));t[qt](t.multiple?o?new Set(l):l:l[0]),t._assigning=!0,Ie(()=>{t._assigning=!1})}),t[qt]=w3(s)},mounted(t,{value:n}){pi(t,n)},beforeUpdate(t,n,e){t[qt]=w3(e)},updated(t,{value:n}){t._assigning||pi(t,n)}};function pi(t,n){const e=t.multiple,s=N0(n);if(!(e&&!s&&!M3(n))){for(let o=0,l=t.options.length;o<l;o++){const a=t.options[o],f=d4(a);if(e)if(s){const h=typeof f;h==="string"||h==="number"?a.selected=n.some(p=>String(p)===String(f)):a.selected=Ae(n,f)>-1}else a.selected=n.has(f);else if(w4(d4(a),n)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!e&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function d4(t){return"_value"in t?t._value:t.value}function To(t,n){const e=n?"_trueValue":"_falseValue";return e in t?t[e]:n}const gm=J2({patchProp:hm},Jp);let mi;function pm(){return mi||(mi=Tp(gm))}const mm=(...t)=>{const n=pm().createApp(...t),{mount:e}=n;return n.mount=s=>{const o=ym(s);if(!o)return;const l=n._component;!G0(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=e(o,!1,vm(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},n};function vm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ym(t){return W2(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const a3=typeof document<"u";function xo(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Tm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xo(t.default)}const c2=Object.assign;function W6(t,n){const e={};for(const s in n){const o=n[s];e[s]=ot(o)?o.map(t):t(o)}return e}const o4=()=>{},ot=Array.isArray,wo=/#/g,xm=/&/g,wm=/\//g,Sm=/=/g,bm=/\?/g,So=/\+/g,Mm=/%5B/g,km=/%5D/g,bo=/%5E/g,Cm=/%60/g,Mo=/%7B/g,Dm=/%7C/g,ko=/%7D/g,Am=/%20/g;function Fe(t){return encodeURI(""+t).replace(Dm,"|").replace(Mm,"[").replace(km,"]")}function Lm(t){return Fe(t).replace(Mo,"{").replace(ko,"}").replace(bo,"^")}function he(t){return Fe(t).replace(So,"%2B").replace(Am,"+").replace(wo,"%23").replace(xm,"%26").replace(Cm,"`").replace(Mo,"{").replace(ko,"}").replace(bo,"^")}function Om(t){return he(t).replace(Sm,"%3D")}function Em(t){return Fe(t).replace(wo,"%23").replace(bm,"%3F")}function Nm(t){return t==null?"":Em(t).replace(wm,"%2F")}function g4(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Rm=/\/$/,Pm=t=>t.replace(Rm,"");function U6(t,n,e="/"){let s,o={},l="",a="";const f=n.indexOf("#");let h=n.indexOf("?");return f<h&&f>=0&&(h=-1),h>-1&&(s=n.slice(0,h),l=n.slice(h+1,f>-1?f:n.length),o=t(l)),f>-1&&(s=s||n.slice(0,f),a=n.slice(f,n.length)),s=Gm(s??n,e),{fullPath:s+(l&&"?")+l+a,path:s,query:o,hash:g4(a)}}function Bm(t,n){const e=n.query?t(n.query):"";return n.path+(e&&"?")+e+(n.hash||"")}function vi(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Im(t,n,e){const s=n.matched.length-1,o=e.matched.length-1;return s>-1&&s===o&&S3(n.matched[s],e.matched[o])&&Co(n.params,e.params)&&t(n.query)===t(e.query)&&n.hash===e.hash}function S3(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Co(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const e in t)if(!Hm(t[e],n[e]))return!1;return!0}function Hm(t,n){return ot(t)?yi(t,n):ot(n)?yi(n,t):t===n}function yi(t,n){return ot(n)?t.length===n.length&&t.every((e,s)=>e===n[s]):t.length===1&&t[0]===n}function Gm(t,n){if(t.startsWith("/"))return t;if(!t)return n;const e=n.split("/"),s=t.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let l=e.length-1,a,f;for(a=0;a<s.length;a++)if(f=s[a],f!==".")if(f==="..")l>1&&l--;else break;return e.slice(0,l).join("/")+"/"+s.slice(a).join("/")}const an={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var p4;(function(t){t.pop="pop",t.push="push"})(p4||(p4={}));var u4;(function(t){t.back="back",t.forward="forward",t.unknown=""})(u4||(u4={}));function $m(t){if(!t)if(a3){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Pm(t)}const Ym=/^[^#]+#/;function Vm(t,n){return t.replace(Ym,"#")+n}function Fm(t,n){const e=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:n.behavior,left:s.left-e.left-(n.left||0),top:s.top-e.top-(n.top||0)}}const a5=()=>({left:window.scrollX,top:window.scrollY});function Wm(t){let n;if("el"in t){const e=t.el,s=typeof e=="string"&&e.startsWith("#"),o=typeof e=="string"?s?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!o)return;n=Fm(o,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Ti(t,n){return(history.state?history.state.position-n:-1)+t}const _e=new Map;function Um(t,n){_e.set(t,n)}function qm(t){const n=_e.get(t);return _e.delete(t),n}let Km=()=>location.protocol+"//"+location.host;function Do(t,n){const{pathname:e,search:s,hash:o}=n,l=t.indexOf("#");if(l>-1){let f=o.includes(t.slice(l))?t.slice(l).length:1,h=o.slice(f);return h[0]!=="/"&&(h="/"+h),vi(h,"")}return vi(e,t)+s+o}function jm(t,n,e,s){let o=[],l=[],a=null;const f=({state:b})=>{const C=Do(t,location),q=e.value,W=n.value;let r0=0;if(b){if(e.value=C,n.value=b,a&&a===q){a=null;return}r0=W?b.position-W.position:0}else s(C);o.forEach(i0=>{i0(e.value,q,{delta:r0,type:p4.pop,direction:r0?r0>0?u4.forward:u4.back:u4.unknown})})};function h(){a=e.value}function p(b){o.push(b);const C=()=>{const q=o.indexOf(b);q>-1&&o.splice(q,1)};return l.push(C),C}function y(){const{history:b}=window;b.state&&b.replaceState(c2({},b.state,{scroll:a5()}),"")}function x(){for(const b of l)b();l=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",y)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",y,{passive:!0}),{pauseListeners:h,listen:p,destroy:x}}function xi(t,n,e,s=!1,o=!1){return{back:t,current:n,forward:e,replaced:s,position:window.history.length,scroll:o?a5():null}}function zm(t){const{history:n,location:e}=window,s={value:Do(t,e)},o={value:n.state};o.value||l(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(h,p,y){const x=t.indexOf("#"),b=x>-1?(e.host&&document.querySelector("base")?t:t.slice(x))+h:Km()+t+h;try{n[y?"replaceState":"pushState"](p,"",b),o.value=p}catch(C){console.error(C),e[y?"replace":"assign"](b)}}function a(h,p){const y=c2({},n.state,xi(o.value.back,h,o.value.forward,!0),p,{position:o.value.position});l(h,y,!0),s.value=h}function f(h,p){const y=c2({},o.value,n.state,{forward:h,scroll:a5()});l(y.current,y,!0);const x=c2({},xi(s.value,h,null),{position:y.position+1},p);l(h,x,!1),s.value=h}return{location:s,state:o,push:f,replace:a}}function Zm(t){t=$m(t);const n=zm(t),e=jm(t,n.state,n.location,n.replace);function s(l,a=!0){a||e.pauseListeners(),history.go(l)}const o=c2({location:"",base:t,go:s,createHref:Vm.bind(null,t)},n,e);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function Jm(t){return typeof t=="string"||t&&typeof t=="object"}function Ao(t){return typeof t=="string"||typeof t=="symbol"}const Lo=Symbol("");var wi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wi||(wi={}));function b3(t,n){return c2(new Error,{type:t,[Lo]:!0},n)}function Bt(t,n){return t instanceof Error&&Lo in t&&(n==null||!!(t.type&n))}const Si="[^/]+?",Xm={sensitive:!1,strict:!1,start:!0,end:!0},Qm=/[.+*?^${}()[\]/\\]/g;function tv(t,n){const e=c2({},Xm,n),s=[];let o=e.start?"^":"";const l=[];for(const p of t){const y=p.length?[]:[90];e.strict&&!p.length&&(o+="/");for(let x=0;x<p.length;x++){const b=p[x];let C=40+(e.sensitive?.25:0);if(b.type===0)x||(o+="/"),o+=b.value.replace(Qm,"\\$&"),C+=40;else if(b.type===1){const{value:q,repeatable:W,optional:r0,regexp:i0}=b;l.push({name:q,repeatable:W,optional:r0});const t0=i0||Si;if(t0!==Si){C+=10;try{new RegExp(`(${t0})`)}catch(a0){throw new Error(`Invalid custom RegExp for param "${q}" (${t0}): `+a0.message)}}let u0=W?`((?:${t0})(?:/(?:${t0}))*)`:`(${t0})`;x||(u0=r0&&p.length<2?`(?:/${u0})`:"/"+u0),r0&&(u0+="?"),o+=u0,C+=20,r0&&(C+=-8),W&&(C+=-20),t0===".*"&&(C+=-50)}y.push(C)}s.push(y)}if(e.strict&&e.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}e.strict||(o+="/?"),e.end?o+="$":e.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const a=new RegExp(o,e.sensitive?"":"i");function f(p){const y=p.match(a),x={};if(!y)return null;for(let b=1;b<y.length;b++){const C=y[b]||"",q=l[b-1];x[q.name]=C&&q.repeatable?C.split("/"):C}return x}function h(p){let y="",x=!1;for(const b of t){(!x||!y.endsWith("/"))&&(y+="/"),x=!1;for(const C of b)if(C.type===0)y+=C.value;else if(C.type===1){const{value:q,repeatable:W,optional:r0}=C,i0=q in p?p[q]:"";if(ot(i0)&&!W)throw new Error(`Provided param "${q}" is an array but it is not repeatable (* or + modifiers)`);const t0=ot(i0)?i0.join("/"):i0;if(!t0)if(r0)b.length<2&&(y.endsWith("/")?y=y.slice(0,-1):x=!0);else throw new Error(`Missing required param "${q}"`);y+=t0}}return y||"/"}return{re:a,score:s,keys:l,parse:f,stringify:h}}function nv(t,n){let e=0;for(;e<t.length&&e<n.length;){const s=n[e]-t[e];if(s)return s;e++}return t.length<n.length?t.length===1&&t[0]===80?-1:1:t.length>n.length?n.length===1&&n[0]===80?1:-1:0}function Oo(t,n){let e=0;const s=t.score,o=n.score;for(;e<s.length&&e<o.length;){const l=nv(s[e],o[e]);if(l)return l;e++}if(Math.abs(o.length-s.length)===1){if(bi(s))return 1;if(bi(o))return-1}return o.length-s.length}function bi(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const rv={type:0,value:""},ev=/[a-zA-Z0-9_]/;function iv(t){if(!t)return[[]];if(t==="/")return[[rv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(C){throw new Error(`ERR (${e})/"${p}": ${C}`)}let e=0,s=e;const o=[];let l;function a(){l&&o.push(l),l=[]}let f=0,h,p="",y="";function x(){p&&(e===0?l.push({type:0,value:p}):e===1||e===2||e===3?(l.length>1&&(h==="*"||h==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:y,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):n("Invalid state to consume buffer"),p="")}function b(){p+=h}for(;f<t.length;){if(h=t[f++],h==="\\"&&e!==2){s=e,e=4;continue}switch(e){case 0:h==="/"?(p&&x(),a()):h===":"?(x(),e=1):b();break;case 4:b(),e=s;break;case 1:h==="("?e=2:ev.test(h)?b():(x(),e=0,h!=="*"&&h!=="?"&&h!=="+"&&f--);break;case 2:h===")"?y[y.length-1]=="\\"?y=y.slice(0,-1)+h:e=3:y+=h;break;case 3:x(),e=0,h!=="*"&&h!=="?"&&h!=="+"&&f--,y="";break;default:n("Unknown state");break}}return e===2&&n(`Unfinished custom RegExp for param "${p}"`),x(),a(),o}function sv(t,n,e){const s=tv(iv(t.path),e),o=c2(s,{record:t,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function ov(t,n){const e=[],s=new Map;n=Di({strict:!1,end:!0,sensitive:!1},n);function o(x){return s.get(x)}function l(x,b,C){const q=!C,W=ki(x);W.aliasOf=C&&C.record;const r0=Di(n,x),i0=[W];if("alias"in x){const a0=typeof x.alias=="string"?[x.alias]:x.alias;for(const h0 of a0)i0.push(ki(c2({},W,{components:C?C.record.components:W.components,path:h0,aliasOf:C?C.record:W})))}let t0,u0;for(const a0 of i0){const{path:h0}=a0;if(b&&h0[0]!=="/"){const C0=b.record.path,S0=C0[C0.length-1]==="/"?"":"/";a0.path=b.record.path+(h0&&S0+h0)}if(t0=sv(a0,b,r0),C?C.alias.push(t0):(u0=u0||t0,u0!==t0&&u0.alias.push(t0),q&&x.name&&!Ci(t0)&&a(x.name)),Eo(t0)&&h(t0),W.children){const C0=W.children;for(let S0=0;S0<C0.length;S0++)l(C0[S0],t0,C&&C.children[S0])}C=C||t0}return u0?()=>{a(u0)}:o4}function a(x){if(Ao(x)){const b=s.get(x);b&&(s.delete(x),e.splice(e.indexOf(b),1),b.children.forEach(a),b.alias.forEach(a))}else{const b=e.indexOf(x);b>-1&&(e.splice(b,1),x.record.name&&s.delete(x.record.name),x.children.forEach(a),x.alias.forEach(a))}}function f(){return e}function h(x){const b=av(x,e);e.splice(b,0,x),x.record.name&&!Ci(x)&&s.set(x.record.name,x)}function p(x,b){let C,q={},W,r0;if("name"in x&&x.name){if(C=s.get(x.name),!C)throw b3(1,{location:x});r0=C.record.name,q=c2(Mi(b.params,C.keys.filter(u0=>!u0.optional).concat(C.parent?C.parent.keys.filter(u0=>u0.optional):[]).map(u0=>u0.name)),x.params&&Mi(x.params,C.keys.map(u0=>u0.name))),W=C.stringify(q)}else if(x.path!=null)W=x.path,C=e.find(u0=>u0.re.test(W)),C&&(q=C.parse(W),r0=C.record.name);else{if(C=b.name?s.get(b.name):e.find(u0=>u0.re.test(b.path)),!C)throw b3(1,{location:x,currentLocation:b});r0=C.record.name,q=c2({},b.params,x.params),W=C.stringify(q)}const i0=[];let t0=C;for(;t0;)i0.unshift(t0.record),t0=t0.parent;return{name:r0,path:W,params:q,matched:i0,meta:lv(i0)}}t.forEach(x=>l(x));function y(){e.length=0,s.clear()}return{addRoute:l,resolve:p,removeRoute:a,clearRoutes:y,getRoutes:f,getRecordMatcher:o}}function Mi(t,n){const e={};for(const s of n)s in t&&(e[s]=t[s]);return e}function ki(t){const n={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:uv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function uv(t){const n={},e=t.props||!1;if("component"in t)n.default=e;else for(const s in t.components)n[s]=typeof e=="object"?e[s]:e;return n}function Ci(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lv(t){return t.reduce((n,e)=>c2(n,e.meta),{})}function Di(t,n){const e={};for(const s in t)e[s]=s in n?n[s]:t[s];return e}function av(t,n){let e=0,s=n.length;for(;e!==s;){const l=e+s>>1;Oo(t,n[l])<0?s=l:e=l+1}const o=cv(t);return o&&(s=n.lastIndexOf(o,s-1)),s}function cv(t){let n=t;for(;n=n.parent;)if(Eo(n)&&Oo(t,n)===0)return n}function Eo({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fv(t){const n={};if(t===""||t==="?")return n;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<s.length;++o){const l=s[o].replace(So," "),a=l.indexOf("="),f=g4(a<0?l:l.slice(0,a)),h=a<0?null:g4(l.slice(a+1));if(f in n){let p=n[f];ot(p)||(p=n[f]=[p]),p.push(h)}else n[f]=h}return n}function Ai(t){let n="";for(let e in t){const s=t[e];if(e=Om(e),s==null){s!==void 0&&(n+=(n.length?"&":"")+e);continue}(ot(s)?s.map(l=>l&&he(l)):[s&&he(s)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+e,l!=null&&(n+="="+l))})}return n}function hv(t){const n={};for(const e in t){const s=t[e];s!==void 0&&(n[e]=ot(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return n}const _v=Symbol(""),Li=Symbol(""),We=Symbol(""),No=Symbol(""),de=Symbol("");function q3(){let t=[];function n(s){return t.push(s),()=>{const o=t.indexOf(s);o>-1&&t.splice(o,1)}}function e(){t=[]}return{add:n,list:()=>t.slice(),reset:e}}function dn(t,n,e,s,o,l=a=>a()){const a=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((f,h)=>{const p=b=>{b===!1?h(b3(4,{from:e,to:n})):b instanceof Error?h(b):Jm(b)?h(b3(2,{from:n,to:b})):(a&&s.enterCallbacks[o]===a&&typeof b=="function"&&a.push(b),f())},y=l(()=>t.call(s&&s.instances[o],n,e,p));let x=Promise.resolve(y);t.length<3&&(x=x.then(p)),x.catch(b=>h(b))})}function q6(t,n,e,s,o=l=>l()){const l=[];for(const a of t)for(const f in a.components){let h=a.components[f];if(!(n!=="beforeRouteEnter"&&!a.instances[f]))if(xo(h)){const y=(h.__vccOpts||h)[n];y&&l.push(dn(y,e,s,a,f,o))}else{let p=h();l.push(()=>p.then(y=>{if(!y)throw new Error(`Couldn't resolve component "${f}" at "${a.path}"`);const x=Tm(y)?y.default:y;a.mods[f]=y,a.components[f]=x;const C=(x.__vccOpts||x)[n];return C&&dn(C,e,s,a,f,o)()}))}}return l}function Oi(t){const n=Ut(We),e=Ut(No),s=p2(()=>{const h=m2(t.to);return n.resolve(h)}),o=p2(()=>{const{matched:h}=s.value,{length:p}=h,y=h[p-1],x=e.matched;if(!y||!x.length)return-1;const b=x.findIndex(S3.bind(null,y));if(b>-1)return b;const C=Ei(h[p-2]);return p>1&&Ei(y)===C&&x[x.length-1].path!==C?x.findIndex(S3.bind(null,h[p-2])):b}),l=p2(()=>o.value>-1&&vv(e.params,s.value.params)),a=p2(()=>o.value>-1&&o.value===e.matched.length-1&&Co(e.params,s.value.params));function f(h={}){if(mv(h)){const p=n[m2(t.replace)?"replace":"push"](m2(t.to)).catch(o4);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:s,href:p2(()=>s.value.href),isActive:l,isExactActive:a,navigate:f}}function dv(t){return t.length===1?t[0]:t}const gv=b4({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oi,setup(t,{slots:n}){const e=e5(Oi(t)),{options:s}=Ut(We),o=p2(()=>({[Ni(t.activeClass,s.linkActiveClass,"router-link-active")]:e.isActive,[Ni(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const l=n.default&&dv(n.default(e));return t.custom?l:_n("a",{"aria-current":e.isExactActive?t.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:o.value},l)}}}),pv=gv;function mv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function vv(t,n){for(const e in n){const s=n[e],o=t[e];if(typeof s=="string"){if(s!==o)return!1}else if(!ot(o)||o.length!==s.length||s.some((l,a)=>l!==o[a]))return!1}return!0}function Ei(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ni=(t,n,e)=>t??n??e,yv=b4({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:e}){const s=Ut(de),o=p2(()=>t.route||s.value),l=Ut(Li,0),a=p2(()=>{let p=m2(l);const{matched:y}=o.value;let x;for(;(x=y[p])&&!x.components;)p++;return p}),f=p2(()=>o.value.matched[a.value]);Ar(Li,p2(()=>a.value+1)),Ar(_v,f),Ar(de,o);const h=Y0();return Lr(()=>[h.value,f.value,t.name],([p,y,x],[b,C,q])=>{y&&(y.instances[x]=p,C&&C!==y&&p&&p===b&&(y.leaveGuards.size||(y.leaveGuards=C.leaveGuards),y.updateGuards.size||(y.updateGuards=C.updateGuards))),p&&y&&(!C||!S3(y,C)||!b)&&(y.enterCallbacks[x]||[]).forEach(W=>W(p))},{flush:"post"}),()=>{const p=o.value,y=t.name,x=f.value,b=x&&x.components[y];if(!b)return Ri(e.default,{Component:b,route:p});const C=x.props[y],q=C?C===!0?p.params:typeof C=="function"?C(p):C:null,r0=_n(b,c2({},q,n,{onVnodeUnmounted:i0=>{i0.component.isUnmounted&&(x.instances[y]=null)},ref:h}));return Ri(e.default,{Component:r0,route:p})||r0}}});function Ri(t,n){if(!t)return null;const e=t(n);return e.length===1?e[0]:e}const Ro=yv;function Tv(t){const n=ov(t.routes,t),e=t.parseQuery||fv,s=t.stringifyQuery||Ai,o=t.history,l=q3(),a=q3(),f=q3(),h=Rg(an);let p=an;a3&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=W6.bind(null,I=>""+I),x=W6.bind(null,Nm),b=W6.bind(null,g4);function C(I,N){let M,E;return Ao(I)?(M=n.getRecordMatcher(I),E=N):E=I,n.addRoute(E,M)}function q(I){const N=n.getRecordMatcher(I);N&&n.removeRoute(N)}function W(){return n.getRoutes().map(I=>I.record)}function r0(I){return!!n.getRecordMatcher(I)}function i0(I,N){if(N=c2({},N||h.value),typeof I=="string"){const T=U6(e,I,N.path),A=n.resolve({path:T.path},N),Y=o.createHref(T.fullPath);return c2(T,A,{params:b(A.params),hash:g4(T.hash),redirectedFrom:void 0,href:Y})}let M;if(I.path!=null)M=c2({},I,{path:U6(e,I.path,N.path).path});else{const T=c2({},I.params);for(const A in T)T[A]==null&&delete T[A];M=c2({},I,{params:x(T)}),N.params=x(N.params)}const E=n.resolve(M,N),$=I.hash||"";E.params=y(b(E.params));const p0=Bm(s,c2({},I,{hash:Lm($),path:E.path})),m=o.createHref(p0);return c2({fullPath:p0,hash:$,query:s===Ai?hv(I.query):I.query||{}},E,{redirectedFrom:void 0,href:m})}function t0(I){return typeof I=="string"?U6(e,I,h.value.path):c2({},I)}function u0(I,N){if(p!==I)return b3(8,{from:N,to:I})}function a0(I){return S0(I)}function h0(I){return a0(c2(t0(I),{replace:!0}))}function C0(I){const N=I.matched[I.matched.length-1];if(N&&N.redirect){const{redirect:M}=N;let E=typeof M=="function"?M(I):M;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=t0(E):{path:E},E.params={}),c2({query:I.query,hash:I.hash,params:E.path!=null?{}:I.params},E)}}function S0(I,N){const M=p=i0(I),E=h.value,$=I.state,p0=I.force,m=I.replace===!0,T=C0(M);if(T)return S0(c2(t0(T),{state:typeof T=="object"?c2({},$,T.state):$,force:p0,replace:m}),N||M);const A=M;A.redirectedFrom=N;let Y;return!p0&&Im(s,E,M)&&(Y=b3(16,{to:A,from:E}),y2(E,E,!0,!1)),(Y?Promise.resolve(Y):l2(A,E)).catch(R=>Bt(R)?Bt(R,2)?R:S2(R):R0(R,A,E)).then(R=>{if(R){if(Bt(R,2))return S0(c2({replace:m},t0(R.to),{state:typeof R.to=="object"?c2({},$,R.to.state):$,force:p0}),N||A)}else R=P2(A,E,!0,m,$);return w2(A,E,R),R})}function J0(I,N){const M=u0(I,N);return M?Promise.reject(M):Promise.resolve()}function V0(I){const N=x1.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(I):I()}function l2(I,N){let M;const[E,$,p0]=xv(I,N);M=q6(E.reverse(),"beforeRouteLeave",I,N);for(const T of E)T.leaveGuards.forEach(A=>{M.push(dn(A,I,N))});const m=J0.bind(null,I,N);return M.push(m),B2(M).then(()=>{M=[];for(const T of l.list())M.push(dn(T,I,N));return M.push(m),B2(M)}).then(()=>{M=q6($,"beforeRouteUpdate",I,N);for(const T of $)T.updateGuards.forEach(A=>{M.push(dn(A,I,N))});return M.push(m),B2(M)}).then(()=>{M=[];for(const T of p0)if(T.beforeEnter)if(ot(T.beforeEnter))for(const A of T.beforeEnter)M.push(dn(A,I,N));else M.push(dn(T.beforeEnter,I,N));return M.push(m),B2(M)}).then(()=>(I.matched.forEach(T=>T.enterCallbacks={}),M=q6(p0,"beforeRouteEnter",I,N,V0),M.push(m),B2(M))).then(()=>{M=[];for(const T of a.list())M.push(dn(T,I,N));return M.push(m),B2(M)}).catch(T=>Bt(T,8)?T:Promise.reject(T))}function w2(I,N,M){f.list().forEach(E=>V0(()=>E(I,N,M)))}function P2(I,N,M,E,$){const p0=u0(I,N);if(p0)return p0;const m=N===an,T=a3?history.state:{};M&&(E||m?o.replace(I.fullPath,c2({scroll:m&&T&&T.scroll},$)):o.push(I.fullPath,$)),h.value=I,y2(I,N,M,m),S2()}let L2;function i1(){L2||(L2=o.listen((I,N,M)=>{if(!X2.listening)return;const E=i0(I),$=C0(E);if($){S0(c2($,{replace:!0,force:!0}),E).catch(o4);return}p=E;const p0=h.value;a3&&Um(Ti(p0.fullPath,M.delta),a5()),l2(E,p0).catch(m=>Bt(m,12)?m:Bt(m,2)?(S0(c2(t0(m.to),{force:!0}),E).then(T=>{Bt(T,20)&&!M.delta&&M.type===p4.pop&&o.go(-1,!1)}).catch(o4),Promise.reject()):(M.delta&&o.go(-M.delta,!1),R0(m,E,p0))).then(m=>{m=m||P2(E,p0,!1),m&&(M.delta&&!Bt(m,8)?o.go(-M.delta,!1):M.type===p4.pop&&Bt(m,20)&&o.go(-1,!1)),w2(E,p0,m)}).catch(o4)}))}let y1=q3(),n2=q3(),I0;function R0(I,N,M){S2(I);const E=n2.list();return E.length?E.forEach($=>$(I,N,M)):console.error(I),Promise.reject(I)}function s1(){return I0&&h.value!==an?Promise.resolve():new Promise((I,N)=>{y1.add([I,N])})}function S2(I){return I0||(I0=!I,i1(),y1.list().forEach(([N,M])=>I?M(I):N()),y1.reset()),I}function y2(I,N,M,E){const{scrollBehavior:$}=t;if(!a3||!$)return Promise.resolve();const p0=!M&&qm(Ti(I.fullPath,0))||(E||!M)&&history.state&&history.state.scroll||null;return Ie().then(()=>$(I,N,p0)).then(m=>m&&Wm(m)).catch(m=>R0(m,I,N))}const O2=I=>o.go(I);let T1;const x1=new Set,X2={currentRoute:h,listening:!0,addRoute:C,removeRoute:q,clearRoutes:n.clearRoutes,hasRoute:r0,getRoutes:W,resolve:i0,options:t,push:a0,replace:h0,go:O2,back:()=>O2(-1),forward:()=>O2(1),beforeEach:l.add,beforeResolve:a.add,afterEach:f.add,onError:n2.add,isReady:s1,install(I){const N=this;I.component("RouterLink",pv),I.component("RouterView",Ro),I.config.globalProperties.$router=N,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>m2(h)}),a3&&!T1&&h.value===an&&(T1=!0,a0(o.location).catch($=>{}));const M={};for(const $ in an)Object.defineProperty(M,$,{get:()=>h.value[$],enumerable:!0});I.provide(We,N),I.provide(No,Bs(M)),I.provide(de,h);const E=I.unmount;x1.add(I),I.unmount=function(){x1.delete(I),x1.size<1&&(p=an,L2&&L2(),L2=null,h.value=an,T1=!1,I0=!1),E()}}};function B2(I){return I.reduce((N,M)=>N.then(()=>V0(M)),Promise.resolve())}return X2}function xv(t,n){const e=[],s=[],o=[],l=Math.max(n.matched.length,t.matched.length);for(let a=0;a<l;a++){const f=n.matched[a];f&&(t.matched.find(p=>S3(p,f))?s.push(f):e.push(f));const h=t.matched[a];h&&(n.matched.find(p=>S3(p,h))||o.push(h))}return[e,s,o]}const wv=b4({__name:"App",setup(t){return(n,e)=>(o0(),f3(m2(Ro)))}});//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Po;function e0(){return Po.apply(null,arguments)}function Sv(t){Po=t}function ut(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function Gn(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function s2(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function Ue(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var n;for(n in t)if(s2(t,n))return!1;return!0}function C1(t){return t===void 0}function zt(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function k4(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function Bo(t,n){var e=[],s,o=t.length;for(s=0;s<o;++s)e.push(n(t[s],s));return e}function pn(t,n){for(var e in n)s2(n,e)&&(t[e]=n[e]);return s2(n,"toString")&&(t.toString=n.toString),s2(n,"valueOf")&&(t.valueOf=n.valueOf),t}function bt(t,n,e,s){return su(t,n,e,s,!0).utc()}function bv(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function W0(t){return t._pf==null&&(t._pf=bv()),t._pf}var ge;Array.prototype.some?ge=Array.prototype.some:ge=function(t){var n=Object(this),e=n.length>>>0,s;for(s=0;s<e;s++)if(s in n&&t.call(this,n[s],s,n))return!0;return!1};function qe(t){var n=null,e=!1,s=t._d&&!isNaN(t._d.getTime());if(s&&(n=W0(t),e=ge.call(n.parsedDateParts,function(o){return o!=null}),s=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&e),t._strict&&(s=s&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=s;else return s;return t._isValid}function c5(t){var n=bt(NaN);return t!=null?pn(W0(n),t):W0(n).userInvalidated=!0,n}var Pi=e0.momentProperties=[],K6=!1;function Ke(t,n){var e,s,o,l=Pi.length;if(C1(n._isAMomentObject)||(t._isAMomentObject=n._isAMomentObject),C1(n._i)||(t._i=n._i),C1(n._f)||(t._f=n._f),C1(n._l)||(t._l=n._l),C1(n._strict)||(t._strict=n._strict),C1(n._tzm)||(t._tzm=n._tzm),C1(n._isUTC)||(t._isUTC=n._isUTC),C1(n._offset)||(t._offset=n._offset),C1(n._pf)||(t._pf=W0(n)),C1(n._locale)||(t._locale=n._locale),l>0)for(e=0;e<l;e++)s=Pi[e],o=n[s],C1(o)||(t[s]=o);return t}function C4(t){Ke(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),K6===!1&&(K6=!0,e0.updateOffset(this),K6=!1)}function lt(t){return t instanceof C4||t!=null&&t._isAMomentObject!=null}function Io(t){e0.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+t)}function J1(t,n){var e=!0;return pn(function(){if(e0.deprecationHandler!=null&&e0.deprecationHandler(null,t),e){var s=[],o,l,a,f=arguments.length;for(l=0;l<f;l++){if(o="",typeof arguments[l]=="object"){o+=`
[`+l+"] ";for(a in arguments[0])s2(arguments[0],a)&&(o+=a+": "+arguments[0][a]+", ");o=o.slice(0,-2)}else o=arguments[l];s.push(o)}Io(t+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),e=!1}return n.apply(this,arguments)},n)}var Bi={};function Ho(t,n){e0.deprecationHandler!=null&&e0.deprecationHandler(t,n),Bi[t]||(Io(n),Bi[t]=!0)}e0.suppressDeprecationWarnings=!1;e0.deprecationHandler=null;function Mt(t){return typeof Function<"u"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function Mv(t){var n,e;for(e in t)s2(t,e)&&(n=t[e],Mt(n)?this[e]=n:this["_"+e]=n);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function pe(t,n){var e=pn({},t),s;for(s in n)s2(n,s)&&(Gn(t[s])&&Gn(n[s])?(e[s]={},pn(e[s],t[s]),pn(e[s],n[s])):n[s]!=null?e[s]=n[s]:delete e[s]);for(s in t)s2(t,s)&&!s2(n,s)&&Gn(t[s])&&(e[s]=pn({},e[s]));return e}function je(t){t!=null&&this.set(t)}var me;Object.keys?me=Object.keys:me=function(t){var n,e=[];for(n in t)s2(t,n)&&e.push(n);return e};var kv={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Cv(t,n,e){var s=this._calendar[t]||this._calendar.sameElse;return Mt(s)?s.call(n,e):s}function wt(t,n,e){var s=""+Math.abs(t),o=n-s.length,l=t>=0;return(l?e?"+":"":"-")+Math.pow(10,Math.max(0,o)).toString().substr(1)+s}var ze=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Sr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,j6={},v3={};function D0(t,n,e,s){var o=s;typeof s=="string"&&(o=function(){return this[s]()}),t&&(v3[t]=o),n&&(v3[n[0]]=function(){return wt(o.apply(this,arguments),n[1],n[2])}),e&&(v3[e]=function(){return this.localeData().ordinal(o.apply(this,arguments),t)})}function Dv(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function Av(t){var n=t.match(ze),e,s;for(e=0,s=n.length;e<s;e++)v3[n[e]]?n[e]=v3[n[e]]:n[e]=Dv(n[e]);return function(o){var l="",a;for(a=0;a<s;a++)l+=Mt(n[a])?n[a].call(o,t):n[a];return l}}function Rr(t,n){return t.isValid()?(n=Go(n,t.localeData()),j6[n]=j6[n]||Av(n),j6[n](t)):t.localeData().invalidDate()}function Go(t,n){var e=5;function s(o){return n.longDateFormat(o)||o}for(Sr.lastIndex=0;e>=0&&Sr.test(t);)t=t.replace(Sr,s),Sr.lastIndex=0,e-=1;return t}var Lv={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ov(t){var n=this._longDateFormat[t],e=this._longDateFormat[t.toUpperCase()];return n||!e?n:(this._longDateFormat[t]=e.match(ze).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[t])}var Ev="Invalid date";function Nv(){return this._invalidDate}var Rv="%d",Pv=/\d{1,2}/;function Bv(t){return this._ordinal.replace("%d",t)}var Iv={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Hv(t,n,e,s){var o=this._relativeTime[e];return Mt(o)?o(t,n,e,s):o.replace(/%d/i,t)}function Gv(t,n){var e=this._relativeTime[t>0?"future":"past"];return Mt(e)?e(n):e.replace(/%s/i,n)}var Ii={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function X1(t){return typeof t=="string"?Ii[t]||Ii[t.toLowerCase()]:void 0}function Ze(t){var n={},e,s;for(s in t)s2(t,s)&&(e=X1(s),e&&(n[e]=t[s]));return n}var $v={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Yv(t){var n=[],e;for(e in t)s2(t,e)&&n.push({unit:e,priority:$v[e]});return n.sort(function(s,o){return s.priority-o.priority}),n}var $o=/\d/,G1=/\d\d/,Yo=/\d{3}/,Je=/\d{4}/,f5=/[+-]?\d{6}/,A2=/\d\d?/,Vo=/\d\d\d\d?/,Fo=/\d\d\d\d\d\d?/,h5=/\d{1,3}/,Xe=/\d{1,4}/,_5=/[+-]?\d{1,6}/,k3=/\d+/,d5=/[+-]?\d+/,Vv=/Z|[+-]\d\d:?\d\d/gi,g5=/Z|[+-]\d\d(?::?\d\d)?/gi,Fv=/[+-]?\d+(\.\d{1,3})?/,D4=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,C3=/^[1-9]\d?/,Qe=/^([1-9]\d|\d)/,qr;qr={};function y0(t,n,e){qr[t]=Mt(n)?n:function(s,o){return s&&e?e:n}}function Wv(t,n){return s2(qr,t)?qr[t](n._strict,n._locale):new RegExp(Uv(t))}function Uv(t){return Kt(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(n,e,s,o,l){return e||s||o||l}))}function Kt(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function j1(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function Q0(t){var n=+t,e=0;return n!==0&&isFinite(n)&&(e=j1(n)),e}var ve={};function v2(t,n){var e,s=n,o;for(typeof t=="string"&&(t=[t]),zt(n)&&(s=function(l,a){a[n]=Q0(l)}),o=t.length,e=0;e<o;e++)ve[t[e]]=s}function A4(t,n){v2(t,function(e,s,o,l){o._w=o._w||{},n(e,o._w,o,l)})}function qv(t,n,e){n!=null&&s2(ve,t)&&ve[t](n,e._a,e,t)}function p5(t){return t%4===0&&t%100!==0||t%400===0}var h1=0,Ft=1,vt=2,j2=3,it=4,Wt=5,In=6,Kv=7,jv=8;D0("Y",0,0,function(){var t=this.year();return t<=9999?wt(t,4):"+"+t});D0(0,["YY",2],0,function(){return this.year()%100});D0(0,["YYYY",4],0,"year");D0(0,["YYYYY",5],0,"year");D0(0,["YYYYYY",6,!0],0,"year");y0("Y",d5);y0("YY",A2,G1);y0("YYYY",Xe,Je);y0("YYYYY",_5,f5);y0("YYYYYY",_5,f5);v2(["YYYYY","YYYYYY"],h1);v2("YYYY",function(t,n){n[h1]=t.length===2?e0.parseTwoDigitYear(t):Q0(t)});v2("YY",function(t,n){n[h1]=e0.parseTwoDigitYear(t)});v2("Y",function(t,n){n[h1]=parseInt(t,10)});function l4(t){return p5(t)?366:365}e0.parseTwoDigitYear=function(t){return Q0(t)+(Q0(t)>68?1900:2e3)};var Wo=D3("FullYear",!0);function zv(){return p5(this.year())}function D3(t,n){return function(e){return e!=null?(Uo(this,t,e),e0.updateOffset(this,n),this):m4(this,t)}}function m4(t,n){if(!t.isValid())return NaN;var e=t._d,s=t._isUTC;switch(n){case"Milliseconds":return s?e.getUTCMilliseconds():e.getMilliseconds();case"Seconds":return s?e.getUTCSeconds():e.getSeconds();case"Minutes":return s?e.getUTCMinutes():e.getMinutes();case"Hours":return s?e.getUTCHours():e.getHours();case"Date":return s?e.getUTCDate():e.getDate();case"Day":return s?e.getUTCDay():e.getDay();case"Month":return s?e.getUTCMonth():e.getMonth();case"FullYear":return s?e.getUTCFullYear():e.getFullYear();default:return NaN}}function Uo(t,n,e){var s,o,l,a,f;if(!(!t.isValid()||isNaN(e))){switch(s=t._d,o=t._isUTC,n){case"Milliseconds":return void(o?s.setUTCMilliseconds(e):s.setMilliseconds(e));case"Seconds":return void(o?s.setUTCSeconds(e):s.setSeconds(e));case"Minutes":return void(o?s.setUTCMinutes(e):s.setMinutes(e));case"Hours":return void(o?s.setUTCHours(e):s.setHours(e));case"Date":return void(o?s.setUTCDate(e):s.setDate(e));case"FullYear":break;default:return}l=e,a=t.month(),f=t.date(),f=f===29&&a===1&&!p5(l)?28:f,o?s.setUTCFullYear(l,a,f):s.setFullYear(l,a,f)}}function Zv(t){return t=X1(t),Mt(this[t])?this[t]():this}function Jv(t,n){if(typeof t=="object"){t=Ze(t);var e=Yv(t),s,o=e.length;for(s=0;s<o;s++)this[e[s].unit](t[e[s].unit])}else if(t=X1(t),Mt(this[t]))return this[t](n);return this}function Xv(t,n){return(t%n+n)%n}var F2;Array.prototype.indexOf?F2=Array.prototype.indexOf:F2=function(t){var n;for(n=0;n<this.length;++n)if(this[n]===t)return n;return-1};function t8(t,n){if(isNaN(t)||isNaN(n))return NaN;var e=Xv(n,12);return t+=(n-e)/12,e===1?p5(t)?29:28:31-e%7%2}D0("M",["MM",2],"Mo",function(){return this.month()+1});D0("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});D0("MMMM",0,0,function(t){return this.localeData().months(this,t)});y0("M",A2,C3);y0("MM",A2,G1);y0("MMM",function(t,n){return n.monthsShortRegex(t)});y0("MMMM",function(t,n){return n.monthsRegex(t)});v2(["M","MM"],function(t,n){n[Ft]=Q0(t)-1});v2(["MMM","MMMM"],function(t,n,e,s){var o=e._locale.monthsParse(t,s,e._strict);o!=null?n[Ft]=o:W0(e).invalidMonth=t});var Qv="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qo="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ko=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ty=D4,ny=D4;function ry(t,n){return t?ut(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||Ko).test(n)?"format":"standalone"][t.month()]:ut(this._months)?this._months:this._months.standalone}function ey(t,n){return t?ut(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Ko.test(n)?"format":"standalone"][t.month()]:ut(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function iy(t,n,e){var s,o,l,a=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)l=bt([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(l,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(l,"").toLocaleLowerCase();return e?n==="MMM"?(o=F2.call(this._shortMonthsParse,a),o!==-1?o:null):(o=F2.call(this._longMonthsParse,a),o!==-1?o:null):n==="MMM"?(o=F2.call(this._shortMonthsParse,a),o!==-1?o:(o=F2.call(this._longMonthsParse,a),o!==-1?o:null)):(o=F2.call(this._longMonthsParse,a),o!==-1?o:(o=F2.call(this._shortMonthsParse,a),o!==-1?o:null))}function sy(t,n,e){var s,o,l;if(this._monthsParseExact)return iy.call(this,t,n,e);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(o=bt([2e3,s]),e&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(o,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(o,"").replace(".","")+"$","i")),!e&&!this._monthsParse[s]&&(l="^"+this.months(o,"")+"|^"+this.monthsShort(o,""),this._monthsParse[s]=new RegExp(l.replace(".",""),"i")),e&&n==="MMMM"&&this._longMonthsParse[s].test(t))return s;if(e&&n==="MMM"&&this._shortMonthsParse[s].test(t))return s;if(!e&&this._monthsParse[s].test(t))return s}}function jo(t,n){if(!t.isValid())return t;if(typeof n=="string"){if(/^\d+$/.test(n))n=Q0(n);else if(n=t.localeData().monthsParse(n),!zt(n))return t}var e=n,s=t.date();return s=s<29?s:Math.min(s,t8(t.year(),e)),t._isUTC?t._d.setUTCMonth(e,s):t._d.setMonth(e,s),t}function zo(t){return t!=null?(jo(this,t),e0.updateOffset(this,!0),this):m4(this,"Month")}function oy(){return t8(this.year(),this.month())}function uy(t){return this._monthsParseExact?(s2(this,"_monthsRegex")||Zo.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(s2(this,"_monthsShortRegex")||(this._monthsShortRegex=ty),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function ly(t){return this._monthsParseExact?(s2(this,"_monthsRegex")||Zo.call(this),t?this._monthsStrictRegex:this._monthsRegex):(s2(this,"_monthsRegex")||(this._monthsRegex=ny),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function Zo(){function t(h,p){return p.length-h.length}var n=[],e=[],s=[],o,l,a,f;for(o=0;o<12;o++)l=bt([2e3,o]),a=Kt(this.monthsShort(l,"")),f=Kt(this.months(l,"")),n.push(a),e.push(f),s.push(f),s.push(a);n.sort(t),e.sort(t),s.sort(t),this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function ay(t,n,e,s,o,l,a){var f;return t<100&&t>=0?(f=new Date(t+400,n,e,s,o,l,a),isFinite(f.getFullYear())&&f.setFullYear(t)):f=new Date(t,n,e,s,o,l,a),f}function v4(t){var n,e;return t<100&&t>=0?(e=Array.prototype.slice.call(arguments),e[0]=t+400,n=new Date(Date.UTC.apply(null,e)),isFinite(n.getUTCFullYear())&&n.setUTCFullYear(t)):n=new Date(Date.UTC.apply(null,arguments)),n}function Kr(t,n,e){var s=7+n-e,o=(7+v4(t,0,s).getUTCDay()-n)%7;return-o+s-1}function Jo(t,n,e,s,o){var l=(7+e-s)%7,a=Kr(t,s,o),f=1+7*(n-1)+l+a,h,p;return f<=0?(h=t-1,p=l4(h)+f):f>l4(t)?(h=t+1,p=f-l4(t)):(h=t,p=f),{year:h,dayOfYear:p}}function y4(t,n,e){var s=Kr(t.year(),n,e),o=Math.floor((t.dayOfYear()-s-1)/7)+1,l,a;return o<1?(a=t.year()-1,l=o+jt(a,n,e)):o>jt(t.year(),n,e)?(l=o-jt(t.year(),n,e),a=t.year()+1):(a=t.year(),l=o),{week:l,year:a}}function jt(t,n,e){var s=Kr(t,n,e),o=Kr(t+1,n,e);return(l4(t)-s+o)/7}D0("w",["ww",2],"wo","week");D0("W",["WW",2],"Wo","isoWeek");y0("w",A2,C3);y0("ww",A2,G1);y0("W",A2,C3);y0("WW",A2,G1);A4(["w","ww","W","WW"],function(t,n,e,s){n[s.substr(0,1)]=Q0(t)});function cy(t){return y4(t,this._week.dow,this._week.doy).week}var fy={dow:0,doy:6};function hy(){return this._week.dow}function _y(){return this._week.doy}function dy(t){var n=this.localeData().week(this);return t==null?n:this.add((t-n)*7,"d")}function gy(t){var n=y4(this,1,4).week;return t==null?n:this.add((t-n)*7,"d")}D0("d",0,"do","day");D0("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});D0("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});D0("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});D0("e",0,0,"weekday");D0("E",0,0,"isoWeekday");y0("d",A2);y0("e",A2);y0("E",A2);y0("dd",function(t,n){return n.weekdaysMinRegex(t)});y0("ddd",function(t,n){return n.weekdaysShortRegex(t)});y0("dddd",function(t,n){return n.weekdaysRegex(t)});A4(["dd","ddd","dddd"],function(t,n,e,s){var o=e._locale.weekdaysParse(t,s,e._strict);o!=null?n.d=o:W0(e).invalidWeekday=t});A4(["d","e","E"],function(t,n,e,s){n[s]=Q0(t)});function py(t,n){return typeof t!="string"?t:isNaN(t)?(t=n.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function my(t,n){return typeof t=="string"?n.weekdaysParse(t)%7||7:isNaN(t)?null:t}function n8(t,n){return t.slice(n,7).concat(t.slice(0,n))}var vy="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Xo="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),yy="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ty=D4,xy=D4,wy=D4;function Sy(t,n){var e=ut(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(n)?"format":"standalone"];return t===!0?n8(e,this._week.dow):t?e[t.day()]:e}function by(t){return t===!0?n8(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function My(t){return t===!0?n8(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function ky(t,n,e){var s,o,l,a=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)l=bt([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(l,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(l,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(l,"").toLocaleLowerCase();return e?n==="dddd"?(o=F2.call(this._weekdaysParse,a),o!==-1?o:null):n==="ddd"?(o=F2.call(this._shortWeekdaysParse,a),o!==-1?o:null):(o=F2.call(this._minWeekdaysParse,a),o!==-1?o:null):n==="dddd"?(o=F2.call(this._weekdaysParse,a),o!==-1||(o=F2.call(this._shortWeekdaysParse,a),o!==-1)?o:(o=F2.call(this._minWeekdaysParse,a),o!==-1?o:null)):n==="ddd"?(o=F2.call(this._shortWeekdaysParse,a),o!==-1||(o=F2.call(this._weekdaysParse,a),o!==-1)?o:(o=F2.call(this._minWeekdaysParse,a),o!==-1?o:null)):(o=F2.call(this._minWeekdaysParse,a),o!==-1||(o=F2.call(this._weekdaysParse,a),o!==-1)?o:(o=F2.call(this._shortWeekdaysParse,a),o!==-1?o:null))}function Cy(t,n,e){var s,o,l;if(this._weekdaysParseExact)return ky.call(this,t,n,e);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(o=bt([2e3,1]).day(s),e&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(o,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(o,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(o,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(l="^"+this.weekdays(o,"")+"|^"+this.weekdaysShort(o,"")+"|^"+this.weekdaysMin(o,""),this._weekdaysParse[s]=new RegExp(l.replace(".",""),"i")),e&&n==="dddd"&&this._fullWeekdaysParse[s].test(t))return s;if(e&&n==="ddd"&&this._shortWeekdaysParse[s].test(t))return s;if(e&&n==="dd"&&this._minWeekdaysParse[s].test(t))return s;if(!e&&this._weekdaysParse[s].test(t))return s}}function Dy(t){if(!this.isValid())return t!=null?this:NaN;var n=m4(this,"Day");return t!=null?(t=py(t,this.localeData()),this.add(t-n,"d")):n}function Ay(t){if(!this.isValid())return t!=null?this:NaN;var n=(this.day()+7-this.localeData()._week.dow)%7;return t==null?n:this.add(t-n,"d")}function Ly(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var n=my(t,this.localeData());return this.day(this.day()%7?n:n-7)}else return this.day()||7}function Oy(t){return this._weekdaysParseExact?(s2(this,"_weekdaysRegex")||r8.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(s2(this,"_weekdaysRegex")||(this._weekdaysRegex=Ty),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ey(t){return this._weekdaysParseExact?(s2(this,"_weekdaysRegex")||r8.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(s2(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=xy),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ny(t){return this._weekdaysParseExact?(s2(this,"_weekdaysRegex")||r8.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(s2(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=wy),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function r8(){function t(y,x){return x.length-y.length}var n=[],e=[],s=[],o=[],l,a,f,h,p;for(l=0;l<7;l++)a=bt([2e3,1]).day(l),f=Kt(this.weekdaysMin(a,"")),h=Kt(this.weekdaysShort(a,"")),p=Kt(this.weekdays(a,"")),n.push(f),e.push(h),s.push(p),o.push(f),o.push(h),o.push(p);n.sort(t),e.sort(t),s.sort(t),o.sort(t),this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function e8(){return this.hours()%12||12}function Ry(){return this.hours()||24}D0("H",["HH",2],0,"hour");D0("h",["hh",2],0,e8);D0("k",["kk",2],0,Ry);D0("hmm",0,0,function(){return""+e8.apply(this)+wt(this.minutes(),2)});D0("hmmss",0,0,function(){return""+e8.apply(this)+wt(this.minutes(),2)+wt(this.seconds(),2)});D0("Hmm",0,0,function(){return""+this.hours()+wt(this.minutes(),2)});D0("Hmmss",0,0,function(){return""+this.hours()+wt(this.minutes(),2)+wt(this.seconds(),2)});function Qo(t,n){D0(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),n)})}Qo("a",!0);Qo("A",!1);function tu(t,n){return n._meridiemParse}y0("a",tu);y0("A",tu);y0("H",A2,Qe);y0("h",A2,C3);y0("k",A2,C3);y0("HH",A2,G1);y0("hh",A2,G1);y0("kk",A2,G1);y0("hmm",Vo);y0("hmmss",Fo);y0("Hmm",Vo);y0("Hmmss",Fo);v2(["H","HH"],j2);v2(["k","kk"],function(t,n,e){var s=Q0(t);n[j2]=s===24?0:s});v2(["a","A"],function(t,n,e){e._isPm=e._locale.isPM(t),e._meridiem=t});v2(["h","hh"],function(t,n,e){n[j2]=Q0(t),W0(e).bigHour=!0});v2("hmm",function(t,n,e){var s=t.length-2;n[j2]=Q0(t.substr(0,s)),n[it]=Q0(t.substr(s)),W0(e).bigHour=!0});v2("hmmss",function(t,n,e){var s=t.length-4,o=t.length-2;n[j2]=Q0(t.substr(0,s)),n[it]=Q0(t.substr(s,2)),n[Wt]=Q0(t.substr(o)),W0(e).bigHour=!0});v2("Hmm",function(t,n,e){var s=t.length-2;n[j2]=Q0(t.substr(0,s)),n[it]=Q0(t.substr(s))});v2("Hmmss",function(t,n,e){var s=t.length-4,o=t.length-2;n[j2]=Q0(t.substr(0,s)),n[it]=Q0(t.substr(s,2)),n[Wt]=Q0(t.substr(o))});function Py(t){return(t+"").toLowerCase().charAt(0)==="p"}var By=/[ap]\.?m?\.?/i,Iy=D3("Hours",!0);function Hy(t,n,e){return t>11?e?"pm":"PM":e?"am":"AM"}var nu={calendar:kv,longDateFormat:Lv,invalidDate:Ev,ordinal:Rv,dayOfMonthOrdinalParse:Pv,relativeTime:Iv,months:Qv,monthsShort:qo,week:fy,weekdays:vy,weekdaysMin:yy,weekdaysShort:Xo,meridiemParse:By},R2={},K3={},T4;function Gy(t,n){var e,s=Math.min(t.length,n.length);for(e=0;e<s;e+=1)if(t[e]!==n[e])return e;return s}function Hi(t){return t&&t.toLowerCase().replace("_","-")}function $y(t){for(var n=0,e,s,o,l;n<t.length;){for(l=Hi(t[n]).split("-"),e=l.length,s=Hi(t[n+1]),s=s?s.split("-"):null;e>0;){if(o=m5(l.slice(0,e).join("-")),o)return o;if(s&&s.length>=e&&Gy(l,s)>=e-1)break;e--}n++}return T4}function Yy(t){return!!(t&&t.match("^[^/\\\\]*$"))}function m5(t){var n=null,e;if(R2[t]===void 0&&typeof Ir<"u"&&Ir&&Ir.exports&&Yy(t))try{n=T4._abbr,e=require,e("./locale/"+t),yn(n)}catch{R2[t]=null}return R2[t]}function yn(t,n){var e;return t&&(C1(n)?e=Jt(t):e=i8(t,n),e?T4=e:typeof console<"u"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),T4._abbr}function i8(t,n){if(n!==null){var e,s=nu;if(n.abbr=t,R2[t]!=null)Ho("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=R2[t]._config;else if(n.parentLocale!=null)if(R2[n.parentLocale]!=null)s=R2[n.parentLocale]._config;else if(e=m5(n.parentLocale),e!=null)s=e._config;else return K3[n.parentLocale]||(K3[n.parentLocale]=[]),K3[n.parentLocale].push({name:t,config:n}),null;return R2[t]=new je(pe(s,n)),K3[t]&&K3[t].forEach(function(o){i8(o.name,o.config)}),yn(t),R2[t]}else return delete R2[t],null}function Vy(t,n){if(n!=null){var e,s,o=nu;R2[t]!=null&&R2[t].parentLocale!=null?R2[t].set(pe(R2[t]._config,n)):(s=m5(t),s!=null&&(o=s._config),n=pe(o,n),s==null&&(n.abbr=t),e=new je(n),e.parentLocale=R2[t],R2[t]=e),yn(t)}else R2[t]!=null&&(R2[t].parentLocale!=null?(R2[t]=R2[t].parentLocale,t===yn()&&yn(t)):R2[t]!=null&&delete R2[t]);return R2[t]}function Jt(t){var n;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return T4;if(!ut(t)){if(n=m5(t),n)return n;t=[t]}return $y(t)}function Fy(){return me(R2)}function s8(t){var n,e=t._a;return e&&W0(t).overflow===-2&&(n=e[Ft]<0||e[Ft]>11?Ft:e[vt]<1||e[vt]>t8(e[h1],e[Ft])?vt:e[j2]<0||e[j2]>24||e[j2]===24&&(e[it]!==0||e[Wt]!==0||e[In]!==0)?j2:e[it]<0||e[it]>59?it:e[Wt]<0||e[Wt]>59?Wt:e[In]<0||e[In]>999?In:-1,W0(t)._overflowDayOfYear&&(n<h1||n>vt)&&(n=vt),W0(t)._overflowWeeks&&n===-1&&(n=Kv),W0(t)._overflowWeekday&&n===-1&&(n=jv),W0(t).overflow=n),t}var Wy=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Uy=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qy=/Z|[+-]\d\d(?::?\d\d)?/,br=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],z6=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ky=/^\/?Date\((-?\d+)/i,jy=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,zy={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ru(t){var n,e,s=t._i,o=Wy.exec(s)||Uy.exec(s),l,a,f,h,p=br.length,y=z6.length;if(o){for(W0(t).iso=!0,n=0,e=p;n<e;n++)if(br[n][1].exec(o[1])){a=br[n][0],l=br[n][2]!==!1;break}if(a==null){t._isValid=!1;return}if(o[3]){for(n=0,e=y;n<e;n++)if(z6[n][1].exec(o[3])){f=(o[2]||" ")+z6[n][0];break}if(f==null){t._isValid=!1;return}}if(!l&&f!=null){t._isValid=!1;return}if(o[4])if(qy.exec(o[4]))h="Z";else{t._isValid=!1;return}t._f=a+(f||"")+(h||""),u8(t)}else t._isValid=!1}function Zy(t,n,e,s,o,l){var a=[Jy(t),qo.indexOf(n),parseInt(e,10),parseInt(s,10),parseInt(o,10)];return l&&a.push(parseInt(l,10)),a}function Jy(t){var n=parseInt(t,10);return n<=49?2e3+n:n<=999?1900+n:n}function Xy(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Qy(t,n,e){if(t){var s=Xo.indexOf(t),o=new Date(n[0],n[1],n[2]).getDay();if(s!==o)return W0(e).weekdayMismatch=!0,e._isValid=!1,!1}return!0}function tT(t,n,e){if(t)return zy[t];if(n)return 0;var s=parseInt(e,10),o=s%100,l=(s-o)/100;return l*60+o}function eu(t){var n=jy.exec(Xy(t._i)),e;if(n){if(e=Zy(n[4],n[3],n[2],n[5],n[6],n[7]),!Qy(n[1],e,t))return;t._a=e,t._tzm=tT(n[8],n[9],n[10]),t._d=v4.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),W0(t).rfc2822=!0}else t._isValid=!1}function nT(t){var n=Ky.exec(t._i);if(n!==null){t._d=new Date(+n[1]);return}if(ru(t),t._isValid===!1)delete t._isValid;else return;if(eu(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:e0.createFromInputFallback(t)}e0.createFromInputFallback=J1("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function c3(t,n,e){return t??n??e}function rT(t){var n=new Date(e0.now());return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function o8(t){var n,e,s=[],o,l,a;if(!t._d){for(o=rT(t),t._w&&t._a[vt]==null&&t._a[Ft]==null&&eT(t),t._dayOfYear!=null&&(a=c3(t._a[h1],o[h1]),(t._dayOfYear>l4(a)||t._dayOfYear===0)&&(W0(t)._overflowDayOfYear=!0),e=v4(a,0,t._dayOfYear),t._a[Ft]=e.getUTCMonth(),t._a[vt]=e.getUTCDate()),n=0;n<3&&t._a[n]==null;++n)t._a[n]=s[n]=o[n];for(;n<7;n++)t._a[n]=s[n]=t._a[n]==null?n===2?1:0:t._a[n];t._a[j2]===24&&t._a[it]===0&&t._a[Wt]===0&&t._a[In]===0&&(t._nextDay=!0,t._a[j2]=0),t._d=(t._useUTC?v4:ay).apply(null,s),l=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[j2]=24),t._w&&typeof t._w.d<"u"&&t._w.d!==l&&(W0(t).weekdayMismatch=!0)}}function eT(t){var n,e,s,o,l,a,f,h,p;n=t._w,n.GG!=null||n.W!=null||n.E!=null?(l=1,a=4,e=c3(n.GG,t._a[h1],y4(D2(),1,4).year),s=c3(n.W,1),o=c3(n.E,1),(o<1||o>7)&&(h=!0)):(l=t._locale._week.dow,a=t._locale._week.doy,p=y4(D2(),l,a),e=c3(n.gg,t._a[h1],p.year),s=c3(n.w,p.week),n.d!=null?(o=n.d,(o<0||o>6)&&(h=!0)):n.e!=null?(o=n.e+l,(n.e<0||n.e>6)&&(h=!0)):o=l),s<1||s>jt(e,l,a)?W0(t)._overflowWeeks=!0:h!=null?W0(t)._overflowWeekday=!0:(f=Jo(e,s,o,l,a),t._a[h1]=f.year,t._dayOfYear=f.dayOfYear)}e0.ISO_8601=function(){};e0.RFC_2822=function(){};function u8(t){if(t._f===e0.ISO_8601){ru(t);return}if(t._f===e0.RFC_2822){eu(t);return}t._a=[],W0(t).empty=!0;var n=""+t._i,e,s,o,l,a,f=n.length,h=0,p,y;for(o=Go(t._f,t._locale).match(ze)||[],y=o.length,e=0;e<y;e++)l=o[e],s=(n.match(Wv(l,t))||[])[0],s&&(a=n.substr(0,n.indexOf(s)),a.length>0&&W0(t).unusedInput.push(a),n=n.slice(n.indexOf(s)+s.length),h+=s.length),v3[l]?(s?W0(t).empty=!1:W0(t).unusedTokens.push(l),qv(l,s,t)):t._strict&&!s&&W0(t).unusedTokens.push(l);W0(t).charsLeftOver=f-h,n.length>0&&W0(t).unusedInput.push(n),t._a[j2]<=12&&W0(t).bigHour===!0&&t._a[j2]>0&&(W0(t).bigHour=void 0),W0(t).parsedDateParts=t._a.slice(0),W0(t).meridiem=t._meridiem,t._a[j2]=iT(t._locale,t._a[j2],t._meridiem),p=W0(t).era,p!==null&&(t._a[h1]=t._locale.erasConvertYear(p,t._a[h1])),o8(t),s8(t)}function iT(t,n,e){var s;return e==null?n:t.meridiemHour!=null?t.meridiemHour(n,e):(t.isPM!=null&&(s=t.isPM(e),s&&n<12&&(n+=12),!s&&n===12&&(n=0)),n)}function sT(t){var n,e,s,o,l,a,f=!1,h=t._f.length;if(h===0){W0(t).invalidFormat=!0,t._d=new Date(NaN);return}for(o=0;o<h;o++)l=0,a=!1,n=Ke({},t),t._useUTC!=null&&(n._useUTC=t._useUTC),n._f=t._f[o],u8(n),qe(n)&&(a=!0),l+=W0(n).charsLeftOver,l+=W0(n).unusedTokens.length*10,W0(n).score=l,f?l<s&&(s=l,e=n):(s==null||l<s||a)&&(s=l,e=n,a&&(f=!0));pn(t,e||n)}function oT(t){if(!t._d){var n=Ze(t._i),e=n.day===void 0?n.date:n.day;t._a=Bo([n.year,n.month,e,n.hour,n.minute,n.second,n.millisecond],function(s){return s&&parseInt(s,10)}),o8(t)}}function uT(t){var n=new C4(s8(iu(t)));return n._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function iu(t){var n=t._i,e=t._f;return t._locale=t._locale||Jt(t._l),n===null||e===void 0&&n===""?c5({nullInput:!0}):(typeof n=="string"&&(t._i=n=t._locale.preparse(n)),lt(n)?new C4(s8(n)):(k4(n)?t._d=n:ut(e)?sT(t):e?u8(t):lT(t),qe(t)||(t._d=null),t))}function lT(t){var n=t._i;C1(n)?t._d=new Date(e0.now()):k4(n)?t._d=new Date(n.valueOf()):typeof n=="string"?nT(t):ut(n)?(t._a=Bo(n.slice(0),function(e){return parseInt(e,10)}),o8(t)):Gn(n)?oT(t):zt(n)?t._d=new Date(n):e0.createFromInputFallback(t)}function su(t,n,e,s,o){var l={};return(n===!0||n===!1)&&(s=n,n=void 0),(e===!0||e===!1)&&(s=e,e=void 0),(Gn(t)&&Ue(t)||ut(t)&&t.length===0)&&(t=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=o,l._l=e,l._i=t,l._f=n,l._strict=s,uT(l)}function D2(t,n,e,s){return su(t,n,e,s,!1)}var aT=J1("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=D2.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:c5()}),cT=J1("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=D2.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:c5()});function ou(t,n){var e,s;if(n.length===1&&ut(n[0])&&(n=n[0]),!n.length)return D2();for(e=n[0],s=1;s<n.length;++s)(!n[s].isValid()||n[s][t](e))&&(e=n[s]);return e}function fT(){var t=[].slice.call(arguments,0);return ou("isBefore",t)}function hT(){var t=[].slice.call(arguments,0);return ou("isAfter",t)}var _T=function(){return Date.now?Date.now():+new Date},j3=["year","quarter","month","week","day","hour","minute","second","millisecond"];function dT(t){var n,e=!1,s,o=j3.length;for(n in t)if(s2(t,n)&&!(F2.call(j3,n)!==-1&&(t[n]==null||!isNaN(t[n]))))return!1;for(s=0;s<o;++s)if(t[j3[s]]){if(e)return!1;parseFloat(t[j3[s]])!==Q0(t[j3[s]])&&(e=!0)}return!0}function gT(){return this._isValid}function pT(){return at(NaN)}function v5(t){var n=Ze(t),e=n.year||0,s=n.quarter||0,o=n.month||0,l=n.week||n.isoWeek||0,a=n.day||0,f=n.hour||0,h=n.minute||0,p=n.second||0,y=n.millisecond||0;this._isValid=dT(n),this._milliseconds=+y+p*1e3+h*6e4+f*1e3*60*60,this._days=+a+l*7,this._months=+o+s*3+e*12,this._data={},this._locale=Jt(),this._bubble()}function Pr(t){return t instanceof v5}function ye(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function mT(t,n,e){var s=Math.min(t.length,n.length),o=Math.abs(t.length-n.length),l=0,a;for(a=0;a<s;a++)Q0(t[a])!==Q0(n[a])&&l++;return l+o}function uu(t,n){D0(t,0,0,function(){var e=this.utcOffset(),s="+";return e<0&&(e=-e,s="-"),s+wt(~~(e/60),2)+n+wt(~~e%60,2)})}uu("Z",":");uu("ZZ","");y0("Z",g5);y0("ZZ",g5);v2(["Z","ZZ"],function(t,n,e){e._useUTC=!0,e._tzm=l8(g5,t)});var vT=/([\+\-]|\d\d)/gi;function l8(t,n){var e=(n||"").match(t),s,o,l;return e===null?null:(s=e[e.length-1]||[],o=(s+"").match(vT)||["-",0,0],l=+(o[1]*60)+Q0(o[2]),l===0?0:o[0]==="+"?l:-l)}function a8(t,n){var e,s;return n._isUTC?(e=n.clone(),s=(lt(t)||k4(t)?t.valueOf():D2(t).valueOf())-e.valueOf(),e._d.setTime(e._d.valueOf()+s),e0.updateOffset(e,!1),e):D2(t).local()}function Te(t){return-Math.round(t._d.getTimezoneOffset())}e0.updateOffset=function(){};function yT(t,n,e){var s=this._offset||0,o;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=l8(g5,t),t===null)return this}else Math.abs(t)<16&&!e&&(t=t*60);return!this._isUTC&&n&&(o=Te(this)),this._offset=t,this._isUTC=!0,o!=null&&this.add(o,"m"),s!==t&&(!n||this._changeInProgress?cu(this,at(t-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e0.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:Te(this)}function TT(t,n){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,n),this):-this.utcOffset()}function xT(t){return this.utcOffset(0,t)}function wT(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Te(this),"m")),this}function ST(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=l8(Vv,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function bT(t){return this.isValid()?(t=t?D2(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function MT(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function kT(){if(!C1(this._isDSTShifted))return this._isDSTShifted;var t={},n;return Ke(t,this),t=iu(t),t._a?(n=t._isUTC?bt(t._a):D2(t._a),this._isDSTShifted=this.isValid()&&mT(t._a,n.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function CT(){return this.isValid()?!this._isUTC:!1}function DT(){return this.isValid()?this._isUTC:!1}function lu(){return this.isValid()?this._isUTC&&this._offset===0:!1}var AT=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,LT=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function at(t,n){var e=t,s=null,o,l,a;return Pr(t)?e={ms:t._milliseconds,d:t._days,M:t._months}:zt(t)||!isNaN(+t)?(e={},n?e[n]=+t:e.milliseconds=+t):(s=AT.exec(t))?(o=s[1]==="-"?-1:1,e={y:0,d:Q0(s[vt])*o,h:Q0(s[j2])*o,m:Q0(s[it])*o,s:Q0(s[Wt])*o,ms:Q0(ye(s[In]*1e3))*o}):(s=LT.exec(t))?(o=s[1]==="-"?-1:1,e={y:Nn(s[2],o),M:Nn(s[3],o),w:Nn(s[4],o),d:Nn(s[5],o),h:Nn(s[6],o),m:Nn(s[7],o),s:Nn(s[8],o)}):e==null?e={}:typeof e=="object"&&("from"in e||"to"in e)&&(a=OT(D2(e.from),D2(e.to)),e={},e.ms=a.milliseconds,e.M=a.months),l=new v5(e),Pr(t)&&s2(t,"_locale")&&(l._locale=t._locale),Pr(t)&&s2(t,"_isValid")&&(l._isValid=t._isValid),l}at.fn=v5.prototype;at.invalid=pT;function Nn(t,n){var e=t&&parseFloat(t.replace(",","."));return(isNaN(e)?0:e)*n}function Gi(t,n){var e={};return e.months=n.month()-t.month()+(n.year()-t.year())*12,t.clone().add(e.months,"M").isAfter(n)&&--e.months,e.milliseconds=+n-+t.clone().add(e.months,"M"),e}function OT(t,n){var e;return t.isValid()&&n.isValid()?(n=a8(n,t),t.isBefore(n)?e=Gi(t,n):(e=Gi(n,t),e.milliseconds=-e.milliseconds,e.months=-e.months),e):{milliseconds:0,months:0}}function au(t,n){return function(e,s){var o,l;return s!==null&&!isNaN(+s)&&(Ho(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),l=e,e=s,s=l),o=at(e,s),cu(this,o,t),this}}function cu(t,n,e,s){var o=n._milliseconds,l=ye(n._days),a=ye(n._months);t.isValid()&&(s=s??!0,a&&jo(t,m4(t,"Month")+a*e),l&&Uo(t,"Date",m4(t,"Date")+l*e),o&&t._d.setTime(t._d.valueOf()+o*e),s&&e0.updateOffset(t,l||a))}var ET=au(1,"add"),NT=au(-1,"subtract");function fu(t){return typeof t=="string"||t instanceof String}function RT(t){return lt(t)||k4(t)||fu(t)||zt(t)||BT(t)||PT(t)||t===null||t===void 0}function PT(t){var n=Gn(t)&&!Ue(t),e=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],o,l,a=s.length;for(o=0;o<a;o+=1)l=s[o],e=e||s2(t,l);return n&&e}function BT(t){var n=ut(t),e=!1;return n&&(e=t.filter(function(s){return!zt(s)&&fu(t)}).length===0),n&&e}function IT(t){var n=Gn(t)&&!Ue(t),e=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],o,l;for(o=0;o<s.length;o+=1)l=s[o],e=e||s2(t,l);return n&&e}function HT(t,n){var e=t.diff(n,"days",!0);return e<-6?"sameElse":e<-1?"lastWeek":e<0?"lastDay":e<1?"sameDay":e<2?"nextDay":e<7?"nextWeek":"sameElse"}function GT(t,n){arguments.length===1&&(arguments[0]?RT(arguments[0])?(t=arguments[0],n=void 0):IT(arguments[0])&&(n=arguments[0],t=void 0):(t=void 0,n=void 0));var e=t||D2(),s=a8(e,this).startOf("day"),o=e0.calendarFormat(this,s)||"sameElse",l=n&&(Mt(n[o])?n[o].call(this,e):n[o]);return this.format(l||this.localeData().calendar(o,this,D2(e)))}function $T(){return new C4(this)}function YT(t,n){var e=lt(t)?t:D2(t);return this.isValid()&&e.isValid()?(n=X1(n)||"millisecond",n==="millisecond"?this.valueOf()>e.valueOf():e.valueOf()<this.clone().startOf(n).valueOf()):!1}function VT(t,n){var e=lt(t)?t:D2(t);return this.isValid()&&e.isValid()?(n=X1(n)||"millisecond",n==="millisecond"?this.valueOf()<e.valueOf():this.clone().endOf(n).valueOf()<e.valueOf()):!1}function FT(t,n,e,s){var o=lt(t)?t:D2(t),l=lt(n)?n:D2(n);return this.isValid()&&o.isValid()&&l.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(o,e):!this.isBefore(o,e))&&(s[1]===")"?this.isBefore(l,e):!this.isAfter(l,e))):!1}function WT(t,n){var e=lt(t)?t:D2(t),s;return this.isValid()&&e.isValid()?(n=X1(n)||"millisecond",n==="millisecond"?this.valueOf()===e.valueOf():(s=e.valueOf(),this.clone().startOf(n).valueOf()<=s&&s<=this.clone().endOf(n).valueOf())):!1}function UT(t,n){return this.isSame(t,n)||this.isAfter(t,n)}function qT(t,n){return this.isSame(t,n)||this.isBefore(t,n)}function KT(t,n,e){var s,o,l;if(!this.isValid())return NaN;if(s=a8(t,this),!s.isValid())return NaN;switch(o=(s.utcOffset()-this.utcOffset())*6e4,n=X1(n),n){case"year":l=Br(this,s)/12;break;case"month":l=Br(this,s);break;case"quarter":l=Br(this,s)/3;break;case"second":l=(this-s)/1e3;break;case"minute":l=(this-s)/6e4;break;case"hour":l=(this-s)/36e5;break;case"day":l=(this-s-o)/864e5;break;case"week":l=(this-s-o)/6048e5;break;default:l=this-s}return e?l:j1(l)}function Br(t,n){if(t.date()<n.date())return-Br(n,t);var e=(n.year()-t.year())*12+(n.month()-t.month()),s=t.clone().add(e,"months"),o,l;return n-s<0?(o=t.clone().add(e-1,"months"),l=(n-s)/(s-o)):(o=t.clone().add(e+1,"months"),l=(n-s)/(o-s)),-(e+l)||0}e0.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";e0.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function jT(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function zT(t){if(!this.isValid())return null;var n=t!==!0,e=n?this.clone().utc():this;return e.year()<0||e.year()>9999?Rr(e,n?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Mt(Date.prototype.toISOString)?n?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Rr(e,"Z")):Rr(e,n?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function ZT(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",n="",e,s,o,l;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",n="Z"),e="["+t+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",o="-MM-DD[T]HH:mm:ss.SSS",l=n+'[")]',this.format(e+s+o+l)}function JT(t){t||(t=this.isUtc()?e0.defaultFormatUtc:e0.defaultFormat);var n=Rr(this,t);return this.localeData().postformat(n)}function XT(t,n){return this.isValid()&&(lt(t)&&t.isValid()||D2(t).isValid())?at({to:this,from:t}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function QT(t){return this.from(D2(),t)}function tx(t,n){return this.isValid()&&(lt(t)&&t.isValid()||D2(t).isValid())?at({from:this,to:t}).locale(this.locale()).humanize(!n):this.localeData().invalidDate()}function nx(t){return this.to(D2(),t)}function hu(t){var n;return t===void 0?this._locale._abbr:(n=Jt(t),n!=null&&(this._locale=n),this)}var _u=J1("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function du(){return this._locale}var jr=1e3,y3=60*jr,zr=60*y3,gu=(365*400+97)*24*zr;function T3(t,n){return(t%n+n)%n}function pu(t,n,e){return t<100&&t>=0?new Date(t+400,n,e)-gu:new Date(t,n,e).valueOf()}function mu(t,n,e){return t<100&&t>=0?Date.UTC(t+400,n,e)-gu:Date.UTC(t,n,e)}function rx(t){var n,e;if(t=X1(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(e=this._isUTC?mu:pu,t){case"year":n=e(this.year(),0,1);break;case"quarter":n=e(this.year(),this.month()-this.month()%3,1);break;case"month":n=e(this.year(),this.month(),1);break;case"week":n=e(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=e(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=e(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=T3(n+(this._isUTC?0:this.utcOffset()*y3),zr);break;case"minute":n=this._d.valueOf(),n-=T3(n,y3);break;case"second":n=this._d.valueOf(),n-=T3(n,jr);break}return this._d.setTime(n),e0.updateOffset(this,!0),this}function ex(t){var n,e;if(t=X1(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(e=this._isUTC?mu:pu,t){case"year":n=e(this.year()+1,0,1)-1;break;case"quarter":n=e(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=e(this.year(),this.month()+1,1)-1;break;case"week":n=e(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=e(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=e(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=zr-T3(n+(this._isUTC?0:this.utcOffset()*y3),zr)-1;break;case"minute":n=this._d.valueOf(),n+=y3-T3(n,y3)-1;break;case"second":n=this._d.valueOf(),n+=jr-T3(n,jr)-1;break}return this._d.setTime(n),e0.updateOffset(this,!0),this}function ix(){return this._d.valueOf()-(this._offset||0)*6e4}function sx(){return Math.floor(this.valueOf()/1e3)}function ox(){return new Date(this.valueOf())}function ux(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function lx(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function ax(){return this.isValid()?this.toISOString():null}function cx(){return qe(this)}function fx(){return pn({},W0(this))}function hx(){return W0(this).overflow}function _x(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}D0("N",0,0,"eraAbbr");D0("NN",0,0,"eraAbbr");D0("NNN",0,0,"eraAbbr");D0("NNNN",0,0,"eraName");D0("NNNNN",0,0,"eraNarrow");D0("y",["y",1],"yo","eraYear");D0("y",["yy",2],0,"eraYear");D0("y",["yyy",3],0,"eraYear");D0("y",["yyyy",4],0,"eraYear");y0("N",c8);y0("NN",c8);y0("NNN",c8);y0("NNNN",bx);y0("NNNNN",Mx);v2(["N","NN","NNN","NNNN","NNNNN"],function(t,n,e,s){var o=e._locale.erasParse(t,s,e._strict);o?W0(e).era=o:W0(e).invalidEra=t});y0("y",k3);y0("yy",k3);y0("yyy",k3);y0("yyyy",k3);y0("yo",kx);v2(["y","yy","yyy","yyyy"],h1);v2(["yo"],function(t,n,e,s){var o;e._locale._eraYearOrdinalRegex&&(o=t.match(e._locale._eraYearOrdinalRegex)),e._locale.eraYearOrdinalParse?n[h1]=e._locale.eraYearOrdinalParse(t,o):n[h1]=parseInt(t,10)});function dx(t,n){var e,s,o,l=this._eras||Jt("en")._eras;for(e=0,s=l.length;e<s;++e){switch(typeof l[e].since){case"string":o=e0(l[e].since).startOf("day"),l[e].since=o.valueOf();break}switch(typeof l[e].until){case"undefined":l[e].until=1/0;break;case"string":o=e0(l[e].until).startOf("day").valueOf(),l[e].until=o.valueOf();break}}return l}function gx(t,n,e){var s,o,l=this.eras(),a,f,h;for(t=t.toUpperCase(),s=0,o=l.length;s<o;++s)if(a=l[s].name.toUpperCase(),f=l[s].abbr.toUpperCase(),h=l[s].narrow.toUpperCase(),e)switch(n){case"N":case"NN":case"NNN":if(f===t)return l[s];break;case"NNNN":if(a===t)return l[s];break;case"NNNNN":if(h===t)return l[s];break}else if([a,f,h].indexOf(t)>=0)return l[s]}function px(t,n){var e=t.since<=t.until?1:-1;return n===void 0?e0(t.since).year():e0(t.since).year()+(n-t.offset)*e}function mx(){var t,n,e,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(e=this.clone().startOf("day").valueOf(),s[t].since<=e&&e<=s[t].until||s[t].until<=e&&e<=s[t].since)return s[t].name;return""}function vx(){var t,n,e,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(e=this.clone().startOf("day").valueOf(),s[t].since<=e&&e<=s[t].until||s[t].until<=e&&e<=s[t].since)return s[t].narrow;return""}function yx(){var t,n,e,s=this.localeData().eras();for(t=0,n=s.length;t<n;++t)if(e=this.clone().startOf("day").valueOf(),s[t].since<=e&&e<=s[t].until||s[t].until<=e&&e<=s[t].since)return s[t].abbr;return""}function Tx(){var t,n,e,s,o=this.localeData().eras();for(t=0,n=o.length;t<n;++t)if(e=o[t].since<=o[t].until?1:-1,s=this.clone().startOf("day").valueOf(),o[t].since<=s&&s<=o[t].until||o[t].until<=s&&s<=o[t].since)return(this.year()-e0(o[t].since).year())*e+o[t].offset;return this.year()}function xx(t){return s2(this,"_erasNameRegex")||f8.call(this),t?this._erasNameRegex:this._erasRegex}function wx(t){return s2(this,"_erasAbbrRegex")||f8.call(this),t?this._erasAbbrRegex:this._erasRegex}function Sx(t){return s2(this,"_erasNarrowRegex")||f8.call(this),t?this._erasNarrowRegex:this._erasRegex}function c8(t,n){return n.erasAbbrRegex(t)}function bx(t,n){return n.erasNameRegex(t)}function Mx(t,n){return n.erasNarrowRegex(t)}function kx(t,n){return n._eraYearOrdinalRegex||k3}function f8(){var t=[],n=[],e=[],s=[],o,l,a,f,h,p=this.eras();for(o=0,l=p.length;o<l;++o)a=Kt(p[o].name),f=Kt(p[o].abbr),h=Kt(p[o].narrow),n.push(a),t.push(f),e.push(h),s.push(a),s.push(f),s.push(h);this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+n.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+e.join("|")+")","i")}D0(0,["gg",2],0,function(){return this.weekYear()%100});D0(0,["GG",2],0,function(){return this.isoWeekYear()%100});function y5(t,n){D0(0,[t,t.length],0,n)}y5("gggg","weekYear");y5("ggggg","weekYear");y5("GGGG","isoWeekYear");y5("GGGGG","isoWeekYear");y0("G",d5);y0("g",d5);y0("GG",A2,G1);y0("gg",A2,G1);y0("GGGG",Xe,Je);y0("gggg",Xe,Je);y0("GGGGG",_5,f5);y0("ggggg",_5,f5);A4(["gggg","ggggg","GGGG","GGGGG"],function(t,n,e,s){n[s.substr(0,2)]=Q0(t)});A4(["gg","GG"],function(t,n,e,s){n[s]=e0.parseTwoDigitYear(t)});function Cx(t){return vu.call(this,t,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Dx(t){return vu.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Ax(){return jt(this.year(),1,4)}function Lx(){return jt(this.isoWeekYear(),1,4)}function Ox(){var t=this.localeData()._week;return jt(this.year(),t.dow,t.doy)}function Ex(){var t=this.localeData()._week;return jt(this.weekYear(),t.dow,t.doy)}function vu(t,n,e,s,o){var l;return t==null?y4(this,s,o).year:(l=jt(t,s,o),n>l&&(n=l),Nx.call(this,t,n,e,s,o))}function Nx(t,n,e,s,o){var l=Jo(t,n,e,s,o),a=v4(l.year,0,l.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}D0("Q",0,"Qo","quarter");y0("Q",$o);v2("Q",function(t,n){n[Ft]=(Q0(t)-1)*3});function Rx(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}D0("D",["DD",2],"Do","date");y0("D",A2,C3);y0("DD",A2,G1);y0("Do",function(t,n){return t?n._dayOfMonthOrdinalParse||n._ordinalParse:n._dayOfMonthOrdinalParseLenient});v2(["D","DD"],vt);v2("Do",function(t,n){n[vt]=Q0(t.match(A2)[0])});var yu=D3("Date",!0);D0("DDD",["DDDD",3],"DDDo","dayOfYear");y0("DDD",h5);y0("DDDD",Yo);v2(["DDD","DDDD"],function(t,n,e){e._dayOfYear=Q0(t)});function Px(t){var n=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?n:this.add(t-n,"d")}D0("m",["mm",2],0,"minute");y0("m",A2,Qe);y0("mm",A2,G1);v2(["m","mm"],it);var Bx=D3("Minutes",!1);D0("s",["ss",2],0,"second");y0("s",A2,Qe);y0("ss",A2,G1);v2(["s","ss"],Wt);var Ix=D3("Seconds",!1);D0("S",0,0,function(){return~~(this.millisecond()/100)});D0(0,["SS",2],0,function(){return~~(this.millisecond()/10)});D0(0,["SSS",3],0,"millisecond");D0(0,["SSSS",4],0,function(){return this.millisecond()*10});D0(0,["SSSSS",5],0,function(){return this.millisecond()*100});D0(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});D0(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});D0(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});D0(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});y0("S",h5,$o);y0("SS",h5,G1);y0("SSS",h5,Yo);var mn,Tu;for(mn="SSSS";mn.length<=9;mn+="S")y0(mn,k3);function Hx(t,n){n[In]=Q0(("0."+t)*1e3)}for(mn="S";mn.length<=9;mn+="S")v2(mn,Hx);Tu=D3("Milliseconds",!1);D0("z",0,0,"zoneAbbr");D0("zz",0,0,"zoneName");function Gx(){return this._isUTC?"UTC":""}function $x(){return this._isUTC?"Coordinated Universal Time":""}var n0=C4.prototype;n0.add=ET;n0.calendar=GT;n0.clone=$T;n0.diff=KT;n0.endOf=ex;n0.format=JT;n0.from=XT;n0.fromNow=QT;n0.to=tx;n0.toNow=nx;n0.get=Zv;n0.invalidAt=hx;n0.isAfter=YT;n0.isBefore=VT;n0.isBetween=FT;n0.isSame=WT;n0.isSameOrAfter=UT;n0.isSameOrBefore=qT;n0.isValid=cx;n0.lang=_u;n0.locale=hu;n0.localeData=du;n0.max=cT;n0.min=aT;n0.parsingFlags=fx;n0.set=Jv;n0.startOf=rx;n0.subtract=NT;n0.toArray=ux;n0.toObject=lx;n0.toDate=ox;n0.toISOString=zT;n0.inspect=ZT;typeof Symbol<"u"&&Symbol.for!=null&&(n0[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});n0.toJSON=ax;n0.toString=jT;n0.unix=sx;n0.valueOf=ix;n0.creationData=_x;n0.eraName=mx;n0.eraNarrow=vx;n0.eraAbbr=yx;n0.eraYear=Tx;n0.year=Wo;n0.isLeapYear=zv;n0.weekYear=Cx;n0.isoWeekYear=Dx;n0.quarter=n0.quarters=Rx;n0.month=zo;n0.daysInMonth=oy;n0.week=n0.weeks=dy;n0.isoWeek=n0.isoWeeks=gy;n0.weeksInYear=Ox;n0.weeksInWeekYear=Ex;n0.isoWeeksInYear=Ax;n0.isoWeeksInISOWeekYear=Lx;n0.date=yu;n0.day=n0.days=Dy;n0.weekday=Ay;n0.isoWeekday=Ly;n0.dayOfYear=Px;n0.hour=n0.hours=Iy;n0.minute=n0.minutes=Bx;n0.second=n0.seconds=Ix;n0.millisecond=n0.milliseconds=Tu;n0.utcOffset=yT;n0.utc=xT;n0.local=wT;n0.parseZone=ST;n0.hasAlignedHourOffset=bT;n0.isDST=MT;n0.isLocal=CT;n0.isUtcOffset=DT;n0.isUtc=lu;n0.isUTC=lu;n0.zoneAbbr=Gx;n0.zoneName=$x;n0.dates=J1("dates accessor is deprecated. Use date instead.",yu);n0.months=J1("months accessor is deprecated. Use month instead",zo);n0.years=J1("years accessor is deprecated. Use year instead",Wo);n0.zone=J1("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",TT);n0.isDSTShifted=J1("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",kT);function Yx(t){return D2(t*1e3)}function Vx(){return D2.apply(null,arguments).parseZone()}function xu(t){return t}var o2=je.prototype;o2.calendar=Cv;o2.longDateFormat=Ov;o2.invalidDate=Nv;o2.ordinal=Bv;o2.preparse=xu;o2.postformat=xu;o2.relativeTime=Hv;o2.pastFuture=Gv;o2.set=Mv;o2.eras=dx;o2.erasParse=gx;o2.erasConvertYear=px;o2.erasAbbrRegex=wx;o2.erasNameRegex=xx;o2.erasNarrowRegex=Sx;o2.months=ry;o2.monthsShort=ey;o2.monthsParse=sy;o2.monthsRegex=ly;o2.monthsShortRegex=uy;o2.week=cy;o2.firstDayOfYear=_y;o2.firstDayOfWeek=hy;o2.weekdays=Sy;o2.weekdaysMin=My;o2.weekdaysShort=by;o2.weekdaysParse=Cy;o2.weekdaysRegex=Oy;o2.weekdaysShortRegex=Ey;o2.weekdaysMinRegex=Ny;o2.isPM=Py;o2.meridiem=Hy;function Zr(t,n,e,s){var o=Jt(),l=bt().set(s,n);return o[e](l,t)}function wu(t,n,e){if(zt(t)&&(n=t,t=void 0),t=t||"",n!=null)return Zr(t,n,e,"month");var s,o=[];for(s=0;s<12;s++)o[s]=Zr(t,s,e,"month");return o}function h8(t,n,e,s){typeof t=="boolean"?(zt(n)&&(e=n,n=void 0),n=n||""):(n=t,e=n,t=!1,zt(n)&&(e=n,n=void 0),n=n||"");var o=Jt(),l=t?o._week.dow:0,a,f=[];if(e!=null)return Zr(n,(e+l)%7,s,"day");for(a=0;a<7;a++)f[a]=Zr(n,(a+l)%7,s,"day");return f}function Fx(t,n){return wu(t,n,"months")}function Wx(t,n){return wu(t,n,"monthsShort")}function Ux(t,n,e){return h8(t,n,e,"weekdays")}function qx(t,n,e){return h8(t,n,e,"weekdaysShort")}function Kx(t,n,e){return h8(t,n,e,"weekdaysMin")}yn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var n=t%10,e=Q0(t%100/10)===1?"th":n===1?"st":n===2?"nd":n===3?"rd":"th";return t+e}});e0.lang=J1("moment.lang is deprecated. Use moment.locale instead.",yn);e0.langData=J1("moment.langData is deprecated. Use moment.localeData instead.",Jt);var It=Math.abs;function jx(){var t=this._data;return this._milliseconds=It(this._milliseconds),this._days=It(this._days),this._months=It(this._months),t.milliseconds=It(t.milliseconds),t.seconds=It(t.seconds),t.minutes=It(t.minutes),t.hours=It(t.hours),t.months=It(t.months),t.years=It(t.years),this}function Su(t,n,e,s){var o=at(n,e);return t._milliseconds+=s*o._milliseconds,t._days+=s*o._days,t._months+=s*o._months,t._bubble()}function zx(t,n){return Su(this,t,n,1)}function Zx(t,n){return Su(this,t,n,-1)}function $i(t){return t<0?Math.floor(t):Math.ceil(t)}function Jx(){var t=this._milliseconds,n=this._days,e=this._months,s=this._data,o,l,a,f,h;return t>=0&&n>=0&&e>=0||t<=0&&n<=0&&e<=0||(t+=$i(xe(e)+n)*864e5,n=0,e=0),s.milliseconds=t%1e3,o=j1(t/1e3),s.seconds=o%60,l=j1(o/60),s.minutes=l%60,a=j1(l/60),s.hours=a%24,n+=j1(a/24),h=j1(bu(n)),e+=h,n-=$i(xe(h)),f=j1(e/12),e%=12,s.days=n,s.months=e,s.years=f,this}function bu(t){return t*4800/146097}function xe(t){return t*146097/4800}function Xx(t){if(!this.isValid())return NaN;var n,e,s=this._milliseconds;if(t=X1(t),t==="month"||t==="quarter"||t==="year")switch(n=this._days+s/864e5,e=this._months+bu(n),t){case"month":return e;case"quarter":return e/3;case"year":return e/12}else switch(n=this._days+Math.round(xe(this._months)),t){case"week":return n/7+s/6048e5;case"day":return n+s/864e5;case"hour":return n*24+s/36e5;case"minute":return n*1440+s/6e4;case"second":return n*86400+s/1e3;case"millisecond":return Math.floor(n*864e5)+s;default:throw new Error("Unknown unit "+t)}}function Xt(t){return function(){return this.as(t)}}var Mu=Xt("ms"),Qx=Xt("s"),tw=Xt("m"),nw=Xt("h"),rw=Xt("d"),ew=Xt("w"),iw=Xt("M"),sw=Xt("Q"),ow=Xt("y"),uw=Mu;function lw(){return at(this)}function aw(t){return t=X1(t),this.isValid()?this[t+"s"]():NaN}function Fn(t){return function(){return this.isValid()?this._data[t]:NaN}}var cw=Fn("milliseconds"),fw=Fn("seconds"),hw=Fn("minutes"),_w=Fn("hours"),dw=Fn("days"),gw=Fn("months"),pw=Fn("years");function mw(){return j1(this.days()/7)}var $t=Math.round,h3={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function vw(t,n,e,s,o){return o.relativeTime(n||1,!!e,t,s)}function yw(t,n,e,s){var o=at(t).abs(),l=$t(o.as("s")),a=$t(o.as("m")),f=$t(o.as("h")),h=$t(o.as("d")),p=$t(o.as("M")),y=$t(o.as("w")),x=$t(o.as("y")),b=l<=e.ss&&["s",l]||l<e.s&&["ss",l]||a<=1&&["m"]||a<e.m&&["mm",a]||f<=1&&["h"]||f<e.h&&["hh",f]||h<=1&&["d"]||h<e.d&&["dd",h];return e.w!=null&&(b=b||y<=1&&["w"]||y<e.w&&["ww",y]),b=b||p<=1&&["M"]||p<e.M&&["MM",p]||x<=1&&["y"]||["yy",x],b[2]=n,b[3]=+t>0,b[4]=s,vw.apply(null,b)}function Tw(t){return t===void 0?$t:typeof t=="function"?($t=t,!0):!1}function xw(t,n){return h3[t]===void 0?!1:n===void 0?h3[t]:(h3[t]=n,t==="s"&&(h3.ss=n-1),!0)}function ww(t,n){if(!this.isValid())return this.localeData().invalidDate();var e=!1,s=h3,o,l;return typeof t=="object"&&(n=t,t=!1),typeof t=="boolean"&&(e=t),typeof n=="object"&&(s=Object.assign({},h3,n),n.s!=null&&n.ss==null&&(s.ss=n.s-1)),o=this.localeData(),l=yw(this,!e,s,o),e&&(l=o.pastFuture(+this,l)),o.postformat(l)}var Z6=Math.abs;function o3(t){return(t>0)-(t<0)||+t}function T5(){if(!this.isValid())return this.localeData().invalidDate();var t=Z6(this._milliseconds)/1e3,n=Z6(this._days),e=Z6(this._months),s,o,l,a,f=this.asSeconds(),h,p,y,x;return f?(s=j1(t/60),o=j1(s/60),t%=60,s%=60,l=j1(e/12),e%=12,a=t?t.toFixed(3).replace(/\.?0+$/,""):"",h=f<0?"-":"",p=o3(this._months)!==o3(f)?"-":"",y=o3(this._days)!==o3(f)?"-":"",x=o3(this._milliseconds)!==o3(f)?"-":"",h+"P"+(l?p+l+"Y":"")+(e?p+e+"M":"")+(n?y+n+"D":"")+(o||s||t?"T":"")+(o?x+o+"H":"")+(s?x+s+"M":"")+(t?x+a+"S":"")):"P0D"}var e2=v5.prototype;e2.isValid=gT;e2.abs=jx;e2.add=zx;e2.subtract=Zx;e2.as=Xx;e2.asMilliseconds=Mu;e2.asSeconds=Qx;e2.asMinutes=tw;e2.asHours=nw;e2.asDays=rw;e2.asWeeks=ew;e2.asMonths=iw;e2.asQuarters=sw;e2.asYears=ow;e2.valueOf=uw;e2._bubble=Jx;e2.clone=lw;e2.get=aw;e2.milliseconds=cw;e2.seconds=fw;e2.minutes=hw;e2.hours=_w;e2.days=dw;e2.weeks=mw;e2.months=gw;e2.years=pw;e2.humanize=ww;e2.toISOString=T5;e2.toString=T5;e2.toJSON=T5;e2.locale=hu;e2.localeData=du;e2.toIsoString=J1("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",T5);e2.lang=_u;D0("X",0,0,"unix");D0("x",0,0,"valueOf");y0("x",d5);y0("X",Fv);v2("X",function(t,n,e){e._d=new Date(parseFloat(t)*1e3)});v2("x",function(t,n,e){e._d=new Date(Q0(t))});//! moment.js
e0.version="2.30.1";Sv(D2);e0.fn=n0;e0.min=fT;e0.max=hT;e0.now=_T;e0.utc=bt;e0.unix=Yx;e0.months=Fx;e0.isDate=k4;e0.locale=yn;e0.invalid=c5;e0.duration=at;e0.isMoment=lt;e0.weekdays=Ux;e0.parseZone=Vx;e0.localeData=Jt;e0.isDuration=Pr;e0.monthsShort=Wx;e0.weekdaysMin=Kx;e0.defineLocale=i8;e0.updateLocale=Vy;e0.locales=Fy;e0.weekdaysShort=qx;e0.normalizeUnits=X1;e0.relativeTimeRounding=Tw;e0.relativeTimeThreshold=xw;e0.calendarFormat=HT;e0.prototype=n0;e0.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Sw=`20/10/2026	01413	\r
132023305055 |45\r
17/10/2026	01412	\r
011011121637 |48\r
15/10/2026	01411	\r
072325424551 |04\r
13/10/2026	01410	\r
021427405053 |26\r
10/10/2026	01409	\r
141721232439 |30\r
08/10/2026	01408	\r
010712273152 |06\r
06/10/2026	01407	\r
060718202427 |01\r
03/10/2026	01406	\r
071113161854 |41\r
01/10/2026	01405	\r
040513345255 |15\r
29/09/2026	01404	\r
020413173536 |11\r
26/09/2026	01403	\r
141821384852 |49\r
24/09/2026	01402	\r
011323252628 |27\r
22/09/2026	01401	\r
010309114146 |10\r
19/09/2026	01400	\r
040711182225 |50\r
17/09/2026	01399	\r
061125273745 |15\r
15/09/2026	01398	\r
242732363847 |52\r
12/09/2026	01397	\r
072431434754 |22\r
10/09/2026	01396	\r
020528325153 |50\r
08/09/2026	01395	\r
081114232554 |17\r
05/09/2026	01394	\r
091124313347 |21\r
03/09/2026	01393	\r
080916424647 |11\r
01/09/2026	01392	\r
011741444955 |45\r
29/08/2026	01391	\r
051015293445 |24\r
27/08/2026	01390	\r
010311212644 |10\r
25/08/2026	01389	\r
050713183140 |14\r
22/08/2026	01388	\r
091819212536 |08\r
20/08/2026	01387	\r
020829383951 |47\r
18/08/2026	01386	\r
031518384148 |30\r
15/08/2026	01385	\r
162025273050 |02\r
13/08/2026	01384	\r
050927294546 |42\r
11/08/2026	01383	\r
020719203950 |31\r
08/08/2026	01382	\r
052933384045 |37\r
06/08/2026	01381	\r
141823355155 |01\r
04/08/2026	01380	\r
143940424754 |31\r
01/08/2026	01379	\r
111416444955 |39\r
30/07/2026	01378	\r
021224284349 |51\r
28/07/2026	01377	\r
072223274144 |48\r
25/07/2026	01376	\r
050927333750 |48\r
23/07/2026	01375	\r
010308384055 |36\r
21/07/2026	01374	\r
081122243239 |13\r
18/07/2026	01373	\r
224145485455 |16\r
16/07/2026	01372	\r
192033454853 |21\r
14/07/2026	01371	\r
102430354551 |33\r
11/07/2026	01370	\r
091720334142 |40\r
09/07/2026	01369	\r
020910141749 |45\r
07/07/2026	01368	\r
040625323344 |08\r
04/07/2026	01367	\r
131518233143 |41\r
02/07/2026	01366	\r
051128344142 |49\r
30/06/2026	01365	\r
051318224344 |47\r
27/06/2026	01364	\r
071621232852 |54\r
25/06/2026	01363	\r
010308153555 |23\r
23/06/2026	01362	\r
011328384046 |05\r
20/06/2026	01361	\r
162326305253 |46\r
18/06/2026	01360	\r
010414204649 |36\r
16/06/2026	01359	\r
020405073140 |14\r
13/06/2026	01358	\r
020819333647 |42\r
11/06/2026	01357	\r
010817244048 |46\r
09/06/2026	01356	\r
060818273234 |35\r
06/06/2026	01355	\r
031116373941 |28\r
04/06/2026	01354	\r
232428293943 |45\r
02/06/2026	01353	\r
010305163751 |42\r
30/05/2026	01352	\r
020820242542 |44\r
28/05/2026	01351	\r
081121253153 |54\r
26/05/2026	01350	\r
011415192334 |29\r
23/05/2026	01349	\r
172122273849 |03\r
21/05/2026	01348	\r
161820283234 |40\r
19/05/2026	01347	\r
123940454853 |21\r
16/05/2026	01346	\r
082532363947 |50\r
14/05/2026	01345	\r
262839414855 |50\r
12/05/2026	01344	\r
021122263138 |15\r
09/05/2026	01343	\r
031032374555 |46\r
07/05/2026	01342	\r
131433444650 |47\r
05/05/2026	01341	\r
040608173050 |32\r
02/05/2026	01340	\r
092122263351 |17\r
30/04/2026	01339	\r
091521252950 |16\r
28/04/2026	01338	\r
242534515253 |35\r
25/04/2026	01337	\r
040710294146 |43\r
23/04/2026	01336	\r
051617223353 |55\r
21/04/2026	01335	\r
083036395053 |15\r
18/04/2026	01334	\r
091920283739 |24\r
16/04/2026	01333	\r
020715224752 |55\r
14/04/2026	01332	\r
081622353947 |28\r
11/04/2026	01331	\r
132629384953 |07\r
09/04/2026	01330	\r
161822294153 |38\r
07/04/2026	01329	\r
011323314453 |32\r
04/04/2026	01328	\r
050710233054 |40\r
02/04/2026	01327	\r
092132345253 |22\r
31/03/2026	01326	\r
151622384348 |11\r
28/03/2026	01325	\r
071321303342 |39\r
26/03/2026	01324	\r
030910343844 |51\r
24/03/2026	01323	\r
121925263245 |03\r
21/03/2026	01322	\r
010640434753 |03\r
19/03/2026	01321	\r
070917313436 |55\r
17/03/2026	01320	\r
122628435054 |52\r
14/03/2026	01319	\r
071627294752 |26\r
12/03/2026	01318	\r
122836405355 |54\r
10/03/2026	01317	\r
032631394754 |20\r
07/03/2026	01316	\r
043241455052 |29\r
05/03/2026	01315	\r
141635384351 |37\r
03/03/2026	01314	\r
071327294350 |25\r
28/02/2026	01313	\r
222531445154 |36\r
26/02/2026	01312	\r
010710214451 |46\r
24/02/2026	01311	\r
050818303954 |51\r
21/02/2026	01310	\r
050726304145 |12\r
19/02/2026	01309	\r
012730434546 |48\r
14/02/2026	01308	\r
021326323642 |48\r
12/02/2026	01307	\r
081719313246 |26\r
10/02/2026	01306	\r
132122263255 |20\r
07/02/2026	01305	\r
030513152946 |01\r
05/02/2026	01304	\r
071316252655 |09\r
03/02/2026	01303	\r
121518224853 |45\r
31/01/2026	01302	\r
101114174953 |04\r
29/01/2026	01301	\r
111522323454 |28\r
27/01/2026	01300	\r
132232425354 |29\r
24/01/2026	01299	\r
142425303553 |18\r
22/01/2026	01298	\r
022021293650 |05\r
20/01/2026	01297	\r
042026283741 |32\r
17/01/2026	01296	\r
142123254648 |54\r
15/01/2026	01295	\r
132131344855 |27\r
13/01/2026	01294	\r
031225515255 |43\r
10/01/2026	01293	\r
091630333438 |49\r
08/01/2026	01292	\r
202236434550 |47\r
06/01/2026	01291	\r
222829303447 |20\r
03/01/2026	01290	\r
101617233336 |42\r
01/01/2026	01289	\r
051629333942 |54\r
30/12/2025	01288	\r
113035414855 |38\r
27/12/2025	01287	\r
162130373940 |13\r
25/12/2025	01286	\r
040632374048 |38\r
23/12/2025	01285	\r
021016253238 |03\r
20/12/2025	01284	\r
223233354041 |23\r
18/12/2025	01283	\r
121429303955 |50\r
16/12/2025	01282	\r
073637385255 |46\r
13/12/2025	01281	\r
050812182038 |52\r
11/12/2025	01280	\r
091321454855 |38\r
09/12/2025	01279	\r
142126273143 |42\r
06/12/2025	01278	\r
122634375052 |15\r
04/12/2025	01277	\r
102932334453 |14\r
02/12/2025	01276	\r
162024365154 |10\r
29/11/2025	01275	\r
042024274048 |09\r
27/11/2025	01274	\r
040510112835 |38\r
25/11/2025	01273	\r
233132424648 |04\r
22/11/2025	01272	\r
081019293446 |14\r
20/11/2025	01271	\r
031219203142 |13\r
18/11/2025	01270	\r
071218223049 |05\r
15/11/2025	01269	\r
023033354254 |45\r
13/11/2025	01268	\r
011530384043 |13\r
11/11/2025	01267	\r
112028414754 |31\r
08/11/2025	01266	\r
141619222744 |18\r
06/11/2025	01265	\r
162029333649 |06\r
04/11/2025	01264	\r
152729313643 |38\r
01/11/2025	01263	\r
071128293133 |08\r
30/10/2025	01262	\r
202335414755 |37\r
28/10/2025	01261	\r
060810222554 |09\r
25/10/2025	01260	\r
030511132427 |45\r
23/10/2025	01259	\r
081021484950 |40\r
21/10/2025	01258	\r
031112142240 |41\r
18/10/2025	01257	\r
051619213843 |50\r
16/10/2025	01256	\r
141524262745 |36\r
14/10/2025	01255	\r
080916263755 |12\r
11/10/2025	01254	\r
030726434446 |25\r
09/10/2025	01253	\r
071121223942 |40\r
07/10/2025	01252	\r
192235374345 |29\r
04/10/2025	01251	\r
223335363840 |07\r
02/10/2025	01250	\r
010220242742 |43\r
30/09/2025	01249	\r
172334394652 |08\r
27/09/2025	01248	\r
081319243946 |01\r
25/09/2025	01247	\r
051730313853 |08\r
23/09/2025	01246	\r
081819344146 |38\r
20/09/2025	01245	\r
081314193643 |30\r
18/09/2025	01244	\r
020308273855 |20\r
16/09/2025	01243	\r
171928394353 |33\r
13/09/2025	01242	\r
020715182427 |45\r
11/09/2025	01241	\r
061646495155 |42\r
09/09/2025	01240	\r
162021314052 |02\r
06/09/2025	01239	\r
091119223443 |31\r
04/09/2025	01238	\r
091923424953 |40\r
02/09/2025	01237	\r
091622253051 |43\r
30/08/2025	01236	\r
021719243044 |34\r
28/08/2025	01235	\r
061328303552 |50\r
26/08/2025	01234	\r
223038444855 |05\r
23/08/2025	01233	\r
010926344450 |52\r
21/08/2025	01232	\r
050917354041 |44\r
19/08/2025	01231	\r
011431343647 |45\r
16/08/2025	01230	\r
142332364748 |05\r
14/08/2025	01229	\r
061017183235 |53\r
12/08/2025	01228	\r
010624374055 |10\r
09/08/2025	01227	\r
050916364351 |19\r
07/08/2025	01226	\r
062431323948 |52\r
05/08/2025	01225	\r
084145515253 |31\r
02/08/2025	01224	\r
122429333435 |47\r
31/07/2025	01223	\r
051731424649 |37\r
29/07/2025	01222	\r
040823434551 |48\r
26/07/2025	01221	\r
052628293354 |34\r
24/07/2025	01220	\r
051024293034 |45\r
22/07/2025	01219	\r
091015283344 |22\r
19/07/2025	01218	\r
080920363944 |28\r
17/07/2025	01217	\r
131833404853 |54\r
15/07/2025	01216	\r
182631323648 |30\r
12/07/2025	01215	\r
023439414552 |51\r
10/07/2025	01214	\r
123334424453 |03\r
08/07/2025	01213	\r
232432424850 |31\r
05/07/2025	01212	\r
031522455155 |54\r
03/07/2025	01211	\r
181929314554 |27\r
01/07/2025	01210	\r
031112142733 |15\r
28/06/2025	01209	\r
081113204550 |25\r
26/06/2025	01208	\r
011416274051 |02\r
24/06/2025	01207	\r
030918203053 |48\r
21/06/2025	01206	\r
061015434453 |32\r
19/06/2025	01205	\r
030509101647 |34\r
17/06/2025	01204	\r
071318223244 |43\r
14/06/2025	01203	\r
111222264147 |24\r
12/06/2025	01202	\r
060816183444 |17\r
10/06/2025	01201	\r
030621294041 |37\r
07/06/2025	01200	\r
121721464852 |45\r
05/06/2025	01199	\r
142133374649 |34\r
03/06/2025	01198	\r
021114162738 |51\r
31/05/2025	01197	\r
062441454955 |08\r
29/05/2025	01196	\r
093742454650 |14\r
27/05/2025	01195	\r
041218194448 |42\r
24/05/2025	01194	\r
192027304555 |15\r
22/05/2025	01193	\r
030914414755 |22\r
20/05/2025	01192	\r
192744454752 |15\r
17/05/2025	01191	\r
020726294150 |43\r
15/05/2025	01190	\r
060913444954 |47\r
13/05/2025	01189	\r
030724395455 |42\r
10/05/2025	01188	\r
071619283451 |15\r
08/05/2025	01187	\r
081429373950 |21\r
06/05/2025	01186	\r
121625283039 |05\r
03/05/2025	01185	\r
151921264247 |38\r
01/05/2025	01184	\r
031719414550 |43\r
29/04/2025	01183	\r
141518232833 |29\r
26/04/2025	01182	\r
031516314852 |21\r
24/04/2025	01181	\r
010215394047 |24\r
22/04/2025	01180	\r
102537404148 |32\r
19/04/2025	01179	\r
051115324249 |43\r
17/04/2025	01178	\r
011720384152 |14\r
15/04/2025	01177	\r
082324274249 |20\r
12/04/2025	01176	\r
031419374255 |23\r
10/04/2025	01175	\r
101336374043 |41\r
08/04/2025	01174	\r
030734414353 |31\r
05/04/2025	01173	\r
132329324142 |09\r
03/04/2025	01172	\r
242634425051 |30\r
01/04/2025	01171	\r
141529333947 |04\r
29/03/2025	01170	\r
141921242648 |39\r
27/03/2025	01169	\r
132532364153 |29\r
25/03/2025	01168	\r
142329303540 |17\r
22/03/2025	01167	\r
022342505254 |44\r
20/03/2025	01166	\r
111324283641 |37\r
18/03/2025	01165	\r
020829305055 |27\r
15/03/2025	01164	\r
013439404250 |25\r
13/03/2025	01163	\r
071321435253 |17\r
11/03/2025	01162	\r
011618303144 |34\r
08/03/2025	01161	\r
103841434548 |08\r
06/03/2025	01160	\r
051021264351 |15\r
04/03/2025	01159	\r
051427434553 |47\r
01/03/2025	01158	\r
151734373945 |41\r
27/02/2025	01157	\r
050921314353 |11\r
25/02/2025	01156	\r
010711242930 |48\r
22/02/2025	01155	\r
010207222346 |50\r
20/02/2025	01154	\r
131720273654 |47\r
18/02/2025	01153	\r
121330384047 |42\r
15/02/2025	01152	\r
223738475155 |31\r
13/02/2025	01151	\r
020823264247 |07\r
11/02/2025	01150	\r
010918213540 |44\r
08/02/2025	01149	\r
112228444849 |23\r
06/02/2025	01148	\r
011131434854 |19\r
04/02/2025	01147	\r
071729515255 |41\r
01/02/2025	01146	\r
012034384547 |49\r
30/01/2025	01145	\r
050824283452 |39\r
25/01/2025	01144	\r
142140424851 |19\r
23/01/2025	01143	\r
111822495051 |37\r
21/01/2025	01142	\r
111822285152 |53\r
18/01/2025	01141	\r
010326313741 |51\r
16/01/2025	01140	\r
081634374750 |23\r
14/01/2025	01139	\r
031112243340 |46\r
11/01/2025	01138	\r
102526293746 |14\r
09/01/2025	01137	\r
182131395053 |13\r
07/01/2025	01136	\r
040509162239 |30\r
04/01/2025	01135	\r
041030364053 |51\r
02/01/2025	01134	\r
041018224145 |50\r
31/12/2024	01133	\r
081329364243 |28\r
28/12/2024	01132	\r
061936425355 |39\r
26/12/2024	01131	\r
061833384148 |16\r
24/12/2024	01130	\r
172027324451 |33\r
21/12/2024	01129	\r
041629303551 |48\r
19/12/2024	01128	\r
131632394951 |11\r
17/12/2024	01127	\r
021427305354 |16\r
14/12/2024	01126	\r
031019202124 |07\r
12/12/2024	01125	\r
010912183744 |11\r
10/12/2024	01124	\r
111526455255 |36\r
07/12/2024	01123	\r
161722242937 |54\r
05/12/2024	01122	\r
162129414247 |09\r
03/12/2024	01121	\r
101933394754 |16\r
30/11/2024	01120	\r
012024263841 |36\r
28/11/2024	01119	\r
011624283853 |09\r
26/11/2024	01118	\r
081116324043 |12\r
23/11/2024	01117	\r
041225394851 |45\r
21/11/2024	01116	\r
152231404251 |26\r
19/11/2024	01115	\r
061017344148 |31\r
16/11/2024	01114	\r
162233373951 |54\r
14/11/2024	01113	\r
122537404952 |31\r
12/11/2024	01112	\r
012129354145 |20\r
09/11/2024	01111	\r
111424263451 |40\r
07/11/2024	01110	\r
060933395051 |43\r
05/11/2024	01109	\r
093136464954 |07\r
02/11/2024	01108	\r
020919203454 |26\r
31/10/2024	01107	\r
051620293031 |39\r
29/10/2024	01106	\r
141719284751 |55\r
26/10/2024	01105	\r
051927294247 |40\r
24/10/2024	01104	\r
051731394653 |03\r
22/10/2024	01103	\r
152123263143 |35\r
19/10/2024	01102	\r
092231394351 |19\r
17/10/2024	01101	\r
111415263841 |25\r
15/10/2024	01100	\r
042541424652 |33\r
12/10/2024	01099	\r
293435385051 |37\r
10/10/2024	01098	\r
040506293244 |53\r
08/10/2024	01097	\r
030714174850 |40\r
05/10/2024	01096	\r
021017275052 |18\r
03/10/2024	01095	\r
182134404253 |25\r
01/10/2024	01094	\r
031822414344 |12\r
28/09/2024	01093	\r
021113324148 |15\r
26/09/2024	01092	\r
031829394149 |46\r
24/09/2024	01091	\r
010611172431 |43\r
21/09/2024	01090	\r
030809222655 |11\r
19/09/2024	01089	\r
040922244554 |48\r
17/09/2024	01088	\r
143234414754 |48\r
14/09/2024	01087	\r
021225325154 |34\r
12/09/2024	01086	\r
030831363947 |38\r
10/09/2024	01085	\r
152337384549 |30\r
07/09/2024	01084	\r
051120394653 |37\r
05/09/2024	01083	\r
152023293446 |01\r
03/09/2024	01082	\r
081011143848 |41\r
31/08/2024	01081	\r
243338404251 |28\r
29/08/2024	01080	\r
081121293855 |12\r
27/08/2024	01079	\r
050629313748 |02\r
24/08/2024	01078	\r
021720212223 |38\r
22/08/2024	01077	\r
111820324146 |33\r
20/08/2024	01076	\r
052426272954 |06\r
17/08/2024	01075	\r
042835383945 |05\r
15/08/2024	01074	\r
081620303443 |46\r
13/08/2024	01073	\r
092640444550 |27\r
10/08/2024	01072	\r
102332374855 |14\r
08/08/2024	01071	\r
010742434851 |29\r
06/08/2024	01070	\r
223444465455 |14\r
03/08/2024	01069	\r
072034364146 |16\r
01/08/2024	01068	\r
091721485355 |29\r
30/07/2024	01067	\r
020622233851 |32\r
27/07/2024	01066	\r
182325373940 |35\r
25/07/2024	01065	\r
121721253340 |39\r
23/07/2024	01064	\r
343940425455 |30\r
20/07/2024	01063	\r
121832405153 |28\r
18/07/2024	01062	\r
101328354042 |02\r
16/07/2024	01061	\r
203134364752 |02\r
13/07/2024	01060	\r
021213334452 |34\r
11/07/2024	01059	\r
010211212223 |26\r
09/07/2024	01058	\r
060809283353 |10\r
06/07/2024	01057	\r
081012222555 |52\r
04/07/2024	01056	\r
101920293441 |08\r
02/07/2024	01055	\r
070850525354 |02\r
29/06/2024	01054	\r
111532344648 |47\r
27/06/2024	01053	\r
072122414346 |32\r
25/06/2024	01052	\r
010509131827 |08\r
22/06/2024	01051	\r
172531354142 |36\r
20/06/2024	01050	\r
011029344355 |49\r
18/06/2024	01049	\r
202327363844 |52\r
15/06/2024	01048	\r
051014202651 |36\r
13/06/2024	01047	\r
083945474951 |16\r
11/06/2024	01046	\r
131621303239 |53\r
08/06/2024	01045	\r
131632333543 |42\r
06/06/2024	01044	\r
182638394751 |55\r
04/06/2024	01043	\r
010207101319 |24\r
01/06/2024	01042	\r
062430314749 |01\r
30/05/2024	01041	\r
040708122331 |45\r
28/05/2024	01040	\r
012529374054 |50\r
25/05/2024	01039	\r
152238394353 |20\r
23/05/2024	01038	\r
081242475152 |36\r
21/05/2024	01037	\r
010214323341 |04\r
18/05/2024	01036	\r
121820252752 |44\r
16/05/2024	01035	\r
202527394555 |44\r
14/05/2024	01034	\r
051736404650 |01\r
11/05/2024	01033	\r
192325434654 |42\r
09/05/2024	01032	\r
031621363740 |31\r
07/05/2024	01031	\r
212635414452 |13\r
04/05/2024	01030	\r
052735454955 |18\r
02/05/2024	01029	\r
303233364248 |18\r
30/04/2024	01028	\r
131626464954 |08\r
27/04/2024	01027	\r
071238434855 |08\r
25/04/2024	01026	\r
131927384154 |46\r
23/04/2024	01025	\r
013439404953 |09\r
20/04/2024	01024	\r
020635434547 |14\r
18/04/2024	01023	\r
012123334354 |28\r
16/04/2024	01022	\r
030532404650 |37\r
13/04/2024	01021	\r
293637384042 |46\r
11/04/2024	01020	\r
030615253343 |55\r
09/04/2024	01019	\r
041227444651 |22\r
06/04/2024	01018	\r
091320303954 |23\r
04/04/2024	01017	\r
030812254748 |15\r
02/04/2024	01016	\r
011218205152 |37\r
30/03/2024	01015	\r
141727385455 |23\r
28/03/2024	01014	\r
010718263849 |21\r
26/03/2024	01013	\r
010813163844 |47\r
23/03/2024	01012	\r
031013304052 |04\r
21/03/2024	01011	\r
121341484953 |43\r
19/03/2024	01010	\r
062539454655 |26\r
16/03/2024	01009	\r
083642434455 |54\r
14/03/2024	01008	\r
212526294151 |39\r
12/03/2024	01007	\r
111418202243 |16\r
09/03/2024	01006	\r
111322364649 |37\r
07/03/2024	01005	\r
132033475354 |19\r
05/03/2024	01004	\r
121921232854 |31\r
02/03/2024	01003	\r
011921315055 |37\r
29/02/2024	01002	\r
041120385253 |33\r
27/02/2024	01001	\r
010406082435 |53\r
24/02/2024	01000	\r
010322273840 |26\r
22/02/2024	00999	\r
081924313555 |01\r
20/02/2024	00998	\r
344650515255 |05\r
17/02/2024	00997	\r
081217273855 |47\r
15/02/2024	00996	\r
030708182126 |19\r
13/02/2024	00995	\r
081722313449 |18\r
08/02/2024	00994	\r
223135363842 |11\r
06/02/2024	00993	\r
081927344651 |24\r
03/02/2024	00992	\r
040607131826 |49\r
01/02/2024	00991	\r
020710223240 |39\r
30/01/2024	00990	\r
031013404952 |09\r
27/01/2024	00989	\r
061238414655 |13\r
25/01/2024	00988	\r
131735384248 |07\r
23/01/2024	00987	\r
132732484951 |23\r
20/01/2024	00986	\r
062529344954 |38\r
18/01/2024	00985	\r
122033384052 |35\r
16/01/2024	00984	\r
091418202743 |42\r
13/01/2024	00983	\r
010507233542 |21\r
11/01/2024	00982	\r
022332445152 |28\r
09/01/2024	00981	\r
163245505253 |54\r
06/01/2024	00980	\r
151721243446 |11\r
04/01/2024	00979	\r
073437435254 |28\r
02/01/2024	00978	\r
020518313745 |20\r
30/12/2023	00977	\r
091729323852 |02\r
28/12/2023	00976	\r
202830404552 |32\r
26/12/2023	00975	\r
101417272940 |25\r
23/12/2023	00974	\r
223239464849 |43\r
21/12/2023	00973	\r
093139414748 |03\r
19/12/2023	00972	\r
111415243453 |18\r
16/12/2023	00971	\r
131521263435 |45\r
14/12/2023	00970	\r
011223434852 |30\r
12/12/2023	00969	\r
060716213450 |31\r
09/12/2023	00968	\r
060926273447 |41\r
07/12/2023	00967	\r
091328335053 |47\r
05/12/2023	00966	\r
020419323539 |49\r
02/12/2023	00965	\r
011020374851 |54\r
30/11/2023	00964	\r
091321285054 |51\r
28/11/2023	00963	\r
102447485255 |28\r
25/11/2023	00962	\r
070910172553 |49\r
23/11/2023	00961	\r
040626335255 |15\r
21/11/2023	00960	\r
030716373951 |09\r
18/11/2023	00959	\r
010710142829 |02\r
16/11/2023	00958	\r
030510184449 |28\r
14/11/2023	00957	\r
040912152238 |40\r
11/11/2023	00956	\r
020304194142 |23\r
09/11/2023	00955	\r
081724343948 |44\r
07/11/2023	00954	\r
121820283552 |25\r
04/11/2023	00953	\r
143537474850 |43\r
02/11/2023	00952	\r
091517212636 |13\r
31/10/2023	00951	\r
101617283742 |43\r
28/10/2023	00950	\r
111425444647 |10\r
26/10/2023	00949	\r
142232374348 |42\r
24/10/2023	00948	\r
122026334044 |24\r
21/10/2023	00947	\r
111624344752 |15\r
19/10/2023	00946	\r
012329375155 |54\r
17/10/2023	00945	\r
132233414647 |09\r
14/10/2023	00944	\r
082330343847 |10\r
12/10/2023	00943	\r
050809203650 |35\r
10/10/2023	00942	\r
062326374446 |33\r
07/10/2023	00941	\r
041336404352 |34\r
05/10/2023	00940	\r
012133464753 |09\r
03/10/2023	00939	\r
031527293748 |55\r
30/09/2023	00938	\r
031319303844 |51\r
28/09/2023	00937	\r
042336454750 |22\r
26/09/2023	00936	\r
142024274144 |23\r
23/09/2023	00935	\r
202736434547 |35\r
21/09/2023	00934	\r
162633344143 |53\r
19/09/2023	00933	\r
172935405152 |23\r
16/09/2023	00932	\r
252742515455 |45\r
14/09/2023	00931	\r
061020225052 |34\r
12/09/2023	00930	\r
263132394555 |28\r
09/09/2023	00929	\r
132032374349 |40\r
07/09/2023	00928	\r
010436424554 |32\r
05/09/2023	00927	\r
020619293448 |39\r
02/09/2023	00926	\r
121532444651 |48\r
31/08/2023	00925	\r
233337434546 |29\r
29/08/2023	00924	\r
010820253553 |54\r
26/08/2023	00923	\r
050824385051 |47\r
24/08/2023	00922	\r
011020414250 |39\r
22/08/2023	00921	\r
020306343536 |31\r
19/08/2023	00920	\r
070913222742 |23\r
17/08/2023	00919	\r
010525325152 |54\r
15/08/2023	00918	\r
051225394053 |52\r
12/08/2023	00917	\r
132439434552 |08\r
10/08/2023	00916	\r
041431424749 |43\r
08/08/2023	00915	\r
050619204045 |47\r
05/08/2023	00914	\r
223440474951 |44\r
03/08/2023	00913	\r
031222253739 |07\r
01/08/2023	00912	\r
041822253348 |02\r
29/07/2023	00911	\r
162325262940 |32\r
27/07/2023	00910	\r
031113313345 |27\r
25/07/2023	00909	\r
122342445152 |03\r
22/07/2023	00908	\r
091523252734 |41\r
20/07/2023	00907	\r
053436384750 |26\r
18/07/2023	00906	\r
101119284247 |16\r
15/07/2023	00905	\r
021631373848 |36\r
13/07/2023	00904	\r
030430343649 |08\r
11/07/2023	00903	\r
244044464749 |05\r
08/07/2023	00902	\r
081123434448 |41\r
06/07/2023	00901	\r
071229394655 |01\r
04/07/2023	00900	\r
041314233350 |41\r
01/07/2023	00899	\r
133336384550 |25\r
29/06/2023	00898	\r
011112284654 |40\r
27/06/2023	00897	\r
021215162728 |47\r
24/06/2023	00896	\r
080916205053 |03\r
22/06/2023	00895	\r
021114354351 |55\r
20/06/2023	00894	\r
072326313553 |32\r
17/06/2023	00893	\r
071323343840 |55\r
15/06/2023	00892	\r
101125394655 |40\r
13/06/2023	00891	\r
041418274750 |33\r
10/06/2023	00890	\r
101727323541 |54\r
08/06/2023	00889	\r
033638435153 |02\r
06/06/2023	00888	\r
011423274450 |43\r
03/06/2023	00887	\r
232829363841 |07\r
01/06/2023	00886	\r
031840414647 |36\r
30/05/2023	00885	\r
011424284046 |34\r
27/05/2023	00884	\r
040608183943 |28\r
25/05/2023	00883	\r
151619313346 |07\r
23/05/2023	00882	\r
262735364754 |40\r
20/05/2023	00881	\r
011421364853 |44\r
18/05/2023	00880	\r
131421233041 |49\r
16/05/2023	00879	\r
192430344044 |51\r
13/05/2023	00878	\r
222435434554 |50\r
11/05/2023	00877	\r
010319333451 |17\r
09/05/2023	00876	\r
070913224447 |39\r
06/05/2023	00875	\r
011122283442 |10\r
04/05/2023	00874	\r
133032354552 |29\r
02/05/2023	00873	\r
041118253345 |21\r
29/04/2023	00872	\r
020912244153 |35\r
27/04/2023	00871	\r
082838394145 |54\r
25/04/2023	00870	\r
061019232528 |45\r
22/04/2023	00869	\r
091823244852 |10\r
20/04/2023	00868	\r
071132354251 |46\r
18/04/2023	00867	\r
171830405155 |50\r
15/04/2023	00866	\r
013435364243 |05\r
13/04/2023	00865	\r
222628373948 |15\r
11/04/2023	00864	\r
101416183749 |54\r
08/04/2023	00863	\r
173336465052 |40\r
06/04/2023	00862	\r
071012335254 |16\r
04/04/2023	00861	\r
132841424751 |09\r
01/04/2023	00860	\r
123439444955 |14\r
30/03/2023	00859	\r
061114213032 |22\r
28/03/2023	00858	\r
062124415053 |13\r
25/03/2023	00857	\r
171828404954 |16\r
23/03/2023	00856	\r
040722334049 |39\r
21/03/2023	00855	\r
071731434549 |52\r
18/03/2023	00854	\r
182432335153 |36\r
16/03/2023	00853	\r
062334485055 |02\r
14/03/2023	00852	\r
141518202735 |31\r
11/03/2023	00851	\r
132325303544 |08\r
09/03/2023	00850	\r
122228345354 |40\r
07/03/2023	00849	\r
082225273950 |28\r
04/03/2023	00848	\r
091323363854 |21\r
02/03/2023	00847	\r
010323244348 |31\r
28/02/2023	00846	\r
021314304355 |22\r
25/02/2023	00845	\r
010214213851 |50\r
23/02/2023	00844	\r
121629313948 |40\r
21/02/2023	00843	\r
041215213044 |05\r
18/02/2023	00842	\r
112326294350 |05\r
16/02/2023	00841	\r
010507082022 |33\r
14/02/2023	00840	\r
010933374345 |23\r
11/02/2023	00839	\r
041345485254 |05\r
09/02/2023	00838	\r
011029304950 |09\r
07/02/2023	00837	\r
062729323952 |09\r
04/02/2023	00836	\r
020608274146 |20\r
02/02/2023	00835	\r
031023293453 |11\r
31/01/2023	00834	\r
101131323852 |05\r
28/01/2023	00833	\r
092223293847 |33\r
26/01/2023	00832	\r
081518203341 |14\r
24/01/2023	00831	\r
030510122930 |09\r
19/01/2023	00830	\r
032132333852 |30\r
17/01/2023	00829	\r
010920364450 |40\r
14/01/2023	00828	\r
051724304353 |26\r
12/01/2023	00827	\r
051437454755 |25\r
10/01/2023	00826	\r
051214194651 |36\r
07/01/2023	00825	\r
030409153354 |16\r
05/01/2023	00824	\r
051234374749 |28\r
03/01/2023	00823	\r
091324434748 |18\r
31/12/2022	00822	\r
101536424552 |20\r
29/12/2022	00821	\r
060833373851 |48\r
27/12/2022	00820	\r
111213142355 |27\r
24/12/2022	00819	\r
051922233044 |52\r
22/12/2022	00818	\r
142635434548 |03\r
20/12/2022	00817	\r
020609203135 |42\r
17/12/2022	00816	\r
010229344142 |09\r
15/12/2022	00815	\r
022538505155 |21\r
13/12/2022	00814	\r
102231374152 |20\r
10/12/2022	00813	\r
021213183344 |31\r
08/12/2022	00812	\r
063036414955 |20\r
06/12/2022	00811	\r
011125444546 |35\r
03/12/2022	00810	\r
161727485253 |24\r
01/12/2022	00809	\r
111429315254 |07\r
29/11/2022	00808	\r
021316184142 |19\r
26/11/2022	00807	\r
082324484952 |01\r
24/11/2022	00806	\r
040618275253 |10\r
22/11/2022	00805	\r
030921222635 |15\r
19/11/2022	00804	\r
031522394648 |43\r
17/11/2022	00803	\r
011925273842 |54\r
15/11/2022	00802	\r
042026364751 |33\r
12/11/2022	00801	\r
081823303542 |43\r
10/11/2022	00800	\r
081114273845 |21\r
08/11/2022	00799	\r
122733444850 |18\r
05/11/2022	00798	\r
101922254753 |52\r
03/11/2022	00797	\r
081324282933 |49\r
01/11/2022	00796	\r
030920233154 |55\r
29/10/2022	00795	\r
010310131520 |32\r
27/10/2022	00794	\r
010710171930 |53\r
25/10/2022	00793	\r
081820224246 |01\r
22/10/2022	00792	\r
171935425152 |34\r
20/10/2022	00791	\r
152127343753 |29\r
18/10/2022	00790	\r
063036394446 |49\r
15/10/2022	00789	\r
081516394551 |23\r
13/10/2022	00788	\r
121343485152 |15\r
11/10/2022	00787	\r
112634404652 |01\r
08/10/2022	00786	\r
111723344151 |40\r
06/10/2022	00785	\r
060819204753 |07\r
04/10/2022	00784	\r
051112224345 |42\r
01/10/2022	00783	\r
141516222329 |20\r
29/09/2022	00782	\r
153233374254 |28\r
27/09/2022	00781	\r
111323273743 |34\r
24/09/2022	00780	\r
010405174247 |09\r
22/09/2022	00779	\r
121419294447 |26\r
20/09/2022	00778	\r
082732435354 |45\r
17/09/2022	00777	\r
050819344049 |39\r
15/09/2022	00776	\r
030819304152 |09\r
13/09/2022	00775	\r
091021404148 |54\r
10/09/2022	00774	\r
020815193538 |14\r
08/09/2022	00773	\r
091323323652 |43\r
06/09/2022	00772	\r
010527435254 |15\r
03/09/2022	00771	\r
112231334046 |41\r
01/09/2022	00770	\r
041418395053 |31\r
30/08/2022	00769	\r
021319293032 |16\r
27/08/2022	00768	\r
010507102548 |36\r
25/08/2022	00767	\r
193035404953 |42\r
23/08/2022	00766	\r
132131414445 |27\r
20/08/2022	00765	\r
061629324251 |43\r
18/08/2022	00764	\r
232731373842 |26\r
16/08/2022	00763	\r
171828475053 |11\r
13/08/2022	00762	\r
192829303336 |14\r
11/08/2022	00761	\r
011221344855 |50\r
09/08/2022	00760	\r
091036415155 |52\r
06/08/2022	00759	\r
062127415153 |43\r
04/08/2022	00758	\r
080920414854 |02\r
02/08/2022	00757	\r
020528404748 |31\r
30/07/2022	00756	\r
010424354447 |17\r
28/07/2022	00755	\r
050617282939 |34\r
26/07/2022	00754	\r
050809131447 |53\r
23/07/2022	00753	\r
272829394054 |13\r
21/07/2022	00752	\r
022033455155 |01\r
19/07/2022	00751	\r
080933343552 |36\r
16/07/2022	00750	\r
061318273446 |33\r
14/07/2022	00749	\r
112529373952 |45\r
12/07/2022	00748	\r
121324253941 |09\r
09/07/2022	00747	\r
052124475255 |20\r
07/07/2022	00746	\r
182432434855 |15\r
05/07/2022	00745	\r
050712262944 |38\r
02/07/2022	00744	\r
062639404647 |02\r
30/06/2022	00743	\r
051115192931 |35\r
28/06/2022	00742	\r
052230323855 |33\r
25/06/2022	00741	\r
141731353740 |28\r
23/06/2022	00740	\r
102223344654 |27\r
21/06/2022	00739	\r
091319213451 |35\r
18/06/2022	00738	\r
062743444547 |33\r
16/06/2022	00737	\r
091321405154 |04\r
14/06/2022	00736	\r
021526323536 |16\r
11/06/2022	00735	\r
101823254547 |38\r
09/06/2022	00734	\r
303135434850 |22\r
07/06/2022	00733	\r
161721283950 |19\r
04/06/2022	00732	\r
031727303449 |25\r
02/06/2022	00731	\r
071128303350 |49\r
31/05/2022	00730	\r
041015164751 |23\r
28/05/2022	00729	\r
333638424346 |03\r
26/05/2022	00728	\r
043032394153 |42\r
24/05/2022	00727	\r
183132465052 |28\r
21/05/2022	00726	\r
193238404548 |02\r
19/05/2022	00725	\r
030631404754 |08\r
17/05/2022	00724	\r
111725294548 |53\r
14/05/2022	00723	\r
022830434455 |22\r
12/05/2022	00722	\r
091824434450 |15\r
10/05/2022	00721	\r
121841434751 |10\r
07/05/2022	00720	\r
153233364346 |31\r
05/05/2022	00719	\r
272933394753 |55\r
03/05/2022	00718	\r
012238484953 |42\r
30/04/2022	00717	\r
112351525354 |27\r
28/04/2022	00716	\r
082425323744 |03\r
26/04/2022	00715	\r
142224254349 |17\r
23/04/2022	00714	\r
032736414955 |18\r
21/04/2022	00713	\r
212427343842 |46\r
19/04/2022	00712	\r
020713282934 |39\r
16/04/2022	00711	\r
040839415355 |52\r
14/04/2022	00710	\r
010509343745 |52\r
12/04/2022	00709	\r
111820222540 |05\r
09/04/2022	00708	\r
020319284245 |12\r
07/04/2022	00707	\r
061415252932 |41\r
05/04/2022	00706	\r
051826364344 |45\r
02/04/2022	00705	\r
323842444755 |46\r
31/03/2022	00704	\r
052434394249 |16\r
29/03/2022	00703	\r
051132354052 |31\r
26/03/2022	00702	\r
010616303455 |29\r
24/03/2022	00701	\r
050916354546 |44\r
22/03/2022	00700	\r
011418284749 |22\r
19/03/2022	00699	\r
082024375155 |27\r
17/03/2022	00698	\r
010612213749 |53\r
15/03/2022	00697	\r
061424283352 |50\r
12/03/2022	00696	\r
121618263045 |36\r
10/03/2022	00695	\r
010308161936 |41\r
08/03/2022	00694	\r
032325394748 |55\r
05/03/2022	00693	\r
051215254348 |01\r
03/03/2022	00692	\r
041016252643 |52\r
01/03/2022	00691	\r
151925425153 |02\r
26/02/2022	00690	\r
050830364951 |18\r
24/02/2022	00689	\r
021525303132 |13\r
22/02/2022	00688	\r
091619232539 |04\r
19/02/2022	00687	\r
011114334648 |40\r
17/02/2022	00686	\r
052440424654 |03\r
15/02/2022	00685	\r
050714242936 |46\r
12/02/2022	00684	\r
040812424451 |41\r
10/02/2022	00683	\r
031526354352 |07\r
08/02/2022	00682	\r
121521283240 |43\r
05/02/2022	00681	\r
011723294445 |37\r
03/02/2022	00680	\r
131822354243 |03\r
29/01/2022	00679	\r
061017232538 |21\r
27/01/2022	00678	\r
012631364046 |28\r
25/01/2022	00677	\r
021617203151 |50\r
22/01/2022	00676	\r
020616293742 |22\r
20/01/2022	00675	\r
082132344146 |48\r
18/01/2022	00674	\r
061516334143 |51\r
15/01/2022	00673	\r
202641464748 |18\r
13/01/2022	00672	\r
071217263746 |28\r
11/01/2022	00671	\r
122526283346 |22\r
08/01/2022	00670	\r
061737414850 |13\r
06/01/2022	00669	\r
040814213049 |38\r
04/01/2022	00668	\r
111722283949 |43\r
01/01/2022	00667	\r
042528323355 |03\r
30/12/2021	00666	\r
092527323746 |23\r
28/12/2021	00665	\r
030809404448 |02\r
25/12/2021	00664	\r
060823253335 |27\r
23/12/2021	00663	\r
082229434554 |23\r
21/12/2021	00662	\r
232528495254 |44\r
18/12/2021	00661	\r
040619263841 |16\r
16/12/2021	00660	\r
192430414349 |55\r
14/12/2021	00659	\r
101619243950 |29\r
11/12/2021	00658	\r
081317224251 |45\r
09/12/2021	00657	\r
031433404150 |17\r
07/12/2021	00656	\r
040622323453 |41\r
04/12/2021	00655	\r
070931323649 |37\r
02/12/2021	00654	\r
062328314448 |14\r
30/11/2021	00653	\r
122123283346 |38\r
27/11/2021	00652	\r
020507213137 |44\r
25/11/2021	00651	\r
161824293341 |43\r
23/11/2021	00650	\r
050709283855 |50\r
20/11/2021	00649	\r
061029303151 |35\r
18/11/2021	00648	\r
183032373940 |10\r
16/11/2021	00647	\r
081927344651 |02\r
13/11/2021	00646	\r
182229334648 |37\r
11/11/2021	00645	\r
033537414549 |31\r
09/11/2021	00644	\r
122526475153 |16\r
06/11/2021	00643	\r
233141484951 |03\r
04/11/2021	00642	\r
051015313250 |28\r
02/11/2021	00641	\r
373842464755 |23\r
30/10/2021	00640	\r
313640445053 |11\r
28/10/2021	00639	\r
020406133135 |16\r
26/10/2021	00638	\r
212429343953 |20\r
23/10/2021	00637	\r
051119262833 |09\r
21/10/2021	00636	\r
031932364151 |35\r
19/10/2021	00635	\r
030925294650 |18\r
16/10/2021	00634	\r
091722285055 |07\r
14/10/2021	00633	\r
092124304144 |40\r
12/10/2021	00632	\r
141731334250 |40\r
09/10/2021	00631	\r
012225383954 |19\r
07/10/2021	00630	\r
061521244555 |46\r
05/10/2021	00629	\r
111617193843 |24\r
02/10/2021	00628	\r
050622264951 |32\r
30/09/2021	00627	\r
182326324649 |54\r
28/09/2021	00626	\r
072225404950 |37\r
25/09/2021	00625	\r
072027434851 |37\r
23/09/2021	00624	\r
060721252749 |26\r
21/09/2021	00623	\r
152425404250 |49\r
18/09/2021	00622	\r
031415214752 |54\r
16/09/2021	00621	\r
101640434546 |22\r
14/09/2021	00620	\r
172230404344 |41\r
11/09/2021	00619	\r
081720363944 |30\r
09/09/2021	00618	\r
060810233944 |43\r
07/09/2021	00617	\r
193035434755 |12\r
04/09/2021	00616	\r
111232424351 |31\r
02/09/2021	00615	\r
010812262845 |43\r
31/08/2021	00614	\r
072037475153 |05\r
28/08/2021	00613	\r
101626273448 |51\r
26/08/2021	00612	\r
111320515355 |04\r
24/08/2021	00611	\r
020407183035 |20\r
21/08/2021	00610	\r
222427373848 |14\r
19/08/2021	00609	\r
050912204351 |13\r
22/07/2021	00608	\r
022024394653 |55\r
20/07/2021	00607	\r
020811131726 |53\r
17/07/2021	00606	\r
020711213142 |45\r
15/07/2021	00605	\r
030412163050 |20\r
13/07/2021	00604	\r
051118273443 |42\r
10/07/2021	00603	\r
070817374748 |27\r
08/07/2021	00602	\r
033234424454 |35\r
06/07/2021	00601	\r
172022243054 |51\r
03/07/2021	00600	\r
042530385055 |53\r
01/07/2021	00599	\r
041528304952 |55\r
29/06/2021	00598	\r
051424364455 |48\r
26/06/2021	00597	\r
061617204952 |27\r
24/06/2021	00596	\r
031617244144 |37\r
22/06/2021	00595	\r
030932334143 |40\r
19/06/2021	00594	\r
010307132845 |33\r
17/06/2021	00593	\r
182338414455 |40\r
15/06/2021	00592	\r
111821223055 |35\r
12/06/2021	00591	\r
041617202744 |30\r
10/06/2021	00590	\r
112224274354 |45\r
08/06/2021	00589	\r
162833414254 |12\r
05/06/2021	00588	\r
142225394152 |17\r
03/06/2021	00587	\r
040821242647 |43\r
01/06/2021	00586	\r
061214274345 |38\r
29/05/2021	00585	\r
021131374355 |14\r
27/05/2021	00584	\r
030718224046 |14\r
25/05/2021	00583	\r
061033353643 |08\r
22/05/2021	00582	\r
152737454652 |31\r
20/05/2021	00581	\r
071012194254 |24\r
18/05/2021	00580	\r
060722323847 |27\r
15/05/2021	00579	\r
010506132327 |46\r
13/05/2021	00578	\r
132425353941 |29\r
11/05/2021	00577	\r
011441444653 |48\r
08/05/2021	00576	\r
142326374251 |40\r
06/05/2021	00575	\r
151924314453 |32\r
04/05/2021	00574	\r
072445484953 |14\r
01/05/2021	00573	\r
030714224142 |10\r
29/04/2021	00572	\r
030923334244 |50\r
27/04/2021	00571	\r
030922263237 |41\r
24/04/2021	00570	\r
010405212544 |45\r
22/04/2021	00569	\r
051117253948 |22\r
20/04/2021	00568	\r
182538434751 |11\r
17/04/2021	00567	\r
041516294246 |36\r
15/04/2021	00566	\r
050827424751 |36\r
13/04/2021	00565	\r
253339454955 |36\r
10/04/2021	00564	\r
121316172747 |49\r
08/04/2021	00563	\r
081116222830 |45\r
06/04/2021	00562	\r
273334384648 |05\r
03/04/2021	00561	\r
020434384155 |19\r
01/04/2021	00560	\r
131824343854 |08\r
30/03/2021	00559	\r
021117194751 |22\r
27/03/2021	00558	\r
051117202637 |12\r
25/03/2021	00557	\r
192024293639 |22\r
23/03/2021	00556	\r
091317333453 |31\r
20/03/2021	00555	\r
161820253536 |17\r
18/03/2021	00554	\r
172438414654 |51\r
16/03/2021	00553	\r
033145464954 |40\r
13/03/2021	00552	\r
071920233655 |09\r
11/03/2021	00551	\r
040512254344 |27\r
09/03/2021	00550	\r
151829354754 |20\r
06/03/2021	00549	\r
182434394655 |04\r
04/03/2021	00548	\r
020921233341 |45\r
02/03/2021	00547	\r
232945464951 |01\r
27/02/2021	00546	\r
061124305052 |22\r
25/02/2021	00545	\r
091932404551 |01\r
23/02/2021	00544	\r
161921233048 |06\r
20/02/2021	00543	\r
010204323439 |20\r
18/02/2021	00542	\r
020510222647 |53\r
16/02/2021	00541	\r
041011212344 |50\r
13/02/2021	00540	\r
031114313442 |24\r
09/02/2021	00539	\r
152021293141 |34\r
06/02/2021	00538	\r
062232333553 |12\r
04/02/2021	00537	\r
284344505153 |13\r
02/02/2021	00536	\r
041331364054 |30\r
30/01/2021	00535	\r
020717182129 |19\r
28/01/2021	00534	\r
030416344055 |02\r
26/01/2021	00533	\r
071632424447 |35\r
23/01/2021	00532	\r
123139414555 |34\r
21/01/2021	00531	\r
092022314752 |18\r
19/01/2021	00530	\r
052225434853 |18\r
16/01/2021	00529	\r
131528293244 |49\r
14/01/2021	00528	\r
010442444650 |09\r
12/01/2021	00527	\r
192329344453 |35\r
09/01/2021	00526	\r
101924294648 |05\r
07/01/2021	00525	\r
071122384851 |53\r
05/01/2021	00524	\r
050709224254 |47\r
02/01/2021	00523	\r
071923263545 |11\r
31/12/2020	00522	\r
021525273751 |53\r
29/12/2020	00521	\r
040811151741 |23\r
26/12/2020	00520	\r
012433414351 |48\r
24/12/2020	00519	\r
111934414448 |43\r
22/12/2020	00518	\r
101116293538 |03\r
19/12/2020	00517	\r
142032343749 |31\r
17/12/2020	00516	\r
152527354048 |45\r
15/12/2020	00515	\r
101113353849 |14\r
12/12/2020	00514	\r
031432364146 |54\r
10/12/2020	00513	\r
033134364454 |45\r
08/12/2020	00512	\r
021732333845 |37\r
05/12/2020	00511	\r
102829303738 |36\r
03/12/2020	00510	\r
051932414245 |17\r
01/12/2020	00509	\r
061012243443 |15\r
28/11/2020	00508	\r
012036444549 |52\r
26/11/2020	00507	\r
181929313652 |50\r
24/11/2020	00506	\r
040719202253 |23\r
21/11/2020	00505	\r
081419204951 |28\r
19/11/2020	00504	\r
121523284548 |43\r
17/11/2020	00503	\r
061727343651 |48\r
14/11/2020	00502	\r
051115344448 |35\r
12/11/2020	00501	\r
042022254347 |12\r
10/11/2020	00500	\r
020519394853 |06\r
07/11/2020	00499	\r
122830334552 |15\r
05/11/2020	00498	\r
010206183451 |52\r
03/11/2020	00497	\r
022227464852 |23\r
31/10/2020	00496	\r
081819204354 |50\r
29/10/2020	00495	\r
091114162123 |54\r
27/10/2020	00494	\r
033133363839 |08\r
24/10/2020	00493	\r
122122274150 |34\r
22/10/2020	00492	\r
020312212438 |14\r
20/10/2020	00491	\r
083338474954 |31\r
17/10/2020	00490	\r
031425374954 |53\r
15/10/2020	00489	\r
083841475052 |45\r
13/10/2020	00488	\r
121928295253 |20\r
10/10/2020	00487	\r
051047505354 |22\r
08/10/2020	00486	\r
101820212651 |52\r
06/10/2020	00485	\r
111429323340 |35\r
03/10/2020	00484	\r
121422233944 |28\r
01/10/2020	00483	\r
030607193854 |50\r
29/09/2020	00482	\r
010607133055 |34\r
26/09/2020	00481	\r
071013154048 |01\r
24/09/2020	00480	\r
122841425253 |50\r
22/09/2020	00479	\r
050815183645 |06\r
19/09/2020	00478	\r
040708293141 |38\r
17/09/2020	00477	\r
010528434453 |49\r
15/09/2020	00476	\r
131415172653 |21\r
12/09/2020	00475	\r
202124303144 |40\r
10/09/2020	00474	\r
182527374550 |52\r
08/09/2020	00473	\r
224748525355 |14\r
05/09/2020	00472	\r
091219223146 |20\r
03/09/2020	00471	\r
070918223554 |50\r
01/09/2020	00470	\r
112224474953 |03\r
29/08/2020	00469	\r
010414283553 |02\r
25/08/2020	00468	\r
213536384447 |14\r
22/08/2020	00467	\r
012024263551 |12\r
20/08/2020	00466	\r
141828323336 |41\r
18/08/2020	00465	\r
224144465152 |02\r
15/08/2020	00464	\r
011129304151 |04\r
13/08/2020	00463	\r
032528444954 |19\r
11/08/2020	00462	\r
021233395253 |44\r
08/08/2020	00461	\r
031224263643 |08\r
06/08/2020	00460	\r
020521242627 |11\r
04/08/2020	00459	\r
101520213251 |08\r
01/08/2020	00458	\r
131829304047 |04\r
30/07/2020	00457	\r
060716262954 |04\r
28/07/2020	00456	\r
031120344454 |16\r
25/07/2020	00455	\r
021921345455 |24\r
23/07/2020	00454	\r
041231474952 |02\r
21/07/2020	00453	\r
061431373844 |04\r
18/07/2020	00452	\r
031322283053 |16\r
16/07/2020	00451	\r
020511202432 |06\r
14/07/2020	00450	\r
052232344351 |12\r
11/07/2020	00449	\r
030406142038 |35\r
09/07/2020	00448	\r
031011172654 |21\r
07/07/2020	00447	\r
072432354850 |01\r
04/07/2020	00446	\r
030910182945 |36\r
02/07/2020	00445	\r
041020384853 |05\r
30/06/2020	00444	\r
051118192021 |52\r
27/06/2020	00443	\r
020638475053 |14\r
25/06/2020	00442	\r
091012192740 |55\r
23/06/2020	00441	\r
021828465254 |19\r
20/06/2020	00440	\r
050933434450 |46\r
18/06/2020	00439	\r
051827455054 |09\r
16/06/2020	00438	\r
021516233354 |45\r
13/06/2020	00437	\r
070911304353 |10\r
11/06/2020	00436	\r
032125323552 |34\r
09/06/2020	00435	\r
010308224248 |44\r
06/06/2020	00434	\r
081224323551 |21\r
04/06/2020	00433	\r
061216343954 |19\r
02/06/2020	00432	\r
041931424855 |22\r
30/05/2020	00431	\r
121341424853 |20\r
28/05/2020	00430	\r
010408214449 |52\r
26/05/2020	00429	\r
111223243447 |43\r
23/05/2020	00428	\r
041327475055 |31\r
21/05/2020	00427	\r
021522253046 |10\r
19/05/2020	00426	\r
051516194955 |03\r
16/05/2020	00425	\r
193538495255 |01\r
14/05/2020	00424	\r
072329475155 |12\r
12/05/2020	00423	\r
010825343844 |28\r
09/05/2020	00422	\r
181930394546 |11\r
07/05/2020	00421	\r
091928303254 |22\r
05/05/2020	00420	\r
010413151820 |22\r
02/05/2020	00419	\r
020609164353 |19\r
30/04/2020	00418	\r
123132333941 |14\r
28/04/2020	00417	\r
040610163046 |34\r
25/04/2020	00416	\r
041824305355 |13\r
31/03/2020	00415	\r
121940414353 |23\r
28/03/2020	00414	\r
011011132755 |19\r
26/03/2020	00413	\r
070811313536 |45\r
24/03/2020	00412	\r
030920213352 |50\r
21/03/2020	00411	\r
101214172953 |25\r
19/03/2020	00410	\r
033541424349 |31\r
17/03/2020	00409	\r
011418434950 |08\r
14/03/2020	00408	\r
122025383940 |37\r
12/03/2020	00407	\r
021419242734 |48\r
10/03/2020	00406	\r
232530364552 |53\r
07/03/2020	00405	\r
051121304048 |20\r
05/03/2020	00404	\r
080934404154 |13\r
03/03/2020	00403	\r
141531404349 |12\r
29/02/2020	00402	\r
091723265154 |32\r
27/02/2020	00401	\r
031121294755 |50\r
25/02/2020	00400	\r
051321363948 |06\r
22/02/2020	00399	\r
072432495154 |44\r
20/02/2020	00398	\r
010320333651 |49\r
18/02/2020	00397	\r
273236374748 |50\r
15/02/2020	00396	\r
263637384249 |46\r
13/02/2020	00395	\r
252832343539 |07\r
11/02/2020	00394	\r
041418213253 |02\r
08/02/2020	00393	\r
091219254154 |38\r
06/02/2020	00392	\r
131834364549 |37\r
04/02/2020	00391	\r
061020475255 |46\r
01/02/2020	00390	\r
020311233554 |06\r
30/01/2020	00389	\r
121828304750 |41\r
28/01/2020	00388	\r
012024334055 |46\r
23/01/2020	00387	\r
091518253149 |46\r
21/01/2020	00386	\r
143145475254 |13\r
18/01/2020	00385	\r
131819233243 |11\r
16/01/2020	00384	\r
101126334446 |55\r
14/01/2020	00383	\r
030417395051 |53\r
11/01/2020	00382	\r
081117192547 |53\r
09/01/2020	00381	\r
172021295254 |51\r
07/01/2020	00380	\r
081116224254 |13\r
04/01/2020	00379	\r
041426424455 |48\r
02/01/2020	00378	\r
121426293340 |50\r
31/12/2019	00377	\r
022226284455 |27\r
28/12/2019	00376	\r
101726282932 |21\r
26/12/2019	00375	\r
050612182354 |26\r
24/12/2019	00374	\r
031630345055 |48\r
21/12/2019	00373	\r
050820343742 |51\r
19/12/2019	00372	\r
182225282934 |50\r
17/12/2019	00371	\r
040514192237 |43\r
14/12/2019	00370	\r
033033344047 |26\r
12/12/2019	00369	\r
010915424950 |48\r
10/12/2019	00368	\r
052033424349 |26\r
07/12/2019	00367	\r
071838424751 |08\r
05/12/2019	00366	\r
091116273540 |51\r
03/12/2019	00365	\r
212936415052 |42\r
30/11/2019	00364	\r
080910324450 |15\r
28/11/2019	00363	\r
011826285355 |14\r
26/11/2019	00362	\r
071938414247 |04\r
23/11/2019	00361	\r
072930455055 |15\r
21/11/2019	00360	\r
212435384247 |34\r
19/11/2019	00359	\r
192133353840 |04\r
16/11/2019	00358	\r
060818224952 |10\r
14/11/2019	00357	\r
091216364155 |35\r
12/11/2019	00356	\r
101724273639 |33\r
09/11/2019	00355	\r
010306252941 |12\r
07/11/2019	00354	\r
011219374452 |18\r
05/11/2019	00353	\r
030616174450 |28\r
02/11/2019	00352	\r
021534354850 |32\r
31/10/2019	00351	\r
181922374748 |46\r
29/10/2019	00350	\r
121516314355 |11\r
26/10/2019	00349	\r
182022505153 |35\r
24/10/2019	00348	\r
091423414550 |13\r
22/10/2019	00347	\r
021626273640 |31\r
19/10/2019	00346	\r
011021264243 |25\r
17/10/2019	00345	\r
051114345153 |16\r
15/10/2019	00344	\r
091229464853 |03\r
12/10/2019	00343	\r
213948515355 |05\r
10/10/2019	00342	\r
041742515355 |29\r
08/10/2019	00341	\r
083639434850 |40\r
05/10/2019	00340	\r
102930313751 |50\r
03/10/2019	00339	\r
040708263744 |29\r
01/10/2019	00338	\r
052238414749 |29\r
28/09/2019	00337	\r
040821234043 |44\r
26/09/2019	00336	\r
071238435155 |15\r
24/09/2019	00335	\r
123339404853 |35\r
21/09/2019	00334	\r
020523304245 |34\r
19/09/2019	00333	\r
020822343941 |13\r
17/09/2019	00332	\r
031426384347 |10\r
14/09/2019	00331	\r
103642444554 |14\r
12/09/2019	00330	\r
182932334549 |40\r
10/09/2019	00329	\r
060919395054 |37\r
07/09/2019	00328	\r
071731353846 |16\r
05/09/2019	00327	\r
202427303345 |21\r
03/09/2019	00326	\r
131429354155 |25\r
31/08/2019	00325	\r
132023325152 |42\r
29/08/2019	00324	\r
101112232748 |09\r
27/08/2019	00323	\r
162229334647 |55\r
24/08/2019	00322	\r
192034404951 |01\r
22/08/2019	00321	\r
040716173039 |27\r
20/08/2019	00320	\r
103038485455 |46\r
17/08/2019	00319	\r
091124263853 |41\r
15/08/2019	00318	\r
192531323947 |08\r
13/08/2019	00317	\r
040816273240 |23\r
10/08/2019	00316	\r
071736424350 |44\r
08/08/2019	00315	\r
010617182141 |22\r
06/08/2019	00314	\r
091119202642 |17\r
03/08/2019	00313	\r
132425262730 |04\r
01/08/2019	00312	\r
011839454849 |26\r
30/07/2019	00311	\r
030812213251 |07\r
27/07/2019	00310	\r
020325334450 |17\r
25/07/2019	00309	\r
033134415253 |16\r
23/07/2019	00308	\r
051021323952 |41\r
20/07/2019	00307	\r
151825324252 |10\r
18/07/2019	00306	\r
042429313941 |38\r
16/07/2019	00305	\r
041219313340 |51\r
13/07/2019	00304	\r
052329455052 |01\r
11/07/2019	00303	\r
060915263538 |34\r
09/07/2019	00302	\r
041725404251 |02\r
06/07/2019	00301	\r
052936394653 |48\r
04/07/2019	00300	\r
040514465254 |03\r
02/07/2019	00299	\r
020933455254 |01\r
29/06/2019	00298	\r
061019313443 |37\r
27/06/2019	00297	\r
092932444953 |05\r
25/06/2019	00296	\r
031434354049 |23\r
22/06/2019	00295	\r
010923284254 |49\r
20/06/2019	00294	\r
091523414951 |52\r
18/06/2019	00293	\r
243145464754 |04\r
15/06/2019	00292	\r
132340455255 |09\r
13/06/2019	00291	\r
060915222953 |25\r
11/06/2019	00290	\r
020513203049 |35\r
08/06/2019	00289	\r
020810232735 |47\r
06/06/2019	00288	\r
101330365154 |16\r
04/06/2019	00287	\r
182024263341 |55\r
01/06/2019	00286	\r
102431414247 |20\r
30/05/2019	00285	\r
173133343740 |35\r
28/05/2019	00284	\r
152231323337 |51\r
25/05/2019	00283	\r
041235445055 |19\r
23/05/2019	00282	\r
132133425355 |44\r
21/05/2019	00281	\r
111229313753 |41\r
18/05/2019	00280	\r
061013182938 |53\r
16/05/2019	00279	\r
082830334043 |24\r
14/05/2019	00278	\r
061115213040 |10\r
11/05/2019	00277	\r
061120222628 |36\r
09/05/2019	00276	\r
192148495455 |27\r
07/05/2019	00275	\r
030607080949 |24\r
04/05/2019	00274	\r
010203172653 |50\r
02/05/2019	00273	\r
021016173336 |20\r
30/04/2019	00272	\r
030513404145 |52\r
27/04/2019	00271	\r
011122263351 |04\r
25/04/2019	00270	\r
162223333638 |45\r
23/04/2019	00269	\r
202122314345 |30\r
20/04/2019	00268	\r
081012244044 |51\r
18/04/2019	00267	\r
070815242648 |10\r
16/04/2019	00266	\r
162932335253 |05\r
13/04/2019	00265	\r
091320213643 |32\r
11/04/2019	00264	\r
010831323755 |53\r
09/04/2019	00263	\r
101419364849 |03\r
06/04/2019	00262	\r
012030414650 |48\r
04/04/2019	00261	\r
162629384751 |13\r
02/04/2019	00260	\r
010409202226 |48\r
30/03/2019	00259	\r
031518355054 |32\r
28/03/2019	00258	\r
032337434449 |27\r
26/03/2019	00257	\r
151928404448 |14\r
23/03/2019	00256	\r
030930414652 |22\r
21/03/2019	00255	\r
071832424653 |28\r
19/03/2019	00254	\r
082832354045 |34\r
16/03/2019	00253	\r
101822243540 |53\r
14/03/2019	00252	\r
182125354453 |04\r
12/03/2019	00251	\r
091626344449 |19\r
09/03/2019	00250	\r
182431343544 |52\r
07/03/2019	00249	\r
021420334147 |27\r
05/03/2019	00248	\r
011523515355 |26\r
02/03/2019	00247	\r
010203204648 |31\r
28/02/2019	00246	\r
041519344042 |49\r
26/02/2019	00245	\r
080916344243 |45\r
23/02/2019	00244	\r
161930394352 |21\r
21/02/2019	00243	\r
031011152934 |50\r
19/02/2019	00242	\r
121822293252 |51\r
16/02/2019	00241	\r
050814283740 |41\r
14/02/2019	00240	\r
081526414353 |46\r
12/02/2019	00239	\r
011217344849 |47\r
09/02/2019	00238	\r
021415444650 |18\r
07/02/2019	00237	\r
202728324750 |41\r
02/02/2019	00236	\r
112327353646 |37\r
31/01/2019	00235	\r
101920283444 |29\r
29/01/2019	00234	\r
152026414555 |10\r
26/01/2019	00233	\r
202733435354 |48\r
24/01/2019	00232	\r
313538444955 |24\r
22/01/2019	00231	\r
011422405255 |21\r
19/01/2019	00230	\r
132942465153 |36\r
17/01/2019	00229	\r
131422343555 |54\r
15/01/2019	00228	\r
040613222930 |52\r
12/01/2019	00227	\r
071314264254 |11\r
10/01/2019	00226	\r
122231354047 |08\r
08/01/2019	00225	\r
030509114548 |40\r
05/01/2019	00224	\r
101138475355 |51\r
03/01/2019	00223	\r
233137454954 |18\r
01/01/2019	00222	\r
021921273746 |12\r
29/12/2018	00221	\r
083642435052 |30\r
27/12/2018	00220	\r
052033424350 |40\r
25/12/2018	00219	\r
030917212351 |15\r
22/12/2018	00218	\r
030816353952 |29\r
20/12/2018	00217	\r
081724333444 |55\r
18/12/2018	00216	\r
010915172526 |08\r
15/12/2018	00215	\r
141749525355 |12\r
13/12/2018	00214	\r
021114364955 |53\r
11/12/2018	00213	\r
010511373944 |31\r
08/12/2018	00212	\r
030609314854 |53\r
06/12/2018	00211	\r
091323273942 |49\r
04/12/2018	00210	\r
101316233049 |24\r
01/12/2018	00209	\r
030512202533 |41\r
29/11/2018	00208	\r
102327425152 |20\r
27/11/2018	00207	\r
030523283544 |08\r
24/11/2018	00206	\r
031011254054 |17\r
22/11/2018	00205	\r
172224283744 |06\r
20/11/2018	00204	\r
092333404449 |17\r
17/11/2018	00203	\r
122226294547 |15\r
15/11/2018	00202	\r
131621404952 |54\r
13/11/2018	00201	\r
032526324147 |05\r
10/11/2018	00200	\r
030519222939 |15\r
08/11/2018	00199	\r
222831395253 |14\r
06/11/2018	00198	\r
192223434753 |03\r
03/11/2018	00197	\r
141720232545 |34\r
01/11/2018	00196	\r
031115424454 |41\r
30/10/2018	00195	\r
011222273039 |46\r
27/10/2018	00194	\r
080915214449 |16\r
25/10/2018	00193	\r
162329314548 |19\r
23/10/2018	00192	\r
010306132130 |36\r
20/10/2018	00191	\r
020510173541 |21\r
18/10/2018	00190	\r
011122344247 |30\r
16/10/2018	00189	\r
052829344246 |17\r
13/10/2018	00188	\r
122123444748 |43\r
11/10/2018	00187	\r
051617374649 |35\r
09/10/2018	00186	\r
102746505155 |01\r
06/10/2018	00185	\r
050616424851 |03\r
04/10/2018	00184	\r
030912173442 |46\r
02/10/2018	00183	\r
030728323337 |22\r
29/09/2018	00182	\r
030712323455 |38\r
27/09/2018	00181	\r
081229355154 |34\r
25/09/2018	00180	\r
020306131417 |09\r
22/09/2018	00179	\r
010817284050 |21\r
20/09/2018	00178	\r
033235464749 |51\r
18/09/2018	00177	\r
082132434853 |38\r
15/09/2018	00176	\r
020528304650 |49\r
13/09/2018	00175	\r
040607264044 |09\r
11/09/2018	00174	\r
131728424549 |50\r
08/09/2018	00173	\r
091112243543 |15\r
06/09/2018	00172	\r
041115212427 |07\r
04/09/2018	00171	\r
081820293437 |51\r
01/09/2018	00170	\r
020820212836 |05\r
30/08/2018	00169	\r
052228424954 |36\r
28/08/2018	00168	\r
021015313948 |23\r
25/08/2018	00167	\r
101115324048 |27\r
23/08/2018	00166	\r
141827383953 |02\r
21/08/2018	00165	\r
091214233246 |31\r
18/08/2018	00164	\r
073336395155 |11\r
16/08/2018	00163	\r
061034464851 |47\r
14/08/2018	00162	\r
293036384552 |46\r
11/08/2018	00161	\r
161731334244 |14\r
09/08/2018	00160	\r
242932334955 |09\r
07/08/2018	00159	\r
030915203949 |04\r
04/08/2018	00158	\r
111224324148 |03\r
02/08/2018	00157	\r
061116174155 |07\r
31/07/2018	00156	\r
010527314750 |41\r
28/07/2018	00155	\r
111622253040 |09\r
26/07/2018	00154	\r
212433374046 |52\r
24/07/2018	00153	\r
111834375053 |20\r
21/07/2018	00152	\r
073133374652 |28\r
19/07/2018	00151	\r
111328344447 |10\r
17/07/2018	00150	\r
051422273140 |48\r
14/07/2018	00149	\r
041923343850 |01\r
12/07/2018	00148	\r
081518212449 |22\r
10/07/2018	00147	\r
061016202729 |24\r
07/07/2018	00146	\r
023045484953 |41\r
05/07/2018	00145	\r
041522244351 |48\r
03/07/2018	00144	\r
303234474849 |50\r
30/06/2018	00143	\r
031223243033 |01\r
28/06/2018	00142	\r
113133434851 |23\r
26/06/2018	00141	\r
171821394043 |03\r
23/06/2018	00140	\r
060813234655 |01\r
21/06/2018	00139	\r
020819232533 |32\r
19/06/2018	00138	\r
161731374152 |34\r
16/06/2018	00137	\r
141521304447 |48\r
14/06/2018	00136	\r
031532454854 |55\r
12/06/2018	00135	\r
041323272935 |14\r
09/06/2018	00134	\r
092325395253 |38\r
07/06/2018	00133	\r
111618264647 |42\r
05/06/2018	00132	\r
112126325152 |05\r
02/06/2018	00131	\r
050717223233 |06\r
31/05/2018	00130	\r
031518252629 |19\r
29/05/2018	00129	\r
091317184650 |26\r
26/05/2018	00128	\r
071228314044 |15\r
24/05/2018	00127	\r
242526293648 |40\r
22/05/2018	00126	\r
040508173547 |39\r
19/05/2018	00125	\r
333545525355 |25\r
17/05/2018	00124	\r
133138455355 |46\r
15/05/2018	00123	\r
030629374449 |24\r
12/05/2018	00122	\r
010926385455 |51\r
10/05/2018	00121	\r
020608343943 |11\r
08/05/2018	00120	\r
031623243842 |48\r
05/05/2018	00119	\r
163233374048 |15\r
03/05/2018	00118	\r
232733373949 |44\r
01/05/2018	00117	\r
010720232538 |14\r
28/04/2018	00116	\r
121922293246 |25\r
26/04/2018	00115	\r
232629313654 |55\r
24/04/2018	00114	\r
171824404146 |06\r
21/04/2018	00113	\r
161841434655 |35\r
19/04/2018	00112	\r
041719354955 |09\r
17/04/2018	00111	\r
021026273138 |39\r
14/04/2018	00110	\r
021014264554 |20\r
12/04/2018	00109	\r
042935374254 |19\r
10/04/2018	00108	\r
012225313648 |41\r
07/04/2018	00107	\r
122433343653 |05\r
05/04/2018	00106	\r
070917253132 |06\r
03/04/2018	00105	\r
202139425153 |01\r
31/03/2018	00104	\r
030731435153 |26\r
29/03/2018	00103	\r
052735394652 |31\r
27/03/2018	00102	\r
091314155455 |22\r
24/03/2018	00101	\r
013038454850 |12\r
22/03/2018	00100	\r
010824333441 |20\r
20/03/2018	00099	\r
114043464955 |37\r
17/03/2018	00098	\r
031428355052 |29\r
15/03/2018	00097	\r
152023283949 |19\r
13/03/2018	00096	\r
010217464749 |44\r
10/03/2018	00095	\r
092027314849 |42\r
08/03/2018	00094	\r
141718234152 |40\r
06/03/2018	00093	\r
020613224048 |12\r
03/03/2018	00092	\r
041032374752 |49\r
01/03/2018	00091	\r
040507172038 |09\r
27/02/2018	00090	\r
081623284449 |45\r
24/02/2018	00089	\r
050724324549 |01\r
22/02/2018	00088	\r
111432364248 |20\r
20/02/2018	00087	\r
010221245052 |33\r
17/02/2018	00086	\r
162228293543 |45\r
13/02/2018	00085	\r
092526304254 |19\r
10/02/2018	00084	\r
081019253646 |07\r
08/02/2018	00083	\r
212229374150 |33\r
06/02/2018	00082	\r
012029314353 |16\r
03/02/2018	00081	\r
122942485455 |18\r
01/02/2018	00080	\r
010708093943 |52\r
30/01/2018	00079	\r
151924515355 |29\r
27/01/2018	00078	\r
212636384050 |11\r
25/01/2018	00077	\r
011030444550 |04\r
23/01/2018	00076	\r
031015234153 |35\r
20/01/2018	00075	\r
020715164145 |19\r
18/01/2018	00074	\r
122428303639 |15\r
16/01/2018	00073	\r
062733414249 |22\r
13/01/2018	00072	\r
032125265155 |37\r
11/01/2018	00071	\r
040730353745 |01\r
09/01/2018	00070	\r
182528465051 |15\r
06/01/2018	00069	\r
041124354145 |17\r
04/01/2018	00068	\r
010731354655 |51\r
02/01/2018	00067	\r
040708343747 |24\r
30/12/2017	00066	\r
080936373950 |07\r
28/12/2017	00065	\r
071826293135 |34\r
26/12/2017	00064	\r
071113182642 |49\r
23/12/2017	00063	\r
070809132844 |12\r
21/12/2017	00062	\r
222327353746 |19\r
19/12/2017	00061	\r
020320253844 |12\r
16/12/2017	00060	\r
052337414353 |25\r
14/12/2017	00059	\r
111222284650 |07\r
12/12/2017	00058	\r
060708213239 |27\r
09/12/2017	00057	\r
053435424952 |21\r
07/12/2017	00056	\r
031426354454 |25\r
05/12/2017	00055	\r
273840424655 |05\r
02/12/2017	00054	\r
093745505354 |40\r
30/11/2017	00053	\r
051326375355 |28\r
28/11/2017	00052	\r
021939495153 |20\r
25/11/2017	00051	\r
020916465255 |50\r
23/11/2017	00050	\r
010203182550 |14\r
21/11/2017	00049	\r
050823373854 |55\r
18/11/2017	00048	\r
111226425054 |17\r
16/11/2017	00047	\r
011622254748 |21\r
14/11/2017	00046	\r
202429414749 |22\r
11/11/2017	00045	\r
122633353644 |01\r
09/11/2017	00044	\r
020306233436 |50\r
07/11/2017	00043	\r
193236374254 |28\r
04/11/2017	00042	\r
020812444652 |09\r
02/11/2017	00041	\r
030912215152 |07\r
31/10/2017	00040	\r
071324454752 |33\r
28/10/2017	00039	\r
131835364148 |47\r
26/10/2017	00038	\r
021015303450 |03\r
24/10/2017	00037	\r
010209133235 |52\r
21/10/2017	00036	\r
040913161849 |30\r
19/10/2017	00035	\r
061517244045 |39\r
17/10/2017	00034	\r
012636405054 |31\r
14/10/2017	00033	\r
141829354449 |54\r
12/10/2017	00032	\r
050811313742 |52\r
10/10/2017	00031	\r
293343444550 |41\r
07/10/2017	00030	\r
313440424349 |16\r
05/10/2017	00029	\r
010314193541 |20\r
03/10/2017	00028	\r
213135414650 |23\r
30/09/2017	00027	\r
041723253446 |24\r
28/09/2017	00026	\r
202728313947 |10\r
26/09/2017	00025	\r
141518303649 |19\r
23/09/2017	00024	\r
070827364453 |49\r
21/09/2017	00023	\r
091216244351 |39\r
19/09/2017	00022	\r
033236414453 |45\r
16/09/2017	00021	\r
091221262952 |24\r
14/09/2017	00020	\r
222332434451 |15\r
12/09/2017	00019	\r
061012474851 |35\r
09/09/2017	00018	\r
011523364354 |12\r
07/09/2017	00017	\r
041822313240 |08\r
05/09/2017	00016	\r
010208132339 |09\r
02/09/2017	00015	\r
050911181937 |50\r
31/08/2017	00014	\r
082027353647 |18\r
29/08/2017	00013	\r
041215232441 |44\r
26/08/2017	00012	\r
172530313641 |20\r
24/08/2017	00011	\r
051618374246 |10\r
22/08/2017	00010	\r
102431323844 |14\r
19/08/2017	00009	\r
071113152651 |36\r
17/08/2017	00008	\r
111220303234 |53\r
15/08/2017	00007	\r
071119323351 |30\r
12/08/2017	00006	\r
061620323851 |34\r
10/08/2017	00005	\r
101119415054 |03\r
08/08/2017	00004	\r
193639414651 |38\r
05/08/2017	00003	\r
010511324045 |43\r
03/08/2017	00002	\r
040924252745 |40\r
01/08/2017	00001	\r
051014232438 |35`,bw=`18/10/2026	01577	\r
101131384044\r
16/10/2026	01576	\r
092026353638\r
14/10/2026	01575	\r
061619213443\r
11/10/2026	01574	\r
030916293044\r
09/10/2026	01573	\r
050712233241\r
07/10/2026	01572	\r
101436374143\r
04/10/2026	01571	\r
152029374045\r
02/10/2026	01570	\r
010620273141\r
30/09/2026	01569	\r
020924273033\r
27/09/2026	01568	\r
020413253139\r
25/09/2026	01567	\r
031518283336\r
23/09/2026	01566	\r
020612152526\r
20/09/2026	01565	\r
101516273338\r
18/09/2026	01564	\r
071226274143\r
16/09/2026	01563	\r
010310111823\r
13/09/2026	01562	\r
041231343841\r
11/09/2026	01561	\r
141820212627\r
09/09/2026	01560	\r
121720213643\r
06/09/2026	01559	\r
091422262740\r
04/09/2026	01558	\r
162123293445\r
02/09/2026	01557	\r
060927293544\r
30/08/2026	01556	\r
010312153745\r
28/08/2026	01555	\r
031315223639\r
26/08/2026	01554	\r
031011163340\r
23/08/2026	01553	\r
041617223239\r
21/08/2026	01552	\r
072631384345\r
19/08/2026	01551	\r
061518334043\r
16/08/2026	01550	\r
060715193641\r
14/08/2026	01549	\r
070913313544\r
12/08/2026	01548	\r
151722293340\r
09/08/2026	01547	\r
031720273135\r
07/08/2026	01546	\r
020819303643\r
05/08/2026	01545	\r
020611162839\r
02/08/2026	01544	\r
031220252737\r
31/07/2026	01543	\r
061624253843\r
29/07/2026	01542	\r
020621313645\r
26/07/2026	01541	\r
131627334144\r
24/07/2026	01540	\r
121636384145\r
22/07/2026	01539	\r
033233343943\r
19/07/2026	01538	\r
122224263137\r
17/07/2026	01537	\r
091830313945\r
15/07/2026	01536	\r
071129374345\r
12/07/2026	01535	\r
060911173544\r
10/07/2026	01534	\r
091723264244\r
08/07/2026	01533	\r
131422263744\r
05/07/2026	01532	\r
010513293235\r
03/07/2026	01531	\r
062021283039\r
01/07/2026	01530	\r
202425294044\r
28/06/2026	01529	\r
021118334245\r
26/06/2026	01528	\r
091431364145\r
24/06/2026	01527	\r
031117193032\r
21/06/2026	01526	\r
030819274145\r
19/06/2026	01525	\r
060919293036\r
17/06/2026	01524	\r
050616283539\r
14/06/2026	01523	\r
071620222438\r
12/06/2026	01522	\r
051530343738\r
10/06/2026	01521	\r
030917222732\r
07/06/2026	01520	\r
142126303435\r
05/06/2026	01519	\r
131619323639\r
03/06/2026	01518	\r
031126333638\r
31/05/2026	01517	\r
011216212441\r
29/05/2026	01516	\r
131424283042\r
27/05/2026	01515	\r
021317183137\r
24/05/2026	01514	\r
040809142542\r
22/05/2026	01513	\r
020314284144\r
20/05/2026	01512	\r
162829374045\r
17/05/2026	01511	\r
040813152731\r
15/05/2026	01510	\r
061420222344\r
13/05/2026	01509	\r
081015323543\r
10/05/2026	01508	\r
030410112742\r
08/05/2026	01507	\r
041617263442\r
06/05/2026	01506	\r
091228363740\r
03/05/2026	01505	\r
070914243839\r
01/05/2026	01504	\r
042125314143\r
29/04/2026	01503	\r
041415161725\r
26/04/2026	01502	\r
121822253141\r
24/04/2026	01501	\r
202933364142\r
22/04/2026	01500	\r
020615161737\r
19/04/2026	01499	\r
071015273335\r
17/04/2026	01498	\r
011019313638\r
15/04/2026	01497	\r
212233353643\r
12/04/2026	01496	\r
011011323942\r
10/04/2026	01495	\r
070810162835\r
08/04/2026	01494	\r
050823263841\r
05/04/2026	01493	\r
020923303242\r
03/04/2026	01492	\r
020423243541\r
01/04/2026	01491	\r
063034363744\r
29/03/2026	01490	\r
050818303745\r
27/03/2026	01489	\r
050713193845\r
25/03/2026	01488	\r
162224293536\r
22/03/2026	01487	\r
051022263136\r
20/03/2026	01486	\r
081122233843\r
18/03/2026	01485	\r
142033353644\r
15/03/2026	01484	\r
040711264244\r
13/03/2026	01483	\r
111220223133\r
11/03/2026	01482	\r
161819283144\r
08/03/2026	01481	\r
061213253132\r
06/03/2026	01480	\r
021012213237\r
04/03/2026	01479	\r
010406091344\r
01/03/2026	01478	\r
162223354445\r
27/02/2026	01477	\r
020408151728\r
25/02/2026	01476	\r
041320222329\r
22/02/2026	01475	\r
072324363840\r
20/02/2026	01474	\r
042528333445\r
18/02/2026	01473	\r
010719232644\r
15/02/2026	01472	\r
040607202843\r
13/02/2026	01471	\r
081231364243\r
11/02/2026	01470	\r
152035404445\r
08/02/2026	01469	\r
061316202338\r
06/02/2026	01468	\r
020713174245\r
04/02/2026	01467	\r
021214173943\r
01/02/2026	01466	\r
011821233036\r
30/01/2026	01465	\r
161730414245\r
28/01/2026	01464	\r
041016192740\r
25/01/2026	01463	\r
021920243334\r
23/01/2026	01462	\r
091516202231\r
21/01/2026	01461	\r
011823242937\r
18/01/2026	01460	\r
020515263942\r
16/01/2026	01459	\r
021021313440\r
14/01/2026	01458	\r
012223283945\r
11/01/2026	01457	\r
081021253138\r
09/01/2026	01456	\r
080917213645\r
07/01/2026	01455	\r
010507283143\r
04/01/2026	01454	\r
021221293544\r
02/01/2026	01453	\r
071822323738\r
31/12/2025	01452	\r
012535363745\r
28/12/2025	01451	\r
010207163137\r
26/12/2025	01450	\r
040616252740\r
24/12/2025	01449	\r
151931354345\r
21/12/2025	01448	\r
060912182943\r
19/12/2025	01447	\r
012136424344\r
17/12/2025	01446	\r
051424384143\r
14/12/2025	01445	\r
081113162832\r
12/12/2025	01444	\r
030713173844\r
10/12/2025	01443	\r
071822293036\r
07/12/2025	01442	\r
010523282943\r
05/12/2025	01441	\r
021923374243\r
03/12/2025	01440	\r
081520233134\r
30/11/2025	01439	\r
071326303442\r
28/11/2025	01438	\r
020917233941\r
26/11/2025	01437	\r
020815193038\r
23/11/2025	01436	\r
041219424344\r
21/11/2025	01435	\r
081118252835\r
19/11/2025	01434	\r
091219304043\r
16/11/2025	01433	\r
152031333445\r
14/11/2025	01432	\r
031015274142\r
12/11/2025	01431	\r
162429374044\r
09/11/2025	01430	\r
132327303743\r
07/11/2025	01429	\r
030420283942\r
05/11/2025	01428	\r
020918253031\r
02/11/2025	01427	\r
030712203044\r
31/10/2025	01426	\r
031031343643\r
29/10/2025	01425	\r
072635394142\r
26/10/2025	01424	\r
183034424345\r
24/10/2025	01423	\r
021124313238\r
22/10/2025	01422	\r
051112242844\r
19/10/2025	01421	\r
161725262837\r
17/10/2025	01420	\r
151718263142\r
15/10/2025	01419	\r
010618202940\r
12/10/2025	01418	\r
041016202834\r
10/10/2025	01417	\r
040525343943\r
08/10/2025	01416	\r
081011182332\r
05/10/2025	01415	\r
051422283239\r
03/10/2025	01414	\r
293132333435\r
01/10/2025	01413	\r
030607193035\r
28/09/2025	01412	\r
081318263639\r
26/09/2025	01411	\r
121719272836\r
24/09/2025	01410	\r
030517313240\r
21/09/2025	01409	\r
020306212838\r
19/09/2025	01408	\r
040617182841\r
17/09/2025	01407	\r
112325353845\r
14/09/2025	01406	\r
030609103037\r
12/09/2025	01405	\r
172224374243\r
10/09/2025	01404	\r
071018202436\r
07/09/2025	01403	\r
062930394244\r
05/09/2025	01402	\r
011020224143\r
03/09/2025	01401	\r
142123284445\r
31/08/2025	01400	\r
030414303238\r
29/08/2025	01399	\r
020410243536\r
27/08/2025	01398	\r
031118394042\r
24/08/2025	01397	\r
020920283243\r
22/08/2025	01396	\r
010910133739\r
20/08/2025	01395	\r
040927323842\r
17/08/2025	01394	\r
152426293142\r
15/08/2025	01393	\r
052227364345\r
13/08/2025	01392	\r
101528303545\r
10/08/2025	01391	\r
132126283135\r
08/08/2025	01390	\r
111720262738\r
06/08/2025	01389	\r
031214182934\r
03/08/2025	01388	\r
051424263743\r
01/08/2025	01387	\r
052930313638\r
30/07/2025	01386	\r
020306162634\r
27/07/2025	01385	\r
010912273945\r
25/07/2025	01384	\r
203034353839\r
23/07/2025	01383	\r
242629323744\r
20/07/2025	01382	\r
111314203742\r
18/07/2025	01381	\r
072224284245\r
16/07/2025	01380	\r
061114192142\r
13/07/2025	01379	\r
091722273536\r
11/07/2025	01378	\r
112022244345\r
09/07/2025	01377	\r
070830323344\r
06/07/2025	01376	\r
050813233645\r
04/07/2025	01375	\r
070921294145\r
02/07/2025	01374	\r
121621283441\r
29/06/2025	01373	\r
102325262728\r
27/06/2025	01372	\r
091426304445\r
25/06/2025	01371	\r
081026293539\r
22/06/2025	01370	\r
010914203441\r
20/06/2025	01369	\r
020818222629\r
18/06/2025	01368	\r
192324263641\r
15/06/2025	01367	\r
151622232932\r
13/06/2025	01366	\r
011319283036\r
11/06/2025	01365	\r
101322274145\r
08/06/2025	01364	\r
061718193137\r
06/06/2025	01363	\r
242635394145\r
04/06/2025	01362	\r
112326272932\r
01/06/2025	01361	\r
092429374244\r
30/05/2025	01360	\r
040712353741\r
28/05/2025	01359	\r
172223283141\r
25/05/2025	01358	\r
051423242844\r
23/05/2025	01357	\r
020415162943\r
21/05/2025	01356	\r
021314212430\r
18/05/2025	01355	\r
060717273042\r
16/05/2025	01354	\r
050914223244\r
14/05/2025	01353	\r
192427374445\r
11/05/2025	01352	\r
131517222843\r
09/05/2025	01351	\r
010709344042\r
07/05/2025	01350	\r
082728313440\r
04/05/2025	01349	\r
060708091229\r
02/05/2025	01348	\r
030732374245\r
30/04/2025	01347	\r
011726333644\r
27/04/2025	01346	\r
081131353645\r
25/04/2025	01345	\r
040809102034\r
23/04/2025	01344	\r
071223344243\r
20/04/2025	01343	\r
050714262944\r
18/04/2025	01342	\r
052021222944\r
16/04/2025	01341	\r
050812162832\r
13/04/2025	01340	\r
131418253032\r
11/04/2025	01339	\r
011314263743\r
09/04/2025	01338	\r
050811224144\r
06/04/2025	01337	\r
030506131822\r
04/04/2025	01336	\r
021324252838\r
02/04/2025	01335	\r
081415223134\r
30/03/2025	01334	\r
141533384245\r
28/03/2025	01333	\r
050722282934\r
26/03/2025	01332	\r
172425303539\r
23/03/2025	01331	\r
050608093645\r
21/03/2025	01330	\r
313234414245\r
19/03/2025	01329	\r
122327282943\r
16/03/2025	01328	\r
021214163845\r
14/03/2025	01327	\r
071113162830\r
12/03/2025	01326	\r
192630323642\r
09/03/2025	01325	\r
101130334445\r
07/03/2025	01324	\r
081112202532\r
05/03/2025	01323	\r
102232374143\r
02/03/2025	01322	\r
082430334245\r
28/02/2025	01321	\r
101114162129\r
26/02/2025	01320	\r
021315161820\r
23/02/2025	01319	\r
101215172433\r
21/02/2025	01318	\r
040919203042\r
19/02/2025	01317	\r
010610112529\r
16/02/2025	01316	\r
111926283540\r
14/02/2025	01315	\r
060810272832\r
12/02/2025	01314	\r
071931394243\r
09/02/2025	01313	\r
081622273134\r
07/02/2025	01312	\r
040525273539\r
05/02/2025	01311	\r
040609142541\r
02/02/2025	01310	\r
152022293236\r
31/01/2025	01309	\r
021516324245\r
26/01/2025	01308	\r
050809112029\r
24/01/2025	01307	\r
010711223134\r
22/01/2025	01306	\r
032126293233\r
19/01/2025	01305	\r
050610193238\r
17/01/2025	01304	\r
021222313435\r
15/01/2025	01303	\r
020608102333\r
12/01/2025	01302	\r
020912144144\r
10/01/2025	01301	\r
020408284244\r
08/01/2025	01300	\r
020317333738\r
05/01/2025	01299	\r
020715374142\r
03/01/2025	01298	\r
061221273441\r
01/01/2025	01297	\r
142025283640\r
29/12/2024	01296	\r
050819313443\r
27/12/2024	01295	\r
011013242533\r
25/12/2024	01294	\r
081320252839\r
22/12/2024	01293	\r
151624273144\r
20/12/2024	01292	\r
060912212833\r
18/12/2024	01291	\r
030712162634\r
15/12/2024	01290	\r
011020222336\r
13/12/2024	01289	\r
030729363744\r
11/12/2024	01288	\r
021017232933\r
08/12/2024	01287	\r
011324262737\r
06/12/2024	01286	\r
081418263442\r
04/12/2024	01285	\r
071419243436\r
01/12/2024	01284	\r
151725293335\r
29/11/2024	01283	\r
121533353745\r
27/11/2024	01282	\r
062124314244\r
24/11/2024	01281	\r
051415213336\r
22/11/2024	01280	\r
011415193840\r
20/11/2024	01279	\r
041624293137\r
17/11/2024	01278	\r
111729313842\r
15/11/2024	01277	\r
081331363740\r
13/11/2024	01276	\r
032328353942\r
10/11/2024	01275	\r
030711121340\r
08/11/2024	01274	\r
111518273437\r
06/11/2024	01273	\r
010203112537\r
03/11/2024	01272	\r
010405162022\r
01/11/2024	01271	\r
202223323540\r
30/10/2024	01270	\r
041320293237\r
27/10/2024	01269	\r
182128293345\r
25/10/2024	01268	\r
031031323440\r
23/10/2024	01267	\r
222728313744\r
20/10/2024	01266	\r
062324252634\r
18/10/2024	01265	\r
131920222437\r
16/10/2024	01264	\r
041419232437\r
13/10/2024	01263	\r
071013172145\r
11/10/2024	01262	\r
111926282943\r
09/10/2024	01261	\r
141820223445\r
06/10/2024	01260	\r
071433364243\r
04/10/2024	01259	\r
081021323944\r
02/10/2024	01258	\r
050611233136\r
29/09/2024	01257	\r
030716174142\r
27/09/2024	01256	\r
010618253944\r
25/09/2024	01255	\r
102325273137\r
22/09/2024	01254	\r
202328364042\r
20/09/2024	01253	\r
131419203033\r
18/09/2024	01252	\r
040827283536\r
15/09/2024	01251	\r
031128323335\r
13/09/2024	01250	\r
061227344142\r
11/09/2024	01249	\r
061119233437\r
08/09/2024	01248	\r
030810263437\r
06/09/2024	01247	\r
052528323641\r
04/09/2024	01246	\r
020715182433\r
01/09/2024	01245	\r
303133384243\r
30/08/2024	01244	\r
021519263436\r
28/08/2024	01243	\r
040517253941\r
25/08/2024	01242	\r
061015174042\r
23/08/2024	01241	\r
071326283541\r
21/08/2024	01240	\r
070809152230\r
18/08/2024	01239	\r
041328333538\r
16/08/2024	01238	\r
162223303441\r
14/08/2024	01237	\r
010609214344\r
11/08/2024	01236	\r
171819333537\r
09/08/2024	01235	\r
061415242639\r
07/08/2024	01234	\r
111922294044\r
04/08/2024	01233	\r
010416182032\r
02/08/2024	01232	\r
091419343741\r
31/07/2024	01231	\r
020412161842\r
28/07/2024	01230	\r
011321253139\r
26/07/2024	01229	\r
182028313945\r
24/07/2024	01228	\r
070820273234\r
21/07/2024	01227	\r
091023252838\r
19/07/2024	01226	\r
011020253435\r
17/07/2024	01225	\r
091011162130\r
14/07/2024	01224	\r
091833373843\r
12/07/2024	01223	\r
111725262829\r
10/07/2024	01222	\r
232436374045\r
07/07/2024	01221	\r
040822232645\r
05/07/2024	01220	\r
042333384044\r
03/07/2024	01219	\r
111824343843\r
30/06/2024	01218	\r
052325283043\r
28/06/2024	01217	\r
040616324144\r
26/06/2024	01216	\r
081029303340\r
23/06/2024	01215	\r
091119293144\r
21/06/2024	01214	\r
030711161935\r
19/06/2024	01213	\r
081217232627\r
16/06/2024	01212	\r
031617182537\r
14/06/2024	01211	\r
102425263041\r
12/06/2024	01210	\r
010208132634\r
09/06/2024	01209	\r
040528323742\r
07/06/2024	01208	\r
151924252739\r
05/06/2024	01207	\r
112528333445\r
02/06/2024	01206	\r
020713232545\r
31/05/2024	01205	\r
040815233140\r
29/05/2024	01204	\r
042125273539\r
26/05/2024	01203	\r
040911141927\r
24/05/2024	01202	\r
021415172340\r
22/05/2024	01201	\r
020310224143\r
19/05/2024	01200	\r
051925353739\r
17/05/2024	01199	\r
082227293943\r
15/05/2024	01198	\r
031113212434\r
12/05/2024	01197	\r
030506093245\r
10/05/2024	01196	\r
121331384243\r
08/05/2024	01195	\r
021013223034\r
05/05/2024	01194	\r
101214162139\r
03/05/2024	01193	\r
011314212743\r
01/05/2024	01192	\r
070917202529\r
28/04/2024	01191	\r
011314222337\r
26/04/2024	01190	\r
020325343538\r
24/04/2024	01189	\r
072130333839\r
21/04/2024	01188	\r
072136384045\r
19/04/2024	01187	\r
020320213233\r
17/04/2024	01186	\r
091626273241\r
14/04/2024	01185	\r
071216294245\r
12/04/2024	01184	\r
061718264345\r
10/04/2024	01183	\r
021030333440\r
07/04/2024	01182	\r
031115172435\r
05/04/2024	01181	\r
141822293637\r
03/04/2024	01180	\r
071114222934\r
31/03/2024	01179	\r
051213174041\r
29/03/2024	01178	\r
040725343538\r
27/03/2024	01177	\r
062931354244\r
24/03/2024	01176	\r
011422283242\r
22/03/2024	01175	\r
050611202445\r
20/03/2024	01174	\r
081426284345\r
17/03/2024	01173	\r
010305263042\r
15/03/2024	01172	\r
091116293133\r
13/03/2024	01171	\r
011325303440\r
10/03/2024	01170	\r
041219233641\r
08/03/2024	01169	\r
022628404145\r
06/03/2024	01168	\r
111534394143\r
03/03/2024	01167	\r
031017202227\r
01/03/2024	01166	\r
202224262837\r
28/02/2024	01165	\r
011021253239\r
25/02/2024	01164	\r
050710121526\r
23/02/2024	01163	\r
041719272836\r
21/02/2024	01162	\r
020814192442\r
18/02/2024	01161	\r
051920212440\r
16/02/2024	01160	\r
061016204042\r
14/02/2024	01159	\r
080911124044\r
11/02/2024	01158	\r
071831333541\r
07/02/2024	01157	\r
172124253942\r
04/02/2024	01156	\r
091521293339\r
02/02/2024	01155	\r
011529313234\r
31/01/2024	01154	\r
091115353841\r
28/01/2024	01153	\r
032325293641\r
26/01/2024	01152	\r
081922273135\r
24/01/2024	01151	\r
072730363945\r
21/01/2024	01150	\r
112022232631\r
19/01/2024	01149	\r
081520244344\r
17/01/2024	01148	\r
141921364344\r
14/01/2024	01147	\r
020819202442\r
12/01/2024	01146	\r
101120273943\r
10/01/2024	01145	\r
101218192943\r
07/01/2024	01144	\r
030415183645\r
05/01/2024	01143	\r
091629313342\r
03/01/2024	01142	\r
091419202940\r
31/12/2023	01141	\r
131423253444\r
29/12/2023	01140	\r
162022353739\r
27/12/2023	01139	\r
081623343639\r
24/12/2023	01138	\r
010205244043\r
22/12/2023	01137	\r
021214163438\r
20/12/2023	01136	\r
051516212232\r
17/12/2023	01135	\r
030718203133\r
15/12/2023	01134	\r
010510112040\r
13/12/2023	01133	\r
030711202844\r
10/12/2023	01132	\r
091011174144\r
08/12/2023	01131	\r
111516174243\r
06/12/2023	01130	\r
181920294142\r
03/12/2023	01129	\r
121416212932\r
01/12/2023	01128	\r
051014212732\r
29/11/2023	01127	\r
092224323839\r
26/11/2023	01126	\r
040615232536\r
24/11/2023	01125	\r
051822344145\r
22/11/2023	01124	\r
151820233739\r
19/11/2023	01123	\r
010319202634\r
17/11/2023	01122	\r
162025263641\r
15/11/2023	01121	\r
020312163037\r
12/11/2023	01120	\r
020410152731\r
10/11/2023	01119	\r
010410131444\r
08/11/2023	01118	\r
072023273133\r
05/11/2023	01117	\r
011316182325\r
03/11/2023	01116	\r
020709132238\r
01/11/2023	01115	\r
010315162328\r
29/10/2023	01114	\r
050715213245\r
27/10/2023	01113	\r
071014212637\r
25/10/2023	01112	\r
040613253141\r
22/10/2023	01111	\r
101314193540\r
20/10/2023	01110	\r
041621242637\r
18/10/2023	01109	\r
020718202429\r
15/10/2023	01108	\r
040509273439\r
13/10/2023	01107	\r
011116394045\r
11/10/2023	01106	\r
051030404445\r
08/10/2023	01105	\r
041622283339\r
06/10/2023	01104	\r
181924283340\r
04/10/2023	01103	\r
071721324045\r
01/10/2023	01102	\r
021113164143\r
29/09/2023	01101	\r
020824273043\r
27/09/2023	01100	\r
031222303739\r
24/09/2023	01099	\r
040823273036\r
22/09/2023	01098	\r
021617182023\r
20/09/2023	01097	\r
030620394041\r
17/09/2023	01096	\r
061015363943\r
15/09/2023	01095	\r
020305071038\r
13/09/2023	01094	\r
020407091213\r
10/09/2023	01093	\r
040510182740\r
08/09/2023	01092	\r
060814293942\r
06/09/2023	01091	\r
030412181929\r
03/09/2023	01090	\r
013338394445\r
01/09/2023	01089	\r
091416192841\r
30/08/2023	01088	\r
131720283033\r
27/08/2023	01087	\r
242730374445\r
25/08/2023	01086	\r
081830323845\r
23/08/2023	01085	\r
051418192931\r
20/08/2023	01084	\r
070822233042\r
18/08/2023	01083	\r
121921223438\r
16/08/2023	01082	\r
050725313941\r
13/08/2023	01081	\r
091523333540\r
11/08/2023	01080	\r
162126293045\r
09/08/2023	01079	\r
182230313941\r
06/08/2023	01078	\r
041519253038\r
04/08/2023	01077	\r
021222384144\r
02/08/2023	01076	\r
042127383944\r
30/07/2023	01075	\r
031723334245\r
28/07/2023	01074	\r
072728303135\r
26/07/2023	01073	\r
041318212937\r
23/07/2023	01072	\r
141723323343\r
21/07/2023	01071	\r
092031333645\r
19/07/2023	01070	\r
061019374345\r
16/07/2023	01069	\r
010716182129\r
14/07/2023	01068	\r
040513192737\r
12/07/2023	01067	\r
192427313343\r
09/07/2023	01066	\r
141627283341\r
07/07/2023	01065	\r
050912203742\r
05/07/2023	01064	\r
011224273644\r
02/07/2023	01063	\r
030508173741\r
30/06/2023	01062	\r
020520233138\r
28/06/2023	01061	\r
040824314245\r
25/06/2023	01060	\r
040607252630\r
23/06/2023	01059	\r
101415202445\r
21/06/2023	01058	\r
071319353738\r
18/06/2023	01057	\r
030408182133\r
16/06/2023	01056	\r
242632373841\r
14/06/2023	01055	\r
022831374144\r
11/06/2023	01054	\r
051822404144\r
09/06/2023	01053	\r
151623254041\r
07/06/2023	01052	\r
010714163444\r
04/06/2023	01051	\r
031519353643\r
02/06/2023	01050	\r
031114192143\r
31/05/2023	01049	\r
040910224144\r
28/05/2023	01048	\r
061319203744\r
26/05/2023	01047	\r
081019253544\r
24/05/2023	01046	\r
091115283344\r
21/05/2023	01045	\r
081017192441\r
19/05/2023	01044	\r
030910273538\r
17/05/2023	01043	\r
020613202844\r
14/05/2023	01042	\r
070813374244\r
12/05/2023	01041	\r
020608091527\r
10/05/2023	01040	\r
070809131527\r
07/05/2023	01039	\r
043031333545\r
05/05/2023	01038	\r
222831353638\r
03/05/2023	01037	\r
182328293944\r
30/04/2023	01036	\r
070923243336\r
28/04/2023	01035	\r
051125334244\r
26/04/2023	01034	\r
010407093437\r
23/04/2023	01033	\r
010222303742\r
21/04/2023	01032	\r
020407102044\r
19/04/2023	01031	\r
102737404243\r
16/04/2023	01030	\r
081720253336\r
14/04/2023	01029	\r
081623273241\r
12/04/2023	01028	\r
040727283243\r
09/04/2023	01027	\r
121525303439\r
07/04/2023	01026	\r
091422293941\r
05/04/2023	01025	\r
040812151943\r
02/04/2023	01024	\r
022436384243\r
31/03/2023	01023	\r
010910153042\r
29/03/2023	01022	\r
030612282943\r
26/03/2023	01021	\r
061618253445\r
24/03/2023	01020	\r
061415182441\r
22/03/2023	01019	\r
050810151741\r
19/03/2023	01018	\r
020710212835\r
17/03/2023	01017	\r
050712222633\r
15/03/2023	01016	\r
111923283435\r
12/03/2023	01015	\r
102829313337\r
10/03/2023	01014	\r
030513223644\r
08/03/2023	01013	\r
101322252836\r
05/03/2023	01012	\r
091124313644\r
03/03/2023	01011	\r
102226273343\r
01/03/2023	01010	\r
131429333843\r
26/02/2023	01009	\r
040916262842\r
24/02/2023	01008	\r
011016223544\r
22/02/2023	01007	\r
081622232838\r
19/02/2023	01006	\r
022022282938\r
17/02/2023	01005	\r
010510132325\r
15/02/2023	01004	\r
010208202431\r
12/02/2023	01003	\r
030511232442\r
10/02/2023	01002	\r
011123273339\r
08/02/2023	01001	\r
061820222634\r
05/02/2023	01000	\r
131523293134\r
03/02/2023	00999	\r
041116303343\r
01/02/2023	00998	\r
162127293444\r
29/01/2023	00997	\r
052126273233\r
27/01/2023	00996	\r
101321294143\r
25/01/2023	00995	\r
121418222831\r
20/01/2023	00994	\r
030713293244\r
15/01/2023	00993	\r
080915212645\r
13/01/2023	00992	\r
031114202642\r
11/01/2023	00991	\r
011822333443\r
08/01/2023	00990	\r
112932394043\r
06/01/2023	00989	\r
020716253538\r
04/01/2023	00988	\r
030507373942\r
01/01/2023	00987	\r
162026303240\r
30/12/2022	00986	\r
032431353942\r
28/12/2022	00985	\r
040510213337\r
25/12/2022	00984	\r
151721283743\r
23/12/2022	00983	\r
021421223543\r
21/12/2022	00982	\r
081220263537\r
18/12/2022	00981	\r
021213333642\r
16/12/2022	00980	\r
061922263839\r
14/12/2022	00979	\r
132935373841\r
11/12/2022	00978	\r
091116172233\r
09/12/2022	00977	\r
042325304041\r
07/12/2022	00976	\r
081119242642\r
04/12/2022	00975	\r
040507092739\r
02/12/2022	00974	\r
021821243844\r
30/11/2022	00973	\r
071520253237\r
27/11/2022	00972	\r
012627353643\r
25/11/2022	00971	\r
142024303541\r
23/11/2022	00970	\r
041315203738\r
20/11/2022	00969	\r
010414222440\r
18/11/2022	00968	\r
151622252933\r
16/11/2022	00967	\r
020312323544\r
13/11/2022	00966	\r
030427324043\r
11/11/2022	00965	\r
020309151743\r
09/11/2022	00964	\r
070916203032\r
06/11/2022	00963	\r
081012141731\r
04/11/2022	00962	\r
091316243345\r
02/11/2022	00961	\r
021723273742\r
30/10/2022	00960	\r
152731363841\r
28/10/2022	00959	\r
162122334245\r
26/10/2022	00958	\r
020310153136\r
23/10/2022	00957	\r
021118333645\r
21/10/2022	00956	\r
101617183442\r
19/10/2022	00955	\r
010307102129\r
16/10/2022	00954	\r
020519263840\r
14/10/2022	00953	\r
010622253034\r
12/10/2022	00952	\r
010713162735\r
09/10/2022	00951	\r
131520253543\r
07/10/2022	00950	\r
182029343638\r
05/10/2022	00949	\r
091823242934\r
02/10/2022	00948	\r
031728303132\r
30/09/2022	00947	\r
041119203541\r
28/09/2022	00946	\r
040507242730\r
25/09/2022	00945	\r
030508313334\r
23/09/2022	00944	\r
011221283044\r
21/09/2022	00943	\r
051014254245\r
18/09/2022	00942	\r
030510172529\r
16/09/2022	00941	\r
022635414243\r
14/09/2022	00940	\r
031215202445\r
11/09/2022	00939	\r
041520314344\r
09/09/2022	00938	\r
040613142839\r
07/09/2022	00937	\r
080910203538\r
04/09/2022	00936	\r
051719273539\r
02/09/2022	00935	\r
020314213133\r
31/08/2022	00934	\r
041028293134\r
28/08/2022	00933	\r
081631373941\r
26/08/2022	00932	\r
033031323645\r
24/08/2022	00931	\r
122021232734\r
21/08/2022	00930	\r
051921232836\r
19/08/2022	00929	\r
252633394143\r
17/08/2022	00928	\r
232935373945\r
14/08/2022	00927	\r
091321243435\r
12/08/2022	00926	\r
050716203641\r
10/08/2022	00925	\r
040810152631\r
07/08/2022	00924	\r
060910132427\r
05/08/2022	00923	\r
101314323742\r
03/08/2022	00922	\r
051430363842\r
31/07/2022	00921	\r
030815164042\r
29/07/2022	00920	\r
050711203137\r
27/07/2022	00919	\r
091518223241\r
24/07/2022	00918	\r
041117293044\r
22/07/2022	00917	\r
041018223137\r
20/07/2022	00916	\r
050620222639\r
17/07/2022	00915	\r
071320232729\r
15/07/2022	00914	\r
043035394243\r
13/07/2022	00913	\r
040921283537\r
10/07/2022	00912	\r
122329363741\r
08/07/2022	00911	\r
060712182143\r
06/07/2022	00910	\r
041214154142\r
03/07/2022	00909	\r
081417202140\r
01/07/2022	00908	\r
172630313339\r
29/06/2022	00907	\r
011920273032\r
26/06/2022	00906	\r
030708182736\r
24/06/2022	00905	\r
071618323444\r
22/06/2022	00904	\r
032023303335\r
19/06/2022	00903	\r
012425313940\r
17/06/2022	00902	\r
050826293544\r
15/06/2022	00901	\r
010612203639\r
12/06/2022	00900	\r
061419224042\r
10/06/2022	00899	\r
102325263041\r
08/06/2022	00898	\r
021013152236\r
05/06/2022	00897	\r
060821283035\r
03/06/2022	00896	\r
050834383941\r
01/06/2022	00895	\r
061021232839\r
29/05/2022	00894	\r
020619243042\r
27/05/2022	00893	\r
162123273541\r
25/05/2022	00892	\r
192627394445\r
22/05/2022	00891	\r
010710243340\r
20/05/2022	00890	\r
121734394445\r
18/05/2022	00889	\r
031723374042\r
15/05/2022	00888	\r
052021313437\r
13/05/2022	00887	\r
070818294144\r
11/05/2022	00886	\r
020607183441\r
08/05/2022	00885	\r
041220253537\r
06/05/2022	00884	\r
010315163443\r
04/05/2022	00883	\r
010423283338\r
01/05/2022	00882	\r
082126353742\r
29/04/2022	00881	\r
051216252632\r
27/04/2022	00880	\r
030914172732\r
24/04/2022	00879	\r
091223303240\r
22/04/2022	00878	\r
111315182436\r
20/04/2022	00877	\r
010817212737\r
17/04/2022	00876	\r
051315283840\r
15/04/2022	00875	\r
091821253544\r
13/04/2022	00874	\r
010720254041\r
10/04/2022	00873	\r
041728303842\r
08/04/2022	00872	\r
021316192036\r
06/04/2022	00871	\r
131719253245\r
03/04/2022	00870	\r
051120264043\r
01/04/2022	00869	\r
021925324144\r
30/03/2022	00868	\r
011226283945\r
27/03/2022	00867	\r
081721394445\r
25/03/2022	00866	\r
011213272935\r
23/03/2022	00865	\r
020937384043\r
20/03/2022	00864	\r
010910122244\r
18/03/2022	00863	\r
061015294142\r
16/03/2022	00862	\r
101114243145\r
13/03/2022	00861	\r
010519202338\r
11/03/2022	00860	\r
062023293445\r
09/03/2022	00859	\r
031535394043\r
06/03/2022	00858	\r
111621333442\r
04/03/2022	00857	\r
031921242738\r
02/03/2022	00856	\r
071013202134\r
27/02/2022	00855	\r
102025273845\r
25/02/2022	00854	\r
101330333941\r
23/02/2022	00853	\r
021618192429\r
20/02/2022	00852	\r
040616304344\r
18/02/2022	00851	\r
031420262836\r
16/02/2022	00850	\r
020508162242\r
13/02/2022	00849	\r
142122242845\r
11/02/2022	00848	\r
101119384144\r
09/02/2022	00847	\r
032027374445\r
06/02/2022	00846	\r
050921243439\r
04/02/2022	00845	\r
111618384043\r
02/02/2022	00844	\r
050614203138\r
30/01/2022	00843	\r
010722262841\r
28/01/2022	00842	\r
040612262739\r
26/01/2022	00841	\r
051115182743\r
23/01/2022	00840	\r
132024323440\r
21/01/2022	00839	\r
011317242742\r
19/01/2022	00838	\r
142125343739\r
16/01/2022	00837	\r
010304053233\r
14/01/2022	00836	\r
051427303845\r
12/01/2022	00835	\r
030613153644\r
09/01/2022	00834	\r
060711223541\r
07/01/2022	00833	\r
101324283844\r
05/01/2022	00832	\r
010308093540\r
02/01/2022	00831	\r
111730364145\r
31/12/2021	00830	\r
020512334145\r
29/12/2021	00829	\r
052733343840\r
26/12/2021	00828	\r
041116243544\r
24/12/2021	00827	\r
031725263638\r
22/12/2021	00826	\r
081617232838\r
19/12/2021	00825	\r
121524303645\r
17/12/2021	00824	\r
081516212533\r
15/12/2021	00823	\r
031829303941\r
12/12/2021	00822	\r
162129404143\r
10/12/2021	00821	\r
010417192442\r
08/12/2021	00820	\r
020316192234\r
05/12/2021	00819	\r
030506313435\r
03/12/2021	00818	\r
101429373840\r
01/12/2021	00817	\r
080930313845\r
28/11/2021	00816	\r
131726273137\r
26/11/2021	00815	\r
041825293234\r
24/11/2021	00814	\r
021018233436\r
21/11/2021	00813	\r
011229404445\r
19/11/2021	00812	\r
091026283943\r
17/11/2021	00811	\r
041525263235\r
14/11/2021	00810	\r
030518284243\r
12/11/2021	00809	\r
111418243537\r
10/11/2021	00808	\r
171819202744\r
07/11/2021	00807	\r
052024253536\r
05/11/2021	00806	\r
101636404142\r
03/11/2021	00805	\r
031315232444\r
31/10/2021	00804	\r
091417183641\r
29/10/2021	00803	\r
171922313234\r
27/10/2021	00802	\r
131726293339\r
24/10/2021	00801	\r
062931323944\r
22/10/2021	00800	\r
030506092843\r
20/10/2021	00799	\r
050933404145\r
17/10/2021	00798	\r
041221222740\r
15/10/2021	00797	\r
051317202945\r
13/10/2021	00796	\r
203437394142\r
10/10/2021	00795	\r
032526294042\r
08/10/2021	00794	\r
041318233343\r
06/10/2021	00793	\r
091115203236\r
03/10/2021	00792	\r
061228303942\r
01/10/2021	00791	\r
111517272845\r
29/09/2021	00790	\r
061516273642\r
26/09/2021	00789	\r
132734353641\r
24/09/2021	00788	\r
010407141641\r
22/09/2021	00787	\r
051019223645\r
19/09/2021	00786	\r
062428313643\r
17/09/2021	00785	\r
061015373944\r
15/09/2021	00784	\r
111417242935\r
12/09/2021	00783	\r
040821293345\r
10/09/2021	00782	\r
101622364344\r
08/09/2021	00781	\r
041828323640\r
05/09/2021	00780	\r
151825272934\r
03/09/2021	00779	\r
061118233244\r
01/09/2021	00778	\r
061333344045\r
29/08/2021	00777	\r
011821252735\r
27/08/2021	00776	\r
041011152437\r
25/08/2021	00775	\r
010305172233\r
22/08/2021	00774	\r
060718254043\r
20/08/2021	00773	\r
040817273236\r
18/08/2021	00772	\r
101619272836\r
23/07/2021	00771	\r
192631334142\r
21/07/2021	00770	\r
081012293437\r
18/07/2021	00769	\r
030819212536\r
16/07/2021	00768	\r
010918264145\r
14/07/2021	00767	\r
041122293743\r
11/07/2021	00766	\r
020815171930\r
09/07/2021	00765	\r
040917182832\r
07/07/2021	00764	\r
010613303443\r
04/07/2021	00763	\r
031415212637\r
02/07/2021	00762	\r
011415183245\r
30/06/2021	00761	\r
020506081032\r
27/06/2021	00760	\r
051029374244\r
25/06/2021	00759	\r
030506232439\r
23/06/2021	00758	\r
040720283341\r
20/06/2021	00757	\r
102427424345\r
18/06/2021	00756	\r
101128294042\r
16/06/2021	00755	\r
111924283139\r
13/06/2021	00754	\r
031012133644\r
11/06/2021	00753	\r
081213143240\r
09/06/2021	00752	\r
020718202436\r
06/06/2021	00751	\r
050710131442\r
04/06/2021	00750	\r
192431323536\r
02/06/2021	00749	\r
102022263142\r
30/05/2021	00748	\r
071019304045\r
28/05/2021	00747	\r
021533414445\r
26/05/2021	00746	\r
011022363845\r
23/05/2021	00745	\r
111422262944\r
21/05/2021	00744	\r
042837384042\r
19/05/2021	00743	\r
031223293334\r
16/05/2021	00742	\r
132333374043\r
14/05/2021	00741	\r
031116202430\r
12/05/2021	00740	\r
091522273442\r
09/05/2021	00739	\r
010716242737\r
07/05/2021	00738	\r
102021273334\r
05/05/2021	00737	\r
031420223744\r
02/05/2021	00736	\r
070830354044\r
30/04/2021	00735	\r
030420213641\r
28/04/2021	00734	\r
213940414345\r
25/04/2021	00733	\r
081921283244\r
23/04/2021	00732	\r
131618223439\r
21/04/2021	00731	\r
031219273235\r
18/04/2021	00730	\r
070915232627\r
16/04/2021	00729	\r
080911283039\r
14/04/2021	00728	\r
111216183335\r
11/04/2021	00727	\r
032327323439\r
09/04/2021	00726	\r
030408171937\r
07/04/2021	00725	\r
131519253334\r
04/04/2021	00724	\r
052027303843\r
02/04/2021	00723	\r
010509164244\r
31/03/2021	00722	\r
020406364142\r
28/03/2021	00721	\r
232640414344\r
26/03/2021	00720	\r
021115182342\r
24/03/2021	00719	\r
071423263739\r
21/03/2021	00718	\r
080911313639\r
19/03/2021	00717	\r
050624343637\r
17/03/2021	00716	\r
061126283641\r
14/03/2021	00715	\r
010911323442\r
12/03/2021	00714	\r
051117343842\r
10/03/2021	00713	\r
051415192533\r
07/03/2021	00712	\r
041225283345\r
05/03/2021	00711	\r
091113212741\r
03/03/2021	00710	\r
012028374044\r
28/02/2021	00709	\r
040525282942\r
26/02/2021	00708	\r
111319273741\r
24/02/2021	00707	\r
021319334043\r
21/02/2021	00706	\r
060722242737\r
19/02/2021	00705	\r
121922233444\r
17/02/2021	00704	\r
031821223644\r
14/02/2021	00703	\r
031318213944\r
10/02/2021	00702	\r
081318192124\r
07/02/2021	00701	\r
010407154142\r
05/02/2021	00700	\r
020831324244\r
03/02/2021	00699	\r
070914233541\r
31/01/2021	00698	\r
040607113441\r
29/01/2021	00697	\r
060708293539\r
27/01/2021	00696	\r
010711284144\r
24/01/2021	00695	\r
080923253132\r
22/01/2021	00694	\r
010607202843\r
20/01/2021	00693	\r
072029304045\r
17/01/2021	00692	\r
040532394042\r
15/01/2021	00691	\r
040610132643\r
13/01/2021	00690	\r
192021283341\r
10/01/2021	00689	\r
101122323843\r
08/01/2021	00688	\r
081922253235\r
06/01/2021	00687	\r
222730354045\r
03/01/2021	00686	\r
043134364043\r
01/01/2021	00685	\r
101624263032\r
30/12/2020	00684	\r
011320263537\r
27/12/2020	00683	\r
031117193439\r
25/12/2020	00682	\r
061215223339\r
23/12/2020	00681	\r
071117313540\r
20/12/2020	00680	\r
151828303444\r
18/12/2020	00679	\r
040914233238\r
16/12/2020	00678	\r
101122273641\r
13/12/2020	00677	\r
101220364144\r
11/12/2020	00676	\r
232425353739\r
09/12/2020	00675	\r
162427313643\r
06/12/2020	00674	\r
112124272937\r
04/12/2020	00673	\r
030533374143\r
02/12/2020	00672	\r
040507102539\r
29/11/2020	00671	\r
060714183743\r
27/11/2020	00670	\r
010912133743\r
25/11/2020	00669	\r
010507082540\r
22/11/2020	00668	\r
091617243240\r
20/11/2020	00667	\r
021724293137\r
18/11/2020	00666	\r
181921313944\r
15/11/2020	00665	\r
141621294041\r
13/11/2020	00664	\r
082223333436\r
11/11/2020	00663	\r
041012172035\r
08/11/2020	00662	\r
031214162333\r
06/11/2020	00661	\r
192430323637\r
04/11/2020	00660	\r
030811132638\r
01/11/2020	00659	\r
062127303244\r
30/10/2020	00658	\r
040514182343\r
28/10/2020	00657	\r
010407153545\r
25/10/2020	00656	\r
111930384145\r
23/10/2020	00655	\r
051016233445\r
21/10/2020	00654	\r
041126363841\r
18/10/2020	00653	\r
011425263040\r
16/10/2020	00652	\r
041416232427\r
14/10/2020	00651	\r
040723324344\r
11/10/2020	00650	\r
121828314045\r
09/10/2020	00649	\r
151923303339\r
07/10/2020	00648	\r
131525262834\r
04/10/2020	00647	\r
091619252639\r
02/10/2020	00646	\r
091121313237\r
30/09/2020	00645	\r
020531324244\r
27/09/2020	00644	\r
011226313738\r
25/09/2020	00643	\r
142022354445\r
23/09/2020	00642	\r
020817233041\r
20/09/2020	00641	\r
050709131516\r
18/09/2020	00640	\r
101921232733\r
16/09/2020	00639	\r
052029303840\r
13/09/2020	00638	\r
202328374044\r
11/09/2020	00637	\r
041113161733\r
09/09/2020	00636	\r
192134353639\r
06/09/2020	00635	\r
010619293144\r
04/09/2020	00634	\r
071620304041\r
02/09/2020	00633	\r
081014161824\r
30/08/2020	00632	\r
060818192933\r
28/08/2020	00631	\r
101114232737\r
26/08/2020	00630	\r
021824283542\r
23/08/2020	00629	\r
101419253639\r
21/08/2020	00628	\r
070826303743\r
19/08/2020	00627	\r
072036374345\r
16/08/2020	00626	\r
020506203339\r
14/08/2020	00625	\r
091821243441\r
12/08/2020	00624	\r
072134384344\r
09/08/2020	00623	\r
111314434445\r
07/08/2020	00622	\r
172635404344\r
05/08/2020	00621	\r
141819323338\r
02/08/2020	00620	\r
060912174142\r
31/07/2020	00619	\r
040919293641\r
29/07/2020	00618	\r
061426414243\r
26/07/2020	00617	\r
051521394345\r
24/07/2020	00616	\r
042531353941\r
22/07/2020	00615	\r
091318242642\r
19/07/2020	00614	\r
011314194245\r
17/07/2020	00613	\r
041018203245\r
15/07/2020	00612	\r
101118192045\r
12/07/2020	00611	\r
021521273135\r
10/07/2020	00610	\r
182022333539\r
08/07/2020	00609	\r
141517213138\r
05/07/2020	00608	\r
050810172231\r
03/07/2020	00607	\r
040517182236\r
01/07/2020	00606	\r
101314263233\r
28/06/2020	00605	\r
041524363741\r
26/06/2020	00604	\r
092327303841\r
24/06/2020	00603	\r
071718323940\r
21/06/2020	00602	\r
070913334044\r
19/06/2020	00601	\r
041217193245\r
17/06/2020	00600	\r
071628333445\r
14/06/2020	00599	\r
192224414445\r
12/06/2020	00598	\r
051622273031\r
10/06/2020	00597	\r
021123252635\r
07/06/2020	00596	\r
060711162344\r
05/06/2020	00595	\r
101322283843\r
03/06/2020	00594	\r
011517194043\r
31/05/2020	00593	\r
010613273540\r
29/05/2020	00592	\r
041023263537\r
27/05/2020	00591	\r
061529303742\r
24/05/2020	00590	\r
012930323435\r
22/05/2020	00589	\r
030819283541\r
20/05/2020	00588	\r
010815232539\r
17/05/2020	00587	\r
020421303337\r
15/05/2020	00586	\r
031213283336\r
13/05/2020	00585	\r
062021354045\r
10/05/2020	00584	\r
070923323337\r
08/05/2020	00583	\r
010307122225\r
06/05/2020	00582	\r
031825293044\r
03/05/2020	00581	\r
051829323844\r
01/05/2020	00580	\r
060716374044\r
29/04/2020	00579	\r
010811131532\r
26/04/2020	00578	\r
052530363741\r
24/04/2020	00577	\r
103137394043\r
29/03/2020	00576	\r
071023363944\r
27/03/2020	00575	\r
010610353645\r
25/03/2020	00574	\r
263133373845\r
22/03/2020	00573	\r
021019222429\r
20/03/2020	00572	\r
082329373944\r
18/03/2020	00571	\r
062130373845\r
15/03/2020	00570	\r
040711171931\r
13/03/2020	00569	\r
081320283545\r
11/03/2020	00568	\r
121629353744\r
08/03/2020	00567	\r
031317192143\r
06/03/2020	00566	\r
060910162642\r
04/03/2020	00565	\r
010717243541\r
01/03/2020	00564	\r
010607132639\r
28/02/2020	00563	\r
021923272938\r
26/02/2020	00562	\r
021012202439\r
23/02/2020	00561	\r
010616233442\r
21/02/2020	00560	\r
131522282941\r
19/02/2020	00559	\r
011623253038\r
16/02/2020	00558	\r
010414363741\r
14/02/2020	00557	\r
041424323643\r
12/02/2020	00556	\r
051316202435\r
09/02/2020	00555	\r
010418222635\r
07/02/2020	00554	\r
061115334044\r
05/02/2020	00553	\r
091924373845\r
02/02/2020	00552	\r
010416323538\r
31/01/2020	00551	\r
080920253040\r
29/01/2020	00550	\r
031016243944\r
26/01/2020	00549	\r
040509253337\r
22/01/2020	00548	\r
011516343642\r
19/01/2020	00547	\r
010419253539\r
17/01/2020	00546	\r
082628374042\r
15/01/2020	00545	\r
020819313844\r
12/01/2020	00544	\r
071217213545\r
10/01/2020	00543	\r
101824354143\r
08/01/2020	00542	\r
020410212543\r
05/01/2020	00541	\r
051112264445\r
03/01/2020	00540	\r
011517263244\r
01/01/2020	00539	\r
081023263738\r
29/12/2019	00538	\r
071221243543\r
27/12/2019	00537	\r
020710123343\r
25/12/2019	00536	\r
101825263643\r
22/12/2019	00535	\r
091011182236\r
20/12/2019	00534	\r
010916273845\r
18/12/2019	00533	\r
080912192225\r
15/12/2019	00532	\r
031315162236\r
13/12/2019	00531	\r
020809252640\r
11/12/2019	00530	\r
010208272939\r
08/12/2019	00529	\r
122030313444\r
06/12/2019	00528	\r
022026354345\r
04/12/2019	00527	\r
161924303235\r
01/12/2019	00526	\r
031416273135\r
29/11/2019	00525	\r
141516171934\r
27/11/2019	00524	\r
030513192033\r
24/11/2019	00523	\r
052124282934\r
22/11/2019	00522	\r
010910193038\r
20/11/2019	00521	\r
102122244344\r
17/11/2019	00520	\r
060714313944\r
15/11/2019	00519	\r
021327334041\r
13/11/2019	00518	\r
171924303140\r
10/11/2019	00517	\r
041421283236\r
08/11/2019	00516	\r
041619303244\r
06/11/2019	00515	\r
031522233843\r
03/11/2019	00514	\r
283032384445\r
01/11/2019	00513	\r
061120303740\r
30/10/2019	00512	\r
020508122938\r
27/10/2019	00511	\r
011929304042\r
25/10/2019	00510	\r
040709223237\r
23/10/2019	00509	\r
020921233241\r
20/10/2019	00508	\r
010308153840\r
18/10/2019	00507	\r
041415222839\r
16/10/2019	00506	\r
010423284142\r
13/10/2019	00505	\r
062228313740\r
11/10/2019	00504	\r
061214272836\r
09/10/2019	00503	\r
031221242832\r
06/10/2019	00502	\r
010617304445\r
04/10/2019	00501	\r
020924253036\r
02/10/2019	00500	\r
020607252841\r
29/09/2019	00499	\r
020912182123\r
27/09/2019	00498	\r
060911283744\r
25/09/2019	00497	\r
091422264445\r
22/09/2019	00496	\r
030621363839\r
20/09/2019	00495	\r
071224293145\r
18/09/2019	00494	\r
030913171920\r
15/09/2019	00493	\r
080928333543\r
13/09/2019	00492	\r
021517253038\r
11/09/2019	00491	\r
212529323435\r
08/09/2019	00490	\r
060911262836\r
06/09/2019	00489	\r
020413152631\r
04/09/2019	00488	\r
010911233037\r
01/09/2019	00487	\r
050714162940\r
30/08/2019	00486	\r
050622232544\r
28/08/2019	00485	\r
010412141930\r
25/08/2019	00484	\r
070815202431\r
23/08/2019	00483	\r
060712171924\r
21/08/2019	00482	\r
060817202131\r
18/08/2019	00481	\r
020718212433\r
16/08/2019	00480	\r
061415193139\r
14/08/2019	00479	\r
132022243334\r
11/08/2019	00478	\r
010407092531\r
09/08/2019	00477	\r
111926283042\r
07/08/2019	00476	\r
010513313243\r
04/08/2019	00475	\r
061021304345\r
02/08/2019	00474	\r
111820222526\r
31/07/2019	00473	\r
061215192545\r
28/07/2019	00472	\r
051416244243\r
26/07/2019	00471	\r
051416222533\r
24/07/2019	00470	\r
202225394445\r
21/07/2019	00469	\r
070810243344\r
19/07/2019	00468	\r
091223262843\r
17/07/2019	00467	\r
101116222835\r
14/07/2019	00466	\r
020307253334\r
12/07/2019	00465	\r
161824264044\r
10/07/2019	00464	\r
010206071627\r
07/07/2019	00463	\r
021821233031\r
05/07/2019	00462	\r
192130313743\r
03/07/2019	00461	\r
020725293945\r
30/06/2019	00460	\r
052022252832\r
28/06/2019	00459	\r
112537404145\r
26/06/2019	00458	\r
010509103341\r
23/06/2019	00457	\r
030811273236\r
21/06/2019	00456	\r
010419212339\r
19/06/2019	00455	\r
020411153540\r
16/06/2019	00454	\r
060719293136\r
14/06/2019	00453	\r
021216363745\r
12/06/2019	00452	\r
101121232637\r
09/06/2019	00451	\r
020622253536\r
07/06/2019	00450	\r
111315262741\r
05/06/2019	00449	\r
040822253739\r
02/06/2019	00448	\r
020512354143\r
31/05/2019	00447	\r
050607122330\r
29/05/2019	00446	\r
121819273542\r
26/05/2019	00445	\r
111214232932\r
24/05/2019	00444	\r
020331333540\r
22/05/2019	00443	\r
011316222335\r
19/05/2019	00442	\r
021119273042\r
17/05/2019	00441	\r
061618293943\r
15/05/2019	00440	\r
172829333435\r
12/05/2019	00439	\r
010813172143\r
10/05/2019	00438	\r
052325303538\r
08/05/2019	00437	\r
010708313445\r
05/05/2019	00436	\r
132730383941\r
03/05/2019	00435	\r
010614313544\r
01/05/2019	00434	\r
182324273341\r
28/04/2019	00433	\r
042428303343\r
26/04/2019	00432	\r
010214151630\r
24/04/2019	00431	\r
040712132045\r
21/04/2019	00430	\r
081113204143\r
19/04/2019	00429	\r
010405121721\r
17/04/2019	00428	\r
071121253044\r
14/04/2019	00427	\r
041320343537\r
12/04/2019	00426	\r
031215161744\r
10/04/2019	00425	\r
071114303542\r
07/04/2019	00424	\r
081026283234\r
05/04/2019	00423	\r
020725363843\r
03/04/2019	00422	\r
041118333445\r
31/03/2019	00421	\r
030519283138\r
29/03/2019	00420	\r
021926273037\r
27/03/2019	00419	\r
091222243042\r
24/03/2019	00418	\r
051721273440\r
22/03/2019	00417	\r
010306131841\r
20/03/2019	00416	\r
020717242937\r
17/03/2019	00415	\r
050616182442\r
15/03/2019	00414	\r
051015193842\r
13/03/2019	00413	\r
051624263444\r
10/03/2019	00412	\r
052431324245\r
08/03/2019	00411	\r
041420273243\r
06/03/2019	00410	\r
020714244041\r
03/03/2019	00409	\r
011317203045\r
01/03/2019	00408	\r
152329313843\r
27/02/2019	00407	\r
051215162535\r
24/02/2019	00406	\r
010713233242\r
22/02/2019	00405	\r
071018254445\r
20/02/2019	00404	\r
011015243745\r
17/02/2019	00403	\r
111214252931\r
15/02/2019	00402	\r
032226273044\r
13/02/2019	00401	\r
051118333741\r
10/02/2019	00400	\r
011117252935\r
08/02/2019	00399	\r
111233363943\r
06/02/2019	00398	\r
222425303338\r
03/02/2019	00397	\r
010205092324\r
01/02/2019	00396	\r
030406383943\r
30/01/2019	00395	\r
010406133741\r
27/01/2019	00394	\r
091112222729\r
25/01/2019	00393	\r
111314223038\r
23/01/2019	00392	\r
020913293340\r
20/01/2019	00391	\r
081621313538\r
18/01/2019	00390	\r
121519384045\r
16/01/2019	00389	\r
010814243140\r
13/01/2019	00388	\r
012021232633\r
11/01/2019	00387	\r
192122232544\r
09/01/2019	00386	\r
172728303341\r
06/01/2019	00385	\r
092233343544\r
04/01/2019	00384	\r
010814161922\r
02/01/2019	00383	\r
041432353640\r
30/12/2018	00382	\r
101931354244\r
28/12/2018	00381	\r
032224253137\r
26/12/2018	00380	\r
212834354144\r
23/12/2018	00379	\r
010310111644\r
21/12/2018	00378	\r
010716272934\r
19/12/2018	00377	\r
021011324044\r
16/12/2018	00376	\r
011422263542\r
14/12/2018	00375	\r
071620263034\r
12/12/2018	00374	\r
010311152730\r
09/12/2018	00373	\r
060826344041\r
07/12/2018	00372	\r
010607223139\r
05/12/2018	00371	\r
072829394245\r
02/12/2018	00370	\r
020412233745\r
30/11/2018	00369	\r
111823252835\r
28/11/2018	00368	\r
081320212528\r
25/11/2018	00367	\r
030511182429\r
23/11/2018	00366	\r
081012212540\r
21/11/2018	00365	\r
070916192433\r
18/11/2018	00364	\r
062728303744\r
16/11/2018	00363	\r
041218212541\r
14/11/2018	00362	\r
121424263040\r
11/11/2018	00361	\r
202326273234\r
09/11/2018	00360	\r
061828323435\r
07/11/2018	00359	\r
061822253137\r
04/11/2018	00358	\r
071213172530\r
02/11/2018	00357	\r
040611182425\r
31/10/2018	00356	\r
172226303335\r
28/10/2018	00355	\r
091819203145\r
26/10/2018	00354	\r
021831333641\r
24/10/2018	00353	\r
062634353942\r
21/10/2018	00352	\r
062224283037\r
19/10/2018	00351	\r
021430383945\r
17/10/2018	00350	\r
011214363943\r
14/10/2018	00349	\r
070809344043\r
12/10/2018	00348	\r
111220262842\r
10/10/2018	00347	\r
181922284142\r
07/10/2018	00346	\r
141831343944\r
05/10/2018	00345	\r
041217293544\r
03/10/2018	00344	\r
061219212545\r
30/09/2018	00343	\r
012024364345\r
28/09/2018	00342	\r
020611131538\r
26/09/2018	00341	\r
121927394245\r
23/09/2018	00340	\r
182732354144\r
21/09/2018	00339	\r
010311142329\r
19/09/2018	00338	\r
102022242742\r
16/09/2018	00337	\r
031317182334\r
14/09/2018	00336	\r
121617182634\r
12/09/2018	00335	\r
111213162931\r
09/09/2018	00334	\r
081418214445\r
07/09/2018	00333	\r
081011284245\r
05/09/2018	00332	\r
050622273437\r
02/09/2018	00331	\r
101213222640\r
31/08/2018	00330	\r
111930363840\r
29/08/2018	00329	\r
161724283036\r
26/08/2018	00328	\r
010311122236\r
24/08/2018	00327	\r
032225293340\r
22/08/2018	00326	\r
151718333444\r
19/08/2018	00325	\r
161828363745\r
17/08/2018	00324	\r
030822283342\r
15/08/2018	00323	\r
122425334044\r
12/08/2018	00322	\r
051617283138\r
10/08/2018	00321	\r
182224294145\r
08/08/2018	00320	\r
193437394144\r
05/08/2018	00319	\r
071018313943\r
03/08/2018	00318	\r
030810242728\r
01/08/2018	00317	\r
050629303738\r
29/07/2018	00316	\r
263132374345\r
27/07/2018	00315	\r
022132373842\r
25/07/2018	00314	\r
091618384145\r
22/07/2018	00313	\r
080924274045\r
20/07/2018	00312	\r
131416192023\r
18/07/2018	00311	\r
081014192634\r
15/07/2018	00310	\r
071520293138\r
13/07/2018	00309	\r
030809252728\r
11/07/2018	00308	\r
122628293943\r
08/07/2018	00307	\r
020708102844\r
06/07/2018	00306	\r
222633343842\r
04/07/2018	00305	\r
020327283443\r
01/07/2018	00304	\r
040715283437\r
29/06/2018	00303	\r
061822243639\r
27/06/2018	00302	\r
252729333738\r
24/06/2018	00301	\r
060823323341\r
22/06/2018	00300	\r
151920263439\r
20/06/2018	00299	\r
021822303243\r
17/06/2018	00298	\r
030506073440\r
15/06/2018	00297	\r
081113232428\r
13/06/2018	00296	\r
020417243140\r
10/06/2018	00295	\r
222535363839\r
08/06/2018	00294	\r
041332354042\r
06/06/2018	00293	\r
062022264344\r
03/06/2018	00292	\r
182024404245\r
01/06/2018	00291	\r
061419384344\r
30/05/2018	00290	\r
021719273136\r
27/05/2018	00289	\r
050917181922\r
25/05/2018	00288	\r
051422262939\r
23/05/2018	00287	\r
131625343741\r
20/05/2018	00286	\r
181925262939\r
18/05/2018	00285	\r
031824293035\r
16/05/2018	00284	\r
102123253538\r
13/05/2018	00283	\r
061116182741\r
11/05/2018	00282	\r
101126293338\r
09/05/2018	00281	\r
091520303133\r
06/05/2018	00280	\r
112628343637\r
04/05/2018	00279	\r
091825262729\r
02/05/2018	00278	\r
101122293740\r
29/04/2018	00277	\r
031022232543\r
27/04/2018	00276	\r
102024272829\r
25/04/2018	00275	\r
041517232943\r
22/04/2018	00274	\r
060722323639\r
20/04/2018	00273	\r
060914303342\r
18/04/2018	00272	\r
061628293944\r
15/04/2018	00271	\r
030913203034\r
13/04/2018	00270	\r
112224333843\r
11/04/2018	00269	\r
072023252639\r
08/04/2018	00268	\r
020511163034\r
06/04/2018	00267	\r
010708093640\r
04/04/2018	00266	\r
020306164144\r
01/04/2018	00265	\r
041224333943\r
30/03/2018	00264	\r
071118283443\r
28/03/2018	00263	\r
121831343542\r
25/03/2018	00262	\r
041013223842\r
23/03/2018	00261	\r
030612222635\r
21/03/2018	00260	\r
061938404144\r
18/03/2018	00259	\r
142124283140\r
16/03/2018	00258	\r
060813172034\r
14/03/2018	00257	\r
122123273134\r
11/03/2018	00256	\r
011419264142\r
09/03/2018	00255	\r
051013192544\r
07/03/2018	00254	\r
081925313740\r
04/03/2018	00253	\r
041119253240\r
02/03/2018	00252	\r
030715274145\r
28/02/2018	00251	\r
171921233640\r
25/02/2018	00250	\r
081012293042\r
23/02/2018	00249	\r
051619232937\r
21/02/2018	00248	\r
182324262933\r
18/02/2018	00247	\r
010514163638\r
14/02/2018	00246	\r
123132343543\r
11/02/2018	00245	\r
051927324145\r
09/02/2018	00244	\r
021014192337\r
07/02/2018	00243	\r
050718263036\r
04/02/2018	00242	\r
010513274045\r
02/02/2018	00241	\r
020714284245\r
31/01/2018	00240	\r
040709103040\r
28/01/2018	00239	\r
122627333637\r
26/01/2018	00238	\r
010918283644\r
24/01/2018	00237	\r
050624334245\r
21/01/2018	00236	\r
011011243237\r
19/01/2018	00235	\r
020427283136\r
17/01/2018	00234	\r
091012222741\r
14/01/2018	00233	\r
010610293241\r
12/01/2018	00232	\r
040817232734\r
10/01/2018	00231	\r
061821223745\r
07/01/2018	00230	\r
040611132431\r
05/01/2018	00229	\r
193034384244\r
03/01/2018	00228	\r
081419303335\r
31/12/2017	00227	\r
031314263034\r
29/12/2017	00226	\r
020817202939\r
27/12/2017	00225	\r
091319212730\r
24/12/2017	00224	\r
010509143031\r
22/12/2017	00223	\r
091317222633\r
20/12/2017	00222	\r
030825374042\r
17/12/2017	00221	\r
040716274041\r
15/12/2017	00220	\r
131417242843\r
13/12/2017	00219	\r
040719243238\r
10/12/2017	00218	\r
273639434445\r
08/12/2017	00217	\r
021115324044\r
06/12/2017	00216	\r
030729313443\r
03/12/2017	00215	\r
080915182730\r
01/12/2017	00214	\r
101930353945\r
29/11/2017	00213	\r
192326373841\r
26/11/2017	00212	\r
041217192334\r
24/11/2017	00211	\r
142432343645\r
22/11/2017	00210	\r
050609232735\r
19/11/2017	00209	\r
142030334143\r
17/11/2017	00208	\r
111318193145\r
15/11/2017	00207	\r
010915273343\r
12/11/2017	00206	\r
222637404244\r
10/11/2017	00205	\r
010419212435\r
08/11/2017	00204	\r
011823244041\r
05/11/2017	00203	\r
031738394144\r
03/11/2017	00202	\r
071720222944\r
01/11/2017	00201	\r
041225394244\r
29/10/2017	00200	\r
010528314445\r
27/10/2017	00199	\r
041013212238\r
25/10/2017	00198	\r
121723253438\r
22/10/2017	00197	\r
081416173142\r
20/10/2017	00196	\r
021825333642\r
18/10/2017	00195	\r
162432363740\r
15/10/2017	00194	\r
020914213540\r
13/10/2017	00193	\r
101320212536\r
11/10/2017	00192	\r
041114151926\r
08/10/2017	00191	\r
081624273539\r
06/10/2017	00190	\r
040618203045\r
04/10/2017	00189	\r
040509193744\r
01/10/2017	00188	\r
082327363743\r
29/09/2017	00187	\r
232830353742\r
27/09/2017	00186	\r
101933343545\r
24/09/2017	00185	\r
041011313639\r
22/09/2017	00184	\r
051621313741\r
20/09/2017	00183	\r
050713172333\r
17/09/2017	00182	\r
061115163740\r
15/09/2017	00181	\r
032435374043\r
13/09/2017	00180	\r
030819353840\r
10/09/2017	00179	\r
012223353642\r
08/09/2017	00178	\r
021517324144\r
06/09/2017	00177	\r
052024323642\r
03/09/2017	00176	\r
050626283543\r
01/09/2017	00175	\r
091013192341\r
30/08/2017	00174	\r
050811283541\r
27/08/2017	00173	\r
030716323639\r
25/08/2017	00172	\r
020712274044\r
23/08/2017	00171	\r
062527344243\r
20/08/2017	00170	\r
051518213745\r
18/08/2017	00169	\r
030418223437\r
16/08/2017	00168	\r
061115192241\r
13/08/2017	00167	\r
010306071618\r
11/08/2017	00166	\r
011219353641\r
09/08/2017	00165	\r
111922242531\r
06/08/2017	00164	\r
020910112143\r
04/08/2017	00163	\r
031213232637\r
02/08/2017	00162	\r
071017262843\r
30/07/2017	00161	\r
081724354144\r
28/07/2017	00160	\r
010409263539\r
26/07/2017	00159	\r
092627304044\r
23/07/2017	00158	\r
070913212839\r
21/07/2017	00157	\r
050609151932\r
19/07/2017	00156	\r
040713203544\r
16/07/2017	00155	\r
021027293739\r
14/07/2017	00154	\r
021319242533\r
12/07/2017	00153	\r
050914152642\r
09/07/2017	00152	\r
010914182528\r
07/07/2017	00151	\r
041922303435\r
05/07/2017	00150	\r
010416313740\r
02/07/2017	00149	\r
010507161944\r
30/06/2017	00148	\r
010710384042\r
28/06/2017	00147	\r
020621283940\r
25/06/2017	00146	\r
031433384244\r
23/06/2017	00145	\r
091021374042\r
21/06/2017	00144	\r
092629303537\r
18/06/2017	00143	\r
020812141626\r
16/06/2017	00142	\r
061017212738\r
14/06/2017	00141	\r
050815253135\r
11/06/2017	00140	\r
050611143233\r
09/06/2017	00139	\r
071519243242\r
07/06/2017	00138	\r
050613293544\r
04/06/2017	00137	\r
010923323435\r
02/06/2017	00136	\r
051316323941\r
31/05/2017	00135	\r
071316303744\r
28/05/2017	00134	\r
020717243144\r
26/05/2017	00133	\r
060825394045\r
24/05/2017	00132	\r
082025273033\r
21/05/2017	00131	\r
111417222742\r
19/05/2017	00130	\r
010818283033\r
17/05/2017	00129	\r
070811182342\r
14/05/2017	00128	\r
131517212540\r
12/05/2017	00127	\r
012735424345\r
10/05/2017	00126	\r
071721294044\r
07/05/2017	00125	\r
010728324445\r
05/05/2017	00124	\r
040912323643\r
03/05/2017	00123	\r
031920212545\r
30/04/2017	00122	\r
020608111225\r
28/04/2017	00121	\r
020911121523\r
26/04/2017	00120	\r
141617203539\r
23/04/2017	00119	\r
131722303143\r
21/04/2017	00118	\r
070815303239\r
19/04/2017	00117	\r
192032333844\r
16/04/2017	00116	\r
060718293244\r
14/04/2017	00115	\r
040510333638\r
12/04/2017	00114	\r
020308131941\r
09/04/2017	00113	\r
050821252637\r
07/04/2017	00112	\r
040516173240\r
05/04/2017	00111	\r
131420212333\r
02/04/2017	00110	\r
030507122733\r
31/03/2017	00109	\r
010405112030\r
29/03/2017	00108	\r
040524262837\r
26/03/2017	00107	\r
061223252943\r
24/03/2017	00106	\r
101430323742\r
22/03/2017	00105	\r
010924283336\r
19/03/2017	00104	\r
010206123136\r
17/03/2017	00103	\r
071224434445\r
15/03/2017	00102	\r
030910313240\r
12/03/2017	00101	\r
061130323542\r
10/03/2017	00100	\r
040921273844\r
08/03/2017	00099	\r
051114203242\r
05/03/2017	00098	\r
182124263945\r
03/03/2017	00097	\r
020413222341\r
01/03/2017	00096	\r
030426303544\r
26/02/2017	00095	\r
071116193839\r
24/02/2017	00094	\r
020419234445\r
22/02/2017	00093	\r
010308182842\r
19/02/2017	00092	\r
011724253335\r
17/02/2017	00091	\r
121525273741\r
15/02/2017	00090	\r
041619272930\r
12/02/2017	00089	\r
040612212328\r
10/02/2017	00088	\r
020610132028\r
08/02/2017	00087	\r
152629323438\r
05/02/2017	00086	\r
011126293440\r
03/02/2017	00085	\r
081731323339\r
01/02/2017	00084	\r
021011182233\r
29/01/2017	00083	\r
051321272945\r
25/01/2017	00082	\r
060914182830\r
22/01/2017	00081	\r
012021222629\r
20/01/2017	00080	\r
011131323437\r
18/01/2017	00079	\r
112226283543\r
15/01/2017	00078	\r
052527293143\r
13/01/2017	00077	\r
122429323739\r
11/01/2017	00076	\r
020821293745\r
08/01/2017	00075	\r
121829323945\r
06/01/2017	00074	\r
223034364345\r
04/01/2017	00073	\r
041925272931\r
01/01/2017	00072	\r
091824333639\r
30/12/2016	00071	\r
072327293537\r
28/12/2016	00070	\r
022225333843\r
25/12/2016	00069	\r
051220293436\r
23/12/2016	00068	\r
011724253743\r
21/12/2016	00067	\r
030612141840\r
18/12/2016	00066	\r
030730324143\r
16/12/2016	00065	\r
050833343944\r
14/12/2016	00064	\r
050612162630\r
11/12/2016	00063	\r
020304052224\r
09/12/2016	00062	\r
111215172126\r
07/12/2016	00061	\r
132327283245\r
04/12/2016	00060	\r
030513273844\r
02/12/2016	00059	\r
172633343742\r
30/11/2016	00058	\r
061517202341\r
27/11/2016	00057	\r
121617182230\r
25/11/2016	00056	\r
030425313740\r
23/11/2016	00055	\r
022223242837\r
20/11/2016	00054	\r
092333384142\r
18/11/2016	00053	\r
111216242631\r
16/11/2016	00052	\r
010917284344\r
13/11/2016	00051	\r
112325343645\r
11/11/2016	00050	\r
101722233036\r
09/11/2016	00049	\r
021014242530\r
06/11/2016	00048	\r
041516202641\r
04/11/2016	00047	\r
051322242832\r
02/11/2016	00046	\r
030508101322\r
30/10/2016	00045	\r
071225284044\r
28/10/2016	00044	\r
101113141638\r
26/10/2016	00043	\r
010816182128\r
23/10/2016	00042	\r
020512212240\r
21/10/2016	00041	\r
161730323438\r
19/10/2016	00040	\r
021315171841\r
16/10/2016	00039	\r
052131333842\r
14/10/2016	00038	\r
030709182839\r
12/10/2016	00037	\r
020815161925\r
09/10/2016	00036	\r
021520323344\r
07/10/2016	00035	\r
242527344445\r
05/10/2016	00034	\r
050619314244\r
02/10/2016	00033	\r
162327343538\r
30/09/2016	00032	\r
062030384045\r
28/09/2016	00031	\r
030617213240\r
25/09/2016	00030	\r
012028324244\r
23/09/2016	00029	\r
081419293040\r
21/09/2016	00028	\r
051215303741\r
18/09/2016	00027	\r
071017202532\r
16/09/2016	00026	\r
040506233134\r
14/09/2016	00025	\r
021114232532\r
11/09/2016	00024	\r
060910182031\r
09/09/2016	00023	\r
071316183132\r
07/09/2016	00022	\r
060812131519\r
04/09/2016	00021	\r
111520242745\r
02/09/2016	00020	\r
091324353641\r
31/08/2016	00019	\r
082021313439\r
28/08/2016	00018	\r
040610151644\r
26/08/2016	00017	\r
103639434445\r
24/08/2016	00016	\r
081721233640\r
21/08/2016	00015	\r
132124252944\r
19/08/2016	00014	\r
111217333436\r
17/08/2016	00013	\r
020409192126\r
14/08/2016	00012	\r
131617293137\r
12/08/2016	00011	\r
283134373841\r
10/08/2016	00010	\r
061516192730\r
07/08/2016	00009	\r
030517223031\r
05/08/2016	00008	\r
030913182431\r
03/08/2016	00007	\r
071025272940\r
31/07/2016	00006	\r
020619213539\r
29/07/2016	00005	\r
030813203036\r
27/07/2016	00004	\r
141721253137\r
24/07/2016	00003	\r
011016182338\r
22/07/2016	00002	\r
030414202535\r
20/07/2016	00001	\r
021733373845`,Mw="https://docs.google.com/spreadsheets/d/e/2PACX-1vTuQHHFRzAmMC_tHRnu8cCrr1k2eofH6e3cyk2_YqFfNmREGfR6cSyuIQJnr7OulqrBHF9wMueqpCsY/pub?gid=1819524273&single=true&output=csv",kw="https://docs.google.com/spreadsheets/d/e/2PACX-1vQvXzBIgByEQchrAuLnQJsBrzcm1V64WMbQvDURph3nk7eMz13T26APw3jo466Ijt4m9Gg4q6zgT3bx/pub?gid=974883964&single=true&output=csv",Yi=3,Cw=8e3,Vi=100,Fi=12;function Dw(t,n){var l,a;const e=t.split(/\r?\n/);for(;e.length>0&&e[e.length-1].trim()==="";)e.pop();if(e.length%2!==0)throw new Error("số dòng lẻ, thiếu dòng kết quả");if(e.length/2<Vi)throw new Error(`chỉ có ${e.length/2} kỳ, ít hơn ${Vi}`);const s=[];let o;for(let f=0;f<e.length;f+=2){const h=e[f].trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);if(!h)throw new Error(`dòng ${f+1} không bắt đầu bằng ngày dạng DD/MM/YYYY`);const[p,y,x,b]=h,C=(l=e[f].split(/[\t,]/)[1])==null?void 0:l.trim();(y.length<2||x.length<2)&&s.push(`dòng ${f+1} (kỳ ${C}): ngày "${p}" không đủ 2 chữ số, có thể gõ thiếu`);const q=Date.UTC(Number(b),Number(x)-1,Number(y));o!==void 0&&q>=o&&s.push(`dòng ${f+1} (kỳ ${C}): ngày "${p}" không nhỏ hơn ngày của kỳ ngay trước đó`),o=q;const W=(a=e[f+1].trim().match(/^\d+/))==null?void 0:a[0];if(!W)throw new Error(`dòng ${f+2} không có chuỗi kết quả`);const r0=W.padStart(Fi,"0");if(r0.length!==Fi)throw new Error(`dòng ${f+2}: kết quả sai độ dài`);const i0=r0.match(/.{2}/g).map(Number);if(new Set(i0).size!==6||i0.some(t0=>t0<1||t0>n))throw new Error(`dòng ${f+2}: kết quả ${r0} không hợp lệ cho 6/${n}`);e[f+1]=e[f+1].trim().replace(/^\d+/,r0)}return{csv:e.join(`
`),số_kỳ:e.length/2,ngày_mới_nhất:e[0].trim().slice(0,10),cảnh_báo:s}}const Aw=t=>new Promise(n=>setTimeout(n,t));async function Lw(t,n){let e;for(let s=1;s<=Yi;s++){const o=new AbortController,l=setTimeout(()=>o.abort(),Cw);try{const a=await fetch(t,{cache:"no-store",signal:o.signal});if(!a.ok)throw new Error(`HTTP ${a.status}`);return Dw(await a.text(),n)}catch(a){e=a,s<Yi&&await Aw(500*s)}finally{clearTimeout(l)}}throw e}class ku{constructor(n){g2(this,"loại_xổ_số");g2(this,"vị_trí_dữ_liệu");g2(this,"ngày_xổ_số");g2(this,"kết_quả_xổ_số");g2(this,"số_jacpot_2");g2(this,"kỳ_xổ_số");g2(this,"tuần_xổ_số");g2(this,"giá_trị_ngày");g2(this,"giá_trị_tháng");g2(this,"giá_trị_năm");g2(this,"dấu_thời_gian_của_ngày");g2(this,"dấu_thời_gian_kỳ_sau_đó");g2(this,"dữ_liệu_kỳ_sau_đó");g2(this,"các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau",[]);g2(this,"danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện",[]);g2(this,"danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện",[]);g2(this,"số_kết_quả_trong_các_số_đã_xuất_hiện",0);g2(this,"tập_các_số_đã_xuất_hiện",new Set);g2(this,"dự_đoán_ds_xuất_hiện",[]);g2(this,"hiển_thị_dự_đoán_ds_xuất_hiện",!1);g2(this,"vị_trí_ds_xuất_hiện",[]);g2(this,"xem_dự_đoán","");this.loại_xổ_số=n.loại_xổ_số,this.vị_trí_dữ_liệu=n.vị_trí_dữ_liệu,this.ngày_xổ_số=n.ngày_xổ_số,this.kết_quả_xổ_số=n.kết_quả_xổ_số,this.số_jacpot_2=n.số_jacpot_2,this.kỳ_xổ_số=n.kỳ_xổ_số,this.tuần_xổ_số=n.tuần_xổ_số,this.giá_trị_ngày=n.giá_trị_ngày,this.giá_trị_tháng=n.giá_trị_tháng,this.giá_trị_năm=n.giá_trị_năm,this.dấu_thời_gian_của_ngày=n.dấu_thời_gian_của_ngày,this.dấu_thời_gian_kỳ_sau_đó=n.dấu_thời_gian_kỳ_sau_đó,this.dữ_liệu_kỳ_sau_đó=n.dữ_liệu_kỳ_sau_đó}}const Ow=t=>{const n=[1,2,3,4,5,6,7,8,9];for(let e=10;e<=100;e+=3)e<=t&&n.push(e);for(let e=200;e<=1e3;e+=80)e<=t&&n.push(e);for(let e=1100;e<=t+100;e+=80)n.push(e);return n},Ew={45:[3,5,0],55:[2,4,6]},Cu=(t,n)=>{const e=new Date(t),s=e.getDay(),o=Ew[n];for(let l=1;l<=7;l++){const a=(s+l)%7;if(o.includes(a)){const f=new Date(e);return f.setDate(e.getDate()+l),f.getTime()}}return t},Du=(t,n,e=6)=>{const s=[];let o=t;for(let l=0;l<e;l++)o=Cu(o,n),s.push(o);return s};let Au=bw,Lu=Sw;async function Nw(){const t=[{tên:"45",link:Mw,tổng_số:45,đặt:n=>Au=n},{tên:"55",link:kw,tổng_số:55,đặt:n=>Lu=n}];await Promise.all(t.map(async({tên:n,link:e,tổng_số:s,đặt:o})=>{try{const l=await Lw(e,s);o(l.csv),console.log(`dữ liệu ${n}: Google Sheet, ${l.số_kỳ} kỳ, mới nhất ${l.ngày_mới_nhất}`),l.cảnh_báo.forEach(a=>console.warn(`dữ liệu ${n}: ${a}`))}catch(l){console.warn(`dữ liệu ${n}: không tải được từ Google Sheet (${l.message}), dùng file CSV có sẵn trong dự án (có thể cũ)`)}}))}function Rw(){const n=Au.split(`
`).map(s=>s.split(/\t|,/).map(o=>o.trim()).filter(o=>o!=="")),e=[];for(let s=0;s<n.length/2;s++){const o=n[2*s],l=n[2*s+1],[a,f]=o,h=l[0].match(/.{2}/g)||[],p=e0(a,"DD/MM/YYYY"),y=p.format("dddd"),x="",b=p.day().toString(),C=(p.month()+1).toString(),q=p.year().toString(),W=e0(p,"DD/MM/YYYY").valueOf(),r0=e[e.length-1],i0=e.length,t0=Du(W,45),u0=new ku({loại_xổ_số:45,vị_trí_dữ_liệu:i0,ngày_xổ_số:a,kết_quả_xổ_số:h,số_jacpot_2:x,kỳ_xổ_số:f,tuần_xổ_số:y,giá_trị_ngày:b,giá_trị_tháng:C,giá_trị_năm:q,dấu_thời_gian_của_ngày:W,dấu_thời_gian_kỳ_sau_đó:t0,dữ_liệu_kỳ_sau_đó:r0});e.push(u0)}return e}function Pw(){const n=Lu.split(`
`).map(s=>s.split(/\t|,| \|/).map(o=>o.trim()).filter(o=>o!=="")),e=[];for(let s=0;s<n.length/2;s++){const o=n[2*s],l=n[2*s+1],[a,f]=o,[h,p]=l,y=h.match(/.{2}/g)||[],x=e0(a,"DD/MM/YYYY"),b=x.format("dddd"),C=x.day().toString(),q=(x.month()+1).toString(),W=x.year().toString(),r0=e0(x,"DD/MM/YYYY").valueOf(),i0=e[e.length-1],t0=Du(r0,55),u0=e.length,a0=new ku({loại_xổ_số:55,vị_trí_dữ_liệu:u0,ngày_xổ_số:a,kết_quả_xổ_số:y,kỳ_xổ_số:f,số_jacpot_2:p,tuần_xổ_số:b,giá_trị_ngày:C,giá_trị_tháng:q,giá_trị_năm:W,dấu_thời_gian_của_ngày:r0,dấu_thời_gian_kỳ_sau_đó:t0,dữ_liệu_kỳ_sau_đó:i0});e.push(a0)}return e}const Wi=new WeakMap,Ou=[];function Ui(t){let n=Wi.get(t);return n||(n=t.map(e=>e.kết_quả_xổ_số.map(s=>{const o=Number(s);return Ou[o]=s,o})),Wi.set(t,n)),n}const Bw=(t,n,e,s,o=46)=>{var b;const l=[],a=Ui(t),f=Ui(n),h=new Uint16Array(128),p=[],y=C=>{h[C]++===0&&p.push(C)};e.kết_quả_xổ_số.forEach(C=>{var q;(q=a[s+Number(C)])==null||q.forEach(y)});const x=[];for(let C=s;C<t.length;C++){const q=p.length;if(x.length=0,(b=f[C])==null||b.forEach(W=>{var r0;(r0=a[s+W])==null||r0.forEach(i0=>{y(i0),x.push(i0)})}),p.length===o){const W=[...p].sort((r0,i0)=>h[r0]-h[i0]).map(r0=>Ou[r0]);l.push(W)}x.forEach(W=>h[W]--),p.length=q}return l},Iw=6,J6={45:500,55:1e3};function we(t,n,e){const s=new Array(n+1).fill(0);return t.slice(0,e).forEach(o=>o.kết_quả_xổ_số.forEach(l=>s[Number(l)]++)),s}const qi={ngẫu_nhiên:(t,n)=>new Array(n+1).fill(1),số_nóng_50:(t,n)=>we(t,n,50).map(e=>e+1),số_lạnh_50:(t,n)=>we(t,n,50).map(e=>1/(e+1)),số_lâu_chưa_ra:(t,n)=>{const e=new Array(n+1).fill(t.length);for(let s=t.length-1;s>=0;s--)t[s].kết_quả_xổ_số.forEach(o=>e[Number(o)]=s);return e.map(s=>s+1)},số_vừa_ra:(t,n)=>{var s;const e=new Array(n+1).fill(1);return(s=t[0])==null||s.kết_quả_xổ_số.forEach(o=>e[Number(o)]=4),e}},Hw=50,Gw=10;function $w(t,n,e=Gw){var f;const s=h=>String(h).padStart(2,"0"),o=we(t,n,Hw),l=new Array(n+1).fill(t.length);for(let h=t.length-1;h>=0;h--)t[h].kết_quả_xổ_số.forEach(p=>l[Number(p)]=h);const a=Array.from({length:n},(h,p)=>p+1);return{vừa_ra:((f=t[0])==null?void 0:f.kết_quả_xổ_số)??[],nóng:[...a].sort((h,p)=>o[p]-o[h]||h-p).slice(0,e).map(h=>({số:s(h),lần:o[h]})),lạnh:[...a].sort((h,p)=>o[h]-o[p]||h-p).slice(0,e).map(h=>({số:s(h),lần:o[h]})),lâu_chưa_ra:[...a].sort((h,p)=>l[p]-l[h]||h-p).slice(0,e).map(h=>({số:s(h),số_kỳ:l[h]}))}}function _8(t){let n=t>>>0;return()=>{n=n+1831565813>>>0;let e=n;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Yw=(()=>{const t=[];for(let n=0;n<6;n++)for(let e=n+1;e<6;e++)for(let s=e+1;s<6;s++)for(let o=s+1;o<6;o++)t.push([n,e,s,o]);return t})();function Vw(t,n){return((t[n[0]]*64+t[n[1]])*64+t[n[2]])*64+t[n[3]]}function Fw(t,n,e,s=Math.random){const o=[],l=new Set,a=n*200,f=new Float64Array(t+1);for(let h=0;h<a&&o.length<n;h++){for(let x=1;x<=t;x++)f[x]=s()**(1/Math.max(e[x],1e-9));const p=[];for(let x=0;x<Iw;x++){let b=0;for(let C=1;C<=t;C++)f[C]>f[b]&&(b=C);p.push(b),f[b]=-1}p.sort((x,b)=>x-b);const y=Yw.map(x=>Vw(p,x));y.some(x=>l.has(x))||(y.forEach(x=>l.add(x)),o.push(p))}return o}function Ww(t,n){if(n>t)return 0;let e=1;for(let s=1;s<=n;s++)e=e*(t-n+s)/s;return e}function Uw(t){const n=Ww(t,6),e=1/n;return{từ_5:6*(t-6)/n+e,số_6:e}}const Ht=6,qw=1e4,Ki=20;function X6(t,n){if(n<0||n>t)return 0;let e=1;for(let s=1;s<=n;s++)e=e*(t-n+s)/s;return e}function ji(t){let n=5381;for(let e=0;e<t.length;e++)n=(n<<5)+n+t.charCodeAt(e)|0;return n>>>0}function z3(t,n){const e=[],s=[],o=l=>{if(s.length===n){e.push([...s]);return}for(let a=l;a<=t.length-(n-s.length);a++)s.push(t[a]),o(a+1),s.pop()};return o(0),e}function zi(t){const n=[...t].sort((a,f)=>a-f);let e=n.filter(a=>a<=31).length,s=1,o=1;for(let a=1;a<n.length;a++)o=n[a]===n[a-1]+1?o+1:1,s=Math.max(s,o);s>=3&&(e+=2);const l=n[1]-n[0];return n.every((a,f)=>f===0||a-n[f-1]===l)&&(e+=3),e}function Kw(t){return Ht*Math.min(31,t)/t}function jw(t,n,e=Math.random){const s=o=>o>31?3:o>12?1.5:1;return Array.from({length:t},(o,l)=>l+1).map(o=>({số:o,khóa:e()**(1/s(o))})).sort((o,l)=>l.khóa-o.khóa).slice(0,n).map(o=>o.số).sort((o,l)=>o-l)}function zw(t,n,e,s,o,l){const a=t===55?55:45;if(!Number.isInteger(n)||n<Ht+1)throw new Error(`Nhóm số phải có ít nhất ${Ht+1} số`);if(n>Ki)throw new Error(`Nhóm số tối đa ${Ki} số`);if(!Number.isInteger(e)||e<2||e>=Ht)throw new Error(`Mức đảm bảo phải từ 2 đến ${Ht-1}`);const f=jw(a,n,l===void 0?Math.random:_8(l)),h=h0=>h0.reduce((C0,S0)=>C0|1<<S0,0),p=Array.from({length:n},(h0,C0)=>C0),y=new Map;z3(p,e).forEach((h0,C0)=>y.set(h(h0),C0));const x=z3(p,Ht).map(h0=>({vị_trí:h0,vé:h0.map(C0=>f[C0]),phủ:z3(h0,e).map(C0=>y.get(h(C0)))})),b=x.map(h0=>zi(h0.vé)),C=new Uint8Array(y.size);let q=y.size;const W=[],r0=new Set;for(;q>0;){let h0=-1,C0=-1;for(let S0=0;S0<x.length;S0++){let J0=0;for(const V0 of x[S0].phủ)C[V0]||J0++;(J0>C0||J0===C0&&b[S0]<b[h0])&&(h0=S0,C0=J0)}for(const S0 of x[h0].phủ)C[S0]||(C[S0]=1,q--);W.push(x[h0].vé),r0.add(h0)}const i0=W.length,t0=Math.min(s??i0,x.length);if(t0>i0){const h0=e+1,C0=new Map;z3(p,h0).forEach((V0,l2)=>C0.set(h(V0),l2));const S0=x.map(V0=>z3(V0.vị_trí,h0).map(l2=>C0.get(h(l2)))),J0=new Uint8Array(C0.size);for(r0.forEach(V0=>S0[V0].forEach(l2=>J0[l2]=1));W.length<t0;){let V0=-1,l2=-1;for(let w2=0;w2<x.length;w2++){if(r0.has(w2))continue;let P2=0;for(const L2 of S0[w2])J0[L2]||P2++;(P2>l2||P2===l2&&b[w2]<b[V0])&&(V0=w2,l2=P2)}S0[V0].forEach(w2=>J0[w2]=1),W.push(x[V0].vé),r0.add(V0)}}let u0=0;const a0=X6(a,Ht);for(let h0=e;h0<=Ht;h0++)u0+=X6(n,h0)*X6(a-n,Ht-h0)/a0;return{loại_xổ_số:t,nhóm_số:f,mức_đảm_bảo:e,vé:W.map(h0=>[...h0].sort((C0,S0)=>C0-S0)),số_vé_tối_thiểu:i0,chi_phí:W.length*qw,xác_suất_đạt_đảm_bảo:u0,điểm_phổ_biến_trung_bình:Number((W.reduce((h0,C0)=>h0+zi(C0),0)/W.length).toFixed(2)),điểm_phổ_biến_vé_ngẫu_nhiên:Number(Kw(a).toFixed(2))}}const Zi=["trúng_3","trúng_4","trúng_5","jackpot_2","jackpot_1"],Zw=1e4,Jw=.03,Xw=Zw*(1+Jw),Ji=1e7;function Qw(t){return t>Ji?t-.1*(t-Ji):t}const Xi={45:{trúng_3:3e4,trúng_4:3e5,trúng_5:1e7,jackpot_2:0,jackpot_1:12e9},55:{trúng_3:5e4,trúng_4:5e5,trúng_5:4e7,jackpot_2:3e9,jackpot_1:3e10}};function Q6(t,n){if(n<0||n>t)return 0;let e=1;for(let s=1;s<=n;s++)e=e*(t-n+s)/s;return e}function tS(t,n){const e=Q6(t,6),s=l=>Q6(6,l)*Q6(t-6,6-l)/e,o=n?6/e:0;return{trúng_3:s(3),trúng_4:s(4),trúng_5:s(5)-o,jackpot_2:o,jackpot_1:s(6)}}const Qi=6,ts=6,nS=3,rS=20261008;function eS(t){const n=new Map,e=new Map;return t.forEach(s=>{const o=s%ts,l=Math.floor(s/ts);n.set(o,(n.get(o)??0)+1),e.set(l,(e.get(l)??0)+1)}),[...n.values()].some(s=>s>=2)&&[...e.values()].every(s=>s<=nS)}const iS=(()=>{const t=[];for(let n=0;n<6;n++)for(let e=n+1;e<6;e++)for(let s=e+1;s<6;s++)for(let o=s+1;o<6;o++)t.push([n,e,s,o]);return t})(),ns=new Map;function sS(t,n){const e=`${t}-${n}`,s=ns.get(e);if(s)return s;const o=_8(rS),l=[],a=new Set,f=n*3e3,h=Array.from({length:t},(p,y)=>y);for(let p=0;p<f&&l.length<n;p++){for(let b=0;b<Qi;b++){const C=b+Math.floor(o()*(t-b));[h[b],h[C]]=[h[C],h[b]]}const y=h.slice(0,Qi).sort((b,C)=>b-C);if(!eS(y))continue;const x=iS.map(b=>((y[b[0]]*64+y[b[1]])*64+y[b[2]])*64+y[b[3]]);x.some(b=>a.has(b))||(x.forEach(b=>a.add(b)),l.push(y))}return ns.set(e,l),l}function oS(t,n){return n.map(e=>e.map(s=>t[s]).sort())}function rs(t,n){const e=n.loại_xổ_số,s=e===55,o=new Set(n.kết_quả_xổ_số),l=Xi[e]??Xi[45],a=tS(e===55?55:45,s),f=Object.fromEntries(Zi.map(b=>[b,0])),h=[];t.forEach(b=>{const C=b.filter(r0=>o.has(r0)),q=C.length;let W;q===3?W="trúng_3":q===4?W="trúng_4":q===5?W=s&&b.includes(n.số_jacpot_2)?"jackpot_2":"trúng_5":q===6&&(W="jackpot_1"),W&&(f[W]++,q>=4&&h.push({vé:b,số_trúng:q,số_trùng:C,mức:W}))});let p=0;const y=Zi.map(b=>{const C=Qw(l[b]),q=f[b]*C;return p+=q,{mức_trúng:b,số_vé:f[b],kỳ_vọng_ngẫu_nhiên:Number((t.length*a[b]).toFixed(2)),tiền_mỗi_vé:C,tiền:q}}),x=t.length*Xw;return{dòng_theo_mức:y,chi_phí:x,tiền_thắng:p,lãi_lỗ:p-x,vé_trúng_từ_4:h.sort((b,C)=>C.số_trúng-b.số_trúng)}}const uS="BộNhớĐệmDựĐoán",St="bộ_nhớ_đệm",lS="ds_dự_đoán_",es="bộ_vé_phủ|",is="vé_từ_danh_sách|",ss="vé_mục_tiêu|";function x5(){return new Promise((t,n)=>{const e=indexedDB.open(uS,1);e.onerror=()=>n(e.error),e.onsuccess=()=>t(e.result),e.onupgradeneeded=()=>{e.result.objectStoreNames.contains(St)||e.result.createObjectStore(St)}})}async function aS(t){try{const n=await x5();try{return await new Promise((e,s)=>{const o=n.transaction(St,"readonly").objectStore(St).get(t);o.onerror=()=>s(o.error),o.onsuccess=()=>e(o.result)})}finally{n.close()}}catch(n){console.warn("Không đọc được bộ nhớ đệm:",n);return}}async function te(t){try{const n=await x5();try{return await new Promise((e,s)=>{const o=n.transaction(St,"readonly").objectStore(St),l=IDBKeyRange.bound(t,t+"￿"),a=[],f=o.openCursor(l);f.onerror=()=>s(f.error),f.onsuccess=()=>{const h=f.result;if(!h)return e(a);a.push({khóa:String(h.key),giá_trị:h.value}),h.continue()}})}finally{n.close()}}catch(n){return console.warn("Không đọc được bộ nhớ đệm:",n),[]}}async function Mr(t,n){try{const e=await x5();try{await new Promise((s,o)=>{const l=e.transaction(St,"readwrite");l.objectStore(St).put(n,t),l.oncomplete=()=>s(),l.onerror=()=>o(l.error),l.onabort=()=>o(l.error)})}finally{e.close()}}catch(e){console.warn("Không ghi được bộ nhớ đệm:",e)}}async function cS(){try{const t=await x5();try{return await new Promise((n,e)=>{const s=t.transaction(St,"readwrite");s.objectStore(St).clear(),s.oncomplete=()=>n(),s.onerror=()=>e(s.error),s.onabort=()=>e(s.error)}),!0}finally{t.close()}}catch(t){return console.warn("Không xoá được bộ nhớ đệm:",t),!1}}function fS(t,n,e){let s=5381;const o=l=>{for(let a=0;a<l.length;a++)s=(s<<5)+s+l.charCodeAt(a)|0};o(e);for(const l of[t,n]){o(`|${l.length}|`);for(const a of l)o(`${a.ngày_xổ_số}:${a.kết_quả_xổ_số.join("")};`)}return`${e}#${s>>>0}`}const Pn="DD/MM/YYYY";function Z3(t){return typeof t=="number"?e0(t).format(Pn):t}class hS{constructor(){g2(this,"tên_cơ_sở_dữ_liệu","DữLiệuLặpLại");g2(this,"phiên_bản",1);g2(this,"tên_kho_dữ_liệu","bộ_lưu_trữ");g2(this,"cơ_sở_dữ_liệu",null);g2(this,"đã_chuyển_định_dạng_ngày",!1)}async khởi_tạo(){return new Promise((n,e)=>{const s=indexedDB.open(this.tên_cơ_sở_dữ_liệu,this.phiên_bản);s.onerror=()=>e(s.error),s.onsuccess=()=>{this.cơ_sở_dữ_liệu=s.result,this.chuyển_định_dạng_ngày_bản_ghi_cũ().then(n,e)},s.onupgradeneeded=o=>{const l=o.target.result;if(!l.objectStoreNames.contains(this.tên_kho_dữ_liệu)){const a=l.createObjectStore(this.tên_kho_dữ_liệu,{keyPath:"id"});a.createIndex("tên","tên",{unique:!1}),a.createIndex("ngày_cập_nhật","ngày_cập_nhật",{unique:!1})}}})}async chuyển_định_dạng_ngày_bản_ghi_cũ(){this.đã_chuyển_định_dạng_ngày||!this.cơ_sở_dữ_liệu||(this.đã_chuyển_định_dạng_ngày=!0,await new Promise((n,e)=>{const s=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite"),o=s.objectStore(this.tên_kho_dữ_liệu).openCursor();o.onsuccess=()=>{const l=o.result;if(!l)return;const a=l.value;(typeof a.ngày_tạo=="number"||typeof a.ngày_cập_nhật=="number")&&(a.ngày_tạo=Z3(a.ngày_tạo),a.ngày_cập_nhật=Z3(a.ngày_cập_nhật),l.update(a)),l.continue()},o.onerror=()=>e(o.error),s.oncomplete=()=>n(),s.onerror=()=>e(s.error)}))}async lưu_dữ_liệu(n,e){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");const s=`${n}_${Date.now()}`,o={id:s,tên:n,ngày_tạo:e0().format(Pn),ngày_cập_nhật:e0().format(Pn),dữ_liệu:e,kích_thước:JSON.stringify(e).length};return new Promise((l,a)=>{const p=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).add(o);p.onerror=()=>a(p.error),p.onsuccess=()=>l(s)})}async lấy_dữ_liệu_theo_id(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((e,s)=>{const a=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).get(n);a.onerror=()=>s(a.error),a.onsuccess=()=>{const f=a.result;e(f?f.dữ_liệu:null)}})}async lấy_tất_cả(){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((n,e)=>{const l=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).getAll();l.onerror=()=>e(l.error),l.onsuccess=()=>n(l.result)})}async lấy_dữ_liệu_theo_tên(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((e,s)=>{const f=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readonly").objectStore(this.tên_kho_dữ_liệu).index("tên").getAll(n);f.onerror=()=>s(f.error),f.onsuccess=()=>e(f.result)})}async cập_nhật_dữ_liệu(n,e){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((s,o)=>{const a=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu),f=a.get(n);f.onsuccess=()=>{const h=f.result;if(h){h.dữ_liệu=e,h.ngày_cập_nhật=e0().format(Pn),h.kích_thước=JSON.stringify(e).length;const p=a.put(h);p.onsuccess=()=>s(),p.onerror=()=>o(p.error)}else o(new Error("Không tìm thấy dữ liệu"))},f.onerror=()=>o(f.error)})}async xóa_dữ_liệu(n){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((e,s)=>{const a=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).delete(n);a.onerror=()=>s(a.error),a.onsuccess=()=>e()})}async xóa_tất_cả(){if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");return new Promise((n,e)=>{const l=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).clear();l.onerror=()=>e(l.error),l.onsuccess=()=>n()})}async tìm_kiếm_theo_ngày(n,e){const s=await this.lấy_tất_cả(),o=e0(n,Pn),l=e0(e,Pn);return s.filter(a=>e0(Z3(a.ngày_cập_nhật),Pn).isBetween(o,l,"day","[]"))}async lấy_thống_kê(){const n=await this.lấy_tất_cả(),e=n.reduce((o,l)=>o+l.kích_thước,0),s=n.reduce((o,l)=>l.kích_thước>((o==null?void 0:o.kích_thước)||0)?l:o,null);return{tổng_bộ_lưu_trữ:n.length,tổng_kích_thước:e,lớn_nhất:s}}async xuất_dữ_liệu(){const n=await this.lấy_tất_cả();return JSON.stringify(n,null,2)}async nhập_dữ_liệu(n){const e=JSON.parse(n);let s=0;for(const o of e)try{if(!this.cơ_sở_dữ_liệu)throw new Error("IndexedDB chưa khởi tạo");await new Promise((l,a)=>{const p=this.cơ_sở_dữ_liệu.transaction([this.tên_kho_dữ_liệu],"readwrite").objectStore(this.tên_kho_dữ_liệu).add({...o,ngày_tạo:Z3(o.ngày_tạo),ngày_cập_nhật:Z3(o.ngày_cập_nhật)});p.onsuccess=()=>{s++,l()},p.onerror=()=>a(p.error)})}catch{console.warn(`Lỗi nhập dữ liệu: ${o.id}`)}return s}}const u3=new hS;var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _S(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Q3={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var dS=Q3.exports,os;function gS(){return os||(os=1,function(t,n){(function(){var e,s="4.17.21",o=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",f="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",p=500,y="__lodash_placeholder__",x=1,b=2,C=4,q=1,W=2,r0=1,i0=2,t0=4,u0=8,a0=16,h0=32,C0=64,S0=128,J0=256,V0=512,l2=30,w2="...",P2=800,L2=16,i1=1,y1=2,n2=3,I0=1/0,R0=9007199254740991,s1=17976931348623157e292,S2=NaN,y2=4294967295,O2=y2-1,T1=y2>>>1,x1=[["ary",S0],["bind",r0],["bindKey",i0],["curry",u0],["curryRight",a0],["flip",V0],["partial",h0],["partialRight",C0],["rearg",J0]],X2="[object Arguments]",B2="[object Array]",I="[object AsyncFunction]",N="[object Boolean]",M="[object Date]",E="[object DOMException]",$="[object Error]",p0="[object Function]",m="[object GeneratorFunction]",T="[object Map]",A="[object Number]",Y="[object Null]",R="[object Object]",F="[object Promise]",s0="[object Proxy]",X="[object RegExp]",z="[object Set]",K="[object String]",k0="[object Symbol]",d0="[object Undefined]",x0="[object WeakMap]",L0="[object WeakSet]",$0="[object ArrayBuffer]",U0="[object DataView]",z0="[object Float32Array]",U2="[object Float64Array]",H2="[object Int8Array]",z2="[object Int16Array]",Z="[object Int32Array]",v="[object Uint8Array]",J="[object Uint8ClampedArray]",H="[object Uint16Array]",U="[object Uint32Array]",_0=/\b__p \+= '';/g,O=/\b(__p \+=) '' \+/g,c0=/(__e\(.*?\)|\b__t\)) \+\n'';/g,T0=/&(?:amp|lt|gt|quot|#39);/g,w0=/[&<>"']/g,m0=RegExp(T0.source),M0=RegExp(w0.source),j0=/<%-([\s\S]+?)%>/g,r2=/<%([\s\S]+?)%>/g,d2=/<%=([\s\S]+?)%>/g,Q2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,t1=/^\w*$/,ct=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_1=/[\\^$.*+?()[\]{}|]/g,n1=RegExp(_1.source),w1=/^\s+/,Q1=/\s/,L4=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Wn=/\{\n\/\* \[wrapped with (.+)\] \*/,w5=/,? & /,Nu=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ru=/[()=,{}\[\]\/\s]/,Pu=/\\(\\)?/g,Bu=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,d8=/\w*$/,Iu=/^[-+]0x[0-9a-f]+$/i,Hu=/^0b[01]+$/i,Gu=/^\[object .+?Constructor\]$/,$u=/^0o[0-7]+$/i,Yu=/^(?:0|[1-9]\d*)$/,Vu=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,O4=/($^)/,Fu=/['\n\r\u2028\u2029\\]/g,E4="\\ud800-\\udfff",Wu="\\u0300-\\u036f",Uu="\\ufe20-\\ufe2f",qu="\\u20d0-\\u20ff",g8=Wu+Uu+qu,p8="\\u2700-\\u27bf",m8="a-z\\xdf-\\xf6\\xf8-\\xff",Ku="\\xac\\xb1\\xd7\\xf7",ju="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",zu="\\u2000-\\u206f",Zu=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",v8="A-Z\\xc0-\\xd6\\xd8-\\xde",y8="\\ufe0e\\ufe0f",T8=Ku+ju+zu+Zu,S5="['’]",Ju="["+E4+"]",x8="["+T8+"]",N4="["+g8+"]",w8="\\d+",Xu="["+p8+"]",S8="["+m8+"]",b8="[^"+E4+T8+w8+p8+m8+v8+"]",b5="\\ud83c[\\udffb-\\udfff]",Qu="(?:"+N4+"|"+b5+")",M8="[^"+E4+"]",M5="(?:\\ud83c[\\udde6-\\uddff]){2}",k5="[\\ud800-\\udbff][\\udc00-\\udfff]",Un="["+v8+"]",k8="\\u200d",C8="(?:"+S8+"|"+b8+")",tl="(?:"+Un+"|"+b8+")",D8="(?:"+S5+"(?:d|ll|m|re|s|t|ve))?",A8="(?:"+S5+"(?:D|LL|M|RE|S|T|VE))?",L8=Qu+"?",O8="["+y8+"]?",nl="(?:"+k8+"(?:"+[M8,M5,k5].join("|")+")"+O8+L8+")*",rl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",el="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",E8=O8+L8+nl,il="(?:"+[Xu,M5,k5].join("|")+")"+E8,sl="(?:"+[M8+N4+"?",N4,M5,k5,Ju].join("|")+")",ol=RegExp(S5,"g"),ul=RegExp(N4,"g"),C5=RegExp(b5+"(?="+b5+")|"+sl+E8,"g"),ll=RegExp([Un+"?"+S8+"+"+D8+"(?="+[x8,Un,"$"].join("|")+")",tl+"+"+A8+"(?="+[x8,Un+C8,"$"].join("|")+")",Un+"?"+C8+"+"+D8,Un+"+"+A8,el,rl,w8,il].join("|"),"g"),al=RegExp("["+k8+E4+g8+y8+"]"),cl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,fl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],hl=-1,C2={};C2[z0]=C2[U2]=C2[H2]=C2[z2]=C2[Z]=C2[v]=C2[J]=C2[H]=C2[U]=!0,C2[X2]=C2[B2]=C2[$0]=C2[N]=C2[U0]=C2[M]=C2[$]=C2[p0]=C2[T]=C2[A]=C2[R]=C2[X]=C2[z]=C2[K]=C2[x0]=!1;var b2={};b2[X2]=b2[B2]=b2[$0]=b2[U0]=b2[N]=b2[M]=b2[z0]=b2[U2]=b2[H2]=b2[z2]=b2[Z]=b2[T]=b2[A]=b2[R]=b2[X]=b2[z]=b2[K]=b2[k0]=b2[v]=b2[J]=b2[H]=b2[U]=!0,b2[$]=b2[p0]=b2[x0]=!1;var _l={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},dl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},pl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ml=parseFloat,vl=parseInt,N8=typeof kr=="object"&&kr&&kr.Object===Object&&kr,yl=typeof self=="object"&&self&&self.Object===Object&&self,r1=N8||yl||Function("return this")(),D5=n&&!n.nodeType&&n,wn=D5&&!0&&t&&!t.nodeType&&t,R8=wn&&wn.exports===D5,A5=R8&&N8.process,$1=function(){try{var D=wn&&wn.require&&wn.require("util").types;return D||A5&&A5.binding&&A5.binding("util")}catch{}}(),P8=$1&&$1.isArrayBuffer,B8=$1&&$1.isDate,I8=$1&&$1.isMap,H8=$1&&$1.isRegExp,G8=$1&&$1.isSet,$8=$1&&$1.isTypedArray;function A1(D,B,P){switch(P.length){case 0:return D.call(B);case 1:return D.call(B,P[0]);case 2:return D.call(B,P[0],P[1]);case 3:return D.call(B,P[0],P[1],P[2])}return D.apply(B,P)}function Tl(D,B,P,v0){for(var B0=-1,u2=D==null?0:D.length;++B0<u2;){var q2=D[B0];B(v0,q2,P(q2),D)}return v0}function Y1(D,B){for(var P=-1,v0=D==null?0:D.length;++P<v0&&B(D[P],P,D)!==!1;);return D}function xl(D,B){for(var P=D==null?0:D.length;P--&&B(D[P],P,D)!==!1;);return D}function Y8(D,B){for(var P=-1,v0=D==null?0:D.length;++P<v0;)if(!B(D[P],P,D))return!1;return!0}function Qt(D,B){for(var P=-1,v0=D==null?0:D.length,B0=0,u2=[];++P<v0;){var q2=D[P];B(q2,P,D)&&(u2[B0++]=q2)}return u2}function R4(D,B){var P=D==null?0:D.length;return!!P&&qn(D,B,0)>-1}function L5(D,B,P){for(var v0=-1,B0=D==null?0:D.length;++v0<B0;)if(P(B,D[v0]))return!0;return!1}function E2(D,B){for(var P=-1,v0=D==null?0:D.length,B0=Array(v0);++P<v0;)B0[P]=B(D[P],P,D);return B0}function tn(D,B){for(var P=-1,v0=B.length,B0=D.length;++P<v0;)D[B0+P]=B[P];return D}function O5(D,B,P,v0){var B0=-1,u2=D==null?0:D.length;for(v0&&u2&&(P=D[++B0]);++B0<u2;)P=B(P,D[B0],B0,D);return P}function wl(D,B,P,v0){var B0=D==null?0:D.length;for(v0&&B0&&(P=D[--B0]);B0--;)P=B(P,D[B0],B0,D);return P}function E5(D,B){for(var P=-1,v0=D==null?0:D.length;++P<v0;)if(B(D[P],P,D))return!0;return!1}var Sl=N5("length");function bl(D){return D.split("")}function Ml(D){return D.match(Nu)||[]}function V8(D,B,P){var v0;return P(D,function(B0,u2,q2){if(B(B0,u2,q2))return v0=u2,!1}),v0}function P4(D,B,P,v0){for(var B0=D.length,u2=P+(v0?1:-1);v0?u2--:++u2<B0;)if(B(D[u2],u2,D))return u2;return-1}function qn(D,B,P){return B===B?Il(D,B,P):P4(D,F8,P)}function kl(D,B,P,v0){for(var B0=P-1,u2=D.length;++B0<u2;)if(v0(D[B0],B))return B0;return-1}function F8(D){return D!==D}function W8(D,B){var P=D==null?0:D.length;return P?P5(D,B)/P:S2}function N5(D){return function(B){return B==null?e:B[D]}}function R5(D){return function(B){return D==null?e:D[B]}}function U8(D,B,P,v0,B0){return B0(D,function(u2,q2,T2){P=v0?(v0=!1,u2):B(P,u2,q2,T2)}),P}function Cl(D,B){var P=D.length;for(D.sort(B);P--;)D[P]=D[P].value;return D}function P5(D,B){for(var P,v0=-1,B0=D.length;++v0<B0;){var u2=B(D[v0]);u2!==e&&(P=P===e?u2:P+u2)}return P}function B5(D,B){for(var P=-1,v0=Array(D);++P<D;)v0[P]=B(P);return v0}function Dl(D,B){return E2(B,function(P){return[P,D[P]]})}function q8(D){return D&&D.slice(0,Z8(D)+1).replace(w1,"")}function L1(D){return function(B){return D(B)}}function I5(D,B){return E2(B,function(P){return D[P]})}function A3(D,B){return D.has(B)}function K8(D,B){for(var P=-1,v0=D.length;++P<v0&&qn(B,D[P],0)>-1;);return P}function j8(D,B){for(var P=D.length;P--&&qn(B,D[P],0)>-1;);return P}function Al(D,B){for(var P=D.length,v0=0;P--;)D[P]===B&&++v0;return v0}var Ll=R5(_l),Ol=R5(dl);function El(D){return"\\"+pl[D]}function Nl(D,B){return D==null?e:D[B]}function Kn(D){return al.test(D)}function Rl(D){return cl.test(D)}function Pl(D){for(var B,P=[];!(B=D.next()).done;)P.push(B.value);return P}function H5(D){var B=-1,P=Array(D.size);return D.forEach(function(v0,B0){P[++B]=[B0,v0]}),P}function z8(D,B){return function(P){return D(B(P))}}function nn(D,B){for(var P=-1,v0=D.length,B0=0,u2=[];++P<v0;){var q2=D[P];(q2===B||q2===y)&&(D[P]=y,u2[B0++]=P)}return u2}function B4(D){var B=-1,P=Array(D.size);return D.forEach(function(v0){P[++B]=v0}),P}function Bl(D){var B=-1,P=Array(D.size);return D.forEach(function(v0){P[++B]=[v0,v0]}),P}function Il(D,B,P){for(var v0=P-1,B0=D.length;++v0<B0;)if(D[v0]===B)return v0;return-1}function Hl(D,B,P){for(var v0=P+1;v0--;)if(D[v0]===B)return v0;return v0}function jn(D){return Kn(D)?$l(D):Sl(D)}function tt(D){return Kn(D)?Yl(D):bl(D)}function Z8(D){for(var B=D.length;B--&&Q1.test(D.charAt(B)););return B}var Gl=R5(gl);function $l(D){for(var B=C5.lastIndex=0;C5.test(D);)++B;return B}function Yl(D){return D.match(C5)||[]}function Vl(D){return D.match(ll)||[]}var Fl=function D(B){B=B==null?r1:zn.defaults(r1.Object(),B,zn.pick(r1,fl));var P=B.Array,v0=B.Date,B0=B.Error,u2=B.Function,q2=B.Math,T2=B.Object,G5=B.RegExp,Wl=B.String,V1=B.TypeError,I4=P.prototype,Ul=u2.prototype,Zn=T2.prototype,H4=B["__core-js_shared__"],G4=Ul.toString,_2=Zn.hasOwnProperty,ql=0,J8=function(){var r=/[^.]+$/.exec(H4&&H4.keys&&H4.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),$4=Zn.toString,Kl=G4.call(T2),jl=r1._,zl=G5("^"+G4.call(_2).replace(_1,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Y4=R8?B.Buffer:e,rn=B.Symbol,V4=B.Uint8Array,X8=Y4?Y4.allocUnsafe:e,F4=z8(T2.getPrototypeOf,T2),Q8=T2.create,t7=Zn.propertyIsEnumerable,W4=I4.splice,n7=rn?rn.isConcatSpreadable:e,L3=rn?rn.iterator:e,Sn=rn?rn.toStringTag:e,U4=function(){try{var r=Dn(T2,"defineProperty");return r({},"",{}),r}catch{}}(),Zl=B.clearTimeout!==r1.clearTimeout&&B.clearTimeout,Jl=v0&&v0.now!==r1.Date.now&&v0.now,Xl=B.setTimeout!==r1.setTimeout&&B.setTimeout,q4=q2.ceil,K4=q2.floor,$5=T2.getOwnPropertySymbols,Ql=Y4?Y4.isBuffer:e,r7=B.isFinite,ta=I4.join,na=z8(T2.keys,T2),K2=q2.max,o1=q2.min,ra=v0.now,ea=B.parseInt,e7=q2.random,ia=I4.reverse,Y5=Dn(B,"DataView"),O3=Dn(B,"Map"),V5=Dn(B,"Promise"),Jn=Dn(B,"Set"),E3=Dn(B,"WeakMap"),N3=Dn(T2,"create"),j4=E3&&new E3,Xn={},sa=An(Y5),oa=An(O3),ua=An(V5),la=An(Jn),aa=An(E3),z4=rn?rn.prototype:e,R3=z4?z4.valueOf:e,i7=z4?z4.toString:e;function d(r){if(G2(r)&&!H0(r)&&!(r instanceof X0)){if(r instanceof F1)return r;if(_2.call(r,"__wrapped__"))return s9(r)}return new F1(r)}var Qn=function(){function r(){}return function(i){if(!I2(i))return{};if(Q8)return Q8(i);r.prototype=i;var u=new r;return r.prototype=e,u}}();function Z4(){}function F1(r,i){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=e}d.templateSettings={escape:j0,evaluate:r2,interpolate:d2,variable:"",imports:{_:d}},d.prototype=Z4.prototype,d.prototype.constructor=d,F1.prototype=Qn(Z4.prototype),F1.prototype.constructor=F1;function X0(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=y2,this.__views__=[]}function ca(){var r=new X0(this.__wrapped__);return r.__actions__=S1(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=S1(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=S1(this.__views__),r}function fa(){if(this.__filtered__){var r=new X0(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function ha(){var r=this.__wrapped__.value(),i=this.__dir__,u=H0(r),c=i<0,_=u?r.length:0,g=bc(0,_,this.__views__),w=g.start,k=g.end,L=k-w,G=c?k:w-1,V=this.__iteratees__,j=V.length,f0=0,b0=o1(L,this.__takeCount__);if(!u||!c&&_==L&&b0==L)return D7(r,this.__actions__);var O0=[];t:for(;L--&&f0<b0;){G+=i;for(var q0=-1,E0=r[G];++q0<j;){var Z0=V[q0],t2=Z0.iteratee,N1=Z0.type,p1=t2(E0);if(N1==y1)E0=p1;else if(!p1){if(N1==i1)continue t;break t}}O0[f0++]=E0}return O0}X0.prototype=Qn(Z4.prototype),X0.prototype.constructor=X0;function bn(r){var i=-1,u=r==null?0:r.length;for(this.clear();++i<u;){var c=r[i];this.set(c[0],c[1])}}function _a(){this.__data__=N3?N3(null):{},this.size=0}function da(r){var i=this.has(r)&&delete this.__data__[r];return this.size-=i?1:0,i}function ga(r){var i=this.__data__;if(N3){var u=i[r];return u===h?e:u}return _2.call(i,r)?i[r]:e}function pa(r){var i=this.__data__;return N3?i[r]!==e:_2.call(i,r)}function ma(r,i){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=N3&&i===e?h:i,this}bn.prototype.clear=_a,bn.prototype.delete=da,bn.prototype.get=ga,bn.prototype.has=pa,bn.prototype.set=ma;function kt(r){var i=-1,u=r==null?0:r.length;for(this.clear();++i<u;){var c=r[i];this.set(c[0],c[1])}}function va(){this.__data__=[],this.size=0}function ya(r){var i=this.__data__,u=J4(i,r);if(u<0)return!1;var c=i.length-1;return u==c?i.pop():W4.call(i,u,1),--this.size,!0}function Ta(r){var i=this.__data__,u=J4(i,r);return u<0?e:i[u][1]}function xa(r){return J4(this.__data__,r)>-1}function wa(r,i){var u=this.__data__,c=J4(u,r);return c<0?(++this.size,u.push([r,i])):u[c][1]=i,this}kt.prototype.clear=va,kt.prototype.delete=ya,kt.prototype.get=Ta,kt.prototype.has=xa,kt.prototype.set=wa;function Ct(r){var i=-1,u=r==null?0:r.length;for(this.clear();++i<u;){var c=r[i];this.set(c[0],c[1])}}function Sa(){this.size=0,this.__data__={hash:new bn,map:new(O3||kt),string:new bn}}function ba(r){var i=ar(this,r).delete(r);return this.size-=i?1:0,i}function Ma(r){return ar(this,r).get(r)}function ka(r){return ar(this,r).has(r)}function Ca(r,i){var u=ar(this,r),c=u.size;return u.set(r,i),this.size+=u.size==c?0:1,this}Ct.prototype.clear=Sa,Ct.prototype.delete=ba,Ct.prototype.get=Ma,Ct.prototype.has=ka,Ct.prototype.set=Ca;function Mn(r){var i=-1,u=r==null?0:r.length;for(this.__data__=new Ct;++i<u;)this.add(r[i])}function Da(r){return this.__data__.set(r,h),this}function Aa(r){return this.__data__.has(r)}Mn.prototype.add=Mn.prototype.push=Da,Mn.prototype.has=Aa;function nt(r){var i=this.__data__=new kt(r);this.size=i.size}function La(){this.__data__=new kt,this.size=0}function Oa(r){var i=this.__data__,u=i.delete(r);return this.size=i.size,u}function Ea(r){return this.__data__.get(r)}function Na(r){return this.__data__.has(r)}function Ra(r,i){var u=this.__data__;if(u instanceof kt){var c=u.__data__;if(!O3||c.length<o-1)return c.push([r,i]),this.size=++u.size,this;u=this.__data__=new Ct(c)}return u.set(r,i),this.size=u.size,this}nt.prototype.clear=La,nt.prototype.delete=Oa,nt.prototype.get=Ea,nt.prototype.has=Na,nt.prototype.set=Ra;function s7(r,i){var u=H0(r),c=!u&&Ln(r),_=!u&&!c&&ln(r),g=!u&&!c&&!_&&e3(r),w=u||c||_||g,k=w?B5(r.length,Wl):[],L=k.length;for(var G in r)(i||_2.call(r,G))&&!(w&&(G=="length"||_&&(G=="offset"||G=="parent")||g&&(G=="buffer"||G=="byteLength"||G=="byteOffset")||Ot(G,L)))&&k.push(G);return k}function o7(r){var i=r.length;return i?r[Q5(0,i-1)]:e}function Pa(r,i){return cr(S1(r),kn(i,0,r.length))}function Ba(r){return cr(S1(r))}function F5(r,i,u){(u!==e&&!rt(r[i],u)||u===e&&!(i in r))&&Dt(r,i,u)}function P3(r,i,u){var c=r[i];(!(_2.call(r,i)&&rt(c,u))||u===e&&!(i in r))&&Dt(r,i,u)}function J4(r,i){for(var u=r.length;u--;)if(rt(r[u][0],i))return u;return-1}function Ia(r,i,u,c){return en(r,function(_,g,w){i(c,_,u(_),w)}),c}function u7(r,i){return r&&ht(i,Z2(i),r)}function Ha(r,i){return r&&ht(i,M1(i),r)}function Dt(r,i,u){i=="__proto__"&&U4?U4(r,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[i]=u}function W5(r,i){for(var u=-1,c=i.length,_=P(c),g=r==null;++u<c;)_[u]=g?e:b6(r,i[u]);return _}function kn(r,i,u){return r===r&&(u!==e&&(r=r<=u?r:u),i!==e&&(r=r>=i?r:i)),r}function W1(r,i,u,c,_,g){var w,k=i&x,L=i&b,G=i&C;if(u&&(w=_?u(r,c,_,g):u(r)),w!==e)return w;if(!I2(r))return r;var V=H0(r);if(V){if(w=kc(r),!k)return S1(r,w)}else{var j=u1(r),f0=j==p0||j==m;if(ln(r))return O7(r,k);if(j==R||j==X2||f0&&!_){if(w=L||f0?{}:Z7(r),!k)return L?gc(r,Ha(w,r)):dc(r,u7(w,r))}else{if(!b2[j])return _?r:{};w=Cc(r,j,k)}}g||(g=new nt);var b0=g.get(r);if(b0)return b0;g.set(r,w),M9(r)?r.forEach(function(E0){w.add(W1(E0,i,u,E0,r,g))}):S9(r)&&r.forEach(function(E0,Z0){w.set(Z0,W1(E0,i,u,Z0,r,g))});var O0=G?L?c6:a6:L?M1:Z2,q0=V?e:O0(r);return Y1(q0||r,function(E0,Z0){q0&&(Z0=E0,E0=r[Z0]),P3(w,Z0,W1(E0,i,u,Z0,r,g))}),w}function Ga(r){var i=Z2(r);return function(u){return l7(u,r,i)}}function l7(r,i,u){var c=u.length;if(r==null)return!c;for(r=T2(r);c--;){var _=u[c],g=i[_],w=r[_];if(w===e&&!(_ in r)||!g(w))return!1}return!0}function a7(r,i,u){if(typeof r!="function")throw new V1(a);return V3(function(){r.apply(e,u)},i)}function B3(r,i,u,c){var _=-1,g=R4,w=!0,k=r.length,L=[],G=i.length;if(!k)return L;u&&(i=E2(i,L1(u))),c?(g=L5,w=!1):i.length>=o&&(g=A3,w=!1,i=new Mn(i));t:for(;++_<k;){var V=r[_],j=u==null?V:u(V);if(V=c||V!==0?V:0,w&&j===j){for(var f0=G;f0--;)if(i[f0]===j)continue t;L.push(V)}else g(i,j,c)||L.push(V)}return L}var en=B7(ft),c7=B7(q5,!0);function $a(r,i){var u=!0;return en(r,function(c,_,g){return u=!!i(c,_,g),u}),u}function X4(r,i,u){for(var c=-1,_=r.length;++c<_;){var g=r[c],w=i(g);if(w!=null&&(k===e?w===w&&!E1(w):u(w,k)))var k=w,L=g}return L}function Ya(r,i,u,c){var _=r.length;for(u=F0(u),u<0&&(u=-u>_?0:_+u),c=c===e||c>_?_:F0(c),c<0&&(c+=_),c=u>c?0:C9(c);u<c;)r[u++]=i;return r}function f7(r,i){var u=[];return en(r,function(c,_,g){i(c,_,g)&&u.push(c)}),u}function e1(r,i,u,c,_){var g=-1,w=r.length;for(u||(u=Ac),_||(_=[]);++g<w;){var k=r[g];i>0&&u(k)?i>1?e1(k,i-1,u,c,_):tn(_,k):c||(_[_.length]=k)}return _}var U5=I7(),h7=I7(!0);function ft(r,i){return r&&U5(r,i,Z2)}function q5(r,i){return r&&h7(r,i,Z2)}function Q4(r,i){return Qt(i,function(u){return Et(r[u])})}function Cn(r,i){i=on(i,r);for(var u=0,c=i.length;r!=null&&u<c;)r=r[_t(i[u++])];return u&&u==c?r:e}function _7(r,i,u){var c=i(r);return H0(r)?c:tn(c,u(r))}function d1(r){return r==null?r===e?d0:Y:Sn&&Sn in T2(r)?Sc(r):Bc(r)}function K5(r,i){return r>i}function Va(r,i){return r!=null&&_2.call(r,i)}function Fa(r,i){return r!=null&&i in T2(r)}function Wa(r,i,u){return r>=o1(i,u)&&r<K2(i,u)}function j5(r,i,u){for(var c=u?L5:R4,_=r[0].length,g=r.length,w=g,k=P(g),L=1/0,G=[];w--;){var V=r[w];w&&i&&(V=E2(V,L1(i))),L=o1(V.length,L),k[w]=!u&&(i||_>=120&&V.length>=120)?new Mn(w&&V):e}V=r[0];var j=-1,f0=k[0];t:for(;++j<_&&G.length<L;){var b0=V[j],O0=i?i(b0):b0;if(b0=u||b0!==0?b0:0,!(f0?A3(f0,O0):c(G,O0,u))){for(w=g;--w;){var q0=k[w];if(!(q0?A3(q0,O0):c(r[w],O0,u)))continue t}f0&&f0.push(O0),G.push(b0)}}return G}function Ua(r,i,u,c){return ft(r,function(_,g,w){i(c,u(_),g,w)}),c}function I3(r,i,u){i=on(i,r),r=t9(r,i);var c=r==null?r:r[_t(q1(i))];return c==null?e:A1(c,r,u)}function d7(r){return G2(r)&&d1(r)==X2}function qa(r){return G2(r)&&d1(r)==$0}function Ka(r){return G2(r)&&d1(r)==M}function H3(r,i,u,c,_){return r===i?!0:r==null||i==null||!G2(r)&&!G2(i)?r!==r&&i!==i:ja(r,i,u,c,H3,_)}function ja(r,i,u,c,_,g){var w=H0(r),k=H0(i),L=w?B2:u1(r),G=k?B2:u1(i);L=L==X2?R:L,G=G==X2?R:G;var V=L==R,j=G==R,f0=L==G;if(f0&&ln(r)){if(!ln(i))return!1;w=!0,V=!1}if(f0&&!V)return g||(g=new nt),w||e3(r)?K7(r,i,u,c,_,g):xc(r,i,L,u,c,_,g);if(!(u&q)){var b0=V&&_2.call(r,"__wrapped__"),O0=j&&_2.call(i,"__wrapped__");if(b0||O0){var q0=b0?r.value():r,E0=O0?i.value():i;return g||(g=new nt),_(q0,E0,u,c,g)}}return f0?(g||(g=new nt),wc(r,i,u,c,_,g)):!1}function za(r){return G2(r)&&u1(r)==T}function z5(r,i,u,c){var _=u.length,g=_,w=!c;if(r==null)return!g;for(r=T2(r);_--;){var k=u[_];if(w&&k[2]?k[1]!==r[k[0]]:!(k[0]in r))return!1}for(;++_<g;){k=u[_];var L=k[0],G=r[L],V=k[1];if(w&&k[2]){if(G===e&&!(L in r))return!1}else{var j=new nt;if(c)var f0=c(G,V,L,r,i,j);if(!(f0===e?H3(V,G,q|W,c,j):f0))return!1}}return!0}function g7(r){if(!I2(r)||Oc(r))return!1;var i=Et(r)?zl:Gu;return i.test(An(r))}function Za(r){return G2(r)&&d1(r)==X}function Ja(r){return G2(r)&&u1(r)==z}function Xa(r){return G2(r)&&pr(r.length)&&!!C2[d1(r)]}function p7(r){return typeof r=="function"?r:r==null?k1:typeof r=="object"?H0(r)?y7(r[0],r[1]):v7(r):H9(r)}function Z5(r){if(!Y3(r))return na(r);var i=[];for(var u in T2(r))_2.call(r,u)&&u!="constructor"&&i.push(u);return i}function Qa(r){if(!I2(r))return Pc(r);var i=Y3(r),u=[];for(var c in r)c=="constructor"&&(i||!_2.call(r,c))||u.push(c);return u}function J5(r,i){return r<i}function m7(r,i){var u=-1,c=b1(r)?P(r.length):[];return en(r,function(_,g,w){c[++u]=i(_,g,w)}),c}function v7(r){var i=h6(r);return i.length==1&&i[0][2]?X7(i[0][0],i[0][1]):function(u){return u===r||z5(u,r,i)}}function y7(r,i){return d6(r)&&J7(i)?X7(_t(r),i):function(u){var c=b6(u,r);return c===e&&c===i?M6(u,r):H3(i,c,q|W)}}function tr(r,i,u,c,_){r!==i&&U5(i,function(g,w){if(_||(_=new nt),I2(g))tc(r,i,w,u,tr,c,_);else{var k=c?c(p6(r,w),g,w+"",r,i,_):e;k===e&&(k=g),F5(r,w,k)}},M1)}function tc(r,i,u,c,_,g,w){var k=p6(r,u),L=p6(i,u),G=w.get(L);if(G){F5(r,u,G);return}var V=g?g(k,L,u+"",r,i,w):e,j=V===e;if(j){var f0=H0(L),b0=!f0&&ln(L),O0=!f0&&!b0&&e3(L);V=L,f0||b0||O0?H0(k)?V=k:$2(k)?V=S1(k):b0?(j=!1,V=O7(L,!0)):O0?(j=!1,V=E7(L,!0)):V=[]:F3(L)||Ln(L)?(V=k,Ln(k)?V=D9(k):(!I2(k)||Et(k))&&(V=Z7(L))):j=!1}j&&(w.set(L,V),_(V,L,c,g,w),w.delete(L)),F5(r,u,V)}function T7(r,i){var u=r.length;if(u)return i+=i<0?u:0,Ot(i,u)?r[i]:e}function x7(r,i,u){i.length?i=E2(i,function(g){return H0(g)?function(w){return Cn(w,g.length===1?g[0]:g)}:g}):i=[k1];var c=-1;i=E2(i,L1(A0()));var _=m7(r,function(g,w,k){var L=E2(i,function(G){return G(g)});return{criteria:L,index:++c,value:g}});return Cl(_,function(g,w){return _c(g,w,u)})}function nc(r,i){return w7(r,i,function(u,c){return M6(r,c)})}function w7(r,i,u){for(var c=-1,_=i.length,g={};++c<_;){var w=i[c],k=Cn(r,w);u(k,w)&&G3(g,on(w,r),k)}return g}function rc(r){return function(i){return Cn(i,r)}}function X5(r,i,u,c){var _=c?kl:qn,g=-1,w=i.length,k=r;for(r===i&&(i=S1(i)),u&&(k=E2(r,L1(u)));++g<w;)for(var L=0,G=i[g],V=u?u(G):G;(L=_(k,V,L,c))>-1;)k!==r&&W4.call(k,L,1),W4.call(r,L,1);return r}function S7(r,i){for(var u=r?i.length:0,c=u-1;u--;){var _=i[u];if(u==c||_!==g){var g=_;Ot(_)?W4.call(r,_,1):r6(r,_)}}return r}function Q5(r,i){return r+K4(e7()*(i-r+1))}function ec(r,i,u,c){for(var _=-1,g=K2(q4((i-r)/(u||1)),0),w=P(g);g--;)w[c?g:++_]=r,r+=u;return w}function t6(r,i){var u="";if(!r||i<1||i>R0)return u;do i%2&&(u+=r),i=K4(i/2),i&&(r+=r);while(i);return u}function K0(r,i){return m6(Q7(r,i,k1),r+"")}function ic(r){return o7(i3(r))}function sc(r,i){var u=i3(r);return cr(u,kn(i,0,u.length))}function G3(r,i,u,c){if(!I2(r))return r;i=on(i,r);for(var _=-1,g=i.length,w=g-1,k=r;k!=null&&++_<g;){var L=_t(i[_]),G=u;if(L==="__proto__"||L==="constructor"||L==="prototype")return r;if(_!=w){var V=k[L];G=c?c(V,L,k):e,G===e&&(G=I2(V)?V:Ot(i[_+1])?[]:{})}P3(k,L,G),k=k[L]}return r}var b7=j4?function(r,i){return j4.set(r,i),r}:k1,oc=U4?function(r,i){return U4(r,"toString",{configurable:!0,enumerable:!1,value:C6(i),writable:!0})}:k1;function uc(r){return cr(i3(r))}function U1(r,i,u){var c=-1,_=r.length;i<0&&(i=-i>_?0:_+i),u=u>_?_:u,u<0&&(u+=_),_=i>u?0:u-i>>>0,i>>>=0;for(var g=P(_);++c<_;)g[c]=r[c+i];return g}function lc(r,i){var u;return en(r,function(c,_,g){return u=i(c,_,g),!u}),!!u}function nr(r,i,u){var c=0,_=r==null?c:r.length;if(typeof i=="number"&&i===i&&_<=T1){for(;c<_;){var g=c+_>>>1,w=r[g];w!==null&&!E1(w)&&(u?w<=i:w<i)?c=g+1:_=g}return _}return n6(r,i,k1,u)}function n6(r,i,u,c){var _=0,g=r==null?0:r.length;if(g===0)return 0;i=u(i);for(var w=i!==i,k=i===null,L=E1(i),G=i===e;_<g;){var V=K4((_+g)/2),j=u(r[V]),f0=j!==e,b0=j===null,O0=j===j,q0=E1(j);if(w)var E0=c||O0;else G?E0=O0&&(c||f0):k?E0=O0&&f0&&(c||!b0):L?E0=O0&&f0&&!b0&&(c||!q0):b0||q0?E0=!1:E0=c?j<=i:j<i;E0?_=V+1:g=V}return o1(g,O2)}function M7(r,i){for(var u=-1,c=r.length,_=0,g=[];++u<c;){var w=r[u],k=i?i(w):w;if(!u||!rt(k,L)){var L=k;g[_++]=w===0?0:w}}return g}function k7(r){return typeof r=="number"?r:E1(r)?S2:+r}function O1(r){if(typeof r=="string")return r;if(H0(r))return E2(r,O1)+"";if(E1(r))return i7?i7.call(r):"";var i=r+"";return i=="0"&&1/r==-I0?"-0":i}function sn(r,i,u){var c=-1,_=R4,g=r.length,w=!0,k=[],L=k;if(u)w=!1,_=L5;else if(g>=o){var G=i?null:yc(r);if(G)return B4(G);w=!1,_=A3,L=new Mn}else L=i?[]:k;t:for(;++c<g;){var V=r[c],j=i?i(V):V;if(V=u||V!==0?V:0,w&&j===j){for(var f0=L.length;f0--;)if(L[f0]===j)continue t;i&&L.push(j),k.push(V)}else _(L,j,u)||(L!==k&&L.push(j),k.push(V))}return k}function r6(r,i){return i=on(i,r),r=t9(r,i),r==null||delete r[_t(q1(i))]}function C7(r,i,u,c){return G3(r,i,u(Cn(r,i)),c)}function rr(r,i,u,c){for(var _=r.length,g=c?_:-1;(c?g--:++g<_)&&i(r[g],g,r););return u?U1(r,c?0:g,c?g+1:_):U1(r,c?g+1:0,c?_:g)}function D7(r,i){var u=r;return u instanceof X0&&(u=u.value()),O5(i,function(c,_){return _.func.apply(_.thisArg,tn([c],_.args))},u)}function e6(r,i,u){var c=r.length;if(c<2)return c?sn(r[0]):[];for(var _=-1,g=P(c);++_<c;)for(var w=r[_],k=-1;++k<c;)k!=_&&(g[_]=B3(g[_]||w,r[k],i,u));return sn(e1(g,1),i,u)}function A7(r,i,u){for(var c=-1,_=r.length,g=i.length,w={};++c<_;){var k=c<g?i[c]:e;u(w,r[c],k)}return w}function i6(r){return $2(r)?r:[]}function s6(r){return typeof r=="function"?r:k1}function on(r,i){return H0(r)?r:d6(r,i)?[r]:i9(a2(r))}var ac=K0;function un(r,i,u){var c=r.length;return u=u===e?c:u,!i&&u>=c?r:U1(r,i,u)}var L7=Zl||function(r){return r1.clearTimeout(r)};function O7(r,i){if(i)return r.slice();var u=r.length,c=X8?X8(u):new r.constructor(u);return r.copy(c),c}function o6(r){var i=new r.constructor(r.byteLength);return new V4(i).set(new V4(r)),i}function cc(r,i){var u=i?o6(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}function fc(r){var i=new r.constructor(r.source,d8.exec(r));return i.lastIndex=r.lastIndex,i}function hc(r){return R3?T2(R3.call(r)):{}}function E7(r,i){var u=i?o6(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}function N7(r,i){if(r!==i){var u=r!==e,c=r===null,_=r===r,g=E1(r),w=i!==e,k=i===null,L=i===i,G=E1(i);if(!k&&!G&&!g&&r>i||g&&w&&L&&!k&&!G||c&&w&&L||!u&&L||!_)return 1;if(!c&&!g&&!G&&r<i||G&&u&&_&&!c&&!g||k&&u&&_||!w&&_||!L)return-1}return 0}function _c(r,i,u){for(var c=-1,_=r.criteria,g=i.criteria,w=_.length,k=u.length;++c<w;){var L=N7(_[c],g[c]);if(L){if(c>=k)return L;var G=u[c];return L*(G=="desc"?-1:1)}}return r.index-i.index}function R7(r,i,u,c){for(var _=-1,g=r.length,w=u.length,k=-1,L=i.length,G=K2(g-w,0),V=P(L+G),j=!c;++k<L;)V[k]=i[k];for(;++_<w;)(j||_<g)&&(V[u[_]]=r[_]);for(;G--;)V[k++]=r[_++];return V}function P7(r,i,u,c){for(var _=-1,g=r.length,w=-1,k=u.length,L=-1,G=i.length,V=K2(g-k,0),j=P(V+G),f0=!c;++_<V;)j[_]=r[_];for(var b0=_;++L<G;)j[b0+L]=i[L];for(;++w<k;)(f0||_<g)&&(j[b0+u[w]]=r[_++]);return j}function S1(r,i){var u=-1,c=r.length;for(i||(i=P(c));++u<c;)i[u]=r[u];return i}function ht(r,i,u,c){var _=!u;u||(u={});for(var g=-1,w=i.length;++g<w;){var k=i[g],L=c?c(u[k],r[k],k,u,r):e;L===e&&(L=r[k]),_?Dt(u,k,L):P3(u,k,L)}return u}function dc(r,i){return ht(r,_6(r),i)}function gc(r,i){return ht(r,j7(r),i)}function er(r,i){return function(u,c){var _=H0(u)?Tl:Ia,g=i?i():{};return _(u,r,A0(c,2),g)}}function t3(r){return K0(function(i,u){var c=-1,_=u.length,g=_>1?u[_-1]:e,w=_>2?u[2]:e;for(g=r.length>3&&typeof g=="function"?(_--,g):e,w&&g1(u[0],u[1],w)&&(g=_<3?e:g,_=1),i=T2(i);++c<_;){var k=u[c];k&&r(i,k,c,g)}return i})}function B7(r,i){return function(u,c){if(u==null)return u;if(!b1(u))return r(u,c);for(var _=u.length,g=i?_:-1,w=T2(u);(i?g--:++g<_)&&c(w[g],g,w)!==!1;);return u}}function I7(r){return function(i,u,c){for(var _=-1,g=T2(i),w=c(i),k=w.length;k--;){var L=w[r?k:++_];if(u(g[L],L,g)===!1)break}return i}}function pc(r,i,u){var c=i&r0,_=$3(r);function g(){var w=this&&this!==r1&&this instanceof g?_:r;return w.apply(c?u:this,arguments)}return g}function H7(r){return function(i){i=a2(i);var u=Kn(i)?tt(i):e,c=u?u[0]:i.charAt(0),_=u?un(u,1).join(""):i.slice(1);return c[r]()+_}}function n3(r){return function(i){return O5(B9(P9(i).replace(ol,"")),r,"")}}function $3(r){return function(){var i=arguments;switch(i.length){case 0:return new r;case 1:return new r(i[0]);case 2:return new r(i[0],i[1]);case 3:return new r(i[0],i[1],i[2]);case 4:return new r(i[0],i[1],i[2],i[3]);case 5:return new r(i[0],i[1],i[2],i[3],i[4]);case 6:return new r(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new r(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=Qn(r.prototype),c=r.apply(u,i);return I2(c)?c:u}}function mc(r,i,u){var c=$3(r);function _(){for(var g=arguments.length,w=P(g),k=g,L=r3(_);k--;)w[k]=arguments[k];var G=g<3&&w[0]!==L&&w[g-1]!==L?[]:nn(w,L);if(g-=G.length,g<u)return F7(r,i,ir,_.placeholder,e,w,G,e,e,u-g);var V=this&&this!==r1&&this instanceof _?c:r;return A1(V,this,w)}return _}function G7(r){return function(i,u,c){var _=T2(i);if(!b1(i)){var g=A0(u,3);i=Z2(i),u=function(k){return g(_[k],k,_)}}var w=r(i,u,c);return w>-1?_[g?i[w]:w]:e}}function $7(r){return Lt(function(i){var u=i.length,c=u,_=F1.prototype.thru;for(r&&i.reverse();c--;){var g=i[c];if(typeof g!="function")throw new V1(a);if(_&&!w&&lr(g)=="wrapper")var w=new F1([],!0)}for(c=w?c:u;++c<u;){g=i[c];var k=lr(g),L=k=="wrapper"?f6(g):e;L&&g6(L[0])&&L[1]==(S0|u0|h0|J0)&&!L[4].length&&L[9]==1?w=w[lr(L[0])].apply(w,L[3]):w=g.length==1&&g6(g)?w[k]():w.thru(g)}return function(){var G=arguments,V=G[0];if(w&&G.length==1&&H0(V))return w.plant(V).value();for(var j=0,f0=u?i[j].apply(this,G):V;++j<u;)f0=i[j].call(this,f0);return f0}})}function ir(r,i,u,c,_,g,w,k,L,G){var V=i&S0,j=i&r0,f0=i&i0,b0=i&(u0|a0),O0=i&V0,q0=f0?e:$3(r);function E0(){for(var Z0=arguments.length,t2=P(Z0),N1=Z0;N1--;)t2[N1]=arguments[N1];if(b0)var p1=r3(E0),R1=Al(t2,p1);if(c&&(t2=R7(t2,c,_,b0)),g&&(t2=P7(t2,g,w,b0)),Z0-=R1,b0&&Z0<G){var Y2=nn(t2,p1);return F7(r,i,ir,E0.placeholder,u,t2,Y2,k,L,G-Z0)}var et=j?u:this,Rt=f0?et[r]:r;return Z0=t2.length,k?t2=Ic(t2,k):O0&&Z0>1&&t2.reverse(),V&&L<Z0&&(t2.length=L),this&&this!==r1&&this instanceof E0&&(Rt=q0||$3(Rt)),Rt.apply(et,t2)}return E0}function Y7(r,i){return function(u,c){return Ua(u,r,i(c),{})}}function sr(r,i){return function(u,c){var _;if(u===e&&c===e)return i;if(u!==e&&(_=u),c!==e){if(_===e)return c;typeof u=="string"||typeof c=="string"?(u=O1(u),c=O1(c)):(u=k7(u),c=k7(c)),_=r(u,c)}return _}}function u6(r){return Lt(function(i){return i=E2(i,L1(A0())),K0(function(u){var c=this;return r(i,function(_){return A1(_,c,u)})})})}function or(r,i){i=i===e?" ":O1(i);var u=i.length;if(u<2)return u?t6(i,r):i;var c=t6(i,q4(r/jn(i)));return Kn(i)?un(tt(c),0,r).join(""):c.slice(0,r)}function vc(r,i,u,c){var _=i&r0,g=$3(r);function w(){for(var k=-1,L=arguments.length,G=-1,V=c.length,j=P(V+L),f0=this&&this!==r1&&this instanceof w?g:r;++G<V;)j[G]=c[G];for(;L--;)j[G++]=arguments[++k];return A1(f0,_?u:this,j)}return w}function V7(r){return function(i,u,c){return c&&typeof c!="number"&&g1(i,u,c)&&(u=c=e),i=Nt(i),u===e?(u=i,i=0):u=Nt(u),c=c===e?i<u?1:-1:Nt(c),ec(i,u,c,r)}}function ur(r){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=K1(i),u=K1(u)),r(i,u)}}function F7(r,i,u,c,_,g,w,k,L,G){var V=i&u0,j=V?w:e,f0=V?e:w,b0=V?g:e,O0=V?e:g;i|=V?h0:C0,i&=~(V?C0:h0),i&t0||(i&=~(r0|i0));var q0=[r,i,_,b0,j,O0,f0,k,L,G],E0=u.apply(e,q0);return g6(r)&&n9(E0,q0),E0.placeholder=c,r9(E0,r,i)}function l6(r){var i=q2[r];return function(u,c){if(u=K1(u),c=c==null?0:o1(F0(c),292),c&&r7(u)){var _=(a2(u)+"e").split("e"),g=i(_[0]+"e"+(+_[1]+c));return _=(a2(g)+"e").split("e"),+(_[0]+"e"+(+_[1]-c))}return i(u)}}var yc=Jn&&1/B4(new Jn([,-0]))[1]==I0?function(r){return new Jn(r)}:L6;function W7(r){return function(i){var u=u1(i);return u==T?H5(i):u==z?Bl(i):Dl(i,r(i))}}function At(r,i,u,c,_,g,w,k){var L=i&i0;if(!L&&typeof r!="function")throw new V1(a);var G=c?c.length:0;if(G||(i&=~(h0|C0),c=_=e),w=w===e?w:K2(F0(w),0),k=k===e?k:F0(k),G-=_?_.length:0,i&C0){var V=c,j=_;c=_=e}var f0=L?e:f6(r),b0=[r,i,u,c,_,V,j,g,w,k];if(f0&&Rc(b0,f0),r=b0[0],i=b0[1],u=b0[2],c=b0[3],_=b0[4],k=b0[9]=b0[9]===e?L?0:r.length:K2(b0[9]-G,0),!k&&i&(u0|a0)&&(i&=~(u0|a0)),!i||i==r0)var O0=pc(r,i,u);else i==u0||i==a0?O0=mc(r,i,k):(i==h0||i==(r0|h0))&&!_.length?O0=vc(r,i,u,c):O0=ir.apply(e,b0);var q0=f0?b7:n9;return r9(q0(O0,b0),r,i)}function U7(r,i,u,c){return r===e||rt(r,Zn[u])&&!_2.call(c,u)?i:r}function q7(r,i,u,c,_,g){return I2(r)&&I2(i)&&(g.set(i,r),tr(r,i,e,q7,g),g.delete(i)),r}function Tc(r){return F3(r)?e:r}function K7(r,i,u,c,_,g){var w=u&q,k=r.length,L=i.length;if(k!=L&&!(w&&L>k))return!1;var G=g.get(r),V=g.get(i);if(G&&V)return G==i&&V==r;var j=-1,f0=!0,b0=u&W?new Mn:e;for(g.set(r,i),g.set(i,r);++j<k;){var O0=r[j],q0=i[j];if(c)var E0=w?c(q0,O0,j,i,r,g):c(O0,q0,j,r,i,g);if(E0!==e){if(E0)continue;f0=!1;break}if(b0){if(!E5(i,function(Z0,t2){if(!A3(b0,t2)&&(O0===Z0||_(O0,Z0,u,c,g)))return b0.push(t2)})){f0=!1;break}}else if(!(O0===q0||_(O0,q0,u,c,g))){f0=!1;break}}return g.delete(r),g.delete(i),f0}function xc(r,i,u,c,_,g,w){switch(u){case U0:if(r.byteLength!=i.byteLength||r.byteOffset!=i.byteOffset)return!1;r=r.buffer,i=i.buffer;case $0:return!(r.byteLength!=i.byteLength||!g(new V4(r),new V4(i)));case N:case M:case A:return rt(+r,+i);case $:return r.name==i.name&&r.message==i.message;case X:case K:return r==i+"";case T:var k=H5;case z:var L=c&q;if(k||(k=B4),r.size!=i.size&&!L)return!1;var G=w.get(r);if(G)return G==i;c|=W,w.set(r,i);var V=K7(k(r),k(i),c,_,g,w);return w.delete(r),V;case k0:if(R3)return R3.call(r)==R3.call(i)}return!1}function wc(r,i,u,c,_,g){var w=u&q,k=a6(r),L=k.length,G=a6(i),V=G.length;if(L!=V&&!w)return!1;for(var j=L;j--;){var f0=k[j];if(!(w?f0 in i:_2.call(i,f0)))return!1}var b0=g.get(r),O0=g.get(i);if(b0&&O0)return b0==i&&O0==r;var q0=!0;g.set(r,i),g.set(i,r);for(var E0=w;++j<L;){f0=k[j];var Z0=r[f0],t2=i[f0];if(c)var N1=w?c(t2,Z0,f0,i,r,g):c(Z0,t2,f0,r,i,g);if(!(N1===e?Z0===t2||_(Z0,t2,u,c,g):N1)){q0=!1;break}E0||(E0=f0=="constructor")}if(q0&&!E0){var p1=r.constructor,R1=i.constructor;p1!=R1&&"constructor"in r&&"constructor"in i&&!(typeof p1=="function"&&p1 instanceof p1&&typeof R1=="function"&&R1 instanceof R1)&&(q0=!1)}return g.delete(r),g.delete(i),q0}function Lt(r){return m6(Q7(r,e,l9),r+"")}function a6(r){return _7(r,Z2,_6)}function c6(r){return _7(r,M1,j7)}var f6=j4?function(r){return j4.get(r)}:L6;function lr(r){for(var i=r.name+"",u=Xn[i],c=_2.call(Xn,i)?u.length:0;c--;){var _=u[c],g=_.func;if(g==null||g==r)return _.name}return i}function r3(r){var i=_2.call(d,"placeholder")?d:r;return i.placeholder}function A0(){var r=d.iteratee||D6;return r=r===D6?p7:r,arguments.length?r(arguments[0],arguments[1]):r}function ar(r,i){var u=r.__data__;return Lc(i)?u[typeof i=="string"?"string":"hash"]:u.map}function h6(r){for(var i=Z2(r),u=i.length;u--;){var c=i[u],_=r[c];i[u]=[c,_,J7(_)]}return i}function Dn(r,i){var u=Nl(r,i);return g7(u)?u:e}function Sc(r){var i=_2.call(r,Sn),u=r[Sn];try{r[Sn]=e;var c=!0}catch{}var _=$4.call(r);return c&&(i?r[Sn]=u:delete r[Sn]),_}var _6=$5?function(r){return r==null?[]:(r=T2(r),Qt($5(r),function(i){return t7.call(r,i)}))}:O6,j7=$5?function(r){for(var i=[];r;)tn(i,_6(r)),r=F4(r);return i}:O6,u1=d1;(Y5&&u1(new Y5(new ArrayBuffer(1)))!=U0||O3&&u1(new O3)!=T||V5&&u1(V5.resolve())!=F||Jn&&u1(new Jn)!=z||E3&&u1(new E3)!=x0)&&(u1=function(r){var i=d1(r),u=i==R?r.constructor:e,c=u?An(u):"";if(c)switch(c){case sa:return U0;case oa:return T;case ua:return F;case la:return z;case aa:return x0}return i});function bc(r,i,u){for(var c=-1,_=u.length;++c<_;){var g=u[c],w=g.size;switch(g.type){case"drop":r+=w;break;case"dropRight":i-=w;break;case"take":i=o1(i,r+w);break;case"takeRight":r=K2(r,i-w);break}}return{start:r,end:i}}function Mc(r){var i=r.match(Wn);return i?i[1].split(w5):[]}function z7(r,i,u){i=on(i,r);for(var c=-1,_=i.length,g=!1;++c<_;){var w=_t(i[c]);if(!(g=r!=null&&u(r,w)))break;r=r[w]}return g||++c!=_?g:(_=r==null?0:r.length,!!_&&pr(_)&&Ot(w,_)&&(H0(r)||Ln(r)))}function kc(r){var i=r.length,u=new r.constructor(i);return i&&typeof r[0]=="string"&&_2.call(r,"index")&&(u.index=r.index,u.input=r.input),u}function Z7(r){return typeof r.constructor=="function"&&!Y3(r)?Qn(F4(r)):{}}function Cc(r,i,u){var c=r.constructor;switch(i){case $0:return o6(r);case N:case M:return new c(+r);case U0:return cc(r,u);case z0:case U2:case H2:case z2:case Z:case v:case J:case H:case U:return E7(r,u);case T:return new c;case A:case K:return new c(r);case X:return fc(r);case z:return new c;case k0:return hc(r)}}function Dc(r,i){var u=i.length;if(!u)return r;var c=u-1;return i[c]=(u>1?"& ":"")+i[c],i=i.join(u>2?", ":" "),r.replace(L4,`{
/* [wrapped with `+i+`] */
`)}function Ac(r){return H0(r)||Ln(r)||!!(n7&&r&&r[n7])}function Ot(r,i){var u=typeof r;return i=i??R0,!!i&&(u=="number"||u!="symbol"&&Yu.test(r))&&r>-1&&r%1==0&&r<i}function g1(r,i,u){if(!I2(u))return!1;var c=typeof i;return(c=="number"?b1(u)&&Ot(i,u.length):c=="string"&&i in u)?rt(u[i],r):!1}function d6(r,i){if(H0(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||E1(r)?!0:t1.test(r)||!Q2.test(r)||i!=null&&r in T2(i)}function Lc(r){var i=typeof r;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?r!=="__proto__":r===null}function g6(r){var i=lr(r),u=d[i];if(typeof u!="function"||!(i in X0.prototype))return!1;if(r===u)return!0;var c=f6(u);return!!c&&r===c[0]}function Oc(r){return!!J8&&J8 in r}var Ec=H4?Et:E6;function Y3(r){var i=r&&r.constructor,u=typeof i=="function"&&i.prototype||Zn;return r===u}function J7(r){return r===r&&!I2(r)}function X7(r,i){return function(u){return u==null?!1:u[r]===i&&(i!==e||r in T2(u))}}function Nc(r){var i=dr(r,function(c){return u.size===p&&u.clear(),c}),u=i.cache;return i}function Rc(r,i){var u=r[1],c=i[1],_=u|c,g=_<(r0|i0|S0),w=c==S0&&u==u0||c==S0&&u==J0&&r[7].length<=i[8]||c==(S0|J0)&&i[7].length<=i[8]&&u==u0;if(!(g||w))return r;c&r0&&(r[2]=i[2],_|=u&r0?0:t0);var k=i[3];if(k){var L=r[3];r[3]=L?R7(L,k,i[4]):k,r[4]=L?nn(r[3],y):i[4]}return k=i[5],k&&(L=r[5],r[5]=L?P7(L,k,i[6]):k,r[6]=L?nn(r[5],y):i[6]),k=i[7],k&&(r[7]=k),c&S0&&(r[8]=r[8]==null?i[8]:o1(r[8],i[8])),r[9]==null&&(r[9]=i[9]),r[0]=i[0],r[1]=_,r}function Pc(r){var i=[];if(r!=null)for(var u in T2(r))i.push(u);return i}function Bc(r){return $4.call(r)}function Q7(r,i,u){return i=K2(i===e?r.length-1:i,0),function(){for(var c=arguments,_=-1,g=K2(c.length-i,0),w=P(g);++_<g;)w[_]=c[i+_];_=-1;for(var k=P(i+1);++_<i;)k[_]=c[_];return k[i]=u(w),A1(r,this,k)}}function t9(r,i){return i.length<2?r:Cn(r,U1(i,0,-1))}function Ic(r,i){for(var u=r.length,c=o1(i.length,u),_=S1(r);c--;){var g=i[c];r[c]=Ot(g,u)?_[g]:e}return r}function p6(r,i){if(!(i==="constructor"&&typeof r[i]=="function")&&i!="__proto__")return r[i]}var n9=e9(b7),V3=Xl||function(r,i){return r1.setTimeout(r,i)},m6=e9(oc);function r9(r,i,u){var c=i+"";return m6(r,Dc(c,Hc(Mc(c),u)))}function e9(r){var i=0,u=0;return function(){var c=ra(),_=L2-(c-u);if(u=c,_>0){if(++i>=P2)return arguments[0]}else i=0;return r.apply(e,arguments)}}function cr(r,i){var u=-1,c=r.length,_=c-1;for(i=i===e?c:i;++u<i;){var g=Q5(u,_),w=r[g];r[g]=r[u],r[u]=w}return r.length=i,r}var i9=Nc(function(r){var i=[];return r.charCodeAt(0)===46&&i.push(""),r.replace(ct,function(u,c,_,g){i.push(_?g.replace(Pu,"$1"):c||u)}),i});function _t(r){if(typeof r=="string"||E1(r))return r;var i=r+"";return i=="0"&&1/r==-I0?"-0":i}function An(r){if(r!=null){try{return G4.call(r)}catch{}try{return r+""}catch{}}return""}function Hc(r,i){return Y1(x1,function(u){var c="_."+u[0];i&u[1]&&!R4(r,c)&&r.push(c)}),r.sort()}function s9(r){if(r instanceof X0)return r.clone();var i=new F1(r.__wrapped__,r.__chain__);return i.__actions__=S1(r.__actions__),i.__index__=r.__index__,i.__values__=r.__values__,i}function Gc(r,i,u){(u?g1(r,i,u):i===e)?i=1:i=K2(F0(i),0);var c=r==null?0:r.length;if(!c||i<1)return[];for(var _=0,g=0,w=P(q4(c/i));_<c;)w[g++]=U1(r,_,_+=i);return w}function $c(r){for(var i=-1,u=r==null?0:r.length,c=0,_=[];++i<u;){var g=r[i];g&&(_[c++]=g)}return _}function Yc(){var r=arguments.length;if(!r)return[];for(var i=P(r-1),u=arguments[0],c=r;c--;)i[c-1]=arguments[c];return tn(H0(u)?S1(u):[u],e1(i,1))}var Vc=K0(function(r,i){return $2(r)?B3(r,e1(i,1,$2,!0)):[]}),Fc=K0(function(r,i){var u=q1(i);return $2(u)&&(u=e),$2(r)?B3(r,e1(i,1,$2,!0),A0(u,2)):[]}),Wc=K0(function(r,i){var u=q1(i);return $2(u)&&(u=e),$2(r)?B3(r,e1(i,1,$2,!0),e,u):[]});function Uc(r,i,u){var c=r==null?0:r.length;return c?(i=u||i===e?1:F0(i),U1(r,i<0?0:i,c)):[]}function qc(r,i,u){var c=r==null?0:r.length;return c?(i=u||i===e?1:F0(i),i=c-i,U1(r,0,i<0?0:i)):[]}function Kc(r,i){return r&&r.length?rr(r,A0(i,3),!0,!0):[]}function jc(r,i){return r&&r.length?rr(r,A0(i,3),!0):[]}function zc(r,i,u,c){var _=r==null?0:r.length;return _?(u&&typeof u!="number"&&g1(r,i,u)&&(u=0,c=_),Ya(r,i,u,c)):[]}function o9(r,i,u){var c=r==null?0:r.length;if(!c)return-1;var _=u==null?0:F0(u);return _<0&&(_=K2(c+_,0)),P4(r,A0(i,3),_)}function u9(r,i,u){var c=r==null?0:r.length;if(!c)return-1;var _=c-1;return u!==e&&(_=F0(u),_=u<0?K2(c+_,0):o1(_,c-1)),P4(r,A0(i,3),_,!0)}function l9(r){var i=r==null?0:r.length;return i?e1(r,1):[]}function Zc(r){var i=r==null?0:r.length;return i?e1(r,I0):[]}function Jc(r,i){var u=r==null?0:r.length;return u?(i=i===e?1:F0(i),e1(r,i)):[]}function Xc(r){for(var i=-1,u=r==null?0:r.length,c={};++i<u;){var _=r[i];c[_[0]]=_[1]}return c}function a9(r){return r&&r.length?r[0]:e}function Qc(r,i,u){var c=r==null?0:r.length;if(!c)return-1;var _=u==null?0:F0(u);return _<0&&(_=K2(c+_,0)),qn(r,i,_)}function tf(r){var i=r==null?0:r.length;return i?U1(r,0,-1):[]}var nf=K0(function(r){var i=E2(r,i6);return i.length&&i[0]===r[0]?j5(i):[]}),rf=K0(function(r){var i=q1(r),u=E2(r,i6);return i===q1(u)?i=e:u.pop(),u.length&&u[0]===r[0]?j5(u,A0(i,2)):[]}),ef=K0(function(r){var i=q1(r),u=E2(r,i6);return i=typeof i=="function"?i:e,i&&u.pop(),u.length&&u[0]===r[0]?j5(u,e,i):[]});function sf(r,i){return r==null?"":ta.call(r,i)}function q1(r){var i=r==null?0:r.length;return i?r[i-1]:e}function of(r,i,u){var c=r==null?0:r.length;if(!c)return-1;var _=c;return u!==e&&(_=F0(u),_=_<0?K2(c+_,0):o1(_,c-1)),i===i?Hl(r,i,_):P4(r,F8,_,!0)}function uf(r,i){return r&&r.length?T7(r,F0(i)):e}var lf=K0(c9);function c9(r,i){return r&&r.length&&i&&i.length?X5(r,i):r}function af(r,i,u){return r&&r.length&&i&&i.length?X5(r,i,A0(u,2)):r}function cf(r,i,u){return r&&r.length&&i&&i.length?X5(r,i,e,u):r}var ff=Lt(function(r,i){var u=r==null?0:r.length,c=W5(r,i);return S7(r,E2(i,function(_){return Ot(_,u)?+_:_}).sort(N7)),c});function hf(r,i){var u=[];if(!(r&&r.length))return u;var c=-1,_=[],g=r.length;for(i=A0(i,3);++c<g;){var w=r[c];i(w,c,r)&&(u.push(w),_.push(c))}return S7(r,_),u}function v6(r){return r==null?r:ia.call(r)}function _f(r,i,u){var c=r==null?0:r.length;return c?(u&&typeof u!="number"&&g1(r,i,u)?(i=0,u=c):(i=i==null?0:F0(i),u=u===e?c:F0(u)),U1(r,i,u)):[]}function df(r,i){return nr(r,i)}function gf(r,i,u){return n6(r,i,A0(u,2))}function pf(r,i){var u=r==null?0:r.length;if(u){var c=nr(r,i);if(c<u&&rt(r[c],i))return c}return-1}function mf(r,i){return nr(r,i,!0)}function vf(r,i,u){return n6(r,i,A0(u,2),!0)}function yf(r,i){var u=r==null?0:r.length;if(u){var c=nr(r,i,!0)-1;if(rt(r[c],i))return c}return-1}function Tf(r){return r&&r.length?M7(r):[]}function xf(r,i){return r&&r.length?M7(r,A0(i,2)):[]}function wf(r){var i=r==null?0:r.length;return i?U1(r,1,i):[]}function Sf(r,i,u){return r&&r.length?(i=u||i===e?1:F0(i),U1(r,0,i<0?0:i)):[]}function bf(r,i,u){var c=r==null?0:r.length;return c?(i=u||i===e?1:F0(i),i=c-i,U1(r,i<0?0:i,c)):[]}function Mf(r,i){return r&&r.length?rr(r,A0(i,3),!1,!0):[]}function kf(r,i){return r&&r.length?rr(r,A0(i,3)):[]}var Cf=K0(function(r){return sn(e1(r,1,$2,!0))}),Df=K0(function(r){var i=q1(r);return $2(i)&&(i=e),sn(e1(r,1,$2,!0),A0(i,2))}),Af=K0(function(r){var i=q1(r);return i=typeof i=="function"?i:e,sn(e1(r,1,$2,!0),e,i)});function Lf(r){return r&&r.length?sn(r):[]}function Of(r,i){return r&&r.length?sn(r,A0(i,2)):[]}function Ef(r,i){return i=typeof i=="function"?i:e,r&&r.length?sn(r,e,i):[]}function y6(r){if(!(r&&r.length))return[];var i=0;return r=Qt(r,function(u){if($2(u))return i=K2(u.length,i),!0}),B5(i,function(u){return E2(r,N5(u))})}function f9(r,i){if(!(r&&r.length))return[];var u=y6(r);return i==null?u:E2(u,function(c){return A1(i,e,c)})}var Nf=K0(function(r,i){return $2(r)?B3(r,i):[]}),Rf=K0(function(r){return e6(Qt(r,$2))}),Pf=K0(function(r){var i=q1(r);return $2(i)&&(i=e),e6(Qt(r,$2),A0(i,2))}),Bf=K0(function(r){var i=q1(r);return i=typeof i=="function"?i:e,e6(Qt(r,$2),e,i)}),If=K0(y6);function Hf(r,i){return A7(r||[],i||[],P3)}function Gf(r,i){return A7(r||[],i||[],G3)}var $f=K0(function(r){var i=r.length,u=i>1?r[i-1]:e;return u=typeof u=="function"?(r.pop(),u):e,f9(r,u)});function h9(r){var i=d(r);return i.__chain__=!0,i}function Yf(r,i){return i(r),r}function fr(r,i){return i(r)}var Vf=Lt(function(r){var i=r.length,u=i?r[0]:0,c=this.__wrapped__,_=function(g){return W5(g,r)};return i>1||this.__actions__.length||!(c instanceof X0)||!Ot(u)?this.thru(_):(c=c.slice(u,+u+(i?1:0)),c.__actions__.push({func:fr,args:[_],thisArg:e}),new F1(c,this.__chain__).thru(function(g){return i&&!g.length&&g.push(e),g}))});function Ff(){return h9(this)}function Wf(){return new F1(this.value(),this.__chain__)}function Uf(){this.__values__===e&&(this.__values__=k9(this.value()));var r=this.__index__>=this.__values__.length,i=r?e:this.__values__[this.__index__++];return{done:r,value:i}}function qf(){return this}function Kf(r){for(var i,u=this;u instanceof Z4;){var c=s9(u);c.__index__=0,c.__values__=e,i?_.__wrapped__=c:i=c;var _=c;u=u.__wrapped__}return _.__wrapped__=r,i}function jf(){var r=this.__wrapped__;if(r instanceof X0){var i=r;return this.__actions__.length&&(i=new X0(this)),i=i.reverse(),i.__actions__.push({func:fr,args:[v6],thisArg:e}),new F1(i,this.__chain__)}return this.thru(v6)}function zf(){return D7(this.__wrapped__,this.__actions__)}var Zf=er(function(r,i,u){_2.call(r,u)?++r[u]:Dt(r,u,1)});function Jf(r,i,u){var c=H0(r)?Y8:$a;return u&&g1(r,i,u)&&(i=e),c(r,A0(i,3))}function Xf(r,i){var u=H0(r)?Qt:f7;return u(r,A0(i,3))}var Qf=G7(o9),th=G7(u9);function nh(r,i){return e1(hr(r,i),1)}function rh(r,i){return e1(hr(r,i),I0)}function eh(r,i,u){return u=u===e?1:F0(u),e1(hr(r,i),u)}function _9(r,i){var u=H0(r)?Y1:en;return u(r,A0(i,3))}function d9(r,i){var u=H0(r)?xl:c7;return u(r,A0(i,3))}var ih=er(function(r,i,u){_2.call(r,u)?r[u].push(i):Dt(r,u,[i])});function sh(r,i,u,c){r=b1(r)?r:i3(r),u=u&&!c?F0(u):0;var _=r.length;return u<0&&(u=K2(_+u,0)),mr(r)?u<=_&&r.indexOf(i,u)>-1:!!_&&qn(r,i,u)>-1}var oh=K0(function(r,i,u){var c=-1,_=typeof i=="function",g=b1(r)?P(r.length):[];return en(r,function(w){g[++c]=_?A1(i,w,u):I3(w,i,u)}),g}),uh=er(function(r,i,u){Dt(r,u,i)});function hr(r,i){var u=H0(r)?E2:m7;return u(r,A0(i,3))}function lh(r,i,u,c){return r==null?[]:(H0(i)||(i=i==null?[]:[i]),u=c?e:u,H0(u)||(u=u==null?[]:[u]),x7(r,i,u))}var ah=er(function(r,i,u){r[u?0:1].push(i)},function(){return[[],[]]});function ch(r,i,u){var c=H0(r)?O5:U8,_=arguments.length<3;return c(r,A0(i,4),u,_,en)}function fh(r,i,u){var c=H0(r)?wl:U8,_=arguments.length<3;return c(r,A0(i,4),u,_,c7)}function hh(r,i){var u=H0(r)?Qt:f7;return u(r,gr(A0(i,3)))}function _h(r){var i=H0(r)?o7:ic;return i(r)}function dh(r,i,u){(u?g1(r,i,u):i===e)?i=1:i=F0(i);var c=H0(r)?Pa:sc;return c(r,i)}function gh(r){var i=H0(r)?Ba:uc;return i(r)}function ph(r){if(r==null)return 0;if(b1(r))return mr(r)?jn(r):r.length;var i=u1(r);return i==T||i==z?r.size:Z5(r).length}function mh(r,i,u){var c=H0(r)?E5:lc;return u&&g1(r,i,u)&&(i=e),c(r,A0(i,3))}var vh=K0(function(r,i){if(r==null)return[];var u=i.length;return u>1&&g1(r,i[0],i[1])?i=[]:u>2&&g1(i[0],i[1],i[2])&&(i=[i[0]]),x7(r,e1(i,1),[])}),_r=Jl||function(){return r1.Date.now()};function yh(r,i){if(typeof i!="function")throw new V1(a);return r=F0(r),function(){if(--r<1)return i.apply(this,arguments)}}function g9(r,i,u){return i=u?e:i,i=r&&i==null?r.length:i,At(r,S0,e,e,e,e,i)}function p9(r,i){var u;if(typeof i!="function")throw new V1(a);return r=F0(r),function(){return--r>0&&(u=i.apply(this,arguments)),r<=1&&(i=e),u}}var T6=K0(function(r,i,u){var c=r0;if(u.length){var _=nn(u,r3(T6));c|=h0}return At(r,c,i,u,_)}),m9=K0(function(r,i,u){var c=r0|i0;if(u.length){var _=nn(u,r3(m9));c|=h0}return At(i,c,r,u,_)});function v9(r,i,u){i=u?e:i;var c=At(r,u0,e,e,e,e,e,i);return c.placeholder=v9.placeholder,c}function y9(r,i,u){i=u?e:i;var c=At(r,a0,e,e,e,e,e,i);return c.placeholder=y9.placeholder,c}function T9(r,i,u){var c,_,g,w,k,L,G=0,V=!1,j=!1,f0=!0;if(typeof r!="function")throw new V1(a);i=K1(i)||0,I2(u)&&(V=!!u.leading,j="maxWait"in u,g=j?K2(K1(u.maxWait)||0,i):g,f0="trailing"in u?!!u.trailing:f0);function b0(Y2){var et=c,Rt=_;return c=_=e,G=Y2,w=r.apply(Rt,et),w}function O0(Y2){return G=Y2,k=V3(Z0,i),V?b0(Y2):w}function q0(Y2){var et=Y2-L,Rt=Y2-G,G9=i-et;return j?o1(G9,g-Rt):G9}function E0(Y2){var et=Y2-L,Rt=Y2-G;return L===e||et>=i||et<0||j&&Rt>=g}function Z0(){var Y2=_r();if(E0(Y2))return t2(Y2);k=V3(Z0,q0(Y2))}function t2(Y2){return k=e,f0&&c?b0(Y2):(c=_=e,w)}function N1(){k!==e&&L7(k),G=0,c=L=_=k=e}function p1(){return k===e?w:t2(_r())}function R1(){var Y2=_r(),et=E0(Y2);if(c=arguments,_=this,L=Y2,et){if(k===e)return O0(L);if(j)return L7(k),k=V3(Z0,i),b0(L)}return k===e&&(k=V3(Z0,i)),w}return R1.cancel=N1,R1.flush=p1,R1}var Th=K0(function(r,i){return a7(r,1,i)}),xh=K0(function(r,i,u){return a7(r,K1(i)||0,u)});function wh(r){return At(r,V0)}function dr(r,i){if(typeof r!="function"||i!=null&&typeof i!="function")throw new V1(a);var u=function(){var c=arguments,_=i?i.apply(this,c):c[0],g=u.cache;if(g.has(_))return g.get(_);var w=r.apply(this,c);return u.cache=g.set(_,w)||g,w};return u.cache=new(dr.Cache||Ct),u}dr.Cache=Ct;function gr(r){if(typeof r!="function")throw new V1(a);return function(){var i=arguments;switch(i.length){case 0:return!r.call(this);case 1:return!r.call(this,i[0]);case 2:return!r.call(this,i[0],i[1]);case 3:return!r.call(this,i[0],i[1],i[2])}return!r.apply(this,i)}}function Sh(r){return p9(2,r)}var bh=ac(function(r,i){i=i.length==1&&H0(i[0])?E2(i[0],L1(A0())):E2(e1(i,1),L1(A0()));var u=i.length;return K0(function(c){for(var _=-1,g=o1(c.length,u);++_<g;)c[_]=i[_].call(this,c[_]);return A1(r,this,c)})}),x6=K0(function(r,i){var u=nn(i,r3(x6));return At(r,h0,e,i,u)}),x9=K0(function(r,i){var u=nn(i,r3(x9));return At(r,C0,e,i,u)}),Mh=Lt(function(r,i){return At(r,J0,e,e,e,i)});function kh(r,i){if(typeof r!="function")throw new V1(a);return i=i===e?i:F0(i),K0(r,i)}function Ch(r,i){if(typeof r!="function")throw new V1(a);return i=i==null?0:K2(F0(i),0),K0(function(u){var c=u[i],_=un(u,0,i);return c&&tn(_,c),A1(r,this,_)})}function Dh(r,i,u){var c=!0,_=!0;if(typeof r!="function")throw new V1(a);return I2(u)&&(c="leading"in u?!!u.leading:c,_="trailing"in u?!!u.trailing:_),T9(r,i,{leading:c,maxWait:i,trailing:_})}function Ah(r){return g9(r,1)}function Lh(r,i){return x6(s6(i),r)}function Oh(){if(!arguments.length)return[];var r=arguments[0];return H0(r)?r:[r]}function Eh(r){return W1(r,C)}function Nh(r,i){return i=typeof i=="function"?i:e,W1(r,C,i)}function Rh(r){return W1(r,x|C)}function Ph(r,i){return i=typeof i=="function"?i:e,W1(r,x|C,i)}function Bh(r,i){return i==null||l7(r,i,Z2(i))}function rt(r,i){return r===i||r!==r&&i!==i}var Ih=ur(K5),Hh=ur(function(r,i){return r>=i}),Ln=d7(function(){return arguments}())?d7:function(r){return G2(r)&&_2.call(r,"callee")&&!t7.call(r,"callee")},H0=P.isArray,Gh=P8?L1(P8):qa;function b1(r){return r!=null&&pr(r.length)&&!Et(r)}function $2(r){return G2(r)&&b1(r)}function $h(r){return r===!0||r===!1||G2(r)&&d1(r)==N}var ln=Ql||E6,Yh=B8?L1(B8):Ka;function Vh(r){return G2(r)&&r.nodeType===1&&!F3(r)}function Fh(r){if(r==null)return!0;if(b1(r)&&(H0(r)||typeof r=="string"||typeof r.splice=="function"||ln(r)||e3(r)||Ln(r)))return!r.length;var i=u1(r);if(i==T||i==z)return!r.size;if(Y3(r))return!Z5(r).length;for(var u in r)if(_2.call(r,u))return!1;return!0}function Wh(r,i){return H3(r,i)}function Uh(r,i,u){u=typeof u=="function"?u:e;var c=u?u(r,i):e;return c===e?H3(r,i,e,u):!!c}function w6(r){if(!G2(r))return!1;var i=d1(r);return i==$||i==E||typeof r.message=="string"&&typeof r.name=="string"&&!F3(r)}function qh(r){return typeof r=="number"&&r7(r)}function Et(r){if(!I2(r))return!1;var i=d1(r);return i==p0||i==m||i==I||i==s0}function w9(r){return typeof r=="number"&&r==F0(r)}function pr(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=R0}function I2(r){var i=typeof r;return r!=null&&(i=="object"||i=="function")}function G2(r){return r!=null&&typeof r=="object"}var S9=I8?L1(I8):za;function Kh(r,i){return r===i||z5(r,i,h6(i))}function jh(r,i,u){return u=typeof u=="function"?u:e,z5(r,i,h6(i),u)}function zh(r){return b9(r)&&r!=+r}function Zh(r){if(Ec(r))throw new B0(l);return g7(r)}function Jh(r){return r===null}function Xh(r){return r==null}function b9(r){return typeof r=="number"||G2(r)&&d1(r)==A}function F3(r){if(!G2(r)||d1(r)!=R)return!1;var i=F4(r);if(i===null)return!0;var u=_2.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&G4.call(u)==Kl}var S6=H8?L1(H8):Za;function Qh(r){return w9(r)&&r>=-R0&&r<=R0}var M9=G8?L1(G8):Ja;function mr(r){return typeof r=="string"||!H0(r)&&G2(r)&&d1(r)==K}function E1(r){return typeof r=="symbol"||G2(r)&&d1(r)==k0}var e3=$8?L1($8):Xa;function t_(r){return r===e}function n_(r){return G2(r)&&u1(r)==x0}function r_(r){return G2(r)&&d1(r)==L0}var e_=ur(J5),i_=ur(function(r,i){return r<=i});function k9(r){if(!r)return[];if(b1(r))return mr(r)?tt(r):S1(r);if(L3&&r[L3])return Pl(r[L3]());var i=u1(r),u=i==T?H5:i==z?B4:i3;return u(r)}function Nt(r){if(!r)return r===0?r:0;if(r=K1(r),r===I0||r===-I0){var i=r<0?-1:1;return i*s1}return r===r?r:0}function F0(r){var i=Nt(r),u=i%1;return i===i?u?i-u:i:0}function C9(r){return r?kn(F0(r),0,y2):0}function K1(r){if(typeof r=="number")return r;if(E1(r))return S2;if(I2(r)){var i=typeof r.valueOf=="function"?r.valueOf():r;r=I2(i)?i+"":i}if(typeof r!="string")return r===0?r:+r;r=q8(r);var u=Hu.test(r);return u||$u.test(r)?vl(r.slice(2),u?2:8):Iu.test(r)?S2:+r}function D9(r){return ht(r,M1(r))}function s_(r){return r?kn(F0(r),-R0,R0):r===0?r:0}function a2(r){return r==null?"":O1(r)}var o_=t3(function(r,i){if(Y3(i)||b1(i)){ht(i,Z2(i),r);return}for(var u in i)_2.call(i,u)&&P3(r,u,i[u])}),A9=t3(function(r,i){ht(i,M1(i),r)}),vr=t3(function(r,i,u,c){ht(i,M1(i),r,c)}),u_=t3(function(r,i,u,c){ht(i,Z2(i),r,c)}),l_=Lt(W5);function a_(r,i){var u=Qn(r);return i==null?u:u7(u,i)}var c_=K0(function(r,i){r=T2(r);var u=-1,c=i.length,_=c>2?i[2]:e;for(_&&g1(i[0],i[1],_)&&(c=1);++u<c;)for(var g=i[u],w=M1(g),k=-1,L=w.length;++k<L;){var G=w[k],V=r[G];(V===e||rt(V,Zn[G])&&!_2.call(r,G))&&(r[G]=g[G])}return r}),f_=K0(function(r){return r.push(e,q7),A1(L9,e,r)});function h_(r,i){return V8(r,A0(i,3),ft)}function __(r,i){return V8(r,A0(i,3),q5)}function d_(r,i){return r==null?r:U5(r,A0(i,3),M1)}function g_(r,i){return r==null?r:h7(r,A0(i,3),M1)}function p_(r,i){return r&&ft(r,A0(i,3))}function m_(r,i){return r&&q5(r,A0(i,3))}function v_(r){return r==null?[]:Q4(r,Z2(r))}function y_(r){return r==null?[]:Q4(r,M1(r))}function b6(r,i,u){var c=r==null?e:Cn(r,i);return c===e?u:c}function T_(r,i){return r!=null&&z7(r,i,Va)}function M6(r,i){return r!=null&&z7(r,i,Fa)}var x_=Y7(function(r,i,u){i!=null&&typeof i.toString!="function"&&(i=$4.call(i)),r[i]=u},C6(k1)),w_=Y7(function(r,i,u){i!=null&&typeof i.toString!="function"&&(i=$4.call(i)),_2.call(r,i)?r[i].push(u):r[i]=[u]},A0),S_=K0(I3);function Z2(r){return b1(r)?s7(r):Z5(r)}function M1(r){return b1(r)?s7(r,!0):Qa(r)}function b_(r,i){var u={};return i=A0(i,3),ft(r,function(c,_,g){Dt(u,i(c,_,g),c)}),u}function M_(r,i){var u={};return i=A0(i,3),ft(r,function(c,_,g){Dt(u,_,i(c,_,g))}),u}var k_=t3(function(r,i,u){tr(r,i,u)}),L9=t3(function(r,i,u,c){tr(r,i,u,c)}),C_=Lt(function(r,i){var u={};if(r==null)return u;var c=!1;i=E2(i,function(g){return g=on(g,r),c||(c=g.length>1),g}),ht(r,c6(r),u),c&&(u=W1(u,x|b|C,Tc));for(var _=i.length;_--;)r6(u,i[_]);return u});function D_(r,i){return O9(r,gr(A0(i)))}var A_=Lt(function(r,i){return r==null?{}:nc(r,i)});function O9(r,i){if(r==null)return{};var u=E2(c6(r),function(c){return[c]});return i=A0(i),w7(r,u,function(c,_){return i(c,_[0])})}function L_(r,i,u){i=on(i,r);var c=-1,_=i.length;for(_||(_=1,r=e);++c<_;){var g=r==null?e:r[_t(i[c])];g===e&&(c=_,g=u),r=Et(g)?g.call(r):g}return r}function O_(r,i,u){return r==null?r:G3(r,i,u)}function E_(r,i,u,c){return c=typeof c=="function"?c:e,r==null?r:G3(r,i,u,c)}var E9=W7(Z2),N9=W7(M1);function N_(r,i,u){var c=H0(r),_=c||ln(r)||e3(r);if(i=A0(i,4),u==null){var g=r&&r.constructor;_?u=c?new g:[]:I2(r)?u=Et(g)?Qn(F4(r)):{}:u={}}return(_?Y1:ft)(r,function(w,k,L){return i(u,w,k,L)}),u}function R_(r,i){return r==null?!0:r6(r,i)}function P_(r,i,u){return r==null?r:C7(r,i,s6(u))}function B_(r,i,u,c){return c=typeof c=="function"?c:e,r==null?r:C7(r,i,s6(u),c)}function i3(r){return r==null?[]:I5(r,Z2(r))}function I_(r){return r==null?[]:I5(r,M1(r))}function H_(r,i,u){return u===e&&(u=i,i=e),u!==e&&(u=K1(u),u=u===u?u:0),i!==e&&(i=K1(i),i=i===i?i:0),kn(K1(r),i,u)}function G_(r,i,u){return i=Nt(i),u===e?(u=i,i=0):u=Nt(u),r=K1(r),Wa(r,i,u)}function $_(r,i,u){if(u&&typeof u!="boolean"&&g1(r,i,u)&&(i=u=e),u===e&&(typeof i=="boolean"?(u=i,i=e):typeof r=="boolean"&&(u=r,r=e)),r===e&&i===e?(r=0,i=1):(r=Nt(r),i===e?(i=r,r=0):i=Nt(i)),r>i){var c=r;r=i,i=c}if(u||r%1||i%1){var _=e7();return o1(r+_*(i-r+ml("1e-"+((_+"").length-1))),i)}return Q5(r,i)}var Y_=n3(function(r,i,u){return i=i.toLowerCase(),r+(u?R9(i):i)});function R9(r){return k6(a2(r).toLowerCase())}function P9(r){return r=a2(r),r&&r.replace(Vu,Ll).replace(ul,"")}function V_(r,i,u){r=a2(r),i=O1(i);var c=r.length;u=u===e?c:kn(F0(u),0,c);var _=u;return u-=i.length,u>=0&&r.slice(u,_)==i}function F_(r){return r=a2(r),r&&M0.test(r)?r.replace(w0,Ol):r}function W_(r){return r=a2(r),r&&n1.test(r)?r.replace(_1,"\\$&"):r}var U_=n3(function(r,i,u){return r+(u?"-":"")+i.toLowerCase()}),q_=n3(function(r,i,u){return r+(u?" ":"")+i.toLowerCase()}),K_=H7("toLowerCase");function j_(r,i,u){r=a2(r),i=F0(i);var c=i?jn(r):0;if(!i||c>=i)return r;var _=(i-c)/2;return or(K4(_),u)+r+or(q4(_),u)}function z_(r,i,u){r=a2(r),i=F0(i);var c=i?jn(r):0;return i&&c<i?r+or(i-c,u):r}function Z_(r,i,u){r=a2(r),i=F0(i);var c=i?jn(r):0;return i&&c<i?or(i-c,u)+r:r}function J_(r,i,u){return u||i==null?i=0:i&&(i=+i),ea(a2(r).replace(w1,""),i||0)}function X_(r,i,u){return(u?g1(r,i,u):i===e)?i=1:i=F0(i),t6(a2(r),i)}function Q_(){var r=arguments,i=a2(r[0]);return r.length<3?i:i.replace(r[1],r[2])}var td=n3(function(r,i,u){return r+(u?"_":"")+i.toLowerCase()});function nd(r,i,u){return u&&typeof u!="number"&&g1(r,i,u)&&(i=u=e),u=u===e?y2:u>>>0,u?(r=a2(r),r&&(typeof i=="string"||i!=null&&!S6(i))&&(i=O1(i),!i&&Kn(r))?un(tt(r),0,u):r.split(i,u)):[]}var rd=n3(function(r,i,u){return r+(u?" ":"")+k6(i)});function ed(r,i,u){return r=a2(r),u=u==null?0:kn(F0(u),0,r.length),i=O1(i),r.slice(u,u+i.length)==i}function id(r,i,u){var c=d.templateSettings;u&&g1(r,i,u)&&(i=e),r=a2(r),i=vr({},i,c,U7);var _=vr({},i.imports,c.imports,U7),g=Z2(_),w=I5(_,g),k,L,G=0,V=i.interpolate||O4,j="__p += '",f0=G5((i.escape||O4).source+"|"+V.source+"|"+(V===d2?Bu:O4).source+"|"+(i.evaluate||O4).source+"|$","g"),b0="//# sourceURL="+(_2.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++hl+"]")+`
`;r.replace(f0,function(E0,Z0,t2,N1,p1,R1){return t2||(t2=N1),j+=r.slice(G,R1).replace(Fu,El),Z0&&(k=!0,j+=`' +
__e(`+Z0+`) +
'`),p1&&(L=!0,j+=`';
`+p1+`;
__p += '`),t2&&(j+=`' +
((__t = (`+t2+`)) == null ? '' : __t) +
'`),G=R1+E0.length,E0}),j+=`';
`;var O0=_2.call(i,"variable")&&i.variable;if(!O0)j=`with (obj) {
`+j+`
}
`;else if(Ru.test(O0))throw new B0(f);j=(L?j.replace(_0,""):j).replace(O,"$1").replace(c0,"$1;"),j="function("+(O0||"obj")+`) {
`+(O0?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(k?", __e = _.escape":"")+(L?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+j+`return __p
}`;var q0=I9(function(){return u2(g,b0+"return "+j).apply(e,w)});if(q0.source=j,w6(q0))throw q0;return q0}function sd(r){return a2(r).toLowerCase()}function od(r){return a2(r).toUpperCase()}function ud(r,i,u){if(r=a2(r),r&&(u||i===e))return q8(r);if(!r||!(i=O1(i)))return r;var c=tt(r),_=tt(i),g=K8(c,_),w=j8(c,_)+1;return un(c,g,w).join("")}function ld(r,i,u){if(r=a2(r),r&&(u||i===e))return r.slice(0,Z8(r)+1);if(!r||!(i=O1(i)))return r;var c=tt(r),_=j8(c,tt(i))+1;return un(c,0,_).join("")}function ad(r,i,u){if(r=a2(r),r&&(u||i===e))return r.replace(w1,"");if(!r||!(i=O1(i)))return r;var c=tt(r),_=K8(c,tt(i));return un(c,_).join("")}function cd(r,i){var u=l2,c=w2;if(I2(i)){var _="separator"in i?i.separator:_;u="length"in i?F0(i.length):u,c="omission"in i?O1(i.omission):c}r=a2(r);var g=r.length;if(Kn(r)){var w=tt(r);g=w.length}if(u>=g)return r;var k=u-jn(c);if(k<1)return c;var L=w?un(w,0,k).join(""):r.slice(0,k);if(_===e)return L+c;if(w&&(k+=L.length-k),S6(_)){if(r.slice(k).search(_)){var G,V=L;for(_.global||(_=G5(_.source,a2(d8.exec(_))+"g")),_.lastIndex=0;G=_.exec(V);)var j=G.index;L=L.slice(0,j===e?k:j)}}else if(r.indexOf(O1(_),k)!=k){var f0=L.lastIndexOf(_);f0>-1&&(L=L.slice(0,f0))}return L+c}function fd(r){return r=a2(r),r&&m0.test(r)?r.replace(T0,Gl):r}var hd=n3(function(r,i,u){return r+(u?" ":"")+i.toUpperCase()}),k6=H7("toUpperCase");function B9(r,i,u){return r=a2(r),i=u?e:i,i===e?Rl(r)?Vl(r):Ml(r):r.match(i)||[]}var I9=K0(function(r,i){try{return A1(r,e,i)}catch(u){return w6(u)?u:new B0(u)}}),_d=Lt(function(r,i){return Y1(i,function(u){u=_t(u),Dt(r,u,T6(r[u],r))}),r});function dd(r){var i=r==null?0:r.length,u=A0();return r=i?E2(r,function(c){if(typeof c[1]!="function")throw new V1(a);return[u(c[0]),c[1]]}):[],K0(function(c){for(var _=-1;++_<i;){var g=r[_];if(A1(g[0],this,c))return A1(g[1],this,c)}})}function gd(r){return Ga(W1(r,x))}function C6(r){return function(){return r}}function pd(r,i){return r==null||r!==r?i:r}var md=$7(),vd=$7(!0);function k1(r){return r}function D6(r){return p7(typeof r=="function"?r:W1(r,x))}function yd(r){return v7(W1(r,x))}function Td(r,i){return y7(r,W1(i,x))}var xd=K0(function(r,i){return function(u){return I3(u,r,i)}}),wd=K0(function(r,i){return function(u){return I3(r,u,i)}});function A6(r,i,u){var c=Z2(i),_=Q4(i,c);u==null&&!(I2(i)&&(_.length||!c.length))&&(u=i,i=r,r=this,_=Q4(i,Z2(i)));var g=!(I2(u)&&"chain"in u)||!!u.chain,w=Et(r);return Y1(_,function(k){var L=i[k];r[k]=L,w&&(r.prototype[k]=function(){var G=this.__chain__;if(g||G){var V=r(this.__wrapped__),j=V.__actions__=S1(this.__actions__);return j.push({func:L,args:arguments,thisArg:r}),V.__chain__=G,V}return L.apply(r,tn([this.value()],arguments))})}),r}function Sd(){return r1._===this&&(r1._=jl),this}function L6(){}function bd(r){return r=F0(r),K0(function(i){return T7(i,r)})}var Md=u6(E2),kd=u6(Y8),Cd=u6(E5);function H9(r){return d6(r)?N5(_t(r)):rc(r)}function Dd(r){return function(i){return r==null?e:Cn(r,i)}}var Ad=V7(),Ld=V7(!0);function O6(){return[]}function E6(){return!1}function Od(){return{}}function Ed(){return""}function Nd(){return!0}function Rd(r,i){if(r=F0(r),r<1||r>R0)return[];var u=y2,c=o1(r,y2);i=A0(i),r-=y2;for(var _=B5(c,i);++u<r;)i(u);return _}function Pd(r){return H0(r)?E2(r,_t):E1(r)?[r]:S1(i9(a2(r)))}function Bd(r){var i=++ql;return a2(r)+i}var Id=sr(function(r,i){return r+i},0),Hd=l6("ceil"),Gd=sr(function(r,i){return r/i},1),$d=l6("floor");function Yd(r){return r&&r.length?X4(r,k1,K5):e}function Vd(r,i){return r&&r.length?X4(r,A0(i,2),K5):e}function Fd(r){return W8(r,k1)}function Wd(r,i){return W8(r,A0(i,2))}function Ud(r){return r&&r.length?X4(r,k1,J5):e}function qd(r,i){return r&&r.length?X4(r,A0(i,2),J5):e}var Kd=sr(function(r,i){return r*i},1),jd=l6("round"),zd=sr(function(r,i){return r-i},0);function Zd(r){return r&&r.length?P5(r,k1):0}function Jd(r,i){return r&&r.length?P5(r,A0(i,2)):0}return d.after=yh,d.ary=g9,d.assign=o_,d.assignIn=A9,d.assignInWith=vr,d.assignWith=u_,d.at=l_,d.before=p9,d.bind=T6,d.bindAll=_d,d.bindKey=m9,d.castArray=Oh,d.chain=h9,d.chunk=Gc,d.compact=$c,d.concat=Yc,d.cond=dd,d.conforms=gd,d.constant=C6,d.countBy=Zf,d.create=a_,d.curry=v9,d.curryRight=y9,d.debounce=T9,d.defaults=c_,d.defaultsDeep=f_,d.defer=Th,d.delay=xh,d.difference=Vc,d.differenceBy=Fc,d.differenceWith=Wc,d.drop=Uc,d.dropRight=qc,d.dropRightWhile=Kc,d.dropWhile=jc,d.fill=zc,d.filter=Xf,d.flatMap=nh,d.flatMapDeep=rh,d.flatMapDepth=eh,d.flatten=l9,d.flattenDeep=Zc,d.flattenDepth=Jc,d.flip=wh,d.flow=md,d.flowRight=vd,d.fromPairs=Xc,d.functions=v_,d.functionsIn=y_,d.groupBy=ih,d.initial=tf,d.intersection=nf,d.intersectionBy=rf,d.intersectionWith=ef,d.invert=x_,d.invertBy=w_,d.invokeMap=oh,d.iteratee=D6,d.keyBy=uh,d.keys=Z2,d.keysIn=M1,d.map=hr,d.mapKeys=b_,d.mapValues=M_,d.matches=yd,d.matchesProperty=Td,d.memoize=dr,d.merge=k_,d.mergeWith=L9,d.method=xd,d.methodOf=wd,d.mixin=A6,d.negate=gr,d.nthArg=bd,d.omit=C_,d.omitBy=D_,d.once=Sh,d.orderBy=lh,d.over=Md,d.overArgs=bh,d.overEvery=kd,d.overSome=Cd,d.partial=x6,d.partialRight=x9,d.partition=ah,d.pick=A_,d.pickBy=O9,d.property=H9,d.propertyOf=Dd,d.pull=lf,d.pullAll=c9,d.pullAllBy=af,d.pullAllWith=cf,d.pullAt=ff,d.range=Ad,d.rangeRight=Ld,d.rearg=Mh,d.reject=hh,d.remove=hf,d.rest=kh,d.reverse=v6,d.sampleSize=dh,d.set=O_,d.setWith=E_,d.shuffle=gh,d.slice=_f,d.sortBy=vh,d.sortedUniq=Tf,d.sortedUniqBy=xf,d.split=nd,d.spread=Ch,d.tail=wf,d.take=Sf,d.takeRight=bf,d.takeRightWhile=Mf,d.takeWhile=kf,d.tap=Yf,d.throttle=Dh,d.thru=fr,d.toArray=k9,d.toPairs=E9,d.toPairsIn=N9,d.toPath=Pd,d.toPlainObject=D9,d.transform=N_,d.unary=Ah,d.union=Cf,d.unionBy=Df,d.unionWith=Af,d.uniq=Lf,d.uniqBy=Of,d.uniqWith=Ef,d.unset=R_,d.unzip=y6,d.unzipWith=f9,d.update=P_,d.updateWith=B_,d.values=i3,d.valuesIn=I_,d.without=Nf,d.words=B9,d.wrap=Lh,d.xor=Rf,d.xorBy=Pf,d.xorWith=Bf,d.zip=If,d.zipObject=Hf,d.zipObjectDeep=Gf,d.zipWith=$f,d.entries=E9,d.entriesIn=N9,d.extend=A9,d.extendWith=vr,A6(d,d),d.add=Id,d.attempt=I9,d.camelCase=Y_,d.capitalize=R9,d.ceil=Hd,d.clamp=H_,d.clone=Eh,d.cloneDeep=Rh,d.cloneDeepWith=Ph,d.cloneWith=Nh,d.conformsTo=Bh,d.deburr=P9,d.defaultTo=pd,d.divide=Gd,d.endsWith=V_,d.eq=rt,d.escape=F_,d.escapeRegExp=W_,d.every=Jf,d.find=Qf,d.findIndex=o9,d.findKey=h_,d.findLast=th,d.findLastIndex=u9,d.findLastKey=__,d.floor=$d,d.forEach=_9,d.forEachRight=d9,d.forIn=d_,d.forInRight=g_,d.forOwn=p_,d.forOwnRight=m_,d.get=b6,d.gt=Ih,d.gte=Hh,d.has=T_,d.hasIn=M6,d.head=a9,d.identity=k1,d.includes=sh,d.indexOf=Qc,d.inRange=G_,d.invoke=S_,d.isArguments=Ln,d.isArray=H0,d.isArrayBuffer=Gh,d.isArrayLike=b1,d.isArrayLikeObject=$2,d.isBoolean=$h,d.isBuffer=ln,d.isDate=Yh,d.isElement=Vh,d.isEmpty=Fh,d.isEqual=Wh,d.isEqualWith=Uh,d.isError=w6,d.isFinite=qh,d.isFunction=Et,d.isInteger=w9,d.isLength=pr,d.isMap=S9,d.isMatch=Kh,d.isMatchWith=jh,d.isNaN=zh,d.isNative=Zh,d.isNil=Xh,d.isNull=Jh,d.isNumber=b9,d.isObject=I2,d.isObjectLike=G2,d.isPlainObject=F3,d.isRegExp=S6,d.isSafeInteger=Qh,d.isSet=M9,d.isString=mr,d.isSymbol=E1,d.isTypedArray=e3,d.isUndefined=t_,d.isWeakMap=n_,d.isWeakSet=r_,d.join=sf,d.kebabCase=U_,d.last=q1,d.lastIndexOf=of,d.lowerCase=q_,d.lowerFirst=K_,d.lt=e_,d.lte=i_,d.max=Yd,d.maxBy=Vd,d.mean=Fd,d.meanBy=Wd,d.min=Ud,d.minBy=qd,d.stubArray=O6,d.stubFalse=E6,d.stubObject=Od,d.stubString=Ed,d.stubTrue=Nd,d.multiply=Kd,d.nth=uf,d.noConflict=Sd,d.noop=L6,d.now=_r,d.pad=j_,d.padEnd=z_,d.padStart=Z_,d.parseInt=J_,d.random=$_,d.reduce=ch,d.reduceRight=fh,d.repeat=X_,d.replace=Q_,d.result=L_,d.round=jd,d.runInContext=D,d.sample=_h,d.size=ph,d.snakeCase=td,d.some=mh,d.sortedIndex=df,d.sortedIndexBy=gf,d.sortedIndexOf=pf,d.sortedLastIndex=mf,d.sortedLastIndexBy=vf,d.sortedLastIndexOf=yf,d.startCase=rd,d.startsWith=ed,d.subtract=zd,d.sum=Zd,d.sumBy=Jd,d.template=id,d.times=Rd,d.toFinite=Nt,d.toInteger=F0,d.toLength=C9,d.toLower=sd,d.toNumber=K1,d.toSafeInteger=s_,d.toString=a2,d.toUpper=od,d.trim=ud,d.trimEnd=ld,d.trimStart=ad,d.truncate=cd,d.unescape=fd,d.uniqueId=Bd,d.upperCase=hd,d.upperFirst=k6,d.each=_9,d.eachRight=d9,d.first=a9,A6(d,function(){var r={};return ft(d,function(i,u){_2.call(d.prototype,u)||(r[u]=i)}),r}(),{chain:!1}),d.VERSION=s,Y1(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){d[r].placeholder=d}),Y1(["drop","take"],function(r,i){X0.prototype[r]=function(u){u=u===e?1:K2(F0(u),0);var c=this.__filtered__&&!i?new X0(this):this.clone();return c.__filtered__?c.__takeCount__=o1(u,c.__takeCount__):c.__views__.push({size:o1(u,y2),type:r+(c.__dir__<0?"Right":"")}),c},X0.prototype[r+"Right"]=function(u){return this.reverse()[r](u).reverse()}}),Y1(["filter","map","takeWhile"],function(r,i){var u=i+1,c=u==i1||u==n2;X0.prototype[r]=function(_){var g=this.clone();return g.__iteratees__.push({iteratee:A0(_,3),type:u}),g.__filtered__=g.__filtered__||c,g}}),Y1(["head","last"],function(r,i){var u="take"+(i?"Right":"");X0.prototype[r]=function(){return this[u](1).value()[0]}}),Y1(["initial","tail"],function(r,i){var u="drop"+(i?"":"Right");X0.prototype[r]=function(){return this.__filtered__?new X0(this):this[u](1)}}),X0.prototype.compact=function(){return this.filter(k1)},X0.prototype.find=function(r){return this.filter(r).head()},X0.prototype.findLast=function(r){return this.reverse().find(r)},X0.prototype.invokeMap=K0(function(r,i){return typeof r=="function"?new X0(this):this.map(function(u){return I3(u,r,i)})}),X0.prototype.reject=function(r){return this.filter(gr(A0(r)))},X0.prototype.slice=function(r,i){r=F0(r);var u=this;return u.__filtered__&&(r>0||i<0)?new X0(u):(r<0?u=u.takeRight(-r):r&&(u=u.drop(r)),i!==e&&(i=F0(i),u=i<0?u.dropRight(-i):u.take(i-r)),u)},X0.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},X0.prototype.toArray=function(){return this.take(y2)},ft(X0.prototype,function(r,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),_=d[c?"take"+(i=="last"?"Right":""):i],g=c||/^find/.test(i);_&&(d.prototype[i]=function(){var w=this.__wrapped__,k=c?[1]:arguments,L=w instanceof X0,G=k[0],V=L||H0(w),j=function(Z0){var t2=_.apply(d,tn([Z0],k));return c&&f0?t2[0]:t2};V&&u&&typeof G=="function"&&G.length!=1&&(L=V=!1);var f0=this.__chain__,b0=!!this.__actions__.length,O0=g&&!f0,q0=L&&!b0;if(!g&&V){w=q0?w:new X0(this);var E0=r.apply(w,k);return E0.__actions__.push({func:fr,args:[j],thisArg:e}),new F1(E0,f0)}return O0&&q0?r.apply(this,k):(E0=this.thru(j),O0?c?E0.value()[0]:E0.value():E0)})}),Y1(["pop","push","shift","sort","splice","unshift"],function(r){var i=I4[r],u=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",c=/^(?:pop|shift)$/.test(r);d.prototype[r]=function(){var _=arguments;if(c&&!this.__chain__){var g=this.value();return i.apply(H0(g)?g:[],_)}return this[u](function(w){return i.apply(H0(w)?w:[],_)})}}),ft(X0.prototype,function(r,i){var u=d[i];if(u){var c=u.name+"";_2.call(Xn,c)||(Xn[c]=[]),Xn[c].push({name:i,func:u})}}),Xn[ir(e,i0).name]=[{name:"wrapper",func:e}],X0.prototype.clone=ca,X0.prototype.reverse=fa,X0.prototype.value=ha,d.prototype.at=Vf,d.prototype.chain=Ff,d.prototype.commit=Wf,d.prototype.next=Uf,d.prototype.plant=Kf,d.prototype.reverse=jf,d.prototype.toJSON=d.prototype.valueOf=d.prototype.value=zf,d.prototype.first=d.prototype.head,L3&&(d.prototype[L3]=qf),d},zn=Fl();wn?((wn.exports=zn)._=zn,D5._=zn):r1._=zn}).call(dS)}(Q3,Q3.exports)),Q3.exports}var pS=gS();const us=_S(pS),mS={style:{"padding-left":"20px",display:"flex","flex-direction":"column",gap:"20px",position:"relative","z-index":"1"}},vS={style:{position:"sticky",top:"0px",background:"#0a0a1a",padding:"4px",zIndex:1,display:"flex","flex-direction":"row",gap:"12px"}},yS={style:{display:"flex",gap:"20px","align-items":"center"}},TS=["value"],xS={style:{color:"greenyellow",fontSize:"18px"}},wS={style:{display:"flex","align-items":"center"}},SS={style:{display:"flex","align-items":"center"}},bS={key:0,style:{color:"#7dd3fc"}},MS=["value"],kS=["value"],CS={style:{color:"#7dd3fc"}},DS={style:{color:"#fcd34d"}},AS={style:{color:"#86efac"}},LS=["value"],OS={style:{color:"#f9a8d4"}},ES=["value"],NS=["value"],RS={style:{color:"#c4b5fd"}},PS=["value"],BS={style:{display:"flex",gap:"40px"}},IS={style:{width:"700px"}},HS={style:{width:"700px"}},GS={style:{display:"flex",gap:"40px"}},$S={style:{width:"700px",display:"flex","flex-direction":"column",gap:"12px"}},YS={style:{display:"flex"}},VS={style:{color:"cyan"}},FS=["onClick"],WS=["onClick"],US={key:0,style:{display:"flex",flexDirection:"column",gap:"12px"}},qS=["onClick"],KS={style:{width:"700px",display:"flex","flex-direction":"column",gap:"12px"}},jS={style:{display:"flex"}},zS={style:{color:"cyan"}},ZS=["onClick"],JS=["onClick"],XS={key:0,style:{display:"flex",flexDirection:"column",gap:"12px"}},QS=["onClick"],tb="lote_45",nb="lote_55",ls=40,as=46,rb=1,cs=6,eb=b4({__name:"HomeView",setup(t){const n=Y0(!0),e=Y0(!0);async function s(){if(!window.confirm("Xoá hết bộ nhớ đệm (gồm cả các bộ vé đã lưu để đối chiếu)?"))return;const Z=await cS();window.alert(Z?"Đã xoá hết bộ nhớ đệm":"Không xoá được bộ nhớ đệm")}function o(Z){return Z[0].loại_xổ_số===45?tb:nb}const l=Rw(),a=Pw(),f=e0(l[0].ngày_xổ_số,"DD/MM/YYYY"),h=e0(a[0].ngày_xổ_số,"DD/MM/YYYY"),p=l.length,y=f>h?55:45,x=y===45?0:-1,b=y===55?0:-1,C=Y0([]),q=Y0(7),W=Y0(1),r0=Y0(0),i0=Y0(!1),t0=Y0(1),u0=Y0(2);function a0(Z,v){const J=new Map;return Z.forEach(H=>{const U=v(H);J.set(U,(J.get(U)??0)+1)}),[...J.values()]}function h0(Z){const v=Number(t0.value),J=Number(u0.value);if(v===-1&&J===-1)return!0;const H=a0(Z,_0=>_0%cs),U=a0(Z,_0=>Math.floor(_0/cs));return v!==-1&&H.filter(_0=>_0>=2).length>=v||J!==-1&&Math.max(...U)<=J}const C0=Y0(0),S0=Y0(0),J0=Y0(3e3),V0=Y0("ngẫu_nhiên"),l2=Y0(12),w2=Y0(3),P2=Y0(0),L2=Y0(15),i1=Y0(""),y1=Y0([]),n2=Y0(""),I0=Y0([]),R0=Y0(""),s1=Y0([]),S2=Y0(1),y2=Y0(2),O2=Y0(0),T1=Y0(0),x1=Y0(4),X2=Y0(1),B2=Y0(10),I=Y0(),N=Y0();M(l,x),M(a,b);async function M(Z,v=0){const J=Z[0].loại_xổ_số===45?a:l;for(let H=0;H<Z.length;H++){const U=Z[H],_0=J==null?void 0:J[H+v];$(Z,U,_0,H)}}async function E(){const Z=`v${rb}|45:${ls}|55:${as}`;for(const[v,J]of[[l,a],[a,l]]){const H=v[0].loại_xổ_số,U=`${lS}${H}`,_0=fS(v,J,Z),O=await aS(U);if((O==null?void 0:O.dấu_vân_tay)===_0&&O.dự_đoán_ds_xuất_hiện.length===v.length&&O.vị_trí_ds_xuất_hiện.length===v.length){v.forEach((c0,T0)=>{c0.dự_đoán_ds_xuất_hiện=O.dự_đoán_ds_xuất_hiện[T0],c0.vị_trí_ds_xuất_hiện=O.vị_trí_ds_xuất_hiện[T0]}),console.log(`đã tải danh sách dự đoán ${H} từ bộ nhớ đệm`);continue}v.forEach((c0,T0)=>{Y(v,J,c0,T0)}),await Mr(U,{dấu_vân_tay:_0,dự_đoán_ds_xuất_hiện:v.map(c0=>c0.dự_đoán_ds_xuất_hiện),vị_trí_ds_xuất_hiện:v.map(c0=>c0.vị_trí_ds_xuất_hiện)}),console.log(`đã tạo và lưu danh sách dự đoán ${H} vào bộ nhớ đệm`)}}function $(Z,v,J,H){var U;v.kết_quả_xổ_số.forEach(_0=>{const O=Number(_0)+H,c0=Z[O];c0&&(v.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(c0.kết_quả_xổ_số),c0.kết_quả_xổ_số.forEach(T0=>{var m0,M0;v.tập_các_số_đã_xuất_hiện.add(T0);const w0=v.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(j0=>j0.số_xuất_hiện===T0);if(w0)w0.tổng_xuất_hiện++;else{const j0={số_xuất_hiện:T0,tổng_xuất_hiện:1,là_số_kết_quả:((m0=v.dữ_liệu_kỳ_sau_đó)==null?void 0:m0.kết_quả_xổ_số.includes(T0))||!1,là_số_jackpot_2:((M0=v.dữ_liệu_kỳ_sau_đó)==null?void 0:M0.số_jacpot_2)===T0,là_số_trùng:v.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(T0)};v.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(j0)}}))}),J&&J.kết_quả_xổ_số.filter(_0=>!v.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(_0)).forEach(_0=>{const O=Number(_0)+H,c0=Z[O];c0&&(v.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(c0.kết_quả_xổ_số),c0.kết_quả_xổ_số.forEach(T0=>{var m0,M0;v.tập_các_số_đã_xuất_hiện.add(T0);const w0=v.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(j0=>j0.số_xuất_hiện===T0);if(w0)w0.tổng_xuất_hiện++;else{const j0={số_xuất_hiện:T0,tổng_xuất_hiện:1,là_số_kết_quả:((m0=v.dữ_liệu_kỳ_sau_đó)==null?void 0:m0.kết_quả_xổ_số.includes(T0))||!1,là_số_jackpot_2:((M0=v.dữ_liệu_kỳ_sau_đó)==null?void 0:M0.số_jacpot_2)===T0,là_số_trùng:v.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(T0)};v.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(j0)}}))}),v.số_kết_quả_trong_các_số_đã_xuất_hiện=((U=v.dữ_liệu_kỳ_sau_đó)==null?void 0:U.kết_quả_xổ_số.filter(_0=>v.tập_các_số_đã_xuất_hiện.has(_0)).length)||0}E().then(()=>{p0(),m()});function p0(){C.value=Ow(p),I.value=l,N.value=a}function m(){console.log("danh sách dữ liệu 45 đã qua xữ lý: ",l),console.log("danh sách dữ liệu 55 đã qua xữ lý: ",a)}function T(Z,v){return _n("div",{style:{width:"220px",display:"flex",flexWrap:"wrap"}},Z.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.map((J,H)=>{var U;return _n("div",{key:`row-dữ_liệu_1${v}${H}`,style:{width:"34px"}},_n("span",{style:{opacity:J.tổng_xuất_hiện<=3?1:.3,border:e.value&&Z.kết_quả_xổ_số.includes(J.số_xuất_hiện)?"1px solid blue":null,color:(U=Z.dữ_liệu_kỳ_sau_đó)!=null&&U.kết_quả_xổ_số.includes(J.số_xuất_hiện)?"red":null}},`${J.số_xuất_hiện}:${J.tổng_xuất_hiện}`))}))}function A(Z,v){var U;const J=((U=v.dữ_liệu_kỳ_sau_đó)==null?void 0:U.kết_quả_xổ_số)||[],H=v.kết_quả_xổ_số||[];return _n("div",{style:{width:"220px",display:"flex",flexWrap:"wrap"}},Z.map((_0,O)=>_n("div",{key:`row-dự_đoán${O}`,style:{width:"34px"}},_n("span",{style:{color:J.includes(_0)?"red":null,border:H.includes(_0)?"1px solid blue":null}},`${_0}`))))}function Y(Z,v,J,H){var U;if(J.dự_đoán_ds_xuất_hiện=Bw(Z,v,J,H,J.loại_xổ_số===55?as:ls),H>0){const _0=((U=Z[H-1])==null?void 0:U.kết_quả_xổ_số)||[];J.dự_đoán_ds_xuất_hiện.forEach(O=>{const c0=[],T0=[];_0.forEach(w0=>{{const m0=O.indexOf(w0);m0>=0?c0.push(m0):T0.push(w0)}}),T0.forEach(w0=>{for(let m0=0;m0<J.dự_đoán_ds_xuất_hiện.length;m0++){const M0=J.dự_đoán_ds_xuất_hiện[m0].indexOf(w0);if(M0>=0&&!c0.includes(M0)){c0.push(M0);break}}}),c0.length===6&&J.vị_trí_ds_xuất_hiện.push(c0)})}}function R(Z,v,J=-1){var r2;console.group("Dự Đoán"),console.log(J===-1?"dự đoán cho tất cả":`dự đoán cho vị trí ${J}`);const H=((r2=v.dữ_liệu_kỳ_sau_đó)==null?void 0:r2.kết_quả_xổ_số)||[],U=v.dự_đoán_ds_xuất_hiện,_0=[];for(let d2=v.vị_trí_dữ_liệu+1;d2<Z.length;d2++){const Q2=Z[d2];_0.push(...Q2.vị_trí_ds_xuất_hiện.filter(h0))}console.log("tất cả vị trí dự đoán: ",_0.length),console.log(`bộ lọc: số trùng trong cột = ${t0.value}, số cùng hàng = ${u0.value} (-1 là không lọc)`);let O=0,c0=0,T0=0,w0=0,m0=0,M0=0;for(let d2=0;d2<U.length;d2++)if(J===d2||J===-1){const Q2=U[d2];for(let t1=0;t1<_0.length;t1++){const ct=[];_0[t1].forEach(w1=>{ct.push(Q2[w1])});const n1=ct.filter(w1=>H.includes(w1)).length;M0++,n1===3&&O++,n1===4&&c0++,n1===5&&(ct.includes(v.số_jacpot_2)?(console.log("trúng jackpot 2 tại: ",`ds ${d2} vị trí ${t1}`),w0++):(console.log("trúng 5 tại: ",`ds ${d2} vị trí ${t1}`),T0++)),n1===6&&(console.log("trúng jackpot 1 tại: ",`ds ${d2} vị trí ${t1}`),m0++)}}const j0=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.log(H.join(", ")),console.log(`tiền: ${j0.format(M0*1e4)}, tổng: ${M0}, tong_3: ${O}, tong_4: ${c0}, tong_5: ${T0}, jackpot_2: ${w0}, jackpot_1: ${m0}`),console.groupEnd()}async function F(Z){var m0;const v=[],J=[],H=new Map,U=[0];Z.forEach(M0=>U.push(U[U.length-1]+M0.vị_trí_ds_xuất_hiện.length));const _0=[],O=(M0,j0,r2,d2,Q2)=>{var L4;const{kỳ:t1,thứ_tự:ct}=_0[Q2],_1=U[t1]-U[r2+1]+ct,n1=[...j0].sort((Wn,w5)=>Wn-w5),w1=`${M0}|${n1.join(",")}`,Q1=H.get(w1);if(Q1)Q1.tổng_xuất_hiện+=1,Q1.xuất_hiện.push(r2),Q1.danh_sách.push(d2),(L4=Q1.vị_trí)==null||L4.push(_1);else{const Wn={ds_vị_trí:n1,tổng_xuất_hiện:1,trùng:M0,xuất_hiện:[r2],danh_sách:[d2],vị_trí:[_1]};v.push(Wn),H.set(w1,Wn)}};for(let M0=Z.length-1;M0>=0;M0--){const j0=Z[M0],r2=((m0=j0.dữ_liệu_kỳ_sau_đó)==null?void 0:m0.kết_quả_xổ_số)||[],d2=j0.dự_đoán_ds_xuất_hiện;for(let Q2=0;Q2<d2.length;Q2++){const t1=d2[Q2],ct=new Uint8Array(t1.length);t1.forEach((_1,n1)=>{r2.includes(_1)&&(ct[n1]=1)});for(let _1=0;_1<J.length;_1++){const n1=J[_1];let w1=0;for(let Q1=0;Q1<n1.length;Q1++)w1+=ct[n1[Q1]]|0;w1===5&&O(j0.loại_xổ_số===55&&n1.includes(Number(j0.số_jacpot_2))?5.5:5,n1,M0,Q2,_1),w1===6&&O(6,n1,M0,Q2,_1)}}J.push(...j0.vị_trí_ds_xuất_hiện),j0.vị_trí_ds_xuất_hiện.forEach((Q2,t1)=>_0.push({kỳ:M0,thứ_tự:t1}))}const c0=o(Z);await u3.khởi_tạo();const T0=await u3.lấy_dữ_liệu_theo_tên(c0);T0.length>0?await u3.cập_nhật_dữ_liệu(T0[0].id,v):await u3.lưu_dữ_liệu(c0,v);const w0=us.orderBy(v,[M0=>Math.min(...M0.xuất_hiện),M0=>M0.trùng],["asc","desc"]).map(M0=>({ds_vị_trí:M0.ds_vị_trí,tổng_xuất_hiện:M0.tổng_xuất_hiện,trùng:M0.trùng,xuất_hiện:M0.xuất_hiện.join(", "),danh_sách:M0.danh_sách.join(", "),vị_trí:(M0.vị_trí??[]).join(", ")}));console.log("kết quả thống kê dự đoán: ",w0)}async function s0(Z){var w0;await u3.khởi_tạo();const J=((w0=(await u3.lấy_dữ_liệu_theo_tên(o(Z)))[0])==null?void 0:w0.dữ_liệu)||[],H=[];J.forEach(m0=>{var j0;const M0=H.find(r2=>r2.ds_vị_trí.sort().toString()===m0.ds_vị_trí.sort().toString());M0?(M0.tổng_xuất_hiện+=m0.tổng_xuất_hiện,M0.xuất_hiện.push(...m0.xuất_hiện),M0.danh_sách.push(...m0.danh_sách),(j0=M0.vị_trí)==null||j0.push(...m0.vị_trí??[])):H.push({ds_vị_trí:m0.ds_vị_trí,tổng_xuất_hiện:m0.tổng_xuất_hiện,trùng:m0.trùng,xuất_hiện:[...m0.xuất_hiện],danh_sách:[...m0.danh_sách],vị_trí:[...m0.vị_trí??[]]})});const U=us.orderBy(H,[m0=>Math.min(...m0.xuất_hiện),m0=>m0.trùng],["asc","desc"]).map(m0=>({ds_vị_trí:m0.ds_vị_trí.sort().join(", "),tổng_xuất_hiện:m0.tổng_xuất_hiện,trùng:m0.trùng,xuất_hiện:m0.xuất_hiện.join(", "),danh_sách:m0.danh_sách.join(", "),vị_trí:(m0.vị_trí??[]).join(", ")}));console.group("Phân tích và dự đoán"),console.log("tổng danh sách: ",J.length),console.log("sau khi nhóm: ",H.length),console.log("sau khi nhóm: ",U),console.groupEnd();const _0=Z[Number(S2.value)],c0=_0.dự_đoán_ds_xuất_hiện[Number(y2.value)]||[];let T0=0;if(Number(S2.value)===0){console.group("dự đoán");const m0=[];H.forEach(M0=>{if(M0.danh_sách.includes(Number(O2.value))){const j0=[];M0.ds_vị_trí.forEach(r2=>{j0.push(c0[r2])}),m0.push(j0)}}),console.log(m0),console.groupEnd()}else console.group("phân tích"),H.forEach((m0,M0)=>{if(Number(M0)>Number(S2.value)){const j0=[];m0.ds_vị_trí.forEach(d2=>{j0.push(c0[d2])});const r2=j0.filter(d2=>_0.kết_quả_xổ_số.includes(d2)).length;r2===3&&console.log("trúng 3 tại: ",`${Number(S2.value)} vị trí ${M0}`),r2===4&&console.log("trúng 4 tại: ",`${Number(S2.value)} vị trí ${M0}`),r2===5&&(j0.includes(_0.số_jacpot_2)?console.log("trúng jackpot 2 tại: ",`${S2.value} vị trí ${M0}`):console.log("trúng 5 tại: ",`${S2.value} vị trí ${M0}`)),r2===6&&console.log("trúng jackpot 1 tại: ",`${S2.value} vị trí ${M0}`),T0++}}),console.log("tổng số dự đoán :",T0),console.groupEnd()}function X(Z){var v;return((v=Z.dữ_liệu_kỳ_sau_đó)==null?void 0:v.ngày_xổ_số)??d0(Z)}function z(Z,v){const J=rs(Z,v),H=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.group(`Đánh giá ${Z.length} vé với kết quả kỳ sau (${v.ngày_xổ_số})`),console.log(`kết quả: ${v.kết_quả_xổ_số.join(" ")}${v.số_jacpot_2?` | số phụ: ${v.số_jacpot_2}`:""}`),console.table(J.dòng_theo_mức),console.log(`chi phí (đã gồm phí 3%): ${H.format(J.chi_phí)}, tiền thắng (đã trừ thuế): ${H.format(J.tiền_thắng)}, lãi/lỗ: ${H.format(J.lãi_lỗ)}`),J.vé_trúng_từ_4.length>0&&console.log(`vé trúng từ 4 số:
`+J.vé_trúng_từ_4.map(U=>`${U.vé.join(" ")} → ${U.số_trúng} số (${U.mức})`).join(`
`)),console.groupEnd()}function K(Z){const v=Number(C0.value),J=Z[v];if(!J){console.warn(`Không có kỳ ở vị trí ${v} (có ${Z.length} kỳ, từ 0)`);return}const H=Number(S0.value),U=J.dự_đoán_ds_xuất_hiện[H];if(!U){console.warn(`Không có danh sách số ${H}: kỳ ở vị trí ${v} của ${J.loại_xổ_số} có ${J.dự_đoán_ds_xuất_hiện.length} danh sách (chỉ số từ 0)`);return}const _0=Number(J0.value),O=sS(U.length,_0),c0=oS(U,O),T0=X(J);Mr(`${is}${J.loại_xổ_số}|${T0}|${H}|${c0.length}`,{loại_xổ_số:J.loại_xổ_số,ngày_cơ_sở:J.ngày_xổ_số,ngày_dự_đoán:T0,thời_điểm_tạo:Date.now(),chỉ_số_danh_sách:H,vé:c0}).then(()=>U0("danh sách",T0));const w0=J.dữ_liệu_kỳ_sau_đó;console.group(`Vé từ danh sách ${H} của kỳ ${v} (${J.ngày_xổ_số}) ${J.loại_xổ_số} (${U.length} số), dự đoán cho kỳ ${T0}${w0?" (đã có kết quả)":""}, đã lưu để đối chiếu`),console.log(`${c0.length}/${_0} vé, mỗi vé có ít nhất 1 cột từ 2 số, mỗi hàng tối đa 3 số`),c0.length<_0&&console.warn("Không tạo đủ số vé với điều kiện này"),w0?z(c0,w0):console.log("kỳ mới nhất, chưa có kết quả kỳ sau để đánh giá"),console.log(c0.map(m0=>m0.join(" ")).join(`
`)),console.groupEnd()}function k0(Z){const v=Z[0].loại_xổ_số,J=qi[V0.value];if(!J){console.warn("Chọn một chiến lược cụ thể để tạo vé");return}const H=J6[v],U=Z[0],_0=Fw(v,H,J(Z,v),_8(ji(`${v}|${U.ngày_xổ_số}|${V0.value}`))),O=_0.map(w0=>w0.map(m0=>String(m0).padStart(2,"0"))),c0=X(U);Mr(`${ss}${v}|${c0}|${V0.value}|${_0.length}`,{loại_xổ_số:v,ngày_cơ_sở:U.ngày_xổ_số,ngày_dự_đoán:c0,thời_điểm_tạo:Date.now(),chiến_lược:V0.value,vé:O}).then(()=>U0("vé mục tiêu",c0));const T0=$w(Z,v);console.group(`Vé kỳ tới ${v} (${V0.value}), dự đoán cho kỳ ${c0}, đã lưu để đối chiếu`),console.log(`số vừa ra (kỳ mới nhất ${Z[0].ngày_xổ_số}): ${T0.vừa_ra.join(" ")}`),console.log(`số nóng (nhiều nhất trong 50 kỳ gần nhất): ${T0.nóng.map(w0=>`${w0.số} (${w0.lần} lần)`).join(", ")}`),console.log(`số lạnh (ít nhất trong 50 kỳ gần nhất): ${T0.lạnh.map(w0=>`${w0.số} (${w0.lần} lần)`).join(", ")}`),console.log(`số lâu chưa ra (số kỳ kể từ lần ra gần nhất): ${T0.lâu_chưa_ra.map(w0=>`${w0.số} (${w0.số_kỳ} kỳ)`).join(", ")}`),console.log(`${_0.length}/${H} vé, xác suất có vé trúng từ 5 số: ${(_0.length*Uw(v).từ_5*100).toFixed(3)}%`),console.log(O.map(w0=>w0.join(" ")).join(`
`)),console.groupEnd()}function d0(Z){return e0(Cu(Z.dấu_thời_gian_của_ngày,Z.loại_xổ_số===55?55:45)).format("DD/MM/YYYY")}async function x0(){const[Z,v,J]=await Promise.all([te(es),te(is),te(ss)]);return[...Z.map(({giá_trị:H})=>({loại_nguồn:"vé phủ",nguồn:"vé phủ",loại_xổ_số:H.loại_xổ_số,ngày_cơ_sở:H.ngày_cơ_sở,ngày_dự_đoán:H.ngày_dự_đoán,thời_điểm_tạo:H.thời_điểm_tạo,vé:H.vé.map(U=>U.map(_0=>String(_0).padStart(2,"0")))})),...v.map(({giá_trị:H})=>({loại_nguồn:"danh sách",nguồn:`danh sách ${H.chỉ_số_danh_sách}`,loại_xổ_số:H.loại_xổ_số,ngày_cơ_sở:H.ngày_cơ_sở,ngày_dự_đoán:H.ngày_dự_đoán,thời_điểm_tạo:H.thời_điểm_tạo,vé:H.vé})),...J.map(({giá_trị:H})=>({loại_nguồn:"vé mục tiêu",nguồn:`mục tiêu ${H.chiến_lược}`,loại_xổ_số:H.loại_xổ_số,ngày_cơ_sở:H.ngày_cơ_sở,ngày_dự_đoán:H.ngày_dự_đoán,thời_điểm_tạo:H.thời_điểm_tạo,vé:H.vé}))].sort((H,U)=>U.thời_điểm_tạo-H.thời_điểm_tạo)}const L0={"vé phủ":i1,"danh sách":n2,"vé mục tiêu":R0},$0={"vé phủ":y1,"danh sách":I0,"vé mục tiêu":s1};async function U0(Z,v){const J=[...new Set((await x0()).filter(U=>U.loại_nguồn===Z).map(U=>U.ngày_dự_đoán))].sort((U,_0)=>e0(_0,"DD/MM/YYYY").valueOf()-e0(U,"DD/MM/YYYY").valueOf());$0[Z].value=J;const H=L0[Z];v&&J.includes(v)?H.value=v:J.includes(H.value)||(H.value=J[0]??"")}U0("vé phủ"),U0("danh sách"),U0("vé mục tiêu");async function z0(Z){const v={"vé phủ":"bộ vé phủ","danh sách":"vé từ danh sách xuất hiện","vé mục tiêu":"vé mục tiêu"}[Z],J=(await x0()).filter(c0=>c0.loại_nguồn===Z);if(J.length===0){console.log(`Chưa có ${v} nào được lưu`);return}const H=L0[Z].value,U=H?J.filter(c0=>c0.ngày_dự_đoán===H):J;if(U.length===0){console.log(`Không có ${v} nào cho ngày dự đoán ${H}`);return}const _0=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}),O=U.map(c0=>{const T0=c0.loại_xổ_số===55?a:l,w0=T0.findIndex(d2=>d2.ngày_xổ_số===c0.ngày_cơ_sở),m0=w0>0?T0[w0-1]:void 0,M0={nguồn:c0.nguồn,loại:c0.loại_xổ_số,ngày_lưu:e0(c0.thời_điểm_tạo).format("DD/MM/YYYY HH:mm"),ngày_dự_đoán:c0.ngày_dự_đoán,số_vé:c0.vé.length};if(!m0)return{...M0,kết_quả:"chưa có kết quả"};const j0=rs(c0.vé,m0),r2=d2=>{var Q2;return((Q2=j0.dòng_theo_mức.find(t1=>t1.mức_trúng===d2))==null?void 0:Q2.số_vé)??0};return{...M0,kết_quả:`${m0.ngày_xổ_số}: ${m0.kết_quả_xổ_số.join(" ")}`,trúng_3:r2("trúng_3"),trúng_4:r2("trúng_4"),trúng_5:r2("trúng_5")+r2("jackpot_2"),trúng_6:r2("jackpot_1"),lãi_lỗ:_0.format(j0.lãi_lỗ)}});console.group(`Đối chiếu ${v} đã lưu (${H||"tất cả ngày dự đoán"})`),console.table(O),console.groupEnd()}function U2(Z){try{const v=Z===55?a:l,J=Number(P2.value),H=v[J];if(!H){console.warn(`Không có kỳ ở vị trí ${J} (có ${v.length} kỳ, từ 0)`);return}const U=zw(Z,Number(l2.value),Number(w2.value),Number(L2.value),void 0,ji(`${Z}|${H.ngày_xổ_số}`)),_0=X(H),O=H.dữ_liệu_kỳ_sau_đó,c0=`${es}${Z}|${_0}|${U.nhóm_số.length}|${U.mức_đảm_bảo}|${U.vé.length}`;Mr(c0,{loại_xổ_số:Z,ngày_cơ_sở:H.ngày_xổ_số,ngày_dự_đoán:_0,thời_điểm_tạo:Date.now(),nhóm_số:U.nhóm_số,mức_đảm_bảo:U.mức_đảm_bảo,số_vé_tối_thiểu:U.số_vé_tối_thiểu,vé:U.vé}).then(()=>U0("vé phủ",_0));const T0=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"});console.group(`Bộ vé phủ ${Z} của kỳ ${J} (${H.ngày_xổ_số}), dự đoán cho kỳ ${_0}${O?" (đã có kết quả)":""}, đã lưu để đối chiếu`),console.log("nhóm số: ",U.nhóm_số.join(", ")),Number(L2.value)<U.số_vé_tối_thiểu?console.warn(`cần tối thiểu ${U.số_vé_tối_thiểu} vé để đảm bảo, nên đã dùng ${U.số_vé_tối_thiểu} vé thay vì ${Number(L2.value)}`):U.vé.length>U.số_vé_tối_thiểu&&console.log(`${U.số_vé_tối_thiểu} vé đầu bảo đảm mức trúng, ${U.vé.length-U.số_vé_tối_thiểu} vé thêm giúp tăng cơ hội trúng mức cao hơn`),console.log(`số vé: ${U.vé.length}, chi phí: ${T0.format(U.chi_phí)}, đảm bảo trúng ít nhất ${U.mức_đảm_bảo} số khi có từ ${U.mức_đảm_bảo} số trúng nằm trong nhóm (xác suất ${(U.xác_suất_đạt_đảm_bảo*100).toFixed(2)}%)`),console.log(`điểm phổ biến trung bình: ${U.điểm_phổ_biến_trung_bình} (vé ngẫu nhiên: ${U.điểm_phổ_biến_vé_ngẫu_nhiên}, càng thấp càng ít người trùng)`),O?z(U.vé.map(w0=>w0.map(m0=>String(m0).padStart(2,"0"))),O):console.log("kỳ mới nhất, chưa có kết quả kỳ sau để đánh giá"),console.log(U.vé.map(w0=>w0.join(" ")).join(`
`)),console.groupEnd()}catch(v){console.warn(v.message)}}function H2(){const Z=Number(T1.value),v=Number(x1.value),J=Number(X2.value),H=Number(B2.value);let U=0;console.group("Số xuất hiện nhiều lần");for(let _0=J;_0<3e3;_0++){const O=new Set;a.slice(_0,_0+H).forEach(T0=>{T0.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.forEach(w0=>{w0.tổng_xuất_hiện>=v&&O.size<6&&O.add(w0.số_xuất_hiện)})});const c0=a[Z].kết_quả_xổ_số.filter(T0=>O.has(T0)).length;O.size>=6&&(U++,c0>=3&&(console.log([...O.values()].join(", ")),console.log(`tổng số trùng với kết quả xổ số tại vị trí ${Z}: ${c0}`)))}console.log("tổng số dự đoán: ",U),console.groupEnd()}function z2(Z){const v=Number(W.value),J=Number(r0.value),H=Z===55?a:l,U=new Set,_0=new Set;if(J<0)for(let O=J+1;O<J+11;O++){const c0=H[O],T0=c0.kết_quả_xổ_số.map(w0=>{let m0=(Number(w0)+v)%Z;return m0=m0===0?Z:m0,_0.add(m0),m0});console.log(`dự đoán kỳ ${c0.ngày_xổ_số}: ${T0.join(", ")}`)}else{const c0=H[J].kết_quả_xổ_số;for(let T0=J+1;T0<H.length;T0++){const w0=H[T0],m0=w0.kết_quả_xổ_số.map(j0=>{let r2=(Number(j0)+v)%Z;return r2=r2===0?Z:r2,_0.add(r2),r2}),M0=c0.filter(j0=>{const r2=m0.includes(Number(j0));return r2&&U.add(Number(j0)),r2}).length;console.log(`dự đoán kỳ ${w0.ngày_xổ_số}: ${m0.join(", ")} → trùng ${M0} số`)}console.log("các số được dự đoán:",[...U.values()].join(", ")),console.log("các số được dự đoán:",[..._0.values()].join(", "),_0.size)}}return(Z,v)=>{var J,H,U,_0;return o0(),g0("div",mS,[S("div",vS,[S("div",null,[S("div",yS,[S("div",null,[i2(S("select",{"onUpdate:modelValue":v[0]||(v[0]=O=>q.value=O)},[(o0(!0),g0(P0,null,N2(C.value,O=>(o0(),g0("option",{key:O,value:O},Q(O),9,TS))),128))],512),[[cn,q.value]])])]),S("div",null,[v[42]||(v[42]=l0(" Hôm nay dự đoán cho: ")),S("span",xS,Q(m2(y)),1)]),S("div",null,[S("div",wS,[v[43]||(v[43]=S("div",{style:{background:"red",width:"10px",height:"10px"}},null,-1)),v[44]||(v[44]=l0(" Kết quả dự đoán ")),i2(S("input",{"onUpdate:modelValue":v[1]||(v[1]=O=>n.value=O),type:"checkbox"},null,512),[[F6,n.value]])]),S("div",SS,[v[45]||(v[45]=S("div",{style:{background:"blue",width:"10px",height:"10px"}},null,-1)),v[46]||(v[46]=l0(" Kết quả hiện tại ")),i2(S("input",{"onUpdate:modelValue":v[2]||(v[2]=O=>e.value=O),type:"checkbox"},null,512),[[F6,e.value]])])]),S("div",null,[S("button",{onClick:v[3]||(v[3]=O=>z2(55))},"Dự đoán bằng tăng 55"),S("button",{onClick:v[4]||(v[4]=O=>z2(45))},"Dự đoán bằng tăng 45"),v[47]||(v[47]=l0(" dự đoán cho: ")),i2(S("input",{"onUpdate:modelValue":v[5]||(v[5]=O=>r0.value=O),type:"text",style:{width:"20px"}},null,512),[[V2,r0.value]]),v[48]||(v[48]=l0(" đơn vị: ")),i2(S("input",{"onUpdate:modelValue":v[6]||(v[6]=O=>W.value=O),type:"text",style:{width:"20px"}},null,512),[[V2,W.value]])]),S("div",null,[v[49]||(v[49]=l0("Hiển thị chi tiết: ")),i2(S("input",{"onUpdate:modelValue":v[7]||(v[7]=O=>i0.value=O),type:"checkbox"},null,512),[[F6,i0.value]])]),i0.value?(o0(),g0("div",bS,[v[54]||(v[54]=l0(" *1* Cho: Xem dự đoán ")),S("div",null,[v[50]||(v[50]=l0(" - Lọc ít nhất ")),i2(S("select",{"onUpdate:modelValue":v[8]||(v[8]=O=>t0.value=O)},[(o0(),g0(P0,null,N2([-1,1,2,3],O=>S("option",{key:O,value:O},Q(O),9,MS)),64))],512),[[cn,t0.value]]),v[51]||(v[51]=l0(" cột có từ 2 số trở lên "))]),S("div",null,[v[52]||(v[52]=l0(" - Lọc mỗi hàng tối đa ")),i2(S("select",{"onUpdate:modelValue":v[9]||(v[9]=O=>u0.value=O)},[(o0(),g0(P0,null,N2([-1,2,3,4],O=>S("option",{key:O,value:O},Q(O),9,kS)),64))],512),[[cn,u0.value]]),v[53]||(v[53]=l0(" số (điều kiện or, -1 là không lọc) *1* "))])])):Bn("",!0)]),S("div",null,[S("div",null,[S("div",null,[S("button",{onClick:s},"Xoá hết bộ nhớ đệm")]),S("div",CS,[S("div",null,[v[55]||(v[55]=l0(" *1* ")),S("button",{onClick:v[10]||(v[10]=O=>F(m2(a)))},"thống kê dự đoán 55"),S("button",{onClick:v[11]||(v[11]=O=>F(m2(l)))},"thống kê dự đoán 45"),v[56]||(v[56]=l0(" để lưu vào indexed DB "))]),S("div",null,[v[59]||(v[59]=l0(" từ Indexed DB")),S("button",{onClick:v[12]||(v[12]=O=>s0(m2(a)))}," phân tích và dự đoán 55"),S("button",{onClick:v[13]||(v[13]=O=>s0(m2(l)))}," phân tích và dự đoán 45 "),v[60]||(v[60]=l0(" chỉ mục ")),i2(S("input",{type:"text","onUpdate:modelValue":v[14]||(v[14]=O=>S2.value=O),placeholder:"Nhập vị trí phân tích",style:{width:"20px"}},null,512),[[V2,S2.value]]),v[61]||(v[61]=l0(" danh sách dự đoán ")),i2(S("input",{type:"text","onUpdate:modelValue":v[15]||(v[15]=O=>y2.value=O),placeholder:"Nhập vị trí dự đoán",style:{width:"20px"}},null,512),[[V2,y2.value]]),S("div",null,[v[57]||(v[57]=l0(" lọc nhóm từng trúng ở danh sách số ")),i2(S("input",{type:"text","onUpdate:modelValue":v[16]||(v[16]=O=>O2.value=O),style:{width:"20px"}},null,512),[[V2,O2.value]]),v[58]||(v[58]=l0(" (khi chọn chỉ mục = 0) *1* "))])])])]),S("div",DS,[v[62]||(v[62]=l0(" *2* Số Xuất hiện nhiều lần: vị trí dự đoán: ")),i2(S("input",{"onUpdate:modelValue":v[17]||(v[17]=O=>T1.value=O),type:"text",style:{width:"20px"}},null,512),[[V2,T1.value]]),v[63]||(v[63]=l0(" bao nhiêu lần: ")),i2(S("input",{"onUpdate:modelValue":v[18]||(v[18]=O=>x1.value=O),type:"text",style:{width:"20px"}},null,512),[[V2,x1.value]]),v[64]||(v[64]=l0(" từ vị trí: ")),i2(S("input",{"onUpdate:modelValue":v[19]||(v[19]=O=>X2.value=O),type:"text",style:{width:"20px"}},null,512),[[V2,X2.value]]),v[65]||(v[65]=l0(" xem bao nhiêu: ")),i2(S("input",{"onUpdate:modelValue":v[20]||(v[20]=O=>B2.value=O),type:"text",style:{width:"20px"}},null,512),[[V2,B2.value]]),S("button",{onClick:v[21]||(v[21]=O=>H2())},"Lọc"),v[66]||(v[66]=l0(" *2* "))]),S("div",AS,[v[68]||(v[68]=l0(" *3* Bộ vé phủ: kỳ ")),i2(S("input",{"onUpdate:modelValue":v[22]||(v[22]=O=>P2.value=O),type:"text",style:{width:"30px"}},null,512),[[V2,P2.value]]),v[69]||(v[69]=l0(" nhóm ")),i2(S("input",{"onUpdate:modelValue":v[23]||(v[23]=O=>l2.value=O),type:"text",style:{width:"20px"}},null,512),[[V2,l2.value]]),v[70]||(v[70]=l0(" số, đảm bảo trúng ")),i2(S("input",{"onUpdate:modelValue":v[24]||(v[24]=O=>w2.value=O),type:"text",style:{width:"20px"}},null,512),[[V2,w2.value]]),v[71]||(v[71]=l0(" số, số vé ")),i2(S("input",{"onUpdate:modelValue":v[25]||(v[25]=O=>L2.value=O),type:"text",style:{width:"30px"}},null,512),[[V2,L2.value]]),S("button",{onClick:v[26]||(v[26]=O=>U2(55))},"tạo vé 55"),S("button",{onClick:v[27]||(v[27]=O=>U2(45))},"tạo vé 45"),v[72]||(v[72]=l0(" ngày dự đoán ")),i2(S("select",{"onUpdate:modelValue":v[28]||(v[28]=O=>i1.value=O)},[v[67]||(v[67]=S("option",{value:""},"tất cả",-1)),(o0(!0),g0(P0,null,N2(y1.value,O=>(o0(),g0("option",{key:O,value:O},Q(O),9,LS))),128))],512),[[cn,i1.value]]),S("button",{onClick:v[29]||(v[29]=O=>z0("vé phủ"))},"đối chiếu vé đã lưu"),v[73]||(v[73]=l0(" *3* "))]),S("div",OS,[l0(" *4* Vé mục tiêu (55: "+Q(m2(J6)[55])+", 45: "+Q(m2(J6)[45])+") chiến lược ",1),i2(S("select",{"onUpdate:modelValue":v[30]||(v[30]=O=>V0.value=O)},[(o0(!0),g0(P0,null,N2(Object.keys(m2(qi)),O=>(o0(),g0("option",{key:O,value:O},Q(O),9,ES))),128))],512),[[cn,V0.value]]),S("button",{onClick:v[31]||(v[31]=O=>k0(m2(a)))},"vé kỳ tới 55"),S("button",{onClick:v[32]||(v[32]=O=>k0(m2(l)))},"vé kỳ tới 45"),v[75]||(v[75]=l0(" ngày đối chiếu ")),i2(S("select",{"onUpdate:modelValue":v[33]||(v[33]=O=>R0.value=O)},[v[74]||(v[74]=S("option",{value:""},"tất cả",-1)),(o0(!0),g0(P0,null,N2(s1.value,O=>(o0(),g0("option",{key:O,value:O},Q(O),9,NS))),128))],512),[[cn,R0.value]]),S("button",{onClick:v[34]||(v[34]=O=>z0("vé mục tiêu"))},"đối chiếu vé đã lưu"),v[76]||(v[76]=l0(" *4* "))]),S("div",RS,[v[78]||(v[78]=l0(" *5* Vé từ danh sách xuất hiện (công thức cố định, ít nhất 1 cột 2 số, mỗi hàng tối đa 3 số): kỳ ")),i2(S("input",{"onUpdate:modelValue":v[35]||(v[35]=O=>C0.value=O),type:"text",style:{width:"30px"}},null,512),[[V2,C0.value]]),v[79]||(v[79]=l0(" danh sách ")),i2(S("input",{"onUpdate:modelValue":v[36]||(v[36]=O=>S0.value=O),type:"text",style:{width:"20px"}},null,512),[[V2,S0.value]]),v[80]||(v[80]=l0(" số vé ")),i2(S("input",{"onUpdate:modelValue":v[37]||(v[37]=O=>J0.value=O),type:"text",style:{width:"40px"}},null,512),[[V2,J0.value]]),S("button",{onClick:v[38]||(v[38]=O=>K(m2(a)))},"tạo 55"),S("button",{onClick:v[39]||(v[39]=O=>K(m2(l)))},"tạo 45"),v[81]||(v[81]=l0(" ngày đối chiếu ")),i2(S("select",{"onUpdate:modelValue":v[40]||(v[40]=O=>n2.value=O)},[v[77]||(v[77]=S("option",{value:""},"tất cả",-1)),(o0(!0),g0(P0,null,N2(I0.value,O=>(o0(),g0("option",{key:O,value:O},Q(O),9,PS))),128))],512),[[cn,n2.value]]),S("button",{onClick:v[41]||(v[41]=O=>z0("danh sách"))},"đối chiếu vé đã lưu"),v[82]||(v[82]=l0(" *5* "))])])]),S("div",BS,[S("div",IS," Tổng số dữ liệu 55: "+Q((J=N.value)==null?void 0:J.length),1),S("div",HS," Tổng số dữ liệu 45: "+Q((H=I.value)==null?void 0:H.length),1)]),S("div",GS,[S("div",$S,[(o0(!0),g0(P0,null,N2((U=N.value)==null?void 0:U.slice(0,q.value),(O,c0)=>(o0(),g0("div",{key:`danh_sách_dữ_liệu-${c0}`,style:{height:"auto"}},[S("div",YS,[S("div",null,Q(O.ngày_xổ_số)+"::"+Q(O.tuần_xổ_số)+"::"+Q(c0)+"::",1),S("div",VS,Q(O.kết_quả_xổ_số),1)]),i0.value?(o0(),g0(P0,{key:0},[S("div",null,"Số kết quả có: "+Q(O.số_kết_quả_trong_các_số_đã_xuất_hiện),1),S("div",null,"Số lượng xuất hiện: "+Q(O.tập_các_số_đã_xuất_hiện.size),1),v[83]||(v[83]=S("div",null,"Danh sách xuất hiện:",-1)),(o0(),f3(wr(()=>T(O,c0)))),S("div",null,"tổng danh sách: "+Q(O.dự_đoán_ds_xuất_hiện.length),1),S("div",null,[S("button",{onClick:T0=>R(m2(a),O)}," xem dự đoán ",8,FS),S("button",{onClick:T0=>O.hiển_thị_dự_đoán_ds_xuất_hiện=!O.hiển_thị_dự_đoán_ds_xuất_hiện}," xem danh sách ",8,WS)]),O.dự_đoán_ds_xuất_hiện.length>0&&O.hiển_thị_dự_đoán_ds_xuất_hiện?(o0(),g0("div",US,[(o0(!0),g0(P0,null,N2(O.dự_đoán_ds_xuất_hiện,(T0,w0)=>(o0(),g0("div",{key:`${w0}ds`},[S("div",null,[l0(Q(w0),1),(o0(),f3(wr(()=>A(T0,O))))]),S("button",{onClick:m0=>R(m2(a),O,w0)}," xem dự đoán ",8,qS)]))),128))])):Bn("",!0)],64)):Bn("",!0)]))),128))]),S("div",KS,[(o0(!0),g0(P0,null,N2((_0=I.value)==null?void 0:_0.slice(0,q.value),(O,c0)=>(o0(),g0("div",{key:`danh_sách_dữ_liệu-${c0}`,style:{height:"auto"}},[S("div",jS,[S("div",null,Q(O.ngày_xổ_số)+"::"+Q(O.tuần_xổ_số)+"::"+Q(c0)+"::",1),S("div",zS,Q(O.kết_quả_xổ_số),1)]),i0.value?(o0(),g0(P0,{key:0},[S("div",null,"Số kết quả có: "+Q(O.số_kết_quả_trong_các_số_đã_xuất_hiện),1),S("div",null,"Số lượng xuất hiện: "+Q(O.tập_các_số_đã_xuất_hiện.size),1),v[84]||(v[84]=S("div",null,"Danh sách xuất hiện:",-1)),(o0(),f3(wr(()=>T(O,c0)))),S("div",null,"tổng danh sách: "+Q(O.dự_đoán_ds_xuất_hiện.length),1),S("div",null,[S("button",{onClick:T0=>R(m2(l),O)}," xem dự đoán ",8,ZS),S("button",{onClick:T0=>O.hiển_thị_dự_đoán_ds_xuất_hiện=!O.hiển_thị_dự_đoán_ds_xuất_hiện}," xem danh sách ",8,JS)]),O.dự_đoán_ds_xuất_hiện.length>0&&O.hiển_thị_dự_đoán_ds_xuất_hiện?(o0(),g0("div",XS,[(o0(!0),g0(P0,null,N2(O.dự_đoán_ds_xuất_hiện,(T0,w0)=>(o0(),g0("div",{key:`${w0}ds`},[S("div",null,[l0(Q(w0),1),(o0(),f3(wr(()=>A(T0,O))))]),S("button",{onClick:m0=>R(m2(l),O,w0)}," xem dự đoán ",8,QS)]))),128))])):Bn("",!0)],64)):Bn("",!0)]))),128))])])])}}}),ib=`Đồng Nai	21/10/2026	041493 66517 70444 80029 85860 68045 31481 58442 76365 68060 83316 79783 3788 8286 2193 4213 978 80\r
Cần Thơ	21/10/2026	934817 32185 95710 23525 53660 40533 98758 74539 19950 14090 93417 40422 8117 2469 7462 6945 780 96\r
Sóc Trăng	21/10/2026	281682 74007 45994 16655 23251 27998 07063 55504 72238 57339 20691 39704 5410 9103 2225 3835 404 80\r
Bến Tre	20/10/2026	213684 07672 43329 79847 93922 97050 57092 34679 11483 99579 63323 95277 9664 4111 3777 9526 272 33\r
Vũng Tàu	20/10/2026	319542 00144 66573 77425 11244 08191 17159 48824 41937 27707 95025 56892 9322 9672 6442 0557 583 91\r
Bạc Liêu	20/10/2026	565770 43242 80680 70727 60872 35687 37625 63772 82433 25374 24299 81345 2533 9434 0470 0332 702 90\r
Hồ Chí Minh	19/10/2026	091891 17912 15175 82849 64610 67735 34073 48667 54437 55300 65410 60091 4598 9428 5499 0311 585 20\r
Đồng Tháp	19/10/2026	813616 44126 64256 83284 81890 95307 01989 00446 06999 36892 65566 34187 7195 2375 9819 3054 163 70\r
Cà Mau	19/10/2026	519539 38428 06374 57445 43066 72217 98919 92404 38610 03140 78219 57166 5630 6310 7309 4406 377 51\r
Tiền Giang	18/10/2026	425917 87589 89058 35489 18042 79864 43222 98288 43147 38434 01425 88582 8883 2627 9219 3783 334 10\r
Kiên Giang	18/10/2026	316954 63200 86727 20679 33439 07755 73649 61281 82092 38799 87621 19241 5350 8165 1344 6305 782 43\r
Đà Lạt	18/10/2026	761867 52444 15913 12059 91722 55888 48077 07725 48150 46891 89980 61585 4565 1536 6524 8335 171 40\r
Hồ Chí Minh	17/10/2026	590803 14485 99287 80279 21331 34507 47272 93792 89283 36790 57855 16148 0788 6635 6350 0337 262 47\r
Long An	17/10/2026	622870 27805 50247 85097 45560 72113 02016 23387 77083 91401 00319 09820 4611 2244 5150 0826 398 63\r
Bình Phước	17/10/2026	057842 25093 15669 69124 43523 67401 39929 18774 59401 50986 45762 73659 0245 2174 3304 0125 022 88\r
Hậu Giang	17/10/2026	235118 62572 80594 18547 62826 76876 79625 51583 23079 76994 91595 89759 9680 4856 3710 5390 484 99\r
Vĩnh Long	16/10/2026	262014 23288 44754 02018 98718 12367 48831 76319 96964 23091 08619 54921 9722 6608 3913 0023 090 34\r
Bình Dương	16/10/2026	441166 98104 07911 13670 40718 83646 89043 11694 78748 07728 70400 90859 8458 4476 3772 8866 639 73\r
Trà Vinh	16/10/2026	662340 60856 11124 19785 20116 83873 17278 61730 04390 47357 06569 37541 6072 0801 2810 6490 869 26\r
Tây Ninh	15/10/2026	636638 30501 74151 86013 07895 41713 60034 90237 42768 61726 60797 78798 5423 9148 2440 2642 775 77\r
An Giang	15/10/2026	120192 15326 63628 08384 34163 64905 35779 78698 64005 90079 05360 98571 4335 5630 9550 9992 742 64\r
Bình Thuận	15/10/2026	785898 84278 20139 31017 74460 20237 76995 02607 24767 12584 18702 74839 7593 5952 0510 0622 741 44\r
Đồng Nai	14/10/2026	953606 56963 91506 59367 37080 42005 68642 93188 40838 84283 02197 06450 2491 2536 6668 4420 054 56\r
Cần Thơ	14/10/2026	589130 32895 25090 59310 34240 34148 27682 29955 74244 38355 61099 57086 9531 7827 7866 8397 745 13\r
Sóc Trăng	14/10/2026	483213 81651 65962 40219 49636 17961 51343 43804 91334 31368 88334 04448 4250 6930 8856 7244 384 81\r
Bến Tre	13/10/2026	542064 04541 70021 11455 66207 67070 38034 06512 88164 37969 34097 91471 7365 0371 4233 4063 955 78\r
Vũng Tàu	13/10/2026	056006 26038 32678 86364 58373 31975 89378 37266 77391 13624 44992 49857 1992 9063 3211 8011 628 59\r
Bạc Liêu	13/10/2026	191384 95407 57582 32244 24580 77549 00795 14301 49634 91432 47987 89844 6478 8902 1805 0661 679 62\r
Hồ Chí Minh	12/10/2026	290770 14385 81033 06855 81447 65873 98134 16986 50949 91680 40589 43031 6811 8451 2017 2393 029 91\r
Đồng Tháp	12/10/2026	725063 98614 91713 59841 53745 23521 66643 77051 68214 68517 05278 89318 8166 6286 8577 2433 399 92\r
Cà Mau	12/10/2026	683310 28250 60885 51071 30777 68184 17856 89984 91666 41068 74016 59548 4465 6867 6251 8256 327 91\r
Tiền Giang	11/10/2026	228460 77763 58726 33468 51443 23160 93077 06378 70206 28636 23211 91460 4999 9489 3945 9037 181 05\r
Kiên Giang	11/10/2026	667748 17554 21904 94973 63766 42596 00479 41441 98399 97309 32650 40600 1358 3288 3852 4980 287 80\r
Đà Lạt	11/10/2026	102253 44521 62738 11188 93405 07013 63717 54473 68173 24270 99384 50309 9003 2207 0014 8403 265 18\r
Hồ Chí Minh	10/10/2026	517827 81024 46458 57811 89681 26861 70516 70283 11000 69765 70821 76949 9354 3952 3914 4285 725 96\r
Long An	10/10/2026	306427 01820 82006 86717 42802 04817 38854 77295 21731 37948 88713 53814 9942 3571 5813 8198 244 69\r
Bình Phước	10/10/2026	206606 78662 23051 50501 61080 84377 62226 14893 72264 68358 29428 67569 5727 3877 4255 9736 624 88\r
Hậu Giang	10/10/2026	900389 83105 73432 65646 44345 80596 02077 41832 36255 23609 14080 75950 3737 9192 3217 1075 469 53\r
Vĩnh Long	09/10/2026	120550 64433 29631 18952 49213 94894 87109 67108 30092 96914 11271 89850 9201 4459 9958 6602 816 28\r
Bình Dương	09/10/2026	556557 61592 80438 45271 04162 62335 10248 66809 94607 48398 86259 56294 6042 0638 6441 2459 357 24\r
Trà Vinh	09/10/2026	364953 51287 12926 41606 67223 87828 80227 87191 47571 03285 70495 56164 1814 4862 3192 7237 912 70\r
Tây Ninh	08/10/2026	999472 15569 35606 74517 88638 45272 08288 41991 40417 20959 59618 68834 9557 3308 4485 9749 489 54\r
An Giang	08/10/2026	924168 56163 75890 82626 47142 54296 64520 71110 63339 29537 47309 78610 5578 6118 2186 6073 138 37\r
Bình Thuận	08/10/2026	088061 86106 62336 86495 21687 71461 13977 60824 31229 31917 23883 75442 5767 3995 5070 0902 739 03\r
Đồng Nai	07/10/2026	105684 03113 54142 81730 14703 67186 87407 05324 30505 03842 96675 74999 0767 0721 2867 1147 905 73\r
Cần Thơ	07/10/2026	011844 07109 24013 22564 67685 99177 77695 91450 84176 52656 87005 02124 8166 9486 0577 5362 799 96\r
Sóc Trăng	07/10/2026	308223 63901 76240 66913 96817 89519 94420 40687 24939 52064 69637 41294 9313 1036 0768 3280 022 49\r
Bến Tre	06/10/2026	132459 96438 90217 64408 77513 73407 97092 44351 67708 42931 91813 10072 9696 0019 5511 4739 673 93\r
Vũng Tàu	06/10/2026	914112 32303 31854 18482 85541 70058 84841 00192 67127 74204 93124 52583 4694 3762 6395 7154 555 86\r
Bạc Liêu	06/10/2026	507180 74907 09670 67311 36310 94160 99441 05561 92826 84015 76825 17010 9682 6492 5850 3288 296 55\r
Hồ Chí Minh	05/10/2026	750136 99882 10842 99092 75676 44118 39055 75974 55336 55027 70253 03612 2393 6709 6519 9382 674 59\r
Đồng Tháp	05/10/2026	555738 73680 37527 15175 56449 44390 56294 00393 49150 45158 81012 08550 1490 2499 5857 0033 782 19\r
Cà Mau	05/10/2026	030118 00496 02682 20865 43533 97520 03798 19769 76864 63335 73120 67518 1065 1709 3942 7583 082 79\r
Tiền Giang	04/10/2026	668674 78227 67524 41566 63764 26223 06148 95880 97385 15416 05787 79132 0775 3046 3286 1401 481 75\r
Kiên Giang	04/10/2026	062977 82009 15566 57942 26035 62275 61137 55861 03439 86553 27442 28060 2070 2582 1802 8238 169 31\r
Đà Lạt	04/10/2026	239681 44605 67332 81218 42573 12165 32789 25954 94747 14092 16120 39733 3196 2977 0361 9980 325 71\r
Hồ Chí Minh	03/10/2026	660851 17459 21871 79828 43422 75903 73649 92358 47410 94976 93777 07633 8436 2023 6763 3163 357 75\r
Long An	03/10/2026	018356 43348 66353 04451 24486 21809 09422 79871 92257 52381 55307 74890 7181 5441 7601 4399 538 40\r
Bình Phước	03/10/2026	740065 60169 99953 45155 68161 35267 18383 37730 69543 59420 35361 83504 7444 7544 0606 6071 741 49\r
Hậu Giang	03/10/2026	383277 28666 20121 59388 34380 97130 35326 74520 35246 01569 17530 99017 1883 9994 6681 7384 888 41\r
Vĩnh Long	02/10/2026	132697 77305 31549 50576 14938 18666 15990 44238 49325 25037 90913 60453 1802 3753 0609 3108 496 40\r
Bình Dương	02/10/2026	313004 00879 39283 18090 57493 17467 02851 90548 29519 91876 50071 04917 0705 4242 2886 9451 143 07\r
Trà Vinh	02/10/2026	886827 59378 84718 75794 90469 94340 96971 37408 54812 57205 99055 98036 4386 4822 8960 0026 477 57\r
Tây Ninh	01/10/2026	348513 80777 55031 31306 58213 45546 75678 30698 38266 37991 33648 70127 9755 2102 6847 9663 866 04\r
An Giang	01/10/2026	016473 57382 70855 63805 49007 18346 98300 44793 37823 57354 67415 68623 0077 1812 3049 8786 840 69\r
Bình Thuận	01/10/2026	247346 57496 48760 06279 80247 78624 77552 59117 20761 25785 40077 58621 7649 7307 4203 7496 861 00\r
Đồng Nai	30/09/2026	470822 46177 64114 17078 10583 60110 70505 04633 99206 41977 48756 79224 7819 1983 1429 8180 956 87\r
Cần Thơ	30/09/2026	216556 25432 51271 57775 49227 29614 06587 40447 69545 05086 05661 53386 5952 2971 7027 2662 587 36\r
Sóc Trăng	30/09/2026	275034 33828 29411 98451 38484 67466 88093 63364 00906 89217 69660 80706 4713 9792 5605 0638 344 51\r
Bến Tre	29/09/2026	383665 61692 75792 14309 37125 49058 06693 06306 15228 98990 54213 61395 9293 8725 3897 2585 665 75\r
Vũng Tàu	29/09/2026	333771 14992 67850 16288 21673 04232 96159 48194 08565 03103 07250 64199 1066 4027 3142 7899 405 14\r
Bạc Liêu	29/09/2026	150902 57108 06956 70765 65775 74311 88775 14160 52458 10696 35055 43915 7417 1803 4497 6892 927 20\r
Hồ Chí Minh	28/09/2026	760372 57769 10072 49513 21219 74569 89878 58813 25531 17297 59888 76986 3811 7161 6655 2155 285 21\r
Đồng Tháp	28/09/2026	048795 00633 48063 02626 33134 18640 54016 34952 69680 49404 14917 99983 9544 3636 1122 4283 018 27\r
Cà Mau	28/09/2026	281551 42704 79248 91031 36267 28220 25796 43045 51872 02802 30614 07566 1237 4194 3009 2896 276 41\r
Tiền Giang	27/09/2026	240624 26392 70796 31815 65401 47008 70443 97286 11585 71079 20755 50315 0218 1474 3228 9901 189 43\r
Kiên Giang	27/09/2026	713078 98680 40290 04495 61481 87202 24192 29045 30596 12731 26400 89740 9918 4293 5879 1733 142 76\r
Đà Lạt	27/09/2026	450102 09241 42333 70771 26829 09687 16731 80111 80183 86939 96452 96329 5306 3531 6265 8259 948 95\r
Hồ Chí Minh	26/09/2026	584475 29156 48593 68071 98546 39659 65601 58662 71396 30693 94113 81582 9315 8551 8397 1573 628 76\r
Long An	26/09/2026	985879 56436 06592 96393 90037 67110 44204 96921 69665 63517 91037 43228 8151 7010 7327 2694 920 13\r
Bình Phước	26/09/2026	745514 32981 72783 38105 31112 25312 07552 55416 46121 51084 30855 38602 8168 8730 6727 2552 407 17\r
Hậu Giang	26/09/2026	957565 95411 86150 63983 49995 62960 85320 38501 82568 24443 53108 89483 2055 8349 2959 2584 772 83\r
Vĩnh Long	25/09/2026	017299 88689 73017 60896 08186 16709 94790 36972 49885 43083 57459 77406 1048 4591 2561 2616 917 42\r
Bình Dương	25/09/2026	475052 73243 96902 81050 89385 29521 09322 86169 63678 36024 35156 14658 9303 6509 7000 7699 347 43\r
Trà Vinh	25/09/2026	107064 31703 04320 79301 33093 05961 95735 70344 26452 45816 49208 14440 5231 1089 8087 1366 699 43\r
Tây Ninh	24/09/2026	136970 56573 67343 43805 60358 90848 39391 24045 69540 58135 16486 94018 4033 1928 5575 3686 475 69\r
An Giang	24/09/2026	401901 76659 00474 33442 86721 77324 74392 27983 78585 68723 51254 96250 7482 6545 7305 0843 610 87\r
Bình Thuận	24/09/2026	377346 18173 04871 68763 48398 83626 46191 15729 18159 66600 14097 00564 5892 7464 9006 7600 744 95\r
Đồng Nai	23/09/2026	567326 44953 72389 66244 57727 10692 34215 46927 92993 53119 48129 71845 6421 6394 1954 0247 778 14\r
Cần Thơ	23/09/2026	157293 56175 08214 69203 12962 85468 24481 93448 63122 54072 71243 48066 9174 4535 3835 5078 843 50\r
Sóc Trăng	23/09/2026	523291 61832 84117 01301 62146 62307 91798 09559 43811 23682 52990 45011 7242 7699 8469 4721 744 66\r
Bến Tre	22/09/2026	910864 18315 00404 65002 05409 25509 81678 34856 41371 78035 91165 65924 1112 5594 7465 1218 228 15\r
Vũng Tàu	22/09/2026	033387 34637 29195 86575 64011 92819 83987 45200 15566 42489 23699 62216 3459 2265 4620 6643 050 47\r
Bạc Liêu	22/09/2026	977937 88030 76219 75266 50819 49739 78267 38221 86693 98919 04496 33364 2429 6654 8969 3873 881 90\r
Hồ Chí Minh	21/09/2026	016707 45022 33533 47812 54384 35059 37355 42827 17002 70220 17567 03634 9729 0322 8736 7715 281 31\r
Đồng Tháp	21/09/2026	966088 58303 87503 04566 68924 08345 01182 76355 92320 60333 85210 83171 0086 6185 4869 2151 484 81\r
Cà Mau	21/09/2026	405981 84624 81938 17552 41247 47814 21054 95023 78916 68510 96056 99679 3477 5312 2712 1296 982 74\r
Tiền Giang	20/09/2026	248087 92644 77874 24740 55580 94261 89843 63708 07347 05758 50324 28032 6839 8384 2964 7285 062 08\r
Kiên Giang	20/09/2026	237748 06508 05467 84807 89887 62150 12550 13247 45529 25272 31249 43906 9084 8497 3148 4768 349 35\r
Đà Lạt	20/09/2026	722323 15078 78387 60526 88359 86585 14450 26016 97344 23929 64560 52801 5823 5486 7885 9074 917 44\r
Hồ Chí Minh	19/09/2026	451013 01845 72337 14942 54389 33233 34368 54314 26839 24968 80881 57714 5391 5275 9644 2508 789 18\r
Long An	19/09/2026	961743 07155 20389 04032 76191 82356 69366 10718 07465 91438 77433 87707 1710 0659 0281 6942 874 22\r
Bình Phước	19/09/2026	854864 69211 42156 75288 63888 87336 89285 93874 08134 72044 80383 59769 8756 7021 7181 4670 370 68\r
Hậu Giang	19/09/2026	043160 85336 54987 81668 90291 98265 95438 03163 53365 97262 29580 30654 6591 5003 0429 0544 379 50\r
Vĩnh Long	18/09/2026	905889 47478 66131 41161 52686 88580 93332 95057 16369 30922 55391 22091 0954 5353 5416 3737 512 16\r
Bình Dương	18/09/2026	898508 27421 88793 66860 59014 92104 02926 23414 93905 34399 07798 47759 9131 2133 7696 6019 354 92\r
Trà Vinh	18/09/2026	207644 52848 30563 42301 79312 63034 07527 65368 00071 94934 44330 93689 8201 5861 3746 8332 279 15\r
Tây Ninh	17/09/2026	024183 44034 00525 27096 27631 17867 37385 39119 69531 27568 47061 71517 1268 5601 2296 2799 670 77\r
An Giang	17/09/2026	958515 19780 01332 94243 76424 36216 86692 59334 33570 68967 66777 06713 7521 5015 6791 5584 764 58\r
Bình Thuận	17/09/2026	452018 88872 52841 61343 86509 97611 43728 46157 24832 84083 70591 84046 1276 2104 8269 7690 698 99\r
Đồng Nai	16/09/2026	360877 30067 60261 50774 80660 20149 88390 92242 28191 90366 61532 31726 9333 5015 8016 7186 058 58\r
Cần Thơ	16/09/2026	171205 22415 16348 41230 53436 96289 65502 08396 16144 92871 80754 98346 9660 1157 3698 0290 392 90\r
Sóc Trăng	16/09/2026	296399 81546 87658 46965 04971 49871 15133 12101 26191 60655 07415 92147 8521 0080 4857 3170 666 18\r
Bến Tre	15/09/2026	873287 73405 34176 79974 17129 70965 87230 09565 85290 78818 70943 70506 7467 8564 9430 6200 045 07\r
Vũng Tàu	15/09/2026	426800 29125 70642 23230 37366 11319 75441 75688 26836 99073 57292 79341 8257 0845 0766 1217 270 19\r
Bạc Liêu	15/09/2026	118673 98197 62910 95547 00689 64567 38021 98927 05962 02344 68237 43933 0128 3869 6373 6316 984 54\r
Hồ Chí Minh	14/09/2026	293747 55187 95090 82169 79836 94133 60558 37075 97558 67967 21670 81000 3699 0496 4315 5000 816 16\r
Đồng Tháp	14/09/2026	803330 76547 04058 22039 04681 31414 62053 28120 05729 53640 58294 71121 5480 9323 9446 7540 980 85\r
Cà Mau	14/09/2026	544700 96334 23835 88280 20825 70581 85961 68722 63503 54530 68758 04217 5665 4993 5037 4355 592 04\r
Tiền Giang	13/09/2026	515408 36400 38889 44679 12634 82327 58217 39699 30885 75665 86159 09358 5687 3199 2411 6886 758 43\r
Kiên Giang	13/09/2026	452026 92605 31016 39629 62927 63286 50249 15808 94712 76658 01334 27668 1702 0707 6961 5108 179 42\r
Đà Lạt	13/09/2026	724379 55959 36339 29645 94465 85695 20017 89835 45431 48805 36643 41558 2025 9184 3999 3259 652 26\r
Hồ Chí Minh	12/09/2026	269569 79995 50557 95790 38976 63432 32190 91686 75436 59386 89236 73393 9425 6584 3651 1496 722 17\r
Long An	12/09/2026	155337 86640 80295 12160 28151 36913 08800 43356 33646 95188 89870 01626 5461 0811 9151 2765 464 14\r
Bình Phước	12/09/2026	871126 94263 77749 78635 59028 51399 54433 78400 02724 58164 68756 01140 7901 4637 5974 7072 378 17\r
Hậu Giang	12/09/2026	447951 35210 96901 98644 05441 32294 87255 41313 25193 09579 44819 86336 5200 8816 8912 7590 208 42\r
Vĩnh Long	11/09/2026	821221 34088 21625 26420 61206 82224 79347 89304 19247 09681 48666 33785 3293 2812 2107 0659 858 04\r
Bình Dương	11/09/2026	937036 57748 28108 97814 69304 60786 47492 22581 60806 15919 04646 50560 0446 5348 9647 1570 972 28\r
Trà Vinh	11/09/2026	467062 86984 06447 44438 13339 74920 91989 37628 09871 77110 96334 92931 1041 3129 5913 1713 508 87\r
Tây Ninh	10/09/2026	910457 47152 31387 54162 40090 65684 50000 58458 15677 00776 61931 79519 1281 3154 9559 1776 282 57\r
An Giang	10/09/2026	370490 52742 76646 94540 99013 06694 33903 96455 29210 29596 84613 23289 9155 5629 3700 3824 979 66\r
Bình Thuận	10/09/2026	253778 35952 44600 44862 25304 06998 95180 66929 15800 30023 99571 50260 7166 7391 1274 8380 703 22\r
Đồng Nai	09/09/2026	348446 04790 11951 76281 56049 24645 90690 99761 26288 05763 98993 56874 5710 1255 4586 7350 876 59\r
Cần Thơ	09/09/2026	637211 74235 02695 34554 85892 86504 87119 75856 11028 57999 74623 75263 9121 0265 4174 0809 936 31\r
Sóc Trăng	09/09/2026	267025 42386 00567 11364 69081 70110 38328 20584 84704 85735 47380 45529 4285 5980 6937 3377 074 35\r
Bến Tre	08/09/2026	536908 63918 76468 14682 93084 34255 74075 59920 74582 53675 75338 32300 8059 3527 8204 1929 023 53\r
Vũng Tàu	08/09/2026	438599 83227 00908 45182 73616 33715 07262 62737 23865 81501 51973 04009 4738 7694 8928 7829 006 78\r
Bạc Liêu	08/09/2026	236335 01825 63268 11579 98593 36031 24201 41522 48773 36614 59729 94380 7748 7921 0311 4475 236 04\r
Hồ Chí Minh	07/09/2026	583758 39707 16986 78585 38583 21977 09908 58781 89096 81809 59064 75731 2030 2187 5865 5399 028 05\r
Đồng Tháp	07/09/2026	644918 44310 94383 20791 66892 49191 97236 13021 21860 99173 43262 01109 2386 2162 7721 9063 652 06\r
Cà Mau	07/09/2026	556626 43895 31586 67065 72140 74745 01565 86224 96838 09027 71414 08343 7624 4804 0057 3314 109 82\r
Tiền Giang	06/09/2026	306313 18995 99510 74185 37751 44115 34091 07229 74897 18132 78810 07027 9242 1673 4478 1437 156 69\r
Kiên Giang	06/09/2026	800313 79594 62056 63078 01165 87490 58829 67117 06235 29352 68984 68126 3737 3781 3129 0220 307 29\r
Đà Lạt	06/09/2026	805519 99641 53041 03203 19659 94635 47189 33287 19972 31219 07748 91317 4257 8100 7089 5475 568 73\r
Hồ Chí Minh	05/09/2026	821010 12285 70631 41903 64342 64193 55405 60804 84245 60467 43317 59922 7668 8270 0159 6020 345 56\r
Long An	05/09/2026	409433 48614 62575 31794 27497 91826 34813 38350 55371 93323 55432 92875 6440 4604 8248 0631 776 61\r
Bình Phước	05/09/2026	889342 05363 02879 88228 88625 09669 54982 09997 68898 54900 50969 80479 3360 5098 8761 6934 544 79\r
Hậu Giang	05/09/2026	613350 39948 43481 45973 25599 12743 81425 96080 08616 16469 63595 97291 5218 6741 1794 7303 495 10\r
Vĩnh Long	04/09/2026	187137 92581 14737 63388 52049 34820 39404 34963 28095 58317 80224 32075 8150 5028 4996 5958 217 16\r
Bình Dương	04/09/2026	926706 88311 07597 07690 78024 36686 04061 97926 25697 66405 48609 77817 3178 8765 3509 3872 963 32\r
Trà Vinh	04/09/2026	899819 16758 66957 52189 56373 54512 57927 58602 46956 47627 77379 93143 3067 0940 4346 1371 103 90\r
Tây Ninh	03/09/2026	979586 92123 34230 92135 02627 11298 51383 74684 06012 71631 58619 82133 7990 2329 7580 5557 367 78\r
An Giang	03/09/2026	764014 64866 99396 49602 67188 08638 37628 95083 47040 27080 59399 76078 5740 5585 8147 0019 804 58\r
Bình Thuận	03/09/2026	564616 03257 37068 90791 62118 54712 84023 93343 04182 28070 85093 27642 2620 6001 5702 3687 703 54\r
Đồng Nai	02/09/2026	797487 03537 96842 87634 70627 85436 36689 26691 14657 42398 03360 65925 3873 3301 3008 2372 604 79\r
Cần Thơ	02/09/2026	886199 08070 80959 17401 62273 41190 42603 19699 40154 88461 77452 40861 3145 4768 7669 8212 772 78\r
Sóc Trăng	02/09/2026	773312 17326 65264 72690 65198 67091 44801 17396 69935 44202 44353 78328 2382 0576 1339 2898 823 03\r
Bến Tre	01/09/2026	571670 89329 78988 18975 43209 04053 79650 32725 51517 49345 34231 81571 0793 4676 5239 2861 713 15\r
Vũng Tàu	01/09/2026	776477 42247 03480 17568 10225 93055 28210 52857 12705 95763 81211 32817 0462 2851 4483 2809 258 23\r
Bạc Liêu	01/09/2026	720792 83892 55943 54447 07294 06742 49522 58549 64579 96485 66051 79908 2482 2187 6300 1139 883 05\r
Hồ Chí Minh	31/08/2026	061923 13891 09263 97915 04692 99561 65057 22017 51078 64544 16942 65052 2342 4687 2189 8217 515 98\r
Đồng Tháp	31/08/2026	728409 08519 99985 67116 91664 81617 06900 04114 95223 48831 72956 22747 8148 9972 0566 8459 751 11\r
Cà Mau	31/08/2026	264432 15863 79042 46687 12541 95280 77906 24414 99378 57105 71759 39239 5563 2187 7933 7778 335 63\r
Tiền Giang	30/08/2026	460531 36168 92071 20941 67479 11560 25125 95116 62496 55339 31987 48338 5938 4110 9596 2318 919 14\r
Kiên Giang	30/08/2026	840070 49023 06549 64002 45140 47478 09539 83187 05348 57550 03136 72136 1457 8865 7872 3575 706 45\r
Đà Lạt	30/08/2026	145077 46169 49838 86955 94807 73852 79302 09563 55154 03074 05834 94182 0459 1330 6970 4066 211 97\r
Hồ Chí Minh	29/08/2026	690406 02962 25390 48158 19662 53458 39121 77842 24668 49325 84071 67013 7381 3321 9601 3114 311 00\r
Long An	29/08/2026	245760 05159 79719 66266 84826 13883 91581 75863 10296 21249 12869 96319 8530 4852 3045 7174 254 99\r
Bình Phước	29/08/2026	606990 03678 32326 50545 53489 58123 71720 43072 94598 49562 35060 86267 9850 1526 2735 8287 629 50\r
Hậu Giang	29/08/2026	321816 21773 90657 86896 53519 90170 63742 78281 82987 08574 94418 66138 0270 9052 6515 3095 508 73\r
Vĩnh Long	28/08/2026	682016 54974 78453 65302 07794 33380 55025 94144 24410 93874 59357 91322 4001 1711 5726 5985 979 09\r
Bình Dương	28/08/2026	285158 37614 69784 50685 00471 81224 28316 33904 53057 50242 51136 52419 0818 3637 6452 6936 802 20\r
Trà Vinh	28/08/2026	786009 88979 18535 08460 59835 77276 59245 10406 77198 45976 52138 41164 3754 7509 8394 7823 230 88\r
Tây Ninh	27/08/2026	434619 64391 88550 71303 09315 33614 90618 58586 14417 91956 52403 99450 6902 6538 7759 7210 712 73\r
An Giang	27/08/2026	139092 59225 69651 94626 27872 71802 65643 29382 18851 01853 93493 81189 0676 8398 6371 8156 798 52\r
Bình Thuận	27/08/2026	166448 64406 86986 33595 35472 75389 19799 47134 24168 99762 86352 20522 1032 5397 4580 1265 285 75\r
Đồng Nai	26/08/2026	145917 98208 69706 87474 73361 26795 99413 48293 68845 38218 27365 07052 4068 6898 6712 1527 147 70\r
Cần Thơ	26/08/2026	640492 78665 18507 89911 87671 51728 90088 35214 09952 47931 89269 62130 3925 3437 9919 5691 981 77\r
Sóc Trăng	26/08/2026	211555 77387 21621 01323 84725 21691 81752 82852 54707 37416 14513 88282 0071 3071 2066 8707 593 91\r
Bến Tre	25/08/2026	118211 13350 69395 13886 59678 24995 34224 98404 49208 53676 97061 58618 1929 9454 6283 4506 683 57\r
Vũng Tàu	25/08/2026	063119 80104 05122 51667 96699 45918 04571 48213 78659 52970 31096 01712 6428 4543 1884 8044 706 38\r
Bạc Liêu	25/08/2026	234370 86412 07038 50760 77822 63283 40370 13074 91836 92723 90960 78650 6662 1966 0483 7600 010 40\r
Hồ Chí Minh	24/08/2026	225824 31802 11768 05044 15394 50037 95546 54508 32296 65559 32402 25177 5659 3391 5522 8621 792 40\r
Đồng Tháp	24/08/2026	078861 98391 75511 55599 80878 80202 21374 37189 22909 94833 95060 83015 2401 6704 3711 0641 047 40\r
Cà Mau	24/08/2026	177307 68516 67367 12122 04187 78848 29078 58714 93168 87902 88081 86409 1171 5495 1265 0442 823 03\r
Tiền Giang	23/08/2026	891851 64462 72948 58335 45532 34080 58062 51271 14091 44259 89695 96677 8918 9664 5218 2126 457 50\r
Kiên Giang	23/08/2026	579621 85295 46864 19064 38495 64228 12276 50570 30759 02604 07242 94178 0520 4327 2067 0204 005 23\r
Đà Lạt	23/08/2026	215534 72950 99061 81866 31590 97257 63347 68546 25601 68571 96918 76722 0449 0372 3286 5229 743 32\r
Hồ Chí Minh	22/08/2026	296215 68795 97663 31471 78879 87601 40205 16122 83417 47612 49104 81537 4478 5681 4809 3063 414 22\r
Long An	22/08/2026	474160 95423 27858 34249 93143 35597 42245 33081 96929 52774 83126 96834 6947 8431 9970 3368 884 55\r
Bình Phước	22/08/2026	094423 83847 89704 93750 33159 25917 48661 18888 59389 06303 63080 00713 7955 9212 6731 1953 242 11\r
Hậu Giang	22/08/2026	617750 63916 75645 27551 97079 31872 28812 57726 64245 32760 25729 24903 6107 8599 8848 6015 337 10\r
Vĩnh Long	21/08/2026	837758 87966 86788 41723 02482 63637 03445 26161 31537 56802 66076 01459 5108 8640 0825 2694 290 18\r
Bình Dương	21/08/2026	466130 98175 90141 42082 04767 27168 52052 97476 86942 52070 34793 04159 4980 3135 3243 6006 382 29\r
Trà Vinh	21/08/2026	366282 67604 94660 49252 63964 42239 24701 32997 41646 56478 92603 68546 1759 0897 5547 1916 158 57\r
Tây Ninh	20/08/2026	065440 05459 90792 29346 62545 51578 07777 82182 07327 51873 43883 48345 2262 5239 0785 8743 348 19\r
An Giang	20/08/2026	510332 89516 44895 52640 02439 90111 32541 20491 71417 32217 57371 15096 1635 9670 9023 3404 516 54\r
Bình Thuận	20/08/2026	258376 00960 32168 34590 09750 96490 92957 79041 43722 39375 18660 33777 5322 4628 1091 5982 682 02\r
Đồng Nai	19/08/2026	289591 45797 45217 61807 46430 78884 63216 89359 53739 51226 57413 64874 3409 2507 1048 5142 141 01\r
Cần Thơ	19/08/2026	367818 57124 33267 75658 01412 92847 52877 58898 98519 72608 80084 14316 8723 2469 5137 5879 917 13\r
Sóc Trăng	19/08/2026	233283 42359 34167 86578 61748 28815 78230 00247 77217 17629 62167 73291 3163 8979 3280 8643 096 88\r
Bến Tre	18/08/2026	599422 69907 54884 95781 64263 81987 46740 93834 44276 52868 67967 83534 3020 1752 4825 6810 298 82\r
Vũng Tàu	18/08/2026	406016 20156 39228 91505 41300 77011 89457 32735 22842 22181 69018 21287 7488 5400 7085 9523 734 13\r
Bạc Liêu	18/08/2026	373492 18657 71695 05525 36560 12756 12698 44175 34215 76510 30534 26997 0012 6177 3241 4688 549 02\r
Hồ Chí Minh	17/08/2026	706890 31185 35259 08334 61189 59466 81376 52545 86745 79654 25295 52783 6429 2328 0872 2935 109 54\r
Đồng Tháp	17/08/2026	553908 97285 24031 18524 27163 35818 67504 55923 72122 67680 81286 96970 2850 8035 1607 4752 217 71\r
Cà Mau	17/08/2026	228853 22244 25262 17700 12254 84277 78255 70742 33979 75769 60727 76263 7824 7946 0004 0346 406 25\r
Tiền Giang	16/08/2026	220804 72705 11768 12437 63197 62035 14409 63256 14327 52089 52841 36605 9896 0311 6600 5653 766 86\r
Kiên Giang	16/08/2026	216578 93153 93156 25365 36699 56396 80352 74435 74605 73323 06015 86957 0303 9935 7381 7689 370 13\r
Đà Lạt	16/08/2026	893189 94817 47895 39380 41408 95293 41102 87049 13708 33461 25427 36775 2836 4581 3109 8187 581 90\r
Hồ Chí Minh	15/08/2026	040589 55672 75464 55129 28930 44351 18954 65673 56983 75239 67899 82116 7001 8531 0599 7531 729 31\r
Long An	15/08/2026	817082 40971 09097 85445 55867 24440 66571 63738 66064 27759 87483 80452 4431 5084 0106 5375 466 19\r
Bình Phước	15/08/2026	801700 70482 55129 34707 70185 33419 49228 55106 73838 25699 91442 24911 8586 7385 0492 5540 457 18\r
Hậu Giang	15/08/2026	748485 24551 73063 61517 48713 09843 17347 36124 64058 64468 33064 34525 0796 2150 7768 1115 583 57\r
Vĩnh Long	14/08/2026	597367 62825 63655 99650 00703 30335 71841 49464 38323 27146 43150 65450 7785 7993 1706 4834 562 72\r
Bình Dương	14/08/2026	696215 06360 39274 28581 22304 17777 84639 25642 53531 60983 93002 23758 3261 8562 1302 5174 785 33\r
Trà Vinh	14/08/2026	521473 96396 25383 99947 90074 87376 79689 00317 37708 95083 90477 58479 8693 6611 0852 9952 085 97\r
Tây Ninh	13/08/2026	809580 87012 35785 44832 38137 63990 35275 80760 53198 47157 28816 88853 1132 4025 2535 8508 683 86\r
An Giang	13/08/2026	639943 63117 46931 61981 08356 53335 88495 68922 30513 89029 89913 98354 1288 9141 2550 1530 849 01\r
Bình Thuận	13/08/2026	402933 06629 29701 58144 81857 66530 50019 17087 43355 88065 68896 40349 5176 6227 0486 1754 258 68\r
Đồng Nai	12/08/2026	476040 74193 02122 00217 14444 94230 16974 91493 14755 84306 91616 01140 3105 6837 5796 7928 748 02\r
Cần Thơ	12/08/2026	333284 82206 96913 47006 09400 07153 46706 36905 66241 02211 20983 72973 8322 9002 5887 9527 087 04\r
Sóc Trăng	12/08/2026	401259 79079 23971 65138 91058 51327 35504 26361 08775 61554 78572 51134 7408 5624 4680 7125 206 63\r
Bến Tre	11/08/2026	635297 95838 41253 62500 47500 04876 38599 54794 67894 10217 05551 40239 7987 8534 0203 1076 824 58\r
Vũng Tàu	11/08/2026	935422 95060 16111 65095 24766 18980 92406 33813 72842 34032 87234 02690 4467 4403 5619 1742 232 58\r
Bạc Liêu	11/08/2026	282289 92719 40913 42765 03587 20146 21739 31981 15452 16704 71337 98581 1292 6709 4694 7138 407 86\r
Hồ Chí Minh	10/08/2026	339922 90396 94141 30858 88662 41319 82729 60484 18624 52719 98253 56695 9263 8796 1879 5045 191 63\r
Đồng Tháp	10/08/2026	896271 12799 82454 91028 25865 16360 50284 02971 24038 75328 54821 98786 8752 7491 7975 7495 980 21\r
Cà Mau	10/08/2026	400786 74061 82983 92985 31906 38258 52460 46576 63651 83735 12096 73544 3256 9956 4690 8358 182 32\r
Tiền Giang	09/08/2026	318617 24336 77223 81191 51826 02496 18901 77067 27034 42926 65477 70393 8511 8059 3333 2991 925 04\r
Kiên Giang	09/08/2026	937461 28651 07688 63417 33646 04920 43708 22344 86773 44006 98978 19489 7525 2735 9448 2519 264 31\r
Đà Lạt	09/08/2026	094782 40606 89126 04346 02060 14442 45150 34716 70741 64876 67669 60813 8130 6638 1130 1569 461 79\r
Hồ Chí Minh	08/08/2026	209039 69322 70255 99575 66968 91170 45347 39604 40770 39529 86507 86511 8451 7527 8137 9324 238 10\r
Long An	08/08/2026	430795 18194 28014 93717 43989 42454 87184 34354 61535 00018 09505 11693 5340 8752 2779 4284 345 50\r
Bình Phước	08/08/2026	828343 14797 08484 95163 33457 88791 30100 11156 72439 33852 18759 30833 6170 8191 5447 9058 004 88\r
Hậu Giang	08/08/2026	009611 96474 20196 32701 83338 12090 89195 05568 18552 14595 73516 40225 8814 1861 6141 4198 763 59\r
Vĩnh Long	07/08/2026	779240 75919 51513 50573 57533 36124 21122 56557 92246 20661 13926 11983 5145 6471 0682 4163 678 99\r
Bình Dương	07/08/2026	276274 31434 78395 95817 18212 54501 75976 96747 77870 94468 14833 30627 3096 1869 3072 4427 185 39\r
Trà Vinh	07/08/2026	414382 27855 42597 15076 27544 47217 48284 61752 34454 25223 10686 50585 5101 9917 6978 4961 439 21\r
Tây Ninh	06/08/2026	241657 13937 53320 93185 50828 63730 02118 72294 18811 28427 07490 81655 3617 5244 0590 8796 805 41\r
An Giang	06/08/2026	245836 41355 19633 60534 72093 22978 59534 98348 63070 00411 82357 01893 0159 8519 3148 8395 303 54\r
Bình Thuận	06/08/2026	457729 60611 44654 59035 27848 45303 77388 68377 85679 11376 09087 06864 0608 3467 8264 9634 883 83\r
Đồng Nai	05/08/2026	658328 17889 98714 53324 84484 97989 45311 60984 35209 53528 87063 93210 2515 1188 9161 9160 636 04\r
Cần Thơ	05/08/2026	685468 42613 74252 11030 05943 50245 89665 20642 90596 33643 34304 40686 1929 2044 9472 7827 147 62\r
Sóc Trăng	05/08/2026	577545 43930 87051 91772 02045 97838 11665 59324 71008 78014 07373 46479 5400 7408 2897 8938 109 72\r
Bến Tre	04/08/2026	814620 31572 19628 56092 90732 06969 37901 06030 71372 59439 51685 36742 3669 3262 7738 0329 133 99\r
Vũng Tàu	04/08/2026	384788 47637 40931 38547 29305 37278 43377 74725 17356 39256 15366 61873 0559 5442 2737 7140 398 33\r
Bạc Liêu	04/08/2026	268193 65493 21094 55754 31286 19390 53547 63756 31291 76230 49241 34248 3167 6665 4804 2083 479 27\r
Hồ Chí Minh	03/08/2026	574027 72911 87891 40469 00395 82375 76222 10009 13950 31331 72521 21526 1608 6957 3371 4547 545 08\r
Đồng Tháp	03/08/2026	409865 28607 77306 52305 66557 98361 33249 35157 94637 23162 21222 01822 2458 3031 3246 5685 511 61\r
Cà Mau	03/08/2026	427004 41903 70292 10846 92607 82848 78795 88739 47510 49881 82061 87749 5772 2751 7781 8581 679 44\r
Tiền Giang	02/08/2026	361087 38909 12949 92454 69730 35401 69174 93563 77823 13434 04678 01079 2136 8462 8164 7054 110 87\r
Kiên Giang	02/08/2026	853883 78298 12858 26207 56932 63420 53780 47116 99389 59737 93426 09131 3714 2155 2745 1882 713 12\r
Đà Lạt	02/08/2026	681870 34341 02044 98543 46168 41428 82088 30424 74337 51294 62436 81852 3422 4836 0854 5156 658 98\r
Hồ Chí Minh	01/08/2026	752169 91532 66056 98472 70683 59703 31947 32108 27369 74498 04766 03729 3328 3042 5431 5269 586 67\r
Long An	01/08/2026	177081 87073 48058 41984 82746 53401 30522 75875 24916 87379 11118 77150 0294 1525 7773 6284 610 41\r
Bình Phước	01/08/2026	876950 37429 74120 42312 03255 44882 57218 23791 45244 49771 25452 94091 8959 2725 8220 7537 812 41\r
Hậu Giang	01/08/2026	678539 31052 95005 07717 44222 82849 74386 42534 14523 29822 00741 98966 0343 8823 6241 7079 173 57\r
Vĩnh Long	31/07/2026	382125 14751 51167 52174 29309 83777 04435 80243 17839 74234 54953 76818 8347 9127 5804 6614 049 98\r
Bình Dương	31/07/2026	218535 99614 97016 67360 35293 48282 87622 86209 59279 31279 57780 67804 3638 4733 8230 3128 084 31\r
Trà Vinh	31/07/2026	384994 76567 22486 07328 54352 70574 13833 88447 35231 37451 15146 02759 2372 0240 9254 2764 452 44\r
Tây Ninh	30/07/2026	050416 52985 46639 36065 85133 45354 34616 89405 52143 18406 08383 19690 0668 5912 4490 8220 890 70\r
An Giang	30/07/2026	965247 60858 60699 56908 41827 38183 72799 11266 79609 77258 75911 73585 3730 7475 0084 4484 912 12\r
Bình Thuận	30/07/2026	206168 63426 90541 59216 39365 05175 04374 92635 16290 39742 11742 89798 0344 4064 5838 7525 952 09\r
Đồng Nai	29/07/2026	225620 39518 83399 53950 15576 80339 34403 21537 67338 64780 26335 58834 8176 6748 9016 4961 147 76\r
Cần Thơ	29/07/2026	897277 16388 60353 64728 78711 15472 50438 85298 72945 70496 83568 98616 4556 9175 1289 8144 954 17\r
Sóc Trăng	29/07/2026	707565 51956 11167 54864 25065 42861 27558 43416 27788 75133 28637 44602 9077 4725 2702 8237 567 38\r
Bến Tre	28/07/2026	196971 49249 14867 20351 35485 45301 59598 53853 07678 93300 45993 38813 3009 7967 4775 8623 459 32\r
Vũng Tàu	28/07/2026	818231 46772 43267 24731 90830 39690 41410 32678 08044 84122 02301 90035 1612 9862 2713 3450 994 11\r
Bạc Liêu	28/07/2026	681100 62640 79809 43553 55863 24056 52548 01752 14345 36564 12145 90424 6415 3353 7810 7417 297 39\r
Hồ Chí Minh	27/07/2026	578824 83905 27362 45415 72394 01186 79553 77566 10389 50668 09692 66423 9985 0535 5214 4780 644 80\r
Đồng Tháp	27/07/2026	770181 00917 93478 11345 42750 69999 50385 77699 27526 31988 79163 86394 8664 4371 3269 3131 270 63\r
Cà Mau	27/07/2026	363250 84516 22259 01245 39288 33690 44805 11091 88008 98068 60908 71853 9369 5091 1031 5047 267 01\r
Tiền Giang	26/07/2026	760654 20389 04682 91811 17565 83961 05127 47715 84239 91995 92493 29482 8892 6064 9394 5047 122 35\r
Kiên Giang	26/07/2026	016554 14356 29251 90441 78234 95469 44025 72146 36356 00486 58703 19370 4419 3526 0385 8806 619 99\r
Đà Lạt	26/07/2026	038254 56378 92805 19171 48529 70946 97800 02361 70134 87181 26748 90211 1330 4330 6865 2565 453 10\r
Hồ Chí Minh	25/07/2026	304240 45291 10883 47947 26122 70572 55859 00822 20501 77680 81233 80148 1716 1786 6853 1870 037 01\r
Long An	25/07/2026	340389 05035 58574 37533 38904 42413 51435 14558 65538 30384 32651 97517 1829 1335 7370 7815 935 83\r
Bình Phước	25/07/2026	758950 55559 44841 35798 69341 38063 85935 19448 71397 52020 41986 63645 0343 4798 1063 6649 052 69\r
Hậu Giang	25/07/2026	631195 93965 02027 16375 34534 82715 60440 13072 08220 52678 85466 34174 4145 5337 5741 6091 799 78\r
Vĩnh Long	24/07/2026	356052 78121 57225 50164 33762 40942 54996 55386 98684 50879 72950 34067 5687 0138 0656 9456 143 64\r
Bình Dương	24/07/2026	544210 82485 96428 40454 17103 09498 91237 92968 98607 16162 24318 31700 1707 1424 5248 6008 416 75\r
Trà Vinh	24/07/2026	007403 47521 68357 36126 93355 40536 72228 77843 83725 58826 36277 49365 1427 5397 6514 4063 197 51\r
Tây Ninh	23/07/2026	656393 29500 77786 28240 17405 26992 57172 58983 55973 98388 76392 95566 4120 4462 8615 7088 196 40\r
An Giang	23/07/2026	273992 94435 55408 52336 87873 75915 69015 88846 06156 69343 53629 85373 8892 1100 2474 2387 519 52\r
Bình Thuận	23/07/2026	218850 62968 86092 32437 53653 21731 67943 46348 92029 53981 02690 01735 7513 0853 6209 5837 105 84\r
Đồng Nai	22/07/2026	621355 13833 89118 42524 51702 16060 96537 80559 19830 21333 38472 99914 6870 7275 8826 8686 384 44\r
Cần Thơ	22/07/2026	403470 70035 22244 41920 56871 80468 34261 10164 33123 71657 25620 73661 0322 0973 6014 7674 223 78\r
Sóc Trăng	22/07/2026	535092 14821 96998 65052 28738 37857 04485 85740 46114 67328 04288 31212 0896 2956 1984 5406 007 09\r
Bến Tre	21/07/2026	514919 54070 74949 38881 15033 07262 48512 41504 05459 87907 90901 67418 0033 5412 8408 1532 597 25\r
Vũng Tàu	21/07/2026	673257 85784 56658 42532 53682 23592 70377 84650 25234 76943 81688 22099 7726 2797 2510 8651 282 36\r
Bạc Liêu	21/07/2026	379882 02600 16963 28842 27991 19670 34160 05872 04696 24319 99833 47146 6060 0373 9776 1807 742 44\r
Hồ Chí Minh	20/07/2026	008556 87113 39304 07273 11601 76012 20936 10883 66037 69616 46064 12103 8972 4728 5592 3783 409 28\r
Đồng Tháp	20/07/2026	957501 34324 45929 40432 26247 47209 49258 41358 51158 73571 26498 49738 5650 2440 9107 0253 524 20\r
Cà Mau	20/07/2026	536266 16132 57795 48106 28796 58415 36328 74579 64592 08040 94692 47531 8387 3742 4703 9238 785 91\r
Tiền Giang	19/07/2026	486026 82978 01288 17485 36461 89657 50741 73041 97878 00520 04712 74001 0773 5916 3248 7386 623 27\r
Kiên Giang	19/07/2026	310228 30176 12877 64457 30871 06037 55223 65942 08198 48790 57310 58265 7408 3004 2143 2681 871 80\r
Đà Lạt	19/07/2026	087842 47409 18224 32207 76311 14894 01559 37943 80545 21584 66381 32803 3182 4644 6422 6783 910 36\r
Hồ Chí Minh	18/07/2026	246882 59174 78893 29076 17449 11970 72294 56366 79173 70041 09912 71613 5799 7042 7726 0734 342 78\r
Long An	18/07/2026	203770 25194 54718 89947 80160 43411 41630 42690 44224 86054 04561 59396 8646 6565 0088 3591 801 18\r
Bình Phước	18/07/2026	962811 72964 88305 14168 90798 27861 90239 15018 83523 65881 24583 09028 4588 9799 3160 5556 391 11\r
Hậu Giang	18/07/2026	019407 27793 02702 45143 18076 82669 32028 56757 84499 55661 96593 63791 3647 8901 1489 1619 998 27\r
Vĩnh Long	17/07/2026	899058 18214 89620 60451 52254 98024 65171 48803 78929 49571 23305 71811 5767 7881 0607 8701 789 33\r
Bình Dương	17/07/2026	265991 31741 41594 21083 73708 83541 95443 93377 19565 47395 32623 97685 2727 4108 3730 3980 064 50\r
Trà Vinh	17/07/2026	561324 55489 77085 58056 04366 04497 95725 31392 22442 48417 12573 25920 4738 3579 2899 9275 231 23\r
Tây Ninh	16/07/2026	085113 01378 09628 17532 66620 90022 64615 28858 13087 08404 45891 42815 2023 6219 7281 9418 767 70\r
An Giang	16/07/2026	830834 54496 03014 55582 44217 45145 75742 89903 92299 23230 61786 17762 0874 8156 4612 0981 809 54\r
Bình Thuận	16/07/2026	623836 57643 20472 76773 89731 91772 82436 97975 10625 86633 67015 29031 4618 6227 6641 7200 445 23\r
Đồng Nai	15/07/2026	008402 71200 80517 34150 64151 55010 13786 58671 06858 56387 95574 21141 0406 7234 0593 5348 116 10\r
Cần Thơ	15/07/2026	867898 46874 60099 95096 56949 10149 59317 08464 63611 20248 73940 74747 5790 4867 3131 0548 411 05\r
Sóc Trăng	15/07/2026	282199 36842 76508 95472 31367 44078 02042 01604 52838 95288 23604 55299 6550 6588 3670 9501 569 96\r
Bến Tre	14/07/2026	681119 56088 08596 41478 00179 09898 90423 61459 72185 25388 88650 15423 0921 2427 4215 9827 457 42\r
Vũng Tàu	14/07/2026	955319 17861 42300 65642 57053 53264 53387 39050 78457 88403 16471 62844 4164 4897 7947 5148 345 92\r
Bạc Liêu	14/07/2026	258393 92144 36777 40502 91329 95949 51833 00248 20070 20902 63798 39001 1876 5435 5195 2475 404 69\r
Hồ Chí Minh	13/07/2026	256022 76748 64476 04976 02576 90043 55833 67619 06219 77996 86006 13613 7645 3498 1040 1591 053 16\r
Đồng Tháp	13/07/2026	439097 10472 47597 13182 13302 93536 92699 52930 41349 60250 89452 33980 8451 5538 3369 6966 032 04\r
Cà Mau	13/07/2026	303404 90382 93956 15667 06530 27175 90925 66397 63591 36897 04437 39300 8357 9069 9501 4841 874 70\r
Tiền Giang	12/07/2026	898582 11865 22368 62096 77715 91401 31112 32870 82026 82316 80048 37225 6522 3841 4469 9759 252 07\r
Kiên Giang	12/07/2026	913490 05117 43178 28938 00448 08116 22527 47561 86576 22291 23493 46016 7846 8335 7796 0344 455 99\r
Đà Lạt	12/07/2026	579838 48236 61616 70723 06136 03080 83183 25421 53881 20906 63817 19432 7721 4134 8317 1305 579 65\r
Hồ Chí Minh	11/07/2026	333464 00845 22438 41053 01925 15735 28046 79507 44304 12410 71600 24702 7040 7132 4249 3653 479 02\r
Long An	11/07/2026	016397 76759 91688 49183 16713 72738 30463 88865 28434 84625 59731 07730 9678 1974 4792 5347 565 28\r
Bình Phước	11/07/2026	087990 95576 72550 48388 92355 65233 32508 59867 90453 79152 90939 90937 0877 7390 5458 4974 715 96\r
Hậu Giang	11/07/2026	883669 31090 31751 81554 12774 89656 91993 15853 84749 44227 79836 46711 1022 6295 1631 4903 821 45\r
Vĩnh Long	10/07/2026	073565 91553 08409 05155 43291 28647 07105 08241 32095 97330 54446 92219 8141 1990 3659 5057 095 95\r
Bình Dương	10/07/2026	663795 26361 05911 14613 73129 21603 02774 76628 00405 02429 75680 03202 6650 0442 0711 6702 638 63\r
Trà Vinh	10/07/2026	325002 44392 78976 27148 60269 59086 07496 83400 23409 59974 72448 78305 6982 8085 7124 5351 900 51\r
Tây Ninh	09/07/2026	306050 50830 91654 93553 11469 95262 57634 26427 83873 17826 08351 08686 6573 8610 0724 7486 754 27\r
An Giang	09/07/2026	622936 15860 28251 38344 93766 47742 54035 25932 83121 03597 29534 04726 3388 5921 8134 7068 907 06\r
Bình Thuận	09/07/2026	763530 32946 23369 47742 34981 79965 57609 91542 52404 96779 74905 62259 5324 1786 6328 5235 362 36\r
Đồng Nai	08/07/2026	061248 40651 53913 92425 62190 48289 10993 90963 35884 10410 97093 32999 3402 5837 9611 4288 811 48\r
Cần Thơ	08/07/2026	214463 37814 38961 81701 89733 15745 90096 17661 80852 53410 72295 94913 2659 4415 2927 9735 179 68\r
Sóc Trăng	08/07/2026	708297 93546 22596 75292 42218 34254 65279 58378 53818 37095 64652 65183 3903 6193 8563 1264 916 48\r
Bến Tre	07/07/2026	877777 59078 00083 74773 87723 31096 91065 09745 19481 41878 39406 99838 7271 1669 4092 7478 639 05\r
Vũng Tàu	07/07/2026	168986 36041 91832 61154 98970 26316 60123 48489 87993 24265 85456 76916 1128 5118 1091 1722 077 18\r
Bạc Liêu	07/07/2026	709492 93146 42513 80482 76768 83703 71807 16405 33975 64086 18977 35001 7253 4780 4696 6440 776 15\r
Hồ Chí Minh	06/07/2026	831548 85817 30356 34240 48028 16001 51614 49335 99318 92519 01921 78130 5742 1256 5846 1210 015 33\r
Đồng Tháp	06/07/2026	497852 01422 22357 27799 45705 29880 05713 76396 64836 08839 72144 47838 1562 4859 4196 7958 642 27\r
Cà Mau	06/07/2026	738323 10652 49279 99982 58550 48183 50157 50142 79923 83730 56983 75590 1204 2607 7332 0081 081 46\r
Tiền Giang	05/07/2026	673100 49113 23461 93019 04348 30147 43945 03143 31796 21903 89699 03141 6100 6666 3761 9585 281 49\r
Kiên Giang	05/07/2026	503680 94837 71687 71478 06496 36043 58168 40471 93675 18236 86942 93662 9993 7265 8985 0528 126 57\r
Đà Lạt	05/07/2026	522666 14259 47535 48961 86106 33371 69533 96954 44838 75132 23250 05174 5024 4574 1502 5906 070 52\r
Hồ Chí Minh	04/07/2026	185542 10124 31285 38864 73603 10817 03857 08323 03793 77113 00517 86435 7853 7252 8102 2155 817 98\r
Long An	04/07/2026	261058 82131 57243 29939 17831 40755 05637 63375 64344 45269 36041 85702 8021 2529 2008 5858 417 64\r
Bình Phước	04/07/2026	660209 37773 46111 67239 87340 46035 26275 28567 53013 10055 05364 85451 9570 2860 6359 5270 881 73\r
Hậu Giang	04/07/2026	726757 75015 01641 57006 75592 67077 08305 01282 02331 82221 63446 38026 1502 6236 4951 8001 716 04\r
Vĩnh Long	03/07/2026	911134 63799 48636 11842 69013 70577 77718 80978 41363 62320 33733 08396 9796 0630 8755 0978 458 57\r
Bình Dương	03/07/2026	058812 27734 01572 40766 77321 39141 11785 32903 54847 44667 69151 86352 6415 4873 0369 8722 755 22\r
Trà Vinh	03/07/2026	260617 20462 58933 71811 90414 99347 99228 13625 40658 67445 72656 81231 2395 4130 8076 0204 867 01\r
Tây Ninh	02/07/2026	784407 94274 39642 83254 61483 95251 33060 78868 51284 99241 58413 82807 9357 5085 8898 1672 681 93\r
An Giang	02/07/2026	533429 29827 52359 35026 59088 51098 02518 72764 45199 58343 90827 36837 2587 8802 9514 8273 708 97\r
Bình Thuận	02/07/2026	272594 16407 39102 69922 17991 58655 19997 02437 93563 74443 72127 38658 5079 6359 8973 7487 800 65\r
Đồng Nai	01/07/2026	986546 36325 40194 73329 87510 70929 80044 23699 02035 75696 85688 32183 9243 8877 8045 1138 934 61\r
Cần Thơ	01/07/2026	210203 04258 78383 47326 60434 03373 53884 70056 07429 11028 89572 23095 4078 7091 1328 7354 145 40\r
Sóc Trăng	01/07/2026	778087 35965 20001 63858 37673 59570 57697 98437 85030 96609 76370 19765 4244 9019 0561 3546 696 97\r
Bến Tre	30/06/2026	773221 61687 10253 69534 55091 33014 79902 70241 43992 44354 70195 71278 7587 1802 8288 9256 250 66\r
Vũng Tàu	30/06/2026	483966 43509 66225 81086 88585 92746 82345 61879 60277 13155 04134 89785 7616 4237 4121 5720 148 22\r
Bạc Liêu	30/06/2026	177259 22052 70886 67874 72853 17340 20644 47350 98418 75750 56600 29388 2555 1850 6908 8201 071 27\r
Hồ Chí Minh	29/06/2026	531137 32859 10630 46332 28464 77126 66496 46579 52250 25881 56352 16765 6152 4062 5746 6591 008 45\r
Đồng Tháp	29/06/2026	974245 91459 26041 37820 47193 51988 29868 72006 45580 63229 36275 04545 8620 5468 4810 5872 530 71\r
Cà Mau	29/06/2026	469164 37419 38031 52757 69507 66187 80187 05992 28843 08274 50523 22504 1648 9780 1729 7606 468 58\r
Tiền Giang	28/06/2026	792930 24611 92175 66365 04759 31478 75998 14097 74008 51660 59317 96044 3296 5072 0822 2910 683 31\r
Kiên Giang	28/06/2026	359852 59033 41824 53661 36531 06398 67096 06237 29095 91267 05199 70590 5170 7643 0528 4896 850 50\r
Đà Lạt	28/06/2026	635343 49624 88765 30446 52689 58770 14459 90452 29223 05074 60465 00945 9976 7944 0026 1675 017 16\r
Hồ Chí Minh	27/06/2026	608165 06554 82478 20190 21088 85176 59787 21162 40767 08337 01564 97524 6693 3249 1646 9653 347 28\r
Long An	27/06/2026	218731 49583 78517 67326 92338 53319 63802 23436 89687 27718 87582 80612 9878 2122 4408 0424 849 17\r
Bình Phước	27/06/2026	311230 37597 37665 34668 57100 17119 42386 31483 89543 37569 30040 51208 0518 4266 9522 7084 488 70\r
Hậu Giang	27/06/2026	778736 15307 85191 33280 86269 07193 95068 67969 80665 50953 88658 84763 6058 3559 5701 9266 988 76\r
Vĩnh Long	26/06/2026	442348 83033 62867 60035 89232 06313 73026 43412 85574 54700 93359 15958 2052 9942 5591 4090 027 19\r
Bình Dương	26/06/2026	465521 80766 67837 47022 71638 92273 61159 44746 97259 82532 13403 05721 8554 9702 4896 4059 176 39\r
Trà Vinh	26/06/2026	445418 06144 46128 21289 90362 30095 90716 14751 58839 41691 16807 84890 5460 5375 7102 7743 423 09\r
Tây Ninh	25/06/2026	585684 83626 22457 91075 45425 10009 82721 25655 45735 55474 44236 69254 3448 4540 8921 0528 330 21\r
An Giang	25/06/2026	991913 60009 24645 91250 35891 48395 00895 60515 41190 85095 13477 26276 9291 5440 2072 6089 486 49\r
Bình Thuận	25/06/2026	727953 65681 55411 55687 37801 90833 30287 99020 02125 34153 24647 65381 5924 2385 3384 6414 324 66\r
Đồng Nai	24/06/2026	162714 67937 93287 61806 85880 82370 33300 94093 80059 94271 75481 85112 2617 2184 5510 6000 383 61\r
Cần Thơ	24/06/2026	783007 62596 64365 32613 90185 91239 03431 85348 05875 32953 50880 67662 8203 6222 6083 5766 818 57\r
Sóc Trăng	24/06/2026	314160 67544 34307 43600 61539 08520 60060 59992 15974 26604 82452 06773 4537 4123 6180 7593 599 20\r
Bến Tre	23/06/2026	034315 48700 17901 79709 90908 83469 93278 99472 64783 63235 48336 07470 6908 4296 3570 7282 293 25\r
Vũng Tàu	23/06/2026	018547 06727 63732 17873 07329 25817 57082 03735 94085 73748 72713 24877 8667 4508 1892 3996 105 71\r
Bạc Liêu	23/06/2026	886431 44333 06433 55734 65938 41202 94785 21716 53007 35666 45701 08683 0687 1400 0914 7455 547 77\r
Hồ Chí Minh	22/06/2026	712554 46958 37364 76666 73039 30230 15722 06908 45568 23293 72547 20203 7811 1980 4915 6194 047 68\r
Đồng Tháp	22/06/2026	524922 26079 49087 84109 04775 31102 10435 02201 15725 03080 85311 59844 4687 1959 8692 7515 906 73\r
Cà Mau	22/06/2026	542373 68762 58707 93675 73701 48364 75488 81932 73098 18792 23266 30142 5988 6278 9258 5683 930 60\r
Tiền Giang	21/06/2026	075760 57745 54710 91691 53911 27065 72022 52687 19885 86888 46539 47321 3613 9028 3295 7773 917 74\r
Kiên Giang	21/06/2026	097913 51277 18572 12387 36590 36835 80488 79028 77747 08197 72696 83949 8849 1431 5864 3045 302 10\r
Đà Lạt	21/06/2026	911911 29616 87012 61552 22567 40305 02284 01365 82339 67559 86235 17875 9357 5596 0459 8035 324 10\r
Hồ Chí Minh	20/06/2026	569733 30806 77488 12702 94108 93986 24942 54496 38550 24312 74323 57347 3581 9271 5551 0516 406 33\r
Long An	20/06/2026	686902 86578 52289 47497 84842 08607 84482 72775 16247 02485 17329 44270 2833 8778 8457 9929 523 73\r
Bình Phước	20/06/2026	660290 88820 06338 93703 99949 48621 34127 48615 32757 93077 87699 09587 0752 1811 4140 4480 116 60\r
Hậu Giang	20/06/2026	168784 37005 82632 52175 05968 86117 24456 57532 61601 35672 50868 91344 8236 6876 7732 0845 771 26\r
Vĩnh Long	19/06/2026	446202 61443 91517 99661 54732 17117 40210 89498 63392 20660 27445 92226 6173 8073 5736 0831 347 46\r
Bình Dương	19/06/2026	945100 06652 86077 14515 57637 53053 02790 49927 80339 90896 06818 67721 5051 5478 2485 9472 111 62\r
Trà Vinh	19/06/2026	998520 29248 17863 00523 52715 48840 32751 25181 23621 77205 67500 29464 4623 1322 6756 2503 697 81\r
Tây Ninh	18/06/2026	795785 73666 64646 14647 70903 32989 98517 02087 66752 58185 60326 29601 7631 5638 3794 0369 387 37\r
An Giang	18/06/2026	534092 05789 32493 03206 41498 96376 98771 02732 11112 48237 53369 51327 2452 7261 6754 1885 506 77\r
Bình Thuận	18/06/2026	818562 61403 51643 19819 62840 23564 92637 51050 51722 77156 78416 87293 7939 1695 7670 2971 375 98\r
Đồng Nai	17/06/2026	884900 90950 98326 56818 17770 97848 19970 75409 47228 72765 03381 66287 0165 0759 9753 4064 499 24\r
Cần Thơ	17/06/2026	756536 15658 87364 99464 31786 85340 49029 33570 30495 10862 07133 30077 0246 5762 0363 2817 144 60\r
Sóc Trăng	17/06/2026	748498 23422 10063 01957 77329 03769 30462 27195 04482 70295 72767 62337 8517 7232 9450 0035 526 33\r
Bến Tre	16/06/2026	691272 77764 69953 76731 06402 57379 56071 48285 65235 58298 89623 14579 1903 0431 1781 1492 002 83\r
Vũng Tàu	16/06/2026	024892 28642 25975 68212 88682 92495 97437 89117 98734 97530 26311 20095 4733 9780 8761 0803 304 19\r
Bạc Liêu	16/06/2026	683986 88886 75247 52178 74727 18866 21425 65465 31980 74380 35819 28007 7845 7074 0151 3653 928 50\r
Hồ Chí Minh	15/06/2026	285122 66382 97467 82950 51229 64240 41551 82062 39797 21357 10268 98540 5640 2105 0007 1797 616 34\r
Đồng Tháp	15/06/2026	105318 20779 20258 91022 30086 52472 67062 77819 45346 26013 92814 83903 8203 9076 2509 5374 581 98\r
Cà Mau	15/06/2026	290235 12135 04754 85840 88415 29635 83951 54050 65203 48453 81830 14942 7113 0415 7610 9905 169 47\r
Tiền Giang	14/06/2026	897210 96129 37831 07992 37149 87653 44220 90160 84635 22327 70456 65184 6470 6346 8410 5966 915 62\r
Kiên Giang	14/06/2026	832106 15096 36666 05886 29815 93556 08258 11159 53475 02013 89027 39250 9335 1541 3827 3404 143 23\r
Đà Lạt	14/06/2026	621690 13749 46326 02583 42313 88290 07836 40002 95619 00794 40451 35916 1128 1914 4646 5741 164 72\r
Hồ Chí Minh	13/06/2026	122619 64203 87108 94357 13753 36839 53264 34587 55978 41396 20441 62133 3617 5693 1685 8492 065 74\r
Long An	13/06/2026	185837 52463 36381 49615 09014 71749 20968 33931 23039 86707 93882 65736 9174 5020 9566 2168 161 31\r
Bình Phước	13/06/2026	906914 21526 12591 09192 71061 03468 48168 83383 21462 53075 47584 23622 1275 1329 9573 9041 836 72\r
Hậu Giang	13/06/2026	715384 92622 39712 79541 35356 99954 05826 00795 57565 48362 41802 19136 3554 5513 3290 5383 997 93\r
Vĩnh Long	12/06/2026	805696 73137 26043 26473 31469 08086 80938 84480 28936 24407 42009 81130 8986 3118 9966 1361 739 90\r
Bình Dương	12/06/2026	363193 20808 45514 27376 12955 13830 48450 09246 25478 11036 39149 20981 4759 6122 0460 4684 997 83\r
Trà Vinh	12/06/2026	235477 07257 36921 31222 03498 83686 91404 20617 41654 13128 23825 36442 2299 5123 2491 8817 726 46\r
Tây Ninh	11/06/2026	423392 17088 81579 38438 83307 67895 52799 90411 50864 34071 55367 47304 6109 2740 6119 0825 616 27\r
An Giang	11/06/2026	491238 74585 83006 60502 07369 86883 64914 41482 81454 75763 95551 50093 4696 7923 0490 8308 286 43\r
Bình Thuận	11/06/2026	146616 79507 04433 24601 95219 15023 75305 77760 92082 30529 05851 14558 7382 4022 5581 3883 600 88\r
Đồng Nai	10/06/2026	910292 07798 31521 40693 98509 36794 11163 44054 25445 36655 86549 99012 3716 6331 0365 7746 613 33\r
Cần Thơ	10/06/2026	364957 97931 65744 21680 24154 06579 42032 65758 65412 87004 09877 27530 4582 3235 5311 5008 700 63\r
Sóc Trăng	10/06/2026	712879 99075 97278 61433 23332 97113 75514 87455 46247 87109 39100 47226 9143 4905 8177 6940 990 54\r
Bến Tre	09/06/2026	910547 68673 84571 33559 63705 74353 74103 01264 75689 90379 51500 65334 9172 7622 2093 9358 717 47\r
Vũng Tàu	09/06/2026	556701 00864 14299 65776 80784 30851 38717 16301 72518 22320 59046 93564 5703 6827 7757 4478 476 08\r
Bạc Liêu	09/06/2026	378018 62201 12905 61203 85959 97492 66063 45674 74030 72882 91746 32901 8847 6676 3098 0870 767 06\r
Hồ Chí Minh	08/06/2026	925261 92526 77229 93185 70100 43034 48552 73454 20955 26652 81877 76095 2460 3795 5987 8271 439 75\r
Đồng Tháp	08/06/2026	400162 55722 25502 55193 19092 50441 88853 91836 21303 89969 97609 00778 5163 1537 1653 6829 954 93\r
Cà Mau	08/06/2026	841122 61479 43729 36481 03452 65589 85631 33309 98684 70188 00236 16185 2858 6535 7902 6632 729 75\r
Tiền Giang	07/06/2026	129302 77615 93762 62494 17948 64066 07603 51825 00576 78777 29371 27422 2844 2767 3926 1209 390 89\r
Kiên Giang	07/06/2026	150925 75933 11228 50166 05013 35674 02823 09424 37326 29749 95247 92661 2708 2969 5586 7877 975 86\r
Đà Lạt	07/06/2026	753429 23556 68605 72512 47262 88214 46693 34873 24739 54013 93083 17544 6089 4250 6134 5821 944 68\r
Hồ Chí Minh	06/06/2026	094580 17895 53172 13453 59076 43852 80668 99881 93594 95461 98404 69356 5326 6437 6986 3001 702 95\r
Long An	06/06/2026	105199 99220 07348 51859 14601 01202 23806 96666 06937 69994 96014 55021 4707 9974 9582 8608 114 06\r
Bình Phước	06/06/2026	765936 13600 45298 31629 91255 42594 16946 61322 17398 65177 92750 09994 3350 0516 5498 7862 453 97\r
Hậu Giang	06/06/2026	559076 93898 47794 12154 20438 35785 48314 10608 90557 54427 10504 25838 1016 6206 4735 6893 132 42\r
Vĩnh Long	05/06/2026	591978 73464 93850 26659 46310 26194 55029 99548 05196 16311 58269 96560 6809 4348 2195 9893 047 64\r
Bình Dương	05/06/2026	103208 48800 90419 25659 70654 10957 79050 03923 17894 84223 34241 95991 5287 7761 6471 4785 877 52\r
Trà Vinh	05/06/2026	396747 98313 14791 02847 97244 36259 49721 94428 03133 07310 71483 59118 5356 2050 3023 9103 669 72\r
Tây Ninh	04/06/2026	936713 41445 11730 25913 34260 09753 68674 35177 85355 52012 31717 61471 1108 1078 1865 6509 041 01\r
An Giang	04/06/2026	827417 39822 61739 49972 18558 95269 25412 61370 83758 57095 66199 04737 4602 6880 5902 6720 564 52\r
Bình Thuận	04/06/2026	088367 98734 64555 63823 81822 10067 56150 61143 67505 36026 94391 93331 0233 1991 2118 1816 905 03\r
Đồng Nai	03/06/2026	644186 65371 87795 05225 66061 23634 90421 31971 71186 40430 19303 75637 8312 6251 2908 5544 753 40\r
Cần Thơ	03/06/2026	783481 28610 10938 15152 94736 23534 39426 60870 19855 46418 60162 42476 1048 5125 3297 1039 254 48\r
Sóc Trăng	03/06/2026	686457 97885 74702 50762 91154 64781 82461 53567 58401 32825 21625 57445 5208 0407 6913 3382 375 57\r
Bến Tre	02/06/2026	292066 60935 37050 32864 44831 95919 44482 97050 61474 61729 93594 02299 7894 4222 7264 1913 803 99\r
Vũng Tàu	02/06/2026	306135 40860 71058 35501 96607 02158 72246 44396 80076 23896 14614 65784 8575 1607 7173 4803 698 04\r
Bạc Liêu	02/06/2026	281116 42404 79999 11495 15621 04180 44549 31174 14511 51420 15718 00604 4161 5462 1194 8882 030 22\r
Hồ Chí Minh	01/06/2026	725887 23234 27569 00003 66394 56864 65810 70373 90351 83333 13752 71353 2799 0244 9957 1606 372 08\r
Đồng Tháp	01/06/2026	732919 27980 44167 45918 13591 59305 33019 93101 24034 51330 07240 33834 7315 2628 0430 4785 244 48\r
Cà Mau	01/06/2026	748958 29629 96520 38142 21684 69276 84297 08070 80061 18344 28396 34749 1140 2074 7661 6225 309 39\r
Tiền Giang	31/05/2026	197341 58985 72050 43652 64214 68581 92294 62223 72696 56352 42296 42475 0869 0862 4625 4626 552 92\r
Kiên Giang	31/05/2026	870587 65759 08181 17803 22584 99868 18592 97590 24005 99848 97799 71826 8270 0717 3182 1169 411 14\r
Đà Lạt	31/05/2026	080550 47204 49107 80444 70417 02585 16910 43100 11052 51763 13097 25474 6220 3563 1157 7412 869 11\r
Hồ Chí Minh	30/05/2026	805808 96879 53344 68270 46101 40480 76299 48432 07033 83564 71301 74717 9525 9062 7997 3321 257 93\r
Long An	30/05/2026	981576 82250 63833 50587 35072 90019 48890 78557 46949 00891 16517 49159 7680 4840 6045 6733 671 19\r
Bình Phước	30/05/2026	006507 99062 72630 83541 88346 52490 60208 09303 23893 15203 52459 22132 5996 8866 4704 1933 470 00\r
Hậu Giang	30/05/2026	323587 37568 60395 86074 89926 87908 03737 67226 87863 58254 74463 68485 2332 2361 1186 2047 844 51\r
Vĩnh Long	29/05/2026	132549 64042 48404 55928 88453 68782 71184 18974 80273 68353 87109 03224 6684 9216 7033 8456 351 54\r
Bình Dương	29/05/2026	181994 19320 14860 90944 30219 18098 24138 83634 06949 68329 54312 37775 1085 6366 0245 8638 135 49\r
Trà Vinh	29/05/2026	512263 93120 11426 98912 29062 70603 33723 11443 65482 68273 26634 54438 6874 6637 5106 0040 745 81\r
Tây Ninh	28/05/2026	490332 55851 10248 65215 57607 58483 33836 77399 12078 16273 64606 02528 4055 9161 8209 5690 102 74\r
An Giang	28/05/2026	377962 58783 97431 24198 30102 26611 70238 22071 71935 84472 74682 00597 7319 9247 2584 8849 054 86\r
Bình Thuận	28/05/2026	180200 33365 36340 19584 42289 66670 53045 94538 37971 17497 31357 12829 9645 0130 6457 3378 751 46\r
Đồng Nai	27/05/2026	738909 36587 95371 08584 73825 36468 42690 59907 79002 16104 04139 49404 0383 3673 7600 2736 658 94\r
Cần Thơ	27/05/2026	007940 83469 74920 21924 93976 58901 11094 26498 16955 22470 11765 62138 8108 9344 5063 2844 305 94\r
Sóc Trăng	27/05/2026	094538 61339 89893 28384 89362 06330 75309 81483 79407 82549 82898 64403 9662 1768 1403 1401 253 64\r
Bến Tre	26/05/2026	710634 18188 38588 35245 03197 04534 05872 38980 27832 02782 06433 46415 3254 2750 5258 8959 058 07\r
Vũng Tàu	26/05/2026	353356 89430 24009 37316 77704 38984 35973 10166 71525 99326 91954 19361 8443 1525 2496 7177 511 43\r
Bạc Liêu	26/05/2026	085856 78390 04034 31582 55935 31176 33347 07539 39038 30627 57604 69743 8275 1750 1935 7742 726 14\r
Hồ Chí Minh	25/05/2026	846479 72403 29991 63850 67358 90914 30485 95966 60585 43339 93884 83229 7043 6553 5793 7873 760 76\r
Đồng Tháp	25/05/2026	017030 00108 59082 27561 98473 67908 77366 73044 56668 14192 97359 14532 8818 7135 7193 7359 257 72\r
Cà Mau	25/05/2026	861359 16114 80800 69092 35474 97202 27629 82872 05287 34347 68215 07627 5189 6337 8217 3390 832 91\r
Tiền Giang	24/05/2026	347955 39354 03568 39735 17026 70785 28511 79826 99360 71671 14799 09801 1890 8106 0925 7041 451 97\r
Kiên Giang	24/05/2026	957166 35710 24074 60285 23738 99364 36047 53112 14907 05959 28437 40193 1675 0784 6501 3975 160 77\r
Đà Lạt	24/05/2026	949438 00668 27526 41076 90398 50884 14775 36112 88872 07840 96647 54123 4421 8947 5670 0676 941 43\r
Hồ Chí Minh	23/05/2026	121910 04001 90535 12498 31302 84104 78730 86570 54022 58464 82240 29470 7561 4656 3766 2655 209 38\r
Long An	23/05/2026	174071 39464 77747 31633 28471 45344 68325 88492 85382 20022 50168 69668 7136 0875 6951 1723 529 14\r
Bình Phước	23/05/2026	020319 28477 19190 06415 26044 47928 85595 59185 68722 92090 18849 43157 5226 4563 9908 8253 510 66\r
Hậu Giang	23/05/2026	789337 96388 52798 99433 30300 83285 58784 19474 64737 06078 75204 52298 5816 7677 3304 2542 377 39\r
Vĩnh Long	22/05/2026	576339 49411 46677 60654 13695 84090 20388 83683 00829 53829 09318 38576 2960 4654 3823 8109 829 85\r
Bình Dương	22/05/2026	796933 26048 56068 66839 62410 60838 78780 04017 77155 14477 40840 00486 6570 9331 3157 0039 925 91\r
Trà Vinh	22/05/2026	750681 91893 30549 76888 83202 39821 28404 98116 00415 48434 25621 84416 9419 0481 8586 6496 072 58\r
Tây Ninh	21/05/2026	048987 11823 57564 24388 78089 19450 93061 46365 68630 14346 81131 16370 4855 2522 0219 4788 098 97\r
An Giang	21/05/2026	898665 78187 06864 51525 93923 12340 64200 30442 72565 69719 08577 38256 1826 8586 7679 0605 123 66\r
Bình Thuận	21/05/2026	332731 40736 85259 57796 08506 44180 93847 82170 91057 72487 85316 83424 8121 5028 6337 4889 074 66\r
Đồng Nai	20/05/2026	325697 48593 63015 59345 21416 98885 31136 35112 96813 32093 79940 19384 8909 1317 8027 7392 223 61\r
Cần Thơ	20/05/2026	010158 80536 46029 94196 30101 42745 88840 14567 14353 98459 72906 26148 3165 1981 5829 0262 393 94\r
Sóc Trăng	20/05/2026	284574 35709 75190 90457 75587 74846 79597 87258 46720 67400 30428 08501 3543 8219 5794 0163 010 98\r
Bến Tre	19/05/2026	985684 34209 63657 31587 62001 66447 88717 19969 35988 35431 96709 66991 0067 5244 2209 3723 457 90\r
Vũng Tàu	19/05/2026	382627 33216 44383 17699 93194 36893 54053 77220 35571 21344 37639 43605 9672 8571 6445 2061 719 23\r
Bạc Liêu	19/05/2026	269950 49182 60753 15389 33492 88572 67365 26204 30352 30663 67082 43539 2512 1719 9622 5544 821 53\r
Hồ Chí Minh	18/05/2026	590856 55065 20056 86971 35330 98291 51114 65521 24525 58221 64442 27024 6698 6837 7860 1857 142 80\r
Đồng Tháp	18/05/2026	043809 06150 49594 85449 41577 59961 80946 01809 57081 78358 31074 02532 5467 4714 4266 3586 096 48\r
Cà Mau	18/05/2026	331798 95265 93578 82889 62881 92468 90859 62144 77666 44589 74265 53391 0292 2508 6632 3616 314 17\r
Tiền Giang	17/05/2026	486686 87701 41572 96451 79851 83231 44525 09242 11953 27332 76340 47902 9411 4461 4898 6000 288 74\r
Kiên Giang	17/05/2026	996036 42716 11367 76412 05049 25409 60745 21782 91930 06613 13284 53011 0990 7085 2156 2510 664 49\r
Đà Lạt	17/05/2026	443862 72853 64900 90022 41451 31950 07376 83740 59419 40143 41524 48838 3623 8297 1486 0008 949 10\r
Hồ Chí Minh	16/05/2026	911805 07481 75541 22302 94319 31340 06531 29369 19229 29267 31681 70703 0346 1440 5694 1358 172 06\r
Long An	16/05/2026	009743 95968 54767 46115 95626 26834 16125 09152 73168 62388 33768 81151 3696 1235 9898 6712 864 90\r
Bình Phước	16/05/2026	822472 68365 80385 36505 09118 44078 22391 49354 57903 04201 83486 80152 4110 5138 8250 6552 163 83\r
Hậu Giang	16/05/2026	639537 46885 15086 46636 83526 02725 24114 27058 53087 23269 49456 15182 0410 5475 8332 5273 881 22\r
Vĩnh Long	15/05/2026	216215 75759 48400 85216 24672 81890 74589 19516 74905 79365 49958 32396 6558 8696 9071 9899 792 51\r
Bình Dương	15/05/2026	660519 55107 02531 38479 18924 67708 94928 41243 75585 05343 91528 40795 7433 1995 7830 5033 371 39\r
Trà Vinh	15/05/2026	314542 51221 98772 55894 63395 20490 77179 06596 97690 73992 39322 52889 7639 0425 9452 2233 256 49\r
Tây Ninh	14/05/2026	261628 80289 18150 08696 71643 30110 94740 27355 10709 64939 82489 15901 8196 7523 0914 5317 838 90\r
An Giang	14/05/2026	194241 80679 33513 91561 88175 95003 62502 27378 00545 11899 00306 17127 1552 6162 0765 1076 859 10\r
Bình Thuận	14/05/2026	859600 54119 70529 58083 08003 87201 68233 01262 40500 42881 63857 88450 3600 2938 9035 4450 755 61\r
Đồng Nai	13/05/2026	077915 00656 44747 40834 25332 51240 50385 20672 05034 85590 25704 72202 1691 2240 9632 2295 890 81\r
Cần Thơ	13/05/2026	718304 31597 34709 37583 10648 02197 84591 34572 57331 52534 82906 79613 2935 1445 5891 4941 620 35\r
Sóc Trăng	13/05/2026	632151 34820 01758 05568 13968 21926 90989 70998 85680 95753 65263 07873 5990 8351 7644 4273 862 79\r
Bến Tre	12/05/2026	408610 07865 50000 55702 88663 51707 73731 58388 83095 84501 13557 85419 7451 7725 4023 1109 423 22\r
Vũng Tàu	12/05/2026	355485 03134 52307 42445 15516 94336 70828 28483 31307 94232 99771 87162 7140 6503 2806 0539 314 12\r
Bạc Liêu	12/05/2026	366748 39494 53189 11297 64064 03655 42372 82216 93788 75020 35907 88950 0130 6131 4394 3766 588 07\r
Hồ Chí Minh	11/05/2026	115854 98301 97781 01387 58344 86873 73430 05706 07918 21430 76206 51322 2042 8633 0567 8337 727 80\r
Đồng Tháp	11/05/2026	586853 10834 13525 25196 27523 15077 05897 32136 04951 59816 93995 52592 5258 8086 5721 0071 101 08\r
Cà Mau	11/05/2026	431844 88194 73701 37217 83597 10909 82598 82591 29562 70203 26000 26899 3665 0375 0416 5406 938 23\r
Tiền Giang	10/05/2026	378913 78183 16528 12180 50033 80383 05788 35208 07766 76893 97180 77268 1906 3523 2502 5567 531 21\r
Kiên Giang	10/05/2026	134619 50423 65578 69698 39824 54614 52467 44112 92887 26068 46797 57940 6108 0364 6951 7812 768 82\r
Đà Lạt	10/05/2026	566502 42829 31516 49484 73147 64508 97086 35218 65389 18073 26990 11350 3400 1666 0533 2774 743 86\r
Hồ Chí Minh	09/05/2026	063178 27267 98159 06773 99588 12374 05949 47189 32784 27474 41031 22627 3271 0990 7134 8442 874 13\r
Long An	09/05/2026	411089 30410 23743 58036 43879 82793 12696 85608 97601 57086 04470 06683 8555 6583 7601 2313 264 64\r
Bình Phước	09/05/2026	370369 16210 89571 26989 18657 19275 31235 16557 56765 89126 17992 94666 0032 5532 8251 4100 769 15\r
Hậu Giang	09/05/2026	703896 76403 85887 74216 45289 43927 30194 45165 23281 89836 95829 36048 4683 8204 5133 9572 217 47\r
Vĩnh Long	08/05/2026	058821 69099 82722 10875 60374 38926 59015 04759 03747 28383 03391 35311 5833 7423 7689 3744 610 68\r
Bình Dương	08/05/2026	246252 91335 20586 88330 81405 23417 79235 98477 60127 82517 38787 10098 1761 1707 5072 8705 472 39\r
Trà Vinh	08/05/2026	195634 75226 54186 64922 39575 56105 14298 05505 13089 82107 68310 23086 9759 0638 7383 8932 639 61\r
Tây Ninh	07/05/2026	472012 16656 65082 91699 75957 49352 87085 26879 21028 12215 14299 75198 0213 5457 6938 2092 637 93\r
An Giang	07/05/2026	642819 28999 62595 07166 33739 36917 24203 51744 91893 07307 76524 00253 8858 5279 7627 8102 470 01\r
Bình Thuận	07/05/2026	961493 21183 52782 63627 01897 33178 83462 39637 09480 86260 34282 23959 7328 2948 0246 1879 144 13\r
Đồng Nai	06/05/2026	934311 14504 46544 84936 93311 65061 73837 87115 14013 48041 87357 04789 8824 6682 6073 8124 009 15\r
Cần Thơ	06/05/2026	292205 08619 41519 48290 80609 44901 06684 77749 31254 63143 86256 90104 3832 4203 3106 4935 418 94\r
Sóc Trăng	06/05/2026	127240 31786 49136 92265 70293 16545 77581 71806 82059 16964 85690 69692 5920 6113 5413 5490 437 78\r
Bến Tre	05/05/2026	133509 31921 29602 34282 01507 60032 59391 94763 87352 99352 19567 36538 0757 9967 6222 5220 927 95\r
Vũng Tàu	05/05/2026	742546 84324 69796 33901 21917 87600 75793 67133 26882 84978 83376 23130 8171 9965 3319 6837 412 32\r
Bạc Liêu	05/05/2026	066493 02034 56268 02558 45637 57396 88465 58246 13244 04254 73060 38620 4861 8567 8897 1178 735 77\r
Hồ Chí Minh	04/05/2026	975219 82161 37386 84046 25226 05730 61846 95984 98332 98740 84073 74599 5628 2060 1982 0041 598 41\r
Đồng Tháp	04/05/2026	024185 53825 34014 53819 86610 40452 94528 40714 64672 24213 24901 57820 7853 5590 2646 9824 123 04\r
Cà Mau	04/05/2026	207225 31724 45487 71373 87443 14894 10395 11594 94528 90952 51091 30111 9785 3253 3774 8477 160 16\r
Tiền Giang	03/05/2026	796442 87565 87425 21999 84605 66658 42064 63871 16873 88917 59386 72196 8145 1243 7332 4254 456 54\r
Kiên Giang	03/05/2026	070963 01799 39844 44903 22815 46944 69612 21823 91303 48432 75625 05564 7824 0008 8175 4458 317 82\r
Đà Lạt	03/05/2026	193203 71526 64637 58938 25566 08651 57738 45375 79879 60378 34678 65350 8403 1073 9156 7366 588 56\r
Hồ Chí Minh	02/05/2026	309079 33183 32154 84059 11994 90309 32266 49673 71468 49163 89227 16240 4750 5456 3625 5989 173 33\r
Long An	02/05/2026	874114 26130 39567 44078 70027 65944 92547 63460 49796 23526 05242 16089 3306 5053 4571 9294 927 08\r
Bình Phước	02/05/2026	023315 76815 30240 79879 92702 20523 67897 82301 08656 57185 92209 17526 3746 0542 9958 0803 905 15\r
Hậu Giang	02/05/2026	859805 37163 48110 42118 33911 78340 35351 43944 95674 32731 68314 30662 9529 3608 4165 4080 232 99\r
Vĩnh Long	01/05/2026	405967 33641 76121 32553 33534 28659 95047 34659 18091 34163 39642 49280 7884 6595 5413 1124 798 23\r
Bình Dương	01/05/2026	100230 74623 74276 09130 13467 15956 52825 89498 82925 55875 18832 65143 8311 8983 1706 9743 447 35\r
Trà Vinh	01/05/2026	841570 87427 21613 29868 70237 17002 35798 08118 22073 37816 88632 57757 4915 2399 6086 1754 818 70\r
Tây Ninh	30/04/2026	113144 11151 95022 53457 10465 26757 92836 46464 65010 92546 43322 91110 9650 8233 4464 3206 351 51\r
An Giang	30/04/2026	744577 95033 02034 48010 62218 67823 56471 62076 21524 96872 11513 66544 7984 0798 5723 5359 171 49\r
Bình Thuận	30/04/2026	561565 41402 21367 73418 74374 32583 23766 40289 18986 57966 94185 25919 9405 5882 1991 3997 628 10\r
Đồng Nai	29/04/2026	537291 35564 24477 93219 96817 00987 39319 77648 80988 81484 83891 38375 0826 9635 4958 5266 425 75\r
Cần Thơ	29/04/2026	211605 09083 54979 45608 68495 40648 81574 61891 29427 05855 35206 42002 5709 0556 7442 5759 099 86\r
Sóc Trăng	29/04/2026	381546 64163 29405 19736 69993 01787 65157 14231 19977 70846 30701 30124 7530 7126 0392 7156 781 53\r
Bến Tre	28/04/2026	339695 79981 08360 84361 71887 66227 96872 44426 47678 07933 73468 73907 4732 6467 5005 9810 682 85\r
Vũng Tàu	28/04/2026	718994 76443 05151 29181 25711 25501 88743 79773 98999 67768 68144 77928 9162 3696 4371 0199 860 92\r
Bạc Liêu	28/04/2026	885692 45081 69099 66580 87347 51950 49245 63469 03331 89321 50239 05512 4507 9668 5074 8928 556 95\r
Hồ Chí Minh	27/04/2026	688903 98027 50342 90296 67805 53813 90730 66480 16603 55852 66501 38544 4666 9558 5988 9171 284 69\r
Đồng Tháp	27/04/2026	809522 49884 42933 06127 15687 43782 67449 91667 78198 97930 71500 39190 3644 6989 2808 1903 760 91\r
Cà Mau	27/04/2026	867614 84531 06657 32161 80927 13683 27267 05869 76756 88845 08821 33486 7154 7308 9747 6604 519 79\r
Tiền Giang	26/04/2026	624586 12104 39183 12264 75394 46513 75659 22121 58654 52214 72716 67445 2193 3784 4396 9113 467 53\r
Kiên Giang	26/04/2026	360679 73462 69323 88802 19842 32298 97148 85112 26700 28907 88919 67300 5237 7346 3489 4885 199 90\r
Đà Lạt	26/04/2026	212947 00205 70052 67834 42550 93710 70087 88838 56244 57753 04087 76299 6728 5008 7887 4630 032 81\r
Hồ Chí Minh	25/04/2026	077465 96078 01164 61380 61983 97593 03627 24571 64204 06681 19002 11494 0906 7793 8407 7765 012 52\r
Long An	25/04/2026	638657 37008 63485 23154 77700 23946 00541 33585 60217 93830 75683 06036 3538 4896 0129 8091 520 53\r
Bình Phước	25/04/2026	548122 83121 47453 57201 57291 10948 25564 30252 14652 75699 56106 05420 1486 8626 1504 4153 341 12\r
Hậu Giang	25/04/2026	905491 25347 65776 59858 40346 44264 07023 18011 40086 18137 09157 47313 2430 4673 5304 3371 993 39\r
Vĩnh Long	24/04/2026	800023 94606 62889 33568 55148 78986 17174 66883 13349 36251 99565 48897 1898 3773 4468 1978 532 60\r
Bình Dương	24/04/2026	171287 26372 60390 85908 81491 45875 86320 73739 55889 48272 51128 85837 4848 0317 7798 6271 596 87\r
Trà Vinh	24/04/2026	966205 97557 91142 09282 95064 80272 66900 77376 36049 57644 82832 41636 1193 4898 1585 5083 232 05\r
Tây Ninh	23/04/2026	935353 11622 70605 95406 91158 88552 89140 15236 47880 98978 51507 65014 0805 9144 0402 1406 566 92\r
An Giang	23/04/2026	451670 64266 24467 21958 43276 91726 50019 41175 18728 53682 09965 71139 1911 6586 9668 7814 477 56\r
Bình Thuận	23/04/2026	154002 11452 45257 15378 34704 86510 49733 71460 66497 72513 56425 88616 1311 8230 9030 8743 078 31\r
Đồng Nai	22/04/2026	324163 27500 60119 25912 49031 00601 13683 68924 19490 72035 50903 42750 7138 0413 2568 7282 319 12\r
Cần Thơ	22/04/2026	657749 01514 53275 79867 75266 32985 90812 82176 29985 43047 36724 61571 0881 0031 2425 5942 175 50\r
Sóc Trăng	22/04/2026	953280 21495 05046 49036 49160 33761 22444 03266 65553 18398 00093 14299 2441 2676 2867 7353 642 00\r
Bến Tre	21/04/2026	650472 60594 03324 92392 03634 30508 97369 55020 16495 48545 49399 87027 9602 5770 3177 5750 639 53\r
Vũng Tàu	21/04/2026	548134 03546 10188 14192 71452 13956 77531 36307 75875 52997 30820 86560 1852 8110 9601 6870 902 17\r
Bạc Liêu	21/04/2026	196775 70440 50658 68525 15503 46274 88257 52771 53586 66624 12623 36536 0006 4769 0645 8240 251 26\r
Hồ Chí Minh	20/04/2026	327706 88290 15039 44955 36375 27846 12330 69104 08971 63241 88701 89037 3987 2864 9041 3530 280 12\r
Đồng Tháp	20/04/2026	789922 31239 63003 06168 05023 96690 25408 65465 79608 23595 00460 83899 9878 3984 0602 8027 182 18\r
Cà Mau	20/04/2026	050354 84704 78722 59799 88591 78548 97461 21978 26150 73982 61250 00280 4934 8930 7105 4205 219 53\r
Tiền Giang	19/04/2026	480644 81303 83257 73319 54837 04888 87316 75774 06253 08553 32491 65600 7262 3524 4809 0130 637 73\r
Kiên Giang	19/04/2026	220127 65347 36588 15001 84619 78479 59935 78817 78369 98695 57658 49712 3821 5011 0861 5855 984 22\r
Đà Lạt	19/04/2026	751465 11144 69037 55805 28953 43213 86251 80682 07980 39370 46881 59227 9669 6335 4971 5815 708 61\r
Hồ Chí Minh	18/04/2026	724556 84911 56465 76171 97094 71547 34467 89393 53714 88469 78345 75365 8156 5658 0084 1452 084 76\r
Long An	18/04/2026	479455 91258 88408 46521 14628 27902 84779 47267 21498 61030 19127 33296 2595 4873 8302 6012 618 77\r
Bình Phước	18/04/2026	424189 41528 98328 87652 95389 42914 08377 28087 00572 43855 76036 89407 5261 6590 0598 2610 651 68\r
Hậu Giang	18/04/2026	453092 15886 47477 55442 22912 14819 77793 45101 44424 03705 22874 61363 1579 6820 1740 4300 090 85\r
Vĩnh Long	17/04/2026	865023 88617 73106 01538 95878 89040 85015 13922 22402 68305 74606 47690 5108 1500 1363 0876 796 31\r
Bình Dương	17/04/2026	239260 87044 11982 70325 45281 66754 38220 16490 33570 62921 61797 51543 7964 9814 0735 5698 777 06\r
Trà Vinh	17/04/2026	771757 07462 17972 24933 15432 88729 46026 28870 11045 96291 09951 12580 7498 3774 9567 1669 018 41\r
Tây Ninh	16/04/2026	143754 86365 99825 13031 01689 59429 29698 28005 58949 07297 63735 53297 4947 7007 8466 3780 882 62\r
An Giang	16/04/2026	951018 32482 36951 50233 05819 26586 52301 36840 82592 09690 59402 97825 1555 9983 4485 7159 705 48\r
Bình Thuận	16/04/2026	672774 03687 56939 93660 96519 11151 81767 29152 46972 44659 32447 50028 7473 0505 5080 7042 109 36\r
Đồng Nai	15/04/2026	813676 50469 42443 82918 58618 07095 32979 21059 77274 96774 97255 66037 7307 6492 4564 1176 080 68\r
Cần Thơ	15/04/2026	854211 32126 75484 19580 18435 10315 65370 14475 89675 91407 12204 85353 2393 9679 1349 9018 094 31\r
Sóc Trăng	15/04/2026	457503 82548 53708 69265 33669 80650 78122 18251 76745 87027 39371 05112 9129 9763 1276 6075 977 36\r
Bến Tre	14/04/2026	966588 50733 25790 66305 65850 20511 69975 56808 15258 94879 85385 81455 8216 1155 4575 4068 094 10\r
Vũng Tàu	14/04/2026	433594 24529 58385 61574 64120 29930 60759 69430 05728 80690 42222 71762 8073 0654 2210 3858 324 31\r
Bạc Liêu	14/04/2026	499850 82272 79068 97499 30808 48893 83131 45675 82545 11814 72398 20865 0029 8160 1950 1938 937 45\r
Hồ Chí Minh	13/04/2026	310631 67501 16244 40232 94170 60684 75206 01217 87930 86044 99326 36303 4574 2648 1819 1455 454 48\r
Đồng Tháp	13/04/2026	699223 57620 57301 30122 18501 60780 39898 32050 51588 63416 81580 76784 9435 1180 5773 6743 186 14\r
Cà Mau	13/04/2026	133005 76997 16367 32318 39787 12651 64464 99711 94616 28220 92226 81430 9703 2444 9162 1487 314 50\r
Tiền Giang	12/04/2026	855718 31704 53400 92263 23547 35478 73010 09264 48554 08924 11464 35611 0077 8623 6946 2206 687 17\r
Kiên Giang	12/04/2026	487766 55795 69043 02532 50793 09575 55403 99744 16195 91407 60558 95269 1704 1575 6777 3518 668 46\r
Đà Lạt	12/04/2026	232073 14124 27357 74780 02212 06411 02552 26005 24556 34208 50308 89375 1154 3640 8178 3529 847 19\r
Hồ Chí Minh	11/04/2026	812128 03769 49980 88131 92072 85847 47603 70014 06504 85806 08922 42403 0244 2409 4086 0603 961 94\r
Long An	11/04/2026	169749 95720 62590 48129 09187 95907 06993 07698 06326 69201 73915 71161 4995 2667 0824 8151 348 34\r
Bình Phước	11/04/2026	307467 82303 53427 92988 23598 85563 66779 79122 90065 34446 34945 56430 4943 9193 7502 6112 520 31\r
Hậu Giang	11/04/2026	104888 95985 98847 23217 30055 99626 36758 94469 63000 17206 46346 94822 0354 5605 6638 8414 932 85\r
Vĩnh Long	10/04/2026	760016 38865 58034 51395 20138 30403 77546 98049 43262 35826 60658 02728 0900 2160 6750 6856 456 66\r
Bình Dương	10/04/2026	442450 41945 08655 34505 67258 28136 40690 72341 68432 78025 26204 91460 4379 2453 2458 2054 857 17\r
Trà Vinh	10/04/2026	046089 29275 07713 46909 58293 28880 03310 12256 52801 18187 72878 64323 9203 8367 4321 1235 210 72\r
Tây Ninh	09/04/2026	082665 94848 66580 38533 45065 46835 22488 43974 33448 24596 42600 81968 0167 1861 1325 1360 789 25\r
An Giang	09/04/2026	608342 54561 00436 10981 77913 63136 23370 08349 78955 41558 05723 75496 7747 9072 8612 5980 520 18\r
Bình Thuận	09/04/2026	252991 57010 46116 34910 97070 40873 49875 20581 52805 12292 82108 20891 1411 1938 0103 0134 320 85\r
Đồng Nai	08/04/2026	479004 68997 69464 83303 78179 87131 81108 08792 88766 76410 74289 53826 3167 8933 9652 8589 370 13\r
Cần Thơ	08/04/2026	203649 12347 67603 49345 27373 85644 68894 09144 44040 04670 70638 92636 3576 1636 4610 8977 922 91\r
Sóc Trăng	08/04/2026	578495 26228 37236 24103 58801 87263 79988 96881 10739 56991 15845 17178 0018 8394 2125 5076 318 21\r
Bến Tre	07/04/2026	583980 64753 06098 11450 43297 39514 14433 87935 36799 49237 11984 13379 2763 8047 8093 5389 133 18\r
Vũng Tàu	07/04/2026	349501 93740 18128 40555 84406 32279 29170 32062 27889 19745 72651 38389 5182 6747 4902 4119 041 25\r
Bạc Liêu	07/04/2026	261807 97603 40418 03611 44192 39532 62878 10802 24537 57311 45229 83482 1163 2935 9008 6577 172 84\r
Hồ Chí Minh	06/04/2026	099965 54463 32026 12368 05686 34908 00020 20847 51662 69966 72491 09031 6622 8287 5438 3394 131 97\r
Đồng Tháp	06/04/2026	800776 38611 76652 92717 17824 48500 03354 54607 73100 92285 32906 52108 9188 1279 5693 2401 958 46\r
Cà Mau	06/04/2026	829717 29815 66955 25169 02731 75884 69666 82373 66388 21456 76016 23557 9272 5831 6211 1141 332 45\r
Tiền Giang	05/04/2026	983920 06206 74641 72296 59876 12843 43256 16846 92007 16912 30352 86513 1653 1058 8074 2834 486 20\r
Kiên Giang	05/04/2026	627013 20483 14932 73715 47935 74537 84021 26577 13718 15070 91520 82963 5280 5839 1366 9022 064 15\r
Đà Lạt	05/04/2026	578584 06191 64056 73997 38103 51314 50044 95664 29578 29222 81931 88714 9406 7427 9946 5094 981 21\r
Hồ Chí Minh	04/04/2026	269291 47750 42151 91137 04261 61033 60231 23875 63987 81694 89314 09202 1216 8755 4925 4418 469 00\r
Long An	04/04/2026	004002 61067 71115 23731 37690 66258 02055 55755 31111 16342 16119 61869 0202 2135 1578 2642 412 27\r
Bình Phước	04/04/2026	577634 77823 79034 54586 58308 77568 52315 27217 42667 00489 83579 57593 6473 5955 8212 8060 685 59\r
Hậu Giang	04/04/2026	837532 47212 13948 79851 84257 79044 41844 10618 18023 38594 11376 60968 5900 0141 1680 9882 331 44\r
Vĩnh Long	03/04/2026	537949 63926 48391 38712 46099 84303 03395 07274 22649 86187 17730 51231 7864 7292 9883 9201 303 69\r
Bình Dương	03/04/2026	649057 43872 20443 15365 10270 47522 77972 47634 11813 33246 06832 68661 5048 7621 3871 2773 970 12\r
Trà Vinh	03/04/2026	854133 83034 69217 96426 63136 82882 47954 10562 17675 41538 69150 16133 6287 2056 6054 6199 060 83\r
Tây Ninh	02/04/2026	216674 28675 08423 77967 38143 70058 74606 37592 87269 16760 52438 09436 8347 5112 9051 5419 955 85\r
An Giang	02/04/2026	839409 93818 95225 14783 07970 28413 42860 58839 53616 75428 44602 02424 9645 8453 0001 1846 811 72\r
Bình Thuận	02/04/2026	404476 09231 68134 81929 75208 85586 72110 70239 09426 94119 05693 94791 1618 9390 0784 5515 623 97\r
Đồng Nai	01/04/2026	171742 13408 22934 25577 91309 53933 68670 38413 23075 49376 74506 02926 4872 2538 5750 0887 236 62\r
Cần Thơ	01/04/2026	379661 98731 33403 96823 82175 01659 48459 83707 06160 64127 64328 44401 1482 0047 7452 7566 555 15\r
Sóc Trăng	01/04/2026	248819 00946 73325 29449 58678 62786 21576 45235 68423 74436 59618 01674 9088 2987 0691 6840 162 03\r
Bến Tre	31/03/2026	940678 46428 53920 91016 08418 08270 44694 71392 97914 59385 04022 58812 4576 8942 6052 6008 015 20\r
Vũng Tàu	31/03/2026	813159 25697 65489 63545 09431 21074 39778 98132 65668 49327 30721 21112 5763 3412 5597 0347 524 67\r
Bạc Liêu	31/03/2026	412056 98041 84314 87283 61543 07130 72929 18325 99882 39527 68068 62056 9841 3031 5978 5315 050 97\r
Hồ Chí Minh	30/03/2026	090674 36207 11681 81621 25924 18340 21744 82159 44433 88325 75924 27104 1665 9168 7443 5705 678 77\r
Đồng Tháp	30/03/2026	790409 28801 30330 85456 77619 39247 38302 75338 01592 32901 74938 52791 3386 4412 7131 2602 848 82\r
Cà Mau	30/03/2026	072092 91529 72156 95572 43798 56922 60061 71211 88758 23697 17688 89310 9782 4147 4466 8353 767 85\r
Tiền Giang	29/03/2026	531689 83666 21991 31973 09940 67927 26947 63294 74209 41618 93994 14472 9081 1807 0601 6895 227 21\r
Kiên Giang	29/03/2026	085111 04778 61553 46130 33592 48943 81180 72190 30606 65874 35096 53475 7510 8944 5658 6256 828 91\r
Đà Lạt	29/03/2026	992334 03328 14436 93614 98111 49203 60677 37404 21428 29817 06409 81088 0104 2591 4139 2229 066 18\r
Hồ Chí Minh	28/03/2026	802879 54338 02798 31224 32016 66314 85208 34551 03793 92303 44172 42207 2858 9841 7911 7232 740 61\r
Long An	28/03/2026	988358 47282 90415 44048 03341 22760 97136 07580 85728 90388 94203 73240 9027 0018 5905 6740 009 93\r
Bình Phước	28/03/2026	988402 05092 99558 69650 67657 32406 48925 34495 82323 85203 11728 98309 2489 8234 4886 6886 919 70\r
Hậu Giang	28/03/2026	514346 12029 06069 10241 26616 30061 87439 55103 93812 44822 22484 36545 5639 8334 1160 8380 688 55\r
Vĩnh Long	27/03/2026	068687 27777 88745 24053 42937 83199 93454 95845 33636 10787 21131 78650 7395 4300 7403 4928 872 07\r
Bình Dương	27/03/2026	368571 09547 45341 56403 08175 34419 38336 99508 13994 23645 76878 05166 7294 6625 7015 3838 069 61\r
Trà Vinh	27/03/2026	718149 17552 34930 81159 00787 75828 99411 04631 41737 03207 29853 89651 3619 9675 5610 5945 267 27\r
Tây Ninh	26/03/2026	325649 51206 80309 91916 39915 42962 36545 73036 71137 39716 87460 19180 5796 6923 1125 9582 813 60\r
An Giang	26/03/2026	287738 78504 96714 11165 64970 35526 42717 79136 67840 06985 29175 15243 0032 8377 5407 1170 365 10\r
Bình Thuận	26/03/2026	236719 06225 59306 83825 86861 91599 79216 29561 80036 90164 33957 14539 1543 6823 9442 3140 690 59\r
Đồng Nai	25/03/2026	289206 19022 59470 71015 90862 18964 53584 16583 84298 02869 95579 43471 3445 3473 9130 8416 892 82\r
Cần Thơ	25/03/2026	789333 94304 92387 42575 14584 27030 78725 09909 48083 95899 17768 22258 9295 2975 0606 4631 515 38\r
Sóc Trăng	25/03/2026	919600 76840 48123 89832 18245 67489 33329 99460 04988 92550 32841 78029 4687 5091 0474 5476 396 71\r
Bến Tre	24/03/2026	830805 99664 30287 20881 40737 47462 85896 09457 66511 65664 63293 51471 0610 3770 7959 5898 205 91\r
Vũng Tàu	24/03/2026	833041 16555 16556 49521 90797 77200 96770 14916 57768 24567 44984 96247 8514 0821 1764 4768 839 58\r
Bạc Liêu	24/03/2026	961864 10985 38864 66541 24105 37950 15217 09477 01964 52048 53466 30384 6182 9610 9139 1075 201 21\r
Hồ Chí Minh	23/03/2026	354293 14280 98622 47229 98693 93351 26881 32335 76006 06949 85521 70663 7294 2086 9452 1405 928 04\r
Đồng Tháp	23/03/2026	900948 23149 68374 19039 88295 72539 90221 06453 48658 76181 12688 72511 2226 3489 5212 2039 436 95\r
Cà Mau	23/03/2026	470871 01147 87156 59748 15021 61828 10218 36774 37012 63009 79178 09269 6066 8918 8955 2412 382 26\r
Tiền Giang	22/03/2026	730985 38938 75105 31270 88910 87943 89094 30881 28638 21167 76001 16011 5051 7051 4296 5421 272 38\r
Kiên Giang	22/03/2026	370988 07753 38260 81094 27006 56048 74999 80753 55572 05618 62952 55086 6250 3609 1772 1794 899 03\r
Đà Lạt	22/03/2026	663779 14690 85128 75390 50065 42793 66067 23963 15318 39340 96707 33888 1036 7644 8419 7175 422 48\r
Hồ Chí Minh	21/03/2026	442630 74124 26741 82499 75361 12811 22202 83624 99769 41924 91769 98961 2836 6712 9303 1572 583 12\r
Long An	21/03/2026	080461 85853 61753 90809 12218 89748 87500 46407 63569 21998 29112 70089 3397 2559 5095 0674 652 61\r
Bình Phước	21/03/2026	992932 56353 48445 29395 17447 34882 95257 37539 99172 11476 18305 98566 4902 9261 8137 8446 724 99\r
Hậu Giang	21/03/2026	706384 15387 80942 13064 15046 37906 12394 73443 08285 55772 12676 90039 4397 1868 9214 3304 001 46\r
Vĩnh Long	20/03/2026	702348 87769 33066 65523 75401 99616 17188 68955 11779 32465 53215 58531 0526 1454 1053 8571 027 46\r
Bình Dương	20/03/2026	590662 05813 08953 34929 75727 63875 31172 91104 39363 24369 48458 86557 9906 2261 9921 3413 192 10\r
Trà Vinh	20/03/2026	780627 07085 55226 64135 18634 21590 93546 47415 40821 64339 85611 88576 1455 4120 7138 7277 771 32\r
Tây Ninh	19/03/2026	718807 90006 59635 50728 31419 61257 34570 45535 47488 47048 21746 63752 6363 2205 4472 3678 692 39\r
An Giang	19/03/2026	078349 60359 57317 81135 02241 84246 15338 68727 75770 64302 44021 43615 6831 8763 4267 5522 519 94\r
Bình Thuận	19/03/2026	745232 93802 79950 40756 70061 29832 55071 38395 12078 11466 00823 56708 6022 1786 6352 4632 136 77\r
Đồng Nai	18/03/2026	749600 14457 23117 32981 86322 24635 94660 86525 76430 86734 31356 33313 5763 2348 9555 9372 457 51\r
Cần Thơ	18/03/2026	218956 19582 92785 88407 46867 72389 90129 30671 41968 18710 69830 04822 1295 8627 6625 0784 126 31\r
Sóc Trăng	18/03/2026	499929 56143 03152 89221 86177 51587 30577 54034 27371 44474 68904 29747 6928 8119 8898 7833 995 55\r
Bến Tre	17/03/2026	980950 87273 73984 51095 58722 74585 44696 09469 08132 14443 88541 59019 9625 6575 7813 8030 677 10\r
Vũng Tàu	17/03/2026	182693 06296 25255 67934 80620 88888 74802 30340 58425 53079 59702 29539 7007 0917 8171 0577 336 24\r
Bạc Liêu	17/03/2026	609459 10529 10067 37203 69440 34267 79307 72165 07455 35034 14203 36341 0573 1794 1808 7629 388 98\r
Hồ Chí Minh	16/03/2026	087069 04475 38181 86877 32622 79607 33320 39226 40616 98643 60864 42851 2169 1142 4167 0095 426 01\r
Đồng Tháp	16/03/2026	525515 41635 30732 67921 21293 85346 64565 48924 61305 14368 06995 04311 1489 9461 9766 7162 150 13\r
Cà Mau	16/03/2026	616205 23669 12764 57745 95446 74865 08082 24370 72868 08690 87387 52028 0752 7586 8768 5316 321 73\r
Tiền Giang	15/03/2026	441767 64397 23980 88262 99903 33849 10852 21797 74696 99608 08778 81404 0416 8092 0992 7886 821 21\r
Kiên Giang	15/03/2026	861235 78674 60553 95656 22250 98637 13076 71607 26658 36315 11312 41257 7292 6105 0478 3657 979 49\r
Đà Lạt	15/03/2026	327936 86546 66309 90340 11227 54906 33437 59198 95556 81443 86186 51646 1992 2115 0100 2662 107 92\r
Hồ Chí Minh	14/03/2026	224652 51024 59586 14580 16092 54097 33200 88537 21265 71912 54625 87852 6867 2248 2827 3934 063 91\r
Long An	14/03/2026	878247 73842 78274 18607 17899 63319 15836 50273 24697 71591 55757 97624 7639 6798 1346 9983 924 19\r
Bình Phước	14/03/2026	647735 39346 73245 47659 46289 89724 95453 80483 83748 64075 49228 83723 5014 3751 7979 5974 380 17\r
Hậu Giang	14/03/2026	137568 18027 83033 78157 37232 53476 27334 71667 68938 13030 25644 05762 6870 3523 8700 5840 926 06\r
Vĩnh Long	13/03/2026	484908 79595 03543 04100 29891 72940 96265 16299 95038 88412 68592 73503 9874 3496 2732 5701 410 48\r
Bình Dương	13/03/2026	335488 63514 77026 03126 48990 29950 78709 92191 32236 84808 92273 18992 7949 5727 0289 4780 023 43\r
Trà Vinh	13/03/2026	042019 55903 46101 49321 91323 53333 14895 87437 83053 01929 75595 18088 3912 7665 3163 0879 352 30\r
Tây Ninh	12/03/2026	984983 48635 86386 28802 45236 42369 24726 01832 75432 29064 27756 80066 7547 6305 3274 3216 496 27\r
An Giang	12/03/2026	278802 01084 22145 59607 10134 17389 89785 17920 09389 87585 65236 54318 4884 7861 6700 9422 492 44\r
Bình Thuận	12/03/2026	533196 80221 36625 62754 62853 25364 08107 10604 17871 34104 17950 72022 0790 8553 0050 9695 145 05\r
Đồng Nai	11/03/2026	152825 64377 19425 70674 55637 57469 98944 26947 03006 25833 54997 10664 0388 6669 3892 8335 372 23\r
Cần Thơ	11/03/2026	530015 48154 38023 70768 39152 74087 66709 54451 55627 49684 32289 21525 6404 2566 0314 8916 476 56\r
Sóc Trăng	11/03/2026	940018 46529 92405 18756 93139 02059 95413 51116 47545 25525 07397 09418 4632 7901 4818 1470 623 50\r
Bến Tre	10/03/2026	351891 50757 95755 50840 75700 60355 58097 32669 17608 73259 43372 76404 2988 0319 7359 1747 377 93\r
Vũng Tàu	10/03/2026	189468 96907 63864 56274 48305 13405 46989 74321 40162 61222 60120 29158 3508 3677 4052 3872 245 11\r
Bạc Liêu	10/03/2026	927874 10959 79028 87298 39119 01399 37583 05613 91328 34101 24659 48594 0418 5792 0816 3796 583 37\r
Hồ Chí Minh	09/03/2026	808467 57647 10605 29881 11223 68708 98837 76683 55393 70855 62572 89214 6631 5746 0621 0819 373 58\r
Đồng Tháp	09/03/2026	686789 09424 01200 20443 94251 46345 16657 01782 03977 32894 26229 88621 5381 9424 3443 8520 622 93\r
Cà Mau	09/03/2026	348827 69167 01435 66978 11727 24724 01642 57186 49569 31294 24351 09591 2033 8215 9397 8996 572 90\r
Tiền Giang	08/03/2026	394704 99669 18164 39959 72222 93091 81305 33142 56602 44641 23853 36571 2493 0481 9519 2039 600 98\r
Kiên Giang	08/03/2026	322515 11109 42815 82001 73163 00659 90566 19606 71673 24818 71344 97627 8991 0812 3971 5818 470 98\r
Đà Lạt	08/03/2026	717274 01142 01085 82007 87011 54553 65438 96019 54562 49349 26429 62387 4748 3700 4782 3956 604 46\r
Hồ Chí Minh	07/03/2026	885734 67663 18235 77399 96726 41791 54328 47952 26670 05005 49741 44489 1502 5989 9992 1182 778 27\r
Long An	07/03/2026	843300 46583 29202 34091 76419 12436 79014 43019 75395 66111 46495 18046 3055 0556 4581 3412 740 49\r
Bình Phước	07/03/2026	639526 66115 35472 91308 23368 44079 03566 42480 74918 40630 28249 98242 0043 7224 2231 5396 028 45\r
Hậu Giang	07/03/2026	385752 15412 48644 63548 60833 19355 22340 58164 79586 15651 65586 87923 1074 3555 9662 4704 809 83\r
Vĩnh Long	06/03/2026	462757 27863 10330 10260 32590 96239 65781 70605 05747 25670 77770 97136 5198 6778 3671 2952 419 60\r
Bình Dương	06/03/2026	871999 34823 27829 78760 96129 14965 47945 55335 76429 72251 44278 01812 5082 0394 8272 5797 962 31\r
Trà Vinh	06/03/2026	696030 41796 67338 47221 81308 68612 74314 01233 31025 12986 49936 39032 7683 4063 7368 3466 027 45\r
Tây Ninh	05/03/2026	209734 90403 83767 57725 75304 78330 69138 95698 42960 06602 75093 13887 6782 6131 5674 9954 788 38\r
An Giang	05/03/2026	576705 70602 10279 28080 44632 41560 45877 91064 23269 61484 37925 62433 4580 3815 2835 0604 085 11\r
Bình Thuận	05/03/2026	728003 42041 25390 50437 73555 20087 36650 04752 55207 77473 30848 97011 8751 5638 4642 4489 980 70\r
Đồng Nai	04/03/2026	972486 32065 70222 38007 22633 88133 06249 18398 55612 59483 65773 30558 0697 3216 0161 7007 324 35\r
Cần Thơ	04/03/2026	064235 38170 93193 84523 67338 20374 22004 06871 56055 99828 40512 84682 8912 9793 4199 3440 483 61\r
Sóc Trăng	04/03/2026	797098 20113 88226 54122 05947 47166 35621 87794 64284 36771 07470 90557 4939 2474 1191 9656 277 11\r
Bến Tre	03/03/2026	327452 63059 91011 73632 69832 93707 31731 06874 76182 63950 60010 55336 6290 6563 1807 9909 304 67\r
Vũng Tàu	03/03/2026	339932 33041 14425 35506 84400 49623 58423 44473 55467 32469 12623 12255 2474 8674 6335 4428 076 50\r
Bạc Liêu	03/03/2026	263815 95475 68147 29102 04474 36475 88122 93749 55205 94773 73004 67369 7361 9050 7932 3606 378 28\r
Hồ Chí Minh	02/03/2026	733819 74571 81681 80957 29388 40070 41446 11299 50445 70658 14507 46630 6087 3104 4514 2937 945 38\r
Đồng Tháp	02/03/2026	712198 14852 87662 68290 44725 48178 43199 29807 20667 41522 06025 60175 9287 5452 6469 7717 093 49\r
Cà Mau	02/03/2026	253447 28927 77597 61189 33633 69809 06322 39974 54820 04875 46471 61439 7334 8037 5869 3628 083 47\r
Tiền Giang	01/03/2026	549308 27127 02700 09619 15745 65781 15546 25839 23093 70196 86700 58309 1836 1516 7742 8030 747 15\r
Kiên Giang	01/03/2026	124254 61589 82312 09543 45962 04852 96998 96625 59600 76271 79389 95622 1371 0820 7215 6476 728 11\r
Đà Lạt	01/03/2026	578627 62714 20838 24096 14693 57758 16015 92514 98779 64474 25414 18310 3273 0875 6477 2824 315 02\r
Hồ Chí Minh	28/02/2026	735820 90054 65724 23705 32087 79781 46624 36158 70135 24737 99205 32465 8571 7387 2639 0877 507 56\r
Long An	28/02/2026	782506 90537 20432 14035 38071 34199 09359 49190 79656 44686 30043 76337 8943 6704 9026 7216 905 39\r
Bình Phước	28/02/2026	681039 24593 37763 87748 89320 99964 18921 44927 08058 42299 35546 24633 7389 2651 2743 5179 217 17\r
Hậu Giang	28/02/2026	850371 47323 87415 01049 30680 96533 45074 41081 65803 13848 38168 53068 6348 5607 4750 0723 208 91\r
Vĩnh Long	27/02/2026	274039 84184 78246 76187 86076 21554 44423 01034 01245 51475 06433 29205 6496 3880 3094 8018 536 90\r
Bình Dương	27/02/2026	100227 31813 66611 86583 98845 78751 15974 00848 63010 53556 93790 28082 5539 4091 1748 6009 083 22\r
Trà Vinh	27/02/2026	332996 50921 48682 64548 98259 04157 24188 98450 37908 63500 31114 16463 0498 2382 6597 3670 163 25\r
Tây Ninh	26/02/2026	550102 84911 35353 79876 05913 72742 30401 86296 18815 95814 52000 54853 1445 9986 7657 2945 248 67\r
An Giang	26/02/2026	082226 56690 83421 53005 87093 04504 92815 90978 64394 73307 75472 44913 8976 3630 5931 6624 663 10\r
Bình Thuận	26/02/2026	557006 96710 86549 67028 15846 85808 39954 59405 57045 50617 91334 74019 2003 9022 7332 0352 773 01\r
Đồng Nai	25/02/2026	222731 58994 57724 48945 03233 51196 00553 43768 47439 36942 29641 56070 3252 0748 1359 3123 929 30\r
Cần Thơ	25/02/2026	630738 62708 43204 59622 64450 48890 48336 58848 11235 39269 03213 50686 2346 6642 9197 4610 058 54\r
Sóc Trăng	25/02/2026	046969 64669 56408 64286 51043 81824 13604 41794 41447 60726 79877 72582 6012 7192 8573 8397 956 45\r
Bến Tre	24/02/2026	404294 65439 47478 87918 56323 96915 83508 08062 16899 41707 19275 11250 3329 8369 2747 0610 912 12\r
Vũng Tàu	24/02/2026	329713 41768 26360 51500 88754 54689 01402 51378 71362 16454 13342 14108 5370 3774 5218 1986 267 44\r
Bạc Liêu	24/02/2026	010560 29153 88326 84446 77007 20372 58069 48397 31453 05518 61118 88698 6807 7799 8778 6593 840 41\r
Hồ Chí Minh	23/02/2026	278841 57517 02754 13701 57261 90433 07238 23456 02295 71619 60077 84886 0291 9929 5025 9713 645 95\r
Đồng Tháp	23/02/2026	586568 78965 11280 82199 17737 35507 81488 44958 62071 83255 71271 79058 2592 3452 5668 7096 061 89\r
Cà Mau	23/02/2026	792898 73641 51387 47785 71035 81135 61294 65993 37175 06657 43551 79786 2825 0833 7475 3364 840 90\r
Tiền Giang	22/02/2026	902794 29145 41037 70842 51224 41619 68464 28793 56459 89132 83044 63941 2038 6014 4192 3617 434 28\r
Kiên Giang	22/02/2026	690669 94874 51627 92777 16240 66133 65045 14720 27946 76912 35261 83885 7402 6246 2502 9206 925 79\r
Đà Lạt	22/02/2026	442074 69661 73342 17723 24376 44363 11463 08655 66499 34428 66352 79763 2588 3642 6291 1363 181 90\r
Hồ Chí Minh	21/02/2026	510389 30038 36066 69747 92806 20532 33437 28211 60872 35718 19771 85832 4359 2743 6054 3066 381 36\r
Long An	21/02/2026	387418 05476 85053 70522 69863 83033 25856 97466 67395 15445 43660 54172 1497 5861 6620 6579 087 22\r
Bình Phước	21/02/2026	838763 29658 82429 22841 36257 26804 48616 02080 30295 94232 35515 83263 9906 8590 4349 0784 871 73\r
Hậu Giang	21/02/2026	192482 22320 15722 10335 53906 43336 53606 91753 45369 76146 83337 67959 3724 2544 9499 0988 138 17\r
Vĩnh Long	20/02/2026	390675 74835 96724 45323 07030 57060 27645 82011 33469 28762 01654 50949 9664 8481 5935 2001 756 59\r
Bình Dương	20/02/2026	464716 81904 28698 14985 32757 61286 25105 11642 59070 50084 47078 87770 6132 4721 8240 6329 191 54\r
Trà Vinh	20/02/2026	190900 84570 59752 00849 37115 18186 51342 15099 08740 80509 47161 85704 5679 6259 4579 0821 225 67\r
Tây Ninh	19/02/2026	391019 67780 65549 10656 50842 81024 18432 00443 24801 44755 22103 28847 5061 6264 8140 1249 546 85\r
An Giang	19/02/2026	182393 71030 57957 89726 77463 78976 20267 08623 01915 20760 61125 40440 8147 8076 6869 7632 767 08\r
Bình Thuận	19/02/2026	691201 19564 85087 62650 75741 26123 12489 65274 38055 36326 31061 84793 4986 8586 2791 8978 163 22\r
Đồng Nai	18/02/2026	149483 96614 25777 91471 82346 34569 12518 16145 56900 35655 45329 92080 4806 9827 8104 1025 518 48\r
Cần Thơ	18/02/2026	618120 49185 85900 49802 95950 78430 17060 69689 82153 43412 11824 12702 4390 1667 4555 8366 961 85\r
Sóc Trăng	18/02/2026	203468 07637 47050 12682 52248 70232 32740 79097 20592 77133 22411 61134 6099 8716 8878 8743 480 42\r
Bến Tre	17/02/2026	078896 06550 09667 99692 89005 87895 15873 86550 22094 78026 49734 64010 5652 8775 8399 3564 403 82\r
Vũng Tàu	17/02/2026	144726 27701 78172 04729 09179 14754 39983 04248 38121 64787 21571 80137 9079 8638 3148 5310 696 56\r
Bạc Liêu	17/02/2026	749597 07667 27241 52720 84003 78995 05214 89600 85429 24598 96018 63345 4439 7982 0750 9121 404 61\r
Hồ Chí Minh	16/02/2026	549645 43599 60136 87772 25357 80087 49303 23821 74685 99390 56202 41859 8557 2093 3481 7926 542 72\r
Đồng Tháp	16/02/2026	289978 37305 95965 23562 53991 49837 61321 99940 71159 87316 64952 27120 5372 5234 7309 7371 288 67\r
Cà Mau	16/02/2026	828323 88682 73805 93875 74500 51943 33782 11176 82791 85755 18744 01129 3588 7032 1137 2178 410 83\r
Tiền Giang	15/02/2026	018529 68627 61790 68548 56853 28689 11260 94245 16591 87637 23569 20686 4206 0064 4405 8644 683 10\r
Kiên Giang	15/02/2026	914792 93530 31236 99511 03655 77447 10265 29382 11796 61153 82869 86812 7653 9606 5989 4371 398 54\r
Đà Lạt	15/02/2026	388356 64016 65401 15186 67228 58428 94319 73332 54194 78124 92406 03924 8528 9199 9945 8242 301 54\r
Hồ Chí Minh	14/02/2026	525331 14432 17015 09823 58407 02956 25577 05505 74856 27949 44869 51847 9330 3665 5670 3576 542 01\r
Long An	14/02/2026	546079 96356 32342 35014 24809 87551 23935 55170 58970 02579 90051 74563 6465 8333 2837 9931 173 44\r
Bình Phước	14/02/2026	850487 03377 59675 02302 47757 08114 75553 19626 30356 33618 66185 62050 2403 7273 4872 5819 110 17\r
Hậu Giang	14/02/2026	365053 17347 47579 44694 21736 35297 38525 81579 77426 10842 25564 75561 2924 8055 3158 1504 464 89\r
Vĩnh Long	13/02/2026	991084 42193 73112 00358 24118 25220 15418 40005 31751 82164 13210 72482 6150 2122 1698 8430 506 41\r
Bình Dương	13/02/2026	877704 41551 37653 79395 56999 25638 62973 47492 32568 86034 18109 31596 8228 5148 5602 7767 816 88\r
Trà Vinh	13/02/2026	759966 14092 15398 05108 87126 22539 90928 28279 51883 38097 73690 82175 5552 6470 3236 8465 233 34\r
Tây Ninh	12/02/2026	451294 80210 50448 74131 19066 34104 94845 70558 88389 46763 26875 01153 0423 6360 0991 6127 011 32\r
An Giang	12/02/2026	702266 14760 90960 63288 32469 39601 40987 07528 28050 77978 65514 33333 9346 1015 3312 6260 460 50\r
Bình Thuận	12/02/2026	492313 73523 09046 19103 65267 17143 93832 99383 02570 70425 40447 57671 8987 3581 7849 4065 449 76\r
Đồng Nai	11/02/2026	720732 81595 53832 35676 63484 61936 48066 77261 27102 64881 55791 96132 0262 2162 1661 4402 764 79\r
Cần Thơ	11/02/2026	827943 09641 38865 99112 02271 39323 76093 16188 39225 30214 50475 56795 2217 5479 3575 5226 773 34\r
Sóc Trăng	11/02/2026	725746 56135 64625 35887 92285 85436 57830 49130 64330 23814 38662 78603 4301 9355 8466 0945 294 32\r
Bến Tre	10/02/2026	961443 43525 03014 37360 28062 31551 19784 42631 49120 52364 64587 01454 6213 4461 3115 1505 391 73\r
Vũng Tàu	10/02/2026	879095 79083 66983 67585 84865 42339 48413 31010 73933 19015 89002 13391 2488 3929 5612 4729 658 33\r
Bạc Liêu	10/02/2026	841500 36875 75791 03775 06839 37988 05395 13545 98185 92750 12538 44822 7728 6339 6684 3213 956 73\r
Hồ Chí Minh	09/02/2026	329379 07066 38924 59619 39564 25909 87263 85373 07453 48266 51577 90342 5679 1201 9298 0818 386 17\r
Đồng Tháp	09/02/2026	132030 37364 19210 13048 93915 54102 02432 27210 87691 37793 92850 85762 4445 9441 7286 6297 866 74\r
Cà Mau	09/02/2026	291653 16032 94229 63217 99194 32036 80419 44880 08759 50749 16765 09328 6734 5055 9376 8582 180 68\r
Tiền Giang	08/02/2026	465579 62188 82163 79077 34305 38748 18611 05704 95561 61495 22403 28106 9824 5667 4420 6911 693 53\r
Kiên Giang	08/02/2026	090189 99702 89064 05827 80708 95718 62119 19952 99174 03797 92955 87108 5896 5122 8522 6669 459 37\r
Đà Lạt	08/02/2026	313412 90571 85015 43014 63142 33328 12515 39070 62092 39331 55117 39055 9597 5956 9778 0181 949 33\r
Hồ Chí Minh	07/02/2026	375271 02520 49204 85512 13813 21012 82554 18579 12909 09621 01404 58443 8262 7942 6156 9522 576 60\r
Long An	07/02/2026	006929 20520 30669 56110 06192 87870 34160 18576 42354 92631 96661 46576 6721 1468 5689 2612 776 29\r
Bình Phước	07/02/2026	455282 57087 77615 48406 79147 02052 21859 18115 38339 37215 68995 60733 7850 3976 8739 5382 609 24\r
Hậu Giang	07/02/2026	948791 76443 74490 67538 48179 53386 02262 75499 21354 59248 45587 73404 1969 9005 2453 0848 141 68\r
Vĩnh Long	06/02/2026	799293 28371 47045 69150 20304 95598 76122 69355 73428 73792 33414 72865 7819 2355 4559 7652 198 05\r
Bình Dương	06/02/2026	806337 59974 98495 15409 00818 46238 23306 18394 55711 89378 28965 98169 8853 6832 5599 7760 496 13\r
Trà Vinh	06/02/2026	546923 24014 58180 96776 28659 90601 01408 50659 44528 16890 38746 26517 2689 1984 4999 3962 074 38\r
Tây Ninh	05/02/2026	207446 92844 74108 49309 53319 65216 09604 33475 72139 25575 58736 18775 9677 3920 0884 7795 362 21\r
An Giang	05/02/2026	278360 76425 34921 61031 02681 25426 39629 25466 68972 30454 30130 43402 2170 8353 8361 7191 949 46\r
Bình Thuận	05/02/2026	650658 43753 79838 21309 23850 01698 89921 45065 96139 46898 17474 80239 6688 6609 2090 3474 819 76\r
Đồng Nai	04/02/2026	636838 39138 28044 06802 89882 35957 50694 31376 75268 75364 98142 10844 5920 4721 8548 9822 282 21\r
Cần Thơ	04/02/2026	983063 69364 79471 65295 06251 14424 76710 74747 47875 82565 30342 85713 3288 7464 3040 9682 531 76\r
Sóc Trăng	04/02/2026	543109 47947 26857 98601 18301 18656 91876 07222 44563 92229 58710 44527 3996 7405 8467 6441 593 68\r
Bến Tre	03/02/2026	671357 62092 32974 85392 33715 38075 50178 39055 24880 56236 54803 87540 7320 3799 4918 9621 409 83\r
Vũng Tàu	03/02/2026	994417 44265 02693 46416 00378 29914 09076 93684 47283 51625 04294 21164 4245 1580 0608 8895 149 13\r
Bạc Liêu	03/02/2026	097376 45561 69150 36646 30224 66795 29079 38616 25927 07852 07873 25340 9510 5233 5576 9289 485 92\r
Hồ Chí Minh	02/02/2026	170364 12986 77049 54900 55853 60798 27728 03389 37086 58734 34735 18716 9387 3100 9611 1509 290 19\r
Đồng Tháp	02/02/2026	171345 70280 33198 02752 15589 04151 24783 55700 71080 95594 86302 51032 9257 0429 6866 8004 727 64\r
Cà Mau	02/02/2026	713376 74415 63865 08703 34839 05970 52040 24258 96001 49545 98941 04603 5191 6839 5579 0099 715 94\r
Tiền Giang	01/02/2026	087891 38457 38452 45169 99656 43532 09198 21272 73691 90260 33358 41047 3318 6640 6649 6373 020 04\r
Kiên Giang	01/02/2026	061337 80282 34691 99258 75573 23873 51530 61857 80688 80547 96739 48152 9132 0675 3047 4589 605 85\r
Đà Lạt	01/02/2026	399829 01076 75667 30916 02818 34234 06924 86108 72897 99883 15007 69211 0967 9996 1547 3575 092 17\r
Hồ Chí Minh	31/01/2026	380305 95867 59790 98880 96060 33860 02563 18074 78726 56692 14620 75402 4845 2792 7750 2106 499 08\r
Long An	31/01/2026	362662 69201 98717 72448 92761 08639 89177 34502 38064 84633 92460 47218 0285 4739 7149 4036 528 37\r
Bình Phước	31/01/2026	392989 10388 42963 93155 53204 11699 22699 16905 20603 15497 54383 92359 7721 5891 8594 5691 716 51\r
Hậu Giang	31/01/2026	749006 12643 84101 49092 68105 65327 91736 11575 42798 91539 75429 27136 0370 9023 1601 7410 564 29\r
Vĩnh Long	30/01/2026	141867 53974 11773 69667 60031 55260 57320 13638 97125 42698 84541 44400 2580 0359 1577 4803 868 22\r
Bình Dương	30/01/2026	923320 70264 06744 71503 31848 92780 08501 03663 73681 67843 25171 77142 6621 2559 3450 9865 195 53\r
Trà Vinh	30/01/2026	524605 64435 48576 54306 09010 37579 38846 51075 12885 62363 10531 81452 2358 4518 1989 7897 354 80\r
Tây Ninh	29/01/2026	394184 72617 83970 40788 90447 39162 73566 71068 04822 43347 95481 39001 3447 3016 1095 9100 858 87\r
An Giang	29/01/2026	727511 05073 49962 50749 65783 99609 62348 81906 48084 34918 70270 78623 4069 3559 2240 6097 604 41\r
Bình Thuận	29/01/2026	902776 07503 60717 37173 73562 98380 04467 68600 50284 51260 10489 69497 4607 3453 4223 0281 149 82\r
Đồng Nai	28/01/2026	283857 31917 30973 56890 06162 97996 22366 43836 91584 15958 13247 25488 7677 2764 6450 3176 657 43\r
Cần Thơ	28/01/2026	073937 38970 23492 01732 57045 72944 78191 31828 51117 09600 11085 24778 9056 0437 2444 2728 925 04\r
Sóc Trăng	28/01/2026	973923 53048 89012 59616 10238 14742 38965 72228 30262 17622 45932 51347 3267 4199 0241 2400 869 93\r
Bến Tre	27/01/2026	999081 75394 45533 67624 01653 57314 09525 72405 97535 40692 50400 89649 0294 7231 3643 8721 695 99\r
Vũng Tàu	27/01/2026	319678 04227 26370 72387 26942 50994 61589 17397 01368 34501 64915 99538 3233 0901 3763 8145 886 22\r
Bạc Liêu	27/01/2026	195045 35099 45770 62120 21485 57356 41180 12098 91019 67221 39472 40177 4452 8292 8943 0723 329 49\r
Hồ Chí Minh	26/01/2026	683111 84622 56143 66334 84631 64498 65882 89492 57156 00989 49158 85259 6667 1412 8086 7271 180 20\r
Đồng Tháp	26/01/2026	180906 55538 31070 49892 56013 06204 23952 49076 11721 93900 00696 91792 7290 2462 9467 0605 943 57\r
Cà Mau	26/01/2026	701276 13984 84937 28164 26311 25313 93962 12958 78124 08681 06616 71688 3023 6894 0740 7624 717 29\r
Tiền Giang	25/01/2026	804455 43176 97959 71878 08928 63536 13164 19941 93874 15913 21453 97017 7037 1237 5859 0119 756 57\r
Kiên Giang	25/01/2026	641355 83950 96021 56207 07402 75657 63226 71207 72411 74503 69845 28967 3681 1733 0249 5246 745 23\r
Đà Lạt	25/01/2026	545527 31381 73478 14532 89609 63554 08923 70952 13448 39809 54965 25717 7942 9768 0940 6711 677 02\r
Hồ Chí Minh	24/01/2026	124594 42045 97035 49182 37256 75176 24962 96685 57997 23260 69342 59915 9544 9920 1815 3755 196 52\r
Long An	24/01/2026	145400 91392 82824 37435 68369 59352 53192 24300 18105 21869 99781 04275 1447 0225 0269 2506 427 34\r
Bình Phước	24/01/2026	450526 81564 52060 85308 80582 62733 00208 10028 89236 05248 42487 07608 0376 9803 8739 2279 578 22\r
Hậu Giang	24/01/2026	724047 31065 55045 12367 82358 39345 49428 83010 04246 44028 79716 57051 9643 6119 2795 5020 171 16\r
Vĩnh Long	23/01/2026	042663 06493 56424 37749 03479 50064 61120 64669 04422 39717 64023 43304 1225 2243 8362 6622 425 59\r
Bình Dương	23/01/2026	206511 81774 97765 15974 76669 42025 96994 28554 54939 37518 90460 22250 2528 7858 7412 0053 340 23\r
Trà Vinh	23/01/2026	860646 14377 34509 69588 90800 73253 72911 78758 82827 68817 81726 88283 4379 4274 7750 9737 923 00\r
Tây Ninh	22/01/2026	995451 02150 59715 00857 64315 98420 26143 00876 30981 46965 94624 33101 0454 4230 3040 8791 960 04\r
An Giang	22/01/2026	582586 33212 09900 24698 03599 27207 57906 32144 36398 80852 85497 88860 2579 3972 3649 6189 091 08\r
Bình Thuận	22/01/2026	626995 87980 47632 68883 64326 84223 21140 48973 53402 17814 11016 67087 6212 3396 5077 0913 419 02\r
Đồng Nai	21/01/2026	497994 21999 57603 13583 27888 06700 45274 06571 56669 86927 33043 17077 3653 9048 4938 9811 902 79\r
Cần Thơ	21/01/2026	259514 22569 50170 42035 97098 03246 09179 61380 53675 93543 35121 64889 6083 7034 4785 6988 903 21\r
Sóc Trăng	21/01/2026	200841 90201 36285 84230 02812 22864 19153 21905 19639 66263 91364 60927 5674 2686 8088 3029 071 05\r
Bến Tre	20/01/2026	300409 70044 35638 65890 98272 97818 70012 86537 97964 19460 63208 86545 7647 3185 4987 0971 308 01\r
Vũng Tàu	20/01/2026	305017 58157 27620 02258 38499 95120 28950 21496 04134 27149 45134 07046 5027 9266 6311 8860 421 11\r
Bạc Liêu	20/01/2026	787820 70893 91483 45418 90546 72741 91052 23957 79489 84471 57188 18532 5224 2475 5208 0627 433 21\r
Hồ Chí Minh	19/01/2026	647068 06214 44916 31109 03106 19004 07963 86871 79342 05287 87931 38293 7851 5905 1622 4660 978 47\r
Đồng Tháp	19/01/2026	786514 11850 81835 81677 71298 61007 82295 85228 63206 15120 06665 09537 6387 6268 6577 9646 870 94\r
Cà Mau	19/01/2026	786591 64948 90010 40414 39330 58731 11712 22112 04219 66912 47375 60331 2117 9463 5345 4946 857 27\r
Tiền Giang	18/01/2026	780984 42924 89563 67011 14503 05515 58681 53387 75779 54525 01661 47858 8031 2052 6703 3544 591 73\r
Kiên Giang	18/01/2026	442231 18137 62086 22053 50200 05559 33849 01913 63698 61237 81026 60323 1735 1570 0624 2314 692 74\r
Đà Lạt	18/01/2026	796131 26018 40775 47827 85640 58780 77214 05228 34636 32960 93253 57666 4672 8466 3881 4915 931 23\r
Hồ Chí Minh	17/01/2026	426716 57725 90984 19734 05551 33785 14080 47383 79628 89204 47032 20244 8577 2105 3278 6148 782 62\r
Long An	17/01/2026	384224 23770 72469 02861 31120 50898 17924 74476 46614 23060 16961 26082 0812 5597 6123 4680 385 74\r
Bình Phước	17/01/2026	053067 82579 47280 47352 12191 30452 59236 06769 02045 43858 46836 43890 5662 2351 8577 3130 763 30\r
Hậu Giang	17/01/2026	668477 98340 53761 95097 43840 12508 71882 36405 08790 73301 19983 64534 0190 0778 6205 2467 525 28\r
Vĩnh Long	16/01/2026	670271 87619 30287 49772 57266 48505 30979 05873 69379 98320 81299 53161 3940 6645 3162 3187 350 21\r
Bình Dương	16/01/2026	674308 74917 88816 80022 63443 35101 28593 59322 71705 93949 25727 36866 3903 5474 5006 1331 558 55\r
Trà Vinh	16/01/2026	962541 91562 26125 30353 43540 21272 91844 93586 83705 63410 98406 40133 1609 8269 3870 8063 079 51\r
Tây Ninh	15/01/2026	430028 68596 43391 28675 39990 60668 99649 85680 91591 68417 93562 96521 7394 9162 2620 7951 535 42\r
An Giang	15/01/2026	397902 62988 35895 09795 23495 69034 58524 25184 32964 83505 04232 34557 6539 8785 3704 2665 531 82\r
Bình Thuận	15/01/2026	346307 91728 98070 48166 22648 02545 65057 14887 56642 69289 15245 87126 2005 3244 7935 2939 114 23\r
Đồng Nai	14/01/2026	440871 68343 12289 33879 49927 24585 58787 20685 87083 84897 99256 90499 3559 2733 4889 6711 219 58\r
Cần Thơ	14/01/2026	420771 91081 94042 49674 41352 89614 93688 90280 79151 67378 22312 70575 3824 4348 3019 5813 925 66\r
Sóc Trăng	14/01/2026	311981 32614 26465 92949 02625 64342 55345 27549 05001 40246 23086 51857 4003 6808 2323 9452 263 69\r
Bến Tre	13/01/2026	668726 95355 17567 14059 34014 48814 03831 01283 08889 35333 03510 47868 5433 2831 4060 6558 957 07\r
Vũng Tàu	13/01/2026	833192 61803 59116 68954 26106 99484 77542 08002 28667 09308 44241 53169 8391 9537 1858 7126 791 18\r
Bạc Liêu	13/01/2026	075394 42354 75758 09775 59102 30754 09355 52224 90588 34443 33741 02234 9363 1227 3793 0569 283 21\r
Hồ Chí Minh	12/01/2026	965406 01618 70088 51462 68841 87444 62356 21501 31591 23054 22168 38719 6560 1295 6808 2651 249 12\r
Đồng Tháp	12/01/2026	941284 63550 01781 32140 44707 14656 74787 80283 93410 29433 00177 56442 5190 0179 7086 9641 399 35\r
Cà Mau	12/01/2026	677688 66744 86207 97255 73968 32699 38069 08866 60203 90242 81947 91213 8286 9121 9111 8604 040 07\r
Tiền Giang	11/01/2026	656152 80395 35229 56865 38009 73830 63593 88571 50959 77825 83486 60510 8700 2633 0567 7855 321 28\r
Kiên Giang	11/01/2026	820025 73519 07427 99829 09804 19895 96996 68624 98024 15056 19502 53014 3556 3888 3471 2091 001 14\r
Đà Lạt	11/01/2026	757054 97755 72232 91866 92590 23003 43778 83045 26443 09732 71565 26024 2515 9116 0248 3305 475 59\r
Hồ Chí Minh	10/01/2026	532887 79162 74095 49350 81999 42171 24769 06778 26597 30455 96135 32961 1006 8613 0815 2852 459 87\r
Long An	10/01/2026	718609 92269 38666 88984 42567 32432 61624 08405 35304 68797 10583 05376 1718 8540 6591 1067 251 77\r
Bình Phước	10/01/2026	728158 42267 82483 08373 71005 84783 18000 59031 25150 93831 19953 03205 4931 9119 5053 3518 903 08\r
Hậu Giang	10/01/2026	295158 84206 60144 87423 34231 94060 15368 32299 71680 94859 43972 77902 1476 3202 5015 1576 371 10\r
Vĩnh Long	09/01/2026	147642 49071 13918 03356 19292 88005 99376 70357 31995 01660 50469 56722 2697 6913 9915 5321 094 26\r
Bình Dương	09/01/2026	333280 43582 47738 41929 85621 45603 60733 46130 99005 25067 91502 00512 3346 0743 1027 8104 281 96\r
Trà Vinh	09/01/2026	461724 67350 33066 12956 95610 47642 11355 07995 88731 89458 53307 02437 3644 3050 2568 8454 485 06\r
Tây Ninh	08/01/2026	796976 07195 61828 43966 70431 12089 76012 18581 96935 94622 78268 49083 7318 7906 6648 8226 904 05\r
An Giang	08/01/2026	238511 99436 31116 78067 35027 17072 74385 13036 83262 46390 83190 00703 2088 3002 9049 0915 029 54\r
Bình Thuận	08/01/2026	232805 57089 98462 87302 30472 15269 37655 47673 83344 38198 82119 92918 4393 0898 3027 2206 428 28\r
Đồng Nai	07/01/2026	329529 65191 58121 91117 94540 09890 48871 98177 49451 30304 55970 51053 2585 0509 9531 8966 391 40\r
Cần Thơ	07/01/2026	894997 25418 39253 47171 88241 10753 79622 26599 50074 61275 46882 41902 4482 1777 2925 6758 431 01\r
Sóc Trăng	07/01/2026	205933 37110 61939 85255 65817 63279 36801 67445 89919 79098 52318 51255 1611 6244 2457 3988 045 23\r
Bến Tre	06/01/2026	704531 42970 40125 46868 83393 84483 00064 51692 67782 52657 19320 12605 3622 7771 3052 8263 897 71\r
Vũng Tàu	06/01/2026	905728 17204 59015 15602 21086 33920 93658 14897 36503 12801 56167 53413 8152 3154 0681 8741 532 58\r
Bạc Liêu	06/01/2026	417304 70180 83599 24417 60170 15138 06165 23382 95596 09015 58341 19671 2372 5814 9208 0901 271 53\r
Hồ Chí Minh	05/01/2026	823878 31660 39403 45422 38044 56004 83301 77760 82893 31532 84848 16286 4656 5655 4074 1888 666 26\r
Đồng Tháp	05/01/2026	247563 23430 10523 01587 83250 30067 17785 19439 22106 60895 44504 17408 6380 4755 6251 8451 036 19\r
Cà Mau	05/01/2026	734535 14191 28162 67897 39213 37310 33008 09632 25717 69844 84382 42460 4902 0118 6606 3526 167 31\r
Tiền Giang	04/01/2026	520288 93629 37765 69949 27434 10423 91208 13568 46186 95813 99257 61496 2920 6093 3117 2958 308 48\r
Kiên Giang	04/01/2026	600433 86746 33222 92934 24143 72151 91105 19481 41212 14085 46257 30098 6771 4389 0479 8847 935 25\r
Đà Lạt	04/01/2026	209071 67054 28641 64384 10466 73408 92339 53571 81190 69852 63000 18265 9616 3543 2115 8117 909 07\r
Hồ Chí Minh	03/01/2026	697243 99799 87559 25199 92810 12529 24093 14582 17580 61469 50215 42614 5349 5778 9190 1497 938 26\r
Long An	03/01/2026	587703 26975 73876 24557 96961 75958 67867 86767 06559 91611 30403 42819 8101 0719 4758 3810 016 93\r
Bình Phước	03/01/2026	375684 18817 83306 06858 43076 46483 75082 45957 14206 53858 69333 50067 3625 4252 0349 1528 462 24\r
Hậu Giang	03/01/2026	934947 44201 28408 97517 72851 03487 07096 74604 67855 95917 87196 27661 0302 6060 0257 7009 594 14\r
Vĩnh Long	02/01/2026	492364 73749 84993 61003 14821 86244 04321 68523 75369 74898 37092 86098 2154 4292 0160 6580 149 08\r
Bình Dương	02/01/2026	807141 73673 46858 43366 07774 28859 86203 17141 10882 82898 71038 70775 2337 2294 6099 3028 542 39\r
Trà Vinh	02/01/2026	195707 66002 91586 33378 78998 94198 31170 45253 13903 91346 88313 22705 3558 7842 9052 3027 956 89\r
Tây Ninh	01/01/2026	194340 89391 48933 19274 24651 34645 11385 52716 45902 31597 79295 52834 6957 5618 3957 8189 517 32\r
An Giang	01/01/2026	921013 21136 73173 98896 55005 35627 70407 97528 02210 61679 28577 61291 0531 1220 3062 0565 806 25\r
Bình Thuận	01/01/2026	796621 49121 30782 36369 25743 71053 20817 89905 12597 91389 26623 32621 9196 7406 9968 1974 099 74\r
Đồng Nai	31/12/2025	681981 01357 07480 58462 81728 51261 83782 01736 34044 76531 58876 76029 5597 3320 3808 1288 119 15\r
Cần Thơ	31/12/2025	215852 10235 84633 95358 10636 64177 75717 64534 13104 81772 14374 74022 6568 6449 8530 2867 522 99\r
Sóc Trăng	31/12/2025	878688 58111 87688 98207 39756 68121 22050 68552 15508 95646 35173 96242 0123 7230 2265 1071 176 04\r
Bến Tre	30/12/2025	131861 64364 15855 04631 50586 52586 06474 30017 01421 50307 19509 48521 9328 2833 9752 8819 896 37\r
Vũng Tàu	30/12/2025	039926 24314 87183 49647 01682 32184 50879 63565 40118 67282 25679 90406 8905 8781 5960 2454 716 20\r
Bạc Liêu	30/12/2025	292496 38337 27383 95689 46115 16028 80566 84867 11076 38659 91948 68151 8801 6695 1433 7579 889 30\r
Hồ Chí Minh	29/12/2025	956196 00385 63558 66419 95178 54188 27085 41946 56311 68045 08430 63757 0822 2342 9920 7476 677 44\r
Đồng Tháp	29/12/2025	151213 53599 64912 29273 75912 75244 62248 94134 04890 86411 42084 63089 9054 4983 7939 2426 518 01\r
Cà Mau	29/12/2025	852037 00930 90947 03343 86830 89670 32619 86311 55215 57377 54809 83101 6649 1172 9727 5243 454 38\r
Tiền Giang	28/12/2025	121031 73763 61112 41896 15973 72065 23790 67294 28902 20044 68104 57503 5920 0667 1615 7718 728 30\r
Kiên Giang	28/12/2025	760513 09779 45325 45954 29805 38834 59574 90294 00877 24846 11989 45385 3538 2488 9927 1892 289 02\r
Đà Lạt	28/12/2025	858099 33483 77472 18701 52425 60252 82053 09384 37707 14300 86056 29720 1285 8978 3686 1179 492 34\r
Hồ Chí Minh	27/12/2025	361780 94720 03367 54546 58196 04593 34624 32227 75113 03420 04285 33005 2573 4362 2546 8052 934 12\r
Long An	27/12/2025	152880 45617 47184 17441 73703 07418 61949 34804 72683 66122 73554 80275 6786 2391 8754 1576 707 28\r
Bình Phước	27/12/2025	030566 50996 95957 49682 39486 36725 05819 01046 78783 52532 18213 69709 1988 3196 2430 1938 677 31\r
Hậu Giang	27/12/2025	651783 77729 52093 31302 06178 31885 44700 47218 68851 39736 90884 84459 5590 0181 5909 2569 473 33\r
Vĩnh Long	26/12/2025	808138 09201 28379 11497 30955 03537 39330 37521 49685 69045 35795 06950 3718 3720 7977 2903 961 17\r
Bình Dương	26/12/2025	268832 19915 48280 70047 59073 94014 01879 00437 24230 38015 60581 03069 1040 3622 1831 8131 592 43\r
Trà Vinh	26/12/2025	240813 79939 07009 01987 44952 95752 12931 10396 39025 48880 67523 91583 9451 4120 0125 9384 980 31\r
Tây Ninh	25/12/2025	879863 60375 70465 49140 40020 45966 11577 04104 21587 20640 67989 36535 5735 3190 5237 8499 654 94\r
An Giang	25/12/2025	806057 47829 30230 76273 93275 99496 62975 70441 85713 62772 03503 92434 6961 1957 3887 3545 546 13\r
Bình Thuận	25/12/2025	195579 59222 85232 11626 78657 08304 38439 40165 71134 78696 80533 13454 7425 6088 8504 3787 832 26\r
Đồng Nai	24/12/2025	689327 54438 34279 02599 18100 34004 24974 29710 97949 35206 84755 14601 1209 4419 5583 6853 952 83\r
Cần Thơ	24/12/2025	667789 83883 10364 11762 41760 34248 91307 27803 02598 78612 27220 52686 8417 1273 8331 3655 687 85\r
Sóc Trăng	24/12/2025	349114 10055 73787 40985 62589 43551 22359 57032 96747 15907 63649 36793 8010 5417 3328 1308 811 06\r
Bến Tre	23/12/2025	592361 86497 06357 33183 25226 82666 71277 00920 23663 55209 31877 95202 2001 4442 4465 3282 079 37\r
Vũng Tàu	23/12/2025	267673 72271 86213 43692 02713 81351 31518 48523 53876 26354 43767 10208 6332 6496 6472 3153 247 71\r
Bạc Liêu	23/12/2025	716812 44034 54077 53620 56516 33465 77877 28043 14601 17950 63018 48267 0811 5887 2570 1946 477 65\r
Hồ Chí Minh	22/12/2025	547078 82922 98269 22369 14075 22938 08631 16584 87320 06099 49936 03325 4088 3822 4064 7603 228 38\r
Đồng Tháp	22/12/2025	641409 88060 51445 29069 94370 45458 93354 67444 25467 08106 32284 41130 2085 8756 4269 2029 122 47\r
Cà Mau	22/12/2025	337999 21004 00508 37336 38899 91517 22345 77192 68807 13422 48260 98773 4957 5728 0733 2873 611 18\r
Tiền Giang	21/12/2025	258278 78832 92321 01121 65040 37058 04810 92323 36745 91460 91756 69591 0732 7093 2390 0857 920 48\r
Kiên Giang	21/12/2025	717469 14396 46816 97291 50788 72857 14809 34312 24513 47011 71617 93084 3140 5593 4551 9386 033 41\r
Đà Lạt	21/12/2025	098985 45295 09763 79067 75339 23759 21327 89656 69863 87597 59479 75669 2186 0997 4579 8217 078 41\r
Hồ Chí Minh	20/12/2025	416435 84441 12676 49936 56590 38869 81517 68707 01946 84689 25185 48818 2081 1151 4385 5395 514 85\r
Long An	20/12/2025	642511 19210 93848 46315 82089 11676 19260 14067 41503 58888 18699 16467 9769 8510 7155 9774 403 58\r
Bình Phước	20/12/2025	728570 43409 56421 06065 38576 33045 01713 35538 22181 77859 86851 28718 4705 1880 9508 2962 239 69\r
Hậu Giang	20/12/2025	869516 00881 48191 59197 68716 10235 44619 60677 53781 12972 99420 09647 5067 1514 3619 4861 039 59\r
Vĩnh Long	19/12/2025	665848 52307 38186 74763 18917 03356 00395 06242 44790 11912 32332 00200 1648 5696 1411 2658 085 50\r
Bình Dương	19/12/2025	520685 50857 92163 98813 06033 52136 15597 74052 05878 21635 43383 76432 0912 4715 3908 8569 368 35\r
Trà Vinh	19/12/2025	021256 12582 54674 57897 03903 07590 23898 53045 24462 83791 54643 36521 1933 9308 4116 8580 714 19\r
Tây Ninh	18/12/2025	393219 12321 26959 67441 61262 69359 89344 63638 19815 88395 74281 60648 0184 1426 9486 9271 624 73\r
An Giang	18/12/2025	731357 78913 99758 81193 53489 24234 94569 43388 26706 18786 20536 73172 6228 1258 7057 6261 683 39\r
Bình Thuận	18/12/2025	770983 73901 44034 77623 50701 37746 86930 66865 59606 36901 35435 04129 0714 5309 3853 9025 672 03\r
Đồng Nai	17/12/2025	678482 20045 48413 81759 46746 91804 47867 76598 21576 48610 66816 38382 7288 4238 4325 2592 085 90\r
Cần Thơ	17/12/2025	746597 22517 78765 89186 25491 81962 42756 29235 63489 45403 02649 72647 2481 2045 0253 9780 630 05\r
Sóc Trăng	17/12/2025	401557 29896 81139 26135 29826 68037 22994 59528 10963 88376 42303 89264 6096 7333 6438 2467 092 90\r
Bến Tre	16/12/2025	001628 54914 76082 99427 03661 86571 13435 45128 81081 58920 24075 99500 5690 6064 9031 7094 363 29\r
Vũng Tàu	16/12/2025	179987 81150 55956 31968 76847 73062 75873 33616 49065 38653 06668 89042 9360 2263 0885 8893 681 10\r
Bạc Liêu	16/12/2025	824535 99757 91855 16339 93945 51608 54189 23928 88705 18216 07876 68640 7410 5557 3141 5796 562 63\r
Hồ Chí Minh	15/12/2025	548565 93742 67769 62582 43555 47282 65921 01425 36202 74022 41228 05960 6278 1452 3774 6673 869 94\r
Đồng Tháp	15/12/2025	606708 47982 47280 68950 35746 83051 41469 66680 35498 75591 03430 65529 7599 9323 6756 7516 208 83\r
Cà Mau	15/12/2025	989912 77350 30559 47125 30563 90962 35666 45918 45514 83216 05689 71925 4230 1229 2602 4444 745 67\r
Tiền Giang	14/12/2025	363164 63180 18303 17381 42341 04013 58147 15214 02872 15177 18122 26449 9100 6223 1492 4845 359 69\r
Kiên Giang	14/12/2025	831747 34966 20829 82876 41073 23046 57642 75842 28843 13571 17969 08414 6364 2094 9849 0564 761 89\r
Đà Lạt	14/12/2025	196484 48260 24333 34166 06976 97037 30323 68192 46913 74517 57639 12890 9268 1603 1366 4069 065 75\r
Hồ Chí Minh	13/12/2025	484938 86862 98842 57691 57062 92614 93305 02028 33132 14634 19823 29646 4308 6193 4495 9944 127 52\r
Long An	13/12/2025	654759 05115 36713 33709 52560 45226 35089 18681 23133 49862 07218 17528 9846 4046 1312 5826 658 87\r
Bình Phước	13/12/2025	480597 08652 12991 72622 54058 59833 28140 48590 78838 24578 24283 35079 8824 9864 3377 4574 810 99\r
Hậu Giang	13/12/2025	766129 03617 74292 49491 41572 34249 94151 50882 77985 57595 61432 52621 8420 2968 9290 9126 520 49\r
Vĩnh Long	12/12/2025	427140 60340 71620 13403 53969 33275 60510 96275 37853 93830 17238 49960 2602 8104 6744 8027 879 93\r
Bình Dương	12/12/2025	416982 62011 49575 18538 89880 62579 59609 71477 20636 50887 14486 33471 7743 7086 1284 1934 551 33\r
Trà Vinh	12/12/2025	608893 32142 57804 12722 30430 14232 30831 73703 81080 99176 48995 06928 9922 7674 2258 4824 991 42\r
Tây Ninh	11/12/2025	473447 95144 39363 36796 68783 07774 56162 31615 59322 47378 46021 06351 9133 2489 8813 5621 385 49\r
An Giang	11/12/2025	204056 87321 39945 62816 37388 90526 82310 29150 59584 27368 70895 19595 3401 8470 3450 2773 090 63\r
Bình Thuận	11/12/2025	733927 34334 41708 41460 22259 65447 34604 55049 54086 53455 54031 09739 2390 6429 7707 4496 353 38\r
Đồng Nai	10/12/2025	048568 69756 22643 27638 35654 96397 05333 84227 29346 77088 39933 58592 4409 0868 0263 8233 353 87\r
Cần Thơ	10/12/2025	375492 05173 88682 45313 55483 75232 37632 68479 60203 35922 92009 46574 3256 3626 2263 7933 014 20\r
Sóc Trăng	10/12/2025	331026 51467 57536 69734 74574 72379 56291 16661 85214 78348 46428 43556 6803 0883 2776 4455 206 12\r
Bến Tre	09/12/2025	257886 66629 19021 88956 41090 80913 38907 26387 67954 66624 48629 57046 4661 2022 6053 3533 454 14\r
Vũng Tàu	09/12/2025	000248 21445 18343 96313 70513 85030 84161 74351 74252 70990 28847 15700 6328 7325 9590 1251 536 98\r
Bạc Liêu	09/12/2025	086267 02302 50302 32723 36163 31514 35197 53993 66991 32670 30701 81357 0162 5367 6560 7334 183 55\r
Hồ Chí Minh	08/12/2025	287570 44980 01845 46931 28064 74011 66082 05573 31367 93104 83196 75884 8874 8027 5483 5044 696 90\r
Đồng Tháp	08/12/2025	652680 70230 84172 21575 41760 22029 40207 66111 01822 01096 19553 33584 9897 3192 4110 1667 351 11\r
Cà Mau	08/12/2025	761911 17162 01256 57077 57855 64348 55099 95120 52080 05158 92468 59874 4753 6525 0189 6563 222 00\r
Tiền Giang	07/12/2025	828424 41287 91075 82404 41676 62056 60898 28531 81552 14428 61431 92247 8830 5778 4743 0645 983 79\r
Kiên Giang	07/12/2025	485425 32166 27638 18978 07900 97884 57550 73704 38744 71831 91393 05177 4403 7438 2084 0730 572 76\r
Đà Lạt	07/12/2025	686518 67856 66305 75528 66750 73780 27519 02833 74257 96787 52492 93327 2063 4516 9321 0618 940 12\r
Hồ Chí Minh	06/12/2025	433544 10927 49205 91522 46552 96361 63388 07789 62442 09852 63564 84985 4374 9323 0546 8837 655 79\r
Long An	06/12/2025	277030 97759 56181 79639 35850 69780 39402 77533 08529 89536 26170 50649 3731 6736 5983 2394 537 60\r
Bình Phước	06/12/2025	005458 99250 56508 27905 96832 49918 33180 59395 26679 57801 94505 48572 1978 9301 0808 4277 375 77\r
Hậu Giang	06/12/2025	373212 88575 37176 71858 43152 63535 53955 31087 97651 74166 96837 57015 5218 7121 6432 6120 727 23\r
Vĩnh Long	05/12/2025	250816 74269 42492 71467 18140 85835 75797 85389 87990 93540 39757 06775 3938 5945 5037 6279 652 18\r
Bình Dương	05/12/2025	073147 29009 19816 89916 59590 89421 92381 24918 83207 42939 93200 44192 1300 2087 1123 4524 311 41\r
Trà Vinh	05/12/2025	451385 84044 99460 38106 50174 53108 69701 26881 88642 72233 14447 64744 6764 7731 8129 9670 726 71\r
Tây Ninh	04/12/2025	718588 09877 09840 19804 19499 63282 17254 05044 63941 32497 66124 87866 1130 3250 2013 0909 153 56\r
An Giang	04/12/2025	315083 52964 78060 56338 03788 66950 99684 54433 68168 60630 93574 99758 3135 1899 4899 9046 625 07\r
Bình Thuận	04/12/2025	085375 89522 16297 05054 36495 97878 79964 38018 03509 80517 08146 45106 2644 0972 2289 3825 404 56\r
Đồng Nai	03/12/2025	793394 53973 58689 31785 42090 89812 02711 91772 72388 43133 84415 98855 3545 8117 9808 7743 619 23\r
Cần Thơ	03/12/2025	452169 17220 35750 94011 84231 46411 06551 14226 16779 55838 76423 79700 5212 1679 5713 0477 184 97\r
Sóc Trăng	03/12/2025	912561 28390 03882 78249 40821 22261 83252 44769 24500 47605 14343 96350 1158 1486 8716 2693 314 58\r
Bến Tre	02/12/2025	419478 08294 89334 09355 11568 73368 76305 15255 16804 91033 78225 94690 1243 6466 5584 3575 736 89\r
Vũng Tàu	02/12/2025	259197 77648 82551 41059 76445 33986 29914 65937 98702 13397 53077 97295 9794 1803 8966 5461 323 92\r
Bạc Liêu	02/12/2025	501721 67554 67344 61207 85738 79941 03846 13069 61572 36903 12453 35331 0273 5165 3629 3999 366 40\r
Hồ Chí Minh	01/12/2025	953117 78216 78938 49628 67616 73680 48005 52438 09679 83079 06287 76951 9501 0371 3047 4539 022 04\r
Đồng Tháp	01/12/2025	569537 11846 44424 00338 40595 61652 37065 46123 67132 36495 95607 47145 7404 3680 6897 8109 412 35\r
Cà Mau	01/12/2025	986053 58672 91512 53706 59826 06834 60560 78573 64259 28301 78537 36015 0335 2883 3414 1482 872 02\r
Tiền Giang	30/11/2025	198430 01891 67701 29068 06539 80907 55795 94077 12671 24449 05789 66354 6817 0004 1270 9789 579 99\r
Kiên Giang	30/11/2025	002911 21496 82683 39950 24788 96596 70305 39947 58566 34124 80104 73944 3946 7277 1521 0407 653 67\r
Đà Lạt	30/11/2025	573077 87993 81137 61025 97098 10616 46905 81174 16857 47751 03911 32089 3123 0267 4804 3534 531 12\r
Hồ Chí Minh	29/11/2025	758818 39746 54246 06296 95145 32538 50143 36355 75157 21426 89485 71736 3236 8433 1322 9044 037 62\r
Long An	29/11/2025	407956 51868 13209 13328 50673 79117 61315 51372 15473 65904 85980 39069 0633 7450 4545 1935 551 49\r
Bình Phước	29/11/2025	885250 49301 82046 40486 85811 56115 64292 06665 17547 80952 89558 81532 7829 9895 2515 3336 072 61\r
Hậu Giang	29/11/2025	922599 47458 87685 52321 35182 59325 64255 07649 78529 35614 03278 62851 3116 7211 2243 0383 429 26\r
Vĩnh Long	28/11/2025	138537 75669 31121 80813 77891 42147 78058 21672 61448 84401 74189 83680 6377 8772 3525 8891 300 30\r
Bình Dương	28/11/2025	192476 07185 55796 08643 72254 78223 39833 32650 13554 69185 66317 03452 8346 9422 7298 6299 913 01\r
Trà Vinh	28/11/2025	240446 47489 47732 60999 68630 25071 62403 62484 93662 55655 12361 58598 8283 5530 4123 4152 032 95\r
Tây Ninh	27/11/2025	291515 93471 40151 43650 57903 34971 02754 17075 40372 22908 08117 70082 1225 7156 3572 5933 729 36\r
An Giang	27/11/2025	458408 18200 86946 01123 44349 22288 23164 53427 51813 15723 27675 70174 6595 3404 0340 3426 027 92\r
Bình Thuận	27/11/2025	310717 33245 07130 32190 72717 23371 03066 37099 39659 15654 87583 20407 1436 9613 9361 6288 015 33\r
Đồng Nai	26/11/2025	625018 45737 99924 92028 21808 01948 13566 42182 35554 08748 11868 91402 5604 7707 6711 7785 392 70\r
Cần Thơ	26/11/2025	693348 63238 10499 41408 83683 08958 61749 14800 21921 70597 86952 38763 6669 7712 8144 0611 434 09\r
Sóc Trăng	26/11/2025	133228 96775 76630 57267 28666 51935 26428 45372 14813 28371 00141 91187 6003 0717 0487 9723 918 24\r
Bến Tre	25/11/2025	878960 18227 28662 68325 97674 76209 71412 44203 80434 08903 48825 17856 9891 2734 9229 1962 845 08\r
Vũng Tàu	25/11/2025	017030 14093 90120 88478 52120 91909 34755 05287 58595 75737 71356 89167 4639 9781 1002 5649 894 75\r
Bạc Liêu	25/11/2025	525400 75783 00029 56303 09000 78348 87227 95755 96345 86739 37091 67561 9598 3345 0240 2169 407 80\r
Hồ Chí Minh	24/11/2025	392530 25908 39707 16799 21296 53034 40706 25967 60778 06927 46105 81598 2788 8901 1401 3332 855 40\r
Đồng Tháp	24/11/2025	566862 66193 65950 37474 06404 12848 00813 69376 70511 01459 94308 04379 4326 8473 0907 9291 044 52\r
Cà Mau	24/11/2025	954123 40159 02727 34833 27899 36844 22100 22855 33327 18430 76235 27795 0731 6590 6888 4374 794 36\r
Tiền Giang	23/11/2025	996357 39908 96194 96184 33447 72163 20982 12059 55617 65098 94422 64949 7245 3602 7327 2892 068 33\r
Kiên Giang	23/11/2025	662106 83313 47962 74203 70397 93254 03026 55271 41119 58359 10568 56857 6939 8879 7071 0927 822 26\r
Đà Lạt	23/11/2025	346573 80845 34749 10819 71771 98411 03919 06294 77797 87901 14801 47285 7099 0165 0935 4730 559 03\r
Hồ Chí Minh	22/11/2025	364551 29518 87729 86235 29185 43839 70628 01994 72036 34890 27117 66347 0213 3034 1925 5293 441 48\r
Long An	22/11/2025	480092 63271 25691 06406 17965 71769 47079 92856 14841 10568 87423 47753 7330 6732 8060 7433 924 23\r
Bình Phước	22/11/2025	144416 81364 23793 93188 66418 00903 46456 93885 97211 51643 62708 31559 6030 6023 2463 5767 180 44\r
Hậu Giang	22/11/2025	387298 14297 33205 34570 69582 36969 58462 55508 18431 25806 65691 25632 5536 1568 7458 0363 961 87\r
Vĩnh Long	21/11/2025	361844 73791 04507 99929 48324 99043 17780 78926 43651 44542 30352 31509 7855 5098 7769 8142 316 31\r
Bình Dương	21/11/2025	307676 55506 93046 17605 82729 84319 76821 67312 13727 31868 91792 76945 8068 9004 0304 1890 885 38\r
Trà Vinh	21/11/2025	983640 45961 27907 61283 14211 12540 17546 48469 42950 80966 84475 75260 3081 1252 1494 9293 217 13\r
Tây Ninh	20/11/2025	355957 21896 51853 55657 08825 81004 29425 09224 23053 47104 88586 47319 8170 7692 8703 0880 748 91\r
An Giang	20/11/2025	013309 03817 43444 50725 81474 50071 97982 65935 48908 58621 44392 04362 8210 5986 8366 1831 769 10\r
Bình Thuận	20/11/2025	289313 70632 18546 04898 28660 77990 54268 21090 14797 65002 63347 99617 4712 6691 5322 6210 280 70\r
Đồng Nai	19/11/2025	300167 14332 03936 69553 31723 97617 54133 96888 41173 98427 32652 05180 1874 8170 4154 9871 502 53\r
Cần Thơ	19/11/2025	646960 31978 24485 34068 81794 27967 85080 66221 05576 79496 31437 42798 5255 4352 5574 7489 245 38\r
Sóc Trăng	19/11/2025	380451 26970 57832 76817 12755 23494 98624 45390 00280 34581 22722 23061 3158 6810 1413 2149 973 45\r
Bến Tre	18/11/2025	791950 05365 52556 83970 67632 78288 66218 49699 73806 00776 79661 91556 7811 4395 0478 8472 611 53\r
Vũng Tàu	18/11/2025	678017 75165 20937 61784 50041 43557 73093 72270 19295 75448 51277 20344 9653 6344 2707 4196 327 89\r
Bạc Liêu	18/11/2025	866098 25146 47316 06233 17823 14562 64416 16143 58040 95803 32716 14944 0069 4741 2548 2086 035 01\r
Hồ Chí Minh	17/11/2025	998227 29546 56216 72931 46224 47136 36090 96461 33717 63317 10134 85124 3065 0430 4787 1780 054 62\r
Đồng Tháp	17/11/2025	318592 55674 98724 87477 74202 21182 07946 74543 91621 58504 92792 14608 4808 3558 8256 5985 817 05\r
Cà Mau	17/11/2025	794185 51321 17751 09713 92359 30706 66270 78489 39996 92562 62232 73911 0077 0319 1645 0733 176 09\r
Tiền Giang	16/11/2025	840922 88113 52722 76077 96974 58393 54166 53837 62206 72043 39192 49880 3865 6073 0105 7655 888 38\r
Kiên Giang	16/11/2025	709244 54269 05828 85476 78911 03089 21479 59926 32431 91694 54527 15471 4404 9668 0822 0800 400 27\r
Đà Lạt	16/11/2025	401727 02078 35668 03032 11011 04701 80868 89087 42230 52034 16377 40867 6033 9109 0453 0963 922 09\r
Hồ Chí Minh	15/11/2025	112150 89284 30942 03348 18920 13800 42129 33293 00272 44269 07364 26540 6402 5887 2716 3269 904 37\r
Long An	15/11/2025	773402 87605 86417 42651 83861 67766 08392 20457 57760 49691 91795 89484 8587 1318 9870 7472 160 08\r
Bình Phước	15/11/2025	725061 38838 43548 52675 96496 33643 76450 17924 93323 93785 23000 48267 7163 6134 7726 1871 292 83\r
Hậu Giang	15/11/2025	530705 74070 60162 09603 49436 97443 63752 52527 19547 70264 62968 91888 8976 1390 2598 9624 208 45\r
Vĩnh Long	14/11/2025	231890 26721 69656 08197 74894 58014 25753 32122 85182 56030 92570 29102 7343 3792 3032 2597 588 58\r
Bình Dương	14/11/2025	411356 25629 30483 67347 77553 35044 08234 64708 43322 92690 30128 72381 2876 5807 3691 3589 386 94\r
Trà Vinh	14/11/2025	247902 56549 34097 95485 41549 43516 02590 47311 12127 04439 83858 10326 7124 0773 9520 7179 655 46\r
Tây Ninh	13/11/2025	132673 66322 03841 86565 72963 49987 82917 40694 27333 21970 78694 90430 7122 9515 2694 3761 517 51\r
An Giang	13/11/2025	873614 84502 20984 87148 06606 88255 66412 46098 18074 08175 91122 28720 6946 3577 3888 2113 267 82\r
Bình Thuận	13/11/2025	119695 07215 10324 04632 44005 52607 24388 06375 21892 73689 93235 48807 6664 9056 0620 9717 655 90\r
Đồng Nai	12/11/2025	119349 51959 39891 82789 06822 73541 64682 55871 76478 90383 17354 11202 0246 3719 3173 0010 367 52\r
Cần Thơ	12/11/2025	703947 53461 97990 97723 29271 24392 98395 59247 51921 84242 39187 61855 3576 6671 7106 4660 044 31\r
Sóc Trăng	12/11/2025	610231 11047 06713 73348 41375 22155 09320 77966 19206 66753 48115 03954 5130 9577 4076 0066 801 04\r
Bến Tre	11/11/2025	238329 79069 75912 77420 91328 84878 77490 77295 45381 08811 66854 11229 1578 7994 0220 8870 426 37\r
Vũng Tàu	11/11/2025	627072 48370 01936 46910 64865 24025 82183 38095 63821 30274 72598 22963 1562 5744 1643 8157 544 65\r
Bạc Liêu	11/11/2025	330256 02145 78466 91304 37374 72126 72471 61695 77782 89002 61907 62019 4024 2540 8935 2115 471 85\r
Hồ Chí Minh	10/11/2025	837009 92841 95173 69540 05881 14231 44852 29190 50078 37646 06789 30671 5064 7264 9320 1812 157 86\r
Đồng Tháp	10/11/2025	643667 29113 08033 73177 51137 68253 07551 92488 54897 07416 78843 57313 4279 2174 5130 8752 364 79\r
Cà Mau	10/11/2025	166946 96953 58501 57286 80196 36862 95515 86785 71137 98184 46922 78001 6290 6156 5694 9335 326 87\r
Tiền Giang	09/11/2025	114282 90833 05722 13842 96772 86299 71705 57094 01101 47149 51758 69317 5337 5966 2164 2120 152 19\r
Kiên Giang	09/11/2025	507380 42540 38483 12916 89343 11514 60467 29018 46915 46549 84241 60488 6441 1879 5115 4575 049 43\r
Đà Lạt	09/11/2025	872426 13648 00054 23876 64242 53490 38849 16755 22697 91014 18740 66252 2878 3854 2891 1418 786 86\r
Hồ Chí Minh	08/11/2025	862490 94006 40482 64684 21283 25788 51042 52836 98279 56935 24928 60642 5006 6157 4480 4282 167 18\r
Long An	08/11/2025	336387 91495 42024 31346 34010 89017 13579 58005 53781 45610 17163 67930 2797 4119 2071 6718 029 25\r
Bình Phước	08/11/2025	476053 65912 37511 34321 81033 03561 27412 58945 93964 93041 65009 79893 9944 5178 3749 8351 369 85\r
Hậu Giang	08/11/2025	656340 62005 94773 77094 90943 42100 69124 89196 28444 78451 75753 01753 2373 1314 8106 7426 237 02\r
Vĩnh Long	07/11/2025	791214 52663 91802 83673 71647 15146 21424 96119 69163 73482 13185 89831 1943 1089 0863 4532 412 36\r
Bình Dương	07/11/2025	283071 93132 00356 41631 26552 81065 49974 68751 24915 64801 72248 83951 5136 3769 6485 5127 695 56\r
Trà Vinh	07/11/2025	765683 66216 92785 06582 74766 33952 02404 34348 76139 48078 90827 90829 4974 0131 5451 1784 135 02\r
Tây Ninh	06/11/2025	790768 83264 67591 07496 77746 68846 95853 85720 00976 87424 14013 32235 5574 3714 9936 8347 460 76\r
An Giang	06/11/2025	359194 84399 17677 77308 39486 95556 86363 68430 57269 22531 73967 67608 7871 4869 0873 8381 916 99\r
Bình Thuận	06/11/2025	386608 50822 84870 14129 17393 01449 15184 73484 59961 22730 12342 40439 6527 4289 1691 3539 363 61\r
Đồng Nai	05/11/2025	767459 22080 88976 20474 86456 92644 98871 76122 57724 71748 04279 11961 8865 9487 5769 1389 961 06\r
Cần Thơ	05/11/2025	457079 58888 22009 45585 38067 04616 19422 42829 41643 69872 68976 06484 7141 4747 1277 0146 282 76\r
Sóc Trăng	05/11/2025	539631 69582 08065 72716 53416 31945 32853 24433 42838 81254 43339 66452 1559 9977 8092 3791 319 04\r
Bến Tre	04/11/2025	094402 45680 38576 19369 80804 69752 90236 56675 44711 91602 23284 63063 6791 6295 6406 6692 979 60\r
Vũng Tàu	04/11/2025	157236 34567 54750 00592 99132 18613 41703 18040 29744 28090 11043 97900 5483 8262 8312 8437 968 48\r
Bạc Liêu	04/11/2025	980288 11734 27203 49265 15604 46610 06119 09050 82145 20169 95420 50979 1716 5440 0482 6530 883 28\r
Hồ Chí Minh	03/11/2025	842823 49787 08591 96679 18964 09260 32766 46807 01146 25794 31664 81943 4034 4100 7639 1138 253 50\r
Đồng Tháp	03/11/2025	159591 27084 20092 89228 55821 65181 64720 45438 61624 15770 88874 70912 5969 0701 2001 7627 740 24\r
Cà Mau	03/11/2025	338191 11823 35296 76444 73997 07389 08908 87430 79299 46966 23363 07672 0960 8691 0491 7035 659 85\r
Tiền Giang	02/11/2025	145445 07484 96286 96138 21031 10197 17799 77504 86857 73099 03363 20852 6286 4570 1528 1385 208 87\r
Kiên Giang	02/11/2025	145989 89226 24059 19367 87850 38417 97126 06209 07161 10905 36124 61405 7112 3255 6918 9899 851 51\r
Đà Lạt	02/11/2025	685624 59645 57241 16340 64059 37096 64733 68210 92212 41230 80738 79770 9847 3764 4326 6857 612 41\r
Hồ Chí Minh	01/11/2025	425632 26168 22853 17421 04629 68833 28879 38136 75798 63073 34046 79770 3912 0547 1482 8276 050 48\r
Long An	01/11/2025	313631 99412 62960 51655 68041 88405 19171 40133 41282 59731 77860 82866 0840 9899 4639 8055 789 39\r
Bình Phước	01/11/2025	539631 29593 91878 48225 18019 97107 44274 61872 23632 23987 78595 42283 8908 5548 3456 9452 557 10\r
Hậu Giang	01/11/2025	495851 94050 29820 40034 53651 29051 79062 01251 67754 53318 38141 17518 3302 9090 9864 8872 001 22\r
Vĩnh Long	31/10/2025	930283 62899 87633 93714 97800 61200 27998 11875 35621 46523 26162 28102 9483 1110 8745 5911 306 16\r
Bình Dương	31/10/2025	553465 11659 63001 32008 48927 56403 96114 03236 46948 16644 58495 70057 1122 5669 5934 6713 605 64\r
Trà Vinh	31/10/2025	342489 77213 59948 61105 58110 28198 56480 26490 96178 77616 26060 47151 6022 3864 1095 9864 397 91\r
Tây Ninh	30/10/2025	045224 32931 61431 11564 22236 29828 21038 67916 82569 72430 28831 41836 8150 9219 2090 2331 470 14\r
An Giang	30/10/2025	227911 30149 18933 89961 11372 56904 44014 72035 91547 38164 13713 21838 9436 4392 7064 6363 707 97\r
Bình Thuận	30/10/2025	222305 26065 01527 79587 18459 64508 16101 53018 05299 25090 22306 63470 6733 7938 4354 9899 977 68\r
Đồng Nai	29/10/2025	630038 53665 27823 76069 26565 96063 10557 40008 49401 53672 07061 65540 1486 3969 5356 1840 260 18\r
Cần Thơ	29/10/2025	634611 79281 01240 81033 07449 14831 34140 83726 10729 18594 59274 69867 8934 8426 3603 6850 524 54\r
Sóc Trăng	29/10/2025	274359 91232 55879 07555 25167 87151 33046 46615 95554 56501 91036 30836 2640 3244 8110 6035 209 34\r
Bến Tre	28/10/2025	450066 74172 03225 71749 15020 87914 05295 00678 50795 00149 60652 80093 1937 2190 5939 6513 495 30\r
Vũng Tàu	28/10/2025	630243 13193 93188 79747 69148 37344 22040 81466 22032 71330 35713 27298 7680 0138 7452 0002 847 03\r
Bạc Liêu	28/10/2025	314521 13964 09136 01145 72606 09228 11945 18406 04981 16374 93179 24482 5655 4597 7014 6174 030 90\r
Hồ Chí Minh	27/10/2025	586769 80452 96309 57607 21883 35787 14903 86604 34679 21781 21988 14568 4452 8176 7642 5543 661 55\r
Đồng Tháp	27/10/2025	278861 23241 06755 12352 72835 01398 27476 95501 30066 10357 43231 52664 3369 4061 2003 2254 544 92\r
Cà Mau	27/10/2025	206663 84271 51268 61758 13636 01239 86908 05703 67553 68535 78280 57693 1339 7656 0847 3101 013 10\r
Tiền Giang	26/10/2025	351920 98323 89905 70015 17204 18428 41543 05465 52298 89680 89932 98159 6992 8115 4332 8395 388 55\r
Kiên Giang	26/10/2025	536989 66790 51253 04911 06696 88221 47085 01060 21299 38054 43511 94566 3792 1138 4403 2944 827 96\r
Đà Lạt	26/10/2025	355080 01337 62307 91919 26373 35442 75049 78436 01354 26943 12928 53790 1961 8213 5668 7280 843 33\r
Hồ Chí Minh	25/10/2025	016855 38816 60342 32663 32110 71662 44287 56886 08893 19288 97699 12813 9617 8804 9443 6823 367 34\r
Long An	25/10/2025	248337 31867 97731 67412 09385 82914 60057 67506 02322 93910 73621 26764 1310 3998 6791 9123 124 35\r
Bình Phước	25/10/2025	651817 72311 80178 66706 15666 19063 70030 86050 76598 92289 88371 23818 6400 3295 8514 0850 913 33\r
Hậu Giang	25/10/2025	408671 38098 06799 59398 61058 82578 97550 61046 61104 13370 16494 29296 5548 8746 0919 0609 091 25\r
Vĩnh Long	24/10/2025	478354 75411 66196 39829 94618 04500 69205 02371 20163 51905 07846 86094 4398 5858 4925 1590 908 16\r
Bình Dương	24/10/2025	744050 67097 93148 91993 11348 08323 99669 07901 96241 46181 35490 18183 7411 5948 1808 7674 350 61\r
Trà Vinh	24/10/2025	941913 46013 61928 76499 74346 24161 17797 88036 76390 14127 91488 12388 2914 7975 0563 4570 448 60\r
Tây Ninh	23/10/2025	351331 93657 56768 95267 05530 65413 24271 38390 24372 79796 97349 36137 2134 3678 2928 1421 711 52\r
An Giang	23/10/2025	698838 35266 92333 94341 42655 48711 28217 29874 95550 02886 72687 85421 9951 7912 8955 6227 703 06\r
Bình Thuận	23/10/2025	214314 70817 75766 67038 23844 76047 69085 00290 75734 51345 84444 20636 9536 8833 2920 1356 254 96\r
Đồng Nai	22/10/2025	221174 93768 96836 64882 14114 90655 68185 71079 02666 69247 90260 19285 4208 5474 5290 0688 523 85\r
Cần Thơ	22/10/2025	834441 68664 95336 18784 49787 60651 19569 63094 41357 31534 86209 38583 1239 2748 9078 5689 592 21\r
Sóc Trăng	22/10/2025	592795 25252 93963 62981 66874 73300 01703 17021 41865 29718 43128 59875 7285 2478 3755 3379 080 39\r
Bến Tre	21/10/2025	132596 58184 36272 73556 66319 86200 84564 99564 16785 88459 58211 59037 7515 7882 9223 9740 818 34\r
Vũng Tàu	21/10/2025	170075 54184 48785 07464 74457 03183 04216 48265 64309 31392 67317 79651 4428 7428 3236 0652 922 21\r
Bạc Liêu	21/10/2025	975779 67705 25097 10288 64960 54408 74405 79895 91527 43705 02983 13127 7698 0892 9952 5120 338 25\r
Hồ Chí Minh	20/10/2025	261504 49726 58660 88183 97831 89650 56620 98366 14642 03043 68914 14933 1417 2411 0972 2006 391 48\r
Đồng Tháp	20/10/2025	454826 84774 93914 43650 19628 62981 92160 66837 49614 67402 52895 02040 2672 8879 0951 3457 665 74\r
Cà Mau	20/10/2025	213948 74700 97224 15848 47288 40826 70177 30078 46411 33557 64124 09520 6618 2746 2701 3072 752 02\r
Tiền Giang	19/10/2025	097059 22687 02192 58720 60684 91042 87214 67639 42626 05477 91709 56269 5222 6779 7777 8701 069 59\r
Kiên Giang	19/10/2025	375650 26696 15029 29711 67946 81125 67855 74836 26040 97842 39174 82429 6254 6384 0944 1152 529 87\r
Đà Lạt	19/10/2025	566527 96853 87031 06927 61604 27269 29213 51982 41629 53758 52755 38513 4125 9357 5670 5940 628 48\r
Hồ Chí Minh	18/10/2025	567567 97111 80536 68133 82654 35044 96876 77407 84801 49132 21773 87865 5884 7793 5385 5867 551 49\r
Long An	18/10/2025	301877 73802 48582 63289 20850 16924 04413 93943 69132 12641 19983 10739 3737 4308 0423 1109 232 41\r
Bình Phước	18/10/2025	191567 32005 06890 03489 16153 22547 83456 05353 17634 23330 83659 16423 7085 2765 1681 7582 880 19\r
Hậu Giang	18/10/2025	082000 69495 03592 36955 10569 06439 61854 51578 65371 89214 18946 56165 3127 3674 5474 3139 270 57\r
Vĩnh Long	17/10/2025	257993 53643 18589 14727 42995 03036 03388 94241 36948 93407 06176 77623 9873 1327 6010 3727 771 89\r
Bình Dương	17/10/2025	754464 81562 02523 16867 29324 91620 06508 14773 71602 66739 12513 26095 9697 5453 6049 2581 737 04\r
Trà Vinh	17/10/2025	940509 94999 28214 12339 19181 25580 81001 27273 89663 60041 50120 87505 2662 5066 4216 8000 842 53\r
Tây Ninh	16/10/2025	722489 13176 39179 79663 18145 48935 02223 92369 29119 53820 04293 38578 4513 3434 4014 2860 108 33\r
An Giang	16/10/2025	576961 14242 80674 42382 97693 20795 97258 33280 79608 62033 29989 22086 3795 7075 1482 9863 532 69\r
Bình Thuận	16/10/2025	814132 96629 45210 04157 00162 05792 36754 74179 97581 11766 49558 69932 3658 7568 7268 2083 256 96\r
Đồng Nai	15/10/2025	011089 82065 78414 85600 70890 95140 59210 38365 13498 04211 15296 55917 5155 0084 3911 7160 723 55\r
Cần Thơ	15/10/2025	799218 85724 86045 01290 40630 15030 30046 81819 61211 09511 05991 15080 1421 2583 5951 8933 000 25\r
Sóc Trăng	15/10/2025	832899 96434 97001 27437 07723 25662 00434 56136 00745 67198 69778 13967 1852 3503 4405 2599 449 52\r
Bến Tre	14/10/2025	040618 19956 34426 00797 10368 12419 03779 03084 99345 80920 90490 46201 5212 8515 1744 6505 665 91\r
Vũng Tàu	14/10/2025	318696 60584 51065 87576 26775 66910 01916 76884 89574 87046 06183 21106 8292 9631 5873 2217 950 33\r
Bạc Liêu	14/10/2025	982497 94199 87015 28726 35937 38119 37379 65485 54214 88859 31064 29649 7042 8448 9525 6903 514 29\r
Hồ Chí Minh	13/10/2025	167699 83460 65713 81221 01713 89847 62589 44483 87773 07376 75211 88528 8916 5345 7485 1721 145 23\r
Đồng Tháp	13/10/2025	748614 48764 87476 48170 41946 17605 48075 34159 16450 99161 76138 72971 1715 5946 6087 2941 119 84\r
Cà Mau	13/10/2025	884006 79039 70667 59678 01324 65362 34036 46346 17237 30235 27511 63990 2587 5867 4916 7498 534 86\r
Tiền Giang	12/10/2025	496675 50931 37538 68626 14663 68767 04471 10297 10573 90662 57223 42514 1257 1467 9372 9661 344 30\r
Kiên Giang	12/10/2025	379880 96877 41934 13973 16947 69038 19472 56809 23585 42959 49735 95369 3797 1518 7786 3597 814 46\r
Đà Lạt	12/10/2025	615051 68512 68725 81501 92758 35517 70286 76748 25739 74984 68194 19343 3911 5413 5483 0094 244 65\r
Hồ Chí Minh	11/10/2025	688416 25869 83226 61769 37125 85294 49527 56337 33647 38398 51617 24544 4425 9362 7250 4754 900 72\r
Long An	11/10/2025	110001 68623 80755 46684 28521 22884 12428 56732 15067 09028 03311 20069 0778 8164 5527 7490 840 43\r
Bình Phước	11/10/2025	792338 05024 55484 93728 62448 55577 87529 79513 55899 74568 56515 20176 8481 3197 3300 1616 788 38\r
Hậu Giang	11/10/2025	595981 84773 48387 72372 32910 24847 06898 20751 01728 42145 78320 67381 4201 5867 8476 5981 459 70\r
Vĩnh Long	10/10/2025	562405 56198 12319 07730 70303 48842 11824 83036 55755 71845 45624 87713 3520 4270 9873 5064 559 15\r
Bình Dương	10/10/2025	885859 43841 52111 18628 11350 22983 97579 40295 78678 97283 82600 43877 6825 8319 8236 9487 251 35\r
Trà Vinh	10/10/2025	376469 79083 73723 27332 03517 40538 46736 23823 23942 46920 18563 61952 3344 2142 5847 9435 091 23\r
Tây Ninh	09/10/2025	118795 30824 02992 84309 33041 22542 03880 94591 64249 67228 08830 27645 6409 5504 7032 0328 632 41\r
An Giang	09/10/2025	042293 02518 49226 03856 04216 00810 02321 00681 51728 24507 58068 96136 8877 5934 7442 3430 884 40\r
Bình Thuận	09/10/2025	734059 32016 04444 86160 63614 85022 91508 30566 39510 47874 50959 17218 7406 1676 8579 8195 650 30\r
Đồng Nai	08/10/2025	362384 27650 67139 02879 46143 22031 92017 38627 64467 95366 98264 90798 7893 7494 4642 2782 061 97\r
Cần Thơ	08/10/2025	046439 12476 51574 77271 75981 19253 11513 31723 94233 11524 52858 25082 3263 9089 1882 5222 133 84\r
Sóc Trăng	08/10/2025	015449 61659 80477 85799 10233 28186 27457 57376 91792 06144 19584 65940 9304 1720 1475 0693 998 27\r
Bến Tre	07/10/2025	973204 36753 02305 44434 83849 33992 71280 49952 40050 08825 65573 60215 5289 7631 6028 0874 531 93\r
Vũng Tàu	07/10/2025	272674 31978 57881 63423 94810 25778 27337 99449 12027 34457 72732 70485 7611 4506 7887 1911 012 04\r
Bạc Liêu	07/10/2025	764660 63437 32223 11623 80046 48036 36321 14836 99295 39293 27923 00945 5683 2400 6483 8307 440 18\r
Hồ Chí Minh	06/10/2025	092612 47917 51868 06066 42180 22894 40118 99026 54423 41262 53805 04941 2716 1571 9770 9198 401 82\r
Đồng Tháp	06/10/2025	031115 52038 38435 86807 50903 75874 77564 06773 44162 41237 08626 36238 5523 6541 6332 0478 613 92\r
Cà Mau	06/10/2025	552592 01358 19035 23074 76667 55432 27024 24332 25740 32018 77661 21126 6892 7089 9009 9493 766 22\r
Tiền Giang	05/10/2025	715049 44893 58100 16691 58845 63101 23045 41799 83202 58163 36176 53942 4453 0318 8627 4373 017 81\r
Kiên Giang	05/10/2025	050364 63328 35248 45310 32068 27946 58187 51642 70858 18479 47610 61399 8868 3491 8924 7866 473 18\r
Đà Lạt	05/10/2025	145555 39002 94238 43759 53045 80944 75993 07773 43387 26773 49916 36313 3879 8110 6491 9342 973 43\r
`,J3=["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],Jr=18,Se=[{tên:"Tiền Giang",thứ:0},{tên:"Kiên Giang",thứ:0},{tên:"Đà Lạt",thứ:0},{tên:"Hồ Chí Minh",thứ:1},{tên:"Đồng Tháp",thứ:1},{tên:"Cà Mau",thứ:1},{tên:"Bến Tre",thứ:2},{tên:"Vũng Tàu",thứ:2},{tên:"Bạc Liêu",thứ:2},{tên:"Đồng Nai",thứ:3},{tên:"Cần Thơ",thứ:3},{tên:"Sóc Trăng",thứ:3},{tên:"Tây Ninh",thứ:4},{tên:"An Giang",thứ:4},{tên:"Bình Thuận",thứ:4},{tên:"Vĩnh Long",thứ:5},{tên:"Bình Dương",thứ:5},{tên:"Trà Vinh",thứ:5},{tên:"Hồ Chí Minh",thứ:6},{tên:"Long An",thứ:6},{tên:"Bình Phước",thứ:6},{tên:"Hậu Giang",thứ:6}],sb="https://docs.google.com/spreadsheets/d/e/2PACX-1vSKJmxPPwbuVU8u8sGZp-Q7Mt5LX5yprCZIaT8LGom1NyuWIm5j2NjOnr6KZbj-9nRQKAPcDFkTeR8a/pub?gid=809052019&single=true&output=csv",ob=t=>[t.getDate(),t.getMonth()+1,t.getFullYear()].map((n,e)=>String(n).padStart(e===2?4:2,"0")).join("/"),ub=t=>{const[n,e,s]=t.split("/").map(Number);return new Date(s,e-1,n)},lb=t=>new Date(t.getFullYear(),t.getMonth(),t.getDate()-t.getDay());function Eu(t){const n=new Map;let e=0;for(const o of t.split(`
`)){if(!o.trim()||o.startsWith("#"))continue;const[l,a,f=""]=o.split(/[\t,]/).map(x=>x.trim()),h=f.split(/\s+/).filter(x=>x!=="");if(h.length!==Jr||!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(a??""))continue;e++;const p=ub(a),y=lb(p).getTime();n.has(y)||n.set(y,new Map),n.get(y).set(`${l}|${p.getDay()}`,{ngày:a,các_lô:h})}return{các_tuần:[...n.entries()].sort(([o],[l])=>l-o).map(([o,l])=>({nhãn:ob(new Date(o)),các_tỉnh:Se.map(({tên:a,thứ:f})=>{const h=l.get(`${a}|${f}`);return{tên:a,thứ:f,ngày:(h==null?void 0:h.ngày)??"",đặc_biệt:(h==null?void 0:h.các_lô[0])??"",giải_tám:(h==null?void 0:h.các_lô[Jr-1])??"",hai_số_cuối:h?h.các_lô.map(p=>p.slice(-2)):[]}})})),số_dòng:e}}function ab(){return Eu(ib).các_tuần}async function cb(){const t=await fetch(sb,{signal:AbortSignal.timeout(1e4)});if(!t.ok)throw new Error(`Không tải được Google Sheet (${t.status})`);const{các_tuần:n,số_dòng:e}=Eu(await t.text());if(e===0)throw new Error("Google Sheet không có dòng dữ liệu hợp lệ");return n}const fb={class:"loto"},hb={class:"bộ-lọc"},_b=["onClick"],db=["onClick"],gb={class:"thống-kê"},pb={key:0,class:"thống-kê"},mb={key:0},vb={key:1,class:"loto-scroll"},yb={key:2,class:"loto-scroll"},Tb={key:3},xb=["max"],wb={class:"loto-scroll"},Sb={key:4},bb={class:"hai-bảng"},Mb=["onClick"],kb={key:5},Cb={key:0},Db={key:1},Ab={class:"hai-bảng"},Lb={key:6,class:"loto-scroll"},fs="loto_số_đã_lưu",Cr=24*60*60*1e3,hs=33e4,_s=8e4,Ob=b4({__name:"LotoView",setup(t){const n=Y0(ab()),e=p2(()=>n.value),s=Y0("đang tải");js(async()=>{try{n.value=await cb(),s.value="google sheet"}catch{s.value="dự phòng"}});const o=Y0(83),l=p2(()=>Math.min(99,Math.max(0,Math.trunc(Number(o.value)||0))).toString().padStart(2,"0")),f=Y0((()=>{try{const N=JSON.parse(localStorage.getItem(fs)??"[]");return Array.isArray(N)?N.filter(M=>typeof M=="string"):[]}catch{return[]}})()),h=()=>{try{localStorage.setItem(fs,JSON.stringify(f.value))}catch{}},p=()=>{f.value.includes(l.value)||(f.value.push(l.value),h())},y=N=>{f.value=f.value.filter(M=>M!==N),h()},x=N=>{o.value=Number(N)},b=Y0("ngày"),C=N=>N.filter(M=>M===l.value).length,q=N=>{const[M,E,$]=N.split("/").map(Number);return Date.UTC($,E-1,M)},W=p2(()=>{const N=new Map;for(const M of e.value)for(const E of M.các_tỉnh){if(!E.ngày)continue;const $=q(E.ngày);N.set($,(N.get($)??0)+C(E.hai_số_cuối))}return N}),r0=p2(()=>{const N=[...W.value.keys()].sort((m,T)=>m-T);let M={số_ngày:0,từ:0,đến:0},E={số_ngày:0,từ:0,đến:0},$=0;for(const m of N)W.value.get(m)?E={số_ngày:0,từ:0,đến:0}:(E=E.số_ngày>0&&m-$===Cr?{...E,số_ngày:E.số_ngày+1,đến:m}:{số_ngày:1,từ:m,đến:m},E.số_ngày>M.số_ngày&&(M=E)),$=m;const p0=N[N.length-1];return{dài_nhất:M,hiện_tại:E.đến===p0?E:{số_ngày:0,từ:0,đến:0}}}),i0=N=>{const M=new Date(N);return[M.getUTCDate(),M.getUTCMonth()+1,M.getUTCFullYear()].map((E,$)=>String(E).padStart($===2?4:2,"0")).join("/")},t0=p2(()=>{const N=[...W.value.keys()].sort((X,z)=>X-z);if(!N.length)return null;const M=N[N.length-1]+Cr,E=new Date(M).getUTCDay(),$=Se.filter(X=>X.thứ===E).length,p0=1-Math.pow(.99,Jr*$);let m=0,T=0,A=0,Y=0;const R=r0.value.hiện_tại.số_ngày;let F=0,s0=0;for(const X of N){const z=(W.value.get(X)??0)>0;new Date(X).getUTCDay()===E&&(m++,z&&T++);const K=X-s0===Cr;R>0&&K&&F>=R&&(A++,z&&Y++),F=z?0:K?F+1:1,s0=X}return{mốc_tiếp:M,thứ:E,số_tỉnh:$,lý_thuyết:p0,cùng_thứ:m,cùng_thứ_có:T,sau_chuỗi:A,sau_chuỗi_có:Y,chuỗi_cần:R,tổng_ngày:N.length,tổng_có:N.filter(X=>(W.value.get(X)??0)>0).length}}),u0=Y0(4),a0=p2(()=>e.value.filter(N=>N.các_tỉnh.every(M=>M.ngày)).map(N=>{const M=N.các_tỉnh.reduce((E,$)=>E+C($.hai_số_cuối),0);return{nhãn:N.nhãn,số_lần:M,lãi_lỗ:M*_s-hs}})),h0=p2(()=>Math.min(Math.max(1,Math.trunc(Number(u0.value)||1)),Math.max(1,a0.value.length))),C0=p2(()=>{const N=a0.value.slice(0,h0.value);let M=0;return{các_dòng:[...N].reverse().map($=>(M+=$.lãi_lỗ,{...$,lũy_kế:M})).reverse(),tổng_lần:N.reduce(($,p0)=>$+p0.số_lần,0),tổng_lãi_lỗ:M}}),S0=p2(()=>{const N=[...a0.value].reverse(),M=h0.value;let E=0,$=0,p0=0;for(let m=0;m+M<=N.length;m++){const T=N.slice(m,m+M).reduce((A,Y)=>A+Y.lãi_lỗ,0);E++,p0+=T,T>0&&$++}return{số_cửa_sổ:E,số_có_lãi:$,trung_bình:E?p0/E:0}}),J0=N=>`${N>0?"+":""}${Math.round(N/1e3).toLocaleString("vi-VN")}k`,V0=(N,M)=>M>0?`${(N/M*100).toFixed(1)}%`:"—",l2=Y0(10),w2=N=>[N.getFullYear(),N.getMonth()+1,N.getDate()].map((M,E)=>String(M).padStart(E===0?4:2,"0")).join("-"),P2=new Date,L2=Y0(w2(P2)),i1=Y0(w2(new Date(P2.getFullYear(),P2.getMonth(),P2.getDate()-7))),y1=N=>{const[M,E,$]=N.split("-").map(Number);return M&&E&&$?Date.UTC(M,E-1,$):null},n2=p2(()=>{const N=y1(L2.value),M=y1(i1.value),E=N!==null&&M!==null,$=E?Math.min(N,M):0,p0=E?Math.max(N,M):-1,m=e.value.flatMap(A=>A.các_tỉnh).filter(A=>{if(!A.đặc_biệt)return!1;const Y=q(A.ngày);return Y>=$&&Y<=p0}),T=A=>{const Y=new Map;for(const R of m){const F=A(R);Y.set(F,(Y.get(F)??0)+1)}return[...Y.entries()].sort((R,F)=>F[1]-R[1]||R[0].localeCompare(F[0])).map(([R,F])=>({số:R,lần:F}))};return{hợp_lệ:E,từ:$,đến:p0,số_ngày_có_dữ_liệu:new Set(m.map(A=>A.ngày)).size,tổng_kỳ:m.length,giải_tám:T(A=>A.giải_tám),cuối:T(A=>A.đặc_biệt.slice(-2))}}),I0=N=>{const M=new Map;for(const E of e.value)for(const $ of E.các_tỉnh){if(!$.ngày)continue;const p0=q($.ngày),m=M.get(p0)??new Set;N($).forEach(T=>T&&m.add(T)),M.set(p0,m)}return M},R0=p2(()=>I0(N=>N.hai_số_cuối)),s1=p2(()=>I0(N=>[N.giải_tám])),S2=p2(()=>I0(N=>[N.đặc_biệt.slice(-2)])),y2=(N,M)=>{var m;const E=[...N.keys()].sort((T,A)=>A-T);let $=0,p0=0;for(let T=0;T<E.length&&!(T>0&&E[T-1]-E[T]!==Cr);T++){if((m=N.get(E[T]))!=null&&m.has(M)){p0=E[T];break}$++}return{số_ngày:$,lần_ra_gần_nhất:p0}},O2=N=>{if(!N.size)return[];const M=Array.from({length:100},(p0,m)=>String(m).padStart(2,"0")).map(p0=>({số:p0,...y2(N,p0)}));M.sort((p0,m)=>m.số_ngày-p0.số_ngày||p0.số.localeCompare(m.số));const E=Math.min(100,Math.max(1,Math.trunc(Number(l2.value)||1))),$=M[E-1].số_ngày;return M.filter(p0=>p0.số_ngày>=$)},T1=p2(()=>[{tên:"18 lô (2 số cuối các giải)",danh_sách:O2(R0.value)},{tên:"Đầu giải 8 (2 số)",danh_sách:O2(s1.value)},{tên:"Đặc biệt (2 số cuối)",danh_sách:O2(S2.value)}]),x1=p2(()=>e.value.map(N=>({nhãn:N.nhãn,các_ngày:J3.map((M,E)=>{const $=N.các_tỉnh.filter(T=>T.thứ===E&&T.ngày);if(!$.length)return null;let p0=0;const m=[];for(const T of $){const A=C(T.hai_số_cuối);p0+=A,A>0&&m.push(`${T.tên} (${A})`)}return{ngày:$[0].ngày,tổng:p0,chi_tiết:m}})}))),X2=N=>N>=5?"màu-xanh":N===4?"màu-vàng":"màu-đỏ",B2=p2(()=>e.value.map(N=>{let M=0;const E=[];for(const $ of N.các_tỉnh){const p0=C($.hai_số_cuối);M+=p0,p0>0&&E.push(`${J3[$.thứ]} ${$.tên} (${p0})`)}return{nhãn:N.nhãn,tổng:M,chi_tiết:E}})),I=p2(()=>e.value.map(N=>({nhãn:N.nhãn,số_lượng:N.các_tỉnh.map(M=>M.hai_số_cuối.length?C(M.hai_số_cuối):null)})));return(N,M)=>(o0(),g0("div",fb,[M[33]||(M[33]=S("h2",null,"Loto 22 tỉnh",-1)),S("small",null,[M[6]||(M[6]=l0(" Nguồn dữ liệu: ")),s.value==="đang tải"?(o0(),g0(P0,{key:0},[l0("đang cập nhật từ Google Sheet...")],64)):s.value==="google sheet"?(o0(),g0(P0,{key:1},[l0("Google Sheet (mới nhất)")],64)):(o0(),g0(P0,{key:2},[l0("dữ liệu có sẵn trong ứng dụng (không tải được Google Sheet)")],64))]),S("div",hb,[S("label",null,[M[7]||(M[7]=l0(" Số cần lọc (0–99): ")),i2(S("input",{"onUpdate:modelValue":M[0]||(M[0]=E=>o.value=E),type:"number",min:"0",max:"99"},null,512),[[V2,o.value,void 0,{number:!0}]])]),S("button",{type:"button",onClick:p},"Save"),(o0(!0),g0(P0,null,N2(f.value,E=>(o0(),g0("span",{key:E,class:"số-đã-lưu"},[S("button",{type:"button",class:"chọn",onClick:$=>x(E)},Q(E),9,_b),S("button",{type:"button",class:"xoá",title:"Xoá",onClick:$=>y(E)},"X",8,db)]))),128))]),S("p",gb,[l0(" Số "+Q(l.value)+" không xuất hiện liên tiếp lâu nhất: ",1),r0.value.dài_nhất.số_ngày>0?(o0(),g0(P0,{key:0},[S("b",null,Q(r0.value.dài_nhất.số_ngày)+" ngày",1),l0(" ("+Q(i0(r0.value.dài_nhất.từ))+" – "+Q(i0(r0.value.dài_nhất.đến))+"). ",1)],64)):(o0(),g0(P0,{key:1},[l0("chưa có ngày nào.")],64)),M[8]||(M[8]=l0(" Hiện tại: ")),S("b",null,Q(r0.value.hiện_tại.số_ngày)+" ngày",1),M[9]||(M[9]=l0(". "))]),t0.value?(o0(),g0("div",pb,[S("p",null,[M[10]||(M[10]=l0(" Ngày kế tiếp: ")),S("b",null,Q(m2(J3)[t0.value.thứ])+", "+Q(i0(t0.value.mốc_tiếp)),1),l0(" ("+Q(t0.value.số_tỉnh)+" tỉnh quay). Khả năng số "+Q(l.value)+" xuất hiện ít nhất 1 lần: ",1)]),S("ul",null,[S("li",null,[M[11]||(M[11]=l0(" Lý thuyết: ")),S("b",null,Q(V0(t0.value.lý_thuyết,1)),1),l0(" (mỗi lô có xác suất 1/100, ngày có "+Q(t0.value.số_tỉnh*m2(Jr))+" lô). ",1)]),S("li",null,[M[12]||(M[12]=l0(" Thực tế mọi ngày: ")),S("b",null,Q(V0(t0.value.tổng_có,t0.value.tổng_ngày)),1),l0(" ("+Q(t0.value.tổng_có)+"/"+Q(t0.value.tổng_ngày)+" ngày). ",1)]),S("li",null,[M[13]||(M[13]=l0(" Thực tế cùng thứ: ")),S("b",null,Q(V0(t0.value.cùng_thứ_có,t0.value.cùng_thứ)),1),l0(" ("+Q(t0.value.cùng_thứ_có)+"/"+Q(t0.value.cùng_thứ)+" ngày). ",1)]),t0.value.chuỗi_cần>0?(o0(),g0("li",mb,[l0(" Sau khi đã vắng từ "+Q(t0.value.chuỗi_cần)+" ngày trở lên: ",1),S("b",null,Q(V0(t0.value.sau_chuỗi_có,t0.value.sau_chuỗi)),1),l0(" ("+Q(t0.value.sau_chuỗi_có)+"/"+Q(t0.value.sau_chuỗi)+" lần). ",1)])):Bn("",!0)]),M[14]||(M[14]=S("small",null,"Các kỳ xổ số độc lập nhau, nên đây chỉ là số liệu tham khảo, không đảm bảo kết quả.",-1))])):Bn("",!0),S("label",null,[M[16]||(M[16]=l0(" Xem: ")),i2(S("select",{"onUpdate:modelValue":M[1]||(M[1]=E=>b.value=E)},M[15]||(M[15]=[Ip('<option value="ngày" data-v-9cffbdd7>Theo ngày</option><option value="tỉnh" data-v-9cffbdd7>Theo tỉnh</option><option value="tuần" data-v-9cffbdd7>Theo tuần</option><option value="dài hạn" data-v-9cffbdd7>Dài hạn</option><option value="lâu chưa ra" data-v-9cffbdd7>Số lâu chưa ra</option><option value="giải đặc biệt" data-v-9cffbdd7>Giải đặc biệt</option>',6)]),512),[[cn,b.value]])]),b.value==="ngày"?(o0(),g0("div",vb,[S("table",null,[S("thead",null,[S("tr",null,[M[17]||(M[17]=S("th",null,"Tuần",-1)),(o0(!0),g0(P0,null,N2(m2(J3),(E,$)=>(o0(),g0("th",{key:$},Q(E),1))),128))])]),S("tbody",null,[(o0(!0),g0(P0,null,N2(x1.value,E=>(o0(),g0("tr",{key:E.nhãn},[S("th",null,Q(E.nhãn),1),(o0(!0),g0(P0,null,N2(E.các_ngày,($,p0)=>(o0(),g0("td",{key:p0,class:pt({trúng:$==null?void 0:$.tổng})},[$?(o0(),g0(P0,{key:1},[S("small",null,Q($.ngày),1),S("div",null,Q($.tổng>0?`✓ ${$.tổng}`:"✗"),1),S("small",null,Q($.chi_tiết.join(", ")),1)],64)):(o0(),g0(P0,{key:0},[l0("—")],64))],2))),128))]))),128))])])])):b.value==="tuần"?(o0(),g0("div",yb,[S("table",null,[M[18]||(M[18]=S("thead",null,[S("tr",null,[S("th",null,"Tuần (từ Chủ nhật)"),S("th",null,"Kết quả"),S("th",null,"Chi tiết")])],-1)),S("tbody",null,[(o0(!0),g0(P0,null,N2(B2.value,E=>(o0(),g0("tr",{key:E.nhãn},[S("th",null,Q(E.nhãn),1),S("td",{class:pt(X2(E.tổng))},Q(E.tổng>0?`✓ ${E.tổng}`:"✗"),3),S("td",null,Q(E.chi_tiết.join(", ")),1)]))),128))])])])):b.value==="dài hạn"?(o0(),g0("div",Tb,[S("label",null,[M[19]||(M[19]=l0(" Số tuần: ")),i2(S("input",{"onUpdate:modelValue":M[2]||(M[2]=E=>u0.value=E),type:"number",min:"1",max:a0.value.length},null,8,xb),[[V2,u0.value,void 0,{number:!0}]])]),S("p",null," Mỗi tuần chi "+Q(J0(hs).replace("+",""))+", mỗi lần trúng nhận "+Q(J0(_s).replace("+",""))+". Chỉ tính tuần đủ dữ liệu. ",1),S("p",null,[l0(" Số "+Q(l.value)+" trong "+Q(h0.value)+" tuần gần nhất: ",1),S("b",null,Q(C0.value.tổng_lần)+" lần",1),M[20]||(M[20]=l0(", tổng ")),S("b",{class:pt(C0.value.tổng_lãi_lỗ>=0?"lãi":"lỗ")},Q(J0(C0.value.tổng_lãi_lỗ)),3)]),S("p",null,[l0(" Trong lịch sử, mọi khoảng "+Q(h0.value)+" tuần liên tiếp: ",1),S("b",null,Q(S0.value.số_có_lãi)+"/"+Q(S0.value.số_cửa_sổ),1),l0(" khoảng có lãi ("+Q(V0(S0.value.số_có_lãi,S0.value.số_cửa_sổ))+"), trung bình ",1),S("b",null,Q(J0(S0.value.trung_bình)),1),M[21]||(M[21]=l0(" mỗi khoảng. "))]),S("div",wb,[S("table",null,[M[22]||(M[22]=S("thead",null,[S("tr",null,[S("th",null,"Tuần (từ Chủ nhật)"),S("th",null,"Số lần"),S("th",null,"Lãi/lỗ tuần"),S("th",null,"Lũy kế")])],-1)),S("tbody",null,[(o0(!0),g0(P0,null,N2(C0.value.các_dòng,E=>(o0(),g0("tr",{key:E.nhãn},[S("th",null,Q(E.nhãn),1),S("td",null,Q(E.số_lần),1),S("td",{class:pt(E.lãi_lỗ>=0?"lãi":"lỗ")},Q(J0(E.lãi_lỗ)),3),S("td",{class:pt(E.lũy_kế>=0?"lãi":"lỗ")},Q(J0(E.lũy_kế)),3)]))),128))])])])])):b.value==="lâu chưa ra"?(o0(),g0("div",Sb,[S("label",null,[M[23]||(M[23]=l0(" Top: ")),i2(S("input",{"onUpdate:modelValue":M[3]||(M[3]=E=>l2.value=E),type:"number",min:"1",max:"100"},null,512),[[V2,l2.value,void 0,{number:!0}]])]),M[25]||(M[25]=S("p",null," Mỗi nhóm xếp riêng theo số ngày liên tiếp chưa ra tính đến ngày mới nhất; số đồng hạng ở cuối top đều được hiển thị. Bấm vào một số để xem thống kê của số đó. ",-1)),S("div",bb,[(o0(!0),g0(P0,null,N2(T1.value,E=>(o0(),g0("div",{key:E.tên},[S("h3",null,Q(E.tên),1),S("p",null,"Tổng cộng "+Q(E.danh_sách.length)+" số.",1),S("table",null,[M[24]||(M[24]=S("thead",null,[S("tr",null,[S("th",null,"STT"),S("th",null,"Số"),S("th",null,"Số ngày chưa ra"),S("th",null,"Ngày ra")])],-1)),S("tbody",null,[(o0(!0),g0(P0,null,N2(E.danh_sách,($,p0)=>(o0(),g0("tr",{key:$.số,class:"dòng-chọn",onClick:m=>x($.số)},[S("td",null,Q(p0+1),1),S("td",null,Q($.số),1),S("td",null,Q($.số_ngày),1),S("td",null,Q($.lần_ra_gần_nhất?i0($.lần_ra_gần_nhất):"—"),1)],8,Mb))),128))])])]))),128))]),M[26]||(M[26]=S("small",null,"Các kỳ xổ số độc lập nhau, số vắng lâu không có nghĩa là sắp ra.",-1))])):b.value==="giải đặc biệt"?(o0(),g0("div",kb,[S("label",null,[M[27]||(M[27]=l0(" Từ ngày: ")),i2(S("input",{"onUpdate:modelValue":M[4]||(M[4]=E=>L2.value=E),type:"date"},null,512),[[V2,L2.value]])]),S("label",null,[M[28]||(M[28]=l0(" Đến ngày: ")),i2(S("input",{"onUpdate:modelValue":M[5]||(M[5]=E=>i1.value=E),type:"date"},null,512),[[V2,i1.value]])]),n2.value.hợp_lệ?(o0(),g0("p",Db,[l0(" Từ "+Q(i0(n2.value.từ))+" đến "+Q(i0(n2.value.đến))+": có ",1),S("b",null,Q(n2.value.số_ngày_có_dữ_liệu),1),M[29]||(M[29]=l0(" ngày có dữ liệu, ")),S("b",null,Q(n2.value.tổng_kỳ),1),l0(" kỳ (mỗi tỉnh mỗi ngày một kỳ). Xác suất lý thuyết mỗi số ở mỗi kỳ là 1%. Xác suất bên dưới là tỉ lệ thực tế = số lần ra / "+Q(n2.value.tổng_kỳ)+" kỳ. ",1)])):(o0(),g0("p",Cb,"Hãy chọn đủ hai ngày.")),S("div",Ab,[(o0(!0),g0(P0,null,N2([{tên:"2 số giải 8",dữ_liệu:n2.value.giải_tám},{tên:"2 số cuối giải đặc biệt",dữ_liệu:n2.value.cuối}],E=>(o0(),g0("div",{key:E.tên},[S("h3",null,Q(E.tên),1),S("p",null,"Đã ra "+Q(E.dữ_liệu.length)+"/100 số.",1),S("table",null,[M[30]||(M[30]=S("thead",null,[S("tr",null,[S("th",null,"STT"),S("th",null,"Số"),S("th",null,"Số lần"),S("th",null,"Xác suất")])],-1)),S("tbody",null,[(o0(!0),g0(P0,null,N2(E.dữ_liệu,($,p0)=>(o0(),g0("tr",{key:$.số},[S("td",null,Q(p0+1),1),S("td",null,Q($.số),1),S("td",null,Q($.lần),1),S("td",null,Q(V0($.lần,n2.value.tổng_kỳ)),1)]))),128))])])]))),128))]),M[31]||(M[31]=S("small",null,"Các kỳ xổ số độc lập nhau, số ra nhiều trước đó không làm tăng khả năng ra tiếp.",-1))])):(o0(),g0("div",Lb,[S("table",null,[S("thead",null,[S("tr",null,[M[32]||(M[32]=S("th",null,"Tuần",-1)),(o0(!0),g0(P0,null,N2(m2(Se),(E,$)=>(o0(),g0("th",{key:$,class:pt(`thứ-${E.thứ}`)},[S("div",null,Q(m2(J3)[E.thứ]),1),S("div",null,Q(E.tên),1)],2))),128))])]),S("tbody",null,[(o0(!0),g0(P0,null,N2(I.value,E=>(o0(),g0("tr",{key:E.nhãn},[S("th",null,Q(E.nhãn),1),(o0(!0),g0(P0,null,N2(E.số_lượng,($,p0)=>(o0(),g0("td",{key:p0,class:pt({trúng:$})},[$===null?(o0(),g0(P0,{key:0},[l0("—")],64)):$>0?(o0(),g0(P0,{key:1},[l0("✓ "+Q($),1)],64)):(o0(),g0(P0,{key:2},[l0("✗")],64))],2))),128))]))),128))])])]))]))}}),Eb=(t,n)=>{const e=t.__vccOpts||t;for(const[s,o]of n)e[s]=o;return e},Nb=Eb(Ob,[["__scopeId","data-v-9cffbdd7"]]),Rb=Tv({history:Zm("/lote/"),routes:[{path:"/",name:"home",component:eb},{path:"/loto",name:"loto",component:Nb}]}),ds=mm(wv);Nw().finally(()=>{ds.use(Rb),ds.mount("#app")})});export default Pb();
