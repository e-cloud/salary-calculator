import{$ as zt,$a as Ma,$b as re,A as ti,Aa as Pu,Ab as R,Ac as wc,B as gc,Ba as Bu,Bb as os,Bc as Ec,C as Jr,Ca as Lu,Cb as y,D as _c,Da as Nu,Db as fe,Dc as us,E as Du,Ea as Vu,Eb as Y,Ec as Dc,F as Oi,Fa as zu,Fb as ct,Fc as Mc,G as xa,Ga as ju,Gb as Se,Gc as Sc,H as Ve,Ha as m,Hb as z,I as lt,Ia as Da,Ib as j,J as Me,Ja as Hu,Jb as Ku,K as Mu,Ka as ts,Kb as Xu,L as xn,La as yc,Lb as xc,M as Su,Ma as Ze,Mb as ye,N as ce,Na as ut,Nb as Ie,O as gt,Oa as _t,Ob as N,P as S,Pa as be,Pb as Ge,Q as $,Qa as oe,Qb as d,R as x,Ra as ns,Rb as J,S as le,Sa as mt,Sb as w,T as c,Ta as is,Tb as Ue,U as Vo,Ua as F,Ub as Qu,V as Au,Va as G,Vb as Zu,W as nn,Wa as D,Wb as zo,X as Fu,Xa as Ni,Xb as jo,Y as At,Ya as Uu,Yb as rs,Z as Ce,Za as te,Zb as ss,_ as we,_a as ke,_b as ls,a as ge,aa as bc,ab as qt,ac as Xt,b as gu,ba as X,bb as as,bc as Ho,c as _u,ca as Q,cb as $u,cc as Ju,d as it,da as Yt,db as ii,dc as V,e as B,ea as O,eb as Gu,ec as q,f as Jn,fa as W,fb as A,fc as Ct,g as Ri,ga as Pi,gb as I,gc as Vi,h as bu,ha as ku,hb as Wu,hc as em,i as va,ia as ne,ib as T,ic as Aa,j as vu,ja as Iu,jb as Yu,jc as cs,k as Qe,ka as vc,kb as Kt,kc as tm,l as yu,la as an,lb as de,lc as ot,m as hc,ma as ve,mb as ue,mc as et,n as xe,na as Fe,nb as _,nc as Pn,o as ya,oa as P,ob as s,oc as Cc,p as xu,pa as Cn,pb as l,pc as Bn,q as ei,qa as Tu,qb as E,qc as Uo,r as Zr,ra as Bi,rb as ze,rc as nm,s as Cu,sa as Ru,sb as qe,sc as me,t as He,ta as ni,tb as bt,tc as im,u as se,ua as Ca,ub as Sa,uc as H,v as fc,va as wa,vb as $e,vc as Ke,w as wu,wa as es,wb as xt,wc as am,x as Eu,xa as Li,xb as qu,xc as ds,y as yn,ya as Ea,yb as Rt,z as at,za as Ou,zb as Je}from"./chunk-OZKS6LRZ.js";import{a as k,b as De}from"./chunk-QXIBXHVB.js";var om=null;function Qt(){return om}function Ac(t){om??=t}var $o=class{},Fa=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:()=>c(rm),providedIn:"platform"})}return t})();var rm=(()=>{class t extends Fa{_location;_history;_doc=c(Q);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Qt().getBaseHref(this._doc)}onPopState(e){let n=Qt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Qt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,a){this._history.pushState(e,n,a)}replaceState(e,n,a){this._history.replaceState(e,n,a)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function cm(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function sm(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function ai(t){return t&&t[0]!=="?"?`?${t}`:t}var ms=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:()=>c(p0),providedIn:"root"})}return t})(),m0=new x(""),p0=(()=>{class t extends ms{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(Q).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return cm(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+ai(this._platformLocation.search),a=this._platformLocation.hash;return a&&e?`${n}${a}`:n}pushState(e,n,a,o){let r=this.prepareExternalUrl(a+ai(o));this._platformLocation.pushState(e,n,r)}replaceState(e,n,a,o){let r=this.prepareExternalUrl(a+ai(o));this._platformLocation.replaceState(e,n,r)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(le(Fa),le(m0,8))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ps=(()=>{class t{_subject=new B;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=g0(sm(lm(n))),this._locationStrategy.onPopState(a=>{this._subject.next({url:this.path(!0),pop:!0,state:a.state,type:a.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+ai(n))}normalize(e){return t.stripTrailingSlash(f0(this._basePath,lm(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",a=null){this._locationStrategy.pushState(a,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ai(n)),a)}replaceState(e,n="",a=null){this._locationStrategy.replaceState(a,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ai(n)),a)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(a=>a(e,n))}subscribe(e,n,a){return this._subject.subscribe({next:e,error:n??void 0,complete:a??void 0})}static normalizeQueryParams=ai;static joinWithSlash=cm;static stripTrailingSlash=sm;static \u0275fac=function(n){return new(n||t)(le(ms))};static \u0275prov=S({token:t,factory:()=>h0(),providedIn:"root"})}return t})();function h0(){return new ps(le(ms))}function f0(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function lm(t){return t.replace(/\/index\.html$/,"")}function g0(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var hm={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KGS:[void 0,"\u20C0"],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XCG:["Cg."],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},xs=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(xs||{});var wt=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(wt||{}),Te=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(Te||{}),Ot=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(Ot||{}),vt={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function fm(t){return Rt(t)[Je.LocaleId]}function gm(t,i,e){let n=Rt(t),a=[n[Je.DayPeriodsFormat],n[Je.DayPeriodsStandalone]],o=Zt(a,i);return Zt(o,e)}function _m(t,i,e){let n=Rt(t),a=[n[Je.DaysFormat],n[Je.DaysStandalone]],o=Zt(a,i);return Zt(o,e)}function bm(t,i,e){let n=Rt(t),a=[n[Je.MonthsFormat],n[Je.MonthsStandalone]],o=Zt(a,i);return Zt(o,e)}function vm(t,i){let n=Rt(t)[Je.Eras];return Zt(n,i)}function Go(t,i){let e=Rt(t);return Zt(e[Je.DateFormat],i)}function Wo(t,i){let e=Rt(t);return Zt(e[Je.TimeFormat],i)}function Yo(t,i){let n=Rt(t)[Je.DateTimeFormat];return Zt(n,i)}function rn(t,i){let e=Rt(t),n=e[Je.NumberSymbols][i];if(typeof n>"u"){if(i===vt.CurrencyDecimal)return e[Je.NumberSymbols][vt.Decimal];if(i===vt.CurrencyGroup)return e[Je.NumberSymbols][vt.Group]}return n}function Nc(t,i){return Rt(t)[Je.NumberFormats][i]}function b0(t){return Rt(t)[Je.Currencies]}function ym(t){if(!t[Je.ExtraData])throw new ce(2303,!1)}function xm(t){let i=Rt(t);return ym(i),(i[Je.ExtraData][2]||[]).map(n=>typeof n=="string"?Fc(n):[Fc(n[0]),Fc(n[1])])}function Cm(t,i,e){let n=Rt(t);ym(n);let a=[n[Je.ExtraData][0],n[Je.ExtraData][1]],o=Zt(a,i)||[];return Zt(o,e)||[]}function Zt(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new ce(2304,!1)}function Fc(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}function wm(t,i,e="en"){let n=b0(e)[t]||hm[t]||[],a=n[1];return i==="narrow"&&typeof a=="string"?a:n[0]||t}var v0=2;function Em(t){let i,e=hm[t];return e&&(i=e[2]),typeof i=="number"?i:v0}var y0=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,hs={},x0=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,C0=256;function Dm(t,i,e,n){let a=T0(t);w0(i),i=Ln(e,i)||i;let r=[],u;for(;i;)if(u=x0.exec(i),u){r=r.concat(u.slice(1));let f=r.pop();if(!f)break;i=f}else{r.push(i);break}let p=a.getTimezoneOffset();n&&(p=Sm(n,p),a=I0(a,n));let h="";return r.forEach(f=>{let g=F0(f);h+=g?g(a,e,p):f==="''"?"'":f.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),h}function w0(t){if(t.length>C0)throw new ce(2300,!1)}function vs(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function Ln(t,i){let e=fm(t);if(hs[e]??={},hs[e][i])return hs[e][i];let n="";switch(i){case"shortDate":n=Go(t,Ot.Short);break;case"mediumDate":n=Go(t,Ot.Medium);break;case"longDate":n=Go(t,Ot.Long);break;case"fullDate":n=Go(t,Ot.Full);break;case"shortTime":n=Wo(t,Ot.Short);break;case"mediumTime":n=Wo(t,Ot.Medium);break;case"longTime":n=Wo(t,Ot.Long);break;case"fullTime":n=Wo(t,Ot.Full);break;case"short":let a=Ln(t,"shortTime"),o=Ln(t,"shortDate");n=fs(Yo(t,Ot.Short),[a,o]);break;case"medium":let r=Ln(t,"mediumTime"),u=Ln(t,"mediumDate");n=fs(Yo(t,Ot.Medium),[r,u]);break;case"long":let p=Ln(t,"longTime"),h=Ln(t,"longDate");n=fs(Yo(t,Ot.Long),[p,h]);break;case"full":let f=Ln(t,"fullTime"),g=Ln(t,"fullDate");n=fs(Yo(t,Ot.Full),[f,g]);break}return n&&(hs[e][i]=n),n}function fs(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return i!=null&&n in i?i[n]:e})),t}function on(t,i,e="-",n,a){let o="";(t<0||a&&t<=0)&&(a?t=-t+1:(t=-t,o=e));let r=String(t);for(;r.length<i;)r="0"+r;return n&&(r=r.slice(r.length-i)),o+r}function E0(t,i){return on(t,3).substring(0,i)}function rt(t,i,e=0,n=!1,a=!1){return function(o,r){let u=D0(t,o);if((e>0||u>-e)&&(u+=e),t===3)u===0&&e===-12&&(u=12);else if(t===6)return E0(u,i);let p=rn(r,vt.MinusSign);return on(u,i,p,n,a)}}function D0(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new ce(2301,!1)}}function Oe(t,i,e=wt.Format,n=!1){return function(a,o){return M0(a,o,t,i,e,n)}}function M0(t,i,e,n,a,o){switch(e){case 2:return bm(i,a,n)[t.getMonth()];case 1:return _m(i,a,n)[t.getDay()];case 0:let r=t.getHours(),u=t.getMinutes();if(o){let h=xm(i),f=Cm(i,a,n),g=h.findIndex(v=>{if(Array.isArray(v)){let[C,M]=v,b=r>=C.hours&&u>=C.minutes,U=r<M.hours||r===M.hours&&u<M.minutes;if(C.hours<M.hours){if(b&&U)return!0}else if(b||U)return!0}else if(v.hours===r&&v.minutes===u)return!0;return!1});if(g!==-1)return f[g]}return gm(i,a,n)[r<12?0:1];case 3:return vm(i,n)[t.getFullYear()<=0?0:1];default:let p=e;throw new ce(2302,!1)}}function gs(t){return function(i,e,n){let a=-1*n,o=rn(e,vt.MinusSign),r=a>0?Math.floor(a/60):Math.ceil(a/60);switch(t){case 0:return(a>=0?"+":"")+on(r,2,o)+on(Math.abs(a%60),2,o);case 1:return"GMT"+(a>=0?"+":"")+on(r,1,o);case 2:return"GMT"+(a>=0?"+":"")+on(r,2,o)+":"+on(Math.abs(a%60),2,o);case 3:return n===0?"Z":(a>=0?"+":"")+on(r,2,o)+":"+on(Math.abs(a%60),2,o);default:throw new ce(2310,!1)}}}var S0=0,bs=4;function A0(t){let i=vs(t,S0,1).getDay();return vs(t,0,1+(i<=bs?bs:bs+7)-i)}function Mm(t){let i=t.getDay(),e=i===0?-3:bs-i;return vs(t.getFullYear(),t.getMonth(),t.getDate()+e)}function kc(t,i=!1){return function(e,n){let a;if(i){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,r=e.getDate();a=1+Math.floor((r+o)/7)}else{let o=Mm(e),r=A0(o.getFullYear()),u=o.getTime()-r.getTime();a=1+Math.round(u/6048e5)}return on(a,t,rn(n,vt.MinusSign))}}function _s(t,i=!1){return function(e,n){let o=Mm(e).getFullYear();return on(o,t,rn(n,vt.MinusSign),i)}}var Ic={};function F0(t){if(Ic[t])return Ic[t];let i;switch(t){case"G":case"GG":case"GGG":i=Oe(3,Te.Abbreviated);break;case"GGGG":i=Oe(3,Te.Wide);break;case"GGGGG":i=Oe(3,Te.Narrow);break;case"y":i=rt(0,1,0,!1,!0);break;case"yy":i=rt(0,2,0,!0,!0);break;case"yyy":i=rt(0,3,0,!1,!0);break;case"yyyy":i=rt(0,4,0,!1,!0);break;case"Y":i=_s(1);break;case"YY":i=_s(2,!0);break;case"YYY":i=_s(3);break;case"YYYY":i=_s(4);break;case"M":case"L":i=rt(1,1,1);break;case"MM":case"LL":i=rt(1,2,1);break;case"MMM":i=Oe(2,Te.Abbreviated);break;case"MMMM":i=Oe(2,Te.Wide);break;case"MMMMM":i=Oe(2,Te.Narrow);break;case"LLL":i=Oe(2,Te.Abbreviated,wt.Standalone);break;case"LLLL":i=Oe(2,Te.Wide,wt.Standalone);break;case"LLLLL":i=Oe(2,Te.Narrow,wt.Standalone);break;case"w":i=kc(1);break;case"ww":i=kc(2);break;case"W":i=kc(1,!0);break;case"d":i=rt(2,1);break;case"dd":i=rt(2,2);break;case"c":case"cc":i=rt(7,1);break;case"ccc":i=Oe(1,Te.Abbreviated,wt.Standalone);break;case"cccc":i=Oe(1,Te.Wide,wt.Standalone);break;case"ccccc":i=Oe(1,Te.Narrow,wt.Standalone);break;case"cccccc":i=Oe(1,Te.Short,wt.Standalone);break;case"E":case"EE":case"EEE":i=Oe(1,Te.Abbreviated);break;case"EEEE":i=Oe(1,Te.Wide);break;case"EEEEE":i=Oe(1,Te.Narrow);break;case"EEEEEE":i=Oe(1,Te.Short);break;case"a":case"aa":case"aaa":i=Oe(0,Te.Abbreviated);break;case"aaaa":i=Oe(0,Te.Wide);break;case"aaaaa":i=Oe(0,Te.Narrow);break;case"b":case"bb":case"bbb":i=Oe(0,Te.Abbreviated,wt.Standalone,!0);break;case"bbbb":i=Oe(0,Te.Wide,wt.Standalone,!0);break;case"bbbbb":i=Oe(0,Te.Narrow,wt.Standalone,!0);break;case"B":case"BB":case"BBB":i=Oe(0,Te.Abbreviated,wt.Format,!0);break;case"BBBB":i=Oe(0,Te.Wide,wt.Format,!0);break;case"BBBBB":i=Oe(0,Te.Narrow,wt.Format,!0);break;case"h":i=rt(3,1,-12);break;case"hh":i=rt(3,2,-12);break;case"H":i=rt(3,1);break;case"HH":i=rt(3,2);break;case"m":i=rt(4,1);break;case"mm":i=rt(4,2);break;case"s":i=rt(5,1);break;case"ss":i=rt(5,2);break;case"S":i=rt(6,1);break;case"SS":i=rt(6,2);break;case"SSS":i=rt(6,3);break;case"Z":case"ZZ":case"ZZZ":i=gs(0);break;case"ZZZZZ":i=gs(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=gs(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=gs(2);break;default:return null}return Ic[t]=i,i}function Sm(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function k0(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function I0(t,i,e){let a=t.getTimezoneOffset(),o=Sm(i,a);return k0(t,-1*(o-a))}function T0(t){if(dm(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[a,o=1,r=1]=t.split("-").map(u=>+u);return vs(a,o-1,r)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(y0))return R0(n)}let i=new Date(t);if(!dm(i))throw new ce(2311,!1);return i}function R0(t){let i=new Date(0),e=0,n=0,a=t[8]?i.setUTCFullYear:i.setFullYear,o=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),a.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let r=Number(t[4]||0)-e,u=Number(t[5]||0)-n,p=Number(t[6]||0),h=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(i,r,u,p,h),i}function dm(t){return t instanceof Date&&!isNaN(t.valueOf())}var O0=/^(\d+)?\.((\d+)(-(\d+))?)?$/,um=22,ys=".",qo="0",P0=";",B0=",",Tc="#",mm="\xA4";function Am(t,i,e,n,a,o,r=!1){let u="",p=!1;if(!isFinite(t))u=rn(e,vt.Infinity);else{let h=N0(t);r&&(h=L0(h));let f=i.minInt,g=i.minFrac,v=i.maxFrac;if(o){let ae=o.match(O0);if(ae===null)throw new ce(2306,!1);let Re=ae[1],ie=ae[3],Xe=ae[5];Re!=null&&(f=Rc(Re)),ie!=null&&(g=Rc(ie)),Xe!=null?v=Rc(Xe):ie!=null&&g>v&&(v=g);let Ye=100;if(f>Ye||g>Ye||v>Ye)throw new ce(2306,!1)}V0(h,g,v);let C=h.digits,M=h.integerLen,b=h.exponent,U=[];for(p=C.every(ae=>!ae);M<f;M++)C.unshift(0);for(;M<0;M++)C.unshift(0);M>0?U=C.splice(M,C.length):(U=C,C=[0]);let K=[];for(C.length>=i.lgSize&&K.unshift(C.splice(-i.lgSize,C.length).join(""));C.length>i.gSize;)K.unshift(C.splice(-i.gSize,C.length).join(""));C.length&&K.unshift(C.join("")),u=K.join(rn(e,n)),U.length&&(u+=rn(e,a)+U.join("")),b&&(u+=rn(e,vt.Exponential)+"+"+b)}return t<0&&!p?u=i.negPre+u+i.negSuf:u=i.posPre+u+i.posSuf,u}function Fm(t,i,e,n,a){let o=Nc(i,xs.Currency),r=Im(o,rn(i,vt.MinusSign));return r.minFrac=Em(n),r.maxFrac=r.minFrac,Am(t,r,i,vt.CurrencyGroup,vt.CurrencyDecimal,a).replace(mm,e).replace(mm,"").trim()}function km(t,i,e){let n=Nc(i,xs.Decimal),a=Im(n,rn(i,vt.MinusSign));return Am(t,a,i,vt.Group,vt.Decimal,e)}function Im(t,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(P0),a=n[0],o=n[1],r=a.indexOf(ys)!==-1?a.split(ys):[a.substring(0,a.lastIndexOf(qo)+1),a.substring(a.lastIndexOf(qo)+1)],u=r[0],p=r[1]||"";e.posPre=u.substring(0,u.indexOf(Tc));for(let f=0;f<p.length;f++){let g=p.charAt(f);g===qo?e.minFrac=e.maxFrac=f+1:g===Tc?e.maxFrac=f+1:e.posSuf+=g}let h=u.split(B0);if(e.gSize=h[1]?h[1].length:0,e.lgSize=h[2]||h[1]?(h[2]||h[1]).length:0,o){let f=a.length-e.posPre.length-e.posSuf.length,g=o.indexOf(Tc);e.negPre=o.substring(0,g).replace(/'/g,""),e.negSuf=o.slice(g+f).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function L0(t){if(t.digits[0]===0)return t;let i=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(i===0?t.digits.push(0,0):i===1&&t.digits.push(0),t.integerLen+=2),t}function N0(t){let i=Math.abs(t)+"",e=0,n,a,o,r,u;for((a=i.indexOf(ys))>-1&&(i=i.replace(ys,"")),(o=i.search(/e/i))>0?(a<0&&(a=o),a+=+i.slice(o+1),i=i.substring(0,o)):a<0&&(a=i.length),o=0;i.charAt(o)===qo;o++);if(o===(u=i.length))n=[0],a=1;else{for(u--;i.charAt(u)===qo;)u--;for(a-=o,n=[],r=0;o<=u;o++,r++)n[r]=Number(i.charAt(o))}return a>um&&(n=n.splice(0,um-1),e=a-1,a=1),{digits:n,exponent:e,integerLen:a}}function V0(t,i,e){if(i>e)throw new ce(2307,!1);let n=t.digits,a=n.length-t.integerLen,o=Math.min(Math.max(i,a),e),r=o+t.integerLen,u=n[r];if(r>0){n.splice(Math.max(t.integerLen,r));for(let g=r;g<n.length;g++)n[g]=0}else{a=Math.max(0,a),t.integerLen=1,n.length=Math.max(1,r=o+1),n[0]=0;for(let g=1;g<r;g++)n[g]=0}if(u>=5)if(r-1<0){for(let g=0;g>r;g--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[r-1]++;for(;a<Math.max(0,o);a++)n.push(0);let p=o!==0,h=i+t.integerLen,f=n.reduceRight(function(g,v,C,M){return v=v+g,M[C]=v<10?v:v-10,p&&(M[C]===0&&C>=h?M.pop():p=!1),v>=10?1:0},0);f&&(n.unshift(f),t.integerLen++)}function Rc(t){let i=parseInt(t);if(isNaN(i))throw new ce(2305,!1);return i}var Oc=/\s+/,pm=[],zi=(()=>{class t{_ngEl;_renderer;initialClasses=pm;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Oc):pm}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Oc):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let a=this.stateMap.get(e);a!==void 0?(a.enabled!==n&&(a.changed=!0,a.enabled=n),a.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],a=e[1];a.changed?(this._toggleClass(n,a.enabled),a.changed=!1):a.touched||(a.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),a.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Oc).forEach(a=>{n?this._renderer.addClass(this._ngEl.nativeElement,a):this._renderer.removeClass(this._ngEl.nativeElement,a)})}static \u0275fac=function(n){return new(n||t)(oe(P),oe(be))};static \u0275dir=D({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var ji=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(X);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let a=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,a,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,a)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,a):!1,get:(e,n,a)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,a)}})}static \u0275fac=function(n){return new(n||t)(oe(mt))};static \u0275dir=D({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ve]})}return t})();function Cs(t,i){return new ce(2100,!1)}var Pc=class{createSubscription(i,e,n){return ot(()=>i.subscribe({next:e,error:n}))}dispose(i){ot(()=>i.unsubscribe())}},Bc=class{createSubscription(i,e,n){return i.then(a=>e?.(a),a=>n?.(a)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}},z0=new Bc,j0=new Pc,sn=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=c(ku);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(as(e))return z0;if($u(e))return j0;throw Cs(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(oe(me,16))};static \u0275pipe=Ni({name:"async",type:t,pure:!1})}return t})();var H0="mediumDate",Tm=new x(""),Rm=new x(""),Vc=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,a){this.locale=e,this.defaultTimezone=n,this.defaultOptions=a}transform(e,n,a,o){if(e==null||e===""||e!==e)return null;try{let r=n??this.defaultOptions?.dateFormat??H0,u=a??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Dm(e,r,o||this.locale,u)}catch(r){throw Cs(t,r.message)}}static \u0275fac=function(n){return new(n||t)(oe(Aa,16),oe(Tm,24),oe(Rm,24))};static \u0275pipe=Ni({name:"date",type:t,pure:!0})}return t})();var zc=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,a){if(!Om(e))return null;a||=this._locale;try{let o=Pm(e);return km(o,a,n)}catch(o){throw Cs(t,o.message)}}static \u0275fac=function(n){return new(n||t)(oe(Aa,16))};static \u0275pipe=Ni({name:"number",type:t,pure:!0})}return t})();var Hi=(()=>{class t{_locale;_defaultCurrencyCode;constructor(e,n="USD"){this._locale=e,this._defaultCurrencyCode=n}transform(e,n=this._defaultCurrencyCode,a="symbol",o,r){if(!Om(e))return null;r||=this._locale,typeof a=="boolean"&&(a=a?"symbol":"code");let u=n||this._defaultCurrencyCode;a!=="code"&&(a==="symbol"||a==="symbol-narrow"?u=wm(u,a==="symbol"?"wide":"narrow",r):u=a);try{let p=Pm(e);return Fm(p,r,u,n,o)}catch(p){throw Cs(t,p.message)}}static \u0275fac=function(n){return new(n||t)(oe(Aa,16),oe(cs,16))};static \u0275pipe=Ni({name:"currency",type:t,pure:!0})}return t})();function Om(t){return!(t==null||t===""||t!==t)}function Pm(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new ce(2309,!1);return t}var Pe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();function Ko(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[a,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(a.trim()===i)return decodeURIComponent(o)}return null}var Ui=class{};function Lm(t,i,e){return qu(t,i,e)}var jc="browser";function ws(t){return t===jc}var Xo=class{_doc;constructor(i){this._doc=i}manager},Es=(()=>{class t extends Xo{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,a,o){return e.addEventListener(n,a,o),()=>this.removeEventListener(e,n,a,o)}removeEventListener(e,n,a,o){return e.removeEventListener(n,a,o)}static \u0275fac=function(n){return new(n||t)(le(Q))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Ss=new x(""),Gc=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this});let a=e.filter(r=>!(r instanceof Es));this._plugins=a.slice().reverse();let o=e.find(r=>r instanceof Es);o&&this._plugins.push(o)}addEventListener(e,n,a,o){return this._findPluginFor(n).addEventListener(e,n,a,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new ce(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(le(Ss),le(W))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Hc="ng-app-id";function Nm(t){for(let i of t)i.remove()}function Vm(t,i){let e=i.createElement("style");return e.textContent=t,e}function G0(t,i,e,n){let a=t.head?.querySelectorAll(`style[${Hc}="${i}"],link[${Hc}="${i}"]`);if(a)for(let o of a)o.removeAttribute(Hc),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function $c(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Wc=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,a,o={}){this.doc=e,this.appId=n,this.nonce=a,G0(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let a of e)this.addUsage(a,this.inline,Vm);n?.forEach(a=>this.addUsage(a,this.external,$c))}removeStyles(e,n){for(let a of e)this.removeUsage(a,this.inline);n?.forEach(a=>this.removeUsage(a,this.external))}addUsage(e,n,a){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,a(e,this.doc)))})}removeUsage(e,n){let a=n.get(e);a&&(a.usage--,a.usage<=0&&(Nm(a.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Nm(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:a}]of this.inline)a.push(this.addElement(e,Vm(n,this.doc)));for(let[n,{elements:a}]of this.external)a.push(this.addElement(e,$c(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(le(Q),le(Bi),le(wa,8),le(ni))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Uc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Yc=/%COMP%/g;var jm="%COMP%",W0=`_nghost-${jm}`,Y0=`_ngcontent-${jm}`,q0=!0,K0=new x("",{factory:()=>q0});function X0(t){return Y0.replace(Yc,t)}function Q0(t){return W0.replace(Yc,t)}function Hm(t,i){return i.map(e=>e.replace(Yc,t))}var Jo=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,a,o,r,u,p=null,h=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=a,this.removeStylesOnCompDestroy=o,this.doc=r,this.ngZone=u,this.nonce=p,this.tracingService=h,this.defaultRenderer=new Qo(e,r,u,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let a=this.getOrCreateRenderer(e,n);return a instanceof Ms?a.applyToHost(e):a instanceof Zo&&a.applyStyles(),a}getOrCreateRenderer(e,n){let a=this.rendererByCompId,o=a.get(n.id);if(!o){let r=this.doc,u=this.ngZone,p=this.eventManager,h=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,g=this.tracingService;switch(n.encapsulation){case es.Emulated:o=new Ms(p,h,n,this.appId,f,r,u,g);break;case es.ShadowDom:return new Ds(p,e,n,r,u,this.nonce,g,h);case es.ExperimentalIsolatedShadowDom:return new Ds(p,e,n,r,u,this.nonce,g);default:o=new Zo(p,h,n,f,r,u,g);break}a.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(le(Gc),le(Wc),le(Bi),le(K0),le(Q),le(W),le(wa),le(ts,8))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Qo=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,a){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=a}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Uc[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(zm(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(zm(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new ce(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,a){if(a){e=a+":"+e;let o=Uc[a];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let a=Uc[n];a?i.removeAttributeNS(a,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,a){a&(Da.DashCase|Da.Important)?i.style.setProperty(e,n,a&Da.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&Da.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,a){if(typeof i=="string"&&(i=Qt().getGlobalEventTarget(this.doc,i),!i))throw new ce(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,a)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function zm(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Ds=class extends Qo{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,a,o,r,u,p){super(i,a,o,u),this.hostEl=e,this.sharedStylesHost=p,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let h=n.styles;h=Hm(n.id,h);for(let g of h){let v=document.createElement("style");r&&v.setAttribute("nonce",r),v.textContent=g,this.shadowRoot.appendChild(v)}let f=n.getExternalStyles?.();if(f)for(let g of f){let v=$c(g,a);r&&v.setAttribute("nonce",r),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Zo=class extends Qo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,a,o,r,u,p){super(i,o,r,u),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=a;let h=n.styles;this.styles=p?Hm(p,h):h,this.styleUrls=n.getExternalStyles?.(p)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Hu.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ms=class extends Zo{contentAttr;hostAttr;constructor(i,e,n,a,o,r,u,p){let h=a+"-"+n.id;super(i,e,n,o,r,u,p,h),this.contentAttr=X0(h),this.hostAttr=Q0(h)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var As=class t extends $o{supportsDOMEvents=!0;static makeCurrent(){Ac(new t)}onAndCancel(i,e,n,a){return i.addEventListener(e,n,a),()=>{i.removeEventListener(e,n,a)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=J0();return e==null?null:ev(e)}resetBaseElement(){er=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Ko(document.cookie,i)}},er=null;function J0(){return er=er||document.head.querySelector("base"),er?er.getAttribute("href"):null}function ev(t){return new URL(t,document.baseURI).pathname}var tv=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Um=["alt","control","meta","shift"],nv={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},iv={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},$m=(()=>{class t extends Xo{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,a,o){let r=t.parseEventName(n),u=t.eventCallback(r.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Qt().onAndCancel(e,r.domEventName,u,o))}static parseEventName(e){let n=e.toLowerCase().split("."),a=n.shift();if(n.length===0||!(a==="keydown"||a==="keyup"))return null;let o=t._normalizeKey(n.pop()),r="",u=n.indexOf("code");if(u>-1&&(n.splice(u,1),r="code."),Um.forEach(h=>{let f=n.indexOf(h);f>-1&&(n.splice(f,1),r+=h+".")}),r+=o,n.length!=0||o.length===0)return null;let p={};return p.domEventName=a,p.fullKey=r,p}static matchEventFullKeyCode(e,n){let a=nv[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(a=e.code,o="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),Um.forEach(r=>{if(r!==a){let u=iv[r];u(e)&&(o+=r+".")}}),o+=a,o===n)}static eventCallback(e,n,a){return o=>{t.matchEventFullKeyCode(o,e)&&a.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(le(Q))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();async function qc(t,i,e){let n=k({rootComponent:t},av(i,e));return im(n)}function av(t,i){return{platformRef:i?.platformRef,appProviders:[...cv,...t?.providers??[]],platformProviders:lv}}function ov(){As.makeCurrent()}function rv(){return new Pi}function sv(){return Tu(document),document}var lv=[{provide:ni,useValue:jc},{provide:Ru,useValue:ov,multi:!0},{provide:Q,useFactory:sv}];var cv=[{provide:Au,useValue:"root"},{provide:Pi,useFactory:rv},{provide:Ss,useClass:Es,multi:!0},{provide:Ss,useClass:$m,multi:!0},Jo,Wc,Gc,{provide:_t,useExisting:Jo},{provide:Ui,useClass:tv},[]];var oi=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let a=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(a,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,n]of i.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let a=i.op==="a"?(this.headers.get(e)||[]).slice():[];a.push(...n),this.headers.set(e,a);break;case"d":let o=i.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let r=Array.isArray(o)?o:[o],u=this.headers.get(e);if(!u)return;u=u.filter(p=>r.indexOf(p)===-1),u.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,u)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),a=i.toLowerCase();this.headers.set(a,n),this.maybeSetNormalizedName(i,a)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var ks=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Is=class{encodeKey(i){return Gm(i)}encodeValue(i){return Gm(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function dv(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(a=>{let o=a.indexOf("="),[r,u]=o==-1?[i.decodeKey(a),""]:[i.decodeKey(a.slice(0,o)),i.decodeValue(a.slice(o+1))],p=e.get(r)||[];p.push(u),e.set(r,p)}),e}var uv=/%(\d[a-f0-9])/gi,mv={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Gm(t){return encodeURIComponent(t).replace(uv,(i,e)=>mv[e]??i)}function Fs(t){return`${t}`}var Nn=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Is,i.fromString){if(i.fromObject)throw new ce(2805,!1);this.map=dv(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],a=Array.isArray(n)?n.map(Fs):[Fs(n)];this.map.set(e,a)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let a=i[n];Array.isArray(a)?a.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:a,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(Fs(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=(this.map.get(i.param)||[]).slice(),a=n.indexOf(Fs(i.value));a!==-1&&n.splice(a,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function pv(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Wm(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Ym(t){return typeof Blob<"u"&&t instanceof Blob}function qm(t){return typeof FormData<"u"&&t instanceof FormData}function hv(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Km="Content-Type",Xm="Accept",Qm="text/plain",Zm="application/json",fv=`${Zm}, ${Qm}, */*`,ka=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,a){this.url=e,this.method=i.toUpperCase();let o;if(pv(this.method)||a?(this.body=n!==void 0?n:null,o=a):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new ce(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new oi,this.context??=new ks,!this.params)this.params=new Nn,this.urlWithParams=e;else{let r=this.params.toString();if(r.length===0)this.urlWithParams=e;else{let u=e.indexOf("?"),p=u===-1?"?":u<e.length-1?"&":"";this.urlWithParams=e+p+r}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Wm(this.body)||Ym(this.body)||qm(this.body)||hv(this.body)?this.body:this.body instanceof Nn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||qm(this.body)?null:Ym(this.body)?this.body.type||null:Wm(this.body)?null:typeof this.body=="string"?Qm:this.body instanceof Nn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Zm:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,a=i.responseType||this.responseType,o=i.keepalive??this.keepalive,r=i.priority||this.priority,u=i.cache||this.cache,p=i.mode||this.mode,h=i.redirect||this.redirect,f=i.credentials||this.credentials,g=i.referrer??this.referrer,v=i.integrity||this.integrity,C=i.referrerPolicy||this.referrerPolicy,M=i.transferCache??this.transferCache,b=i.timeout??this.timeout,U=i.body!==void 0?i.body:this.body,K=i.withCredentials??this.withCredentials,ae=i.reportProgress??this.reportProgress,Re=i.headers||this.headers,ie=i.params||this.params,Xe=i.context??this.context;return i.setHeaders!==void 0&&(Re=Object.keys(i.setHeaders).reduce((Ye,Tt)=>Ye.set(Tt,i.setHeaders[Tt]),Re)),i.setParams&&(ie=Object.keys(i.setParams).reduce((Ye,Tt)=>Ye.set(Tt,i.setParams[Tt]),ie)),new t(e,n,U,{params:ie,headers:Re,context:Xe,reportProgress:ae,responseType:a,withCredentials:K,transferCache:M,keepalive:o,cache:u,priority:r,timeout:b,mode:p,redirect:h,credentials:f,referrer:g,integrity:v,referrerPolicy:C})}},Gi=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Gi||{}),Ta=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new oi,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Ts=class t extends Ta{constructor(i={}){super(i)}type=Gi.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},tr=class t extends Ta{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Gi.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},Ia=class extends Ta{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},gv=200,_v=204;var bv=new x("");var vv=/^\)\]\}',?\n/;var Xc=(()=>{class t{xhrFactory;tracingService=c(ts,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new ce(-2800,!1);let n=this.xhrFactory;return Qe(null).pipe(lt(()=>new it(o=>{let r=n.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach((U,K)=>r.setRequestHeader(U,K.join(","))),e.headers.has(Xm)||r.setRequestHeader(Xm,fv),!e.headers.has(Km)){let U=e.detectContentTypeHeader();U!==null&&r.setRequestHeader(Km,U)}if(e.timeout&&(r.timeout=e.timeout),e.responseType){let U=e.responseType.toLowerCase();r.responseType=U!=="json"?U:"text"}let u=e.serializeBody(),p=null,h=()=>{if(p!==null)return p;let U=r.statusText||"OK",K=new oi(r.getAllResponseHeaders()),ae=r.responseURL||e.url;return p=new Ts({headers:K,status:r.status,statusText:U,url:ae}),p},f=this.maybePropagateTrace(()=>{let{headers:U,status:K,statusText:ae,url:Re}=h(),ie=null;K!==_v&&(ie=typeof r.response>"u"?r.responseText:r.response),K===0&&(K=ie?gv:0);let Xe=K>=200&&K<300;if(e.responseType==="json"&&typeof ie=="string"){let Ye=ie;ie=ie.replace(vv,"");try{ie=ie!==""?JSON.parse(ie):null}catch(Tt){ie=Ye,Xe&&(Xe=!1,ie={error:Tt,text:ie})}}Xe?(o.next(new tr({body:ie,headers:U,status:K,statusText:ae,url:Re||void 0})),o.complete()):o.error(new Ia({error:ie,headers:U,status:K,statusText:ae,url:Re||void 0}))}),g=this.maybePropagateTrace(U=>{let{url:K}=h(),ae=new Ia({error:U,status:r.status||0,statusText:r.statusText||"Unknown Error",url:K||void 0});o.error(ae)}),v=g;e.timeout&&(v=this.maybePropagateTrace(U=>{let{url:K}=h(),ae=new Ia({error:new DOMException("Request timed out","TimeoutError"),status:r.status||0,statusText:r.statusText||"Request timeout",url:K||void 0});o.error(ae)}));let C=!1,M=this.maybePropagateTrace(U=>{C||(o.next(h()),C=!0);let K={type:Gi.DownloadProgress,loaded:U.loaded};U.lengthComputable&&(K.total=U.total),e.responseType==="text"&&r.responseText&&(K.partialText=r.responseText),o.next(K)}),b=this.maybePropagateTrace(U=>{let K={type:Gi.UploadProgress,loaded:U.loaded};U.lengthComputable&&(K.total=U.total),o.next(K)});return r.addEventListener("load",f),r.addEventListener("error",g),r.addEventListener("timeout",v),r.addEventListener("abort",g),e.reportProgress&&(r.addEventListener("progress",M),u!==null&&r.upload&&r.upload.addEventListener("progress",b)),r.send(u),o.next({type:Gi.Sent}),()=>{r.removeEventListener("error",g),r.removeEventListener("abort",g),r.removeEventListener("load",f),r.removeEventListener("timeout",v),e.reportProgress&&(r.removeEventListener("progress",M),u!==null&&r.upload&&r.upload.removeEventListener("progress",b)),r.readyState!==r.DONE&&r.abort()}})))}static \u0275fac=function(n){return new(n||t)(le(Ui))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yv=new x("",{factory:()=>!0}),xv="XSRF-TOKEN",Cv=new x("",{factory:()=>xv}),wv="X-XSRF-TOKEN",Ev=new x("",{factory:()=>wv}),Dv=(()=>{class t{cookieName=c(Cv);doc=c(Q);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ko(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Jm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=le(Dv),a},providedIn:"root"})}return t})();function ep(t,i){if(!c(yv)||t.method==="GET"||t.method==="HEAD")return i(t);try{let a=c(Fa).href,{origin:o}=new URL(a),{origin:r}=new URL(t.url,o);if(o!==r)return i(t)}catch{return i(t)}let e=c(Jm).getToken(),n=c(Ev);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}function Mv(t,i){return i(t)}function Sv(t,i,e){return(n,a)=>Fu(e,()=>i(n,o=>t(o,a)))}var tp=new x("",{factory:()=>[ep]}),np=new x(""),ip=new x("",{factory:()=>!0});var Qc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=le(Xc),a},providedIn:"root"})}return t})();var Rs=(()=>{class t{backend;injector;chain=null;pendingTasks=c(vc);contributeToStability=c(ip);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=this.injector.get(Os,null,{skipSelf:!0}),a=n!==null&&this.backend===n,o=this.injector.get(np,[],a?{self:!0}:void 0),r=Array.from(new Set([...this.injector.get(tp),...o]));this.chain=r.reduceRight((u,p)=>Sv(u,p,this.injector),Mv)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,a=>this.backend.handle(a)).pipe(Jr(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(le(Qc),le(nn))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Os=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=le(Rs),a},providedIn:"root"})}return t})();function Kc(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var wn=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,a={}){let o;if(e instanceof ka)o=e;else{let p;a.headers instanceof oi?p=a.headers:p=new oi(a.headers);let h;a.params&&(a.params instanceof Nn?h=a.params:h=new Nn({fromObject:a.params})),o=new ka(e,n,a.body!==void 0?a.body:null,{headers:p,context:a.context,params:h,reportProgress:a.reportProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials,transferCache:a.transferCache,keepalive:a.keepalive,priority:a.priority,cache:a.cache,mode:a.mode,redirect:a.redirect,credentials:a.credentials,referrer:a.referrer,referrerPolicy:a.referrerPolicy,integrity:a.integrity,timeout:a.timeout})}let r=Qe(o).pipe(Eu(p=>this.handler.handle(p)));if(e instanceof ka||a.observe==="events")return r;let u=r.pipe(se(p=>p instanceof tr));switch(a.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return u.pipe(xe(p=>{if(p.body!==null&&!(p.body instanceof ArrayBuffer))throw new ce(2806,!1);return p.body}));case"blob":return u.pipe(xe(p=>{if(p.body!==null&&!(p.body instanceof Blob))throw new ce(2807,!1);return p.body}));case"text":return u.pipe(xe(p=>{if(p.body!==null&&typeof p.body!="string")throw new ce(2808,!1);return p.body}));default:return u.pipe(xe(p=>p.body))}case"response":return u;default:throw new ce(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Nn().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,a={}){return this.request("PATCH",e,Kc(a,n))}post(e,n,a={}){return this.request("POST",e,Kc(a,n))}put(e,n,a={}){return this.request("PUT",e,Kc(a,n))}static \u0275fac=function(n){return new(n||t)(le(Os))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Zc(...t){let i=[wn,Rs,{provide:Os,useExisting:Rs},{provide:Qc,useFactory:()=>c(bv,{optional:!0})??c(Xc)},{provide:tp,useValue:ep,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return Vo(i)}var Wi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=le(Fv),a},providedIn:"root"})}return t})(),Fv=(()=>{class t extends Wi{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case At.NONE:return n;case At.HTML:return Ea(n,"HTML")?Li(n):zu(this._doc,String(n)).toString();case At.STYLE:return Ea(n,"Style")?Li(n):n;case At.SCRIPT:if(Ea(n,"Script"))return Li(n);throw new ce(5200,!1);case At.URL:return Ea(n,"URL")?Li(n):Vu(String(n));case At.RESOURCE_URL:if(Ea(n,"ResourceURL"))return Li(n);throw new ce(5201,!1);default:throw new ce(5202,!1)}}bypassSecurityTrustHtml(e){return Ou(e)}bypassSecurityTrustStyle(e){return Pu(e)}bypassSecurityTrustScript(e){return Bu(e)}bypassSecurityTrustUrl(e){return Lu(e)}bypassSecurityTrustResourceUrl(e){return Nu(e)}static \u0275fac=function(n){return new(n||t)(le(Q))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jc;try{Jc=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Jc=!1}var pe=(()=>{class t{_platformId=c(ni);isBrowser=this._platformId?ws(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Jc)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ed;function ap(){if(ed==null){let t=typeof document<"u"?document.head:null;ed=!!(t&&(t.createShadowRoot||t.attachShadow))}return ed}function td(t){if(ap()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function ri(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let i=t.shadowRoot.activeElement;if(i===t)break;t=i}return t}function dt(t){return t.composedPath?t.composedPath()[0]:t.target}function nd(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ps=new WeakMap,Be=(()=>{class t{_appRef;_injector=c(X);_environmentInjector=c(nn);load(e){let n=this._appRef=this._appRef||this._injector.get(ii),a=Ps.get(n);a||(a={loaders:new Set,refs:[]},Ps.set(n,a),n.onDestroy(()=>{Ps.get(n)?.refs.forEach(o=>o.destroy()),Ps.delete(n)})),a.loaders.has(e)||(a.loaders.add(e),a.refs.push(ds(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function tt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function Vn(t){return Array.isArray(t)?t:[t]}function jt(t,i=0){return op(t)?Number(t):arguments.length===2?i:0}function op(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Ft(t){return t instanceof P?t.nativeElement:t}var Iv=new x("cdk-dir-doc",{providedIn:"root",factory:()=>c(Q)}),Tv=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function rp(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Tv.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var We=(()=>{class t{get value(){return this.valueSignal()}valueSignal=ne("ltr");change=new O;constructor(){let e=c(Iv,{optional:!0});if(e){let n=e.body?e.body.dir:null,a=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(rp(n||a||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ln=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(ln||{}),Bs,Yi;function Ls(){if(Yi==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Yi=!1,Yi;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Yi=!0;else{let t=Element.prototype.scrollTo;t?Yi=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Yi=!1}}return Yi}function Ra(){if(typeof document!="object"||!document)return ln.NORMAL;if(Bs==null){let t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),Bs=ln.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Bs=t.scrollLeft===0?ln.NEGATED:ln.INVERTED),t.remove()}return Bs}var ee=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();var Rv=20,si=(()=>{class t{_ngZone=c(W);_platform=c(pe);_renderer=c(_t).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new B;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Rv){return this._platform.isBrowser?new it(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let a=e>0?this._scrolled.pipe(fc(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Qe()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let a=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(se(o=>!o||a.indexOf(o)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((a,o)=>{this._scrollableContainsElement(o,e)&&n.push(o)}),n}_scrollableContainsElement(e,n){let a=Ft(n),o=e.getElementRef().nativeElement;do if(a==o)return!0;while(a=a.parentElement);return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nr=(()=>{class t{elementRef=c(P);scrollDispatcher=c(si);ngZone=c(W);dir=c(We,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new B;_renderer=c(be);_cleanupScroll;_elementScrolled=new B;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,a=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=a?e.end:e.start),e.right==null&&(e.right=a?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),a&&Ra()!=ln.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),Ra()==ln.INVERTED?e.left=e.right:Ra()==ln.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;Ls()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",a="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let r=this.dir&&this.dir.value=="rtl";return e=="start"?e=r?a:n:e=="end"&&(e=r?n:a),r&&Ra()==ln.INVERTED?e==n?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:r&&Ra()==ln.NEGATED?e==n?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==n?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),Ov=20,Ht=(()=>{class t{_platform=c(pe);_listeners;_viewportSize=null;_change=new B;_document=c(Q);constructor(){let e=c(W),n=c(_t).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let a=o=>this._change.next(o);this._listeners=[n.listen("window","resize",a),n.listen("window","orientationchange",a)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:a}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+a,right:e.left+n,height:a,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),a=e.documentElement,o=a.getBoundingClientRect(),r=-o.top||e.body?.scrollTop||n.scrollY||a.scrollTop||0,u=-o.left||e.body?.scrollLeft||n.scrollX||a.scrollLeft||0;return{top:r,left:u}}change(e=Ov){return e>0?this._change.pipe(fc(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})(),id=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ee,cn,ee,cn]})}return t})();var ad={},Ae=class t{_appId=c(Bi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),ad.hasOwnProperty(i)||(ad[i]=0),`${i}${e?t._infix+"-":""}${ad[i]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var ir=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},li=class extends ir{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,n,a,o){super(),this.component=i,this.viewContainerRef=e,this.injector=n,this.projectableNodes=a,this.bindings=o||null}},Et=class extends ir{templateRef;viewContainerRef;context;injector;constructor(i,e,n,a){super(),this.templateRef=i,this.viewContainerRef=e,this.context=n,this.injector=a}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},od=class extends ir{element;constructor(i){super(),this.element=i instanceof P?i.nativeElement:i}},Oa=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof li)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Et)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof od)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ar=class extends Oa{outletElement;_appRef;_defaultInjector;constructor(i,e,n){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=n}attachComponentPortal(i){let e;if(i.viewContainerRef){let n=i.injector||i.viewContainerRef.injector,a=n.get(is,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:n,ngModuleRef:a,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,a=i.injector||this._defaultInjector||X.NULL,o=a.get(nn,n.injector);e=ds(i.component,{elementInjector:a,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,n=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return n.rootNodes.forEach(a=>this.outletElement.appendChild(a)),n.detectChanges(),this.setDisposeFn(()=>{let a=e.indexOf(n);a!==-1&&e.remove(a)}),this._attachedPortal=i,n}attachDomPortal=i=>{let e=i.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},sp=(()=>{class t extends Et{constructor(){let e=c(ut),n=c(mt);super(e,n)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[te]})}return t})(),En=(()=>{class t extends Oa{_moduleRef=c(is,{optional:!0});_document=c(Q);_viewContainerRef=c(mt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new O;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,a=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=e,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let a=this._document.createComment("dom-portal");e.setAttachedHost(this),n.parentNode.insertBefore(a,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(n,a)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[te]})}return t})(),zn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();function Le(t,...i){return i.length?i.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var lp=Ls();function La(t){return new Ns(t.get(Ht),t.get(Q))}var Ns=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=tt(-this._previousScrollPosition.left),i.style.top=tt(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,n=i.style,a=e.style,o=n.scrollBehavior||"",r=a.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),lp&&(n.scrollBehavior=a.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),lp&&(n.scrollBehavior=o,a.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};function fp(t,i){return new Vs(t.get(si),t.get(W),t.get(Ht),i)}var Vs=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,n,a){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=n,this._config=a}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(se(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var or=class{enable(){}disable(){}attach(){}};function rd(t,i){return i.some(e=>{let n=t.bottom<e.top,a=t.top>e.bottom,o=t.right<e.left,r=t.left>e.right;return n||a||o||r})}function cp(t,i){return i.some(e=>{let n=t.top<e.top,a=t.bottom>e.bottom,o=t.left<e.left,r=t.right>e.right;return n||a||o||r})}function un(t,i){return new zs(t.get(si),t.get(Ht),t.get(W),i)}var zs=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,n,a){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=n,this._config=a}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:a}=this._viewportRuler.getViewportSize();rd(e,[{width:n,height:a,bottom:a,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},gp=(()=>{class t{_injector=c(X);constructor(){}noop=()=>new or;close=e=>fp(this._injector,e);block=()=>La(this._injector);reposition=e=>un(this._injector,e);static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dn=class{positionStrategy;scrollStrategy=new or;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let n of e)i[n]!==void 0&&(this[n]=i[n])}}};var js=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var _p=(()=>{class t{_attachedOverlays=[];_document=c(Q);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,a){return a.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bp=(()=>{class t extends _p{_ngZone=c(W);_renderer=c(_t).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let a=n.length-1;a>-1;a--){let o=n[a];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vp=(()=>{class t extends _p{_platform=c(pe);_ngZone=c(W);_renderer=c(_t).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,a={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(n,"pointerdown",this._pointerDownListener,a),o.listen(n,"click",this._clickListener,a),o.listen(n,"auxclick",this._clickListener,a),o.listen(n,"contextmenu",this._clickListener,a)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=dt(e)};_clickListener=e=>{let n=dt(e),a=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let u=o[r],p=u._outsidePointerEvents;if(!(!u.hasAttached()||!this.canReceiveEvent(u,e,p))){if(dp(u.overlayElement,n)||dp(u.overlayElement,a))break;this._ngZone?this._ngZone.run(()=>p.next(e)):p.next(e)}}};static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function dp(t,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=i;for(;n;){if(n===t)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var yp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,a){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),$s=(()=>{class t{_platform=c(pe);_containerElement;_document=c(Q);_styleLoader=c(Be);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||nd()){let a=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<a.length;o++)a[o].remove()}let n=this._document.createElement("div");n.classList.add(e),nd()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(yp)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sd=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,n,a){this._renderer=e,this._ngZone=n,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",a)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ld(t){return t&&t.nodeType===1}var Pa=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new B;_attachments=new B;_detachments=new B;_positionStrategy;_scrollStrategy;_locationChanges=ge.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new B;_outsidePointerEvents=new B;_afterNextRenderRef;constructor(i,e,n,a,o,r,u,p,h,f=!1,g,v){this._portalOutlet=i,this._host=e,this._pane=n,this._config=a,this._ngZone=o,this._keyboardDispatcher=r,this._document=u,this._location=p,this._outsideClickDispatcher=h,this._animationsDisabled=f,this._injector=g,this._renderer=v,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ze(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=k(k({},this._config),i),this._updateElementSize()}setDirection(i){this._config=De(k({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=tt(this._config.width),i.height=tt(this._config.height),i.minWidth=tt(this._config.minWidth),i.minHeight=tt(this._config.minHeight),i.maxWidth=tt(this._config.maxWidth),i.maxHeight=tt(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ld(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new sd(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,n){let a=Vn(e||[]).filter(o=>!!o);a.length&&(n?i.classList.add(...a):i.classList.remove(...a))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Ze(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},up="cdk-overlay-connected-position-bounding-box",Bv=/([A-Za-z%]+)$/;function jn(t,i){return new Hs(i,t.get(Ht),t.get(Q),t.get(pe),t.get($s))}var Hs=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new B;_resizeSubscription=ge.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,n,a,o){this._viewportRuler=e,this._document=n,this._platform=a,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(up),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,n=this._viewportRect,a=this._containerRect,o=[],r;for(let u of this._preferredPositions){let p=this._getOriginPoint(i,a,u),h=this._getOverlayPoint(p,e,u),f=this._getOverlayFit(h,e,n,u);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(u,p);return}if(this._canFitWithFlexibleDimensions(f,h,n)){o.push({position:u,origin:p,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(p,u)});continue}(!r||r.overlayFit.visibleArea<f.visibleArea)&&(r={overlayFit:f,overlayPoint:h,originPoint:p,position:u,overlayRect:e})}if(o.length){let u=null,p=-1;for(let h of o){let f=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);f>p&&(p=f,u=h)}this._isPushed=!1,this._applyPosition(u.position,u.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&qi(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(up),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:ld(this._origin)?this._origin:null}_getOriginPoint(i,e,n){let a;if(n.originX=="center")a=i.left+i.width/2;else{let r=this._isRtl()?i.right:i.left,u=this._isRtl()?i.left:i.right;a=n.originX=="start"?r:u}e.left<0&&(a-=e.left);let o;return n.originY=="center"?o=i.top+i.height/2:o=n.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:a,y:o}}_getOverlayPoint(i,e,n){let a;n.overlayX=="center"?a=-e.width/2:n.overlayX==="start"?a=this._isRtl()?-e.width:0:a=this._isRtl()?0:-e.width;let o;return n.overlayY=="center"?o=-e.height/2:o=n.overlayY=="top"?0:-e.height,{x:i.x+a,y:i.y+o}}_getOverlayFit(i,e,n,a){let o=pp(e),{x:r,y:u}=i,p=this._getOffset(a,"x"),h=this._getOffset(a,"y");p&&(r+=p),h&&(u+=h);let f=0-r,g=r+o.width-n.width,v=0-u,C=u+o.height-n.height,M=this._subtractOverflows(o.width,f,g),b=this._subtractOverflows(o.height,v,C),U=M*b;return{visibleArea:U,isCompletelyWithinViewport:o.width*o.height===U,fitsInViewportVertically:b===o.height,fitsInViewportHorizontally:M==o.width}}_canFitWithFlexibleDimensions(i,e,n){if(this._hasFlexibleDimensions){let a=n.bottom-e.y,o=n.right-e.x,r=mp(this._overlayRef.getConfig().minHeight),u=mp(this._overlayRef.getConfig().minWidth),p=i.fitsInViewportVertically||r!=null&&r<=a,h=i.fitsInViewportHorizontally||u!=null&&u<=o;return p&&h}return!1}_pushOverlayOnScreen(i,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let a=pp(e),o=this._viewportRect,r=Math.max(i.x+a.width-o.width,0),u=Math.max(i.y+a.height-o.height,0),p=Math.max(o.top-n.top-i.y,0),h=Math.max(o.left-n.left-i.x,0),f=0,g=0;return a.width<=o.width?f=h||-r:f=i.x<this._getViewportMarginStart()?o.left-n.left-i.x:0,a.height<=o.height?g=p||-u:g=i.y<this._getViewportMarginTop()?o.top-n.top-i.y:0,this._previousPushAmount={x:f,y:g},{x:i.x+f,y:i.y+g}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Lv(this._lastScrollVisibility,n)){let a=new js(i,n);this._positionChanges.next(a)}this._lastScrollVisibility=n}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,a=i.overlayY;i.overlayX==="center"?n="center":this._isRtl()?n=i.overlayX==="start"?"right":"left":n=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${n} ${a}`}_calculateBoundingBoxRect(i,e){let n=this._viewportRect,a=this._isRtl(),o,r,u;if(e.overlayY==="top")r=i.y,o=n.height-r+this._getViewportMarginBottom();else if(e.overlayY==="bottom")u=n.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=n.height-u+this._getViewportMarginTop();else{let C=Math.min(n.bottom-i.y+n.top,i.y),M=this._lastBoundingBoxSize.height;o=C*2,r=i.y-C,o>M&&!this._isInitialRender&&!this._growAfterOpen&&(r=i.y-M/2)}let p=e.overlayX==="start"&&!a||e.overlayX==="end"&&a,h=e.overlayX==="end"&&!a||e.overlayX==="start"&&a,f,g,v;if(h)v=n.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=i.x-this._getViewportMarginStart();else if(p)g=i.x,f=n.right-i.x-this._getViewportMarginEnd();else{let C=Math.min(n.right-i.x+n.left,i.x),M=this._lastBoundingBoxSize.width;f=C*2,g=i.x-C,f>M&&!this._isInitialRender&&!this._growAfterOpen&&(g=i.x-M/2)}return{top:r,left:g,bottom:u,right:v,width:f,height:o}}_setBoundingBoxStyles(i,e){let n=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let a={};if(this._hasExactPosition())a.top=a.left="0",a.bottom=a.right="auto",a.maxHeight=a.maxWidth="",a.width=a.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;a.width=tt(n.width),a.height=tt(n.height),a.top=tt(n.top)||"auto",a.bottom=tt(n.bottom)||"auto",a.left=tt(n.left)||"auto",a.right=tt(n.right)||"auto",e.overlayX==="center"?a.alignItems="center":a.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?a.justifyContent="center":a.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(a.maxHeight=tt(o)),r&&(a.maxWidth=tt(r))}this._lastBoundingBoxSize=n,qi(this._boundingBox.style,a)}_resetBoundingBoxStyles(){qi(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){qi(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let n={},a=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(a){let f=this._viewportRuler.getViewportScrollPosition();qi(n,this._getExactOverlayY(e,i,f)),qi(n,this._getExactOverlayX(e,i,f))}else n.position="static";let u="",p=this._getOffset(e,"x"),h=this._getOffset(e,"y");p&&(u+=`translateX(${p}px) `),h&&(u+=`translateY(${h}px)`),n.transform=u.trim(),r.maxHeight&&(a?n.maxHeight=tt(r.maxHeight):o&&(n.maxHeight="")),r.maxWidth&&(a?n.maxWidth=tt(r.maxWidth):o&&(n.maxWidth="")),qi(this._pane.style,n)}_getExactOverlayY(i,e,n){let a={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n)),i.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;a.bottom=`${r-(o.y+this._overlayRect.height)}px`}else a.top=tt(o.y);return a}_getExactOverlayX(i,e,n){let a={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n));let r;if(this._isRtl()?r=i.overlayX==="end"?"left":"right":r=i.overlayX==="end"?"right":"left",r==="right"){let u=this._document.documentElement.clientWidth;a.right=`${u-(o.x+this._overlayRect.width)}px`}else a.left=tt(o.x);return a}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:cp(i,n),isOriginOutsideView:rd(i,n),isOverlayClipped:cp(e,n),isOverlayOutsideView:rd(e,n)}}_subtractOverflows(i,...e){return e.reduce((n,a)=>n-Math.max(a,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+i-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Vn(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof P)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,n=i.height||0;return{top:i.y,bottom:i.y+n,left:i.x,right:i.x+e,height:n,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let n=e.getBoundingClientRect();return i&&(e.style.display=""),n}};function qi(t,i){for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}function mp(t){if(typeof t!="number"&&t!=null){let[i,e]=t.split(Bv);return!e||e==="px"?parseFloat(i):null}return t||null}function pp(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function Lv(t,i){return t===i?!0:t.isOriginClipped===i.isOriginClipped&&t.isOriginOutsideView===i.isOriginOutsideView&&t.isOverlayClipped===i.isOverlayClipped&&t.isOverlayOutsideView===i.isOverlayOutsideView}var hp="cdk-global-overlay-wrapper";function Na(t){return new Us}var Us=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(hp),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:a,height:o,maxWidth:r,maxHeight:u}=n,p=(a==="100%"||a==="100vw")&&(!r||r==="100%"||r==="100vw"),h=(o==="100%"||o==="100vh")&&(!u||u==="100%"||u==="100vh"),f=this._xPosition,g=this._xOffset,v=this._overlayRef.getConfig().direction==="rtl",C="",M="",b="";p?b="flex-start":f==="center"?(b="center",v?M=g:C=g):v?f==="left"||f==="end"?(b="flex-end",C=g):(f==="right"||f==="start")&&(b="flex-start",M=g):f==="left"||f==="start"?(b="flex-start",C=g):(f==="right"||f==="end")&&(b="flex-end",M=g),i.position=this._cssPosition,i.marginLeft=p?"0":C,i.marginTop=h?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=p?"0":M,e.justifyContent=b,e.alignItems=h?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(hp),n.justifyContent=n.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},xp=(()=>{class t{_injector=c(X);constructor(){}global(){return Na()}flexibleConnectedTo(e){return jn(this._injector,e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rr=new x("OVERLAY_DEFAULT_CONFIG");function mn(t,i){t.get(Be).load(yp);let e=t.get($s),n=t.get(Q),a=t.get(Ae),o=t.get(ii),r=t.get(We),u=t.get(be,null,{optional:!0})||t.get(_t).createRenderer(null,null),p=new dn(i),h=t.get(rr,null,{optional:!0})?.usePopover??!0;p.direction=p.direction||r.value,"showPopover"in n.body?p.usePopover=i?.usePopover??h:p.usePopover=!1;let f=n.createElement("div"),g=n.createElement("div");f.id=a.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),g.appendChild(f),p.usePopover&&(g.setAttribute("popover","manual"),g.classList.add("cdk-overlay-popover"));let v=p.usePopover?p.positionStrategy?.getPopoverInsertionPoint?.():null;return ld(v)?v.after(g):v?.type==="parent"?v.element.appendChild(g):e.getContainerElement().appendChild(g),new Pa(new ar(f,o,t),g,f,p,t.get(W),t.get(bp),n,t.get(ps),t.get(vp),i?.disableAnimations??t.get(Ca,null,{optional:!0})==="NoopAnimations",t.get(nn),u)}var Cp=(()=>{class t{scrollStrategies=c(gp);_positionBuilder=c(xp);_injector=c(X);constructor(){}create(e){return mn(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Nv=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Vv=new x("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>un(t)}}),Ba=(()=>{class t{elementRef=c(P);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),wp=new x("cdk-connected-overlay-default-config"),Gs=(()=>{class t{_dir=c(We,{optional:!0});_injector=c(X);_overlayRef;_templatePortal;_backdropSubscription=ge.EMPTY;_attachSubscription=ge.EMPTY;_detachSubscription=ge.EMPTY;_positionSubscription=ge.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(Vv);_ngZone=c(W);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new O;positionChange=new O;attach=new O;detach=new O;overlayKeydown=new O;overlayOutsideClick=new O;constructor(){let e=c(ut),n=c(mt),a=c(wp,{optional:!0}),o=c(rr,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Et(e,n),this.scrollStrategy=this._scrollStrategyFactory(),a&&this._assignConfig(a)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Nv);let e=this._overlayRef=mn(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!Le(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let a=this._getOriginElement(),o=dt(n);(!a||a!==o&&!a.contains(o))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new dn({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(a=>({originX:a.originX,originY:a.originY,overlayX:a.overlayX,overlayY:a.overlayY,offsetX:a.offsetX||this.offsetX,offsetY:a.offsetY||this.offsetY,panelClass:a.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=jn(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Ba?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ba?this.origin.elementRef.nativeElement:this.origin instanceof P?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Mu(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",H],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",H],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",H],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",H],push:[2,"cdkConnectedOverlayPush","push",H],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",H],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",H],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ve]})}return t})(),Ut=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[Cp],imports:[ee,zn,id,id]})}return t})();function Ki(t){return t.buttons===0||t.detail===0}function Xi(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var sr;function Ep(){if(sr==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>sr=!0}))}finally{sr=sr||!1}return sr}function Va(t){return Ep()?t:!!t.capture}var Dp=new x("cdk-input-modality-detector-options"),Mp={ignoreKeys:[18,17,224,91,16]},Sp=650,cd={passive:!0,capture:!0},Ap=(()=>{class t{_platform=c(pe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Jn(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=dt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Sp||(this._modality.next(Ki(e)?"keyboard":"mouse"),this._mostRecentTarget=dt(e))};_onTouchstart=e=>{if(Xi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=dt(e)};constructor(){let e=c(W),n=c(Q),a=c(Dp,{optional:!0});if(this._options=k(k({},Mp),a),this.modalityDetected=this._modality.pipe(xa(1)),this.modalityChanged=this.modalityDetected.pipe(gc()),this._platform.isBrowser){let o=c(_t).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,cd),o.listen(n,"mousedown",this._onMousedown,cd),o.listen(n,"touchstart",this._onTouchstart,cd)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lr=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(lr||{}),Fp=new x("cdk-focus-monitor-default-options"),Ws=Va({passive:!0,capture:!0}),Dt=(()=>{class t{_ngZone=c(W);_platform=c(pe);_inputModalityDetector=c(Ap);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(Q);_stopInputModalityDetector=new B;constructor(){let e=c(Fp,{optional:!0});this._detectionMode=e?.detectionMode||lr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=dt(e);for(let a=n;a;a=a.parentElement)e.type==="focus"?this._onFocus(e,a):this._onBlur(e,a)};monitor(e,n=!1){let a=Ft(e);if(!this._platform.isBrowser||a.nodeType!==1)return Qe();let o=td(a)||this._document,r=this._elementInfo.get(a);if(r)return n&&(r.checkChildren=!0),r.subject;let u={checkChildren:n,subject:new B,rootNode:o};return this._elementInfo.set(a,u),this._registerGlobalListeners(u),u.subject}stopMonitoring(e){let n=Ft(e),a=this._elementInfo.get(n);a&&(a.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(a))}focusVia(e,n,a){let o=Ft(e),r=this._document.activeElement;o===r?this._getClosestElementsInfo(o).forEach(([u,p])=>this._originChanged(u,n,p)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(a))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===lr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===lr.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?Sp:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(e,n){let a=this._elementInfo.get(n),o=dt(e);!a||!a.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),a)}_onBlur(e,n){let a=this._elementInfo.get(n);!a||a.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(a,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,a=this._rootNodeFocusListenerCount.get(n)||0;a||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ws),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ws)}),this._rootNodeFocusListenerCount.set(n,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Me(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let a=this._rootNodeFocusListenerCount.get(n);a>1?this._rootNodeFocusListenerCount.set(n,a-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ws),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ws),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,a){this._setClasses(e,n),this._emitOrigin(a,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((a,o)=>{(o===e||a.checkChildren&&o.contains(e))&&n.push([o,a])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let r=0;r<o.length;r++)if(o[r].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dd=(()=>{class t{_elementRef=c(P);_focusMonitor=c(Dt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new O;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var za=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ys;function zv(){if(Ys===void 0&&(Ys=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Ys=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Ys}function Qi(t){return zv()?.createHTML(t)||t}function kp(t,i,e){let n=e.sanitize(At.HTML,i);t.innerHTML=Qi(n||"")}var Ip=new Set,Zi,ja=(()=>{class t{_platform=c(pe);_nonce=c(wa,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Hv}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&jv(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jv(t,i){if(!Ip.has(t))try{Zi||(Zi=document.createElement("style"),i&&Zi.setAttribute("nonce",i),Zi.setAttribute("type","text/css"),document.head.appendChild(Zi)),Zi.sheet&&(Zi.sheet.insertRule(`@media ${t} {body{ }}`,0),Ip.add(t))}catch(e){console.error(e)}}function Hv(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var cr=(()=>{class t{_mediaMatcher=c(ja);_zone=c(W);_queries=new Map;_destroySubject=new B;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Tp(Vn(e)).some(a=>this._registerQuery(a).mql.matches)}observe(e){let a=Tp(Vn(e)).map(r=>this._registerQuery(r).observable),o=ya(a);return o=xu(o.pipe(at(1)),o.pipe(xa(1),yn(0))),o.pipe(xe(r=>{let u={matches:!1,breakpoints:{}};return r.forEach(({matches:p,query:h})=>{u.matches=u.matches||p,u.breakpoints[h]=p}),u}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new it(r=>{let u=p=>this._zone.run(()=>r.next(p));return n.addListener(u),()=>{n.removeListener(u)}}).pipe(Ve(n),xe(({matches:r})=>({query:e,matches:r})),Me(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Tp(t){return t.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function Uv(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let i=0;i<t.addedNodes.length;i++)if(!(t.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<t.removedNodes.length;i++)if(!(t.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var Rp=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Op=(()=>{class t{_mutationObserverFactory=c(Rp);_observedElements=new Map;_ngZone=c(W);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=Ft(e);return new it(a=>{let r=this._observeElement(n).pipe(xe(u=>u.filter(p=>!Uv(p))),se(u=>!!u.length)).subscribe(u=>{this._ngZone.run(()=>{a.next(u)})});return()=>{r.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new B,a=this._mutationObserverFactory.create(o=>n.next(o));a&&a.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:a,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:a}=this._observedElements.get(e);n&&n.disconnect(),a.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qs=(()=>{class t{_contentObserver=c(Op);_elementRef=c(P);event=new O;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=jt(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(yn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",H],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Ha=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[Rp]})}return t})();var pd=(()=>{class t{_platform=c(pe);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Gv(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=$v(Jv(e));if(n&&(Pp(n)===-1||!this.isVisible(n)))return!1;let a=e.nodeName.toLowerCase(),o=Pp(e);return e.hasAttribute("contenteditable")?o!==-1:a==="iframe"||a==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Qv(e)?!1:a==="audio"?e.hasAttribute("controls")?o!==-1:!1:a==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return Zv(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $v(t){try{return t.frameElement}catch{return null}}function Gv(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function Wv(t){let i=t.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function Yv(t){return Kv(t)&&t.type=="hidden"}function qv(t){return Xv(t)&&t.hasAttribute("href")}function Kv(t){return t.nodeName.toLowerCase()=="input"}function Xv(t){return t.nodeName.toLowerCase()=="a"}function Np(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let i=t.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Pp(t){if(!Np(t))return null;let i=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Qv(t){let i=t.nodeName.toLowerCase(),e=i==="input"&&t.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function Zv(t){return Yv(t)?!1:Wv(t)||qv(t)||t.hasAttribute("contenteditable")||Np(t)}function Jv(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var md=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,n,a,o=!1,r){this._element=i,this._checker=e,this._ngZone=n,this._document=a,this._injector=r,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(i),!!n}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=0;n<e.length;n++){let a=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(a)return a}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=e.length-1;n>=0;n--){let a=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(a)return a}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?Ze(i,{injector:this._injector}):setTimeout(i)}},hd=(()=>{class t{_checker=c(pd);_ngZone=c(W);_document=c(Q);_injector=c(X);constructor(){c(Be).load(za)}create(e,n=!1){return new md(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vp=new x("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),zp=new x("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),ey=0,fd=(()=>{class t{_ngZone=c(W);_defaultOptions=c(zp,{optional:!0});_liveElement;_document=c(Q);_sanitizer=c(Wi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(Vp,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let a=this._defaultOptions,o,r;return n.length===1&&typeof n[0]=="number"?r=n[0]:[o,r]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=a&&a.politeness?a.politeness:"polite"),r==null&&a&&(r=a.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(u=>this._currentResolve=u)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:kp(this._liveElement,e,this._sanitizer),typeof r=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),a=this._document.createElement("div");for(let o=0;o<n.length;o++)n[o].remove();return a.classList.add(e),a.classList.add("cdk-visually-hidden"),a.setAttribute("aria-atomic","true"),a.setAttribute("aria-live","polite"),a.id=`cdk-live-announcer-${ey++}`,this._document.body.appendChild(a),a}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<n.length;a++){let o=n[a],r=o.getAttribute("aria-owns");r?r.indexOf(e)===-1&&o.setAttribute("aria-owns",r+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ci=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(ci||{}),Bp="cdk-high-contrast-black-on-white",Lp="cdk-high-contrast-white-on-black",ud="cdk-high-contrast-active",jp=(()=>{class t{_platform=c(pe);_hasCheckedHighContrastMode=!1;_document=c(Q);_breakpointSubscription;constructor(){this._breakpointSubscription=c(cr).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return ci.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,a=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(a&&a.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return ci.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return ci.BLACK_ON_WHITE}return ci.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(ud,Bp,Lp),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===ci.BLACK_ON_WHITE?e.add(ud,Bp):n===ci.WHITE_ON_BLACK&&e.add(ud,Lp)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dr=(()=>{class t{constructor(){c(jp)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Ha]})}return t})();function ty(t,i){}var di=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var _d=(()=>{class t extends Oa{_elementRef=c(P);_focusTrapFactory=c(hd);_config;_interactivityChecker=c(pd);_ngZone=c(W);_focusMonitor=c(Dt);_renderer=c(be);_changeDetectorRef=c(me);_injector=c(X);_platform=c(pe);_document=c(Q);_portalOutlet;_focusTrapped=new B;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(di,{optional:!0})||new di,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let n=this._ariaLabelledByQueue.indexOf(e);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}attachDomPortal=e=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{o(),r(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",a),r=this._renderer.listen(e,"mousedown",a)})),e.focus(n)}_focusByCssSelector(e,n){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,n)}_trapFocus(e){this._isDestroyed||Ze(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||n.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,n=null;if(typeof e=="string"?n=this._document.querySelector(e):typeof e=="boolean"?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&typeof n.focus=="function"){let a=ri(),o=this._elementRef.nativeElement;(!a||a===this._document.body||a===o||o.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,n=ri();return e===n||e.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ri()))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(n,a){if(n&1&&Se(En,7),n&2){let o;z(o=j())&&(a._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(n,a){n&2&&A("id",a._config.id||null)("role",a._config.role)("aria-modal",a._config.ariaModal)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null)},features:[te],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,a){n&1&&ke(0,ty,0,0,"ng-template",0)},dependencies:[En],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),ur=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new B;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!Le(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(i),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},ny=new x("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>La(t)}}),iy=new x("DialogData"),ay=new x("DefaultDialogConfig");function oy(t){let i=ne(t),e=new O;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var bd=(()=>{class t{_injector=c(X);_defaultOptions=c(ay,{optional:!0});_parentDialog=c(t,{optional:!0,skipSelf:!0});_overlayContainer=c($s);_idGenerator=c(Ae);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new B;_afterOpenedAtThisLevel=new B;_ariaHiddenElements=new Map;_scrollStrategy=c(ny);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=ei(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ve(void 0)));constructor(){}open(e,n){let a=this._defaultOptions||new di;n=k(k({},a),n),n.id=n.id||this._idGenerator.getId("cdk-dialog-"),n.id&&this.getDialogById(n.id);let o=this._getOverlayConfig(n),r=mn(this._injector,o),u=new ur(r,n),p=this._attachContainer(r,u,n);if(u.containerInstance=p,!this.openDialogs.length){let h=this._overlayContainer.getContainerElement();p._focusTrapped?p._focusTrapped.pipe(at(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(h)}):this._hideNonDialogContentFromAssistiveTechnology(h)}return this._attachDialogContent(e,u,p,n),this.openDialogs.push(u),u.closed.subscribe(()=>this._removeOpenDialog(u,!0)),this.afterOpened.next(u),u}closeAll(){gd(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){gd(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),gd(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let n=new dn({positionStrategy:e.positionStrategy||Na().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,a){let o=a.injector||a.viewContainerRef?.injector,r=[{provide:di,useValue:a},{provide:ur,useValue:n},{provide:Pa,useValue:e}],u;a.container?typeof a.container=="function"?u=a.container:(u=a.container.type,r.push(...a.container.providers(a))):u=_d;let p=new li(u,a.viewContainerRef,X.create({parent:o||this._injector,providers:r}));return e.attach(p).instance}_attachDialogContent(e,n,a,o){if(e instanceof ut){let r=this._createInjector(o,n,a,void 0),u={$implicit:o.data,dialogRef:n};o.templateContext&&(u=k(k({},u),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),a.attachTemplatePortal(new Et(e,null,u,r))}else{let r=this._createInjector(o,n,a,this._injector),u=a.attachComponentPortal(new li(e,o.viewContainerRef,r));n.componentRef=u,n.componentInstance=u.instance}}_createInjector(e,n,a,o){let r=e.injector||e.viewContainerRef?.injector,u=[{provide:iy,useValue:e.data},{provide:ur,useValue:n}];return e.providers&&(typeof e.providers=="function"?u.push(...e.providers(n,e,a)):u.push(...e.providers)),e.direction&&(!r||!r.get(We,null,{optional:!0}))&&u.push({provide:We,useValue:oy(e.direction)}),X.create({parent:r||o,providers:u})}_removeOpenDialog(e,n){let a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute("aria-hidden",o):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let n=e.parentElement.children;for(let a=n.length-1;a>-1;a--){let o=n[a];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function gd(t,i){let e=t.length;for(;e--;)i(t[e])}var Hp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[bd],imports:[Ut,zn,dr,zn]})}return t})();function kt(t){return t!=null&&`${t}`!="false"}var Up={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var ry=new x("MATERIAL_ANIMATIONS"),$p=null;function mr(){return c(ry,{optional:!0})?.animationsDisabled||c(Ca,{optional:!0})==="NoopAnimations"?"di-disabled":($p??=c(ja).matchMedia("(prefers-reduced-motion)").matches,$p?"reduced-motion":"enabled")}function Ee(){return mr()!=="enabled"}var sy=200,Ks=class{_letterKeyStream=new B;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new B;selectedItem=this._selectedItem;constructor(i,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:sy;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(xn(e=>this._pressedLetters.push(e)),yn(i),se(()=>this._pressedLetters.length>0),xe(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let a=(this._selectedItemIndex+n)%this._items.length,o=this._items[a];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};var Ua=class{_items;_activeItemIndex=ne(-1);_activeItem=ne(null);_wrap=!1;_typeaheadSubscription=ge.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Cn?this._itemChangesSubscription=i.changes.subscribe(n=>this._itemsChanged(n.toArray())):qt(i)&&(this._effectRef=an(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new B;change=new B;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ks(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,a=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let o=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(o<r?o:r-1,-1);break}else return;default:(a||Le(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),n=typeof i=="number"?i:e.indexOf(i),a=e[n];this._activeItem.set(a??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let a=(this._activeItemIndex()+i*n+e.length)%e.length,o=e[a];if(!this._skipPredicateFn(o)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let n=this._getItemsArray();if(n[i]){for(;this._skipPredicateFn(n[i]);)if(i+=e,!n[i])return;this.setActiveItem(i)}}_getItemsArray(){return qt(this._items)?this._items():this._items instanceof Cn?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let n=i.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var ea=class extends Ua{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Hn=class extends Ua{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var qp=" ";function $a(t,i,e){let n=Qs(t,i);e=e.trim(),!n.some(a=>a.trim()===e)&&(n.push(e),t.setAttribute(i,n.join(qp)))}function mi(t,i,e){let n=Qs(t,i);e=e.trim();let a=n.filter(o=>o!==e);a.length?t.setAttribute(i,a.join(qp)):t.removeAttribute(i)}function Qs(t,i){return t.getAttribute(i)?.match(/\S+/g)??[]}var Kp="cdk-describedby-message",Xs="cdk-describedby-host",yd=0,Xp=(()=>{class t{_platform=c(pe);_document=c(Q);_messageRegistry=new Map;_messagesContainer=null;_id=`${yd++}`;constructor(){c(Be).load(za),this._id=c(Bi)+"-"+yd++}describe(e,n,a){if(!this._canBeDescribed(e,n))return;let o=vd(n,a);typeof n!="string"?(Yp(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,a),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,a){if(!n||!this._isElementNode(e))return;let o=vd(n,a);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n=="string"){let r=this._messageRegistry.get(o);r&&r.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Xs}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(Xs);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let a=this._document.createElement("div");Yp(a,this._id),a.textContent=e,n&&a.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(vd(e,n),{messageElement:a,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let a=this._document.createElement("div");a.style.visibility="hidden",a.classList.add(e),a.classList.add("cdk-visually-hidden"),this._platform.isBrowser||a.setAttribute("platform","server"),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(e){let n=Qs(e,"aria-describedby").filter(a=>a.indexOf(Kp)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let a=this._messageRegistry.get(n);$a(e,"aria-describedby",a.messageElement.id),e.setAttribute(Xs,this._id),a.referenceCount++}_removeMessageReference(e,n){let a=this._messageRegistry.get(n);a.referenceCount--,mi(e,"aria-describedby",a.messageElement.id),e.removeAttribute(Xs)}_isElementDescribedByMessage(e,n){let a=Qs(e,"aria-describedby"),o=this._messageRegistry.get(n),r=o&&o.messageElement.id;return!!r&&a.indexOf(r)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let a=n==null?"":`${n}`.trim(),o=e.getAttribute("aria-label");return a?!o||o.trim()!==a:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function vd(t,i){return typeof t=="string"?`${i||""}/${t}`:t}function Yp(t,i){t.id||(t.id=`${Kp}-${i}-${yd++}`)}function ly(t,i){}var Js=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},xd="mdc-dialog--open",Qp="mdc-dialog--opening",Zp="mdc-dialog--closing",cy=150,dy=75,uy=(()=>{class t extends _d{_animationStateChanged=new O;_animationsEnabled=!Ee();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?eh(this._config.enterAnimationDuration)??cy:0;_exitAnimationDuration=this._animationsEnabled?eh(this._config.exitAnimationDuration)??dy:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Jp,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Qp,xd)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(xd),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(xd),this._animationsEnabled?(this._hostElement.style.setProperty(Jp,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Zp)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Qp,Zp)}_waitForAnimationToComplete(e,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let n=super.attachComponentPortal(e);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(n,a){n&2&&(xt("id",a._config.id),A("aria-modal",a._config.ariaModal)("role",a._config.role)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null),N("_mat-animation-noopable",!a._animationsEnabled)("mat-mdc-dialog-container-with-actions",a._actionSectionCount>0))},features:[te],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,a){n&1&&(s(0,"div",0)(1,"div",1),ke(2,ly,0,0,"ng-template",2),l()())},dependencies:[En],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return t})(),Jp="--mat-dialog-transition-duration";function eh(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?jt(t.substring(0,t.length-2)):t.endsWith("s")?jt(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var Zs=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(Zs||{}),pn=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ri(1);_beforeClosed=new Ri(1);_result;_closeFallbackTimeout;_state=Zs.OPEN;_closeInteractionType;constructor(i,e,n){this._ref=i,this._config=e,this._containerInstance=n,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe(se(a=>a.state==="opened"),at(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(se(a=>a.state==="closed"),at(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),He(this.backdropClick(),this.keydownEvents().pipe(se(a=>a.keyCode===27&&!this.disableClose&&!Le(a)))).subscribe(a=>{this.disableClose||(a.preventDefault(),th(this,a.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(se(n=>n.state==="closing"),at(1)).subscribe(n=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=Zs.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Zs.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function th(t,i,e){return t._closeInteractionType=i,t.close(e)}var fr=new x("MatMdcDialogData"),my=new x("mat-mdc-dialog-default-options"),py=new x("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>La(t)}}),hn=(()=>{class t{_defaultOptions=c(my,{optional:!0});_scrollStrategy=c(py);_parentDialog=c(t,{optional:!0,skipSelf:!0});_idGenerator=c(Ae);_injector=c(X);_dialog=c(bd);_animationsDisabled=Ee();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new B;_afterOpenedAtThisLevel=new B;dialogConfigClass=Js;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=ei(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ve(void 0)));constructor(){this._dialogRefConstructor=pn,this._dialogContainerType=uy,this._dialogDataToken=fr}open(e,n){let a;n=k(k({},this._defaultOptions||new Js),n),n.id=n.id||this._idGenerator.getId("mat-mdc-dialog-"),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,De(k({},n),{positionStrategy:Na(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()==="0"||n.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:di,useValue:n}]},templateContext:()=>({dialogRef:a}),providers:(r,u,p)=>(a=new this._dialogRefConstructor(r,n,p),a.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:p},{provide:this._dialogDataToken,useValue:u.data},{provide:this._dialogRefConstructor,useValue:a}])}));return a.componentRef=o.componentRef,a.componentInstance=o.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(a);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let n=e.length;for(;n--;)e[n].close()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nh=(()=>{class t{dialogRef=c(pn,{optional:!0});_elementRef=c(P);_dialog=c(hn);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=ah(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let n=e._matDialogClose||e._matDialogCloseResult;n&&(this.dialogResult=n.currentValue)}_onButtonClick(e){th(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(n,a){n&1&&R("click",function(r){return a._onButtonClick(r)}),n&2&&A("aria-label",a.ariaLabel||null)("type",a.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[ve]})}return t})(),ih=(()=>{class t{_dialogRef=c(pn,{optional:!0});_elementRef=c(P);_dialog=c(hn);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=ah(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t})}return t})(),pi=(()=>{class t extends ih{id=c(Ae).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(n,a){n&2&&xt("id",a.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[te]})}return t})(),hi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Uu([nr])]})}return t})(),Ga=(()=>{class t extends ih{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(n,a){n&2&&N("mat-mdc-dialog-actions-align-start",a.align==="start")("mat-mdc-dialog-actions-align-center",a.align==="center")("mat-mdc-dialog-actions-align-end",a.align==="end")},inputs:{align:"align"},features:[te]})}return t})();function ah(t,i){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(n=>n.id===e.id):null}var Mt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[hn],imports:[Hp,Ut,zn,ee]})}return t})();var Wa,oh=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Cd(){if(Wa)return Wa;if(typeof document!="object"||!document)return Wa=new Set(oh),Wa;let t=document.createElement("input");return Wa=new Set(oh.filter(i=>(t.setAttribute("type",i),t.type===i))),Wa}var en=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(en||{}),wd=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=en.HIDDEN;constructor(i,e,n,a=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},rh=Va({passive:!0,capture:!0}),Ed=class{_events=new Map;addHandler(i,e,n,a){let o=this._events.get(e);if(o){let r=o.get(n);r?r.add(a):o.set(n,new Set([a]))}else this._events.set(e,new Map([[n,new Set([a])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,rh)})}removeHandler(i,e,n){let a=this._events.get(i);if(!a)return;let o=a.get(e);o&&(o.delete(n),o.size===0&&a.delete(e),a.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,rh)))}_delegateEventHandler=i=>{let e=dt(i);e&&this._events.get(i.type)?.forEach((n,a)=>{(a===e||a.contains(e))&&n.forEach(o=>o.handleEvent(i))})}},gr={enterDuration:225,exitDuration:150},hy=800,sh=Va({passive:!0,capture:!0}),lh=["mousedown","touchstart"],ch=["mouseup","mouseleave","touchend","touchcancel"],fy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),ta=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ed;constructor(i,e,n,a,o){this._target=i,this._ngZone=e,this._platform=a,a.isBrowser&&(this._containerElement=Ft(n)),o&&o.get(Be).load(fy)}fadeInRipple(i,e,n={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=k(k({},gr),n.animation);n.centered&&(i=a.left+a.width/2,e=a.top+a.height/2);let r=n.radius||gy(i,e,a),u=i-a.left,p=e-a.top,h=o.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${u-r}px`,f.style.top=`${p-r}px`,f.style.height=`${r*2}px`,f.style.width=`${r*2}px`,n.color!=null&&(f.style.backgroundColor=n.color),f.style.transitionDuration=`${h}ms`,this._containerElement.appendChild(f);let g=window.getComputedStyle(f),v=g.transitionProperty,C=g.transitionDuration,M=v==="none"||C==="0s"||C==="0s, 0s"||a.width===0&&a.height===0,b=new wd(this,f,n,M);f.style.transform="scale3d(1, 1, 1)",b.state=en.FADING_IN,n.persistent||(this._mostRecentTransientRipple=b);let U=null;return!M&&(h||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let K=()=>{U&&(U.fallbackTimer=null),clearTimeout(Re),this._finishRippleTransition(b)},ae=()=>this._destroyRipple(b),Re=setTimeout(ae,h+100);f.addEventListener("transitionend",K),f.addEventListener("transitioncancel",ae),U={onTransitionEnd:K,onTransitionCancel:ae,fallbackTimer:Re}}),this._activeRipples.set(b,U),(M||!h)&&this._finishRippleTransition(b),b}fadeOutRipple(i){if(i.state===en.FADING_OUT||i.state===en.HIDDEN)return;let e=i.element,n=k(k({},gr),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=en.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Ft(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,lh.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ch.forEach(e=>{this._triggerElement.addEventListener(e,this,sh)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===en.FADING_IN?this._startFadeOutTransition(i):i.state===en.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=en.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=en.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Ki(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+hy;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Xi(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===en.VISIBLE||i.config.terminateOnPointerUp&&i.state===en.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(lh.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(ch.forEach(e=>i.removeEventListener(e,this,sh)),this._pointerUpEventsRegistered=!1))}};function gy(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),a=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+a*a)}var Ya=new x("mat-ripple-global-options"),Un=(()=>{class t{_elementRef=c(P);_animationsDisabled=Ee();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(W),n=c(pe),a=c(Ya,{optional:!0}),o=c(X);this._globalOptions=a||{},this._rippleRenderer=new ta(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:k(k(k({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,a){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,k(k({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,k(k({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,a){n&2&&N("mat-ripple-unbounded",a.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var _y={capture:!0},by=["focus","mousedown","mouseenter","touchstart"],Dd="mat-ripple-loader-uninitialized",Md="mat-ripple-loader-class-name",dh="mat-ripple-loader-centered",tl="mat-ripple-loader-disabled",uh=(()=>{class t{_document=c(Q);_animationsDisabled=Ee();_globalRippleOptions=c(Ya,{optional:!0});_platform=c(pe);_ngZone=c(W);_injector=c(X);_eventCleanups;_hosts=new Map;constructor(){let e=c(_t).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>by.map(n=>e.listen(this._document,n,this._onInteraction,_y)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Dd,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(Md))&&e.setAttribute(Md,n.className||""),n.centered&&e.setAttribute(dh,""),n.disabled&&e.setAttribute(tl,"")}setDisabled(e,n){let a=this._hosts.get(e);a?(a.target.rippleDisabled=n,!n&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(e))):n?e.setAttribute(tl,""):e.removeAttribute(tl)}_onInteraction=e=>{let n=dt(e);if(n instanceof HTMLElement){let a=n.closest(`[${Dd}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(Md)),e.append(n);let a=this._globalRippleOptions,o=this._animationsDisabled?0:a?.animation?.enterDuration??gr.enterDuration,r=this._animationsDisabled?0:a?.animation?.exitDuration??gr.exitDuration,u={rippleDisabled:this._animationsDisabled||a?.disabled||e.hasAttribute(tl),rippleConfig:{centered:e.hasAttribute(dh),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:r}}},p=new ta(u,this._ngZone,n,this._platform,this._injector),h=!u.rippleDisabled;h&&p.setupTriggerEvents(e),this._hosts.set(e,{target:u,renderer:p,hasSetUpEvents:h}),e.removeAttribute(Dd)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Pt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var vy=["mat-icon-button",""],yy=["*"],xy=new x("MAT_BUTTON_CONFIG");function mh(t){return t==null?void 0:Ke(t)}var Sd=(()=>{class t{_elementRef=c(P);_ngZone=c(W);_animationsDisabled=Ee();_config=c(xy,{optional:!0});_focusMonitor=c(Dt);_cleanupClick;_renderer=c(be);_rippleLoader=c(uh);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Be).load(Pt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,a){n&2&&(A("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),Ge(a.color?"mat-"+a.color:""),N("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",H],disabled:[2,"disabled","disabled",H],ariaDisabled:[2,"aria-disabled","ariaDisabled",H],disabledInteractive:[2,"disabledInteractive","disabledInteractive",H],tabIndex:[2,"tabIndex","tabIndex",mh],_tabindex:[2,"tabindex","_tabindex",mh]}})}return t})(),fn=(()=>{class t extends Sd{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[te],attrs:vy,ngContentSelectors:yy,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,a){n&1&&(fe(),bt(0,"span",0),Y(1),bt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Dn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ee]})}return t})();var Cy=["matButton",""],wy=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Ey=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var ph=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Bt=(()=>{class t extends Sd{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Dy(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,a=this._appearance?ph.get(this._appearance):null,o=ph.get(e);a&&n.remove(...a),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[te],attrs:Cy,ngContentSelectors:Ey,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,a){n&1&&(fe(wy),bt(0,"span",0),Y(1),ze(2,"span",1),Y(3,1),qe(),Y(4,2),bt(5,"span",2)(6,"span",3)),n&2&&N("mdc-button__ripple",!a._isFab)("mdc-fab__ripple",a._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Dy(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var pt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Dn,ee]})}return t})();function hh(t){return Error(`Unable to find icon with the name "${t}"`)}function My(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function fh(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function gh(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var $n=class{url;svgText;options;svgElement=null;constructor(i,e,n){this.url=i,this.svgText=e,this.options=n}},il=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,a,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=a}addSvgIcon(e,n,a){return this.addSvgIconInNamespace("",e,n,a)}addSvgIconLiteral(e,n,a){return this.addSvgIconLiteralInNamespace("",e,n,a)}addSvgIconInNamespace(e,n,a,o){return this._addSvgIconConfig(e,n,new $n(a,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,a,o){let r=this._sanitizer.sanitize(At.HTML,a);if(!r)throw gh(a);let u=Qi(r);return this._addSvgIconConfig(e,n,new $n("",u,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,a){return this._addSvgIconSetConfig(e,new $n(n,null,a))}addSvgIconSetLiteralInNamespace(e,n,a){let o=this._sanitizer.sanitize(At.HTML,n);if(!o)throw gh(n);let r=Qi(o);return this._addSvgIconSetConfig(e,new $n("",r,a))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(At.RESOURCE_URL,e);if(!n)throw fh(e);let a=this._cachedIconsByUrl.get(n);return a?Qe(nl(a)):this._loadSvgIconFromConfig(new $n(e,null)).pipe(xn(o=>this._cachedIconsByUrl.set(n,o)),xe(o=>nl(o)))}getNamedSvgIcon(e,n=""){let a=_h(n,e),o=this._svgIconConfigs.get(a);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(a,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(n);return r?this._getSvgFromIconSetConfigs(e,r):yu(hh(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Qe(nl(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(xe(n=>nl(n)))}_getSvgFromIconSetConfigs(e,n){let a=this._extractIconWithNameFromAnySet(e,n);if(a)return Qe(a);let o=n.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(wu(u=>{let h=`Loading icon set URL: ${this._sanitizer.sanitize(At.RESOURCE_URL,r.url)} failed: ${u.message}`;return this._errorHandler.handleError(new Error(h)),Qe(null)})));return Zr(o).pipe(xe(()=>{let r=this._extractIconWithNameFromAnySet(e,n);if(!r)throw hh(e);return r}))}_extractIconWithNameFromAnySet(e,n){for(let a=n.length-1;a>=0;a--){let o=n[a];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let r=this._svgElementFromConfig(o),u=this._extractSvgIconFromSet(r,e,o.options);if(u)return u}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(xn(n=>e.svgText=n),xe(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Qe(null):this._fetchIcon(e).pipe(xn(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,a){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,a);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),a);let u=this._svgElementFromString(Qi("<svg></svg>"));return u.appendChild(r),this._setSvgAttributes(u,a)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let a=n.querySelector("svg");if(!a)throw Error("<svg> tag not found");return a}_toSvgElement(e){let n=this._svgElementFromString(Qi("<svg></svg>")),a=e.attributes;for(let o=0;o<a.length;o++){let{name:r,value:u}=a[o];r!=="id"&&n.setAttribute(r,u)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:a}=e,o=a?.withCredentials??!1;if(!this._httpClient)throw My();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let r=this._sanitizer.sanitize(At.RESOURCE_URL,n);if(!r)throw fh(n);let u=this._inProgressUrlFetches.get(r);if(u)return u;let p=this._httpClient.get(r,{responseType:"text",withCredentials:o}).pipe(xe(h=>Qi(h)),Jr(()=>this._inProgressUrlFetches.delete(r)),Du());return this._inProgressUrlFetches.set(r,p),p}_addSvgIconConfig(e,n,a){return this._svgIconConfigs.set(_h(e,n),a),this}_addSvgIconSetConfig(e,n){let a=this._iconSetConfigs.get(e);return a?a.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let a=0;a<this._resolvers.length;a++){let o=this._resolvers[a](n,e);if(o)return Sy(o)?new $n(o.url,null,o.options):new $n(o,null)}}static \u0275fac=function(n){return new(n||t)(le(wn,8),le(Wi),le(Q,8),le(Pi))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function nl(t){return t.cloneNode(!0)}function _h(t,i){return t+":"+i}function Sy(t){return!!(t.url&&t.options)}var Ay=["*"],Fy=new x("MAT_ICON_DEFAULT_OPTIONS"),ky=new x("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(Q),i=t?t.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),bh=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Iy=bh.map(t=>`[${t}]`).join(", "),Ty=/^url\(['"]?#(.*?)['"]?\)$/,St=(()=>{class t{_elementRef=c(P);_iconRegistry=c(il);_location=c(ky);_errorHandler=c(Pi);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ge.EMPTY;constructor(){let e=c(new Pn("aria-hidden"),{optional:!0}),n=c(Fy,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let a=e.childNodes[n];(a.nodeType!==1||a.nodeName.toLowerCase()==="svg")&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>e.classList.remove(a)),n.forEach(a=>e.classList.add(a)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((a,o)=>{a.forEach(r=>{o.setAttribute(r.name,`url('${e}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(Iy),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)bh.forEach(r=>{let u=n[o],p=u.getAttribute(r),h=p?p.match(Ty):null;if(h){let f=a.get(u);f||(f=[],a.set(u,f)),f.push({name:r,value:h[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,a]=this._splitIconName(e);n&&(this._svgNamespace=n),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,n).pipe(at(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${n}:${a}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,a){n&2&&(A("data-mat-icon-type",a._usingFontIcon()?"font":"svg")("data-mat-icon-name",a._svgName||a.fontIcon)("data-mat-icon-namespace",a._svgNamespace||a.fontSet)("fontIcon",a._usingFontIcon()?a.fontIcon:null),Ge(a.color?"mat-"+a.color:""),N("mat-icon-inline",a.inline)("mat-icon-no-color",a.color!=="primary"&&a.color!=="accent"&&a.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",H],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Ay,decls:1,vars:0,template:function(n,a){n&1&&(fe(),Y(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),ht=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ee]})}return t})();var Sh=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(oe(be),oe(P))};static \u0275dir=D({type:t})}return t})(),Ah=(()=>{class t extends Sh{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,features:[te]})}return t})(),bi=new x("");var Ry={provide:bi,useExisting:gt(()=>vi),multi:!0};function Oy(){let t=Qt()?Qt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Py=new x(""),vi=(()=>{class t extends Sh{_compositionMode;_composing=!1;constructor(e,n,a){super(e,n),this._compositionMode=a,this._compositionMode==null&&(this._compositionMode=!Oy())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(oe(be),oe(P),oe(Py,8))};static \u0275dir=D({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,a){n&1&&R("input",function(r){return a._handleInput(r.target.value)})("blur",function(){return a.onTouched()})("compositionstart",function(){return a._compositionStart()})("compositionend",function(r){return a._compositionEnd(r.target.value)})},standalone:!1,features:[re([Ry]),te]})}return t})();function Id(t){return t==null||Td(t)===0}function Td(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Gn=new x(""),Za=new x(""),By=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Z=class{static min(i){return Fh(i)}static max(i){return Ly(i)}static required(i){return Ny(i)}static requiredTrue(i){return Vy(i)}static email(i){return zy(i)}static minLength(i){return jy(i)}static maxLength(i){return Hy(i)}static pattern(i){return Uy(i)}static nullValidator(i){return ol()}static compose(i){return Ph(i)}static composeAsync(i){return Bh(i)}};function Fh(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function Ly(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function Ny(t){return Id(t.value)?{required:!0}:null}function Vy(t){return t.value===!0?null:{required:!0}}function zy(t){return Id(t.value)||By.test(t.value)?null:{email:!0}}function jy(t){return i=>{let e=i.value?.length??Td(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Hy(t){return i=>{let e=i.value?.length??Td(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Uy(t){if(!t)return ol;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(Id(n.value))return null;let a=n.value;return i.test(a)?null:{pattern:{requiredPattern:e,actualValue:a}}}}function ol(t){return null}function kh(t){return t!=null}function Ih(t){return as(t)?vu(t):t}function Th(t){let i={};return t.forEach(e=>{i=e!=null?k(k({},i),e):i}),Object.keys(i).length===0?null:i}function Rh(t,i){return i.map(e=>e(t))}function $y(t){return!t.validate}function Oh(t){return t.map(i=>$y(i)?i:e=>i.validate(e))}function Ph(t){if(!t)return null;let i=t.filter(kh);return i.length==0?null:function(e){return Th(Rh(e,i))}}function Rd(t){return t!=null?Ph(Oh(t)):null}function Bh(t){if(!t)return null;let i=t.filter(kh);return i.length==0?null:function(e){let n=Rh(e,i).map(Ih);return Zr(n).pipe(xe(Th))}}function Od(t){return t!=null?Bh(Oh(t)):null}function vh(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function Lh(t){return t._rawValidators}function Nh(t){return t._rawAsyncValidators}function Ad(t){return t?Array.isArray(t)?t:[t]:[]}function rl(t,i){return Array.isArray(t)?t.includes(i):t===i}function yh(t,i){let e=Ad(i);return Ad(t).forEach(a=>{rl(e,a)||e.push(a)}),e}function xh(t,i){return Ad(i).filter(e=>!rl(t,e))}var sl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Rd(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Od(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},It=class extends sl{name;get formDirective(){return null}get path(){return null}},gn=class extends sl{_parent=null;name=null;valueAccessor=null},ll=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Ja=(()=>{class t extends ll{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(oe(gn,2))};static \u0275dir=D({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,a){n&2&&N("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)},standalone:!1,features:[te]})}return t})(),eo=(()=>{class t extends ll{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(oe(It,10))};static \u0275dir=D({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,a){n&2&&N("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)("ng-submitted",a.isSubmitted)},standalone:!1,features:[te]})}return t})();var _r="VALID",al="INVALID",qa="PENDING",br="DISABLED",_i=class{},cl=class extends _i{value;source;constructor(i,e){super(),this.value=i,this.source=e}},yr=class extends _i{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},xr=class extends _i{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Ka=class extends _i{status;source;constructor(i,e){super(),this.status=i,this.source=e}},dl=class extends _i{source;constructor(i){super(),this.source=i}},wr=class extends _i{source;constructor(i){super(),this.source=i}};function Pd(t){return(hl(t)?t.validators:t)||null}function Gy(t){return Array.isArray(t)?Rd(t):t||null}function Bd(t,i){return(hl(i)?i.asyncValidators:t)||null}function Wy(t){return Array.isArray(t)?Od(t):t||null}function hl(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Vh(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new ce(1e3,"");if(!n[e])throw new ce(1001,"")}function zh(t,i,e){t._forEachChild((n,a)=>{if(e[a]===void 0)throw new ce(-1002,"")})}var Xa=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return ot(this.statusReactive)}set status(i){ot(()=>this.statusReactive.set(i))}_status=et(()=>this.statusReactive());statusReactive=ne(void 0);get valid(){return this.status===_r}get invalid(){return this.status===al}get pending(){return this.status===qa}get disabled(){return this.status===br}get enabled(){return this.status!==br}errors;get pristine(){return ot(this.pristineReactive)}set pristine(i){ot(()=>this.pristineReactive.set(i))}_pristine=et(()=>this.pristineReactive());pristineReactive=ne(!0);get dirty(){return!this.pristine}get touched(){return ot(this.touchedReactive)}set touched(i){ot(()=>this.touchedReactive.set(i))}_touched=et(()=>this.touchedReactive());touchedReactive=ne(!1);get untouched(){return!this.touched}_events=new B;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(yh(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(yh(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(xh(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(xh(i,this._rawAsyncValidators))}hasValidator(i){return rl(this._rawValidators,i)}hasAsyncValidator(i){return rl(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(De(k({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new xr(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(a=>{a.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new xr(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(De(k({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new yr(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(a=>{a.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new yr(!0,n))}markAsPending(i={}){this.status=qa;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ka(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(De(k({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=br,this.errors=null,this._forEachChild(a=>{a.disable(De(k({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new cl(this.value,n)),this._events.next(new Ka(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(De(k({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(a=>a(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=_r,this._forEachChild(n=>{n.enable(De(k({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(De(k({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===_r||this.status===qa)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new cl(this.value,e)),this._events.next(new Ka(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(De(k({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?br:_r}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=qa,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=Ih(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(a=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(a,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,a)=>n&&n._find(a),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new Ka(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?br:this.errors?al:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(qa)?qa:this._anyControlsHaveStatus(al)?al:_r}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),a=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),a&&this._events.next(new yr(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new xr(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){hl(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Gy(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Wy(this._rawAsyncValidators)}},Qa=class extends Xa{constructor(i,e,n){super(Pd(e),Bd(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){zh(this,!0,i),Object.keys(i).forEach(n=>{Vh(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let a=this.controls[n];a&&a.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,a)=>{n.reset(i?i[a]:null,De(k({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new wr(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,a)=>((n.enabled||this.disabled)&&(e[a]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((a,o)=>{n=e(n,a,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Fd=class extends Qa{};var Er=new x("",{factory:()=>fl}),fl="always";function gl(t,i){return[...i.path,t]}function ul(t,i,e=fl){Ld(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),qy(t,i),Xy(t,i),Ky(t,i),Yy(t,i)}function Ch(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),pl(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function ml(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Yy(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Ld(t,i){let e=Lh(t);i.validator!==null?t.setValidators(vh(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=Nh(t);i.asyncValidator!==null?t.setAsyncValidators(vh(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let a=()=>t.updateValueAndValidity();ml(i._rawValidators,a),ml(i._rawAsyncValidators,a)}function pl(t,i){let e=!1;if(t!==null){if(i.validator!==null){let a=Lh(t);if(Array.isArray(a)&&a.length>0){let o=a.filter(r=>r!==i.validator);o.length!==a.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let a=Nh(t);if(Array.isArray(a)&&a.length>0){let o=a.filter(r=>r!==i.asyncValidator);o.length!==a.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return ml(i._rawValidators,n),ml(i._rawAsyncValidators,n),e}function qy(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&jh(t,i)})}function Ky(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&jh(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function jh(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Xy(t,i){let e=(n,a)=>{i.valueAccessor.writeValue(n),a&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Hh(t,i){t==null,Ld(t,i)}function Qy(t,i){return pl(t,i)}function Uh(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Zy(t){return Object.getPrototypeOf(t.constructor)===Ah}function $h(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Gh(t,i){if(!i)return null;Array.isArray(i);let e,n,a;return i.forEach(o=>{o.constructor===vi?e=o:Zy(o)?n=o:a=o}),a||n||e||null}function Jy(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var ex={provide:It,useExisting:gt(()=>Dr)},vr=Promise.resolve(),Dr=(()=>{class t extends It{callSetDisabledState;get submitted(){return ot(this.submittedReactive)}_submitted=et(()=>this.submittedReactive());submittedReactive=ne(!1);_directives=new Set;form;ngSubmit=new O;options;constructor(e,n,a){super(),this.callSetDisabledState=a,this.form=new Qa({},Rd(e),Od(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){vr.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),ul(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){vr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){vr.then(()=>{let n=this._findContainer(e.path),a=new Qa({});Hh(a,e),n.registerControl(e.name,a),a.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){vr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){vr.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),$h(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new dl(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(oe(Gn,10),oe(Za,10),oe(Er,8))};static \u0275dir=D({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,a){n&1&&R("submit",function(r){return a.onSubmit(r)})("reset",function(){return a.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[re([ex]),te]})}return t})();function wh(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function Eh(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Cr=class extends Xa{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(Pd(e),Bd(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),hl(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Eh(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new wr(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){wh(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){wh(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Eh(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var tx=t=>t instanceof Cr,nx=(()=>{class t extends It{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective?.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return gl(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,standalone:!1,features:[te]})}return t})();var ix={provide:gn,useExisting:gt(()=>Nd)},Dh=Promise.resolve(),Nd=(()=>{class t extends gn{_changeDetectorRef;callSetDisabledState;control=new Cr;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new O;constructor(e,n,a,o,r,u){super(),this._changeDetectorRef=r,this.callSetDisabledState=u,this._parent=e,this._setValidators(n),this._setAsyncValidators(a),this.valueAccessor=Gh(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Uh(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ul(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Dh.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,a=n!==0&&H(n);Dh.then(()=>{a&&!this.control.disabled?this.control.disable():!a&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?gl(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(oe(It,9),oe(Gn,10),oe(Za,10),oe(bi,10),oe(me,8),oe(Er,8))};static \u0275dir=D({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[re([ix]),te,ve]})}return t})();var to=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),ax={provide:bi,useExisting:gt(()=>na),multi:!0},na=(()=>{class t extends Ah{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,a){n&1&&R("input",function(r){return a.onChange(r.target.value)})("blur",function(){return a.onTouched()})},standalone:!1,features:[re([ax]),te]})}return t})();var kd=class extends Xa{constructor(i,e,n){super(Pd(e),Bd(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let a=this._adjustIndex(i);a<0&&(a=0),this.controls[a]&&this.controls[a]._registerOnCollectionChange(()=>{}),this.controls.splice(a,1),e&&(this.controls.splice(a,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){zh(this,!1,i),i.forEach((n,a)=>{Vh(this,!1,a),this.at(a).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,a)=>{this.at(a)&&this.at(a).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,a)=>{n.reset(i[a],De(k({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new wr(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Wh=(()=>{class t extends It{callSetDisabledState;get submitted(){return ot(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=et(()=>this._submittedReactive());_submittedReactive=ne(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,a){super(),this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(pl(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return ul(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Ch(e.control||null,e,!1),Jy(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,$h(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new dl(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,a=this.form.get(e.path);n!==a&&(Ch(n||null,e),tx(a)&&(ul(a,e,this.callSetDisabledState),e.control=a))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Hh(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&Qy(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Ld(this.form,this),this._oldForm&&pl(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(oe(Gn,10),oe(Za,10),oe(Er,8))};static \u0275dir=D({type:t,features:[te,ve]})}return t})();var Yh=new x("");var ox={provide:It,useExisting:gt(()=>no)},no=(()=>{class t extends nx{name=null;constructor(e,n,a){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(a)}_checkParentType(){Kh(this._parent)}static \u0275fac=function(n){return new(n||t)(oe(It,13),oe(Gn,10),oe(Za,10))};static \u0275dir=D({type:t,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:!1,features:[re([ox]),te]})}return t})(),rx={provide:It,useExisting:gt(()=>qh)},qh=(()=>{class t extends It{_parent;name=null;constructor(e,n,a){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(a)}ngOnInit(){Kh(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return gl(this.name==null?this.name:this.name.toString(),this._parent)}static \u0275fac=function(n){return new(n||t)(oe(It,13),oe(Gn,10),oe(Za,10))};static \u0275dir=D({type:t,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:!1,features:[re([rx]),te]})}return t})();function Kh(t){return!(t instanceof no)&&!(t instanceof Wh)&&!(t instanceof qh)}var sx={provide:gn,useExisting:gt(()=>ia)},ia=(()=>{class t extends gn{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new O;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,a,o,r){super(),this._ngModelWarningConfig=r,this._parent=e,this._setValidators(n),this._setAsyncValidators(a),this.valueAccessor=Gh(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Uh(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return gl(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(oe(It,13),oe(Gn,10),oe(Za,10),oe(bi,10),oe(Yh,8))};static \u0275dir=D({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[re([sx]),te,ve]})}return t})();var lx={provide:It,useExisting:gt(()=>_n)},_n=(()=>{class t extends Wh{form=null;ngSubmit=new O;get control(){return this.form}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,a){n&1&&R("submit",function(r){return a.onSubmit(r)})("reset",function(){return a.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[re([lx]),te]})}return t})();function cx(t){return typeof t=="number"?t:parseFloat(t)}var dx=(()=>{class t{_validator=ol;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):ol,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,features:[ve]})}return t})();var ux={provide:Gn,useExisting:gt(()=>aa),multi:!0},aa=(()=>{class t extends dx{min;inputName="min";normalizeInput=e=>cx(e);createValidator=e=>Fh(e);static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(n,a){n&2&&A("min",a._enabled?a.min:null)},inputs:{min:"min"},standalone:!1,features:[re([ux]),te]})}return t})();var Xh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();function Mh(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var io=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let a=this._reduceControls(e),o={};return Mh(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new Qa(a,o)}record(e,n=null){let a=this._reduceControls(e);return new Fd(a,n)}control(e,n,a){let o={};return this.useNonNullable?(Mh(n)?o=n:(o.validators=n,o.asyncValidators=a),new Cr(e,De(k({},o),{nonNullable:!0}))):new Cr(e,n,a)}array(e,n,a){let o=e.map(r=>this._createControl(r));return new kd(o,n,a)}_reduceControls(e){let n={};return Object.keys(e).forEach(a=>{n[a]=this._createControl(e[a])}),n}_createControl(e){if(e instanceof Cr)return e;if(e instanceof Xa)return e;if(Array.isArray(e)){let n=e[0],a=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,a,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _l=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Er,useValue:e.callSetDisabledState??fl}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Xh]})}return t})(),ao=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Yh,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Er,useValue:e.callSetDisabledState??fl}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Xh]})}return t})();var oo=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ro=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,n,a,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=n,this._parentForm=a,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,a=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(a,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var zd=class{_box;_destroyed=new B;_resizeSubject=new B;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new it(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(se(e=>e.some(n=>n.target===i)),Oi({bufferSize:1,refCount:!0}),Me(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},bl=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(W);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let a=n?.box||"content-box";return this._observers.has(a)||this._observers.set(a,new zd(a)),this._observers.get(a).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mx=["notch"],px=["matFormFieldNotchedOutline",""],hx=["*"],Qh=["iconPrefixContainer"],Zh=["textPrefixContainer"],Jh=["iconSuffixContainer"],ef=["textSuffixContainer"],fx=["textField"],gx=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],_x=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function bx(t,i){t&1&&E(0,"span",21)}function vx(t,i){if(t&1&&(s(0,"label",20),Y(1,1),I(2,bx,1,0,"span",21),l()),t&2){let e=y(2);_("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),A("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),T(!e.hideRequiredMarker&&e._control.required?2:-1)}}function yx(t,i){if(t&1&&I(0,vx,3,5,"label",20),t&2){let e=y();T(e._hasFloatingLabel()?0:-1)}}function xx(t,i){t&1&&E(0,"div",7)}function Cx(t,i){}function wx(t,i){if(t&1&&ke(0,Cx,0,0,"ng-template",13),t&2){y(2);let e=ye(1);_("ngTemplateOutlet",e)}}function Ex(t,i){if(t&1&&(s(0,"div",9),I(1,wx,1,1,null,13),l()),t&2){let e=y();_("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),T(e._forceDisplayInfixLabel()?-1:1)}}function Dx(t,i){t&1&&(s(0,"div",10,2),Y(2,2),l())}function Mx(t,i){t&1&&(s(0,"div",11,3),Y(2,3),l())}function Sx(t,i){}function Ax(t,i){if(t&1&&ke(0,Sx,0,0,"ng-template",13),t&2){y();let e=ye(1);_("ngTemplateOutlet",e)}}function Fx(t,i){t&1&&(s(0,"div",14,4),Y(2,4),l())}function kx(t,i){t&1&&(s(0,"div",15,5),Y(2,5),l())}function Ix(t,i){t&1&&E(0,"div",16)}function Tx(t,i){t&1&&(s(0,"div",18),Y(1,6),l())}function Rx(t,i){if(t&1&&(s(0,"mat-hint",22),d(1),l()),t&2){let e=y(2);_("id",e._hintLabelId),m(),J(e.hintLabel)}}function Ox(t,i){if(t&1&&(s(0,"div",19),I(1,Rx,2,2,"mat-hint",22),Y(2,7),E(3,"div",23),Y(4,8),l()),t&2){let e=y();m(),T(e.hintLabel?1:-1)}}var bn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["mat-label"]]})}return t})(),Px=new x("MatError");var oa=(()=>{class t{align="start";id=c(Ae).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,a){n&2&&(xt("id",a.id),A("align",null),N("mat-mdc-form-field-hint-end",a.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Bx=new x("MatPrefix");var lf=new x("MatSuffix"),ra=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[re([{provide:lf,useExisting:t}])]})}return t})(),cf=new x("FloatingLabelParent"),tf=(()=>{class t{_elementRef=c(P);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(bl);_ngZone=c(W);_parent=c(cf);_resizeSubscription=new ge;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Lx(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,a){n&2&&N("mdc-floating-label--float-above",a.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function Lx(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var nf="mdc-line-ripple--active",vl="mdc-line-ripple--deactivating",af=(()=>{class t{_elementRef=c(P);_cleanupTransitionEnd;constructor(){let e=c(W),n=c(be);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(vl),e.add(nf)}deactivate(){this._elementRef.nativeElement.classList.add(vl)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,a=n.contains(vl);e.propertyName==="opacity"&&a&&n.remove(nf,vl)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),of=(()=>{class t{_elementRef=c(P);_ngZone=c(W);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,a){if(n&1&&Se(mx,5),n&2){let o;z(o=j())&&(a._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,a){n&2&&N("mdc-notched-outline--notched",a.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:px,ngContentSelectors:hx,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,a){n&1&&(fe(),bt(0,"div",1),ze(1,"div",2,0),Y(3),qe(),bt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Mr=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t})}return t})();var sa=new x("MatFormField"),Nx=new x("MAT_FORM_FIELD_DEFAULT_OPTIONS"),rf="fill",Vx="auto",sf="fixed",zx="translateY(-50%)",Mn=(()=>{class t{_elementRef=c(P);_changeDetectorRef=c(me);_platform=c(pe);_idGenerator=c(Ae);_ngZone=c(W);_defaults=c(Nx,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Uo("iconPrefixContainer");_textPrefixContainerSignal=Uo("textPrefixContainer");_iconSuffixContainerSignal=Uo("iconSuffixContainer");_textSuffixContainerSignal=Uo("textSuffixContainer");_prefixSuffixContainers=et(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=nm(bn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=kt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Vx}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||rf;this._appearanceSignal.set(n)}_appearanceSignal=ne(rf);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||sf}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||sf}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new B;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ee();constructor(){let e=this._defaults,n=c(We);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),an(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=et(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,a="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(a+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(a+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(Ve([void 0,void 0]),xe(()=>[n.errorState,n.userAriaDescribedBy]),_c(),se(([[o,r],[u,p]])=>o!==u||r!==p)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(Me(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),He(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){am({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=et(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(u=>u.align==="start"):null,r=this._hintChildren?this._hintChildren.find(u=>u.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,a;if(n){let o=this._describedByIds||e;a=e.concat(n.filter(r=>r&&!o.includes(r)))}else a=e;this._control.setDescribedByIds(a),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,a=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,u=n?.getBoundingClientRect().width??0,p=a?.getBoundingClientRect().width??0,h=o?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",g=`${r+u}px`,C=`calc(${f} * (${g} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,M=`var(--mat-mdc-form-field-label-transform, ${zx} translateX(${C}))`,b=r+u+p+h;return[M,b]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,a]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),a!==null&&this._notchedOutline?._setMaxWidth(a)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,a,o){if(n&1&&(Ku(o,a._labelChild,bn,5),ct(o,Mr,5)(o,Bx,5)(o,lf,5)(o,Px,5)(o,oa,5)),n&2){xc();let r;z(r=j())&&(a._formFieldControl=r.first),z(r=j())&&(a._prefixChildren=r),z(r=j())&&(a._suffixChildren=r),z(r=j())&&(a._errorChildren=r),z(r=j())&&(a._hintChildren=r)}},viewQuery:function(n,a){if(n&1&&(Xu(a._iconPrefixContainerSignal,Qh,5)(a._textPrefixContainerSignal,Zh,5)(a._iconSuffixContainerSignal,Jh,5)(a._textSuffixContainerSignal,ef,5),Se(fx,5)(Qh,5)(Zh,5)(Jh,5)(ef,5)(tf,5)(of,5)(af,5)),n&2){xc(4);let o;z(o=j())&&(a._textField=o.first),z(o=j())&&(a._iconPrefixContainer=o.first),z(o=j())&&(a._textPrefixContainer=o.first),z(o=j())&&(a._iconSuffixContainer=o.first),z(o=j())&&(a._textSuffixContainer=o.first),z(o=j())&&(a._floatingLabel=o.first),z(o=j())&&(a._notchedOutline=o.first),z(o=j())&&(a._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,a){n&2&&N("mat-mdc-form-field-label-always-float",a._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",a._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",a._hasIconSuffix)("mat-form-field-invalid",a._control.errorState)("mat-form-field-disabled",a._control.disabled)("mat-form-field-autofilled",a._control.autofilled)("mat-form-field-appearance-fill",a.appearance=="fill")("mat-form-field-appearance-outline",a.appearance=="outline")("mat-form-field-hide-placeholder",a._hasFloatingLabel()&&!a._shouldLabelFloat())("mat-primary",a.color!=="accent"&&a.color!=="warn")("mat-accent",a.color==="accent")("mat-warn",a.color==="warn")("ng-untouched",a._shouldForward("untouched"))("ng-touched",a._shouldForward("touched"))("ng-pristine",a._shouldForward("pristine"))("ng-dirty",a._shouldForward("dirty"))("ng-valid",a._shouldForward("valid"))("ng-invalid",a._shouldForward("invalid"))("ng-pending",a._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[re([{provide:sa,useExisting:t},{provide:cf,useExisting:t}])],ngContentSelectors:_x,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,a){if(n&1&&(fe(gx),ke(0,yx,1,1,"ng-template",null,0,Vi),s(2,"div",6,1),R("click",function(r){return a._control.onContainerClick(r)}),I(4,xx,1,0,"div",7),s(5,"div",8),I(6,Ex,2,2,"div",9),I(7,Dx,3,0,"div",10),I(8,Mx,3,0,"div",11),s(9,"div",12),I(10,Ax,1,1,null,13),Y(11),l(),I(12,Fx,3,0,"div",14),I(13,kx,3,0,"div",15),l(),I(14,Ix,1,0,"div",16),l(),s(15,"div",17),I(16,Tx,2,0,"div",18)(17,Ox,5,1,"div",19),l()),n&2){let o;m(2),N("mdc-text-field--filled",!a._hasOutline())("mdc-text-field--outlined",a._hasOutline())("mdc-text-field--no-label",!a._hasFloatingLabel())("mdc-text-field--disabled",a._control.disabled)("mdc-text-field--invalid",a._control.errorState),m(2),T(!a._hasOutline()&&!a._control.disabled?4:-1),m(2),T(a._hasOutline()?6:-1),m(),T(a._hasIconPrefix?7:-1),m(),T(a._hasTextPrefix?8:-1),m(2),T(!a._hasOutline()||a._forceDisplayInfixLabel()?10:-1),m(2),T(a._hasTextSuffix?12:-1),m(),T(a._hasIconSuffix?13:-1),m(),T(a._hasOutline()?-1:14),m(),N("mat-mdc-form-field-subscript-dynamic-size",a.subscriptSizing==="dynamic");let r=a._getSubscriptMessageType();m(),T((o=r)==="error"?16:o==="hint"?17:-1)}},dependencies:[tf,of,ji,af,oa],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var jx=new x("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var yi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[oo,{provide:jx,useValue:{separatorKeyCodes:[13]}}],imports:[Dn,ee]})}return t})();var df=Symbol("");function uf(t){return new Proxy(t,{has(i,e){return!!this.get(i,e,void 0)},get(i,e){let n=ot(i);return!Ux(n)||!(e in n)?(qt(i[e])&&i[e][df]&&delete i[e],i[e]):(qt(i[e])||(Object.defineProperty(i,e,{value:et(()=>i()[e]),configurable:!0}),i[e][df]=!0),uf(i[e]))}})}var Hx=[WeakSet,WeakMap,Promise,Date,Error,RegExp,ArrayBuffer,DataView,Function];function Ux(t){if(t===null||typeof t!="object"||$x(t))return!1;let i=Object.getPrototypeOf(t);if(i===Object.prototype)return!0;for(;i&&i!==Object.prototype;){if(Hx.includes(i.constructor))return!1;i=Object.getPrototypeOf(i)}return i===Object.prototype}function $x(t){return typeof t?.[Symbol.iterator]=="function"}var Gx=new WeakMap,$t=Symbol("");function vn(t,...i){let e=ot(()=>mf(t)),n=i.reduce((r,u)=>k(k({},r),typeof u=="function"?u(r):u),e),a=t[$t],o=Reflect.ownKeys(t[$t]);for(let r of Reflect.ownKeys(n))if(o.includes(r)){let u=r;e[u]!==n[u]&&a[u].set(n[u])}Yx(t)}function mf(t){let i=t[$t];return Reflect.ownKeys(t[$t]).reduce((e,n)=>{let a=i[n]();return De(k({},e),{[n]:a})},{})}function Wx(t){return Gx.get(t[$t])||[]}function Yx(t){let i=Wx(t);for(let e of i){let n=ot(()=>mf(t));e(n)}}function pf(...t){let i=[...t],e=typeof i[0]=="function"?{}:i.shift(),n=i;return(()=>{class o{constructor(){let u=n.reduce((b,U)=>U(b),qx()),{stateSignals:p,props:h,methods:f,hooks:g}=u,v=k(k(k({},p),h),f);this[$t]=u[$t];for(let b of Reflect.ownKeys(v))this[b]=v[b];let{onInit:C,onDestroy:M}=g;C&&C(),M&&c(Yt).onDestroy(M)}static \u0275fac=function(p){return new(p||o)};static \u0275prov=S({token:o,factory:o.\u0275fac,providedIn:e.providedIn||null})}return o})()}function qx(){return{[$t]:{},stateSignals:{},props:{},methods:{},hooks:{}}}function Kx(t){return i=>{let e=t(k(k(k({[$t]:i[$t]},i.stateSignals),i.props),i.methods));return De(k({},i),{props:k(k({},i.props),e)})}}function hf(t){return Kx(i=>{let e=t(i);return Reflect.ownKeys(e).reduce((a,o)=>{let r=e[o];return De(k({},a),{[o]:qt(r)?r:et(r)})},{})})}function ff(t){return i=>{let e=t(k(k(k({[$t]:i[$t]},i.stateSignals),i.props),i.methods));return De(k({},i),{methods:k(k({},i.methods),e)})}}function gf(t){return i=>{let e=typeof t=="function"?t():t,n=Reflect.ownKeys(e),a=i[$t],o={};for(let r of n)a[r]=ne(e[r]),o[r]=uf(a[r]);return De(k({},i),{stateSignals:k(k({},i.stateSignals),o)})}}function _f(t,i){let e=i?.injector??c(X),n=new B,a=t(n).subscribe();e.get(Yt).onDestroy(()=>a.unsubscribe());let o=(r,u)=>{if(Xx(r))return n.next(r),{destroy:gu};let p=Qx(),h=u?.injector??p??e;if(typeof r=="function"){let g=an(()=>{let v=r();ot(()=>n.next(v))},{injector:h});return a.add({unsubscribe:()=>g.destroy()}),g}let f=r.subscribe(g=>n.next(g));return a.add(f),h!==e&&h.get(Yt).onDestroy(()=>f.unsubscribe()),{destroy:()=>f.unsubscribe()}};return o.destroy=a.unsubscribe.bind(a),o}function Xx(t){return typeof t!="function"&&!hc(t)}function Qx(){try{return c(X)}catch{return}}var Sr=[{start:0,end:36e3,rate:.03,minus:0},{start:36e3,end:144e3,rate:.1,minus:2520},{start:144e3,end:3e5,rate:.2,minus:16920},{start:3e5,end:42e4,rate:.25,minus:31920},{start:42e4,end:66e4,rate:.3,minus:52920},{start:66e4,end:96e4,rate:.35,minus:85920},{start:96e4,end:1/0,rate:.45,minus:181920}],bf=[{start:0,end:3e3,rate:.03,minus:0},{start:3e3,end:12e3,rate:.1,minus:210},{start:12e3,end:25e3,rate:.2,minus:1410},{start:25e3,end:35e3,rate:.25,minus:2660},{start:35e3,end:55e3,rate:.3,minus:4410},{start:55e3,end:8e4,rate:.35,minus:7160},{start:8e4,end:1/0,rate:.45,minus:15160}],vf=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:1e3,label:"\u4E00\u4E2A\u5A74\u5E7C\u513F\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A1000\u5143"},{value:2e3,label:"\u4E00\u4E2A\u5A74\u5E7C\u513F\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A2000\u5143"},{value:2e3,label:"\u4E24\u4E2A\u5A74\u5E7C\u513F\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A2000\u5143"},{value:4e3,label:"\u4E24\u4E2A\u5A74\u5E7C\u513F\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A4000\u5143"},{value:3e3,label:"\u4E09\u4E2A\u5A74\u5E7C\u513F\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A3000\u5143"},{value:6e3,label:"\u4E09\u4E2A\u5A74\u5E7C\u513F\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A6000\u5143"}],yf=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:1e3,label:"\u4E00\u4E2A\u5B69\u5B50\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A1000\u5143"},{value:2e3,label:"\u4E00\u4E2A\u5B69\u5B50\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A2000\u5143"},{value:2e3,label:"\u4E24\u4E2A\u5B69\u5B50\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A2000\u5143"},{value:4e3,label:"\u4E24\u4E2A\u5B69\u5B50\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A4000\u5143"},{value:3e3,label:"\u4E09\u4E2A\u5B69\u5B50\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A3000\u5143"},{value:6e3,label:"\u4E09\u4E2A\u5B69\u5B50\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A6000\u5143"}],xf=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:400,label:"\u63A5\u53D7\u5B66\u5386\u6559\u80B2\u4E2D\uFF0C\u6263\u9664\uFF1A400\u5143/\u6708"},{value:3600,label:"\u804C\u4E1A\u8D44\u683C\u7EE7\u7EED\u6559\u80B2\uFF08\u53D6\u5F97\u8BC1\u4E66\u5F53\u5E74\uFF09\uFF0C\u6263\u9664\uFF1A3600\u5143"}],Cf=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:500,label:"\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A500\u5143"},{value:1e3,label:"\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A1000\u5143"}],wf=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:800,label:"\u4EBA\u53E3\u5C11\u4E8E100\u4E07\u57CE\u5E02\uFF0C\u6263\u9664\uFF1A800\u5143"},{value:1100,label:"\u4EBA\u53E3\u5927\u4E8E100\u4E07\u57CE\u5E02\uFF0C\u6263\u9664\uFF1A1100\u5143"},{value:1500,label:"\u7701\u4F1A\uFF0C\u76F4\u8F96\u5E02\u7B49\uFF0C\u6263\u9664\uFF1A1500\u5143"}],Ef=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:3e3,label:"\u72EC\u751F\u5B50\u5973\uFF0C\u5168\u989D\u6263\u9664\uFF1A3000\u5143"},{value:1500,label:"\u4E24\u4E2A\u5B50\u5973\uFF0C\u5747\u644A\u6263\u9664\uFF1A1500\u5143"},{value:1e3,label:"\u4E09\u4E2A\u5B50\u5973\uFF0C\u5747\u644A\u6263\u9664\uFF1A1000\u5143"},{value:750,label:"\u56DB\u4E2A\u5B50\u5973\uFF0C\u5747\u644A\u6263\u9664\uFF1A750\u5143"},{value:600,label:"\u4E94\u4E2A\u5B50\u5973\uFF0C\u5747\u644A\u6263\u9664\uFF1A600\u5143"}],yl="2027.12.31",Df=[{start:36e3,end:38566.67,taxDiffAtStart:2309.1,lowerThreshold:36e3},{start:144e3,end:160500,taxDiffAtStart:13199.2,lowerThreshold:144e3},{start:3e5,end:318333.33,taxDiffAtStart:13749.25,lowerThreshold:3e5},{start:42e4,end:447500,taxDiffAtStart:19249.3,lowerThreshold:42e4},{start:66e4,end:706538.46,taxDiffAtStart:30249.35,lowerThreshold:66e4},{start:96e4,end:112e4,taxDiffAtStart:87999.45,lowerThreshold:96e4}];var Zx=typeof global=="object"&&global&&global.Object===Object&&global,xl=Zx;var Jx=typeof self=="object"&&self&&self.Object===Object&&self,eC=xl||Jx||Function("return this")(),st=eC;var tC=st.Symbol,ft=tC;var Mf=Object.prototype,nC=Mf.hasOwnProperty,iC=Mf.toString,Ar=ft?ft.toStringTag:void 0;function aC(t){var i=nC.call(t,Ar),e=t[Ar];try{t[Ar]=void 0;var n=!0}catch{}var a=iC.call(t);return n&&(i?t[Ar]=e:delete t[Ar]),a}var Sf=aC;var oC=Object.prototype,rC=oC.toString;function sC(t){return rC.call(t)}var Af=sC;var lC="[object Null]",cC="[object Undefined]",Ff=ft?ft.toStringTag:void 0;function dC(t){return t==null?t===void 0?cC:lC:Ff&&Ff in Object(t)?Sf(t):Af(t)}var Gt=dC;function uC(t){return t!=null&&typeof t=="object"}var yt=uC;var mC="[object Symbol]";function pC(t){return typeof t=="symbol"||yt(t)&&Gt(t)==mC}var so=pC;function hC(t,i){for(var e=-1,n=t==null?0:t.length,a=Array(n);++e<n;)a[e]=i(t[e],e,t);return a}var lo=hC;var fC=Array.isArray,nt=fC;var gC=1/0,kf=ft?ft.prototype:void 0,If=kf?kf.toString:void 0;function Tf(t){if(typeof t=="string")return t;if(nt(t))return lo(t,Tf)+"";if(so(t))return If?If.call(t):"";var i=t+"";return i=="0"&&1/t==-gC?"-0":i}var Rf=Tf;function _C(t){var i=typeof t;return t!=null&&(i=="object"||i=="function")}var tn=_C;function bC(t){return t}var co=bC;var vC="[object AsyncFunction]",yC="[object Function]",xC="[object GeneratorFunction]",CC="[object Proxy]";function wC(t){if(!tn(t))return!1;var i=Gt(t);return i==yC||i==xC||i==vC||i==CC}var Cl=wC;var EC=st["__core-js_shared__"],wl=EC;var Of=(function(){var t=/[^.]+$/.exec(wl&&wl.keys&&wl.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""})();function DC(t){return!!Of&&Of in t}var Pf=DC;var MC=Function.prototype,SC=MC.toString;function AC(t){if(t!=null){try{return SC.call(t)}catch{}try{return t+""}catch{}}return""}var Wn=AC;var FC=/[\\^$.*+?()[\]{}|]/g,kC=/^\[object .+?Constructor\]$/,IC=Function.prototype,TC=Object.prototype,RC=IC.toString,OC=TC.hasOwnProperty,PC=RegExp("^"+RC.call(OC).replace(FC,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function BC(t){if(!tn(t)||Pf(t))return!1;var i=Cl(t)?PC:kC;return i.test(Wn(t))}var Bf=BC;function LC(t,i){return t?.[i]}var Lf=LC;function NC(t,i){var e=Lf(t,i);return Bf(e)?e:void 0}var Nt=NC;var VC=Nt(st,"WeakMap"),El=VC;var Nf=Object.create,zC=(function(){function t(){}return function(i){if(!tn(i))return{};if(Nf)return Nf(i);t.prototype=i;var e=new t;return t.prototype=void 0,e}})(),Vf=zC;function jC(t,i,e){switch(e.length){case 0:return t.call(i);case 1:return t.call(i,e[0]);case 2:return t.call(i,e[0],e[1]);case 3:return t.call(i,e[0],e[1],e[2])}return t.apply(i,e)}var zf=jC;function HC(t,i){var e=-1,n=t.length;for(i||(i=Array(n));++e<n;)i[e]=t[e];return i}var jf=HC;var UC=800,$C=16,GC=Date.now;function WC(t){var i=0,e=0;return function(){var n=GC(),a=$C-(n-e);if(e=n,a>0){if(++i>=UC)return arguments[0]}else i=0;return t.apply(void 0,arguments)}}var Hf=WC;function YC(t){return function(){return t}}var Uf=YC;var qC=(function(){try{var t=Nt(Object,"defineProperty");return t({},"",{}),t}catch{}})(),uo=qC;var KC=uo?function(t,i){return uo(t,"toString",{configurable:!0,enumerable:!1,value:Uf(i),writable:!0})}:co,$f=KC;var XC=Hf($f),Gf=XC;function QC(t,i){for(var e=-1,n=t==null?0:t.length;++e<n&&i(t[e],e,t)!==!1;);return t}var Wf=QC;var ZC=9007199254740991,JC=/^(?:0|[1-9]\d*)$/;function e1(t,i){var e=typeof t;return i=i??ZC,!!i&&(e=="number"||e!="symbol"&&JC.test(t))&&t>-1&&t%1==0&&t<i}var Dl=e1;function t1(t,i,e){i=="__proto__"&&uo?uo(t,i,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[i]=e}var Ml=t1;function n1(t,i){return t===i||t!==t&&i!==i}var mo=n1;var i1=Object.prototype,a1=i1.hasOwnProperty;function o1(t,i,e){var n=t[i];(!(a1.call(t,i)&&mo(n,e))||e===void 0&&!(i in t))&&Ml(t,i,e)}var Sl=o1;function r1(t,i,e,n){var a=!e;e||(e={});for(var o=-1,r=i.length;++o<r;){var u=i[o],p=n?n(e[u],t[u],u,e,t):void 0;p===void 0&&(p=t[u]),a?Ml(e,u,p):Sl(e,u,p)}return e}var Sn=r1;var Yf=Math.max;function s1(t,i,e){return i=Yf(i===void 0?t.length-1:i,0),function(){for(var n=arguments,a=-1,o=Yf(n.length-i,0),r=Array(o);++a<o;)r[a]=n[i+a];a=-1;for(var u=Array(i+1);++a<i;)u[a]=n[a];return u[i]=e(r),zf(t,this,u)}}var qf=s1;var l1=9007199254740991;function c1(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=l1}var po=c1;function d1(t){return t!=null&&po(t.length)&&!Cl(t)}var Al=d1;var u1=Object.prototype;function m1(t){var i=t&&t.constructor,e=typeof i=="function"&&i.prototype||u1;return t===e}var ho=m1;function p1(t,i){for(var e=-1,n=Array(t);++e<t;)n[e]=i(e);return n}var Kf=p1;var h1="[object Arguments]";function f1(t){return yt(t)&&Gt(t)==h1}var jd=f1;var Xf=Object.prototype,g1=Xf.hasOwnProperty,_1=Xf.propertyIsEnumerable,b1=jd((function(){return arguments})())?jd:function(t){return yt(t)&&g1.call(t,"callee")&&!_1.call(t,"callee")},fo=b1;function v1(){return!1}var Qf=v1;var eg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Zf=eg&&typeof module=="object"&&module&&!module.nodeType&&module,y1=Zf&&Zf.exports===eg,Jf=y1?st.Buffer:void 0,x1=Jf?Jf.isBuffer:void 0,C1=x1||Qf,la=C1;var w1="[object Arguments]",E1="[object Array]",D1="[object Boolean]",M1="[object Date]",S1="[object Error]",A1="[object Function]",F1="[object Map]",k1="[object Number]",I1="[object Object]",T1="[object RegExp]",R1="[object Set]",O1="[object String]",P1="[object WeakMap]",B1="[object ArrayBuffer]",L1="[object DataView]",N1="[object Float32Array]",V1="[object Float64Array]",z1="[object Int8Array]",j1="[object Int16Array]",H1="[object Int32Array]",U1="[object Uint8Array]",$1="[object Uint8ClampedArray]",G1="[object Uint16Array]",W1="[object Uint32Array]",je={};je[N1]=je[V1]=je[z1]=je[j1]=je[H1]=je[U1]=je[$1]=je[G1]=je[W1]=!0;je[w1]=je[E1]=je[B1]=je[D1]=je[L1]=je[M1]=je[S1]=je[A1]=je[F1]=je[k1]=je[I1]=je[T1]=je[R1]=je[O1]=je[P1]=!1;function Y1(t){return yt(t)&&po(t.length)&&!!je[Gt(t)]}var tg=Y1;function q1(t){return function(i){return t(i)}}var go=q1;var ng=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fr=ng&&typeof module=="object"&&module&&!module.nodeType&&module,K1=Fr&&Fr.exports===ng,Hd=K1&&xl.process,X1=(function(){try{var t=Fr&&Fr.require&&Fr.require("util").types;return t||Hd&&Hd.binding&&Hd.binding("util")}catch{}})(),Yn=X1;var ig=Yn&&Yn.isTypedArray,Q1=ig?go(ig):tg,Fl=Q1;var Z1=Object.prototype,J1=Z1.hasOwnProperty;function ew(t,i){var e=nt(t),n=!e&&fo(t),a=!e&&!n&&la(t),o=!e&&!n&&!a&&Fl(t),r=e||n||a||o,u=r?Kf(t.length,String):[],p=u.length;for(var h in t)(i||J1.call(t,h))&&!(r&&(h=="length"||a&&(h=="offset"||h=="parent")||o&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||Dl(h,p)))&&u.push(h);return u}var kl=ew;function tw(t,i){return function(e){return t(i(e))}}var Il=tw;var nw=Il(Object.keys,Object),ag=nw;var iw=Object.prototype,aw=iw.hasOwnProperty;function ow(t){if(!ho(t))return ag(t);var i=[];for(var e in Object(t))aw.call(t,e)&&e!="constructor"&&i.push(e);return i}var og=ow;function rw(t){return Al(t)?kl(t):og(t)}var An=rw;function sw(t){var i=[];if(t!=null)for(var e in Object(t))i.push(e);return i}var rg=sw;var lw=Object.prototype,cw=lw.hasOwnProperty;function dw(t){if(!tn(t))return rg(t);var i=ho(t),e=[];for(var n in t)n=="constructor"&&(i||!cw.call(t,n))||e.push(n);return e}var sg=dw;function uw(t){return Al(t)?kl(t,!0):sg(t)}var _o=uw;var mw=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pw=/^\w*$/;function hw(t,i){if(nt(t))return!1;var e=typeof t;return e=="number"||e=="symbol"||e=="boolean"||t==null||so(t)?!0:pw.test(t)||!mw.test(t)||i!=null&&t in Object(i)}var bo=hw;var fw=Nt(Object,"create"),qn=fw;function gw(){this.__data__=qn?qn(null):{},this.size=0}var lg=gw;function _w(t){var i=this.has(t)&&delete this.__data__[t];return this.size-=i?1:0,i}var cg=_w;var bw="__lodash_hash_undefined__",vw=Object.prototype,yw=vw.hasOwnProperty;function xw(t){var i=this.__data__;if(qn){var e=i[t];return e===bw?void 0:e}return yw.call(i,t)?i[t]:void 0}var dg=xw;var Cw=Object.prototype,ww=Cw.hasOwnProperty;function Ew(t){var i=this.__data__;return qn?i[t]!==void 0:ww.call(i,t)}var ug=Ew;var Dw="__lodash_hash_undefined__";function Mw(t,i){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=qn&&i===void 0?Dw:i,this}var mg=Mw;function vo(t){var i=-1,e=t==null?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}vo.prototype.clear=lg;vo.prototype.delete=cg;vo.prototype.get=dg;vo.prototype.has=ug;vo.prototype.set=mg;var Ud=vo;function Sw(){this.__data__=[],this.size=0}var pg=Sw;function Aw(t,i){for(var e=t.length;e--;)if(mo(t[e][0],i))return e;return-1}var xi=Aw;var Fw=Array.prototype,kw=Fw.splice;function Iw(t){var i=this.__data__,e=xi(i,t);if(e<0)return!1;var n=i.length-1;return e==n?i.pop():kw.call(i,e,1),--this.size,!0}var hg=Iw;function Tw(t){var i=this.__data__,e=xi(i,t);return e<0?void 0:i[e][1]}var fg=Tw;function Rw(t){return xi(this.__data__,t)>-1}var gg=Rw;function Ow(t,i){var e=this.__data__,n=xi(e,t);return n<0?(++this.size,e.push([t,i])):e[n][1]=i,this}var _g=Ow;function yo(t){var i=-1,e=t==null?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}yo.prototype.clear=pg;yo.prototype.delete=hg;yo.prototype.get=fg;yo.prototype.has=gg;yo.prototype.set=_g;var Ci=yo;var Pw=Nt(st,"Map"),wi=Pw;function Bw(){this.size=0,this.__data__={hash:new Ud,map:new(wi||Ci),string:new Ud}}var bg=Bw;function Lw(t){var i=typeof t;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?t!=="__proto__":t===null}var vg=Lw;function Nw(t,i){var e=t.__data__;return vg(i)?e[typeof i=="string"?"string":"hash"]:e.map}var Ei=Nw;function Vw(t){var i=Ei(this,t).delete(t);return this.size-=i?1:0,i}var yg=Vw;function zw(t){return Ei(this,t).get(t)}var xg=zw;function jw(t){return Ei(this,t).has(t)}var Cg=jw;function Hw(t,i){var e=Ei(this,t),n=e.size;return e.set(t,i),this.size+=e.size==n?0:1,this}var wg=Hw;function xo(t){var i=-1,e=t==null?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}xo.prototype.clear=bg;xo.prototype.delete=yg;xo.prototype.get=xg;xo.prototype.has=Cg;xo.prototype.set=wg;var ca=xo;var Uw="Expected a function";function $d(t,i){if(typeof t!="function"||i!=null&&typeof i!="function")throw new TypeError(Uw);var e=function(){var n=arguments,a=i?i.apply(this,n):n[0],o=e.cache;if(o.has(a))return o.get(a);var r=t.apply(this,n);return e.cache=o.set(a,r)||o,r};return e.cache=new($d.Cache||ca),e}$d.Cache=ca;var Eg=$d;var $w=500;function Gw(t){var i=Eg(t,function(n){return e.size===$w&&e.clear(),n}),e=i.cache;return i}var Dg=Gw;var Ww=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yw=/\\(\\)?/g,qw=Dg(function(t){var i=[];return t.charCodeAt(0)===46&&i.push(""),t.replace(Ww,function(e,n,a,o){i.push(a?o.replace(Yw,"$1"):n||e)}),i}),Mg=qw;function Kw(t){return t==null?"":Rf(t)}var Sg=Kw;function Xw(t,i){return nt(t)?t:bo(t,i)?[t]:Mg(Sg(t))}var Di=Xw;var Qw=1/0;function Zw(t){if(typeof t=="string"||so(t))return t;var i=t+"";return i=="0"&&1/t==-Qw?"-0":i}var Fn=Zw;function Jw(t,i){i=Di(i,t);for(var e=0,n=i.length;t!=null&&e<n;)t=t[Fn(i[e++])];return e&&e==n?t:void 0}var Co=Jw;function eE(t,i,e){var n=t==null?void 0:Co(t,i);return n===void 0?e:n}var Ag=eE;function tE(t,i){for(var e=-1,n=i.length,a=t.length;++e<n;)t[a+e]=i[e];return t}var wo=tE;var Fg=ft?ft.isConcatSpreadable:void 0;function nE(t){return nt(t)||fo(t)||!!(Fg&&t&&t[Fg])}var kg=nE;function Ig(t,i,e,n,a){var o=-1,r=t.length;for(e||(e=kg),a||(a=[]);++o<r;){var u=t[o];i>0&&e(u)?i>1?Ig(u,i-1,e,n,a):wo(a,u):n||(a[a.length]=u)}return a}var Tg=Ig;function iE(t){var i=t==null?0:t.length;return i?Tg(t,1):[]}var Rg=iE;function aE(t){return Gf(qf(t,void 0,Rg),t+"")}var Og=aE;var oE=Il(Object.getPrototypeOf,Object),Eo=oE;var rE="[object Object]",sE=Function.prototype,lE=Object.prototype,Pg=sE.toString,cE=lE.hasOwnProperty,dE=Pg.call(Object);function uE(t){if(!yt(t)||Gt(t)!=rE)return!1;var i=Eo(t);if(i===null)return!0;var e=cE.call(i,"constructor")&&i.constructor;return typeof e=="function"&&e instanceof e&&Pg.call(e)==dE}var Bg=uE;function mE(t,i,e){var n=-1,a=t.length;i<0&&(i=-i>a?0:a+i),e=e>a?a:e,e<0&&(e+=a),a=i>e?0:e-i>>>0,i>>>=0;for(var o=Array(a);++n<a;)o[n]=t[n+i];return o}var Lg=mE;function pE(){this.__data__=new Ci,this.size=0}var Ng=pE;function hE(t){var i=this.__data__,e=i.delete(t);return this.size=i.size,e}var Vg=hE;function fE(t){return this.__data__.get(t)}var zg=fE;function gE(t){return this.__data__.has(t)}var jg=gE;var _E=200;function bE(t,i){var e=this.__data__;if(e instanceof Ci){var n=e.__data__;if(!wi||n.length<_E-1)return n.push([t,i]),this.size=++e.size,this;e=this.__data__=new ca(n)}return e.set(t,i),this.size=e.size,this}var Hg=bE;function Do(t){var i=this.__data__=new Ci(t);this.size=i.size}Do.prototype.clear=Ng;Do.prototype.delete=Vg;Do.prototype.get=zg;Do.prototype.has=jg;Do.prototype.set=Hg;var Mi=Do;function vE(t,i){return t&&Sn(i,An(i),t)}var Ug=vE;function yE(t,i){return t&&Sn(i,_o(i),t)}var $g=yE;var qg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Gg=qg&&typeof module=="object"&&module&&!module.nodeType&&module,xE=Gg&&Gg.exports===qg,Wg=xE?st.Buffer:void 0,Yg=Wg?Wg.allocUnsafe:void 0;function CE(t,i){if(i)return t.slice();var e=t.length,n=Yg?Yg(e):new t.constructor(e);return t.copy(n),n}var Kg=CE;function wE(t,i){for(var e=-1,n=t==null?0:t.length,a=0,o=[];++e<n;){var r=t[e];i(r,e,t)&&(o[a++]=r)}return o}var Xg=wE;function EE(){return[]}var Tl=EE;var DE=Object.prototype,ME=DE.propertyIsEnumerable,Qg=Object.getOwnPropertySymbols,SE=Qg?function(t){return t==null?[]:(t=Object(t),Xg(Qg(t),function(i){return ME.call(t,i)}))}:Tl,Mo=SE;function AE(t,i){return Sn(t,Mo(t),i)}var Zg=AE;var FE=Object.getOwnPropertySymbols,kE=FE?function(t){for(var i=[];t;)wo(i,Mo(t)),t=Eo(t);return i}:Tl,Rl=kE;function IE(t,i){return Sn(t,Rl(t),i)}var Jg=IE;function TE(t,i,e){var n=i(t);return nt(t)?n:wo(n,e(t))}var Ol=TE;function RE(t){return Ol(t,An,Mo)}var kr=RE;function OE(t){return Ol(t,_o,Rl)}var Pl=OE;var PE=Nt(st,"DataView"),Bl=PE;var BE=Nt(st,"Promise"),Ll=BE;var LE=Nt(st,"Set"),Nl=LE;var e_="[object Map]",NE="[object Object]",t_="[object Promise]",n_="[object Set]",i_="[object WeakMap]",a_="[object DataView]",VE=Wn(Bl),zE=Wn(wi),jE=Wn(Ll),HE=Wn(Nl),UE=Wn(El),da=Gt;(Bl&&da(new Bl(new ArrayBuffer(1)))!=a_||wi&&da(new wi)!=e_||Ll&&da(Ll.resolve())!=t_||Nl&&da(new Nl)!=n_||El&&da(new El)!=i_)&&(da=function(t){var i=Gt(t),e=i==NE?t.constructor:void 0,n=e?Wn(e):"";if(n)switch(n){case VE:return a_;case zE:return e_;case jE:return t_;case HE:return n_;case UE:return i_}return i});var Kn=da;var $E=Object.prototype,GE=$E.hasOwnProperty;function WE(t){var i=t.length,e=new t.constructor(i);return i&&typeof t[0]=="string"&&GE.call(t,"index")&&(e.index=t.index,e.input=t.input),e}var o_=WE;var YE=st.Uint8Array,So=YE;function qE(t){var i=new t.constructor(t.byteLength);return new So(i).set(new So(t)),i}var Ao=qE;function KE(t,i){var e=i?Ao(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}var r_=KE;var XE=/\w*$/;function QE(t){var i=new t.constructor(t.source,XE.exec(t));return i.lastIndex=t.lastIndex,i}var s_=QE;var l_=ft?ft.prototype:void 0,c_=l_?l_.valueOf:void 0;function ZE(t){return c_?Object(c_.call(t)):{}}var d_=ZE;function JE(t,i){var e=i?Ao(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}var u_=JE;var eD="[object Boolean]",tD="[object Date]",nD="[object Map]",iD="[object Number]",aD="[object RegExp]",oD="[object Set]",rD="[object String]",sD="[object Symbol]",lD="[object ArrayBuffer]",cD="[object DataView]",dD="[object Float32Array]",uD="[object Float64Array]",mD="[object Int8Array]",pD="[object Int16Array]",hD="[object Int32Array]",fD="[object Uint8Array]",gD="[object Uint8ClampedArray]",_D="[object Uint16Array]",bD="[object Uint32Array]";function vD(t,i,e){var n=t.constructor;switch(i){case lD:return Ao(t);case eD:case tD:return new n(+t);case cD:return r_(t,e);case dD:case uD:case mD:case pD:case hD:case fD:case gD:case _D:case bD:return u_(t,e);case nD:return new n;case iD:case rD:return new n(t);case aD:return s_(t);case oD:return new n;case sD:return d_(t)}}var m_=vD;function yD(t){return typeof t.constructor=="function"&&!ho(t)?Vf(Eo(t)):{}}var p_=yD;var xD="[object Map]";function CD(t){return yt(t)&&Kn(t)==xD}var h_=CD;var f_=Yn&&Yn.isMap,wD=f_?go(f_):h_,g_=wD;var ED="[object Set]";function DD(t){return yt(t)&&Kn(t)==ED}var __=DD;var b_=Yn&&Yn.isSet,MD=b_?go(b_):__,v_=MD;var SD=1,AD=2,FD=4,y_="[object Arguments]",kD="[object Array]",ID="[object Boolean]",TD="[object Date]",RD="[object Error]",x_="[object Function]",OD="[object GeneratorFunction]",PD="[object Map]",BD="[object Number]",C_="[object Object]",LD="[object RegExp]",ND="[object Set]",VD="[object String]",zD="[object Symbol]",jD="[object WeakMap]",HD="[object ArrayBuffer]",UD="[object DataView]",$D="[object Float32Array]",GD="[object Float64Array]",WD="[object Int8Array]",YD="[object Int16Array]",qD="[object Int32Array]",KD="[object Uint8Array]",XD="[object Uint8ClampedArray]",QD="[object Uint16Array]",ZD="[object Uint32Array]",Ne={};Ne[y_]=Ne[kD]=Ne[HD]=Ne[UD]=Ne[ID]=Ne[TD]=Ne[$D]=Ne[GD]=Ne[WD]=Ne[YD]=Ne[qD]=Ne[PD]=Ne[BD]=Ne[C_]=Ne[LD]=Ne[ND]=Ne[VD]=Ne[zD]=Ne[KD]=Ne[XD]=Ne[QD]=Ne[ZD]=!0;Ne[RD]=Ne[x_]=Ne[jD]=!1;function Vl(t,i,e,n,a,o){var r,u=i&SD,p=i&AD,h=i&FD;if(e&&(r=a?e(t,n,a,o):e(t)),r!==void 0)return r;if(!tn(t))return t;var f=nt(t);if(f){if(r=o_(t),!u)return jf(t,r)}else{var g=Kn(t),v=g==x_||g==OD;if(la(t))return Kg(t,u);if(g==C_||g==y_||v&&!a){if(r=p||v?{}:p_(t),!u)return p?Jg(t,$g(r,t)):Zg(t,Ug(r,t))}else{if(!Ne[g])return a?t:{};r=m_(t,g,u)}}o||(o=new Mi);var C=o.get(t);if(C)return C;o.set(t,r),v_(t)?t.forEach(function(U){r.add(Vl(U,i,e,U,t,o))}):g_(t)&&t.forEach(function(U,K){r.set(K,Vl(U,i,e,K,t,o))});var M=h?p?Pl:kr:p?_o:An,b=f?void 0:M(t);return Wf(b||t,function(U,K){b&&(K=U,U=t[K]),Sl(r,K,Vl(U,i,e,K,t,o))}),r}var w_=Vl;var JD="__lodash_hash_undefined__";function eM(t){return this.__data__.set(t,JD),this}var E_=eM;function tM(t){return this.__data__.has(t)}var D_=tM;function zl(t){var i=-1,e=t==null?0:t.length;for(this.__data__=new ca;++i<e;)this.add(t[i])}zl.prototype.add=zl.prototype.push=E_;zl.prototype.has=D_;var M_=zl;function nM(t,i){for(var e=-1,n=t==null?0:t.length;++e<n;)if(i(t[e],e,t))return!0;return!1}var S_=nM;function iM(t,i){return t.has(i)}var A_=iM;var aM=1,oM=2;function rM(t,i,e,n,a,o){var r=e&aM,u=t.length,p=i.length;if(u!=p&&!(r&&p>u))return!1;var h=o.get(t),f=o.get(i);if(h&&f)return h==i&&f==t;var g=-1,v=!0,C=e&oM?new M_:void 0;for(o.set(t,i),o.set(i,t);++g<u;){var M=t[g],b=i[g];if(n)var U=r?n(b,M,g,i,t,o):n(M,b,g,t,i,o);if(U!==void 0){if(U)continue;v=!1;break}if(C){if(!S_(i,function(K,ae){if(!A_(C,ae)&&(M===K||a(M,K,e,n,o)))return C.push(ae)})){v=!1;break}}else if(!(M===b||a(M,b,e,n,o))){v=!1;break}}return o.delete(t),o.delete(i),v}var jl=rM;function sM(t){var i=-1,e=Array(t.size);return t.forEach(function(n,a){e[++i]=[a,n]}),e}var F_=sM;function lM(t){var i=-1,e=Array(t.size);return t.forEach(function(n){e[++i]=n}),e}var k_=lM;var cM=1,dM=2,uM="[object Boolean]",mM="[object Date]",pM="[object Error]",hM="[object Map]",fM="[object Number]",gM="[object RegExp]",_M="[object Set]",bM="[object String]",vM="[object Symbol]",yM="[object ArrayBuffer]",xM="[object DataView]",I_=ft?ft.prototype:void 0,Gd=I_?I_.valueOf:void 0;function CM(t,i,e,n,a,o,r){switch(e){case xM:if(t.byteLength!=i.byteLength||t.byteOffset!=i.byteOffset)return!1;t=t.buffer,i=i.buffer;case yM:return!(t.byteLength!=i.byteLength||!o(new So(t),new So(i)));case uM:case mM:case fM:return mo(+t,+i);case pM:return t.name==i.name&&t.message==i.message;case gM:case bM:return t==i+"";case hM:var u=F_;case _M:var p=n&cM;if(u||(u=k_),t.size!=i.size&&!p)return!1;var h=r.get(t);if(h)return h==i;n|=dM,r.set(t,i);var f=jl(u(t),u(i),n,a,o,r);return r.delete(t),f;case vM:if(Gd)return Gd.call(t)==Gd.call(i)}return!1}var T_=CM;var wM=1,EM=Object.prototype,DM=EM.hasOwnProperty;function MM(t,i,e,n,a,o){var r=e&wM,u=kr(t),p=u.length,h=kr(i),f=h.length;if(p!=f&&!r)return!1;for(var g=p;g--;){var v=u[g];if(!(r?v in i:DM.call(i,v)))return!1}var C=o.get(t),M=o.get(i);if(C&&M)return C==i&&M==t;var b=!0;o.set(t,i),o.set(i,t);for(var U=r;++g<p;){v=u[g];var K=t[v],ae=i[v];if(n)var Re=r?n(ae,K,v,i,t,o):n(K,ae,v,t,i,o);if(!(Re===void 0?K===ae||a(K,ae,e,n,o):Re)){b=!1;break}U||(U=v=="constructor")}if(b&&!U){var ie=t.constructor,Xe=i.constructor;ie!=Xe&&"constructor"in t&&"constructor"in i&&!(typeof ie=="function"&&ie instanceof ie&&typeof Xe=="function"&&Xe instanceof Xe)&&(b=!1)}return o.delete(t),o.delete(i),b}var R_=MM;var SM=1,O_="[object Arguments]",P_="[object Array]",Hl="[object Object]",AM=Object.prototype,B_=AM.hasOwnProperty;function FM(t,i,e,n,a,o){var r=nt(t),u=nt(i),p=r?P_:Kn(t),h=u?P_:Kn(i);p=p==O_?Hl:p,h=h==O_?Hl:h;var f=p==Hl,g=h==Hl,v=p==h;if(v&&la(t)){if(!la(i))return!1;r=!0,f=!1}if(v&&!f)return o||(o=new Mi),r||Fl(t)?jl(t,i,e,n,a,o):T_(t,i,p,e,n,a,o);if(!(e&SM)){var C=f&&B_.call(t,"__wrapped__"),M=g&&B_.call(i,"__wrapped__");if(C||M){var b=C?t.value():t,U=M?i.value():i;return o||(o=new Mi),a(b,U,e,n,o)}}return v?(o||(o=new Mi),R_(t,i,e,n,a,o)):!1}var L_=FM;function N_(t,i,e,n,a){return t===i?!0:t==null||i==null||!yt(t)&&!yt(i)?t!==t&&i!==i:L_(t,i,e,n,N_,a)}var Ul=N_;var kM=1,IM=2;function TM(t,i,e,n){var a=e.length,o=a,r=!n;if(t==null)return!o;for(t=Object(t);a--;){var u=e[a];if(r&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++a<o;){u=e[a];var p=u[0],h=t[p],f=u[1];if(r&&u[2]){if(h===void 0&&!(p in t))return!1}else{var g=new Mi;if(n)var v=n(h,f,p,t,i,g);if(!(v===void 0?Ul(f,h,kM|IM,n,g):v))return!1}}return!0}var V_=TM;function RM(t){return t===t&&!tn(t)}var $l=RM;function OM(t){for(var i=An(t),e=i.length;e--;){var n=i[e],a=t[n];i[e]=[n,a,$l(a)]}return i}var z_=OM;function PM(t,i){return function(e){return e==null?!1:e[t]===i&&(i!==void 0||t in Object(e))}}var Gl=PM;function BM(t){var i=z_(t);return i.length==1&&i[0][2]?Gl(i[0][0],i[0][1]):function(e){return e===t||V_(e,t,i)}}var j_=BM;function LM(t,i){return t!=null&&i in Object(t)}var H_=LM;function NM(t,i,e){i=Di(i,t);for(var n=-1,a=i.length,o=!1;++n<a;){var r=Fn(i[n]);if(!(o=t!=null&&e(t,r)))break;t=t[r]}return o||++n!=a?o:(a=t==null?0:t.length,!!a&&po(a)&&Dl(r,a)&&(nt(t)||fo(t)))}var U_=NM;function VM(t,i){return t!=null&&U_(t,i,H_)}var $_=VM;var zM=1,jM=2;function HM(t,i){return bo(t)&&$l(i)?Gl(Fn(t),i):function(e){var n=Ag(e,t);return n===void 0&&n===i?$_(e,t):Ul(i,n,zM|jM)}}var G_=HM;function UM(t){return function(i){return i?.[t]}}var W_=UM;function $M(t){return function(i){return Co(i,t)}}var Y_=$M;function GM(t){return bo(t)?W_(Fn(t)):Y_(t)}var q_=GM;function WM(t){return typeof t=="function"?t:t==null?co:typeof t=="object"?nt(t)?G_(t[0],t[1]):j_(t):q_(t)}var K_=WM;function YM(t){var i=t==null?0:t.length;return i?t[i-1]:void 0}var Ir=YM;function qM(t,i){return lo(i,function(e){return t[e]})}var X_=qM;function KM(t){return t==null?[]:X_(t,An(t))}var Wl=KM;function XM(t,i){return i.length<2?t:Co(t,Lg(i,0,-1))}var Q_=XM;function QM(t,i){for(var e,n=-1,a=t.length;++n<a;){var o=i(t[n]);o!==void 0&&(e=e===void 0?o:e+o)}return e}var Yl=QM;function ZM(t,i){return i=Di(i,t),t=Q_(t,i),t==null||delete t[Fn(Ir(i))]}var Z_=ZM;function JM(t){return Bg(t)?void 0:t}var J_=JM;var eS=1,tS=2,nS=4,iS=Og(function(t,i){var e={};if(t==null)return e;var n=!1;i=lo(i,function(o){return o=Di(o,t),n||(n=o.length>1),o}),Sn(t,Pl(t),e),n&&(e=w_(e,eS|tS|nS,J_));for(var a=i.length;a--;)Z_(e,i[a]);return e}),Wd=iS;function aS(t){return t&&t.length?Yl(t,co):0}var Tr=aS;function oS(t,i){return t&&t.length?Yl(t,K_(i,2)):0}var _e=oS;function Kl(t,i){let e={bookSalary:_e(t,"salary"),prepaidTax:_e(t,"tax"),bonus:i,employee:{endowmentInsurance:0,healthInsurance:0,housingFund:0,supplementaryHousingFund:0,enterprisePension:0,enterprisePensionFull:0,privatePension:0},employerCosts:{full:0,insurance:{endowment:0,health:0,unemployment:0,birth:0,occupationalInjury:0},housingFund:0,supplementaryHousingFund:0,enterprisePension:0}};e.bookIncome=e.bookSalary+e.bonus;let n=5e3*12+_e(t,b=>b.fullExtraDeduction+b.insuranceFullCost+(b.housingFund+(b.supplementaryHousingFund||0))),a=Math.max(0,n-e.bookSalary);e.bonusTax=Rr(i,a),e.postTaxBonus=e.bonus-e.bonusTax,e.theoreticalTax=Xn(Math.max(e.bookIncome-n,0)),e.totalSeparatedTax=Xn(Math.max(e.bookSalary-n,0))+e.bonusTax,e.postTaxSalary=_e(t,"cashIncome"),e.taxedIncome=e.bookIncome-e.theoreticalTax,e.taxedIncomeDeprecated=e.bookIncome-e.totalSeparatedTax,e.employee.housingFund=_e(t,"housingFund"),e.employee.supplementaryHousingFund=_e(t,"supplementaryHousingFund"),e.employerCosts.housingFund=_e(t,"employerCosts.housingFund"),e.employerCosts.supplementaryHousingFund=_e(t,"employerCosts.supplementaryHousingFund"),e.fullHousingFund=e.employee.housingFund+e.employee.supplementaryHousingFund+e.employerCosts.housingFund+e.employerCosts.supplementaryHousingFund,e.cashIncome=e.taxedIncome-_e(t,"insuranceFullCost")-_e(t,"housingFund")-_e(t,"supplementaryHousingFund")-_e(t,"extraDeduction.enterprisePensionFromEmployee")-_e(t,"extraDeduction.privatePension");let o=_e(t,"cashIncome")+e.postTaxBonus;e.cashIncomeDeprecated=e.taxedIncomeDeprecated-_e(t,"insuranceFullCost")-_e(t,"housingFund")-_e(t,"supplementaryHousingFund")-_e(t,"extraDeduction.enterprisePensionFromEmployee")-_e(t,"extraDeduction.privatePension"),e.fullInsurance=_e(t,"insuranceFullCost"),e.employee.endowmentInsurance=_e(t,"insuranceCosts.endowment"),e.employee.healthInsurance=_e(t,"insuranceCosts.health"),e.employee.enterprisePension=_e(t,"extraDeduction.enterprisePensionFromEmployee"),e.employee.privatePension=_e(t,"extraDeduction.privatePension"),e.employee.enterprisePensionFull=_e(t,"extraDeduction.enterprisePensionFromEmployee")+_e(t,"extraDeduction.enterprisePensionFromEmployer"),e.totalIncome=e.cashIncome+e.fullHousingFund+e.employee.enterprisePensionFull+e.employee.privatePension,e.totalIncomeDeprecated=e.cashIncomeDeprecated+e.fullHousingFund+e.employee.enterprisePensionFull+e.employee.privatePension,e.employerCosts.full=_e(t,"employerCosts.full")+e.bonus,e.employerCosts.enterprisePension=_e(t,"employerCosts.enterprisePension"),e.employerCosts.insurance={endowment:_e(t,"employerCosts.insurance.endowment"),health:_e(t,"employerCosts.insurance.health"),unemployment:_e(t,"employerCosts.insurance.unemployment"),birth:_e(t,"employerCosts.insurance.birth"),occupationalInjury:_e(t,"employerCosts.insurance.occupationalInjury")},e.bonusTaxTrap=ua(i);let r=t.length>0?e.bookSalary/t.length:0,u=t.length>0?_e(t,b=>b.fullExtraDeduction+b.insuranceFullCost+b.housingFund)/t.length:0;e.bonusOptimization=sS(r,i,u);let p=t.slice(1).some(b=>b.newPayCycle),h=e.theoreticalTax<e.totalSeparatedTax,f=h?Number((e.totalSeparatedTax-e.theoreticalTax).toFixed(2)):0,g="none",v="",C=0;if(p){let b=e.prepaidTax,U=_e(t,ae=>ae.fullExtraDeduction+ae.insuranceFullCost+ae.housingFund)+t.length*5e3,K=Xn(Math.max(e.bookSalary-U,0));C=Number((b-K).toFixed(2)),C<-.01?(g="supplement",v=`\u9884\u8BA1\u6B21\u5E74 3-6 \u6708\u7EFC\u5408\u6240\u5F97\u6C47\u7B97\u6E05\u7F34\u9700\u8865\u7A0E \xA5${Math.abs(C).toFixed(2)} \u5143\uFF08\u591A\u7531\u5E74\u4E2D\u6362\u5DE5\u4F5C\u591A\u6BB5\u7D2F\u8BA1\u8BA1\u7A0E\u5BFC\u81F4\uFF09\u3002`):C>.01&&(g="refund",v=`\u9884\u8BA1\u6B21\u5E74 3-6 \u6708\u7EFC\u5408\u6240\u5F97\u6C47\u7B97\u6E05\u7F34\u53EF\u7533\u8BF7\u9000\u7A0E \xA5${C.toFixed(2)} \u5143\u3002`)}else h&&f>=1&&(g="refund",C=f,v=`\u6B21\u5E74\u6C47\u7B97\u5EFA\u8BAE\uFF1A\u82E5\u9009\u62E9\u5C06\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u5E76\u5165\u7EFC\u5408\u6240\u5F97\u7533\u62A5\uFF0C\u9884\u8BA1\u53EF\u7533\u8BF7\u9000\u7A0E \xA5${f.toFixed(2)} \u5143\u3002`);e.annualTaxSettlement={prepaidTax:e.prepaidTax+e.bonusTax,theoreticalTax:e.theoreticalTax,taxDiff:C,settlementType:g,amount:Math.abs(C),hint:v};let M=t[0];if(M?.sideIncome){let b=(M.sideIncome.laborIncome||0)*t.length,U=(M.sideIncome.manuscriptIncome||0)*t.length,K=b*.8,ae=U*.8*.7,Re=K+ae,ie=Xn(Re);e.sideIncomeTax={laborTax:Xn(K),manuscriptTax:Xn(ae),totalSideTax:ie}}else e.sideIncomeTax={laborTax:0,manuscriptTax:0,totalSideTax:0};return e}function rS(t,i){let e={salary:t.salary,housingFund:0,supplementaryHousingFund:0,tax:0,taxedIncome:0,cashIncome:0,accumulatedSalary:0,accumulatedTax:0,accumulatedTaxQuota:0,accumulatedDeduction:0,accumulatedSpecialDeduction:0,accumulatedExtraDeduction:0,insuranceCosts:{endowment:0,health:0,unemployment:0},insuranceFullCost:0,extraDeduction:t.extraDeduction,fullExtraDeduction:0,newPayCycle:t.newPayCycle,month:0,actualMonth:0,sideIncome:t.sideIncome,employerCosts:{full:0,insuranceFull:0,insurance:{endowment:0,health:0,unemployment:0,birth:0,occupationalInjury:0},housingFund:0,supplementaryHousingFund:0,enterprisePension:0},id:t.id!==void 0?String(t.id):"1"};t.newPayCycle||!i?e.month=1:e.month=i.month+1,e.actualMonth=i?i.actualMonth+1:1,e.id=t.id!==void 0?String(t.id):String(e.actualMonth);let n=t.newPayCycle,a=Qn(t.housingFundBase,t.housingFundBaseRange),o=a*t.housingFundRate,r=t.supplementaryHousingFundRate||0,u=a*r,p=o+u,h=t.housingFundRateLimit??.12,f=Math.min(t.housingFundRate+r,h),g=a*f,v=lS(n||!t.insuranceBaseOnLastMonth||!i?t.insuranceBase:i.salary,t.insuranceBaseRange,t.insuranceRate,t.salary),C=Tr(Wl(v)),M=t.extraDeduction.enterprisePensionFromEmployee||0,b=t.extraDeduction.privatePension||0,U=t.enterprisePensionEmployeeRateLimit??.04,K=Array.isArray(t.insuranceBaseRange)?t.insuranceBaseRange[1]:t.insuranceBaseRange.endowment[1],Re=Math.min(t.salary,K||t.salary)*U,ie=Math.min(M,Re),Xe=t.privatePensionMonthlyQuota??1e3,Ye=Math.min(b,Xe),Tt=dS(t.extraDeduction)+ie+Ye,Rn=e.month*t.freeTaxQuota;t.firstJobThisYear&&(Rn=((t.firstJobStartMonth||e.actualMonth||1)+e.month-1)*t.freeTaxQuota);let On=C+g,Ti=(n||!i?0:i.accumulatedSpecialDeduction)+On,Zn=(n||!i?0:i.accumulatedExtraDeduction)+Tt,Kr=(n||!i?0:i.accumulatedSalary)+t.salary,Xr=Math.max(Kr-(Rn+Ti+Zn),0),Qr=Xn(Xr)-(n||!i?0:i.accumulatedTax);e.fullExtraDeduction=Tt,e.insuranceCosts=v,e.insuranceFullCost=C,e.housingFund=o,e.supplementaryHousingFund=u,e.tax=Qr,e.taxedIncome=e.salary-Qr,e.cashIncome=e.salary-C-p-Qr-M-b,e.accumulatedSalary=Kr,e.accumulatedTaxQuota=Xr,e.accumulatedDeduction=Rn,e.accumulatedSpecialDeduction=Ti,e.accumulatedExtraDeduction=Zn,e.accumulatedTax=Qr+(n||!i?0:i.accumulatedTax);let u0=t.supplementaryHousingFundEmployerRate||0,hu=a*t.housingFundRate,fu=a*u0;return e.employerCosts.housingFund=hu,e.employerCosts.supplementaryHousingFund=fu,e.employerCosts.enterprisePension=t.extraDeduction.enterprisePensionFromEmployer,e.employerCosts.insurance=cS(n||!t.insuranceBaseOnLastMonth||!i?t.insuranceBase:i.salary,t.insuranceBaseRange,t.employer.insuranceRate),e.employerCosts.insuranceFull=Tr(Object.values(e.employerCosts.insurance)),e.employerCosts.full=e.salary+hu+fu+e.employerCosts.insuranceFull+e.employerCosts.enterprisePension,e}function Or(t){return t.reduce((i,e)=>{let n=rS(e,Ir(i));return i.push(n),i},[])}function Xn(t){let i=ql(t);return t*i.rate-i.minus}function Rr(t,i=0){if(t<=0)return 0;let e=Math.max(0,t-Math.max(0,i));if(e===0)return 0;let n=ql(e/12,bf);return e*n.rate-n.minus}function ua(t){if(t<=0)return{isTrap:!1,currentBonus:0,lowerThreshold:0,upperThreshold:0,lostAmount:0,warningMessage:""};for(let i of Df)if(t>i.start&&t<=i.end){let e=Rr(i.lowerThreshold),n=Rr(t),a=i.lowerThreshold-e,o=t-n,r=Math.max(0,a-o);return{isTrap:!0,currentBonus:t,lowerThreshold:i.lowerThreshold,upperThreshold:i.end,lostAmount:r,warningMessage:`\u26A0\uFE0F \u5E74\u7EC8\u5956 \xA5${t.toLocaleString()} \u843D\u5728\u7A0E\u6536\u65E0\u6548\u76F2\u533A [${(i.start+1).toLocaleString()} ~ ${i.end.toLocaleString()}] \u5143\u3002\u7A0E\u540E\u5230\u624B\u8F83\u53D1\u653E \xA5${i.lowerThreshold.toLocaleString()} \u5143\u53CD\u51CF\u5C11 \xA5${r.toFixed(2)} \u5143\u3002`}}return{isTrap:!1,currentBonus:t,lowerThreshold:0,upperThreshold:0,lostAmount:0,warningMessage:""}}function sS(t,i,e=0){let n=t*12+i,a=5e3*12+e*12,o=Math.max(0,t*12-a),r=Xn(o),u=Math.max(0,a-t*12),p=Rr(i,u),h=r+p,f=n-h-e*12,g=i,v=h,C=new Set([0,36e3,144e3,3e5,42e4,66e4,96e4,i]),M=Math.max(1e3,Math.floor(n/200));for(let ie=0;ie<=n;ie+=M)C.add(ie);for(let ie of C){if(ie>n||ua(ie).isTrap)continue;let Ye=n-ie,Tt=Math.max(0,Ye-a),Rn=Xn(Tt),On=Math.max(0,a-Ye),Ti=Rr(ie,On),Zn=Rn+Ti;Zn<v&&(v=Zn,g=ie)}let b=Math.round((n-g)/12),U=Math.max(0,h-v),K=n-v-e*12,ae=U<1,Re="";return ae?Re="\u5F53\u524D\u5E74\u7EC8\u5956\u4E0E\u6708\u85AA\u5206\u914D\u65B9\u6848\u5DF2\u662F\u7A0E\u8D1F\u6700\u4F18\u7EC4\u5408\u3002":Re=`\u5EFA\u8BAE\u5C06\u5E74\u7EC8\u5956\u89C4\u5212\u4E3A \xA5${g.toLocaleString()} \u5143\uFF0C\u6708\u85AA\u89C4\u5212\u4E3A \xA5${b.toLocaleString()} \u5143\uFF0C\u5168\u5E74\u53EF\u8282\u7A0E \xA5${U.toFixed(2)} \u5143\u3002`,{currentTotalTax:h,currentCashIncome:f,optimalBonus:g,optimalMonthlySalary:b,optimalTotalTax:v,optimalCashIncome:K,taxSaved:U,isAlreadyOptimal:ae,recommendationSummary:Re}}function lS(t,i,e,n){return{endowment:Qn(t,i.endowment)*e.endowment,health:Qn(t,i.health)*e.health,unemployment:Qn(t,i.unemployment)*e.unemployment}}function cS(t,i,e){return{endowment:Qn(t,i.endowment)*e.endowment,health:Qn(t,i.health)*e.health,unemployment:Qn(t,i.unemployment)*e.unemployment,birth:Qn(t,i.birth)*e.birth,occupationalInjury:Qn(t,i.occupationalInjury)*e.occupationalInjury}}function Qn(t,i){return Math.min(Math.max(t,i[0]),i[1])}function dS(t){return Tr(Wl(Wd(t,["enterprisePensionFromEmployee","enterprisePensionFromEmployer","privatePension"])))}function ql(t,i=Sr){let e=i.slice().reverse();for(let n of e)if(t>n.start)return n;return i[0]}function ma(t,i,e){let n=`${i}-${e.toString().padStart(2,"0")}`,a=t.policies.find(o=>o.effectiveDate<=n);if(!a){let o=t.policies[t.policies.length-1];if(!o)throw new Error(`\u5728 ${t.city} \u672A\u627E\u5230\u4EFB\u4F55\u6709\u6548\u653F\u7B56\u3002`);return o}return a}function Pr(t,i){let e=i.toString(),n=t.policies.filter(a=>a.effectiveDate.startsWith(e));return n.length>0?n[0]:ma(t,i,1)}function uS(t,i){return{salary:t.monthSalary,insuranceBase:t.insuranceBase,housingFundBase:t.housingFundBase,housingFundRate:t.housingFundRate/100,supplementaryHousingFundRate:t.supplementaryHousingFundRate!==void 0?t.supplementaryHousingFundRate/100:0,supplementaryHousingFundEmployerRate:t.supplementaryHousingFundEmployerRate!==void 0?t.supplementaryHousingFundEmployerRate/100:0,housingFundRateLimit:t.housingFundRateLimit??.12,insuranceRate:i.employee.insuranceRate,freeTaxQuota:5e3,extraDeduction:t.extraDeduction,annualBonus:t.annualBonus,insuranceBaseRange:mS(i),housingFundBaseRange:i.housingFundBaseRange,enterprisePensionEmployeeRateLimit:t.enterprisePensionEmployeeRateLimit??i.enterprisePensionEmployeeRateLimit??.04,privatePensionMonthlyQuota:t.privatePensionMonthlyQuota??i.privatePensionMonthlyQuota??1e3,insuranceBaseOnLastMonth:t.insuranceBaseOnLastMonth,firstJobThisYear:t.firstJobThisYear,firstJobStartMonth:t.firstJobStartMonth,sideIncome:t.sideIncome,newPayCycle:!1,employer:{insuranceRate:i.employer.insuranceRate}}}function mS(t){let{insuranceBaseRange:i}=t;return Array.isArray(i)&&(i={endowment:i,health:i,unemployment:i,birth:i,occupationalInjury:i}),i}function Xl(t,i,e,n=!1){let a;n&&(a=Pr(t,i));let o=[];for(let r=1;r<=12;r++){let u;n&&a?u=a:u=ma(t,i,r);let p=uS(e,u);r>=1&&r<=6?e.yearBeforeLastAvgSalary&&e.yearBeforeLastAvgSalary>0&&(p.yearBeforeLastAvgSalary=e.yearBeforeLastAvgSalary,p.insuranceBase=e.yearBeforeLastAvgSalary,p.housingFundBase=e.yearBeforeLastAvgSalary):r>=7&&r<=12&&e.lastYearAvgSalary&&e.lastYearAvgSalary>0&&(p.lastYearAvgSalary=e.lastYearAvgSalary,p.insuranceBase=e.lastYearAvgSalary,p.housingFundBase=e.lastYearAvgSalary),o.push(p)}return o}function eb(t){if(!t||t.length===0)return{monthlyAnalyses:[],transitionCount:0,transitionMonths:[],highestBracketRate:0,maxTaxJumpMonth:0,maxTaxJumpAmount:0};let i=[],e=0,n=0;for(let u=0;u<t.length;u++){let p=t[u],h=u>0?t[u-1]:void 0,f=p.newPayCycle||p.month===1,g=u===0||f?0:Math.max(0,h.accumulatedTaxQuota),v=Math.max(0,p.accumulatedTaxQuota),C=ql(g,Sr),M=ql(v,Sr),b=C.rate,U=M.rate,K=U>b,ae=K?M.start:void 0,Re=Sr.findIndex(Xr=>Xr.rate===M.rate),ie=Re>=0?Re+1:1,Xe=M.start,Ye=M.end,Tt=Number.isFinite(Ye)?Math.max(0,Ye-v):0,Rn=0;Number.isFinite(Ye)&&Ye>Xe?Rn=Math.min(100,Math.max(0,(v-Xe)/(Ye-Xe)*100)):Number.isFinite(Ye)||(Rn=100);let On=0,Ti=0,Zn=0;h&&(On=p.tax-h.tax,Ti=h.tax>0?On/h.tax:0,Zn=p.cashIncome-h.cashIncome,On>n&&(n=On,e=p.actualMonth));let Kr=p.salary>0?p.tax/p.salary:0;i.push({month:p.month,actualMonth:p.actualMonth,accumulatedTaxQuota:v,previousAccumulatedQuota:g,startRate:b,endRate:U,isTransition:K,bracketLevel:ie,thresholdCrossed:ae,tax:p.tax,taxDelta:On,taxDeltaPercent:Ti,cashIncome:p.cashIncome,cashDelta:Zn,effectiveTaxRate:Kr,distanceToNextThreshold:Tt,rangeProgressPercent:Rn,lowerThreshold:Xe,upperThreshold:Ye})}let a=i.filter(u=>u.isTransition).map(u=>u.actualMonth),o=a.length,r=Math.max(...i.map(u=>u.endRate),0);return{monthlyAnalyses:i,transitionCount:o,transitionMonths:a,highestBracketRate:r,maxTaxJumpMonth:e,maxTaxJumpAmount:n}}var pS={recipeIndex:[],cityRecipe:null,selectedYear:new Date().getFullYear(),usePredefinedInsurancePercents:!0,selectedMonth:1,clear:!1,monthlyMetas:[]},Ql=pf({providedIn:"root"},gf(pS),hf(t=>({hasResults:et(()=>t.monthlyMetas().length>0&&!t.clear()),monthlyIncomes:et(()=>{let i=t.monthlyMetas();return i.length===0||t.clear()?[]:Or(i)}),summary:et(()=>{let i=t.monthlyMetas();if(i.length===0||t.clear())return null;let e=Or(i);return e.length===0?null:Kl(e,i[0].annualBonus||0)})})),ff((t,i=c(wn))=>{let e=new Map,n=a=>{if(e.has(a.file)){vn(t,{cityRecipe:e.get(a.file)});return}i.get(`assets/recipes/${a.file}`).pipe(ti(0)).subscribe(o=>{e.set(a.file,o),vn(t,{cityRecipe:o})})};return{selectRecipeItem:n,loadRecipeIndex:_f(_u(lt(()=>i.get("assets/recipes/index.json").pipe(ti(0))),xn(a=>{vn(t,{recipeIndex:a}),a.length>0&&!t.cityRecipe()&&n(a[0])}))),setRecipe(a){vn(t,{cityRecipe:a})},setSelectedMonth(a){vn(t,{selectedMonth:a})},setSelectedYear(a){vn(t,{selectedYear:a})},setPredefinedInsurancePercents(a){vn(t,{usePredefinedInsurancePercents:a})},clearResults(){vn(t,{clear:!0})},updateMeta(a,o){let r=t.monthlyMetas();if(r&&r.length>o){let u=[...r];u[o]=De(k({},u[o]),{salary:a.monthSalary+(a.monthlyBonus||0),insuranceBase:a.insuranceBase,housingFundBase:a.housingFundBase,housingFundRate:a.housingFundRate/100,supplementaryHousingFundRate:a.supplementaryHousingFundRate!==void 0?a.supplementaryHousingFundRate/100:0,supplementaryHousingFundEmployerRate:a.supplementaryHousingFundEmployerRate!==void 0?a.supplementaryHousingFundEmployerRate/100:0,insuranceRate:{endowment:a.insuranceRate.endowment/100,health:a.insuranceRate.health/100,unemployment:a.insuranceRate.unemployment/100},extraDeduction:a.extraDeduction,insuranceBaseOnLastMonth:a.insuranceBaseOnLastMonth,newPayCycle:a.newPayCycle}),vn(t,{monthlyMetas:u,clear:!1})}},calculate(a){let o=t.cityRecipe();if(!o)return;let r=Xl(o,a.year,a,a.useUniformPolicy);r.length>0&&(r[0].newPayCycle=!0),vn(t,{monthlyMetas:r,selectedYear:a.year,clear:!1})}}}));function hS(t,i){if(t&1&&(s(0,"span",9)(1,"mat-icon",19),d(2,"check_circle"),l(),s(3,"span"),d(4),l()()),t&2){let e=i.$implicit;m(4),J(e)}}var Zl=(()=>{class t{constructor(){this.store=c(Ql),this.supportedCities=et(()=>{let e=this.store.recipeIndex();return!e||e.length===0?["\u6DF1\u5733","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE"]:Array.from(new Set(e.map(n=>n.city)))})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-help-info"]],decls:95,vars:0,consts:[[1,"help-dialog-header","d-flex","justify-content-between","align-items-center"],["mat-dialog-title","","data-testid","help-dialog-title",1,"m-0","font-weight-bold","text-dark"],["mat-icon-button","","mat-dialog-close","","aria-label","\u5173\u95ED\u4F7F\u7528\u6307\u5357",1,"btn-close-header"],["mat-dialog-content","","data-testid","help-dialog-content",1,"mat-typography","help-dialog-content"],[1,"mb-3"],[1,"section-title","text-dark"],[1,"section-icon","text-primary"],[1,"text-muted","small","mb-2"],["data-testid","supported-cities-container",1,"city-chips-container"],["data-testid","supported-city-chip",1,"city-badge"],[1,"guide-tip-box","p-2","px-3","rounded","small","text-muted","d-flex","align-items-start","mb-2"],[1,"tip-icon","text-warning","mr-2"],[1,"guide-feature-list","pl-3","mb-0","small","text-muted"],[1,"text-muted","small","mb-1"],[1,"text-muted","small","mb-0"],[1,"mb-1"],["href","mailto:jujiang.he@hotmail.com",1,"text-primary","font-weight-medium"],["mat-dialog-actions","","align","end",1,"help-dialog-actions"],["mat-flat-button","","color","primary","mat-dialog-close","","data-testid","help-dialog-close-btn"],[1,"extra-small-icon"]],template:function(n,a){n&1&&(s(0,"div",0)(1,"h2",1),d(2," \u4F7F\u7528\u6307\u5357 "),l(),s(3,"button",2)(4,"mat-icon"),d(5,"close"),l()()(),s(6,"article",3)(7,"section",4)(8,"h3",5)(9,"mat-icon",6),d(10,"location_city"),l(),s(11,"span"),d(12,"\u652F\u6301\u57CE\u5E02\u4E0E\u653F\u7B56\u6807\u51C6"),l()(),s(13,"p",7),d(14," \u7CFB\u7EDF\u5185\u7F6E\u5404\u4E3B\u6D41\u57CE\u5E02\u7684\u5386\u5E74\u793E\u4FDD\u516C\u79EF\u91D1\u7F34\u7EB3\u6807\u51C6\u4E0E\u5B98\u65B9\u653F\u7B56\u4F9D\u636E\uFF0C\u76EE\u524D\u5DF2\u52A8\u6001\u652F\u6301\uFF1A "),l(),s(15,"div",8),de(16,hS,5,1,"span",9,Kt),l(),s(18,"div",10)(19,"mat-icon",11),d(20,"lightbulb"),l(),s(21,"div")(22,"strong"),d(23,"\u63D0\u793A\uFF1A"),l(),d(24,"\u5728\u8BA1\u7B97\u5668\u8868\u5355\u4E2D\u9009\u62E9\u57CE\u5E02\u540E\uFF0C\u70B9\u51FB\u65C1\u8FB9\u7684\u3010\u653F\u7B56\u53C2\u6570\u3011\u6309\u94AE\uFF0C\u5373\u53EF\u67E5\u9605\u9009\u5B9A\u57CE\u5E02\u5404\u5E74\u5EA6\u793E\u4FDD\u516C\u79EF\u91D1\u57FA\u6570\u3001\u6BD4\u4F8B\u53CA\u5B98\u65B9\u51FA\u5904\u516C\u6587\u3002 "),l()()(),s(25,"section",4)(26,"h3",5)(27,"mat-icon",6),d(28,"featured_play_list"),l(),s(29,"span"),d(30,"\u6838\u5FC3\u529F\u80FD\u901F\u89C8"),l()(),s(31,"ul",12)(32,"li")(33,"strong"),d(34,"\u7EFC\u5408\u85AA\u7A0E\u6838\u7B97"),l(),d(35,"\uFF1A\u7CBE\u51C6\u6A21\u62DF\u6708\u5EA6\u5230\u624B\u6536\u5165\u3001\u7D2F\u8BA1\u9884\u6263\u9884\u7F34\u4E2A\u7A0E\u3001\u4E94\u9669\u4E00\u91D1\u4E2A\u4EBA\u4E0E\u4F01\u4E1A\u8D1F\u62C5\uFF0C\u652F\u6301\u5E74\u7EC8\u5956\u5355\u72EC\u8BA1\u7A0E\u3002 "),l(),s(36,"li")(37,"strong"),d(38,"\u4E13\u9879\u9644\u52A0\u6263\u9664"),l(),d(39,"\uFF1A\u652F\u6301\u5B50\u5973\u6559\u80B2\u3001\u4F4F\u623F\u8D37\u6B3E\u5229\u606F\u3001\u4F4F\u623F\u79DF\u91D1\uFF08\u81EA\u52A8\u4E92\u65A5\u6821\u9A8C\uFF09\u7B49\u5168\u9879\u4F9D\u6CD5\u62B5\u6263\u3002 "),l(),s(40,"li")(41,"strong"),d(42,"\u653F\u7B56\u5206\u6BB5\u4E0E\u57FA\u6570\u6838\u7B97"),l(),d(43,"\uFF1A\u652F\u6301\u5E74\u4E2D7\u6708\u653F\u7B56\u8C03\u57FA\u53F0\u9636\u6838\u7B97\uFF0C\u5E76\u652F\u6301\u6DF1\u5733\u4F9D\u636E\u4E0A\u6708\u5DE5\u8D44\u6838\u7B97\u7B49\u57CE\u5E02\u4E13\u5C5E\u89C4\u5219\u3002 "),l(),s(44,"li")(45,"strong"),d(46,"\u6708\u5EA6\u5FAE\u8C03\u4E0E\u7EA7\u8054\u540C\u6B65"),l(),d(47,"\uFF1A\u652F\u6301\u5355\u6708\u72EC\u7ACB\u6539\u85AA\u3001\u5E74\u4E2D\u6362\u5DE5\u4F5C\u91CD\u7F6E\u7D2F\u8BA1\u5468\u671F\uFF0C\u4FEE\u6539\u65F6\u652F\u6301\u667A\u80FD\u5411\u540E\u7EA7\u8054\u540C\u6B65\u3002 "),l(),s(48,"li")(49,"strong"),d(50,"\u591A\u7EF4\u56FE\u8868\u53EF\u89C6\u5316"),l(),d(51,"\uFF1A\u63D0\u4F9B\u6708\u5EA6\u8D8B\u52BF\u56FE\u3001\u6536\u5165\u6784\u6210\u6BD4\u4F8B\u997C\u56FE\u53CA\u5168\u5E74\u7D2F\u8BA1\u8D8B\u52BF\u56FE\u3002 "),l()()(),s(52,"section",4)(53,"h3",5)(54,"mat-icon",6),d(55,"gavel"),l(),s(56,"span"),d(57,"\u8BA1\u7B97\u8FB9\u754C\u4E0E\u7279\u6B8A\u653F\u7B56\u8BF4\u660E"),l()(),s(58,"ul",12)(59,"li")(60,"strong"),d(61,"\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1"),l(),d(62,"\uFF1A\u6BCF\u7EB3\u7A0E\u5E74\u5EA6\u5185\u4EC5\u9650\u9009\u7528\u4E00\u6B21\u5355\u72EC\u8BA1\u7A0E\u4F18\u60E0\uFF08\u653F\u7B56\u6709\u6548\u671F\u6682\u81F3 2027 \u5E74 12 \u6708 31 \u65E5\uFF09\u3002 "),l(),s(63,"li")(64,"strong"),d(65,"\u5730\u65B9\u8BD5\u9A8C\u6027\u653F\u7B56"),l(),d(66,"\uFF1A\u90E8\u5206\u8BD5\u70B9\u57CE\u5E02\u63A8\u884C\u7684\u5C0F\u989D\u957F\u671F\u62A4\u7406\u4FDD\u9669\uFF08\u957F\u62A4\u9669\uFF09\u6216\u5730\u65B9\u5927\u989D\u533B\u7597\u4E92\u52A9\u91D1\uFF08\u901A\u5E38\u4E3A\u6BCF\u6708\u6570\u5143\u81F3\u5341\u51E0\u5143\uFF09\uFF0C\u56E0\u5C5E\u8BD5\u9A8C\u6027\u8D28\u4E14\u5404\u5730\u6267\u884C\u5DEE\u5F02\u8F83\u5927\uFF0C\u7CFB\u7EDF\u6682\u672A\u81EA\u52A8\u6263\u9664\uFF0C\u7528\u6237\u5982\u6709\u9700\u8981\u53EF\u5C06\u5176\u5B9E\u9645\u91D1\u989D\u5F55\u5165\u3010\u5176\u4ED6\u6263\u9664\u9879\u3011\u4E2D\u53C2\u4E0E\u7A0E\u524D\u62B5\u6263\u3002 "),l(),s(67,"li")(68,"strong"),d(69,"\u6C47\u7B97\u6E05\u7F34\u4E13\u9879"),l(),d(70,"\uFF1A\u5927\u75C5\u533B\u7597\u6263\u9664\u7531\u7EB3\u7A0E\u4EBA\u5728\u6B21\u5E74 3 \u6708 1 \u65E5\u81F3 6 \u6708 30 \u65E5\u6C47\u7B97\u6E05\u7F34\u65F6\u636E\u5B9E\u586B\u62A5\uFF1B\u8DF3\u69FD\u591A\u6BB5\u8BA1\u7A0E\u4EA7\u751F\u7684\u7A0E\u7387\u5DEE\u989D\u7531\u6B21\u5E74\u6C47\u7B97\u7EDF\u4E00\u591A\u9000\u5C11\u8865\u3002 "),l()()(),s(71,"section",4)(72,"h3",5)(73,"mat-icon",6),d(74,"shield"),l(),s(75,"span"),d(76,"\u57FA\u672C\u58F0\u660E\u4E0E\u9690\u79C1"),l()(),s(77,"p",13),d(78," \u2022 \u7EAF\u7F51\u9875\u672C\u5730\u5B89\u5168\u8BA1\u7B97\uFF0C\u4E0D\u6536\u96C6\u3001\u4E0D\u5B58\u50A8\u3001\u4E0D\u4E0A\u62A5\u4EFB\u4F55\u4E2A\u4EBA\u85AA\u8D44\u9690\u79C1\u6570\u636E\u3002 "),l(),s(79,"p",14),d(80," \u2022 \u8BA1\u7B97\u7ED3\u679C\u4F9D\u636E\u6700\u65B0\u7A0E\u6CD5\u4E0E\u5404\u5730\u5B98\u65B9\u653F\u7B56\u516C\u6587\u4EFF\u771F\u6D4B\u7B97\uFF0C\u4F9B\u4E2A\u4EBA\u6D4B\u7B97\u4E0E\u89C4\u5212\u53C2\u8003\u3002 "),l()(),s(81,"section",15)(82,"h3",5)(83,"mat-icon",6),d(84,"mail_outline"),l(),s(85,"span"),d(86,"\u53CD\u9988\u4E0E\u8054\u7CFB\u4F5C\u8005"),l()(),s(87,"p",14),d(88," \u5982\u53D1\u73B0\u8BA1\u7B97\u89C4\u5219\u6709\u8BEF\u3001\u57FA\u6570\u9700\u66F4\u65B0\u6216\u6709\u610F\u613F\u534F\u52A9\u6DFB\u52A0\u65B0\u57CE\u5E02\uFF0C\u6B22\u8FCE\u901A\u8FC7\u90AE\u7BB1 "),s(89,"a",16),d(90,"\u8054\u7CFB\u4F5C\u8005"),l(),d(91,"\u3002 "),l()()(),s(92,"div",17)(93,"button",18),d(94," \u6211\u77E5\u9053\u4E86 "),l()()),n&2&&(m(16),ue(a.supportedCities()))},dependencies:[Pe,Mt,nh,pi,Ga,hi,pt,Bt,fn,yi,ht,St],styles:[".help-dialog-header[_ngcontent-%COMP%]{padding:12px 20px;border-bottom:1px solid rgba(0,0,0,.08)}.help-dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;line-height:1.3;margin:0;padding:0}.help-dialog-header[_ngcontent-%COMP%]   .btn-close-header[_ngcontent-%COMP%]{margin:-6px -6px -6px 0}.help-dialog-content[_ngcontent-%COMP%]{overflow-y:auto;width:100%;max-height:70vh;padding:16px 20px}.help-dialog-actions[_ngcontent-%COMP%]{min-height:auto;margin:0;padding:8px 20px 12px;border-top:1px solid rgba(0,0,0,.08)}.section-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600;display:flex;align-items:center;margin-bottom:6px}.section-icon[_ngcontent-%COMP%]{font-size:18px;line-height:18px;display:inline-flex;justify-content:center;align-items:center;flex-shrink:0;width:18px;height:18px;margin-right:6px}.city-chips-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:4px;margin-bottom:10px;gap:8px 10px}.city-badge[_ngcontent-%COMP%]{font-size:.825rem;font-weight:500;line-height:1.4;display:inline-flex;align-items:center;padding:3px 10px;color:#1565c0;border:1px solid #bbdefb;border-radius:12px;background-color:#f0f7ff}.city-badge[_ngcontent-%COMP%]   .extra-small-icon[_ngcontent-%COMP%]{font-size:14px;line-height:14px;display:inline-flex;align-items:center;width:14px;height:14px;margin-right:4px;color:#1976d2}.guide-tip-box[_ngcontent-%COMP%]{line-height:1.5;border-left:3px solid #1976d2;background-color:#f8f9fa}.guide-tip-box[_ngcontent-%COMP%]   .tip-icon[_ngcontent-%COMP%]{font-size:16px;line-height:16px;flex-shrink:0;width:16px;height:16px;margin-top:2px}.guide-feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:1.5;margin-bottom:5px}"]})}}return t})();var tb=(()=>{class t{constructor(){this.dialog=c(hn)}openHelpDialog(){this.dialog.open(Zl,{width:"720px",maxWidth:"92vw"})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-navbar"]],decls:9,vars:0,consts:[["aria-label","Top Toolbar",1,"navbar-header"],["mat-button","","data-testid","navbar-brand",1,"docs-button"],["size","large","svgIcon","calculator"],[1,"flex-spacer"],["mat-icon-button","","data-testid","navbar-help-btn","aria-label","Help message for the tool",3,"click"]],template:function(n,a){n&1&&(s(0,"nav",0)(1,"a",1),E(2,"mat-icon",2),s(3,"span"),d(4,"\u4E2A\u7A0E\u4E0E\u85AA\u8D44\u8BA1\u7B97\u5668"),l()(),E(5,"div",3),s(6,"button",4),R("click",function(){return a.openHelpDialog()}),s(7,"mat-icon"),d(8,"help"),l()()())},dependencies:[pt,Bt,fn,ht,St,Mt],styles:[".navbar-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;padding:8px 16px}.navbar-header[_ngcontent-%COMP%] > .mat-mdc-button[_ngcontent-%COMP%]{color:inherit}.navbar-header[_ngcontent-%COMP%] > .mat-mdc-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:24px;height:24px}.navbar-header[_ngcontent-%COMP%] > .mat-mdc-button[_ngcontent-%COMP%]:last-child{margin-left:auto}.flex-spacer[_ngcontent-%COMP%]{flex-grow:1}"]})}}return t})();var fS=["*"];var gS=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],_S=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],bS=new x("MAT_CARD_CONFIG"),kn=(()=>{class t{appearance;constructor(){let e=c(bS,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,a){n&2&&N("mat-mdc-card-outlined",a.appearance==="outlined")("mdc-card--outlined",a.appearance==="outlined")("mat-mdc-card-filled",a.appearance==="filled")("mdc-card--filled",a.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:fS,decls:1,vars:0,template:function(n,a){n&1&&(fe(),Y(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),Si=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var Ai=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var nb=(()=>{class t{align="start";static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,a){n&2&&N("mat-mdc-card-actions-align-end",a.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),Fi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:_S,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,a){n&1&&(fe(gS),Y(0),ze(1,"div",0),Y(2,1),qe(),Y(3,2))},encapsulation:2,changeDetection:0})}return t})();var In=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ee]})}return t})();var Wt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Ha,Mn,ee]})}return t})();var vS=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,a){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),yS={passive:!0},ib=(()=>{class t{_platform=c(pe);_ngZone=c(W);_renderer=c(_t).createRenderer(null,null);_styleLoader=c(Be);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return va;this._styleLoader.load(vS);let n=Ft(e),a=this._monitoredElements.get(n);if(a)return a.subject;let o=new B,r="cdk-text-field-autofilled",u=h=>{h.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(r)?(n.classList.add(r),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!0}))):h.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(r)&&(n.classList.remove(r),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!1})))},p=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",u,yS)));return this._monitoredElements.set(n,{subject:o,unlisten:p}),o}stopMonitoring(e){let n=Ft(e),a=this._monitoredElements.get(n);a&&(a.unlisten(),a.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ab=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();var ob=new x("MAT_INPUT_VALUE_ACCESSOR");var xS=["button","checkbox","file","hidden","image","radio","range","reset","submit"],CS=new x("MAT_INPUT_CONFIG"),Fo=(()=>{class t{_elementRef=c(P);_platform=c(pe);ngControl=c(gn,{optional:!0,self:!0});_autofillMonitor=c(ib);_ngZone=c(W);_formField=c(sa,{optional:!0});_renderer=c(be);_uid=c(Ae).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(CS,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new B;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=kt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Z.required)??!1}set required(e){this._required=kt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Cd().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=kt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Cd().has(e));constructor(){let e=c(Dr,{optional:!0}),n=c(_n,{optional:!0}),a=c(oo),o=c(ob,{optional:!0,self:!0}),r=this._elementRef.nativeElement,u=r.nodeName.toLowerCase();o?qt(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=r,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(r,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new ro(a,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=u==="select",this._isTextarea=u==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=r.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&an(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){xS.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,a){n&1&&R("focus",function(){return a._focusChanged(!0)})("blur",function(){return a._focusChanged(!1)})("input",function(){return a._onInput()}),n&2&&(xt("id",a.id)("disabled",a.disabled&&!a.disabledInteractive)("required",a.required),A("name",a.name||null)("readonly",a._getReadonlyAttribute())("aria-disabled",a.disabled&&a.disabledInteractive?"true":null)("aria-invalid",a.empty&&a.required?null:a.errorState)("aria-required",a.required)("id",a.id),N("mat-input-server",a._isServer)("mat-mdc-form-field-textarea-control",a._isInFormField&&a._isTextarea)("mat-mdc-form-field-input-control",a._isInFormField)("mat-mdc-input-disabled-interactive",a.disabledInteractive)("mdc-text-field__input",a._isInFormField)("mat-mdc-native-select-inline",a._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",H]},exportAs:["matInput"],features:[re([{provide:Mr,useExisting:t}]),ve]})}return t})(),ko=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Wt,Wt,ab,ee]})}return t})();var Lr=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new B;constructor(i=!1,e,n=!0,a){this._multiple=i,this._emitChanges=n,this.compareWith=a,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var Nr=(()=>{class t{_listeners=[];notify(e,n){for(let a of this._listeners)a(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rb=(()=>{class t{_animationsDisabled=Ee();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,a){n&2&&N("mat-pseudo-checkbox-indeterminate",a.state==="indeterminate")("mat-pseudo-checkbox-checked",a.state==="checked")("mat-pseudo-checkbox-disabled",a.disabled)("mat-pseudo-checkbox-minimal",a.appearance==="minimal")("mat-pseudo-checkbox-full",a.appearance==="full")("_mat-animation-noopable",a._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,a){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var wS=["text"],ES=[[["mat-icon"]],"*"],DS=["mat-icon","*"];function MS(t,i){if(t&1&&E(0,"mat-pseudo-checkbox",1),t&2){let e=y();_("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function SS(t,i){if(t&1&&E(0,"mat-pseudo-checkbox",3),t&2){let e=y();_("disabled",e.disabled)}}function AS(t,i){if(t&1&&(s(0,"span",4),d(1),l()),t&2){let e=y();m(),w("(",e.group.label,")")}}var zr=new x("MAT_OPTION_PARENT_COMPONENT"),jr=new x("MatOptgroup");var Vr=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Vt=(()=>{class t{_element=c(P);_changeDetectorRef=c(me);_parent=c(zr,{optional:!0});group=c(jr,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(Ae).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ne(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new O;_text;_stateChanges=new B;constructor(){let e=c(Be);e.load(Pt),e.load(za),this._signalDisableRipple=!!this._parent&&qt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let a=this._getHostElement();typeof a.focus=="function"&&a.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Le(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Vr(this,e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-option"]],viewQuery:function(n,a){if(n&1&&Se(wS,7),n&2){let o;z(o=j())&&(a._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,a){n&1&&R("click",function(){return a._selectViaInteraction()})("keydown",function(r){return a._handleKeydown(r)}),n&2&&(xt("id",a.id),A("aria-selected",a.selected)("aria-disabled",a.disabled.toString()),N("mdc-list-item--selected",a.selected)("mat-mdc-option-multiple",a.multiple)("mat-mdc-option-active",a.active)("mdc-list-item--disabled",a.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",H]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:DS,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,a){n&1&&(fe(ES),I(0,MS,1,2,"mat-pseudo-checkbox",1),Y(1),s(2,"span",2,0),Y(4,1),l(),I(5,SS,1,1,"mat-pseudo-checkbox",3),I(6,AS,2,1,"span",4),E(7,"div",5)),n&2&&(T(a.multiple?0:-1),m(5),T(!a.multiple&&a.selected&&!a.hideSingleSelectionIndicator?5:-1),m(),T(a.group&&a.group._inert?6:-1),m(),_("matRippleTrigger",a._getHostElement())("matRippleDisabled",a.disabled||a.disableRipple))},dependencies:[rb,Un],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();function ec(t,i,e){if(e.length){let n=i.toArray(),a=e.toArray(),o=0;for(let r=0;r<t+1;r++)n[r].group&&n[r].group===a[o]&&o++;return o}return 0}function tc(t,i,e,n){return t<e?t:t+i>e+n?Math.max(0,t-n+i):e}var nc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ee]})}return t})();var Io=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Dn,nc,Vt,ee]})}return t})();var FS=["trigger"],kS=["panel"],IS=[[["mat-select-trigger"]],"*"],TS=["mat-select-trigger","*"];function RS(t,i){if(t&1&&(s(0,"span",4),d(1),l()),t&2){let e=y();m(),J(e.placeholder)}}function OS(t,i){t&1&&Y(0)}function PS(t,i){if(t&1&&(s(0,"span",11),d(1),l()),t&2){let e=y(2);m(),J(e.triggerValue)}}function BS(t,i){if(t&1&&(s(0,"span",5),I(1,OS,1,0)(2,PS,2,1,"span",11),l()),t&2){let e=y();m(),T(e.customTrigger?1:2)}}function LS(t,i){if(t&1){let e=$e();s(0,"div",12,1),R("keydown",function(a){Ce(e);let o=y();return we(o._handleKeydown(a))}),Y(2,1),l()}if(t&2){let e=y();Ge(e.panelClass),N("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),A("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var NS=new x("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>un(t)}}),VS=new x("MAT_SELECT_CONFIG"),zS=new x("MatSelectTrigger"),qd=class{source;value;constructor(i,e){this.source=i,this.value=e}},To=(()=>{class t{_viewportRuler=c(Ht);_changeDetectorRef=c(me);_elementRef=c(P);_dir=c(We,{optional:!0});_idGenerator=c(Ae);_renderer=c(be);_parentFormField=c(sa,{optional:!0});ngControl=c(gn,{self:!0,optional:!0});_liveAnnouncer=c(fd);_defaultOptions=c(VS,{optional:!0});_animationsDisabled=Ee();_popoverLocation;_initialized=new B;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let a=this.panel.nativeElement,o=ec(e,this.options,this.optionGroups),r=n._getHostElement();e===0&&o===1?a.scrollTop=0:a.scrollTop=tc(r.offsetTop,r.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new qd(this,e)}_scrollStrategyFactory=c(NS);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new B;_errorStateTracker;stateChanges=new B;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ne(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Z.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ei(()=>{let e=this.options;return e?e.changes.pipe(Ve(e),lt(()=>He(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(lt(()=>this.optionSelectionChanges))});openedChange=new O;_openedStream=this.openedChange.pipe(se(e=>e),xe(()=>{}));_closedStream=this.openedChange.pipe(se(e=>!e),xe(()=>{}));selectionChange=new O;valueChange=new O;constructor(){let e=c(oo),n=c(Dr,{optional:!0}),a=c(_n,{optional:!0}),o=c(new Pn("tabindex"),{optional:!0}),r=c(rr,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ro(e,this.ngControl,a,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Lr(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Me(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Me(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(Ve(null),Me(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?a.setAttribute("aria-labelledby",e):a.removeAttribute("aria-labelledby")}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(at(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let n=`${this.id}-panel`;this._trackedModal&&mi(this._trackedModal,"aria-owns",n),$a(e,"aria-owns",n),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;mi(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(a),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,a=n===40||n===38||n===37||n===39,o=n===13||n===32,r=this._keyManager;if(!r.isTyping()&&o&&!Le(e)||(this.multiple||e.altKey)&&a)e.preventDefault(),this.open();else if(!this.multiple){let u=this.selected;r.onKeydown(e);let p=this.selected;p&&u!==p&&this._liveAnnouncer.announce(p.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,a=e.keyCode,o=a===40||a===38,r=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(a===13||a===32)&&n.activeItem&&!Le(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!r&&this._multiple&&a===65&&e.ctrlKey){e.preventDefault();let u=this.options.some(p=>!p.disabled&&!p.selected);this.options.forEach(p=>{p.disabled||(u?p.select():p.deselect())})}else{let u=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==u&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Le(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ba?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ea(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=He(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Me(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),He(...this.options.map(n=>n._stateChanges)).pipe(Me(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let a=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(a!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),a!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,a)=>this.sortComparator?this.sortComparator(n,a,e):e.indexOf(n)-e.indexOf(a)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(a=>a.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(e){let n=dt(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-select"]],contentQueries:function(n,a,o){if(n&1&&ct(o,zS,5)(o,Vt,5)(o,jr,5),n&2){let r;z(r=j())&&(a.customTrigger=r.first),z(r=j())&&(a.options=r),z(r=j())&&(a.optionGroups=r)}},viewQuery:function(n,a){if(n&1&&Se(FS,5)(kS,5)(Gs,5),n&2){let o;z(o=j())&&(a.trigger=o.first),z(o=j())&&(a.panel=o.first),z(o=j())&&(a._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,a){n&1&&R("keydown",function(r){return a._handleKeydown(r)})("focus",function(){return a._onFocus()})("blur",function(){return a._onBlur()}),n&2&&(A("id",a.id)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a.panelOpen?a.id+"-panel":null)("aria-expanded",a.panelOpen)("aria-label",a.ariaLabel||null)("aria-required",a.required.toString())("aria-disabled",a.disabled.toString())("aria-invalid",a.errorState)("aria-activedescendant",a._getAriaActiveDescendant()),N("mat-mdc-select-disabled",a.disabled)("mat-mdc-select-invalid",a.errorState)("mat-mdc-select-required",a.required)("mat-mdc-select-empty",a.empty)("mat-mdc-select-multiple",a.multiple)("mat-select-open",a.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",H],disableRipple:[2,"disableRipple","disableRipple",H],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ke(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",H],placeholder:"placeholder",required:[2,"required","required",H],multiple:[2,"multiple","multiple",H],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",H],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ke],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",H]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[re([{provide:Mr,useExisting:t},{provide:zr,useExisting:t}]),ve],ngContentSelectors:TS,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,a){if(n&1&&(fe(IS),s(0,"div",2,0),R("click",function(){return a.open()}),s(3,"div",3),I(4,RS,2,1,"span",4)(5,BS,3,1,"span",5),l(),s(6,"div",6)(7,"div",7),zt(),s(8,"svg",8),E(9,"path",9),l()()()(),ke(10,LS,3,16,"ng-template",10),R("detach",function(){return a.close()})("backdropClick",function(){return a.close()})("overlayKeydown",function(r){return a._handleOverlayKeydown(r)})),n&2){let o=ye(1);m(3),A("id",a._valueId),m(),T(a.empty?4:5),m(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",a._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",a._scrollStrategy)("cdkConnectedOverlayOrigin",a._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",a._positions)("cdkConnectedOverlayWidth",a._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",a._popoverLocation)}},dependencies:[Ba,Gs],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return t})();var Ro=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Ut,Io,ee,cn,Wt,Io]})}return t})();var jS=["mat-internal-form-field",""],HS=["*"],sb=(()=>{class t{labelPosition="after";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(n,a){n&2&&N("mdc-form-field--align-end",a.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:jS,ngContentSelectors:HS,decls:1,vars:0,template:function(n,a){n&1&&(fe(),Y(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var US=["switch"],$S=["*"];function GS(t,i){t&1&&(s(0,"span",11),zt(),s(1,"svg",13),E(2,"path",14),l(),s(3,"svg",15),E(4,"path",16),l()())}var WS=new x("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),ac=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},Hr=(()=>{class t{_elementRef=c(P);_focusMonitor=c(Dt);_changeDetectorRef=c(me);defaults=c(WS);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new ac(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Ee();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new O;toggleChange=new O;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){c(Be).load(Pt);let e=c(new Pn("tabindex"),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||"accent",this.id=this._uniqueId=c(Ae).getId("mat-mdc-slide-toggle-"),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new ac(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(n,a){if(n&1&&Se(US,5),n&2){let o;z(o=j())&&(a._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(n,a){n&2&&(xt("id",a.id),A("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Ge(a.color?"mat-"+a.color:""),N("mat-mdc-slide-toggle-focused",a._focused)("mat-mdc-slide-toggle-checked",a.checked)("_mat-animation-noopable",a._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",H],color:"color",disabled:[2,"disabled","disabled",H],disableRipple:[2,"disableRipple","disableRipple",H],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ke(e)],checked:[2,"checked","checked",H],hideIcon:[2,"hideIcon","hideIcon",H],disabledInteractive:[2,"disabledInteractive","disabledInteractive",H]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[re([{provide:bi,useExisting:gt(()=>t),multi:!0},{provide:Gn,useExisting:t,multi:!0}]),ve],ngContentSelectors:$S,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(n,a){if(n&1&&(fe(),s(0,"div",1)(1,"button",2,0),R("click",function(){return a._handleClick()}),E(3,"div",3)(4,"span",4),s(5,"span",5)(6,"span",6)(7,"span",7),E(8,"span",8),l(),s(9,"span",9),E(10,"span",10),l(),I(11,GS,5,0,"span",11),l()()(),s(12,"label",12),R("click",function(r){return r.stopPropagation()}),Y(13),l()()),n&2){let o=ye(2);_("labelPosition",a.labelPosition),m(),N("mdc-switch--selected",a.checked)("mdc-switch--unselected",!a.checked)("mdc-switch--checked",a.checked)("mdc-switch--disabled",a.disabled)("mat-mdc-slide-toggle-disabled-interactive",a.disabledInteractive),_("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex)("disabled",a.disabled&&!a.disabledInteractive),A("id",a.buttonId)("name",a.name)("aria-label",a.ariaLabel)("aria-labelledby",a._getAriaLabelledBy())("aria-describedby",a.ariaDescribedby)("aria-required",a.required||null)("aria-checked",a.checked)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),m(9),_("matRippleTrigger",o)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),m(),T(a.hideIcon?-1:11),m(),_("for",a.buttonId),A("id",a._labelId)}},dependencies:[Un,sb],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return t})(),oc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Hr,ee]})}return t})();var YS=["panel"],qS=["*"];function KS(t,i){if(t&1&&(ze(0,"div",1,0),Y(2),qe()),t&2){let e=i.id,n=y();Ge(n._classList),N("mat-mdc-autocomplete-visible",n.showPanel)("mat-mdc-autocomplete-hidden",!n.showPanel)("mat-autocomplete-panel-animations-enabled",!n._animationsDisabled)("mat-primary",n._color==="primary")("mat-accent",n._color==="accent")("mat-warn",n._color==="warn"),xt("id",n.id),A("aria-label",n.ariaLabel||null)("aria-labelledby",n._getPanelAriaLabelledby(e))}}var Kd=class{source;option;constructor(i,e){this.source=i,this.option=e}},cb=new x("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),rc=(()=>{class t{_changeDetectorRef=c(me);_elementRef=c(P);_defaults=c(cb);_animationsDisabled=Ee();_activeOptionChanges=ge.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new O;opened=new O;closed=new O;optionActivated=new O;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=c(Ae).getId("mat-autocomplete-");inertGroups;constructor(){let e=c(pe);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new ea(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let n=new Kd(this,e);this.optionSelected.emit(n)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(n,a,o){if(n&1&&ct(o,Vt,5)(o,jr,5),n&2){let r;z(r=j())&&(a.options=r),z(r=j())&&(a.optionGroups=r)}},viewQuery:function(n,a){if(n&1&&Se(ut,7)(YS,5),n&2){let o;z(o=j())&&(a.template=o.first),z(o=j())&&(a.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",H],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",H],requireSelection:[2,"requireSelection","requireSelection",H],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",H],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",H]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[re([{provide:zr,useExisting:t}])],ngContentSelectors:qS,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(n,a){n&1&&(fe(),Ma(0,KS,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})();var XS={provide:bi,useExisting:gt(()=>Ur),multi:!0};var QS=new x("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>un(t)}}),Ur=(()=>{class t{_environmentInjector=c(nn);_element=c(P);_injector=c(X);_viewContainerRef=c(mt);_zone=c(W);_changeDetectorRef=c(me);_dir=c(We,{optional:!0});_formField=c(sa,{optional:!0,host:!0});_viewportRuler=c(Ht);_scrollStrategy=c(QS);_renderer=c(be);_animationsDisabled=Ee();_defaults=c(cb,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new B;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=ge.EMPTY;_breakpointObserver=c(cr);_handsetLandscapeSubscription=ge.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new B;_overlayPanelClass=Vn(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&mi(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return He(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(se(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(se(()=>this._overlayAttached)):Qe()).pipe(xe(e=>e instanceof Vr?e:null))}optionSelections=ei(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Ve(e),lt(()=>He(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(lt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new it(e=>{let n=o=>{let r=dt(o),u=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,p=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&r!==this._element.nativeElement&&!this._hasFocus()&&(!u||!u.contains(r))&&(!p||!p.contains(r))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(r)&&e.next(o)},a=[this._renderer.listen("document","click",n),this._renderer.listen("document","auxclick",n),this._renderer.listen("document","touchend",n)];return()=>{a.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let n=e,a=n.keyCode,o=Le(n);if(a===27&&!o&&n.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&a===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),n.preventDefault();else if(this.autocomplete){let r=this.autocomplete._keyManager.activeItem,u=a===38||a===40;a===9||u&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(n):u&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(u||this.autocomplete._keyManager.activeItem!==r)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let n=e.target,a=n.value;if(n.type==="number"&&(a=a==""?null:parseFloat(a)),this._previousValue!==a){if(this._previousValue=a,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(a),!a)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(r=>r.selected);if(o){let r=this._getDisplayValue(o.value);a!==r&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return ri()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new it(a=>{Ze(()=>{a.next()},{injector:this._environmentInjector})}),n=this.autocomplete.options?.changes.pipe(xn(()=>this._positionStrategy.reapplyLastPosition()),ti(0))??Qe();return He(e,n).pipe(lt(()=>this._zone.run(()=>{let a=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),a!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),at(1)).subscribe(a=>this._setValueAndClose(a))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let n=this.autocomplete;return n&&n.displayWith?n.displayWith(e):e}_assignOptionValue(e){let n=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(n??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let n=this.autocomplete,a=e?e.source:this._pendingAutoselectedOption;a?(this._clearPreviousSelectedOption(a),this._assignOptionValue(a.value),this._onChange(a.value),n._emitSelectEvent(a),this._element.nativeElement.focus()):n.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,n){this.autocomplete?.options?.forEach(a=>{a!==e&&a.selected&&a.deselect(n)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let n=this.autocomplete.id;$a(this._trackedModal,"aria-owns",n)}}_attachOverlay(e){if(!this.autocomplete)return;let n=this._overlayRef;n?(this._positionStrategy.setOrigin(this._getConnectedElement()),n.updateSize({width:this._getPanelWidth()})):(this._portal=new Et(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),n=mn(this._injector,this._getOverlayConfig()),this._overlayRef=n,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&n&&n.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Up.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),n&&!n.hasAttached()&&(n.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let a=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&a!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Le(e)||e.keyCode===38&&Le(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new dn({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=jn(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let n=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],a=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:a},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:a}],r;this.position==="above"?r=o:this.position==="below"?r=n:r=[...n,...o],e.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let n=-1;for(let a=0;a<e.options.length;a++)if(!e.options.get(a).disabled){n=a;break}e._keyManager.setActiveItem(n)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let n=this.autocomplete,a=ec(e,n.options,n.optionGroups);if(e===0&&a===1)n._setScrollTop(0);else if(n.panel){let o=n.options.toArray()[e];if(o){let r=o._getHostElement(),u=tc(r.offsetTop,r.offsetHeight,n._getScrollTop(),n.panel.nativeElement.offsetHeight);n._setScrollTop(u)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let n=this.autocomplete.id;this._trackedModal&&mi(this._trackedModal,"aria-owns",n),$a(e,"aria-owns",n),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;mi(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(n,a){n&1&&R("focusin",function(){return a._handleFocus()})("blur",function(){return a._onTouched()})("input",function(r){return a._handleInput(r)})("keydown",function(r){return a._handleKeydown(r)})("click",function(){return a._handleClick()}),n&2&&A("autocomplete",a.autocompleteAttribute)("role",a.autocompleteDisabled?null:"combobox")("aria-autocomplete",a.autocompleteDisabled?null:"list")("aria-activedescendant",a.panelOpen&&a.activeOption?a.activeOption.id:null)("aria-expanded",a.autocompleteDisabled?null:a.panelOpen.toString())("aria-controls",a.autocompleteDisabled||!a.panelOpen||a.autocomplete==null?null:a.autocomplete.id)("aria-haspopup",a.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",H]},exportAs:["matAutocompleteTrigger"],features:[re([XS]),ve]})}return t})(),sc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Ut,Io,cn,Io,ee]})}return t})();var Xd=new x("CdkAccordion"),ub=(()=>{class t{_stateChanges=new B;_openCloseAllActions=new B;id=c(Ae).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",H]},exportAs:["cdkAccordion"],features:[re([{provide:Xd,useExisting:t}]),ve]})}return t})(),mb=(()=>{class t{accordion=c(Xd,{optional:!0,skipSelf:!0});_changeDetectorRef=c(me);_expansionDispatcher=c(Nr);_openCloseAllSubscription=ge.EMPTY;closed=new O;opened=new O;destroyed=new O;expandedChange=new O;id=c(Ae).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ne(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",H],disabled:[2,"disabled","disabled",H]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[re([{provide:Xd,useValue:void 0}])]})}return t})(),pb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();var ZS=["body"],JS=["bodyWrapper"],eA=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],tA=["mat-expansion-panel-header","*","mat-action-row"];function nA(t,i){}var iA=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],aA=["mat-panel-title","mat-panel-description","*"];function oA(t,i){t&1&&(ze(0,"span",1),zt(),ze(1,"svg",2),bt(2,"path",3),qe()())}var Qd=new x("MAT_ACCORDION"),hb=new x("MAT_EXPANSION_PANEL"),rA=(()=>{class t{_template=c(ut);_expansionPanel=c(hb,{optional:!0});constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),fb=new x("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),$r=(()=>{class t extends mb{_viewContainerRef=c(mt);_animationsDisabled=Ee();_document=c(Q);_ngZone=c(W);_elementRef=c(P);_renderer=c(be);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new O;afterCollapse=new O;_inputChanges=new B;accordion=c(Qd,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=c(Ae).getId("mat-expansion-panel-header-");constructor(){super();let e=c(fb,{optional:!0});this._expansionDispatcher=c(Nr),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Ve(null),se(()=>this.expanded&&!this._portal),at(1)).subscribe(()=>{this._portal=new Et(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,a,o){if(n&1&&ct(o,rA,5),n&2){let r;z(r=j())&&(a._lazyContent=r.first)}},viewQuery:function(n,a){if(n&1&&Se(ZS,5)(JS,5),n&2){let o;z(o=j())&&(a._body=o.first),z(o=j())&&(a._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,a){n&2&&N("mat-expanded",a.expanded)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",H],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[re([{provide:Qd,useValue:void 0},{provide:hb,useExisting:t}]),te,ve],ngContentSelectors:tA,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,a){n&1&&(fe(eA),Y(0),s(1,"div",2,0)(3,"div",3,1)(5,"div",4),Y(6,1),ke(7,nA,0,0,"ng-template",5),l(),Y(8,2),l()()),n&2&&(m(),A("inert",a.expanded?null:""),m(2),_("id",a.id),A("aria-labelledby",a._headerId),m(4),_("cdkPortalOutlet",a._portal))},dependencies:[En],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return t})();var Gr=(()=>{class t{panel=c($r,{host:!0});_element=c(P);_focusMonitor=c(Dt);_changeDetectorRef=c(me);_parentChangeSubscription=ge.EMPTY;constructor(){c(Be).load(Pt);let e=this.panel,n=c(fb,{optional:!0}),a=c(new Pn("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(se(r=>!!(r.hideToggle||r.togglePosition))):va;this.tabIndex=parseInt(a||"")||0,this._parentChangeSubscription=He(e.opened,e.closed,o,e._inputChanges.pipe(se(r=>!!(r.hideToggle||r.disabled||r.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(se(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Le(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,a){n&1&&R("click",function(){return a._toggle()})("keydown",function(r){return a._keydown(r)}),n&2&&(A("id",a.panel._headerId)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),Ie("height",a._getHeaderHeight()),N("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after",a._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",a._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ke(e)]},ngContentSelectors:aA,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,a){n&1&&(fe(iA),ze(0,"span",0),Y(1),Y(2,1),Y(3,2),qe(),I(4,oA,3,0,"span",1)),n&2&&(N("mat-content-hide-toggle",!a._showToggle()),m(4),T(a._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var gb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),_b=(()=>{class t extends ub{_keyManager;_ownHeaders=new Cn;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Ve(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Hn(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,a,o){if(n&1&&ct(o,Gr,5),n&2){let r;z(r=j())&&(a._headers=r)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,a){n&2&&N("mat-accordion-multi",a.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",H],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[re([{provide:Qd,useExisting:t}]),te]})}return t})(),lc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[pb,zn,ee]})}return t})();var sA=["mat-menu-item",""],lA=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],cA=["mat-icon, [matMenuItemIcon]","*"];function dA(t,i){t&1&&(zt(),s(0,"svg",2),E(1,"polygon",3),l())}var uA=["*"];function mA(t,i){if(t&1){let e=$e();ze(0,"div",0),os("click",function(){Ce(e);let a=y();return we(a.closed.emit("click"))})("animationstart",function(a){Ce(e);let o=y();return we(o._onAnimationStart(a.animationName))})("animationend",function(a){Ce(e);let o=y();return we(o._onAnimationDone(a.animationName))})("animationcancel",function(a){Ce(e);let o=y();return we(o._onAnimationDone(a.animationName))}),ze(1,"div",1),Y(2),qe()()}if(t&2){let e=y();Ge(e._classList),N("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),xt("id",e.panelId),A("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Jd=new x("MAT_MENU_PANEL"),Wr=(()=>{class t{_elementRef=c(P);_document=c(Q);_focusMonitor=c(Dt);_parentMenu=c(Jd,{optional:!0});_changeDetectorRef=c(me);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new B;_focused=new B;_highlighted=!1;_triggersSubmenu=!1;constructor(){c(Be).load(Pt),this._parentMenu?.addItem?.(this)}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),n=e.querySelectorAll("mat-icon, .material-icons");for(let a=0;a<n.length;a++)n[a].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(n,a){n&1&&R("click",function(r){return a._checkDisabled(r)})("mouseenter",function(){return a._handleMouseEnter()}),n&2&&(A("role",a.role)("tabindex",a._getTabIndex())("aria-disabled",a.disabled)("disabled",a.disabled||null),N("mat-mdc-menu-item-highlighted",a._highlighted)("mat-mdc-menu-item-submenu-trigger",a._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",H],disableRipple:[2,"disableRipple","disableRipple",H]},exportAs:["matMenuItem"],attrs:sA,ngContentSelectors:cA,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(n,a){n&1&&(fe(lA),Y(0),s(1,"span",0),Y(2,1),l(),E(3,"div",1),I(4,dA,2,0,":svg:svg",2)),n&2&&(m(3),_("matRippleDisabled",a.disableRipple||a.disabled)("matRippleTrigger",a._getHostElement()),m(),T(a._triggersSubmenu?4:-1))},dependencies:[Un],encapsulation:2,changeDetection:0})}return t})();var pA=new x("MatMenuContent");var hA=new x("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Zd="_mat-menu-enter",cc="_mat-menu-exit",Po=(()=>{class t{_elementRef=c(P);_changeDetectorRef=c(me);_injector=c(X);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ee();_allItems;_directDescendantItems=new Cn;_classList={};_panelAnimationState="void";_animationDone=new B;_isAnimating=ne(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let n=this._previousPanelClass,a=k({},this._classList);n&&n.length&&n.split(" ").forEach(o=>{a[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{a[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=a}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new O;close=this.closed;panelId=c(Ae).getId("mat-menu-panel-");constructor(){let e=c(hA);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Hn(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Ve(this._directDescendantItems),lt(e=>He(...e.map(n=>n._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let n=this._keyManager;if(this._panelAnimationState==="enter"&&n.activeItem?._hasFocus()){let a=e.toArray(),o=Math.max(0,Math.min(a.length-1,n.activeItemIndex||0));a[o]&&!a[o].disabled?n.setActiveItem(o):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Ve(this._directDescendantItems),lt(n=>He(...n.map(a=>a._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let n=e.keyCode,a=this._keyManager;switch(n){case 27:Le(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(n===38||n===40)&&a.setFocusOrigin("keyboard"),a.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ze(()=>{let n=this._resolvePanel();if(!n||!n.contains(document.activeElement)){let a=this._keyManager;a.setFocusOrigin(e).setFirstItemActive(),!a.activeItem&&n&&n.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,n=this.yPosition){this._classList=De(k({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":n==="above","mat-menu-below":n==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let n=e===cc;(n||e===Zd)&&(n&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(n?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Zd||e===cc)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let n=this._resolvePanel();n&&(n.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(cc),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Zd:cc)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Ve(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-menu"]],contentQueries:function(n,a,o){if(n&1&&ct(o,pA,5)(o,Wr,5)(o,Wr,4),n&2){let r;z(r=j())&&(a.lazyContent=r.first),z(r=j())&&(a._allItems=r),z(r=j())&&(a.items=r)}},viewQuery:function(n,a){if(n&1&&Se(ut,5),n&2){let o;z(o=j())&&(a.templateRef=o.first)}},hostVars:3,hostBindings:function(n,a){n&2&&A("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",H],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:H(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[re([{provide:Jd,useExisting:t}])],ngContentSelectors:uA,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(n,a){n&1&&(fe(),Ma(0,mA,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),fA=new x("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>un(t)}});var Oo=new WeakMap,gA=(()=>{class t{_canHaveBackdrop;_element=c(P);_viewContainerRef=c(mt);_menuItemInstance=c(Wr,{optional:!0,self:!0});_dir=c(We,{optional:!0});_focusMonitor=c(Dt);_ngZone=c(W);_injector=c(X);_scrollStrategy=c(fA);_changeDetectorRef=c(me);_animationsDisabled=Ee();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ge.EMPTY;_menuCloseSubscription=ge.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(n=>{this._destroyMenu(n),(n==="click"||n==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let n=c(Jd,{optional:!0});this._parentMaterialMenu=n instanceof Po?n:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Oo.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let n=this._menu;if(this._menuOpen||!n)return;this._pendingRemoval?.unsubscribe();let a=Oo.get(n);Oo.set(n,this),a&&a!==this&&a._closeMenu();let o=this._createOverlay(n),r=o.getConfig(),u=r.positionStrategy;this._setPosition(n,u),this._canHaveBackdrop?r.hasBackdrop=n.hasBackdrop==null?!this._triggersSubmenu():n.hasBackdrop:r.hasBackdrop=n.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(n)),n.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),n.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,n.direction=this.dir,e&&n.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),n instanceof Po&&(n._setIsOpen(!0),n._directDescendantItems.changes.pipe(Me(n.close)).subscribe(()=>{u.withLockedPosition(!1).reapplyLastPosition(),u.withLockedPosition(!0)}))}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}_destroyMenu(e){let n=this._overlayRef,a=this._menu;!n||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),a instanceof Po&&this._ownsMenu(a)?(this._pendingRemoval=a._animationDone.pipe(at(1)).subscribe(()=>{n.detach(),Oo.has(a)||a.lazyContent?.detach()}),a._setIsOpen(!1)):(n.detach(),a?.lazyContent?.detach()),a&&this._ownsMenu(a)&&Oo.delete(a),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let n=this._getOverlayConfig(e);this._subscribeToPositions(e,n.positionStrategy),this._overlayRef=mn(this._injector,n),this._overlayRef.keydownEvents().subscribe(a=>{this._menu instanceof Po&&this._menu._handleKeydown(a)})}return this._overlayRef}_getOverlayConfig(e){return new dn({positionStrategy:jn(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,n){e.setPositionClasses&&n.positionChanges.subscribe(a=>{this._ngZone.run(()=>{let o=a.connectionPair.overlayX==="start"?"after":"before",r=a.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,r)})})}_setPosition(e,n){let[a,o]=e.xPosition==="before"?["end","start"]:["start","end"],[r,u]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[p,h]=[r,u],[f,g]=[a,o],v=0;if(this._triggersSubmenu()){if(g=a=e.xPosition==="before"?"start":"end",o=f=a==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let C=this._parentMaterialMenu.items.first;this._parentInnerPadding=C?C._getHostElement().offsetTop:0}v=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(p=r==="top"?"bottom":"top",h=u==="top"?"bottom":"top");n.withPositions([{originX:a,originY:p,overlayX:f,overlayY:r,offsetY:v},{originX:o,originY:p,overlayX:g,overlayY:r,offsetY:v},{originX:a,originY:h,overlayX:f,overlayY:u,offsetY:-v},{originX:o,originY:h,overlayX:g,overlayY:u,offsetY:-v}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),n=this._overlayRef.detachments(),a=this._parentMaterialMenu?this._parentMaterialMenu.closed:Qe(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(se(r=>this._menuOpen&&r!==this._menuItemInstance)):Qe();return He(e,a,o,n)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Et(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Oo.get(e)===this}_triggerIsAriaDisabled(){return H(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(n){ns()};static \u0275dir=D({type:t})}return t})(),vb=(()=>{class t extends gA{_cleanupTouchstart;_hoverSubscription=ge.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new O;onMenuOpen=this.menuOpened;menuClosed=new O;onMenuClose=this.menuClosed;constructor(){super(!0);let e=c(be);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",n=>{Xi(n)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Ki(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let n=e.keyCode;(n===13||n===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(n===39&&this.dir==="ltr"||n===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(n,a){n&1&&R("click",function(r){return a._handleClick(r)})("mousedown",function(r){return a._handleMousedown(r)})("keydown",function(r){return a._handleKeydown(r)}),n&2&&A("aria-haspopup",a.menu?"menu":null)("aria-expanded",a.menuOpen)("aria-controls",a.menuOpen?a.menu==null?null:a.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[te]})}return t})();var yb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Dn,Ut,ee,cn]})}return t})();var bA=["tooltip"],vA=20;var yA=new x("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>un(t,{scrollThrottle:vA})}}),xA=new x("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var xb="tooltip-panel",CA={passive:!0},wA=8,EA=8,DA=24,MA=200,pa=(()=>{class t{_elementRef=c(P);_ngZone=c(W);_platform=c(pe);_ariaDescriber=c(Xp);_focusMonitor=c(Dt);_dir=c(We);_injector=c(X);_viewContainerRef=c(mt);_mediaMatcher=c(ja);_document=c(Q);_renderer=c(be);_animationsDisabled=Ee();_defaultOptions=c(xA,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Cb;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=kt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let n=kt(e);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=jt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=jt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let n=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new B;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=wA}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Me(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let a=this._createOverlay(n);this._detach(),this._portal=this._portal||new li(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=a.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(Me(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(e):(n._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof P)return this._overlayRef;this._detach()}let n=this._injector.get(si).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${xb}`,o=jn(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation("global");return o.positionChanges.pipe(Me(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=mn(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(yA)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Me(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Me(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Me(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Me(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let n=e.getConfig().positionStrategy,a=this._getOrigin(),o=this._getOverlayPosition();n.withPositions([this._addOffset(k(k({},a.main),o.main)),this._addOffset(k(k({},a.fallback),o.fallback))])}_addOffset(e){let n=EA,a=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-n:e.originY==="bottom"?e.offsetY=n:e.originX==="start"?e.offsetX=a?-n:n:e.originX==="end"&&(e.offsetX=a?n:-n),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",n=this.position,a;n=="above"||n=="below"?a={originX:"center",originY:n=="above"?"top":"bottom"}:n=="before"||n=="left"&&e||n=="right"&&!e?a={originX:"start",originY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(a={originX:"end",originY:"center"});let{x:o,y:r}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:o,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",n=this.position,a;n=="above"?a={overlayX:"center",overlayY:"bottom"}:n=="below"?a={overlayX:"center",overlayY:"top"}:n=="before"||n=="left"&&e||n=="right"&&!e?a={overlayX:"end",overlayY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(a={overlayX:"start",overlayY:"center"});let{x:o,y:r}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:o,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ze(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,n){return this.position==="above"||this.position==="below"?n==="top"?n="bottom":n==="bottom"&&(n="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:n}}_updateCurrentPositionClass(e){let{overlayY:n,originX:a,originY:o}=e,r;if(n==="center"?this._dir&&this._dir.value==="rtl"?r=a==="end"?"left":"right":r=a==="start"?"left":"right":r=n==="bottom"&&o==="top"?"above":"below",r!==this._currentPosition){let u=this._overlayRef;if(u){let p=`${this._cssClassPrefix}-${xb}-`;u.removePanelClass(p+this._currentPosition),u.addPanelClass(p+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let n=e.targetTouches?.[0],a=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let n;e.x!==void 0&&e.y!==void 0&&(n=e),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let n=e.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(e.clientX,e.clientY),a=this._elementRef.nativeElement;n!==a&&!a.contains(n)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,n,CA))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let n=this._elementRef.nativeElement,a=n.style;(e==="on"||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA")&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect="none"),(e==="on"||!n.draggable)&&(a.webkitUserDrag="none"),a.touchAction="none",a.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ze({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Le(e):!0;static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(n,a){n&2&&N("mat-mdc-tooltip-disabled",a.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),Cb=(()=>{class t{_changeDetectorRef=c(me);_elementRef=c(P);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ee();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new B;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>DA&&e.width>=MA}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let n=this._tooltip.nativeElement,a=this._showAnimation,o=this._hideAnimation;if(n.classList.remove(e?o:a),n.classList.add(e?a:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(n);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(n.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(n,a){if(n&1&&Se(bA,7),n&2){let o;z(o=j())&&(a._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(n,a){n&1&&R("mouseleave",function(r){return a._handleMouseLeave(r)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(n,a){n&1&&(ze(0,"div",1,0),os("animationend",function(r){return a._handleAnimationEnd(r)}),ze(2,"div",2),d(3),qe()()),n&2&&(Ge(a.tooltipClass),N("mdc-tooltip--multiline",a._isMultiline),m(3),J(a.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return t})();var ki=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[dr,Ut,ee,cn]})}return t})();var dc={privatePension:{id:"privatePension",label:"\u4E2A\u4EBA\u517B\u8001\u91D1",placeholder:"0",options:[{value:0,label:"\u4E0D\u7F34\u7EB3\uFF1A0\u5143"},{value:500,label:"\u6BCF\u6708\u7F34\u7EB3\uFF1A500\u5143 (\u5E746000\u5143)"},{value:1e3,label:"\u9876\u683C\u7F34\u7EB3\uFF1A1000\u5143 (\u5E7412000\u5143)"}],width:"120px"},infantCare:{id:"infantCare",label:"3\u5C81\u4EE5\u4E0B\u5A74\u5E7C\u513F\u7167\u62A4",placeholder:"0",options:vf,width:"120px"},childEducation:{id:"childEducation",label:"\u5B50\u5973\u6559\u80B2",placeholder:"0",options:yf,width:"120px"},continuingEducation:{id:"continuingEducation",label:"\u7EE7\u7EED\u6559\u80B2",placeholder:"0",options:xf,width:"120px"},housingLoanInterest:{id:"housingLoanInterest",label:"\u4F4F\u623F\u8D37\u6B3E\u5229\u606F",placeholder:"0",options:Cf,width:"120px",conflictWith:"extraDeduction.renting"},renting:{id:"renting",label:"\u4F4F\u623F\u79DF\u91D1",placeholder:"0",options:wf,width:"120px",conflictWith:"extraDeduction.housingLoanInterest"},elderlyCare:{id:"elderlyCare",label:"\u8D61\u517B\u8001\u4EBA",placeholder:"0",options:Ef,width:"120px"},insuranceBase:{id:"insuranceBase",label:"\u793E\u4FDD\u7F34\u7EB3\u57FA\u6570",placeholder:"10000",options:[],width:void 0},housingFundBase:{id:"housingFundBase",label:"\u516C\u79EF\u91D1\u7F34\u7EB3\u57FA\u6570",placeholder:"10000",options:[],width:void 0}},wb="(\u5F53\u6708)";var ou=["*"];function SA(t,i){t&1&&Y(0)}var AA=["tabListContainer"],FA=["tabList"],kA=["tabListInner"],IA=["nextPaginator"],TA=["previousPaginator"],RA=["content"];function OA(t,i){}var PA=["tabBodyWrapper"],BA=["tabHeader"];function LA(t,i){}function NA(t,i){if(t&1&&ke(0,LA,0,0,"ng-template",12),t&2){let e=y().$implicit;_("cdkPortalOutlet",e.templateLabel)}}function VA(t,i){if(t&1&&d(0),t&2){let e=y().$implicit;J(e.textLabel)}}function zA(t,i){if(t&1){let e=$e();s(0,"div",7,2),R("click",function(){let a=Ce(e),o=a.$implicit,r=a.$index,u=y(),p=ye(1);return we(u._handleClick(o,p,r))})("cdkFocusChange",function(a){let o=Ce(e).$index,r=y();return we(r._tabFocusChanged(a,o))}),E(2,"span",8)(3,"div",9),s(4,"span",10)(5,"span",11),I(6,NA,1,1,null,12)(7,VA,1,1),l()()()}if(t&2){let e=i.$implicit,n=i.$index,a=ye(1),o=y();Ge(e.labelClass),N("mdc-tab--active",o.selectedIndex===n),_("id",o._getTabLabelId(e,n))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),A("tabIndex",o._getTabIndex(n))("aria-posinset",n+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(n))("aria-selected",o.selectedIndex===n)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),m(3),_("matRippleTrigger",a)("matRippleDisabled",e.disabled||o.disableRipple),m(3),T(e.templateLabel?6:7)}}function jA(t,i){t&1&&Y(0)}function HA(t,i){if(t&1){let e=$e();s(0,"mat-tab-body",13),R("_onCentered",function(){Ce(e);let a=y();return we(a._removeTabBodyWrapperHeight())})("_onCentering",function(a){Ce(e);let o=y();return we(o._setTabBodyWrapperHeight(a))})("_beforeCentering",function(a){Ce(e);let o=y();return we(o._bodyCentered(a))}),l()}if(t&2){let e=i.$implicit,n=i.$index,a=y();Ge(e.bodyClass),_("id",a._getTabContentId(n))("content",e.content)("position",e.position)("animationDuration",a.animationDuration)("preserveContent",a.preserveContent),A("tabindex",a.contentTabIndex!=null&&a.selectedIndex===n?a.contentTabIndex:null)("aria-labelledby",a._getTabLabelId(e,n))("aria-hidden",a.selectedIndex!==n)}}var UA=new x("MatTabContent"),ru=(()=>{class t{template=c(ut);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","matTabContent",""]],features:[re([{provide:UA,useExisting:t}])]})}return t})(),$A=new x("MatTabLabel"),Sb=new x("MAT_TAB"),Yr=(()=>{class t extends sp{_closestTab=c(Sb,{optional:!0});static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[re([{provide:$A,useExisting:t}]),te]})}return t})(),Ab=new x("MAT_TAB_GROUP"),ha=(()=>{class t{_viewContainerRef=c(mt);_closestTabGroup=c(Ab,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new B;position=null;origin=null;isActive=!1;constructor(){c(Be).load(Pt)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Et(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-tab"]],contentQueries:function(n,a,o){if(n&1&&ct(o,Yr,5)(o,ru,7,ut),n&2){let r;z(r=j())&&(a.templateLabel=r.first),z(r=j())&&(a._explicitContent=r.first)}},viewQuery:function(n,a){if(n&1&&Se(ut,7),n&2){let o;z(o=j())&&(a._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(n,a){n&2&&A("id",null)},inputs:{disabled:[2,"disabled","disabled",H],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[re([{provide:Sb,useExisting:t}]),ve],ngContentSelectors:ou,decls:1,vars:0,template:function(n,a){n&1&&(fe(),Ma(0,SA,1,0,"ng-template"))},encapsulation:2})}return t})(),tu="mdc-tab-indicator--active",Eb="mdc-tab-indicator--no-transition",nu=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(a=>a.elementRef.nativeElement===i),n=this._currentItem;if(e!==n&&(n?.deactivateInkBar(),e)){let a=n?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(a),this._currentItem=e}}},GA=(()=>{class t{_elementRef=c(P);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let n=this._elementRef.nativeElement;if(!e||!n.getBoundingClientRect||!this._inkBarContentElement){n.classList.add(tu);return}let a=n.getBoundingClientRect(),o=e.width/a.width,r=e.left-a.left;n.classList.add(Eb),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${o})`),n.getBoundingClientRect(),n.classList.remove(Eb),n.classList.add(tu),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(tu)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,n=this._inkBarElement=e.createElement("span"),a=this._inkBarContentElement=e.createElement("span");n.className="mdc-tab-indicator",a.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",n.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",H]}})}return t})();var Fb=(()=>{class t extends GA{elementRef=c(P);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(n,a){n&2&&(A("aria-disabled",!!a.disabled),N("mat-mdc-tab-disabled",a.disabled))},inputs:{disabled:[2,"disabled","disabled",H]},features:[te]})}return t})(),Db={passive:!0},WA=650,YA=100,qA=(()=>{class t{_elementRef=c(P);_changeDetectorRef=c(me);_viewportRuler=c(Ht);_dir=c(We,{optional:!0});_ngZone=c(W);_platform=c(pe);_sharedResizeObserver=c(bl);_injector=c(X);_renderer=c(be);_animationsDisabled=Ee();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new B;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new B;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let n=isNaN(e)?0:e;this._selectedIndex!=n&&(this._selectedIndexChanged=!0,this._selectedIndex=n,this._keyManager&&this._keyManager.updateActiveItem(n))}_selectedIndex=0;selectFocusedIndex=new O;indexFocused=new O;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Db),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Db))}ngAfterContentInit(){let e=this._dir?this._dir.change:Qe("ltr"),n=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(yn(32),Me(this._destroyed)),a=this._viewportRuler.change(150).pipe(Me(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Hn(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ze(o,{injector:this._injector}),He(e,a,n,this._items.changes,this._itemsResized()).pipe(Me(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!="function"?va:this._items.changes.pipe(Ve(this._items),lt(e=>new it(n=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(o=>n.next(o));return e.forEach(o=>a.observe(o.elementRef.nativeElement)),()=>{a.disconnect()}}))),xa(1),se(e=>e.some(n=>n.contentRect.width>0&&n.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Le(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let n=this._items.get(this.focusIndex);n&&!n.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let n=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?n.scrollLeft=0:n.scrollLeft=n.scrollWidth-n.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,n=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let n=this._tabListContainer.nativeElement.offsetWidth,a=(e=="before"?-1:1)*n/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let n=this._items?this._items.toArray()[e]:null;if(!n)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:r}=n.elementRef.nativeElement,u,p;this._getLayoutDirection()=="ltr"?(u=o,p=u+r):(p=this._tabListInner.nativeElement.offsetWidth-o,u=p-r);let h=this.scrollDistance,f=this.scrollDistance+a;u<h?this.scrollDistance-=h-u:p>f&&(this.scrollDistance+=Math.min(p-f,u-h))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,n=this._elementRef.nativeElement.offsetWidth,a=e-n>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,n=this._tabListContainer.nativeElement.offsetWidth;return e-n||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,n=e?e.elementRef.nativeElement:null;n?this._inkBar.alignToElement(n):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,n){n&&n.button!=null&&n.button!==0||(this._stopInterval(),Cu(WA,YA).pipe(Me(He(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:o}=this._scrollHeader(e);(o===0||o>=a)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let n=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(n,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:n,distance:this._scrollDistance}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",H],selectedIndex:[2,"selectedIndex","selectedIndex",Ke]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),KA=(()=>{class t extends qA{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new nu(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-tab-header"]],contentQueries:function(n,a,o){if(n&1&&ct(o,Fb,4),n&2){let r;z(r=j())&&(a._items=r)}},viewQuery:function(n,a){if(n&1&&Se(AA,7)(FA,7)(kA,7)(IA,5)(TA,5),n&2){let o;z(o=j())&&(a._tabListContainer=o.first),z(o=j())&&(a._tabList=o.first),z(o=j())&&(a._tabListInner=o.first),z(o=j())&&(a._nextPaginator=o.first),z(o=j())&&(a._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(n,a){n&2&&N("mat-mdc-tab-header-pagination-controls-enabled",a._showPaginationControls)("mat-mdc-tab-header-rtl",a._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",H]},features:[te],ngContentSelectors:ou,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(n,a){n&1&&(fe(),s(0,"div",5,0),R("click",function(){return a._handlePaginatorClick("before")})("mousedown",function(r){return a._handlePaginatorPress("before",r)})("touchend",function(){return a._stopInterval()}),E(2,"div",6),l(),s(3,"div",7,1),R("keydown",function(r){return a._handleKeydown(r)}),s(5,"div",8,2),R("cdkObserveContent",function(){return a._onContentChanges()}),s(7,"div",9,3),Y(9),l()()(),s(10,"div",10,4),R("mousedown",function(r){return a._handlePaginatorPress("after",r)})("click",function(){return a._handlePaginatorClick("after")})("touchend",function(){return a._stopInterval()}),E(12,"div",6),l()),n&2&&(N("mat-mdc-tab-header-pagination-disabled",a._disableScrollBefore),_("matRippleDisabled",a._disableScrollBefore||a.disableRipple),m(3),N("_mat-animation-noopable",a._animationsDisabled),m(2),A("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null),m(5),N("mat-mdc-tab-header-pagination-disabled",a._disableScrollAfter),_("matRippleDisabled",a._disableScrollAfter||a.disableRipple))},dependencies:[Un,qs],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return t})(),XA=new x("MAT_TABS_CONFIG"),Mb=(()=>{class t extends En{_host=c(iu);_ngZone=c(W);_centeringSub=ge.EMPTY;_leavingSub=ge.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Ve(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","matTabBodyHost",""]],features:[te]})}return t})(),iu=(()=>{class t{_elementRef=c(P);_dir=c(We,{optional:!0});_ngZone=c(W);_injector=c(X);_renderer=c(be);_diAnimationsDisabled=Ee();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ge.EMPTY;_position;_previousPosition;_onCentering=new O;_beforeCentering=new O;_afterLeavingCenter=new O;_onCentered=new O(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(me);this._dirChangeSubscription=this._dir.change.subscribe(n=>{this._computePositionAnimationState(n),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ze(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,n=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),a.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",n),this._renderer.listen(e,"transitioncancel",n)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ze(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-tab-body"]],viewQuery:function(n,a){if(n&1&&Se(Mb,5)(RA,5),n&2){let o;z(o=j())&&(a._portalHost=o.first),z(o=j())&&(a._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(n,a){n&2&&A("inert",a._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(n,a){n&1&&(s(0,"div",1,0),ke(2,OA,0,0,"ng-template",2),l()),n&2&&N("mat-tab-body-content-left",a._position==="left")("mat-tab-body-content-right",a._position==="right")("mat-tab-body-content-can-animate",a._position==="center"||a._previousPosition==="center")},dependencies:[Mb,nr],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return t})(),Bo=(()=>{class t{_elementRef=c(P);_changeDetectorRef=c(me);_ngZone=c(W);_tabsSubscription=ge.EMPTY;_tabLabelSubscription=ge.EMPTY;_tabBodySubscription=ge.EMPTY;_diAnimationsDisabled=Ee();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Cn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let n=e+"";this._animationDuration=/^\d+$/.test(n)?e+"ms":n}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let n=this._elementRef.nativeElement.classList;n.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&n.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new O;focusChange=new O;animationDone=new O;selectedTabChange=new O(!0);_groupId;_isServer=!c(pe).isBrowser;constructor(){let e=c(XA,{optional:!0});this._groupId=c(Ae).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let n=this._selectedIndex==null;if(!n){this.selectedTabChange.emit(this._createChangeEvent(e));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((a,o)=>a.isActive=o===e),n||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((n,a)=>{n.position=a-e,this._selectedIndex!=null&&n.position==0&&!n.origin&&(n.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let n=this._tabs.toArray(),a;for(let o=0;o<n.length;o++)if(n[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,a=n[o];break}!a&&n[e]&&Promise.resolve().then(()=>{n[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Ve(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(n=>n._closestTabGroup===this||!n._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let n=this._tabHeader;n&&(n.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let n=new au;return n.index=e,this._tabs&&this._tabs.length&&(n.tab=this._tabs.toArray()[e]),n}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=He(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,n){return e.id||`${this._groupId}-label-${n}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let n=this._tabBodyWrapper.nativeElement;n.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(n.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,n,a){n.focusIndex=a,e.disabled||(this.selectedIndex=a)}_getTabIndex(e){let n=this._lastFocusedTabIndex??this.selectedIndex;return e===n?0:-1}_tabFocusChanged(e,n){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=n)}_bodyCentered(e){e&&this._tabBodies?.forEach((n,a)=>n._setActiveClass(a===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-tab-group"]],contentQueries:function(n,a,o){if(n&1&&ct(o,ha,5),n&2){let r;z(r=j())&&(a._allTabs=r)}},viewQuery:function(n,a){if(n&1&&Se(PA,5)(BA,5)(iu,5),n&2){let o;z(o=j())&&(a._tabBodyWrapper=o.first),z(o=j())&&(a._tabHeader=o.first),z(o=j())&&(a._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(n,a){n&2&&(A("mat-align-tabs",a.alignTabs),Ge("mat-"+(a.color||"primary")),Ie("--mat-tab-animation-duration",a.animationDuration),N("mat-mdc-tab-group-dynamic-height",a.dynamicHeight)("mat-mdc-tab-group-inverted-header",a.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",a.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",H],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",H],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",H],selectedIndex:[2,"selectedIndex","selectedIndex",Ke],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ke],disablePagination:[2,"disablePagination","disablePagination",H],disableRipple:[2,"disableRipple","disableRipple",H],preserveContent:[2,"preserveContent","preserveContent",H],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[re([{provide:Ab,useExisting:t}])],ngContentSelectors:ou,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(n,a){n&1&&(fe(),s(0,"mat-tab-header",3,0),R("indexFocused",function(r){return a._focusChanged(r)})("selectFocusedIndex",function(r){return a.selectedIndex=r}),de(2,zA,8,17,"div",4,Kt),l(),I(4,jA,1,0),s(5,"div",5,1),de(7,HA,1,10,"mat-tab-body",6,Kt),l()),n&2&&(_("selectedIndex",a.selectedIndex||0)("disableRipple",a.disableRipple)("disablePagination",a.disablePagination),Gu("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby),m(2),ue(a._tabs),m(2),T(a._isServer?4:-1),m(),N("_mat-animation-noopable",a._animationsDisabled()),m(2),ue(a._tabs))},dependencies:[KA,Fb,dd,Un,En,iu],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return t})(),au=class{index;tab};var Lo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ee]})}return t})();var kb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ee]})}return t})();var Ib=["*"],Tb=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,QA=["unscopedContent"],ZA=["text"],JA=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],eF=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var tF=new x("ListOption"),fa=(()=>{class t{_elementRef=c(P);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),ga=(()=>{class t{_elementRef=c(P);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),nF=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),Rb=(()=>{class t{_listOption=c(tF,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,hostVars:4,hostBindings:function(n,a){n&2&&N("mdc-list-item__start",a._isAlignedAtStart())("mdc-list-item__end",!a._isAlignedAtStart())}})}return t})(),iF=(()=>{class t extends Rb{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[te]})}return t})(),lu=(()=>{class t extends Rb{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=D({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[te]})}return t})(),aF=new x("MAT_LIST_CONFIG"),qr=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=kt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(kt(e))}_disabled=ne(!1);_defaultOptions=c(aF,{optional:!0});static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,hostVars:1,hostBindings:function(n,a){n&2&&A("aria-disabled",a.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),oF=(()=>{class t{_elementRef=c(P);_ngZone=c(W);_listBase=c(qr,{optional:!0});_platform=c(pe);_hostElement;_isButtonElement;_noopAnimations=Ee();_avatars;_icons;set lines(e){this._explicitLines=jt(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=kt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(kt(e))}_disabled=ne(!1);_subscriptions=new ge;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(Be).load(Pt);let e=c(Ya,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ta(this,this._ngZone,this._hostElement,this._platform,c(X)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(He(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let n=this._explicitLines??this._inferLinesFromContent(),a=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",n===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",n===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&n===1;a.classList.toggle("mdc-list-item__primary-text",o),a.classList.toggle("mdc-list-item__secondary-text",!o)}else a.classList.remove("mdc-list-item__primary-text"),a.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=D({type:t,contentQueries:function(n,a,o){if(n&1&&ct(o,iF,4)(o,lu,4),n&2){let r;z(r=j())&&(a._avatars=r),z(r=j())&&(a._icons=r)}},hostVars:4,hostBindings:function(n,a){n&2&&(A("aria-disabled",a.disabled)("disabled",a._isButtonElement&&a.disabled||null),N("mdc-list-item--disabled",a.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var uc=(()=>{class t extends qr{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[re([{provide:qr,useExisting:t}]),te],ngContentSelectors:Ib,decls:1,vars:0,template:function(n,a){n&1&&(fe(),Y(0))},styles:[Tb],encapsulation:2,changeDetection:0})}return t})(),No=(()=>{class t extends oF{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=kt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(n,a,o){if(n&1&&ct(o,ga,5)(o,fa,5)(o,nF,5),n&2){let r;z(r=j())&&(a._lines=r),z(r=j())&&(a._titles=r),z(r=j())&&(a._meta=r)}},viewQuery:function(n,a){if(n&1&&Se(QA,5)(ZA,5),n&2){let o;z(o=j())&&(a._unscopedContent=o.first),z(o=j())&&(a._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(n,a){n&2&&(A("aria-current",a._getAriaCurrent()),N("mdc-list-item--activated",a.activated)("mdc-list-item--with-leading-avatar",a._avatars.length!==0)("mdc-list-item--with-leading-icon",a._icons.length!==0)("mdc-list-item--with-trailing-meta",a._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",a._hasBothLeadingAndTrailing())("_mat-animation-noopable",a._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[te],ngContentSelectors:eF,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(n,a){n&1&&(fe(JA),Y(0),s(1,"span",1),Y(2,1),Y(3,2),s(4,"span",2,0),R("cdkObserveContent",function(){return a._updateItemLines(!0)}),Y(6,3),l()(),Y(7,4),Y(8,5),E(9,"div",3))},dependencies:[qs],encapsulation:2,changeDetection:0})}return t})();var Ob=(()=>{class t extends qr{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[re([{provide:qr,useExisting:t}]),te],ngContentSelectors:Ib,decls:1,vars:0,template:function(n,a){n&1&&(fe(),Y(0))},styles:[Tb],encapsulation:2,changeDetection:0})}return t})();var Ii=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Ha,Dn,nc,ee,kb]})}return t})();var rF=["determinateSpinner"];function sF(t,i){if(t&1&&(zt(),s(0,"svg",11),E(1,"circle",12),l()),t&2){let e=y();A("viewBox",e._viewBox()),m(),Ie("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),A("r",e._circleRadius())}}var lF=new x("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Pb})}),Pb=100,cF=10,Bb=(()=>{class t{_elementRef=c(P);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=c(lF),n=mr(),a=this._elementRef.nativeElement;this._noopAnimations=n==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=a.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&n==="reduced-motion"&&a.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Pb;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-cF)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,a){if(n&1&&Se(rF,5),n&2){let o;z(o=j())&&(a._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,a){n&2&&(A("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",a.mode==="determinate"?a.value:null)("mode",a.mode),Ge("mat-"+a.color),Ie("width",a.diameter,"px")("height",a.diameter,"px")("--mat-progress-spinner-size",a.diameter+"px")("--mat-progress-spinner-active-indicator-width",a.diameter+"px"),N("_mat-animation-noopable",a._noopAnimations)("mdc-circular-progress--indeterminate",a.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Ke],diameter:[2,"diameter","diameter",Ke],strokeWidth:[2,"strokeWidth","strokeWidth",Ke]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,a){if(n&1&&(ke(0,sF,2,8,"ng-template",null,0,Vi),s(2,"div",2,1),zt(),s(4,"svg",3),E(5,"circle",4),l()(),bc(),s(6,"div",5)(7,"div",6)(8,"div",7),Sa(9,8),l(),s(10,"div",9),Sa(11,8),l(),s(12,"div",10),Sa(13,8),l()()()),n&2){let o=ye(1);m(4),A("viewBox",a._viewBox()),m(),Ie("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeDashOffset(),"px")("stroke-width",a._circleStrokeWidth(),"%"),A("r",a._circleRadius()),m(4),_("ngTemplateOutlet",o),m(2),_("ngTemplateOutlet",o),m(2),_("ngTemplateOutlet",o)}},dependencies:[ji],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Lb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ee]})}return t})();var uF=(t,i)=>i.file;function mF(t,i){if(t&1){let e=$e();s(0,"a",14),R("click",function(){let a=Ce(e).$implicit,o=y();return we(o.selectCity(a))}),s(1,"span",15),d(2),l(),s(3,"span",16),d(4),l()()}if(t&2){let e,n=i.$implicit,a=y();N("active-city",((e=a.selectedItem())==null?null:e.file)===n.file),A("data-testid","city-tab-"+n.file.replace(".json","")),m(2),w(" ",n.city," "),m(2),w(" ",n.label," ")}}function pF(t,i){t&1&&(s(0,"div",12),E(1,"mat-spinner",17),s(2,"span",18),d(3,"\u6B63\u5728\u52A0\u8F7D\u57CE\u5E02\u653F\u7B56\u6570\u636E..."),l()())}function hF(t,i){if(t&1&&(s(0,"span"),d(1),l()),t&2){let e=y().$implicit;A("data-testid","year-tab-"+e),m(),w(" ",e," \u5E74\u5EA6 ")}}function fF(t,i){t&1&&(s(0,"mat-tab"),ke(1,hF,2,2,"ng-template",45),l())}function gF(t,i){if(t&1&&(s(0,"div",21)(1,"span",22),d(2,"\u672C\u5E02\u5728\u5C97\u804C\u5DE5\u6708\u5747\u5DE5\u8D44\uFF1A"),l(),s(3,"span",46),d(4),l()(),s(5,"div",21)(6,"span",22),d(7,"\u5168\u7701\u5168\u53E3\u5F84\u793E\u5E73\u6708\u5747\uFF1A"),l(),s(8,"span",47),d(9),l()()),t&2){let e=y(2);m(4),w(" ",e.formatMoney(e.selectedPolicy().localAvgWage)," "),m(5),w(" ",e.formatMoney(e.selectedPolicy().avgWage)," ")}}function _F(t,i){if(t&1&&(s(0,"div",21)(1,"span",22),d(2,"\u57CE\u9547\u5728\u5C97\u804C\u5DE5\u6708\u5E73\u5747\u5DE5\u8D44\uFF1A"),l(),s(3,"span",47),d(4),l()(),E(5,"div",48)),t&2){let e=y(2);m(4),w(" ",e.formatMoney(e.selectedPolicy().avgWage)," ")}}function bF(t,i){t&1&&(s(0,"div",25)(1,"mat-icon",27),d(2,"info"),l(),s(3,"div",28)(4,"span",29),d(5,"\u793E\u4FDD\u6838\u7B97\u89C4\u5219\uFF1A"),l(),s(6,"span"),d(7,"\u8BE5\u57CE\u5E02\uFF08\u5982\u6DF1\u5733\uFF09\u793E\u4FDD\u7F34\u7EB3\u57FA\u6570\u4F9D\u636E\u804C\u5DE5\u4E0A\u6708\u5B9E\u9645\u85AA\u8D44\u6838\u7B97\u3002"),l()()())}function vF(t,i){if(t&1&&(s(0,"a",49)(1,"div",50)(2,"mat-icon",51),d(3," description "),l(),s(4,"span",52),d(5),l()(),s(6,"mat-icon",53),d(7," open_in_new "),l()()),t&2){let e=i.$implicit,n=i.$index,a=y(3).asReference(e);_("href",a.link,ju),A("data-testid","ref-link-"+n),m(5),w(" ",a.description," ")}}function yF(t,i){if(t&1&&(s(0,"div",43),de(1,vF,8,3,"a",49,Yu),l()),t&2){let e=y(2);m(),ue(e.selectedPolicy().references)}}function xF(t,i){t&1&&(s(0,"div",44),d(1,"\u6682\u65E0\u5916\u94FE\u53C2\u8003\u8BB0\u5F55"),l())}function CF(t,i){if(t&1){let e=$e();s(0,"mat-tab-group",19),R("selectedIndexChange",function(a){Ce(e);let o=y();return we(o.onYearTabChange(a))}),de(1,fF,2,0,"mat-tab",null,Kt),l(),s(3,"div",20)(4,"div",21)(5,"span",22),d(6,"\u653F\u7B56\u751F\u6548\u5E74\u6708\uFF1A"),l(),s(7,"span",23),d(8),l()(),s(9,"div",21)(10,"span",22),d(11,"\u6700\u4F4E\u5DE5\u8D44\u6807\u51C6\uFF1A"),l(),s(12,"span",24),d(13),l()(),I(14,gF,10,2)(15,_F,6,1),l(),I(16,bF,8,0,"div",25),s(17,"div",26)(18,"mat-icon",27),d(19,"savings"),l(),s(20,"div",28)(21,"span",29),d(22,"\u4E2A\u4EBA\u517B\u8001\u91D1\uFF1A"),l(),s(23,"span"),d(24,"\u5E74\u5EA6\u7A0E\u524D\u6263\u9664\u9650\u989D 12,000 \u5143 (1,000 \u5143/\u6708)\uFF0C\u53EF\u5728\u7EFC\u5408\u6240\u5F97\u6216\u7ECF\u8425\u6240\u5F97\u4E2D\u636E\u5B9E\u6263\u9664\u3002"),l()()(),s(25,"div",30)(26,"mat-icon",27),d(27,"account_balance"),l(),s(28,"div",28)(29,"span",29),d(30,"\u4F01\u4E1A\u5E74\u91D1\uFF1A"),l(),s(31,"span"),d(32,"\u4E2A\u4EBA\u7F34\u8D39\u5728\u672C\u4EBA\u7F34\u8D39\u5DE5\u8D44 4% \u4EE5\u5185\u7684\u90E8\u5206\u514D\u7A0E\uFF0C\u8D85\u8FC7\u90E8\u5206\u5E76\u5165\u5F53\u6708\u5DE5\u8D44\u85AA\u91D1\u8BA1\u7A0E\u3002"),l()()(),s(33,"div",31)(34,"div",32),d(35," \u793E\u4FDD\u4E0E\u516C\u79EF\u91D1\u7F34\u7EB3\u6807\u51C6\uFF08\u57FA\u6570\u8303\u56F4 & \u7F34\u8D39\u6BD4\u4F8B\uFF09 "),l(),s(36,"div",33)(37,"table",34)(38,"thead",35)(39,"tr")(40,"th"),d(41,"\u9669\u79CD/\u9879\u76EE"),l(),s(42,"th"),d(43,"\u57FA\u6570\u4E0A\u4E0B\u9650 (\u5143)"),l(),s(44,"th"),d(45,"\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),s(46,"th"),d(47,"\u4F01\u4E1A\u7F34\u7EB3\u6BD4\u4F8B"),l()()(),s(48,"tbody")(49,"tr")(50,"td"),d(51,"\u517B\u8001\u4FDD\u9669"),l(),s(52,"td"),d(53),l(),s(54,"td"),d(55),l(),s(56,"td"),d(57),l()(),s(58,"tr")(59,"td"),d(60,"\u533B\u7597\u4FDD\u9669"),l(),s(61,"td"),d(62),l(),s(63,"td"),d(64),l(),s(65,"td"),d(66),l()(),s(67,"tr")(68,"td"),d(69,"\u5931\u4E1A\u4FDD\u9669"),l(),s(70,"td"),d(71),l(),s(72,"td"),d(73),l(),s(74,"td"),d(75),l()(),s(76,"tr")(77,"td"),d(78,"\u5DE5\u4F24\u4FDD\u9669"),l(),s(79,"td"),d(80),l(),s(81,"td",36),d(82,"\u4E2A\u4EBA\u4E0D\u7F34\u7EB3"),l(),s(83,"td"),d(84),l()(),s(85,"tr")(86,"td"),d(87,"\u751F\u80B2\u4FDD\u9669"),l(),s(88,"td"),d(89),l(),s(90,"td",36),d(91,"\u4E2A\u4EBA\u4E0D\u7F34\u7EB3"),l(),s(92,"td"),d(93),l()(),s(94,"tr",37)(95,"td"),d(96,"\u4E94\u9669\u5408\u8BA1"),l(),s(97,"td",38),d(98," \u5404\u9669\u79CD\u5206\u7ACB\u57FA\u6570\u6D4B\u7B97 "),l(),s(99,"td",39),d(100),l(),s(101,"td",40),d(102),l()(),s(103,"tr")(104,"td"),d(105,"\u4F4F\u623F\u516C\u79EF\u91D1"),l(),s(106,"td"),d(107),l(),s(108,"td"),d(109,"5% ~ 12% (\u81EA\u4E3B\u7533\u62A5)"),l(),s(110,"td"),d(111,"5% ~ 12% (\u4F01\u4E1A\u914D\u6BD4)"),l()()()()()(),s(112,"div",41)(113,"div",42),d(114," \u5B98\u65B9\u653F\u7B56\u4F9D\u636E\u4E0E\u6743\u5A01\u6765\u6E90 (\u653F\u7B56\u6587\u4EF6 / \u5B98\u65B9\u516C\u6587) "),l(),I(115,yF,3,0,"div",43)(116,xF,2,0,"div",44),l()}if(t&2){let e=y();_("selectedIndex",e.selectedYearIndex()),m(),ue(e.availableYears()),m(7),w(" ",e.selectedPolicy().effectiveDate," "),m(5),w(" ",e.formatMoney(e.selectedPolicy().minimumWage)," "),m(),T(e.selectedPolicy().localAvgWage?14:15),m(2),T(e.currentRecipe().insuranceBaseOnLastMonth?16:-1),m(37),w(" ",e.formatBaseRange(e.selectedPolicy().insuranceBaseRange,"endowment")," "),m(2),w(" ",e.formatPercent(e.selectedPolicy().employee.insuranceRate.endowment)," "),m(2),w(" ",e.formatPercent(e.selectedPolicy().employer.insuranceRate.endowment)," "),m(5),w(" ",e.formatBaseRange(e.selectedPolicy().insuranceBaseRange,"health")," "),m(2),w(" ",e.formatPercent(e.selectedPolicy().employee.insuranceRate.health)," "),m(2),w(" ",e.formatPercent(e.selectedPolicy().employer.insuranceRate.health)," "),m(5),w(" ",e.formatBaseRange(e.selectedPolicy().insuranceBaseRange,"unemployment")," "),m(2),w(" ",e.formatPercent(e.selectedPolicy().employee.insuranceRate.unemployment)," "),m(2),w(" ",e.formatPercent(e.selectedPolicy().employer.insuranceRate.unemployment)," "),m(5),w(" ",e.formatBaseRange(e.selectedPolicy().insuranceBaseRange,"occupationalInjury")," "),m(4),w(" ",e.formatPercent(e.selectedPolicy().employer.insuranceRate.occupationalInjury)," "),m(5),w(" ",e.formatBaseRange(e.selectedPolicy().insuranceBaseRange,"birth")," "),m(4),w(" ",e.formatPercent(e.selectedPolicy().employer.insuranceRate.birth)," "),m(7),w(" ",e.formatPercent(e.totalEmployeeInsuranceRate())," "),m(2),w(" ",e.formatPercent(e.totalEmployerInsuranceRate())," "),m(5),w(" ",e.formatBaseRange(e.selectedPolicy().housingFundBaseRange)," "),m(8),T(e.selectedPolicy().references&&e.selectedPolicy().references.length>0?115:116)}}function wF(t,i){t&1&&(s(0,"div",13),d(1," \u8BF7\u9009\u62E9\u57CE\u5E02\u4E0E\u5E74\u4EFD\u67E5\u770B\u653F\u7B56\u53C2\u6570 "),l())}var Nb=(()=>{class t{constructor(){this.dialogRef=c(pn),this.data=c(fr,{optional:!0})||{},this.http=c(wn),this.cdr=c(me),this.recipeIndex=ne([]),this.selectedItem=ne(null),this.currentRecipe=ne(null),this.availableYears=ne([]),this.selectedYear=ne(new Date().getFullYear()),this.selectedPolicy=ne(null),this.selectedYearIndex=ne(0),this.loading=ne(!1),this.loadedRecipes=new Map}ngOnInit(){this.loading.set(!0),this.http.get("assets/recipes/index.json").subscribe({next:e=>{let n=e||[];if(this.recipeIndex.set(n),n.length>0){let a=n[0];if(this.data.currentCityFile){let o=n.find(r=>r.file===this.data.currentCityFile);o&&(a=o)}else if(this.data.currentRecipeId!==void 0){let o=n.find(r=>r.id===this.data.currentRecipeId);o&&(a=o)}this.selectCity(a)}else this.loading.set(!1);this.cdr.markForCheck()},error:()=>{this.loading.set(!1),this.cdr.markForCheck()}})}selectCity(e){if(this.selectedItem.set(e),this.loadedRecipes.has(e.file)){let n=this.loadedRecipes.get(e.file);this.currentRecipe.set(n),this.resolveYearsAndPolicy(n),this.loading.set(!1),this.cdr.markForCheck();return}this.loading.set(!0),this.cdr.markForCheck(),this.http.get(`assets/recipes/${e.file}`).subscribe({next:n=>{this.loadedRecipes.set(e.file,n),this.currentRecipe.set(n),this.resolveYearsAndPolicy(n),this.loading.set(!1),this.cdr.markForCheck()},error:()=>{this.loading.set(!1),this.cdr.markForCheck()}})}onYearTabChange(e){this.selectedYearIndex.set(e);let n=this.availableYears();n[e]&&(this.selectedYear.set(n[e]),this.updateSelectedPolicy())}close(){this.dialogRef.close()}formatBaseRange(e,n){if(!e)return"-";if(Array.isArray(e))return`${e[0].toLocaleString()} ~ ${e[1].toLocaleString()} \u5143`;if(n&&e[n]){let a=e[n];return`${a[0].toLocaleString()} ~ ${a[1].toLocaleString()} \u5143`}if(e.endowment){let a=e.endowment;return`${a[0].toLocaleString()} ~ ${a[1].toLocaleString()} \u5143`}return"-"}formatPercent(e){return e==null?"-":`${(e*100).toFixed(2).replace(/\.?0+$/,"")}%`}formatMoney(e){return e==null?"-":`${e.toLocaleString()} \u5143`}totalEmployeeInsuranceRate(){let e=this.selectedPolicy();if(!e)return 0;let n=e.employee.insuranceRate;return(n.endowment||0)+(n.health||0)+(n.unemployment||0)}totalEmployerInsuranceRate(){let e=this.selectedPolicy();if(!e)return 0;let n=e.employer.insuranceRate;return(n.endowment||0)+(n.health||0)+(n.unemployment||0)+(n.birth||0)+(n.occupationalInjury||0)}asReference(e){return typeof e=="string"?{link:e,description:e}:e}resolveYearsAndPolicy(e){if(!e||!e.policies){this.availableYears.set([]),this.selectedPolicy.set(null);return}let n=e.policies.map(o=>new Date(o.effectiveDate).getFullYear()).filter((o,r,u)=>u.indexOf(o)===r).sort((o,r)=>r-o);this.availableYears.set(n);let a=this.data.currentYear||this.selectedYear();n.includes(a)?(this.selectedYear.set(a),this.selectedYearIndex.set(n.indexOf(a))):n.length>0&&(this.selectedYear.set(n[0]),this.selectedYearIndex.set(0)),this.updateSelectedPolicy()}updateSelectedPolicy(){let e=this.currentRecipe();if(!e){this.selectedPolicy.set(null);return}let n=Pr(e,this.selectedYear());this.selectedPolicy.set(n)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-city-recipe-dialog"]],decls:21,vars:1,consts:[[1,"recipe-dialog-header","d-flex","justify-content-between","align-items-center"],[1,"d-flex","align-items-center"],["color","primary",1,"mr-2"],["mat-dialog-title","","data-testid","recipe-dialog-title",1,"m-0"],["mat-icon-button","","aria-label","\u5173\u95ED\u5F39\u7A97","data-testid","btn-close-dialog",3,"click"],[1,"recipe-dialog-content","p-0"],[1,"recipe-dialog-body","d-flex","flex-column","flex-md-row"],["data-testid","city-sidebar",1,"city-sidebar"],[1,"sidebar-title","px-3","py-2","text-muted","small","font-weight-bold"],[1,"pt-0","city-list"],["mat-list-item","",3,"active-city"],[1,"policy-main-content","flex-grow-1","p-3"],["data-testid","loading-spinner",1,"d-flex","justify-content-center","align-items-center","py-5"],[1,"text-muted","text-center","py-5"],["mat-list-item","",3,"click"],["matListItemTitle","",1,"font-weight-bold"],["matListItemLine","",1,"text-muted","small"],["diameter","40"],[1,"ml-3","text-muted"],[1,"year-tab-group","mb-3",3,"selectedIndexChange","selectedIndex"],[1,"metrics-kv-panel","rounded","mb-3"],[1,"kv-item"],[1,"kv-label"],[1,"kv-val","text-primary","font-weight-bold"],["data-testid","val-min-wage",1,"kv-val","text-dark"],["data-testid","badge-last-month-rule",1,"policy-quote-bar","info-quote","mb-2"],[1,"policy-quote-bar","tip-quote","mb-2"],[1,"quote-icon"],[1,"quote-content"],[1,"quote-title"],[1,"policy-quote-bar","tip-quote","mb-3"],[1,"card","mb-3","border-light-subtle","shadow-none"],[1,"card-header","bg-light","py-2","font-weight-bold","small"],[1,"table-responsive"],[1,"table","table-sm","table-bordered","mb-0","param-table"],[1,"thead-light"],[1,"text-muted"],[1,"table-total-row","font-weight-bold"],[1,"text-muted","font-weight-normal","small"],["data-testid","total-employee-rate",1,"text-primary","font-weight-bold"],["data-testid","total-employer-rate",1,"text-primary","font-weight-bold"],[1,"references-section"],[1,"section-title","text-muted","small","font-weight-bold","mb-2"],[1,"list-group","list-group-flush"],[1,"text-muted","small","py-2"],["mat-tab-label",""],["data-testid","val-local-avg-wage",1,"kv-val","text-dark"],["data-testid","val-avg-wage",1,"kv-val","text-dark"],[1,"kv-item","kv-item-empty"],["target","_blank","rel","noopener noreferrer",1,"list-group-item","list-group-item-action","d-flex","justify-content-between","align-items-center","py-2","px-3","reference-link-item","rounded","mb-1",3,"href"],[1,"d-flex","align-items-center","text-truncate","mr-2"],["color","primary",1,"mr-2","flex-shrink-0"],[1,"reference-desc","text-truncate"],[1,"text-muted","small-icon","flex-shrink-0"]],template:function(n,a){n&1&&(s(0,"div",0)(1,"div",1)(2,"mat-icon",2),d(3,"menu_book"),l(),s(4,"h2",3),d(5," \u57CE\u5E02\u793E\u4FDD\u516C\u79EF\u91D1\u8BA1\u7B97\u53C2\u6570\u4E0E\u653F\u7B56\u4F9D\u636E "),l()(),s(6,"button",4),R("click",function(){return a.close()}),s(7,"mat-icon"),d(8,"close"),l()()(),s(9,"mat-dialog-content",5)(10,"div",6)(11,"div",7)(12,"div",8),d(13," \u9009\u62E9\u57CE\u5E02\u4E0E\u6863\u4F4D "),l(),s(14,"mat-nav-list",9),de(15,mF,5,5,"a",10,uF),l()(),s(17,"div",11),I(18,pF,4,0,"div",12)(19,CF,117,22)(20,wF,2,0,"div",13),l()()()),n&2&&(m(15),ue(a.recipeIndex()),m(3),T(a.loading()?18:a.currentRecipe()&&a.selectedPolicy()?19:20))},dependencies:[Pe,Mt,pi,hi,Lo,Yr,ha,Bo,Ii,Ob,No,ga,fa,pt,fn,ht,St,Lb,Bb,ki,yi],styles:[".recipe-dialog-header[_ngcontent-%COMP%]{padding:14px 20px;border-bottom:1px solid rgba(0,0,0,.08)}.recipe-dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:600}.recipe-dialog-content[_ngcontent-%COMP%]{overflow:hidden;max-width:880px;min-height:460px;max-height:80vh}.recipe-dialog-body[_ngcontent-%COMP%]{min-height:460px;max-height:75vh}.city-sidebar[_ngcontent-%COMP%]{overflow-y:auto;flex-shrink:0;width:200px;border-right:1px solid rgba(0,0,0,.08);background-color:#fafafa}.city-sidebar[_ngcontent-%COMP%]   .city-list[_ngcontent-%COMP%]   a.mat-mdc-list-item[_ngcontent-%COMP%]{cursor:pointer;border-left:3px solid transparent}.city-sidebar[_ngcontent-%COMP%]   .city-list[_ngcontent-%COMP%]   a.mat-mdc-list-item[_ngcontent-%COMP%]:hover{background-color:#0000000a}.city-sidebar[_ngcontent-%COMP%]   .city-list[_ngcontent-%COMP%]   a.mat-mdc-list-item.active-city[_ngcontent-%COMP%]{border-left-color:#1976d2;background-color:#1976d214}.city-sidebar[_ngcontent-%COMP%]   .city-list[_ngcontent-%COMP%]   a.mat-mdc-list-item.active-city[_ngcontent-%COMP%]   .font-weight-bold[_ngcontent-%COMP%]{color:#1976d2}.policy-main-content[_ngcontent-%COMP%]{overflow-y:auto;background-color:#fff}.metrics-kv-panel[_ngcontent-%COMP%]{display:grid;padding:10px 14px;border:1px solid rgba(0,0,0,.06);background-color:#f8f9fa;gap:6px 20px;grid-template-columns:repeat(2,1fr)}.metrics-kv-panel[_ngcontent-%COMP%]   .kv-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:3px 0;border-bottom:1px dashed rgba(0,0,0,.05)}.metrics-kv-panel[_ngcontent-%COMP%]   .kv-item[_ngcontent-%COMP%]   .kv-label[_ngcontent-%COMP%]{font-size:.85rem;color:#555}.metrics-kv-panel[_ngcontent-%COMP%]   .kv-item[_ngcontent-%COMP%]   .kv-val[_ngcontent-%COMP%]{font-size:.9rem;font-weight:600}.metrics-kv-panel[_ngcontent-%COMP%]   .kv-item-empty[_ngcontent-%COMP%]{border-bottom:none}.policy-quote-bar[_ngcontent-%COMP%]{font-size:.82rem;line-height:1.4;display:flex;align-items:flex-start;padding:7px 10px;border-left:3px solid;border-radius:4px}.policy-quote-bar[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%]{font-size:16px;line-height:16px;flex-shrink:0;width:16px;height:16px;margin-top:1px;margin-right:6px}.policy-quote-bar[_ngcontent-%COMP%]   .quote-content[_ngcontent-%COMP%]   .quote-title[_ngcontent-%COMP%]{font-weight:600;margin-right:2px}.policy-quote-bar.info-quote[_ngcontent-%COMP%]{color:#0d47a1;border-left-color:#1976d2;background-color:#f0f7ff}.policy-quote-bar.info-quote[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%]{color:#1976d2}.policy-quote-bar.tip-quote[_ngcontent-%COMP%]{color:#455a64;border-left-color:#78909c;background-color:#f8f9fa}.policy-quote-bar.tip-quote[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%]{color:#78909c}.param-table[_ngcontent-%COMP%]{font-size:.85rem}.param-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .param-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.4rem .6rem;vertical-align:middle}.param-table[_ngcontent-%COMP%]   .table-total-row[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.1);background-color:#1976d20a}.reference-link-item[_ngcontent-%COMP%]{text-decoration:none;color:inherit;border:1px solid rgba(0,0,0,.08)}.reference-link-item[_ngcontent-%COMP%]:hover{color:#1976d2;border-color:#90caf9;background-color:#f0f7ff}.reference-link-item[_ngcontent-%COMP%]   .reference-desc[_ngcontent-%COMP%]{font-size:.85rem}.small-icon[_ngcontent-%COMP%], .extra-small-icon[_ngcontent-%COMP%]{font-size:16px;line-height:16px;width:16px;height:16px}@media(max-width:768px){.recipe-dialog-content[_ngcontent-%COMP%]{width:100%}.recipe-dialog-body[_ngcontent-%COMP%]{flex-direction:column!important}.city-sidebar[_ngcontent-%COMP%]{width:100%;max-height:150px;border-right:none;border-bottom:1px solid rgba(0,0,0,.08)}}"]})}}return t})();var EF=(t,i)=>i.value;function DF(t,i){if(t&1&&(s(0,"mat-option",13),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),J(e.label)}}function MF(t,i){if(t&1&&(s(0,"div",20),d(1," \u26A0\uFE0F "),s(2,"strong"),d(3,"\u63D0\u793A\uFF1A"),l(),d(4),l()),t&2){let e,n=y();m(4),Ue("\u5F53\u524D ",(e=n.splitForm.get("salaryMonths"))==null?null:e.value," \u85AA\u7ED3\u6784\u4E0B\u7684\u5E74\u7EC8\u5956 (\xA5",n.calculatedAnnualBonus.toLocaleString(),") \u843D\u5728\u4E2A\u7A0E\u65E0\u6548\u76F2\u533A\uFF0C\u7A0E\u540E\u5B9E\u9645\u6536\u76CA\u53EF\u80FD\u4E0D\u5982\u964D\u4F4E\u5E74\u7EC8\u5956\u589E\u52A0\u6708\u85AA\u3002 ")}}var Vb=(()=>{class t{constructor(){this.fb=c(io),this.dialogRef=c(pn),this.salaryMonthsOptions=[{value:12,label:"12 \u85AA (\u65E0\u56FA\u5B9A\u5E74\u7EC8\u5956)"},{value:13,label:"13 \u85AA (\u5E74\u5E95\u53CC\u85AA)"},{value:14,label:"14 \u85AA (2\u4E2A\u6708\u5E74\u7EC8\u5956)"},{value:15,label:"15 \u85AA (3\u4E2A\u6708\u5E74\u7EC8\u5956)"},{value:16,label:"16 \u85AA (4\u4E2A\u6708\u5E74\u7EC8\u5956)"},{value:18,label:"18 \u85AA (6\u4E2A\u6708\u5E74\u7EC8\u5956)"}],this.splitForm=this.fb.group({totalPackage:[3e5,[Z.required,Z.min(0)]],salaryMonths:[15,Z.required]})}get calculatedMonthSalary(){let e=this.splitForm.get("totalPackage")?.value||0,n=this.splitForm.get("salaryMonths")?.value||12;return n<=0?0:Math.round(e/n)}get calculatedAnnualBonus(){let e=this.splitForm.get("totalPackage")?.value||0,n=this.calculatedMonthSalary;return Math.max(0,e-n*12)}get trapWarning(){let e=this.calculatedAnnualBonus;return e<=0?!1:ua(e).isTrap}onApply(){if(this.splitForm.valid){let e={totalPackage:this.splitForm.get("totalPackage")?.value||0,monthsCount:this.splitForm.get("salaryMonths")?.value||12,monthSalary:this.calculatedMonthSalary,annualBonus:this.calculatedAnnualBonus};this.dialogRef.close(e)}}onClose(){this.dialogRef.close()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-offer-split-dialog"]],decls:51,vars:5,consts:[[1,"dialog-header","d-flex","justify-content-between","align-items-center"],[1,"header-title-wrapper"],["color","primary"],["mat-dialog-title","","data-testid","offer-dialog-title",1,"m-0","font-weight-bold"],["mat-icon-button","","aria-label","\u5173\u95ED","data-testid","btn-close-dialog",3,"click"],[1,"dialog-content","py-3"],[1,"text-muted","small","mb-3"],[1,"d-flex","flex-column",3,"formGroup"],["appearance","outline",1,"w-100","mb-2"],["matInput","","type","number","formControlName","totalPackage","placeholder","300000","min","0","data-testid","offer-total-package-input"],["matTextSuffix",""],["appearance","outline",1,"w-100","mt-2","mb-2"],["formControlName","salaryMonths","data-testid","offer-months-select"],[3,"value"],["data-testid","offer-preview-card",1,"preview-card","p-3","rounded","mt-2","border"],[1,"font-weight-bold","text-dark","mb-2"],[1,"d-flex","justify-content-between","mb-1","small","text-muted"],["data-testid","offer-calc-salary",1,"text-dark","font-weight-bold"],[1,"d-flex","justify-content-between","small","text-muted"],["data-testid","offer-calc-bonus",1,"text-dark","font-weight-bold"],["data-testid","offer-trap-warning",1,"alert","alert-warning","py-2","px-3","mt-2","mb-0","small"],["align","end",1,"dialog-actions","p-3"],["mat-button","",3,"click"],["mat-flat-button","","color","primary","data-testid","offer-apply-btn",3,"click","disabled"],[1,"mr-1"]],template:function(n,a){n&1&&(s(0,"div",0)(1,"div",1)(2,"mat-icon",2),d(3,"payments"),l(),s(4,"h2",3),d(5," Offer \u5E74\u85AA\u603B\u5305\u5FEB\u901F\u62C6\u5206 "),l()(),s(6,"button",4),R("click",function(){return a.onClose()}),s(7,"mat-icon"),d(8,"close"),l()()(),s(9,"mat-dialog-content",5)(10,"p",6),d(11," \u8F93\u5165\u8C08\u5B9A\u7684\u5E74\u5EA6\u603B\u5305\u91D1\u989D\u4E0E\u5E74\u85AA\u6708\u6570\uFF08\u5982 15 \u85AA\uFF09\uFF0C\u7CFB\u7EDF\u5C06\u81EA\u52A8\u62C6\u5206\u6BCF\u6708\u57FA\u7840\u8D26\u9762\u5DE5\u8D44\u4E0E\u5E74\u7EC8\u5956\uFF0C\u5E76\u4E00\u952E\u586B\u5165\u8BA1\u7B97\u5668\u3002 "),l(),s(12,"form",7)(13,"mat-form-field",8)(14,"mat-label"),d(15,"\u5E74\u5EA6\u603B\u7A0E\u524D\u85AA\u916C (Total Package)"),l(),E(16,"input",9),s(17,"span",10),d(18,"\u5143"),l(),s(19,"mat-hint"),d(20,"\u5305\u542B 12 \u4E2A\u6708\u6708\u85AA\u53CA\u5E74\u7EC8\u5956\u91D1\u603B\u989D"),l()(),s(21,"mat-form-field",11)(22,"mat-label"),d(23,"\u85AA\u6570\u7ED3\u6784"),l(),s(24,"mat-select",12),de(25,DF,2,2,"mat-option",13,EF),l(),s(27,"mat-hint"),d(28,"\u4F8B\u5982 15 \u85AA\u5373 12 \u4E2A\u6708\u6708\u85AA + 3 \u4E2A\u6708\u5E74\u7EC8\u5956"),l()(),s(29,"div",14)(30,"div",15),d(31,"\u62C6\u5206\u9884\u89C8\u7ED3\u679C"),l(),s(32,"div",16)(33,"span"),d(34,"\u8D26\u9762\u6708\u85AA (12\u4E2A\u6708)\uFF1A"),l(),s(35,"strong",17),d(36),l()(),s(37,"div",18)(38,"span"),d(39,"\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\uFF1A"),l(),s(40,"strong",19),d(41),l()()(),I(42,MF,5,2,"div",20),l()(),s(43,"mat-dialog-actions",21)(44,"button",22),R("click",function(){return a.onClose()}),d(45,"\u53D6\u6D88"),l(),s(46,"button",23),R("click",function(){return a.onApply()}),s(47,"mat-icon",24),d(48,"check"),l(),s(49,"span"),d(50,"\u5E94\u7528\u81F3\u8868\u5355"),l()()()),n&2&&(m(12),_("formGroup",a.splitForm),m(13),ue(a.salaryMonthsOptions),m(11),w(" \xA5",a.calculatedMonthSalary.toLocaleString()," /\u6708 "),m(5),w(" \xA5",a.calculatedAnnualBonus.toLocaleString()," "),m(),T(a.trapWarning?42:-1),m(4),_("disabled",a.splitForm.invalid))},dependencies:[Pe,ao,to,vi,na,Ja,eo,aa,_n,ia,Mt,pi,Ga,hi,Wt,Mn,bn,oa,ra,ko,Fo,Ro,To,Vt,pt,Bt,fn,ht,St],styles:['@charset "UTF-8";.dialog-header[_ngcontent-%COMP%]{padding:14px 20px;border-bottom:1px solid rgba(0,0,0,.08)}.dialog-header[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.dialog-header[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;line-height:22px;display:inline-flex;justify-content:center;align-items:center;flex-shrink:0;width:22px;height:22px;margin:0;padding:0}.dialog-header[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dialog-header[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   h2.mat-mdc-dialog-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:600;line-height:1!important;display:inline-flex;align-items:center;margin:0!important;padding:0!important}.dialog-content[_ngcontent-%COMP%]{min-width:320px;max-width:480px}.preview-card[_ngcontent-%COMP%]{border-color:#e9ecef;background-color:#f8f9fa}.dialog-actions[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.08)}input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{margin:0;appearance:none}input[type=number][_ngcontent-%COMP%]{appearance:textfield}']})}}return t})();var SF=()=>[1,2,3,4,5,6,7,8,9,10,11,12],AF=(t,i)=>i.file,_a=(t,i)=>i.label;function FF(t,i){if(t&1&&d(0),t&2){let e=y();Ue(" ",e.cityRecipe.city,": ",e.cityRecipe.label," ")}}function kF(t,i){t&1&&d(0," \u9009\u62E9\u57CE\u5E02\u914D\u65B9 ")}function IF(t,i){if(t&1){let e=$e();s(0,"button",77),R("click",function(){let a=Ce(e).$implicit,o=y();return we(o.onSelectRecipeItem(a))}),d(1),l()}if(t&2){let e=i.$implicit;A("data-testid","recipe-item-"+e.file.replace(".json","")),m(),Ue(" ",e.city,": ",e.label," ")}}function TF(t,i){if(t&1&&(s(0,"mat-option",19),d(1),l()),t&2){let e=i.$implicit;_("value",e),A("data-testid","option-year-"+e),m(),w(" ",e," ")}}function RF(t,i){if(t&1&&(s(0,"div",30)(1,"div",78)(2,"mat-icon",79),d(3,"warning"),l(),s(4,"div")(5,"strong"),d(6,"\u5E74\u7EC8\u5956\u7A0E\u6536\u76F2\u533A\u9884\u8B66\uFF1A"),l(),s(7,"span"),d(8),l()()()()),t&2){let e=y();m(8),J(e.bonusTrapResult==null?null:e.bonusTrapResult.warningMessage)}}function OF(t,i){if(t&1&&(s(0,"div",34)(1,"div",80),d(2),l()()),t&2){let e=y();m(2),w(" ",e.policyHint," ")}}function PF(t,i){if(t&1&&(s(0,"mat-option",19),d(1),l()),t&2){let e=i.$implicit,n=i.$index;_("value",e.value),A("data-testid","option-infant-care-"+n),m(),J(e.label)}}function BF(t,i){if(t&1&&(s(0,"mat-option",19),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-child-education-"+e.value),m(),J(e.label)}}function LF(t,i){if(t&1&&(s(0,"mat-option",19),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-continuing-education-"+e.value),m(),J(e.label)}}function NF(t,i){if(t&1&&(s(0,"mat-option",19),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-housing-loan-interest-"+e.value),m(),J(e.label)}}function VF(t,i){if(t&1&&(s(0,"mat-option",19),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-renting-"+e.value),m(),J(e.label)}}function zF(t,i){if(t&1&&(s(0,"mat-option",19),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-elderly-care-"+e.value),m(),J(e.label)}}function jF(t,i){if(t&1&&(s(0,"mat-option",19),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-private-pension-"+e.value),m(),J(e.label)}}function HF(t,i){if(t&1&&(s(0,"mat-option",19),d(1),l()),t&2){let e=i.$implicit;_("value",e),m(),w("",e," \u6708\u5165\u804C")}}function UF(t,i){if(t&1&&(s(0,"mat-form-field",65)(1,"mat-label"),d(2,"\u9996\u6B21\u5165\u804C\u6708\u4EFD"),l(),s(3,"mat-select",81),de(4,HF,2,2,"mat-option",19,Kt),l(),s(6,"mat-hint"),d(7),l()()),t&2){let e,n=y();m(4),ue(Xt(1,SF)),m(3),w("\u9996\u6708\u7D2F\u8BA1\u6263\u9664 ",(((e=n.baseForm.get("firstJobStartMonth"))==null?null:e.value)||1)*5e3," \u5143 (\u7A0E\u603B2020\u7B2C13\u53F7)")}}function $F(t,i){t&1&&(s(0,"div",34)(1,"div",82)(2,"mat-form-field",83)(3,"mat-label"),d(4,"\u517B\u8001\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),E(5,"input",84),s(6,"span",26),d(7,"%"),l()(),s(8,"mat-form-field",49)(9,"mat-label"),d(10,"\u533B\u7597\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),E(11,"input",85),s(12,"span",26),d(13,"%"),l()(),s(14,"mat-form-field",49)(15,"mat-label"),d(16,"\u5931\u4E1A\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),E(17,"input",86),s(18,"span",26),d(19,"%"),l()()(),s(20,"mat-slide-toggle",87),d(21," \u6309\u4E0A\u6708\u6536\u5165\u7F34\u7EB3\u793E\u4FDD "),l()())}var zb=(()=>{class t{constructor(){this.cityRecipe=null,this.calculate=new O,this.clearResult=new O,this.changeRecipe=new O,this.selectRecipeItem=new O,this.changePredefineCondition=new O,this.changeSelectedYear=new O,this.templates=dc,this.nonMergeTaxEndDate=yl,this.availableYears=[],this.selectedYear=new Date().getFullYear(),this.useUniformPolicy=!1,this.latestPolicy=null,this.policyHint="",this.bonusTrapResult=null,this.formSubscriptions=[],this.fb=c(io),this.dialog=c(hn),this.trackByValue=(e,n)=>n.value,this.initializeForm()}ngOnInit(){this.cityRecipe&&(this.updateAvailableYears(),this.onYearChange(this.selectedYear)),this.updateFromCache(),this.setupFormValueChanges(),setTimeout(()=>this.updateInsuranceBases(),0)}ngOnChanges(e){e.cityRecipe&&this.cityRecipe&&(this.updateAvailableYears(),this.onYearChange(this.selectedYear),this.patchFromRecipe(this.cityRecipe))}ngOnDestroy(){this.formSubscriptions.forEach(e=>e.unsubscribe())}get privatePensionOptions(){return this.templates.privatePension.options}get infantCareDeductionOptions(){return this.templates.infantCare.options}get childEducationDeductionOptions(){return this.templates.childEducation.options}get continuousEducationDeductionOptions(){return this.templates.continuingEducation.options}get housingLoanInterestDeductionOptions(){return this.templates.housingLoanInterest.options}get rentingDeductionOptions(){return this.templates.renting.options}get elderlyCareDeductionOptions(){return this.templates.elderlyCare.options}get insuranceTop(){return this.latestPolicy?Array.isArray(this.latestPolicy.insuranceBaseRange)?this.latestPolicy.insuranceBaseRange[1]:this.latestPolicy.insuranceBaseRange.endowment[1]:0}get housingFundTop(){return this.latestPolicy?this.latestPolicy.housingFundBaseRange[1]:0}onCalculate(){if(this.baseForm.valid){this.saveToCache();let e=De(k({},this.baseForm.value),{year:this.selectedYear,useUniformPolicy:this.useUniformPolicy});this.calculate.emit(e)}}onReset(){this.baseForm.patchValue({monthSalary:1e4,annualBonus:0,insuranceBase:1e4,housingFundBase:1e4,housingFundRate:5,supplementaryHousingFundRate:0,supplementaryHousingFundEmployerRate:0,lastYearAvgSalary:0,yearBeforeLastAvgSalary:0,extraDeduction:{infantCare:0,childEducation:0,continuingEducation:0,seriousMedicalExpense:0,housingLoanInterest:0,renting:0,elderlyCare:0,enterprisePensionFromEmployee:0,enterprisePensionFromEmployer:0,privatePension:0,other:0},insuranceRate:{endowment:(this.latestPolicy?.employee.insuranceRate?.endowment??0)*100,health:(this.latestPolicy?.employee.insuranceRate?.health??0)*100,unemployment:(this.latestPolicy?.employee.insuranceRate?.unemployment??0)*100},insuranceBaseOnLastMonth:this.cityRecipe?.insuranceBaseOnLastMonth??!1})}onClearResult(){this.clearResult.emit()}onChangeRecipe(e){this.changeRecipe.emit(e),this.patchFromRecipe(e)}onSelectRecipeItem(e){this.selectRecipeItem.emit(e)}openPolicyParamsDialog(){this.dialog.open(Nb,{width:"880px",maxWidth:"95vw",data:{currentRecipeId:this.cityRecipe?.id,currentYear:this.selectedYear}})}onYearChange(e){this.selectedYear=e,this.updateLatestPolicy(),this.changeSelectedYear.emit(e)}onUniformPolicyChange(e){this.useUniformPolicy=e}onChangePredefineCondition(e){this.changePredefineCondition.emit(e),e&&this.patchFromRecipe(this.cityRecipe)}resetConflict(e,n,a){e>0&&n.get(a)?.setValue(0)}openOfferSplitDialog(){this.dialog.open(Vb,{width:"480px",maxWidth:"95vw"}).afterClosed().subscribe(n=>{n&&(this.baseForm.patchValue({monthSalary:n.monthSalary,annualBonus:n.annualBonus}),this.updateInsuranceBases())})}setupFormValueChanges(){this.formSubscriptions.forEach(u=>u.unsubscribe()),this.formSubscriptions=[];let e=this.baseForm.get("lastYearAvgSalary")?.valueChanges.subscribe(()=>{this.updateInsuranceBases()});e&&this.formSubscriptions.push(e);let n=this.baseForm.get("yearBeforeLastAvgSalary")?.valueChanges.subscribe(()=>{this.updateInsuranceBases()});n&&this.formSubscriptions.push(n);let a=this.baseForm.get("monthSalary")?.valueChanges.subscribe(()=>{this.updateInsuranceBases()});a&&this.formSubscriptions.push(a);let o=this.baseForm.get("annualBonus");if(o){this.bonusTrapResult=ua(o.value||0);let u=o.valueChanges.subscribe(p=>{this.bonusTrapResult=ua(p||0)});this.formSubscriptions.push(u)}let r=this.baseForm.get("extraDeduction.enterprisePensionFromEmployee")?.valueChanges.subscribe(u=>{this.baseForm.get("extraDeduction.enterprisePensionFromEmployer")?.setValue(u||0,{emitEvent:!1})});r&&this.formSubscriptions.push(r)}updateInsuranceBases(){let e=new Date().getMonth()+1,n=this.baseForm.get("monthSalary")?.value||0,a=this.baseForm.get("lastYearAvgSalary")?.value||0,o=this.baseForm.get("yearBeforeLastAvgSalary")?.value||0,r=n;e>=1&&e<=6?o>0&&(r=o):e>=7&&e<=12&&a>0&&(r=a),this.baseForm.patchValue({insuranceBase:r,housingFundBase:r},{emitEvent:!1})}initializeForm(){this.baseForm=this.fb.group({monthSalary:[1e4,Z.required],monthlyBonus:[0,Z.required],annualBonus:[0,Z.required],insuranceBase:[1e4,Z.required],housingFundBase:[1e4,Z.required],housingFundRate:[5,Z.required],supplementaryHousingFundRate:[0,Z.required],supplementaryHousingFundEmployerRate:[0,Z.required],lastYearAvgSalary:[0],yearBeforeLastAvgSalary:[0],firstJobThisYear:[!1],firstJobStartMonth:[7],sideIncome:this.fb.group({laborIncome:[0],manuscriptIncome:[0]}),extraDeduction:this.fb.group({infantCare:[0,Z.required],childEducation:[0,Z.required],continuingEducation:[0,Z.required],seriousMedicalExpense:[0,Z.required],housingLoanInterest:[0,Z.required],renting:[0,Z.required],elderlyCare:[0,Z.required],enterprisePensionFromEmployee:[0,Z.required],enterprisePensionFromEmployer:[0,Z.required],privatePension:[0,Z.required],other:[0,Z.required]}),insuranceRate:this.fb.group({endowment:[(this.latestPolicy?.employee.insuranceRate?.endowment??0)*100,Z.required],health:[(this.latestPolicy?.employee.insuranceRate?.health??0)*100,Z.required],unemployment:[(this.latestPolicy?.employee.insuranceRate?.unemployment??0)*100,Z.required]}),insuranceBaseOnLastMonth:[this.cityRecipe?.insuranceBaseOnLastMonth??!1,Z.required]})}patchFromRecipe(e){this.latestPolicy&&(this.baseForm.patchValue({insuranceRate:{endowment:this.latestPolicy.employee.insuranceRate.endowment*100,health:this.latestPolicy.employee.insuranceRate.health*100,unemployment:this.latestPolicy.employee.insuranceRate.unemployment*100},insuranceBaseOnLastMonth:e.insuranceBaseOnLastMonth}),this.setupFormValueChanges(),setTimeout(()=>this.updateInsuranceBases(),0))}updateFromCache(){let e=JSON.parse(localStorage.getItem("incomeMeta"));sessionStorage.getItem("incomeMeta")&&(e=JSON.parse(sessionStorage.getItem("incomeMeta"))),e&&(e.extraDeduction&&(e.extraDeduction.infantCare===void 0&&(e.extraDeduction.infantCare=0),e.extraDeduction.privatePension===void 0&&(e.extraDeduction.privatePension=0)),e.supplementaryHousingFundRate===void 0&&(e.supplementaryHousingFundRate=0),e.supplementaryHousingFundEmployerRate===void 0&&(e.supplementaryHousingFundEmployerRate=0),this.baseForm.patchValue(e))}saveToCache(){localStorage.setItem("incomeMeta",JSON.stringify(this.baseForm.value)),sessionStorage.setItem("incomeMeta",JSON.stringify(this.baseForm.value))}updateAvailableYears(){let e=this.cityRecipe.policies.map(n=>new Date(n.effectiveDate).getFullYear()).filter((n,a,o)=>o.indexOf(n)===a).sort((n,a)=>a-n);this.availableYears=e,e.length>0&&!e.includes(this.selectedYear)&&(this.selectedYear=e[0])}updateLatestPolicy(){this.latestPolicy=Pr(this.cityRecipe,this.selectedYear),this.updatePolicyHint(),this.updateBasePlaceholders()}updatePolicyHint(){if(this.latestPolicy){let e=new Date(this.latestPolicy.effectiveDate),n=e.getMonth()+1,a=e.getFullYear();this.policyHint=`\u63D0\u793A\uFF1A\u5C06\u4F7F\u7528 ${a}-${n.toString().padStart(2,"0")} \u751F\u6548\u7684\u6700\u65B0\u6807\u51C6\u3002${n}\u6708\u524D\u5C06\u81EA\u52A8\u6CBF\u7528\u65E7\u6807\u51C6\u8BA1\u7B97\u3002`}else this.policyHint=""}updateBasePlaceholders(){if(this.latestPolicy){let e=this.latestPolicy.insuranceBaseRange;Array.isArray(e)?this.templates.insuranceBase.placeholder=`${e[0]}-${e[1]}`:this.templates.insuranceBase.placeholder=`${e.endowment[0]}-${e.endowment[1]}`;let n=this.latestPolicy.housingFundBaseRange;this.templates.housingFundBase.placeholder=`${n[0]}-${n[1]}`}}get currentInsuranceTop(){return this.latestPolicy?Array.isArray(this.latestPolicy.insuranceBaseRange)?this.latestPolicy.insuranceBaseRange[1]:this.latestPolicy.insuranceBaseRange.endowment[1]:this.insuranceTop}get currentHousingFundTop(){return this.latestPolicy?this.latestPolicy.housingFundBaseRange[1]:this.housingFundTop}get currentMinimumWage(){return this.latestPolicy?this.latestPolicy.minimumWage:0}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-calculator-form"]],inputs:{usePredefinedInsurancePercents:"usePredefinedInsurancePercents",cityRecipe:"cityRecipe",recipeIndex$:"recipeIndex$"},outputs:{calculate:"calculate",clearResult:"clearResult",changeRecipe:"changeRecipe",selectRecipeItem:"selectRecipeItem",changePredefineCondition:"changePredefineCondition",changeSelectedYear:"changeSelectedYear"},features:[ve],decls:255,vars:68,consts:[["menu","matMenu"],["insuranceBase","matAutocomplete"],["housingFundBase","matAutocomplete"],["infantCare","matAutocomplete"],["childEducation","matAutocomplete"],["continuingEducation","matAutocomplete"],["housingLoanInterest","matAutocomplete"],["renting","matAutocomplete"],["elderlyCare","matAutocomplete"],["privatePension","matAutocomplete"],["appearance","outlined"],[1,"d-flex","justify-content-between","align-items-center","flex-wrap","mb-2"],[1,"d-flex","align-items-center","flex-wrap","my-2","my-md-0"],["color","primary","name","usePredefinedInsurancePercents","data-testid","toggle-predefined-insurance",1,"example-margin",3,"ngModelChange","ngModel"],["color","primary","name","useUniformPolicy","data-testid","toggle-uniform-policy","matTooltip","\u9ED8\u8BA4\u5173\u95ED\uFF1A\u6309\u653F\u7B56\u5B9E\u9645\u751F\u6548\u6708\u4EFD\u5206\u6BB5\u6838\u7B97\uFF08\u5404\u5730\u901A\u5E38\u4E8E7\u6708\u8C03\u57FA\uFF0C1~6\u6708\u6267\u884C\u4E0A\u671F\u57FA\u6570\uFF0C7~12\u6708\u6267\u884C\u65B0\u57FA\u6570\uFF09\uFF1B\u5F00\u542F\u540E\uFF1A\u5168\u5E7412\u4E2A\u6708\u5747\u7EDF\u4E00\u91C7\u7528\u8BE5\u5E74\u5EA6\u6700\u65B0\u516C\u5E03\u7684\u793E\u4FDD\u516C\u79EF\u91D1\u57FA\u6570\u4E0A\u4E0B\u9650\u53CA\u8D39\u7387\u8FDB\u884C\u6D4B\u7B97\u3002","matTooltipPosition","above",1,"example-margin","ml-3",3,"ngModelChange","ngModel"],["mat-button","","color","primary","data-testid","btn-select-city-recipe",1,"ml-3","mt-1","mt-sm-0",3,"matMenuTriggerFor"],["mat-menu-item",""],["appearance","outline",1,"ml-3","dense-xs",2,"width","120px"],["data-testid","select-calculation-year",3,"valueChange","selectionChange","value"],[3,"value"],["mat-icon-button","","color","primary","type","button","matTooltip","\u67E5\u770B\u57CE\u5E02\u793E\u4FDD\u516C\u79EF\u91D1\u8BA1\u7B97\u53C2\u6570\u4E0E\u653F\u7B56\u4F9D\u636E","data-testid","btn-view-policy-params",1,"ml-2","mt-1","mt-sm-0",3,"click"],[1,"pt-2"],[1,"form-basic-data",3,"formGroup"],[1,"row","align-items-center"],["appearance","outline",1,"col-12","col-md-3"],["matInput","","type","number","placeholder","10000","data-testid","input-month-salary","formControlName","monthSalary","min","0"],["matTextSuffix",""],["matInput","","type","number","placeholder","0","data-testid","input-annual-bonus","formControlName","annualBonus","min","0"],[1,"col-12","col-md-3","mb-3","mb-md-0"],["mat-stroked-button","","color","primary","type","button","data-testid","btn-open-offer-split",3,"click"],[1,"row","mx-0","mb-3"],[1,"row"],["matInput","","type","number","placeholder","0","data-testid","input-year-before-last-avg-salary","formControlName","yearBeforeLastAvgSalary","min","0"],["matInput","","type","number","placeholder","0","data-testid","input-last-year-avg-salary","formControlName","lastYearAvgSalary","min","0"],[1,"row","mx-0"],["matInput","","type","number","data-testid","input-insurance-base","formControlName","insuranceBase","min","0",3,"placeholder","matAutocomplete"],["panelWidth","200"],[1,"ml-sm-3","ml-md-4"],["matInput","","type","number","data-testid","input-housing-fund-base","formControlName","housingFundBase","min","0",3,"placeholder","matAutocomplete"],[1,"ml-3",2,"width","150px"],["matInput","","type","number","placeholder","5","data-testid","input-housing-fund-rate","formControlName","housingFundRate","min","0"],[1,"ml-3",2,"width","160px"],["matInput","","type","number","placeholder","0","data-testid","input-supplementary-housing-fund-rate","formControlName","supplementaryHousingFundRate","min","0","matTooltip","\u4E2A\u4EBA\u81EA\u613F\u8865\u5145\u7F34\u5B58\u516C\u79EF\u91D1\u6BD4\u4F8B\uFF0C\u6CD5\u5B9A\u7A0E\u524D\u6263\u9664\u4E0A\u9650\u5408\u8BA1\u4E3A12%","matTooltipPosition","above"],["matInput","","type","number","placeholder","0","data-testid","input-supplementary-housing-fund-employer-rate","formControlName","supplementaryHousingFundEmployerRate","min","0","matTooltip","\u4F01\u4E1A\u4E3A\u5458\u5DE5\u8865\u5145\u7F34\u5B58\u516C\u79EF\u91D1\u6BD4\u4F8B\uFF0C\u8BA1\u5165\u4F01\u4E1A\u7528\u5DE5\u6210\u672C","matTooltipPosition","above"],["formGroupName","extraDeduction",1,"ml-md-4"],["matInput","","type","number","data-testid","input-infant-care","formControlName","infantCare","min","0",3,"placeholder","matAutocomplete"],[1,"ml-3"],["matInput","","type","number","data-testid","input-child-education","formControlName","childEducation","min","0",3,"placeholder","matAutocomplete"],["matInput","","type","number","data-testid","input-continuing-education","formControlName","continuingEducation","min","0",3,"placeholder","matAutocomplete"],[1,"ml-3",2,"width","120px"],["matInput","","type","number","placeholder","0","data-testid","input-serious-medical-expense","formControlName","seriousMedicalExpense","min","0","matTooltip","\u6B21\u5E743-6\u6708\u7EFC\u5408\u6240\u5F97\u6C47\u7B97\u6E05\u7F34\u65F6\u636E\u5B9E\u7533\u62A5\uFF08\u81EA\u4ED8\u8D851.5\u4E07\u90E8\u5206\uFF0C\u6700\u9AD8\u9650\u989D8\u4E07\u5143/\u5E74\uFF09","matTooltipPosition","above"],["matInput","","type","number","data-testid","input-housing-loan-interest","formControlName","housingLoanInterest","min","0",3,"ngModelChange","placeholder","matAutocomplete"],["matInput","","type","number","data-testid","input-renting","formControlName","renting","min","0",3,"ngModelChange","placeholder","matAutocomplete"],["matInput","","type","number","data-testid","input-elderly-care","formControlName","elderlyCare","min","0",3,"placeholder","matAutocomplete"],[1,"ml-3",2,"width","140px"],["matInput","","type","number","placeholder","0","data-testid","input-enterprise-pension-employee","formControlName","enterprisePensionFromEmployee","min","0","matTooltip","\u6CD5\u5B9A\u7A0E\u524D\u6263\u9664\u9650\u989D\u4E3A\u672C\u4EBA\u6708\u85AA4%\u4E14\u4E0D\u8D85\u793E\u5E733\u500D","matTooltipPosition","above"],["matInput","","type","number","placeholder","0","data-testid","input-enterprise-pension-employer","formControlName","enterprisePensionFromEmployer","min","0"],["matInput","","type","number","data-testid","input-private-pension","formControlName","privatePension","min","0","matTooltip","\u6BCF\u5E74\u9650\u989D12000\u5143(\u6BCF\u67081000\u5143)\u7A0E\u524D\u636E\u5B9E\u6263\u9664","matTooltipPosition","above",3,"placeholder","matAutocomplete"],["matInput","","type","number","placeholder","0","data-testid","input-other-deduction","formControlName","other","min","0"],[1,"my-3","mx-0","shadow-none","border"],[1,"font-weight-bold","text-secondary","d-flex","align-items-center"],[1,"mr-2","text-info"],[1,"py-2"],[1,"d-flex","align-items-center","flex-wrap","mb-3"],["color","primary","formControlName","firstJobThisYear","data-testid","toggle-first-job"],["appearance","outline",1,"ml-sm-3","mt-2","mt-sm-0",2,"width","150px"],["formGroupName","sideIncome",1,"row","mx-0","pt-2","border-top"],[1,"col-12","text-muted","small","mb-2"],[1,"align-middle","mr-1",2,"font-size","16px","width","16px","height","16px"],["appearance","outline",1,"col-12","col-md-4","pl-0"],["matInput","","type","number","placeholder","0","formControlName","laborIncome","data-testid","input-labor-income","min","0"],["appearance","outline",1,"col-12","col-md-4"],["matInput","","type","number","placeholder","0","formControlName","manuscriptIncome","data-testid","input-manuscript-income","min","0"],[1,"pl-4","pb-3"],["mat-raised-button","","color","primary","type","submit","data-testid","btn-calculate",3,"click","disabled"],["mat-raised-button","","data-testid","btn-reset",1,"ml-3",3,"click","disabled"],["mat-raised-button","","data-testid","btn-clear-result",1,"ml-3",3,"click"],["mat-menu-item","",3,"click"],["data-testid","bonus-tax-trap-alert",1,"alert","alert-warning","d-flex","align-items-center","w-100","p-2","rounded","border","border-warning",2,"background-color","#fff3cd","color","#856404"],[1,"mr-2","text-warning"],["data-testid","text-policy-hint",1,"text-muted","small","my-1"],["formControlName","firstJobStartMonth","data-testid","select-first-job-month"],["formGroupName","insuranceRate"],[2,"width","120px"],["matInput","","type","number","placeholder","0","data-testid","input-endowment-rate","formControlName","endowment","min","0"],["matInput","","type","number","placeholder","0","data-testid","input-health-rate","formControlName","health","min","0"],["matInput","","type","number","placeholder","0","data-testid","input-unemployment-rate","formControlName","unemployment","min","0"],["color","primary","data-testid","toggle-insurance-base-last-month","formControlName","insuranceBaseOnLastMonth",1,"ml-3","mb-2","mb-md-0",2,"align-self","center"]],template:function(n,a){if(n&1){let o=$e();s(0,"mat-card",10)(1,"mat-card-header",11)(2,"mat-card-title"),d(3,"\u57FA\u7840\u4FE1\u606F"),l(),s(4,"div",12)(5,"mat-slide-toggle",13),ls("ngModelChange",function(u){return Ce(o),ss(a.usePredefinedInsurancePercents,u)||(a.usePredefinedInsurancePercents=u),we(u)}),R("ngModelChange",function(u){return a.onChangePredefineCondition(u)}),d(6," \u9884\u5B9A\u4E49\u793E\u4FDD\u7F34\u7EB3\u53C2\u6570 "),l(),s(7,"mat-slide-toggle",14),ls("ngModelChange",function(u){return Ce(o),ss(a.useUniformPolicy,u)||(a.useUniformPolicy=u),we(u)}),R("ngModelChange",function(u){return a.onUniformPolicyChange(u)}),d(8," \u5168\u5E74\u4F7F\u7528\u7EDF\u4E00\u57FA\u6570\u6807\u51C6 "),l(),s(9,"button",15),I(10,FF,1,2)(11,kF,1,0),s(12,"mat-icon"),d(13,"arrow_drop_down"),l()(),s(14,"mat-menu",null,0),de(16,IF,2,3,"button",16,AF),V(18,"async"),l(),s(19,"mat-form-field",17)(20,"mat-label"),d(21,"\u8BA1\u7B97\u5E74\u4EFD"),l(),s(22,"mat-select",18),ls("valueChange",function(u){return Ce(o),ss(a.selectedYear,u)||(a.selectedYear=u),we(u)}),R("selectionChange",function(u){return a.onYearChange(u.value)}),de(23,TF,2,3,"mat-option",19,Kt),l()(),s(25,"button",20),R("click",function(){return a.openPolicyParamsDialog()}),s(26,"mat-icon"),d(27,"menu_book"),l()()()(),s(28,"mat-card-content",21)(29,"form",22)(30,"div",23)(31,"mat-form-field",24)(32,"mat-label"),d(33,"\u6708\u85AA"),l(),E(34,"input",25),s(35,"span",26),d(36,"\u5143"),l()(),s(37,"mat-form-field",24)(38,"mat-label"),d(39,"\u5E74\u7EC8\u5956 (\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1)"),l(),E(40,"input",27),s(41,"span",26),d(42,"\u5143"),l(),s(43,"mat-hint"),d(44),l()(),s(45,"div",28)(46,"button",29),R("click",function(){return a.openOfferSplitDialog()}),s(47,"mat-icon"),d(48,"payments"),l(),s(49,"span"),d(50,"Offer \u603B\u5305\u62C6\u5206"),l()()()(),I(51,RF,9,1,"div",30),s(52,"div",31)(53,"mat-form-field",24)(54,"mat-label"),d(55,"\u4E0A\u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\u5DE5\u8D44"),l(),E(56,"input",32),s(57,"span",26),d(58,"\u5143"),l(),s(59,"mat-hint"),d(60,"\u7528\u4E8E1-6\u6708\u7F34\u8D39\u57FA\u6570\uFF0C0\u8868\u793A\u4F7F\u7528\u5F53\u524D\u6708\u85AA"),l()(),s(61,"mat-form-field",24)(62,"mat-label"),d(63,"\u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\u5DE5\u8D44"),l(),E(64,"input",33),s(65,"span",26),d(66,"\u5143"),l(),s(67,"mat-hint"),d(68,"\u7528\u4E8E7-12\u6708\u7F34\u8D39\u57FA\u6570\uFF0C0\u8868\u793A\u4F7F\u7528\u5F53\u524D\u6708\u85AA"),l()()(),I(69,OF,3,1,"div",34),s(70,"div",34)(71,"div")(72,"mat-form-field")(73,"mat-label"),d(74),l(),E(75,"input",35),s(76,"span",26),d(77,"\u5143"),l(),s(78,"mat-autocomplete",36,1)(80,"mat-option",19),d(81),l(),s(82,"mat-option",19),d(83),l(),s(84,"mat-option",19),d(85,"\u4E0D\u7F34\u7EB3\uFF1A0\u5143"),l()()()(),s(86,"div",37)(87,"mat-form-field")(88,"mat-label"),d(89),l(),E(90,"input",38),s(91,"span",26),d(92,"\u5143"),l(),s(93,"mat-autocomplete",36,2)(95,"mat-option",19),d(96),l(),s(97,"mat-option",19),d(98),l(),s(99,"mat-option",19),d(100,"\u4E0D\u7F34\u7EB3\uFF1A0\u5143"),l()()(),s(101,"mat-form-field",39)(102,"mat-label"),d(103,"\u516C\u79EF\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),E(104,"input",40),s(105,"span",26),d(106,"%"),l()(),s(107,"mat-form-field",41)(108,"mat-label"),d(109,"\u4E2A\u4EBA\u8865\u5145\u516C\u79EF\u91D1\u6BD4\u4F8B"),l(),E(110,"input",42),s(111,"span",26),d(112,"%"),l()(),s(113,"mat-form-field",41)(114,"mat-label"),d(115,"\u4F01\u4E1A\u8865\u5145\u516C\u79EF\u91D1\u6BD4\u4F8B"),l(),E(116,"input",43),s(117,"span",26),d(118,"%"),l()()(),s(119,"div",44)(120,"mat-form-field")(121,"mat-label"),d(122),l(),E(123,"input",45),s(124,"span",26),d(125,"\u5143"),l(),s(126,"mat-autocomplete",36,3),de(128,PF,2,3,"mat-option",19,_a),l()(),s(130,"mat-form-field",46)(131,"mat-label"),d(132),l(),E(133,"input",47),s(134,"span",26),d(135,"\u5143"),l(),s(136,"mat-autocomplete",36,4),de(138,BF,2,3,"mat-option",19,_a),l()(),s(140,"mat-form-field",46)(141,"mat-label"),d(142),l(),E(143,"input",48),s(144,"span",26),d(145,"\u5143"),l(),s(146,"mat-autocomplete",36,5),de(148,LF,2,3,"mat-option",19,_a),l()(),s(150,"mat-form-field",49)(151,"mat-label"),d(152,"\u5927\u75C5\u533B\u7597"),l(),E(153,"input",50),s(154,"span",26),d(155,"\u5143"),l()(),s(156,"mat-form-field",46)(157,"mat-label"),d(158),l(),s(159,"input",51),R("ngModelChange",function(u){return a.resetConflict(u,a.baseForm,a.templates.housingLoanInterest.conflictWith||"")}),l(),s(160,"span",26),d(161,"\u5143"),l(),s(162,"mat-autocomplete",36,6),de(164,NF,2,3,"mat-option",19,_a),l()(),s(166,"mat-form-field",46)(167,"mat-label"),d(168),l(),s(169,"input",52),R("ngModelChange",function(u){return a.resetConflict(u,a.baseForm,a.templates.renting.conflictWith||"")}),l(),s(170,"span",26),d(171,"\u5143"),l(),s(172,"mat-autocomplete",36,7),de(174,VF,2,3,"mat-option",19,_a),l()(),s(176,"mat-form-field",46)(177,"mat-label"),d(178),l(),E(179,"input",53),s(180,"span",26),d(181,"\u5143"),l(),s(182,"mat-autocomplete",36,8),de(184,zF,2,3,"mat-option",19,_a),l()(),s(186,"mat-form-field",54)(187,"mat-label"),d(188,"\u4F01\u4E1A\u5E74\u91D1(\u4E2A\u4EBA4%\u9650\u989D)"),l(),E(189,"input",55),s(190,"span",26),d(191,"\u5143"),l()(),s(192,"mat-form-field",49)(193,"mat-label"),d(194,"\u4F01\u4E1A\u5E74\u91D1\u516C\u53F8\u7F34\u7EB3"),l(),E(195,"input",56),s(196,"span",26),d(197,"\u5143"),l()(),s(198,"mat-form-field",46)(199,"mat-label"),d(200),l(),E(201,"input",57),s(202,"span",26),d(203,"\u5143"),l(),s(204,"mat-autocomplete",36,9),de(206,jF,2,3,"mat-option",19,_a),l()(),s(208,"mat-form-field",49)(209,"mat-label"),d(210,"\u5176\u4ED6\u6263\u9664\u9879"),l(),E(211,"input",58),s(212,"span",26),d(213,"\u5143"),l()()()(),s(214,"mat-expansion-panel",59)(215,"mat-expansion-panel-header")(216,"mat-panel-title",60)(217,"mat-icon",61),d(218,"school"),l(),s(219,"span"),d(220,"\u5E94\u5C4A\u6BD5\u4E1A\u751F / \u9996\u6B21\u5165\u804C & \u526F\u4E1A\u6240\u5F97\u7533\u62A5 (\u53EF\u9009)"),l()()(),s(221,"div",62)(222,"div",63)(223,"mat-slide-toggle",64),d(224," \u5F53\u5E74\u9996\u6B21\u53C2\u52A0\u5DE5\u4F5C / \u5E94\u5C4A\u6BD5\u4E1A\u751F "),l(),I(225,UF,8,2,"mat-form-field",65),l(),s(226,"div",66)(227,"div",67)(228,"mat-icon",68),d(229,"info"),l(),d(230," \u526F\u4E1A\u52B3\u52A1\u62A5\u916C\u4E0E\u7A3F\u916C\u6309\u7A0E\u6CD5\u5E76\u5165\u5E74\u5EA6\u7EFC\u5408\u6240\u5F97\u5408\u5E76\u6E05\u7B97 "),l(),s(231,"mat-form-field",69)(232,"mat-label"),d(233,"\u6708\u5747\u52B3\u52A1\u62A5\u916C\u6536\u5165"),l(),E(234,"input",70),s(235,"span",26),d(236,"\u5143/\u6708"),l(),s(237,"mat-hint"),d(238,"\u4EE5\u6536\u5165\u7684 80% \u8BA1\u5165\u5E94\u7A0E\u6240\u5F97"),l()(),s(239,"mat-form-field",71)(240,"mat-label"),d(241,"\u6708\u5747\u7A3F\u916C\u6240\u5F97\u6536\u5165"),l(),E(242,"input",72),s(243,"span",26),d(244,"\u5143/\u6708"),l(),s(245,"mat-hint"),d(246,"\u4EE5\u6536\u5165\u7684 56% (80%\xD770%) \u8BA1\u5165\u5E94\u7A0E\u6240\u5F97"),l()()()()(),I(247,$F,22,0,"div",34),l()(),s(248,"mat-card-actions",73)(249,"button",74),R("click",function(){return a.onCalculate()}),d(250," \u8BA1\u7B97 "),l(),s(251,"button",75),R("click",function(){return a.onReset()}),d(252," \u91CD\u7F6E "),l(),s(253,"button",76),R("click",function(){return a.onClearResult()}),d(254," \u6E05\u7A7A\u7ED3\u679C "),l()()()}if(n&2){let o,r=ye(15),u=ye(79),p=ye(94),h=ye(127),f=ye(137),g=ye(147),v=ye(163),C=ye(173),M=ye(183),b=ye(205);m(5),rs("ngModel",a.usePredefinedInsurancePercents),m(2),rs("ngModel",a.useUniformPolicy),m(2),_("matMenuTriggerFor",r),m(),T(a.cityRecipe?10:11),m(6),ue(q(18,66,a.recipeIndex$)),m(6),rs("value",a.selectedYear),m(),ue(a.availableYears),m(6),_("formGroup",a.baseForm),m(15),w("\u6BCF\u7EB3\u7A0E\u5E74\u5EA6\u9650\u7528\u4E00\u6B21 (\u5355\u72EC\u8BA1\u7A0E\u81F3 ",a.nonMergeTaxEndDate,")"),m(7),T(a.bonusTrapResult!=null&&a.bonusTrapResult.isTrap?51:-1),m(18),T(a.policyHint?69:-1),m(5),J(a.templates.insuranceBase.label),m(),_("placeholder",a.templates.insuranceBase.placeholder)("matAutocomplete",u),m(5),_("value",a.baseForm.controls.monthSalary.value),m(),Ue("\u5168\u989D\u7F34\u7EB3\uFF1A",a.baseForm.controls.monthSalary.value,"\u5143(\u4E0D\u8D85\u4E0A\u9650",a.currentInsuranceTop,"\u5143) "),m(),_("value",a.currentMinimumWage),m(),w("\u6700\u4F4E\u5DE5\u8D44\u6807\u51C6\uFF1A",a.currentMinimumWage,"\u5143"),m(),_("value",0),m(5),J(a.templates.housingFundBase.label),m(),_("placeholder",a.templates.housingFundBase.placeholder)("matAutocomplete",p),m(5),_("value",a.baseForm.controls.monthSalary.value),m(),Ue("\u5168\u989D\u7F34\u7EB3\uFF1A",a.baseForm.controls.monthSalary.value,"\u5143(\u4E0D\u8D85\u4E0A\u9650",a.currentHousingFundTop,"\u5143) "),m(),_("value",a.currentMinimumWage),m(),w("\u6700\u4F4E\u5DE5\u8D44\u6807\u51C6\uFF1A",a.currentMinimumWage,"\u5143"),m(),_("value",0),m(21),Ie("width",a.templates.infantCare.width),m(2),J(a.templates.infantCare.label),m(),_("placeholder",a.templates.infantCare.placeholder)("matAutocomplete",h),m(5),ue(a.infantCareDeductionOptions),m(2),Ie("width",a.templates.childEducation.width),m(2),J(a.templates.childEducation.label),m(),_("placeholder",a.templates.childEducation.placeholder)("matAutocomplete",f),m(5),ue(a.childEducationDeductionOptions),m(2),Ie("width",a.templates.continuingEducation.width),m(2),J(a.templates.continuingEducation.label),m(),_("placeholder",a.templates.continuingEducation.placeholder)("matAutocomplete",g),m(5),ue(a.continuousEducationDeductionOptions),m(8),Ie("width",a.templates.housingLoanInterest.width),m(2),J(a.templates.housingLoanInterest.label),m(),_("placeholder",a.templates.housingLoanInterest.placeholder)("matAutocomplete",v),m(5),ue(a.housingLoanInterestDeductionOptions),m(2),Ie("width",a.templates.renting.width),m(2),J(a.templates.renting.label),m(),_("placeholder",a.templates.renting.placeholder)("matAutocomplete",C),m(5),ue(a.rentingDeductionOptions),m(2),Ie("width",a.templates.elderlyCare.width),m(2),J(a.templates.elderlyCare.label),m(),_("placeholder",a.templates.elderlyCare.placeholder)("matAutocomplete",M),m(5),ue(a.elderlyCareDeductionOptions),m(14),Ie("width",a.templates.privatePension.width),m(2),J(a.templates.privatePension.label),m(),_("placeholder",a.templates.privatePension.placeholder)("matAutocomplete",b),m(5),ue(a.privatePensionOptions),m(19),T((o=a.baseForm.get("firstJobThisYear"))!=null&&o.value?225:-1),m(22),T(a.usePredefinedInsurancePercents?-1:247),m(2),_("disabled",a.baseForm.disabled||a.baseForm.invalid),m(2),_("disabled",a.baseForm.disabled)}},dependencies:[Pe,_l,to,vi,na,Ja,eo,aa,Nd,ao,_n,ia,no,In,kn,nb,Ai,Fi,Si,Wt,Mn,bn,oa,ra,ko,Fo,Ro,To,Vt,oc,Hr,pt,Bt,fn,ht,St,sc,rc,Ur,lc,$r,Gr,gb,yb,Po,Wr,vb,ki,pa,Mt,sn],styles:["mat-mdc-card-header[_ngcontent-%COMP%]{margin-bottom:1.25em}mat-mdc-card-header[_ngcontent-%COMP%]     .mat-mdc-card-header-text{margin-left:0}.city-list[_ngcontent-%COMP%]{width:10em}.mat-form-field-appearance-standard[_ngcontent-%COMP%]:first-child{margin-left:.5rem}"]})}}return t})();var jb=(()=>{class t extends Vc{transform(e,n,a,o){let r=new Date(2e3,Number(e),1);return super.transform(r,n||"MMMM",a,o)}static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})()}static{this.\u0275pipe=Ni({name:"month",type:t,pure:!0})}}return t})();var GF=(t,i)=>i.fieldPath;function WF(t,i){if(t&1&&(s(0,"mat-list-item")(1,"div",4),d(2),l(),s(3,"div",5),d(4),l()()),t&2){let e=i.$implicit,n=y();m(2),w(" ",n.getFieldDisplayName(e.fieldPath)," "),m(2),w(" \u65B0\u503C\uFF1A",n.formatValue(e.value,e.fieldPath)," ")}}var Hb=(()=>{class t{constructor(){this.dialogRef=c(pn),this.data=c(fr)}onCancel(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}getFieldDisplayName(e){return{monthSalary:"\u6708\u85AA",monthlyBonus:"\u6708\u5EA6\u5956\u91D1",insuranceBase:"\u793E\u4FDD\u57FA\u6570",housingFundBase:"\u516C\u79EF\u91D1\u57FA\u6570",housingFundRate:"\u516C\u79EF\u91D1\u7F34\u7EB3\u6BD4\u4F8B",supplementaryHousingFundRate:"\u4E2A\u4EBA\u8865\u5145\u516C\u79EF\u91D1\u6BD4\u4F8B",supplementaryHousingFundEmployerRate:"\u4F01\u4E1A\u8865\u5145\u516C\u79EF\u91D1\u6BD4\u4F8B",lastYearAvgSalary:"\u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\u5DE5\u8D44",yearBeforeLastAvgSalary:"\u4E0A\u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\u5DE5\u8D44","insuranceRate.endowment":"\u517B\u8001\u4FDD\u9669\u7F34\u7EB3\u6BD4\u4F8B","insuranceRate.health":"\u533B\u7597\u4FDD\u9669\u7F34\u7EB3\u6BD4\u4F8B","insuranceRate.unemployment":"\u5931\u4E1A\u4FDD\u9669\u7F34\u7EB3\u6BD4\u4F8B","extraDeduction.infantCare":"3\u5C81\u4EE5\u4E0B\u5A74\u5E7C\u513F\u7167\u62A4\u4E13\u9879\u6263\u9664","extraDeduction.childEducation":"\u5B50\u5973\u6559\u80B2\u4E13\u9879\u6263\u9664","extraDeduction.continuingEducation":"\u7EE7\u7EED\u6559\u80B2\u4E13\u9879\u6263\u9664","extraDeduction.seriousMedicalExpense":"\u5927\u75C5\u533B\u7597\u4E13\u9879\u6263\u9664","extraDeduction.housingLoanInterest":"\u4F4F\u623F\u8D37\u6B3E\u5229\u606F\u4E13\u9879\u6263\u9664","extraDeduction.renting":"\u4F4F\u623F\u79DF\u91D1\u4E13\u9879\u6263\u9664","extraDeduction.elderlyCare":"\u8D61\u517B\u8001\u4EBA\u4E13\u9879\u6263\u9664","extraDeduction.enterprisePensionFromEmployee":"\u4F01\u4E1A\u5E74\u91D1\u4E2A\u4EBA\u7F34\u7EB3","extraDeduction.enterprisePensionFromEmployer":"\u4F01\u4E1A\u5E74\u91D1\u4F01\u4E1A\u7F34\u7EB3","extraDeduction.privatePension":"\u4E2A\u4EBA\u517B\u8001\u91D1","extraDeduction.other":"\u5176\u4ED6\u6263\u9664\u9879"}[e]||e}formatValue(e,n){return typeof e=="number"?n&&n.includes("Rate")?`${e}%`:`${e}\u5143`:String(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-sync-confirmation-dialog"]],decls:13,vars:1,consts:[["mat-dialog-title","","data-testid","sync-dialog-title"],["align","end"],["mat-button","","data-testid","btn-sync-cancel",3,"click"],["mat-button","","color","primary","data-testid","btn-sync-confirm",3,"click"],["matListItemTitle",""],["matListItemLine",""]],template:function(n,a){n&1&&(s(0,"h2",0),d(1,"\u540C\u6B65\u786E\u8BA4"),l(),s(2,"mat-dialog-content")(3,"p"),d(4),l(),s(5,"mat-list"),de(6,WF,5,2,"mat-list-item",null,GF),l()(),s(8,"mat-dialog-actions",1)(9,"button",2),R("click",function(){return a.onCancel()}),d(10," \u53D6\u6D88 "),l(),s(11,"button",3),R("click",function(){return a.onConfirm()}),d(12," \u786E\u8BA4\u540C\u6B65 "),l()()),n&2&&(m(4),w(" \u60A8\u4FEE\u6539\u4E86\u7B2C",a.data.monthIndex+1,"\u6708\u7684\u6570\u636E\uFF0C\u662F\u5426\u8981\u5C06\u4EE5\u4E0B\u53D8\u66F4\u540C\u6B65\u5230\u540E\u7EED\u6708\u4EFD\uFF1F "),m(2),ue(a.data.changedFields))},dependencies:[Pe,Mt,pi,Ga,hi,Ii,uc,No,ga,fa,pt,Bt],styles:["mat-dialog-content[_ngcontent-%COMP%]{min-width:300px}"]})}}return t})();var YF=(t,i,e)=>({form:t,income:i,index:e}),qF=(t,i)=>i.actualMonth||i.id||t,ba=(t,i)=>i.label;function KF(t,i){if(t&1&&Sa(0,14),t&2){let e=y(),n=e.$implicit,a=e.$index,o=y(2),r=ye(3);_("ngTemplateOutlet",r)("ngTemplateOutletContext",Ju(2,YF,o.detailForms[a],n,a))}}function XF(t,i){if(t&1){let e=$e();s(0,"mat-expansion-panel",13,1),R("opened",function(){let a=Ce(e).$index,o=y(2);return we(o.onPanelOpened(a))})("closed",function(){let a=Ce(e).$index,o=y(2);return we(o.onPanelClosed(a))}),s(2,"mat-expansion-panel-header"),d(3),V(4,"month"),V(5,"currency"),V(6,"currency"),V(7,"currency"),V(8,"currency"),l(),I(9,KF,1,6,"ng-container",14),l()}if(t&2){let e=i.$implicit,n=i.$index,a=y(2);_("expanded",a.expandedMonths.has(n)),A("data-testid","month-panel-"+(n+1)),m(2),A("data-testid","month-panel-header-"+(n+1)),m(),zo(" ",q(4,9,e.actualMonth-1)," \u5B9E\u6536\uFF1A ",q(5,11,e.cashIncome),"\uFF0C\u516C\u79EF\u91D1\uFF1A",q(6,13,e.housingFund+e.supplementaryHousingFund+e.employerCosts.housingFund+e.employerCosts.supplementaryHousingFund)," \uFF0C\u4E2A\u7A0E\uFF1A",q(7,15,e.tax),"\uFF0C\u516C\u53F8\u6210\u672C\uFF1A",q(8,17,e.employerCosts.full)," "),m(6),T(a.detailForms[n]?9:-1)}}function QF(t,i){if(t&1){let e=$e();s(0,"div")(1,"mat-accordion",11),R("animationend",function(){Ce(e);let a=y();return we(a.scrollToChart())}),de(2,XF,10,19,"mat-expansion-panel",12,qF),l()()}if(t&2){let e=i;m(),_("@listAnimation",e.length),m(),ue(e)}}function ZF(t,i){if(t&1&&(s(0,"mat-option",25),d(1),l()),t&2){let e=y(2).form;_("value",e.controls.yearBeforeLastAvgSalary==null?null:e.controls.yearBeforeLastAvgSalary.value),m(),w(" \u4E0A\u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\uFF1A",e.controls.yearBeforeLastAvgSalary==null?null:e.controls.yearBeforeLastAvgSalary.value,"\u5143 ")}}function JF(t,i){if(t&1&&(s(0,"mat-option",25),d(1),l()),t&2){let e=y(2).form;_("value",e.controls.lastYearAvgSalary==null?null:e.controls.lastYearAvgSalary.value),m(),w(" \u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\uFF1A",e.controls.lastYearAvgSalary==null?null:e.controls.lastYearAvgSalary.value,"\u5143 ")}}function ek(t,i){if(t&1&&(s(0,"mat-option",25),d(1),l()),t&2){let e=y(2).form;_("value",e.controls.yearBeforeLastAvgSalary==null?null:e.controls.yearBeforeLastAvgSalary.value),m(),w(" \u4E0A\u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\uFF1A",e.controls.yearBeforeLastAvgSalary==null?null:e.controls.yearBeforeLastAvgSalary.value,"\u5143 ")}}function tk(t,i){if(t&1&&(s(0,"mat-option",25),d(1),l()),t&2){let e=y(2).form;_("value",e.controls.lastYearAvgSalary==null?null:e.controls.lastYearAvgSalary.value),m(),w(" \u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\uFF1A",e.controls.lastYearAvgSalary==null?null:e.controls.lastYearAvgSalary.value,"\u5143 ")}}function nk(t,i){if(t&1&&(s(0,"mat-option",25),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),J(e.label)}}function ik(t,i){if(t&1&&(s(0,"mat-option",25),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),J(e.label)}}function ak(t,i){if(t&1&&(s(0,"mat-option",25),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),J(e.label)}}function ok(t,i){if(t&1&&(s(0,"mat-option",25),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),J(e.label)}}function rk(t,i){if(t&1&&(s(0,"mat-option",25),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),J(e.label)}}function sk(t,i){if(t&1&&(s(0,"mat-option",25),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),J(e.label)}}function lk(t,i){if(t&1&&(s(0,"mat-option",25),d(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),J(e.label)}}function ck(t,i){if(t&1){let e=$e();s(0,"form",15)(1,"div",16)(2,"mat-form-field")(3,"mat-label"),d(4,"\u6708\u85AA"),l(),E(5,"input",17),s(6,"span",18),d(7,"\u5143"),l()(),s(8,"mat-form-field",19)(9,"mat-label"),d(10,"\u6708\u5EA6\u5956\u91D1"),l(),E(11,"input",20),s(12,"span",18),d(13,"\u5143"),l()(),s(14,"mat-slide-toggle",21),d(15," \u5165\u804C\u65B0\u516C\u53F8\uFF08\u65B0\u8BA1\u8D39\u5468\u671F\uFF09\uFF1F "),l()(),s(16,"div",22)(17,"mat-form-field")(18,"mat-label"),d(19),l(),E(20,"input",23),s(21,"span",18),d(22,"\u5143"),l(),s(23,"mat-autocomplete",24,2)(25,"mat-option",25),d(26),l(),I(27,ZF,2,2,"mat-option",25),I(28,JF,2,2,"mat-option",25),s(29,"mat-option",25),d(30),l(),s(31,"mat-option",25),d(32,"\u4E0D\u7F34\u7EB3\uFF1A0\u5143"),l()()(),s(33,"div",26)(34,"mat-form-field",27)(35,"mat-label"),d(36,"\u517B\u8001\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),E(37,"input",28),s(38,"span",18),d(39,"%"),l()(),s(40,"mat-form-field",29)(41,"mat-label"),d(42,"\u533B\u7597\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),E(43,"input",30),s(44,"span",18),d(45,"%"),l()(),s(46,"mat-form-field",29)(47,"mat-label"),d(48,"\u5931\u4E1A\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),E(49,"input",31),s(50,"span",18),d(51,"%"),l()()()(),s(52,"div",22)(53,"mat-form-field")(54,"mat-label"),d(55),l(),E(56,"input",32),s(57,"span",18),d(58,"\u5143"),l(),s(59,"mat-autocomplete",24,3)(61,"mat-option",25),d(62),l(),I(63,ek,2,2,"mat-option",25),I(64,tk,2,2,"mat-option",25),s(65,"mat-option",25),d(66),l(),s(67,"mat-option",25),d(68,"\u4E0D\u7F34\u7EB3\uFF1A0\u5143"),l()()(),s(69,"mat-form-field",29)(70,"mat-label"),d(71,"\u516C\u79EF\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),E(72,"input",33),s(73,"span",18),d(74,"%"),l()(),s(75,"mat-form-field",34)(76,"mat-label"),d(77,"\u4E2A\u4EBA\u8865\u5145\u516C\u79EF\u91D1\u6BD4\u4F8B"),l(),E(78,"input",35),s(79,"span",18),d(80,"%"),l()(),s(81,"mat-form-field",34)(82,"mat-label"),d(83,"\u4F01\u4E1A\u8865\u5145\u516C\u79EF\u91D1\u6BD4\u4F8B"),l(),E(84,"input",36),s(85,"span",18),d(86,"%"),l()()(),s(87,"div",37)(88,"mat-form-field")(89,"mat-label"),d(90),l(),E(91,"input",38),s(92,"mat-autocomplete",39,4),de(94,nk,2,2,"mat-option",25,ba),l(),s(96,"span",18),d(97,"\u5143"),l()(),s(98,"mat-form-field",19)(99,"mat-label"),d(100),l(),E(101,"input",40),s(102,"mat-autocomplete",39,5),de(104,ik,2,2,"mat-option",25,ba),l(),s(106,"span",18),d(107,"\u5143"),l()(),s(108,"mat-form-field",19)(109,"mat-label"),d(110),l(),E(111,"input",41),s(112,"mat-autocomplete",39,6),de(114,ak,2,2,"mat-option",25,ba),l(),s(116,"span",18),d(117,"\u5143"),l()(),s(118,"mat-form-field",29)(119,"mat-label"),d(120),l(),E(121,"input",42),s(122,"span",18),d(123,"\u5143"),l()(),s(124,"mat-form-field",19)(125,"mat-label"),d(126),l(),s(127,"input",43),R("ngModelChange",function(a){Ce(e);let o=y().form,r=y();return we(r.resetConflict(a,o,r.templates.housingLoanInterest.conflictWith||""))}),l(),s(128,"mat-autocomplete",39,7),de(130,ok,2,2,"mat-option",25,ba),l(),s(132,"span",18),d(133,"\u5143"),l()(),s(134,"mat-form-field",19)(135,"mat-label"),d(136),l(),s(137,"input",44),R("ngModelChange",function(a){Ce(e);let o=y().form,r=y();return we(r.resetConflict(a,o,r.templates.renting.conflictWith||""))}),l(),s(138,"mat-autocomplete",39,8),de(140,rk,2,2,"mat-option",25,ba),l(),s(142,"span",18),d(143,"\u5143"),l()(),s(144,"mat-form-field",19)(145,"mat-label"),d(146),l(),E(147,"input",45),s(148,"mat-autocomplete",39,9),de(150,sk,2,2,"mat-option",25,ba),l(),s(152,"span",18),d(153,"\u5143"),l()(),s(154,"mat-form-field",34)(155,"mat-label"),d(156,"\u4F01\u4E1A\u5E74\u91D1(\u4E2A\u4EBA4%\u9650\u989D)"),l(),E(157,"input",46),s(158,"span",18),d(159,"\u5143"),l()(),s(160,"mat-form-field",29)(161,"mat-label"),d(162,"\u4F01\u4E1A\u5E74\u91D1\u516C\u53F8\u7F34\u7EB3"),l(),E(163,"input",47),s(164,"span",18),d(165,"\u5143"),l()(),s(166,"mat-form-field",19)(167,"mat-label"),d(168),l(),E(169,"input",48),s(170,"mat-autocomplete",39,10),de(172,lk,2,2,"mat-option",25,ba),l(),s(174,"span",18),d(175,"\u5143"),l()(),s(176,"mat-form-field",29)(177,"mat-label"),d(178,"\u5176\u4ED6\u6263\u9664\u9879"),l(),E(179,"input",49),s(180,"span",18),d(181,"\u5143"),l()()(),s(182,"p"),d(183),V(184,"number"),V(185,"number"),V(186,"number"),V(187,"number"),l(),s(188,"p"),d(189),V(190,"number"),V(191,"number"),V(192,"number"),V(193,"number"),V(194,"number"),V(195,"number"),l(),s(196,"p"),d(197),V(198,"number"),V(199,"number"),V(200,"number"),V(201,"number"),V(202,"number"),l(),s(203,"div",50)(204,"button",51),R("click",function(){Ce(e);let a=y(),o=a.form,r=a.index,u=y();return we(u.onUpdateMeta(o.value,r))}),d(205," \u66F4\u65B0 "),l()()()}if(t&2){let e=ye(24),n=ye(60),a=ye(93),o=ye(103),r=ye(113),u=ye(129),p=ye(139),h=ye(149),f=ye(171),g=y(),v=g.form,C=g.income,M=g.index,b=y();_("formGroup",v),m(5),A("data-testid","input-monthly-salary-"+(M+1)),m(6),A("data-testid","input-monthly-bonus-"+(M+1)),m(3),A("data-testid","toggle-new-pay-cycle-"+(M+1)),m(5),J(b.templates.insuranceBase.label),m(),_("placeholder",b.templates.insuranceBase.placeholder)("matAutocomplete",e),m(5),_("value",v.controls.monthSalary==null?null:v.controls.monthSalary.value),m(),Ue("\u5F53\u524D\u6708\u85AA\uFF1A",v.controls.monthSalary==null?null:v.controls.monthSalary.value,"\u5143(\u4E0D\u8D85\u4E0A\u9650",b.getInsuranceTopForMonth(M+1),"\u5143) "),m(),T((v.controls.yearBeforeLastAvgSalary==null?null:v.controls.yearBeforeLastAvgSalary.value)>0?27:-1),m(),T((v.controls.lastYearAvgSalary==null?null:v.controls.lastYearAvgSalary.value)>0?28:-1),m(),_("value",b.getMinimumWageForMonth(M+1)),m(),w("\u6700\u4F4E\u5DE5\u8D44\u6807\u51C6\uFF1A",b.getMinimumWageForMonth(M+1),"\u5143"),m(),_("value",0),m(24),J(b.templates.housingFundBase.label),m(),_("placeholder",b.templates.housingFundBase.placeholder)("matAutocomplete",n),m(5),_("value",v.controls.monthSalary==null?null:v.controls.monthSalary.value),m(),Ue("\u5F53\u524D\u6708\u85AA\uFF1A",v.controls.monthSalary==null?null:v.controls.monthSalary.value,"\u5143(\u4E0D\u8D85\u4E0A\u9650",b.getHousingFundTopForMonth(M+1),"\u5143) "),m(),T((v.controls.yearBeforeLastAvgSalary==null?null:v.controls.yearBeforeLastAvgSalary.value)>0?63:-1),m(),T((v.controls.lastYearAvgSalary==null?null:v.controls.lastYearAvgSalary.value)>0?64:-1),m(),_("value",b.getMinimumWageForMonth(M+1)),m(),w("\u6700\u4F4E\u5DE5\u8D44\u6807\u51C6\uFF1A",b.getMinimumWageForMonth(M+1),"\u5143"),m(),_("value",0),m(11),A("data-testid","input-supplementary-housing-fund-rate-"+(M+1)),m(6),A("data-testid","input-supplementary-housing-fund-employer-rate-"+(M+1)),m(4),Ie("width",b.templates.infantCare.width),m(2),Ue("",b.templates.infantCare.label,"",b.labelSuffix),m(),_("placeholder",b.templates.infantCare.placeholder)("matAutocomplete",a),m(3),ue(b.templates.infantCare.options),m(4),Ie("width",b.templates.childEducation.width),m(2),Ue("",b.templates.childEducation.label,"",b.labelSuffix),m(),_("placeholder",b.templates.childEducation.placeholder)("matAutocomplete",o),m(3),ue(b.templates.childEducation.options),m(4),Ie("width",b.templates.continuingEducation.width),m(2),Ue("",b.templates.continuingEducation.label,"",b.labelSuffix),m(),_("placeholder",b.templates.continuingEducation.placeholder)("matAutocomplete",r),m(3),ue(b.templates.continuingEducation.options),m(6),w("\u5927\u75C5\u533B\u7597(\u6C47\u7B97)",b.labelSuffix),m(4),Ie("width",b.templates.housingLoanInterest.width),m(2),Ue("",b.templates.housingLoanInterest.label,"",b.labelSuffix),m(),_("placeholder",b.templates.housingLoanInterest.placeholder)("matAutocomplete",u),m(3),ue(b.templates.housingLoanInterest.options),m(4),Ie("width",b.templates.renting.width),m(2),Ue("",b.templates.renting.label,"",b.labelSuffix),m(),_("placeholder",b.templates.renting.placeholder)("matAutocomplete",p),m(3),ue(b.templates.renting.options),m(4),Ie("width",b.templates.elderlyCare.width),m(2),Ue("",b.templates.elderlyCare.label,"",b.labelSuffix),m(),_("placeholder",b.templates.elderlyCare.placeholder)("matAutocomplete",h),m(3),ue(b.templates.elderlyCare.options),m(16),Ie("width",b.templates.privatePension.width),m(2),Ue("",b.templates.privatePension.label,"",b.labelSuffix),m(),_("placeholder",b.templates.privatePension.placeholder)("matAutocomplete",f),m(3),ue(b.templates.privatePension.options),m(11),Zu(" \u4E2A\u4EBA\u4E09\u9669\u603B\u8D39\uFF1A",Ct(184,88,C.insuranceFullCost,"0.0-3"),"\uFF0C \u793E\u4FDD\uFF1A",Ct(185,91,C.insuranceCosts.endowment,"0.0-3"),"\uFF0C \u533B\u4FDD\uFF1A",Ct(186,94,C.insuranceCosts.health,"0.0-3"),"\uFF0C \u5931\u4E1A\uFF1A",Ct(187,97,C.insuranceCosts.unemployment,"0.0-3")," "),m(6),jo(" \u516C\u53F8\u4E94\u9669\u603B\u8D39\uFF1A",Ct(190,100,C.employerCosts.insuranceFull,"0.0-3"),"\uFF0C \u793E\u4FDD\uFF1A",Ct(191,103,C.employerCosts.insurance.endowment,"0.0-3"),"\uFF0C \u533B\u4FDD\uFF1A",Ct(192,106,C.employerCosts.insurance.health,"0.0-3"),"\uFF0C \u5931\u4E1A\uFF1A",Ct(193,109,C.employerCosts.insurance.unemployment,"0.0-3"),"\uFF0C \u5DE5\u4F24\uFF1A",Ct(194,112,C.employerCosts.insurance.occupationalInjury,"0.0-3"),"\uFF0C \u751F\u80B2\uFF1A",Ct(195,115,C.employerCosts.insurance.birth,"0.0-3")," "),m(8),zo(" \u7D2F\u8BA1\u7A0E\u524D\u6536\u5165\uFF1A",Ct(198,118,C.accumulatedSalary,"0.0-2"),"\u5143\uFF0C \u7D2F\u8BA1\u6263\u9664\uFF1A",Ct(199,121,C.accumulatedDeduction,"0.0-2"),"\u5143\uFF0C \u7D2F\u8BA1\u4E13\u9879\u9644\u52A0\u6263\u9664\uFF1A",Ct(200,124,C.accumulatedSpecialDeduction,"0.0-2"),"\u5143\uFF0C \u7D2F\u8BA1\u5176\u4ED6\u6263\u9664\uFF1A",Ct(201,127,C.accumulatedExtraDeduction,"0.0-2"),"\u5143\uFF0C \u5E94\u7EB3\u7A0E\u6240\u5F97\u989D\uFF1A",Ct(202,130,C.accumulatedSalary-C.accumulatedDeduction-C.accumulatedSpecialDeduction-C.accumulatedExtraDeduction,"0.0-2"),"\u5143 "),m(7),_("disabled",v.invalid),A("data-testid","btn-update-month-"+(M+1))}}function dk(t,i){if(t&1&&I(0,ck,206,133,"form",15),t&2){let e=i.form;T(e?0:-1)}}var Ub=(()=>{class t{constructor(){this.templates=dc,this.labelSuffix=wb,this.cityRecipe=null,this.updateMeta=new O,this.changeChartMonth=new O,this.detailForms=[],this.previousValues=[],this.fb=c(io),this.dialog=c(hn),this.expandedMonths=new Set,this.trackIncome=(e,n)=>n.actualMonth}ngOnInit(){this.monthlyMetas$.subscribe(e=>{e&&e.length>0?this.detailForms=this.buildDetailForms(e,this.cityRecipe):this.detailForms=[]})}onPanelOpened(e){this.expandedMonths.add(e),this.onChangeChartMonth(e)}onPanelClosed(e){this.expandedMonths.delete(e)}getInsuranceTopForMonth(e){if(this.cityRecipe?.policies&&this.calculationYear){let n=ma(this.cityRecipe,this.calculationYear,e);if(n)return Array.isArray(n.insuranceBaseRange)?n.insuranceBaseRange[1]:n.insuranceBaseRange.endowment[1]}return 0}getHousingFundTopForMonth(e){if(this.cityRecipe?.policies&&this.calculationYear){let n=ma(this.cityRecipe,this.calculationYear,e);if(n)return n.housingFundBaseRange[1]}return 0}getMinimumWageForMonth(e){if(this.cityRecipe?.policies&&this.calculationYear){let n=ma(this.cityRecipe,this.calculationYear,e);if(n)return n.minimumWage}return 0}onUpdateMeta(e,n){let o=this.detailForms[n].value,r=this.previousValues[n]||{},u=this.getChangedFields(o,r);if(u.length>0&&n<this.detailForms.length-1){let p=u.map(f=>({fieldPath:f,value:this.getNestedValue(o,f)}));this.dialog.open(Hb,{width:"500px",data:{monthIndex:n,changedFields:p}}).afterClosed().subscribe(f=>{if(this.previousValues[n]=JSON.parse(JSON.stringify(o)),f)for(let g=n+1;g<this.detailForms.length;g++){let v=this.detailForms[g];p.forEach(({fieldPath:C,value:M})=>{let b=this.getFormControl(v,C);b&&(b.setValue(M,{emitEvent:!1}),this.previousValues[g]||(this.previousValues[g]={}),this.setNestedValue(this.previousValues[g],C,M))}),this.updateMeta.emit({meta:v.value,index:g})}this.updateMeta.emit({meta:e,index:n})})}else this.previousValues[n]=JSON.parse(JSON.stringify(o)),this.updateMeta.emit({meta:e,index:n})}getChangedFields(e,n,a=""){let o=[];for(let r in e){let u=a?`${a}.${r}`:r;typeof e[r]=="object"&&e[r]!==null&&!Array.isArray(e[r])?o.push(...this.getChangedFields(e[r],n[r]||{},u)):e[r]!==n[r]&&(this.shouldExcludeFromSync(u)||o.push(u))}return o}shouldExcludeFromSync(e){return["monthlyBonus","newPayCycle"].includes(e)}getNestedValue(e,n){return n.split(".").reduce((a,o)=>a?.[o],e)}setNestedValue(e,n,a){let o=n.split("."),r=o.pop(),u=o.reduce((p,h)=>(p[h]||(p[h]={}),p[h]),e);u[r]=a}getFormControl(e,n){let a=n.split("."),o=e;for(let r of a)if(o=o.get(r),!o)break;return o}onChangeChartMonth(e){this.changeChartMonth.emit(e+1)}scrollToChart(){this.scroll$.next()}resetConflict(e,n,a){e>0&&n.get(a)?.setValue(0)}buildDetailForms(e,n){return e.map((o,r)=>{let u=r+1,p=null;n?.policies&&this.calculationYear&&(p=ma(n,this.calculationYear,u));let h=this.fb.group({monthSalary:[o.salary,Z.required],monthlyBonus:[0,Z.required],newPayCycle:[o.newPayCycle],insuranceBase:[o.insuranceBase,Z.required],lastYearAvgSalary:[o.lastYearAvgSalary||0],yearBeforeLastAvgSalary:[o.yearBeforeLastAvgSalary||0],insuranceRate:this.fb.group({endowment:[(p?.employee.insuranceRate?.endowment??o.insuranceRate.endowment)*100,Z.required],health:[(p?.employee.insuranceRate?.health??o.insuranceRate.health)*100,Z.required],unemployment:[(p?.employee.insuranceRate?.unemployment??o.insuranceRate.unemployment)*100,Z.required]}),housingFundBase:[o.housingFundBase,Z.required],housingFundRate:[o.housingFundRate*100,Z.required],supplementaryHousingFundRate:[(o.supplementaryHousingFundRate||0)*100,Z.required],supplementaryHousingFundEmployerRate:[(o.supplementaryHousingFundEmployerRate||0)*100,Z.required],extraDeduction:this.fb.group({infantCare:[o.extraDeduction.infantCare||0,Z.required],childEducation:[o.extraDeduction.childEducation,Z.required],continuingEducation:[o.extraDeduction.continuingEducation,Z.required],seriousMedicalExpense:[o.extraDeduction.seriousMedicalExpense,Z.required],housingLoanInterest:[o.extraDeduction.housingLoanInterest,Z.required],renting:[o.extraDeduction.renting,Z.required],elderlyCare:[o.extraDeduction.elderlyCare,Z.required],enterprisePensionFromEmployee:[o.extraDeduction.enterprisePensionFromEmployee,Z.required],enterprisePensionFromEmployer:[o.extraDeduction.enterprisePensionFromEmployer,Z.required],privatePension:[o.extraDeduction.privatePension||0,Z.required],other:[o.extraDeduction.other,Z.required]})});return h.get("extraDeduction.enterprisePensionFromEmployee")?.valueChanges.subscribe(f=>{h.get("extraDeduction.enterprisePensionFromEmployer")?.setValue(f||0,{emitEvent:!1})}),this.previousValues[r]=JSON.parse(JSON.stringify(h.value)),h})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-monthly-results"]],inputs:{clear:"clear",monthlyIncomes$:"monthlyIncomes$",monthlyMetas$:"monthlyMetas$",cityRecipe:"cityRecipe",calculationYear:"calculationYear",scroll$:"scroll$"},outputs:{updateMeta:"updateMeta",changeChartMonth:"changeChartMonth"},decls:4,vars:3,consts:[["detailForm",""],["panel",""],["insuranceBase2","matAutocomplete"],["housingFundBase2","matAutocomplete"],["infantCare","matAutocomplete"],["childEducation","matAutocomplete"],["continuingEducation","matAutocomplete"],["housingLoanInterest","matAutocomplete"],["renting","matAutocomplete"],["elderlyCare","matAutocomplete"],["privatePension","matAutocomplete"],["data-testid","monthly-results-accordion",3,"animationend"],[3,"expanded"],[3,"opened","closed","expanded"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","flex-column",3,"formGroup"],[1,"ml-md-3","d-flex","flex-wrap","align-items-center"],["matInput","","type","number","placeholder","10000","formControlName","monthSalary","min","0"],["matTextSuffix",""],[1,"ml-3"],["matInput","","type","number","placeholder","0","formControlName","monthlyBonus","min","0"],["formControlName","newPayCycle",1,"ml-3"],[1,"ml-md-3","d-flex","flex-wrap"],["matInput","","type","number","formControlName","insuranceBase","min","0",3,"placeholder","matAutocomplete"],["panelWidth","250"],[3,"value"],["formGroupName","insuranceRate",1,"ml-3"],[2,"width","120px"],["matInput","","type","number","placeholder","0","formControlName","endowment","min","0"],[1,"ml-3",2,"width","120px"],["matInput","","type","number","placeholder","0","formControlName","health","min","0"],["matInput","","type","number","placeholder","0","formControlName","unemployment","min","0"],["matInput","","type","number","formControlName","housingFundBase","min","0",3,"placeholder","matAutocomplete"],["matInput","","type","number","placeholder","0","formControlName","housingFundRate","min","0"],[1,"ml-3",2,"width","140px"],["matInput","","type","number","placeholder","0","formControlName","supplementaryHousingFundRate","min","0"],["matInput","","type","number","placeholder","0","formControlName","supplementaryHousingFundEmployerRate","min","0"],["formGroupName","extraDeduction",1,"ml-md-3","d-flex","flex-wrap"],["matInput","","type","number","formControlName","infantCare","min","0",3,"placeholder","matAutocomplete"],["panelWidth","200"],["matInput","","type","number","formControlName","childEducation","min","0",3,"placeholder","matAutocomplete"],["matInput","","type","number","formControlName","continuingEducation","min","0",3,"placeholder","matAutocomplete"],["matInput","","type","number","placeholder","0","formControlName","seriousMedicalExpense","min","0","matTooltip","\u5927\u75C5\u533B\u7597\u4F9D\u6CD5\u5728\u6B21\u5E74\u6C47\u7B97\u6E05\u7F34\u65F6\u636E\u5B9E\u6263\u9664","matTooltipPosition","above"],["matInput","","type","number","formControlName","housingLoanInterest","min","0",3,"ngModelChange","placeholder","matAutocomplete"],["matInput","","type","number","formControlName","renting","min","0",3,"ngModelChange","placeholder","matAutocomplete"],["matInput","","type","number","formControlName","elderlyCare","min","0",3,"placeholder","matAutocomplete"],["matInput","","type","number","placeholder","0","formControlName","enterprisePensionFromEmployee","min","0","matTooltip","\u6CD5\u5B9A\u7A0E\u524D\u6263\u9664\u9650\u989D\u4E3A\u672C\u4EBA\u6708\u85AA4%\u4E14\u4E0D\u8D85\u793E\u5E733\u500D","matTooltipPosition","above"],["matInput","","type","number","placeholder","0","formControlName","enterprisePensionFromEmployer","min","0"],["matInput","","type","number","formControlName","privatePension","min","0","matTooltip","\u6BCF\u5E74\u9650\u989D12000\u5143(\u6BCF\u67081000\u5143)\u7A0E\u524D\u636E\u5B9E\u6263\u9664","matTooltipPosition","above",3,"placeholder","matAutocomplete"],["matInput","","type","number","placeholder","0","formControlName","other","min","0"],[1,"mr-3","d-flex","justify-content-end"],["mat-raised-button","","color","primary","type","submit",3,"click","disabled"]],template:function(n,a){if(n&1&&(I(0,QF,4,1,"div"),V(1,"async"),ke(2,dk,1,1,"ng-template",null,0,Vi)),n&2){let o;T((o=!a.clear&&q(1,1,a.monthlyIncomes$))?0:-1,o)}},dependencies:[Pe,ji,_l,to,vi,na,Ja,eo,aa,ao,_n,ia,no,lc,_b,$r,Gr,Wt,Mn,bn,ra,ko,Fo,pt,Bt,ht,oc,Hr,sc,rc,Vt,Ur,Ii,Mt,sn,zc,Hi,jb],styles:["@media(max-width:991.98px){.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{transition:.15s ease-in-out}.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]{font-size:.8em}}"],data:{animation:[wc("listAnimation",[Dc("* <=> *",[Mc(":enter",[us({opacity:0,transform:"translateX(-20%)"}),Sc(100,[Ec(300,us({opacity:1,transform:"translateX(0)"}))])],{optional:!0})])])]}})}}return t})();function uk(t){t||(t=c(Yt));let i=new it(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(Me(i))}var du=class{source;destroyed=!1;destroyRef=c(Yt);constructor(i){this.source=i,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}subscribe(i){if(this.destroyed)throw new ce(953,!1);let e=this.source.pipe(uk(this.destroyRef)).subscribe({next:n=>i(n)});return{unsubscribe:()=>e.unsubscribe()}}};function he(t,i){return new du(t)}function $b(t){let i=tm(t);return new it(e=>{let n=i?.onDestroy(()=>e.complete()),a=t.subscribe(o=>e.next(o));return()=>{a.unsubscribe(),n?.()}})}var Gb=new x("NGX_ECHARTS_CONFIG"),uu=class{constructor(){this.subject=new Ri(1),this.subscriptions=new ge}doFilter(i){this.subject.next(i)}dispose(){this.subscriptions.unsubscribe()}notEmpty(i,e){this.subscriptions.add(this.subject.subscribe(n=>{if(n[i]){let a=n[i].currentValue;a!=null&&e(a)}}))}has(i,e){this.subscriptions.add(this.subject.subscribe(n=>{if(n[i]){let a=n[i].currentValue;e(a)}}))}notFirst(i,e){this.subscriptions.add(this.subject.subscribe(n=>{if(n[i]&&!n[i].isFirstChange()){let a=n[i].currentValue;e(a)}}))}notFirstAndEmpty(i,e){this.subscriptions.add(this.subject.subscribe(n=>{if(n[i]&&!n[i].isFirstChange()){let a=n[i].currentValue;a!=null&&e(a)}}))}},mc=(()=>{class t{constructor(){this.el=c(P),this.ngZone=c(W),this.config=c(Gb),this.options=Bn(null),this.theme=Bn(this.config.theme??null),this.initOpts=Bn(null),this.merge=Bn(null),this.autoResize=Bn(!0),this.loading=Bn(!1),this.loadingType=Bn("default"),this.loadingOpts=Bn(null),this.chartInit=Cc(),this.optionsError=Cc(),this.chartClick=he(this.createLazyEvent("click")),this.chartDblClick=he(this.createLazyEvent("dblclick")),this.chartMouseDown=he(this.createLazyEvent("mousedown")),this.chartMouseMove=he(this.createLazyEvent("mousemove")),this.chartMouseUp=he(this.createLazyEvent("mouseup")),this.chartMouseOver=he(this.createLazyEvent("mouseover")),this.chartMouseOut=he(this.createLazyEvent("mouseout")),this.chartGlobalOut=he(this.createLazyEvent("globalout")),this.chartContextMenu=he(this.createLazyEvent("contextmenu")),this.chartHighlight=he(this.createLazyEvent("highlight")),this.chartDownplay=he(this.createLazyEvent("downplay")),this.chartSelectChanged=he(this.createLazyEvent("selectchanged")),this.chartLegendSelectChanged=he(this.createLazyEvent("legendselectchanged")),this.chartLegendSelected=he(this.createLazyEvent("legendselected")),this.chartLegendUnselected=he(this.createLazyEvent("legendunselected")),this.chartLegendLegendSelectAll=he(this.createLazyEvent("legendselectall")),this.chartLegendLegendInverseSelect=he(this.createLazyEvent("legendinverseselect")),this.chartLegendScroll=he(this.createLazyEvent("legendscroll")),this.chartDataZoom=he(this.createLazyEvent("datazoom")),this.chartDataRangeSelected=he(this.createLazyEvent("datarangeselected")),this.chartGraphRoam=he(this.createLazyEvent("graphroam")),this.chartGeoRoam=he(this.createLazyEvent("georoam")),this.chartTreeRoam=he(this.createLazyEvent("treeroam")),this.chartTimelineChanged=he(this.createLazyEvent("timelinechanged")),this.chartTimelinePlayChanged=he(this.createLazyEvent("timelineplaychanged")),this.chartRestore=he(this.createLazyEvent("restore")),this.chartDataViewChanged=he(this.createLazyEvent("dataviewchanged")),this.chartMagicTypeChanged=he(this.createLazyEvent("magictypechanged")),this.chartGeoSelectChanged=he(this.createLazyEvent("geoselectchanged")),this.chartGeoSelected=he(this.createLazyEvent("geoselected")),this.chartGeoUnselected=he(this.createLazyEvent("geounselected")),this.chartAxisAreaSelected=he(this.createLazyEvent("axisareaselected")),this.chartBrush=he(this.createLazyEvent("brush")),this.chartBrushEnd=he(this.createLazyEvent("brushend")),this.chartBrushSelected=he(this.createLazyEvent("brushselected")),this.chartGlobalCursorTaken=he(this.createLazyEvent("globalcursortaken")),this.chartRendered=he(this.createLazyEvent("rendered")),this.chartFinished=he(this.createLazyEvent("finished")),this.animationFrameID=null,this.chart$=new Ri(1),this.resize$=new B,this.changeFilter=new uu,this.resizeObFired=!1,this.echarts=this.config.echarts}ngOnChanges(e){this.changeFilter.doFilter(e)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(Su(100,bu,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize()&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(e=>{for(let n of e)n.target===this.el.nativeElement&&(this.resizeObFired?this.animationFrameID=window.requestAnimationFrame(()=>{this.resize$.next()}):this.resizeObFired=!0)})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",e=>this.onOptionsChange(e)),this.changeFilter.notFirstAndEmpty("merge",e=>this.setOption(e)),this.changeFilter.has("loading",e=>this.toggleLoading(!!e)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(e){this.chart?e?this.chart.showLoading(this.loadingType(),this.loadingOpts()):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(n=>e?n.showLoading(this.loadingType(),this.loadingOpts()):n.hideLoading())}setOption(e,n){if(this.chart)try{this.chart.setOption(e,n)}catch(a){console.error(a),this.optionsError.emit(a)}}async refreshChart(){this.dispose(),await this.initChart()}createChart(){let e=this.el.nativeElement;if(window&&window.getComputedStyle){let n=window.getComputedStyle(e,null).getPropertyValue("height");(!n||n==="0px")&&(!e.style.height||e.style.height==="0px")&&(e.style.height="400px")}return this.ngZone.runOutsideAngular(()=>(typeof this.echarts=="function"?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:a})=>a(e,this.theme()??this.config?.theme,this.initOpts())))}async initChart(){await this.onOptionsChange(this.options());let e=this.merge();e&&this.chart&&this.setOption(e)}async onOptionsChange(e){e&&(this.chart?this.setOption(this.options(),!0):(this.chart=await this.createChart(),this.chart$.next(this.chart),this.chartInit.emit(this.chart),this.setOption(this.options(),!0)))}createLazyEvent(e){return $b(this.chartInit).pipe(lt(n=>new it(a=>(n.on(e,o=>this.ngZone.run(()=>a.next(o))),()=>{this.chart&&(this.chart.isDisposed()||n.off(e))}))))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=D({type:t,selectors:[["echarts"],["","echarts",""]],inputs:{options:[1,"options"],theme:[1,"theme"],initOpts:[1,"initOpts"],merge:[1,"merge"],autoResize:[1,"autoResize"],loading:[1,"loading"],loadingType:[1,"loadingType"],loadingOpts:[1,"loadingOpts"]},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartHighlight:"chartHighlight",chartDownplay:"chartDownplay",chartSelectChanged:"chartSelectChanged",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendLegendSelectAll:"chartLegendLegendSelectAll",chartLegendLegendInverseSelect:"chartLegendLegendInverseSelect",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartGraphRoam:"chartGraphRoam",chartGeoRoam:"chartGeoRoam",chartTreeRoam:"chartTreeRoam",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartGeoSelectChanged:"chartGeoSelectChanged",chartGeoSelected:"chartGeoSelected",chartGeoUnselected:"chartGeoUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartGlobalCursorTaken:"chartGlobalCursorTaken",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[ve]})}}return t})();function Wb(t){return{provide:Gb,useValue:t}}var mk=["chart"];function pk(t,i){t&1&&(s(0,"span",10),d(1,"\u6708\u85AA\u6263\u9664\u9879\u5206\u6790"),l())}function hk(t,i){if(t&1&&(s(0,"mat-option",7),d(1),l()),t&2){let e=i.$implicit;_("value",e),A("data-testid","option-chart-month-"+e),m(),J(e)}}function fk(t,i){if(t&1&&(d(0),V(1,"currency"),V(2,"currency"),V(3,"currency"),V(4,"currency"),V(5,"currency"),V(6,"currency")),t&2){let e=i,n=y();jo(" ",q(1,6,n[e-1].cashIncome)," (\u7A0E\u540E) + ",q(2,8,n[e-1].tax)," (\u4E2A\u7A0E) + ",q(3,10,n[e-1].insuranceFullCost)," (\u793E\u4FDD) + ",q(4,12,n[e-1].housingFund)," (\u516C\u79EF\u91D1) + ",q(5,14,n[e-1].extraDeduction.enterprisePensionFromEmployee)," (\u4F01\u4E1A\u5E74\u91D1) = ",q(6,16,n[e-1].salary)," (\u7A0E\u524D) ")}}function gk(t,i){t&1&&(s(0,"span"),d(1,"\u9009\u62E9\u4E00\u4E2A\u6708\u4EFD\u67E5\u770B\u8BE6\u60C5"),l())}function _k(t,i){if(t&1&&(s(0,"div",9),I(1,fk,7,18),V(2,"async"),Wu(3,gk,2,0,"span"),l()),t&2){let e,n=y(2);m(),T((e=q(2,1,n.selectedMonth$))?1:3,e)}}function bk(t,i){t&1&&(s(0,"span",13),d(1,"\u5E74\u5EA6\u6263\u9664\u9879\u5206\u6790"),l())}function vk(t,i){if(t&1&&(s(0,"div",12),d(1),V(2,"currency"),V(3,"currency"),V(4,"currency"),V(5,"currency"),V(6,"currency"),V(7,"currency"),l()),t&2){let e=i;m(),jo(" ",q(2,6,e.cashIncomeDeprecated)," (\u5168\u5E74\u7A0E\u540E) + ",q(3,8,e.totalSeparatedTax)," (\u5168\u5E74\u4E2A\u7A0E) + ",q(4,10,e.fullInsurance)," (\u5168\u5E74\u793E\u4FDD) + ",q(5,12,e.employee.housingFund)," (\u5168\u5E74\u516C\u79EF\u91D1) + ",q(6,14,e.employee.enterprisePension)," (\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1) = ",q(7,16,e.bookSalary+e.bonus)," (\u5168\u5E74\u603B\u6536\u5165) ")}}function yk(t,i){if(t&1&&(s(0,"mat-tab"),ke(1,bk,2,0,"ng-template",3),s(2,"mat-card-content"),E(3,"div",11),I(4,vk,8,18,"div",12),V(5,"async"),l()()),t&2){let e,n=y(2);m(3),_("options",i),m(),T((e=q(5,2,n.summary$))?4:-1,e)}}function xk(t,i){t&1&&(s(0,"span",16),d(1,"\u5E74\u5EA6\u6536\u5165\u5206\u6790"),l())}function Ck(t,i){if(t&1&&(s(0,"div",15),d(1),V(2,"currency"),V(3,"currency"),V(4,"currency"),V(5,"currency"),V(6,"currency"),l()),t&2){let e=i;m(),zo(" ",q(2,5,e.postTaxSalary)," (\u5168\u5E74\u5DE5\u8D44\u73B0\u91D1\u6536\u5165) + ",q(3,7,e.postTaxBonus)," (\u5168\u5E74\u7A0E\u540E\u5956\u91D1) + ",q(4,9,e.fullHousingFund)," (\u5168\u5E74\u516C\u79EF\u91D1) + ",q(5,11,e.employee.enterprisePensionFull)," (\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1) = ",q(6,13,e.totalIncomeDeprecated)," (\u5168\u5E74\u7EFC\u5408\u8D27\u5E01\u6536\u5165) ")}}function wk(t,i){if(t&1&&(s(0,"mat-tab"),ke(1,xk,2,0,"ng-template",3),s(2,"mat-card-content"),E(3,"div",14),I(4,Ck,7,15,"div",15),V(5,"async"),l()()),t&2){let e,n=y(2);m(3),_("options",i),m(),T((e=q(5,2,n.summary$))?4:-1,e)}}function Ek(t,i){if(t&1){let e=$e();s(0,"mat-card",1,0)(2,"mat-tab-group",2)(3,"mat-tab"),ke(4,pk,2,0,"ng-template",3),s(5,"mat-card-header",4),E(6,"mat-card-title"),s(7,"mat-form-field",5)(8,"mat-label"),d(9,"\u6708\u4EFD"),l(),s(10,"mat-select",6),V(11,"async"),R("selectionChange",function(a){Ce(e);let o=y();return we(o.onChangeChartMonth(a.value))}),de(12,hk,2,3,"mat-option",7,Kt),l()()(),s(14,"mat-card-content"),E(15,"div",8),I(16,_k,4,3,"div",9),V(17,"async"),l()(),I(18,yk,6,4,"mat-tab"),V(19,"async"),I(20,wk,6,4,"mat-tab"),V(21,"async"),l()()}if(t&2){let e,n,a,o=y();m(10),_("value",q(11,5,o.selectedMonth$)),m(2),ue(o.months),m(3),_("options",i),m(),T((e=q(17,7,o.monthlyIncomes$))?16:-1,e),m(2),T((n=q(19,9,o.annualDeductionChartOption$))?18:-1,n),m(2),T((a=q(21,11,o.annualIncomeChartOption$))?20:-1,a)}}var Yb=(()=>{class t{constructor(){this.changeChartMonth=new O,this.chart=null,this.months=Array.from({length:12},(e,n)=>n+1)}ngOnInit(){this.initializeChartOptions(),this.scroll$.subscribe(()=>{this.scrollToChart()})}onChangeChartMonth(e){this.changeChartMonth.emit(e)}initializeChartOptions(){this.deductionChartOption$=ya([this.monthlyIncomes$,this.selectedMonth$]).pipe(se(([e,n])=>!!e&&e.length>0),xe(([e,n])=>{let a=e[n-1],o=[{value:a.cashIncome,name:"\u5B9E\u53D1\u5DE5\u8D44"},{value:a.housingFund,name:"\u4F4F\u623F\u516C\u79EF\u91D1"},{value:a.insuranceCosts.endowment,name:"\u517B\u8001\u4FDD\u9669"},{value:a.insuranceCosts.health,name:"\u533B\u7597\u4FDD\u9669"},{value:a.tax,name:"\u4E2A\u4EBA\u6240\u5F97\u7A0E"},{value:a.insuranceCosts.unemployment,name:"\u5931\u4E1A\u4FDD\u9669"},{value:a.extraDeduction.enterprisePensionFromEmployee,name:"\u4F01\u4E1A\u5E74\u91D1"}];return{tooltip:{trigger:"item",formatter:function(r){let u=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${r.seriesName} <br/>${r.name}: ${u.format(r.value)} (${r.percent}%)`}},legend:{orient:"vertical",right:10,data:o.map(r=>r.name)},series:[{name:"\u6708\u85AA\u5206\u914D",type:"pie",startAngle:-45,avoidLabelOverlap:!0,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},emphasis:{label:{show:!0,fontSize:20,fontWeight:"bold"}},label:{padding:4,minMargin:8,formatter:function(r){let u=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${r.name}:
${u.format(r.value)} (${r.percent}%)`}},data:o}]}})),this.annualDeductionChartOption$=this.summary$.pipe(se(e=>!!e),xe(e=>{let n=[{value:e.cashIncomeDeprecated,name:"\u5168\u5E74\u7A0E\u540E"},{value:e.employee.housingFund,name:"\u5168\u5E74\u516C\u79EF\u91D1"},{value:e.fullInsurance,name:"\u5168\u5E74\u793E\u4FDD"},{value:e.totalSeparatedTax,name:"\u5168\u5E74\u4E2A\u7A0E"},{value:e.employee.enterprisePension,name:"\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1"}];return{tooltip:{trigger:"item",formatter:function(a){let o=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${a.seriesName} <br/>${a.name}: ${o.format(a.value)} (${a.percent}%)`}},legend:{orient:"vertical",right:10,data:n.map(a=>a.name)},series:[{name:"\u5E74\u85AA\u5206\u914D",type:"pie",startAngle:-45,avoidLabelOverlap:!0,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},emphasis:{label:{show:!0,fontSize:20,fontWeight:"bold"}},label:{padding:4,minMargin:8,formatter:function(a){let o=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${a.name}:
${o.format(a.value)} (${a.percent}%)`}},data:n}]}})),this.annualIncomeChartOption$=this.summary$.pipe(se(e=>!!e),xe(e=>{let n=[{value:e.postTaxSalary,name:"\u5168\u5E74\u5DE5\u8D44\u73B0\u91D1\u6536\u5165"},{value:e.postTaxBonus,name:"\u5168\u5E74\u7A0E\u540E\u5956\u91D1"},{value:e.fullHousingFund,name:"\u5168\u5E74\u516C\u79EF\u91D1"},{value:e.employee.enterprisePensionFull,name:"\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1"}];return{tooltip:{trigger:"item",formatter:function(a){let o=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${a.seriesName} <br/>${a.name}: ${o.format(a.value)} (${a.percent}%)`}},legend:{orient:"vertical",right:10,data:n.map(a=>a.name)},series:[{name:"\u5E74\u5EA6\u6536\u5165\u5206\u6790",type:"pie",startAngle:-45,avoidLabelOverlap:!0,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},emphasis:{label:{show:!0,fontSize:20,fontWeight:"bold"}},label:{padding:4,minMargin:8,formatter:function(a){let o=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${a.name}:
${o.format(a.value)} (${a.percent}%)`}},data:n}]}}))}scrollToChart(){setTimeout(()=>{this.chart&&this.chart.nativeElement.scrollIntoView({behavior:"smooth",block:"nearest"})},500)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-summary-charts"]],viewQuery:function(n,a){if(n&1&&Se(mk,5,P),n&2){let o;z(o=j())&&(a.chart=o.first)}},inputs:{clear:"clear",monthlyIncomes$:"monthlyIncomes$",summary$:"summary$",selectedMonth$:"selectedMonth$",scroll$:"scroll$"},outputs:{changeChartMonth:"changeChartMonth"},decls:2,vars:3,consts:[["chart",""],["appearance","outlined","data-testid","summary-charts-card",1,"calc-result","mb-4"],["data-testid","charts-tab-group"],["mat-tab-label",""],[1,"d-flex","justify-content-between","align-items-center"],["appearance","outline",1,"dense-xs",2,"width","150px"],["data-testid","select-chart-month",3,"selectionChange","value"],[3,"value"],["echarts","","data-testid","echarts-monthly-deduction",1,"chart-container",2,"height","400px","width","100%",3,"options"],["data-testid","text-monthly-formula",1,"text-center","mt-2"],["data-testid","tab-monthly-deduction"],["echarts","","data-testid","echarts-annual-deduction",1,"chart-container",2,"height","400px","width","100%",3,"options"],["data-testid","text-annual-deduction-formula",1,"text-center","mt-2"],["data-testid","tab-annual-deduction"],["echarts","","data-testid","echarts-annual-income",1,"chart-container",2,"height","400px","width","100%",3,"options"],["data-testid","text-annual-income-formula",1,"text-center","mt-2"],["data-testid","tab-annual-income"]],template:function(n,a){if(n&1&&(I(0,Ek,22,13,"mat-card",1),V(1,"async")),n&2){let o;T((o=!a.clear&&q(1,1,a.deductionChartOption$))?0:-1,o)}},dependencies:[Pe,In,kn,Ai,Fi,Si,Lo,Yr,ha,Bo,Wt,Mn,bn,Ro,To,Vt,mc,sn,Hi],styles:[".chart-container[_ngcontent-%COMP%]{width:100%;height:400px}@media(max-width:767.98px){.calc-result[_ngcontent-%COMP%]{padding:0}}"]})}}return t})();var qb=(()=>{class t{generateCsvContent(e,n,a="\u5168\u56FD",o=new Date().getFullYear()){let r=["\u6708\u4EFD","\u7A0E\u524D\u8D26\u9762\u5DE5\u8D44(\u5143)","\u4E94\u9669\u4E2A\u4EBA\u7F34\u8D39(\u5143)","\u516C\u79EF\u91D1\u4E2A\u4EBA\u7F34\u8D39(\u5143)","\u4E2A\u4EBA\u8865\u5145\u516C\u79EF\u91D1(\u5143)","\u4F01\u4E1A\u8865\u5145\u516C\u79EF\u91D1(\u5143)","\u4E13\u9879\u9644\u52A0\u6263\u9664(\u5143)","\u5E94\u7A0E\u6240\u5F97\u989D(\u5143)","\u5F53\u6708\u9884\u7F34\u4E2A\u7A0E(\u5143)","\u7A0E\u540E\u5230\u624B\u73B0\u91D1(\u5143)","\u4F01\u4E1A\u793E\u4FDD\u6210\u672C(\u5143)","\u4F01\u4E1A\u603B\u6210\u672C(\u5143)"],u=[];e.forEach((f,g)=>{u.push([`${f.actualMonth||g+1}\u6708`,f.salary.toFixed(2),f.insuranceFullCost.toFixed(2),f.housingFund.toFixed(2),(f.supplementaryHousingFund||0).toFixed(2),(f.employerCosts.supplementaryHousingFund||0).toFixed(2),f.fullExtraDeduction.toFixed(2),f.accumulatedTaxQuota.toFixed(2),f.tax.toFixed(2),f.cashIncome.toFixed(2),f.employerCosts.insuranceFull.toFixed(2),f.employerCosts.full.toFixed(2)])});let p=e.reduce((f,g)=>f+(g.fullExtraDeduction||0),0);if(u.push(["\u5168\u5E74\u85AA\u8D44\u5408\u8BA1",n.bookSalary.toFixed(2),(n.employee.endowmentInsurance+n.employee.healthInsurance).toFixed(2),n.employee.housingFund.toFixed(2),(n.employee.supplementaryHousingFund||0).toFixed(2),(n.employerCosts.supplementaryHousingFund||0).toFixed(2),p.toFixed(2),"-",n.prepaidTax.toFixed(2),n.postTaxSalary.toFixed(2),(n.employerCosts.full-n.bookIncome).toFixed(2),n.employerCosts.full.toFixed(2)]),n.bonus>0&&u.push(["\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1",n.bonus.toFixed(2),"0.00","0.00","0.00","0.00","0.00",n.bonus.toFixed(2),n.bonusTax.toFixed(2),n.postTaxBonus.toFixed(2),"0.00",n.bonus.toFixed(2)]),n.annualTaxSettlement){let f=n.annualTaxSettlement.settlementType==="refund"?`\u9884\u8BA1\u6C47\u7B97\u9000\u7A0E: \xA5${n.annualTaxSettlement.amount.toFixed(2)}`:n.annualTaxSettlement.settlementType==="supplement"?`\u9884\u8BA1\u6C47\u7B97\u8865\u7A0E: \xA5${n.annualTaxSettlement.amount.toFixed(2)}`:"\u6C47\u7B97\u65E0\u9700\u9000\u8865";u.push(["\u6C47\u7B97\u6E05\u7F34\u9884\u6D4B",f,"","","","","","","","","",""])}return"\uFEFF"+[`"${o}\u5E74\u85AA\u7A0E\u660E\u7EC6\u6D4B\u7B97\u8868 - ${a}"`,r.join(","),...u.map(f=>f.map(g=>`"${g}"`).join(","))].join(`\r
`)}downloadCsv(e,n,a="\u6D4B\u7B97\u7ED3\u679C",o=new Date().getFullYear()){let r=this.generateCsvContent(e,n,a,o),u=new Blob([r],{type:"text/csv;charset=utf-8;"}),p=URL.createObjectURL(u),h=document.createElement("a");h.setAttribute("href",p),h.setAttribute("download",`\u85AA\u7A0E\u660E\u7EC6\u8868_${a}_${o}.csv`),document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(p)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Dk=(t,i)=>({"alert-success border-success":t,"alert-warning border-warning":i}),Mk=(t,i)=>({"text-success":t,"text-warning":i});function Sk(t,i){if(t&1&&(s(0,"div",7)(1,"div",41)(2,"mat-icon",42),d(3),l(),s(4,"div")(5,"div",43),d(6),s(7,"span",44),d(8),V(9,"currency"),l()(),s(10,"div",45),d(11),l()()()()),t&2){let e=y();m(),_("ngClass",Ho(9,Dk,e.annualTaxSettlement.settlementType==="refund",e.annualTaxSettlement.settlementType==="supplement")),m(),_("ngClass",Ho(12,Mk,e.annualTaxSettlement.settlementType==="refund",e.annualTaxSettlement.settlementType==="supplement")),m(),w(" ",e.annualTaxSettlement.settlementType==="refund"?"savings":"warning_amber"," "),m(3),w(" ",e.annualTaxSettlement.settlementType==="refund"?"\u5E74\u5EA6\u6C47\u7B97\u9884\u8BA1\u53EF\u9000\u7A0E\uFF1A":"\u5E74\u5EA6\u6C47\u7B97\u9884\u8BA1\u9700\u8865\u7A0E\uFF1A"," "),m(),_("ngClass",e.annualTaxSettlement.settlementType==="refund"?"text-success":"text-danger"),m(),w(" ",q(9,7,e.annualTaxSettlement.amount)," "),m(3),w(" ",e.annualTaxSettlement.hint," ")}}function Ak(t,i){if(t&1){let e=$e();s(0,"mat-card",1,0)(2,"div",2)(3,"h3",3)(4,"mat-icon",4),d(5,"assessment"),l(),s(6,"span"),d(7,"\u5E74\u5EA6\u85AA\u7A0E\u7EFC\u5408\u6C47\u603B"),l()(),s(8,"button",5),R("click",function(){let a=Ce(e),o=y();return we(o.onExportCsv(a))}),s(9,"mat-icon",6),d(10,"download"),l(),s(11,"span"),d(12,"\u5BFC\u51FA 12 \u4E2A\u6708\u660E\u7EC6\u62A5\u8868 (CSV)"),l()()(),I(13,Sk,12,15,"div",7),s(14,"mat-list",8)(15,"mat-list-item")(16,"mat-icon",9),d(17,"money"),l(),s(18,"div",10),d(19,"\u5168\u5E74\u8D26\u9762\u85AA\u8D44\u6536\u5165"),l(),s(20,"div",11),d(21),V(22,"currency"),l()(),s(23,"mat-list-item")(24,"mat-icon",12),d(25,"money"),l(),s(26,"div",10),d(27,"\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6536\u5165(\u5355\u72EC\u8BA1\u7A0E)"),l(),s(28,"div",13),d(29),V(30,"currency"),V(31,"currency"),l()(),s(32,"mat-list-item")(33,"mat-icon",14),d(34,"redeem"),l(),s(35,"div",10),d(36,"\u5168\u5E74\u516C\u79EF\u91D1\u7F34\u7EB3\u91D1\u989D"),l(),s(37,"div",15),d(38),V(39,"currency"),l()(),s(40,"mat-list-item")(41,"mat-icon",16),d(42,"monetization_on"),l(),s(43,"div",10),d(44,"\u5168\u5E74\u9884\u7F34\u7A0E\u989D"),l(),s(45,"div",17),d(46),V(47,"currency"),l()(),s(48,"mat-list-item")(49,"mat-icon",18),d(50,"monetization_on"),l(),s(51,"div",10),d(52,"\u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D"),l(),s(53,"div",19),d(54),V(55,"currency"),l()(),s(56,"mat-list-item")(57,"mat-icon",20),d(58,"monetization_on"),l(),s(59,"div",10),d(60,"\u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D\uFF08\u5206\u5F00\u8BA1\u7B97\uFF09"),l(),s(61,"div",21),d(62),V(63,"currency"),l()(),s(64,"mat-list-item")(65,"mat-icon",22),d(66,"savings"),l(),s(67,"div",10),d(68,"\u5168\u5E74\u7A0E\u540E\u6536\u5165"),l(),s(69,"div",23),d(70),V(71,"currency"),l()(),s(72,"mat-list-item")(73,"mat-icon",24),d(74,"savings"),l(),s(75,"div",10),d(76),l(),s(77,"div",25),d(78),V(79,"currency"),l()(),s(80,"mat-list-item")(81,"mat-icon",26),d(82,"savings"),l(),s(83,"div",10),d(84,"\u5168\u5E74\u73B0\u91D1\u6536\u5165"),l(),s(85,"div",27),d(86),V(87,"currency"),l()(),s(88,"mat-list-item")(89,"mat-icon",28),d(90,"savings"),l(),s(91,"div",10),d(92),l(),s(93,"div",29),d(94),V(95,"currency"),l()(),s(96,"mat-list-item")(97,"mat-icon",30),d(98,"savings"),l(),s(99,"div",10),d(100,"\u5168\u5E74\u7EFC\u5408\u8D27\u5E01\u6536\u5165"),l(),s(101,"div",31),d(102),V(103,"currency"),l()(),s(104,"mat-list-item")(105,"mat-icon",32),d(106,"savings"),l(),s(107,"div",10),d(108),l(),s(109,"div",33),d(110),V(111,"currency"),l()(),s(112,"mat-list-item")(113,"mat-icon",12),d(114,"redeem"),l(),s(115,"div",10),d(116,"\u4E2A\u4EBA\u517B\u8001\u4FDD\u9669\u7F34\u7EB3\u603B\u989D"),l(),s(117,"div",34),d(118),V(119,"currency"),l()(),s(120,"mat-list-item")(121,"mat-icon",12),d(122,"redeem"),l(),s(123,"div",10),d(124,"\u4E2A\u4EBA\u533B\u4FDD\u7F34\u7EB3\u603B\u989D"),l(),s(125,"div",35),d(126),V(127,"currency"),l()(),s(128,"mat-list-item")(129,"mat-icon",36),d(130,"redeem"),l(),s(131,"div",10),d(132,"\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u7F34\u7EB3\u603B\u989D"),l(),s(133,"div",37),d(134),V(135,"currency"),l()(),s(136,"mat-list-item")(137,"mat-icon",38),d(138,"redeem"),l(),s(139,"div",10),d(140,"\u5168\u5E74\u4E2A\u4EBA\u517B\u8001\u91D1\u7F34\u7EB3\u603B\u989D"),l(),s(141,"div",39),d(142),V(143,"currency"),l()(),s(144,"mat-list-item")(145,"mat-icon",12),d(146,"payments"),l(),s(147,"div",10),d(148,"\u516C\u53F8\u6210\u672C"),l(),s(149,"div",40),d(150),V(151,"currency"),l()()()()}if(t&2){let e=i,n=y();m(13),T(e.annualTaxSettlement&&e.annualTaxSettlement.settlementType!=="none"?13:-1),m(8),w(" ",q(22,22,e.bookSalary)," "),m(8),Ue(" ",q(30,24,e.bonus)," (",q(31,26,e.bonusTax),") "),m(9),w(" ",q(39,28,e.fullHousingFund)," "),m(8),w(" ",q(47,30,e.prepaidTax)," "),m(8),w(" ",q(55,32,e.theoreticalTax)," "),m(8),w(" ",q(63,34,e.totalSeparatedTax)," "),m(8),w(" ",q(71,36,e.taxedIncome)," "),m(6),w(" \u5168\u5E74\u7A0E\u540E\u6536\u5165\uFF08\u975E\u5408\u5E76 - ",n.nonMergeTaxCalculationEndDate,"\u6B62\uFF09 "),m(2),w(" ",q(79,38,e.taxedIncomeDeprecated)," "),m(8),w(" ",q(87,40,e.cashIncome)," "),m(6),w(" \u5168\u5E74\u73B0\u91D1\u6536\u5165\uFF08\u975E\u5408\u5E76 - ",n.nonMergeTaxCalculationEndDate,"\u6B62\uFF09 "),m(2),w(" ",q(95,42,e.cashIncomeDeprecated)," "),m(8),w(" ",q(103,44,e.totalIncome)," "),m(6),w(" \u5168\u5E74\u7EFC\u5408\u8D27\u5E01\u6536\u5165\uFF08\u975E\u5408\u5E76 - ",n.nonMergeTaxCalculationEndDate,"\u6B62\uFF09 "),m(2),w(" ",q(111,46,e.totalIncomeDeprecated)," "),m(8),w(" ",q(119,48,e.employee.endowmentInsurance)," "),m(8),w(" ",q(127,50,e.employee.healthInsurance)," "),m(8),w(" ",q(135,52,e.employee.enterprisePensionFull)," "),m(8),w(" ",q(143,54,e.employee.privatePension)," "),m(8),w(" ",q(151,56,e.employerCosts.full)," ")}}var Kb=(()=>{class t{constructor(){this.monthlyIncomes=[],this.cityLabel="\u5168\u56FD",this.year=new Date().getFullYear(),this.nonMergeTaxCalculationEndDate=yl,this.exportService=c(qb)}onExportCsv(e){this.exportService.downloadCsv(this.monthlyIncomes,e,this.cityLabel,this.year)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-summary-details"]],inputs:{clear:"clear",summary$:"summary$",monthlyIncomes:"monthlyIncomes",cityLabel:"cityLabel",year:"year"},decls:2,vars:3,consts:[["summary",""],["appearance","outlined","data-testid","summary-details-card",1,"calc-result","mb-3"],[1,"d-flex","justify-content-between","align-items-center","p-3","border-bottom","flex-wrap","gap-2"],[1,"m-0","font-weight-bold","text-dark","d-flex","align-items-center"],[1,"mr-2","text-primary"],["mat-flat-button","","color","primary","data-testid","btn-export-csv",3,"click"],[1,"mr-1"],[1,"px-3","pt-3"],[1,"summary"],["matTooltip","\u5168\u5E74\u8D26\u9762\u85AA\u8D44\u6536\u5165 = \u6BCF\u6708\u85AA\u8D44\u603B\u548C","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemTitle",""],["matListItemLine","","data-testid","summary-book-salary",1,"figure"],["matListItemIcon",""],["matListItemLine","","data-testid","summary-bonus",1,"figure"],["matTooltip","\u5168\u5E74\u516C\u79EF\u91D1\u7F34\u7EB3\u91D1\u989D = \u6BCF\u6708\u516C\u79EF\u91D1\u7F34\u7EB3\u91D1\u989D\u603B\u548C\uFF08\u542B\u4E2A\u4EBA\u57FA\u672C/\u8865\u5145\u516C\u79EF\u91D1\u53CA\u4F01\u4E1A\u57FA\u672C/\u8865\u5145\u516C\u79EF\u91D1\uFF09","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-full-housing-fund",1,"figure"],["matTooltip","\u5168\u5E74\u9884\u7F34\u7A0E\u989D = \u6BCF\u6708\u9884\u7F34\u7A0E\u989D\u603B\u548C","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-prepaid-tax",1,"figure"],["matTooltip","\u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D = \u6574\u4F53\u8BA1\u7B97\u7A0E\u989D(\u5168\u5E74\u8D26\u9762\u85AA\u8D44\u6536\u5165 + \u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6536\u5165)","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-theoretical-tax",1,"figure"],["matTooltip","\u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D\uFF08\u5206\u5F00\u8BA1\u7B97\uFF09 = \u5168\u5E74\u9884\u7F34\u7A0E\u989D + \u5355\u72EC\u8BA1\u7B97\u7A0E\u989D(\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6536\u5165)","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-total-separated-tax",1,"figure"],["matTooltip","\u5168\u5E74\u7A0E\u540E\u6536\u5165 = \u5168\u5E74\u8D26\u9762\u85AA\u8D44\u6536\u5165 + \u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6536\u5165 - \u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-taxed-income",1,"figure"],["matTooltip","\u5168\u5E74\u7A0E\u540E\u6536\u5165\uFF08\u975E\u5408\u5E76\uFF09 = \u5168\u5E74\u8D26\u9762\u85AA\u8D44\u6536\u5165 + \u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6536\u5165 - \u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D\uFF08\u5206\u5F00\u8BA1\u7B97\uFF09","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-taxed-income-deprecated",1,"figure"],["matTooltip","\u5168\u5E74\u73B0\u91D1\u6536\u5165 = \u5168\u5E74\u7A0E\u540E\u6536\u5165 - \u5168\u5E74\u793E\u4FDD\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D - \u5168\u5E74\u516C\u79EF\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D - \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-cash-income",1,"figure"],["matTooltip","\u5168\u5E74\u73B0\u91D1\u6536\u5165\uFF08\u975E\u5408\u5E76\uFF09 = \u5168\u5E74\u7A0E\u540E\u6536\u5165\uFF08\u975E\u5408\u5E76\uFF09 - \u5168\u5E74\u793E\u4FDD\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D - \u5168\u5E74\u516C\u79EF\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D - \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-cash-income-deprecated",1,"figure"],["matTooltip","\u5168\u5E74\u7EFC\u5408\u8D27\u5E01\u6536\u5165 = \u5168\u5E74\u73B0\u91D1\u6536\u5165 + \u5168\u5E74\u516C\u79EF\u91D1\u7F34\u7EB3\u603B\u989D + \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u7F34\u7EB3\u603B\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-total-income",1,"figure"],["matTooltip","\u5168\u5E74\u7EFC\u5408\u8D27\u5E01\u6536\u5165\uFF08\u975E\u5408\u5E76\uFF09 = \u5168\u5E74\u73B0\u91D1\u6536\u5165\uFF08\u975E\u5408\u5E76\uFF09 + \u5168\u5E74\u516C\u79EF\u91D1\u7F34\u7EB3\u603B\u989D + \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u7F34\u7EB3\u603B\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-total-income-deprecated",1,"figure"],["matListItemLine","","data-testid","summary-employee-endowment",1,"figure"],["matListItemLine","","data-testid","summary-employee-health",1,"figure"],["matTooltip","\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u7F34\u7EB3\u603B\u989D = \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D + \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u516C\u53F8\u7F34\u7EB3\u603B\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-employee-enterprise-pension",1,"figure"],["matTooltip","\u5168\u5E74\u4E2A\u4EBA\u517B\u8001\u91D1\u7F34\u7EB3\u603B\u989D\uFF08\u4E2A\u4EBA\u81EA\u613F\u5EFA\u7ACB\u3001\u5C01\u95ED\u8FD0\u884C\u3001\u5E02\u573A\u5316\u6295\u8D44\uFF0C\u6309\u5E7412000\u5143\u9650\u989D\u7A0E\u524D\u6263\u9664\uFF09","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-employee-private-pension",1,"figure"],["matListItemLine","","data-testid","summary-employer-costs",1,"figure"],["data-testid","annual-tax-settlement-card",1,"alert","mb-0","d-flex","align-items-center","rounded-lg","p-3","border",3,"ngClass"],[1,"mr-3","flex-shrink-0",2,"font-size","26px","width","26px","height","26px",3,"ngClass"],[1,"font-weight-bold",2,"font-size","15px"],[1,"font-weight-bold",3,"ngClass"],[1,"small","text-muted","mt-1"]],template:function(n,a){if(n&1&&(I(0,Ak,152,58,"mat-card",1),V(1,"async")),n&2){let o;T((o=!a.clear&&q(1,1,a.summary$))?0:-1,o)}},dependencies:[Pe,zi,In,kn,Ii,uc,No,lu,ga,fa,ht,St,ki,pa,pt,Bt,sn,Hi],styles:[".summary[_ngcontent-%COMP%]{--mdc-list-list-item-supporting-text-color: rgb(0 0 0 / 87%);--mdc-list-list-item-leading-icon-color: rgb(0 0 0 / 87%);display:flex;flex-wrap:wrap}.summary[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%]{font-size:1.5em;line-height:1.25em}.summary[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{overflow:hidden;flex:50% 0 0}  .summary-tooltip .mdc-tooltip__surface{max-width:unset}@media(max-width:767.98px){.calc-result[_ngcontent-%COMP%]{padding:0}.summary[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{flex-basis:100%}}"]})}}return t})();var Fk=(t,i)=>({"alert-danger border-danger":t,"alert-success border-success":i}),kk=()=>({minimumFractionDigits:2,maximumFractionDigits:2}),Ik=(t,i)=>i.range;function Tk(t,i){t&1&&(s(0,"span",19),d(1,"\u547D\u4E2D\u76F2\u533A"),l())}function Rk(t,i){t&1&&(s(0,"span",20),d(1,"\u6B63\u5E38\u533A\u95F4"),l())}function Ok(t,i){if(t&1&&d(0),t&2){let e=y(2);w(" ",e.trapResult==null?null:e.trapResult.warningMessage," ")}}function Pk(t,i){t&1&&d(0," \u5F53\u524D\u5E74\u7EC8\u5956\u5904\u4E8E\u5B89\u5168\u8BA1\u7A0E\u533A\u95F4\uFF0C\u672A\u89E6\u78B0\u7A0E\u7387\u8DC3\u5347\u76F2\u533A\u3002 ")}function Bk(t,i){if(t&1&&(s(0,"div",6)(1,"div",16)(2,"mat-icon",17),d(3),l(),s(4,"div",18),d(5),I(6,Tk,2,0,"span",19)(7,Rk,2,0,"span",20),l()(),s(8,"div",21),I(9,Ok,1,1)(10,Pk,1,0),l()()),t&2){let e=y();_("ngClass",Ho(6,Fk,e.trapResult==null?null:e.trapResult.isTrap,!(e.trapResult!=null&&e.trapResult.isTrap))),m(2),_("ngClass",e.trapResult!=null&&e.trapResult.isTrap?"text-danger":"text-success"),m(),w(" ",e.trapResult!=null&&e.trapResult.isTrap?"warning":"verified"," "),m(2),w(" \u5F53\u524D\u5E74\u7EC8\u5956\uFF1A\xA5",e.annualBonus.toLocaleString("zh-CN",Xt(9,kk))," "),m(),T(e.trapResult!=null&&e.trapResult.isTrap?6:7),m(3),T(e.trapResult!=null&&e.trapResult.isTrap?9:10)}}function Lk(t,i){t&1&&(s(0,"div",7)(1,"mat-icon",22),d(2,"info"),l(),s(3,"span"),d(4,"\u5F53\u524D\u672A\u5F55\u5165\u5E74\u7EC8\u5956\u3002\u5728\u4E0A\u65B9\u8868\u5355\u4E2D\u5F55\u5165\u5E74\u7EC8\u5956\u540E\uFF0C\u7CFB\u7EDF\u5C06\u81EA\u52A8\u68C0\u6D4B\u4E34\u754C\u70B9\u4E0E\u76F2\u533A\u98CE\u9669\u3002"),l()())}function Nk(t,i){if(t&1&&(s(0,"div",14)(1,"div",23)(2,"div",24),d(3),l(),s(4,"div",25),d(5," \u4E34\u754C\u5B89\u5168\u7EBF: "),s(6,"strong",26),d(7),l(),d(8),l()()()),t&2){let e=i.$implicit;m(3),w(" ",e.range," "),m(4),J(e.threshold),m(),w(" (",e.taxJump,") ")}}var Xb=(()=>{class t{constructor(){this.annualBonus=0,this.trapRangesDisplay=[{range:"36,001 ~ 38,566.67 \u5143",threshold:"36,000 \u5143",taxJump:"3% \u2192 10%"},{range:"144,001 ~ 160,500 \u5143",threshold:"144,000 \u5143",taxJump:"10% \u2192 20%"},{range:"300,001 ~ 318,333.33 \u5143",threshold:"300,000 \u5143",taxJump:"20% \u2192 25%"},{range:"420,001 ~ 447,500 \u5143",threshold:"420,000 \u5143",taxJump:"25% \u2192 30%"},{range:"660,001 ~ 706,538.46 \u5143",threshold:"660,000 \u5143",taxJump:"30% \u2192 35%"},{range:"960,001 ~ 1,120,000 \u5143",threshold:"960,000 \u5143",taxJump:"35% \u2192 45%"}]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-bonus-optimization-card"]],inputs:{optimizationResult:"optimizationResult",trapResult:"trapResult",annualBonus:"annualBonus"},decls:23,vars:1,consts:[["appearance","outlined","data-testid","bonus-optimization-card",1,"bonus-opt-card","mb-3"],[1,"d-flex","align-items-center","mb-2"],[1,"d-flex","align-items-center"],["color","primary",1,"mr-2"],[1,"m-0","font-weight-bold","text-dark",2,"font-size","1.15rem"],[1,"pt-2"],["data-testid","bonus-optimization-status-alert",1,"alert","rounded","p-3","mb-3","border",3,"ngClass"],[1,"alert","alert-light","border","rounded","p-3","mb-3","text-muted","small","d-flex","align-items-center"],[1,"trap-ranges-section","p-3","rounded","bg-light","border"],[1,"font-weight-bold","text-secondary","mb-3","d-flex","align-items-center","flex-wrap",2,"font-size","15px"],[1,"mr-1","text-primary",2,"font-size","20px","width","20px","height","20px"],[1,"text-dark","font-weight-bold"],[1,"text-muted","font-weight-normal","ml-2","small"],[1,"row","mx-0"],[1,"col-12","col-sm-6","col-md-4","p-1","mb-1"],[1,"text-muted","mt-2",2,"font-size","13px"],[1,"d-flex","align-items-center","mb-1"],[1,"mr-2","flex-shrink-0",3,"ngClass"],[1,"font-weight-bold",2,"font-size","15px"],[1,"badge","badge-danger","ml-2"],[1,"badge","badge-success","ml-2"],[1,"small","mt-1","text-muted"],[1,"mr-2","text-primary"],[1,"trap-chip","p-2","rounded","border","bg-white","h-100"],[1,"font-weight-bold","text-danger",2,"font-size","14.5px"],[1,"text-secondary","mt-1",2,"font-size","13px"],[1,"text-dark"]],template:function(n,a){n&1&&(s(0,"mat-card",0)(1,"mat-card-header",1)(2,"div",2)(3,"mat-icon",3),d(4,"analytics"),l(),s(5,"mat-card-title",4),d(6," \u5E74\u7EC8\u5956\u4E34\u754C\u70B9\u4E0E\u7A0E\u6536\u76F2\u533A\u5206\u6790 "),l()()(),s(7,"mat-card-content",5),I(8,Bk,11,10,"div",6)(9,Lk,5,0,"div",7),s(10,"div",8)(11,"div",9)(12,"mat-icon",10),d(13,"table_chart"),l(),s(14,"span",11),d(15,"\u5168\u56FD\u4E2A\u7A0E 6 \u5927\u65E0\u6548\u76F2\u533A\u901F\u67E5\u56FE\u8C31"),l(),s(16,"span",12),d(17,"\uFF08\u591A\u53D1\u53CD\u800C\u5C11\u5F97\uFF0C\u5E74\u7EC8\u5956\u5E94\u907F\u5F00\u6B64\u533A\u95F4\uFF09"),l()(),s(18,"div",13),de(19,Nk,9,3,"div",14,Ik),l(),s(21,"div",15),d(22," * \u653F\u7B56\u63D0\u793A\uFF1A\u6839\u636E\u8D22\u653F\u90E8\u516C\u544A\uFF0C\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6BCF\u7EB3\u7A0E\u5E74\u5EA6\u9650\u7528\u4E00\u6B21\uFF0C\u5355\u72EC\u8BA1\u7A0E\u4F18\u60E0\u6682\u5EF6\u7EED\u81F3 2027 \u5E74 12 \u6708 31 \u65E5\u3002 "),l()()()()),n&2&&(m(8),T(a.annualBonus>0?8:9),m(11),ue(a.trapRangesDisplay))},dependencies:[Pe,zi,In,kn,Ai,Fi,Si,ht,St,yi],styles:[".bonus-opt-card[_ngcontent-%COMP%]{border-color:#0000001f;border-radius:8px}.bonus-opt-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding-bottom:0}.trap-ranges-section[_ngcontent-%COMP%]{border-color:#e9ecef;background-color:#f8f9fa}.trap-chip[_ngcontent-%COMP%]{transition:all .2s ease-in-out;border-left:3px solid #dc3545!important}.trap-chip[_ngcontent-%COMP%]:hover{box-shadow:0 2px 6px #00000014}.extra-small[_ngcontent-%COMP%]{font-size:.75rem}.extra-small-icon[_ngcontent-%COMP%]{font-size:16px;line-height:16px;width:16px;height:16px}"]})}}return t})();function Vk(t,i){t&1&&bt(0,"div",2)}var zk=new x("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Zb=(()=>{class t{_elementRef=c(P);_ngZone=c(W);_changeDetectorRef=c(me);_renderer=c(be);_cleanupTransitionEnd;constructor(){let e=mr(),n=c(zk,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Qb(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Qb(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new O;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,a){n&2&&(A("aria-valuenow",a._isIndeterminate()?null:a.value)("mode",a.mode),Ge("mat-"+a.color),N("_mat-animation-noopable",a._isNoopAnimation)("mdc-linear-progress--animation-ready",!a._isNoopAnimation)("mdc-linear-progress--indeterminate",a._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ke],bufferValue:[2,"bufferValue","bufferValue",Ke],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,a){n&1&&(ze(0,"div",0),bt(1,"div",1),I(2,Vk,1,0,"div",2),qe(),ze(3,"div",3),bt(4,"span",4),qe(),ze(5,"div",5),bt(6,"span",4),qe()),n&2&&(m(),Ie("flex-basis",a._getBufferBarFlexBasis()),m(),T(a.mode==="buffer"?2:-1),m(),Ie("transform",a._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Qb(t,i=0,e=100){return Math.max(i,Math.min(e,t))}var Jb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ee]})}return t})();var pc=()=>({minimumFractionDigits:2,maximumFractionDigits:2}),e0=(t,i)=>i.actualMonth;function Hk(t,i){if(t&1&&(s(0,"div",26),d(1," \u26A1 \u8DF3\u6863 "),l()),t&2){let e=y().$implicit,n=y(3);_("matTooltip","\u672C\u6708\u89E6\u53D1\u7A0E\u7387\u8DF3\u6863\uFF1A"+n.formatRate(e.startRate)+" \u2192 "+n.formatRate(e.endRate))}}function Uk(t,i){if(t&1&&(s(0,"span"),d(1),l()),t&2){let e=y().$implicit,n=y(3);m(),Ue("",n.formatRate(e.startRate),"\u2192",n.formatRate(e.endRate))}}function $k(t,i){if(t&1&&(s(0,"span"),d(1),l()),t&2){let e=y().$implicit,n=y(3);m(),J(n.formatRate(e.endRate))}}function Gk(t,i){if(t&1){let e=$e();s(0,"div",25),R("click",function(){let a=Ce(e).$implicit,o=y(3);return we(o.onSelectMonth(a.actualMonth))}),I(1,Hk,2,1,"div",26),s(2,"div",27)(3,"span",28),d(4),l()(),s(5,"div",29),I(6,Uk,2,2,"span")(7,$k,2,1,"span"),l(),s(8,"div",30),d(9),l()()}if(t&2){let e=i.$implicit,n=y(3);N("selected",e.actualMonth===n.selectedMonth)("transition-node",e.isTransition),A("data-testid","timeline-node-"+e.actualMonth),m(),T(e.isTransition?1:-1),m(),_("ngClass",n.getRateColorClass(e.endRate)),m(2),w("",e.actualMonth,"\u6708"),m(),_("ngClass",n.getRateColorClass(e.endRate)),m(),T(e.isTransition?6:7),m(3),w(" \xA5",(e.accumulatedTaxQuota/1e4).toFixed(1),"w ")}}function Wk(t,i){if(t&1&&(s(0,"span",38),d(1),l()),t&2){let e=y(2).$implicit;m(),Ue(" (\u73AF\u6BD4\u589E\u52A0 +\xA5",e.taxDelta.toFixed(2),"\uFF0C\u589E\u5E45 ",(e.taxDeltaPercent*100).toFixed(0),"%) ")}}function Yk(t,i){if(t&1&&(s(0,"span",39),d(1),l()),t&2){let e=y(2).$implicit,n=y(4);m(),w(" (\u8F83\u4E0A\u6708\u51CF\u5C11 \xA5",n.Math.abs(e.cashDelta).toFixed(2),") ")}}function qk(t,i){if(t&1&&(s(0,"div",31)(1,"div",32)(2,"div",33)(3,"span",34),d(4),l(),s(5,"span",35),d(6),l()(),s(7,"ul",36)(8,"li",37),d(9," \u5F53\u6708\u4E2A\u7A0E\uFF1A"),s(10,"b",20),d(11),l(),I(12,Wk,2,2,"span",38),l(),s(13,"li",37),d(14," \u5230\u624B\u73B0\u91D1\uFF1A"),s(15,"b",20),d(16),l(),I(17,Yk,2,1,"span",39),l(),s(18,"li",40),d(19),s(20,"span",41),d(21),l(),d(22," \u8FB9\u9645\u7A0E\u7387\u6863\u4F4D\u3002 "),l()()()()),t&2){let e=y().$implicit,n=y(4);m(),A("data-testid","insight-card-"+e.actualMonth),m(3),Qu(" \u{1F680} ",e.actualMonth,"\u6708\u4EFD \xB7 \u7A0E\u7387\u8DF3\u6863 (",n.formatRate(e.startRate)," \u2192 ",n.formatRate(e.endRate),") "),m(2),w(" \u95E8\u69DB\u7A81\u7834 \xA5",e.thresholdCrossed==null?null:e.thresholdCrossed.toLocaleString()," "),m(5),w("\xA5",e.tax.toFixed(2)),m(),T(e.taxDelta>0?12:-1),m(4),w("\xA5",e.cashIncome.toFixed(2)),m(),T(e.cashDelta<0?17:-1),m(2),w(" \u5F71\u54CD\u8BC4\u4F30\uFF1A\u7D2F\u8BA1\u5E94\u7EB3\u7A0E\u6240\u5F97\u989D\u7A81\u7834 \xA5",e.thresholdCrossed==null?null:e.thresholdCrossed.toLocaleString(),"\uFF0C\u8FDB\u5165 "),m(2),J(n.formatRate(e.endRate))}}function Kk(t,i){if(t&1&&I(0,qk,23,11,"div",31),t&2){let e=i.$implicit;T(e.isTransition?0:-1)}}function Xk(t,i){if(t&1&&(s(0,"div",22),de(1,Kk,1,1,null,null,e0),l()),t&2){let e=y(3);m(),ue(e.timelineResult.monthlyAnalyses)}}function Qk(t,i){if(t&1&&(s(0,"div",23),d(1),l()),t&2){let e=y(3);m(),w(" \u{1F4A1} \u5F53\u524D\u85AA\u8D44\u6C34\u5E73\u5728\u5168\u5E74\u5404\u6708\u4EFD\u59CB\u7EC8\u5904\u4E8E\u540C\u4E00\u6863\u9636\u68AF\u7A0E\u7387 (",e.formatRate(e.timelineResult.highestBracketRate),")\uFF0C\u672A\u53D1\u751F\u7A0E\u7387\u8DF3\u6863\u8DC3\u8FC1\u3002 ")}}function Zk(t,i){if(t&1&&(s(0,"span",49),d(1),l()),t&2){let e=y(4);m(),w("(+\xA5",e.selectedAnalysis.taxDelta.toFixed(2),")")}}function Jk(t,i){if(t&1&&(s(0,"span",50),d(1),l()),t&2){let e=y(4);m(),w("(",e.selectedAnalysis.cashDelta.toFixed(2),")")}}function eI(t,i){if(t&1&&d(0),t&2){let e=y(4);w(" \u4E0B\u4E00\u6863\u95E8\u69DB: \xA5",e.selectedAnalysis.upperThreshold.toLocaleString()," ")}}function tI(t,i){t&1&&d(0," \u6700\u9AD8\u6863 (45%) ")}function nI(t,i){if(t&1&&(s(0,"span"),d(1),s(2,"b",58),d(3),l()()),t&2){let e=y(4);m(),w(" \u8DDD\u79BB\u4E0B\u4E00\u4E2A\u8DF3\u6863\u95E8\u69DB (\xA5",e.selectedAnalysis.upperThreshold.toLocaleString(),") \u5269\u4F59\u5B89\u5168\u989D\u5EA6\uFF1A "),m(2),w("\xA5",e.selectedAnalysis.distanceToNextThreshold.toLocaleString("zh-CN",Xt(2,pc)))}}function iI(t,i){t&1&&(s(0,"span",57),d(1,"\u5DF2\u8FBE\u5F53\u524D\u6700\u9AD8\u7A0E\u7387\u6863\u4F4D\u3002"),l())}function aI(t,i){if(t&1&&(s(0,"div",24)(1,"div",42)(2,"span",43),d(3),l(),s(4,"span",44),d(5),l()(),s(6,"div",45)(7,"div",46)(8,"div",47),d(9," \u6708\u5E95\u7D2F\u8BA1\u5E94\u7EB3\u7A0E\u6240\u5F97\u989D "),l(),s(10,"div",43),d(11),l()(),s(12,"div",46)(13,"div",47),d(14," \u5F53\u6708\u5E94\u7EB3\u4E2A\u7A0E "),l(),s(15,"div",48),d(16),I(17,Zk,2,1,"span",49),l()(),s(18,"div",46)(19,"div",47),d(20," \u5F53\u6708\u7A0E\u540E\u5230\u624B\u73B0\u91D1 "),l(),s(21,"div",34),d(22),I(23,Jk,2,1,"span",50),l()(),s(24,"div",51)(25,"div",47),d(26," \u5F53\u6708\u6709\u6548\u7A0E\u7387 (\u4E2A\u7A0E/\u85AA\u8D44) "),l(),s(27,"div",43),d(28),l()()(),s(29,"div",52)(30,"div",53)(31,"span"),d(32),l(),s(33,"span",41),d(34),l(),s(35,"span"),I(36,eI,1,1)(37,tI,1,0),l()(),E(38,"mat-progress-bar",54),s(39,"div",55)(40,"mat-icon",56),d(41,"lightbulb"),l(),I(42,nI,4,3,"span")(43,iI,2,0,"span",57),l()()()),t&2){let e=y(3);m(3),w(" \u{1F50D} ",e.selectedAnalysis.actualMonth,"\u6708\u4EFD \xB7 \u9636\u68AF\u6240\u5F97\u4E0E\u95E8\u69DB\u5B89\u5168\u4F59\u91CF "),m(2),Ue(" \u7B2C ",e.selectedAnalysis.bracketLevel," \u6863 (",e.formatRate(e.selectedAnalysis.endRate),") "),m(6),w(" \xA5",e.selectedAnalysis.accumulatedTaxQuota.toLocaleString("zh-CN",Xt(14,pc))," "),m(5),w(" \xA5",e.selectedAnalysis.tax.toLocaleString("zh-CN",Xt(15,pc))," "),m(),T(e.selectedAnalysis.taxDelta>0?17:-1),m(5),w(" \xA5",e.selectedAnalysis.cashIncome.toLocaleString("zh-CN",Xt(16,pc))," "),m(),T(e.selectedAnalysis.cashDelta<0?23:-1),m(5),w(" ",(e.selectedAnalysis.effectiveTaxRate*100).toFixed(2),"% "),m(4),w("\u5F53\u524D\u6863\u4F4D\u4E0B\u9650: \xA5",e.selectedAnalysis.lowerThreshold.toLocaleString()),m(2),w(" \u5F53\u524D\u6863\u4F4D\u6D88\u8017\u8FDB\u5EA6: ",e.selectedAnalysis.rangeProgressPercent.toFixed(1),"% "),m(2),T(e.selectedAnalysis.upperThreshold<1e7?36:37),m(2),_("value",e.selectedAnalysis.rangeProgressPercent),m(4),T(e.selectedAnalysis.distanceToNextThreshold>0?42:43)}}function oI(t,i){if(t&1&&(s(0,"div",13)(1,"div",14)(2,"div",15),de(3,Gk,10,11,"div",16,e0),l()(),s(5,"div",17)(6,"div",18)(7,"mat-icon",19),d(8,"flash_on"),l(),s(9,"span",20),d(10,"\u5173\u952E\u8DF3\u6863\u8F6C\u6298\u70B9\u51B2\u51FB\u6D1E\u5BDF"),l(),s(11,"span",21),d(12),l()(),I(13,Xk,3,0,"div",22)(14,Qk,2,1,"div",23),l(),I(15,aI,44,17,"div",24),l()),t&2){let e=y(2);m(3),ue(e.timelineResult.monthlyAnalyses),m(9),Ue("(\u5168\u5E74\u5171\u53D1\u751F ",e.timelineResult.transitionCount," \u6B21\u7A0E\u7387\u8DF3\u6863\uFF0C\u6700\u9AD8\u8FBE\u5230 ",e.formatRate(e.timelineResult.highestBracketRate)," \u6863\u4F4D)"),m(),T(e.timelineResult.transitionCount>0?13:14),m(2),T(e.selectedAnalysis?15:-1)}}function rI(t,i){if(t&1&&E(0,"div",12),t&2){let e=y(2);_("options",e.trendChartOption)}}function sI(t,i){if(t&1&&(s(0,"mat-card",0)(1,"mat-card-header",1)(2,"div",2)(3,"mat-icon",3),d(4,"timeline"),l(),s(5,"mat-card-title",4),d(6," \u9636\u68AF\u7A0E\u7387\u65F6\u5E8F\u5206\u6790 "),l(),s(7,"span",5),d(8," \uFF08\u7D2F\u8BA1\u9884\u6263\u6CD5\u7A0E\u7387\u6F14\u53D8\u4E0E\u8DF3\u6863\u51B2\u51FB\uFF09 "),l()()(),s(9,"mat-card-content",6)(10,"mat-tab-group",7)(11,"mat-tab",8),ke(12,oI,16,4,"ng-template",9),l(),s(13,"mat-tab",10)(14,"div",11),I(15,rI,1,1,"div",12),l()()()()()),t&2){let e=y();m(15),T(e.trendChartOption?15:-1)}}var t0=(()=>{class t{constructor(){this.monthlyIncomes=[],this.clear=!1,this.selectedMonth=1,this.changeSelectedMonth=new O,this.Math=Math,this.timelineResult=null,this.selectedAnalysis=null,this.trendChartOption=null}ngOnInit(){this.updateAnalysis()}ngOnChanges(e){(e.monthlyIncomes||e.clear)&&this.updateAnalysis(),e.selectedMonth&&this.updateSelectedAnalysis()}onSelectMonth(e){this.selectedMonth=e,this.updateSelectedAnalysis(),this.changeSelectedMonth.emit(e)}getRateColorClass(e){return e<=.03?"rate-level-1":e<=.1?"rate-level-2":e<=.2?"rate-level-3":e<=.25?"rate-level-4":e<=.3?"rate-level-5":e<=.35?"rate-level-6":"rate-level-7"}formatRate(e){return`${Math.round(e*100)}%`}updateAnalysis(){if(this.clear||!this.monthlyIncomes||this.monthlyIncomes.length===0){this.timelineResult=null,this.selectedAnalysis=null,this.trendChartOption=null;return}this.timelineResult=eb(this.monthlyIncomes),this.updateSelectedAnalysis(),this.buildTrendChartOption()}updateSelectedAnalysis(){if(!this.timelineResult||this.timelineResult.monthlyAnalyses.length===0){this.selectedAnalysis=null;return}let e=this.timelineResult.monthlyAnalyses.find(n=>n.actualMonth===this.selectedMonth);this.selectedAnalysis=e||this.timelineResult.monthlyAnalyses[0]}buildTrendChartOption(){if(!this.timelineResult||this.timelineResult.monthlyAnalyses.length===0){this.trendChartOption=null;return}let e=this.timelineResult.monthlyAnalyses,n=e.map(p=>`${p.actualMonth}\u6708`),a=e.map(p=>p.cashIncome),o=e.map(p=>p.tax),r=e.map(p=>Math.round(p.endRate*100)),u=e.filter(p=>p.isTransition).map(p=>({name:`${p.actualMonth}\u6708\u8DF3\u6863`,value:`${this.formatRate(p.startRate)}\u2192${this.formatRate(p.endRate)}`,xAxis:`${p.actualMonth}\u6708`,yAxis:Math.round(p.endRate*100)}));this.trendChartOption={tooltip:{trigger:"axis",axisPointer:{type:"cross"},formatter:p=>{if(!Array.isArray(p)||p.length===0)return"";let h=p[0].dataIndex,f=e[h];if(!f)return"";let g=`<div style="font-weight: bold; margin-bottom: 4px;">${f.actualMonth}\u6708\u4EFD \u85AA\u7A0E\u5206\u6790</div>`;return g+=`<div>\u8FB9\u9645\u7A0E\u7387\uFF1A<b style="color:#ff7043">${this.formatRate(f.endRate)}</b>${f.isTransition?` (\u26A1 \u53D1\u751F\u8DF3\u6863: ${this.formatRate(f.startRate)}\u2192${this.formatRate(f.endRate)})`:""}</div>`,g+=`<div>\u5F53\u6708\u4E2A\u7A0E\uFF1A\xA5${f.tax.toFixed(2)} ${f.taxDelta>0?`<span style="color:#e53935">(+\xA5${f.taxDelta.toFixed(2)})</span>`:""}</div>`,g+=`<div>\u5230\u624B\u73B0\u91D1\uFF1A\xA5${f.cashIncome.toFixed(2)} ${f.cashDelta<0?`<span style="color:#d32f2f">(${f.cashDelta.toFixed(2)})</span>`:""}</div>`,g+=`<div>\u7D2F\u8BA1\u5E94\u7EB3\u7A0E\u6240\u5F97\u989D\uFF1A\xA5${f.accumulatedTaxQuota.toFixed(2)}</div>`,f.distanceToNextThreshold>0&&(g+=`<div>\u8DDD\u4E0B\u6863\u95E8\u69DB (\xA5${f.upperThreshold.toLocaleString()}): \u5269 \xA5${f.distanceToNextThreshold.toFixed(2)}</div>`),g}},legend:{data:["\u5230\u624B\u73B0\u91D1(\u5143)","\u5F53\u6708\u4E2A\u7A0E(\u5143)","\u9002\u7528\u8FB9\u9645\u7A0E\u7387(%)"],bottom:0},grid:{left:"3%",right:"4%",bottom:"12%",top:"12%",containLabel:!0},xAxis:[{type:"category",data:n,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"\u91D1\u989D (\u5143)",axisLabel:{formatter:"\xA5{value}"}},{type:"value",name:"\u8FB9\u9645\u7A0E\u7387 (%)",min:0,max:45,interval:10,axisLabel:{formatter:"{value}%"}}],series:[{name:"\u5230\u624B\u73B0\u91D1(\u5143)",type:"line",smooth:!0,data:a,itemStyle:{color:"#42a5f5"}},{name:"\u5F53\u6708\u4E2A\u7A0E(\u5143)",type:"bar",data:o,itemStyle:{color:"#ef5350"}},{name:"\u9002\u7528\u8FB9\u9645\u7A0E\u7387(%)",type:"line",step:"end",yAxisIndex:1,data:r,itemStyle:{color:"#ff9800"},lineStyle:{width:3},markPoint:{symbol:"pin",symbolSize:46,data:u,itemStyle:{color:"#d32f2f"}}}]}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-tax-bracket-timeline"]],inputs:{monthlyIncomes:"monthlyIncomes",clear:"clear",selectedMonth:"selectedMonth"},outputs:{changeSelectedMonth:"changeSelectedMonth"},features:[ve],decls:1,vars:1,consts:[["appearance","outlined","data-testid","tax-bracket-timeline-card",1,"calc-result","mb-3"],[1,"d-flex","align-items-center","mb-2"],[1,"d-flex","align-items-center","flex-wrap"],["color","primary",1,"mr-2"],[1,"m-0","font-weight-bold","text-dark",2,"font-size","1.15rem"],[1,"small","text-muted","ml-2","font-weight-normal"],[1,"pt-2"],["mat-stretch-tabs","false","mat-align-tabs","start","animationDuration","0ms"],["label","\u65F6\u95F4\u8F74\u5206\u6790"],["matTabContent",""],["label","\u8D8B\u52BF\u56FE\u5206\u6790"],["data-testid","trend-chart-container",1,"trend-chart-tab-content","pt-3"],["echarts","",1,"trend-echarts",2,"height","380px","width","100%",3,"options"],[1,"timeline-tab-content","pt-3"],["data-testid","timeline-track",1,"timeline-track-container"],[1,"timeline-track"],[1,"timeline-node",3,"selected","transition-node"],[1,"transition-insights","mt-4"],[1,"font-weight-bold","text-secondary","mb-3","d-flex","align-items-center","flex-wrap",2,"font-size","15px"],[1,"mr-1","text-warning",2,"font-size","20px","width","20px","height","20px"],[1,"text-dark"],[1,"text-muted","font-weight-normal","ml-2","small"],[1,"row","g-3"],[1,"alert","alert-info","py-2","mb-0",2,"font-size","14px"],["data-testid","selected-month-detail",1,"month-detail-panel","mt-4","p-3","bg-light","rounded","border"],[1,"timeline-node",3,"click"],[1,"transition-badge",3,"matTooltip"],[1,"node-circle",3,"ngClass"],[1,"node-month"],[1,"node-rate-pill",3,"ngClass"],[1,"node-quota","text-muted","extra-small"],[1,"col-12","col-md-6","mb-2"],[1,"insight-card","p-3","rounded","bg-light","border"],[1,"d-flex","justify-content-between","align-items-center","mb-2"],[1,"font-weight-bold","text-primary",2,"font-size","15px"],[1,"badge","badge-warning","text-dark","px-2","py-1",2,"font-size","13px"],[1,"insight-list","mb-0","ps-3"],[1,"mb-1",2,"font-size","14px"],[1,"text-danger","font-weight-bold","ml-1"],[1,"text-danger","ml-1"],[1,"text-secondary",2,"font-size","13.5px"],[1,"font-weight-bold","text-dark"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"font-weight-bold","text-dark",2,"font-size","15px"],[1,"badge","badge-primary","px-2","py-1"],[1,"row","mx-0","mb-3","bg-white","p-3","rounded","border"],[1,"col-12","col-sm-6","col-md-3","mb-2","mb-md-0","px-2"],[1,"text-muted","extra-small","mb-1"],[1,"font-weight-bold","text-danger",2,"font-size","15px"],[1,"extra-small","font-weight-normal","text-danger"],[1,"extra-small","text-danger","font-weight-normal"],[1,"col-12","col-sm-6","col-md-3","px-2"],[1,"progress-section"],[1,"d-flex","justify-content-between","small","text-muted","mb-1"],["mode","determinate",1,"rounded",3,"value"],[1,"mt-2","small","text-muted","d-flex","align-items-center"],[1,"mr-1","extra-small-icon","text-warning"],[1,"text-warning"],[1,"text-success",2,"font-size","14px"]],template:function(n,a){n&1&&I(0,sI,16,1,"mat-card",0),n&2&&T(!a.clear&&a.timelineResult?0:-1)},dependencies:[Pe,zi,In,kn,Ai,Fi,Si,Lo,ru,ha,Bo,Jb,Zb,yi,ht,St,pt,ki,pa,mc],styles:['.tax-bracket-timeline-card[_ngcontent-%COMP%]{overflow:hidden;border-radius:8px;box-shadow:0 4px 12px #0000000d}.timeline-track-container[_ngcontent-%COMP%]{position:relative;overflow-x:auto;padding:38px 8px 14px}.timeline-track-container[_ngcontent-%COMP%]::-webkit-scrollbar{height:5px}.timeline-track-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:4px;background-color:#cfd8dc}.timeline-track[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;align-items:flex-end;width:100%}.timeline-track[_ngcontent-%COMP%]:before{position:absolute;z-index:1;top:45px;right:20px;left:20px;height:3px;content:"";background:#e0e0e0}.timeline-node[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;flex:1 1 0;min-width:44px;max-width:72px;padding-top:26px;cursor:pointer;transition:all .25s ease}.timeline-node[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.timeline-node.selected[_ngcontent-%COMP%]   .node-circle[_ngcontent-%COMP%]{transform:scale(1.08);box-shadow:0 0 0 3px #2196f359}.timeline-node.selected[_ngcontent-%COMP%]   .node-rate-pill[_ngcontent-%COMP%]{font-weight:700}.timeline-node.transition-node[_ngcontent-%COMP%]   .transition-badge[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse-badge 2s infinite ease-in-out}.transition-badge[_ngcontent-%COMP%]{font-size:10px;font-weight:700;position:absolute;z-index:3;top:0;left:50%;padding:1px 6px;white-space:nowrap;transform:translate(-50%);color:#fff;border-radius:10px;background:#ff9800;box-shadow:0 2px 4px #ff98004d}@keyframes _ngcontent-%COMP%_pulse-badge{0%,to{transform:translate(-50%) scale(1)}50%{transform:translate(-50%) scale(1.06)}}.node-circle[_ngcontent-%COMP%]{font-size:12px;font-weight:700;display:flex;justify-content:center;align-items:center;width:38px;height:38px;margin-bottom:6px;transition:all .2s ease;color:#333;border:3px solid #ccc;border-radius:50%;background:#fff;box-shadow:0 2px 4px #0000000f}.node-circle.rate-level-1[_ngcontent-%COMP%]{color:#2e7d32;border-color:#4caf50}.node-circle.rate-level-2[_ngcontent-%COMP%]{color:#1565c0;border-color:#2196f3}.node-circle.rate-level-3[_ngcontent-%COMP%]{color:#e65100;border-color:#ff9800}.node-circle.rate-level-4[_ngcontent-%COMP%]{color:#bf360c;border-color:#ff5722}.node-circle.rate-level-5[_ngcontent-%COMP%]{color:#6a1b9a;border-color:#9c27b0}.node-circle.rate-level-6[_ngcontent-%COMP%]{color:#ad1457;border-color:#e91e63}.node-circle.rate-level-7[_ngcontent-%COMP%]{color:#b71c1c;border-color:#f44336}.node-rate-pill[_ngcontent-%COMP%]{font-size:10.5px;margin-bottom:2px;padding:1px 6px;white-space:nowrap;color:#555;border-radius:8px;background:#f5f5f5}.node-rate-pill.rate-level-1[_ngcontent-%COMP%]{color:#2e7d32;background:#e8f5e9}.node-rate-pill.rate-level-2[_ngcontent-%COMP%]{color:#1565c0;background:#e3f2fd}.node-rate-pill.rate-level-3[_ngcontent-%COMP%]{color:#e65100;background:#fff3e0}.node-rate-pill.rate-level-4[_ngcontent-%COMP%]{color:#bf360c;background:#fbe9e7}.node-rate-pill.rate-level-5[_ngcontent-%COMP%]{color:#6a1b9a;background:#f3e5f5}.node-rate-pill.rate-level-6[_ngcontent-%COMP%]{color:#ad1457;background:#fce4ec}.node-rate-pill.rate-level-7[_ngcontent-%COMP%]{color:#b71c1c;background:#ffebee}.node-quota[_ngcontent-%COMP%]{font-size:10px;line-height:1.2}.insight-card[_ngcontent-%COMP%]{transition:all .2s ease;border-color:#e0e0e0;background:#fafafa}.insight-card[_ngcontent-%COMP%]:hover{background:#fff;box-shadow:0 3px 8px #0000000d}.insight-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;line-height:1.5;margin-bottom:4px}.month-detail-panel[_ngcontent-%COMP%]{background-color:#f8f9fa}.extra-small-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;vertical-align:middle}.trend-echarts[_ngcontent-%COMP%]{min-height:380px}@media(max-width:768px){.timeline-track[_ngcontent-%COMP%]{min-width:620px}}']})}}return t})();var n0=()=>[];function lI(t,i){if(t&1&&E(0,"app-bonus-optimization-card",6),t&2){let e=i;_("trapResult",e.bonusTaxTrap)("annualBonus",e.bonus)}}var i0=(()=>{class t{constructor(){this.store=c(Ql),this.http=c(wn),this.usePredefinedInsurancePercents=ne(!0),this.cityRecipe=ne(null),this.clear=ne(!1),this.selectedYear=new Date().getFullYear(),this.selectedMonth$=new Jn(1),this.scroll$=new Jn(void 0),this.monthlyMetasSubject$=new Jn([]),this.loadedRecipes=new Map}ngOnInit(){this.monthlyMetasSubject$=new Jn([]),this.monthlyMetas$=this.monthlyMetasSubject$.asObservable().pipe(se(e=>e.length>0)),this.monthlyIncomes$=this.monthlyMetas$.pipe(yn(300),se(e=>e.length>0),xe(e=>Or(e)),Oi(1)),this.summary$=ya([this.monthlyIncomes$,this.monthlyMetas$]).pipe(xe(([e,n])=>Kl(e,n[0].annualBonus)),Oi(1)),this.recipeIndex$=this.http.get("assets/recipes/index.json").pipe(ti(0),Oi(1)),this.recipeIndex$.subscribe(e=>{e.length>0&&!this.cityRecipe()&&this.selectRecipeItem(e[0])})}selectRecipeItem(e){if(this.loadedRecipes.has(e.file)){this.changeRecipe(this.loadedRecipes.get(e.file));return}this.http.get(`assets/recipes/${e.file}`).pipe(ti(0)).subscribe(n=>{this.loadedRecipes.set(e.file,n),this.changeRecipe(n)})}changeChartMonth(e){console.log(`Changing chart month to: ${e}`),this.selectedMonth$.next(e)}changeRecipe(e){this.cityRecipe.set(e)}changePredefineCondition(e){this.usePredefinedInsurancePercents.set(e)}clearResult(){this.clear.set(!0)}updateMeta(e,n){this.monthlyMetas$.pipe(at(1)).subscribe(a=>{if(a&&a.length>n){let o=[...a];o[n]=De(k({},o[n]),{salary:e.monthSalary+(e.monthlyBonus||0),insuranceBase:e.insuranceBase,housingFundBase:e.housingFundBase,housingFundRate:e.housingFundRate/100,supplementaryHousingFundRate:e.supplementaryHousingFundRate!==void 0?e.supplementaryHousingFundRate/100:0,supplementaryHousingFundEmployerRate:e.supplementaryHousingFundEmployerRate!==void 0?e.supplementaryHousingFundEmployerRate/100:0,insuranceRate:{endowment:e.insuranceRate.endowment/100,health:e.insuranceRate.health/100,unemployment:e.insuranceRate.unemployment/100},extraDeduction:e.extraDeduction,insuranceBaseOnLastMonth:e.insuranceBaseOnLastMonth,newPayCycle:e.newPayCycle}),this.monthlyMetasSubject$.next(o)}})}calculate(e){this.clear.set(!1);let n=this.buildMonthlyMetasFromPolicy(e);n[0].newPayCycle=!0,this.monthlyMetasSubject$.next(n)}buildMonthlyMetasFromPolicy(e){return Xl(this.cityRecipe(),e.year,e,e.useUniformPolicy)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-calculator"]],decls:12,vars:33,consts:[[3,"calculate","clearResult","changeRecipe","selectRecipeItem","changePredefineCondition","changeSelectedYear","usePredefinedInsurancePercents","cityRecipe","recipeIndex$"],[1,"row","mt-4"],[1,"col-lg-6","col-sm-12","mb-4","mb-md-0",3,"updateMeta","changeChartMonth","clear","monthlyIncomes$","monthlyMetas$","cityRecipe","scroll$","calculationYear"],[1,"col-lg-6"],[3,"changeChartMonth","clear","monthlyIncomes$","summary$","selectedMonth$","scroll$"],[3,"clear","summary$","monthlyIncomes","cityLabel","year"],[3,"trapResult","annualBonus"],[3,"changeSelectedMonth","clear","monthlyIncomes","selectedMonth"]],template:function(n,a){if(n&1&&(s(0,"app-calculator-form",0),R("calculate",function(r){return a.calculate(r)})("clearResult",function(){return a.clearResult()})("changeRecipe",function(r){return a.changeRecipe(r)})("selectRecipeItem",function(r){return a.selectRecipeItem(r)})("changePredefineCondition",function(r){return a.changePredefineCondition(r)})("changeSelectedYear",function(r){return a.selectedYear=r}),l(),s(1,"div",1)(2,"app-monthly-results",2),R("updateMeta",function(r){return a.updateMeta(r.meta,r.index)})("changeChartMonth",function(r){return a.changeChartMonth(r)}),l(),s(3,"div",3)(4,"app-summary-charts",4),R("changeChartMonth",function(r){return a.changeChartMonth(r)}),l(),E(5,"app-summary-details",5),V(6,"async"),I(7,lI,1,2,"app-bonus-optimization-card",6),V(8,"async"),s(9,"app-tax-bracket-timeline",7),V(10,"async"),V(11,"async"),R("changeSelectedMonth",function(r){return a.changeChartMonth(r)}),l()()()),n&2){let o,r;_("usePredefinedInsurancePercents",a.usePredefinedInsurancePercents())("cityRecipe",a.cityRecipe())("recipeIndex$",a.recipeIndex$),m(2),_("clear",a.clear())("monthlyIncomes$",a.monthlyIncomes$)("monthlyMetas$",a.monthlyMetas$)("cityRecipe",a.cityRecipe())("scroll$",a.scroll$)("calculationYear",a.selectedYear),m(2),_("clear",a.clear())("monthlyIncomes$",a.monthlyIncomes$)("summary$",a.summary$)("selectedMonth$",a.selectedMonth$)("scroll$",a.scroll$),m(),_("clear",a.clear())("summary$",a.summary$)("monthlyIncomes",q(6,23,a.monthlyIncomes$)||Xt(31,n0))("cityLabel",((o=a.cityRecipe())==null?null:o.city)||"\u5168\u56FD")("year",a.selectedYear),m(2),T((r=!a.clear()&&q(8,25,a.summary$))?7:-1,r),m(2),_("clear",a.clear())("monthlyIncomes",q(10,27,a.monthlyIncomes$)||Xt(32,n0))("selectedMonth",q(11,29,a.selectedMonth$)||1)}},dependencies:[Pe,zb,Ub,Yb,Kb,Xb,t0,sn],styles:["[_nghost-%COMP%]{display:block}.divider[_ngcontent-%COMP%]{height:50%;margin-top:25%}"]})}}return t})();var a0=(()=>{class t{constructor(){this.iconService=c(il),this.domSanitize=c(Wi)}init(e){if(!Array.isArray(e))throw new TypeError("Invalid input for IconRegistryInitService#init");e.forEach(n=>{n.literal&&(n.namespace?this.iconService.addSvgIconLiteralInNamespace(n.namespace,n.name,this.domSanitize.bypassSecurityTrustHtml(n.literal)):this.iconService.addSvgIconLiteral(n.name,this.domSanitize.bypassSecurityTrustHtml(n.literal))),n.url&&(n.namespace?this.iconService.addSvgIconInNamespace(n.namespace,n.name,this.domSanitize.bypassSecurityTrustResourceUrl(n.url)):this.iconService.addSvgIcon(n.name,this.domSanitize.bypassSecurityTrustResourceUrl(n.url)))})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var o0=[{name:"calculator",url:"assets/img/calculator.svg"}];var r0="salary_calculator_guide_shown",s0=(()=>{class t{constructor(){this.title="\u4E2A\u7A0E\u4E0E\u85AA\u8D44\u8BA1\u7B97\u5668",this.iconRegistryInit=c(a0),this.dialog=c(hn),this.platformId=c(ni),this.iconRegistryInit.init(o0)}ngOnInit(){ws(this.platformId)&&localStorage.getItem(r0)!=="true"&&this.dialog.open(Zl,{width:"720px",maxWidth:"92vw"}).afterClosed().subscribe(()=>{localStorage.setItem(r0,"true")})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=F({type:t,selectors:[["app-root"]],decls:2,vars:0,consts:[[1,"mat-elevation-z6"],[1,"p-3","px-sm-5","py-sm-4"]],template:function(n,a){n&1&&E(0,"app-navbar",0)(1,"app-calculator",1)},dependencies:[Pe,tb,i0,Mt],styles:["app-navbar[_ngcontent-%COMP%]{position:fixed;z-index:2;top:0;right:0;left:0}app-calculator[_ngcontent-%COMP%]{margin-top:53.5px}"]})}}return t})();var cI="@",dI=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(X);loadingSchedulerFn=c(uI,{optional:!0});_engine;constructor(e,n,a,o,r){this.doc=e,this.delegate=n,this.zone=a,this.animationType=o,this.moduleImpl=r}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-IDVQLOVO.js").then(a=>a),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(a=>{throw new ce(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:o})=>{this._engine=a(this.animationType,this.doc);let r=new o(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(e,n){let a=this.delegate.createRenderer(e,n);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let o=new mu(a);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(r=>{let u=r.createRenderer(e,n);o.use(u),this.scheduler??=this.injector.get(Iu,null,{optional:!0}),this.scheduler?.notify(10)}).catch(r=>{o.use(a)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){ns()};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),mu=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,n,a){this.delegate.insertBefore(i,e,n,a)}removeChild(i,e,n,a){this.delegate.removeChild(i,e,n,a)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,n,a){this.delegate.setAttribute(i,e,n,a)}removeAttribute(i,e,n){this.delegate.removeAttribute(i,e,n)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,n,a){this.delegate.setStyle(i,e,n,a)}removeStyle(i,e,n){this.delegate.removeStyle(i,e,n)}setProperty(i,e,n){this.shouldReplay(e)&&this.replay.push(a=>a.setProperty(i,e,n)),this.delegate.setProperty(i,e,n)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,n,a){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,n,a)),this.delegate.listen(i,e,n,a)}shouldReplay(i){return this.replay!==null&&i.startsWith(cI)}},uI=new x("");function l0(t="animations"){return yc("NgAsyncAnimations"),Vo([{provide:_t,useFactory:()=>new dI(c(Q),c(Jo),c(W),t)},{provide:Ca,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}function mI(t){let i=t;return 5}var pu=["zh",[["\u4E0A\u5348","\u4E0B\u5348"]],void 0,[["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"],["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"]],void 0,[["1","2","3","4","5","6","7","8","9","10","11","12"],["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"]],void 0,[["\u516C\u5143\u524D","\u516C\u5143"]],1,[6,0],["y/M/d","y\u5E74M\u6708d\u65E5",void 0,"y\u5E74M\u6708d\u65E5EEEE"],["HH:mm","HH:mm:ss","z HH:mm:ss","zzzz HH:mm:ss"],["{1} {0}",void 0,void 0,void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"CNY","\xA5","\u4EBA\u6C11\u5E01",{AUD:["AU$","$"],BYN:[void 0,"\u0440."],CNY:["\xA5"],ILR:["ILS"],JPY:["JP\xA5","\xA5"],PHP:[void 0,"\u20B1"],RUR:[void 0,"\u0440."],TWD:["NT$"],USD:["US$","$"],XXX:[]},"ltr",mI];pu[14]=["#,###0.###","#,##0%","\xA4#,###0.00","#E0"];Lm(pu);var c0={providers:[em(),Zc(),l0(),{provide:Aa,useValue:"zh"},{provide:cs,useValue:"\xA5"},Wb({echarts:()=>typeof window<"u"&&window.echarts?Promise.resolve(window.echarts):import("./chunk-63IZDSAP.js")})]};var d0={production:!0};d0.production&&void 0;qc(s0,c0).catch(t=>console.error(t));
