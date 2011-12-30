var jQuery=function(){function a(){if(!d.isReady){try{document.documentElement.doScroll("left")}catch(j){setTimeout(a,1);return}d.ready()}}var d=function(a,j){return new d.fn.init(a,j,n)},p=window.jQuery,h=window.$,n,m=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,q=/\S/,k=/^\s+/,u=/\s+$/,g=/\d/,c=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,f=/^[\],:{}\s]*$/,b=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,e=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,i=/(?:^|:|,)(?:\s*\[)+/g,t=/(webkit)[ \/]([\w.]+)/,
s=/(opera)(?:.*version)?[ \/]([\w.]+)/,o=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,j=/-([a-z]|[0-9])/ig,x=/^-ms-/,w=function(a,j){return(j+"").toUpperCase()},y=navigator.userAgent,l,r,F=Object.prototype.toString,A=Object.prototype.hasOwnProperty,B=Array.prototype.push,z=Array.prototype.slice,C=String.prototype.trim,D=Array.prototype.indexOf,E={};d.fn=d.prototype={constructor:d,init:function(a,j,b){var e;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(a===
"body"&&!j&&document.body)return this.context=document,this[0]=document.body,this.selector=a,this.length=1,this;if(typeof a==="string")if((e=a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?[null,a,null]:m.exec(a))&&(e[1]||!j))if(e[1])return b=(j=j instanceof d?j[0]:j)?j.ownerDocument||j:document,(a=c.exec(a))?d.isPlainObject(j)?(a=[document.createElement(a[1])],d.fn.attr.call(a,j,true)):a=[b.createElement(a[1])]:(a=d.buildFragment([e[1]],[b]),a=(a.cacheable?d.clone(a.fragment):a.fragment).childNodes),
d.merge(this,a);else{if((j=document.getElementById(e[2]))&&j.parentNode){if(j.id!==e[2])return b.find(a);this.length=1;this[0]=j}this.context=document;this.selector=a;return this}else return!j||j.jquery?(j||b).find(a):this.constructor(j).find(a);else if(d.isFunction(a))return b.ready(a);if(a.selector!==void 0)this.selector=a.selector,this.context=a.context;return d.makeArray(a,this)},selector:"",jquery:"@VERSION",length:0,size:function(){return this.length},toArray:function(){return z.call(this,0)},
get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,j,c){var b=this.constructor();d.isArray(a)?B.apply(b,a):d.merge(b,a);b.prevObject=this;b.context=this.context;if(j==="find")b.selector=this.selector+(this.selector?" ":"")+c;else if(j)b.selector=this.selector+"."+j+"("+c+")";return b},each:function(a,j){return d.each(this,a,j)},ready:function(a){d.bindReady();l.add(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},
last:function(){return this.eq(-1)},slice:function(){return this.pushStack(z.apply(this,arguments),"slice",z.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(j,c){return a.call(j,c,j)}))},end:function(){return this.prevObject||this.constructor(null)},push:B,sort:[].sort,splice:[].splice};d.fn.init.prototype=d.fn;d.extend=d.fn.extend=function(){var a,j,c,b,e,l=arguments[0]||{},i=1,r=arguments.length,x=false;typeof l==="boolean"&&(x=l,l=arguments[1]||{},i=2);typeof l!==
"object"&&!d.isFunction(l)&&(l={});r===i&&(l=this,--i);for(;i<r;i++)if((a=arguments[i])!=null)for(j in a)c=l[j],b=a[j],l!==b&&(x&&b&&(d.isPlainObject(b)||(e=d.isArray(b)))?(e?(e=false,c=c&&d.isArray(c)?c:[]):c=c&&d.isPlainObject(c)?c:{},l[j]=d.extend(x,c,b)):b!==void 0&&(l[j]=b));return l};d.extend({noConflict:function(a){if(window.$===d)window.$=h;if(a&&window.jQuery===d)window.jQuery=p;return d},isReady:false,readyWait:1,holdReady:function(a){a?d.readyWait++:d.ready(true)},ready:function(a){if(a===
true&&!--d.readyWait||a!==true&&!d.isReady){if(!document.body)return setTimeout(d.ready,1);d.isReady=true;a!==true&&--d.readyWait>0||(l.fireWith(document,[d]),d.fn.trigger&&d(document).trigger("ready").unbind("ready"))}},bindReady:function(){if(!l){l=d.Callbacks("once memory");if(document.readyState==="complete")return setTimeout(d.ready,1);if(document.addEventListener)document.addEventListener("DOMContentLoaded",r,false),window.addEventListener("load",d.ready,false);else if(document.attachEvent){document.attachEvent("onreadystatechange",
r);window.attachEvent("onload",d.ready);var j=false;try{j=window.frameElement==null}catch(c){}document.documentElement.doScroll&&j&&a()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNumeric:function(a){return a!=null&&g.test(a)&&!isNaN(a)},type:function(a){return a==null?String(a):E[F.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||
a.nodeType||d.isWindow(a))return false;try{if(a.constructor&&!A.call(a,"constructor")&&!A.call(a.constructor.prototype,"isPrototypeOf"))return false}catch(j){return false}for(var c in a);return c===void 0||A.call(a,c)},isEmptyObject:function(a){for(var j in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=d.trim(a);if(window.JSON&&window.JSON.parse)return window.JSON.parse(a);if(f.test(a.replace(b,"@").replace(e,"]").replace(i,
"")))return(new Function("return "+a))();d.error("Invalid JSON: "+a)},parseXML:function(a){var j,c;try{window.DOMParser?(c=new DOMParser,j=c.parseFromString(a,"text/xml")):(j=new ActiveXObject("Microsoft.XMLDOM"),j.async="false",j.loadXML(a))}catch(b){j=void 0}(!j||!j.documentElement||j.getElementsByTagName("parsererror").length)&&d.error("Invalid XML: "+a);return j},noop:function(){},globalEval:function(a){a&&q.test(a)&&(window.execScript||function(a){window.eval.call(window,a)})(a)},camelCase:function(a){return a.replace(x,
"ms-").replace(j,w)},nodeName:function(a,j){return a.nodeName&&a.nodeName.toUpperCase()===j.toUpperCase()},each:function(a,j,c){var b,e=0,l=a.length,i=l===void 0||d.isFunction(a);if(c)if(i)for(b in a){if(j.apply(a[b],c)===false)break}else for(;e<l;){if(j.apply(a[e++],c)===false)break}else if(i)for(b in a){if(j.call(a[b],b,a[b])===false)break}else for(;e<l;)if(j.call(a[e],e,a[e++])===false)break;return a},trim:C?function(a){return a==null?"":C.call(a)}:function(a){return a==null?"":a.toString().replace(k,
"").replace(u,"")},makeArray:function(a,j){var c=j||[];if(a!=null){var b=d.type(a);a.length==null||b==="string"||b==="function"||b==="regexp"||d.isWindow(a)?B.call(c,a):d.merge(c,a)}return c},inArray:function(a,j,c){var b;if(j){if(D)return D.call(j,a,c);b=j.length;for(c=c?c<0?Math.max(0,b+c):c:0;c<b;c++)if(c in j&&j[c]===a)return c}return-1},merge:function(a,j){var c=a.length,b=0;if(typeof j.length==="number")for(var e=j.length;b<e;b++)a[c++]=j[b];else for(;j[b]!==void 0;)a[c++]=j[b++];a.length=c;
return a},grep:function(a,j,c){for(var b=[],e,c=!!c,l=0,i=a.length;l<i;l++)e=!!j(a[l],l),c!==e&&b.push(a[l]);return b},map:function(a,j,c){var b,e,l=[],i=0,r=a.length;if(a instanceof d||r!==void 0&&typeof r==="number"&&(r>0&&a[0]&&a[r-1]||r===0||d.isArray(a)))for(;i<r;i++)b=j(a[i],i,c),b!=null&&(l[l.length]=b);else for(e in a)b=j(a[e],e,c),b!=null&&(l[l.length]=b);return l.concat.apply([],l)},guid:1,proxy:function(a,j){if(typeof j==="string")var c=a[j],j=a,a=c;if(d.isFunction(a)){var b=z.call(arguments,
2),c=function(){return a.apply(j,b.concat(z.call(arguments)))};c.guid=a.guid=a.guid||c.guid||d.guid++;return c}},access:function(a,j,c,b,e,l){var i=a.length;if(typeof j==="object"){for(var r in j)d.access(a,r,j[r],b,e,c);return a}if(c!==void 0){b=!l&&b&&d.isFunction(c);for(r=0;r<i;r++)e(a[r],j,b?c.call(a[r],r,e(a[r],j)):c,l);return a}return i?e(a[0],j):void 0},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();a=t.exec(a)||s.exec(a)||o.exec(a)||a.indexOf("compatible")<
0&&v.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},sub:function(){function a(j,c){return new a.fn.init(j,c)}d.extend(true,a,this);a.superclass=this;a.fn=a.prototype=this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function(c,b){b&&b instanceof d&&!(b instanceof a)&&(b=a(b));return d.fn.init.call(this,c,b,j)};a.fn.init.prototype=a.fn;var j=a(document);return a},browser:{}});d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,j){E["[object "+j+"]"]=j.toLowerCase()});
y=d.uaMatch(y);if(y.browser)d.browser[y.browser]=true,d.browser.version=y.version;if(d.browser.webkit)d.browser.safari=true;q.test("\u00a0")&&(k=/^[\s\xA0]+/,u=/[\s\xA0]+$/);n=d(document);document.addEventListener?r=function(){document.removeEventListener("DOMContentLoaded",r,false);d.ready()}:document.attachEvent&&(r=function(){document.readyState==="complete"&&(document.detachEvent("onreadystatechange",r),d.ready())});typeof define==="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],
function(){return d});return d}();
(function(){function a(a,c,b,e,l,i){for(var l=0,f=e.length;l<f;l++){var g=e[l];if(g){for(var t=false,g=g[a];g;){if(g.sizcache===b){t=e[g.sizset];break}if(g.nodeType===1&&!i)g.sizcache=b,g.sizset=l;if(g.nodeName.toLowerCase()===c){t=g;break}g=g[a]}e[l]=t}}}function d(a,c,b,e,l,i){for(var l=0,f=e.length;l<f;l++){var t=e[l];if(t){for(var s=false,t=t[a];t;){if(t.sizcache===b){s=e[t.sizset];break}if(t.nodeType===1){if(!i)t.sizcache=b,t.sizset=l;if(typeof c!=="string"){if(t===c){s=true;break}}else if(g.filter(c,
[t]).length>0){s=t;break}}t=t[a]}e[l]=s}}}var p=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,h=0,n=Object.prototype.toString,m=false,q=true,k=/\\/g,u=/\W/;[0,0].sort(function(){q=false;return 0});var g=function(a,b,e,t){var e=e||[],l=b=b||document;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof a!=="string")return e;var r,s,o,d,m,q=true,k=g.isXML(b),h=[],u=a;do if(p.exec(""),r=p.exec(u))if(u=r[3],h.push(r[1]),
r[2]){d=r[3];break}while(r);if(h.length>1&&f.exec(a))if(h.length===2&&c.relative[h[0]])s=v(h[0]+h[1],b);else for(s=c.relative[h[0]]?[b]:g(h.shift(),b);h.length;)a=h.shift(),c.relative[a]&&(a+=h.shift()),s=v(a,s);else if(!t&&h.length>1&&b.nodeType===9&&!k&&c.match.ID.test(h[0])&&!c.match.ID.test(h[h.length-1])&&(r=g.find(h.shift(),b,k),b=r.expr?g.filter(r.expr,r.set)[0]:r.set[0]),b){r=t?{expr:h.pop(),set:i(t)}:g.find(h.pop(),h.length===1&&(h[0]==="~"||h[0]==="+")&&b.parentNode?b.parentNode:b,k);s=
r.expr?g.filter(r.expr,r.set):r.set;for(h.length>0?o=i(s):q=false;h.length;)r=m=h.pop(),c.relative[m]?r=h.pop():m="",r==null&&(r=b),c.relative[m](o,r,k)}else o=[];o||(o=s);o||g.error(m||a);if(n.call(o)==="[object Array]")if(q)if(b&&b.nodeType===1)for(a=0;o[a]!=null;a++)o[a]&&(o[a]===true||o[a].nodeType===1&&g.contains(b,o[a]))&&e.push(s[a]);else for(a=0;o[a]!=null;a++)o[a]&&o[a].nodeType===1&&e.push(s[a]);else e.push.apply(e,o);else i(o,e);d&&(g(d,l,e,t),g.uniqueSort(e));return e};g.uniqueSort=function(a){if(s&&
(m=q,a.sort(s),m))for(var c=1;c<a.length;c++)a[c]===a[c-1]&&a.splice(c--,1);return a};g.matches=function(a,c){return g(a,null,null,c)};g.matchesSelector=function(a,c){return g(c,null,null,[a]).length>0};g.find=function(a,b,e){var i;if(!a)return[];for(var l=0,r=c.order.length;l<r;l++){var f,g=c.order[l];if(f=c.leftMatch[g].exec(a)){var t=f[1];f.splice(1,1);if(t.substr(t.length-1)!=="\\"&&(f[1]=(f[1]||"").replace(k,""),i=c.find[g](f,b,e),i!=null)){a=a.replace(c.match[g],"");break}}}i||(i=typeof b.getElementsByTagName!==
"undefined"?b.getElementsByTagName("*"):[]);return{set:i,expr:a}};g.filter=function(a,b,e,i){for(var l,r,f=a,t=[],o=b,s=b&&b[0]&&g.isXML(b[0]);a&&b.length;){for(var d in c.filter)if((l=c.leftMatch[d].exec(a))!=null&&l[2]){var m,v,h=c.filter[d];v=l[1];r=false;l.splice(1,1);if(v.substr(v.length-1)!=="\\"){o===t&&(t=[]);if(c.preFilter[d])if(l=c.preFilter[d](l,o,e,t,i,s)){if(l===true)continue}else r=m=true;if(l)for(var k=0;(v=o[k])!=null;k++)if(v){m=h(v,l,k,o);var q=i^!!m;e&&m!=null?q?r=true:o[k]=false:
q&&(t.push(v),r=true)}if(m!==void 0){e||(o=t);a=a.replace(c.match[d],"");if(!r)return[];break}}}if(a===f)if(r==null)g.error(a);else break;f=a}return o};g.error=function(a){throw"Syntax error, unrecognized expression: "+a;};var c=g.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,c){var b=
typeof c==="string",e=b&&!u.test(c),b=b&&!e;e&&(c=c.toLowerCase());for(var e=0,l=a.length,i;e<l;e++)if(i=a[e]){for(;(i=i.previousSibling)&&i.nodeType!==1;);a[e]=b||i&&i.nodeName.toLowerCase()===c?i||false:i===c}b&&g.filter(c,a,true)},">":function(a,c){var b,e=typeof c==="string",l=0,i=a.length;if(e&&!u.test(c))for(c=c.toLowerCase();l<i;l++){if(b=a[l])b=b.parentNode,a[l]=b.nodeName.toLowerCase()===c?b:false}else{for(;l<i;l++)(b=a[l])&&(a[l]=e?b.parentNode:b.parentNode===c);e&&g.filter(c,a,true)}},
"":function(c,b,e){var i,l=h++,r=d;typeof b==="string"&&!u.test(b)&&(i=b=b.toLowerCase(),r=a);r("parentNode",b,l,c,i,e)},"~":function(c,b,e){var i,l=h++,r=d;typeof b==="string"&&!u.test(b)&&(i=b=b.toLowerCase(),r=a);r("previousSibling",b,l,c,i,e)}},find:{ID:function(a,c,b){if(typeof c.getElementById!=="undefined"&&!b)return(a=c.getElementById(a[1]))&&a.parentNode?[a]:[]},NAME:function(a,c){if(typeof c.getElementsByName!=="undefined"){for(var b=[],e=c.getElementsByName(a[1]),i=0,r=e.length;i<r;i++)e[i].getAttribute("name")===
a[1]&&b.push(e[i]);return b.length===0?null:b}},TAG:function(a,c){if(typeof c.getElementsByTagName!=="undefined")return c.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,c,b,e,i,r){a=" "+a[1].replace(k,"")+" ";if(r)return a;for(var r=0,f;(f=c[r])!=null;r++)f&&(i^(f.className&&(" "+f.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?b||e.push(f):b&&(c[r]=false));return false},ID:function(a){return a[1].replace(k,"")},TAG:function(a){return a[1].replace(k,"").toLowerCase()},CHILD:function(a){if(a[1]===
"nth"){a[2]||g.error(a[0]);a[2]=a[2].replace(/^\+|\s*/g,"");var c=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=c[1]+(c[2]||1)-0;a[3]=c[3]-0}else a[2]&&g.error(a[0]);a[0]=h++;return a},ATTR:function(a,b,e,i,l,r){b=a[1]=a[1].replace(k,"");!r&&c.attrMap[b]&&(a[1]=c.attrMap[b]);a[4]=(a[4]||a[5]||"").replace(k,"");a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(a,b,e,i,l){if(a[1]==="not")if((p.exec(a[3])||"").length>1||
/^\w/.test(a[3]))a[3]=g(a[3],null,null,b);else return a=g.filter(a[3],b,e,1^l),e||i.push.apply(i,a),false;else if(c.match.POS.test(a[0])||c.match.CHILD.test(a[0]))return true;return a},POS:function(a){a.unshift(true);return a}},filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},disabled:function(a){return a.disabled===true},checked:function(a){return a.checked===true},selected:function(a){return a.selected===true},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},
has:function(a,c,b){return!!g(b[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.getAttribute("type")},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||
a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,c){return c===0},last:function(a,c,b,e){return c===e.length-1},even:function(a,c){return c%2===0},odd:function(a,c){return c%2===1},lt:function(a,c,b){return c<b[3]-0},gt:function(a,c,b){return c>b[3]-0},nth:function(a,c,b){return b[3]-0===c},eq:function(a,c,b){return b[3]-0===c}},filter:{PSEUDO:function(a,b,e,i){var l=b[1],r=c.filters[l];if(r)return r(a,e,b,
i);else if(l==="contains")return(a.textContent||a.innerText||g.getText([a])||"").indexOf(b[3])>=0;else if(l==="not"){b=b[3];e=0;for(i=b.length;e<i;e++)if(b[e]===a)return false;return true}else g.error(l)},CHILD:function(a,c){var b=c[1],e=a;switch(b){case "only":case "first":for(;e=e.previousSibling;)if(e.nodeType===1)return false;if(b==="first")return true;e=a;case "last":for(;e=e.nextSibling;)if(e.nodeType===1)return false;return true;case "nth":var b=c[2],i=c[3];if(b===1&&i===0)return true;var r=
c[0],f=a.parentNode;if(f&&(f.sizcache!==r||!a.nodeIndex)){for(var g=0,e=f.firstChild;e;e=e.nextSibling)if(e.nodeType===1)e.nodeIndex=++g;f.sizcache=r}e=a.nodeIndex-i;return b===0?e===0:e%b===0&&e/b>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var e=b[1],e=c.attrHandle[e]?c.attrHandle[e](a):
a[e]!=null?a[e]:a.getAttribute(e),i=e+"",l=b[2],f=b[4];return e==null?l==="!=":l==="="?i===f:l==="*="?i.indexOf(f)>=0:l==="~="?(" "+i+" ").indexOf(f)>=0:!f?i&&e!==false:l==="!="?i!==f:l==="^="?i.indexOf(f)===0:l==="$="?i.substr(i.length-f.length)===f:l==="|="?i===f||i.substr(0,f.length+1)===f+"-":false},POS:function(a,b,e,i){var l=c.setFilters[b[2]];if(l)return l(a,e,b,i)}}},f=c.match.POS,b=function(a,b){return"\\"+(b-0+1)},e;for(e in c.match)c.match[e]=RegExp(c.match[e].source+/(?![^\[]*\])(?![^\(]*\))/.source),
c.leftMatch[e]=RegExp(/(^(?:.|\r|\n)*?)/.source+c.match[e].source.replace(/\\(\d+)/g,b));var i=function(a,b){a=Array.prototype.slice.call(a,0);return b?(b.push.apply(b,a),b):a};try{Array.prototype.slice.call(document.documentElement.childNodes,0)}catch(t){i=function(a,b){var c=0,e=b||[];if(n.call(a)==="[object Array]")Array.prototype.push.apply(e,a);else if(typeof a.length==="number")for(var i=a.length;c<i;c++)e.push(a[c]);else for(;a[c];c++)e.push(a[c]);return e}}var s,o;document.documentElement.compareDocumentPosition?
s=function(a,b){return a===b?(m=true,0):!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&4?-1:1}:(s=function(a,b){var c,e,i=[],f=[];c=a.parentNode;e=b.parentNode;var g=c;if(a===b)return m=true,0;else if(c===e)return o(a,b);else if(c){if(!e)return 1}else return-1;for(;g;)i.unshift(g),g=g.parentNode;for(g=e;g;)f.unshift(g),g=g.parentNode;c=i.length;e=f.length;for(g=0;g<c&&g<e;g++)if(i[g]!==f[g])return o(i[g],f[g]);return g===c?o(a,f[g],
-1):o(i[g],b,1)},o=function(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=a.nextSibling}return 1});g.getText=function(a){for(var b="",c,e=0;a[e];e++)c=a[e],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=g.getText(c.childNodes));return b};(function(){var a=document.createElement("div"),b="script"+(new Date).getTime(),e=document.documentElement;a.innerHTML="<a name='"+b+"'/>";e.insertBefore(a,e.firstChild);if(document.getElementById(b))c.find.ID=function(a,
b,c){if(typeof b.getElementById!=="undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!=="undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:void 0:[]},c.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b};e.removeChild(a);e=a=null})();(function(){var a=document.createElement("div");a.appendChild(document.createComment(""));if(a.getElementsByTagName("*").length>0)c.find.TAG=
function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){for(var e=[],i=0;c[i];i++)c[i].nodeType===1&&e.push(c[i]);c=e}return c};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#")c.attrHandle.href=function(a){return a.getAttribute("href",2)};a=null})();document.querySelectorAll&&function(){var a=g,b=document.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&b.querySelectorAll(".TEST").length===
0)){g=function(b,e,f,t){e=e||document;if(!t&&!g.isXML(e)){var o=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(o&&(e.nodeType===1||e.nodeType===9))if(o[1])return i(e.getElementsByTagName(b),f);else if(o[2]&&c.find.CLASS&&e.getElementsByClassName)return i(e.getElementsByClassName(o[2]),f);if(e.nodeType===9){if(b==="body"&&e.body)return i([e.body],f);else if(o&&o[3]){var s=e.getElementById(o[3]);if(s&&s.parentNode){if(s.id===o[3])return i([s],f)}else return i([],f)}try{return i(e.querySelectorAll(b),
f)}catch(d){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var o=e,m=(s=e.getAttribute("id"))||"__sizzle__",v=e.parentNode,h=/^\s*[+~]/.test(b);s?m=m.replace(/'/g,"\\$&"):e.setAttribute("id",m);if(h&&v)e=e.parentNode;try{if(!h||v)return i(e.querySelectorAll("[id='"+m+"'] "+b),f)}catch(k){}finally{s||o.removeAttribute("id")}}}return a(b,e,f,t)};for(var e in a)g[e]=a[e];b=null}}();(function(){var a=document.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||
a.msMatchesSelector,e=false;try{b.call(document.documentElement,"[test!='']:sizzle")}catch(i){e=true}if(b)g.matchesSelector=function(a,i){i=i.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!g.isXML(a))try{if(e||!c.match.PSEUDO.test(i)&&!/!=/.test(i))return b.call(a,i)}catch(f){}return g(i,null,null,[a]).length>0}})();(function(){var a=document.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0&&
(a.lastChild.className="e",a.getElementsByClassName("e").length!==1))c.order.splice(1,0,"CLASS"),c.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null})();g.contains=document.documentElement.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):true)}:document.documentElement.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(){return false};g.isXML=function(a){return(a=(a?a.ownerDocument||
a:0).documentElement)?a.nodeName!=="HTML":false};var v=function(a,b){for(var e,i=[],f="",t=b.nodeType?[b]:b;e=c.match.PSEUDO.exec(a);)f+=e[0],a=a.replace(c.match.PSEUDO,"");a=c.relative[a]?a+"*":a;e=0;for(var o=t.length;e<o;e++)g(a,t[e],i);return g.filter(f,i)};window.Sizzle=g})();Sizzle.attr=jQuery.attr;Sizzle.selectors.attrMap={};jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.filters;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;
jQuery.contains=Sizzle.contains;
(function(a){function d(a){var d=p[a]={},m,q,a=a.split(/\s+/);for(m=0,q=a.length;m<q;m++)d[a[m]]=true;return d}var p={};a.Callbacks=function(h){var h=h?p[h]||d(h):{},n=[],m=[],q,k,u,g,c,f=function(b){var c,g,o,d;for(c=0,g=b.length;c<g;c++)o=b[c],d=a.type(o),d==="array"?f(o):d==="function"&&(!h.unique||!e.has(o))&&n.push(o)},b=function(a,b){b=b||[];q=!h.memory||[a,b];k=true;c=u||0;u=0;for(g=n.length;n&&c<g;c++)if(n[c].apply(a,b)===false&&h.stopOnFalse){q=true;break}k=false;n&&(h.once?q===true?e.disable():
n=[]:m&&m.length&&(q=m.shift(),e.fireWith(q[0],q[1])))},e={add:function(){if(n){var a=n.length;f(arguments);k?g=n.length:q&&q!==true&&(u=a,b(q[0],q[1]))}return this},remove:function(){if(n)for(var a=arguments,b=0,e=a.length;b<e;b++)for(var f=0;f<n.length;f++)if(a[b]===n[f]&&(k&&f<=g&&(g--,f<=c&&c--),n.splice(f--,1),h.unique))break;return this},has:function(a){if(n)for(var b=0,c=n.length;b<c;b++)if(a===n[b])return true;return false},empty:function(){n=[];return this},disable:function(){n=m=q=void 0;
return this},disabled:function(){return!n},lock:function(){m=void 0;(!q||q===true)&&e.disable();return this},locked:function(){return!m},fireWith:function(a,c){m&&(k?h.once||m.push([a,c]):(!h.once||!q)&&b(a,c));return this},fire:function(){e.fireWith(this,arguments);return this},fired:function(){return!!q}};return e}})(jQuery);
(function(a){a.support=function(){var d=document.createElement("div"),p=document.documentElement,h,n,m,q,k,u;d.setAttribute("className","t");d.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>";h=d.getElementsByTagName("*");n=d.getElementsByTagName("a")[0];if(!h||!h.length||!n)return{};m=document.createElement("select");q=m.appendChild(document.createElement("option"));h=d.getElementsByTagName("input")[0];k={leadingWhitespace:d.firstChild.nodeType===
3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(n.getAttribute("style")),hrefNormalized:n.getAttribute("href")==="/a",opacity:/^0.55/.test(n.style.opacity),cssFloat:!!n.style.cssFloat,unknownElems:!!d.getElementsByTagName("nav").length,checkOn:h.value==="on",optSelected:q.selected,getSetAttribute:d.className!=="t",enctype:!!document.createElement("form").enctype,submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,
noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true};h.checked=true;k.noCloneChecked=h.cloneNode(true).checked;m.disabled=true;k.optDisabled=!q.disabled;try{delete d.test}catch(g){k.deleteExpando=false}!d.addEventListener&&d.attachEvent&&d.fireEvent&&(d.attachEvent("onclick",function(){k.noCloneEvent=false}),d.cloneNode(true).fireEvent("onclick"));h=document.createElement("input");h.value="t";h.setAttribute("type","radio");k.radioValue=h.value==="t";h.setAttribute("checked",
"checked");d.appendChild(h);n=document.createDocumentFragment();n.appendChild(d.lastChild);k.checkClone=n.cloneNode(true).cloneNode(true).lastChild.checked;d.innerHTML="";d.style.width=d.style.paddingLeft="1px";m=document.getElementsByTagName("body")[0];n=document.createElement(m?"div":"body");q={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};m&&a.extend(q,{position:"absolute",left:"-999px",top:"-999px"});for(u in q)n.style[u]=q[u];n.appendChild(d);p=m||p;p.insertBefore(n,
p.firstChild);k.appendChecked=h.checked;k.boxModel=d.offsetWidth===2;if("zoom"in d.style)d.style.display="inline",d.style.zoom=1,k.inlineBlockNeedsLayout=d.offsetWidth===2,d.style.display="",d.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=d.offsetWidth!==2;d.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";m=d.getElementsByTagName("td");h=m[0].offsetHeight===0;m[0].style.display="";m[1].style.display="none";k.reliableHiddenOffsets=h&&
m[0].offsetHeight===0;d.innerHTML="";if(document.defaultView&&document.defaultView.getComputedStyle)h=document.createElement("div"),h.style.width="0",h.style.marginRight="0",d.appendChild(h),k.reliableMarginRight=(parseInt((document.defaultView.getComputedStyle(h,null)||{marginRight:0}).marginRight,10)||0)===0;n.innerHTML="";if(d.attachEvent)for(u in{submit:1,change:1,focusin:1})m="on"+u,h=m in d,h||(d.setAttribute(m,"return;"),h=typeof d[m]==="function"),k[u+"Bubbles"]=h;n.style.position="static";
n.style.top="0px";n.style.marginTop="1px";d=function(a,f){var b,e,i,g=parseFloat(a.style.marginTop)||0;f.style.cssText="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:0;visibility:hidden";f.innerHTML="<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(f,a.firstChild);b=f.firstChild;e=b.firstChild;i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:b.nextSibling.firstChild.firstChild.offsetTop===5};e.style.position="fixed";e.style.top="20px";i.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15;e.style.position=e.style.top="";b.style.overflow="hidden";b.style.position="relative";i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5;i.doesNotIncludeMarginInBodyOffset=a.offsetTop!==g;return i}(n,d);a.extend(k,d);
p.removeChild(n);n=n=m=q=m=h=d=h=null;return k}();a.boxModel=a.support.boxModel})(jQuery);
(function(a){function d(b,e,s){var o=e==="width"?b.offsetWidth:b.offsetHeight,d=e==="width"?g:c;if(o>0)return s!=="border"&&a.each(d,function(){s||(o-=parseFloat(a.css(b,"padding"+this))||0);s==="margin"?o+=parseFloat(a.css(b,s+this))||0:o-=parseFloat(a.css(b,"border"+this+"Width"))||0}),o+"px";o=f(b,e,e);if(o<0||o==null)o=b.style[e]||0;o=parseFloat(o)||0;s&&a.each(d,function(){o+=parseFloat(a.css(b,"padding"+this))||0;s!=="padding"&&(o+=parseFloat(a.css(b,"border"+this+"Width"))||0);s==="margin"&&
(o+=parseFloat(a.css(b,s+this))||0)});return o+"px"}var p=/alpha\([^)]*\)/i,h=/opacity=([^)]*)/,n=/([A-Z]|^ms)/g,m=/^-?\d+(?:px)?$/i,q=/^-?\d/,k=/^([\-+])=([\-+.\de]+)/,u={position:"absolute",visibility:"hidden",display:"block"},g=["Left","Right"],c=["Top","Bottom"],f,b,e;a.fn.css=function(b,c){return arguments.length===2&&c===void 0?this:a.access(this,b,c,true,function(b,c,e){return e!==void 0?a.style(b,c,e):a.css(b,c)})};a.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=f(a,"opacity","opacity");
return c===""?"1":c}else return a.style.opacity}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":a.support.cssFloat?"cssFloat":"styleFloat"},style:function(b,c,e,f){if(b&&!(b.nodeType===3||b.nodeType===8||!b.style)){var g,j=a.camelCase(c),d=b.style,m=a.cssHooks[j],c=a.cssProps[j]||j;if(e!==void 0){f=typeof e;if(f==="string"&&(g=k.exec(e)))e=+(g[1]+1)*+g[2]+parseFloat(a.css(b,c)),f="number";if(!(e==null||f===
"number"&&isNaN(e)))if(f==="number"&&!a.cssNumber[j]&&(e+="px"),!m||!("set"in m)||(e=m.set(b,e))!==void 0)try{d[c]=e}catch(h){}}else return m&&"get"in m&&(g=m.get(b,false,f))!==void 0?g:d[c]}},css:function(b,c,e){var g,d,c=a.camelCase(c);d=a.cssHooks[c];c=a.cssProps[c]||c;c==="cssFloat"&&(c="float");if(d&&"get"in d&&(g=d.get(b,true,e))!==void 0)return g;else if(f)return f(b,c)},swap:function(a,b,c){var e={},f;for(f in b)e[f]=a.style[f],a.style[f]=b[f];c.call(a);for(f in b)a.style[f]=e[f]}});a.curCSS=
a.css;a.each(["height","width"],function(b,c){a.cssHooks[c]={get:function(b,e,i){var f;if(e){if(b.offsetWidth!==0)return d(b,c,i);else a.swap(b,u,function(){f=d(b,c,i)});return f}},set:function(a,b){if(m.test(b)){if(b=parseFloat(b),b>=0)return b+"px"}else return b}}});if(!a.support.opacity)a.cssHooks.opacity={get:function(a,b){return h.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(b,c){var e=b.style,f=b.currentStyle,g=a.isNumeric(c)?
"alpha(opacity="+c*100+")":"",j=f&&f.filter||e.filter||"";e.zoom=1;if(c>=1&&a.trim(j.replace(p,""))===""&&(e.removeAttribute("filter"),f&&!f.filter))return;e.filter=p.test(j)?j.replace(p,g):j+" "+g}};a(function(){if(!a.support.reliableMarginRight)a.cssHooks.marginRight={get:function(b,c){var e;a.swap(b,{display:"inline-block"},function(){e=c?f(b,"margin-right","marginRight"):b.style.marginRight});return e}}});document.defaultView&&document.defaultView.getComputedStyle&&(b=function(b,c){var e,f,c=
c.replace(n,"-$1").toLowerCase();if(f=b.ownerDocument.defaultView){if(f=f.getComputedStyle(b,null))e=f.getPropertyValue(c),e===""&&!a.contains(b.ownerDocument.documentElement,b)&&(e=a.style(b,c));return e}});document.documentElement.currentStyle&&(e=function(a,b){var c,e=a.currentStyle&&a.currentStyle[b],f=a.runtimeStyle&&a.runtimeStyle[b],g=a.style;e===null&&g&&(e=g[b]);if(!m.test(e)&&q.test(e)){c=g.left;if(f)a.runtimeStyle.left=a.currentStyle.left;g.left=b==="fontSize"?"1em":e||0;e=g.pixelLeft+
"px";g.left=c;if(f)a.runtimeStyle.left=f}return e===""?"auto":e});f=b||e;if(a.expr&&a.expr.filters)a.expr.filters.hidden=function(b){var c=b.offsetHeight;return b.offsetWidth===0&&c===0||!a.support.reliableHiddenOffsets&&(b.style&&b.style.display||a.css(b,"display"))==="none"},a.expr.filters.visible=function(b){return!a.expr.filters.hidden(b)}})(jQuery);
(function(a){function d(d,q,k){if(k===void 0&&d.nodeType===1)if(k="data-"+q.replace(n,"-$1").toLowerCase(),k=d.getAttribute(k),typeof k==="string"){try{k=k==="true"?true:k==="false"?false:k==="null"?null:a.isNumeric(k)?parseFloat(k):h.test(k)?a.parseJSON(k):k}catch(u){}a.data(d,q,k)}else k=void 0;return k}function p(d){for(var h in d)if(!(h==="data"&&a.isEmptyObject(d[h]))&&h!=="toJSON")return false;return true}var h=/^(?:\{.*\}|\[.*\])$/,n=/([A-Z])/g;a.extend({cache:{},uuid:0,expando:"jQuery"+(a.fn.jquery+
Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(d){d=d.nodeType?a.cache[d[a.expando]]:d[a.expando];return!!d&&!p(d)},data:function(d,h,k,n){if(a.acceptData(d)){var g=a.expando,c=typeof h==="string",f=d.nodeType,b=f?a.cache:d,e=f?d[a.expando]:d[a.expando]&&a.expando;if(e&&b[e]&&(n||b[e].data)||!(c&&k===void 0)){if(!e)f?d[a.expando]=e=++a.uuid:e=a.expando;if(!b[e]&&(b[e]={},!f))b[e].toJSON=a.noop;if(typeof h==="object"||
typeof h==="function")n?b[e]=a.extend(b[e],h):b[e].data=a.extend(b[e].data,h);d=b[e];if(!n){if(!d.data)d.data={};d=d.data}k!==void 0&&(d[a.camelCase(h)]=k);if(h==="events"&&!d[h])return d[g]&&d[g].events;c?(k=d[h],k==null&&(k=d[a.camelCase(h)])):k=d;return k}}},removeData:function(d,h,k){if(a.acceptData(d)){var n,g,c,f=d.nodeType,b=f?a.cache:d,e=f?d[a.expando]:a.expando;if(b[e]){if(h&&(n=k?b[e]:b[e].data)){a.isArray(h)||(h in n?h=[h]:(h=a.camelCase(h),h=h in n?[h]:h.split(" ")));for(g=0,c=h.length;g<
c;g++)delete n[h[g]];if(!(k?p:a.isEmptyObject)(n))return}if(!k&&(delete b[e].data,!p(b[e])))return;a.support.deleteExpando||!b.setInterval?delete b[e]:b[e]=null;f&&(a.support.deleteExpando?delete d[a.expando]:d.removeAttribute?d.removeAttribute(a.expando):d[a.expando]=null)}}},_data:function(d,h,k){return a.data(d,h,k,true)},acceptData:function(d){if(d.nodeName){var h=a.noData[d.nodeName.toLowerCase()];if(h)return!(h===true||d.getAttribute("classid")!==h)}return true}});a.fn.extend({data:function(h,
n){var k,p,g,c=null;if(typeof h==="undefined"){if(this.length&&(c=a.data(this[0]),this[0].nodeType===1&&!a._data(this[0],"parsedAttrs"))){p=this[0].attributes;for(var f=0,b=p.length;f<b;f++)g=p[f].name,g.indexOf("data-")===0&&(g=a.camelCase(g.substring(5)),d(this[0],g,c[g]));a._data(this[0],"parsedAttrs",true)}return c}else if(typeof h==="object")return this.each(function(){a.data(this,h)});k=h.split(".");k[1]=k[1]?"."+k[1]:"";return n===void 0?(c=this.triggerHandler("getData"+k[1]+"!",[k[0]]),c===
void 0&&this.length&&(c=a.data(this[0],h),c=d(this[0],h,c)),c===void 0&&k[1]?this.data(k[0]):c):this.each(function(){var b=a(this),c=[k[0],n];b.triggerHandler("setData"+k[1]+"!",c);a.data(this,h,n);b.triggerHandler("changeData"+k[1]+"!",c)})},removeData:function(d){return this.each(function(){a.removeData(this,d)})}})})(jQuery);
(function(a){function d(){return false}function p(){return true}var h=/^(?:textarea|input|select)$/i,n=/^([^\.]*)?(?:\.(.+))?$/,m=/\bhover(\.\S+)?/,q=/^key/,k=/^(?:mouse|contextmenu)|click/,u=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,g=function(a){if(a=u.exec(a))a[1]=(a[1]||"").toLowerCase(),a[3]=a[3]&&RegExp("(?:^|\\s)"+a[3]+"(?:\\s|$)");return a};a.event={add:function(c,f,b,e,i){var d,s,o,h,j,k,q,p,l;if(!(c.nodeType===3||c.nodeType===8||!f||!b||!(d=a._data(c)))){if(b.handler)q=b,b=q.handler;if(!b.guid)b.guid=
a.guid++;o=d.events;if(!o)d.events=o={};s=d.handle;if(!s)d.handle=s=function(b){return typeof a!=="undefined"&&(!b||a.event.triggered!==b.type)?a.event.dispatch.apply(s.elem,arguments):void 0},s.elem=c;f=f.replace(m,"mouseover$1 mouseout$1").split(" ");for(d=0;d<f.length;d++){h=n.exec(f[d])||[];j=h[1];k=(h[2]||"").split(".").sort();l=a.event.special[j]||{};j=(i?l.delegateType:l.bindType)||j;l=a.event.special[j]||{};h=a.extend({type:j,origType:h[1],data:e,handler:b,guid:b.guid,selector:i,namespace:k.join(".")},
q);if(i&&(h.quick=g(i),!h.quick&&a.expr.match.POS.test(i)))h.isPositional=true;p=o[j];if(!p&&(p=o[j]=[],p.delegateCount=0,!l.setup||l.setup.call(c,e,k,s)===false))c.addEventListener?c.addEventListener(j,s,false):c.attachEvent&&c.attachEvent("on"+j,s);if(l.add&&(l.add.call(c,h),!h.handler.guid))h.handler.guid=b.guid;i?p.splice(p.delegateCount++,0,h):p.push(h);a.event.global[j]=true}c=null}},global:{},remove:function(c,f,b,e){var i=a.hasData(c)&&a._data(c),g,d,o,h,j,k,q,p,l;if(i&&(k=i.events)){f=(f||
"").replace(m,"mouseover$1 mouseout$1").split(" ");for(g=0;g<f.length;g++){d=n.exec(f[g])||[];o=d[1];d=d[2];if(!o){d=d?"."+d:"";for(j in k)a.event.remove(c,j+d,b,e);return}q=a.event.special[o]||{};o=(e?q.delegateType:q.bindType)||o;p=k[o]||[];h=p.length;d=d?RegExp("(^|\\.)"+d.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;if(b||d||e||q.remove)for(j=0;j<p.length;j++){if(l=p[j],!b||b.guid===l.guid)if(!d||d.test(l.namespace))if(!e||e===l.selector||e==="**"&&l.selector)p.splice(j--,1),l.selector&&
p.delegateCount--,q.remove&&q.remove.call(c,l)}else p.length=0;p.length===0&&h!==p.length&&((!q.teardown||q.teardown.call(c,d)===false)&&a.removeEvent(c,o,i.handle),delete k[o])}if(a.isEmptyObject(k)){if(f=i.handle)f.elem=null;a.removeData(c,["events","handle"],true)}}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(c,f,b,e){if(!b||!(b.nodeType===3||b.nodeType===8)){var i=c.type||c,g=[],d,h,k,j;i.indexOf("!")>=0&&(i=i.slice(0,-1),d=true);i.indexOf(".")>=0&&(g=i.split("."),
i=g.shift(),g.sort());if(b&&!a.event.customEvent[i]||a.event.global[i])if(c=typeof c==="object"?c[a.expando]?c:new a.Event(i,c):new a.Event(i),c.type=i,c.isTrigger=true,c.exclusive=d,c.namespace=g.join("."),c.namespace_re=c.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,g=i.indexOf(":")<0?"on"+i:"",(e||!b)&&c.preventDefault(),b){c.result=void 0;if(!c.target)c.target=b;f=f!=null?a.makeArray(f):[];f.unshift(c);d=a.event.special[i]||{};if(!(d.trigger&&d.trigger.apply(b,f)===false)){j=
[[b,d.bindType||i]];if(!e&&!d.noBubble&&!a.isWindow(b)){k=d.delegateType||i;h=null;for(e=b.parentNode;e;e=e.parentNode)j.push([e,k]),h=e;h&&h===b.ownerDocument&&j.push([h.defaultView||h.parentWindow||window,k])}for(h=0;h<j.length;h++)if(e=j[h][0],c.type=j[h][1],(k=(a._data(e,"events")||{})[c.type]&&a._data(e,"handle"))&&k.apply(e,f),(k=g&&e[g])&&a.acceptData(e)&&k.apply(e,f),c.isPropagationStopped())break;c.type=i;if(!c.isDefaultPrevented()&&(!d._default||d._default.call(b.ownerDocument,c,f)===false)&&
!(i==="click"&&a.nodeName(b,"a"))&&a.acceptData(b))if(g&&b[i]&&(i!=="focus"&&i!=="blur"||c.target.offsetWidth!==0)&&!a.isWindow(b))(h=b[g])&&(b[g]=null),a.event.triggered=i,b[i](),a.event.triggered=void 0,h&&(b[g]=h);return c.result}}else for(h in b=a.cache,b)b[h].events&&b[h].events[i]&&a.event.trigger(c,f,b[h].handle.elem,true)}},dispatch:function(c){var c=a.event.fix(c||window.event),f=(a._data(this,"events")||{})[c.type]||[],b=f.delegateCount,e=[].slice.call(arguments,0),i=!c.exclusive&&!c.namespace,
g=(a.event.special[c.type]||{}).handle,d=[],h,k,j,m,n,q,l;e[0]=c;c.delegateTarget=this;if(b&&!c.target.disabled&&!(c.button&&c.type==="click"))for(k=c.target;k!=this;k=k.parentNode||this){m={};n=[];for(h=0;h<b;h++)j=f[h],q=j.selector,l=m[q],j.isPositional?l=(l||(m[q]=a(q))).index(k)>=0:l===void 0&&(l=m[q]=j.quick?(!j.quick[1]||k.nodeName.toLowerCase()===j.quick[1])&&(!j.quick[2]||k.id===j.quick[2])&&(!j.quick[3]||j.quick[3].test(k.className)):a(k).is(q)),l&&n.push(j);n.length&&d.push({elem:k,matches:n})}f.length>
b&&d.push({elem:this,matches:f.slice(b)});for(h=0;h<d.length&&!c.isPropagationStopped();h++){matched=d[h];c.currentTarget=matched.elem;for(f=0;f<matched.matches.length&&!c.isImmediatePropagationStopped();f++)if(j=matched.matches[f],i||!c.namespace&&!j.namespace||c.namespace_re&&c.namespace_re.test(j.namespace))if(c.data=j.data,c.handleObj=j,j=(g||j.handler).apply(matched.elem,e),j!==void 0)c.result=j,j===false&&(c.preventDefault(),c.stopPropagation())}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,f){if(a.which==null)a.which=f.charCode!=null?f.charCode:f.keyCode;return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),filter:function(a,f){var b,e,i=f.button,g=f.fromElement;if(a.pageX==null&&f.clientX!=null)b=a.target.ownerDocument||document,e=b.documentElement,b=b.body,a.pageX=f.clientX+(e&&e.scrollLeft||b&&b.scrollLeft||
0)-(e&&e.clientLeft||b&&b.clientLeft||0),a.pageY=f.clientY+(e&&e.scrollTop||b&&b.scrollTop||0)-(e&&e.clientTop||b&&b.clientTop||0);if(!a.relatedTarget&&g)a.relatedTarget=g===a.target?f.toElement:g;if(!a.which&&i!==void 0)a.which=i&1?1:i&2?3:i&4?2:0;return a}},fix:function(c){if(c[a.expando])return c;var f,b,e=c,i=a.event.fixHooks[c.type]||{},g=i.props?this.props.concat(i.props):this.props,c=a.Event(e);for(f=g.length;f;)b=g[--f],c[b]=e[b];if(!c.target)c.target=e.srcElement||document;if(c.target.nodeType===
3)c.target=c.target.parentNode;if(c.metaKey===void 0)c.metaKey=c.ctrlKey;return i.filter?i.filter(c,e):c},special:{ready:{setup:a.bindReady},focus:{delegateType:"focusin",noBubble:true},blur:{delegateType:"focusout",noBubble:true},beforeunload:{setup:function(c,f,b){if(a.isWindow(this))this.onbeforeunload=b},teardown:function(a,f){if(this.onbeforeunload===f)this.onbeforeunload=null}}},simulate:function(c,f,b,e){c=a.extend(new a.Event,b,{type:c,isSimulated:true,originalEvent:{}});e?a.event.trigger(c,
null,f):a.event.dispatch.call(f,c);c.isDefaultPrevented()&&b.preventDefault()}};a.removeEvent=document.removeEventListener?function(a,f,b){a.removeEventListener&&a.removeEventListener(f,b,false)}:function(a,f,b){a.detachEvent&&a.detachEvent("on"+f,b)};a.Event=function(c,f){if(!(this instanceof a.Event))return new a.Event(c,f);c&&c.type?(this.originalEvent=c,this.type=c.type,this.isDefaultPrevented=c.defaultPrevented||c.returnValue===false||c.getPreventDefault&&c.getPreventDefault()?p:d):this.type=
c;f&&a.extend(this,f);this.timeStamp=c&&c.timeStamp||a.now();this[a.expando]=true};a.Event.prototype={preventDefault:function(){this.isDefaultPrevented=p;var a=this.originalEvent;if(a)a.preventDefault?a.preventDefault():a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=p;var a=this.originalEvent;if(a)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=p;this.stopPropagation()},isDefaultPrevented:d,
isPropagationStopped:d,isImmediatePropagationStopped:d};a.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(c,f){a.event.special[c]=a.event.special[f]={delegateType:f,bindType:f,handle:function(b){var c=b.relatedTarget,f=b.handleObj,g;if(!c||f.origType===b.type||c!==this&&!a.contains(this,c))c=b.type,b.type=f.origType,g=f.handler.apply(this,arguments),b.type=c;return g}}});if(!a.support.submitBubbles)a.event.special.submit={setup:function(){if(a.nodeName(this,"form"))return false;a.event.add(this,
"click._submit keypress._submit",function(c){c=c.target;if((c=a.nodeName(c,"input")||a.nodeName(c,"button")?c.form:void 0)&&!c._submit_attached)a.event.add(c,"submit._submit",function(c){this.parentNode&&a.event.simulate("submit",this.parentNode,c,true)}),c._submit_attached=true})},teardown:function(){if(a.nodeName(this,"form"))return false;a.event.remove(this,"._submit")}};if(!a.support.changeBubbles)a.event.special.change={setup:function(){if(h.test(this.nodeName)){if(this.type==="checkbox"||this.type===
"radio")a.event.add(this,"propertychange._change",function(a){if(a.originalEvent.propertyName==="checked")this._just_changed=true}),a.event.add(this,"click._change",function(c){if(this._just_changed)this._just_changed=false,a.event.simulate("change",this,c,true)});return false}a.event.add(this,"beforeactivate._change",function(c){c=c.target;if(h.test(c.nodeName)&&!c._change_attached)a.event.add(c,"change._change",function(c){this.parentNode&&!c.isSimulated&&a.event.simulate("change",this.parentNode,
c,true)}),c._change_attached=true})},handle:function(a){var f=a.target;if(this!==f||a.isSimulated||a.isTrigger||f.type!=="radio"&&f.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){a.event.remove(this,"._change");return h.test(this.nodeName)}};a.support.focusinBubbles||a.each({focus:"focusin",blur:"focusout"},function(c,f){var b=0,e=function(b){a.event.simulate(f,b.target,a.event.fix(b),true)};a.event.special[f]={setup:function(){b++===0&&document.addEventListener(c,
e,true)},teardown:function(){--b===0&&document.removeEventListener(c,e,true)}}});a.fn.extend({on:function(c,f,b,e,g){var h,k;if(typeof c==="object"){typeof f!=="string"&&(b=f,f=void 0);for(k in c)this.on(k,f,b,c[k],g);return this}b==null&&e==null?(e=f,b=f=void 0):e==null&&(typeof f==="string"?(e=b,b=void 0):(e=b,b=f,f=void 0));if(e===false)e=d;else if(!e)return this;if(g===1)h=e,e=function(b){a().off(b);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=a.guid++);return this.each(function(){a.event.add(this,
c,e,b,f)})},one:function(a,f,b,e){return this.on.call(this,a,f,b,e,1)},off:function(c,f,b){if(c&&c.preventDefault&&c.handleObj){var e=c.handleObj;a(c.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof c==="object"){for(e in c)this.off(e,f,c[e]);return this}if(f===false||typeof f==="function")b=f,f=void 0;b===false&&(b=d);return this.each(function(){a.event.remove(this,c,b,f)})},bind:function(a,f,b){return this.on(a,null,f,b)},unbind:function(a,
f){return this.off(a,null,f)},live:function(c,f,b){a(this.context).on(c,this.selector,f,b);return this},die:function(c,f){a(this.context).off(c,this.selector||"**",f);return this},delegate:function(a,f,b,e){return this.on(f,a,b,e)},undelegate:function(a,f,b){return arguments.length==1?this.off(a,"**"):this.off(f,a,b)},trigger:function(c,f){return this.each(function(){a.event.trigger(c,f,this)})},triggerHandler:function(c,f){if(this[0])return a.event.trigger(c,f,this[0],true)},toggle:function(c){var f=
arguments,b=c.guid||a.guid++,e=0,g=function(b){var g=(a._data(this,"lastToggle"+c.guid)||0)%e;a._data(this,"lastToggle"+c.guid,g+1);b.preventDefault();return f[g].apply(this,arguments)||false};for(g.guid=b;e<f.length;)f[e++].guid=b;return this.click(g)},hover:function(a,f){return this.mouseenter(a).mouseleave(f||a)}});a.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
function(c,f){a.fn[f]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(f,a,c):this.trigger(f)};a.attrFn&&(a.attrFn[f]=true);if(q.test(f))a.event.fixHooks[f]=a.event.keyHooks;if(k.test(f))a.event.fixHooks[f]=a.event.mouseHooks})})(jQuery);
(function(a){a.each(["Height","Width"],function(d,p){var h=p.toLowerCase();a.fn["inner"+p]=function(){var d=this[0];return d?d.style?parseFloat(a.css(d,h,"padding")):this[h]():null};a.fn["outer"+p]=function(d){var m=this[0];return m?m.style?parseFloat(a.css(m,h,d?"margin":"border")):this[h]():null};a.fn[h]=function(d){var m=this[0];if(!m)return d==null?null:this;if(a.isFunction(d))return this.each(function(k){var g=a(this);g[h](d.call(this,k,g[h]()))});if(a.isWindow(m)){var q=m.document.documentElement["client"+
p],k=m.document.body;return m.document.compatMode==="CSS1Compat"&&q||k&&k["client"+p]||q}else return m.nodeType===9?Math.max(m.documentElement["client"+p],m.body["scroll"+p],m.documentElement["scroll"+p],m.body["offset"+p],m.documentElement["offset"+p]):d===void 0?(m=a.css(m,h),q=parseFloat(m),a.isNumeric(q)?q:m):this.css(h,typeof d==="string"?d:d+"px")}})})(jQuery);
(function(a){function d(g,c,f){c=c||0;if(a.isFunction(c))return a.grep(g,function(a,b){return!!c.call(a,b,a)===f});else if(c.nodeType)return a.grep(g,function(a){return a===c===f});else if(typeof c==="string"){var b=a.grep(g,function(a){return a.nodeType===1});if(m.test(c))return a.filter(c,b,!f);else c=a.filter(c,b)}return a.grep(g,function(b){return a.inArray(b,c)>=0===f})}var p=/Until$/,h=/^(?:parents|prevUntil|prevAll)/,n=/,/,m=/^.[^:#\[\.,]*$/,q=Array.prototype.slice,k=a.expr.match.POS,u={children:true,
contents:true,next:true,prev:true};a.fn.extend({find:function(g){var c=this,f,b;if(typeof g!=="string")return a(g).filter(function(){for(f=0,b=c.length;f<b;f++)if(a.contains(c[f],this))return true});var e=this.pushStack("","find",g),d,h,k;for(f=0,b=this.length;f<b;f++)if(d=e.length,a.find(g,this[f],e),f>0)for(h=d;h<e.length;h++)for(k=0;k<d;k++)if(e[k]===e[h]){e.splice(h--,1);break}return e},has:function(g){var c=a(g);return this.filter(function(){for(var f=0,b=c.length;f<b;f++)if(a.contains(this,
c[f]))return true})},not:function(a){return this.pushStack(d(this,a,false),"not",a)},filter:function(a){return this.pushStack(d(this,a,true),"filter",a)},is:function(g){return!!g&&(typeof g==="string"?k.test(g)?a(g,this.context).index(this[0])>=0:a.filter(g,this).length>0:this.filter(g).length>0)},closest:function(g,c){var f=[],b,e,d=this[0];if(a.isArray(g)){for(e=1;d&&d.ownerDocument&&d!==c;){for(b=0;b<g.length;b++)a(d).is(g[b])&&f.push({selector:g[b],elem:d,level:e});d=d.parentNode;e++}return f}var h=
k.test(g)||typeof g!=="string"?a(g,c||this.context):0;for(b=0,e=this.length;b<e;b++)for(d=this[b];d;)if(h?h.index(d)>-1:a.find.matchesSelector(d,g)){f.push(d);break}else if(d=d.parentNode,!d||!d.ownerDocument||d===c||d.nodeType===11)break;f=f.length>1?a.unique(f):f;return this.pushStack(f,"closest",g)},index:function(d){return!d?this[0]&&this[0].parentNode?this.prevAll().length:-1:typeof d==="string"?a.inArray(this[0],a(d)):a.inArray(d.jquery?d[0]:d,this)},add:function(d,c){var f=typeof d==="string"?
a(d,c):a.makeArray(d&&d.nodeType?[d]:d),b=a.merge(this.get(),f);return this.pushStack(!f[0]||!f[0].parentNode||f[0].parentNode.nodeType===11||!b[0]||!b[0].parentNode||b[0].parentNode.nodeType===11?b:a.unique(b))},andSelf:function(){return this.add(this.prevObject)}});a.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(d){return a.dir(d,"parentNode")},parentsUntil:function(d,c,f){return a.dir(d,"parentNode",f)},next:function(d){return a.nth(d,2,"nextSibling")},
prev:function(d){return a.nth(d,2,"previousSibling")},nextAll:function(d){return a.dir(d,"nextSibling")},prevAll:function(d){return a.dir(d,"previousSibling")},nextUntil:function(d,c,f){return a.dir(d,"nextSibling",f)},prevUntil:function(d,c,f){return a.dir(d,"previousSibling",f)},siblings:function(d){return a.sibling(d.parentNode.firstChild,d)},children:function(d){return a.sibling(d.firstChild)},contents:function(d){return a.nodeName(d,"iframe")?d.contentDocument||d.contentWindow.document:a.makeArray(d.childNodes)}},
function(d,c){a.fn[d]=function(f,b){var e=a.map(this,c,f),i=q.call(arguments);p.test(d)||(b=f);b&&typeof b==="string"&&(e=a.filter(b,e));e=this.length>1&&!u[d]?a.unique(e):e;if((this.length>1||n.test(b))&&h.test(d))e=e.reverse();return this.pushStack(e,d,i.join(","))}});a.extend({filter:function(d,c,f){f&&(d=":not("+d+")");return c.length===1?a.find.matchesSelector(c[0],d)?[c[0]]:[]:a.find.matches(d,c)},dir:function(d,c,f){for(var b=[],d=d[c];d&&d.nodeType!==9&&(f===void 0||d.nodeType!==1||!a(d).is(f));)d.nodeType===
1&&b.push(d),d=d[c];return b},nth:function(a,c,d){for(var c=c||1,b=0;a;a=a[d])if(a.nodeType===1&&++b===c)break;return a},sibling:function(a,c){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==c&&d.push(a);return d}})})(jQuery);
(function(a){var d=/[\n\t\r]/g,p=/\s+/,h=/\r/g,n=/^(?:button|input)$/i,m=/^(?:button|input|object|select|textarea)$/i,q=/^a(?:rea)?$/i,k=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=a.support.getSetAttribute,g,c,f;a.fn.extend({attr:function(b,c){return a.access(this,b,c,true,a.attr)},removeAttr:function(b){return this.each(function(){a.removeAttr(this,b)})},prop:function(b,c){return a.access(this,b,c,true,a.prop)},
removeProp:function(b){b=a.propFix[b]||b;return this.each(function(){try{this[b]=void 0,delete this[b]}catch(a){}})},addClass:function(b){var c,d,f,g,h,k,j;if(a.isFunction(b))return this.each(function(c){a(this).addClass(b.call(this,c,this.className))});if(b&&typeof b==="string"){c=b.split(p);for(d=0,f=this.length;d<f;d++)if(g=this[d],g.nodeType===1)if(!g.className&&c.length===1)g.className=b;else{h=" "+g.className+" ";for(k=0,j=c.length;k<j;k++)~h.indexOf(" "+c[k]+" ")||(h+=c[k]+" ");g.className=
a.trim(h)}}return this},removeClass:function(b){var c,f,g,h,k,m,j;if(a.isFunction(b))return this.each(function(c){a(this).removeClass(b.call(this,c,this.className))});if(b&&typeof b==="string"||b===void 0){c=(b||"").split(p);for(f=0,g=this.length;f<g;f++)if(h=this[f],h.nodeType===1&&h.className)if(b){k=(" "+h.className+" ").replace(d," ");for(m=0,j=c.length;m<j;m++)k=k.replace(" "+c[m]+" "," ");h.className=a.trim(k)}else h.className=""}return this},toggleClass:function(b,c){var d=typeof b,f=typeof c===
"boolean";return a.isFunction(b)?this.each(function(d){a(this).toggleClass(b.call(this,d,this.className,c),c)}):this.each(function(){if(d==="string")for(var g,h=0,k=a(this),j=c,m=b.split(p);g=m[h++];)j=f?j:!k.hasClass(g),k[j?"addClass":"removeClass"](g);else if(d==="undefined"||d==="boolean")this.className&&a._data(this,"__className__",this.className),this.className=this.className||b===false?"":a._data(this,"__className__")||""})},hasClass:function(a){for(var a=" "+a+" ",c=0,f=this.length;c<f;c++)if(this[c].nodeType===
1&&(" "+this[c].className+" ").replace(d," ").indexOf(a)>-1)return true;return false},val:function(b){var c,d,f,g=this[0];if(arguments.length)return f=a.isFunction(b),this.each(function(d){var g=a(this);if(this.nodeType===1&&(d=f?b.call(this,d,g.val()):b,d==null?d="":typeof d==="number"?d+="":a.isArray(d)&&(d=a.map(d,function(a){return a==null?"":a+""})),c=a.valHooks[this.nodeName.toLowerCase()]||a.valHooks[this.type],!c||!("set"in c)||c.set(this,d,"value")===void 0))this.value=d});else if(g){if((c=
a.valHooks[g.nodeName.toLowerCase()]||a.valHooks[g.type])&&"get"in c&&(d=c.get(g,"value"))!==void 0)return d;d=g.value;return typeof d==="string"?d.replace(h,""):d==null?"":d}}});a.extend({valHooks:{option:{get:function(a){var c=a.attributes.value;return!c||c.specified?a.value:a.text}},select:{get:function(b){var c,d,f=b.selectedIndex,g=[],h=b.options,k=b.type==="select-one";if(f<0)return null;b=k?f:0;for(d=k?f+1:h.length;b<d;b++)if(c=h[b],c.selected&&(a.support.optDisabled?!c.disabled:c.getAttribute("disabled")===
null)&&(!c.parentNode.disabled||!a.nodeName(c.parentNode,"optgroup"))){c=a(c).val();if(k)return c;g.push(c)}return k&&!g.length&&h.length?a(h[f]).val():g},set:function(b,c){var d=a.makeArray(c);a(b).find("option").each(function(){this.selected=a.inArray(a(this).val(),d)>=0});if(!d.length)b.selectedIndex=-1;return d}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(b,e,d,f){var h,m,n=b.nodeType;if(b&&!(n===3||n===8||n===2)){if(f&&e in a.attrFn)return a(b)[e](d);
if(!("getAttribute"in b))return a.prop(b,e,d);if(f=n!==1||!a.isXMLDoc(b))e=e.toLowerCase(),m=a.attrHooks[e]||(k.test(e)?c:g);if(d!==void 0)if(d===null)a.removeAttr(b,e);else return m&&"set"in m&&f&&(h=m.set(b,d,e))!==void 0?h:(b.setAttribute(e,""+d),d);else return m&&"get"in m&&f&&(h=m.get(b,e))!==null?h:(h=b.getAttribute(e),h===null?void 0:h)}},removeAttr:function(b,c){var d,f,g,h,m=0;if(b.nodeType===1){f=(c||"").split(p);for(h=f.length;m<h;m++)g=f[m].toLowerCase(),d=a.propFix[g]||g,a.attr(b,g,""),
b.removeAttribute(u?g:d),k.test(g)&&d in b&&(b[d]=false)}},attrHooks:{type:{set:function(b,c){if(n.test(b.nodeName)&&b.parentNode)a.error("type property can't be changed");else if(!a.support.radioValue&&c==="radio"&&a.nodeName(b,"input")){var d=b.value;b.setAttribute("type",c);if(d)b.value=d;return c}}},value:{get:function(b,c){return g&&a.nodeName(b,"button")?g.get(b,c):c in b?b.value:null},set:function(b,c,d){if(g&&a.nodeName(b,"button"))return g.set(b,c,d);b.value=c}}},propFix:{tabindex:"tabIndex",
readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b,c,d){var f,g,h=b.nodeType;if(b&&!(h===3||h===8||h===2)){if(h!==1||!a.isXMLDoc(b))c=a.propFix[c]||c,g=a.propHooks[c];return d!==void 0?g&&"set"in g&&(f=g.set(b,d,c))!==void 0?f:b[c]=d:g&&"get"in g&&(f=g.get(b,c))!==null?f:b[c]}},propHooks:{tabIndex:{get:function(a){var c=
a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):m.test(a.nodeName)||q.test(a.nodeName)&&a.href?0:void 0}}}});a.attrHooks.tabindex=a.propHooks.tabIndex;c={get:function(b,c){var d,f=a.prop(b,c);return f===true||typeof f!=="boolean"&&(d=b.getAttributeNode(c))&&d.nodeValue!==false?c.toLowerCase():void 0},set:function(b,c,d){c===false?a.removeAttr(b,d):(c=a.propFix[d]||d,c in b&&(b[c]=true),b.setAttribute(d,d.toLowerCase()));return d}};if(!u)f={name:true,id:true},g=a.valHooks.button=
{get:function(a,c){var d;return(d=a.getAttributeNode(c))&&(f[c]?d.nodeValue!=="":d.specified)?d.nodeValue:void 0},set:function(a,c,d){var f=a.getAttributeNode(d);f||(f=document.createAttribute(d),a.setAttributeNode(f));return f.nodeValue=c+""}},a.attrHooks.tabindex.set=g.set,a.each(["width","height"],function(b,c){a.attrHooks[c]=a.extend(a.attrHooks[c],{set:function(a,b){if(b==="")return a.setAttribute(c,"auto"),b}})}),a.attrHooks.contenteditable={get:g.get,set:function(a,c,d){c===""&&(c="false");
g.set(a,c,d)}};a.support.hrefNormalized||a.each(["href","src","width","height"],function(b,c){a.attrHooks[c]=a.extend(a.attrHooks[c],{get:function(a){a=a.getAttribute(c,2);return a===null?void 0:a}})});if(!a.support.style)a.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||void 0},set:function(a,c){return a.style.cssText=""+c}};if(!a.support.optSelected)a.propHooks.selected=a.extend(a.propHooks.selected,{get:function(){return null}});if(!a.support.enctype)a.propFix.enctype="encoding";
a.support.checkOn||a.each(["radio","checkbox"],function(){a.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}});a.each(["radio","checkbox"],function(){a.valHooks[this]=a.extend(a.valHooks[this],{set:function(b,c){if(a.isArray(c))return b.checked=a.inArray(a(b).val(),c)>=0}})})})(jQuery);
(function(a){function d(a){var b=u.split(" "),a=a.createDocumentFragment();if(a.createElement)for(;b.length;)a.createElement(b.pop());return a}function p(b,c){if(c.nodeType===1&&a.hasData(b)){var d,e,f;e=a._data(b);var g=a._data(c,e),h=e.events;if(h)for(d in delete g.handle,g.events={},h)for(e=0,f=h[d].length;e<f;e++)a.event.add(c,d+(h[d][e].namespace?".":"")+h[d][e].namespace,h[d][e],h[d][e].data);if(g.data)g.data=a.extend({},g.data)}}function h(b,c){var d;if(c.nodeType===1){c.clearAttributes&&c.clearAttributes();
c.mergeAttributes&&c.mergeAttributes(b);d=c.nodeName.toLowerCase();if(d==="object")c.outerHTML=b.outerHTML;else if(d==="input"&&(b.type==="checkbox"||b.type==="radio")){if(b.checked)c.defaultChecked=c.checked=b.checked;if(c.value!==b.value)c.value=b.value}else if(d==="option")c.selected=b.defaultSelected;else if(d==="input"||d==="textarea")c.defaultValue=b.defaultValue;c.removeAttribute(a.expando)}}function n(a){return typeof a.getElementsByTagName!=="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!==
"undefined"?a.querySelectorAll("*"):[]}function m(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function q(b){var c=(b.nodeName||"").toLowerCase();c==="input"?m(b):c!=="script"&&typeof b.getElementsByTagName!=="undefined"&&a.grep(b.getElementsByTagName("input"),m)}function k(b,c){c.src?a.ajax({url:c.src,async:false,dataType:"script"}):a.globalEval((c.text||c.textContent||c.innerHTML||"").replace(x,"/*$0*/"));c.parentNode&&c.parentNode.removeChild(c)}var u="abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
g=/ jQuery\d+="(?:\d+|null)"/g,c=/^\s+/,f=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,b=/<([\w:]+)/,e=/<tbody/i,i=/<|&#?\w+;/,t=/<(?:script|style)/i,s=/<(?:script|object|embed|option|style)/i,o=RegExp("<(?:"+u.replace(" ","|")+")","i"),v=/checked\s*(?:[^=]|=\s*.checked.)/i,j=/\/(java|ecma)script/i,x=/^\s*<!(?:\[CDATA\[|\-\-)/,w={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>",
"</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},y=d(document);w.optgroup=w.option;w.tbody=w.tfoot=w.colgroup=w.caption=w.thead;w.th=w.td;if(!a.support.htmlSerialize)w._default=[1,"div<div>","</div>"];a.fn.extend({text:function(b){return a.isFunction(b)?this.each(function(c){var d=a(this);d.text(b.call(this,c,d.text()))}):typeof b!=="object"&&b!==void 0?this.empty().append((this[0]&&
this[0].ownerDocument||document).createTextNode(b)):a.text(this)},wrapAll:function(b){if(a.isFunction(b))return this.each(function(c){a(this).wrapAll(b.call(this,c))});if(this[0]){var c=a(b,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&c.insertBefore(this[0]);c.map(function(){for(var a=this;a.firstChild&&a.firstChild.nodeType===1;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(b){return a.isFunction(b)?this.each(function(c){a(this).wrapInner(b.call(this,c))}):
this.each(function(){var c=a(this),d=c.contents();d.length?d.wrapAll(b):c.append(b)})},wrap:function(b){return this.each(function(){a(this).wrapAll(b)})},unwrap:function(){return this.parent().each(function(){a.nodeName(this,"body")||a(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},
before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this)});else if(arguments.length){var b=a(arguments[0]);b.push.apply(b,this.toArray());return this.pushStack(b,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this.nextSibling)});else if(arguments.length){var b=this.pushStack(this,"after",arguments);b.push.apply(b,a(arguments[0]).toArray());
return b}},remove:function(b,c){for(var d=0,e;(e=this[d])!=null;d++)if(!b||a.filter(b,[e]).length)!c&&e.nodeType===1&&(a.cleanData(e.getElementsByTagName("*")),a.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var b=0,c;(c=this[b])!=null;b++)for(c.nodeType===1&&a.cleanData(c.getElementsByTagName("*"));c.firstChild;)c.removeChild(c.firstChild);return this},clone:function(b,c){b=b==null?false:b;c=c==null?b:c;return this.map(function(){return a.clone(this,
b,c)})},html:function(d){if(d===void 0)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(g,""):null;else if(typeof d==="string"&&!t.test(d)&&(a.support.leadingWhitespace||!c.test(d))&&!w[(b.exec(d)||["",""])[1].toLowerCase()]){d=d.replace(f,"<$1></$2>");try{for(var e=0,h=this.length;e<h;e++)if(this[e].nodeType===1)a.cleanData(this[e].getElementsByTagName("*")),this[e].innerHTML=d}catch(i){this.empty().append(d)}}else a.isFunction(d)?this.each(function(b){var c=a(this);c.html(d.call(this,
b,c.html()))}):this.empty().append(d);return this},replaceWith:function(b){if(this[0]&&this[0].parentNode){if(a.isFunction(b))return this.each(function(c){var d=a(this),e=d.html();d.replaceWith(b.call(this,c,e))});typeof b!=="string"&&(b=a(b).detach());return this.each(function(){var c=this.nextSibling,d=this.parentNode;a(this).remove();c?a(c).before(b):a(d).append(b)})}else return this.length?this.pushStack(a(a.isFunction(b)?b():b),"replaceWith",b):this},detach:function(a){return this.remove(a,true)},
domManip:function(b,c,d){var e,f,g,h=b[0],i=[];if(!a.support.checkClone&&arguments.length===3&&typeof h==="string"&&v.test(h))return this.each(function(){a(this).domManip(b,c,d,true)});if(a.isFunction(h))return this.each(function(e){var f=a(this);b[0]=h.call(this,e,c?f.html():void 0);f.domManip(b,c,d)});if(this[0]){e=h&&h.parentNode;e=a.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:a.buildFragment(b,this,i);g=e.fragment;if(f=g.childNodes.length===1?g=g.firstChild:
g.firstChild){c=c&&a.nodeName(f,"tr");f=0;for(var j=this.length,m=j-1;f<j;f++)d.call(c?a.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):this[f]:this[f],e.cacheable||j>1&&f<m?a.clone(g,true,true):g)}i.length&&a.each(i,k)}return this}});a.buildFragment=function(b,c,d){var e,f,g,h,i=b[0];c&&c[0]&&(h=c[0].ownerDocument||c[0]);h.createDocumentFragment||(h=document);if(b.length===1&&typeof i==="string"&&i.length<512&&
h===document&&i.charAt(0)==="<"&&!s.test(i)&&(a.support.checkClone||!v.test(i))&&!a.support.unknownElems&&o.test(i))f=true,(g=a.fragments[i])&&g!==1&&(e=g);e||(e=h.createDocumentFragment(),a.clean(b,h,e,d));f&&(a.fragments[i]=g?e:1);return{fragment:e,cacheable:f}};a.fragments={};a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(b,c){a.fn[b]=function(d){var e=[],d=a(d),f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===
11&&f.childNodes.length===1&&d.length===1)return d[c](this[0]),this;else{for(var f=0,g=d.length;f<g;f++){var h=(f>0?this.clone(true):this).get();a(d[f])[c](h);e=e.concat(h)}return this.pushStack(e,b,d.selector)}}});a.extend({clone:function(b,c,d){var e=b.cloneNode(true),f,g,i;if((!a.support.noCloneEvent||!a.support.noCloneChecked)&&(b.nodeType===1||b.nodeType===11)&&!a.isXMLDoc(b)){h(b,e);f=n(b);g=n(e);for(i=0;f[i];++i)g[i]&&h(f[i],g[i])}if(c&&(p(b,e),d)){f=n(b);g=n(e);for(i=0;f[i];++i)p(f[i],g[i])}return e},
clean:function(g,h,k,m){h=h||document;typeof h.createElement==="undefined"&&(h=h.ownerDocument||h[0]&&h[0].ownerDocument||document);for(var n=[],o,p=0,s;(s=g[p])!=null;p++)if(typeof s==="number"&&(s+=""),s){if(typeof s==="string")if(i.test(s)){s=s.replace(f,"<$1></$2>");o=(b.exec(s)||["",""])[1].toLowerCase();var t=w[o]||w._default,u=t[0],v=h.createElement("div");h===document?y.appendChild(v):d(h).appendChild(v);for(v.innerHTML=t[1]+s+t[2];u--;)v=v.lastChild;if(!a.support.tbody){u=e.test(s);t=o===
"table"&&!u?v.firstChild&&v.firstChild.childNodes:t[1]==="<table>"&&!u?v.childNodes:[];for(o=t.length-1;o>=0;--o)a.nodeName(t[o],"tbody")&&!t[o].childNodes.length&&t[o].parentNode.removeChild(t[o])}!a.support.leadingWhitespace&&c.test(s)&&v.insertBefore(h.createTextNode(c.exec(s)[0]),v.firstChild);s=v.childNodes}else s=h.createTextNode(s);var x;if(!a.support.appendChecked)if(s[0]&&typeof(x=s.length)==="number")for(o=0;o<x;o++)q(s[o]);else q(s);s.nodeType?n.push(s):n=a.merge(n,s)}if(k){g=function(a){return!a.type||
j.test(a.type)};for(p=0;n[p];p++)m&&a.nodeName(n[p],"script")&&(!n[p].type||n[p].type.toLowerCase()==="text/javascript")?m.push(n[p].parentNode?n[p].parentNode.removeChild(n[p]):n[p]):(n[p].nodeType===1&&(h=a.grep(n[p].getElementsByTagName("script"),g),n.splice.apply(n,[p+1,0].concat(h))),k.appendChild(n[p]))}return n},cleanData:function(b){for(var c,d,e=a.cache,f=a.event.special,g=a.support.deleteExpando,h=0,i;(i=b[h])!=null;h++)if(!i.nodeName||!a.noData[i.nodeName.toLowerCase()])if(d=i[a.expando]){if((c=
e[d])&&c.events){for(var j in c.events)f[j]?a.event.remove(i,j):a.removeEvent(i,j,c.handle);if(c.handle)c.handle.elem=null}g?delete i[a.expando]:i.removeAttribute&&i.removeAttribute(a.expando);delete e[d]}}})})(jQuery);/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-borderradius-svg-iepp-cssclasses-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function B(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+n.join(c+" ")+c).split(" ");return A(d,b)}function A(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function z(a,b){return!!~(""+a).indexOf(b)}function y(a,b){return typeof a===b}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function w(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=Object.prototype.toString,n="Webkit Moz O ms Khtml".split(" "),o={svg:"http://www.w3.org/2000/svg"},p={},q={},r={},s=[],t,u={}.hasOwnProperty,v;!y(u,c)&&!y(u.call,c)?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],c)},p.borderradius=function(){return B("borderRadius")},p.svg=function(){return!!b.createElementNS&&!!b.createElementNS(o.svg,"svg").createSVGRect};for(var C in p)v(p,C)&&(t=C.toLowerCase(),e[t]=p[C](),s.push((e[t]?"":"no-")+t));w(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._domPrefixes=n,e.testProp=function(a){return A([a])},e.testAllProps=B,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+s.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};if (typeof window.localStorage == 'undefined' || typeof window.sessionStorage == 'undefined') (function () {


	//Create a JSON object only if one does not already exist. We create the
	//methods in a closure to avoid creating global variables.

	var JSON;
	if (!JSON) {
	 JSON = {};
	 window.JSON=JSON;
	}

	(function () {
	 "use strict";

	 function f(n) {
	     // Format integers to have at least two digits.
	     return n < 10 ? '0' + n : n;
	 }

	 if (typeof Date.prototype.toJSON !== 'function') {

	     Date.prototype.toJSON = function (key) {

	         return isFinite(this.valueOf()) ?
	             this.getUTCFullYear()     + '-' +
	             f(this.getUTCMonth() + 1) + '-' +
	             f(this.getUTCDate())      + 'T' +
	             f(this.getUTCHours())     + ':' +
	             f(this.getUTCMinutes())   + ':' +
	             f(this.getUTCSeconds())   + 'Z' : null;
	     };

	     String.prototype.toJSON      =
	         Number.prototype.toJSON  =
	         Boolean.prototype.toJSON = function (key) {
	             return this.valueOf();
	         };
	 }

	 var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	     escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	     gap,
	     indent,
	     meta = {    // table of character substitutions
	         '\b': '\\b',
	         '\t': '\\t',
	         '\n': '\\n',
	         '\f': '\\f',
	         '\r': '\\r',
	         '"' : '\\"',
	         '\\': '\\\\'
	     },
	     rep;


	 function quote(string) {

	//If the string contains no control characters, no quote characters, and no
	//backslash characters, then we can safely slap some quotes around it.
	//Otherwise we must also replace the offending characters with safe escape
	//sequences.

	     escapable.lastIndex = 0;
	     return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
	         var c = meta[a];
	         return typeof c === 'string' ? c :
	             '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	     }) + '"' : '"' + string + '"';
	 }


	 function str(key, holder) {

	//Produce a string from holder[key].

	     var i,          // The loop counter.
	         k,          // The member key.
	         v,          // The member value.
	         length,
	         mind = gap,
	         partial,
	         value = holder[key];

	//If the value has a toJSON method, call it to obtain a replacement value.

	     if (value && typeof value === 'object' &&
	             typeof value.toJSON === 'function') {
	         value = value.toJSON(key);
	     }

	//If we were called with a replacer function, then call the replacer to
	//obtain a replacement value.

	     if (typeof rep === 'function') {
	         value = rep.call(holder, key, value);
	     }

	//What happens next depends on the value's type.

	     switch (typeof value) {
	     case 'string':
	         return quote(value);

	     case 'number':

	//JSON numbers must be finite. Encode non-finite numbers as null.

	         return isFinite(value) ? String(value) : 'null';

	     case 'boolean':
	     case 'null':

	//If the value is a boolean or null, convert it to a string. Note:
	//typeof null does not produce 'null'. The case is included here in
	//the remote chance that this gets fixed someday.

	         return String(value);

	//If the type is 'object', we might be dealing with an object or an array or
	//null.

	     case 'object':

	//Due to a specification blunder in ECMAScript, typeof null is 'object',
	//so watch out for that case.

	         if (!value) {
	             return 'null';
	         }

	//Make an array to hold the partial results of stringifying this object value.

	         gap += indent;
	         partial = [];

	//Is the value an array?

	         if (Object.prototype.toString.apply(value) === '[object Array]') {

	//The value is an array. Stringify every element. Use null as a placeholder
	//for non-JSON values.

	             length = value.length;
	             for (i = 0; i < length; i += 1) {
	                 partial[i] = str(i, value) || 'null';
	             }

	//Join all of the elements together, separated with commas, and wrap them in
	//brackets.

	             v = partial.length === 0 ? '[]' : gap ?
	                 '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
	                 '[' + partial.join(',') + ']';
	             gap = mind;
	             return v;
	         }

	//If the replacer is an array, use it to select the members to be stringified.

	         if (rep && typeof rep === 'object') {
	             length = rep.length;
	             for (i = 0; i < length; i += 1) {
	                 if (typeof rep[i] === 'string') {
	                     k = rep[i];
	                     v = str(k, value);
	                     if (v) {
	                         partial.push(quote(k) + (gap ? ': ' : ':') + v);
	                     }
	                 }
	             }
	         } else {

	//Otherwise, iterate through all of the keys in the object.

	             for (k in value) {
	                 if (Object.prototype.hasOwnProperty.call(value, k)) {
	                     v = str(k, value);
	                     if (v) {
	                         partial.push(quote(k) + (gap ? ': ' : ':') + v);
	                     }
	                 }
	             }
	         }

	//Join all of the member texts together, separated with commas,
	//and wrap them in braces.

	         v = partial.length === 0 ? '{}' : gap ?
	             '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
	             '{' + partial.join(',') + '}';
	         gap = mind;
	         return v;
	     }
	 }

	//If the JSON object does not yet have a stringify method, give it one.

	 if (typeof JSON.stringify !== 'function') {
	     JSON.stringify = function (value, replacer, space) {

	//The stringify method takes a value and an optional replacer, and an optional
	//space parameter, and returns a JSON text. The replacer can be a function
	//that can replace values, or an array of strings that will select the keys.
	//A default replacer method can be provided. Use of the space parameter can
	//produce text that is more easily readable.

	         var i;
	         gap = '';
	         indent = '';

	//If the space parameter is a number, make an indent string containing that
	//many spaces.

	         if (typeof space === 'number') {
	             for (i = 0; i < space; i += 1) {
	                 indent += ' ';
	             }

	//If the space parameter is a string, it will be used as the indent string.

	         } else if (typeof space === 'string') {
	             indent = space;
	         }

	//If there is a replacer, it must be a function or an array.
	//Otherwise, throw an error.

	         rep = replacer;
	         if (replacer && typeof replacer !== 'function' &&
	                 (typeof replacer !== 'object' ||
	                 typeof replacer.length !== 'number')) {
	             throw new Error('JSON.stringify');
	         }

	//Make a fake root object containing our value under the key of ''.
	//Return the result of stringifying the value.

	         return str('', {'': value});
	     };
	 }


	//If the JSON object does not yet have a parse method, give it one.

	 if (typeof JSON.parse !== 'function') {
	     JSON.parse = function (text, reviver) {

	//The parse method takes a text and an optional reviver function, and returns
	//a JavaScript value if the text is a valid JSON text.

	         var j;

	         function walk(holder, key) {

	//The walk method is used to recursively walk the resulting structure so
	//that modifications can be made.

	             var k, v, value = holder[key];
	             if (value && typeof value === 'object') {
	                 for (k in value) {
	                     if (Object.prototype.hasOwnProperty.call(value, k)) {
	                         v = walk(value, k);
	                         if (v !== undefined) {
	                             value[k] = v;
	                         } else {
	                             delete value[k];
	                         }
	                     }
	                 }
	             }
	             return reviver.call(holder, key, value);
	         }


	//Parsing happens in four stages. In the first stage, we replace certain
	//Unicode characters with escape sequences. JavaScript handles many characters
	//incorrectly, either silently deleting them, or treating them as line endings.

	         text = String(text);
	         cx.lastIndex = 0;
	         if (cx.test(text)) {
	             text = text.replace(cx, function (a) {
	                 return '\\u' +
	                     ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	             });
	         }

	//In the second stage, we run the text against regular expressions that look
	//for non-JSON patterns. We are especially concerned with '()' and 'new'
	//because they can cause invocation, and '=' because it can cause mutation.
	//But just to be safe, we want to reject all unexpected forms.

	//We split the second stage into 4 regexp operations in order to work around
	//crippling inefficiencies in IE's and Safari's regexp engines. First we
	//replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
	//replace all simple value tokens with ']' characters. Third, we delete all
	//open brackets that follow a colon or comma or that begin the text. Finally,
	//we look to see that the remaining characters are only whitespace or ']' or
	//',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

	         if (/^[\],:{}\s]*$/
	                 .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
	                     .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
	                     .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

	//In the third stage we use the eval function to compile the text into a
	//JavaScript structure. The '{' operator is subject to a syntactic ambiguity
	//in JavaScript: it can begin a block or an object literal. We wrap the text
	//in parens to eliminate the ambiguity.

	             j = eval('(' + text + ')');

	//In the optional fourth stage, we recursively walk the new structure, passing
	//each name/value pair to a reviver function for possible transformation.

	             return typeof reviver === 'function' ?
	                 walk({'': j}, '') : j;
	         }

	//If the text is not JSON parseable, then a SyntaxError is thrown.

	         throw new SyntaxError('JSON.parse');
	     };
	 }
	}());

	
var Storage = function (type) {
  function createCookie(name, value, days) {
    var date, expires;

    if (days) {
      date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = "; expires="+date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
    
  }

  function readCookie(name) {
    var nameEQ = name + "=",
        ca = document.cookie.split(';'),
        i, c;

    for (i=0; i < ca.length; i++) {
      c = ca[i];
      while (c.charAt(0)==' ') {
        c = c.substring(1,c.length);
      }

      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length,c.length);
      }
    }
    return null;
  }
  
  function setData(data) {
    data = stringify(data);
    if (type == 'session') {
      window.name = data;
    } else {
      createCookie('localStorage', data, 365);
    }
  }
  
  function clearData() {
    if (type == 'session') {
      window.name = '';
    } else {
      createCookie('localStorage', '', 365);
    }
  }
  
  function getData() {
    var data = type == 'session' ? window.name : readCookie('localStorage');

    return data ? parse(data) : {};
  }


  // initialise if there's already data
  var data = getData();

  return {
    length: 0,
    clear: function () {
      data = {};
      this.length = 0;
      clearData();
    },
    getItem: function (key) {
      return data[key] === undefined ? null : data[key];
    },
    key: function (i) {
      // not perfect, but works
      var ctr = 0;
      for (var k in data) {
        if (ctr == i) return k;
        else ctr++;
      }
      return null;
    },
    removeItem: function (key) {
      delete data[key];
      this.length--;
      setData(data);
    },
    setItem: function (key, value) {
      data[key] = value+''; // forces the value to a string
      this.length++;
      setData(data);
    }
  };
};

if (typeof window.localStorage == 'undefined') window.localStorage = new Storage('local');
if (typeof window.sessionStorage == 'undefined') window.sessionStorage = new Storage('session');

function stringify(obj) {
	return JSON.stringify(obj);
	
}


function parse(data)
{
	return JSON.parse(data);

}




})();(function($){
    
    window.Grid=function (){

            var $_grid=null;

            var callbacks={
              stateChange:function(){}  
            };
            
            var state = {
                            ships:[],
                            mode:'read',
                            options:{
                                    count:6,
                                    size:null,
                                    type:'',
                                    general:'chromander'
                            },
                            score:0,
                            hit:{}
                            
            };

            var init=function(options)
            {

                    options=$.extend(true,{},{
                            selector:'.grid',
                            size:$(window).width(),
                            count:5,
                            type:'own',
                            general:'chromander',
                            callbacks:{}
                    },options);

                    $_grid=$(options.selector);
                    state.options.count=options.count;
                    state.options.size=Math.floor(options.size-(0.2*options.size));
                    state.options.type=options.type;
                   
                    setGeneral(options.general);
                    
                    $.extend(callbacks,options.callbacks);

                    var unit_size=Math.floor((state.options.size-1)/options.count - 1);

                    var grid_width=(unit_size*options.count)+(options.count);

                    $_grid.width(grid_width);
                    
                    $_grid.addClass(options.type);

                    var $_grid_units=$('<div>');


                    for(var i=0;i<options.count;i++)
                    {
                            for(var j=0;j<options.count;j++)
                            {
                                    $('<div>')
                                    .addClass('grid-unit')
                                    .addClass('x-'+i)
                                    .addClass('y-'+j)
                                    .css('border-radius',Math.round(unit_size))
                                    .css('-webkit-border-radius',Math.round(unit_size))
                                    .css('-moz-border-radius',Math.round(unit_size/2))
                                    .data('position',{x:i,y:j})
                                    .appendTo($_grid_units).width(unit_size).height(unit_size);
                            }
                    }

                    $_grid_units=$_grid_units.find('div');
                    $_grid.append($_grid_units);

                    $_grid.addClass('animate');
                    return this;
            };

            var resize=function(size)
            {
                
                 var new_size=Math.floor(size-(0.2*size));
                 
                 if(state.options.size != new_size)
                 {
                     state.options.size=new_size;
                 }
                 else return;
                 
                 var unit_size=Math.floor((state.options.size-1)/state.options.count - 1);

                 var grid_width=(unit_size*state.options.count)+(state.options.count);

                 $_grid.width(grid_width).find('.grid-unit').width(unit_size).height(unit_size);
            };
            
            var destroy=function()
            {
                $_grid.html('')
                .removeClass('chromander')
                .removeClass('opera')
                .removeClass('remote')
                .removeClass('own');
            };
            
            var setGeneral=function(general)
            {
                
                $_grid
                .removeClass('chromander')
                .removeClass('opera')
                .addClass(general);
                
                state.options.general=general;
            };

            var setInsertMode=function(options)
            {
                    var ship=options.ship;
                    $_grid=$_grid;
                    unsetInsertMode();
                    state.mode='insert';

                    $_grid.addClass('insert-mode')
                    .find('.grid-unit')
                    .bind('mouseenter',function(){
                            $_grid.find('.grid-unit').removeClass('potential').removeClass('denied');
                            var position=$(this).data('position');



                            var $_units=null;

                            for(var i=0;i<ship.size;i++)
                            {
                                    var x=position.x;
                                    var y=position.y+i;

                                    if(ship.direction=='v')
                                    {	
                                            x=position.x+i;
                                            y=position.y;

                                    }

                                    if(!$_units)$_units=$('.x-'+x+'.y-'+y);
                                    else
                                            {
                                                    $_units=$_units.add($_grid.find('.x-'+x+'.y-'+y));
                                            }
                            }

                            if(canInsert(ship,position))
                            {
                                    $_units.addClass('potential');
                            }
                            else $_units.addClass('denied');

                    })
                    .bind('mouseleave',function()
                    {
                            $_grid.find('.grid-unit').removeClass('potential');
                    })
                    .bind('click',function(){
                            var position=$(this).data('position');
                            if(!canInsert(ship,position))return;
                            addShip(ship,position);
                            unsetInsertMode();
                            stateChange();
                            options.inserted();

                    });

            };


            var unsetInsertMode=function()
            {
                    state.mode='read';
                    $_grid.removeClass('insert-mode')
                    .find('.grid-unit')
                    .removeClass('potential')
                    .removeClass('denied')
                    .unbind('click')
                    .unbind('mouseenter')
                    .unbind('mouseleave');
            };


            var addShip=function(ship,position)
            {
                    $_self=$(false);


                    var positions=[];

                    for(var i=1;i<=ship.size;i++)
                    {
                            var x=position.x;
                            var y=position.y+i-1;

                            if(ship.direction=='v')
                            {	
                                    x=position.x+i-1;
                                    y=position.y;
                            }
                            positions.push({x:x,y:y});

                            $_self=$_self.add($_grid.find('.x-'+x+'.y-'+y).addClass('part-'+i));
                    }


                    state.ships.push($.extend({},ship,{positions:positions}));
                    $_self.addClass('ship').addClass(ship.name).data('ship',state.ships[state.ships.length-1]).addClass('direction-'+ship.direction);

                    //if(state.type=='remote')$_self.addClass('hidden');
            };


            var canInsert=function(ship,position,ships)
            {
                    if(!ships)
                    ships=state.ships;

                    //reserve cells
                    var reserve=[];
                    for(var i=0;i<ship.size;i++)
                    {
                            var x=position.x;
                            var y=position.y;


                            if(ship.direction=='h')y+=i;
                            else x+=i;

                            reserve.push({x:x,y:y});

                            if(x > state.options.count-1 || x < 0
                                            || y > state.options.count-1 || y <0)return false;
                    }

                    var extras=[];
                    for(var i=0;i<reserve.length;i++)
                    {
                            extras.push({x:reserve[i].x+1,y:reserve[i].y});
                            extras.push({x:reserve[i].x-1,y:reserve[i].y});
                            extras.push({x:reserve[i].x,y:reserve[i].y+1});
                            extras.push({x:reserve[i].x,y:reserve[i].y-1});
                            extras.push({x:reserve[i].x+1,y:reserve[i].y+1});
                            extras.push({x:reserve[i].x+1,y:reserve[i].y-1});
                            extras.push({x:reserve[i].x-1,y:reserve[i].y-1});
                            extras.push({x:reserve[i].x+1,y:reserve[i].y+1});
                            extras.push({x:reserve[i].x-1,y:reserve[i].y+1});
                    }
                    reserve=reserve.concat(extras);


                    for(var i=0;i<ships.length;i++)
                    {

                            for(var j=0;j<reserve.length;j++)
                            {
                                    for(var k=0;k<ships[i].positions.length;k++)
                                    {
                                            if(ships[i].positions[k].x==reserve[j].x 
                                                            && ships[i].positions[k].y==reserve[j].y)return false;
                                    }
                            }
                    }

                    return true;
            };


            var stateChange=function(){
                    callbacks.stateChange(state);
            };

            var setState=function(new_state)
            {
                    clear();
                    init($.extend(true,{},new_state.options));
                    var ships=new_state.ships;
                    for(var i=0;i<ships.length;i++)
                    {
                        addShip(ships[i],ships[i].positions[0]);
                    }

                    var hit=new_state.hit;
                    
                    var y;
                    
                    for(var x in hit)
                    {
                        for(y in hit[x])
                        {
                            if(hit[x][y])
                            this.attack(x,y,true); 
                        }
                        
                        
                    }
                    
                    state.score=new_state.score;
                    
                    stateChange();

            };

            var clear=function()
            {
                    $_grid.html('');
                    $_grid=null;
                    state.ships=[];

            };


            var clearShips=function()
            {
                    $_grid.find('.grid-unit').removeClass('ship').removeClass('direction-v').removeClass('direction-h')
                    .each(function(){
                            var className=$(this).prop('class');

                            var classes=className.split(' ');

                            for(var i=0;i<classes.length;i++)
                            {
                                    classes[i]=classes[i].replace(/^part.*/,'');
                                    classes[i]=classes[i].replace(/^ship.*/,'');
                            }
                            className=classes.join(' ');

                            $(this).prop('class',className);
                    });
                    state.ships=[];
            };


            var autoFill=function(ships)
            {
                    clearShips();
                    var placed_ships=[];
                    var major_counter=0;

                    for(var s=0;s<100;s++)
                    {
                            placed_ships=[];
                            var counter=0;

                            for(var i=0;i<ships.length;i++)
                            {
                                    var ship=ships[i];

                                    var direction='h';
                                    var position={x:0,y:0};

                                    for(var k=0;k<10000;k++)
                                    {
                                            direction=Math.round(Math.random())==0?'v':'h';

                                            position={x:Math.floor(Math.random()*state.options.count),y:Math.floor(Math.random()*state.options.count)};
                                            ship=$.extend(true,{},ship,{direction:direction});

                                            if(canInsert(ship,position,placed_ships))
                                            {
                                                    var positions=[];
                                                    for(var j=1;j<=ship.size;j++)
                                                    {
                                                            var x=position.x;
                                                            var y=position.y+j-1;

                                                            if(ship.direction=='v')
                                                            {	
                                                                    x=position.x+j-1;
                                                                    y=position.y;
                                                            }
                                                            positions.push({x:x,y:y});
                                                    }

                                                    placed_ships.push($.extend(true,{},ship,{positions:positions}));
                                                    break;
                                            }
                                            counter++;

                                    }

                            }


                            if(placed_ships.length==ships.length)break;

                            major_counter++;
                    }


                    if(placed_ships.length==ships.length)
                    {
                            for(var i=0;i<placed_ships.length;i++)
                                    addShip(placed_ships[i],placed_ships[i].positions[0]);
                    }




            };

            var setWarMode=function(options)
            {
                    state.mode='war';
                    $_grid.addClass('war')
                    .find('.grid-unit').bind('click',function(){
                            if($(this).hasClass('hit'))return;
                            var success=attack($(this).data('position').x,$(this).data('position').y);
                            options.attacked(success);
                    });

            };

            var unsetWarMode=function(){
                    state.mode='read';
                    $_grid.removeClass('war').find('.grid-unit').unbind('click');
            };

            var attack=function(x,y,keep_state)
            {
                    
                    var $_grid_unit=$_grid.find('.x-'+x+'.y-'+y).addClass('hit');

                    if(typeof state.hit[x]=='undefined')state.hit[x]={};
                    
                    
                   state.hit[x][y]=true;

                    if($_grid_unit.hasClass('ship'))
                            {
                                    var ship=$_grid_unit.data('ship');

                                    var all_hit=true;
                                    var $_all_units=$(false);
                                    for(var i=0;i<ship.positions.length;i++)
                                    {
                                            if(ship.positions[i].x==x
                                                             && ship.positions[i].y==y)
                                            {
                                                    ship.positions[i].hit=true;
                                                    
                                            }

                                            if(!ship.positions[i].hit)all_hit=false;
                                            else  $_all_units=$_all_units.add($_grid.find('.x-'+ship.positions[i].x+'.y-'+ship.positions[i].y));
                                    }

                                    if(all_hit)
                                    {
                                            for(var i=0;i<ship.positions.length;i++)
                                            {
                                                    var x=ship.positions[i].x;
                                                    var y=ship.positions[i].y;

                                                    /*
                                                    $_grid.find(
                                                                    '.x-'+(x+1)+'.y-'+(y)+','+
                                                                    '.x-'+(x-1)+'.y-'+(y)+','+
                                                                    '.x-'+(x)+'.y-'+(y+1)+','+
                                                                    '.x-'+(x)+'.y-'+(y-1)+','+
                                                                    '.x-'+(x+1)+'.y-'+(y-1)+','+
                                                                    '.x-'+(x-1)+'.y-'+(y-1)+','+
                                                                    '.x-'+(x+1)+'.y-'+(y+1)+','+
                                                                    '.x-'+(x-1)+'.y-'+(y+1)
                                                            ).addClass('hit');
                                                        */
                                                       if(!state.hit[x+1] || !state.hit[x+1][y])attack(x+1,y,true);
                                                       if(!state.hit[x-1] || !state.hit[x-1][y])attack(x-1,y,true);
                                                       if(!state.hit[x] || !state.hit[x][y+1])attack(x,y+1,true);
                                                       if(!state.hit[x] || !state.hit[x][y-1])attack(x,y-1,true);
                                                       if(!state.hit[x+1] || !state.hit[x+1][y-1])attack(x+1,y-1,true);
                                                       if(!state.hit[x-1] || !state.hit[x-1][y-1])attack(x-1,y-1,true);
                                                       if(!state.hit[x+1] || !state.hit[x+1][y+1])attack(x+1,y+1,true);
                                                       if(!state.hit[x+1] || !state.hit[x-1][y+1])attack(x-1,y+1,true);
                                                       
                                                     //attack(x+1,y,true);
                                                     //attack(x-1,y,true);
                                                     //attack(x,y+1,true);
                                            }
                                            
                                           
                                            $_all_units.addClass('sunk');
                                            
                                            for(var i=0;i<state.ships.length;i++)
                                            {
                                                    var game_complete=true;

                                                    for(var j=0;j<state.ships[i].positions.length;j++)
                                                    {
                                                            if(!state.ships[i].positions[j].hit)
                                                            {
                                                                    game_complete=false;
                                                                    break;
                                                            }
                                                    }

                                                    if(!game_complete)break;
                                            }
                                            if(!game_complete)
                                            {if(!keep_state){state.score+=15;stateChange();}return 2;}
                                            else {if(!keep_state){state.score+=15;stateChange();};return 3;}
                                    }
                                    if(!keep_state){state.score+=5;stateChange();}
                                    return 1;
                            }

                    if(!keep_state){;state.score-=1;stateChange();}
                    return 0;


            };

            return {
                    init:init,
                    getGridSize:function(){return $_grid.width();},
                    getUnitSize:function(){return $_grid.find('.grid-unit:first').width();},
                    setInsertMode:setInsertMode,
                    unsetInsertMode:unsetInsertMode,
                    setState:setState,
                    getState:function(){return state;},
                    autoFill:autoFill,
                    clearShips:clearShips,
                    setWarMode:setWarMode,
                    unsetWarMode:unsetWarMode,
                    attack:attack,
                    getHits:function(){return state.hit;},
                    setGeneral:setGeneral,
                    resize:resize,
                    destroy:destroy
            };

    }

}(jQuery));

var General=function(){
    return {
        setState:null,
        getState:null,
        setTimeout:null
    }
};

(function($){
    
    $.fn.hide=function()
    {
       return this.each(function(){
           this.style.display='none';
           
       });
       
    };

    $.fn.show=function()
    {
         return this.each(function(){
           this.style.display='block';
           
       });
    };

    
    General.setTimeout=function(fn){
      fn();  
    };
    
    setTimeout(function(){
        General.setTimeout=function(fn,time)
        {
            return setTimeout(fn,time);
        }
    },1);


    General.generalAlias=function(general)
    {
        if(general=='chromander')return 'Chromander';
        else if(general=='opera')return 'Operative';
        
        else return '';
    }
    $(function(){
       
       $('#restart').click(function(){
           General.setState('game',null);
           Game.init();
       });
       
       
       
 
       setInterval(function(){
           hashStuff();
       },120);
       
       /*
       $('.version-switcher').bind('click',function(){
           var appCache = window.applicationCache;
           if(appCache)
           {
               appCache.update();
           }
           return false;
            
       });
       */
      
     

       var hash='home';
       
       function hashStuff(bool,target)
       {
           var old_hash=hash;
           
           hash=window.top.location.href.replace(/^.*#/,'');
           
           if(hash==window.top.location.href)
           {
              hash='home';
              
               if(General.getState('page'))
               {
                   var href=window.top.location.href.replace(/#.*$/,'');

                   if(href==window.top.location.href)
                   {

                       hash=General.getState('page');
                   }

               }
              window.top.location.href=window.top.location.href+'#'+hash;
           }
           if(hash != old_hash || bool){
               /*
               var $_version_switcher=$('a.version-switcher');
               
               var href=$_version_switcher.attr('href');
               
               href=href.replace(/\/section:.*$/,'');
               $_version_switcher.attr('href',href+'/section:'+hash.replace('section-',''));
               */
              
               $('nav.top').show();
               if(hash=='home')goToInfo();
               else if(hash=='section-profile')goToProfile();
               else if(hash=='section-setup')goToSetup();
               else if(hash=='section-game')goToGame();
               else if(hash=='section-instructions')goToInstructions();
               else if(hash=='section-scores')goToScores();
               
               
               General.setState('page',hash);
           }
       }
       
       hashStuff(true,hash);
       
       stateChange();
       
         
        ajax($('#scores').data('url'),function(response){
            var scores=JSON.parse(response);
            
            var html='';
            var home_html='';
            
            for(var i=0;i<scores.length;i++)
            {
                var row='<li><span class="admiral '+scores[i].Score.admiral+'"></span><span class="name">'+scores[i].Score.name+'</span><span class="value">'+scores[i].Score.value+'</span></li>';
                html+=row;
                if(i<10)home_html+=row;
            }
            $('#scores').find('ul').html(html);
            $('#info').find('.high-scores ul').html(home_html);
        });
             
    });
    
    
    function stateChange()
    {
        if(General.getState('game'))
        {
            $('#resume').show();
        }
        else $('#resume').hide();
        
        
         var profile=General.getState('profile');

         if(profile)
         {
           $('header').removeClass('chromander').removeClass('opera')
           .addClass(profile.general);
         }
               
    }
    
    function goToSetup()
    {
        $('section').addClass('hidden');
        $('#setup').removeClass('hidden').removeClass('invisible');
        $('header').removeClass('big').addClass('small');
     
        $('footer nav').show();
        ShipSetup.init();
    }
    
    function goToGame()
    {
        $('section').addClass('hidden');
        $('#game').removeClass('hidden').removeClass('invisible');
        $('header').removeClass('big').addClass('small');
        $('footer nav').show();
       
     
        Game.init();
    }
    
    function goToInfo()
    {
        if($('body').hasClass('mobile'))
        $('nav.top').hide();
    
        $('section').addClass('hidden');
        $('#info').removeClass('hidden').removeClass('invisible');
        $('header').removeClass('small').addClass('big');
        $('footer nav').hide();
    }
    
     function goToProfile()
     {
        $('section').addClass('hidden');
        $('#profile').removeClass('hidden').removeClass('invisible');;
        $('header').removeClass('small').addClass('big');
        Profile.init();
        $('footer nav').show();
        
     }
     
     
      function goToInstructions()
     {
        $('section').addClass('hidden');
        $('#instructions').removeClass('hidden').removeClass('invisible');;
        $('footer nav').show();
        /*
        if($('body').hasClass('mobile'))
        $('header').removeClass('small').addClass('big');
        */
     }
    
    
    function goToScores()
    {
       
        
        $('section').addClass('hidden');
        $('#scores').removeClass('hidden').removeClass('invisible');
        $('footer nav').show();
        
        /*
        if($('body').hasClass('mobile'))
        $('header').removeClass('small').addClass('big');
        */
    }
    
    var state={};

    General.setState=function(page,s)
    {
        state['state_'+page]=s;
        var json_state=JSON.stringify(s);
        localStorage.setItem('state_'+page,json_state);
        
        
        stateChange();
    }
    
    
    General.getState=function(page)
    {
        if(state['state_'+page])return state['state_'+page];
        else
        return JSON.parse(localStorage.getItem('state_'+page));
    }
    
    
    
    
    
    
    
    
    
    
    
    
    function ajax(url,callback)
    {
        var xmlhttp;
        if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
        else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
          
        xmlhttp.onreadystatechange=function()
        {
           
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                callback(xmlhttp.responseText);
            }
          }
          
        xmlhttp.open("GET",url,true);
        xmlhttp.send();
        
        
    }
}(jQuery));


 // Check if a new cache is available on page load.
      if(window.applicationCache)
      {
        window.addEventListener('load', function(e) {

          window.applicationCache.addEventListener('updateready', function(e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
              // Browser downloaded a new app cache.
              // Swap it in and reload the page to get the new hotness.
              window.applicationCache.swapCache();
              if (confirm('A new version of this application is available. Load it?')) {
                window.location.reload();
              }
            } else {
              // Manifest didn't changed. Nothing new to server.
            }
          }, false);

        }, false);
      }var Profile=function(){
  return {init:null};  
};

(function($){
    
    var is_init=false;
    
    Profile.init=function(){
        if(is_init)return;
        
        is_init=true;
        
        var $_current=$('#profile article li').find('.title,.title-img')
        .bind('click',function(){
            var general=$(this).parents('li:first').data('general');
            
            var old_profile=General.getState('profile');
            
            if(old_profile && old_profile.general!=general)General.setState('game',null);
            
            var profile=old_profile;
            
            if(!profile)profile={};
        
            profile.general=general;
            General.setState('profile',profile);
        })
        .end()
         .filter(':not(:first)').css('left','1000px')
        .end()
        .filter(':first').addClass('current');
       
        
        $('#profile article nav a.left').addClass('disabled');
        
       
        $('#profile article nav a').bind('click',function(){
            var direction='right';
            
            var $_next=$_current.next('li');
            
            if($(this).hasClass('left'))
                {
                    direction='left';
                    $_next=$_current.prev('li');
                }
            
            if($_next.size()==0){return;}
            
            
             $_current.removeClass('current').css('left',direction=='left'?'1000px':'-2000px');
             $_current=$_next.addClass('current').css('left','0px');
             
             if($_current.next('li').size()==0)$('#profile article nav a.right').addClass('disabled');
             else $('#profile article nav a.right').removeClass('disabled');
             
             if($_current.prev('li').size()==0)$('#profile article nav a.left').addClass('disabled');
             else $('#profile article nav a.left').removeClass('disabled');
            
             
             
        });
        
    };
    
}(jQuery));var ShipSetup = function() {
    return {
        init:null
    }
};

(function($){
        
        
        
        var is_init=false;
        var grid=null;
        var window_timeout=null;
        
	var ship_definitions={
		ship1:{
			size:1,
			count:1,
			name:'ship1'
		},
		ship2:{
			size:2,
				count:1,
				name:'ship2'
		},
		ship3:
		{
			size:3,
			count:1,
			name:'ship3'
		}
	};
        
        
       
	
        ShipSetup.init=function(){
            
            
               var profile=General.getState('profile');
               
               $('#setup,#game aside.sidebar').removeClass('chromander')
               .removeClass('opera').addClass(profile.general);
               
               
               
               if(is_init){
                   grid.destroy();
                }
                
                
                var direction='h';

                var size=$('#setup .grid-container').width();

                grid = new Grid().init({selector:'#setup .grid',size:size});

                
                
               
                function shipInserted()
                {
                     $('#clear-ships').removeClass('disabled');
                        $('#ship-picker .choice').next().show().addClass('choice').end().removeClass('choice').addClass('picked').hide();
                        direction='h';

                        insertMode();
                }

                function insertMode()
                {
                        if($('#ship-picker li:not(.picked)').size()>0)
                        {
                                $_current=$('#ship-picker li.choice');
                                
                                
                                var count=$_current.find('.choice-unit').size();
                                var unit_size=$_current.find('.choice-unit').width();
                                
                                if(direction=='h')
                                {
                                    var top=Math.round($('#ship-picker').height()/2-unit_size/2);
                                    $('#ship-picker .ships').width(unit_size*count).height(unit_size);//.css('margin-top',top+'px');
                                }
                                else if(direction=='v')
                                {
                                    $('#ship-picker .ships').width(unit_size).height(unit_size*count);;
                                }
                                $('#ship-picker .ships').css({marginLeft:'auto',marginRight:'auto'});

                                if($_current.find('.choice-unit').hasClass('ship1'))$('#flip').hide();else $('#flip').show();

                                grid.setInsertMode({
                                        ship:$.extend({},ship_definitions[$_current.data('ship')],{direction:direction}),
                                        inserted:shipInserted
                                });
                        }
                else
                        {
                                grid.unsetInsertMode();
                                ready();
                        }
                }

                function clearShips()
                {
                        grid.unsetInsertMode();
                        grid.clearShips();
                        
                        $('#clear-ships').addClass('disabled');


                        $('#ship-picker').show().find('li').removeClass('picked').removeClass('choice').hide()
                        .find('.choice-unit').removeClass('direction-v').addClass('direction-h').end()
                        .filter(':first').addClass('choice').show();


                        $('#play').hide();


                        insertMode();
                        

                }
                
                var old_window_width=$(window).width();
                
                function windowResize()
                 {
                    clearTimeout(window_timeout);

                    window_timeout=setTimeout(function(){
                        if(old_window_width != $(window).width())
                            {
                                
                                var size=$('#setup .grid-container').width();
                                grid.resize(size);
                            }
                            
                        //ShipSetup.init();
                        
                    },100);
                 }

                if(!is_init)
                {
                    
               
                    is_init=true;


                    $(window).bind('resize',function(){
                        windowResize();
                    });
                     

                   

                    $('#play').hide().click(function(){
                            var state=grid.getState();

                            delete $_grid;
                            General.setState('setup',state);
                            General.setState('game',null);

                    });


                    var ships=[];
                    for(var ship_name in ship_definitions)
                    {
                            var ship=ship_definitions[ship_name];
                            ship.ship_name=ship_name;
                            for(var j=0;j<ship.count;j++)
                            {
                                    ships.push($.extend({},ship));
                            }


                    }



                    $('#auto-fill').click(function(){
                            grid.autoFill(ships);
                            grid.unsetInsertMode();
                            $('#ship-picker li').removeClass('choice').addClass('picked').hide();
                            $('#clear-ships').removeClass('disabled');
                            ready();
                    });

                    $('#clear-ships').click(function(){
                        clearShips();
                    });




                    var $_ship_list=$('<ul>');


                    for(var ship_name in ship_definitions)
                    {
                            var ship=ship_definitions[ship_name];

                            for(var i=1;i<=ship.count;i++)
                            {
                                    var $_list_item=$('<li>').appendTo($_ship_list).data('ship',ship_name);

                                    var width=ship.width;
                                    for(var j=1;j<=ship.size;j++)
                                    {
                                            $('<div>').addClass('choice-unit')
                                            .addClass('h')
                                            .addClass('ship')
                                            .addClass(ship_name)
                                            .addClass('part-'+j)
                                            .width(grid.getUnitSize()/2).height(grid.getUnitSize()/2)
                                            .appendTo($_list_item)
                                            .data('ship',{
                                                    ship_name:ship_name,
                                                    part:j
                                            });

                                    }
                            }
                    }




                    $('#ship-picker div.ships').prepend($_ship_list);//.height(grid.getUnitSize());





                    $('#flip').click(function(){
                                    var old_direction=direction;
                                    direction=direction=='h'?'v':'h';
                                    $('#ship-picker li.choice .choice-unit').removeClass('direction-'+old_direction).addClass('direction-'+direction);
                                    insertMode();
                    });


                    
                }
              
                
                clearShips();

               
        }
	
	
	
	function ready()
	{
                $('#ship-picker').hide();
		$('#play').show();
	}
	
	

}(jQuery));var Game=function(){
  return {init:null};  
};

(function($){
    
        var is_init=false;
    
	var starter_point=null;
	var last_hit=null;
	var direction=null;
	
	
	var remote_grid=null;
	var own_grid=null;
        
	var window_timeout=null;
        
        function setMessage(ships_hit,ships_sunk)
        {
           var $_message=$('#game .message');
           var general=General.generalAlias(remote_grid.getState().options.general);
           if(ships_hit==0 && ships_sunk==0)
           {
               $_message.text(general +' just missed');
           }
           else if(ships_hit>0 && ships_sunk==0)
           {
               $_message.text(general+' just hit '+ships_hit+' part'+(ships_hit>1?'s':'')+' of a ship!');
           }
           else if(ships_hit==0 && ships_sunk>0)
           {
               $_message.text(general+' just sunk '+ships_sunk+' ship'+(ships_sunk>1?'s':'')+' !!');
           }
           else if(ships_hit>0 && ships_sunk>0)
           {
               $_message.text(general+' just sunk '+ships_sunk+' ship'+(ships_sunk>1?'s':'')+' and hit '+ships_hit+' part'+(ships_hit>1?'s':'')+' of another ship');
           }
        }
        
        
        
     
        function youLost()
        {
            var top=window.pageYOffset ||  document.body.scrollTop;
            if(!top)top=0;
            top+=30;
            
            $('#overlay').show();
            $('#lose-popup').css({
                position:'absolute',
                left:Math.round($('#game').width()/2-$('#lose-popup').width()/2),
                top:top
              
            }).show();
        }
        
        function closeYouLost()
        {
             $('#overlay').hide();
             $('#lose-popup').hide();
        }
        
        function youWon(score)
        {
            var top=window.pageYOffset ||  document.body.scrollTop;
            if(!top)top=0;
            top+=30;
            
           
            
            $('#overlay').show();
            $('#win-popup').css({
                position:'absolute',
                left:Math.round($('#game').width()/2-$('#lose-popup').width()/2),
                top:top+'px'
              
            }).find('.score').text(score)
            .end().find('input[name="data[Score][value]"]').val(score)
            .end()
            .find('input[name="data[Score][admiral]"]').val(General.generalAlias(own_grid.getState().options.general))
            .end()
            .find('input[name="data[Score][name]"]').val(General.getState('profile').name)
            .end()
            .show();
            
            
        }
            
        function closeYouWon()
        {
            $('#overlay').hide();
            $('#win-popup').hide();
        }
            
         function windowResize()
                {
                    clearTimeout(window_timeout);
                   
                    window_timeout=setTimeout(function(){
                        //Game.init();
                        var size=$('#game .grid-container-for-remote').width();
                        var own_size=$('#game .grid-container-for-own').width();
                        own_grid.resize(Math.round(own_size));
                        remote_grid.resize(size);
                        
                        if( $('#game #extra-info').height()>0)
                       $('#game #extra-info').height(Math.round(own_size));
                    },100);
                }
                            
        Game.init=function(){
                
                
            
                
                if(is_init)
                {
                    own_grid.destroy();
                    remote_grid.destroy();
                }
                else
                {
                    var first_text=$('#game .show-own').text();
                    
                    $('#game .show-own').toggle(function(){
                         $('#game #extra-info').height($('#game .grid.own').width());
                         
                        $(this).text('Hide');
                        return false;
                    },function(){
                        $('#game #extra-info').height(0);
                        $(this).text(first_text);
                        return false;
                    });
                    
                    
                    
                    $(window).bind('resize',function(){
                        windowResize();
                      });
                      
                      $('#lose-popup').find('a').bind('click',function(){
                         closeYouLost(); 
                      });
                      
                       $('#win-popup').find('a').bind('click',function(){
                         closeYouWon(); 
                      }).end()
                      .find('form')
                      .bind('submit',function(){
                          var profile=General.getState('profile');
                          profile.name=$(this).find('input[name="data[Score][name]"]').val();
                          
                          General.setState('profile',$.extend(true,{},profile));
                         
                          return true;
                      });

                }
               
           
               
                is_init=true;
                
               
                
            	var size=$('#game .grid-container-for-remote').width();
                var own_size=$('#game .grid-container-for-own').width();
                
		own_grid = new Grid().init({selector:'#own-grid',size:Math.round(own_size),callbacks:{stateChange:function(){stateChange('own');}}});
		remote_grid=new Grid().init({selector:'#remote-grid',size:size,type:'remote',callbacks:{stateChange:function(){stateChange('remote');}}});
		
                
                var state=General.getState('game');
                
                
                function stateChange(type)
                {
                    var s = General.getState('game');
                    if(!s)s={};
                    
                    if(type=='own')
                    {
                        s['own']=$.extend(true,{},own_grid.getState());
                        $('#remote-score').text(own_grid.getState().score);
                    }
                    else if(type=='remote')
                    {
                        s['remote']=$.extend(true,{},remote_grid.getState());
                        $('#own-score').text(remote_grid.getState().score);
                    }
                  
                    General.setState('game',s);
                }
                
                if(!state)
                {
                    
                    state=General.getState('setup');
                    state.options.size=own_size;
                    state.options.selector='#own-grid';
                    state.options.general=General.getState('profile').general;
                    
                    
                    own_grid.setState($.extend(true,{},state));
                    remote_grid.autoFill(state.ships);
                    
                   
                    var general='chromander';
                    if(state.options.general=='chromander')general='opera';
                    
                    
                    remote_grid.setGeneral(general);
                }
                else
                {
                    state.own.options.selector='#own-grid';
                    state.remote.options.selector='#remote-grid';
                    state.remote.options.size=size;
                    state.own.options.size=own_size;
                  
                    own_grid.setState($.extend(true,{},state.own));
                    remote_grid.setState($.extend(true,{},state.remote));
                    
                }
                
		stateChange('own');
                stateChange('remote');
                
                
                //$('.center').width(remote_grid.getGridSize()); //remove later
		
                var $_message=$('#game .message');
                var own_general=General.generalAlias(own_grid.getState().options.general);
                var remote_general=General.generalAlias(remote_grid.getState().options.general);
                $_message.text(own_general+' VS '+remote_general+'. Click on the grid to start the attack');
                
                
		ownWar();
        };

        function destroy(){
            own_grid.destroy();
            delete own_grid;
            remote_grid.destroy();
            delete remote_grid;
        }
	
	function ownWar()
	{
		
		remote_grid.setWarMode({attacked:function(success){

				
				
				if(!success)
				{
                                    
                                         $('#game .message').text(General.generalAlias(remote_grid.getState().options.general)+' is playing...');
					remote_grid.unsetWarMode();
					General.setTimeout(remoteWar,800);
				}
				else if(success==3)
				{
					remote_grid.unsetWarMode();
					General.setTimeout(function(){
						General.setState('game',null);
                                                youWon(remote_grid.getState().score);
					},1000);
					
				}
			
			}
		});
	}
	
	
	function remoteWar()
	{
		
                var non_hit=[];
		
		var count=own_grid.getState().options.count;
		
                var ships_sunk=0;
                var ships_hit=0;
                
		function attack(){
			
                        

			var next_target=null;
			
			function fillList()
			{
				var found_targets=[];
				
				var hits=own_grid.getHits();
                               
				next_target=null;
				for(var i=0;i<count;i++)
				{
					for(var j=0;j<count;j++)
					{
						if(!hits[i] || !hits[i][j])
						{
							non_hit.push({x:i,y:j});
							
							if(last_hit)
							{								
								if(
									i==last_hit.x && j==last_hit.y+1
								|| i==last_hit.x && j==last_hit.y-1
								|| i==last_hit.x-1 && j==last_hit.y
								|| i==last_hit.x+1 && j==last_hit.y
								)
								{
									if(!direction)
									{
										next_target={x:i,y:j};
										break;
									}
									else found_targets.push({x:i,y:j});
								}
							}
						}
						
					}
					if(next_target)break;
				}
				
				if(found_targets.length>0)
				{
					for(var i=0;i<found_targets.length;i++)
					{
						if(direction=='v' && found_targets[i].y==last_hit.y)
						{
							next_target=found_targets[i];
							break;
						}
						else if(direction=='h' && found_targets[i].x==last_hit.x)
						{
							next_target=found_targets[i];
							break;
						}
					}
					
					if(!next_target)next_target=found_targets[0];
				}
			}
			
			fillList();
			
			if(!next_target && last_hit && (last_hit.x!=starter_point.x || last_hit.y!=starter_point.y) )
			{
				last_hit=starter_point;
				fillList();
			}
			
			if(!next_target)
			{
				var index=Math.floor(Math.random()*non_hit.length);
				next_target={x:non_hit[index].x,y:non_hit[index].y};
			}
			

			var attack_result=own_grid.attack(next_target.x,next_target.y);
			
			if(attack_result==0)
			{
                            General.setTimeout(ownWar,200);
			}
			else if(attack_result==1)
			{
                            ships_hit++;
                            last_hit={x:next_target.x,y:next_target.y};
                            if(!starter_point)starter_point=last_hit;
                            else
                            {
                                    if(last_hit.x!= starter_point.x)direction='v';
                                    else direction='h';

                            }
			}
			else if(attack_result==2)
			{
                                ships_sunk++;
                                ships_hit=0;
				starter_point=null;
				last_hit=null;
				direction=null;
			}
			else
			{
                            
                            ships_hit=0;
                            ships_sunk++;
				General.setTimeout(function(){
                                        General.setState('game',null);
                                        youLost();
				},1000);
				
			}
			
			if(attack_result && attack_result<3)
                        {
                            General.setTimeout(attack,1000);
                        }
                        
                        if(attack_result ==0 || attack_result==3)
                        {
                            setMessage(ships_hit,ships_sunk);
                        }
		}
		
		attack();
		
	}
	
	
	
	
}(jQuery));