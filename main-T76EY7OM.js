import{$ as Vt,$a as ma,$b as pa,A as Kn,Aa as xu,Ab as F,Ac as mc,B as ac,Ba as Cu,Bb as Yr,C as zr,Ca as wu,Cb as w,Cc as Jr,D as oc,Da as Eu,Db as me,Dc as hc,E as uu,Ea as Du,Eb as Y,Ec as pc,F as wi,Fa as Su,Fb as at,Fc as fc,G as sa,Ga as Mu,Gb as De,H as Le,Ha as m,Hb as P,I as it,Ia as ua,Ib as L,J as Ee,Ja as Au,Jb as Pu,K as mu,Ka as Ur,Kb as Lu,L as yn,La as lc,Lb as cc,M as hu,Ma as $e,Mb as _e,N as ce,Na as lt,Nb as Be,O as ht,Oa as pt,Ob as z,P as E,Pa as ve,Pb as qe,Q as $,Qa as ae,Qb as u,R as y,Ra as $r,Rb as ee,S as le,Sa as ct,Sb as k,T as c,Ta as Gr,Tb as ot,U as ko,Ua as M,Ub as Bu,V as pu,Va as G,Vb as Io,W as tn,Wa as C,Wb as To,X as fu,Xa as Mi,Xb as qr,Y as St,Ya as Fu,Yb as Kr,Z as Me,Za as J,Zb as Xr,_ as Ae,_a as Ie,_b as oe,a as he,aa as rc,ab as Yt,ac as Ro,b as nu,ba as X,bb as Wr,bc as Nu,c as iu,ca as Q,cb as ku,cc as V,d as Ze,da as Wt,db as Qn,dc as K,e as T,ea as R,eb as Iu,ec as bt,f as Yn,fa as W,fb as A,fc as Ai,g as Ci,ga as Ei,gb as H,gc as Vu,h as au,ha as gu,hb as Tu,hc as fa,i as oa,ia as ne,ib as U,ic as Qr,j as ou,ja as _u,jb as Ru,jc as ju,k as Ue,ka as sc,kb as qt,kc as et,l as ru,la as nn,lb as pe,lc as Ke,m as nc,ma as Ce,mb as fe,mc as kn,n as be,na as Fe,nb as _,nc as dc,o as ra,oa as O,ob as s,oc as In,p as su,pa as xn,pb as l,pc as Oo,q as qn,qa as bu,qb as D,qc as zu,r as jr,ra as Di,rb as Ge,rc as ge,s as lu,sa as vu,sb as dt,sc as Hu,t as je,ta as Xn,tb as Kt,tc as B,u as se,ua as la,ub as ha,uc as rt,v as ic,va as ca,vb as We,vc as Uu,w as cu,wa as Hr,wb as _t,wc as Zr,x as du,xa as Si,xb as Ou,y as vn,ya as da,yb as It,z as Je,za as yu,zb as Ye,zc as uc}from"./chunk-X3F6B5M4.js";import{a as S,b as xe}from"./chunk-QXIBXHVB.js";var $u=null;function Xt(){return $u}function gc(t){$u??=t}var Po=class{},ga=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>c(Gu),providedIn:"platform"})}return t})();var Gu=(()=>{class t extends ga{_location;_history;_doc=c(Q);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Xt().getBaseHref(this._doc)}onPopState(e){let n=Xt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Xt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,a){this._history.pushState(e,n,a)}replaceState(e,n,a){this._history.replaceState(e,n,a)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function qu(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function Wu(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Zn(t){return t&&t[0]!=="?"?`?${t}`:t}var es=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:()=>c(Qb),providedIn:"root"})}return t})(),Xb=new y(""),Qb=(()=>{class t extends es{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(Q).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return qu(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Zn(this._platformLocation.search),a=this._platformLocation.hash;return a&&e?`${n}${a}`:n}pushState(e,n,a,o){let r=this.prepareExternalUrl(a+Zn(o));this._platformLocation.pushState(e,n,r)}replaceState(e,n,a,o){let r=this.prepareExternalUrl(a+Zn(o));this._platformLocation.replaceState(e,n,r)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(le(ga),le(Xb,8))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ts=(()=>{class t{_subject=new T;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=e0(Wu(Yu(n))),this._locationStrategy.onPopState(a=>{this._subject.next({url:this.path(!0),pop:!0,state:a.state,type:a.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Zn(n))}normalize(e){return t.stripTrailingSlash(Jb(this._basePath,Yu(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",a=null){this._locationStrategy.pushState(a,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Zn(n)),a)}replaceState(e,n="",a=null){this._locationStrategy.replaceState(a,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Zn(n)),a)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(a=>a(e,n))}subscribe(e,n,a){return this._subject.subscribe({next:e,error:n??void 0,complete:a??void 0})}static normalizeQueryParams=Zn;static joinWithSlash=qu;static stripTrailingSlash=Wu;static \u0275fac=function(n){return new(n||t)(le(es))};static \u0275prov=E({token:t,factory:()=>Zb(),providedIn:"root"})}return t})();function Zb(){return new ts(le(es))}function Jb(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Yu(t){return t.replace(/\/index\.html$/,"")}function e0(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Ju={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KGS:[void 0,"\u20C0"],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XCG:["Cg."],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},cs=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(cs||{});var vt=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(vt||{}),ke=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(ke||{}),Tt=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(Tt||{}),ft={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function em(t){return It(t)[Ye.LocaleId]}function tm(t,i,e){let n=It(t),a=[n[Ye.DayPeriodsFormat],n[Ye.DayPeriodsStandalone]],o=Qt(a,i);return Qt(o,e)}function nm(t,i,e){let n=It(t),a=[n[Ye.DaysFormat],n[Ye.DaysStandalone]],o=Qt(a,i);return Qt(o,e)}function im(t,i,e){let n=It(t),a=[n[Ye.MonthsFormat],n[Ye.MonthsStandalone]],o=Qt(a,i);return Qt(o,e)}function am(t,i){let n=It(t)[Ye.Eras];return Qt(n,i)}function Lo(t,i){let e=It(t);return Qt(e[Ye.DateFormat],i)}function Bo(t,i){let e=It(t);return Qt(e[Ye.TimeFormat],i)}function No(t,i){let n=It(t)[Ye.DateTimeFormat];return Qt(n,i)}function on(t,i){let e=It(t),n=e[Ye.NumberSymbols][i];if(typeof n>"u"){if(i===ft.CurrencyDecimal)return e[Ye.NumberSymbols][ft.Decimal];if(i===ft.CurrencyGroup)return e[Ye.NumberSymbols][ft.Group]}return n}function Sc(t,i){return It(t)[Ye.NumberFormats][i]}function n0(t){return It(t)[Ye.Currencies]}function om(t){if(!t[Ye.ExtraData])throw new ce(2303,!1)}function rm(t){let i=It(t);return om(i),(i[Ye.ExtraData][2]||[]).map(n=>typeof n=="string"?_c(n):[_c(n[0]),_c(n[1])])}function sm(t,i,e){let n=It(t);om(n);let a=[n[Ye.ExtraData][0],n[Ye.ExtraData][1]],o=Qt(a,i)||[];return Qt(o,e)||[]}function Qt(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new ce(2304,!1)}function _c(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}function lm(t,i,e="en"){let n=n0(e)[t]||Ju[t]||[],a=n[1];return i==="narrow"&&typeof a=="string"?a:n[0]||t}var i0=2;function cm(t){let i,e=Ju[t];return e&&(i=e[2]),typeof i=="number"?i:i0}var a0=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,ns={},o0=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,r0=256;function dm(t,i,e,n){let a=g0(t);s0(i),i=Tn(e,i)||i;let r=[],d;for(;i;)if(d=o0.exec(i),d){r=r.concat(d.slice(1));let f=r.pop();if(!f)break;i=f}else{r.push(i);break}let h=a.getTimezoneOffset();n&&(h=mm(n,h),a=f0(a,n));let p="";return r.forEach(f=>{let g=h0(f);p+=g?g(a,e,h):f==="''"?"'":f.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),p}function s0(t){if(t.length>r0)throw new ce(2300,!1)}function ss(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function Tn(t,i){let e=em(t);if(ns[e]??={},ns[e][i])return ns[e][i];let n="";switch(i){case"shortDate":n=Lo(t,Tt.Short);break;case"mediumDate":n=Lo(t,Tt.Medium);break;case"longDate":n=Lo(t,Tt.Long);break;case"fullDate":n=Lo(t,Tt.Full);break;case"shortTime":n=Bo(t,Tt.Short);break;case"mediumTime":n=Bo(t,Tt.Medium);break;case"longTime":n=Bo(t,Tt.Long);break;case"fullTime":n=Bo(t,Tt.Full);break;case"short":let a=Tn(t,"shortTime"),o=Tn(t,"shortDate");n=is(No(t,Tt.Short),[a,o]);break;case"medium":let r=Tn(t,"mediumTime"),d=Tn(t,"mediumDate");n=is(No(t,Tt.Medium),[r,d]);break;case"long":let h=Tn(t,"longTime"),p=Tn(t,"longDate");n=is(No(t,Tt.Long),[h,p]);break;case"full":let f=Tn(t,"fullTime"),g=Tn(t,"fullDate");n=is(No(t,Tt.Full),[f,g]);break}return n&&(ns[e][i]=n),n}function is(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return i!=null&&n in i?i[n]:e})),t}function an(t,i,e="-",n,a){let o="";(t<0||a&&t<=0)&&(a?t=-t+1:(t=-t,o=e));let r=String(t);for(;r.length<i;)r="0"+r;return n&&(r=r.slice(r.length-i)),o+r}function l0(t,i){return an(t,3).substring(0,i)}function tt(t,i,e=0,n=!1,a=!1){return function(o,r){let d=c0(t,o);if((e>0||d>-e)&&(d+=e),t===3)d===0&&e===-12&&(d=12);else if(t===6)return l0(d,i);let h=on(r,ft.MinusSign);return an(d,i,h,n,a)}}function c0(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new ce(2301,!1)}}function Te(t,i,e=vt.Format,n=!1){return function(a,o){return d0(a,o,t,i,e,n)}}function d0(t,i,e,n,a,o){switch(e){case 2:return im(i,a,n)[t.getMonth()];case 1:return nm(i,a,n)[t.getDay()];case 0:let r=t.getHours(),d=t.getMinutes();if(o){let p=rm(i),f=sm(i,a,n),g=p.findIndex(v=>{if(Array.isArray(v)){let[x,I]=v,b=r>=x.hours&&d>=x.minutes,j=r<I.hours||r===I.hours&&d<I.minutes;if(x.hours<I.hours){if(b&&j)return!0}else if(b||j)return!0}else if(v.hours===r&&v.minutes===d)return!0;return!1});if(g!==-1)return f[g]}return tm(i,a,n)[r<12?0:1];case 3:return am(i,n)[t.getFullYear()<=0?0:1];default:let h=e;throw new ce(2302,!1)}}function as(t){return function(i,e,n){let a=-1*n,o=on(e,ft.MinusSign),r=a>0?Math.floor(a/60):Math.ceil(a/60);switch(t){case 0:return(a>=0?"+":"")+an(r,2,o)+an(Math.abs(a%60),2,o);case 1:return"GMT"+(a>=0?"+":"")+an(r,1,o);case 2:return"GMT"+(a>=0?"+":"")+an(r,2,o)+":"+an(Math.abs(a%60),2,o);case 3:return n===0?"Z":(a>=0?"+":"")+an(r,2,o)+":"+an(Math.abs(a%60),2,o);default:throw new ce(2310,!1)}}}var u0=0,rs=4;function m0(t){let i=ss(t,u0,1).getDay();return ss(t,0,1+(i<=rs?rs:rs+7)-i)}function um(t){let i=t.getDay(),e=i===0?-3:rs-i;return ss(t.getFullYear(),t.getMonth(),t.getDate()+e)}function bc(t,i=!1){return function(e,n){let a;if(i){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,r=e.getDate();a=1+Math.floor((r+o)/7)}else{let o=um(e),r=m0(o.getFullYear()),d=o.getTime()-r.getTime();a=1+Math.round(d/6048e5)}return an(a,t,on(n,ft.MinusSign))}}function os(t,i=!1){return function(e,n){let o=um(e).getFullYear();return an(o,t,on(n,ft.MinusSign),i)}}var vc={};function h0(t){if(vc[t])return vc[t];let i;switch(t){case"G":case"GG":case"GGG":i=Te(3,ke.Abbreviated);break;case"GGGG":i=Te(3,ke.Wide);break;case"GGGGG":i=Te(3,ke.Narrow);break;case"y":i=tt(0,1,0,!1,!0);break;case"yy":i=tt(0,2,0,!0,!0);break;case"yyy":i=tt(0,3,0,!1,!0);break;case"yyyy":i=tt(0,4,0,!1,!0);break;case"Y":i=os(1);break;case"YY":i=os(2,!0);break;case"YYY":i=os(3);break;case"YYYY":i=os(4);break;case"M":case"L":i=tt(1,1,1);break;case"MM":case"LL":i=tt(1,2,1);break;case"MMM":i=Te(2,ke.Abbreviated);break;case"MMMM":i=Te(2,ke.Wide);break;case"MMMMM":i=Te(2,ke.Narrow);break;case"LLL":i=Te(2,ke.Abbreviated,vt.Standalone);break;case"LLLL":i=Te(2,ke.Wide,vt.Standalone);break;case"LLLLL":i=Te(2,ke.Narrow,vt.Standalone);break;case"w":i=bc(1);break;case"ww":i=bc(2);break;case"W":i=bc(1,!0);break;case"d":i=tt(2,1);break;case"dd":i=tt(2,2);break;case"c":case"cc":i=tt(7,1);break;case"ccc":i=Te(1,ke.Abbreviated,vt.Standalone);break;case"cccc":i=Te(1,ke.Wide,vt.Standalone);break;case"ccccc":i=Te(1,ke.Narrow,vt.Standalone);break;case"cccccc":i=Te(1,ke.Short,vt.Standalone);break;case"E":case"EE":case"EEE":i=Te(1,ke.Abbreviated);break;case"EEEE":i=Te(1,ke.Wide);break;case"EEEEE":i=Te(1,ke.Narrow);break;case"EEEEEE":i=Te(1,ke.Short);break;case"a":case"aa":case"aaa":i=Te(0,ke.Abbreviated);break;case"aaaa":i=Te(0,ke.Wide);break;case"aaaaa":i=Te(0,ke.Narrow);break;case"b":case"bb":case"bbb":i=Te(0,ke.Abbreviated,vt.Standalone,!0);break;case"bbbb":i=Te(0,ke.Wide,vt.Standalone,!0);break;case"bbbbb":i=Te(0,ke.Narrow,vt.Standalone,!0);break;case"B":case"BB":case"BBB":i=Te(0,ke.Abbreviated,vt.Format,!0);break;case"BBBB":i=Te(0,ke.Wide,vt.Format,!0);break;case"BBBBB":i=Te(0,ke.Narrow,vt.Format,!0);break;case"h":i=tt(3,1,-12);break;case"hh":i=tt(3,2,-12);break;case"H":i=tt(3,1);break;case"HH":i=tt(3,2);break;case"m":i=tt(4,1);break;case"mm":i=tt(4,2);break;case"s":i=tt(5,1);break;case"ss":i=tt(5,2);break;case"S":i=tt(6,1);break;case"SS":i=tt(6,2);break;case"SSS":i=tt(6,3);break;case"Z":case"ZZ":case"ZZZ":i=as(0);break;case"ZZZZZ":i=as(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=as(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=as(2);break;default:return null}return vc[t]=i,i}function mm(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function p0(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function f0(t,i,e){let a=t.getTimezoneOffset(),o=mm(i,a);return p0(t,-1*(o-a))}function g0(t){if(Ku(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[a,o=1,r=1]=t.split("-").map(d=>+d);return ss(a,o-1,r)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(a0))return _0(n)}let i=new Date(t);if(!Ku(i))throw new ce(2311,!1);return i}function _0(t){let i=new Date(0),e=0,n=0,a=t[8]?i.setUTCFullYear:i.setFullYear,o=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),a.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let r=Number(t[4]||0)-e,d=Number(t[5]||0)-n,h=Number(t[6]||0),p=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(i,r,d,h,p),i}function Ku(t){return t instanceof Date&&!isNaN(t.valueOf())}var b0=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Xu=22,ls=".",Vo="0",v0=";",y0=",",yc="#",Qu="\xA4";function hm(t,i,e,n,a,o,r=!1){let d="",h=!1;if(!isFinite(t))d=on(e,ft.Infinity);else{let p=C0(t);r&&(p=x0(p));let f=i.minInt,g=i.minFrac,v=i.maxFrac;if(o){let re=o.match(b0);if(re===null)throw new ce(2306,!1);let Ve=re[1],ie=re[3],mt=re[5];Ve!=null&&(f=xc(Ve)),ie!=null&&(g=xc(ie)),mt!=null?v=xc(mt):ie!=null&&g>v&&(v=g);let Dt=100;if(f>Dt||g>Dt||v>Dt)throw new ce(2306,!1)}w0(p,g,v);let x=p.digits,I=p.integerLen,b=p.exponent,j=[];for(h=x.every(re=>!re);I<f;I++)x.unshift(0);for(;I<0;I++)x.unshift(0);I>0?j=x.splice(I,x.length):(j=x,x=[0]);let q=[];for(x.length>=i.lgSize&&q.unshift(x.splice(-i.lgSize,x.length).join(""));x.length>i.gSize;)q.unshift(x.splice(-i.gSize,x.length).join(""));x.length&&q.unshift(x.join("")),d=q.join(on(e,n)),j.length&&(d+=on(e,a)+j.join("")),b&&(d+=on(e,ft.Exponential)+"+"+b)}return t<0&&!h?d=i.negPre+d+i.negSuf:d=i.posPre+d+i.posSuf,d}function pm(t,i,e,n,a){let o=Sc(i,cs.Currency),r=gm(o,on(i,ft.MinusSign));return r.minFrac=cm(n),r.maxFrac=r.minFrac,hm(t,r,i,ft.CurrencyGroup,ft.CurrencyDecimal,a).replace(Qu,e).replace(Qu,"").trim()}function fm(t,i,e){let n=Sc(i,cs.Decimal),a=gm(n,on(i,ft.MinusSign));return hm(t,a,i,ft.Group,ft.Decimal,e)}function gm(t,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(v0),a=n[0],o=n[1],r=a.indexOf(ls)!==-1?a.split(ls):[a.substring(0,a.lastIndexOf(Vo)+1),a.substring(a.lastIndexOf(Vo)+1)],d=r[0],h=r[1]||"";e.posPre=d.substring(0,d.indexOf(yc));for(let f=0;f<h.length;f++){let g=h.charAt(f);g===Vo?e.minFrac=e.maxFrac=f+1:g===yc?e.maxFrac=f+1:e.posSuf+=g}let p=d.split(y0);if(e.gSize=p[1]?p[1].length:0,e.lgSize=p[2]||p[1]?(p[2]||p[1]).length:0,o){let f=a.length-e.posPre.length-e.posSuf.length,g=o.indexOf(yc);e.negPre=o.substring(0,g).replace(/'/g,""),e.negSuf=o.slice(g+f).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function x0(t){if(t.digits[0]===0)return t;let i=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(i===0?t.digits.push(0,0):i===1&&t.digits.push(0),t.integerLen+=2),t}function C0(t){let i=Math.abs(t)+"",e=0,n,a,o,r,d;for((a=i.indexOf(ls))>-1&&(i=i.replace(ls,"")),(o=i.search(/e/i))>0?(a<0&&(a=o),a+=+i.slice(o+1),i=i.substring(0,o)):a<0&&(a=i.length),o=0;i.charAt(o)===Vo;o++);if(o===(d=i.length))n=[0],a=1;else{for(d--;i.charAt(d)===Vo;)d--;for(a-=o,n=[],r=0;o<=d;o++,r++)n[r]=Number(i.charAt(o))}return a>Xu&&(n=n.splice(0,Xu-1),e=a-1,a=1),{digits:n,exponent:e,integerLen:a}}function w0(t,i,e){if(i>e)throw new ce(2307,!1);let n=t.digits,a=n.length-t.integerLen,o=Math.min(Math.max(i,a),e),r=o+t.integerLen,d=n[r];if(r>0){n.splice(Math.max(t.integerLen,r));for(let g=r;g<n.length;g++)n[g]=0}else{a=Math.max(0,a),t.integerLen=1,n.length=Math.max(1,r=o+1),n[0]=0;for(let g=1;g<r;g++)n[g]=0}if(d>=5)if(r-1<0){for(let g=0;g>r;g--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[r-1]++;for(;a<Math.max(0,o);a++)n.push(0);let h=o!==0,p=i+t.integerLen,f=n.reduceRight(function(g,v,x,I){return v=v+g,I[x]=v<10?v:v-10,h&&(I[x]===0&&x>=p?I.pop():h=!1),v>=10?1:0},0);f&&(n.unshift(f),t.integerLen++)}function xc(t){let i=parseInt(t);if(isNaN(i))throw new ce(2305,!1);return i}var Cc=/\s+/,Zu=[],jo=(()=>{class t{_ngEl;_renderer;initialClasses=Zu;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Cc):Zu}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Cc):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let a=this.stateMap.get(e);a!==void 0?(a.enabled!==n&&(a.changed=!0,a.enabled=n),a.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],a=e[1];a.changed?(this._toggleClass(n,a.enabled),a.changed=!1):a.touched||(a.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),a.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Cc).forEach(a=>{n?this._renderer.addClass(this._ngEl.nativeElement,a):this._renderer.removeClass(this._ngEl.nativeElement,a)})}static \u0275fac=function(n){return new(n||t)(ae(O),ae(ve))};static \u0275dir=C({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Fi=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(X);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let a=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,a,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,a)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,a):!1,get:(e,n,a)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,a)}})}static \u0275fac=function(n){return new(n||t)(ae(ct))};static \u0275dir=C({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ce]})}return t})();function ds(t,i){return new ce(2100,!1)}var wc=class{createSubscription(i,e,n){return et(()=>i.subscribe({next:e,error:n}))}dispose(i){et(()=>i.unsubscribe())}},Ec=class{createSubscription(i,e,n){return i.then(a=>e?.(a),a=>n?.(a)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}},E0=new Ec,D0=new wc,rn=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=c(gu);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(Wr(e))return E0;if(ku(e))return D0;throw ds(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(ae(ge,16))};static \u0275pipe=Mi({name:"async",type:t,pure:!1})}return t})();var S0="mediumDate",_m=new y(""),bm=new y(""),Mc=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,a){this.locale=e,this.defaultTimezone=n,this.defaultOptions=a}transform(e,n,a,o){if(e==null||e===""||e!==e)return null;try{let r=n??this.defaultOptions?.dateFormat??S0,d=a??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return dm(e,r,o||this.locale,d)}catch(r){throw ds(t,r.message)}}static \u0275fac=function(n){return new(n||t)(ae(fa,16),ae(_m,24),ae(bm,24))};static \u0275pipe=Mi({name:"date",type:t,pure:!0})}return t})();var Ac=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,a){if(!vm(e))return null;a||=this._locale;try{let o=ym(e);return fm(o,a,n)}catch(o){throw ds(t,o.message)}}static \u0275fac=function(n){return new(n||t)(ae(fa,16))};static \u0275pipe=Mi({name:"number",type:t,pure:!0})}return t})();var ki=(()=>{class t{_locale;_defaultCurrencyCode;constructor(e,n="USD"){this._locale=e,this._defaultCurrencyCode=n}transform(e,n=this._defaultCurrencyCode,a="symbol",o,r){if(!vm(e))return null;r||=this._locale,typeof a=="boolean"&&(a=a?"symbol":"code");let d=n||this._defaultCurrencyCode;a!=="code"&&(a==="symbol"||a==="symbol-narrow"?d=lm(d,a==="symbol"?"wide":"narrow",r):d=a);try{let h=ym(e);return pm(h,r,d,n,o)}catch(h){throw ds(t,h.message)}}static \u0275fac=function(n){return new(n||t)(ae(fa,16),ae(Qr,16))};static \u0275pipe=Mi({name:"currency",type:t,pure:!0})}return t})();function vm(t){return!(t==null||t===""||t!==t)}function ym(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new ce(2309,!1);return t}var ze=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();function zo(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[a,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(a.trim()===i)return decodeURIComponent(o)}return null}var Ii=class{};function Cm(t,i,e){return Ou(t,i,e)}var Fc="browser";function us(t){return t===Fc}var Ho=class{_doc;constructor(i){this._doc=i}manager},ms=(()=>{class t extends Ho{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,a,o){return e.addEventListener(n,a,o),()=>this.removeEventListener(e,n,a,o)}removeEventListener(e,n,a,o){return e.removeEventListener(n,a,o)}static \u0275fac=function(n){return new(n||t)(le(Q))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),fs=new y(""),Rc=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this});let a=e.filter(r=>!(r instanceof ms));this._plugins=a.slice().reverse();let o=e.find(r=>r instanceof ms);o&&this._plugins.push(o)}addEventListener(e,n,a,o){return this._findPluginFor(n).addEventListener(e,n,a,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new ce(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(le(fs),le(W))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),kc="ng-app-id";function wm(t){for(let i of t)i.remove()}function Em(t,i){let e=i.createElement("style");return e.textContent=t,e}function F0(t,i,e,n){let a=t.head?.querySelectorAll(`style[${kc}="${i}"],link[${kc}="${i}"]`);if(a)for(let o of a)o.removeAttribute(kc),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Tc(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Oc=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,a,o={}){this.doc=e,this.appId=n,this.nonce=a,F0(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let a of e)this.addUsage(a,this.inline,Em);n?.forEach(a=>this.addUsage(a,this.external,Tc))}removeStyles(e,n){for(let a of e)this.removeUsage(a,this.inline);n?.forEach(a=>this.removeUsage(a,this.external))}addUsage(e,n,a){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,a(e,this.doc)))})}removeUsage(e,n){let a=n.get(e);a&&(a.usage--,a.usage<=0&&(wm(a.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])wm(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:a}]of this.inline)a.push(this.addElement(e,Em(n,this.doc)));for(let[n,{elements:a}]of this.external)a.push(this.addElement(e,Tc(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(le(Q),le(Di),le(ca,8),le(Xn))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Ic={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Pc=/%COMP%/g;var Sm="%COMP%",k0=`_nghost-${Sm}`,I0=`_ngcontent-${Sm}`,T0=!0,R0=new y("",{factory:()=>T0});function O0(t){return I0.replace(Pc,t)}function P0(t){return k0.replace(Pc,t)}function Mm(t,i){return i.map(e=>e.replace(Pc,t))}var Go=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,a,o,r,d,h=null,p=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=a,this.removeStylesOnCompDestroy=o,this.doc=r,this.ngZone=d,this.nonce=h,this.tracingService=p,this.defaultRenderer=new Uo(e,r,d,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let a=this.getOrCreateRenderer(e,n);return a instanceof ps?a.applyToHost(e):a instanceof $o&&a.applyStyles(),a}getOrCreateRenderer(e,n){let a=this.rendererByCompId,o=a.get(n.id);if(!o){let r=this.doc,d=this.ngZone,h=this.eventManager,p=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,g=this.tracingService;switch(n.encapsulation){case Hr.Emulated:o=new ps(h,p,n,this.appId,f,r,d,g);break;case Hr.ShadowDom:return new hs(h,e,n,r,d,this.nonce,g,p);case Hr.ExperimentalIsolatedShadowDom:return new hs(h,e,n,r,d,this.nonce,g);default:o=new $o(h,p,n,f,r,d,g);break}a.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(le(Rc),le(Oc),le(Di),le(R0),le(Q),le(W),le(ca),le(Ur,8))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Uo=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,a){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=a}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Ic[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Dm(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(Dm(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new ce(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,a){if(a){e=a+":"+e;let o=Ic[a];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let a=Ic[n];a?i.removeAttributeNS(a,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,a){a&(ua.DashCase|ua.Important)?i.style.setProperty(e,n,a&ua.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&ua.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,a){if(typeof i=="string"&&(i=Xt().getGlobalEventTarget(this.doc,i),!i))throw new ce(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,a)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function Dm(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var hs=class extends Uo{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,a,o,r,d,h){super(i,a,o,d),this.hostEl=e,this.sharedStylesHost=h,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let p=n.styles;p=Mm(n.id,p);for(let g of p){let v=document.createElement("style");r&&v.setAttribute("nonce",r),v.textContent=g,this.shadowRoot.appendChild(v)}let f=n.getExternalStyles?.();if(f)for(let g of f){let v=Tc(g,a);r&&v.setAttribute("nonce",r),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},$o=class extends Uo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,a,o,r,d,h){super(i,o,r,d),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=a;let p=n.styles;this.styles=h?Mm(h,p):p,this.styleUrls=n.getExternalStyles?.(h)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Au.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ps=class extends $o{contentAttr;hostAttr;constructor(i,e,n,a,o,r,d,h){let p=a+"-"+n.id;super(i,e,n,o,r,d,h,p),this.contentAttr=O0(p),this.hostAttr=P0(p)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var gs=class t extends Po{supportsDOMEvents=!0;static makeCurrent(){gc(new t)}onAndCancel(i,e,n,a){return i.addEventListener(e,n,a),()=>{i.removeEventListener(e,n,a)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=B0();return e==null?null:N0(e)}resetBaseElement(){Wo=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return zo(document.cookie,i)}},Wo=null;function B0(){return Wo=Wo||document.head.querySelector("base"),Wo?Wo.getAttribute("href"):null}function N0(t){return new URL(t,document.baseURI).pathname}var V0=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Am=["alt","control","meta","shift"],j0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},z0={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Fm=(()=>{class t extends Ho{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,a,o){let r=t.parseEventName(n),d=t.eventCallback(r.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Xt().onAndCancel(e,r.domEventName,d,o))}static parseEventName(e){let n=e.toLowerCase().split("."),a=n.shift();if(n.length===0||!(a==="keydown"||a==="keyup"))return null;let o=t._normalizeKey(n.pop()),r="",d=n.indexOf("code");if(d>-1&&(n.splice(d,1),r="code."),Am.forEach(p=>{let f=n.indexOf(p);f>-1&&(n.splice(f,1),r+=p+".")}),r+=o,n.length!=0||o.length===0)return null;let h={};return h.domEventName=a,h.fullKey=r,h}static matchEventFullKeyCode(e,n){let a=j0[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(a=e.code,o="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),Am.forEach(r=>{if(r!==a){let d=z0[r];d(e)&&(o+=r+".")}}),o+=a,o===n)}static eventCallback(e,n,a){return o=>{t.matchEventFullKeyCode(o,e)&&a.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(le(Q))};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();async function Lc(t,i,e){let n=S({rootComponent:t},H0(i,e));return Hu(n)}function H0(t,i){return{platformRef:i?.platformRef,appProviders:[...Y0,...t?.providers??[]],platformProviders:W0}}function U0(){gs.makeCurrent()}function $0(){return new Ei}function G0(){return bu(document),document}var W0=[{provide:Xn,useValue:Fc},{provide:vu,useValue:U0,multi:!0},{provide:Q,useFactory:G0}];var Y0=[{provide:pu,useValue:"root"},{provide:Ei,useFactory:$0},{provide:fs,useClass:ms,multi:!0},{provide:fs,useClass:Fm,multi:!0},Go,Oc,Rc,{provide:pt,useExisting:Go},{provide:Ii,useClass:V0},[]];var Jn=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let a=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(a,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[e,n]of i.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,i.normalizedNames.get(e))}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let a=i.op==="a"?(this.headers.get(e)||[]).slice():[];a.push(...n),this.headers.set(e,a);break;case"d":let o=i.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let r=Array.isArray(o)?o:[o],d=this.headers.get(e);if(!d)return;d=d.filter(h=>r.indexOf(h)===-1),d.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,d)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),a=i.toLowerCase();this.headers.set(a,n),this.maybeSetNormalizedName(i,a)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var bs=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},vs=class{encodeKey(i){return km(i)}encodeValue(i){return km(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function q0(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(a=>{let o=a.indexOf("="),[r,d]=o==-1?[i.decodeKey(a),""]:[i.decodeKey(a.slice(0,o)),i.decodeValue(a.slice(o+1))],h=e.get(r)||[];h.push(d),e.set(r,h)}),e}var K0=/%(\d[a-f0-9])/gi,X0={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function km(t){return encodeURIComponent(t).replace(K0,(i,e)=>X0[e]??i)}function _s(t){return`${t}`}var Rn=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new vs,i.fromString){if(i.fromObject)throw new ce(2805,!1);this.map=q0(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],a=Array.isArray(n)?n.map(_s):[_s(n)];this.map.set(e,a)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let a=i[n];Array.isArray(a)?a.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:a,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,e]of this.cloneFrom.map.entries())this.map.set(i,e);this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=i.op==="a"?(this.map.get(i.param)||[]).slice():[];e.push(_s(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=(this.map.get(i.param)||[]).slice(),a=n.indexOf(_s(i.value));a!==-1&&n.splice(a,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function Q0(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Im(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Tm(t){return typeof Blob<"u"&&t instanceof Blob}function Rm(t){return typeof FormData<"u"&&t instanceof FormData}function Z0(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Om="Content-Type",Pm="Accept",Lm="text/plain",Bm="application/json",J0=`${Bm}, ${Lm}, */*`,ba=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,a){this.url=e,this.method=i.toUpperCase();let o;if(Q0(this.method)||a?(this.body=n!==void 0?n:null,o=a):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new ce(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Jn,this.context??=new bs,!this.params)this.params=new Rn,this.urlWithParams=e;else{let r=this.params.toString();if(r.length===0)this.urlWithParams=e;else{let d=e.indexOf("?"),h=d===-1?"?":d<e.length-1?"&":"";this.urlWithParams=e+h+r}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Im(this.body)||Tm(this.body)||Rm(this.body)||Z0(this.body)?this.body:this.body instanceof Rn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Rm(this.body)?null:Tm(this.body)?this.body.type||null:Im(this.body)?null:typeof this.body=="string"?Lm:this.body instanceof Rn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Bm:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,a=i.responseType||this.responseType,o=i.keepalive??this.keepalive,r=i.priority||this.priority,d=i.cache||this.cache,h=i.mode||this.mode,p=i.redirect||this.redirect,f=i.credentials||this.credentials,g=i.referrer??this.referrer,v=i.integrity||this.integrity,x=i.referrerPolicy||this.referrerPolicy,I=i.transferCache??this.transferCache,b=i.timeout??this.timeout,j=i.body!==void 0?i.body:this.body,q=i.withCredentials??this.withCredentials,re=i.reportProgress??this.reportProgress,Ve=i.headers||this.headers,ie=i.params||this.params,mt=i.context??this.context;return i.setHeaders!==void 0&&(Ve=Object.keys(i.setHeaders).reduce((Dt,kt)=>Dt.set(kt,i.setHeaders[kt]),Ve)),i.setParams&&(ie=Object.keys(i.setParams).reduce((Dt,kt)=>Dt.set(kt,i.setParams[kt]),ie)),new t(e,n,j,{params:ie,headers:Ve,context:mt,reportProgress:re,responseType:a,withCredentials:q,transferCache:I,keepalive:o,cache:d,priority:r,timeout:b,mode:h,redirect:p,credentials:f,referrer:g,integrity:v,referrerPolicy:x})}},Ti=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Ti||{}),ya=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new Jn,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},ys=class t extends ya{constructor(i={}){super(i)}type=Ti.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Yo=class t extends ya{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Ti.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},va=class extends ya{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},ev=200,tv=204;var nv=new y("");var iv=/^\)\]\}',?\n/;var Nc=(()=>{class t{xhrFactory;tracingService=c(Ur,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new ce(-2800,!1);let n=this.xhrFactory;return Ue(null).pipe(it(()=>new Ze(o=>{let r=n.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach((j,q)=>r.setRequestHeader(j,q.join(","))),e.headers.has(Pm)||r.setRequestHeader(Pm,J0),!e.headers.has(Om)){let j=e.detectContentTypeHeader();j!==null&&r.setRequestHeader(Om,j)}if(e.timeout&&(r.timeout=e.timeout),e.responseType){let j=e.responseType.toLowerCase();r.responseType=j!=="json"?j:"text"}let d=e.serializeBody(),h=null,p=()=>{if(h!==null)return h;let j=r.statusText||"OK",q=new Jn(r.getAllResponseHeaders()),re=r.responseURL||e.url;return h=new ys({headers:q,status:r.status,statusText:j,url:re}),h},f=this.maybePropagateTrace(()=>{let{headers:j,status:q,statusText:re,url:Ve}=p(),ie=null;q!==tv&&(ie=typeof r.response>"u"?r.responseText:r.response),q===0&&(q=ie?ev:0);let mt=q>=200&&q<300;if(e.responseType==="json"&&typeof ie=="string"){let Dt=ie;ie=ie.replace(iv,"");try{ie=ie!==""?JSON.parse(ie):null}catch(kt){ie=Dt,mt&&(mt=!1,ie={error:kt,text:ie})}}mt?(o.next(new Yo({body:ie,headers:j,status:q,statusText:re,url:Ve||void 0})),o.complete()):o.error(new va({error:ie,headers:j,status:q,statusText:re,url:Ve||void 0}))}),g=this.maybePropagateTrace(j=>{let{url:q}=p(),re=new va({error:j,status:r.status||0,statusText:r.statusText||"Unknown Error",url:q||void 0});o.error(re)}),v=g;e.timeout&&(v=this.maybePropagateTrace(j=>{let{url:q}=p(),re=new va({error:new DOMException("Request timed out","TimeoutError"),status:r.status||0,statusText:r.statusText||"Request timeout",url:q||void 0});o.error(re)}));let x=!1,I=this.maybePropagateTrace(j=>{x||(o.next(p()),x=!0);let q={type:Ti.DownloadProgress,loaded:j.loaded};j.lengthComputable&&(q.total=j.total),e.responseType==="text"&&r.responseText&&(q.partialText=r.responseText),o.next(q)}),b=this.maybePropagateTrace(j=>{let q={type:Ti.UploadProgress,loaded:j.loaded};j.lengthComputable&&(q.total=j.total),o.next(q)});return r.addEventListener("load",f),r.addEventListener("error",g),r.addEventListener("timeout",v),r.addEventListener("abort",g),e.reportProgress&&(r.addEventListener("progress",I),d!==null&&r.upload&&r.upload.addEventListener("progress",b)),r.send(d),o.next({type:Ti.Sent}),()=>{r.removeEventListener("error",g),r.removeEventListener("abort",g),r.removeEventListener("load",f),r.removeEventListener("timeout",v),e.reportProgress&&(r.removeEventListener("progress",I),d!==null&&r.upload&&r.upload.removeEventListener("progress",b)),r.readyState!==r.DONE&&r.abort()}})))}static \u0275fac=function(n){return new(n||t)(le(Ii))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),av=new y("",{factory:()=>!0}),ov="XSRF-TOKEN",rv=new y("",{factory:()=>ov}),sv="X-XSRF-TOKEN",lv=new y("",{factory:()=>sv}),cv=(()=>{class t{cookieName=c(rv);doc=c(Q);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=zo(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Nm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=le(cv),a},providedIn:"root"})}return t})();function Vm(t,i){if(!c(av)||t.method==="GET"||t.method==="HEAD")return i(t);try{let a=c(ga).href,{origin:o}=new URL(a),{origin:r}=new URL(t.url,o);if(o!==r)return i(t)}catch{return i(t)}let e=c(Nm).getToken(),n=c(lv);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}function dv(t,i){return i(t)}function uv(t,i,e){return(n,a)=>fu(e,()=>i(n,o=>t(o,a)))}var jm=new y("",{factory:()=>[Vm]}),zm=new y(""),Hm=new y("",{factory:()=>!0});var Vc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=le(Nc),a},providedIn:"root"})}return t})();var xs=(()=>{class t{backend;injector;chain=null;pendingTasks=c(sc);contributeToStability=c(Hm);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=this.injector.get(Cs,null,{skipSelf:!0}),a=n!==null&&this.backend===n,o=this.injector.get(zm,[],a?{self:!0}:void 0),r=Array.from(new Set([...this.injector.get(jm),...o]));this.chain=r.reduceRight((d,h)=>uv(d,h,this.injector),dv)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,a=>this.backend.handle(a)).pipe(zr(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(le(Vc),le(tn))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=le(xs),a},providedIn:"root"})}return t})();function Bc(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Cn=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,a={}){let o;if(e instanceof ba)o=e;else{let h;a.headers instanceof Jn?h=a.headers:h=new Jn(a.headers);let p;a.params&&(a.params instanceof Rn?p=a.params:p=new Rn({fromObject:a.params})),o=new ba(e,n,a.body!==void 0?a.body:null,{headers:h,context:a.context,params:p,reportProgress:a.reportProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials,transferCache:a.transferCache,keepalive:a.keepalive,priority:a.priority,cache:a.cache,mode:a.mode,redirect:a.redirect,credentials:a.credentials,referrer:a.referrer,referrerPolicy:a.referrerPolicy,integrity:a.integrity,timeout:a.timeout})}let r=Ue(o).pipe(du(h=>this.handler.handle(h)));if(e instanceof ba||a.observe==="events")return r;let d=r.pipe(se(h=>h instanceof Yo));switch(a.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return d.pipe(be(h=>{if(h.body!==null&&!(h.body instanceof ArrayBuffer))throw new ce(2806,!1);return h.body}));case"blob":return d.pipe(be(h=>{if(h.body!==null&&!(h.body instanceof Blob))throw new ce(2807,!1);return h.body}));case"text":return d.pipe(be(h=>{if(h.body!==null&&typeof h.body!="string")throw new ce(2808,!1);return h.body}));default:return d.pipe(be(h=>h.body))}case"response":return d;default:throw new ce(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Rn().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,a={}){return this.request("PATCH",e,Bc(a,n))}post(e,n,a={}){return this.request("POST",e,Bc(a,n))}put(e,n,a={}){return this.request("PUT",e,Bc(a,n))}static \u0275fac=function(n){return new(n||t)(le(Cs))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jc(...t){let i=[Cn,xs,{provide:Cs,useExisting:xs},{provide:Vc,useFactory:()=>c(nv,{optional:!0})??c(Nc)},{provide:jm,useValue:Vm,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return ko(i)}var Ri=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=le(hv),a},providedIn:"root"})}return t})(),hv=(()=>{class t extends Ri{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case St.NONE:return n;case St.HTML:return da(n,"HTML")?Si(n):Su(this._doc,String(n)).toString();case St.STYLE:return da(n,"Style")?Si(n):n;case St.SCRIPT:if(da(n,"Script"))return Si(n);throw new ce(5200,!1);case St.URL:return da(n,"URL")?Si(n):Du(String(n));case St.RESOURCE_URL:if(da(n,"ResourceURL"))return Si(n);throw new ce(5201,!1);default:throw new ce(5202,!1)}}bypassSecurityTrustHtml(e){return yu(e)}bypassSecurityTrustStyle(e){return xu(e)}bypassSecurityTrustScript(e){return Cu(e)}bypassSecurityTrustUrl(e){return wu(e)}bypassSecurityTrustResourceUrl(e){return Eu(e)}static \u0275fac=function(n){return new(n||t)(le(Q))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zc;try{zc=typeof Intl<"u"&&Intl.v8BreakIterator}catch{zc=!1}var de=(()=>{class t{_platformId=c(Xn);isBrowser=this._platformId?us(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||zc)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Hc;function Um(){if(Hc==null){let t=typeof document<"u"?document.head:null;Hc=!!(t&&(t.createShadowRoot||t.attachShadow))}return Hc}function Uc(t){if(Um()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function ei(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let i=t.shadowRoot.activeElement;if(i===t)break;t=i}return t}function st(t){return t.composedPath?t.composedPath()[0]:t.target}function $c(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ws=new WeakMap,Re=(()=>{class t{_appRef;_injector=c(X);_environmentInjector=c(tn);load(e){let n=this._appRef=this._appRef||this._injector.get(Qn),a=ws.get(n);a||(a={loaders:new Set,refs:[]},ws.set(n,a),n.onDestroy(()=>{ws.get(n)?.refs.forEach(o=>o.destroy()),ws.delete(n)})),a.loaders.has(e)||(a.loaders.add(e),a.refs.push(Zr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Xe(t){return t==null?"":typeof t=="string"?t:`${t}px`}function On(t){return Array.isArray(t)?t:[t]}function jt(t,i=0){return $m(t)?Number(t):arguments.length===2?i:0}function $m(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Mt(t){return t instanceof O?t.nativeElement:t}var fv=new y("cdk-dir-doc",{providedIn:"root",factory:()=>c(Q)}),gv=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Gm(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?gv.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var He=(()=>{class t{get value(){return this.valueSignal()}valueSignal=ne("ltr");change=new R;constructor(){let e=c(fv,{optional:!0});if(e){let n=e.body?e.body.dir:null,a=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Gm(n||a||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(sn||{}),Es,Oi;function Ds(){if(Oi==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Oi=!1,Oi;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Oi=!0;else{let t=Element.prototype.scrollTo;t?Oi=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Oi=!1}}return Oi}function xa(){if(typeof document!="object"||!document)return sn.NORMAL;if(Es==null){let t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),Es=sn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Es=t.scrollLeft===0?sn.NEGATED:sn.INVERTED),t.remove()}return Es}var te=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();var _v=20,ti=(()=>{class t{_ngZone=c(W);_platform=c(de);_renderer=c(pt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new T;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=_v){return this._platform.isBrowser?new Ze(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let a=e>0?this._scrolled.pipe(ic(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ue()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let a=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(se(o=>!o||a.indexOf(o)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((a,o)=>{this._scrollableContainsElement(o,e)&&n.push(o)}),n}_scrollableContainsElement(e,n){let a=Mt(n),o=e.getElementRef().nativeElement;do if(a==o)return!0;while(a=a.parentElement);return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qo=(()=>{class t{elementRef=c(O);scrollDispatcher=c(ti);ngZone=c(W);dir=c(He,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new T;_renderer=c(ve);_cleanupScroll;_elementScrolled=new T;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,a=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=a?e.end:e.start),e.right==null&&(e.right=a?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),a&&xa()!=sn.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),xa()==sn.INVERTED?e.left=e.right:xa()==sn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;Ds()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",a="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let r=this.dir&&this.dir.value=="rtl";return e=="start"?e=r?a:n:e=="end"&&(e=r?n:a),r&&xa()==sn.INVERTED?e==n?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:r&&xa()==sn.NEGATED?e==n?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==n?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),bv=20,zt=(()=>{class t{_platform=c(de);_listeners;_viewportSize=null;_change=new T;_document=c(Q);constructor(){let e=c(W),n=c(pt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let a=o=>this._change.next(o);this._listeners=[n.listen("window","resize",a),n.listen("window","orientationchange",a)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:a}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+a,right:e.left+n,height:a,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),a=e.documentElement,o=a.getBoundingClientRect(),r=-o.top||e.body?.scrollTop||n.scrollY||a.scrollTop||0,d=-o.left||e.body?.scrollLeft||n.scrollX||a.scrollLeft||0;return{top:r,left:d}}change(e=bv){return e>0?this._change.pipe(ic(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ln=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})(),Gc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[te,ln,te,ln]})}return t})();var Wc={},Se=class t{_appId=c(Di);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Wc.hasOwnProperty(i)||(Wc[i]=0),`${i}${e?t._infix+"-":""}${Wc[i]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ko=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},ni=class extends Ko{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,n,a,o){super(),this.component=i,this.viewContainerRef=e,this.injector=n,this.projectableNodes=a,this.bindings=o||null}},yt=class extends Ko{templateRef;viewContainerRef;context;injector;constructor(i,e,n,a){super(),this.templateRef=i,this.viewContainerRef=e,this.context=n,this.injector=a}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Yc=class extends Ko{element;constructor(i){super(),this.element=i instanceof O?i.nativeElement:i}},Ca=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof ni)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof yt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Yc)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Xo=class extends Ca{outletElement;_appRef;_defaultInjector;constructor(i,e,n){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=n}attachComponentPortal(i){let e;if(i.viewContainerRef){let n=i.injector||i.viewContainerRef.injector,a=n.get(Gr,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:n,ngModuleRef:a,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,a=i.injector||this._defaultInjector||X.NULL,o=a.get(tn,n.injector);e=Zr(i.component,{elementInjector:a,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,n=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return n.rootNodes.forEach(a=>this.outletElement.appendChild(a)),n.detectChanges(),this.setDisposeFn(()=>{let a=e.indexOf(n);a!==-1&&e.remove(a)}),this._attachedPortal=i,n}attachDomPortal=i=>{let e=i.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},Wm=(()=>{class t extends yt{constructor(){let e=c(lt),n=c(ct);super(e,n)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[J]})}return t})(),wn=(()=>{class t extends Ca{_moduleRef=c(Gr,{optional:!0});_document=c(Q);_viewContainerRef=c(ct);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new R;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,a=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=e,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let a=this._document.createComment("dom-portal");e.setAttachedHost(this),n.parentNode.insertBefore(a,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(n,a)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[J]})}return t})(),Pn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();function Oe(t,...i){return i.length?i.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Ym=Ds();function Da(t){return new Ss(t.get(zt),t.get(Q))}var Ss=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=Xe(-this._previousScrollPosition.left),i.style.top=Xe(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,n=i.style,a=e.style,o=n.scrollBehavior||"",r=a.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),Ym&&(n.scrollBehavior=a.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ym&&(n.scrollBehavior=o,a.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};function eh(t,i){return new Ms(t.get(ti),t.get(W),t.get(zt),i)}var Ms=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,n,a){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=n,this._config=a}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(se(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Qo=class{enable(){}disable(){}attach(){}};function qc(t,i){return i.some(e=>{let n=t.bottom<e.top,a=t.top>e.bottom,o=t.right<e.left,r=t.left>e.right;return n||a||o||r})}function qm(t,i){return i.some(e=>{let n=t.top<e.top,a=t.bottom>e.bottom,o=t.left<e.left,r=t.right>e.right;return n||a||o||r})}function dn(t,i){return new As(t.get(ti),t.get(zt),t.get(W),i)}var As=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,n,a){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=n,this._config=a}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:a}=this._viewportRuler.getViewportSize();qc(e,[{width:n,height:a,bottom:a,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},th=(()=>{class t{_injector=c(X);constructor(){}noop=()=>new Qo;close=e=>eh(this._injector,e);block=()=>Da(this._injector);reposition=e=>dn(this._injector,e);static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cn=class{positionStrategy;scrollStrategy=new Qo;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let n of e)i[n]!==void 0&&(this[n]=i[n])}}};var Fs=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var nh=(()=>{class t{_attachedOverlays=[];_document=c(Q);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,a){return a.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ih=(()=>{class t extends nh{_ngZone=c(W);_renderer=c(pt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let a=n.length-1;a>-1;a--){let o=n[a];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ah=(()=>{class t extends nh{_platform=c(de);_ngZone=c(W);_renderer=c(pt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,a={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(n,"pointerdown",this._pointerDownListener,a),o.listen(n,"click",this._clickListener,a),o.listen(n,"auxclick",this._clickListener,a),o.listen(n,"contextmenu",this._clickListener,a)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=st(e)};_clickListener=e=>{let n=st(e),a=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let d=o[r],h=d._outsidePointerEvents;if(!(!d.hasAttached()||!this.canReceiveEvent(d,e,h))){if(Km(d.overlayElement,n)||Km(d.overlayElement,a))break;this._ngZone?this._ngZone.run(()=>h.next(e)):h.next(e)}}};static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Km(t,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=i;for(;n;){if(n===t)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var oh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,a){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ts=(()=>{class t{_platform=c(de);_containerElement;_document=c(Q);_styleLoader=c(Re);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||$c()){let a=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<a.length;o++)a[o].remove()}let n=this._document.createElement("div");n.classList.add(e),$c()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(oh)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Kc=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,n,a){this._renderer=e,this._ngZone=n,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",a)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Xc(t){return t&&t.nodeType===1}var wa=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new T;_attachments=new T;_detachments=new T;_positionStrategy;_scrollStrategy;_locationChanges=he.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new T;_outsidePointerEvents=new T;_afterNextRenderRef;constructor(i,e,n,a,o,r,d,h,p,f=!1,g,v){this._portalOutlet=i,this._host=e,this._pane=n,this._config=a,this._ngZone=o,this._keyboardDispatcher=r,this._document=d,this._location=h,this._outsideClickDispatcher=p,this._animationsDisabled=f,this._injector=g,this._renderer=v,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=$e(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=S(S({},this._config),i),this._updateElementSize()}setDirection(i){this._config=xe(S({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Xe(this._config.width),i.height=Xe(this._config.height),i.minWidth=Xe(this._config.minWidth),i.minHeight=Xe(this._config.minHeight),i.maxWidth=Xe(this._config.maxWidth),i.maxHeight=Xe(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Xc(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Kc(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,n){let a=On(e||[]).filter(o=>!!o);a.length&&(n?i.classList.add(...a):i.classList.remove(...a))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=$e(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Xm="cdk-overlay-connected-position-bounding-box",yv=/([A-Za-z%]+)$/;function Ln(t,i){return new ks(i,t.get(zt),t.get(Q),t.get(de),t.get(Ts))}var ks=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new T;_resizeSubscription=he.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,n,a,o){this._viewportRuler=e,this._document=n,this._platform=a,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Xm),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,n=this._viewportRect,a=this._containerRect,o=[],r;for(let d of this._preferredPositions){let h=this._getOriginPoint(i,a,d),p=this._getOverlayPoint(h,e,d),f=this._getOverlayFit(p,e,n,d);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(d,h);return}if(this._canFitWithFlexibleDimensions(f,p,n)){o.push({position:d,origin:h,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(h,d)});continue}(!r||r.overlayFit.visibleArea<f.visibleArea)&&(r={overlayFit:f,overlayPoint:p,originPoint:h,position:d,overlayRect:e})}if(o.length){let d=null,h=-1;for(let p of o){let f=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);f>h&&(h=f,d=p)}this._isPushed=!1,this._applyPosition(d.position,d.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Pi(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Xm),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof O?this._origin.nativeElement:Xc(this._origin)?this._origin:null}_getOriginPoint(i,e,n){let a;if(n.originX=="center")a=i.left+i.width/2;else{let r=this._isRtl()?i.right:i.left,d=this._isRtl()?i.left:i.right;a=n.originX=="start"?r:d}e.left<0&&(a-=e.left);let o;return n.originY=="center"?o=i.top+i.height/2:o=n.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:a,y:o}}_getOverlayPoint(i,e,n){let a;n.overlayX=="center"?a=-e.width/2:n.overlayX==="start"?a=this._isRtl()?-e.width:0:a=this._isRtl()?0:-e.width;let o;return n.overlayY=="center"?o=-e.height/2:o=n.overlayY=="top"?0:-e.height,{x:i.x+a,y:i.y+o}}_getOverlayFit(i,e,n,a){let o=Zm(e),{x:r,y:d}=i,h=this._getOffset(a,"x"),p=this._getOffset(a,"y");h&&(r+=h),p&&(d+=p);let f=0-r,g=r+o.width-n.width,v=0-d,x=d+o.height-n.height,I=this._subtractOverflows(o.width,f,g),b=this._subtractOverflows(o.height,v,x),j=I*b;return{visibleArea:j,isCompletelyWithinViewport:o.width*o.height===j,fitsInViewportVertically:b===o.height,fitsInViewportHorizontally:I==o.width}}_canFitWithFlexibleDimensions(i,e,n){if(this._hasFlexibleDimensions){let a=n.bottom-e.y,o=n.right-e.x,r=Qm(this._overlayRef.getConfig().minHeight),d=Qm(this._overlayRef.getConfig().minWidth),h=i.fitsInViewportVertically||r!=null&&r<=a,p=i.fitsInViewportHorizontally||d!=null&&d<=o;return h&&p}return!1}_pushOverlayOnScreen(i,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let a=Zm(e),o=this._viewportRect,r=Math.max(i.x+a.width-o.width,0),d=Math.max(i.y+a.height-o.height,0),h=Math.max(o.top-n.top-i.y,0),p=Math.max(o.left-n.left-i.x,0),f=0,g=0;return a.width<=o.width?f=p||-r:f=i.x<this._getViewportMarginStart()?o.left-n.left-i.x:0,a.height<=o.height?g=h||-d:g=i.y<this._getViewportMarginTop()?o.top-n.top-i.y:0,this._previousPushAmount={x:f,y:g},{x:i.x+f,y:i.y+g}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!xv(this._lastScrollVisibility,n)){let a=new Fs(i,n);this._positionChanges.next(a)}this._lastScrollVisibility=n}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,a=i.overlayY;i.overlayX==="center"?n="center":this._isRtl()?n=i.overlayX==="start"?"right":"left":n=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${n} ${a}`}_calculateBoundingBoxRect(i,e){let n=this._viewportRect,a=this._isRtl(),o,r,d;if(e.overlayY==="top")r=i.y,o=n.height-r+this._getViewportMarginBottom();else if(e.overlayY==="bottom")d=n.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=n.height-d+this._getViewportMarginTop();else{let x=Math.min(n.bottom-i.y+n.top,i.y),I=this._lastBoundingBoxSize.height;o=x*2,r=i.y-x,o>I&&!this._isInitialRender&&!this._growAfterOpen&&(r=i.y-I/2)}let h=e.overlayX==="start"&&!a||e.overlayX==="end"&&a,p=e.overlayX==="end"&&!a||e.overlayX==="start"&&a,f,g,v;if(p)v=n.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=i.x-this._getViewportMarginStart();else if(h)g=i.x,f=n.right-i.x-this._getViewportMarginEnd();else{let x=Math.min(n.right-i.x+n.left,i.x),I=this._lastBoundingBoxSize.width;f=x*2,g=i.x-x,f>I&&!this._isInitialRender&&!this._growAfterOpen&&(g=i.x-I/2)}return{top:r,left:g,bottom:d,right:v,width:f,height:o}}_setBoundingBoxStyles(i,e){let n=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let a={};if(this._hasExactPosition())a.top=a.left="0",a.bottom=a.right="auto",a.maxHeight=a.maxWidth="",a.width=a.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;a.width=Xe(n.width),a.height=Xe(n.height),a.top=Xe(n.top)||"auto",a.bottom=Xe(n.bottom)||"auto",a.left=Xe(n.left)||"auto",a.right=Xe(n.right)||"auto",e.overlayX==="center"?a.alignItems="center":a.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?a.justifyContent="center":a.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(a.maxHeight=Xe(o)),r&&(a.maxWidth=Xe(r))}this._lastBoundingBoxSize=n,Pi(this._boundingBox.style,a)}_resetBoundingBoxStyles(){Pi(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Pi(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let n={},a=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(a){let f=this._viewportRuler.getViewportScrollPosition();Pi(n,this._getExactOverlayY(e,i,f)),Pi(n,this._getExactOverlayX(e,i,f))}else n.position="static";let d="",h=this._getOffset(e,"x"),p=this._getOffset(e,"y");h&&(d+=`translateX(${h}px) `),p&&(d+=`translateY(${p}px)`),n.transform=d.trim(),r.maxHeight&&(a?n.maxHeight=Xe(r.maxHeight):o&&(n.maxHeight="")),r.maxWidth&&(a?n.maxWidth=Xe(r.maxWidth):o&&(n.maxWidth="")),Pi(this._pane.style,n)}_getExactOverlayY(i,e,n){let a={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n)),i.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;a.bottom=`${r-(o.y+this._overlayRect.height)}px`}else a.top=Xe(o.y);return a}_getExactOverlayX(i,e,n){let a={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n));let r;if(this._isRtl()?r=i.overlayX==="end"?"left":"right":r=i.overlayX==="end"?"right":"left",r==="right"){let d=this._document.documentElement.clientWidth;a.right=`${d-(o.x+this._overlayRect.width)}px`}else a.left=Xe(o.x);return a}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:qm(i,n),isOriginOutsideView:qc(i,n),isOverlayClipped:qm(e,n),isOverlayOutsideView:qc(e,n)}}_subtractOverflows(i,...e){return e.reduce((n,a)=>n-Math.max(a,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+i-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&On(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof O)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,n=i.height||0;return{top:i.y,bottom:i.y+n,left:i.x,right:i.x+e,height:n,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let n=e.getBoundingClientRect();return i&&(e.style.display=""),n}};function Pi(t,i){for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}function Qm(t){if(typeof t!="number"&&t!=null){let[i,e]=t.split(yv);return!e||e==="px"?parseFloat(i):null}return t||null}function Zm(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function xv(t,i){return t===i?!0:t.isOriginClipped===i.isOriginClipped&&t.isOriginOutsideView===i.isOriginOutsideView&&t.isOverlayClipped===i.isOverlayClipped&&t.isOverlayOutsideView===i.isOverlayOutsideView}var Jm="cdk-global-overlay-wrapper";function Sa(t){return new Is}var Is=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Jm),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:a,height:o,maxWidth:r,maxHeight:d}=n,h=(a==="100%"||a==="100vw")&&(!r||r==="100%"||r==="100vw"),p=(o==="100%"||o==="100vh")&&(!d||d==="100%"||d==="100vh"),f=this._xPosition,g=this._xOffset,v=this._overlayRef.getConfig().direction==="rtl",x="",I="",b="";h?b="flex-start":f==="center"?(b="center",v?I=g:x=g):v?f==="left"||f==="end"?(b="flex-end",x=g):(f==="right"||f==="start")&&(b="flex-start",I=g):f==="left"||f==="start"?(b="flex-start",x=g):(f==="right"||f==="end")&&(b="flex-end",I=g),i.position=this._cssPosition,i.marginLeft=h?"0":x,i.marginTop=p?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=h?"0":I,e.justifyContent=b,e.alignItems=p?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(Jm),n.justifyContent=n.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},rh=(()=>{class t{_injector=c(X);constructor(){}global(){return Sa()}flexibleConnectedTo(e){return Ln(this._injector,e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Zo=new y("OVERLAY_DEFAULT_CONFIG");function un(t,i){t.get(Re).load(oh);let e=t.get(Ts),n=t.get(Q),a=t.get(Se),o=t.get(Qn),r=t.get(He),d=t.get(ve,null,{optional:!0})||t.get(pt).createRenderer(null,null),h=new cn(i),p=t.get(Zo,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||r.value,"showPopover"in n.body?h.usePopover=i?.usePopover??p:h.usePopover=!1;let f=n.createElement("div"),g=n.createElement("div");f.id=a.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),g.appendChild(f),h.usePopover&&(g.setAttribute("popover","manual"),g.classList.add("cdk-overlay-popover"));let v=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return Xc(v)?v.after(g):v?.type==="parent"?v.element.appendChild(g):e.getContainerElement().appendChild(g),new wa(new Xo(f,o,t),g,f,h,t.get(W),t.get(ih),n,t.get(ts),t.get(ah),i?.disableAnimations??t.get(la,null,{optional:!0})==="NoopAnimations",t.get(tn),d)}var sh=(()=>{class t{scrollStrategies=c(th);_positionBuilder=c(rh);_injector=c(X);constructor(){}create(e){return un(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cv=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],wv=new y("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>dn(t)}}),Ea=(()=>{class t{elementRef=c(O);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),lh=new y("cdk-connected-overlay-default-config"),Rs=(()=>{class t{_dir=c(He,{optional:!0});_injector=c(X);_overlayRef;_templatePortal;_backdropSubscription=he.EMPTY;_attachSubscription=he.EMPTY;_detachSubscription=he.EMPTY;_positionSubscription=he.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(wv);_ngZone=c(W);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new R;positionChange=new R;attach=new R;detach=new R;overlayKeydown=new R;overlayOutsideClick=new R;constructor(){let e=c(lt),n=c(ct),a=c(lh,{optional:!0}),o=c(Zo,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new yt(e,n),this.scrollStrategy=this._scrollStrategyFactory(),a&&this._assignConfig(a)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Cv);let e=this._overlayRef=un(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!Oe(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let a=this._getOriginElement(),o=st(n);(!a||a!==o&&!a.contains(o))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new cn({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(a=>({originX:a.originX,originY:a.originY,overlayX:a.overlayX,overlayY:a.overlayY,offsetX:a.offsetX||this.offsetX,offsetY:a.offsetY||this.offsetY,panelClass:a.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Ln(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Ea?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ea?this.origin.elementRef.nativeElement:this.origin instanceof O?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(mu(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",B],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",B],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",B],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",B],push:[2,"cdkConnectedOverlayPush","push",B],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",B],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",B],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Ce]})}return t})(),Ht=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[sh],imports:[te,Pn,Gc,Gc]})}return t})();function Li(t){return t.buttons===0||t.detail===0}function Bi(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Jo;function ch(){if(Jo==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Jo=!0}))}finally{Jo=Jo||!1}return Jo}function Ma(t){return ch()?t:!!t.capture}var dh=new y("cdk-input-modality-detector-options"),uh={ignoreKeys:[18,17,224,91,16]},mh=650,Qc={passive:!0,capture:!0},hh=(()=>{class t{_platform=c(de);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Yn(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=st(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<mh||(this._modality.next(Li(e)?"keyboard":"mouse"),this._mostRecentTarget=st(e))};_onTouchstart=e=>{if(Bi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=st(e)};constructor(){let e=c(W),n=c(Q),a=c(dh,{optional:!0});if(this._options=S(S({},uh),a),this.modalityDetected=this._modality.pipe(sa(1)),this.modalityChanged=this.modalityDetected.pipe(ac()),this._platform.isBrowser){let o=c(pt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Qc),o.listen(n,"mousedown",this._onMousedown,Qc),o.listen(n,"touchstart",this._onTouchstart,Qc)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),er=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(er||{}),ph=new y("cdk-focus-monitor-default-options"),Os=Ma({passive:!0,capture:!0}),xt=(()=>{class t{_ngZone=c(W);_platform=c(de);_inputModalityDetector=c(hh);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(Q);_stopInputModalityDetector=new T;constructor(){let e=c(ph,{optional:!0});this._detectionMode=e?.detectionMode||er.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=st(e);for(let a=n;a;a=a.parentElement)e.type==="focus"?this._onFocus(e,a):this._onBlur(e,a)};monitor(e,n=!1){let a=Mt(e);if(!this._platform.isBrowser||a.nodeType!==1)return Ue();let o=Uc(a)||this._document,r=this._elementInfo.get(a);if(r)return n&&(r.checkChildren=!0),r.subject;let d={checkChildren:n,subject:new T,rootNode:o};return this._elementInfo.set(a,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(e){let n=Mt(e),a=this._elementInfo.get(n);a&&(a.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(a))}focusVia(e,n,a){let o=Mt(e),r=this._document.activeElement;o===r?this._getClosestElementsInfo(o).forEach(([d,h])=>this._originChanged(d,n,h)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(a))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===er.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===er.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?mh:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(e,n){let a=this._elementInfo.get(n),o=st(e);!a||!a.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),a)}_onBlur(e,n){let a=this._elementInfo.get(n);!a||a.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(a,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,a=this._rootNodeFocusListenerCount.get(n)||0;a||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Os),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Os)}),this._rootNodeFocusListenerCount.set(n,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ee(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let a=this._rootNodeFocusListenerCount.get(n);a>1?this._rootNodeFocusListenerCount.set(n,a-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Os),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Os),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,a){this._setClasses(e,n),this._emitOrigin(a,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((a,o)=>{(o===e||a.checkChildren&&o.contains(e))&&n.push([o,a])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let r=0;r<o.length;r++)if(o[r].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Zc=(()=>{class t{_elementRef=c(O);_focusMonitor=c(xt);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new R;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Aa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,a){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ps;function Ev(){if(Ps===void 0&&(Ps=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Ps=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Ps}function Ni(t){return Ev()?.createHTML(t)||t}function fh(t,i,e){let n=e.sanitize(St.HTML,i);t.innerHTML=Ni(n||"")}var gh=new Set,Vi,Fa=(()=>{class t{_platform=c(de);_nonce=c(ca,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Sv}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Dv(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Dv(t,i){if(!gh.has(t))try{Vi||(Vi=document.createElement("style"),i&&Vi.setAttribute("nonce",i),Vi.setAttribute("type","text/css"),document.head.appendChild(Vi)),Vi.sheet&&(Vi.sheet.insertRule(`@media ${t} {body{ }}`,0),gh.add(t))}catch(e){console.error(e)}}function Sv(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var tr=(()=>{class t{_mediaMatcher=c(Fa);_zone=c(W);_queries=new Map;_destroySubject=new T;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return _h(On(e)).some(a=>this._registerQuery(a).mql.matches)}observe(e){let a=_h(On(e)).map(r=>this._registerQuery(r).observable),o=ra(a);return o=su(o.pipe(Je(1)),o.pipe(sa(1),vn(0))),o.pipe(be(r=>{let d={matches:!1,breakpoints:{}};return r.forEach(({matches:h,query:p})=>{d.matches=d.matches||h,d.breakpoints[p]=h}),d}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new Ze(r=>{let d=h=>this._zone.run(()=>r.next(h));return n.addListener(d),()=>{n.removeListener(d)}}).pipe(Le(n),be(({matches:r})=>({query:e,matches:r})),Ee(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function _h(t){return t.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function Mv(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let i=0;i<t.addedNodes.length;i++)if(!(t.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<t.removedNodes.length;i++)if(!(t.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var bh=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vh=(()=>{class t{_mutationObserverFactory=c(bh);_observedElements=new Map;_ngZone=c(W);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=Mt(e);return new Ze(a=>{let r=this._observeElement(n).pipe(be(d=>d.filter(h=>!Mv(h))),se(d=>!!d.length)).subscribe(d=>{this._ngZone.run(()=>{a.next(d)})});return()=>{r.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new T,a=this._mutationObserverFactory.create(o=>n.next(o));a&&a.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:a,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:a}=this._observedElements.get(e);n&&n.disconnect(),a.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ls=(()=>{class t{_contentObserver=c(vh);_elementRef=c(O);event=new R;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=jt(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(vn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",B],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),ka=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[bh]})}return t})();var td=(()=>{class t{_platform=c(de);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Fv(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=Av(Bv(e));if(n&&(yh(n)===-1||!this.isVisible(n)))return!1;let a=e.nodeName.toLowerCase(),o=yh(e);return e.hasAttribute("contenteditable")?o!==-1:a==="iframe"||a==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Pv(e)?!1:a==="audio"?e.hasAttribute("controls")?o!==-1:!1:a==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return Lv(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Av(t){try{return t.frameElement}catch{return null}}function Fv(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function kv(t){let i=t.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function Iv(t){return Rv(t)&&t.type=="hidden"}function Tv(t){return Ov(t)&&t.hasAttribute("href")}function Rv(t){return t.nodeName.toLowerCase()=="input"}function Ov(t){return t.nodeName.toLowerCase()=="a"}function wh(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let i=t.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function yh(t){if(!wh(t))return null;let i=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Pv(t){let i=t.nodeName.toLowerCase(),e=i==="input"&&t.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function Lv(t){return Iv(t)?!1:kv(t)||Tv(t)||t.hasAttribute("contenteditable")||wh(t)}function Bv(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var ed=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,n,a,o=!1,r){this._element=i,this._checker=e,this._ngZone=n,this._document=a,this._injector=r,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(i),!!n}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=0;n<e.length;n++){let a=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(a)return a}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=e.length-1;n>=0;n--){let a=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(a)return a}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?$e(i,{injector:this._injector}):setTimeout(i)}},nd=(()=>{class t{_checker=c(td);_ngZone=c(W);_document=c(Q);_injector=c(X);constructor(){c(Re).load(Aa)}create(e,n=!1){return new ed(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Eh=new y("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Dh=new y("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Nv=0,id=(()=>{class t{_ngZone=c(W);_defaultOptions=c(Dh,{optional:!0});_liveElement;_document=c(Q);_sanitizer=c(Ri);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(Eh,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let a=this._defaultOptions,o,r;return n.length===1&&typeof n[0]=="number"?r=n[0]:[o,r]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=a&&a.politeness?a.politeness:"polite"),r==null&&a&&(r=a.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(d=>this._currentResolve=d)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:fh(this._liveElement,e,this._sanitizer),typeof r=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),a=this._document.createElement("div");for(let o=0;o<n.length;o++)n[o].remove();return a.classList.add(e),a.classList.add("cdk-visually-hidden"),a.setAttribute("aria-atomic","true"),a.setAttribute("aria-live","polite"),a.id=`cdk-live-announcer-${Nv++}`,this._document.body.appendChild(a),a}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<n.length;a++){let o=n[a],r=o.getAttribute("aria-owns");r?r.indexOf(e)===-1&&o.setAttribute("aria-owns",r+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ii=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(ii||{}),xh="cdk-high-contrast-black-on-white",Ch="cdk-high-contrast-white-on-black",Jc="cdk-high-contrast-active",Sh=(()=>{class t{_platform=c(de);_hasCheckedHighContrastMode=!1;_document=c(Q);_breakpointSubscription;constructor(){this._breakpointSubscription=c(tr).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return ii.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,a=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(a&&a.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return ii.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return ii.BLACK_ON_WHITE}return ii.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Jc,xh,Ch),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===ii.BLACK_ON_WHITE?e.add(Jc,xh):n===ii.WHITE_ON_BLACK&&e.add(Jc,Ch)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nr=(()=>{class t{constructor(){c(Sh)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ka]})}return t})();function Vv(t,i){}var ai=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var od=(()=>{class t extends Ca{_elementRef=c(O);_focusTrapFactory=c(nd);_config;_interactivityChecker=c(td);_ngZone=c(W);_focusMonitor=c(xt);_renderer=c(ve);_changeDetectorRef=c(ge);_injector=c(X);_platform=c(de);_document=c(Q);_portalOutlet;_focusTrapped=new T;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(ai,{optional:!0})||new ai,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let n=this._ariaLabelledByQueue.indexOf(e);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}attachDomPortal=e=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{o(),r(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",a),r=this._renderer.listen(e,"mousedown",a)})),e.focus(n)}_focusByCssSelector(e,n){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,n)}_trapFocus(e){this._isDestroyed||$e(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||n.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,n=null;if(typeof e=="string"?n=this._document.querySelector(e):typeof e=="boolean"?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&typeof n.focus=="function"){let a=ei(),o=this._elementRef.nativeElement;(!a||a===this._document.body||a===o||o.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,n=ei();return e===n||e.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ei()))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(n,a){if(n&1&&De(wn,7),n&2){let o;P(o=L())&&(a._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(n,a){n&2&&A("id",a._config.id||null)("role",a._config.role)("aria-modal",a._config.ariaModal)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null)},features:[J],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,a){n&1&&Ie(0,Vv,0,0,"ng-template",0)},dependencies:[wn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),ir=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new T;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!Oe(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(i),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},jv=new y("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>Da(t)}}),zv=new y("DialogData"),Hv=new y("DefaultDialogConfig");function Uv(t){let i=ne(t),e=new R;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var rd=(()=>{class t{_injector=c(X);_defaultOptions=c(Hv,{optional:!0});_parentDialog=c(t,{optional:!0,skipSelf:!0});_overlayContainer=c(Ts);_idGenerator=c(Se);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new T;_afterOpenedAtThisLevel=new T;_ariaHiddenElements=new Map;_scrollStrategy=c(jv);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=qn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Le(void 0)));constructor(){}open(e,n){let a=this._defaultOptions||new ai;n=S(S({},a),n),n.id=n.id||this._idGenerator.getId("cdk-dialog-"),n.id&&this.getDialogById(n.id);let o=this._getOverlayConfig(n),r=un(this._injector,o),d=new ir(r,n),h=this._attachContainer(r,d,n);if(d.containerInstance=h,!this.openDialogs.length){let p=this._overlayContainer.getContainerElement();h._focusTrapped?h._focusTrapped.pipe(Je(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(p)}):this._hideNonDialogContentFromAssistiveTechnology(p)}return this._attachDialogContent(e,d,h,n),this.openDialogs.push(d),d.closed.subscribe(()=>this._removeOpenDialog(d,!0)),this.afterOpened.next(d),d}closeAll(){ad(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){ad(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),ad(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let n=new cn({positionStrategy:e.positionStrategy||Sa().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,a){let o=a.injector||a.viewContainerRef?.injector,r=[{provide:ai,useValue:a},{provide:ir,useValue:n},{provide:wa,useValue:e}],d;a.container?typeof a.container=="function"?d=a.container:(d=a.container.type,r.push(...a.container.providers(a))):d=od;let h=new ni(d,a.viewContainerRef,X.create({parent:o||this._injector,providers:r}));return e.attach(h).instance}_attachDialogContent(e,n,a,o){if(e instanceof lt){let r=this._createInjector(o,n,a,void 0),d={$implicit:o.data,dialogRef:n};o.templateContext&&(d=S(S({},d),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),a.attachTemplatePortal(new yt(e,null,d,r))}else{let r=this._createInjector(o,n,a,this._injector),d=a.attachComponentPortal(new ni(e,o.viewContainerRef,r));n.componentRef=d,n.componentInstance=d.instance}}_createInjector(e,n,a,o){let r=e.injector||e.viewContainerRef?.injector,d=[{provide:zv,useValue:e.data},{provide:ir,useValue:n}];return e.providers&&(typeof e.providers=="function"?d.push(...e.providers(n,e,a)):d.push(...e.providers)),e.direction&&(!r||!r.get(He,null,{optional:!0}))&&d.push({provide:He,useValue:Uv(e.direction)}),X.create({parent:r||o,providers:d})}_removeOpenDialog(e,n){let a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute("aria-hidden",o):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let n=e.parentElement.children;for(let a=n.length-1;a>-1;a--){let o=n[a];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ad(t,i){let e=t.length;for(;e--;)i(t[e])}var Mh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[rd],imports:[Ht,Pn,nr,Pn]})}return t})();function At(t){return t!=null&&`${t}`!="false"}var Ah={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var $v=new y("MATERIAL_ANIMATIONS"),Fh=null;function sd(){return c($v,{optional:!0})?.animationsDisabled||c(la,{optional:!0})==="NoopAnimations"?"di-disabled":(Fh??=c(Fa).matchMedia("(prefers-reduced-motion)").matches,Fh?"reduced-motion":"enabled")}function ye(){return sd()!=="enabled"}var Gv=200,Bs=class{_letterKeyStream=new T;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new T;selectedItem=this._selectedItem;constructor(i,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:Gv;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(yn(e=>this._pressedLetters.push(e)),vn(i),se(()=>this._pressedLetters.length>0),be(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let a=(this._selectedItemIndex+n)%this._items.length,o=this._items[a];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};var Ia=class{_items;_activeItemIndex=ne(-1);_activeItem=ne(null);_wrap=!1;_typeaheadSubscription=he.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof xn?this._itemChangesSubscription=i.changes.subscribe(n=>this._itemsChanged(n.toArray())):Yt(i)&&(this._effectRef=nn(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new T;change=new T;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Bs(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,a=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let o=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(o<r?o:r-1,-1);break}else return;default:(a||Oe(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),n=typeof i=="number"?i:e.indexOf(i),a=e[n];this._activeItem.set(a??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let a=(this._activeItemIndex()+i*n+e.length)%e.length,o=e[a];if(!this._skipPredicateFn(o)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let n=this._getItemsArray();if(n[i]){for(;this._skipPredicateFn(n[i]);)if(i+=e,!n[i])return;this.setActiveItem(i)}}_getItemsArray(){return Yt(this._items)?this._items():this._items instanceof xn?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let n=i.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var zi=class extends Ia{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Bn=class extends Ia{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Rh=" ";function Ta(t,i,e){let n=Vs(t,i);e=e.trim(),!n.some(a=>a.trim()===e)&&(n.push(e),t.setAttribute(i,n.join(Rh)))}function ri(t,i,e){let n=Vs(t,i);e=e.trim();let a=n.filter(o=>o!==e);a.length?t.setAttribute(i,a.join(Rh)):t.removeAttribute(i)}function Vs(t,i){return t.getAttribute(i)?.match(/\S+/g)??[]}var Oh="cdk-describedby-message",Ns="cdk-describedby-host",cd=0,Ph=(()=>{class t{_platform=c(de);_document=c(Q);_messageRegistry=new Map;_messagesContainer=null;_id=`${cd++}`;constructor(){c(Re).load(Aa),this._id=c(Di)+"-"+cd++}describe(e,n,a){if(!this._canBeDescribed(e,n))return;let o=ld(n,a);typeof n!="string"?(Th(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,a),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,a){if(!n||!this._isElementNode(e))return;let o=ld(n,a);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n=="string"){let r=this._messageRegistry.get(o);r&&r.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Ns}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(Ns);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let a=this._document.createElement("div");Th(a,this._id),a.textContent=e,n&&a.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(ld(e,n),{messageElement:a,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let a=this._document.createElement("div");a.style.visibility="hidden",a.classList.add(e),a.classList.add("cdk-visually-hidden"),this._platform.isBrowser||a.setAttribute("platform","server"),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(e){let n=Vs(e,"aria-describedby").filter(a=>a.indexOf(Oh)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let a=this._messageRegistry.get(n);Ta(e,"aria-describedby",a.messageElement.id),e.setAttribute(Ns,this._id),a.referenceCount++}_removeMessageReference(e,n){let a=this._messageRegistry.get(n);a.referenceCount--,ri(e,"aria-describedby",a.messageElement.id),e.removeAttribute(Ns)}_isElementDescribedByMessage(e,n){let a=Vs(e,"aria-describedby"),o=this._messageRegistry.get(n),r=o&&o.messageElement.id;return!!r&&a.indexOf(r)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let a=n==null?"":`${n}`.trim(),o=e.getAttribute("aria-label");return a?!o||o.trim()!==a:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ld(t,i){return typeof t=="string"?`${i||""}/${t}`:t}function Th(t,i){t.id||(t.id=`${Oh}-${i}-${cd++}`)}function Wv(t,i){}var zs=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},dd="mdc-dialog--open",Lh="mdc-dialog--opening",Bh="mdc-dialog--closing",Yv=150,qv=75,Kv=(()=>{class t extends od{_animationStateChanged=new R;_animationsEnabled=!ye();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Vh(this._config.enterAnimationDuration)??Yv:0;_exitAnimationDuration=this._animationsEnabled?Vh(this._config.exitAnimationDuration)??qv:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Nh,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Lh,dd)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(dd),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(dd),this._animationsEnabled?(this._hostElement.style.setProperty(Nh,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Bh)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Lh,Bh)}_waitForAnimationToComplete(e,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let n=super.attachComponentPortal(e);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(n,a){n&2&&(_t("id",a._config.id),A("aria-modal",a._config.ariaModal)("role",a._config.role)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null),z("_mat-animation-noopable",!a._animationsEnabled)("mat-mdc-dialog-container-with-actions",a._actionSectionCount>0))},features:[J],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,a){n&1&&(s(0,"div",0)(1,"div",1),Ie(2,Wv,0,0,"ng-template",2),l()())},dependencies:[wn],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return t})(),Nh="--mat-dialog-transition-duration";function Vh(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?jt(t.substring(0,t.length-2)):t.endsWith("s")?jt(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var js=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(js||{}),mn=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ci(1);_beforeClosed=new Ci(1);_result;_closeFallbackTimeout;_state=js.OPEN;_closeInteractionType;constructor(i,e,n){this._ref=i,this._config=e,this._containerInstance=n,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe(se(a=>a.state==="opened"),Je(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(se(a=>a.state==="closed"),Je(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),je(this.backdropClick(),this.keydownEvents().pipe(se(a=>a.keyCode===27&&!this.disableClose&&!Oe(a)))).subscribe(a=>{this.disableClose||(a.preventDefault(),jh(this,a.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(se(n=>n.state==="closing"),Je(1)).subscribe(n=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=js.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=js.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function jh(t,i,e){return t._closeInteractionType=i,t.close(e)}var rr=new y("MatMdcDialogData"),Xv=new y("mat-mdc-dialog-default-options"),Qv=new y("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>Da(t)}}),hn=(()=>{class t{_defaultOptions=c(Xv,{optional:!0});_scrollStrategy=c(Qv);_parentDialog=c(t,{optional:!0,skipSelf:!0});_idGenerator=c(Se);_injector=c(X);_dialog=c(rd);_animationsDisabled=ye();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new T;_afterOpenedAtThisLevel=new T;dialogConfigClass=zs;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=qn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Le(void 0)));constructor(){this._dialogRefConstructor=mn,this._dialogContainerType=Kv,this._dialogDataToken=rr}open(e,n){let a;n=S(S({},this._defaultOptions||new zs),n),n.id=n.id||this._idGenerator.getId("mat-mdc-dialog-"),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,xe(S({},n),{positionStrategy:Sa(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()==="0"||n.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:ai,useValue:n}]},templateContext:()=>({dialogRef:a}),providers:(r,d,h)=>(a=new this._dialogRefConstructor(r,n,h),a.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:d.data},{provide:this._dialogRefConstructor,useValue:a}])}));return a.componentRef=o.componentRef,a.componentInstance=o.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(a);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let n=e.length;for(;n--;)e[n].close()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zh=(()=>{class t{dialogRef=c(mn,{optional:!0});_elementRef=c(O);_dialog=c(hn);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Uh(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let n=e._matDialogClose||e._matDialogCloseResult;n&&(this.dialogResult=n.currentValue)}_onButtonClick(e){jh(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(n,a){n&1&&F("click",function(r){return a._onButtonClick(r)}),n&2&&A("aria-label",a.ariaLabel||null)("type",a.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Ce]})}return t})(),Hh=(()=>{class t{_dialogRef=c(mn,{optional:!0});_elementRef=c(O);_dialog=c(hn);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Uh(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t})}return t})(),si=(()=>{class t extends Hh{id=c(Se).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(n,a){n&2&&_t("id",a.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[J]})}return t})(),li=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Fu([qo])]})}return t})(),Ra=(()=>{class t extends Hh{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(n,a){n&2&&z("mat-mdc-dialog-actions-align-start",a.align==="start")("mat-mdc-dialog-actions-align-center",a.align==="center")("mat-mdc-dialog-actions-align-end",a.align==="end")},inputs:{align:"align"},features:[J]})}return t})();function Uh(t,i){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(n=>n.id===e.id):null}var Ct=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[hn],imports:[Mh,Ht,Pn,te]})}return t})();var Oa,$h=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function ud(){if(Oa)return Oa;if(typeof document!="object"||!document)return Oa=new Set($h),Oa;let t=document.createElement("input");return Oa=new Set($h.filter(i=>(t.setAttribute("type",i),t.type===i))),Oa}var Jt=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Jt||{}),md=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Jt.HIDDEN;constructor(i,e,n,a=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},Gh=Ma({passive:!0,capture:!0}),hd=class{_events=new Map;addHandler(i,e,n,a){let o=this._events.get(e);if(o){let r=o.get(n);r?r.add(a):o.set(n,new Set([a]))}else this._events.set(e,new Map([[n,new Set([a])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Gh)})}removeHandler(i,e,n){let a=this._events.get(i);if(!a)return;let o=a.get(e);o&&(o.delete(n),o.size===0&&a.delete(e),a.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Gh)))}_delegateEventHandler=i=>{let e=st(i);e&&this._events.get(i.type)?.forEach((n,a)=>{(a===e||a.contains(e))&&n.forEach(o=>o.handleEvent(i))})}},sr={enterDuration:225,exitDuration:150},Zv=800,Wh=Ma({passive:!0,capture:!0}),Yh=["mousedown","touchstart"],qh=["mouseup","mouseleave","touchend","touchcancel"],Jv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,a){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Hi=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new hd;constructor(i,e,n,a,o){this._target=i,this._ngZone=e,this._platform=a,a.isBrowser&&(this._containerElement=Mt(n)),o&&o.get(Re).load(Jv)}fadeInRipple(i,e,n={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=S(S({},sr),n.animation);n.centered&&(i=a.left+a.width/2,e=a.top+a.height/2);let r=n.radius||ey(i,e,a),d=i-a.left,h=e-a.top,p=o.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${d-r}px`,f.style.top=`${h-r}px`,f.style.height=`${r*2}px`,f.style.width=`${r*2}px`,n.color!=null&&(f.style.backgroundColor=n.color),f.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(f);let g=window.getComputedStyle(f),v=g.transitionProperty,x=g.transitionDuration,I=v==="none"||x==="0s"||x==="0s, 0s"||a.width===0&&a.height===0,b=new md(this,f,n,I);f.style.transform="scale3d(1, 1, 1)",b.state=Jt.FADING_IN,n.persistent||(this._mostRecentTransientRipple=b);let j=null;return!I&&(p||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let q=()=>{j&&(j.fallbackTimer=null),clearTimeout(Ve),this._finishRippleTransition(b)},re=()=>this._destroyRipple(b),Ve=setTimeout(re,p+100);f.addEventListener("transitionend",q),f.addEventListener("transitioncancel",re),j={onTransitionEnd:q,onTransitionCancel:re,fallbackTimer:Ve}}),this._activeRipples.set(b,j),(I||!p)&&this._finishRippleTransition(b),b}fadeOutRipple(i){if(i.state===Jt.FADING_OUT||i.state===Jt.HIDDEN)return;let e=i.element,n=S(S({},sr),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=Jt.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Mt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Yh.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{qh.forEach(e=>{this._triggerElement.addEventListener(e,this,Wh)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Jt.FADING_IN?this._startFadeOutTransition(i):i.state===Jt.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=Jt.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Jt.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Li(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Zv;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Bi(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Jt.VISIBLE||i.config.terminateOnPointerUp&&i.state===Jt.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Yh.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(qh.forEach(e=>i.removeEventListener(e,this,Wh)),this._pointerUpEventsRegistered=!1))}};function ey(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),a=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+a*a)}var Pa=new y("mat-ripple-global-options"),Nn=(()=>{class t{_elementRef=c(O);_animationsDisabled=ye();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(W),n=c(de),a=c(Pa,{optional:!0}),o=c(X);this._globalOptions=a||{},this._rippleRenderer=new Hi(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:S(S(S({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,a){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,S(S({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,S(S({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,a){n&2&&z("mat-ripple-unbounded",a.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var ty={capture:!0},ny=["focus","mousedown","mouseenter","touchstart"],pd="mat-ripple-loader-uninitialized",fd="mat-ripple-loader-class-name",Kh="mat-ripple-loader-centered",Us="mat-ripple-loader-disabled",Xh=(()=>{class t{_document=c(Q);_animationsDisabled=ye();_globalRippleOptions=c(Pa,{optional:!0});_platform=c(de);_ngZone=c(W);_injector=c(X);_eventCleanups;_hosts=new Map;constructor(){let e=c(pt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ny.map(n=>e.listen(this._document,n,this._onInteraction,ty)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(pd,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(fd))&&e.setAttribute(fd,n.className||""),n.centered&&e.setAttribute(Kh,""),n.disabled&&e.setAttribute(Us,"")}setDisabled(e,n){let a=this._hosts.get(e);a?(a.target.rippleDisabled=n,!n&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(e))):n?e.setAttribute(Us,""):e.removeAttribute(Us)}_onInteraction=e=>{let n=st(e);if(n instanceof HTMLElement){let a=n.closest(`[${pd}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(fd)),e.append(n);let a=this._globalRippleOptions,o=this._animationsDisabled?0:a?.animation?.enterDuration??sr.enterDuration,r=this._animationsDisabled?0:a?.animation?.exitDuration??sr.exitDuration,d={rippleDisabled:this._animationsDisabled||a?.disabled||e.hasAttribute(Us),rippleConfig:{centered:e.hasAttribute(Kh),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:r}}},h=new Hi(d,this._ngZone,n,this._platform,this._injector),p=!d.rippleDisabled;p&&h.setupTriggerEvents(e),this._hosts.set(e,{target:d,renderer:h,hasSetUpEvents:p}),e.removeAttribute(pd)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,a){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var iy=["mat-icon-button",""],ay=["*"],oy=new y("MAT_BUTTON_CONFIG");function Qh(t){return t==null?void 0:rt(t)}var gd=(()=>{class t{_elementRef=c(O);_ngZone=c(W);_animationsDisabled=ye();_config=c(oy,{optional:!0});_focusMonitor=c(xt);_cleanupClick;_renderer=c(ve);_rippleLoader=c(Xh);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Re).load(Rt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,a){n&2&&(A("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),qe(a.color?"mat-"+a.color:""),z("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",B],disabled:[2,"disabled","disabled",B],ariaDisabled:[2,"aria-disabled","ariaDisabled",B],disabledInteractive:[2,"disabledInteractive","disabledInteractive",B],tabIndex:[2,"tabIndex","tabIndex",Qh],_tabindex:[2,"tabindex","_tabindex",Qh]}})}return t})(),pn=(()=>{class t extends gd{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[J],attrs:iy,ngContentSelectors:ay,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,a){n&1&&(me(),Kt(0,"span",0),Y(1),Kt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var En=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[te]})}return t})();var ry=["matButton",""],sy=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ly=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Zh=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ot=(()=>{class t extends gd{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=cy(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,a=this._appearance?Zh.get(this._appearance):null,o=Zh.get(e);a&&n.remove(...a),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[J],attrs:ry,ngContentSelectors:ly,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,a){n&1&&(me(sy),Kt(0,"span",0),Y(1),Ge(2,"span",1),Y(3,1),dt(),Y(4,2),Kt(5,"span",2)(6,"span",3)),n&2&&z("mdc-button__ripple",!a._isFab)("mdc-fab__ripple",a._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function cy(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var wt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[En,te]})}return t})();function Jh(t){return Error(`Unable to find icon with the name "${t}"`)}function dy(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function ep(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function tp(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Vn=class{url;svgText;options;svgElement=null;constructor(i,e,n){this.url=i,this.svgText=e,this.options=n}},Gs=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,a,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=a}addSvgIcon(e,n,a){return this.addSvgIconInNamespace("",e,n,a)}addSvgIconLiteral(e,n,a){return this.addSvgIconLiteralInNamespace("",e,n,a)}addSvgIconInNamespace(e,n,a,o){return this._addSvgIconConfig(e,n,new Vn(a,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,a,o){let r=this._sanitizer.sanitize(St.HTML,a);if(!r)throw tp(a);let d=Ni(r);return this._addSvgIconConfig(e,n,new Vn("",d,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,a){return this._addSvgIconSetConfig(e,new Vn(n,null,a))}addSvgIconSetLiteralInNamespace(e,n,a){let o=this._sanitizer.sanitize(St.HTML,n);if(!o)throw tp(n);let r=Ni(o);return this._addSvgIconSetConfig(e,new Vn("",r,a))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(St.RESOURCE_URL,e);if(!n)throw ep(e);let a=this._cachedIconsByUrl.get(n);return a?Ue($s(a)):this._loadSvgIconFromConfig(new Vn(e,null)).pipe(yn(o=>this._cachedIconsByUrl.set(n,o)),be(o=>$s(o)))}getNamedSvgIcon(e,n=""){let a=np(n,e),o=this._svgIconConfigs.get(a);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(a,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(n);return r?this._getSvgFromIconSetConfigs(e,r):ru(Jh(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Ue($s(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(be(n=>$s(n)))}_getSvgFromIconSetConfigs(e,n){let a=this._extractIconWithNameFromAnySet(e,n);if(a)return Ue(a);let o=n.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(cu(d=>{let p=`Loading icon set URL: ${this._sanitizer.sanitize(St.RESOURCE_URL,r.url)} failed: ${d.message}`;return this._errorHandler.handleError(new Error(p)),Ue(null)})));return jr(o).pipe(be(()=>{let r=this._extractIconWithNameFromAnySet(e,n);if(!r)throw Jh(e);return r}))}_extractIconWithNameFromAnySet(e,n){for(let a=n.length-1;a>=0;a--){let o=n[a];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let r=this._svgElementFromConfig(o),d=this._extractSvgIconFromSet(r,e,o.options);if(d)return d}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(yn(n=>e.svgText=n),be(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Ue(null):this._fetchIcon(e).pipe(yn(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,a){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,a);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),a);let d=this._svgElementFromString(Ni("<svg></svg>"));return d.appendChild(r),this._setSvgAttributes(d,a)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let a=n.querySelector("svg");if(!a)throw Error("<svg> tag not found");return a}_toSvgElement(e){let n=this._svgElementFromString(Ni("<svg></svg>")),a=e.attributes;for(let o=0;o<a.length;o++){let{name:r,value:d}=a[o];r!=="id"&&n.setAttribute(r,d)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:a}=e,o=a?.withCredentials??!1;if(!this._httpClient)throw dy();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let r=this._sanitizer.sanitize(St.RESOURCE_URL,n);if(!r)throw ep(n);let d=this._inProgressUrlFetches.get(r);if(d)return d;let h=this._httpClient.get(r,{responseType:"text",withCredentials:o}).pipe(be(p=>Ni(p)),zr(()=>this._inProgressUrlFetches.delete(r)),uu());return this._inProgressUrlFetches.set(r,h),h}_addSvgIconConfig(e,n,a){return this._svgIconConfigs.set(np(e,n),a),this}_addSvgIconSetConfig(e,n){let a=this._iconSetConfigs.get(e);return a?a.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let a=0;a<this._resolvers.length;a++){let o=this._resolvers[a](n,e);if(o)return uy(o)?new Vn(o.url,null,o.options):new Vn(o,null)}}static \u0275fac=function(n){return new(n||t)(le(Cn,8),le(Ri),le(Q,8),le(Ei))};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $s(t){return t.cloneNode(!0)}function np(t,i){return t+":"+i}function uy(t){return!!(t.url&&t.options)}var my=["*"],hy=new y("MAT_ICON_DEFAULT_OPTIONS"),py=new y("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(Q),i=t?t.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),ip=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],fy=ip.map(t=>`[${t}]`).join(", "),gy=/^url\(['"]?#(.*?)['"]?\)$/,Pt=(()=>{class t{_elementRef=c(O);_iconRegistry=c(Gs);_location=c(py);_errorHandler=c(Ei);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=he.EMPTY;constructor(){let e=c(new kn("aria-hidden"),{optional:!0}),n=c(hy,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let a=e.childNodes[n];(a.nodeType!==1||a.nodeName.toLowerCase()==="svg")&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>e.classList.remove(a)),n.forEach(a=>e.classList.add(a)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((a,o)=>{a.forEach(r=>{o.setAttribute(r.name,`url('${e}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(fy),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)ip.forEach(r=>{let d=n[o],h=d.getAttribute(r),p=h?h.match(gy):null;if(p){let f=a.get(d);f||(f=[],a.set(d,f)),f.push({name:r,value:p[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,a]=this._splitIconName(e);n&&(this._svgNamespace=n),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,n).pipe(Je(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${n}:${a}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,a){n&2&&(A("data-mat-icon-type",a._usingFontIcon()?"font":"svg")("data-mat-icon-name",a._svgName||a.fontIcon)("data-mat-icon-namespace",a._svgNamespace||a.fontSet)("fontIcon",a._usingFontIcon()?a.fontIcon:null),qe(a.color?"mat-"+a.color:""),z("mat-icon-inline",a.inline)("mat-icon-no-color",a.color!=="primary"&&a.color!=="accent"&&a.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",B],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:my,decls:1,vars:0,template:function(n,a){n&1&&(me(),Y(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),Et=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[te]})}return t})();var mp=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(ae(ve),ae(O))};static \u0275dir=C({type:t})}return t})(),hp=(()=>{class t extends mp{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,features:[J]})}return t})(),ui=new y("");var _y={provide:ui,useExisting:ht(()=>mi),multi:!0};function by(){let t=Xt()?Xt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var vy=new y(""),mi=(()=>{class t extends mp{_compositionMode;_composing=!1;constructor(e,n,a){super(e,n),this._compositionMode=a,this._compositionMode==null&&(this._compositionMode=!by())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(ae(ve),ae(O),ae(vy,8))};static \u0275dir=C({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,a){n&1&&F("input",function(r){return a._handleInput(r.target.value)})("blur",function(){return a.onTouched()})("compositionstart",function(){return a._compositionStart()})("compositionend",function(r){return a._compositionEnd(r.target.value)})},standalone:!1,features:[oe([_y]),J]})}return t})();function yd(t){return t==null||xd(t)===0}function xd(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var jn=new y(""),ja=new y(""),yy=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Z=class{static min(i){return pp(i)}static max(i){return xy(i)}static required(i){return Cy(i)}static requiredTrue(i){return wy(i)}static email(i){return Ey(i)}static minLength(i){return Dy(i)}static maxLength(i){return Sy(i)}static pattern(i){return My(i)}static nullValidator(i){return Ys()}static compose(i){return yp(i)}static composeAsync(i){return xp(i)}};function pp(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function xy(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function Cy(t){return yd(t.value)?{required:!0}:null}function wy(t){return t.value===!0?null:{required:!0}}function Ey(t){return yd(t.value)||yy.test(t.value)?null:{email:!0}}function Dy(t){return i=>{let e=i.value?.length??xd(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Sy(t){return i=>{let e=i.value?.length??xd(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function My(t){if(!t)return Ys;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(yd(n.value))return null;let a=n.value;return i.test(a)?null:{pattern:{requiredPattern:e,actualValue:a}}}}function Ys(t){return null}function fp(t){return t!=null}function gp(t){return Wr(t)?ou(t):t}function _p(t){let i={};return t.forEach(e=>{i=e!=null?S(S({},i),e):i}),Object.keys(i).length===0?null:i}function bp(t,i){return i.map(e=>e(t))}function Ay(t){return!t.validate}function vp(t){return t.map(i=>Ay(i)?i:e=>i.validate(e))}function yp(t){if(!t)return null;let i=t.filter(fp);return i.length==0?null:function(e){return _p(bp(e,i))}}function Cd(t){return t!=null?yp(vp(t)):null}function xp(t){if(!t)return null;let i=t.filter(fp);return i.length==0?null:function(e){let n=bp(e,i).map(gp);return jr(n).pipe(be(_p))}}function wd(t){return t!=null?xp(vp(t)):null}function ap(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function Cp(t){return t._rawValidators}function wp(t){return t._rawAsyncValidators}function _d(t){return t?Array.isArray(t)?t:[t]:[]}function qs(t,i){return Array.isArray(t)?t.includes(i):t===i}function op(t,i){let e=_d(i);return _d(t).forEach(a=>{qs(e,a)||e.push(a)}),e}function rp(t,i){return _d(i).filter(e=>!qs(t,e))}var Ks=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Cd(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=wd(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Ft=class extends Ks{name;get formDirective(){return null}get path(){return null}},fn=class extends Ks{_parent=null;name=null;valueAccessor=null},Xs=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var za=(()=>{class t extends Xs{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(ae(fn,2))};static \u0275dir=C({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,a){n&2&&z("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)},standalone:!1,features:[J]})}return t})(),Ha=(()=>{class t extends Xs{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(ae(Ft,10))};static \u0275dir=C({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,a){n&2&&z("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)("ng-submitted",a.isSubmitted)},standalone:!1,features:[J]})}return t})();var lr="VALID",Ws="INVALID",La="PENDING",cr="DISABLED",di=class{},Qs=class extends di{value;source;constructor(i,e){super(),this.value=i,this.source=e}},ur=class extends di{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},mr=class extends di{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Ba=class extends di{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Zs=class extends di{source;constructor(i){super(),this.source=i}},pr=class extends di{source;constructor(i){super(),this.source=i}};function Ed(t){return(nl(t)?t.validators:t)||null}function Fy(t){return Array.isArray(t)?Cd(t):t||null}function Dd(t,i){return(nl(i)?i.asyncValidators:t)||null}function ky(t){return Array.isArray(t)?wd(t):t||null}function nl(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ep(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new ce(1e3,"");if(!n[e])throw new ce(1001,"")}function Dp(t,i,e){t._forEachChild((n,a)=>{if(e[a]===void 0)throw new ce(-1002,"")})}var Na=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return et(this.statusReactive)}set status(i){et(()=>this.statusReactive.set(i))}_status=Ke(()=>this.statusReactive());statusReactive=ne(void 0);get valid(){return this.status===lr}get invalid(){return this.status===Ws}get pending(){return this.status===La}get disabled(){return this.status===cr}get enabled(){return this.status!==cr}errors;get pristine(){return et(this.pristineReactive)}set pristine(i){et(()=>this.pristineReactive.set(i))}_pristine=Ke(()=>this.pristineReactive());pristineReactive=ne(!0);get dirty(){return!this.pristine}get touched(){return et(this.touchedReactive)}set touched(i){et(()=>this.touchedReactive.set(i))}_touched=Ke(()=>this.touchedReactive());touchedReactive=ne(!1);get untouched(){return!this.touched}_events=new T;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(op(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(op(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(rp(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(rp(i,this._rawAsyncValidators))}hasValidator(i){return qs(this._rawValidators,i)}hasAsyncValidator(i){return qs(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(xe(S({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new mr(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(a=>{a.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new mr(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(xe(S({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new ur(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(a=>{a.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new ur(!0,n))}markAsPending(i={}){this.status=La;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ba(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(xe(S({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=cr,this.errors=null,this._forEachChild(a=>{a.disable(xe(S({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Qs(this.value,n)),this._events.next(new Ba(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(xe(S({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(a=>a(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=lr,this._forEachChild(n=>{n.enable(xe(S({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(xe(S({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===lr||this.status===La)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Qs(this.value,e)),this._events.next(new Ba(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(xe(S({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?cr:lr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=La,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=gp(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(a=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(a,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,a)=>n&&n._find(a),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new Ba(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new R,this.statusChanges=new R}_calculateStatus(){return this._allControlsDisabled()?cr:this.errors?Ws:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(La)?La:this._anyControlsHaveStatus(Ws)?Ws:lr}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),a=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),a&&this._events.next(new ur(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new mr(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){nl(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Fy(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=ky(this._rawAsyncValidators)}},Va=class extends Na{constructor(i,e,n){super(Ed(e),Dd(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){Dp(this,!0,i),Object.keys(i).forEach(n=>{Ep(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let a=this.controls[n];a&&a.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,a)=>{n.reset(i?i[a]:null,xe(S({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new pr(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,a)=>((n.enabled||this.disabled)&&(e[a]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((a,o)=>{n=e(n,a,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var bd=class extends Va{};var fr=new y("",{factory:()=>il}),il="always";function al(t,i){return[...i.path,t]}function Js(t,i,e=il){Sd(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Ty(t,i),Oy(t,i),Ry(t,i),Iy(t,i)}function sp(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),tl(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function el(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Iy(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Sd(t,i){let e=Cp(t);i.validator!==null?t.setValidators(ap(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=wp(t);i.asyncValidator!==null?t.setAsyncValidators(ap(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let a=()=>t.updateValueAndValidity();el(i._rawValidators,a),el(i._rawAsyncValidators,a)}function tl(t,i){let e=!1;if(t!==null){if(i.validator!==null){let a=Cp(t);if(Array.isArray(a)&&a.length>0){let o=a.filter(r=>r!==i.validator);o.length!==a.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let a=wp(t);if(Array.isArray(a)&&a.length>0){let o=a.filter(r=>r!==i.asyncValidator);o.length!==a.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return el(i._rawValidators,n),el(i._rawAsyncValidators,n),e}function Ty(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Sp(t,i)})}function Ry(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Sp(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Sp(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Oy(t,i){let e=(n,a)=>{i.valueAccessor.writeValue(n),a&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Mp(t,i){t==null,Sd(t,i)}function Py(t,i){return tl(t,i)}function Ap(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Ly(t){return Object.getPrototypeOf(t.constructor)===hp}function Fp(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function kp(t,i){if(!i)return null;Array.isArray(i);let e,n,a;return i.forEach(o=>{o.constructor===mi?e=o:Ly(o)?n=o:a=o}),a||n||e||null}function By(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var Ny={provide:Ft,useExisting:ht(()=>gr)},dr=Promise.resolve(),gr=(()=>{class t extends Ft{callSetDisabledState;get submitted(){return et(this.submittedReactive)}_submitted=Ke(()=>this.submittedReactive());submittedReactive=ne(!1);_directives=new Set;form;ngSubmit=new R;options;constructor(e,n,a){super(),this.callSetDisabledState=a,this.form=new Va({},Cd(e),wd(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){dr.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Js(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){dr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){dr.then(()=>{let n=this._findContainer(e.path),a=new Va({});Mp(a,e),n.registerControl(e.name,a),a.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){dr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){dr.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Fp(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Zs(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(ae(jn,10),ae(ja,10),ae(fr,8))};static \u0275dir=C({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,a){n&1&&F("submit",function(r){return a.onSubmit(r)})("reset",function(){return a.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[oe([Ny]),J]})}return t})();function lp(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function cp(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var hr=class extends Na{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(Ed(e),Dd(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),nl(e)&&(e.nonNullable||e.initialValueIsDefault)&&(cp(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new pr(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){lp(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){lp(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){cp(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Vy=t=>t instanceof hr,jy=(()=>{class t extends Ft{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective?.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return al(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,standalone:!1,features:[J]})}return t})();var zy={provide:fn,useExisting:ht(()=>Md)},dp=Promise.resolve(),Md=(()=>{class t extends fn{_changeDetectorRef;callSetDisabledState;control=new hr;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new R;constructor(e,n,a,o,r,d){super(),this._changeDetectorRef=r,this.callSetDisabledState=d,this._parent=e,this._setValidators(n),this._setAsyncValidators(a),this.valueAccessor=kp(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Ap(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Js(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){dp.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,a=n!==0&&B(n);dp.then(()=>{a&&!this.control.disabled?this.control.disable():!a&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?al(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(ae(Ft,9),ae(jn,10),ae(ja,10),ae(ui,10),ae(ge,8),ae(fr,8))};static \u0275dir=C({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[oe([zy]),J,Ce]})}return t})();var Ua=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),Hy={provide:ui,useExisting:ht(()=>$i),multi:!0},$i=(()=>{class t extends hp{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,a){n&1&&F("input",function(r){return a.onChange(r.target.value)})("blur",function(){return a.onTouched()})},standalone:!1,features:[oe([Hy]),J]})}return t})();var vd=class extends Na{constructor(i,e,n){super(Ed(e),Dd(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let a=this._adjustIndex(i);a<0&&(a=0),this.controls[a]&&this.controls[a]._registerOnCollectionChange(()=>{}),this.controls.splice(a,1),e&&(this.controls.splice(a,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Dp(this,!1,i),i.forEach((n,a)=>{Ep(this,!1,a),this.at(a).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,a)=>{this.at(a)&&this.at(a).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,a)=>{n.reset(i[a],xe(S({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new pr(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Ip=(()=>{class t extends Ft{callSetDisabledState;get submitted(){return et(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Ke(()=>this._submittedReactive());_submittedReactive=ne(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,a){super(),this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(tl(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return Js(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){sp(e.control||null,e,!1),By(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Fp(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Zs(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,a=this.form.get(e.path);n!==a&&(sp(n||null,e),Vy(a)&&(Js(a,e,this.callSetDisabledState),e.control=a))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Mp(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&Py(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Sd(this.form,this),this._oldForm&&tl(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(ae(jn,10),ae(ja,10),ae(fr,8))};static \u0275dir=C({type:t,features:[J,Ce]})}return t})();var Tp=new y("");var Uy={provide:Ft,useExisting:ht(()=>$a)},$a=(()=>{class t extends jy{name=null;constructor(e,n,a){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(a)}_checkParentType(){Op(this._parent)}static \u0275fac=function(n){return new(n||t)(ae(Ft,13),ae(jn,10),ae(ja,10))};static \u0275dir=C({type:t,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:!1,features:[oe([Uy]),J]})}return t})(),$y={provide:Ft,useExisting:ht(()=>Rp)},Rp=(()=>{class t extends Ft{_parent;name=null;constructor(e,n,a){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(a)}ngOnInit(){Op(this._parent),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective?.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return al(this.name==null?this.name:this.name.toString(),this._parent)}static \u0275fac=function(n){return new(n||t)(ae(Ft,13),ae(jn,10),ae(ja,10))};static \u0275dir=C({type:t,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:!1,features:[oe([$y]),J]})}return t})();function Op(t){return!(t instanceof $a)&&!(t instanceof Ip)&&!(t instanceof Rp)}var Gy={provide:fn,useExisting:ht(()=>Gi)},Gi=(()=>{class t extends fn{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new R;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,a,o,r){super(),this._ngModelWarningConfig=r,this._parent=e,this._setValidators(n),this._setAsyncValidators(a),this.valueAccessor=kp(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Ap(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return al(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(ae(Ft,13),ae(jn,10),ae(ja,10),ae(ui,10),ae(Tp,8))};static \u0275dir=C({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[oe([Gy]),J,Ce]})}return t})();var Wy={provide:Ft,useExisting:ht(()=>gn)},gn=(()=>{class t extends Ip{form=null;ngSubmit=new R;get control(){return this.form}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,a){n&1&&F("submit",function(r){return a.onSubmit(r)})("reset",function(){return a.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[oe([Wy]),J]})}return t})();function Yy(t){return typeof t=="number"?t:parseFloat(t)}var qy=(()=>{class t{_validator=Ys;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Ys,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,features:[Ce]})}return t})();var Ky={provide:jn,useExisting:ht(()=>Wi),multi:!0},Wi=(()=>{class t extends qy{min;inputName="min";normalizeInput=e=>Yy(e);createValidator=e=>pp(e);static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(n,a){n&2&&A("min",a._enabled?a.min:null)},inputs:{min:"min"},standalone:!1,features:[oe([Ky]),J]})}return t})();var Pp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();function up(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Ga=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let a=this._reduceControls(e),o={};return up(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new Va(a,o)}record(e,n=null){let a=this._reduceControls(e);return new bd(a,n)}control(e,n,a){let o={};return this.useNonNullable?(up(n)?o=n:(o.validators=n,o.asyncValidators=a),new hr(e,xe(S({},o),{nonNullable:!0}))):new hr(e,n,a)}array(e,n,a){let o=e.map(r=>this._createControl(r));return new vd(o,n,a)}_reduceControls(e){let n={};return Object.keys(e).forEach(a=>{n[a]=this._createControl(e[a])}),n}_createControl(e){if(e instanceof hr)return e;if(e instanceof Na)return e;if(Array.isArray(e)){let n=e[0],a=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,a,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ol=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:fr,useValue:e.callSetDisabledState??il}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Pp]})}return t})(),Wa=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Tp,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:fr,useValue:e.callSetDisabledState??il}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Pp]})}return t})();var Ya=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qa=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,n,a,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=n,this._parentForm=a,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,a=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(a,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var Fd=class{_box;_destroyed=new T;_resizeSubject=new T;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Ze(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(se(e=>e.some(n=>n.target===i)),wi({bufferSize:1,refCount:!0}),Ee(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},rl=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(W);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let a=n?.box||"content-box";return this._observers.has(a)||this._observers.set(a,new Fd(a)),this._observers.get(a).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xy=["notch"],Qy=["matFormFieldNotchedOutline",""],Zy=["*"],Lp=["iconPrefixContainer"],Bp=["textPrefixContainer"],Np=["iconSuffixContainer"],Vp=["textSuffixContainer"],Jy=["textField"],ex=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],tx=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function nx(t,i){t&1&&D(0,"span",21)}function ix(t,i){if(t&1&&(s(0,"label",20),Y(1,1),H(2,nx,1,0,"span",21),l()),t&2){let e=w(2);_("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),A("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),U(!e.hideRequiredMarker&&e._control.required?2:-1)}}function ax(t,i){if(t&1&&H(0,ix,3,5,"label",20),t&2){let e=w();U(e._hasFloatingLabel()?0:-1)}}function ox(t,i){t&1&&D(0,"div",7)}function rx(t,i){}function sx(t,i){if(t&1&&Ie(0,rx,0,0,"ng-template",13),t&2){w(2);let e=_e(1);_("ngTemplateOutlet",e)}}function lx(t,i){if(t&1&&(s(0,"div",9),H(1,sx,1,1,null,13),l()),t&2){let e=w();_("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),U(e._forceDisplayInfixLabel()?-1:1)}}function cx(t,i){t&1&&(s(0,"div",10,2),Y(2,2),l())}function dx(t,i){t&1&&(s(0,"div",11,3),Y(2,3),l())}function ux(t,i){}function mx(t,i){if(t&1&&Ie(0,ux,0,0,"ng-template",13),t&2){w();let e=_e(1);_("ngTemplateOutlet",e)}}function hx(t,i){t&1&&(s(0,"div",14,4),Y(2,4),l())}function px(t,i){t&1&&(s(0,"div",15,5),Y(2,5),l())}function fx(t,i){t&1&&D(0,"div",16)}function gx(t,i){t&1&&(s(0,"div",18),Y(1,6),l())}function _x(t,i){if(t&1&&(s(0,"mat-hint",22),u(1),l()),t&2){let e=w(2);_("id",e._hintLabelId),m(),ee(e.hintLabel)}}function bx(t,i){if(t&1&&(s(0,"div",19),H(1,_x,2,2,"mat-hint",22),Y(2,7),D(3,"div",23),Y(4,8),l()),t&2){let e=w();m(),U(e.hintLabel?1:-1)}}var _n=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["mat-label"]]})}return t})(),vx=new y("MatError");var Yi=(()=>{class t{align="start";id=c(Se).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,a){n&2&&(_t("id",a.id),A("align",null),z("mat-mdc-form-field-hint-end",a.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),yx=new y("MatPrefix");var Wp=new y("MatSuffix"),qi=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[oe([{provide:Wp,useExisting:t}])]})}return t})(),Yp=new y("FloatingLabelParent"),jp=(()=>{class t{_elementRef=c(O);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(rl);_ngZone=c(W);_parent=c(Yp);_resizeSubscription=new he;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return xx(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,a){n&2&&z("mdc-floating-label--float-above",a.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function xx(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var zp="mdc-line-ripple--active",sl="mdc-line-ripple--deactivating",Hp=(()=>{class t{_elementRef=c(O);_cleanupTransitionEnd;constructor(){let e=c(W),n=c(ve);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(sl),e.add(zp)}deactivate(){this._elementRef.nativeElement.classList.add(sl)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,a=n.contains(sl);e.propertyName==="opacity"&&a&&n.remove(zp,sl)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Up=(()=>{class t{_elementRef=c(O);_ngZone=c(W);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,a){if(n&1&&De(Xy,5),n&2){let o;P(o=L())&&(a._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,a){n&2&&z("mdc-notched-outline--notched",a.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Qy,ngContentSelectors:Zy,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,a){n&1&&(me(),Kt(0,"div",1),Ge(1,"div",2,0),Y(3),dt(),Kt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),_r=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t})}return t})();var Ki=new y("MatFormField"),Cx=new y("MAT_FORM_FIELD_DEFAULT_OPTIONS"),$p="fill",wx="auto",Gp="fixed",Ex="translateY(-50%)",Dn=(()=>{class t{_elementRef=c(O);_changeDetectorRef=c(ge);_platform=c(de);_idGenerator=c(Se);_ngZone=c(W);_defaults=c(Cx,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Oo("iconPrefixContainer");_textPrefixContainerSignal=Oo("textPrefixContainer");_iconSuffixContainerSignal=Oo("iconSuffixContainer");_textSuffixContainerSignal=Oo("textSuffixContainer");_prefixSuffixContainers=Ke(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=zu(_n);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=At(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||wx}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||$p;this._appearanceSignal.set(n)}_appearanceSignal=ne($p);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Gp}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Gp}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new T;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ye();constructor(){let e=this._defaults,n=c(He);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),nn(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ke(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,a="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(a+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(a+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(Le([void 0,void 0]),be(()=>[n.errorState,n.userAriaDescribedBy]),oc(),se(([[o,r],[d,h]])=>o!==d||r!==h)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(Ee(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),je(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Uu({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ke(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(d=>d.align==="start"):null,r=this._hintChildren?this._hintChildren.find(d=>d.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,a;if(n){let o=this._describedByIds||e;a=e.concat(n.filter(r=>r&&!o.includes(r)))}else a=e;this._control.setDescribedByIds(a),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,a=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,d=n?.getBoundingClientRect().width??0,h=a?.getBoundingClientRect().width??0,p=o?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",g=`${r+d}px`,x=`calc(${f} * (${g} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,I=`var(--mat-mdc-form-field-label-transform, ${Ex} translateX(${x}))`,b=r+d+h+p;return[I,b]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,a]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),a!==null&&this._notchedOutline?._setMaxWidth(a)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,a,o){if(n&1&&(Pu(o,a._labelChild,_n,5),at(o,_r,5)(o,yx,5)(o,Wp,5)(o,vx,5)(o,Yi,5)),n&2){cc();let r;P(r=L())&&(a._formFieldControl=r.first),P(r=L())&&(a._prefixChildren=r),P(r=L())&&(a._suffixChildren=r),P(r=L())&&(a._errorChildren=r),P(r=L())&&(a._hintChildren=r)}},viewQuery:function(n,a){if(n&1&&(Lu(a._iconPrefixContainerSignal,Lp,5)(a._textPrefixContainerSignal,Bp,5)(a._iconSuffixContainerSignal,Np,5)(a._textSuffixContainerSignal,Vp,5),De(Jy,5)(Lp,5)(Bp,5)(Np,5)(Vp,5)(jp,5)(Up,5)(Hp,5)),n&2){cc(4);let o;P(o=L())&&(a._textField=o.first),P(o=L())&&(a._iconPrefixContainer=o.first),P(o=L())&&(a._textPrefixContainer=o.first),P(o=L())&&(a._iconSuffixContainer=o.first),P(o=L())&&(a._textSuffixContainer=o.first),P(o=L())&&(a._floatingLabel=o.first),P(o=L())&&(a._notchedOutline=o.first),P(o=L())&&(a._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,a){n&2&&z("mat-mdc-form-field-label-always-float",a._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",a._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",a._hasIconSuffix)("mat-form-field-invalid",a._control.errorState)("mat-form-field-disabled",a._control.disabled)("mat-form-field-autofilled",a._control.autofilled)("mat-form-field-appearance-fill",a.appearance=="fill")("mat-form-field-appearance-outline",a.appearance=="outline")("mat-form-field-hide-placeholder",a._hasFloatingLabel()&&!a._shouldLabelFloat())("mat-primary",a.color!=="accent"&&a.color!=="warn")("mat-accent",a.color==="accent")("mat-warn",a.color==="warn")("ng-untouched",a._shouldForward("untouched"))("ng-touched",a._shouldForward("touched"))("ng-pristine",a._shouldForward("pristine"))("ng-dirty",a._shouldForward("dirty"))("ng-valid",a._shouldForward("valid"))("ng-invalid",a._shouldForward("invalid"))("ng-pending",a._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[oe([{provide:Ki,useExisting:t},{provide:Yp,useExisting:t}])],ngContentSelectors:tx,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,a){if(n&1&&(me(ex),Ie(0,ax,1,1,"ng-template",null,0,Ai),s(2,"div",6,1),F("click",function(r){return a._control.onContainerClick(r)}),H(4,ox,1,0,"div",7),s(5,"div",8),H(6,lx,2,2,"div",9),H(7,cx,3,0,"div",10),H(8,dx,3,0,"div",11),s(9,"div",12),H(10,mx,1,1,null,13),Y(11),l(),H(12,hx,3,0,"div",14),H(13,px,3,0,"div",15),l(),H(14,fx,1,0,"div",16),l(),s(15,"div",17),H(16,gx,2,0,"div",18)(17,bx,5,1,"div",19),l()),n&2){let o;m(2),z("mdc-text-field--filled",!a._hasOutline())("mdc-text-field--outlined",a._hasOutline())("mdc-text-field--no-label",!a._hasFloatingLabel())("mdc-text-field--disabled",a._control.disabled)("mdc-text-field--invalid",a._control.errorState),m(2),U(!a._hasOutline()&&!a._control.disabled?4:-1),m(2),U(a._hasOutline()?6:-1),m(),U(a._hasIconPrefix?7:-1),m(),U(a._hasTextPrefix?8:-1),m(2),U(!a._hasOutline()||a._forceDisplayInfixLabel()?10:-1),m(2),U(a._hasTextSuffix?12:-1),m(),U(a._hasIconSuffix?13:-1),m(),U(a._hasOutline()?-1:14),m(),z("mat-mdc-form-field-subscript-dynamic-size",a.subscriptSizing==="dynamic");let r=a._getSubscriptMessageType();m(),U((o=r)==="error"?16:o==="hint"?17:-1)}},dependencies:[jp,Up,Fi,Hp,Yi],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Dx=new y("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var Ka=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({providers:[Ya,{provide:Dx,useValue:{separatorKeyCodes:[13]}}],imports:[En,te]})}return t})();var qp=Symbol("");function Kp(t){return new Proxy(t,{has(i,e){return!!this.get(i,e,void 0)},get(i,e){let n=et(i);return!Mx(n)||!(e in n)?(Yt(i[e])&&i[e][qp]&&delete i[e],i[e]):(Yt(i[e])||(Object.defineProperty(i,e,{value:Ke(()=>i()[e]),configurable:!0}),i[e][qp]=!0),Kp(i[e]))}})}var Sx=[WeakSet,WeakMap,Promise,Date,Error,RegExp,ArrayBuffer,DataView,Function];function Mx(t){if(t===null||typeof t!="object"||Ax(t))return!1;let i=Object.getPrototypeOf(t);if(i===Object.prototype)return!0;for(;i&&i!==Object.prototype;){if(Sx.includes(i.constructor))return!1;i=Object.getPrototypeOf(i)}return i===Object.prototype}function Ax(t){return typeof t?.[Symbol.iterator]=="function"}var Fx=new WeakMap,Ut=Symbol("");function bn(t,...i){let e=et(()=>Xp(t)),n=i.reduce((r,d)=>S(S({},r),typeof d=="function"?d(r):d),e),a=t[Ut],o=Reflect.ownKeys(t[Ut]);for(let r of Reflect.ownKeys(n))if(o.includes(r)){let d=r;e[d]!==n[d]&&a[d].set(n[d])}Ix(t)}function Xp(t){let i=t[Ut];return Reflect.ownKeys(t[Ut]).reduce((e,n)=>{let a=i[n]();return xe(S({},e),{[n]:a})},{})}function kx(t){return Fx.get(t[Ut])||[]}function Ix(t){let i=kx(t);for(let e of i){let n=et(()=>Xp(t));e(n)}}function Qp(...t){let i=[...t],e=typeof i[0]=="function"?{}:i.shift(),n=i;return(()=>{class o{constructor(){let d=n.reduce((b,j)=>j(b),Tx()),{stateSignals:h,props:p,methods:f,hooks:g}=d,v=S(S(S({},h),p),f);this[Ut]=d[Ut];for(let b of Reflect.ownKeys(v))this[b]=v[b];let{onInit:x,onDestroy:I}=g;x&&x(),I&&c(Wt).onDestroy(I)}static \u0275fac=function(h){return new(h||o)};static \u0275prov=E({token:o,factory:o.\u0275fac,providedIn:e.providedIn||null})}return o})()}function Tx(){return{[Ut]:{},stateSignals:{},props:{},methods:{},hooks:{}}}function Rx(t){return i=>{let e=t(S(S(S({[Ut]:i[Ut]},i.stateSignals),i.props),i.methods));return xe(S({},i),{props:S(S({},i.props),e)})}}function Zp(t){return Rx(i=>{let e=t(i);return Reflect.ownKeys(e).reduce((a,o)=>{let r=e[o];return xe(S({},a),{[o]:Yt(r)?r:Ke(r)})},{})})}function Jp(t){return i=>{let e=t(S(S(S({[Ut]:i[Ut]},i.stateSignals),i.props),i.methods));return xe(S({},i),{methods:S(S({},i.methods),e)})}}function ef(t){return i=>{let e=typeof t=="function"?t():t,n=Reflect.ownKeys(e),a=i[Ut],o={};for(let r of n)a[r]=ne(e[r]),o[r]=Kp(a[r]);return xe(S({},i),{stateSignals:S(S({},i.stateSignals),o)})}}function tf(t,i){let e=i?.injector??c(X),n=new T,a=t(n).subscribe();e.get(Wt).onDestroy(()=>a.unsubscribe());let o=(r,d)=>{if(Ox(r))return n.next(r),{destroy:nu};let h=Px(),p=d?.injector??h??e;if(typeof r=="function"){let g=nn(()=>{let v=r();et(()=>n.next(v))},{injector:p});return a.add({unsubscribe:()=>g.destroy()}),g}let f=r.subscribe(g=>n.next(g));return a.add(f),p!==e&&p.get(Wt).onDestroy(()=>f.unsubscribe()),{destroy:()=>f.unsubscribe()}};return o.destroy=a.unsubscribe.bind(a),o}function Ox(t){return typeof t!="function"&&!nc(t)}function Px(){try{return c(X)}catch{return}}var nf=[{start:0,end:36e3,rate:.03,minus:0},{start:36e3,end:144e3,rate:.1,minus:2520},{start:144e3,end:3e5,rate:.2,minus:16920},{start:3e5,end:42e4,rate:.25,minus:31920},{start:42e4,end:66e4,rate:.3,minus:52920},{start:66e4,end:96e4,rate:.35,minus:85920},{start:96e4,end:1/0,rate:.45,minus:181920}],af=[{start:0,end:3e3,rate:.03,minus:0},{start:3e3,end:12e3,rate:.1,minus:210},{start:12e3,end:25e3,rate:.2,minus:1410},{start:25e3,end:35e3,rate:.25,minus:2660},{start:35e3,end:55e3,rate:.3,minus:4410},{start:55e3,end:8e4,rate:.35,minus:7160},{start:8e4,end:1/0,rate:.45,minus:15160}],of=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:1e3,label:"\u4E00\u4E2A\u5A74\u5E7C\u513F\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A1000\u5143"},{value:2e3,label:"\u4E00\u4E2A\u5A74\u5E7C\u513F\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A2000\u5143"},{value:2e3,label:"\u4E24\u4E2A\u5A74\u5E7C\u513F\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A2000\u5143"},{value:4e3,label:"\u4E24\u4E2A\u5A74\u5E7C\u513F\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A4000\u5143"},{value:3e3,label:"\u4E09\u4E2A\u5A74\u5E7C\u513F\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A3000\u5143"},{value:6e3,label:"\u4E09\u4E2A\u5A74\u5E7C\u513F\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A6000\u5143"}],rf=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:1e3,label:"\u4E00\u4E2A\u5B69\u5B50\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A1000\u5143"},{value:2e3,label:"\u4E00\u4E2A\u5B69\u5B50\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A2000\u5143"},{value:2e3,label:"\u4E24\u4E2A\u5B69\u5B50\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A2000\u5143"},{value:4e3,label:"\u4E24\u4E2A\u5B69\u5B50\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A4000\u5143"},{value:3e3,label:"\u4E09\u4E2A\u5B69\u5B50\uFF0C\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A3000\u5143"},{value:6e3,label:"\u4E09\u4E2A\u5B69\u5B50\uFF0C\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A6000\u5143"}],sf=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:400,label:"\u63A5\u53D7\u5B66\u5386\u6559\u80B2\u4E2D\uFF0C\u6263\u9664\uFF1A400\u5143/\u6708"},{value:3600,label:"\u804C\u4E1A\u8D44\u683C\u7EE7\u7EED\u6559\u80B2\uFF08\u53D6\u5F97\u8BC1\u4E66\u5F53\u5E74\uFF09\uFF0C\u6263\u9664\uFF1A3600\u5143"}],lf=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:500,label:"\u592B\u59BB\u53CC\u65B9\u5404\u81EA\u6263\u9664\uFF1A500\u5143"},{value:1e3,label:"\u4EC5\u6709\u4E00\u65B9\u6263\u9664\uFF1A1000\u5143"}],cf=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:800,label:"\u4EBA\u53E3\u5C11\u4E8E100\u4E07\u57CE\u5E02\uFF0C\u6263\u9664\uFF1A800\u5143"},{value:1100,label:"\u4EBA\u53E3\u5927\u4E8E100\u4E07\u57CE\u5E02\uFF0C\u6263\u9664\uFF1A1100\u5143"},{value:1500,label:"\u7701\u4F1A\uFF0C\u76F4\u8F96\u5E02\u7B49\uFF0C\u6263\u9664\uFF1A1500\u5143"}],df=[{value:0,label:"\u4E0D\u7B26\u5408\uFF1A0\u5143"},{value:3e3,label:"\u72EC\u751F\u5B50\u5973\uFF0C\u5168\u989D\u6263\u9664\uFF1A3000\u5143"},{value:1500,label:"\u4E24\u4E2A\u5B50\u5973\uFF0C\u5747\u644A\u6263\u9664\uFF1A1500\u5143"},{value:1e3,label:"\u4E09\u4E2A\u5B50\u5973\uFF0C\u5747\u644A\u6263\u9664\uFF1A1000\u5143"},{value:750,label:"\u56DB\u4E2A\u5B50\u5973\uFF0C\u5747\u644A\u6263\u9664\uFF1A750\u5143"},{value:600,label:"\u4E94\u4E2A\u5B50\u5973\uFF0C\u5747\u644A\u6263\u9664\uFF1A600\u5143"}],ll="2027.12.31",uf=[{start:36e3,end:38566.67,taxDiffAtStart:2309.1,lowerThreshold:36e3},{start:144e3,end:160500,taxDiffAtStart:13199.2,lowerThreshold:144e3},{start:3e5,end:318333.33,taxDiffAtStart:13749.25,lowerThreshold:3e5},{start:42e4,end:447500,taxDiffAtStart:19249.3,lowerThreshold:42e4},{start:66e4,end:706538.46,taxDiffAtStart:30249.35,lowerThreshold:66e4},{start:96e4,end:112e4,taxDiffAtStart:87999.45,lowerThreshold:96e4}];var Lx=typeof global=="object"&&global&&global.Object===Object&&global,cl=Lx;var Bx=typeof self=="object"&&self&&self.Object===Object&&self,Nx=cl||Bx||Function("return this")(),nt=Nx;var Vx=nt.Symbol,ut=Vx;var mf=Object.prototype,jx=mf.hasOwnProperty,zx=mf.toString,br=ut?ut.toStringTag:void 0;function Hx(t){var i=jx.call(t,br),e=t[br];try{t[br]=void 0;var n=!0}catch{}var a=zx.call(t);return n&&(i?t[br]=e:delete t[br]),a}var hf=Hx;var Ux=Object.prototype,$x=Ux.toString;function Gx(t){return $x.call(t)}var pf=Gx;var Wx="[object Null]",Yx="[object Undefined]",ff=ut?ut.toStringTag:void 0;function qx(t){return t==null?t===void 0?Yx:Wx:ff&&ff in Object(t)?hf(t):pf(t)}var $t=qx;function Kx(t){return t!=null&&typeof t=="object"}var gt=Kx;var Xx="[object Symbol]";function Qx(t){return typeof t=="symbol"||gt(t)&&$t(t)==Xx}var Xa=Qx;function Zx(t,i){for(var e=-1,n=t==null?0:t.length,a=Array(n);++e<n;)a[e]=i(t[e],e,t);return a}var Qa=Zx;var Jx=Array.isArray,Qe=Jx;var eC=1/0,gf=ut?ut.prototype:void 0,_f=gf?gf.toString:void 0;function bf(t){if(typeof t=="string")return t;if(Qe(t))return Qa(t,bf)+"";if(Xa(t))return _f?_f.call(t):"";var i=t+"";return i=="0"&&1/t==-eC?"-0":i}var vf=bf;function tC(t){var i=typeof t;return t!=null&&(i=="object"||i=="function")}var en=tC;function nC(t){return t}var Za=nC;var iC="[object AsyncFunction]",aC="[object Function]",oC="[object GeneratorFunction]",rC="[object Proxy]";function sC(t){if(!en(t))return!1;var i=$t(t);return i==aC||i==oC||i==iC||i==rC}var dl=sC;var lC=nt["__core-js_shared__"],ul=lC;var yf=(function(){var t=/[^.]+$/.exec(ul&&ul.keys&&ul.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""})();function cC(t){return!!yf&&yf in t}var xf=cC;var dC=Function.prototype,uC=dC.toString;function mC(t){if(t!=null){try{return uC.call(t)}catch{}try{return t+""}catch{}}return""}var zn=mC;var hC=/[\\^$.*+?()[\]{}|]/g,pC=/^\[object .+?Constructor\]$/,fC=Function.prototype,gC=Object.prototype,_C=fC.toString,bC=gC.hasOwnProperty,vC=RegExp("^"+_C.call(bC).replace(hC,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function yC(t){if(!en(t)||xf(t))return!1;var i=dl(t)?vC:pC;return i.test(zn(t))}var Cf=yC;function xC(t,i){return t?.[i]}var wf=xC;function CC(t,i){var e=wf(t,i);return Cf(e)?e:void 0}var Bt=CC;var wC=Bt(nt,"WeakMap"),ml=wC;var Ef=Object.create,EC=(function(){function t(){}return function(i){if(!en(i))return{};if(Ef)return Ef(i);t.prototype=i;var e=new t;return t.prototype=void 0,e}})(),Df=EC;function DC(t,i,e){switch(e.length){case 0:return t.call(i);case 1:return t.call(i,e[0]);case 2:return t.call(i,e[0],e[1]);case 3:return t.call(i,e[0],e[1],e[2])}return t.apply(i,e)}var Sf=DC;function SC(t,i){var e=-1,n=t.length;for(i||(i=Array(n));++e<n;)i[e]=t[e];return i}var Mf=SC;var MC=800,AC=16,FC=Date.now;function kC(t){var i=0,e=0;return function(){var n=FC(),a=AC-(n-e);if(e=n,a>0){if(++i>=MC)return arguments[0]}else i=0;return t.apply(void 0,arguments)}}var Af=kC;function IC(t){return function(){return t}}var Ff=IC;var TC=(function(){try{var t=Bt(Object,"defineProperty");return t({},"",{}),t}catch{}})(),Ja=TC;var RC=Ja?function(t,i){return Ja(t,"toString",{configurable:!0,enumerable:!1,value:Ff(i),writable:!0})}:Za,kf=RC;var OC=Af(kf),If=OC;function PC(t,i){for(var e=-1,n=t==null?0:t.length;++e<n&&i(t[e],e,t)!==!1;);return t}var Tf=PC;var LC=9007199254740991,BC=/^(?:0|[1-9]\d*)$/;function NC(t,i){var e=typeof t;return i=i??LC,!!i&&(e=="number"||e!="symbol"&&BC.test(t))&&t>-1&&t%1==0&&t<i}var hl=NC;function VC(t,i,e){i=="__proto__"&&Ja?Ja(t,i,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[i]=e}var pl=VC;function jC(t,i){return t===i||t!==t&&i!==i}var eo=jC;var zC=Object.prototype,HC=zC.hasOwnProperty;function UC(t,i,e){var n=t[i];(!(HC.call(t,i)&&eo(n,e))||e===void 0&&!(i in t))&&pl(t,i,e)}var fl=UC;function $C(t,i,e,n){var a=!e;e||(e={});for(var o=-1,r=i.length;++o<r;){var d=i[o],h=n?n(e[d],t[d],d,e,t):void 0;h===void 0&&(h=t[d]),a?pl(e,d,h):fl(e,d,h)}return e}var Sn=$C;var Rf=Math.max;function GC(t,i,e){return i=Rf(i===void 0?t.length-1:i,0),function(){for(var n=arguments,a=-1,o=Rf(n.length-i,0),r=Array(o);++a<o;)r[a]=n[i+a];a=-1;for(var d=Array(i+1);++a<i;)d[a]=n[a];return d[i]=e(r),Sf(t,this,d)}}var Of=GC;var WC=9007199254740991;function YC(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=WC}var to=YC;function qC(t){return t!=null&&to(t.length)&&!dl(t)}var gl=qC;var KC=Object.prototype;function XC(t){var i=t&&t.constructor,e=typeof i=="function"&&i.prototype||KC;return t===e}var no=XC;function QC(t,i){for(var e=-1,n=Array(t);++e<t;)n[e]=i(e);return n}var Pf=QC;var ZC="[object Arguments]";function JC(t){return gt(t)&&$t(t)==ZC}var kd=JC;var Lf=Object.prototype,ew=Lf.hasOwnProperty,tw=Lf.propertyIsEnumerable,nw=kd((function(){return arguments})())?kd:function(t){return gt(t)&&ew.call(t,"callee")&&!tw.call(t,"callee")},io=nw;function iw(){return!1}var Bf=iw;var jf=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Nf=jf&&typeof module=="object"&&module&&!module.nodeType&&module,aw=Nf&&Nf.exports===jf,Vf=aw?nt.Buffer:void 0,ow=Vf?Vf.isBuffer:void 0,rw=ow||Bf,Xi=rw;var sw="[object Arguments]",lw="[object Array]",cw="[object Boolean]",dw="[object Date]",uw="[object Error]",mw="[object Function]",hw="[object Map]",pw="[object Number]",fw="[object Object]",gw="[object RegExp]",_w="[object Set]",bw="[object String]",vw="[object WeakMap]",yw="[object ArrayBuffer]",xw="[object DataView]",Cw="[object Float32Array]",ww="[object Float64Array]",Ew="[object Int8Array]",Dw="[object Int16Array]",Sw="[object Int32Array]",Mw="[object Uint8Array]",Aw="[object Uint8ClampedArray]",Fw="[object Uint16Array]",kw="[object Uint32Array]",Ne={};Ne[Cw]=Ne[ww]=Ne[Ew]=Ne[Dw]=Ne[Sw]=Ne[Mw]=Ne[Aw]=Ne[Fw]=Ne[kw]=!0;Ne[sw]=Ne[lw]=Ne[yw]=Ne[cw]=Ne[xw]=Ne[dw]=Ne[uw]=Ne[mw]=Ne[hw]=Ne[pw]=Ne[fw]=Ne[gw]=Ne[_w]=Ne[bw]=Ne[vw]=!1;function Iw(t){return gt(t)&&to(t.length)&&!!Ne[$t(t)]}var zf=Iw;function Tw(t){return function(i){return t(i)}}var ao=Tw;var Hf=typeof exports=="object"&&exports&&!exports.nodeType&&exports,vr=Hf&&typeof module=="object"&&module&&!module.nodeType&&module,Rw=vr&&vr.exports===Hf,Id=Rw&&cl.process,Ow=(function(){try{var t=vr&&vr.require&&vr.require("util").types;return t||Id&&Id.binding&&Id.binding("util")}catch{}})(),Hn=Ow;var Uf=Hn&&Hn.isTypedArray,Pw=Uf?ao(Uf):zf,_l=Pw;var Lw=Object.prototype,Bw=Lw.hasOwnProperty;function Nw(t,i){var e=Qe(t),n=!e&&io(t),a=!e&&!n&&Xi(t),o=!e&&!n&&!a&&_l(t),r=e||n||a||o,d=r?Pf(t.length,String):[],h=d.length;for(var p in t)(i||Bw.call(t,p))&&!(r&&(p=="length"||a&&(p=="offset"||p=="parent")||o&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||hl(p,h)))&&d.push(p);return d}var bl=Nw;function Vw(t,i){return function(e){return t(i(e))}}var vl=Vw;var jw=vl(Object.keys,Object),$f=jw;var zw=Object.prototype,Hw=zw.hasOwnProperty;function Uw(t){if(!no(t))return $f(t);var i=[];for(var e in Object(t))Hw.call(t,e)&&e!="constructor"&&i.push(e);return i}var Gf=Uw;function $w(t){return gl(t)?bl(t):Gf(t)}var Mn=$w;function Gw(t){var i=[];if(t!=null)for(var e in Object(t))i.push(e);return i}var Wf=Gw;var Ww=Object.prototype,Yw=Ww.hasOwnProperty;function qw(t){if(!en(t))return Wf(t);var i=no(t),e=[];for(var n in t)n=="constructor"&&(i||!Yw.call(t,n))||e.push(n);return e}var Yf=qw;function Kw(t){return gl(t)?bl(t,!0):Yf(t)}var oo=Kw;var Xw=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qw=/^\w*$/;function Zw(t,i){if(Qe(t))return!1;var e=typeof t;return e=="number"||e=="symbol"||e=="boolean"||t==null||Xa(t)?!0:Qw.test(t)||!Xw.test(t)||i!=null&&t in Object(i)}var ro=Zw;var Jw=Bt(Object,"create"),Un=Jw;function e1(){this.__data__=Un?Un(null):{},this.size=0}var qf=e1;function t1(t){var i=this.has(t)&&delete this.__data__[t];return this.size-=i?1:0,i}var Kf=t1;var n1="__lodash_hash_undefined__",i1=Object.prototype,a1=i1.hasOwnProperty;function o1(t){var i=this.__data__;if(Un){var e=i[t];return e===n1?void 0:e}return a1.call(i,t)?i[t]:void 0}var Xf=o1;var r1=Object.prototype,s1=r1.hasOwnProperty;function l1(t){var i=this.__data__;return Un?i[t]!==void 0:s1.call(i,t)}var Qf=l1;var c1="__lodash_hash_undefined__";function d1(t,i){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=Un&&i===void 0?c1:i,this}var Zf=d1;function so(t){var i=-1,e=t==null?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}so.prototype.clear=qf;so.prototype.delete=Kf;so.prototype.get=Xf;so.prototype.has=Qf;so.prototype.set=Zf;var Td=so;function u1(){this.__data__=[],this.size=0}var Jf=u1;function m1(t,i){for(var e=t.length;e--;)if(eo(t[e][0],i))return e;return-1}var hi=m1;var h1=Array.prototype,p1=h1.splice;function f1(t){var i=this.__data__,e=hi(i,t);if(e<0)return!1;var n=i.length-1;return e==n?i.pop():p1.call(i,e,1),--this.size,!0}var eg=f1;function g1(t){var i=this.__data__,e=hi(i,t);return e<0?void 0:i[e][1]}var tg=g1;function _1(t){return hi(this.__data__,t)>-1}var ng=_1;function b1(t,i){var e=this.__data__,n=hi(e,t);return n<0?(++this.size,e.push([t,i])):e[n][1]=i,this}var ig=b1;function lo(t){var i=-1,e=t==null?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}lo.prototype.clear=Jf;lo.prototype.delete=eg;lo.prototype.get=tg;lo.prototype.has=ng;lo.prototype.set=ig;var pi=lo;var v1=Bt(nt,"Map"),fi=v1;function y1(){this.size=0,this.__data__={hash:new Td,map:new(fi||pi),string:new Td}}var ag=y1;function x1(t){var i=typeof t;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?t!=="__proto__":t===null}var og=x1;function C1(t,i){var e=t.__data__;return og(i)?e[typeof i=="string"?"string":"hash"]:e.map}var gi=C1;function w1(t){var i=gi(this,t).delete(t);return this.size-=i?1:0,i}var rg=w1;function E1(t){return gi(this,t).get(t)}var sg=E1;function D1(t){return gi(this,t).has(t)}var lg=D1;function S1(t,i){var e=gi(this,t),n=e.size;return e.set(t,i),this.size+=e.size==n?0:1,this}var cg=S1;function co(t){var i=-1,e=t==null?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}co.prototype.clear=ag;co.prototype.delete=rg;co.prototype.get=sg;co.prototype.has=lg;co.prototype.set=cg;var Qi=co;var M1="Expected a function";function Rd(t,i){if(typeof t!="function"||i!=null&&typeof i!="function")throw new TypeError(M1);var e=function(){var n=arguments,a=i?i.apply(this,n):n[0],o=e.cache;if(o.has(a))return o.get(a);var r=t.apply(this,n);return e.cache=o.set(a,r)||o,r};return e.cache=new(Rd.Cache||Qi),e}Rd.Cache=Qi;var dg=Rd;var A1=500;function F1(t){var i=dg(t,function(n){return e.size===A1&&e.clear(),n}),e=i.cache;return i}var ug=F1;var k1=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,I1=/\\(\\)?/g,T1=ug(function(t){var i=[];return t.charCodeAt(0)===46&&i.push(""),t.replace(k1,function(e,n,a,o){i.push(a?o.replace(I1,"$1"):n||e)}),i}),mg=T1;function R1(t){return t==null?"":vf(t)}var hg=R1;function O1(t,i){return Qe(t)?t:ro(t,i)?[t]:mg(hg(t))}var _i=O1;var P1=1/0;function L1(t){if(typeof t=="string"||Xa(t))return t;var i=t+"";return i=="0"&&1/t==-P1?"-0":i}var An=L1;function B1(t,i){i=_i(i,t);for(var e=0,n=i.length;t!=null&&e<n;)t=t[An(i[e++])];return e&&e==n?t:void 0}var uo=B1;function N1(t,i,e){var n=t==null?void 0:uo(t,i);return n===void 0?e:n}var pg=N1;function V1(t,i){for(var e=-1,n=i.length,a=t.length;++e<n;)t[a+e]=i[e];return t}var mo=V1;var fg=ut?ut.isConcatSpreadable:void 0;function j1(t){return Qe(t)||io(t)||!!(fg&&t&&t[fg])}var gg=j1;function _g(t,i,e,n,a){var o=-1,r=t.length;for(e||(e=gg),a||(a=[]);++o<r;){var d=t[o];i>0&&e(d)?i>1?_g(d,i-1,e,n,a):mo(a,d):n||(a[a.length]=d)}return a}var bg=_g;function z1(t){var i=t==null?0:t.length;return i?bg(t,1):[]}var vg=z1;function H1(t){return If(Of(t,void 0,vg),t+"")}var yg=H1;var U1=vl(Object.getPrototypeOf,Object),ho=U1;var $1="[object Object]",G1=Function.prototype,W1=Object.prototype,xg=G1.toString,Y1=W1.hasOwnProperty,q1=xg.call(Object);function K1(t){if(!gt(t)||$t(t)!=$1)return!1;var i=ho(t);if(i===null)return!0;var e=Y1.call(i,"constructor")&&i.constructor;return typeof e=="function"&&e instanceof e&&xg.call(e)==q1}var Cg=K1;function X1(t,i,e){var n=-1,a=t.length;i<0&&(i=-i>a?0:a+i),e=e>a?a:e,e<0&&(e+=a),a=i>e?0:e-i>>>0,i>>>=0;for(var o=Array(a);++n<a;)o[n]=t[n+i];return o}var wg=X1;function Q1(){this.__data__=new pi,this.size=0}var Eg=Q1;function Z1(t){var i=this.__data__,e=i.delete(t);return this.size=i.size,e}var Dg=Z1;function J1(t){return this.__data__.get(t)}var Sg=J1;function eE(t){return this.__data__.has(t)}var Mg=eE;var tE=200;function nE(t,i){var e=this.__data__;if(e instanceof pi){var n=e.__data__;if(!fi||n.length<tE-1)return n.push([t,i]),this.size=++e.size,this;e=this.__data__=new Qi(n)}return e.set(t,i),this.size=e.size,this}var Ag=nE;function po(t){var i=this.__data__=new pi(t);this.size=i.size}po.prototype.clear=Eg;po.prototype.delete=Dg;po.prototype.get=Sg;po.prototype.has=Mg;po.prototype.set=Ag;var bi=po;function iE(t,i){return t&&Sn(i,Mn(i),t)}var Fg=iE;function aE(t,i){return t&&Sn(i,oo(i),t)}var kg=aE;var Og=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ig=Og&&typeof module=="object"&&module&&!module.nodeType&&module,oE=Ig&&Ig.exports===Og,Tg=oE?nt.Buffer:void 0,Rg=Tg?Tg.allocUnsafe:void 0;function rE(t,i){if(i)return t.slice();var e=t.length,n=Rg?Rg(e):new t.constructor(e);return t.copy(n),n}var Pg=rE;function sE(t,i){for(var e=-1,n=t==null?0:t.length,a=0,o=[];++e<n;){var r=t[e];i(r,e,t)&&(o[a++]=r)}return o}var Lg=sE;function lE(){return[]}var yl=lE;var cE=Object.prototype,dE=cE.propertyIsEnumerable,Bg=Object.getOwnPropertySymbols,uE=Bg?function(t){return t==null?[]:(t=Object(t),Lg(Bg(t),function(i){return dE.call(t,i)}))}:yl,fo=uE;function mE(t,i){return Sn(t,fo(t),i)}var Ng=mE;var hE=Object.getOwnPropertySymbols,pE=hE?function(t){for(var i=[];t;)mo(i,fo(t)),t=ho(t);return i}:yl,xl=pE;function fE(t,i){return Sn(t,xl(t),i)}var Vg=fE;function gE(t,i,e){var n=i(t);return Qe(t)?n:mo(n,e(t))}var Cl=gE;function _E(t){return Cl(t,Mn,fo)}var yr=_E;function bE(t){return Cl(t,oo,xl)}var wl=bE;var vE=Bt(nt,"DataView"),El=vE;var yE=Bt(nt,"Promise"),Dl=yE;var xE=Bt(nt,"Set"),Sl=xE;var jg="[object Map]",CE="[object Object]",zg="[object Promise]",Hg="[object Set]",Ug="[object WeakMap]",$g="[object DataView]",wE=zn(El),EE=zn(fi),DE=zn(Dl),SE=zn(Sl),ME=zn(ml),Zi=$t;(El&&Zi(new El(new ArrayBuffer(1)))!=$g||fi&&Zi(new fi)!=jg||Dl&&Zi(Dl.resolve())!=zg||Sl&&Zi(new Sl)!=Hg||ml&&Zi(new ml)!=Ug)&&(Zi=function(t){var i=$t(t),e=i==CE?t.constructor:void 0,n=e?zn(e):"";if(n)switch(n){case wE:return $g;case EE:return jg;case DE:return zg;case SE:return Hg;case ME:return Ug}return i});var $n=Zi;var AE=Object.prototype,FE=AE.hasOwnProperty;function kE(t){var i=t.length,e=new t.constructor(i);return i&&typeof t[0]=="string"&&FE.call(t,"index")&&(e.index=t.index,e.input=t.input),e}var Gg=kE;var IE=nt.Uint8Array,go=IE;function TE(t){var i=new t.constructor(t.byteLength);return new go(i).set(new go(t)),i}var _o=TE;function RE(t,i){var e=i?_o(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}var Wg=RE;var OE=/\w*$/;function PE(t){var i=new t.constructor(t.source,OE.exec(t));return i.lastIndex=t.lastIndex,i}var Yg=PE;var qg=ut?ut.prototype:void 0,Kg=qg?qg.valueOf:void 0;function LE(t){return Kg?Object(Kg.call(t)):{}}var Xg=LE;function BE(t,i){var e=i?_o(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}var Qg=BE;var NE="[object Boolean]",VE="[object Date]",jE="[object Map]",zE="[object Number]",HE="[object RegExp]",UE="[object Set]",$E="[object String]",GE="[object Symbol]",WE="[object ArrayBuffer]",YE="[object DataView]",qE="[object Float32Array]",KE="[object Float64Array]",XE="[object Int8Array]",QE="[object Int16Array]",ZE="[object Int32Array]",JE="[object Uint8Array]",eD="[object Uint8ClampedArray]",tD="[object Uint16Array]",nD="[object Uint32Array]";function iD(t,i,e){var n=t.constructor;switch(i){case WE:return _o(t);case NE:case VE:return new n(+t);case YE:return Wg(t,e);case qE:case KE:case XE:case QE:case ZE:case JE:case eD:case tD:case nD:return Qg(t,e);case jE:return new n;case zE:case $E:return new n(t);case HE:return Yg(t);case UE:return new n;case GE:return Xg(t)}}var Zg=iD;function aD(t){return typeof t.constructor=="function"&&!no(t)?Df(ho(t)):{}}var Jg=aD;var oD="[object Map]";function rD(t){return gt(t)&&$n(t)==oD}var e_=rD;var t_=Hn&&Hn.isMap,sD=t_?ao(t_):e_,n_=sD;var lD="[object Set]";function cD(t){return gt(t)&&$n(t)==lD}var i_=cD;var a_=Hn&&Hn.isSet,dD=a_?ao(a_):i_,o_=dD;var uD=1,mD=2,hD=4,r_="[object Arguments]",pD="[object Array]",fD="[object Boolean]",gD="[object Date]",_D="[object Error]",s_="[object Function]",bD="[object GeneratorFunction]",vD="[object Map]",yD="[object Number]",l_="[object Object]",xD="[object RegExp]",CD="[object Set]",wD="[object String]",ED="[object Symbol]",DD="[object WeakMap]",SD="[object ArrayBuffer]",MD="[object DataView]",AD="[object Float32Array]",FD="[object Float64Array]",kD="[object Int8Array]",ID="[object Int16Array]",TD="[object Int32Array]",RD="[object Uint8Array]",OD="[object Uint8ClampedArray]",PD="[object Uint16Array]",LD="[object Uint32Array]",Pe={};Pe[r_]=Pe[pD]=Pe[SD]=Pe[MD]=Pe[fD]=Pe[gD]=Pe[AD]=Pe[FD]=Pe[kD]=Pe[ID]=Pe[TD]=Pe[vD]=Pe[yD]=Pe[l_]=Pe[xD]=Pe[CD]=Pe[wD]=Pe[ED]=Pe[RD]=Pe[OD]=Pe[PD]=Pe[LD]=!0;Pe[_D]=Pe[s_]=Pe[DD]=!1;function Ml(t,i,e,n,a,o){var r,d=i&uD,h=i&mD,p=i&hD;if(e&&(r=a?e(t,n,a,o):e(t)),r!==void 0)return r;if(!en(t))return t;var f=Qe(t);if(f){if(r=Gg(t),!d)return Mf(t,r)}else{var g=$n(t),v=g==s_||g==bD;if(Xi(t))return Pg(t,d);if(g==l_||g==r_||v&&!a){if(r=h||v?{}:Jg(t),!d)return h?Vg(t,kg(r,t)):Ng(t,Fg(r,t))}else{if(!Pe[g])return a?t:{};r=Zg(t,g,d)}}o||(o=new bi);var x=o.get(t);if(x)return x;o.set(t,r),o_(t)?t.forEach(function(j){r.add(Ml(j,i,e,j,t,o))}):n_(t)&&t.forEach(function(j,q){r.set(q,Ml(j,i,e,q,t,o))});var I=p?h?wl:yr:h?oo:Mn,b=f?void 0:I(t);return Tf(b||t,function(j,q){b&&(q=j,j=t[q]),fl(r,q,Ml(j,i,e,q,t,o))}),r}var c_=Ml;var BD="__lodash_hash_undefined__";function ND(t){return this.__data__.set(t,BD),this}var d_=ND;function VD(t){return this.__data__.has(t)}var u_=VD;function Al(t){var i=-1,e=t==null?0:t.length;for(this.__data__=new Qi;++i<e;)this.add(t[i])}Al.prototype.add=Al.prototype.push=d_;Al.prototype.has=u_;var m_=Al;function jD(t,i){for(var e=-1,n=t==null?0:t.length;++e<n;)if(i(t[e],e,t))return!0;return!1}var h_=jD;function zD(t,i){return t.has(i)}var p_=zD;var HD=1,UD=2;function $D(t,i,e,n,a,o){var r=e&HD,d=t.length,h=i.length;if(d!=h&&!(r&&h>d))return!1;var p=o.get(t),f=o.get(i);if(p&&f)return p==i&&f==t;var g=-1,v=!0,x=e&UD?new m_:void 0;for(o.set(t,i),o.set(i,t);++g<d;){var I=t[g],b=i[g];if(n)var j=r?n(b,I,g,i,t,o):n(I,b,g,t,i,o);if(j!==void 0){if(j)continue;v=!1;break}if(x){if(!h_(i,function(q,re){if(!p_(x,re)&&(I===q||a(I,q,e,n,o)))return x.push(re)})){v=!1;break}}else if(!(I===b||a(I,b,e,n,o))){v=!1;break}}return o.delete(t),o.delete(i),v}var Fl=$D;function GD(t){var i=-1,e=Array(t.size);return t.forEach(function(n,a){e[++i]=[a,n]}),e}var f_=GD;function WD(t){var i=-1,e=Array(t.size);return t.forEach(function(n){e[++i]=n}),e}var g_=WD;var YD=1,qD=2,KD="[object Boolean]",XD="[object Date]",QD="[object Error]",ZD="[object Map]",JD="[object Number]",eS="[object RegExp]",tS="[object Set]",nS="[object String]",iS="[object Symbol]",aS="[object ArrayBuffer]",oS="[object DataView]",__=ut?ut.prototype:void 0,Od=__?__.valueOf:void 0;function rS(t,i,e,n,a,o,r){switch(e){case oS:if(t.byteLength!=i.byteLength||t.byteOffset!=i.byteOffset)return!1;t=t.buffer,i=i.buffer;case aS:return!(t.byteLength!=i.byteLength||!o(new go(t),new go(i)));case KD:case XD:case JD:return eo(+t,+i);case QD:return t.name==i.name&&t.message==i.message;case eS:case nS:return t==i+"";case ZD:var d=f_;case tS:var h=n&YD;if(d||(d=g_),t.size!=i.size&&!h)return!1;var p=r.get(t);if(p)return p==i;n|=qD,r.set(t,i);var f=Fl(d(t),d(i),n,a,o,r);return r.delete(t),f;case iS:if(Od)return Od.call(t)==Od.call(i)}return!1}var b_=rS;var sS=1,lS=Object.prototype,cS=lS.hasOwnProperty;function dS(t,i,e,n,a,o){var r=e&sS,d=yr(t),h=d.length,p=yr(i),f=p.length;if(h!=f&&!r)return!1;for(var g=h;g--;){var v=d[g];if(!(r?v in i:cS.call(i,v)))return!1}var x=o.get(t),I=o.get(i);if(x&&I)return x==i&&I==t;var b=!0;o.set(t,i),o.set(i,t);for(var j=r;++g<h;){v=d[g];var q=t[v],re=i[v];if(n)var Ve=r?n(re,q,v,i,t,o):n(q,re,v,t,i,o);if(!(Ve===void 0?q===re||a(q,re,e,n,o):Ve)){b=!1;break}j||(j=v=="constructor")}if(b&&!j){var ie=t.constructor,mt=i.constructor;ie!=mt&&"constructor"in t&&"constructor"in i&&!(typeof ie=="function"&&ie instanceof ie&&typeof mt=="function"&&mt instanceof mt)&&(b=!1)}return o.delete(t),o.delete(i),b}var v_=dS;var uS=1,y_="[object Arguments]",x_="[object Array]",kl="[object Object]",mS=Object.prototype,C_=mS.hasOwnProperty;function hS(t,i,e,n,a,o){var r=Qe(t),d=Qe(i),h=r?x_:$n(t),p=d?x_:$n(i);h=h==y_?kl:h,p=p==y_?kl:p;var f=h==kl,g=p==kl,v=h==p;if(v&&Xi(t)){if(!Xi(i))return!1;r=!0,f=!1}if(v&&!f)return o||(o=new bi),r||_l(t)?Fl(t,i,e,n,a,o):b_(t,i,h,e,n,a,o);if(!(e&uS)){var x=f&&C_.call(t,"__wrapped__"),I=g&&C_.call(i,"__wrapped__");if(x||I){var b=x?t.value():t,j=I?i.value():i;return o||(o=new bi),a(b,j,e,n,o)}}return v?(o||(o=new bi),v_(t,i,e,n,a,o)):!1}var w_=hS;function E_(t,i,e,n,a){return t===i?!0:t==null||i==null||!gt(t)&&!gt(i)?t!==t&&i!==i:w_(t,i,e,n,E_,a)}var Il=E_;var pS=1,fS=2;function gS(t,i,e,n){var a=e.length,o=a,r=!n;if(t==null)return!o;for(t=Object(t);a--;){var d=e[a];if(r&&d[2]?d[1]!==t[d[0]]:!(d[0]in t))return!1}for(;++a<o;){d=e[a];var h=d[0],p=t[h],f=d[1];if(r&&d[2]){if(p===void 0&&!(h in t))return!1}else{var g=new bi;if(n)var v=n(p,f,h,t,i,g);if(!(v===void 0?Il(f,p,pS|fS,n,g):v))return!1}}return!0}var D_=gS;function _S(t){return t===t&&!en(t)}var Tl=_S;function bS(t){for(var i=Mn(t),e=i.length;e--;){var n=i[e],a=t[n];i[e]=[n,a,Tl(a)]}return i}var S_=bS;function vS(t,i){return function(e){return e==null?!1:e[t]===i&&(i!==void 0||t in Object(e))}}var Rl=vS;function yS(t){var i=S_(t);return i.length==1&&i[0][2]?Rl(i[0][0],i[0][1]):function(e){return e===t||D_(e,t,i)}}var M_=yS;function xS(t,i){return t!=null&&i in Object(t)}var A_=xS;function CS(t,i,e){i=_i(i,t);for(var n=-1,a=i.length,o=!1;++n<a;){var r=An(i[n]);if(!(o=t!=null&&e(t,r)))break;t=t[r]}return o||++n!=a?o:(a=t==null?0:t.length,!!a&&to(a)&&hl(r,a)&&(Qe(t)||io(t)))}var F_=CS;function wS(t,i){return t!=null&&F_(t,i,A_)}var k_=wS;var ES=1,DS=2;function SS(t,i){return ro(t)&&Tl(i)?Rl(An(t),i):function(e){var n=pg(e,t);return n===void 0&&n===i?k_(e,t):Il(i,n,ES|DS)}}var I_=SS;function MS(t){return function(i){return i?.[t]}}var T_=MS;function AS(t){return function(i){return uo(i,t)}}var R_=AS;function FS(t){return ro(t)?T_(An(t)):R_(t)}var O_=FS;function kS(t){return typeof t=="function"?t:t==null?Za:typeof t=="object"?Qe(t)?I_(t[0],t[1]):M_(t):O_(t)}var P_=kS;function IS(t){var i=t==null?0:t.length;return i?t[i-1]:void 0}var xr=IS;function TS(t,i){return Qa(i,function(e){return t[e]})}var L_=TS;function RS(t){return t==null?[]:L_(t,Mn(t))}var Ol=RS;function OS(t,i){return i.length<2?t:uo(t,wg(i,0,-1))}var B_=OS;function PS(t,i){for(var e,n=-1,a=t.length;++n<a;){var o=i(t[n]);o!==void 0&&(e=e===void 0?o:e+o)}return e}var Pl=PS;function LS(t,i){return i=_i(i,t),t=B_(t,i),t==null||delete t[An(xr(i))]}var N_=LS;function BS(t){return Cg(t)?void 0:t}var V_=BS;var NS=1,VS=2,jS=4,zS=yg(function(t,i){var e={};if(t==null)return e;var n=!1;i=Qa(i,function(o){return o=_i(o,t),n||(n=o.length>1),o}),Sn(t,wl(t),e),n&&(e=c_(e,NS|VS|jS,V_));for(var a=i.length;a--;)N_(e,i[a]);return e}),Pd=zS;function HS(t){return t&&t.length?Pl(t,Za):0}var Cr=HS;function US(t,i){return t&&t.length?Pl(t,P_(i,2)):0}var we=US;function Ll(t,i){let e={bookSalary:we(t,"salary"),prepaidTax:we(t,"tax"),bonus:i,employee:{endowmentInsurance:0,healthInsurance:0},employerCosts:{full:0,insurance:{endowment:0,health:0,unemployment:0,birth:0,occupationalInjury:0},enterprisePension:0}};e.bookIncome=e.bookSalary+e.bonus;let n=5e3*12+we(t,b=>b.fullExtraDeduction+b.insuranceFullCost+b.housingFund),a=Math.max(0,n-e.bookSalary);e.bonusTax=wr(i,a),e.postTaxBonus=e.bonus-e.bonusTax,e.theoreticalTax=Gn(Math.max(e.bookIncome-n,0)),e.totalSeparatedTax=Gn(Math.max(e.bookSalary-n,0))+e.bonusTax,e.postTaxSalary=we(t,"cashIncome"),e.taxedIncome=e.bookIncome-e.theoreticalTax,e.taxedIncomeDeprecated=e.bookIncome-e.totalSeparatedTax,e.fullHousingFund=we(t,"housingFund")*2,e.cashIncome=e.taxedIncome-we(t,"insuranceFullCost")-we(t,"housingFund")-we(t,"extraDeduction.enterprisePensionFromEmployee")-we(t,"extraDeduction.privatePension");let o=we(t,"cashIncome")+e.postTaxBonus;e.cashIncomeDeprecated=e.taxedIncomeDeprecated-we(t,"insuranceFullCost")-we(t,"housingFund")-we(t,"extraDeduction.enterprisePensionFromEmployee")-we(t,"extraDeduction.privatePension"),e.fullInsurance=we(t,"insuranceFullCost"),e.employee.endowmentInsurance=we(t,"insuranceCosts.endowment"),e.employee.healthInsurance=we(t,"insuranceCosts.health"),e.employee.enterprisePension=we(t,"extraDeduction.enterprisePensionFromEmployee"),e.employee.housingFund=we(t,"housingFund"),e.employee.privatePension=we(t,"extraDeduction.privatePension"),e.employee.enterprisePensionFull=we(t,"extraDeduction.enterprisePensionFromEmployee")+we(t,"extraDeduction.enterprisePensionFromEmployer"),e.totalIncome=e.cashIncome+e.fullHousingFund+e.employee.enterprisePensionFull+e.employee.privatePension,e.totalIncomeDeprecated=e.cashIncomeDeprecated+e.fullHousingFund+e.employee.enterprisePensionFull+e.employee.privatePension,e.employerCosts.full=we(t,"employerCosts.full")+e.bonus,e.employerCosts.enterprisePension=we(t,"employerCosts.enterprisePension"),e.employerCosts.insurance={endowment:we(t,"employerCosts.insurance.endowment"),health:we(t,"employerCosts.insurance.health"),unemployment:we(t,"employerCosts.insurance.unemployment"),birth:we(t,"employerCosts.insurance.birth"),occupationalInjury:we(t,"employerCosts.insurance.occupationalInjury")},e.bonusTaxTrap=Ji(i);let r=t.length>0?e.bookSalary/t.length:0,d=t.length>0?we(t,b=>b.fullExtraDeduction+b.insuranceFullCost+b.housingFund)/t.length:0;e.bonusOptimization=GS(r,i,d);let h=t.slice(1).some(b=>b.newPayCycle),p=e.theoreticalTax<e.totalSeparatedTax,f=p?Number((e.totalSeparatedTax-e.theoreticalTax).toFixed(2)):0,g="none",v="",x=0;if(h){let b=e.prepaidTax,j=we(t,re=>re.fullExtraDeduction+re.insuranceFullCost+re.housingFund)+t.length*5e3,q=Gn(Math.max(e.bookSalary-j,0));x=Number((b-q).toFixed(2)),x<-.01?(g="supplement",v=`\u9884\u8BA1\u6B21\u5E74 3-6 \u6708\u7EFC\u5408\u6240\u5F97\u6C47\u7B97\u6E05\u7F34\u9700\u8865\u7A0E \xA5${Math.abs(x).toFixed(2)} \u5143\uFF08\u591A\u7531\u5E74\u4E2D\u6362\u5DE5\u4F5C\u591A\u6BB5\u7D2F\u8BA1\u8BA1\u7A0E\u5BFC\u81F4\uFF09\u3002`):x>.01&&(g="refund",v=`\u9884\u8BA1\u6B21\u5E74 3-6 \u6708\u7EFC\u5408\u6240\u5F97\u6C47\u7B97\u6E05\u7F34\u53EF\u7533\u8BF7\u9000\u7A0E \xA5${x.toFixed(2)} \u5143\u3002`)}else p&&f>=1&&(g="refund",x=f,v=`\u6B21\u5E74\u6C47\u7B97\u5EFA\u8BAE\uFF1A\u82E5\u9009\u62E9\u5C06\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u5E76\u5165\u7EFC\u5408\u6240\u5F97\u7533\u62A5\uFF0C\u9884\u8BA1\u53EF\u7533\u8BF7\u9000\u7A0E \xA5${f.toFixed(2)} \u5143\u3002`);e.annualTaxSettlement={prepaidTax:e.prepaidTax+e.bonusTax,theoreticalTax:e.theoreticalTax,taxDiff:x,settlementType:g,amount:Math.abs(x),hint:v};let I=t[0];if(I?.sideIncome){let b=(I.sideIncome.laborIncome||0)*t.length,j=(I.sideIncome.manuscriptIncome||0)*t.length,q=b*.8,re=j*.8*.7,Ve=q+re,ie=Gn(Ve);e.sideIncomeTax={laborTax:Gn(q),manuscriptTax:Gn(re),totalSideTax:ie}}else e.sideIncomeTax={laborTax:0,manuscriptTax:0,totalSideTax:0};return e}function $S(t,i){let e={salary:t.salary,housingFund:0,tax:0,taxedIncome:0,cashIncome:0,accumulatedSalary:0,accumulatedTax:0,accumulatedTaxQuota:0,accumulatedDeduction:0,accumulatedSpecialDeduction:0,accumulatedExtraDeduction:0,insuranceCosts:{endowment:0,health:0,unemployment:0},insuranceFullCost:0,extraDeduction:t.extraDeduction,fullExtraDeduction:0,newPayCycle:t.newPayCycle,month:0,actualMonth:0,sideIncome:t.sideIncome,employerCosts:{full:0,insuranceFull:0,insurance:{endowment:0,health:0,unemployment:0,birth:0,occupationalInjury:0},enterprisePension:0},id:Math.random().toString()};t.newPayCycle||!i?e.month=1:e.month=i.month+1,e.actualMonth=i?i.actualMonth+1:1;let n=t.newPayCycle,a=Wn(t.housingFundBase,t.housingFundBaseRange)*t.housingFundRate,o=WS(n||!t.insuranceBaseOnLastMonth||!i?t.insuranceBase:i.salary,t.insuranceBaseRange,t.insuranceRate,t.salary),r=Cr(Ol(o)),d=t.extraDeduction.enterprisePensionFromEmployee||0,h=t.extraDeduction.privatePension||0,p=t.enterprisePensionEmployeeRateLimit??.04,f=Array.isArray(t.insuranceBaseRange)?t.insuranceBaseRange[1]:t.insuranceBaseRange.endowment[1],v=Math.min(t.salary,f||t.salary)*p,x=Math.min(d,v),I=t.privatePensionMonthlyQuota??1e3,b=Math.min(h,I),j=qS(t.extraDeduction)+x+b,q=e.month*t.freeTaxQuota;t.firstJobThisYear&&(q=((t.firstJobStartMonth||e.actualMonth||1)+e.month-1)*t.freeTaxQuota);let re=r+a,Ve=(n||!i?0:i.accumulatedSpecialDeduction)+re,ie=(n||!i?0:i.accumulatedExtraDeduction)+j,mt=(n||!i?0:i.accumulatedSalary)+t.salary,Dt=Math.max(mt-(q+Ve+ie),0),kt=Gn(Dt)-(n||!i?0:i.accumulatedTax);return e.fullExtraDeduction=j,e.insuranceCosts=o,e.insuranceFullCost=r,e.housingFund=a,e.tax=kt,e.taxedIncome=e.salary-kt,e.cashIncome=e.salary-r-a-kt-d-h,e.accumulatedSalary=mt,e.accumulatedTaxQuota=Dt,e.accumulatedDeduction=q,e.accumulatedSpecialDeduction=Ve,e.accumulatedExtraDeduction=ie,e.accumulatedTax=kt+(n||!i?0:i.accumulatedTax),e.employerCosts.enterprisePension=t.extraDeduction.enterprisePensionFromEmployer,e.employerCosts.insurance=YS(n||!t.insuranceBaseOnLastMonth||!i?t.insuranceBase:i.salary,t.insuranceBaseRange,t.employer.insuranceRate),e.employerCosts.insuranceFull=Cr(Object.values(e.employerCosts.insurance)),e.employerCosts.full=e.salary+a+e.employerCosts.insuranceFull+e.employerCosts.enterprisePension,e}function Er(t){return t.reduce((i,e)=>{let n=$S(e,xr(i));return i.push(n),i},[])}function Gn(t){let i=j_(t);return t*i.rate-i.minus}function wr(t,i=0){if(t<=0)return 0;let e=Math.max(0,t-Math.max(0,i));if(e===0)return 0;let n=j_(e/12,af);return e*n.rate-n.minus}function Ji(t){if(t<=0)return{isTrap:!1,currentBonus:0,lowerThreshold:0,upperThreshold:0,lostAmount:0,warningMessage:""};for(let i of uf)if(t>i.start&&t<=i.end){let e=wr(i.lowerThreshold),n=wr(t),a=i.lowerThreshold-e,o=t-n,r=Math.max(0,a-o);return{isTrap:!0,currentBonus:t,lowerThreshold:i.lowerThreshold,upperThreshold:i.end,lostAmount:r,warningMessage:`\u26A0\uFE0F \u5E74\u7EC8\u5956 \xA5${t.toLocaleString()} \u843D\u5728\u7A0E\u6536\u65E0\u6548\u76F2\u533A [${(i.start+1).toLocaleString()} ~ ${i.end.toLocaleString()}] \u5143\u3002\u7A0E\u540E\u5230\u624B\u8F83\u53D1\u653E \xA5${i.lowerThreshold.toLocaleString()} \u5143\u53CD\u51CF\u5C11 \xA5${r.toFixed(2)} \u5143\u3002`}}return{isTrap:!1,currentBonus:t,lowerThreshold:0,upperThreshold:0,lostAmount:0,warningMessage:""}}function GS(t,i,e=0){let n=t*12+i,a=5e3*12+e*12,o=Math.max(0,t*12-a),r=Gn(o),d=Math.max(0,a-t*12),h=wr(i,d),p=r+h,f=n-p-e*12,g=i,v=p,x=new Set([0,36e3,144e3,3e5,42e4,66e4,96e4,i]),I=Math.max(1e3,Math.floor(n/200));for(let ie=0;ie<=n;ie+=I)x.add(ie);for(let ie of x){if(ie>n||Ji(ie).isTrap)continue;let Dt=n-ie,kt=Math.max(0,Dt-a),eu=Gn(kt),qb=Math.max(0,a-Dt),Kb=wr(ie,qb),tu=eu+Kb;tu<v&&(v=tu,g=ie)}let b=Math.round((n-g)/12),j=Math.max(0,p-v),q=n-v-e*12,re=j<1,Ve="";return re?Ve="\u5F53\u524D\u5E74\u7EC8\u5956\u4E0E\u6708\u85AA\u5206\u914D\u65B9\u6848\u5DF2\u662F\u7A0E\u8D1F\u6700\u4F18\u7EC4\u5408\u3002":Ve=`\u5EFA\u8BAE\u5C06\u5E74\u7EC8\u5956\u89C4\u5212\u4E3A \xA5${g.toLocaleString()} \u5143\uFF0C\u6708\u85AA\u89C4\u5212\u4E3A \xA5${b.toLocaleString()} \u5143\uFF0C\u5168\u5E74\u53EF\u8282\u7A0E \xA5${j.toFixed(2)} \u5143\u3002`,{currentTotalTax:p,currentCashIncome:f,optimalBonus:g,optimalMonthlySalary:b,optimalTotalTax:v,optimalCashIncome:q,taxSaved:j,isAlreadyOptimal:re,recommendationSummary:Ve}}function WS(t,i,e,n){return{endowment:Wn(t,i.endowment)*e.endowment,health:Wn(t,i.health)*e.health,unemployment:Wn(t,i.unemployment)*e.unemployment}}function YS(t,i,e){return{endowment:Wn(t,i.endowment)*e.endowment,health:Wn(t,i.health)*e.health,unemployment:Wn(t,i.unemployment)*e.unemployment,birth:Wn(t,i.birth)*e.birth,occupationalInjury:Wn(t,i.occupationalInjury)*e.occupationalInjury}}function Wn(t,i){return Math.min(Math.max(t,i[0]),i[1])}function qS(t){return Cr(Ol(Pd(t,["enterprisePensionFromEmployee","enterprisePensionFromEmployer","privatePension"])))}function j_(t,i=nf){let e=i.slice().reverse();for(let n of e)if(t>n.start)return n;return i[0]}function ea(t,i,e){let n=`${i}-${e.toString().padStart(2,"0")}`,a=t.policies.find(o=>o.effectiveDate<=n);if(!a){let o=t.policies[t.policies.length-1];if(!o)throw new Error(`\u5728 ${t.city} \u672A\u627E\u5230\u4EFB\u4F55\u6709\u6548\u653F\u7B56\u3002`);return o}return a}function Dr(t,i){let e=i.toString(),n=t.policies.filter(a=>a.effectiveDate.startsWith(e));return n.length>0?n[0]:ea(t,i,1)}function KS(t,i){return{salary:t.monthSalary,insuranceBase:t.insuranceBase,housingFundBase:t.housingFundBase,housingFundRate:t.housingFundRate/100,insuranceRate:i.employee.insuranceRate,freeTaxQuota:5e3,extraDeduction:t.extraDeduction,annualBonus:t.annualBonus,insuranceBaseRange:XS(i),housingFundBaseRange:i.housingFundBaseRange,enterprisePensionEmployeeRateLimit:t.enterprisePensionEmployeeRateLimit??i.enterprisePensionEmployeeRateLimit??.04,privatePensionMonthlyQuota:t.privatePensionMonthlyQuota??i.privatePensionMonthlyQuota??1e3,insuranceBaseOnLastMonth:t.insuranceBaseOnLastMonth,firstJobThisYear:t.firstJobThisYear,firstJobStartMonth:t.firstJobStartMonth,sideIncome:t.sideIncome,newPayCycle:!1,employer:{insuranceRate:i.employer.insuranceRate}}}function XS(t){let{insuranceBaseRange:i}=t;return Array.isArray(i)&&(i={endowment:i,health:i,unemployment:i,birth:i,occupationalInjury:i}),i}function Bl(t,i,e,n=!1){let a;n&&(a=Dr(t,i));let o=[];for(let r=1;r<=12;r++){let d;n&&a?d=a:d=ea(t,i,r);let h=KS(e,d);r>=1&&r<=6?e.yearBeforeLastAvgSalary&&e.yearBeforeLastAvgSalary>0&&(h.yearBeforeLastAvgSalary=e.yearBeforeLastAvgSalary,h.insuranceBase=e.yearBeforeLastAvgSalary,h.housingFundBase=e.yearBeforeLastAvgSalary):r>=7&&r<=12&&e.lastYearAvgSalary&&e.lastYearAvgSalary>0&&(h.lastYearAvgSalary=e.lastYearAvgSalary,h.insuranceBase=e.lastYearAvgSalary,h.housingFundBase=e.lastYearAvgSalary),o.push(h)}return o}var QS={recipeIndex:[],cityRecipe:null,selectedYear:new Date().getFullYear(),usePredefinedInsurancePercents:!0,selectedMonth:1,clear:!1,monthlyMetas:[]},Nl=Qp({providedIn:"root"},ef(QS),Zp(t=>({hasResults:Ke(()=>t.monthlyMetas().length>0&&!t.clear()),monthlyIncomes:Ke(()=>{let i=t.monthlyMetas();return i.length===0||t.clear()?[]:Er(i)}),summary:Ke(()=>{let i=t.monthlyMetas();if(i.length===0||t.clear())return null;let e=Er(i);return e.length===0?null:Ll(e,i[0].annualBonus||0)})})),Jp((t,i=c(Cn))=>{let e=new Map,n=a=>{if(e.has(a.file)){bn(t,{cityRecipe:e.get(a.file)});return}i.get(`assets/recipes/${a.file}`).pipe(Kn(0)).subscribe(o=>{e.set(a.file,o),bn(t,{cityRecipe:o})})};return{selectRecipeItem:n,loadRecipeIndex:tf(iu(it(()=>i.get("assets/recipes/index.json").pipe(Kn(0))),yn(a=>{bn(t,{recipeIndex:a}),a.length>0&&!t.cityRecipe()&&n(a[0])}))),setRecipe(a){bn(t,{cityRecipe:a})},setSelectedMonth(a){bn(t,{selectedMonth:a})},setSelectedYear(a){bn(t,{selectedYear:a})},setPredefinedInsurancePercents(a){bn(t,{usePredefinedInsurancePercents:a})},clearResults(){bn(t,{clear:!0})},updateMeta(a,o){let r=t.monthlyMetas();if(r&&r.length>o){let d=[...r];d[o]=xe(S({},d[o]),{salary:a.monthSalary+(a.monthlyBonus||0),insuranceBase:a.insuranceBase,housingFundBase:a.housingFundBase,housingFundRate:a.housingFundRate/100,insuranceRate:{endowment:a.insuranceRate.endowment/100,health:a.insuranceRate.health/100,unemployment:a.insuranceRate.unemployment/100},extraDeduction:a.extraDeduction,insuranceBaseOnLastMonth:a.insuranceBaseOnLastMonth,newPayCycle:a.newPayCycle}),bn(t,{monthlyMetas:d,clear:!1})}},calculate(a){let o=t.cityRecipe();if(!o)return;let r=Bl(o,a.year,a,a.useUniformPolicy);r.length>0&&(r[0].newPayCycle=!0),bn(t,{monthlyMetas:r,selectedYear:a.year,clear:!1})}}}));function ZS(t,i){if(t&1&&(s(0,"span",9)(1,"mat-icon",19),u(2,"check_circle"),l(),s(3,"span"),u(4),l()()),t&2){let e=i.$implicit;m(4),ee(e)}}var Vl=(()=>{class t{constructor(){this.store=c(Nl),this.supportedCities=Ke(()=>{let e=this.store.recipeIndex();return!e||e.length===0?["\u6DF1\u5733","\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE"]:Array.from(new Set(e.map(n=>n.city)))})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-help-info"]],decls:95,vars:0,consts:[[1,"help-dialog-header","d-flex","justify-content-between","align-items-center"],["mat-dialog-title","","data-testid","help-dialog-title",1,"m-0","font-weight-bold","text-dark"],["mat-icon-button","","mat-dialog-close","","aria-label","\u5173\u95ED\u4F7F\u7528\u6307\u5357",1,"btn-close-header"],["mat-dialog-content","","data-testid","help-dialog-content",1,"mat-typography","help-dialog-content"],[1,"mb-3"],[1,"section-title","text-dark"],[1,"section-icon","text-primary"],[1,"text-muted","small","mb-2"],["data-testid","supported-cities-container",1,"city-chips-container"],["data-testid","supported-city-chip",1,"city-badge"],[1,"guide-tip-box","p-2","px-3","rounded","small","text-muted","d-flex","align-items-start","mb-2"],[1,"tip-icon","text-warning","mr-2"],[1,"guide-feature-list","pl-3","mb-0","small","text-muted"],[1,"text-muted","small","mb-1"],[1,"text-muted","small","mb-0"],[1,"mb-1"],["href","mailto:jujiang.he@hotmail.com",1,"text-primary","font-weight-medium"],["mat-dialog-actions","","align","end",1,"help-dialog-actions"],["mat-flat-button","","color","primary","mat-dialog-close","","data-testid","help-dialog-close-btn"],[1,"extra-small-icon"]],template:function(n,a){n&1&&(s(0,"div",0)(1,"h2",1),u(2," \u4F7F\u7528\u6307\u5357 "),l(),s(3,"button",2)(4,"mat-icon"),u(5,"close"),l()()(),s(6,"article",3)(7,"section",4)(8,"h3",5)(9,"mat-icon",6),u(10,"location_city"),l(),s(11,"span"),u(12,"\u652F\u6301\u57CE\u5E02\u4E0E\u653F\u7B56\u6807\u51C6"),l()(),s(13,"p",7),u(14," \u7CFB\u7EDF\u5185\u7F6E\u5404\u4E3B\u6D41\u57CE\u5E02\u7684\u5386\u5E74\u793E\u4FDD\u516C\u79EF\u91D1\u7F34\u7EB3\u6807\u51C6\u4E0E\u5B98\u65B9\u653F\u7B56\u4F9D\u636E\uFF0C\u76EE\u524D\u5DF2\u52A8\u6001\u652F\u6301\uFF1A "),l(),s(15,"div",8),pe(16,ZS,5,1,"span",9,qt),l(),s(18,"div",10)(19,"mat-icon",11),u(20,"lightbulb"),l(),s(21,"div")(22,"strong"),u(23,"\u63D0\u793A\uFF1A"),l(),u(24,"\u5728\u8BA1\u7B97\u5668\u8868\u5355\u4E2D\u9009\u62E9\u57CE\u5E02\u540E\uFF0C\u70B9\u51FB\u65C1\u8FB9\u7684\u3010\u653F\u7B56\u53C2\u6570\u3011\u6309\u94AE\uFF0C\u5373\u53EF\u67E5\u9605\u9009\u5B9A\u57CE\u5E02\u5404\u5E74\u5EA6\u793E\u4FDD\u516C\u79EF\u91D1\u57FA\u6570\u3001\u6BD4\u4F8B\u53CA\u5B98\u65B9\u51FA\u5904\u516C\u6587\u3002 "),l()()(),s(25,"section",4)(26,"h3",5)(27,"mat-icon",6),u(28,"featured_play_list"),l(),s(29,"span"),u(30,"\u6838\u5FC3\u529F\u80FD\u901F\u89C8"),l()(),s(31,"ul",12)(32,"li")(33,"strong"),u(34,"\u7EFC\u5408\u85AA\u7A0E\u6838\u7B97"),l(),u(35,"\uFF1A\u7CBE\u51C6\u6A21\u62DF\u6708\u5EA6\u5230\u624B\u6536\u5165\u3001\u7D2F\u8BA1\u9884\u6263\u9884\u7F34\u4E2A\u7A0E\u3001\u4E94\u9669\u4E00\u91D1\u4E2A\u4EBA\u4E0E\u4F01\u4E1A\u8D1F\u62C5\uFF0C\u652F\u6301\u5E74\u7EC8\u5956\u5355\u72EC\u8BA1\u7A0E\u3002 "),l(),s(36,"li")(37,"strong"),u(38,"\u4E13\u9879\u9644\u52A0\u6263\u9664"),l(),u(39,"\uFF1A\u652F\u6301\u5B50\u5973\u6559\u80B2\u3001\u4F4F\u623F\u8D37\u6B3E\u5229\u606F\u3001\u4F4F\u623F\u79DF\u91D1\uFF08\u81EA\u52A8\u4E92\u65A5\u6821\u9A8C\uFF09\u7B49\u5168\u9879\u4F9D\u6CD5\u62B5\u6263\u3002 "),l(),s(40,"li")(41,"strong"),u(42,"\u653F\u7B56\u5206\u6BB5\u4E0E\u57FA\u6570\u6838\u7B97"),l(),u(43,"\uFF1A\u652F\u6301\u5E74\u4E2D7\u6708\u653F\u7B56\u8C03\u57FA\u53F0\u9636\u6838\u7B97\uFF0C\u5E76\u652F\u6301\u6DF1\u5733\u4F9D\u636E\u4E0A\u6708\u5DE5\u8D44\u6838\u7B97\u7B49\u57CE\u5E02\u4E13\u5C5E\u89C4\u5219\u3002 "),l(),s(44,"li")(45,"strong"),u(46,"\u6708\u5EA6\u5FAE\u8C03\u4E0E\u7EA7\u8054\u540C\u6B65"),l(),u(47,"\uFF1A\u652F\u6301\u5355\u6708\u72EC\u7ACB\u6539\u85AA\u3001\u5E74\u4E2D\u6362\u5DE5\u4F5C\u91CD\u7F6E\u7D2F\u8BA1\u5468\u671F\uFF0C\u4FEE\u6539\u65F6\u652F\u6301\u667A\u80FD\u5411\u540E\u7EA7\u8054\u540C\u6B65\u3002 "),l(),s(48,"li")(49,"strong"),u(50,"\u591A\u7EF4\u56FE\u8868\u53EF\u89C6\u5316"),l(),u(51,"\uFF1A\u63D0\u4F9B\u6708\u5EA6\u8D8B\u52BF\u56FE\u3001\u6536\u5165\u6784\u6210\u6BD4\u4F8B\u997C\u56FE\u53CA\u5168\u5E74\u7D2F\u8BA1\u8D8B\u52BF\u56FE\u3002 "),l()()(),s(52,"section",4)(53,"h3",5)(54,"mat-icon",6),u(55,"gavel"),l(),s(56,"span"),u(57,"\u8BA1\u7B97\u8FB9\u754C\u4E0E\u7279\u6B8A\u653F\u7B56\u8BF4\u660E"),l()(),s(58,"ul",12)(59,"li")(60,"strong"),u(61,"\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1"),l(),u(62,"\uFF1A\u6BCF\u7EB3\u7A0E\u5E74\u5EA6\u5185\u4EC5\u9650\u9009\u7528\u4E00\u6B21\u5355\u72EC\u8BA1\u7A0E\u4F18\u60E0\uFF08\u653F\u7B56\u6709\u6548\u671F\u6682\u81F3 2027 \u5E74 12 \u6708 31 \u65E5\uFF09\u3002 "),l(),s(63,"li")(64,"strong"),u(65,"\u5730\u65B9\u8BD5\u9A8C\u6027\u653F\u7B56"),l(),u(66,"\uFF1A\u90E8\u5206\u8BD5\u70B9\u57CE\u5E02\u63A8\u884C\u7684\u5C0F\u989D\u957F\u671F\u62A4\u7406\u4FDD\u9669\uFF08\u957F\u62A4\u9669\uFF09\u6216\u5730\u65B9\u5927\u989D\u533B\u7597\u4E92\u52A9\u91D1\uFF08\u901A\u5E38\u4E3A\u6BCF\u6708\u6570\u5143\u81F3\u5341\u51E0\u5143\uFF09\uFF0C\u56E0\u5C5E\u8BD5\u9A8C\u6027\u8D28\u4E14\u5404\u5730\u6267\u884C\u5DEE\u5F02\u8F83\u5927\uFF0C\u7CFB\u7EDF\u6682\u672A\u81EA\u52A8\u6263\u9664\uFF0C\u7528\u6237\u5982\u6709\u9700\u8981\u53EF\u5C06\u5176\u5B9E\u9645\u91D1\u989D\u5F55\u5165\u3010\u5176\u4ED6\u6263\u9664\u9879\u3011\u4E2D\u53C2\u4E0E\u7A0E\u524D\u62B5\u6263\u3002 "),l(),s(67,"li")(68,"strong"),u(69,"\u6C47\u7B97\u6E05\u7F34\u4E13\u9879"),l(),u(70,"\uFF1A\u5927\u75C5\u533B\u7597\u6263\u9664\u7531\u7EB3\u7A0E\u4EBA\u5728\u6B21\u5E74 3 \u6708 1 \u65E5\u81F3 6 \u6708 30 \u65E5\u6C47\u7B97\u6E05\u7F34\u65F6\u636E\u5B9E\u586B\u62A5\uFF1B\u8DF3\u69FD\u591A\u6BB5\u8BA1\u7A0E\u4EA7\u751F\u7684\u7A0E\u7387\u5DEE\u989D\u7531\u6B21\u5E74\u6C47\u7B97\u7EDF\u4E00\u591A\u9000\u5C11\u8865\u3002 "),l()()(),s(71,"section",4)(72,"h3",5)(73,"mat-icon",6),u(74,"shield"),l(),s(75,"span"),u(76,"\u57FA\u672C\u58F0\u660E\u4E0E\u9690\u79C1"),l()(),s(77,"p",13),u(78," \u2022 \u7EAF\u7F51\u9875\u672C\u5730\u5B89\u5168\u8BA1\u7B97\uFF0C\u4E0D\u6536\u96C6\u3001\u4E0D\u5B58\u50A8\u3001\u4E0D\u4E0A\u62A5\u4EFB\u4F55\u4E2A\u4EBA\u85AA\u8D44\u9690\u79C1\u6570\u636E\u3002 "),l(),s(79,"p",14),u(80," \u2022 \u8BA1\u7B97\u7ED3\u679C\u4F9D\u636E\u6700\u65B0\u7A0E\u6CD5\u4E0E\u5404\u5730\u5B98\u65B9\u653F\u7B56\u516C\u6587\u4EFF\u771F\u6D4B\u7B97\uFF0C\u4F9B\u4E2A\u4EBA\u6D4B\u7B97\u4E0E\u89C4\u5212\u53C2\u8003\u3002 "),l()(),s(81,"section",15)(82,"h3",5)(83,"mat-icon",6),u(84,"mail_outline"),l(),s(85,"span"),u(86,"\u53CD\u9988\u4E0E\u8054\u7CFB\u4F5C\u8005"),l()(),s(87,"p",14),u(88," \u5982\u53D1\u73B0\u8BA1\u7B97\u89C4\u5219\u6709\u8BEF\u3001\u57FA\u6570\u9700\u66F4\u65B0\u6216\u6709\u610F\u613F\u534F\u52A9\u6DFB\u52A0\u65B0\u57CE\u5E02\uFF0C\u6B22\u8FCE\u901A\u8FC7\u90AE\u7BB1 "),s(89,"a",16),u(90,"\u8054\u7CFB\u4F5C\u8005"),l(),u(91,"\u3002 "),l()()(),s(92,"div",17)(93,"button",18),u(94," \u6211\u77E5\u9053\u4E86 "),l()()),n&2&&(m(16),fe(a.supportedCities()))},dependencies:[ze,Ct,zh,si,Ra,li,wt,Ot,pn,Ka,Et,Pt],styles:[".help-dialog-header[_ngcontent-%COMP%]{padding:12px 20px;border-bottom:1px solid rgba(0,0,0,.08)}.help-dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;line-height:1.3;margin:0;padding:0}.help-dialog-header[_ngcontent-%COMP%]   .btn-close-header[_ngcontent-%COMP%]{margin:-6px -6px -6px 0}.help-dialog-content[_ngcontent-%COMP%]{overflow-y:auto;width:100%;max-height:70vh;padding:16px 20px}.help-dialog-actions[_ngcontent-%COMP%]{min-height:auto;margin:0;padding:8px 20px 12px;border-top:1px solid rgba(0,0,0,.08)}.section-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600;display:flex;align-items:center;margin-bottom:6px}.section-icon[_ngcontent-%COMP%]{font-size:18px;line-height:18px;display:inline-flex;justify-content:center;align-items:center;flex-shrink:0;width:18px;height:18px;margin-right:6px}.city-chips-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:4px;margin-bottom:10px;gap:8px 10px}.city-badge[_ngcontent-%COMP%]{font-size:.825rem;font-weight:500;line-height:1.4;display:inline-flex;align-items:center;padding:3px 10px;color:#1565c0;border:1px solid #bbdefb;border-radius:12px;background-color:#f0f7ff}.city-badge[_ngcontent-%COMP%]   .extra-small-icon[_ngcontent-%COMP%]{font-size:14px;line-height:14px;display:inline-flex;align-items:center;width:14px;height:14px;margin-right:4px;color:#1976d2}.guide-tip-box[_ngcontent-%COMP%]{line-height:1.5;border-left:3px solid #1976d2;background-color:#f8f9fa}.guide-tip-box[_ngcontent-%COMP%]   .tip-icon[_ngcontent-%COMP%]{font-size:16px;line-height:16px;flex-shrink:0;width:16px;height:16px;margin-top:2px}.guide-feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:1.5;margin-bottom:5px}"]})}}return t})();var z_=(()=>{class t{constructor(){this.dialog=c(hn)}openHelpDialog(){this.dialog.open(Vl,{width:"720px",maxWidth:"92vw"})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-navbar"]],decls:9,vars:0,consts:[["aria-label","Top Toolbar",1,"navbar-header"],["mat-button","","data-testid","navbar-brand",1,"docs-button"],["size","large","svgIcon","calculator"],[1,"flex-spacer"],["mat-icon-button","","data-testid","navbar-help-btn","aria-label","Help message for the tool",3,"click"]],template:function(n,a){n&1&&(s(0,"nav",0)(1,"a",1),D(2,"mat-icon",2),s(3,"span"),u(4,"\u4E2A\u7A0E\u4E0E\u85AA\u8D44\u8BA1\u7B97\u5668"),l()(),D(5,"div",3),s(6,"button",4),F("click",function(){return a.openHelpDialog()}),s(7,"mat-icon"),u(8,"help"),l()()())},dependencies:[wt,Ot,pn,Et,Pt,Ct],styles:[".navbar-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;padding:8px 16px}.navbar-header[_ngcontent-%COMP%] > .mat-mdc-button[_ngcontent-%COMP%]{color:inherit}.navbar-header[_ngcontent-%COMP%] > .mat-mdc-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:24px;height:24px}.navbar-header[_ngcontent-%COMP%] > .mat-mdc-button[_ngcontent-%COMP%]:last-child{margin-left:auto}.flex-spacer[_ngcontent-%COMP%]{flex-grow:1}"]})}}return t})();var JS=["*"];var eM=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],tM=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],nM=new y("MAT_CARD_CONFIG"),vi=(()=>{class t{appearance;constructor(){let e=c(nM,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,a){n&2&&z("mat-mdc-card-outlined",a.appearance==="outlined")("mdc-card--outlined",a.appearance==="outlined")("mat-mdc-card-filled",a.appearance==="filled")("mdc-card--filled",a.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:JS,decls:1,vars:0,template:function(n,a){n&1&&(me(),Y(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),bo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var vo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var H_=(()=>{class t{align="start";static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,a){n&2&&z("mat-mdc-card-actions-align-end",a.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),yo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:tM,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,a){n&1&&(me(eM),Y(0),Ge(1,"div",0),Y(2,1),dt(),Y(3,2))},encapsulation:2,changeDetection:0})}return t})();var yi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[te]})}return t})();var Gt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ka,Dn,te]})}return t})();var iM=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,a){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),aM={passive:!0},U_=(()=>{class t{_platform=c(de);_ngZone=c(W);_renderer=c(pt).createRenderer(null,null);_styleLoader=c(Re);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return oa;this._styleLoader.load(iM);let n=Mt(e),a=this._monitoredElements.get(n);if(a)return a.subject;let o=new T,r="cdk-text-field-autofilled",d=p=>{p.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(r)?(n.classList.add(r),this._ngZone.run(()=>o.next({target:p.target,isAutofilled:!0}))):p.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(r)&&(n.classList.remove(r),this._ngZone.run(()=>o.next({target:p.target,isAutofilled:!1})))},h=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",d,aM)));return this._monitoredElements.set(n,{subject:o,unlisten:h}),o}stopMonitoring(e){let n=Mt(e),a=this._monitoredElements.get(n);a&&(a.unlisten(),a.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();var G_=new y("MAT_INPUT_VALUE_ACCESSOR");var oM=["button","checkbox","file","hidden","image","radio","range","reset","submit"],rM=new y("MAT_INPUT_CONFIG"),xo=(()=>{class t{_elementRef=c(O);_platform=c(de);ngControl=c(fn,{optional:!0,self:!0});_autofillMonitor=c(U_);_ngZone=c(W);_formField=c(Ki,{optional:!0});_renderer=c(ve);_uid=c(Se).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(rM,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new T;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=At(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Z.required)??!1}set required(e){this._required=At(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ud().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=At(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>ud().has(e));constructor(){let e=c(gr,{optional:!0}),n=c(gn,{optional:!0}),a=c(Ya),o=c(G_,{optional:!0,self:!0}),r=this._elementRef.nativeElement,d=r.nodeName.toLowerCase();o?Yt(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=r,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(r,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new qa(a,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=d==="select",this._isTextarea=d==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=r.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&nn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){oM.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,a){n&1&&F("focus",function(){return a._focusChanged(!0)})("blur",function(){return a._focusChanged(!1)})("input",function(){return a._onInput()}),n&2&&(_t("id",a.id)("disabled",a.disabled&&!a.disabledInteractive)("required",a.required),A("name",a.name||null)("readonly",a._getReadonlyAttribute())("aria-disabled",a.disabled&&a.disabledInteractive?"true":null)("aria-invalid",a.empty&&a.required?null:a.errorState)("aria-required",a.required)("id",a.id),z("mat-input-server",a._isServer)("mat-mdc-form-field-textarea-control",a._isInFormField&&a._isTextarea)("mat-mdc-form-field-input-control",a._isInFormField)("mat-mdc-input-disabled-interactive",a.disabledInteractive)("mdc-text-field__input",a._isInFormField)("mat-mdc-native-select-inline",a._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",B]},exportAs:["matInput"],features:[oe([{provide:_r,useExisting:t}]),Ce]})}return t})(),Co=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Gt,Gt,$_,te]})}return t})();var Sr=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new T;constructor(i=!1,e,n=!0,a){this._multiple=i,this._emitChanges=n,this.compareWith=a,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var Mr=(()=>{class t{_listeners=[];notify(e,n){for(let a of this._listeners)a(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var W_=(()=>{class t{_animationsDisabled=ye();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,a){n&2&&z("mat-pseudo-checkbox-indeterminate",a.state==="indeterminate")("mat-pseudo-checkbox-checked",a.state==="checked")("mat-pseudo-checkbox-disabled",a.disabled)("mat-pseudo-checkbox-minimal",a.appearance==="minimal")("mat-pseudo-checkbox-full",a.appearance==="full")("_mat-animation-noopable",a._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,a){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var sM=["text"],lM=[[["mat-icon"]],"*"],cM=["mat-icon","*"];function dM(t,i){if(t&1&&D(0,"mat-pseudo-checkbox",1),t&2){let e=w();_("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function uM(t,i){if(t&1&&D(0,"mat-pseudo-checkbox",3),t&2){let e=w();_("disabled",e.disabled)}}function mM(t,i){if(t&1&&(s(0,"span",4),u(1),l()),t&2){let e=w();m(),k("(",e.group.label,")")}}var Fr=new y("MAT_OPTION_PARENT_COMPONENT"),kr=new y("MatOptgroup");var Ar=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Nt=(()=>{class t{_element=c(O);_changeDetectorRef=c(ge);_parent=c(Fr,{optional:!0});group=c(kr,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(Se).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ne(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new R;_text;_stateChanges=new T;constructor(){let e=c(Re);e.load(Rt),e.load(Aa),this._signalDisableRipple=!!this._parent&&Yt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let a=this._getHostElement();typeof a.focus=="function"&&a.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Oe(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ar(this,e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-option"]],viewQuery:function(n,a){if(n&1&&De(sM,7),n&2){let o;P(o=L())&&(a._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,a){n&1&&F("click",function(){return a._selectViaInteraction()})("keydown",function(r){return a._handleKeydown(r)}),n&2&&(_t("id",a.id),A("aria-selected",a.selected)("aria-disabled",a.disabled.toString()),z("mdc-list-item--selected",a.selected)("mat-mdc-option-multiple",a.multiple)("mat-mdc-option-active",a.active)("mdc-list-item--disabled",a.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",B]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:cM,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,a){n&1&&(me(lM),H(0,dM,1,2,"mat-pseudo-checkbox",1),Y(1),s(2,"span",2,0),Y(4,1),l(),H(5,uM,1,1,"mat-pseudo-checkbox",3),H(6,mM,2,1,"span",4),D(7,"div",5)),n&2&&(U(a.multiple?0:-1),m(5),U(!a.multiple&&a.selected&&!a.hideSingleSelectionIndicator?5:-1),m(),U(a.group&&a.group._inert?6:-1),m(),_("matRippleTrigger",a._getHostElement())("matRippleDisabled",a.disabled||a.disableRipple))},dependencies:[W_,Nn],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function Hl(t,i,e){if(e.length){let n=i.toArray(),a=e.toArray(),o=0;for(let r=0;r<t+1;r++)n[r].group&&n[r].group===a[o]&&o++;return o}return 0}function Ul(t,i,e,n){return t<e?t:t+i>e+n?Math.max(0,t-n+i):e}var $l=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[te]})}return t})();var wo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[En,$l,Nt,te]})}return t})();var hM=["trigger"],pM=["panel"],fM=[[["mat-select-trigger"]],"*"],gM=["mat-select-trigger","*"];function _M(t,i){if(t&1&&(s(0,"span",4),u(1),l()),t&2){let e=w();m(),ee(e.placeholder)}}function bM(t,i){t&1&&Y(0)}function vM(t,i){if(t&1&&(s(0,"span",11),u(1),l()),t&2){let e=w(2);m(),ee(e.triggerValue)}}function yM(t,i){if(t&1&&(s(0,"span",5),H(1,bM,1,0)(2,vM,2,1,"span",11),l()),t&2){let e=w();m(),U(e.customTrigger?1:2)}}function xM(t,i){if(t&1){let e=We();s(0,"div",12,1),F("keydown",function(a){Me(e);let o=w();return Ae(o._handleKeydown(a))}),Y(2,1),l()}if(t&2){let e=w();qe(e.panelClass),z("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),A("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var CM=new y("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>dn(t)}}),wM=new y("MAT_SELECT_CONFIG"),EM=new y("MatSelectTrigger"),Bd=class{source;value;constructor(i,e){this.source=i,this.value=e}},Eo=(()=>{class t{_viewportRuler=c(zt);_changeDetectorRef=c(ge);_elementRef=c(O);_dir=c(He,{optional:!0});_idGenerator=c(Se);_renderer=c(ve);_parentFormField=c(Ki,{optional:!0});ngControl=c(fn,{self:!0,optional:!0});_liveAnnouncer=c(id);_defaultOptions=c(wM,{optional:!0});_animationsDisabled=ye();_popoverLocation;_initialized=new T;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let a=this.panel.nativeElement,o=Hl(e,this.options,this.optionGroups),r=n._getHostElement();e===0&&o===1?a.scrollTop=0:a.scrollTop=Ul(r.offsetTop,r.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Bd(this,e)}_scrollStrategyFactory=c(CM);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new T;_errorStateTracker;stateChanges=new T;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ne(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Z.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=qn(()=>{let e=this.options;return e?e.changes.pipe(Le(e),it(()=>je(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(it(()=>this.optionSelectionChanges))});openedChange=new R;_openedStream=this.openedChange.pipe(se(e=>e),be(()=>{}));_closedStream=this.openedChange.pipe(se(e=>!e),be(()=>{}));selectionChange=new R;valueChange=new R;constructor(){let e=c(Ya),n=c(gr,{optional:!0}),a=c(gn,{optional:!0}),o=c(new kn("tabindex"),{optional:!0}),r=c(Zo,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new qa(e,this.ngControl,a,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Sr(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ee(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ee(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(Le(null),Ee(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?a.setAttribute("aria-labelledby",e):a.removeAttribute("aria-labelledby")}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Je(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let n=`${this.id}-panel`;this._trackedModal&&ri(this._trackedModal,"aria-owns",n),Ta(e,"aria-owns",n),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;ri(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(a),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,a=n===40||n===38||n===37||n===39,o=n===13||n===32,r=this._keyManager;if(!r.isTyping()&&o&&!Oe(e)||(this.multiple||e.altKey)&&a)e.preventDefault(),this.open();else if(!this.multiple){let d=this.selected;r.onKeydown(e);let h=this.selected;h&&d!==h&&this._liveAnnouncer.announce(h.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,a=e.keyCode,o=a===40||a===38,r=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(a===13||a===32)&&n.activeItem&&!Oe(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!r&&this._multiple&&a===65&&e.ctrlKey){e.preventDefault();let d=this.options.some(h=>!h.disabled&&!h.selected);this.options.forEach(h=>{h.disabled||(d?h.select():h.deselect())})}else{let d=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==d&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Oe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ea?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new zi(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=je(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ee(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),je(...this.options.map(n=>n._stateChanges)).pipe(Ee(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let a=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(a!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),a!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,a)=>this.sortComparator?this.sortComparator(n,a,e):e.indexOf(n)-e.indexOf(a)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(a=>a.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(e){let n=st(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-select"]],contentQueries:function(n,a,o){if(n&1&&at(o,EM,5)(o,Nt,5)(o,kr,5),n&2){let r;P(r=L())&&(a.customTrigger=r.first),P(r=L())&&(a.options=r),P(r=L())&&(a.optionGroups=r)}},viewQuery:function(n,a){if(n&1&&De(hM,5)(pM,5)(Rs,5),n&2){let o;P(o=L())&&(a.trigger=o.first),P(o=L())&&(a.panel=o.first),P(o=L())&&(a._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,a){n&1&&F("keydown",function(r){return a._handleKeydown(r)})("focus",function(){return a._onFocus()})("blur",function(){return a._onBlur()}),n&2&&(A("id",a.id)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a.panelOpen?a.id+"-panel":null)("aria-expanded",a.panelOpen)("aria-label",a.ariaLabel||null)("aria-required",a.required.toString())("aria-disabled",a.disabled.toString())("aria-invalid",a.errorState)("aria-activedescendant",a._getAriaActiveDescendant()),z("mat-mdc-select-disabled",a.disabled)("mat-mdc-select-invalid",a.errorState)("mat-mdc-select-required",a.required)("mat-mdc-select-empty",a.empty)("mat-mdc-select-multiple",a.multiple)("mat-select-open",a.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",B],disableRipple:[2,"disableRipple","disableRipple",B],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:rt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",B],placeholder:"placeholder",required:[2,"required","required",B],multiple:[2,"multiple","multiple",B],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",B],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",rt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",B]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[oe([{provide:_r,useExisting:t},{provide:Fr,useExisting:t}]),Ce],ngContentSelectors:gM,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,a){if(n&1&&(me(fM),s(0,"div",2,0),F("click",function(){return a.open()}),s(3,"div",3),H(4,_M,2,1,"span",4)(5,yM,3,1,"span",5),l(),s(6,"div",6)(7,"div",7),Vt(),s(8,"svg",8),D(9,"path",9),l()()()(),Ie(10,xM,3,16,"ng-template",10),F("detach",function(){return a.close()})("backdropClick",function(){return a.close()})("overlayKeydown",function(r){return a._handleOverlayKeydown(r)})),n&2){let o=_e(1);m(3),A("id",a._valueId),m(),U(a.empty?4:5),m(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",a._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",a._scrollStrategy)("cdkConnectedOverlayOrigin",a._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",a._positions)("cdkConnectedOverlayWidth",a._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",a._popoverLocation)}},dependencies:[Ea,Rs],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var Do=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Ht,wo,te,ln,Gt,wo]})}return t})();var DM=["mat-internal-form-field",""],SM=["*"],Y_=(()=>{class t{labelPosition="after";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(n,a){n&2&&z("mdc-form-field--align-end",a.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:DM,ngContentSelectors:SM,decls:1,vars:0,template:function(n,a){n&1&&(me(),Y(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var MM=["switch"],AM=["*"];function FM(t,i){t&1&&(s(0,"span",11),Vt(),s(1,"svg",13),D(2,"path",14),l(),s(3,"svg",15),D(4,"path",16),l()())}var kM=new y("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Wl=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},Ir=(()=>{class t{_elementRef=c(O);_focusMonitor=c(xt);_changeDetectorRef=c(ge);defaults=c(kM);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Wl(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ye();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new R;toggleChange=new R;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){c(Re).load(Rt);let e=c(new kn("tabindex"),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||"accent",this.id=this._uniqueId=c(Se).getId("mat-mdc-slide-toggle-"),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Wl(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(n,a){if(n&1&&De(MM,5),n&2){let o;P(o=L())&&(a._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(n,a){n&2&&(_t("id",a.id),A("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),qe(a.color?"mat-"+a.color:""),z("mat-mdc-slide-toggle-focused",a._focused)("mat-mdc-slide-toggle-checked",a.checked)("_mat-animation-noopable",a._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",B],color:"color",disabled:[2,"disabled","disabled",B],disableRipple:[2,"disableRipple","disableRipple",B],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:rt(e)],checked:[2,"checked","checked",B],hideIcon:[2,"hideIcon","hideIcon",B],disabledInteractive:[2,"disabledInteractive","disabledInteractive",B]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[oe([{provide:ui,useExisting:ht(()=>t),multi:!0},{provide:jn,useExisting:t,multi:!0}]),Ce],ngContentSelectors:AM,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(n,a){if(n&1&&(me(),s(0,"div",1)(1,"button",2,0),F("click",function(){return a._handleClick()}),D(3,"div",3)(4,"span",4),s(5,"span",5)(6,"span",6)(7,"span",7),D(8,"span",8),l(),s(9,"span",9),D(10,"span",10),l(),H(11,FM,5,0,"span",11),l()()(),s(12,"label",12),F("click",function(r){return r.stopPropagation()}),Y(13),l()()),n&2){let o=_e(2);_("labelPosition",a.labelPosition),m(),z("mdc-switch--selected",a.checked)("mdc-switch--unselected",!a.checked)("mdc-switch--checked",a.checked)("mdc-switch--disabled",a.disabled)("mat-mdc-slide-toggle-disabled-interactive",a.disabledInteractive),_("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex)("disabled",a.disabled&&!a.disabledInteractive),A("id",a.buttonId)("name",a.name)("aria-label",a.ariaLabel)("aria-labelledby",a._getAriaLabelledBy())("aria-describedby",a.ariaDescribedby)("aria-required",a.required||null)("aria-checked",a.checked)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),m(9),_("matRippleTrigger",o)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),m(),U(a.hideIcon?-1:11),m(),_("for",a.buttonId),A("id",a._labelId)}},dependencies:[Nn,Y_],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return t})(),Yl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Ir,te]})}return t})();var IM=["panel"],TM=["*"];function RM(t,i){if(t&1&&(Ge(0,"div",1,0),Y(2),dt()),t&2){let e=i.id,n=w();qe(n._classList),z("mat-mdc-autocomplete-visible",n.showPanel)("mat-mdc-autocomplete-hidden",!n.showPanel)("mat-autocomplete-panel-animations-enabled",!n._animationsDisabled)("mat-primary",n._color==="primary")("mat-accent",n._color==="accent")("mat-warn",n._color==="warn"),_t("id",n.id),A("aria-label",n.ariaLabel||null)("aria-labelledby",n._getPanelAriaLabelledby(e))}}var Nd=class{source;option;constructor(i,e){this.source=i,this.option=e}},K_=new y("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),ql=(()=>{class t{_changeDetectorRef=c(ge);_elementRef=c(O);_defaults=c(K_);_animationsDisabled=ye();_activeOptionChanges=he.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new R;opened=new R;closed=new R;optionActivated=new R;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=c(Se).getId("mat-autocomplete-");inertGroups;constructor(){let e=c(de);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new zi(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let n=new Nd(this,e);this.optionSelected.emit(n)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(n,a,o){if(n&1&&at(o,Nt,5)(o,kr,5),n&2){let r;P(r=L())&&(a.options=r),P(r=L())&&(a.optionGroups=r)}},viewQuery:function(n,a){if(n&1&&De(lt,7)(IM,5),n&2){let o;P(o=L())&&(a.template=o.first),P(o=L())&&(a.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",B],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",B],requireSelection:[2,"requireSelection","requireSelection",B],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",B],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",B]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[oe([{provide:Fr,useExisting:t}])],ngContentSelectors:TM,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(n,a){n&1&&(me(),ma(0,RM,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var OM={provide:ui,useExisting:ht(()=>Tr),multi:!0};var PM=new y("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>dn(t)}}),Tr=(()=>{class t{_environmentInjector=c(tn);_element=c(O);_injector=c(X);_viewContainerRef=c(ct);_zone=c(W);_changeDetectorRef=c(ge);_dir=c(He,{optional:!0});_formField=c(Ki,{optional:!0,host:!0});_viewportRuler=c(zt);_scrollStrategy=c(PM);_renderer=c(ve);_animationsDisabled=ye();_defaults=c(K_,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new T;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=he.EMPTY;_breakpointObserver=c(tr);_handsetLandscapeSubscription=he.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new T;_overlayPanelClass=On(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&ri(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return je(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(se(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(se(()=>this._overlayAttached)):Ue()).pipe(be(e=>e instanceof Ar?e:null))}optionSelections=qn(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Le(e),it(()=>je(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(it(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new Ze(e=>{let n=o=>{let r=st(o),d=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,h=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&r!==this._element.nativeElement&&!this._hasFocus()&&(!d||!d.contains(r))&&(!h||!h.contains(r))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(r)&&e.next(o)},a=[this._renderer.listen("document","click",n),this._renderer.listen("document","auxclick",n),this._renderer.listen("document","touchend",n)];return()=>{a.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let n=e,a=n.keyCode,o=Oe(n);if(a===27&&!o&&n.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&a===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),n.preventDefault();else if(this.autocomplete){let r=this.autocomplete._keyManager.activeItem,d=a===38||a===40;a===9||d&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(n):d&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(d||this.autocomplete._keyManager.activeItem!==r)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let n=e.target,a=n.value;if(n.type==="number"&&(a=a==""?null:parseFloat(a)),this._previousValue!==a){if(this._previousValue=a,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(a),!a)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(r=>r.selected);if(o){let r=this._getDisplayValue(o.value);a!==r&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return ei()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new Ze(a=>{$e(()=>{a.next()},{injector:this._environmentInjector})}),n=this.autocomplete.options?.changes.pipe(yn(()=>this._positionStrategy.reapplyLastPosition()),Kn(0))??Ue();return je(e,n).pipe(it(()=>this._zone.run(()=>{let a=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),a!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Je(1)).subscribe(a=>this._setValueAndClose(a))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let n=this.autocomplete;return n&&n.displayWith?n.displayWith(e):e}_assignOptionValue(e){let n=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(n??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let n=this.autocomplete,a=e?e.source:this._pendingAutoselectedOption;a?(this._clearPreviousSelectedOption(a),this._assignOptionValue(a.value),this._onChange(a.value),n._emitSelectEvent(a),this._element.nativeElement.focus()):n.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,n){this.autocomplete?.options?.forEach(a=>{a!==e&&a.selected&&a.deselect(n)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let n=this.autocomplete.id;Ta(this._trackedModal,"aria-owns",n)}}_attachOverlay(e){if(!this.autocomplete)return;let n=this._overlayRef;n?(this._positionStrategy.setOrigin(this._getConnectedElement()),n.updateSize({width:this._getPanelWidth()})):(this._portal=new yt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),n=un(this._injector,this._getOverlayConfig()),this._overlayRef=n,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&n&&n.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Ah.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),n&&!n.hasAttached()&&(n.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let a=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&a!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Oe(e)||e.keyCode===38&&Oe(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new cn({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Ln(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let n=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],a=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:a},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:a}],r;this.position==="above"?r=o:this.position==="below"?r=n:r=[...n,...o],e.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let n=-1;for(let a=0;a<e.options.length;a++)if(!e.options.get(a).disabled){n=a;break}e._keyManager.setActiveItem(n)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let n=this.autocomplete,a=Hl(e,n.options,n.optionGroups);if(e===0&&a===1)n._setScrollTop(0);else if(n.panel){let o=n.options.toArray()[e];if(o){let r=o._getHostElement(),d=Ul(r.offsetTop,r.offsetHeight,n._getScrollTop(),n.panel.nativeElement.offsetHeight);n._setScrollTop(d)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let n=this.autocomplete.id;this._trackedModal&&ri(this._trackedModal,"aria-owns",n),Ta(e,"aria-owns",n),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;ri(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(n,a){n&1&&F("focusin",function(){return a._handleFocus()})("blur",function(){return a._onTouched()})("input",function(r){return a._handleInput(r)})("keydown",function(r){return a._handleKeydown(r)})("click",function(){return a._handleClick()}),n&2&&A("autocomplete",a.autocompleteAttribute)("role",a.autocompleteDisabled?null:"combobox")("aria-autocomplete",a.autocompleteDisabled?null:"list")("aria-activedescendant",a.panelOpen&&a.activeOption?a.activeOption.id:null)("aria-expanded",a.autocompleteDisabled?null:a.panelOpen.toString())("aria-controls",a.autocompleteDisabled||!a.panelOpen||a.autocomplete==null?null:a.autocomplete.id)("aria-haspopup",a.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",B]},exportAs:["matAutocompleteTrigger"],features:[oe([OM]),Ce]})}return t})(),Kl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[Ht,wo,ln,wo,te]})}return t})();var Vd=new y("CdkAccordion"),Q_=(()=>{class t{_stateChanges=new T;_openCloseAllActions=new T;id=c(Se).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",B]},exportAs:["cdkAccordion"],features:[oe([{provide:Vd,useExisting:t}]),Ce]})}return t})(),Z_=(()=>{class t{accordion=c(Vd,{optional:!0,skipSelf:!0});_changeDetectorRef=c(ge);_expansionDispatcher=c(Mr);_openCloseAllSubscription=he.EMPTY;closed=new R;opened=new R;destroyed=new R;expandedChange=new R;id=c(Se).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ne(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",B],disabled:[2,"disabled","disabled",B]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[oe([{provide:Vd,useValue:void 0}])]})}return t})(),J_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({})}return t})();var LM=["body"],BM=["bodyWrapper"],NM=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],VM=["mat-expansion-panel-header","*","mat-action-row"];function jM(t,i){}var zM=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],HM=["mat-panel-title","mat-panel-description","*"];function UM(t,i){t&1&&(Ge(0,"span",1),Vt(),Ge(1,"svg",2),Kt(2,"path",3),dt()())}var jd=new y("MAT_ACCORDION"),eb=new y("MAT_EXPANSION_PANEL"),$M=(()=>{class t{_template=c(lt);_expansionPanel=c(eb,{optional:!0});constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),tb=new y("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Rr=(()=>{class t extends Z_{_viewContainerRef=c(ct);_animationsDisabled=ye();_document=c(Q);_ngZone=c(W);_elementRef=c(O);_renderer=c(ve);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new R;afterCollapse=new R;_inputChanges=new T;accordion=c(jd,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=c(Se).getId("mat-expansion-panel-header-");constructor(){super();let e=c(tb,{optional:!0});this._expansionDispatcher=c(Mr),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Le(null),se(()=>this.expanded&&!this._portal),Je(1)).subscribe(()=>{this._portal=new yt(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(n,a,o){if(n&1&&at(o,$M,5),n&2){let r;P(r=L())&&(a._lazyContent=r.first)}},viewQuery:function(n,a){if(n&1&&De(LM,5)(BM,5),n&2){let o;P(o=L())&&(a._body=o.first),P(o=L())&&(a._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,a){n&2&&z("mat-expanded",a.expanded)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",B],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[oe([{provide:jd,useValue:void 0},{provide:eb,useExisting:t}]),J,Ce],ngContentSelectors:VM,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,a){n&1&&(me(NM),Y(0),s(1,"div",2,0)(3,"div",3,1)(5,"div",4),Y(6,1),Ie(7,jM,0,0,"ng-template",5),l(),Y(8,2),l()()),n&2&&(m(),A("inert",a.expanded?null:""),m(2),_("id",a.id),A("aria-labelledby",a._headerId),m(4),_("cdkPortalOutlet",a._portal))},dependencies:[wn],styles:[`.mat-expansion-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var Or=(()=>{class t{panel=c(Rr,{host:!0});_element=c(O);_focusMonitor=c(xt);_changeDetectorRef=c(ge);_parentChangeSubscription=he.EMPTY;constructor(){c(Re).load(Rt);let e=this.panel,n=c(tb,{optional:!0}),a=c(new kn("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(se(r=>!!(r.hideToggle||r.togglePosition))):oa;this.tabIndex=parseInt(a||"")||0,this._parentChangeSubscription=je(e.opened,e.closed,o,e._inputChanges.pipe(se(r=>!!(r.hideToggle||r.disabled||r.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(se(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Oe(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,a){n&1&&F("click",function(){return a._toggle()})("keydown",function(r){return a._keydown(r)}),n&2&&(A("id",a.panel._headerId)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),Be("height",a._getHeaderHeight()),z("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after",a._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",a._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:rt(e)]},ngContentSelectors:HM,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,a){n&1&&(me(zM),Ge(0,"span",0),Y(1),Y(2,1),Y(3,2),dt(),H(4,UM,3,0,"span",1)),n&2&&(z("mat-content-hide-toggle",!a._showToggle()),m(4),U(a._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2,changeDetection:0})}return t})();var nb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),ib=(()=>{class t extends Q_{_keyManager;_ownHeaders=new xn;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(Le(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Bn(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,selectors:[["mat-accordion"]],contentQueries:function(n,a,o){if(n&1&&at(o,Or,5),n&2){let r;P(r=L())&&(a._headers=r)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,a){n&2&&z("mat-accordion-multi",a.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",B],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[oe([{provide:jd,useExisting:t}]),J]})}return t})(),Xl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[J_,Pn,te]})}return t})();var GM=["mat-menu-item",""],WM=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],YM=["mat-icon, [matMenuItemIcon]","*"];function qM(t,i){t&1&&(Vt(),s(0,"svg",2),D(1,"polygon",3),l())}var KM=["*"];function XM(t,i){if(t&1){let e=We();Ge(0,"div",0),Yr("click",function(){Me(e);let a=w();return Ae(a.closed.emit("click"))})("animationstart",function(a){Me(e);let o=w();return Ae(o._onAnimationStart(a.animationName))})("animationend",function(a){Me(e);let o=w();return Ae(o._onAnimationDone(a.animationName))})("animationcancel",function(a){Me(e);let o=w();return Ae(o._onAnimationDone(a.animationName))}),Ge(1,"div",1),Y(2),dt()()}if(t&2){let e=w();qe(e._classList),z("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),_t("id",e.panelId),A("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Hd=new y("MAT_MENU_PANEL"),Pr=(()=>{class t{_elementRef=c(O);_document=c(Q);_focusMonitor=c(xt);_parentMenu=c(Hd,{optional:!0});_changeDetectorRef=c(ge);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new T;_focused=new T;_highlighted=!1;_triggersSubmenu=!1;constructor(){c(Re).load(Rt),this._parentMenu?.addItem?.(this)}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),n=e.querySelectorAll("mat-icon, .material-icons");for(let a=0;a<n.length;a++)n[a].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(n,a){n&1&&F("click",function(r){return a._checkDisabled(r)})("mouseenter",function(){return a._handleMouseEnter()}),n&2&&(A("role",a.role)("tabindex",a._getTabIndex())("aria-disabled",a.disabled)("disabled",a.disabled||null),z("mat-mdc-menu-item-highlighted",a._highlighted)("mat-mdc-menu-item-submenu-trigger",a._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",B],disableRipple:[2,"disableRipple","disableRipple",B]},exportAs:["matMenuItem"],attrs:GM,ngContentSelectors:YM,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(n,a){n&1&&(me(WM),Y(0),s(1,"span",0),Y(2,1),l(),D(3,"div",1),H(4,qM,2,0,":svg:svg",2)),n&2&&(m(3),_("matRippleDisabled",a.disableRipple||a.disabled)("matRippleTrigger",a._getHostElement()),m(),U(a._triggersSubmenu?4:-1))},dependencies:[Nn],encapsulation:2,changeDetection:0})}return t})();var QM=new y("MatMenuContent");var ZM=new y("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),zd="_mat-menu-enter",Ql="_mat-menu-exit",Mo=(()=>{class t{_elementRef=c(O);_changeDetectorRef=c(ge);_injector=c(X);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ye();_allItems;_directDescendantItems=new xn;_classList={};_panelAnimationState="void";_animationDone=new T;_isAnimating=ne(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let n=this._previousPanelClass,a=S({},this._classList);n&&n.length&&n.split(" ").forEach(o=>{a[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{a[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=a}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new R;close=this.closed;panelId=c(Se).getId("mat-menu-panel-");constructor(){let e=c(ZM);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Bn(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Le(this._directDescendantItems),it(e=>je(...e.map(n=>n._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let n=this._keyManager;if(this._panelAnimationState==="enter"&&n.activeItem?._hasFocus()){let a=e.toArray(),o=Math.max(0,Math.min(a.length-1,n.activeItemIndex||0));a[o]&&!a[o].disabled?n.setActiveItem(o):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Le(this._directDescendantItems),it(n=>je(...n.map(a=>a._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let n=e.keyCode,a=this._keyManager;switch(n){case 27:Oe(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(n===38||n===40)&&a.setFocusOrigin("keyboard"),a.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=$e(()=>{let n=this._resolvePanel();if(!n||!n.contains(document.activeElement)){let a=this._keyManager;a.setFocusOrigin(e).setFirstItemActive(),!a.activeItem&&n&&n.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,n=this.yPosition){this._classList=xe(S({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":n==="above","mat-menu-below":n==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let n=e===Ql;(n||e===zd)&&(n&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(n?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===zd||e===Ql)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let n=this._resolvePanel();n&&(n.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ql),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?zd:Ql)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Le(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-menu"]],contentQueries:function(n,a,o){if(n&1&&at(o,QM,5)(o,Pr,5)(o,Pr,4),n&2){let r;P(r=L())&&(a.lazyContent=r.first),P(r=L())&&(a._allItems=r),P(r=L())&&(a.items=r)}},viewQuery:function(n,a){if(n&1&&De(lt,5),n&2){let o;P(o=L())&&(a.templateRef=o.first)}},hostVars:3,hostBindings:function(n,a){n&2&&A("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",B],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:B(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[oe([{provide:Hd,useExisting:t}])],ngContentSelectors:KM,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(n,a){n&1&&(me(),ma(0,XM,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return t})(),JM=new y("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>dn(t)}});var So=new WeakMap,eA=(()=>{class t{_canHaveBackdrop;_element=c(O);_viewContainerRef=c(ct);_menuItemInstance=c(Pr,{optional:!0,self:!0});_dir=c(He,{optional:!0});_focusMonitor=c(xt);_ngZone=c(W);_injector=c(X);_scrollStrategy=c(JM);_changeDetectorRef=c(ge);_animationsDisabled=ye();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=he.EMPTY;_menuCloseSubscription=he.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(n=>{this._destroyMenu(n),(n==="click"||n==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let n=c(Hd,{optional:!0});this._parentMaterialMenu=n instanceof Mo?n:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&So.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let n=this._menu;if(this._menuOpen||!n)return;this._pendingRemoval?.unsubscribe();let a=So.get(n);So.set(n,this),a&&a!==this&&a._closeMenu();let o=this._createOverlay(n),r=o.getConfig(),d=r.positionStrategy;this._setPosition(n,d),this._canHaveBackdrop?r.hasBackdrop=n.hasBackdrop==null?!this._triggersSubmenu():n.hasBackdrop:r.hasBackdrop=n.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(n)),n.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),n.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,n.direction=this.dir,e&&n.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),n instanceof Mo&&(n._setIsOpen(!0),n._directDescendantItems.changes.pipe(Ee(n.close)).subscribe(()=>{d.withLockedPosition(!1).reapplyLastPosition(),d.withLockedPosition(!0)}))}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}_destroyMenu(e){let n=this._overlayRef,a=this._menu;!n||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),a instanceof Mo&&this._ownsMenu(a)?(this._pendingRemoval=a._animationDone.pipe(Je(1)).subscribe(()=>{n.detach(),So.has(a)||a.lazyContent?.detach()}),a._setIsOpen(!1)):(n.detach(),a?.lazyContent?.detach()),a&&this._ownsMenu(a)&&So.delete(a),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let n=this._getOverlayConfig(e);this._subscribeToPositions(e,n.positionStrategy),this._overlayRef=un(this._injector,n),this._overlayRef.keydownEvents().subscribe(a=>{this._menu instanceof Mo&&this._menu._handleKeydown(a)})}return this._overlayRef}_getOverlayConfig(e){return new cn({positionStrategy:Ln(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,n){e.setPositionClasses&&n.positionChanges.subscribe(a=>{this._ngZone.run(()=>{let o=a.connectionPair.overlayX==="start"?"after":"before",r=a.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,r)})})}_setPosition(e,n){let[a,o]=e.xPosition==="before"?["end","start"]:["start","end"],[r,d]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[h,p]=[r,d],[f,g]=[a,o],v=0;if(this._triggersSubmenu()){if(g=a=e.xPosition==="before"?"start":"end",o=f=a==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let x=this._parentMaterialMenu.items.first;this._parentInnerPadding=x?x._getHostElement().offsetTop:0}v=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(h=r==="top"?"bottom":"top",p=d==="top"?"bottom":"top");n.withPositions([{originX:a,originY:h,overlayX:f,overlayY:r,offsetY:v},{originX:o,originY:h,overlayX:g,overlayY:r,offsetY:v},{originX:a,originY:p,overlayX:f,overlayY:d,offsetY:-v},{originX:o,originY:p,overlayX:g,overlayY:d,offsetY:-v}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),n=this._overlayRef.detachments(),a=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ue(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(se(r=>this._menuOpen&&r!==this._menuItemInstance)):Ue();return je(e,a,o,n)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new yt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return So.get(e)===this}_triggerIsAriaDisabled(){return B(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(n){$r()};static \u0275dir=C({type:t})}return t})(),ob=(()=>{class t extends eA{_cleanupTouchstart;_hoverSubscription=he.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new R;onMenuOpen=this.menuOpened;menuClosed=new R;onMenuClose=this.menuClosed;constructor(){super(!0);let e=c(ve);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",n=>{Bi(n)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Li(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let n=e.keyCode;(n===13||n===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(n===39&&this.dir==="ltr"||n===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(n,a){n&1&&F("click",function(r){return a._handleClick(r)})("mousedown",function(r){return a._handleMousedown(r)})("keydown",function(r){return a._handleKeydown(r)}),n&2&&A("aria-haspopup",a.menu?"menu":null)("aria-expanded",a.menuOpen)("aria-controls",a.menuOpen?a.menu==null?null:a.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[J]})}return t})();var rb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[En,Ht,te,ln]})}return t})();var nA=["tooltip"],iA=20;var aA=new y("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(X);return()=>dn(t,{scrollThrottle:iA})}}),oA=new y("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var sb="tooltip-panel",rA={passive:!0},sA=8,lA=8,cA=24,dA=200,Lr=(()=>{class t{_elementRef=c(O);_ngZone=c(W);_platform=c(de);_ariaDescriber=c(Ph);_focusMonitor=c(xt);_dir=c(He);_injector=c(X);_viewContainerRef=c(ct);_mediaMatcher=c(Fa);_document=c(Q);_renderer=c(ve);_animationsDisabled=ye();_defaultOptions=c(oA,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=lb;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=At(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let n=At(e);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=jt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=jt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let n=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new T;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=sA}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Ee(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let a=this._createOverlay(n);this._detach(),this._portal=this._portal||new ni(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=a.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(Ee(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(e):(n._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof O)return this._overlayRef;this._detach()}let n=this._injector.get(ti).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${sb}`,o=Ln(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation("global");return o.positionChanges.pipe(Ee(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=un(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(aA)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Ee(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Ee(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Ee(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Ee(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let n=e.getConfig().positionStrategy,a=this._getOrigin(),o=this._getOverlayPosition();n.withPositions([this._addOffset(S(S({},a.main),o.main)),this._addOffset(S(S({},a.fallback),o.fallback))])}_addOffset(e){let n=lA,a=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-n:e.originY==="bottom"?e.offsetY=n:e.originX==="start"?e.offsetX=a?-n:n:e.originX==="end"&&(e.offsetX=a?n:-n),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",n=this.position,a;n=="above"||n=="below"?a={originX:"center",originY:n=="above"?"top":"bottom"}:n=="before"||n=="left"&&e||n=="right"&&!e?a={originX:"start",originY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(a={originX:"end",originY:"center"});let{x:o,y:r}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:o,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",n=this.position,a;n=="above"?a={overlayX:"center",overlayY:"bottom"}:n=="below"?a={overlayX:"center",overlayY:"top"}:n=="before"||n=="left"&&e||n=="right"&&!e?a={overlayX:"end",overlayY:"center"}:(n=="after"||n=="right"&&e||n=="left"&&!e)&&(a={overlayX:"start",overlayY:"center"});let{x:o,y:r}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:o,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),$e(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,n){return this.position==="above"||this.position==="below"?n==="top"?n="bottom":n==="bottom"&&(n="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:n}}_updateCurrentPositionClass(e){let{overlayY:n,originX:a,originY:o}=e,r;if(n==="center"?this._dir&&this._dir.value==="rtl"?r=a==="end"?"left":"right":r=a==="start"?"left":"right":r=n==="bottom"&&o==="top"?"above":"below",r!==this._currentPosition){let d=this._overlayRef;if(d){let h=`${this._cssClassPrefix}-${sb}-`;d.removePanelClass(h+this._currentPosition),d.addPanelClass(h+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let n=e.targetTouches?.[0],a=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let n;e.x!==void 0&&e.y!==void 0&&(n=e),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let n=e.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(e.clientX,e.clientY),a=this._elementRef.nativeElement;n!==a&&!a.contains(n)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,n,rA))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let n=this._elementRef.nativeElement,a=n.style;(e==="on"||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA")&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect="none"),(e==="on"||!n.draggable)&&(a.webkitUserDrag="none"),a.touchAction="none",a.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||$e({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Oe(e):!0;static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(n,a){n&2&&z("mat-mdc-tooltip-disabled",a.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),lb=(()=>{class t{_changeDetectorRef=c(ge);_elementRef=c(O);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ye();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new T;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>cA&&e.width>=dA}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let n=this._tooltip.nativeElement,a=this._showAnimation,o=this._hideAnimation;if(n.classList.remove(e?o:a),n.classList.add(e?a:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(n);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(n.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(n,a){if(n&1&&De(nA,7),n&2){let o;P(o=L())&&(a._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(n,a){n&1&&F("mouseleave",function(r){return a._handleMouseLeave(r)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(n,a){n&1&&(Ge(0,"div",1,0),Yr("animationend",function(r){return a._handleAnimationEnd(r)}),Ge(2,"div",2),u(3),dt()()),n&2&&(qe(a.tooltipClass),z("mdc-tooltip--multiline",a._isMultiline),m(3),ee(a.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ao=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[nr,Ht,te,ln]})}return t})();var Zl={privatePension:{id:"privatePension",label:"\u4E2A\u4EBA\u517B\u8001\u91D1",placeholder:"0",options:[{value:0,label:"\u4E0D\u7F34\u7EB3\uFF1A0\u5143"},{value:500,label:"\u6BCF\u6708\u7F34\u7EB3\uFF1A500\u5143 (\u5E746000\u5143)"},{value:1e3,label:"\u9876\u683C\u7F34\u7EB3\uFF1A1000\u5143 (\u5E7412000\u5143)"}],width:"120px"},infantCare:{id:"infantCare",label:"3\u5C81\u4EE5\u4E0B\u5A74\u5E7C\u513F\u7167\u62A4",placeholder:"0",options:of,width:"120px"},childEducation:{id:"childEducation",label:"\u5B50\u5973\u6559\u80B2",placeholder:"0",options:rf,width:"120px"},continuingEducation:{id:"continuingEducation",label:"\u7EE7\u7EED\u6559\u80B2",placeholder:"0",options:sf,width:"120px"},housingLoanInterest:{id:"housingLoanInterest",label:"\u4F4F\u623F\u8D37\u6B3E\u5229\u606F",placeholder:"0",options:lf,width:"120px",conflictWith:"extraDeduction.renting"},renting:{id:"renting",label:"\u4F4F\u623F\u79DF\u91D1",placeholder:"0",options:cf,width:"120px",conflictWith:"extraDeduction.housingLoanInterest"},elderlyCare:{id:"elderlyCare",label:"\u8D61\u517B\u8001\u4EBA",placeholder:"0",options:df,width:"120px"},insuranceBase:{id:"insuranceBase",label:"\u793E\u4FDD\u7F34\u7EB3\u57FA\u6570",placeholder:"10000",options:[],width:void 0},housingFundBase:{id:"housingFundBase",label:"\u516C\u79EF\u91D1\u7F34\u7EB3\u57FA\u6570",placeholder:"10000",options:[],width:void 0}},db="(\u5F53\u6708)";var Yd=["*"];function uA(t,i){t&1&&Y(0)}var mA=["tabListContainer"],hA=["tabList"],pA=["tabListInner"],fA=["nextPaginator"],gA=["previousPaginator"],_A=["content"];function bA(t,i){}var vA=["tabBodyWrapper"],yA=["tabHeader"];function xA(t,i){}function CA(t,i){if(t&1&&Ie(0,xA,0,0,"ng-template",12),t&2){let e=w().$implicit;_("cdkPortalOutlet",e.templateLabel)}}function wA(t,i){if(t&1&&u(0),t&2){let e=w().$implicit;ee(e.textLabel)}}function EA(t,i){if(t&1){let e=We();s(0,"div",7,2),F("click",function(){let a=Me(e),o=a.$implicit,r=a.$index,d=w(),h=_e(1);return Ae(d._handleClick(o,h,r))})("cdkFocusChange",function(a){let o=Me(e).$index,r=w();return Ae(r._tabFocusChanged(a,o))}),D(2,"span",8)(3,"div",9),s(4,"span",10)(5,"span",11),H(6,CA,1,1,null,12)(7,wA,1,1),l()()()}if(t&2){let e=i.$implicit,n=i.$index,a=_e(1),o=w();qe(e.labelClass),z("mdc-tab--active",o.selectedIndex===n),_("id",o._getTabLabelId(e,n))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),A("tabIndex",o._getTabIndex(n))("aria-posinset",n+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(n))("aria-selected",o.selectedIndex===n)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),m(3),_("matRippleTrigger",a)("matRippleDisabled",e.disabled||o.disableRipple),m(3),U(e.templateLabel?6:7)}}function DA(t,i){t&1&&Y(0)}function SA(t,i){if(t&1){let e=We();s(0,"mat-tab-body",13),F("_onCentered",function(){Me(e);let a=w();return Ae(a._removeTabBodyWrapperHeight())})("_onCentering",function(a){Me(e);let o=w();return Ae(o._setTabBodyWrapperHeight(a))})("_beforeCentering",function(a){Me(e);let o=w();return Ae(o._bodyCentered(a))}),l()}if(t&2){let e=i.$implicit,n=i.$index,a=w();qe(e.bodyClass),_("id",a._getTabContentId(n))("content",e.content)("position",e.position)("animationDuration",a.animationDuration)("preserveContent",a.preserveContent),A("tabindex",a.contentTabIndex!=null&&a.selectedIndex===n?a.contentTabIndex:null)("aria-labelledby",a._getTabLabelId(e,n))("aria-hidden",a.selectedIndex!==n)}}var MA=new y("MatTabContent"),AA=(()=>{class t{template=c(lt);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","matTabContent",""]],features:[oe([{provide:MA,useExisting:t}])]})}return t})(),FA=new y("MatTabLabel"),pb=new y("MAT_TAB"),Br=(()=>{class t extends Wm{_closestTab=c(pb,{optional:!0});static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[oe([{provide:FA,useExisting:t}]),J]})}return t})(),fb=new y("MAT_TAB_GROUP"),Nr=(()=>{class t{_viewContainerRef=c(ct);_closestTabGroup=c(fb,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new T;position=null;origin=null;isActive=!1;constructor(){c(Re).load(Rt)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new yt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab"]],contentQueries:function(n,a,o){if(n&1&&at(o,Br,5)(o,AA,7,lt),n&2){let r;P(r=L())&&(a.templateLabel=r.first),P(r=L())&&(a._explicitContent=r.first)}},viewQuery:function(n,a){if(n&1&&De(lt,7),n&2){let o;P(o=L())&&(a._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(n,a){n&2&&A("id",null)},inputs:{disabled:[2,"disabled","disabled",B],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[oe([{provide:pb,useExisting:t}]),Ce],ngContentSelectors:Yd,decls:1,vars:0,template:function(n,a){n&1&&(me(),ma(0,uA,1,0,"ng-template"))},encapsulation:2})}return t})(),Ud="mdc-tab-indicator--active",ub="mdc-tab-indicator--no-transition",$d=class{_items;_currentItem;constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar()),this._currentItem=void 0}alignToElement(i){let e=this._items.find(a=>a.elementRef.nativeElement===i),n=this._currentItem;if(e!==n&&(n?.deactivateInkBar(),e)){let a=n?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(a),this._currentItem=e}}},kA=(()=>{class t{_elementRef=c(O);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let n=this._elementRef.nativeElement;if(!e||!n.getBoundingClientRect||!this._inkBarContentElement){n.classList.add(Ud);return}let a=n.getBoundingClientRect(),o=e.width/a.width,r=e.left-a.left;n.classList.add(ub),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${o})`),n.getBoundingClientRect(),n.classList.remove(ub),n.classList.add(Ud),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Ud)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,n=this._inkBarElement=e.createElement("span"),a=this._inkBarContentElement=e.createElement("span");n.className="mdc-tab-indicator",a.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",n.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",B]}})}return t})();var gb=(()=>{class t extends kA{elementRef=c(O);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(n,a){n&2&&(A("aria-disabled",!!a.disabled),z("mat-mdc-tab-disabled",a.disabled))},inputs:{disabled:[2,"disabled","disabled",B]},features:[J]})}return t})(),mb={passive:!0},IA=650,TA=100,RA=(()=>{class t{_elementRef=c(O);_changeDetectorRef=c(ge);_viewportRuler=c(zt);_dir=c(He,{optional:!0});_ngZone=c(W);_platform=c(de);_sharedResizeObserver=c(rl);_injector=c(X);_renderer=c(ve);_animationsDisabled=ye();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new T;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new T;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let n=isNaN(e)?0:e;this._selectedIndex!=n&&(this._selectedIndexChanged=!0,this._selectedIndex=n,this._keyManager&&this._keyManager.updateActiveItem(n))}_selectedIndex=0;selectFocusedIndex=new R;indexFocused=new R;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),mb),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),mb))}ngAfterContentInit(){let e=this._dir?this._dir.change:Ue("ltr"),n=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(vn(32),Ee(this._destroyed)),a=this._viewportRuler.change(150).pipe(Ee(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Bn(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),$e(o,{injector:this._injector}),je(e,a,n,this._items.changes,this._itemsResized()).pipe(Ee(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!="function"?oa:this._items.changes.pipe(Le(this._items),it(e=>new Ze(n=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(o=>n.next(o));return e.forEach(o=>a.observe(o.elementRef.nativeElement)),()=>{a.disconnect()}}))),sa(1),se(e=>e.some(n=>n.contentRect.width>0&&n.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Oe(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let n=this._items.get(this.focusIndex);n&&!n.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let n=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?n.scrollLeft=0:n.scrollLeft=n.scrollWidth-n.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,n=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let n=this._tabListContainer.nativeElement.offsetWidth,a=(e=="before"?-1:1)*n/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let n=this._items?this._items.toArray()[e]:null;if(!n)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:r}=n.elementRef.nativeElement,d,h;this._getLayoutDirection()=="ltr"?(d=o,h=d+r):(h=this._tabListInner.nativeElement.offsetWidth-o,d=h-r);let p=this.scrollDistance,f=this.scrollDistance+a;d<p?this.scrollDistance-=p-d:h>f&&(this.scrollDistance+=Math.min(h-f,d-p))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,n=this._elementRef.nativeElement.offsetWidth,a=e-n>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,n=this._tabListContainer.nativeElement.offsetWidth;return e-n||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,n=e?e.elementRef.nativeElement:null;n?this._inkBar.alignToElement(n):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,n){n&&n.button!=null&&n.button!==0||(this._stopInterval(),lu(IA,TA).pipe(Ee(je(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:o}=this._scrollHeader(e);(o===0||o>=a)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let n=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(n,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:n,distance:this._scrollDistance}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",B],selectedIndex:[2,"selectedIndex","selectedIndex",rt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),OA=(()=>{class t extends RA{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new $d(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-tab-header"]],contentQueries:function(n,a,o){if(n&1&&at(o,gb,4),n&2){let r;P(r=L())&&(a._items=r)}},viewQuery:function(n,a){if(n&1&&De(mA,7)(hA,7)(pA,7)(fA,5)(gA,5),n&2){let o;P(o=L())&&(a._tabListContainer=o.first),P(o=L())&&(a._tabList=o.first),P(o=L())&&(a._tabListInner=o.first),P(o=L())&&(a._nextPaginator=o.first),P(o=L())&&(a._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(n,a){n&2&&z("mat-mdc-tab-header-pagination-controls-enabled",a._showPaginationControls)("mat-mdc-tab-header-rtl",a._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",B]},features:[J],ngContentSelectors:Yd,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(n,a){n&1&&(me(),s(0,"div",5,0),F("click",function(){return a._handlePaginatorClick("before")})("mousedown",function(r){return a._handlePaginatorPress("before",r)})("touchend",function(){return a._stopInterval()}),D(2,"div",6),l(),s(3,"div",7,1),F("keydown",function(r){return a._handleKeydown(r)}),s(5,"div",8,2),F("cdkObserveContent",function(){return a._onContentChanges()}),s(7,"div",9,3),Y(9),l()()(),s(10,"div",10,4),F("mousedown",function(r){return a._handlePaginatorPress("after",r)})("click",function(){return a._handlePaginatorClick("after")})("touchend",function(){return a._stopInterval()}),D(12,"div",6),l()),n&2&&(z("mat-mdc-tab-header-pagination-disabled",a._disableScrollBefore),_("matRippleDisabled",a._disableScrollBefore||a.disableRipple),m(3),z("_mat-animation-noopable",a._animationsDisabled),m(2),A("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null),m(5),z("mat-mdc-tab-header-pagination-disabled",a._disableScrollAfter),_("matRippleDisabled",a._disableScrollAfter||a.disableRipple))},dependencies:[Nn,Ls],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),PA=new y("MAT_TABS_CONFIG"),hb=(()=>{class t extends wn{_host=c(Gd);_ngZone=c(W);_centeringSub=he.EMPTY;_leavingSub=he.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Le(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","matTabBodyHost",""]],features:[J]})}return t})(),Gd=(()=>{class t{_elementRef=c(O);_dir=c(He,{optional:!0});_ngZone=c(W);_injector=c(X);_renderer=c(ve);_diAnimationsDisabled=ye();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=he.EMPTY;_position;_previousPosition;_onCentering=new R;_beforeCentering=new R;_afterLeavingCenter=new R;_onCentered=new R(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=c(ge);this._dirChangeSubscription=this._dir.change.subscribe(n=>{this._computePositionAnimationState(n),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),$e(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,n=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),a.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",n),this._renderer.listen(e,"transitioncancel",n)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),$e(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-body"]],viewQuery:function(n,a){if(n&1&&De(hb,5)(_A,5),n&2){let o;P(o=L())&&(a._portalHost=o.first),P(o=L())&&(a._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(n,a){n&2&&A("inert",a._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(n,a){n&1&&(s(0,"div",1,0),Ie(2,bA,0,0,"ng-template",2),l()),n&2&&z("mat-tab-body-content-left",a._position==="left")("mat-tab-body-content-right",a._position==="right")("mat-tab-body-content-can-animate",a._position==="center"||a._previousPosition==="center")},dependencies:[hb,qo],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),Jl=(()=>{class t{_elementRef=c(O);_changeDetectorRef=c(ge);_ngZone=c(W);_tabsSubscription=he.EMPTY;_tabLabelSubscription=he.EMPTY;_tabBodySubscription=he.EMPTY;_diAnimationsDisabled=ye();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new xn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let n=e+"";this._animationDuration=/^\d+$/.test(n)?e+"ms":n}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let n=this._elementRef.nativeElement.classList;n.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&n.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new R;focusChange=new R;animationDone=new R;selectedTabChange=new R(!0);_groupId;_isServer=!c(de).isBrowser;constructor(){let e=c(PA,{optional:!0});this._groupId=c(Se).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let n=this._selectedIndex==null;if(!n){this.selectedTabChange.emit(this._createChangeEvent(e));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((a,o)=>a.isActive=o===e),n||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((n,a)=>{n.position=a-e,this._selectedIndex!=null&&n.position==0&&!n.origin&&(n.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let n=this._tabs.toArray(),a;for(let o=0;o<n.length;o++)if(n[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,a=n[o];break}!a&&n[e]&&Promise.resolve().then(()=>{n[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Le(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(n=>n._closestTabGroup===this||!n._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let n=this._tabHeader;n&&(n.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let n=new Wd;return n.index=e,this._tabs&&this._tabs.length&&(n.tab=this._tabs.toArray()[e]),n}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=je(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,n){return e.id||`${this._groupId}-label-${n}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let n=this._tabBodyWrapper.nativeElement;n.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(n.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,n,a){n.focusIndex=a,e.disabled||(this.selectedIndex=a)}_getTabIndex(e){let n=this._lastFocusedTabIndex??this.selectedIndex;return e===n?0:-1}_tabFocusChanged(e,n){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=n)}_bodyCentered(e){e&&this._tabBodies?.forEach((n,a)=>n._setActiveClass(a===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-group"]],contentQueries:function(n,a,o){if(n&1&&at(o,Nr,5),n&2){let r;P(r=L())&&(a._allTabs=r)}},viewQuery:function(n,a){if(n&1&&De(vA,5)(yA,5)(Gd,5),n&2){let o;P(o=L())&&(a._tabBodyWrapper=o.first),P(o=L())&&(a._tabHeader=o.first),P(o=L())&&(a._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(n,a){n&2&&(A("mat-align-tabs",a.alignTabs),qe("mat-"+(a.color||"primary")),Be("--mat-tab-animation-duration",a.animationDuration),z("mat-mdc-tab-group-dynamic-height",a.dynamicHeight)("mat-mdc-tab-group-inverted-header",a.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",a.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",B],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",B],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",B],selectedIndex:[2,"selectedIndex","selectedIndex",rt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",rt],disablePagination:[2,"disablePagination","disablePagination",B],disableRipple:[2,"disableRipple","disableRipple",B],preserveContent:[2,"preserveContent","preserveContent",B],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[oe([{provide:fb,useExisting:t}])],ngContentSelectors:Yd,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(n,a){n&1&&(me(),s(0,"mat-tab-header",3,0),F("indexFocused",function(r){return a._focusChanged(r)})("selectFocusedIndex",function(r){return a.selectedIndex=r}),pe(2,EA,8,17,"div",4,qt),l(),H(4,DA,1,0),s(5,"div",5,1),pe(7,SA,1,10,"mat-tab-body",6,qt),l()),n&2&&(_("selectedIndex",a.selectedIndex||0)("disableRipple",a.disableRipple)("disablePagination",a.disablePagination),Iu("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby),m(2),fe(a._tabs),m(2),U(a._isServer?4:-1),m(),z("_mat-animation-noopable",a._animationsDisabled()),m(2),fe(a._tabs))},dependencies:[OA,gb,Zc,Nn,wn,Gd],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),Wd=class{index;tab};var ec=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[te]})}return t})();var bb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[te]})}return t})();var vb=["*"],yb=`.mdc-list {
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
`,LA=["unscopedContent"],BA=["text"],NA=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],VA=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var jA=new y("ListOption"),ta=(()=>{class t{_elementRef=c(O);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),na=(()=>{class t{_elementRef=c(O);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),zA=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),xb=(()=>{class t{_listOption=c(jA,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,hostVars:4,hostBindings:function(n,a){n&2&&z("mdc-list-item__start",a._isAlignedAtStart())("mdc-list-item__end",!a._isAlignedAtStart())}})}return t})(),HA=(()=>{class t extends xb{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[J]})}return t})(),qd=(()=>{class t extends xb{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275dir=C({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[J]})}return t})(),UA=new y("MAT_LIST_CONFIG"),Vr=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=At(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(At(e))}_disabled=ne(!1);_defaultOptions=c(UA,{optional:!0});static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,hostVars:1,hostBindings:function(n,a){n&2&&A("aria-disabled",a.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),$A=(()=>{class t{_elementRef=c(O);_ngZone=c(W);_listBase=c(Vr,{optional:!0});_platform=c(de);_hostElement;_isButtonElement;_noopAnimations=ye();_avatars;_icons;set lines(e){this._explicitLines=jt(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=At(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(At(e))}_disabled=ne(!1);_subscriptions=new he;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(Re).load(Rt);let e=c(Pa,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Hi(this,this._ngZone,this._hostElement,this._platform,c(X)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(je(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let n=this._explicitLines??this._inferLinesFromContent(),a=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",n===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",n===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&n===1;a.classList.toggle("mdc-list-item__primary-text",o),a.classList.toggle("mdc-list-item__secondary-text",!o)}else a.classList.remove("mdc-list-item__primary-text"),a.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=C({type:t,contentQueries:function(n,a,o){if(n&1&&at(o,HA,4)(o,qd,4),n&2){let r;P(r=L())&&(a._avatars=r),P(r=L())&&(a._icons=r)}},hostVars:4,hostBindings:function(n,a){n&2&&(A("aria-disabled",a.disabled)("disabled",a._isButtonElement&&a.disabled||null),z("mdc-list-item--disabled",a.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var tc=(()=>{class t extends Vr{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[oe([{provide:Vr,useExisting:t}]),J],ngContentSelectors:vb,decls:1,vars:0,template:function(n,a){n&1&&(me(),Y(0))},styles:[yb],encapsulation:2,changeDetection:0})}return t})(),Fo=(()=>{class t extends $A{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=At(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(n,a,o){if(n&1&&at(o,na,5)(o,ta,5)(o,zA,5),n&2){let r;P(r=L())&&(a._lines=r),P(r=L())&&(a._titles=r),P(r=L())&&(a._meta=r)}},viewQuery:function(n,a){if(n&1&&De(LA,5)(BA,5),n&2){let o;P(o=L())&&(a._unscopedContent=o.first),P(o=L())&&(a._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(n,a){n&2&&(A("aria-current",a._getAriaCurrent()),z("mdc-list-item--activated",a.activated)("mdc-list-item--with-leading-avatar",a._avatars.length!==0)("mdc-list-item--with-leading-icon",a._icons.length!==0)("mdc-list-item--with-trailing-meta",a._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",a._hasBothLeadingAndTrailing())("_mat-animation-noopable",a._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[J],ngContentSelectors:VA,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(n,a){n&1&&(me(NA),Y(0),s(1,"span",1),Y(2,1),Y(3,2),s(4,"span",2,0),F("cdkObserveContent",function(){return a._updateItemLines(!0)}),Y(6,3),l()(),Y(7,4),Y(8,5),D(9,"div",3))},dependencies:[Ls],encapsulation:2,changeDetection:0})}return t})();var Cb=(()=>{class t extends Vr{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[oe([{provide:Vr,useExisting:t}]),J],ngContentSelectors:vb,decls:1,vars:0,template:function(n,a){n&1&&(me(),Y(0))},styles:[yb],encapsulation:2,changeDetection:0})}return t})();var xi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[ka,En,$l,te,bb]})}return t})();var GA=["determinateSpinner"];function WA(t,i){if(t&1&&(Vt(),s(0,"svg",11),D(1,"circle",12),l()),t&2){let e=w();A("viewBox",e._viewBox()),m(),Be("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),A("r",e._circleRadius())}}var YA=new y("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:wb})}),wb=100,qA=10,Eb=(()=>{class t{_elementRef=c(O);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=c(YA),n=sd(),a=this._elementRef.nativeElement;this._noopAnimations=n==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=a.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&n==="reduced-motion"&&a.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=wb;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-qA)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=M({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,a){if(n&1&&De(GA,5),n&2){let o;P(o=L())&&(a._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,a){n&2&&(A("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",a.mode==="determinate"?a.value:null)("mode",a.mode),qe("mat-"+a.color),Be("width",a.diameter,"px")("height",a.diameter,"px")("--mat-progress-spinner-size",a.diameter+"px")("--mat-progress-spinner-active-indicator-width",a.diameter+"px"),z("_mat-animation-noopable",a._noopAnimations)("mdc-circular-progress--indeterminate",a.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",rt],diameter:[2,"diameter","diameter",rt],strokeWidth:[2,"strokeWidth","strokeWidth",rt]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,a){if(n&1&&(Ie(0,WA,2,8,"ng-template",null,0,Ai),s(2,"div",2,1),Vt(),s(4,"svg",3),D(5,"circle",4),l()(),rc(),s(6,"div",5)(7,"div",6)(8,"div",7),ha(9,8),l(),s(10,"div",9),ha(11,8),l(),s(12,"div",10),ha(13,8),l()()()),n&2){let o=_e(1);m(4),A("viewBox",a._viewBox()),m(),Be("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeDashOffset(),"px")("stroke-width",a._circleStrokeWidth(),"%"),A("r",a._circleRadius()),m(4),_("ngTemplateOutlet",o),m(2),_("ngTemplateOutlet",o),m(2),_("ngTemplateOutlet",o)}},dependencies:[Fi],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2,changeDetection:0})}return t})();var Db=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=$({imports:[te]})}return t})();var XA=(t,i)=>i.file;function QA(t,i){if(t&1){let e=We();s(0,"a",14),F("click",function(){let a=Me(e).$implicit,o=w();return Ae(o.selectCity(a))}),s(1,"span",15),u(2),l(),s(3,"span",16),u(4),l()()}if(t&2){let e,n=i.$implicit,a=w();z("active-city",((e=a.selectedItem())==null?null:e.file)===n.file),A("data-testid","city-tab-"+n.file.replace(".json","")),m(2),k(" ",n.city," "),m(2),k(" ",n.label," ")}}function ZA(t,i){t&1&&(s(0,"div",12),D(1,"mat-spinner",17),s(2,"span",18),u(3,"\u6B63\u5728\u52A0\u8F7D\u57CE\u5E02\u653F\u7B56\u6570\u636E..."),l()())}function JA(t,i){if(t&1&&(s(0,"span"),u(1),l()),t&2){let e=w().$implicit;A("data-testid","year-tab-"+e),m(),k(" ",e," \u5E74\u5EA6 ")}}function eF(t,i){t&1&&(s(0,"mat-tab"),Ie(1,JA,2,2,"ng-template",45),l())}function tF(t,i){if(t&1&&(s(0,"div",21)(1,"span",22),u(2,"\u672C\u5E02\u5728\u5C97\u804C\u5DE5\u6708\u5747\u5DE5\u8D44\uFF1A"),l(),s(3,"span",46),u(4),l()(),s(5,"div",21)(6,"span",22),u(7,"\u5168\u7701\u5168\u53E3\u5F84\u793E\u5E73\u6708\u5747\uFF1A"),l(),s(8,"span",47),u(9),l()()),t&2){let e=w(2);m(4),k(" ",e.formatMoney(e.selectedPolicy().localAvgWage)," "),m(5),k(" ",e.formatMoney(e.selectedPolicy().avgWage)," ")}}function nF(t,i){if(t&1&&(s(0,"div",21)(1,"span",22),u(2,"\u57CE\u9547\u5728\u5C97\u804C\u5DE5\u6708\u5E73\u5747\u5DE5\u8D44\uFF1A"),l(),s(3,"span",47),u(4),l()(),D(5,"div",48)),t&2){let e=w(2);m(4),k(" ",e.formatMoney(e.selectedPolicy().avgWage)," ")}}function iF(t,i){t&1&&(s(0,"div",25)(1,"mat-icon",27),u(2,"info"),l(),s(3,"div",28)(4,"span",29),u(5,"\u793E\u4FDD\u6838\u7B97\u89C4\u5219\uFF1A"),l(),s(6,"span"),u(7,"\u8BE5\u57CE\u5E02\uFF08\u5982\u6DF1\u5733\uFF09\u793E\u4FDD\u7F34\u7EB3\u57FA\u6570\u4F9D\u636E\u804C\u5DE5\u4E0A\u6708\u5B9E\u9645\u85AA\u8D44\u6838\u7B97\u3002"),l()()())}function aF(t,i){if(t&1&&(s(0,"a",49)(1,"div",50)(2,"mat-icon",51),u(3," description "),l(),s(4,"span",52),u(5),l()(),s(6,"mat-icon",53),u(7," open_in_new "),l()()),t&2){let e=i.$implicit,n=i.$index,a=w(3).asReference(e);_("href",a.link,Mu),A("data-testid","ref-link-"+n),m(5),k(" ",a.description," ")}}function oF(t,i){if(t&1&&(s(0,"div",43),pe(1,aF,8,3,"a",49,Ru),l()),t&2){let e=w(2);m(),fe(e.selectedPolicy().references)}}function rF(t,i){t&1&&(s(0,"div",44),u(1,"\u6682\u65E0\u5916\u94FE\u53C2\u8003\u8BB0\u5F55"),l())}function sF(t,i){if(t&1){let e=We();s(0,"mat-tab-group",19),F("selectedIndexChange",function(a){Me(e);let o=w();return Ae(o.onYearTabChange(a))}),pe(1,eF,2,0,"mat-tab",null,qt),l(),s(3,"div",20)(4,"div",21)(5,"span",22),u(6,"\u653F\u7B56\u751F\u6548\u5E74\u6708\uFF1A"),l(),s(7,"span",23),u(8),l()(),s(9,"div",21)(10,"span",22),u(11,"\u6700\u4F4E\u5DE5\u8D44\u6807\u51C6\uFF1A"),l(),s(12,"span",24),u(13),l()(),H(14,tF,10,2)(15,nF,6,1),l(),H(16,iF,8,0,"div",25),s(17,"div",26)(18,"mat-icon",27),u(19,"savings"),l(),s(20,"div",28)(21,"span",29),u(22,"\u4E2A\u4EBA\u517B\u8001\u91D1\uFF1A"),l(),s(23,"span"),u(24,"\u5E74\u5EA6\u7A0E\u524D\u6263\u9664\u9650\u989D 12,000 \u5143 (1,000 \u5143/\u6708)\uFF0C\u53EF\u5728\u7EFC\u5408\u6240\u5F97\u6216\u7ECF\u8425\u6240\u5F97\u4E2D\u636E\u5B9E\u6263\u9664\u3002"),l()()(),s(25,"div",30)(26,"mat-icon",27),u(27,"account_balance"),l(),s(28,"div",28)(29,"span",29),u(30,"\u4F01\u4E1A\u5E74\u91D1\uFF1A"),l(),s(31,"span"),u(32,"\u4E2A\u4EBA\u7F34\u8D39\u5728\u672C\u4EBA\u7F34\u8D39\u5DE5\u8D44 4% \u4EE5\u5185\u7684\u90E8\u5206\u514D\u7A0E\uFF0C\u8D85\u8FC7\u90E8\u5206\u5E76\u5165\u5F53\u6708\u5DE5\u8D44\u85AA\u91D1\u8BA1\u7A0E\u3002"),l()()(),s(33,"div",31)(34,"div",32),u(35," \u793E\u4FDD\u4E0E\u516C\u79EF\u91D1\u7F34\u7EB3\u6807\u51C6\uFF08\u57FA\u6570\u8303\u56F4 & \u7F34\u8D39\u6BD4\u4F8B\uFF09 "),l(),s(36,"div",33)(37,"table",34)(38,"thead",35)(39,"tr")(40,"th"),u(41,"\u9669\u79CD/\u9879\u76EE"),l(),s(42,"th"),u(43,"\u57FA\u6570\u4E0A\u4E0B\u9650 (\u5143)"),l(),s(44,"th"),u(45,"\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),s(46,"th"),u(47,"\u4F01\u4E1A\u7F34\u7EB3\u6BD4\u4F8B"),l()()(),s(48,"tbody")(49,"tr")(50,"td"),u(51,"\u517B\u8001\u4FDD\u9669"),l(),s(52,"td"),u(53),l(),s(54,"td"),u(55),l(),s(56,"td"),u(57),l()(),s(58,"tr")(59,"td"),u(60,"\u533B\u7597\u4FDD\u9669"),l(),s(61,"td"),u(62),l(),s(63,"td"),u(64),l(),s(65,"td"),u(66),l()(),s(67,"tr")(68,"td"),u(69,"\u5931\u4E1A\u4FDD\u9669"),l(),s(70,"td"),u(71),l(),s(72,"td"),u(73),l(),s(74,"td"),u(75),l()(),s(76,"tr")(77,"td"),u(78,"\u5DE5\u4F24\u4FDD\u9669"),l(),s(79,"td"),u(80),l(),s(81,"td",36),u(82,"\u4E2A\u4EBA\u4E0D\u7F34\u7EB3"),l(),s(83,"td"),u(84),l()(),s(85,"tr")(86,"td"),u(87,"\u751F\u80B2\u4FDD\u9669"),l(),s(88,"td"),u(89),l(),s(90,"td",36),u(91,"\u4E2A\u4EBA\u4E0D\u7F34\u7EB3"),l(),s(92,"td"),u(93),l()(),s(94,"tr",37)(95,"td"),u(96,"\u4E94\u9669\u5408\u8BA1"),l(),s(97,"td",38),u(98," \u5404\u9669\u79CD\u5206\u7ACB\u57FA\u6570\u6D4B\u7B97 "),l(),s(99,"td",39),u(100),l(),s(101,"td",40),u(102),l()(),s(103,"tr")(104,"td"),u(105,"\u4F4F\u623F\u516C\u79EF\u91D1"),l(),s(106,"td"),u(107),l(),s(108,"td"),u(109,"5% ~ 12% (\u81EA\u4E3B\u7533\u62A5)"),l(),s(110,"td"),u(111,"5% ~ 12% (\u4F01\u4E1A\u914D\u6BD4)"),l()()()()()(),s(112,"div",41)(113,"div",42),u(114," \u5B98\u65B9\u653F\u7B56\u4F9D\u636E\u4E0E\u6743\u5A01\u6765\u6E90 (\u653F\u7B56\u6587\u4EF6 / \u5B98\u65B9\u516C\u6587) "),l(),H(115,oF,3,0,"div",43)(116,rF,2,0,"div",44),l()}if(t&2){let e=w();_("selectedIndex",e.selectedYearIndex()),m(),fe(e.availableYears()),m(7),k(" ",e.selectedPolicy().effectiveDate," "),m(5),k(" ",e.formatMoney(e.selectedPolicy().minimumWage)," "),m(),U(e.selectedPolicy().localAvgWage?14:15),m(2),U(e.currentRecipe().insuranceBaseOnLastMonth?16:-1),m(37),k(" ",e.formatBaseRange(e.selectedPolicy().insuranceBaseRange,"endowment")," "),m(2),k(" ",e.formatPercent(e.selectedPolicy().employee.insuranceRate.endowment)," "),m(2),k(" ",e.formatPercent(e.selectedPolicy().employer.insuranceRate.endowment)," "),m(5),k(" ",e.formatBaseRange(e.selectedPolicy().insuranceBaseRange,"health")," "),m(2),k(" ",e.formatPercent(e.selectedPolicy().employee.insuranceRate.health)," "),m(2),k(" ",e.formatPercent(e.selectedPolicy().employer.insuranceRate.health)," "),m(5),k(" ",e.formatBaseRange(e.selectedPolicy().insuranceBaseRange,"unemployment")," "),m(2),k(" ",e.formatPercent(e.selectedPolicy().employee.insuranceRate.unemployment)," "),m(2),k(" ",e.formatPercent(e.selectedPolicy().employer.insuranceRate.unemployment)," "),m(5),k(" ",e.formatBaseRange(e.selectedPolicy().insuranceBaseRange,"occupationalInjury")," "),m(4),k(" ",e.formatPercent(e.selectedPolicy().employer.insuranceRate.occupationalInjury)," "),m(5),k(" ",e.formatBaseRange(e.selectedPolicy().insuranceBaseRange,"birth")," "),m(4),k(" ",e.formatPercent(e.selectedPolicy().employer.insuranceRate.birth)," "),m(7),k(" ",e.formatPercent(e.totalEmployeeInsuranceRate())," "),m(2),k(" ",e.formatPercent(e.totalEmployerInsuranceRate())," "),m(5),k(" ",e.formatBaseRange(e.selectedPolicy().housingFundBaseRange)," "),m(8),U(e.selectedPolicy().references&&e.selectedPolicy().references.length>0?115:116)}}function lF(t,i){t&1&&(s(0,"div",13),u(1," \u8BF7\u9009\u62E9\u57CE\u5E02\u4E0E\u5E74\u4EFD\u67E5\u770B\u653F\u7B56\u53C2\u6570 "),l())}var Sb=(()=>{class t{constructor(){this.dialogRef=c(mn),this.data=c(rr,{optional:!0})||{},this.http=c(Cn),this.cdr=c(ge),this.recipeIndex=ne([]),this.selectedItem=ne(null),this.currentRecipe=ne(null),this.availableYears=ne([]),this.selectedYear=ne(new Date().getFullYear()),this.selectedPolicy=ne(null),this.selectedYearIndex=ne(0),this.loading=ne(!1),this.loadedRecipes=new Map}ngOnInit(){this.loading.set(!0),this.http.get("assets/recipes/index.json").subscribe({next:e=>{let n=e||[];if(this.recipeIndex.set(n),n.length>0){let a=n[0];if(this.data.currentCityFile){let o=n.find(r=>r.file===this.data.currentCityFile);o&&(a=o)}else if(this.data.currentRecipeId!==void 0){let o=n.find(r=>r.id===this.data.currentRecipeId);o&&(a=o)}this.selectCity(a)}else this.loading.set(!1);this.cdr.markForCheck()},error:()=>{this.loading.set(!1),this.cdr.markForCheck()}})}selectCity(e){if(this.selectedItem.set(e),this.loadedRecipes.has(e.file)){let n=this.loadedRecipes.get(e.file);this.currentRecipe.set(n),this.resolveYearsAndPolicy(n),this.loading.set(!1),this.cdr.markForCheck();return}this.loading.set(!0),this.cdr.markForCheck(),this.http.get(`assets/recipes/${e.file}`).subscribe({next:n=>{this.loadedRecipes.set(e.file,n),this.currentRecipe.set(n),this.resolveYearsAndPolicy(n),this.loading.set(!1),this.cdr.markForCheck()},error:()=>{this.loading.set(!1),this.cdr.markForCheck()}})}onYearTabChange(e){this.selectedYearIndex.set(e);let n=this.availableYears();n[e]&&(this.selectedYear.set(n[e]),this.updateSelectedPolicy())}close(){this.dialogRef.close()}formatBaseRange(e,n){if(!e)return"-";if(Array.isArray(e))return`${e[0].toLocaleString()} ~ ${e[1].toLocaleString()} \u5143`;if(n&&e[n]){let a=e[n];return`${a[0].toLocaleString()} ~ ${a[1].toLocaleString()} \u5143`}if(e.endowment){let a=e.endowment;return`${a[0].toLocaleString()} ~ ${a[1].toLocaleString()} \u5143`}return"-"}formatPercent(e){return e==null?"-":`${(e*100).toFixed(2).replace(/\.?0+$/,"")}%`}formatMoney(e){return e==null?"-":`${e.toLocaleString()} \u5143`}totalEmployeeInsuranceRate(){let e=this.selectedPolicy();if(!e)return 0;let n=e.employee.insuranceRate;return(n.endowment||0)+(n.health||0)+(n.unemployment||0)}totalEmployerInsuranceRate(){let e=this.selectedPolicy();if(!e)return 0;let n=e.employer.insuranceRate;return(n.endowment||0)+(n.health||0)+(n.unemployment||0)+(n.birth||0)+(n.occupationalInjury||0)}asReference(e){return typeof e=="string"?{link:e,description:e}:e}resolveYearsAndPolicy(e){if(!e||!e.policies){this.availableYears.set([]),this.selectedPolicy.set(null);return}let n=e.policies.map(o=>new Date(o.effectiveDate).getFullYear()).filter((o,r,d)=>d.indexOf(o)===r).sort((o,r)=>r-o);this.availableYears.set(n);let a=this.data.currentYear||this.selectedYear();n.includes(a)?(this.selectedYear.set(a),this.selectedYearIndex.set(n.indexOf(a))):n.length>0&&(this.selectedYear.set(n[0]),this.selectedYearIndex.set(0)),this.updateSelectedPolicy()}updateSelectedPolicy(){let e=this.currentRecipe();if(!e){this.selectedPolicy.set(null);return}let n=Dr(e,this.selectedYear());this.selectedPolicy.set(n)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-city-recipe-dialog"]],decls:21,vars:1,consts:[[1,"recipe-dialog-header","d-flex","justify-content-between","align-items-center"],[1,"d-flex","align-items-center"],["color","primary",1,"mr-2"],["mat-dialog-title","","data-testid","recipe-dialog-title",1,"m-0"],["mat-icon-button","","aria-label","\u5173\u95ED\u5F39\u7A97","data-testid","btn-close-dialog",3,"click"],[1,"recipe-dialog-content","p-0"],[1,"recipe-dialog-body","d-flex","flex-column","flex-md-row"],["data-testid","city-sidebar",1,"city-sidebar"],[1,"sidebar-title","px-3","py-2","text-muted","small","font-weight-bold"],[1,"pt-0","city-list"],["mat-list-item","",3,"active-city"],[1,"policy-main-content","flex-grow-1","p-3"],["data-testid","loading-spinner",1,"d-flex","justify-content-center","align-items-center","py-5"],[1,"text-muted","text-center","py-5"],["mat-list-item","",3,"click"],["matListItemTitle","",1,"font-weight-bold"],["matListItemLine","",1,"text-muted","small"],["diameter","40"],[1,"ml-3","text-muted"],[1,"year-tab-group","mb-3",3,"selectedIndexChange","selectedIndex"],[1,"metrics-kv-panel","rounded","mb-3"],[1,"kv-item"],[1,"kv-label"],[1,"kv-val","text-primary","font-weight-bold"],["data-testid","val-min-wage",1,"kv-val","text-dark"],["data-testid","badge-last-month-rule",1,"policy-quote-bar","info-quote","mb-2"],[1,"policy-quote-bar","tip-quote","mb-2"],[1,"quote-icon"],[1,"quote-content"],[1,"quote-title"],[1,"policy-quote-bar","tip-quote","mb-3"],[1,"card","mb-3","border-light-subtle","shadow-none"],[1,"card-header","bg-light","py-2","font-weight-bold","small"],[1,"table-responsive"],[1,"table","table-sm","table-bordered","mb-0","param-table"],[1,"thead-light"],[1,"text-muted"],[1,"table-total-row","font-weight-bold"],[1,"text-muted","font-weight-normal","small"],["data-testid","total-employee-rate",1,"text-primary","font-weight-bold"],["data-testid","total-employer-rate",1,"text-primary","font-weight-bold"],[1,"references-section"],[1,"section-title","text-muted","small","font-weight-bold","mb-2"],[1,"list-group","list-group-flush"],[1,"text-muted","small","py-2"],["mat-tab-label",""],["data-testid","val-local-avg-wage",1,"kv-val","text-dark"],["data-testid","val-avg-wage",1,"kv-val","text-dark"],[1,"kv-item","kv-item-empty"],["target","_blank","rel","noopener noreferrer",1,"list-group-item","list-group-item-action","d-flex","justify-content-between","align-items-center","py-2","px-3","reference-link-item","rounded","mb-1",3,"href"],[1,"d-flex","align-items-center","text-truncate","mr-2"],["color","primary",1,"mr-2","flex-shrink-0"],[1,"reference-desc","text-truncate"],[1,"text-muted","small-icon","flex-shrink-0"]],template:function(n,a){n&1&&(s(0,"div",0)(1,"div",1)(2,"mat-icon",2),u(3,"menu_book"),l(),s(4,"h2",3),u(5," \u57CE\u5E02\u793E\u4FDD\u516C\u79EF\u91D1\u8BA1\u7B97\u53C2\u6570\u4E0E\u653F\u7B56\u4F9D\u636E "),l()(),s(6,"button",4),F("click",function(){return a.close()}),s(7,"mat-icon"),u(8,"close"),l()()(),s(9,"mat-dialog-content",5)(10,"div",6)(11,"div",7)(12,"div",8),u(13," \u9009\u62E9\u57CE\u5E02\u4E0E\u6863\u4F4D "),l(),s(14,"mat-nav-list",9),pe(15,QA,5,5,"a",10,XA),l()(),s(17,"div",11),H(18,ZA,4,0,"div",12)(19,sF,117,22)(20,lF,2,0,"div",13),l()()()),n&2&&(m(15),fe(a.recipeIndex()),m(3),U(a.loading()?18:a.currentRecipe()&&a.selectedPolicy()?19:20))},dependencies:[ze,Ct,si,li,ec,Br,Nr,Jl,xi,Cb,Fo,na,ta,wt,pn,Et,Pt,Db,Eb,Ao,Ka],styles:[".recipe-dialog-header[_ngcontent-%COMP%]{padding:14px 20px;border-bottom:1px solid rgba(0,0,0,.08)}.recipe-dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:600}.recipe-dialog-content[_ngcontent-%COMP%]{overflow:hidden;max-width:880px;min-height:460px;max-height:80vh}.recipe-dialog-body[_ngcontent-%COMP%]{min-height:460px;max-height:75vh}.city-sidebar[_ngcontent-%COMP%]{overflow-y:auto;flex-shrink:0;width:200px;border-right:1px solid rgba(0,0,0,.08);background-color:#fafafa}.city-sidebar[_ngcontent-%COMP%]   .city-list[_ngcontent-%COMP%]   a.mat-mdc-list-item[_ngcontent-%COMP%]{cursor:pointer;border-left:3px solid transparent}.city-sidebar[_ngcontent-%COMP%]   .city-list[_ngcontent-%COMP%]   a.mat-mdc-list-item[_ngcontent-%COMP%]:hover{background-color:#0000000a}.city-sidebar[_ngcontent-%COMP%]   .city-list[_ngcontent-%COMP%]   a.mat-mdc-list-item.active-city[_ngcontent-%COMP%]{border-left-color:#1976d2;background-color:#1976d214}.city-sidebar[_ngcontent-%COMP%]   .city-list[_ngcontent-%COMP%]   a.mat-mdc-list-item.active-city[_ngcontent-%COMP%]   .font-weight-bold[_ngcontent-%COMP%]{color:#1976d2}.policy-main-content[_ngcontent-%COMP%]{overflow-y:auto;background-color:#fff}.metrics-kv-panel[_ngcontent-%COMP%]{display:grid;padding:10px 14px;border:1px solid rgba(0,0,0,.06);background-color:#f8f9fa;gap:6px 20px;grid-template-columns:repeat(2,1fr)}.metrics-kv-panel[_ngcontent-%COMP%]   .kv-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:3px 0;border-bottom:1px dashed rgba(0,0,0,.05)}.metrics-kv-panel[_ngcontent-%COMP%]   .kv-item[_ngcontent-%COMP%]   .kv-label[_ngcontent-%COMP%]{font-size:.85rem;color:#555}.metrics-kv-panel[_ngcontent-%COMP%]   .kv-item[_ngcontent-%COMP%]   .kv-val[_ngcontent-%COMP%]{font-size:.9rem;font-weight:600}.metrics-kv-panel[_ngcontent-%COMP%]   .kv-item-empty[_ngcontent-%COMP%]{border-bottom:none}.policy-quote-bar[_ngcontent-%COMP%]{font-size:.82rem;line-height:1.4;display:flex;align-items:flex-start;padding:7px 10px;border-left:3px solid;border-radius:4px}.policy-quote-bar[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%]{font-size:16px;line-height:16px;flex-shrink:0;width:16px;height:16px;margin-top:1px;margin-right:6px}.policy-quote-bar[_ngcontent-%COMP%]   .quote-content[_ngcontent-%COMP%]   .quote-title[_ngcontent-%COMP%]{font-weight:600;margin-right:2px}.policy-quote-bar.info-quote[_ngcontent-%COMP%]{color:#0d47a1;border-left-color:#1976d2;background-color:#f0f7ff}.policy-quote-bar.info-quote[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%]{color:#1976d2}.policy-quote-bar.tip-quote[_ngcontent-%COMP%]{color:#455a64;border-left-color:#78909c;background-color:#f8f9fa}.policy-quote-bar.tip-quote[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%]{color:#78909c}.param-table[_ngcontent-%COMP%]{font-size:.85rem}.param-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .param-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.4rem .6rem;vertical-align:middle}.param-table[_ngcontent-%COMP%]   .table-total-row[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.1);background-color:#1976d20a}.reference-link-item[_ngcontent-%COMP%]{text-decoration:none;color:inherit;border:1px solid rgba(0,0,0,.08)}.reference-link-item[_ngcontent-%COMP%]:hover{color:#1976d2;border-color:#90caf9;background-color:#f0f7ff}.reference-link-item[_ngcontent-%COMP%]   .reference-desc[_ngcontent-%COMP%]{font-size:.85rem}.small-icon[_ngcontent-%COMP%], .extra-small-icon[_ngcontent-%COMP%]{font-size:16px;line-height:16px;width:16px;height:16px}@media(max-width:768px){.recipe-dialog-content[_ngcontent-%COMP%]{width:100%}.recipe-dialog-body[_ngcontent-%COMP%]{flex-direction:column!important}.city-sidebar[_ngcontent-%COMP%]{width:100%;max-height:150px;border-right:none;border-bottom:1px solid rgba(0,0,0,.08)}}"]})}}return t})();var cF=(t,i)=>i.value;function dF(t,i){if(t&1&&(s(0,"mat-option",13),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),ee(e.label)}}function uF(t,i){if(t&1&&(s(0,"div",20),u(1," \u26A0\uFE0F "),s(2,"strong"),u(3,"\u63D0\u793A\uFF1A"),l(),u(4),l()),t&2){let e,n=w();m(4),ot("\u5F53\u524D ",(e=n.splitForm.get("salaryMonths"))==null?null:e.value," \u85AA\u7ED3\u6784\u4E0B\u7684\u5E74\u7EC8\u5956 (\xA5",n.calculatedAnnualBonus.toLocaleString(),") \u843D\u5728\u4E2A\u7A0E\u65E0\u6548\u76F2\u533A\uFF0C\u7A0E\u540E\u5B9E\u9645\u6536\u76CA\u53EF\u80FD\u4E0D\u5982\u964D\u4F4E\u5E74\u7EC8\u5956\u589E\u52A0\u6708\u85AA\u3002 ")}}var Mb=(()=>{class t{constructor(){this.fb=c(Ga),this.dialogRef=c(mn),this.salaryMonthsOptions=[{value:12,label:"12 \u85AA (\u65E0\u56FA\u5B9A\u5E74\u7EC8\u5956)"},{value:13,label:"13 \u85AA (\u5E74\u5E95\u53CC\u85AA)"},{value:14,label:"14 \u85AA (2\u4E2A\u6708\u5E74\u7EC8\u5956)"},{value:15,label:"15 \u85AA (3\u4E2A\u6708\u5E74\u7EC8\u5956)"},{value:16,label:"16 \u85AA (4\u4E2A\u6708\u5E74\u7EC8\u5956)"},{value:18,label:"18 \u85AA (6\u4E2A\u6708\u5E74\u7EC8\u5956)"}],this.splitForm=this.fb.group({totalPackage:[3e5,[Z.required,Z.min(0)]],salaryMonths:[15,Z.required]})}get calculatedMonthSalary(){let e=this.splitForm.get("totalPackage")?.value||0,n=this.splitForm.get("salaryMonths")?.value||12;return n<=0?0:Math.round(e/n)}get calculatedAnnualBonus(){let e=this.splitForm.get("totalPackage")?.value||0,n=this.calculatedMonthSalary;return Math.max(0,e-n*12)}get trapWarning(){let e=this.calculatedAnnualBonus;return e<=0?!1:Ji(e).isTrap}onApply(){if(this.splitForm.valid){let e={totalPackage:this.splitForm.get("totalPackage")?.value||0,monthsCount:this.splitForm.get("salaryMonths")?.value||12,monthSalary:this.calculatedMonthSalary,annualBonus:this.calculatedAnnualBonus};this.dialogRef.close(e)}}onClose(){this.dialogRef.close()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-offer-split-dialog"]],decls:51,vars:5,consts:[[1,"dialog-header","d-flex","justify-content-between","align-items-center"],[1,"header-title-wrapper"],["color","primary"],["mat-dialog-title","","data-testid","offer-dialog-title",1,"m-0","font-weight-bold"],["mat-icon-button","","aria-label","\u5173\u95ED","data-testid","btn-close-dialog",3,"click"],[1,"dialog-content","py-3"],[1,"text-muted","small","mb-3"],[1,"d-flex","flex-column",3,"formGroup"],["appearance","outline",1,"w-100","mb-2"],["matInput","","type","number","formControlName","totalPackage","placeholder","300000","min","0","data-testid","offer-total-package-input"],["matTextSuffix",""],["appearance","outline",1,"w-100","mt-2","mb-2"],["formControlName","salaryMonths","data-testid","offer-months-select"],[3,"value"],["data-testid","offer-preview-card",1,"preview-card","p-3","rounded","mt-2","border"],[1,"font-weight-bold","text-dark","mb-2"],[1,"d-flex","justify-content-between","mb-1","small","text-muted"],["data-testid","offer-calc-salary",1,"text-dark","font-weight-bold"],[1,"d-flex","justify-content-between","small","text-muted"],["data-testid","offer-calc-bonus",1,"text-dark","font-weight-bold"],["data-testid","offer-trap-warning",1,"alert","alert-warning","py-2","px-3","mt-2","mb-0","small"],["align","end",1,"dialog-actions","p-3"],["mat-button","",3,"click"],["mat-flat-button","","color","primary","data-testid","offer-apply-btn",3,"click","disabled"],[1,"mr-1"]],template:function(n,a){n&1&&(s(0,"div",0)(1,"div",1)(2,"mat-icon",2),u(3,"payments"),l(),s(4,"h2",3),u(5," Offer \u5E74\u85AA\u603B\u5305\u5FEB\u901F\u62C6\u5206 "),l()(),s(6,"button",4),F("click",function(){return a.onClose()}),s(7,"mat-icon"),u(8,"close"),l()()(),s(9,"mat-dialog-content",5)(10,"p",6),u(11," \u8F93\u5165\u8C08\u5B9A\u7684\u5E74\u5EA6\u603B\u5305\u91D1\u989D\u4E0E\u5E74\u85AA\u6708\u6570\uFF08\u5982 15 \u85AA\uFF09\uFF0C\u7CFB\u7EDF\u5C06\u81EA\u52A8\u62C6\u5206\u6BCF\u6708\u57FA\u7840\u8D26\u9762\u5DE5\u8D44\u4E0E\u5E74\u7EC8\u5956\uFF0C\u5E76\u4E00\u952E\u586B\u5165\u8BA1\u7B97\u5668\u3002 "),l(),s(12,"form",7)(13,"mat-form-field",8)(14,"mat-label"),u(15,"\u5E74\u5EA6\u603B\u7A0E\u524D\u85AA\u916C (Total Package)"),l(),D(16,"input",9),s(17,"span",10),u(18,"\u5143"),l(),s(19,"mat-hint"),u(20,"\u5305\u542B 12 \u4E2A\u6708\u6708\u85AA\u53CA\u5E74\u7EC8\u5956\u91D1\u603B\u989D"),l()(),s(21,"mat-form-field",11)(22,"mat-label"),u(23,"\u85AA\u6570\u7ED3\u6784"),l(),s(24,"mat-select",12),pe(25,dF,2,2,"mat-option",13,cF),l(),s(27,"mat-hint"),u(28,"\u4F8B\u5982 15 \u85AA\u5373 12 \u4E2A\u6708\u6708\u85AA + 3 \u4E2A\u6708\u5E74\u7EC8\u5956"),l()(),s(29,"div",14)(30,"div",15),u(31,"\u62C6\u5206\u9884\u89C8\u7ED3\u679C"),l(),s(32,"div",16)(33,"span"),u(34,"\u8D26\u9762\u6708\u85AA (12\u4E2A\u6708)\uFF1A"),l(),s(35,"strong",17),u(36),l()(),s(37,"div",18)(38,"span"),u(39,"\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\uFF1A"),l(),s(40,"strong",19),u(41),l()()(),H(42,uF,5,2,"div",20),l()(),s(43,"mat-dialog-actions",21)(44,"button",22),F("click",function(){return a.onClose()}),u(45,"\u53D6\u6D88"),l(),s(46,"button",23),F("click",function(){return a.onApply()}),s(47,"mat-icon",24),u(48,"check"),l(),s(49,"span"),u(50,"\u5E94\u7528\u81F3\u8868\u5355"),l()()()),n&2&&(m(12),_("formGroup",a.splitForm),m(13),fe(a.salaryMonthsOptions),m(11),k(" \xA5",a.calculatedMonthSalary.toLocaleString()," /\u6708 "),m(5),k(" \xA5",a.calculatedAnnualBonus.toLocaleString()," "),m(),U(a.trapWarning?42:-1),m(4),_("disabled",a.splitForm.invalid))},dependencies:[ze,Wa,Ua,mi,$i,za,Ha,Wi,gn,Gi,Ct,si,Ra,li,Gt,Dn,_n,Yi,qi,Co,xo,Do,Eo,Nt,wt,Ot,pn,Et,Pt],styles:['@charset "UTF-8";.dialog-header[_ngcontent-%COMP%]{padding:14px 20px;border-bottom:1px solid rgba(0,0,0,.08)}.dialog-header[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.dialog-header[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;line-height:22px;display:inline-flex;justify-content:center;align-items:center;flex-shrink:0;width:22px;height:22px;margin:0;padding:0}.dialog-header[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dialog-header[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   h2.mat-mdc-dialog-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:600;line-height:1!important;display:inline-flex;align-items:center;margin:0!important;padding:0!important}.dialog-content[_ngcontent-%COMP%]{min-width:320px;max-width:480px}.preview-card[_ngcontent-%COMP%]{border-color:#e9ecef;background-color:#f8f9fa}.dialog-actions[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.08)}input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{margin:0;appearance:none}input[type=number][_ngcontent-%COMP%]{appearance:textfield}']})}}return t})();var mF=()=>[1,2,3,4,5,6,7,8,9,10,11,12],hF=(t,i)=>i.file,ia=(t,i)=>i.label;function pF(t,i){if(t&1&&u(0),t&2){let e=w();ot(" ",e.cityRecipe.city,": ",e.cityRecipe.label," ")}}function fF(t,i){t&1&&u(0," \u9009\u62E9\u57CE\u5E02\u914D\u65B9 ")}function gF(t,i){if(t&1){let e=We();s(0,"button",74),F("click",function(){let a=Me(e).$implicit,o=w();return Ae(o.onSelectRecipeItem(a))}),u(1),l()}if(t&2){let e=i.$implicit;A("data-testid","recipe-item-"+e.file.replace(".json","")),m(),ot(" ",e.city,": ",e.label," ")}}function _F(t,i){if(t&1&&(s(0,"mat-option",19),u(1),l()),t&2){let e=i.$implicit;_("value",e),A("data-testid","option-year-"+e),m(),k(" ",e," ")}}function bF(t,i){if(t&1&&(s(0,"div",30)(1,"div",75)(2,"mat-icon",76),u(3,"warning"),l(),s(4,"div")(5,"strong"),u(6,"\u5E74\u7EC8\u5956\u7A0E\u6536\u76F2\u533A\u9884\u8B66\uFF1A"),l(),s(7,"span"),u(8),l()()()()),t&2){let e=w();m(8),ee(e.bonusTrapResult==null?null:e.bonusTrapResult.warningMessage)}}function vF(t,i){if(t&1&&(s(0,"div",34)(1,"div",77),u(2),l()()),t&2){let e=w();m(2),k(" ",e.policyHint," ")}}function yF(t,i){if(t&1&&(s(0,"mat-option",19),u(1),l()),t&2){let e=i.$implicit,n=i.$index;_("value",e.value),A("data-testid","option-infant-care-"+n),m(),ee(e.label)}}function xF(t,i){if(t&1&&(s(0,"mat-option",19),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-child-education-"+e.value),m(),ee(e.label)}}function CF(t,i){if(t&1&&(s(0,"mat-option",19),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-continuing-education-"+e.value),m(),ee(e.label)}}function wF(t,i){if(t&1&&(s(0,"mat-option",19),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-housing-loan-interest-"+e.value),m(),ee(e.label)}}function EF(t,i){if(t&1&&(s(0,"mat-option",19),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-renting-"+e.value),m(),ee(e.label)}}function DF(t,i){if(t&1&&(s(0,"mat-option",19),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-elderly-care-"+e.value),m(),ee(e.label)}}function SF(t,i){if(t&1&&(s(0,"mat-option",19),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),A("data-testid","option-private-pension-"+e.value),m(),ee(e.label)}}function MF(t,i){if(t&1&&(s(0,"mat-option",19),u(1),l()),t&2){let e=i.$implicit;_("value",e),m(),k("",e," \u6708\u5165\u804C")}}function AF(t,i){if(t&1&&(s(0,"mat-form-field",62)(1,"mat-label"),u(2,"\u9996\u6B21\u5165\u804C\u6708\u4EFD"),l(),s(3,"mat-select",78),pe(4,MF,2,2,"mat-option",19,qt),l(),s(6,"mat-hint"),u(7),l()()),t&2){let e,n=w();m(4),fe(pa(1,mF)),m(3),k("\u9996\u6708\u7D2F\u8BA1\u6263\u9664 ",(((e=n.baseForm.get("firstJobStartMonth"))==null?null:e.value)||1)*5e3," \u5143 (\u7A0E\u603B2020\u7B2C13\u53F7)")}}function FF(t,i){t&1&&(s(0,"div",34)(1,"div",79)(2,"mat-form-field",80)(3,"mat-label"),u(4,"\u517B\u8001\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),D(5,"input",81),s(6,"span",26),u(7,"%"),l()(),s(8,"mat-form-field",46)(9,"mat-label"),u(10,"\u533B\u7597\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),D(11,"input",82),s(12,"span",26),u(13,"%"),l()(),s(14,"mat-form-field",46)(15,"mat-label"),u(16,"\u5931\u4E1A\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),D(17,"input",83),s(18,"span",26),u(19,"%"),l()()(),s(20,"mat-slide-toggle",84),u(21," \u6309\u4E0A\u6708\u6536\u5165\u7F34\u7EB3\u793E\u4FDD "),l()())}var Ab=(()=>{class t{constructor(){this.cityRecipe=null,this.calculate=new R,this.clearResult=new R,this.changeRecipe=new R,this.selectRecipeItem=new R,this.changePredefineCondition=new R,this.changeSelectedYear=new R,this.templates=Zl,this.nonMergeTaxEndDate=ll,this.availableYears=[],this.selectedYear=new Date().getFullYear(),this.useUniformPolicy=!1,this.latestPolicy=null,this.policyHint="",this.bonusTrapResult=null,this.formSubscriptions=[],this.fb=c(Ga),this.dialog=c(hn),this.trackByValue=(e,n)=>n.value,this.initializeForm()}ngOnInit(){this.cityRecipe&&(this.updateAvailableYears(),this.onYearChange(this.selectedYear)),this.updateFromCache(),this.setupFormValueChanges(),setTimeout(()=>this.updateInsuranceBases(),0)}ngOnChanges(e){e.cityRecipe&&this.cityRecipe&&(this.updateAvailableYears(),this.onYearChange(this.selectedYear),this.patchFromRecipe(this.cityRecipe))}ngOnDestroy(){this.formSubscriptions.forEach(e=>e.unsubscribe())}get privatePensionOptions(){return this.templates.privatePension.options}get infantCareDeductionOptions(){return this.templates.infantCare.options}get childEducationDeductionOptions(){return this.templates.childEducation.options}get continuousEducationDeductionOptions(){return this.templates.continuingEducation.options}get housingLoanInterestDeductionOptions(){return this.templates.housingLoanInterest.options}get rentingDeductionOptions(){return this.templates.renting.options}get elderlyCareDeductionOptions(){return this.templates.elderlyCare.options}get insuranceTop(){return this.latestPolicy?Array.isArray(this.latestPolicy.insuranceBaseRange)?this.latestPolicy.insuranceBaseRange[1]:this.latestPolicy.insuranceBaseRange.endowment[1]:0}get housingFundTop(){return this.latestPolicy?this.latestPolicy.housingFundBaseRange[1]:0}onCalculate(){if(this.baseForm.valid){this.saveToCache();let e=xe(S({},this.baseForm.value),{year:this.selectedYear,useUniformPolicy:this.useUniformPolicy});this.calculate.emit(e)}}onReset(){this.baseForm.patchValue({monthSalary:1e4,annualBonus:0,insuranceBase:1e4,housingFundBase:1e4,housingFundRate:5,lastYearAvgSalary:0,yearBeforeLastAvgSalary:0,extraDeduction:{infantCare:0,childEducation:0,continuingEducation:0,seriousMedicalExpense:0,housingLoanInterest:0,renting:0,elderlyCare:0,enterprisePensionFromEmployee:0,enterprisePensionFromEmployer:0,privatePension:0,other:0},insuranceRate:{endowment:(this.latestPolicy?.employee.insuranceRate?.endowment??0)*100,health:(this.latestPolicy?.employee.insuranceRate?.health??0)*100,unemployment:(this.latestPolicy?.employee.insuranceRate?.unemployment??0)*100},insuranceBaseOnLastMonth:this.cityRecipe?.insuranceBaseOnLastMonth??!1})}onClearResult(){this.clearResult.emit()}onChangeRecipe(e){this.changeRecipe.emit(e),this.patchFromRecipe(e)}onSelectRecipeItem(e){this.selectRecipeItem.emit(e)}openPolicyParamsDialog(){this.dialog.open(Sb,{width:"880px",maxWidth:"95vw",data:{currentRecipeId:this.cityRecipe?.id,currentYear:this.selectedYear}})}onYearChange(e){this.selectedYear=e,this.updateLatestPolicy(),this.changeSelectedYear.emit(e)}onUniformPolicyChange(e){this.useUniformPolicy=e}onChangePredefineCondition(e){this.changePredefineCondition.emit(e),e&&this.patchFromRecipe(this.cityRecipe)}resetConflict(e,n,a){e>0&&n.get(a)?.setValue(0)}openOfferSplitDialog(){this.dialog.open(Mb,{width:"480px",maxWidth:"95vw"}).afterClosed().subscribe(n=>{n&&(this.baseForm.patchValue({monthSalary:n.monthSalary,annualBonus:n.annualBonus}),this.updateInsuranceBases())})}setupFormValueChanges(){this.formSubscriptions.forEach(d=>d.unsubscribe()),this.formSubscriptions=[];let e=this.baseForm.get("lastYearAvgSalary")?.valueChanges.subscribe(()=>{this.updateInsuranceBases()});e&&this.formSubscriptions.push(e);let n=this.baseForm.get("yearBeforeLastAvgSalary")?.valueChanges.subscribe(()=>{this.updateInsuranceBases()});n&&this.formSubscriptions.push(n);let a=this.baseForm.get("monthSalary")?.valueChanges.subscribe(()=>{this.updateInsuranceBases()});a&&this.formSubscriptions.push(a);let o=this.baseForm.get("annualBonus");if(o){this.bonusTrapResult=Ji(o.value||0);let d=o.valueChanges.subscribe(h=>{this.bonusTrapResult=Ji(h||0)});this.formSubscriptions.push(d)}let r=this.baseForm.get("extraDeduction.enterprisePensionFromEmployee")?.valueChanges.subscribe(d=>{this.baseForm.get("extraDeduction.enterprisePensionFromEmployer")?.setValue(d||0,{emitEvent:!1})});r&&this.formSubscriptions.push(r)}updateInsuranceBases(){let e=new Date().getMonth()+1,n=this.baseForm.get("monthSalary")?.value||0,a=this.baseForm.get("lastYearAvgSalary")?.value||0,o=this.baseForm.get("yearBeforeLastAvgSalary")?.value||0,r=n;e>=1&&e<=6?o>0&&(r=o):e>=7&&e<=12&&a>0&&(r=a),this.baseForm.patchValue({insuranceBase:r,housingFundBase:r},{emitEvent:!1})}initializeForm(){this.baseForm=this.fb.group({monthSalary:[1e4,Z.required],monthlyBonus:[0,Z.required],annualBonus:[0,Z.required],insuranceBase:[1e4,Z.required],housingFundBase:[1e4,Z.required],housingFundRate:[5,Z.required],lastYearAvgSalary:[0],yearBeforeLastAvgSalary:[0],firstJobThisYear:[!1],firstJobStartMonth:[7],sideIncome:this.fb.group({laborIncome:[0],manuscriptIncome:[0]}),extraDeduction:this.fb.group({infantCare:[0,Z.required],childEducation:[0,Z.required],continuingEducation:[0,Z.required],seriousMedicalExpense:[0,Z.required],housingLoanInterest:[0,Z.required],renting:[0,Z.required],elderlyCare:[0,Z.required],enterprisePensionFromEmployee:[0,Z.required],enterprisePensionFromEmployer:[0,Z.required],privatePension:[0,Z.required],other:[0,Z.required]}),insuranceRate:this.fb.group({endowment:[(this.latestPolicy?.employee.insuranceRate?.endowment??0)*100,Z.required],health:[(this.latestPolicy?.employee.insuranceRate?.health??0)*100,Z.required],unemployment:[(this.latestPolicy?.employee.insuranceRate?.unemployment??0)*100,Z.required]}),insuranceBaseOnLastMonth:[this.cityRecipe?.insuranceBaseOnLastMonth??!1,Z.required]})}patchFromRecipe(e){this.latestPolicy&&(this.baseForm.patchValue({insuranceRate:{endowment:this.latestPolicy.employee.insuranceRate.endowment*100,health:this.latestPolicy.employee.insuranceRate.health*100,unemployment:this.latestPolicy.employee.insuranceRate.unemployment*100},insuranceBaseOnLastMonth:e.insuranceBaseOnLastMonth}),this.setupFormValueChanges(),setTimeout(()=>this.updateInsuranceBases(),0))}updateFromCache(){let e=JSON.parse(localStorage.getItem("incomeMeta"));sessionStorage.getItem("incomeMeta")&&(e=JSON.parse(sessionStorage.getItem("incomeMeta"))),e&&(e.extraDeduction&&(e.extraDeduction.infantCare===void 0&&(e.extraDeduction.infantCare=0),e.extraDeduction.privatePension===void 0&&(e.extraDeduction.privatePension=0)),this.baseForm.patchValue(e))}saveToCache(){localStorage.setItem("incomeMeta",JSON.stringify(this.baseForm.value)),sessionStorage.setItem("incomeMeta",JSON.stringify(this.baseForm.value))}updateAvailableYears(){let e=this.cityRecipe.policies.map(n=>new Date(n.effectiveDate).getFullYear()).filter((n,a,o)=>o.indexOf(n)===a).sort((n,a)=>a-n);this.availableYears=e,e.length>0&&!e.includes(this.selectedYear)&&(this.selectedYear=e[0])}updateLatestPolicy(){this.latestPolicy=Dr(this.cityRecipe,this.selectedYear),this.updatePolicyHint(),this.updateBasePlaceholders()}updatePolicyHint(){if(this.latestPolicy){let e=new Date(this.latestPolicy.effectiveDate),n=e.getMonth()+1,a=e.getFullYear();this.policyHint=`\u63D0\u793A\uFF1A\u5C06\u4F7F\u7528 ${a}-${n.toString().padStart(2,"0")} \u751F\u6548\u7684\u6700\u65B0\u6807\u51C6\u3002${n}\u6708\u524D\u5C06\u81EA\u52A8\u6CBF\u7528\u65E7\u6807\u51C6\u8BA1\u7B97\u3002`}else this.policyHint=""}updateBasePlaceholders(){if(this.latestPolicy){let e=this.latestPolicy.insuranceBaseRange;Array.isArray(e)?this.templates.insuranceBase.placeholder=`${e[0]}-${e[1]}`:this.templates.insuranceBase.placeholder=`${e.endowment[0]}-${e.endowment[1]}`;let n=this.latestPolicy.housingFundBaseRange;this.templates.housingFundBase.placeholder=`${n[0]}-${n[1]}`}}get currentInsuranceTop(){return this.latestPolicy?Array.isArray(this.latestPolicy.insuranceBaseRange)?this.latestPolicy.insuranceBaseRange[1]:this.latestPolicy.insuranceBaseRange.endowment[1]:this.insuranceTop}get currentHousingFundTop(){return this.latestPolicy?this.latestPolicy.housingFundBaseRange[1]:this.housingFundTop}get currentMinimumWage(){return this.latestPolicy?this.latestPolicy.minimumWage:0}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-calculator-form"]],inputs:{usePredefinedInsurancePercents:"usePredefinedInsurancePercents",cityRecipe:"cityRecipe",recipeIndex$:"recipeIndex$"},outputs:{calculate:"calculate",clearResult:"clearResult",changeRecipe:"changeRecipe",selectRecipeItem:"selectRecipeItem",changePredefineCondition:"changePredefineCondition",changeSelectedYear:"changeSelectedYear"},features:[Ce],decls:243,vars:68,consts:[["menu","matMenu"],["insuranceBase","matAutocomplete"],["housingFundBase","matAutocomplete"],["infantCare","matAutocomplete"],["childEducation","matAutocomplete"],["continuingEducation","matAutocomplete"],["housingLoanInterest","matAutocomplete"],["renting","matAutocomplete"],["elderlyCare","matAutocomplete"],["privatePension","matAutocomplete"],["appearance","outlined"],[1,"d-flex","justify-content-between","align-items-center","flex-wrap","mb-2"],[1,"d-flex","align-items-center","flex-wrap","my-2","my-md-0"],["color","primary","name","usePredefinedInsurancePercents","data-testid","toggle-predefined-insurance",1,"example-margin",3,"ngModelChange","ngModel"],["color","primary","name","useUniformPolicy","data-testid","toggle-uniform-policy","matTooltip","\u9ED8\u8BA4\u5173\u95ED\uFF1A\u6309\u653F\u7B56\u5B9E\u9645\u751F\u6548\u6708\u4EFD\u5206\u6BB5\u6838\u7B97\uFF08\u5404\u5730\u901A\u5E38\u4E8E7\u6708\u8C03\u57FA\uFF0C1~6\u6708\u6267\u884C\u4E0A\u671F\u57FA\u6570\uFF0C7~12\u6708\u6267\u884C\u65B0\u57FA\u6570\uFF09\uFF1B\u5F00\u542F\u540E\uFF1A\u5168\u5E7412\u4E2A\u6708\u5747\u7EDF\u4E00\u91C7\u7528\u8BE5\u5E74\u5EA6\u6700\u65B0\u516C\u5E03\u7684\u793E\u4FDD\u516C\u79EF\u91D1\u57FA\u6570\u4E0A\u4E0B\u9650\u53CA\u8D39\u7387\u8FDB\u884C\u6D4B\u7B97\u3002","matTooltipPosition","above",1,"example-margin","ml-3",3,"ngModelChange","ngModel"],["mat-button","","color","primary","data-testid","btn-select-city-recipe",1,"ml-3","mt-1","mt-sm-0",3,"matMenuTriggerFor"],["mat-menu-item",""],["appearance","outline",1,"ml-3","dense-xs",2,"width","120px"],["data-testid","select-calculation-year",3,"valueChange","selectionChange","value"],[3,"value"],["mat-icon-button","","color","primary","type","button","matTooltip","\u67E5\u770B\u57CE\u5E02\u793E\u4FDD\u516C\u79EF\u91D1\u8BA1\u7B97\u53C2\u6570\u4E0E\u653F\u7B56\u4F9D\u636E","data-testid","btn-view-policy-params",1,"ml-2","mt-1","mt-sm-0",3,"click"],[1,"pt-2"],[1,"form-basic-data",3,"formGroup"],[1,"row","align-items-center"],["appearance","outline",1,"col-12","col-md-3"],["matInput","","type","number","placeholder","10000","data-testid","input-month-salary","formControlName","monthSalary","min","0"],["matTextSuffix",""],["matInput","","type","number","placeholder","0","data-testid","input-annual-bonus","formControlName","annualBonus","min","0"],[1,"col-12","col-md-3","mb-3","mb-md-0"],["mat-stroked-button","","color","primary","type","button","data-testid","btn-open-offer-split",3,"click"],[1,"row","mx-0","mb-3"],[1,"row"],["matInput","","type","number","placeholder","0","data-testid","input-year-before-last-avg-salary","formControlName","yearBeforeLastAvgSalary","min","0"],["matInput","","type","number","placeholder","0","data-testid","input-last-year-avg-salary","formControlName","lastYearAvgSalary","min","0"],[1,"row","mx-0"],["matInput","","type","number","data-testid","input-insurance-base","formControlName","insuranceBase","min","0",3,"placeholder","matAutocomplete"],["panelWidth","200"],[1,"ml-sm-3","ml-md-4"],["matInput","","type","number","data-testid","input-housing-fund-base","formControlName","housingFundBase","min","0",3,"placeholder","matAutocomplete"],[1,"ml-3",2,"width","150px"],["matInput","","type","number","placeholder","5","data-testid","input-housing-fund-rate","formControlName","housingFundRate","min","0"],["formGroupName","extraDeduction",1,"ml-md-4"],["matInput","","type","number","data-testid","input-infant-care","formControlName","infantCare","min","0",3,"placeholder","matAutocomplete"],[1,"ml-3"],["matInput","","type","number","data-testid","input-child-education","formControlName","childEducation","min","0",3,"placeholder","matAutocomplete"],["matInput","","type","number","data-testid","input-continuing-education","formControlName","continuingEducation","min","0",3,"placeholder","matAutocomplete"],[1,"ml-3",2,"width","120px"],["matInput","","type","number","placeholder","0","data-testid","input-serious-medical-expense","formControlName","seriousMedicalExpense","min","0","matTooltip","\u6B21\u5E743-6\u6708\u7EFC\u5408\u6240\u5F97\u6C47\u7B97\u6E05\u7F34\u65F6\u636E\u5B9E\u7533\u62A5\uFF08\u81EA\u4ED8\u8D851.5\u4E07\u90E8\u5206\uFF0C\u6700\u9AD8\u9650\u989D8\u4E07\u5143/\u5E74\uFF09","matTooltipPosition","above"],["matInput","","type","number","data-testid","input-housing-loan-interest","formControlName","housingLoanInterest","min","0",3,"ngModelChange","placeholder","matAutocomplete"],["matInput","","type","number","data-testid","input-renting","formControlName","renting","min","0",3,"ngModelChange","placeholder","matAutocomplete"],["matInput","","type","number","data-testid","input-elderly-care","formControlName","elderlyCare","min","0",3,"placeholder","matAutocomplete"],[1,"ml-3",2,"width","140px"],["matInput","","type","number","placeholder","0","data-testid","input-enterprise-pension-employee","formControlName","enterprisePensionFromEmployee","min","0","matTooltip","\u6CD5\u5B9A\u7A0E\u524D\u6263\u9664\u9650\u989D\u4E3A\u672C\u4EBA\u6708\u85AA4%\u4E14\u4E0D\u8D85\u793E\u5E733\u500D","matTooltipPosition","above"],["matInput","","type","number","placeholder","0","data-testid","input-enterprise-pension-employer","formControlName","enterprisePensionFromEmployer","min","0"],["matInput","","type","number","data-testid","input-private-pension","formControlName","privatePension","min","0","matTooltip","\u6BCF\u5E74\u9650\u989D12000\u5143(\u6BCF\u67081000\u5143)\u7A0E\u524D\u636E\u5B9E\u6263\u9664","matTooltipPosition","above",3,"placeholder","matAutocomplete"],["matInput","","type","number","placeholder","0","data-testid","input-other-deduction","formControlName","other","min","0"],[1,"my-3","mx-0","shadow-none","border"],[1,"font-weight-bold","text-secondary","d-flex","align-items-center"],[1,"mr-2","text-info"],[1,"py-2"],[1,"d-flex","align-items-center","flex-wrap","mb-3"],["color","primary","formControlName","firstJobThisYear","data-testid","toggle-first-job"],["appearance","outline",1,"ml-sm-3","mt-2","mt-sm-0",2,"width","150px"],["formGroupName","sideIncome",1,"row","mx-0","pt-2","border-top"],[1,"col-12","text-muted","small","mb-2"],[1,"align-middle","mr-1",2,"font-size","16px","width","16px","height","16px"],["appearance","outline",1,"col-12","col-md-4","pl-0"],["matInput","","type","number","placeholder","0","formControlName","laborIncome","data-testid","input-labor-income","min","0"],["appearance","outline",1,"col-12","col-md-4"],["matInput","","type","number","placeholder","0","formControlName","manuscriptIncome","data-testid","input-manuscript-income","min","0"],[1,"pl-4","pb-3"],["mat-raised-button","","color","primary","type","submit","data-testid","btn-calculate",3,"click","disabled"],["mat-raised-button","","data-testid","btn-reset",1,"ml-3",3,"click","disabled"],["mat-raised-button","","data-testid","btn-clear-result",1,"ml-3",3,"click"],["mat-menu-item","",3,"click"],["data-testid","bonus-tax-trap-alert",1,"alert","alert-warning","d-flex","align-items-center","w-100","p-2","rounded","border","border-warning",2,"background-color","#fff3cd","color","#856404"],[1,"mr-2","text-warning"],["data-testid","text-policy-hint",1,"text-muted","small","my-1"],["formControlName","firstJobStartMonth","data-testid","select-first-job-month"],["formGroupName","insuranceRate"],[2,"width","120px"],["matInput","","type","number","placeholder","0","data-testid","input-endowment-rate","formControlName","endowment","min","0"],["matInput","","type","number","placeholder","0","data-testid","input-health-rate","formControlName","health","min","0"],["matInput","","type","number","placeholder","0","data-testid","input-unemployment-rate","formControlName","unemployment","min","0"],["color","primary","data-testid","toggle-insurance-base-last-month","formControlName","insuranceBaseOnLastMonth",1,"ml-3","mb-2","mb-md-0",2,"align-self","center"]],template:function(n,a){if(n&1){let o=We();s(0,"mat-card",10)(1,"mat-card-header",11)(2,"mat-card-title"),u(3,"\u57FA\u7840\u4FE1\u606F"),l(),s(4,"div",12)(5,"mat-slide-toggle",13),Xr("ngModelChange",function(d){return Me(o),Kr(a.usePredefinedInsurancePercents,d)||(a.usePredefinedInsurancePercents=d),Ae(d)}),F("ngModelChange",function(d){return a.onChangePredefineCondition(d)}),u(6," \u9884\u5B9A\u4E49\u793E\u4FDD\u7F34\u7EB3\u53C2\u6570 "),l(),s(7,"mat-slide-toggle",14),Xr("ngModelChange",function(d){return Me(o),Kr(a.useUniformPolicy,d)||(a.useUniformPolicy=d),Ae(d)}),F("ngModelChange",function(d){return a.onUniformPolicyChange(d)}),u(8," \u5168\u5E74\u4F7F\u7528\u7EDF\u4E00\u57FA\u6570\u6807\u51C6 "),l(),s(9,"button",15),H(10,pF,1,2)(11,fF,1,0),s(12,"mat-icon"),u(13,"arrow_drop_down"),l()(),s(14,"mat-menu",null,0),pe(16,gF,2,3,"button",16,hF),V(18,"async"),l(),s(19,"mat-form-field",17)(20,"mat-label"),u(21,"\u8BA1\u7B97\u5E74\u4EFD"),l(),s(22,"mat-select",18),Xr("valueChange",function(d){return Me(o),Kr(a.selectedYear,d)||(a.selectedYear=d),Ae(d)}),F("selectionChange",function(d){return a.onYearChange(d.value)}),pe(23,_F,2,3,"mat-option",19,qt),l()(),s(25,"button",20),F("click",function(){return a.openPolicyParamsDialog()}),s(26,"mat-icon"),u(27,"menu_book"),l()()()(),s(28,"mat-card-content",21)(29,"form",22)(30,"div",23)(31,"mat-form-field",24)(32,"mat-label"),u(33,"\u6708\u85AA"),l(),D(34,"input",25),s(35,"span",26),u(36,"\u5143"),l()(),s(37,"mat-form-field",24)(38,"mat-label"),u(39,"\u5E74\u7EC8\u5956 (\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1)"),l(),D(40,"input",27),s(41,"span",26),u(42,"\u5143"),l(),s(43,"mat-hint"),u(44),l()(),s(45,"div",28)(46,"button",29),F("click",function(){return a.openOfferSplitDialog()}),s(47,"mat-icon"),u(48,"payments"),l(),s(49,"span"),u(50,"Offer \u603B\u5305\u62C6\u5206"),l()()()(),H(51,bF,9,1,"div",30),s(52,"div",31)(53,"mat-form-field",24)(54,"mat-label"),u(55,"\u4E0A\u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\u5DE5\u8D44"),l(),D(56,"input",32),s(57,"span",26),u(58,"\u5143"),l(),s(59,"mat-hint"),u(60,"\u7528\u4E8E1-6\u6708\u7F34\u8D39\u57FA\u6570\uFF0C0\u8868\u793A\u4F7F\u7528\u5F53\u524D\u6708\u85AA"),l()(),s(61,"mat-form-field",24)(62,"mat-label"),u(63,"\u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\u5DE5\u8D44"),l(),D(64,"input",33),s(65,"span",26),u(66,"\u5143"),l(),s(67,"mat-hint"),u(68,"\u7528\u4E8E7-12\u6708\u7F34\u8D39\u57FA\u6570\uFF0C0\u8868\u793A\u4F7F\u7528\u5F53\u524D\u6708\u85AA"),l()()(),H(69,vF,3,1,"div",34),s(70,"div",34)(71,"div")(72,"mat-form-field")(73,"mat-label"),u(74),l(),D(75,"input",35),s(76,"span",26),u(77,"\u5143"),l(),s(78,"mat-autocomplete",36,1)(80,"mat-option",19),u(81),l(),s(82,"mat-option",19),u(83),l(),s(84,"mat-option",19),u(85,"\u4E0D\u7F34\u7EB3\uFF1A0\u5143"),l()()()(),s(86,"div",37)(87,"mat-form-field")(88,"mat-label"),u(89),l(),D(90,"input",38),s(91,"span",26),u(92,"\u5143"),l(),s(93,"mat-autocomplete",36,2)(95,"mat-option",19),u(96),l(),s(97,"mat-option",19),u(98),l(),s(99,"mat-option",19),u(100,"\u4E0D\u7F34\u7EB3\uFF1A0\u5143"),l()()(),s(101,"mat-form-field",39)(102,"mat-label"),u(103,"\u516C\u79EF\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),D(104,"input",40),s(105,"span",26),u(106,"%"),l()()(),s(107,"div",41)(108,"mat-form-field")(109,"mat-label"),u(110),l(),D(111,"input",42),s(112,"span",26),u(113,"\u5143"),l(),s(114,"mat-autocomplete",36,3),pe(116,yF,2,3,"mat-option",19,ia),l()(),s(118,"mat-form-field",43)(119,"mat-label"),u(120),l(),D(121,"input",44),s(122,"span",26),u(123,"\u5143"),l(),s(124,"mat-autocomplete",36,4),pe(126,xF,2,3,"mat-option",19,ia),l()(),s(128,"mat-form-field",43)(129,"mat-label"),u(130),l(),D(131,"input",45),s(132,"span",26),u(133,"\u5143"),l(),s(134,"mat-autocomplete",36,5),pe(136,CF,2,3,"mat-option",19,ia),l()(),s(138,"mat-form-field",46)(139,"mat-label"),u(140,"\u5927\u75C5\u533B\u7597"),l(),D(141,"input",47),s(142,"span",26),u(143,"\u5143"),l()(),s(144,"mat-form-field",43)(145,"mat-label"),u(146),l(),s(147,"input",48),F("ngModelChange",function(d){return a.resetConflict(d,a.baseForm,a.templates.housingLoanInterest.conflictWith||"")}),l(),s(148,"span",26),u(149,"\u5143"),l(),s(150,"mat-autocomplete",36,6),pe(152,wF,2,3,"mat-option",19,ia),l()(),s(154,"mat-form-field",43)(155,"mat-label"),u(156),l(),s(157,"input",49),F("ngModelChange",function(d){return a.resetConflict(d,a.baseForm,a.templates.renting.conflictWith||"")}),l(),s(158,"span",26),u(159,"\u5143"),l(),s(160,"mat-autocomplete",36,7),pe(162,EF,2,3,"mat-option",19,ia),l()(),s(164,"mat-form-field",43)(165,"mat-label"),u(166),l(),D(167,"input",50),s(168,"span",26),u(169,"\u5143"),l(),s(170,"mat-autocomplete",36,8),pe(172,DF,2,3,"mat-option",19,ia),l()(),s(174,"mat-form-field",51)(175,"mat-label"),u(176,"\u4F01\u4E1A\u5E74\u91D1(\u4E2A\u4EBA4%\u9650\u989D)"),l(),D(177,"input",52),s(178,"span",26),u(179,"\u5143"),l()(),s(180,"mat-form-field",46)(181,"mat-label"),u(182,"\u4F01\u4E1A\u5E74\u91D1\u516C\u53F8\u7F34\u7EB3"),l(),D(183,"input",53),s(184,"span",26),u(185,"\u5143"),l()(),s(186,"mat-form-field",43)(187,"mat-label"),u(188),l(),D(189,"input",54),s(190,"span",26),u(191,"\u5143"),l(),s(192,"mat-autocomplete",36,9),pe(194,SF,2,3,"mat-option",19,ia),l()(),s(196,"mat-form-field",46)(197,"mat-label"),u(198,"\u5176\u4ED6\u6263\u9664\u9879"),l(),D(199,"input",55),s(200,"span",26),u(201,"\u5143"),l()()()(),s(202,"mat-expansion-panel",56)(203,"mat-expansion-panel-header")(204,"mat-panel-title",57)(205,"mat-icon",58),u(206,"school"),l(),s(207,"span"),u(208,"\u5E94\u5C4A\u6BD5\u4E1A\u751F / \u9996\u6B21\u5165\u804C & \u526F\u4E1A\u6240\u5F97\u7533\u62A5 (\u53EF\u9009)"),l()()(),s(209,"div",59)(210,"div",60)(211,"mat-slide-toggle",61),u(212," \u5F53\u5E74\u9996\u6B21\u53C2\u52A0\u5DE5\u4F5C / \u5E94\u5C4A\u6BD5\u4E1A\u751F "),l(),H(213,AF,8,2,"mat-form-field",62),l(),s(214,"div",63)(215,"div",64)(216,"mat-icon",65),u(217,"info"),l(),u(218," \u526F\u4E1A\u52B3\u52A1\u62A5\u916C\u4E0E\u7A3F\u916C\u6309\u7A0E\u6CD5\u5E76\u5165\u5E74\u5EA6\u7EFC\u5408\u6240\u5F97\u5408\u5E76\u6E05\u7B97 "),l(),s(219,"mat-form-field",66)(220,"mat-label"),u(221,"\u6708\u5747\u52B3\u52A1\u62A5\u916C\u6536\u5165"),l(),D(222,"input",67),s(223,"span",26),u(224,"\u5143/\u6708"),l(),s(225,"mat-hint"),u(226,"\u4EE5\u6536\u5165\u7684 80% \u8BA1\u5165\u5E94\u7A0E\u6240\u5F97"),l()(),s(227,"mat-form-field",68)(228,"mat-label"),u(229,"\u6708\u5747\u7A3F\u916C\u6240\u5F97\u6536\u5165"),l(),D(230,"input",69),s(231,"span",26),u(232,"\u5143/\u6708"),l(),s(233,"mat-hint"),u(234,"\u4EE5\u6536\u5165\u7684 56% (80%\xD770%) \u8BA1\u5165\u5E94\u7A0E\u6240\u5F97"),l()()()()(),H(235,FF,22,0,"div",34),l()(),s(236,"mat-card-actions",70)(237,"button",71),F("click",function(){return a.onCalculate()}),u(238," \u8BA1\u7B97 "),l(),s(239,"button",72),F("click",function(){return a.onReset()}),u(240," \u91CD\u7F6E "),l(),s(241,"button",73),F("click",function(){return a.onClearResult()}),u(242," \u6E05\u7A7A\u7ED3\u679C "),l()()()}if(n&2){let o,r=_e(15),d=_e(79),h=_e(94),p=_e(115),f=_e(125),g=_e(135),v=_e(151),x=_e(161),I=_e(171),b=_e(193);m(5),qr("ngModel",a.usePredefinedInsurancePercents),m(2),qr("ngModel",a.useUniformPolicy),m(2),_("matMenuTriggerFor",r),m(),U(a.cityRecipe?10:11),m(6),fe(K(18,66,a.recipeIndex$)),m(6),qr("value",a.selectedYear),m(),fe(a.availableYears),m(6),_("formGroup",a.baseForm),m(15),k("\u6BCF\u7EB3\u7A0E\u5E74\u5EA6\u9650\u7528\u4E00\u6B21 (\u5355\u72EC\u8BA1\u7A0E\u81F3 ",a.nonMergeTaxEndDate,")"),m(7),U(a.bonusTrapResult!=null&&a.bonusTrapResult.isTrap?51:-1),m(18),U(a.policyHint?69:-1),m(5),ee(a.templates.insuranceBase.label),m(),_("placeholder",a.templates.insuranceBase.placeholder)("matAutocomplete",d),m(5),_("value",a.baseForm.controls.monthSalary.value),m(),ot("\u5168\u989D\u7F34\u7EB3\uFF1A",a.baseForm.controls.monthSalary.value,"\u5143(\u4E0D\u8D85\u4E0A\u9650",a.currentInsuranceTop,"\u5143) "),m(),_("value",a.currentMinimumWage),m(),k("\u6700\u4F4E\u5DE5\u8D44\u6807\u51C6\uFF1A",a.currentMinimumWage,"\u5143"),m(),_("value",0),m(5),ee(a.templates.housingFundBase.label),m(),_("placeholder",a.templates.housingFundBase.placeholder)("matAutocomplete",h),m(5),_("value",a.baseForm.controls.monthSalary.value),m(),ot("\u5168\u989D\u7F34\u7EB3\uFF1A",a.baseForm.controls.monthSalary.value,"\u5143(\u4E0D\u8D85\u4E0A\u9650",a.currentHousingFundTop,"\u5143) "),m(),_("value",a.currentMinimumWage),m(),k("\u6700\u4F4E\u5DE5\u8D44\u6807\u51C6\uFF1A",a.currentMinimumWage,"\u5143"),m(),_("value",0),m(9),Be("width",a.templates.infantCare.width),m(2),ee(a.templates.infantCare.label),m(),_("placeholder",a.templates.infantCare.placeholder)("matAutocomplete",p),m(5),fe(a.infantCareDeductionOptions),m(2),Be("width",a.templates.childEducation.width),m(2),ee(a.templates.childEducation.label),m(),_("placeholder",a.templates.childEducation.placeholder)("matAutocomplete",f),m(5),fe(a.childEducationDeductionOptions),m(2),Be("width",a.templates.continuingEducation.width),m(2),ee(a.templates.continuingEducation.label),m(),_("placeholder",a.templates.continuingEducation.placeholder)("matAutocomplete",g),m(5),fe(a.continuousEducationDeductionOptions),m(8),Be("width",a.templates.housingLoanInterest.width),m(2),ee(a.templates.housingLoanInterest.label),m(),_("placeholder",a.templates.housingLoanInterest.placeholder)("matAutocomplete",v),m(5),fe(a.housingLoanInterestDeductionOptions),m(2),Be("width",a.templates.renting.width),m(2),ee(a.templates.renting.label),m(),_("placeholder",a.templates.renting.placeholder)("matAutocomplete",x),m(5),fe(a.rentingDeductionOptions),m(2),Be("width",a.templates.elderlyCare.width),m(2),ee(a.templates.elderlyCare.label),m(),_("placeholder",a.templates.elderlyCare.placeholder)("matAutocomplete",I),m(5),fe(a.elderlyCareDeductionOptions),m(14),Be("width",a.templates.privatePension.width),m(2),ee(a.templates.privatePension.label),m(),_("placeholder",a.templates.privatePension.placeholder)("matAutocomplete",b),m(5),fe(a.privatePensionOptions),m(19),U((o=a.baseForm.get("firstJobThisYear"))!=null&&o.value?213:-1),m(22),U(a.usePredefinedInsurancePercents?-1:235),m(2),_("disabled",a.baseForm.disabled||a.baseForm.invalid),m(2),_("disabled",a.baseForm.disabled)}},dependencies:[ze,ol,Ua,mi,$i,za,Ha,Wi,Md,Wa,gn,Gi,$a,yi,vi,H_,vo,yo,bo,Gt,Dn,_n,Yi,qi,Co,xo,Do,Eo,Nt,Yl,Ir,wt,Ot,pn,Et,Pt,Kl,ql,Tr,Xl,Rr,Or,nb,rb,Mo,Pr,ob,Ao,Lr,Ct,rn],styles:["mat-mdc-card-header[_ngcontent-%COMP%]{margin-bottom:1.25em}mat-mdc-card-header[_ngcontent-%COMP%]     .mat-mdc-card-header-text{margin-left:0}.city-list[_ngcontent-%COMP%]{width:10em}.mat-form-field-appearance-standard[_ngcontent-%COMP%]:first-child{margin-left:.5rem}"]})}}return t})();var Fb=(()=>{class t extends Mc{transform(e,n,a,o){let r=new Date;return r.setMonth(e),super.transform(r,"MMMM")}static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=Fe(t)))(a||t)}})()}static{this.\u0275pipe=Mi({name:"month",type:t,pure:!0})}}return t})();var kF=(t,i)=>i.fieldPath;function IF(t,i){if(t&1&&(s(0,"mat-list-item")(1,"div",4),u(2),l(),s(3,"div",5),u(4),l()()),t&2){let e=i.$implicit,n=w();m(2),k(" ",n.getFieldDisplayName(e.fieldPath)," "),m(2),k(" \u65B0\u503C\uFF1A",n.formatValue(e.value,e.fieldPath)," ")}}var kb=(()=>{class t{constructor(){this.dialogRef=c(mn),this.data=c(rr)}onCancel(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}getFieldDisplayName(e){return{monthSalary:"\u6708\u85AA",insuranceBase:"\u793E\u4FDD\u57FA\u6570",housingFundBase:"\u516C\u79EF\u91D1\u57FA\u6570",housingFundRate:"\u516C\u79EF\u91D1\u7F34\u7EB3\u6BD4\u4F8B","insuranceRate.endowment":"\u517B\u8001\u4FDD\u9669\u7F34\u7EB3\u6BD4\u4F8B","insuranceRate.health":"\u533B\u7597\u4FDD\u9669\u7F34\u7EB3\u6BD4\u4F8B","insuranceRate.unemployment":"\u5931\u4E1A\u4FDD\u9669\u7F34\u7EB3\u6BD4\u4F8B","extraDeduction.childEducation":"\u5B50\u5973\u6559\u80B2\u4E13\u9879\u6263\u9664","extraDeduction.continuingEducation":"\u7EE7\u7EED\u6559\u80B2\u4E13\u9879\u6263\u9664","extraDeduction.seriousMedicalExpense":"\u5927\u75C5\u533B\u7597\u4E13\u9879\u6263\u9664","extraDeduction.housingLoanInterest":"\u4F4F\u623F\u8D37\u6B3E\u5229\u606F\u4E13\u9879\u6263\u9664","extraDeduction.renting":"\u4F4F\u623F\u79DF\u91D1\u4E13\u9879\u6263\u9664","extraDeduction.elderlyCare":"\u8D61\u517B\u8001\u4EBA\u4E13\u9879\u6263\u9664","extraDeduction.enterprisePensionFromEmployee":"\u4F01\u4E1A\u5E74\u91D1\u4E2A\u4EBA\u7F34\u7EB3","extraDeduction.enterprisePensionFromEmployer":"\u4F01\u4E1A\u5E74\u91D1\u4F01\u4E1A\u7F34\u7EB3","extraDeduction.other":"\u5176\u4ED6\u6263\u9664\u9879"}[e]||e}formatValue(e,n){return typeof e=="number"?n&&n.includes("Rate")?`${e}%`:`${e}\u5143`:String(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-sync-confirmation-dialog"]],decls:13,vars:1,consts:[["mat-dialog-title","","data-testid","sync-dialog-title"],["align","end"],["mat-button","","data-testid","btn-sync-cancel",3,"click"],["mat-button","","color","primary","data-testid","btn-sync-confirm",3,"click"],["matListItemTitle",""],["matListItemLine",""]],template:function(n,a){n&1&&(s(0,"h2",0),u(1,"\u540C\u6B65\u786E\u8BA4"),l(),s(2,"mat-dialog-content")(3,"p"),u(4),l(),s(5,"mat-list"),pe(6,IF,5,2,"mat-list-item",null,kF),l()(),s(8,"mat-dialog-actions",1)(9,"button",2),F("click",function(){return a.onCancel()}),u(10," \u53D6\u6D88 "),l(),s(11,"button",3),F("click",function(){return a.onConfirm()}),u(12," \u786E\u8BA4\u540C\u6B65 "),l()()),n&2&&(m(4),k(" \u60A8\u4FEE\u6539\u4E86\u7B2C",a.data.monthIndex+1,"\u6708\u7684\u6570\u636E\uFF0C\u662F\u5426\u8981\u5C06\u4EE5\u4E0B\u53D8\u66F4\u540C\u6B65\u5230\u540E\u7EED\u6708\u4EFD\uFF1F "),m(2),fe(a.data.changedFields))},dependencies:[ze,Ct,si,Ra,li,xi,tc,Fo,na,ta,wt,Ot],styles:["mat-dialog-content[_ngcontent-%COMP%]{min-width:300px}"]})}}return t})();var TF=(t,i,e)=>({form:t,income:i,index:e}),RF=(t,i)=>i.id,aa=(t,i)=>i.label;function OF(t,i){if(t&1&&ha(0,13),t&2){let e=w(),n=e.$implicit,a=e.$index,o=w(2),r=_e(3);_("ngTemplateOutlet",r)("ngTemplateOutletContext",Nu(2,TF,o.detailForms[a],n,a))}}function PF(t,i){if(t&1){let e=We();s(0,"mat-expansion-panel",12,1),F("opened",function(){let a=Me(e).$index,o=w(2);return Ae(o.onChangeChartMonth(a))}),s(2,"mat-expansion-panel-header"),u(3),V(4,"month"),V(5,"currency"),V(6,"currency"),V(7,"currency"),V(8,"currency"),l(),H(9,OF,1,6,"ng-container",13),l()}if(t&2){let e=i.$implicit,n=i.$index,a=w(2);A("data-testid","month-panel-"+(n+1)),m(2),A("data-testid","month-panel-header-"+(n+1)),m(),Io(" ",K(4,8,e.actualMonth-1)," \u5B9E\u6536\uFF1A ",K(5,10,e.cashIncome),"\uFF0C\u516C\u79EF\u91D1\uFF1A",K(6,12,e.housingFund*2)," \uFF0C\u4E2A\u7A0E\uFF1A",K(7,14,e.tax),"\uFF0C\u516C\u53F8\u6210\u672C\uFF1A",K(8,16,e.employerCosts.full)," "),m(6),U(a.detailForms[n]?9:-1)}}function LF(t,i){if(t&1){let e=We();s(0,"div")(1,"mat-accordion",11),F("animationend",function(){Me(e);let a=w();return Ae(a.scrollToChart())}),pe(2,PF,10,18,"mat-expansion-panel",null,RF),l()()}if(t&2){let e=i;m(),_("@listAnimation",e.length),m(),fe(e)}}function BF(t,i){if(t&1&&(s(0,"mat-option",24),u(1),l()),t&2){let e=w(2).form;_("value",e.controls.yearBeforeLastAvgSalary==null?null:e.controls.yearBeforeLastAvgSalary.value),m(),k(" \u4E0A\u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\uFF1A",e.controls.yearBeforeLastAvgSalary==null?null:e.controls.yearBeforeLastAvgSalary.value,"\u5143 ")}}function NF(t,i){if(t&1&&(s(0,"mat-option",24),u(1),l()),t&2){let e=w(2).form;_("value",e.controls.lastYearAvgSalary==null?null:e.controls.lastYearAvgSalary.value),m(),k(" \u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\uFF1A",e.controls.lastYearAvgSalary==null?null:e.controls.lastYearAvgSalary.value,"\u5143 ")}}function VF(t,i){if(t&1&&(s(0,"mat-option",24),u(1),l()),t&2){let e=w(2).form;_("value",e.controls.yearBeforeLastAvgSalary==null?null:e.controls.yearBeforeLastAvgSalary.value),m(),k(" \u4E0A\u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\uFF1A",e.controls.yearBeforeLastAvgSalary==null?null:e.controls.yearBeforeLastAvgSalary.value,"\u5143 ")}}function jF(t,i){if(t&1&&(s(0,"mat-option",24),u(1),l()),t&2){let e=w(2).form;_("value",e.controls.lastYearAvgSalary==null?null:e.controls.lastYearAvgSalary.value),m(),k(" \u4E0A\u5E74\u5EA6\u6708\u5E73\u5747\uFF1A",e.controls.lastYearAvgSalary==null?null:e.controls.lastYearAvgSalary.value,"\u5143 ")}}function zF(t,i){if(t&1&&(s(0,"mat-option",24),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),ee(e.label)}}function HF(t,i){if(t&1&&(s(0,"mat-option",24),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),ee(e.label)}}function UF(t,i){if(t&1&&(s(0,"mat-option",24),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),ee(e.label)}}function $F(t,i){if(t&1&&(s(0,"mat-option",24),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),ee(e.label)}}function GF(t,i){if(t&1&&(s(0,"mat-option",24),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),ee(e.label)}}function WF(t,i){if(t&1&&(s(0,"mat-option",24),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),ee(e.label)}}function YF(t,i){if(t&1&&(s(0,"mat-option",24),u(1),l()),t&2){let e=i.$implicit;_("value",e.value),m(),ee(e.label)}}function qF(t,i){if(t&1){let e=We();s(0,"form",14)(1,"div",15)(2,"mat-form-field")(3,"mat-label"),u(4,"\u6708\u85AA"),l(),D(5,"input",16),s(6,"span",17),u(7,"\u5143"),l()(),s(8,"mat-form-field",18)(9,"mat-label"),u(10,"\u6708\u5EA6\u5956\u91D1"),l(),D(11,"input",19),s(12,"span",17),u(13,"\u5143"),l()(),s(14,"mat-slide-toggle",20),u(15," \u5165\u804C\u65B0\u516C\u53F8\uFF08\u65B0\u8BA1\u8D39\u5468\u671F\uFF09\uFF1F "),l()(),s(16,"div",21)(17,"mat-form-field")(18,"mat-label"),u(19),l(),D(20,"input",22),s(21,"span",17),u(22,"\u5143"),l(),s(23,"mat-autocomplete",23,2)(25,"mat-option",24),u(26),l(),H(27,BF,2,2,"mat-option",24),H(28,NF,2,2,"mat-option",24),s(29,"mat-option",24),u(30),l(),s(31,"mat-option",24),u(32,"\u4E0D\u7F34\u7EB3\uFF1A0\u5143"),l()()(),s(33,"div",25)(34,"mat-form-field",26)(35,"mat-label"),u(36,"\u517B\u8001\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),D(37,"input",27),s(38,"span",17),u(39,"%"),l()(),s(40,"mat-form-field",28)(41,"mat-label"),u(42,"\u533B\u7597\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),D(43,"input",29),s(44,"span",17),u(45,"%"),l()(),s(46,"mat-form-field",28)(47,"mat-label"),u(48,"\u5931\u4E1A\u4FDD\u9669\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),D(49,"input",30),s(50,"span",17),u(51,"%"),l()()()(),s(52,"div",21)(53,"mat-form-field")(54,"mat-label"),u(55),l(),D(56,"input",31),s(57,"span",17),u(58,"\u5143"),l(),s(59,"mat-autocomplete",23,3)(61,"mat-option",24),u(62),l(),H(63,VF,2,2,"mat-option",24),H(64,jF,2,2,"mat-option",24),s(65,"mat-option",24),u(66),l(),s(67,"mat-option",24),u(68,"\u4E0D\u7F34\u7EB3\uFF1A0\u5143"),l()()(),s(69,"mat-form-field",28)(70,"mat-label"),u(71,"\u516C\u79EF\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u6BD4\u4F8B"),l(),D(72,"input",32),s(73,"span",17),u(74,"%"),l()()(),s(75,"div",33)(76,"mat-form-field")(77,"mat-label"),u(78),l(),D(79,"input",34),s(80,"mat-autocomplete",35,4),pe(82,zF,2,2,"mat-option",24,aa),l(),s(84,"span",17),u(85,"\u5143"),l()(),s(86,"mat-form-field",18)(87,"mat-label"),u(88),l(),D(89,"input",36),s(90,"mat-autocomplete",35,5),pe(92,HF,2,2,"mat-option",24,aa),l(),s(94,"span",17),u(95,"\u5143"),l()(),s(96,"mat-form-field",18)(97,"mat-label"),u(98),l(),D(99,"input",37),s(100,"mat-autocomplete",35,6),pe(102,UF,2,2,"mat-option",24,aa),l(),s(104,"span",17),u(105,"\u5143"),l()(),s(106,"mat-form-field",28)(107,"mat-label"),u(108),l(),D(109,"input",38),s(110,"span",17),u(111,"\u5143"),l()(),s(112,"mat-form-field",18)(113,"mat-label"),u(114),l(),s(115,"input",39),F("ngModelChange",function(a){Me(e);let o=w().form,r=w();return Ae(r.resetConflict(a,o,r.templates.housingLoanInterest.conflictWith||""))}),l(),s(116,"mat-autocomplete",35,7),pe(118,$F,2,2,"mat-option",24,aa),l(),s(120,"span",17),u(121,"\u5143"),l()(),s(122,"mat-form-field",18)(123,"mat-label"),u(124),l(),s(125,"input",40),F("ngModelChange",function(a){Me(e);let o=w().form,r=w();return Ae(r.resetConflict(a,o,r.templates.renting.conflictWith||""))}),l(),s(126,"mat-autocomplete",35,8),pe(128,GF,2,2,"mat-option",24,aa),l(),s(130,"span",17),u(131,"\u5143"),l()(),s(132,"mat-form-field",18)(133,"mat-label"),u(134),l(),D(135,"input",41),s(136,"mat-autocomplete",35,9),pe(138,WF,2,2,"mat-option",24,aa),l(),s(140,"span",17),u(141,"\u5143"),l()(),s(142,"mat-form-field",42)(143,"mat-label"),u(144,"\u4F01\u4E1A\u5E74\u91D1(\u4E2A\u4EBA4%\u9650\u989D)"),l(),D(145,"input",43),s(146,"span",17),u(147,"\u5143"),l()(),s(148,"mat-form-field",28)(149,"mat-label"),u(150,"\u4F01\u4E1A\u5E74\u91D1\u516C\u53F8\u7F34\u7EB3"),l(),D(151,"input",44),s(152,"span",17),u(153,"\u5143"),l()(),s(154,"mat-form-field",18)(155,"mat-label"),u(156),l(),D(157,"input",45),s(158,"mat-autocomplete",35,10),pe(160,YF,2,2,"mat-option",24,aa),l(),s(162,"span",17),u(163,"\u5143"),l()(),s(164,"mat-form-field",28)(165,"mat-label"),u(166,"\u5176\u4ED6\u6263\u9664\u9879"),l(),D(167,"input",46),s(168,"span",17),u(169,"\u5143"),l()()(),s(170,"p"),u(171),V(172,"number"),V(173,"number"),V(174,"number"),V(175,"number"),l(),s(176,"p"),u(177),V(178,"number"),V(179,"number"),V(180,"number"),V(181,"number"),V(182,"number"),V(183,"number"),l(),s(184,"p"),u(185),V(186,"number"),V(187,"number"),V(188,"number"),V(189,"number"),V(190,"number"),l(),s(191,"div",47)(192,"button",48),F("click",function(){Me(e);let a=w(),o=a.form,r=a.index,d=w();return Ae(d.onUpdateMeta(o.value,r))}),u(193," \u66F4\u65B0 "),l()()()}if(t&2){let e=_e(24),n=_e(60),a=_e(81),o=_e(91),r=_e(101),d=_e(117),h=_e(127),p=_e(137),f=_e(159),g=w(),v=g.form,x=g.income,I=g.index,b=w();_("formGroup",v),m(5),A("data-testid","input-monthly-salary-"+(I+1)),m(6),A("data-testid","input-monthly-bonus-"+(I+1)),m(3),A("data-testid","toggle-new-pay-cycle-"+(I+1)),m(5),ee(b.templates.insuranceBase.label),m(),_("placeholder",b.templates.insuranceBase.placeholder)("matAutocomplete",e),m(5),_("value",v.controls.monthSalary==null?null:v.controls.monthSalary.value),m(),ot("\u5F53\u524D\u6708\u85AA\uFF1A",v.controls.monthSalary==null?null:v.controls.monthSalary.value,"\u5143(\u4E0D\u8D85\u4E0A\u9650",b.getInsuranceTopForMonth(I+1),"\u5143) "),m(),U((v.controls.yearBeforeLastAvgSalary==null?null:v.controls.yearBeforeLastAvgSalary.value)>0?27:-1),m(),U((v.controls.lastYearAvgSalary==null?null:v.controls.lastYearAvgSalary.value)>0?28:-1),m(),_("value",b.getMinimumWageForMonth(I+1)),m(),k("\u6700\u4F4E\u5DE5\u8D44\u6807\u51C6\uFF1A",b.getMinimumWageForMonth(I+1),"\u5143"),m(),_("value",0),m(24),ee(b.templates.housingFundBase.label),m(),_("placeholder",b.templates.housingFundBase.placeholder)("matAutocomplete",n),m(5),_("value",v.controls.monthSalary==null?null:v.controls.monthSalary.value),m(),ot("\u5F53\u524D\u6708\u85AA\uFF1A",v.controls.monthSalary==null?null:v.controls.monthSalary.value,"\u5143(\u4E0D\u8D85\u4E0A\u9650",b.getHousingFundTopForMonth(I+1),"\u5143) "),m(),U((v.controls.yearBeforeLastAvgSalary==null?null:v.controls.yearBeforeLastAvgSalary.value)>0?63:-1),m(),U((v.controls.lastYearAvgSalary==null?null:v.controls.lastYearAvgSalary.value)>0?64:-1),m(),_("value",b.getMinimumWageForMonth(I+1)),m(),k("\u6700\u4F4E\u5DE5\u8D44\u6807\u51C6\uFF1A",b.getMinimumWageForMonth(I+1),"\u5143"),m(),_("value",0),m(9),Be("width",b.templates.infantCare.width),m(2),ot("",b.templates.infantCare.label,"",b.labelSuffix),m(),_("placeholder",b.templates.infantCare.placeholder)("matAutocomplete",a),m(3),fe(b.templates.infantCare.options),m(4),Be("width",b.templates.childEducation.width),m(2),ot("",b.templates.childEducation.label,"",b.labelSuffix),m(),_("placeholder",b.templates.childEducation.placeholder)("matAutocomplete",o),m(3),fe(b.templates.childEducation.options),m(4),Be("width",b.templates.continuingEducation.width),m(2),ot("",b.templates.continuingEducation.label,"",b.labelSuffix),m(),_("placeholder",b.templates.continuingEducation.placeholder)("matAutocomplete",r),m(3),fe(b.templates.continuingEducation.options),m(6),k("\u5927\u75C5\u533B\u7597(\u6C47\u7B97)",b.labelSuffix),m(4),Be("width",b.templates.housingLoanInterest.width),m(2),ot("",b.templates.housingLoanInterest.label,"",b.labelSuffix),m(),_("placeholder",b.templates.housingLoanInterest.placeholder)("matAutocomplete",d),m(3),fe(b.templates.housingLoanInterest.options),m(4),Be("width",b.templates.renting.width),m(2),ot("",b.templates.renting.label,"",b.labelSuffix),m(),_("placeholder",b.templates.renting.placeholder)("matAutocomplete",h),m(3),fe(b.templates.renting.options),m(4),Be("width",b.templates.elderlyCare.width),m(2),ot("",b.templates.elderlyCare.label,"",b.labelSuffix),m(),_("placeholder",b.templates.elderlyCare.placeholder)("matAutocomplete",p),m(3),fe(b.templates.elderlyCare.options),m(16),Be("width",b.templates.privatePension.width),m(2),ot("",b.templates.privatePension.label,"",b.labelSuffix),m(),_("placeholder",b.templates.privatePension.placeholder)("matAutocomplete",f),m(3),fe(b.templates.privatePension.options),m(11),Bu(" \u4E2A\u4EBA\u4E09\u9669\u603B\u8D39\uFF1A",bt(172,86,x.insuranceFullCost,"0.0-3"),"\uFF0C \u793E\u4FDD\uFF1A",bt(173,89,x.insuranceCosts.endowment,"0.0-3"),"\uFF0C \u533B\u4FDD\uFF1A",bt(174,92,x.insuranceCosts.health,"0.0-3"),"\uFF0C \u5931\u4E1A\uFF1A",bt(175,95,x.insuranceCosts.unemployment,"0.0-3")," "),m(6),To(" \u516C\u53F8\u4E94\u9669\u603B\u8D39\uFF1A",bt(178,98,x.employerCosts.insuranceFull,"0.0-3"),"\uFF0C \u793E\u4FDD\uFF1A",bt(179,101,x.employerCosts.insurance.endowment,"0.0-3"),"\uFF0C \u533B\u4FDD\uFF1A",bt(180,104,x.employerCosts.insurance.health,"0.0-3"),"\uFF0C \u5931\u4E1A\uFF1A",bt(181,107,x.employerCosts.insurance.unemployment,"0.0-3"),"\uFF0C \u5DE5\u4F24\uFF1A",bt(182,110,x.employerCosts.insurance.occupationalInjury,"0.0-3"),"\uFF0C \u751F\u80B2\uFF1A",bt(183,113,x.employerCosts.insurance.birth,"0.0-3")," "),m(8),Io(" \u7D2F\u8BA1\u7A0E\u524D\u6536\u5165\uFF1A",bt(186,116,x.accumulatedSalary,"0.0-2"),"\u5143\uFF0C \u7D2F\u8BA1\u6263\u9664\uFF1A",bt(187,119,x.accumulatedDeduction,"0.0-2"),"\u5143\uFF0C \u7D2F\u8BA1\u4E13\u9879\u9644\u52A0\u6263\u9664\uFF1A",bt(188,122,x.accumulatedSpecialDeduction,"0.0-2"),"\u5143\uFF0C \u7D2F\u8BA1\u5176\u4ED6\u6263\u9664\uFF1A",bt(189,125,x.accumulatedExtraDeduction,"0.0-2"),"\u5143\uFF0C \u5E94\u7EB3\u7A0E\u6240\u5F97\u989D\uFF1A",bt(190,128,x.accumulatedSalary-x.accumulatedDeduction-x.accumulatedSpecialDeduction-x.accumulatedExtraDeduction,"0.0-2"),"\u5143 "),m(7),_("disabled",v.invalid),A("data-testid","btn-update-month-"+(I+1))}}function KF(t,i){if(t&1&&H(0,qF,194,131,"form",14),t&2){let e=i.form;U(e?0:-1)}}var Ib=(()=>{class t{constructor(){this.templates=Zl,this.labelSuffix=db,this.cityRecipe=null,this.updateMeta=new R,this.changeChartMonth=new R,this.detailForms=[],this.previousValues=[],this.fb=c(Ga),this.dialog=c(hn),this.trackIncome=(e,n)=>n.actualMonth}ngOnInit(){this.monthlyMetas$.subscribe(e=>{e&&e.length>0?this.detailForms=this.buildDetailForms(e,this.cityRecipe):this.detailForms=[]})}getInsuranceTopForMonth(e){if(this.cityRecipe?.policies&&this.calculationYear){let n=ea(this.cityRecipe,this.calculationYear,e);if(n)return Array.isArray(n.insuranceBaseRange)?n.insuranceBaseRange[1]:n.insuranceBaseRange.endowment[1]}return 0}getHousingFundTopForMonth(e){if(this.cityRecipe?.policies&&this.calculationYear){let n=ea(this.cityRecipe,this.calculationYear,e);if(n)return n.housingFundBaseRange[1]}return 0}getMinimumWageForMonth(e){if(this.cityRecipe?.policies&&this.calculationYear){let n=ea(this.cityRecipe,this.calculationYear,e);if(n)return n.minimumWage}return 0}onUpdateMeta(e,n){this.detectChangesAndSync(this.detailForms[n],n),this.updateMeta.emit({meta:e,index:n})}detectChangesAndSync(e,n){let a=e.value,o=this.previousValues[n]||{},r=this.getChangedFields(a,o);if(r.length>0&&n<this.detailForms.length-1){let d=r.map(h=>({fieldPath:h,value:this.getNestedValue(a,h)}));this.showBatchSyncConfirmation(n,d)}this.previousValues[n]=JSON.parse(JSON.stringify(a))}getChangedFields(e,n,a=""){let o=[];for(let r in e){let d=a?`${a}.${r}`:r;typeof e[r]=="object"&&e[r]!==null&&!Array.isArray(e[r])?o.push(...this.getChangedFields(e[r],n[r]||{},d)):e[r]!==n[r]&&(this.shouldExcludeFromSync(d)||o.push(d))}return o}shouldExcludeFromSync(e){return["monthlyBonus","newPayCycle"].includes(e)}getNestedValue(e,n){return n.split(".").reduce((a,o)=>a?.[o],e)}setNestedValue(e,n,a){let o=n.split("."),r=o.pop(),d=o.reduce((h,p)=>(h[p]||(h[p]={}),h[p]),e);d[r]=a}showBatchSyncConfirmation(e,n){this.dialog.open(kb,{width:"500px",data:{monthIndex:e,changedFields:n}}).afterClosed().subscribe(o=>{o&&n.forEach(({fieldPath:r,value:d})=>{this.syncToSubsequentMonths(e,r,d)})})}syncToSubsequentMonths(e,n,a){for(let o=e+1;o<this.detailForms.length;o++){let r=this.detailForms[o],d=this.getFormControl(r,n);if(d){d.setValue(a,{emitEvent:!1}),this.previousValues[o]||(this.previousValues[o]={}),this.setNestedValue(this.previousValues[o],n,a);let h=r.value;this.onUpdateMeta(h,o)}}}getFormControl(e,n){let a=n.split("."),o=e;for(let r of a)if(o=o.get(r),!o)break;return o}onChangeChartMonth(e){this.changeChartMonth.emit(e+1)}scrollToChart(){this.scroll$.next()}resetConflict(e,n,a){e>0&&n.get(a)?.setValue(0)}buildDetailForms(e,n){return e.map((o,r)=>{let d=r+1,h=null;n?.policies&&this.calculationYear&&(h=ea(n,this.calculationYear,d));let p=this.fb.group({monthSalary:[o.salary,Z.required],monthlyBonus:[0,Z.required],newPayCycle:[o.newPayCycle],insuranceBase:[o.insuranceBase,Z.required],lastYearAvgSalary:[o.lastYearAvgSalary||0],yearBeforeLastAvgSalary:[o.yearBeforeLastAvgSalary||0],insuranceRate:this.fb.group({endowment:[(h?.employee.insuranceRate?.endowment??o.insuranceRate.endowment)*100,Z.required],health:[(h?.employee.insuranceRate?.health??o.insuranceRate.health)*100,Z.required],unemployment:[(h?.employee.insuranceRate?.unemployment??o.insuranceRate.unemployment)*100,Z.required]}),housingFundBase:[o.housingFundBase,Z.required],housingFundRate:[o.housingFundRate*100,Z.required],extraDeduction:this.fb.group({infantCare:[o.extraDeduction.infantCare||0,Z.required],childEducation:[o.extraDeduction.childEducation,Z.required],continuingEducation:[o.extraDeduction.continuingEducation,Z.required],seriousMedicalExpense:[o.extraDeduction.seriousMedicalExpense,Z.required],housingLoanInterest:[o.extraDeduction.housingLoanInterest,Z.required],renting:[o.extraDeduction.renting,Z.required],elderlyCare:[o.extraDeduction.elderlyCare,Z.required],enterprisePensionFromEmployee:[o.extraDeduction.enterprisePensionFromEmployee,Z.required],enterprisePensionFromEmployer:[o.extraDeduction.enterprisePensionFromEmployer,Z.required],privatePension:[o.extraDeduction.privatePension||0,Z.required],other:[o.extraDeduction.other,Z.required]})});return p.get("extraDeduction.enterprisePensionFromEmployee")?.valueChanges.subscribe(f=>{p.get("extraDeduction.enterprisePensionFromEmployer")?.setValue(f||0,{emitEvent:!1})}),this.previousValues[r]=JSON.parse(JSON.stringify(p.value)),p})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-monthly-results"]],inputs:{clear:"clear",monthlyIncomes$:"monthlyIncomes$",monthlyMetas$:"monthlyMetas$",cityRecipe:"cityRecipe",calculationYear:"calculationYear",scroll$:"scroll$"},outputs:{updateMeta:"updateMeta",changeChartMonth:"changeChartMonth"},decls:4,vars:3,consts:[["detailForm",""],["panel",""],["insuranceBase2","matAutocomplete"],["housingFundBase2","matAutocomplete"],["infantCare","matAutocomplete"],["childEducation","matAutocomplete"],["continuingEducation","matAutocomplete"],["housingLoanInterest","matAutocomplete"],["renting","matAutocomplete"],["elderlyCare","matAutocomplete"],["privatePension","matAutocomplete"],["data-testid","monthly-results-accordion",3,"animationend"],[3,"opened"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","flex-column",3,"formGroup"],[1,"ml-md-3","d-flex","flex-wrap","align-items-center"],["matInput","","type","number","placeholder","10000","formControlName","monthSalary","min","0"],["matTextSuffix",""],[1,"ml-3"],["matInput","","type","number","placeholder","0","formControlName","monthlyBonus","min","0"],["formControlName","newPayCycle",1,"ml-3"],[1,"ml-md-3","d-flex","flex-wrap"],["matInput","","type","number","formControlName","insuranceBase","min","0",3,"placeholder","matAutocomplete"],["panelWidth","250"],[3,"value"],["formGroupName","insuranceRate",1,"ml-3"],[2,"width","120px"],["matInput","","type","number","placeholder","0","formControlName","endowment","min","0"],[1,"ml-3",2,"width","120px"],["matInput","","type","number","placeholder","0","formControlName","health","min","0"],["matInput","","type","number","placeholder","0","formControlName","unemployment","min","0"],["matInput","","type","number","formControlName","housingFundBase","min","0",3,"placeholder","matAutocomplete"],["matInput","","type","number","placeholder","0","formControlName","housingFundRate","min","0"],["formGroupName","extraDeduction",1,"ml-md-3","d-flex","flex-wrap"],["matInput","","type","number","formControlName","infantCare","min","0",3,"placeholder","matAutocomplete"],["panelWidth","200"],["matInput","","type","number","formControlName","childEducation","min","0",3,"placeholder","matAutocomplete"],["matInput","","type","number","formControlName","continuingEducation","min","0",3,"placeholder","matAutocomplete"],["matInput","","type","number","placeholder","0","formControlName","seriousMedicalExpense","min","0","matTooltip","\u5927\u75C5\u533B\u7597\u4F9D\u6CD5\u5728\u6B21\u5E74\u6C47\u7B97\u6E05\u7F34\u65F6\u636E\u5B9E\u6263\u9664","matTooltipPosition","above"],["matInput","","type","number","formControlName","housingLoanInterest","min","0",3,"ngModelChange","placeholder","matAutocomplete"],["matInput","","type","number","formControlName","renting","min","0",3,"ngModelChange","placeholder","matAutocomplete"],["matInput","","type","number","formControlName","elderlyCare","min","0",3,"placeholder","matAutocomplete"],[1,"ml-3",2,"width","140px"],["matInput","","type","number","placeholder","0","formControlName","enterprisePensionFromEmployee","min","0","matTooltip","\u6CD5\u5B9A\u7A0E\u524D\u6263\u9664\u9650\u989D\u4E3A\u672C\u4EBA\u6708\u85AA4%\u4E14\u4E0D\u8D85\u793E\u5E733\u500D","matTooltipPosition","above"],["matInput","","type","number","placeholder","0","formControlName","enterprisePensionFromEmployer","min","0"],["matInput","","type","number","formControlName","privatePension","min","0","matTooltip","\u6BCF\u5E74\u9650\u989D12000\u5143(\u6BCF\u67081000\u5143)\u7A0E\u524D\u636E\u5B9E\u6263\u9664","matTooltipPosition","above",3,"placeholder","matAutocomplete"],["matInput","","type","number","placeholder","0","formControlName","other","min","0"],[1,"mr-3","d-flex","justify-content-end"],["mat-raised-button","","color","primary","type","submit",3,"click","disabled"]],template:function(n,a){if(n&1&&(H(0,LF,4,1,"div"),V(1,"async"),Ie(2,KF,1,1,"ng-template",null,0,Ai)),n&2){let o;U((o=!a.clear&&K(1,1,a.monthlyIncomes$))?0:-1,o)}},dependencies:[ze,Fi,ol,Ua,mi,$i,za,Ha,Wi,Wa,gn,Gi,$a,Xl,ib,Rr,Or,Gt,Dn,_n,qi,Co,xo,wt,Ot,Et,Yl,Ir,Kl,ql,Nt,Tr,xi,Ct,rn,Ac,ki,Fb],styles:["@media(max-width:991.98px){.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{transition:.15s ease-in-out}.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]{font-size:.8em}}"],data:{animation:[uc("listAnimation",[hc("* <=> *",[pc(":enter",[Jr({opacity:0,transform:"translateX(-20%)"}),fc(100,[mc(300,Jr({opacity:1,transform:"translateX(0)"}))])],{optional:!0})])])]}})}}return t})();function XF(t){t||(t=c(Wt));let i=new Ze(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(Ee(i))}var Xd=class{source;destroyed=!1;destroyRef=c(Wt);constructor(i){this.source=i,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}subscribe(i){if(this.destroyed)throw new ce(953,!1);let e=this.source.pipe(XF(this.destroyRef)).subscribe({next:n=>i(n)});return{unsubscribe:()=>e.unsubscribe()}}};function ue(t,i){return new Xd(t)}function Tb(t){let i=ju(t);return new Ze(e=>{let n=i?.onDestroy(()=>e.complete()),a=t.subscribe(o=>e.next(o));return()=>{a.unsubscribe(),n?.()}})}var Rb=new y("NGX_ECHARTS_CONFIG"),Qd=class{constructor(){this.subject=new Ci(1),this.subscriptions=new he}doFilter(i){this.subject.next(i)}dispose(){this.subscriptions.unsubscribe()}notEmpty(i,e){this.subscriptions.add(this.subject.subscribe(n=>{if(n[i]){let a=n[i].currentValue;a!=null&&e(a)}}))}has(i,e){this.subscriptions.add(this.subject.subscribe(n=>{if(n[i]){let a=n[i].currentValue;e(a)}}))}notFirst(i,e){this.subscriptions.add(this.subject.subscribe(n=>{if(n[i]&&!n[i].isFirstChange()){let a=n[i].currentValue;e(a)}}))}notFirstAndEmpty(i,e){this.subscriptions.add(this.subject.subscribe(n=>{if(n[i]&&!n[i].isFirstChange()){let a=n[i].currentValue;a!=null&&e(a)}}))}},Ob=(()=>{class t{constructor(){this.el=c(O),this.ngZone=c(W),this.config=c(Rb),this.options=In(null),this.theme=In(this.config.theme??null),this.initOpts=In(null),this.merge=In(null),this.autoResize=In(!0),this.loading=In(!1),this.loadingType=In("default"),this.loadingOpts=In(null),this.chartInit=dc(),this.optionsError=dc(),this.chartClick=ue(this.createLazyEvent("click")),this.chartDblClick=ue(this.createLazyEvent("dblclick")),this.chartMouseDown=ue(this.createLazyEvent("mousedown")),this.chartMouseMove=ue(this.createLazyEvent("mousemove")),this.chartMouseUp=ue(this.createLazyEvent("mouseup")),this.chartMouseOver=ue(this.createLazyEvent("mouseover")),this.chartMouseOut=ue(this.createLazyEvent("mouseout")),this.chartGlobalOut=ue(this.createLazyEvent("globalout")),this.chartContextMenu=ue(this.createLazyEvent("contextmenu")),this.chartHighlight=ue(this.createLazyEvent("highlight")),this.chartDownplay=ue(this.createLazyEvent("downplay")),this.chartSelectChanged=ue(this.createLazyEvent("selectchanged")),this.chartLegendSelectChanged=ue(this.createLazyEvent("legendselectchanged")),this.chartLegendSelected=ue(this.createLazyEvent("legendselected")),this.chartLegendUnselected=ue(this.createLazyEvent("legendunselected")),this.chartLegendLegendSelectAll=ue(this.createLazyEvent("legendselectall")),this.chartLegendLegendInverseSelect=ue(this.createLazyEvent("legendinverseselect")),this.chartLegendScroll=ue(this.createLazyEvent("legendscroll")),this.chartDataZoom=ue(this.createLazyEvent("datazoom")),this.chartDataRangeSelected=ue(this.createLazyEvent("datarangeselected")),this.chartGraphRoam=ue(this.createLazyEvent("graphroam")),this.chartGeoRoam=ue(this.createLazyEvent("georoam")),this.chartTreeRoam=ue(this.createLazyEvent("treeroam")),this.chartTimelineChanged=ue(this.createLazyEvent("timelinechanged")),this.chartTimelinePlayChanged=ue(this.createLazyEvent("timelineplaychanged")),this.chartRestore=ue(this.createLazyEvent("restore")),this.chartDataViewChanged=ue(this.createLazyEvent("dataviewchanged")),this.chartMagicTypeChanged=ue(this.createLazyEvent("magictypechanged")),this.chartGeoSelectChanged=ue(this.createLazyEvent("geoselectchanged")),this.chartGeoSelected=ue(this.createLazyEvent("geoselected")),this.chartGeoUnselected=ue(this.createLazyEvent("geounselected")),this.chartAxisAreaSelected=ue(this.createLazyEvent("axisareaselected")),this.chartBrush=ue(this.createLazyEvent("brush")),this.chartBrushEnd=ue(this.createLazyEvent("brushend")),this.chartBrushSelected=ue(this.createLazyEvent("brushselected")),this.chartGlobalCursorTaken=ue(this.createLazyEvent("globalcursortaken")),this.chartRendered=ue(this.createLazyEvent("rendered")),this.chartFinished=ue(this.createLazyEvent("finished")),this.animationFrameID=null,this.chart$=new Ci(1),this.resize$=new T,this.changeFilter=new Qd,this.resizeObFired=!1,this.echarts=this.config.echarts}ngOnChanges(e){this.changeFilter.doFilter(e)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(hu(100,au,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize()&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(e=>{for(let n of e)n.target===this.el.nativeElement&&(this.resizeObFired?this.animationFrameID=window.requestAnimationFrame(()=>{this.resize$.next()}):this.resizeObFired=!0)})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",e=>this.onOptionsChange(e)),this.changeFilter.notFirstAndEmpty("merge",e=>this.setOption(e)),this.changeFilter.has("loading",e=>this.toggleLoading(!!e)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(e){this.chart?e?this.chart.showLoading(this.loadingType(),this.loadingOpts()):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(n=>e?n.showLoading(this.loadingType(),this.loadingOpts()):n.hideLoading())}setOption(e,n){if(this.chart)try{this.chart.setOption(e,n)}catch(a){console.error(a),this.optionsError.emit(a)}}async refreshChart(){this.dispose(),await this.initChart()}createChart(){let e=this.el.nativeElement;if(window&&window.getComputedStyle){let n=window.getComputedStyle(e,null).getPropertyValue("height");(!n||n==="0px")&&(!e.style.height||e.style.height==="0px")&&(e.style.height="400px")}return this.ngZone.runOutsideAngular(()=>(typeof this.echarts=="function"?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:a})=>a(e,this.theme()??this.config?.theme,this.initOpts())))}async initChart(){await this.onOptionsChange(this.options());let e=this.merge();e&&this.chart&&this.setOption(e)}async onOptionsChange(e){e&&(this.chart?this.setOption(this.options(),!0):(this.chart=await this.createChart(),this.chart$.next(this.chart),this.chartInit.emit(this.chart),this.setOption(this.options(),!0)))}createLazyEvent(e){return Tb(this.chartInit).pipe(it(n=>new Ze(a=>(n.on(e,o=>this.ngZone.run(()=>a.next(o))),()=>{this.chart&&(this.chart.isDisposed()||n.off(e))}))))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=C({type:t,selectors:[["echarts"],["","echarts",""]],inputs:{options:[1,"options"],theme:[1,"theme"],initOpts:[1,"initOpts"],merge:[1,"merge"],autoResize:[1,"autoResize"],loading:[1,"loading"],loadingType:[1,"loadingType"],loadingOpts:[1,"loadingOpts"]},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartHighlight:"chartHighlight",chartDownplay:"chartDownplay",chartSelectChanged:"chartSelectChanged",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendLegendSelectAll:"chartLegendLegendSelectAll",chartLegendLegendInverseSelect:"chartLegendLegendInverseSelect",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartGraphRoam:"chartGraphRoam",chartGeoRoam:"chartGeoRoam",chartTreeRoam:"chartTreeRoam",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartGeoSelectChanged:"chartGeoSelectChanged",chartGeoSelected:"chartGeoSelected",chartGeoUnselected:"chartGeoUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartGlobalCursorTaken:"chartGlobalCursorTaken",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[Ce]})}}return t})();function Pb(t){return{provide:Rb,useValue:t}}var QF=["chart"];function ZF(t,i){t&1&&(s(0,"span",10),u(1,"\u6708\u85AA\u6263\u9664\u9879\u5206\u6790"),l())}function JF(t,i){if(t&1&&(s(0,"mat-option",7),u(1),l()),t&2){let e=i.$implicit;_("value",e),A("data-testid","option-chart-month-"+e),m(),ee(e)}}function ek(t,i){if(t&1&&(u(0),V(1,"currency"),V(2,"currency"),V(3,"currency"),V(4,"currency"),V(5,"currency"),V(6,"currency")),t&2){let e=i,n=w();To(" ",K(1,6,n[e-1].cashIncome)," (\u7A0E\u540E) + ",K(2,8,n[e-1].tax)," (\u4E2A\u7A0E) + ",K(3,10,n[e-1].insuranceFullCost)," (\u793E\u4FDD) + ",K(4,12,n[e-1].housingFund)," (\u516C\u79EF\u91D1) + ",K(5,14,n[e-1].extraDeduction.enterprisePensionFromEmployee)," (\u4F01\u4E1A\u5E74\u91D1) = ",K(6,16,n[e-1].salary)," (\u7A0E\u524D) ")}}function tk(t,i){t&1&&(s(0,"span"),u(1,"\u9009\u62E9\u4E00\u4E2A\u6708\u4EFD\u67E5\u770B\u8BE6\u60C5"),l())}function nk(t,i){if(t&1&&(s(0,"div",9),H(1,ek,7,18),V(2,"async"),Tu(3,tk,2,0,"span"),l()),t&2){let e,n=w(2);m(),U((e=K(2,1,n.selectedMonth$))?1:3,e)}}function ik(t,i){t&1&&(s(0,"span",13),u(1,"\u5E74\u5EA6\u6263\u9664\u9879\u5206\u6790"),l())}function ak(t,i){if(t&1&&(s(0,"div",12),u(1),V(2,"currency"),V(3,"currency"),V(4,"currency"),V(5,"currency"),V(6,"currency"),V(7,"currency"),l()),t&2){let e=i;m(),To(" ",K(2,6,e.cashIncomeDeprecated)," (\u5168\u5E74\u7A0E\u540E) + ",K(3,8,e.totalSeparatedTax)," (\u5168\u5E74\u4E2A\u7A0E) + ",K(4,10,e.fullInsurance)," (\u5168\u5E74\u793E\u4FDD) + ",K(5,12,e.employee.housingFund)," (\u5168\u5E74\u516C\u79EF\u91D1) + ",K(6,14,e.employee.enterprisePension)," (\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1) = ",K(7,16,e.bookSalary+e.bonus)," (\u5168\u5E74\u603B\u6536\u5165) ")}}function ok(t,i){if(t&1&&(s(0,"mat-tab"),Ie(1,ik,2,0,"ng-template",3),s(2,"mat-card-content"),D(3,"div",11),H(4,ak,8,18,"div",12),V(5,"async"),l()()),t&2){let e,n=w(2);m(3),_("options",i),m(),U((e=K(5,2,n.summary$))?4:-1,e)}}function rk(t,i){t&1&&(s(0,"span",16),u(1,"\u5E74\u5EA6\u6536\u5165\u5206\u6790"),l())}function sk(t,i){if(t&1&&(s(0,"div",15),u(1),V(2,"currency"),V(3,"currency"),V(4,"currency"),V(5,"currency"),V(6,"currency"),l()),t&2){let e=i;m(),Io(" ",K(2,5,e.postTaxSalary)," (\u5168\u5E74\u5DE5\u8D44\u73B0\u91D1\u6536\u5165) + ",K(3,7,e.postTaxBonus)," (\u5168\u5E74\u7A0E\u540E\u5956\u91D1) + ",K(4,9,e.fullHousingFund)," (\u5168\u5E74\u516C\u79EF\u91D1) + ",K(5,11,e.employee.enterprisePensionFull)," (\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1) = ",K(6,13,e.totalIncomeDeprecated)," (\u5168\u5E74\u7EFC\u5408\u8D27\u5E01\u6536\u5165) ")}}function lk(t,i){if(t&1&&(s(0,"mat-tab"),Ie(1,rk,2,0,"ng-template",3),s(2,"mat-card-content"),D(3,"div",14),H(4,sk,7,15,"div",15),V(5,"async"),l()()),t&2){let e,n=w(2);m(3),_("options",i),m(),U((e=K(5,2,n.summary$))?4:-1,e)}}function ck(t,i){if(t&1){let e=We();s(0,"mat-card",1,0)(2,"mat-tab-group",2)(3,"mat-tab"),Ie(4,ZF,2,0,"ng-template",3),s(5,"mat-card-header",4),D(6,"mat-card-title"),s(7,"mat-form-field",5)(8,"mat-label"),u(9,"\u6708\u4EFD"),l(),s(10,"mat-select",6),V(11,"async"),F("selectionChange",function(a){Me(e);let o=w();return Ae(o.onChangeChartMonth(a.value))}),pe(12,JF,2,3,"mat-option",7,qt),l()()(),s(14,"mat-card-content"),D(15,"div",8),H(16,nk,4,3,"div",9),V(17,"async"),l()(),H(18,ok,6,4,"mat-tab"),V(19,"async"),H(20,lk,6,4,"mat-tab"),V(21,"async"),l()()}if(t&2){let e,n,a,o=w();m(10),_("value",K(11,5,o.selectedMonth$)),m(2),fe(o.months),m(3),_("options",i),m(),U((e=K(17,7,o.monthlyIncomes$))?16:-1,e),m(2),U((n=K(19,9,o.annualDeductionChartOption$))?18:-1,n),m(2),U((a=K(21,11,o.annualIncomeChartOption$))?20:-1,a)}}var Lb=(()=>{class t{constructor(){this.changeChartMonth=new R,this.chart=null,this.months=Array.from({length:12},(e,n)=>n+1)}ngOnInit(){this.initializeChartOptions(),this.scroll$.subscribe(()=>{this.scrollToChart()})}onChangeChartMonth(e){this.changeChartMonth.emit(e)}initializeChartOptions(){this.deductionChartOption$=ra([this.monthlyIncomes$,this.selectedMonth$]).pipe(se(([e,n])=>!!e&&e.length>0),be(([e,n])=>{let a=e[n-1],o=[{value:a.cashIncome,name:"\u5B9E\u53D1\u5DE5\u8D44"},{value:a.housingFund,name:"\u4F4F\u623F\u516C\u79EF\u91D1"},{value:a.insuranceCosts.endowment,name:"\u517B\u8001\u4FDD\u9669"},{value:a.insuranceCosts.health,name:"\u533B\u7597\u4FDD\u9669"},{value:a.tax,name:"\u4E2A\u4EBA\u6240\u5F97\u7A0E"},{value:a.insuranceCosts.unemployment,name:"\u5931\u4E1A\u4FDD\u9669"},{value:a.extraDeduction.enterprisePensionFromEmployee,name:"\u4F01\u4E1A\u5E74\u91D1"}];return{tooltip:{trigger:"item",formatter:function(r){let d=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${r.seriesName} <br/>${r.name}: ${d.format(r.value)} (${r.percent}%)`}},legend:{orient:"vertical",right:10,data:o.map(r=>r.name)},series:[{name:"\u6708\u85AA\u5206\u914D",type:"pie",startAngle:-45,avoidLabelOverlap:!0,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},emphasis:{label:{show:!0,fontSize:20,fontWeight:"bold"}},label:{padding:4,minMargin:8,formatter:function(r){let d=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${r.name}:
${d.format(r.value)} (${r.percent}%)`}},data:o}]}})),this.annualDeductionChartOption$=this.summary$.pipe(se(e=>!!e),be(e=>{let n=[{value:e.cashIncomeDeprecated,name:"\u5168\u5E74\u7A0E\u540E"},{value:e.employee.housingFund,name:"\u5168\u5E74\u516C\u79EF\u91D1"},{value:e.fullInsurance,name:"\u5168\u5E74\u793E\u4FDD"},{value:e.totalSeparatedTax,name:"\u5168\u5E74\u4E2A\u7A0E"},{value:e.employee.enterprisePension,name:"\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1"}];return{tooltip:{trigger:"item",formatter:function(a){let o=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${a.seriesName} <br/>${a.name}: ${o.format(a.value)} (${a.percent}%)`}},legend:{orient:"vertical",right:10,data:n.map(a=>a.name)},series:[{name:"\u5E74\u85AA\u5206\u914D",type:"pie",startAngle:-45,avoidLabelOverlap:!0,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},emphasis:{label:{show:!0,fontSize:20,fontWeight:"bold"}},label:{padding:4,minMargin:8,formatter:function(a){let o=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${a.name}:
${o.format(a.value)} (${a.percent}%)`}},data:n}]}})),this.annualIncomeChartOption$=this.summary$.pipe(se(e=>!!e),be(e=>{let n=[{value:e.postTaxSalary,name:"\u5168\u5E74\u5DE5\u8D44\u73B0\u91D1\u6536\u5165"},{value:e.postTaxBonus,name:"\u5168\u5E74\u7A0E\u540E\u5956\u91D1"},{value:e.fullHousingFund,name:"\u5168\u5E74\u516C\u79EF\u91D1"},{value:e.employee.enterprisePensionFull,name:"\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1"}];return{tooltip:{trigger:"item",formatter:function(a){let o=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${a.seriesName} <br/>${a.name}: ${o.format(a.value)} (${a.percent}%)`}},legend:{orient:"vertical",right:10,data:n.map(a=>a.name)},series:[{name:"\u5E74\u5EA6\u6536\u5165\u5206\u6790",type:"pie",startAngle:-45,avoidLabelOverlap:!0,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},emphasis:{label:{show:!0,fontSize:20,fontWeight:"bold"}},label:{padding:4,minMargin:8,formatter:function(a){let o=new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",maximumFractionDigits:2});return`${a.name}:
${o.format(a.value)} (${a.percent}%)`}},data:n}]}}))}scrollToChart(){setTimeout(()=>{this.chart&&this.chart.nativeElement.scrollIntoView({behavior:"smooth",block:"nearest"})},500)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-summary-charts"]],viewQuery:function(n,a){if(n&1&&De(QF,5,O),n&2){let o;P(o=L())&&(a.chart=o.first)}},inputs:{clear:"clear",monthlyIncomes$:"monthlyIncomes$",summary$:"summary$",selectedMonth$:"selectedMonth$",scroll$:"scroll$"},outputs:{changeChartMonth:"changeChartMonth"},decls:2,vars:3,consts:[["chart",""],["appearance","outlined","data-testid","summary-charts-card",1,"calc-result","mb-4"],["data-testid","charts-tab-group"],["mat-tab-label",""],[1,"d-flex","justify-content-between","align-items-center"],["appearance","outline",1,"dense-xs",2,"width","150px"],["data-testid","select-chart-month",3,"selectionChange","value"],[3,"value"],["echarts","","data-testid","echarts-monthly-deduction",1,"chart-container",2,"height","400px","width","100%",3,"options"],["data-testid","text-monthly-formula",1,"text-center","mt-2"],["data-testid","tab-monthly-deduction"],["echarts","","data-testid","echarts-annual-deduction",1,"chart-container",2,"height","400px","width","100%",3,"options"],["data-testid","text-annual-deduction-formula",1,"text-center","mt-2"],["data-testid","tab-annual-deduction"],["echarts","","data-testid","echarts-annual-income",1,"chart-container",2,"height","400px","width","100%",3,"options"],["data-testid","text-annual-income-formula",1,"text-center","mt-2"],["data-testid","tab-annual-income"]],template:function(n,a){if(n&1&&(H(0,ck,22,13,"mat-card",1),V(1,"async")),n&2){let o;U((o=!a.clear&&K(1,1,a.deductionChartOption$))?0:-1,o)}},dependencies:[ze,yi,vi,vo,yo,bo,ec,Br,Nr,Jl,Gt,Dn,_n,Do,Eo,Nt,Ob,rn,ki],styles:[".chart-container[_ngcontent-%COMP%]{width:100%;height:400px}@media(max-width:767.98px){.calc-result[_ngcontent-%COMP%]{padding:0}}"]})}}return t})();var Bb=(()=>{class t{generateCsvContent(e,n,a="\u5168\u56FD",o=new Date().getFullYear()){let r=["\u6708\u4EFD","\u7A0E\u524D\u8D26\u9762\u5DE5\u8D44(\u5143)","\u4E94\u9669\u4E2A\u4EBA\u7F34\u8D39(\u5143)","\u516C\u79EF\u91D1\u4E2A\u4EBA\u7F34\u8D39(\u5143)","\u4E13\u9879\u9644\u52A0\u6263\u9664(\u5143)","\u5E94\u7A0E\u6240\u5F97\u989D(\u5143)","\u5F53\u6708\u9884\u7F34\u4E2A\u7A0E(\u5143)","\u7A0E\u540E\u5230\u624B\u73B0\u91D1(\u5143)","\u4F01\u4E1A\u793E\u4FDD\u6210\u672C(\u5143)","\u4F01\u4E1A\u603B\u6210\u672C(\u5143)"],d=[];e.forEach((f,g)=>{d.push([`${f.actualMonth||g+1}\u6708`,f.salary.toFixed(2),f.insuranceFullCost.toFixed(2),f.housingFund.toFixed(2),f.fullExtraDeduction.toFixed(2),f.accumulatedTaxQuota.toFixed(2),f.tax.toFixed(2),f.cashIncome.toFixed(2),f.employerCosts.insuranceFull.toFixed(2),f.employerCosts.full.toFixed(2)])});let h=e.reduce((f,g)=>f+(g.fullExtraDeduction||0),0);if(d.push(["\u5168\u5E74\u85AA\u8D44\u5408\u8BA1",n.bookSalary.toFixed(2),(n.employee.endowmentInsurance+n.employee.healthInsurance).toFixed(2),n.employee.housingFund.toFixed(2),h.toFixed(2),"-",n.prepaidTax.toFixed(2),n.postTaxSalary.toFixed(2),(n.employerCosts.full-n.bookIncome).toFixed(2),n.employerCosts.full.toFixed(2)]),n.bonus>0&&d.push(["\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1",n.bonus.toFixed(2),"0.00","0.00","0.00",n.bonus.toFixed(2),n.bonusTax.toFixed(2),n.postTaxBonus.toFixed(2),"0.00",n.bonus.toFixed(2)]),n.annualTaxSettlement){let f=n.annualTaxSettlement.settlementType==="refund"?`\u9884\u8BA1\u6C47\u7B97\u9000\u7A0E: \xA5${n.annualTaxSettlement.amount.toFixed(2)}`:n.annualTaxSettlement.settlementType==="supplement"?`\u9884\u8BA1\u6C47\u7B97\u8865\u7A0E: \xA5${n.annualTaxSettlement.amount.toFixed(2)}`:"\u6C47\u7B97\u65E0\u9700\u9000\u8865";d.push(["\u6C47\u7B97\u6E05\u7F34\u9884\u6D4B",f,"","","","","","","",""])}return"\uFEFF"+[`"${o}\u5E74\u85AA\u7A0E\u660E\u7EC6\u6D4B\u7B97\u8868 - ${a}"`,r.join(","),...d.map(f=>f.map(g=>`"${g}"`).join(","))].join(`\r
`)}downloadCsv(e,n,a="\u6D4B\u7B97\u7ED3\u679C",o=new Date().getFullYear()){let r=this.generateCsvContent(e,n,a,o),d=new Blob([r],{type:"text/csv;charset=utf-8;"}),h=URL.createObjectURL(d),p=document.createElement("a");p.setAttribute("href",h),p.setAttribute("download",`\u85AA\u7A0E\u660E\u7EC6\u8868_${a}_${o}.csv`),document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(h)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var dk=(t,i)=>({"alert-success border-success":t,"alert-warning border-warning":i}),uk=(t,i)=>({"text-success":t,"text-warning":i});function mk(t,i){if(t&1&&(s(0,"div",7)(1,"div",41)(2,"mat-icon",42),u(3),l(),s(4,"div")(5,"div",43),u(6),s(7,"span",44),u(8),V(9,"currency"),l()(),s(10,"div",45),u(11),l()()()()),t&2){let e=w();m(),_("ngClass",Ro(9,dk,e.annualTaxSettlement.settlementType==="refund",e.annualTaxSettlement.settlementType==="supplement")),m(),_("ngClass",Ro(12,uk,e.annualTaxSettlement.settlementType==="refund",e.annualTaxSettlement.settlementType==="supplement")),m(),k(" ",e.annualTaxSettlement.settlementType==="refund"?"savings":"warning_amber"," "),m(3),k(" ",e.annualTaxSettlement.settlementType==="refund"?"\u5E74\u5EA6\u6C47\u7B97\u9884\u8BA1\u53EF\u9000\u7A0E\uFF1A":"\u5E74\u5EA6\u6C47\u7B97\u9884\u8BA1\u9700\u8865\u7A0E\uFF1A"," "),m(),_("ngClass",e.annualTaxSettlement.settlementType==="refund"?"text-success":"text-danger"),m(),k(" ",K(9,7,e.annualTaxSettlement.amount)," "),m(3),k(" ",e.annualTaxSettlement.hint," ")}}function hk(t,i){if(t&1){let e=We();s(0,"mat-card",1,0)(2,"div",2)(3,"h3",3)(4,"mat-icon",4),u(5,"assessment"),l(),s(6,"span"),u(7,"\u5E74\u5EA6\u85AA\u7A0E\u7EFC\u5408\u6C47\u603B"),l()(),s(8,"button",5),F("click",function(){let a=Me(e),o=w();return Ae(o.onExportCsv(a))}),s(9,"mat-icon",6),u(10,"download"),l(),s(11,"span"),u(12,"\u5BFC\u51FA 12 \u4E2A\u6708\u660E\u7EC6\u62A5\u8868 (CSV)"),l()()(),H(13,mk,12,15,"div",7),s(14,"mat-list",8)(15,"mat-list-item")(16,"mat-icon",9),u(17,"money"),l(),s(18,"div",10),u(19,"\u5168\u5E74\u8D26\u9762\u85AA\u8D44\u6536\u5165"),l(),s(20,"div",11),u(21),V(22,"currency"),l()(),s(23,"mat-list-item")(24,"mat-icon",12),u(25,"money"),l(),s(26,"div",10),u(27,"\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6536\u5165(\u5355\u72EC\u8BA1\u7A0E)"),l(),s(28,"div",13),u(29),V(30,"currency"),V(31,"currency"),l()(),s(32,"mat-list-item")(33,"mat-icon",14),u(34,"redeem"),l(),s(35,"div",10),u(36,"\u5168\u5E74\u516C\u79EF\u91D1\u7F34\u7EB3\u91D1\u989D"),l(),s(37,"div",15),u(38),V(39,"currency"),l()(),s(40,"mat-list-item")(41,"mat-icon",16),u(42,"monetization_on"),l(),s(43,"div",10),u(44,"\u5168\u5E74\u9884\u7F34\u7A0E\u989D"),l(),s(45,"div",17),u(46),V(47,"currency"),l()(),s(48,"mat-list-item")(49,"mat-icon",18),u(50,"monetization_on"),l(),s(51,"div",10),u(52,"\u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D"),l(),s(53,"div",19),u(54),V(55,"currency"),l()(),s(56,"mat-list-item")(57,"mat-icon",20),u(58,"monetization_on"),l(),s(59,"div",10),u(60,"\u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D\uFF08\u5206\u5F00\u8BA1\u7B97\uFF09"),l(),s(61,"div",21),u(62),V(63,"currency"),l()(),s(64,"mat-list-item")(65,"mat-icon",22),u(66,"savings"),l(),s(67,"div",10),u(68,"\u5168\u5E74\u7A0E\u540E\u6536\u5165"),l(),s(69,"div",23),u(70),V(71,"currency"),l()(),s(72,"mat-list-item")(73,"mat-icon",24),u(74,"savings"),l(),s(75,"div",10),u(76),l(),s(77,"div",25),u(78),V(79,"currency"),l()(),s(80,"mat-list-item")(81,"mat-icon",26),u(82,"savings"),l(),s(83,"div",10),u(84,"\u5168\u5E74\u73B0\u91D1\u6536\u5165"),l(),s(85,"div",27),u(86),V(87,"currency"),l()(),s(88,"mat-list-item")(89,"mat-icon",28),u(90,"savings"),l(),s(91,"div",10),u(92),l(),s(93,"div",29),u(94),V(95,"currency"),l()(),s(96,"mat-list-item")(97,"mat-icon",30),u(98,"savings"),l(),s(99,"div",10),u(100,"\u5168\u5E74\u7EFC\u5408\u8D27\u5E01\u6536\u5165"),l(),s(101,"div",31),u(102),V(103,"currency"),l()(),s(104,"mat-list-item")(105,"mat-icon",32),u(106,"savings"),l(),s(107,"div",10),u(108),l(),s(109,"div",33),u(110),V(111,"currency"),l()(),s(112,"mat-list-item")(113,"mat-icon",12),u(114,"redeem"),l(),s(115,"div",10),u(116,"\u4E2A\u4EBA\u517B\u8001\u4FDD\u9669\u7F34\u7EB3\u603B\u989D"),l(),s(117,"div",34),u(118),V(119,"currency"),l()(),s(120,"mat-list-item")(121,"mat-icon",12),u(122,"redeem"),l(),s(123,"div",10),u(124,"\u4E2A\u4EBA\u533B\u4FDD\u7F34\u7EB3\u603B\u989D"),l(),s(125,"div",35),u(126),V(127,"currency"),l()(),s(128,"mat-list-item")(129,"mat-icon",36),u(130,"redeem"),l(),s(131,"div",10),u(132,"\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u7F34\u7EB3\u603B\u989D"),l(),s(133,"div",37),u(134),V(135,"currency"),l()(),s(136,"mat-list-item")(137,"mat-icon",38),u(138,"redeem"),l(),s(139,"div",10),u(140,"\u5168\u5E74\u4E2A\u4EBA\u517B\u8001\u91D1\u7F34\u7EB3\u603B\u989D"),l(),s(141,"div",39),u(142),V(143,"currency"),l()(),s(144,"mat-list-item")(145,"mat-icon",12),u(146,"payments"),l(),s(147,"div",10),u(148,"\u516C\u53F8\u6210\u672C"),l(),s(149,"div",40),u(150),V(151,"currency"),l()()()()}if(t&2){let e=i,n=w();m(13),U(e.annualTaxSettlement&&e.annualTaxSettlement.settlementType!=="none"?13:-1),m(8),k(" ",K(22,22,e.bookSalary)," "),m(8),ot(" ",K(30,24,e.bonus)," (",K(31,26,e.bonusTax),") "),m(9),k(" ",K(39,28,e.fullHousingFund)," "),m(8),k(" ",K(47,30,e.prepaidTax)," "),m(8),k(" ",K(55,32,e.theoreticalTax)," "),m(8),k(" ",K(63,34,e.totalSeparatedTax)," "),m(8),k(" ",K(71,36,e.taxedIncome)," "),m(6),k(" \u5168\u5E74\u7A0E\u540E\u6536\u5165\uFF08\u975E\u5408\u5E76 - ",n.nonMergeTaxCalculationEndDate,"\u6B62\uFF09 "),m(2),k(" ",K(79,38,e.taxedIncomeDeprecated)," "),m(8),k(" ",K(87,40,e.cashIncome)," "),m(6),k(" \u5168\u5E74\u73B0\u91D1\u6536\u5165\uFF08\u975E\u5408\u5E76 - ",n.nonMergeTaxCalculationEndDate,"\u6B62\uFF09 "),m(2),k(" ",K(95,42,e.cashIncomeDeprecated)," "),m(8),k(" ",K(103,44,e.totalIncome)," "),m(6),k(" \u5168\u5E74\u7EFC\u5408\u8D27\u5E01\u6536\u5165\uFF08\u975E\u5408\u5E76 - ",n.nonMergeTaxCalculationEndDate,"\u6B62\uFF09 "),m(2),k(" ",K(111,46,e.totalIncomeDeprecated)," "),m(8),k(" ",K(119,48,e.employee.endowmentInsurance)," "),m(8),k(" ",K(127,50,e.employee.healthInsurance)," "),m(8),k(" ",K(135,52,e.employee.enterprisePensionFull)," "),m(8),k(" ",K(143,54,e.employee.privatePension)," "),m(8),k(" ",K(151,56,e.employerCosts.full)," ")}}var Nb=(()=>{class t{constructor(){this.monthlyIncomes=[],this.cityLabel="\u5168\u56FD",this.year=new Date().getFullYear(),this.nonMergeTaxCalculationEndDate=ll,this.exportService=c(Bb)}onExportCsv(e){this.exportService.downloadCsv(this.monthlyIncomes,e,this.cityLabel,this.year)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-summary-details"]],inputs:{clear:"clear",summary$:"summary$",monthlyIncomes:"monthlyIncomes",cityLabel:"cityLabel",year:"year"},decls:2,vars:3,consts:[["summary",""],["appearance","outlined","data-testid","summary-details-card",1,"calc-result","mb-3"],[1,"d-flex","justify-content-between","align-items-center","p-3","border-bottom","flex-wrap","gap-2"],[1,"m-0","font-weight-bold","text-dark","d-flex","align-items-center"],[1,"mr-2","text-primary"],["mat-flat-button","","color","primary","data-testid","btn-export-csv",3,"click"],[1,"mr-1"],[1,"px-3","pt-3"],[1,"summary"],["matTooltip","\u5168\u5E74\u8D26\u9762\u85AA\u8D44\u6536\u5165 = \u6BCF\u6708\u85AA\u8D44\u603B\u548C","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemTitle",""],["matListItemLine","","data-testid","summary-book-salary",1,"figure"],["matListItemIcon",""],["matListItemLine","","data-testid","summary-bonus",1,"figure"],["matTooltip","\u5168\u5E74\u516C\u79EF\u91D1\u7F34\u7EB3\u91D1\u989D = \u6BCF\u6708\u516C\u79EF\u91D1\u7F34\u7EB3\u91D1\u989D\u603B\u548C","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-full-housing-fund",1,"figure"],["matTooltip","\u5168\u5E74\u9884\u7F34\u7A0E\u989D = \u6BCF\u6708\u9884\u7F34\u7A0E\u989D\u603B\u548C","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-prepaid-tax",1,"figure"],["matTooltip","\u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D = \u6574\u4F53\u8BA1\u7B97\u7A0E\u989D(\u5168\u5E74\u8D26\u9762\u85AA\u8D44\u6536\u5165 + \u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6536\u5165)","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-theoretical-tax",1,"figure"],["matTooltip","\u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D\uFF08\u5206\u5F00\u8BA1\u7B97\uFF09 = \u5168\u5E74\u9884\u7F34\u7A0E\u989D + \u5355\u72EC\u8BA1\u7B97\u7A0E\u989D(\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6536\u5165)","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-total-separated-tax",1,"figure"],["matTooltip","\u5168\u5E74\u7A0E\u540E\u6536\u5165 = \u5168\u5E74\u8D26\u9762\u85AA\u8D44\u6536\u5165 + \u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6536\u5165 - \u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-taxed-income",1,"figure"],["matTooltip","\u5168\u5E74\u7A0E\u540E\u6536\u5165\uFF08\u975E\u5408\u5E76\uFF09 = \u5168\u5E74\u8D26\u9762\u85AA\u8D44\u6536\u5165 + \u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6536\u5165 - \u5168\u5E74\u4E2A\u4EBA\u7EFC\u5408\u6240\u5F97\u7A0E\u989D\uFF08\u5206\u5F00\u8BA1\u7B97\uFF09","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-taxed-income-deprecated",1,"figure"],["matTooltip","\u5168\u5E74\u73B0\u91D1\u6536\u5165 = \u5168\u5E74\u7A0E\u540E\u6536\u5165 - \u5168\u5E74\u793E\u4FDD\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D - \u5168\u5E74\u516C\u79EF\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D - \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-cash-income",1,"figure"],["matTooltip","\u5168\u5E74\u73B0\u91D1\u6536\u5165\uFF08\u975E\u5408\u5E76\uFF09 = \u5168\u5E74\u7A0E\u540E\u6536\u5165\uFF08\u975E\u5408\u5E76\uFF09 - \u5168\u5E74\u793E\u4FDD\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D - \u5168\u5E74\u516C\u79EF\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D - \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-cash-income-deprecated",1,"figure"],["matTooltip","\u5168\u5E74\u7EFC\u5408\u8D27\u5E01\u6536\u5165 = \u5168\u5E74\u73B0\u91D1\u6536\u5165 + \u5168\u5E74\u516C\u79EF\u91D1\u7F34\u7EB3\u603B\u989D + \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u7F34\u7EB3\u603B\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-total-income",1,"figure"],["matTooltip","\u5168\u5E74\u7EFC\u5408\u8D27\u5E01\u6536\u5165\uFF08\u975E\u5408\u5E76\uFF09 = \u5168\u5E74\u73B0\u91D1\u6536\u5165\uFF08\u975E\u5408\u5E76\uFF09 + \u5168\u5E74\u516C\u79EF\u91D1\u7F34\u7EB3\u603B\u989D + \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u7F34\u7EB3\u603B\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-total-income-deprecated",1,"figure"],["matListItemLine","","data-testid","summary-employee-endowment",1,"figure"],["matListItemLine","","data-testid","summary-employee-health",1,"figure"],["matTooltip","\u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u7F34\u7EB3\u603B\u989D = \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u4E2A\u4EBA\u7F34\u7EB3\u603B\u989D + \u5168\u5E74\u4F01\u4E1A\u5E74\u91D1\u516C\u53F8\u7F34\u7EB3\u603B\u989D","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-employee-enterprise-pension",1,"figure"],["matTooltip","\u5168\u5E74\u4E2A\u4EBA\u517B\u8001\u91D1\u7F34\u7EB3\u603B\u989D\uFF08\u4E2A\u4EBA\u81EA\u613F\u5EFA\u7ACB\u3001\u5C01\u95ED\u8FD0\u884C\u3001\u5E02\u573A\u5316\u6295\u8D44\uFF0C\u6309\u5E7412000\u5143\u9650\u989D\u7A0E\u524D\u6263\u9664\uFF09","matTooltipClass","summary-tooltip","matTooltipPosition","above","matTooltipShowDelay","300","matListItemIcon",""],["matListItemLine","","data-testid","summary-employee-private-pension",1,"figure"],["matListItemLine","","data-testid","summary-employer-costs",1,"figure"],["data-testid","annual-tax-settlement-card",1,"alert","mb-0","d-flex","align-items-center","rounded-lg","p-3","border",3,"ngClass"],[1,"mr-3","flex-shrink-0",2,"font-size","26px","width","26px","height","26px",3,"ngClass"],[1,"font-weight-bold",2,"font-size","15px"],[1,"font-weight-bold",3,"ngClass"],[1,"small","text-muted","mt-1"]],template:function(n,a){if(n&1&&(H(0,hk,152,58,"mat-card",1),V(1,"async")),n&2){let o;U((o=!a.clear&&K(1,1,a.summary$))?0:-1,o)}},dependencies:[ze,jo,yi,vi,xi,tc,Fo,qd,na,ta,Et,Pt,Ao,Lr,wt,Ot,rn,ki],styles:[".summary[_ngcontent-%COMP%]{--mdc-list-list-item-supporting-text-color: rgb(0 0 0 / 87%);--mdc-list-list-item-leading-icon-color: rgb(0 0 0 / 87%);display:flex;flex-wrap:wrap}.summary[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%]{font-size:1.5em;line-height:1.25em}.summary[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{overflow:hidden;flex:50% 0 0}  .summary-tooltip .mdc-tooltip__surface{max-width:unset}@media(max-width:767.98px){.calc-result[_ngcontent-%COMP%]{padding:0}.summary[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{flex-basis:100%}}"]})}}return t})();var pk=(t,i)=>({"alert-danger border-danger":t,"alert-success border-success":i}),fk=()=>({minimumFractionDigits:2,maximumFractionDigits:2}),gk=(t,i)=>i.range;function _k(t,i){t&1&&(s(0,"span",17),u(1,"\u547D\u4E2D\u76F2\u533A"),l())}function bk(t,i){t&1&&(s(0,"span",18),u(1,"\u6B63\u5E38\u533A\u95F4"),l())}function vk(t,i){if(t&1&&u(0),t&2){let e=w(2);k(" ",e.trapResult==null?null:e.trapResult.warningMessage," ")}}function yk(t,i){t&1&&u(0," \u5F53\u524D\u5E74\u7EC8\u5956\u5904\u4E8E\u5B89\u5168\u8BA1\u7A0E\u533A\u95F4\uFF0C\u672A\u89E6\u78B0\u7A0E\u7387\u8DC3\u5347\u76F2\u533A\u3002 ")}function xk(t,i){if(t&1&&(s(0,"div",6)(1,"div",14)(2,"mat-icon",15),u(3),l(),s(4,"div",16),u(5),H(6,_k,2,0,"span",17)(7,bk,2,0,"span",18),l()(),s(8,"div",19),H(9,vk,1,1)(10,yk,1,0),l()()),t&2){let e=w();_("ngClass",Ro(6,pk,e.trapResult==null?null:e.trapResult.isTrap,!(e.trapResult!=null&&e.trapResult.isTrap))),m(2),_("ngClass",e.trapResult!=null&&e.trapResult.isTrap?"text-danger":"text-success"),m(),k(" ",e.trapResult!=null&&e.trapResult.isTrap?"warning":"verified"," "),m(2),k(" \u5F53\u524D\u5E74\u7EC8\u5956\uFF1A\xA5",e.annualBonus.toLocaleString("zh-CN",pa(9,fk))," "),m(),U(e.trapResult!=null&&e.trapResult.isTrap?6:7),m(3),U(e.trapResult!=null&&e.trapResult.isTrap?9:10)}}function Ck(t,i){t&1&&(s(0,"div",7)(1,"mat-icon",20),u(2,"info"),l(),s(3,"span"),u(4,"\u5F53\u524D\u672A\u5F55\u5165\u5E74\u7EC8\u5956\u3002\u5728\u4E0A\u65B9\u8868\u5355\u4E2D\u5F55\u5165\u5E74\u7EC8\u5956\u540E\uFF0C\u7CFB\u7EDF\u5C06\u81EA\u52A8\u68C0\u6D4B\u4E34\u754C\u70B9\u4E0E\u76F2\u533A\u98CE\u9669\u3002"),l()())}function wk(t,i){if(t&1&&(s(0,"div",12)(1,"div",21)(2,"div",22),u(3),l(),s(4,"div",23),u(5," \u4E34\u754C\u5B89\u5168\u7EBF: "),s(6,"strong"),u(7),l(),u(8),l()()()),t&2){let e=i.$implicit;m(3),ee(e.range),m(4),ee(e.threshold),m(),k(" (",e.taxJump,") ")}}var Vb=(()=>{class t{constructor(){this.annualBonus=0,this.trapRangesDisplay=[{range:"36,001 ~ 38,566.67 \u5143",threshold:"36,000 \u5143",taxJump:"3% \u2192 10%"},{range:"144,001 ~ 160,500 \u5143",threshold:"144,000 \u5143",taxJump:"10% \u2192 20%"},{range:"300,001 ~ 318,333.33 \u5143",threshold:"300,000 \u5143",taxJump:"20% \u2192 25%"},{range:"420,001 ~ 447,500 \u5143",threshold:"420,000 \u5143",taxJump:"25% \u2192 30%"},{range:"660,001 ~ 706,538.46 \u5143",threshold:"660,000 \u5143",taxJump:"30% \u2192 35%"},{range:"960,001 ~ 1,120,000 \u5143",threshold:"960,000 \u5143",taxJump:"35% \u2192 45%"}]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-bonus-optimization-card"]],inputs:{optimizationResult:"optimizationResult",trapResult:"trapResult",annualBonus:"annualBonus"},decls:21,vars:1,consts:[["appearance","outlined","data-testid","bonus-optimization-card",1,"bonus-opt-card","mb-3"],[1,"d-flex","align-items-center","mb-2"],[1,"d-flex","align-items-center"],["color","primary",1,"mr-2"],[1,"m-0","font-weight-bold","text-dark",2,"font-size","1.15rem"],[1,"pt-2"],["data-testid","bonus-optimization-status-alert",1,"alert","rounded","p-3","mb-3","border",3,"ngClass"],[1,"alert","alert-light","border","rounded","p-3","mb-3","text-muted","small","d-flex","align-items-center"],[1,"trap-ranges-section","p-3","rounded","bg-light","border"],[1,"font-weight-bold","text-secondary","mb-2","d-flex","align-items-center"],[1,"mr-1","extra-small-icon","text-muted"],[1,"row","mx-0"],[1,"col-12","col-sm-6","col-md-4","p-1"],[1,"text-muted","extra-small","mt-2"],[1,"d-flex","align-items-center","mb-1"],[1,"mr-2","flex-shrink-0",3,"ngClass"],[1,"font-weight-bold",2,"font-size","15px"],[1,"badge","badge-danger","ml-2"],[1,"badge","badge-success","ml-2"],[1,"small","mt-1","text-muted"],[1,"mr-2","text-primary"],[1,"trap-chip","p-2","rounded","border","bg-white","small","h-100"],[1,"font-weight-bold","text-danger"],[1,"text-muted","extra-small","mt-1"]],template:function(n,a){n&1&&(s(0,"mat-card",0)(1,"mat-card-header",1)(2,"div",2)(3,"mat-icon",3),u(4,"analytics"),l(),s(5,"mat-card-title",4),u(6," \u5E74\u7EC8\u5956\u4E34\u754C\u70B9\u4E0E\u7A0E\u6536\u76F2\u533A\u5206\u6790 "),l()()(),s(7,"mat-card-content",5),H(8,xk,11,10,"div",6)(9,Ck,5,0,"div",7),s(10,"div",8)(11,"h6",9)(12,"mat-icon",10),u(13,"table_chart"),l(),s(14,"span"),u(15,"\u5168\u56FD\u4E2A\u7A0E 6 \u5927\u65E0\u6548\u76F2\u533A\u901F\u67E5\u56FE\u8C31\uFF08\u591A\u53D1\u53CD\u800C\u5C11\u5F97\uFF09"),l()(),s(16,"div",11),pe(17,wk,9,3,"div",12,gk),l(),s(19,"div",13),u(20," * \u653F\u7B56\u63D0\u793A\uFF1A\u6839\u636E\u8D22\u653F\u90E8\u516C\u544A\uFF0C\u5168\u5E74\u4E00\u6B21\u6027\u5956\u91D1\u6BCF\u7EB3\u7A0E\u5E74\u5EA6\u9650\u7528\u4E00\u6B21\uFF0C\u5355\u72EC\u8BA1\u7A0E\u4F18\u60E0\u6682\u5EF6\u7EED\u81F3 2027 \u5E74 12 \u6708 31 \u65E5\u3002 "),l()()()()),n&2&&(m(8),U(a.annualBonus>0?8:9),m(9),fe(a.trapRangesDisplay))},dependencies:[ze,jo,yi,vi,vo,yo,bo,Et,Pt,Ka],styles:[".bonus-opt-card[_ngcontent-%COMP%]{border-color:#0000001f;border-radius:8px}.bonus-opt-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding-bottom:0}.trap-ranges-section[_ngcontent-%COMP%]{border-color:#e9ecef;background-color:#f8f9fa}.trap-chip[_ngcontent-%COMP%]{transition:all .2s ease-in-out;border-left:3px solid #dc3545!important}.trap-chip[_ngcontent-%COMP%]:hover{box-shadow:0 2px 6px #00000014}.extra-small[_ngcontent-%COMP%]{font-size:.75rem}.extra-small-icon[_ngcontent-%COMP%]{font-size:16px;line-height:16px;width:16px;height:16px}"]})}}return t})();var Ek=()=>[];function Dk(t,i){if(t&1&&D(0,"app-bonus-optimization-card",6),t&2){let e=i;_("trapResult",e.bonusTaxTrap)("annualBonus",e.bonus)}}var jb=(()=>{class t{constructor(){this.store=c(Nl),this.http=c(Cn),this.usePredefinedInsurancePercents=ne(!0),this.cityRecipe=ne(null),this.clear=ne(!1),this.selectedYear=new Date().getFullYear(),this.selectedMonth$=new Yn(1),this.scroll$=new Yn(void 0),this.monthlyMetasSubject$=new Yn([]),this.loadedRecipes=new Map}ngOnInit(){this.monthlyMetasSubject$=new Yn([]),this.monthlyMetas$=this.monthlyMetasSubject$.asObservable().pipe(se(e=>e.length>0)),this.monthlyIncomes$=this.monthlyMetas$.pipe(vn(300),se(e=>e.length>0),be(e=>Er(e)),wi(1)),this.summary$=ra([this.monthlyIncomes$,this.monthlyMetas$]).pipe(be(([e,n])=>Ll(e,n[0].annualBonus)),wi(1)),this.recipeIndex$=this.http.get("assets/recipes/index.json").pipe(Kn(0),wi(1)),this.recipeIndex$.subscribe(e=>{e.length>0&&!this.cityRecipe()&&this.selectRecipeItem(e[0])})}selectRecipeItem(e){if(this.loadedRecipes.has(e.file)){this.changeRecipe(this.loadedRecipes.get(e.file));return}this.http.get(`assets/recipes/${e.file}`).pipe(Kn(0)).subscribe(n=>{this.loadedRecipes.set(e.file,n),this.changeRecipe(n)})}changeChartMonth(e){console.log(`Changing chart month to: ${e}`),this.selectedMonth$.next(e)}changeRecipe(e){this.cityRecipe.set(e)}changePredefineCondition(e){this.usePredefinedInsurancePercents.set(e)}clearResult(){this.clear.set(!0)}updateMeta(e,n){this.monthlyMetas$.pipe(Je(1)).subscribe(a=>{if(a&&a.length>n){let o=[...a];o[n]=xe(S({},o[n]),{salary:e.monthSalary+(e.monthlyBonus||0),insuranceBase:e.insuranceBase,housingFundBase:e.housingFundBase,housingFundRate:e.housingFundRate/100,insuranceRate:{endowment:e.insuranceRate.endowment/100,health:e.insuranceRate.health/100,unemployment:e.insuranceRate.unemployment/100},extraDeduction:e.extraDeduction,insuranceBaseOnLastMonth:e.insuranceBaseOnLastMonth,newPayCycle:e.newPayCycle}),this.monthlyMetasSubject$.next(o)}})}calculate(e){this.clear.set(!1);let n=this.buildMonthlyMetasFromPolicy(e);n[0].newPayCycle=!0,this.monthlyMetasSubject$.next(n)}buildMonthlyMetasFromPolicy(e){return Bl(this.cityRecipe(),e.year,e,e.useUniformPolicy)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-calculator"]],decls:9,vars:25,consts:[[3,"calculate","clearResult","changeRecipe","selectRecipeItem","changePredefineCondition","changeSelectedYear","usePredefinedInsurancePercents","cityRecipe","recipeIndex$"],[1,"row","mt-4"],[1,"col-lg-6","col-sm-12","mb-4","mb-md-0",3,"updateMeta","changeChartMonth","clear","monthlyIncomes$","monthlyMetas$","cityRecipe","scroll$","calculationYear"],[1,"col-lg-6"],[3,"changeChartMonth","clear","monthlyIncomes$","summary$","selectedMonth$","scroll$"],[3,"clear","summary$","monthlyIncomes","cityLabel","year"],[3,"trapResult","annualBonus"]],template:function(n,a){if(n&1&&(s(0,"app-calculator-form",0),F("calculate",function(r){return a.calculate(r)})("clearResult",function(){return a.clearResult()})("changeRecipe",function(r){return a.changeRecipe(r)})("selectRecipeItem",function(r){return a.selectRecipeItem(r)})("changePredefineCondition",function(r){return a.changePredefineCondition(r)})("changeSelectedYear",function(r){return a.selectedYear=r}),l(),s(1,"div",1)(2,"app-monthly-results",2),F("updateMeta",function(r){return a.updateMeta(r.meta,r.index)})("changeChartMonth",function(r){return a.changeChartMonth(r)}),l(),s(3,"div",3)(4,"app-summary-charts",4),F("changeChartMonth",function(r){return a.changeChartMonth(r)}),l(),D(5,"app-summary-details",5),V(6,"async"),H(7,Dk,1,2,"app-bonus-optimization-card",6),V(8,"async"),l()()),n&2){let o,r;_("usePredefinedInsurancePercents",a.usePredefinedInsurancePercents())("cityRecipe",a.cityRecipe())("recipeIndex$",a.recipeIndex$),m(2),_("clear",a.clear())("monthlyIncomes$",a.monthlyIncomes$)("monthlyMetas$",a.monthlyMetas$)("cityRecipe",a.cityRecipe())("scroll$",a.scroll$)("calculationYear",a.selectedYear),m(2),_("clear",a.clear())("monthlyIncomes$",a.monthlyIncomes$)("summary$",a.summary$)("selectedMonth$",a.selectedMonth$)("scroll$",a.scroll$),m(),_("clear",a.clear())("summary$",a.summary$)("monthlyIncomes",K(6,20,a.monthlyIncomes$)||pa(24,Ek))("cityLabel",((o=a.cityRecipe())==null?null:o.city)||"\u5168\u56FD")("year",a.selectedYear),m(2),U((r=!a.clear()&&K(8,22,a.summary$))?7:-1,r)}},dependencies:[ze,Ab,Ib,Lb,Nb,Vb,rn],styles:["[_nghost-%COMP%]{display:block}.divider[_ngcontent-%COMP%]{height:50%;margin-top:25%}"]})}}return t})();var zb=(()=>{class t{constructor(){this.iconService=c(Gs),this.domSanitize=c(Ri)}init(e){if(!Array.isArray(e))throw new TypeError("Invalid input for IconRegistryInitService#init");e.forEach(n=>{n.literal&&(n.namespace?this.iconService.addSvgIconLiteralInNamespace(n.namespace,n.name,this.domSanitize.bypassSecurityTrustHtml(n.literal)):this.iconService.addSvgIconLiteral(n.name,this.domSanitize.bypassSecurityTrustHtml(n.literal))),n.url&&(n.namespace?this.iconService.addSvgIconInNamespace(n.namespace,n.name,this.domSanitize.bypassSecurityTrustResourceUrl(n.url)):this.iconService.addSvgIcon(n.name,this.domSanitize.bypassSecurityTrustResourceUrl(n.url)))})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Hb=[{name:"calculator",url:"assets/img/calculator.svg"}];var Ub="salary_calculator_guide_shown",$b=(()=>{class t{constructor(){this.title="\u4E2A\u7A0E\u4E0E\u85AA\u8D44\u8BA1\u7B97\u5668",this.iconRegistryInit=c(zb),this.dialog=c(hn),this.platformId=c(Xn),this.iconRegistryInit.init(Hb)}ngOnInit(){us(this.platformId)&&localStorage.getItem(Ub)!=="true"&&this.dialog.open(Vl,{width:"720px",maxWidth:"92vw"}).afterClosed().subscribe(()=>{localStorage.setItem(Ub,"true")})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=M({type:t,selectors:[["app-root"]],decls:2,vars:0,consts:[[1,"mat-elevation-z6"],[1,"p-3","px-sm-5","py-sm-4"]],template:function(n,a){n&1&&D(0,"app-navbar",0)(1,"app-calculator",1)},dependencies:[ze,z_,jb,Ct],styles:["app-navbar[_ngcontent-%COMP%]{position:fixed;z-index:2;top:0;right:0;left:0}app-calculator[_ngcontent-%COMP%]{margin-top:53.5px}"]})}}return t})();var Sk="@",Mk=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(X);loadingSchedulerFn=c(Ak,{optional:!0});_engine;constructor(e,n,a,o,r){this.doc=e,this.delegate=n,this.zone=a,this.animationType=o,this.moduleImpl=r}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-OQJM4XDH.js").then(a=>a),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(a=>{throw new ce(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:o})=>{this._engine=a(this.animationType,this.doc);let r=new o(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(e,n){let a=this.delegate.createRenderer(e,n);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let o=new Zd(a);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(r=>{let d=r.createRenderer(e,n);o.use(d),this.scheduler??=this.injector.get(_u,null,{optional:!0}),this.scheduler?.notify(10)}).catch(r=>{o.use(a)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){$r()};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Zd=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,n,a){this.delegate.insertBefore(i,e,n,a)}removeChild(i,e,n,a){this.delegate.removeChild(i,e,n,a)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,n,a){this.delegate.setAttribute(i,e,n,a)}removeAttribute(i,e,n){this.delegate.removeAttribute(i,e,n)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,n,a){this.delegate.setStyle(i,e,n,a)}removeStyle(i,e,n){this.delegate.removeStyle(i,e,n)}setProperty(i,e,n){this.shouldReplay(e)&&this.replay.push(a=>a.setProperty(i,e,n)),this.delegate.setProperty(i,e,n)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,n,a){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,n,a)),this.delegate.listen(i,e,n,a)}shouldReplay(i){return this.replay!==null&&i.startsWith(Sk)}},Ak=new y("");function Gb(t="animations"){return lc("NgAsyncAnimations"),ko([{provide:pt,useFactory:()=>new Mk(c(Q),c(Go),c(W),t)},{provide:la,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}function Fk(t){let i=t;return 5}var Jd=["zh",[["\u4E0A\u5348","\u4E0B\u5348"]],void 0,[["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"],["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"]],void 0,[["1","2","3","4","5","6","7","8","9","10","11","12"],["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"]],void 0,[["\u516C\u5143\u524D","\u516C\u5143"]],1,[6,0],["y/M/d","y\u5E74M\u6708d\u65E5",void 0,"y\u5E74M\u6708d\u65E5EEEE"],["HH:mm","HH:mm:ss","z HH:mm:ss","zzzz HH:mm:ss"],["{1} {0}",void 0,void 0,void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"CNY","\xA5","\u4EBA\u6C11\u5E01",{AUD:["AU$","$"],BYN:[void 0,"\u0440."],CNY:["\xA5"],ILR:["ILS"],JPY:["JP\xA5","\xA5"],PHP:[void 0,"\u20B1"],RUR:[void 0,"\u0440."],TWD:["NT$"],USD:["US$","$"],XXX:[]},"ltr",Fk];Jd[14]=["#,###0.###","#,##0%","\xA4#,###0.00","#E0"];Cm(Jd);var Wb={providers:[Vu(),jc(),Gb(),{provide:fa,useValue:"zh"},{provide:Qr,useValue:"\xA5"},Pb({echarts:()=>typeof window<"u"&&window.echarts?Promise.resolve(window.echarts):import("./chunk-63IZDSAP.js")})]};var Yb={production:!0};Yb.production&&void 0;Lc($b,Wb).catch(t=>console.error(t));
