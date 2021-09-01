!function(t,e,o){!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):jQuery&&!jQuery.fn.qtip&&t(jQuery)}(function(i){function n(o){g={pageX:o.pageX,pageY:o.pageY,type:"mousemove",scrollX:t.pageXOffset||e.body.scrollLeft||e.documentElement.scrollLeft,scrollY:t.pageYOffset||e.body.scrollTop||e.documentElement.scrollTop}}function r(t){var e=function(t){return t===b||"object"!=typeof t},o=function(t){return!i.isFunction(t)&&(!t&&!t.attr||t.length<1||"object"==typeof t&&!t.jquery&&!t.then)};return t&&"object"==typeof t?(e(t.metadata)&&(t.metadata={type:t.metadata}),"content"in t&&((e(t.content)||t.content.jquery)&&(t.content={text:t.content}),o(t.content.text||y)&&(t.content.text=y),"title"in t.content&&(e(t.content.title)&&(t.content.title={text:t.content.title}),o(t.content.title.text||y)&&(t.content.title.text=y))),"position"in t&&e(t.position)&&(t.position={my:t.position,at:t.position}),"show"in t&&e(t.show)&&(t.show=t.show.jquery?{target:t.show}:{event:t.show}),"hide"in t&&e(t.hide)&&(t.hide=t.hide.jquery?{target:t.hide}:{event:t.hide}),"style"in t&&e(t.style)&&(t.style={classes:t.style}),i.each(u,function(){this.sanitize&&this.sanitize(t)}),t):y}function s(s,a,c,l){function d(t){for(var e,o=0,i=a,n=t.split(".");i=i[n[o++]];)o<n.length&&(e=i);return[e||a,n.pop()]}function f(t){return A.concat("").join(t?"-"+t+" ":" ")}function h(){var t=a.style.widget,e=Q.hasClass(R);Q.removeClass(R),R=t?"ui-state-disabled":"qtip-disabled",Q.toggleClass(R,e),Q.toggleClass("ui-helper-reset "+f(),t).toggleClass(F,a.style.def&&!t),B.content&&B.content.toggleClass(f("content"),t),B.titlebar&&B.titlebar.toggleClass(f("header"),t),B.button&&B.button.toggleClass(L+"-icon",!t)}function w(t){B.title&&(B.titlebar.remove(),B.titlebar=B.title=B.button=b,t!==y&&H.reposition())}function x(){var t=a.content.title.button,e="string"==typeof t?t:"Close tooltip";B.button&&B.button.remove(),t.jquery?B.button=t:B.button=i("<a />",{"class":"qtip-close "+(a.style.widget?"":L+"-icon"),title:e,"aria-label":e}).prepend(i("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),B.button.appendTo(B.titlebar||Q).attr("role","button").click(function(t){return Q.hasClass(R)||H.hide(t),y})}function j(){var t=N+"-title";B.titlebar&&w(),B.titlebar=i("<div />",{"class":L+"-titlebar "+(a.style.widget?f("header"):"")}).append(B.title=i("<div />",{id:t,"class":L+"-title","aria-atomic":v})).insertBefore(B.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(t){i(this).toggleClass("ui-state-active ui-state-focus","down"===t.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(t){i(this).toggleClass("ui-state-hover","mouseover"===t.type)}),a.content.title.button&&x()}function q(t){var e=B.button;if(!H.rendered)return y;t?x():e.remove()}function M(t,e){var o=B.title;return H.rendered&&t?(i.isFunction(t)&&(t=t.call(s,Y.event,H)),t===y||!t&&""!==t?w(y):(t.jquery&&t.length>0?o.empty().append(t.css({display:"block"})):o.html(t),void(e!==y&&H.rendered&&Q[0].offsetWidth>0&&H.reposition(Y.event)))):y}function S(t){t&&i.isFunction(t.done)&&t.done(function(t){$(t,null,y)})}function $(t,e,n){function r(t){function n(o){o&&(delete s[o.src],clearTimeout(H.timers.img[o.src]),i(o).off(J)),i.isEmptyObject(s)&&(e!==y&&H.reposition(Y.event),t())}var r,s={};if(0===(r=c.find("img[src]:not([height]):not([width])")).length)return n();r.each(function(t,e){if(s[e.src]===o){var r=0,a=3;!function t(){if(e.height||e.width||r>a)return n(e);r+=1,H.timers.img[e.src]=setTimeout(t,700)}(),i(e).on("error"+J+" load"+J,function(){n(this)}),s[e.src]=e}})}var c=B.content;return H.rendered&&t?(i.isFunction(t)&&(t=t.call(s,Y.event,H)||""),n!==y&&S(a.content.deferred),t.jquery&&t.length>0?c.empty().append(t.css({display:"block"})):c.html(t),H.rendered<0?Q.queue("fx",r):(V=0,r(i.noop)),H):y}function P(){function o(t){if(Q.hasClass(R))return y;clearTimeout(H.timers.show),clearTimeout(H.timers.hide);var e=function(){H.toggle(v,t)};a.show.delay>0?H.timers.show=setTimeout(e,a.show.delay):e()}function r(t){if(Q.hasClass(R)||G||V)return y;var e=i(t.relatedTarget||t.target),o=e.closest(E)[0]===Q[0],n=e[0]===h.show[0];if(clearTimeout(H.timers.show),clearTimeout(H.timers.hide),"mouse"===f.target&&o||a.hide.fixed&&/mouse(out|leave|move)/.test(t.type)&&(o||n))try{t.preventDefault(),t.stopImmediatePropagation()}catch(r){}else a.hide.delay>0?H.timers.hide=setTimeout(function(){H.hide(t)},a.hide.delay):H.hide(t)}function l(t){if(Q.hasClass(R))return y;clearTimeout(H.timers.inactive),H.timers.inactive=setTimeout(function(){H.hide(t)},a.hide.inactive)}function d(t){H.rendered&&Q[0].offsetWidth>0&&H.reposition(t)}var f=a.position,h={show:a.show.target,hide:a.hide.target,viewport:i(f.viewport),document:i(e),body:i(e.body),window:i(t)},u={show:i.trim(""+a.show.event).split(" "),hide:i.trim(""+a.hide.event).split(" ")};i.browser.msie&&parseInt(i.browser.version,10);Q.on("mouseenter"+J+" mouseleave"+J,function(t){var e="mouseenter"===t.type;e&&H.focus(t),Q.toggleClass(X,e)}),/mouse(out|leave)/i.test(a.hide.event)&&"window"===a.hide.leave&&h.window.on("mouseout"+J+" blur"+J,function(t){/select|option/.test(t.target.nodeName)||t.relatedTarget||H.hide(t)}),a.hide.fixed?(h.hide=h.hide.add(Q),Q.on("mouseover"+J,function(){Q.hasClass(R)||clearTimeout(H.timers.hide)})):/mouse(over|enter)/i.test(a.show.event)&&h.hide.on("mouseleave"+J,function(){clearTimeout(H.timers.show)}),(""+a.hide.event).indexOf("unfocus")>-1&&f.container.closest("html").on("mousedown"+J+" touchstart"+J,function(t){var e=i(t.target),o=(H.rendered&&!Q.hasClass(R)&&Q[0].offsetWidth,e.parents(E).filter(Q[0]).length>0);e[0]===s[0]||e[0]===Q[0]||o||s.has(e[0]).length||e.attr("disabled")||H.hide(t)}),"number"==typeof a.hide.inactive&&(h.show.on("qtip-"+c+"-inactive",l),i.each(p.inactiveEvents,function(t,e){h.hide.add(B.tooltip).on(e+J+"-inactive",l)})),i.each(u.hide,function(t,e){var n=i.inArray(e,u.show),s=i(h.hide);n>-1&&s.add(h.show).length===s.length||"unfocus"===e?(h.show.on(e+J,function(t){Q[0].offsetWidth>0?r(t):o(t)}),delete u.show[n]):h.hide.on(e+J,r)}),i.each(u.show,function(t,e){h.show.on(e+J,o)}),"number"==typeof a.hide.distance&&h.show.add(Q).on("mousemove"+J,function(t){var e=Y.origin||{},o=a.hide.distance,i=Math.abs;(i(t.pageX-e.pageX)>=o||i(t.pageY-e.pageY)>=o)&&H.hide(t)}),"mouse"===f.target&&(h.show.on("mousemove"+J,n),f.adjust.mouse&&(a.hide.event&&(Q.on("mouseleave"+J,function(t){(t.relatedTarget||t.target)!==h.show[0]&&H.hide(t)}),B.target.on("mouseenter"+J+" mouseleave"+J,function(t){Y.onTarget="mouseenter"===t.type})),h.document.on("mousemove"+J,function(t){H.rendered&&Y.onTarget&&!Q.hasClass(R)&&Q[0].offsetWidth>0&&H.reposition(t||g)}))),(f.adjust.resize||h.viewport.length)&&(i.event.special.resize?h.viewport:h.window).on("resize"+J,d),h.window.on("scroll"+J,d)}function _(){var o=[a.show.target[0],a.hide.target[0],H.rendered&&B.tooltip[0],a.position.container[0],a.position.viewport[0],a.position.container.closest("html")[0],t,e];H.rendered?i([]).pushStack(i.grep(o,function(t){return"object"==typeof t})).off(J):a.show.target.off(J+"-create")}var B,Y,H=this,N=(e.body,L+"-"+c),G=0,V=0,Q=i(),J=".qtip-"+c,R="qtip-disabled";H.id=c,H.rendered=y,H.destroyed=y,H.elements=B={target:s},H.timers={img:{}},H.options=a,H.checks={},H.plugins={},H.cache=Y={event:{},target:i(),disabled:y,attr:l,onTarget:y,lastClass:""},H.checks.builtin={"^id$":function(t,e,o){var n=o===v?p.nextid:o,r=L+"-"+n;n!==y&&n.length>0&&!i("#"+r).length&&(Q[0].id=r,B.content[0].id=r+"-content",B.title[0].id=r+"-title")},"^content.text$":function(){$(a.content.text)},"^content.deferred$":function(){S(a.content.deferred)},"^content.title.text$":function(t,e,o){if(!o)return w();!B.title&&o&&j(),M(o)},"^content.title.button$":function(t,e,o){q(o)},"^position.(my|at)$":function(t,e,o){"string"==typeof o&&(t[e]=new u.Corner(o))},"^position.container$":function(t,e,o){H.rendered&&Q.appendTo(o)},"^show.ready$":function(){H.rendered?H.toggle(v):H.render(1)},"^style.classes$":function(t,e,o){Q.attr("class",L+" qtip "+o)},"^style.width|height":function(t,e,o){Q.css(e,o)},"^style.widget|content.title":h,"^events.(render|show|move|hide|focus|blur)$":function(t,e,o){Q[(i.isFunction(o)?"":"un")+"bind"]("tooltip"+e,o)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var t=a.position;Q.attr("tracking","mouse"===t.target&&t.adjust.mouse),_(),P()}},i.extend(H,{_triggerEvent:function(t,e,o){var n=i.Event("tooltip"+t);return n.originalEvent=(o?i.extend({},o):b)||Y.event||b,Q.trigger(n,[H].concat(e||[])),!n.isDefaultPrevented()},render:function(t){if(H.rendered)return H;var e=a.content.text,o=a.content.title,n=a.position;return i.attr(s[0],"aria-describedby",N),Q=B.tooltip=i("<div/>",{id:N,"class":[L,F,a.style.classes,L+"-pos-"+a.position.my.abbrev()].join(" "),width:a.style.width||"",height:a.style.height||"",tracking:"mouse"===n.target&&n.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":y,"aria-describedby":N+"-content","aria-hidden":v}).toggleClass(R,Y.disabled).data("qtip",H).appendTo(a.position.container).append(B.content=i("<div />",{"class":L+"-content",id:N+"-content","aria-atomic":v})),H.rendered=-1,G=1,o.text?(j(),i.isFunction(o.text)||M(o.text,y)):o.button&&x(),i.isFunction(e)&&!e.then||$(e,y),H.rendered=v,h(),i.each(a.events,function(t,e){i.isFunction(e)&&Q.on("toggle"===t?"tooltipshow tooltiphide":"tooltip"+t,e)}),i.each(u,function(){"render"===this.initialize&&this(H)}),P(),Q.queue("fx",function(e){H._triggerEvent("render"),G=0,(a.show.ready||t)&&H.toggle(v,Y.event,y),e()}),H},get:function(t){var e,o;switch(t.toLowerCase()){case"dimensions":e={height:Q.outerHeight(y),width:Q.outerWidth(y)};break;case"offset":e=u.offset(Q,a.position.container);break;default:e=(e=(o=d(t.toLowerCase()))[0][o[1]]).precedance?e.string():e}return e},set:function(t,e){function o(t,e){var o,i,n;for(o in l)for(i in l[o])(n=new RegExp(i,"i").exec(t))&&(e.push(n),l[o][i].apply(H,e))}var n,s=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,c=y,l=H.checks;return"string"==typeof t?(n=t,(t={})[n]=e):t=i.extend(v,{},t),i.each(t,function(e,o){var n,r=d(e.toLowerCase());n=r[0][r[1]],r[0][r[1]]="object"==typeof o&&o.nodeType?i(o):o,t[e]=[r[0],r[1],o,n],c=s.test(e)||c}),r(a),G=1,i.each(t,o),G=0,H.rendered&&Q[0].offsetWidth>0&&c&&H.reposition("mouse"===a.position.target?b:Y.event),H},toggle:function(t,o){function r(){t?(i.browser.msie&&Q[0].style.removeAttribute("filter"),Q.css("overflow",""),"string"==typeof l.autofocus&&i(l.autofocus,Q).focus(),l.target.trigger("qtip-"+c+"-inactive")):Q.css({display:"",visibility:"",opacity:"",left:"",top:""}),H._triggerEvent(t?"visible":"hidden")}if(o){if(/over|enter/.test(o.type)&&/out|leave/.test(Y.event.type)&&a.show.target.add(o.target).length===a.show.target.length&&Q.has(o.relatedTarget).length)return H;Y.event=i.extend({},o)}if(!H.rendered)return t?H.render(1):H;var s=t?"show":"hide",l=a[s],d=(a[t?"hide":"show"],a.position),f=a.content,h=Q[0].offsetWidth>0,p=t||1===l.target.length,u=!o||l.target.length<2||Y.target[0]===o.target;return(typeof t).search("boolean|number")&&(t=!h),!Q.is(":animated")&&h===t&&u?H:H._triggerEvent(s,[90])?(i.attr(Q[0],"aria-hidden",!t),t?(Y.origin=i.extend({},g),H.focus(o),i.isFunction(f.text)&&$(f.text,y),i.isFunction(f.title.text)&&M(f.title.text,y),!m&&"mouse"===d.target&&d.adjust.mouse&&(i(e).on("mousemove.qtip",n),m=v),H.reposition(o,arguments[2]),l.solo&&i(E,l.solo).not(Q).qtip("hide",i.Event("tooltipsolo"))):(clearTimeout(H.timers.show),delete Y.origin,m&&!i(E+'[tracking="true"]:visible',l.solo).not(Q).length&&(i(e).off("mousemove.qtip"),m=y),H.blur(o)),l.effect===y||p===y?(Q[s](),r.call(Q)):i.isFunction(l.effect)?(Q.stop(1,1),l.effect.call(Q,H),Q.queue("fx",function(t){r(),t()})):Q.fadeTo(90,t?1:0,r),t&&l.target.trigger("qtip-"+c+"-inactive"),H):H},show:function(t){return H.toggle(v,t)},hide:function(t){return H.toggle(y,t)},focus:function(t){if(!H.rendered)return H;var e=i(E),o=parseInt(Q[0].style.zIndex,10),n=p.zindex+e.length,r=i.extend({},t);return Q.hasClass(W)||H._triggerEvent("focus",[n],r)&&(o!==n&&(e.each(function(){this.style.zIndex>o&&(this.style.zIndex=this.style.zIndex-1)}),e.filter("."+W).qtip("blur",r)),Q.addClass(W)[0].style.zIndex=n),H},blur:function(t){return Q.removeClass(W),H._triggerEvent("blur",[Q.css("zIndex")],t),H},reposition:function(o,n){if(!H.rendered||G)return H;G=1;var r,s,c=a.position.target,l=a.position,d=l.my,f=l.at,h=l.adjust,p=h.method.split(" "),m=Q.outerWidth(y),v=Q.outerHeight(y),b=0,w=0,x=Q.css("position"),j=l.viewport,q={left:0,top:0},M=l.container,S=Q[0].offsetWidth>0,L=o&&"scroll"===o.type,O=i(t);if(i.isArray(c)&&2===c.length)f={x:C,y:T},q={left:c[0],top:c[1]};else if("mouse"===c&&(o&&o.pageX||Y.event.pageX))f={x:C,y:T},o=!g||!g.pageX||!h.mouse&&o&&o.pageX?(!o||"resize"!==o.type&&"scroll"!==o.type?o&&o.pageX&&"mousemove"===o.type?o:!h.mouse&&Y.origin&&Y.origin.pageX&&a.show.distance?Y.origin:o:Y.event)||o||Y.event||g||{}:{pageX:g.pageX,pageY:g.pageY},"static"!==x&&(q=M.offset()),q={left:o.pageX-q.left,top:o.pageY-q.top},h.mouse&&L&&(q.left-=g.scrollX-O.scrollLeft(),q.top-=g.scrollY-O.scrollTop());else{if("event"===c&&o&&o.target&&"scroll"!==o.type&&"resize"!==o.type?Y.target=i(o.target):"event"!==c&&(Y.target=i(c.jquery?c:B.target)),c=Y.target,0===(c=i(c).eq(0)).length)return H;c[0]===e||c[0]===t?(b=u.iOS?t.innerWidth:c.width(),w=u.iOS?t.innerHeight:c.height(),c[0]===t&&(q={top:(j||c).scrollTop(),left:(j||c).scrollLeft()})):u.imagemap&&c.is("area")?r=u.imagemap(H,c,f,u.viewport?p:y):u.svg&&c[0].ownerSVGElement?r=u.svg(H,c,f,u.viewport?p:y):(b=c.outerWidth(y),w=c.outerHeight(y),q=u.offset(c,M)),r&&(b=r.width,w=r.height,s=r.offset,q=r.position),(u.iOS>3.1&&u.iOS<4.1||u.iOS>=4.3&&u.iOS<4.33||!u.iOS&&"fixed"===x)&&(q.left-=O.scrollLeft(),q.top-=O.scrollTop()),q.left+=f.x===k?b:f.x===I?b/2:0,q.top+=f.y===z?w:f.y===I?w/2:0}return q.left+=h.x+(d.x===k?-m:d.x===I?-m/2:0),q.top+=h.y+(d.y===z?-v:d.y===I?-v/2:0),u.viewport?(q.adjusted=u.viewport(H,q,l,b,w,m,v),s&&q.adjusted.left&&(q.left+=s.left),s&&q.adjusted.top&&(q.top+=s.top)):q.adjusted={left:0,top:0},H._triggerEvent("move",[q,j.elem||j],o)?(delete q.adjusted,n===y||!S||isNaN(q.left)||isNaN(q.top)||"mouse"===c||!i.isFunction(l.effect)?Q.css(q):i.isFunction(l.effect)&&(l.effect.call(Q,H,i.extend({},q)),Q.queue(function(t){i(this).css({opacity:"",height:""}),i.browser.msie&&this.style.removeAttribute("filter"),t()})),G=0,H):H},disable:function(t){return"boolean"!=typeof t&&(t=!(Q.hasClass(R)||Y.disabled)),H.rendered?(Q.toggleClass(R,t),i.attr(Q[0],"aria-disabled",t)):Y.disabled=!!t,H},enable:function(){return H.disable(y)},destroy:function(){var t=s[0],e=i.attr(t,D),o=s.data("qtip");return H.destroyed=v,H.rendered&&(Q.stop(1,0).remove(),i.each(H.plugins,function(){this.destroy&&this.destroy()})),clearTimeout(H.timers.show),clearTimeout(H.timers.hide),_(),o&&H!==o||(i.removeData(t,"qtip"),a.suppress&&e&&(i.attr(t,"title",e),s.removeAttr(D)),s.removeAttr("aria-describedby")),s.off(".qtip-"+c),delete O[H.id],s}})}function a(t,o){var n,a,c,l,d,f=i(this),h=i(e.body),g=this===e?h:f,m=f.metadata?f.metadata(o.metadata):b,w="html5"===o.metadata.type&&m?m[o.metadata.name]:b,x=f.data(o.metadata.name||"qtipopts");try{x="string"==typeof x?i.parseJSON(x):x}catch(j){}if(a=(l=i.extend(v,{},p.defaults,o,"object"==typeof x?r(x):b,r(w||m))).position,l.id=t,"boolean"==typeof l.content.text){if(c=f.attr(l.content.attr),l.content.attr===y||!c)return y;l.content.text=c}if(a.container.length||(a.container=h),a.target===y&&(a.target=g),l.show.target===y&&(l.show.target=g),l.show.solo===v&&(l.show.solo=a.container.closest("body")),l.hide.target===y&&(l.hide.target=g),l.position.viewport===v&&(l.position.viewport=a.container),a.container=a.container.eq(0),a.at=new u.Corner(a.at),a.my=new u.Corner(a.my),i.data(this,"qtip"))if(l.overwrite)f.qtip("destroy");else if(l.overwrite===y)return y;return l.suppress&&(d=i.attr(this,"title"))&&i(this).removeAttr("title").attr(D,d).attr("title",""),n=new s(f,l,t,!!c),i.data(this,"qtip",n),f.on("remove.qtip-"+t+" removeqtip.qtip-"+t,function(){n.destroy()}),n}function c(t){var e,o=this,n=t.elements.tooltip,r=t.options.content.ajax,s=p.defaults.content.ajax,a=".qtip-ajax",c=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,l=v,d=y;t.checks.ajax={"^content.ajax":function(t,e,i){"ajax"===e&&(r=i),"once"===e?o.init():r&&r.url?o.load():n.off(a)}},i.extend(o,{init:function(){return r&&r.url&&n.off(a)[r.once?"one":"bind"]("tooltipshow"+a,o.load),o},load:function(n){function a(){var e;t.destroyed||(l=y,m&&(d=v,t.show(n.originalEvent)),(e=s.complete||r.complete)&&i.isFunction(e)&&e.apply(r.context||t,arguments))}function f(e,o,n){var a;t.destroyed||(p&&"string"==typeof e&&(e=i("<div/>").append(e.replace(c,"")).find(p)),(a=s.success||r.success)&&i.isFunction(a)?a.call(r.context||t,e,o,n):t.set("content.text",e))}function h(e,o,i){t.destroyed||0===e.status||t.set("content.text",o+": "+i)}if(d)d=y;else{var p,u=r.url.lastIndexOf(" "),g=r.url,m=!r.loading&&l;if(m)try{n.preventDefault()}catch(b){}else if(n&&n.isDefaultPrevented())return o;e&&e.abort&&e.abort(),u>-1&&(p=g.substr(u),g=g.substr(0,u)),e=i.ajax(i.extend({error:s.error||h,context:t},r,{url:g,success:f,complete:a}))}},destroy:function(){e&&e.abort&&e.abort(),t.destroyed=v}}),o.init()}function l(t,e,o){var i=Math.ceil(e/2),n=Math.ceil(o/2),r={bottomright:[[0,0],[e,o],[e,0]],bottomleft:[[0,0],[e,0],[0,o]],topright:[[0,o],[e,0],[e,o]],topleft:[[0,0],[0,o],[e,o]],topcenter:[[0,o],[i,0],[e,o]],bottomcenter:[[0,0],[e,0],[i,o]],rightcenter:[[0,0],[e,n],[0,o]],leftcenter:[[e,0],[e,o],[0,n]]};return r.lefttop=r.bottomright,r.righttop=r.bottomleft,r.leftbottom=r.topright,r.rightbottom=r.topleft,r[t.string()]}function d(t){function e(t){var e=L.is(":visible");L.show(),t(),L.toggle(e)}function n(){A.width=m.height,A.height=m.width}function r(){A.width=m.width,A.height=m.height}function s(e,i,n){if(M.tip){var r,s,a=g.corner.clone(),l=n.adjusted,d=t.options.position.adjust.method.split(" "),f=d[0],h=d[1]||d[0],p={left:y,top:y,x:0,y:0},u={};g.corner.fixed!==v&&(f===S&&a.precedance===w&&l.left&&a.y!==I?a.precedance=a.precedance===w?x:w:f!==S&&l.left&&(a.x=a.x===I?l.left>0?C:k:a.x===C?k:C),h===S&&a.precedance===x&&l.top&&a.x!==I?a.precedance=a.precedance===x?w:x:h!==S&&l.top&&(a.y=a.y===I?l.top>0?T:z:a.y===T?z:T),a.string()===O.corner.string()||O.top===l.top&&O.left===l.left||g.update(a,y)),(r=g.position(a,l))[a.x]+=c(a,a.x),r[a.y]+=c(a,a.y),r.right!==o&&(r.left=-r.right),r.bottom!==o&&(r.top=-r.bottom),r.user=Math.max(0,m.offset),(p.left=f===S&&!!l.left)&&(a.x===I?u["margin-left"]=p.x=r["margin-left"]:(s=r.right!==o?[l.left,-r.left]:[-l.left,r.left],(p.x=Math.max(s[0],s[1]))>s[0]&&(n.left-=l.left,p.left=y),u[r.right!==o?k:C]=p.x)),(p.top=h===S&&!!l.top)&&(a.y===I?u["margin-top"]=p.y=r["margin-top"]:(s=r.bottom!==o?[l.top,-r.top]:[-l.top,r.top],(p.y=Math.max(s[0],s[1]))>s[0]&&(n.top-=l.top,p.top=y),u[r.bottom!==o?z:T]=p.y)),M.tip.css(u).toggle(!(p.x&&p.y||a.x===I&&p.y||a.y===I&&p.x)),n.left-=r.left.charAt?r.user:f!==S||p.top||!p.left&&!p.top?r.left:0,n.top-=r.top.charAt?r.user:h!==S||p.left||!p.left&&!p.top?r.top:0,O.left=l.left,O.top=l.top,O.corner=a.clone()}}function a(){var e=m.corner,o=t.options.position,i=o.at,n=o.my.string?o.my.string():o.my;return e===y||n===y&&i===y?y:(e===v?g.corner=new u.Corner(n):e.string||(g.corner=new u.Corner(e),g.corner.fixed=v),O.corner=new u.Corner(g.corner.string()),"centercenter"!==g.corner.string())}function c(t,o,i){o=o||t[t.precedance];var n,r=M.titlebar&&t.y===T?M.titlebar:L,s="border-"+o+"-width",a=function(t){return parseInt(t.css(s),10)};return e(function(){n=(i?a(i):a(M.content)||a(r)||a(L))||0}),n}function d(t){var o,n=M.titlebar&&t.y===T?M.titlebar:M.content,r=i.browser.mozilla?"-moz-":i.browser.webkit?"-webkit-":"",s="border-radius-"+t.y+t.x,a="border-"+t.y+"-"+t.x+"-radius",c=function(t){return parseInt(n.css(t),10)||parseInt(L.css(t),10)};return e(function(){o=c(a)||c(r+a)||c(r+s)||c(s)||0}),o}function f(t){function o(t,e,o){var i=t.css(e)||l;return o&&i===t.css(o)?y:s.test(i)?y:i}var n=M.tip.css("cssText",""),r=t||g.corner,s=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,a="border-"+r[r.precedance]+"-color",c="background-color",l="transparent",d=" !important",f=M.titlebar,h=f&&(r.y===T||r.y===I&&n.position().top+A.height/2+m.offset<f.outerHeight(v))?f:M.content;e(function(){E.fill=o(n,c)||o(h,c)||o(M.content,c)||o(L,c)||n.css(c),E.border=o(n,a,"color")||o(h,a,"color")||o(M.content,a,"color")||o(L,a,"color")||L.css(a),i("*",n).add(n).css("cssText",c+":"+l+d+";border:0"+d+";")})}function h(t){var e,o,i=t.precedance===x,n=A[i?j:q],r=A[i?q:j],s=t.string().indexOf(I)>-1,a=n*(s?.5:1),c=Math.pow,l=Math.round,d=Math.sqrt(c(a,2)+c(r,2)),f=[F/a*d,F/r*d];return f[2]=Math.sqrt(c(f[0],2)-c(F,2)),f[3]=Math.sqrt(c(f[1],2)-c(F,2)),{height:(o=[l((e=(d+f[2]+f[3]+(s?0:f[0]))/d)*r),l(e*n)])[i?0:1],width:o[i?1:0]}}function p(t,e,o){return"<qvml:"+t+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(e||"")+' style="behavior: url(#default#VML); '+(o||"")+'" />'}var g=this,m=t.options.style.tip,M=t.elements,L=M.tooltip,O={top:0,left:0},A={width:m.width,height:m.height},E={},F=m.border||0,W=".qtip-tip",X=!!(i("<canvas />")[0]||{}).getContext;g.corner=b,g.mimic=b,g.border=F,g.offset=m.offset,g.size=A,t.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){g.init()||g.destroy(),t.reposition()},"^style.tip.(height|width)$":function(){A={width:m.width,height:m.height},g.create(),g.update(),t.reposition()},"^content.title.text|style.(classes|widget)$":function(){M.tip&&M.tip.length&&g.update()}},i.extend(g,{init:function(){var t=a()&&(X||i.browser.msie);return t&&(g.create(),g.update(),L.off(W).on("tooltipmove"+W,s)),t},create:function(){var t,e=A.width,o=A.height;M.tip&&M.tip.remove(),M.tip=i("<div />",{"class":"qtip-tip"}).css({width:e,height:o}).prependTo(L),X?i("<canvas />").appendTo(M.tip)[0].getContext("2d").save():(t=p("shape",'coordorigin="0,0"',"position:absolute;"),M.tip.html(t+t),i("*",M.tip).on("click mousedown",function(t){t.stopPropagation()}))},update:function(t,e){var o,s,a,d,j=M.tip,q=j.children(),S=A.width,W=A.height,$=m.mimic,D=Math.round;t||(t=O.corner||g.corner),$===y?$=t:(($=new u.Corner($)).precedance=t.precedance,"inherit"===$.x?$.x=t.x:"inherit"===$.y?$.y=t.y:$.x===$.y&&($[t.precedance]=t[t.precedance])),$.precedance,t.precedance===w?n():r(),M.tip.css({width:S=A.width,height:W=A.height}),f(t),"transparent"!==E.border?(F=c(t,b),0===m.border&&F>0&&(E.fill=E.border),g.border=F=m.border!==v?m.border:F):g.border=F=0,s=l($,S,W),g.size=d=h(t),j.css(d).css("line-height",d.height+"px"),a=t.precedance===x?[D($.x===C?F:$.x===k?d.width-S-F:(d.width-S)/2),D($.y===T?d.height-W:0)]:[D($.x===C?d.width-S:0),D($.y===T?F:$.y===z?d.height-W-F:(d.height-W)/2)],X?(q.attr(d),(o=q[0].getContext("2d")).restore(),o.save(),o.clearRect(0,0,3e3,3e3),o.fillStyle=E.fill,o.strokeStyle=E.border,o.lineWidth=2*F,o.lineJoin="miter",o.miterLimit=100,o.translate(a[0],a[1]),o.beginPath(),o.moveTo(s[0][0],s[0][1]),o.lineTo(s[1][0],s[1][1]),o.lineTo(s[2][0],s[2][1]),o.closePath(),F&&("border-box"===L.css("background-clip")&&(o.strokeStyle=E.fill,o.stroke()),o.strokeStyle=E.border,o.stroke()),o.fill()):(s="m"+s[0][0]+","+s[0][1]+" l"+s[1][0]+","+s[1][1]+" "+s[2][0]+","+s[2][1]+" xe",a[2]=F&&/^(r|b)/i.test(t.string())?8===parseFloat(i.browser.version,10)?2:1:0,q.css({coordsize:S+F+" "+(W+F),antialias:""+($.string().indexOf(I)>-1),left:a[0],top:a[1],width:S+F,height:W+F}).each(function(t){var e=i(this);e[e.prop?"prop":"attr"]({coordsize:S+F+" "+(W+F),path:s,fillcolor:E.fill,filled:!!t,stroked:!t}).toggle(!(!F&&!t)),t||""!==e.html()||e.html(p("stroke",'weight="'+2*F+'px" color="'+E.border+'" miterlimit="1000" joinstyle="miter"'))})),e!==y&&g.position(t)},position:function(t){var e,o,n,r=M.tip,s={},a=Math.max(0,m.offset);return m.corner!==y&&r?(t=t||g.corner,e=t.precedance,o=h(t),n=[t.x,t.y],e===w&&n.reverse(),i.each(n,function(i,n){var r,l,f;n===I?(s[r=e===x?C:T]="50%",s["margin-"+r]=-Math.round(o[e===x?j:q]/2)+a):(r=c(t,n),l=c(t,n,M.content),f=d(t),s[n]=i?l:a+(f>r?f:-r))}),s[t[e]]-=o[e===w?j:q],r.css({top:"",bottom:"",left:"",right:"",margin:""}).css(s),s):y},destroy:function(){M.tip&&M.tip.remove(),M.tip=!1,L.off(W)}}),g.init()}function f(o){function n(){x=i(w,f).not("[disabled]").map(function(){return"function"==typeof this.focus?this:null})}function r(t){x.length<1&&t.length?t.not("body").blur():x.first().focus()}function s(t){var e=i(t.target),o=e.closest(".qtip");(o.length<1?y:parseInt(o[0].style.zIndex,10)>parseInt(f[0].style.zIndex,10))||i(t.target).closest(E)[0]===f[0]||r(e)}var a,c=this,l=o.options.show.modal,d=o.elements,f=d.tooltip,h="#qtip-overlay",p=".qtipmodal",g=p+o.id,m="is-modal-qtip",b=i(e.body),w=u.modal.focusable.join(","),x={};o.checks.modal={"^show.modal.(on|blur)$":function(){c.init(),d.overlay.toggle(f.is(":visible"))},"^content.text$":function(){n()}},i.extend(c,{init:function(){return l.on?(a=c.create(),f.attr(m,v).css("z-index",u.modal.zindex+i(E+"["+m+"]").length).off(p).off(g).on("tooltipshow"+p+" tooltiphide"+p,function(t,e,o){var n=t.originalEvent;if(t.target===f[0])if(n&&"tooltiphide"===t.type&&/mouse(leave|enter)/.test(n.type)&&i(n.relatedTarget).closest(a[0]).length)try{t.preventDefault()}catch(r){}else(!n||n&&!n.solo)&&c[t.type.replace("tooltip","")](t,o)}).on("tooltipfocus"+p,function(t){if(!t.isDefaultPrevented()&&t.target===f[0]){var e=i(E).filter("["+m+"]"),o=u.modal.zindex+e.length,n=parseInt(f[0].style.zIndex,10);a[0].style.zIndex=o-2,e.each(function(){this.style.zIndex>n&&(this.style.zIndex-=1)}),e.end().filter("."+W).qtip("blur",t.originalEvent),f.addClass(W)[0].style.zIndex=o;try{t.preventDefault()}catch(r){}}}).on("tooltiphide"+p,function(t){t.target===f[0]&&i("["+m+"]").filter(":visible").not(f).last().qtip("focus",t)}),l.escape&&i(e).off(g).on("keydown"+g,function(t){27===t.keyCode&&f.hasClass(W)&&o.hide(t)}),l.blur&&d.overlay.off(g).on("click"+g,function(t){f.hasClass(W)&&o.hide(t)}),n(),c):c},create:function(){function e(){a.css({height:n.height(),width:n.width()})}var o=i(h),n=i(t);return o.length?d.overlay=o.insertAfter(i(E).last()):(a=d.overlay=i("<div />",{id:h.substr(1),html:"<div></div>",mousedown:function(){return y}}).hide().insertAfter(i(E).last()),n.off(p).on("resize"+p,e),e(),a)},toggle:function(t,e,o){if(t&&t.isDefaultPrevented())return c;var n=l.effect,d=e?"show":"hide",h=a.is(":visible"),p=i("["+m+"]").filter(":visible").not(f);return a||(a=c.create()),a.is(":animated")&&h===e&&a.data("toggleState")!==y||!e&&p.length?c:(e?(a.css({left:0,top:0}),a.toggleClass("blurs",l.blur),l.stealfocus!==y&&(b.on("focusin"+g,s),r(i("body :focus")))):b.off("focusin"+g),a.stop(v,y).data("toggleState",e),i.isFunction(n)?n.call(a,e):n===y?a[d]():a.fadeTo(parseInt(o,10)||90,e?1:0,function(){e||i(this).hide()}),e||a.queue(function(t){a.css({left:"",top:""}).removeData("toggleState"),t()}),c)},show:function(t,e){return c.toggle(t,v,e)},hide:function(t,e){return c.toggle(t,y,e)},destroy:function(){var t=a;return t&&((t=i("["+m+"]").not(f).length<1)?(d.overlay.remove(),i(e).off(p)):d.overlay.off(p+o.id),b.off("focusin"+g)),f.removeAttr(m).off(p)}}),c.init()}function h(o){var n,r=this,s=o.elements,a=o.options,c=s.tooltip,l=".ie6-"+o.id,d=i("select, object").length<1,f=0,h=y;o.checks.ie6={"^content|style$":function(){redraw()}},i.extend(r,{init:function(){var o,a=i(t);d&&(s.bgiframe=i('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'),s.bgiframe.appendTo(c),c.on("tooltipmove"+l,r.adjustBGIFrame)),n=i("<div/>",{id:"qtip-rcontainer"}).appendTo(e.body),r.redraw(),s.overlay&&!h&&(o=function(){s.overlay[0].style.top=a.scrollTop()+"px"},a.on("scroll.qtip-ie6, resize.qtip-ie6",o),o(),s.overlay.addClass("qtipmodal-ie6fix"),h=v)},adjustBGIFrame:function(){var t,e,i=o.get("dimensions"),n=o.plugins.tip,r=s.tip;e={left:-(e=parseInt(c.css("border-left-width"),10)||0),top:-e},n&&r&&(e[(t="x"===n.corner.precedance?["width","left"]:["height","top"])[1]]-=r[t[0]]()),s.bgiframe.css(e).css(i)},redraw:function(){if(o.rendered<1||f)return r;var t,e,i,s,l=a.style,d=a.position.container;return f=1,l.height&&c.css(q,l.height),l.width?c.css(j,l.width):(c.css(j,"").appendTo(n),(e=c.width())%2<1&&(e+=1),t=((i=c.css("max-width")||"")+(s=c.css("min-width")||"")).indexOf("%")>-1?d.width()/100:0,e=(i=(i.indexOf("%")>-1?t:1)*parseInt(i,10)||e)+(s=(s.indexOf("%")>-1?t:1)*parseInt(s,10)||0)?Math.min(Math.max(e,s),i):e,c.css(j,Math.round(e)).appendTo(d)),f=0,r},destroy:function(){d&&s.bgiframe.remove(),c.off(l)}}),r.init()}var p,u,g,m,v=!0,y=!1,b=null,w="x",x="y",j="width",q="height",T="top",C="left",z="bottom",k="right",I="center",M="flipinvert",S="shift",L="qtip",O={},A=["ui-widget","ui-tooltip"],E="div.qtip."+L,F=L+"-default",W=L+"-focus",X=L+"-hover",$="_replacedByqTip",D="oldtitle";(p=i.fn.qtip=function(t,e,n){var s=(""+t).toLowerCase(),a=b,c=i.makeArray(arguments).slice(1),l=c[c.length-1],d=this[0]?i.data(this[0],"qtip"):b;return!arguments.length&&d||"api"===s?d:"string"==typeof t?(this.each(function(){var t=i.data(this,"qtip");if(!t)return v;if(l&&l.timeStamp&&(t.cache.event=l),"option"!==s&&"options"!==s||!e)t[s]&&t[s].apply(t[s],c);else{if(!i.isPlainObject(e)&&n===o)return a=t.get(e),y;t.set(e,n)}}),a!==b?a:this):"object"!=typeof t&&arguments.length?void 0:(d=r(i.extend(v,{},t)),p.bind.call(this,d,l))}).bind=function(t,e){return this.each(function(r){function s(t){function e(){h.render("object"==typeof t||c.show.ready),l.show.add(l.hide).off(f)}if(h.cache.disabled)return y;h.cache.event=i.extend({},t),h.cache.target=t?i(t.target):[o],c.show.delay>0?(clearTimeout(h.timers.show),h.timers.show=setTimeout(e,c.show.delay),d.show!==d.hide&&l.hide.on(d.hide,function(){clearTimeout(h.timers.show)})):e()}var c,l,d,f,h,g;if(g=!(g=i.isArray(t.id)?t.id[r]:t.id)||g===y||g.length<1||O[g]?p.nextid++:O[g]=g,f=".qtip-"+g+"-create",(h=a.call(this,g,t))===y)return v;c=h.options,i.each(u,function(){"initialize"===this.initialize&&this(h)}),l={show:c.show.target,hide:c.hide.target},d={show:i.trim(""+c.show.event).replace(/ /g,f+" ")+f,hide:i.trim(""+c.hide.event).replace(/ /g,f+" ")+f},/mouse(over|enter)/i.test(d.show)&&!/mouse(out|leave)/i.test(d.hide)&&(d.hide+=" mouseleave"+f),l.show.on("mousemove"+f,function(t){n(t),h.cache.onTarget=v}),l.show.on(d.show,s),(c.show.ready||c.prerender)&&s(e)}).attr("data-hasqtip",v)},u=p.plugins={Corner:function(t){t=(""+t).replace(/([A-Z])/," $1").replace(/middle/gi,I).toLowerCase(),this.x=(t.match(/left|right/i)||t.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(t.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var e=t.charAt(0);this.precedance="t"===e||"b"===e?x:w,this.string=function(){return this.precedance===x?this.y+this.x:this.x+this.y},this.abbrev=function(){var t=this.x.substr(0,1),e=this.y.substr(0,1);return t===e?t:this.precedance===x?e+t:t+e},this.invertx=function(t){this.x=this.x===C?k:this.x===k?C:t||this.x},this.inverty=function(t){this.y=this.y===T?z:this.y===z?T:t||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(t,o){function n(t,e){c.left+=e*t.scrollLeft(),c.top+=e*t.scrollTop()}var r,s,a,c=t.offset(),l=t.closest("body"),d=i.browser.msie&&"CSS1Compat"!==e.compatMode,f=o;if(f){do{"static"!==f.css("position")&&(s=f.position(),c.left-=s.left+(parseInt(f.css("borderLeftWidth"),10)||0)+(parseInt(f.css("marginLeft"),10)||0),c.top-=s.top+(parseInt(f.css("borderTopWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0),r||"hidden"===(a=f.css("overflow"))||"visible"===a||(r=f))}while((f=i(f[0].offsetParent)).length);(r&&r[0]!==l[0]||d)&&n(r||l,1)}return c},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||y,fn:{attr:function(t,e){if(this.length){var o=this[0],n="title",r=i.data(o,"qtip");if(t===n&&r&&"object"==typeof r&&r.options.suppress)return arguments.length<2?i.attr(o,D):(r&&r.options.content.attr===n&&r.cache.attr&&r.set("content.text",e),this.attr(D,e))}return i.fn["attr"+$].apply(this,arguments)},clone:function(t){i([]);var e=i.fn["clone"+$].apply(this,arguments);return t||e.filter("["+D+"]").attr("title",function(){return i.attr(this,D)}).removeAttr(D),e}}},i.each(u.fn,function(t,e){if(!e||i.fn[t+$])return v;var o=i.fn[t+$]=i.fn[t]
;i.fn[t]=function(){return e.apply(this,arguments)||o.apply(this,arguments)}}),i.ui||(i["cleanData"+$]=i.cleanData,i.cleanData=function(t){for(var e,n=0;(e=t[n])!==o;n++)try{i(e).triggerHandler("removeqtip")}catch(r){}i["cleanData"+$](t)}),p.version="2.0.1",p.nextid=0,p.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),p.zindex=15e3,p.defaults={prerender:y,id:y,overwrite:v,suppress:v,content:{text:v,attr:"title",deferred:y,title:{text:y,button:y}},position:{my:"top left",at:"bottom right",target:y,container:y,viewport:y,adjust:{x:0,y:0,mouse:v,resize:v,method:"flipinvert flipinvert"},effect:function(t,e){i(this).animate(e,{duration:200,queue:y})}},show:{target:y,event:"mouseenter",effect:v,delay:90,solo:y,ready:y,autofocus:y},hide:{target:y,event:"mouseleave",effect:v,delay:0,fixed:y,inactive:y,leave:"window",distance:y},style:{classes:"",widget:y,width:y,height:y,def:v},events:{render:b,move:b,show:b,hide:b,toggle:b,visible:b,hidden:b,focus:b,blur:b}},u.svg=function(t,o){for(var n,r,s,a,c,l=i(e),d=o[0],f={width:0,height:0,position:{top:1e10,left:1e10}};!d.getBBox;)d=d.parentNode;if(d.getBBox&&d.parentNode){if(n=d.getBBox(),r=d.getScreenCTM(),!(s=d.farthestViewportElement||d).createSVGPoint)return f;(a=s.createSVGPoint()).x=n.x,a.y=n.y,c=a.matrixTransform(r),f.position.left=c.x,f.position.top=c.y,a.x+=n.width,a.y+=n.height,c=a.matrixTransform(r),f.width=c.x-f.position.left,f.height=c.y-f.position.top,f.position.left+=l.scrollLeft(),f.position.top+=l.scrollTop()}return f},u.ajax=function(t){var e=t.plugins.ajax;return"object"==typeof e?e:t.plugins.ajax=new c(t)},u.ajax.initialize="render",u.ajax.sanitize=function(t){var e,o=t.content;o&&"ajax"in o&&("object"!=typeof(e=o.ajax)&&(e=t.content.ajax={url:e}),"boolean"!=typeof e.once&&e.once&&(e.once=!!e.once))},i.extend(v,p.defaults,{content:{ajax:{loading:v,once:v}}}),u.tip=function(t){var e=t.plugins.tip;return"object"==typeof e?e:t.plugins.tip=new d(t)},u.tip.initialize="render",u.tip.sanitize=function(t){var e,o=t.style;o&&"tip"in o&&("object"!=typeof(e=t.style.tip)&&(t.style.tip={corner:e}),/string|boolean/i.test(typeof e.corner)||(e.corner=v),"number"!=typeof e.width&&delete e.width,"number"!=typeof e.height&&delete e.height,"number"!=typeof e.border&&e.border!==v&&delete e.border,"number"!=typeof e.offset&&delete e.offset)},i.extend(v,p.defaults,{style:{tip:{corner:v,mimic:y,width:6,height:6,border:v,offset:0}}}),u.modal=function(t){var e=t.plugins.modal;return"object"==typeof e?e:t.plugins.modal=new f(t)},u.modal.initialize="render",u.modal.sanitize=function(t){t.show&&("object"!=typeof t.show.modal?t.show.modal={on:!!t.show.modal}:"undefined"==typeof t.show.modal.on&&(t.show.modal.on=v))},u.modal.zindex=p.zindex-200,u.modal.focusable=["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"],i.extend(v,p.defaults,{show:{modal:{on:y,effect:v,blur:v,stealfocus:v,escape:v}}}),u.viewport=function(o,i,n,r,s,a,c){function l(t,e,o,n,r,s,a,c,l){var d=i[r],h=g[t],p=m[t],u=o===S,v=-E.offset[r]+A.offset[r]+A["scroll"+r],y=h===r?l:h===s?-l:-l/2,b=p===r?c:p===s?-c:-c/2,w=W&&W.size&&W.size[a]||0,x=W&&W.corner&&W.corner.precedance===t&&!u?w:0,j=v-d+x,q=d+l-A[a]-v+x,T=y-(g.precedance===t||h===g[e]?b:0)-(p===I?c/2:0);return u?(T=(h===r?1:-1)*y-(x=W&&W.corner&&W.corner.precedance===e?w:0),i[r]+=j>0?j:q>0?-q:0,i[r]=Math.max(-E.offset[r]+A.offset[r]+(x&&W.corner[t]===I?W.offset:0),d-T,Math.min(Math.max(-E.offset[r]+A.offset[r]+A[a],d+T),i[r]))):(n*=o===M?2:0,j>0&&(h!==r||q>0)?(i[r]-=T+n,f["invert"+t](r)):q>0&&(h!==s||j>0)&&(i[r]-=(h===I?-T:T)+n,f["invert"+t](s)),i[r]<v&&-i[r]>q&&(i[r]=d,f=g.clone())),i[r]-d}var d,f,h,p=n.target,u=o.elements.tooltip,g=n.my,m=n.at,v=n.adjust,y=v.method.split(" "),b=y[0],O=y[1]||y[0],A=n.viewport,E=n.container,F=o.cache,W=o.plugins.tip,X={left:0,top:0};return A.jquery&&p[0]!==t&&p[0]!==e.body&&"none"!==v.method?(d="fixed"===u.css("position"),A={elem:A,height:A[(A[0]===t?"h":"outerH")+"eight"](),width:A[(A[0]===t?"w":"outerW")+"idth"](),scrollleft:d?0:A.scrollLeft(),scrolltop:d?0:A.scrollTop(),offset:A.offset()||{left:0,top:0}},E={elem:E,scrollLeft:E.scrollLeft(),scrollTop:E.scrollTop(),offset:E.offset()||{left:0,top:0}},"shift"===b&&"shift"===O||(f=g.clone()),X={left:"none"!==b?l(w,x,b,v.x,C,k,j,r,a):0,top:"none"!==O?l(x,w,O,v.y,T,z,q,s,c):0},f&&F.lastClass!==(h=L+"-pos-"+f.abbrev())&&u.removeClass(o.cache.lastClass).addClass(o.cache.lastClass=h),X):X},u.imagemap=function(t,e,o,n){function r(t,e,o){for(var i=0,n=1,r=1,s=0,a=0,c=t.width,l=t.height;c>0&&l>0&&n>0&&r>0;)for(c=Math.floor(c/2),l=Math.floor(l/2),o.x===C?n=c:o.x===k?n=t.width-c:n+=Math.floor(c/2),o.y===T?r=l:o.y===z?r=t.height-l:r+=Math.floor(l/2),i=e.length;i--&&!(e.length<2);)s=e[i][0]-t.position.left,a=e[i][1]-t.position.top,(o.x===C&&s>=n||o.x===k&&s<=n||o.x===I&&(s<n||s>t.width-n)||o.y===T&&a>=r||o.y===z&&a<=r||o.y===I&&(a<r||a>t.height-r))&&e.splice(i,1);return{left:e[0][0],top:e[0][1]}}e.jquery||(e=i(e));var s=t.cache.areas={},a=(e[0].shape||e.attr("shape")).toLowerCase(),c=e[0].coords||e.attr("coords"),l=c.split(","),d=[],f=i('img[usemap="#'+e.parent("map").attr("name")+'"]'),h=f.offset(),p={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10}},u=0,g=0;if(h.left+=Math.ceil((f.outerWidth()-f.width())/2),h.top+=Math.ceil((f.outerHeight()-f.height())/2),"poly"===a)for(u=l.length;u--;)(g=[parseInt(l[--u],10),parseInt(l[u+1],10)])[0]>p.position.right&&(p.position.right=g[0]),g[0]<p.position.left&&(p.position.left=g[0]),g[1]>p.position.bottom&&(p.position.bottom=g[1]),g[1]<p.position.top&&(p.position.top=g[1]),d.push(g);else for(u=-1;u++<l.length;)d.push(parseInt(l[u],10));switch(a){case"rect":p={width:Math.abs(d[2]-d[0]),height:Math.abs(d[3]-d[1]),position:{left:Math.min(d[0],d[2]),top:Math.min(d[1],d[3])}};break;case"circle":p={width:d[2]+2,height:d[2]+2,position:{left:d[0],top:d[1]}};break;case"poly":p.width=Math.abs(p.position.right-p.position.left),p.height=Math.abs(p.position.bottom-p.position.top),"c"===o.abbrev()?p.position={left:p.position.left+p.width/2,top:p.position.top+p.height/2}:(s[o+c]||(p.position=r(p,d.slice(),o),!n||"flip"!==n[0]&&"flip"!==n[1]||(p.offset=r(p,d.slice(),{x:o.x===C?k:o.x===k?C:I,y:o.y===T?z:o.y===z?T:I}),p.offset.left-=p.position.left,p.offset.top-=p.position.top),s[o+c]=p),p=s[o+c]),p.width=p.height=0}return p.position.left+=h.left,p.position.top+=h.top,p},u.ie6=function(t){var e=i.browser,o=t.plugins.ie6;return e.msie&&"6"===(""+e.version).charAt(0)?"object"==typeof o?o:t.plugins.ie6=new h(t):y},u.ie6.initialize="render"})}(window,document);