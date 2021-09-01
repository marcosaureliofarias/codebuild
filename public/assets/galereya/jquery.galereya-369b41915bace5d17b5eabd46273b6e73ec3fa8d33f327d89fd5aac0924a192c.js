EASY.schedule.require(function(e){"use strict";function i(i){var t,a,s,l,n,o,r,c,d,p,g,u,f,h,v,y,m,w,C,k=this,b=e([]),x=e([]),T=e([]),S=e([]),A=[],z=[],I=[],D=[],N=0,P=300,F=300,K=!1,L={spacing:0,wave:!1,waveTimeout:300,modifier:"",slideShowSpeed:1e4,cellFadeInSpeed:200,noCategoryName:"all",disableSliderOnClick:!1,size:100,load:function(e){e()},onCellClick:function(){}},M={windowResize:function(){Z()},bodyClick:function(i){0===e(i.target).closest(".galereya-cats").length&&x.removeClass("open")},categoriesListClick:function(i){var t=e(i.target);"SPAN"===i.target.nodeName&&(t=t.parent()),t.is(":first-child")||X(t.find("span").text()),x.toggleClass("open")},cellClick:function(e){k.options.disableSliderOnClick||$(parseInt(this.getAttribute("data-visibleIndex"),10)),k.options.onCellClick(e)},sliderNextClick:function(){ie("next")},sliderPrevClick:function(){ie("prev")},sliderCloseClick:function(){_()},sliderPlayClick:function(){C?le():se()},bodyKeyDown:function(e){K&&(37!==e.which&&39!==e.which||e.preventDefault())},bodyKeyUp:function(e){if(K)switch(e.which){case 27:_();break;case 37:r.click();break;case 39:o.click()}}},O=function(){k.removeClass("thumbnails"),k.addClass("galereya").addClass(k.options.modifier),Q(function(){W(),Z(),Y(),Z(),k.options.wave&&E()&&V(),ne()})},E=function(){var e=document.createElement("div").style;return"transition"in e||"WebkitTransition"in e||"MozTransition"in e||"msTransition"in e||"OTransition"in e},R=function(e){var i=e.css("transitionDuration")||e.css("webkitTransitionDuration")||e.css("mozTransitionDuration")||e.css("oTransitionDuration")||e.css("msTransitionDuration")||0;return i=1e3*parseFloat(i)},j=function(){P=b.width(),F=b.height(),P<1&&(P=1),(N=Math.floor(k.width()/(P+k.options.spacing)))<1&&(N=1),f=N*P+(N-1)*k.options.spacing,h=Math.ceil(b.length/N)*F+(N-1)*k.options.spacing},U=function(i){var t=e(document.createElement("img")).attr("src",i);return k.append(t),s=s.add(t),t},q=function(e,i){var t=e.addClass("galereya-cell-img").wrap('<div class="galereya-cell" data-index="'+b.length+'"></div>').parent().append('<div class="galereya-cell-desc">                                <div class="galereya-cell-desc-title">'+i.title+'</div>                                <div class="galereya-cell-desc-text">'+i.description+"</div>                            </div>").append('<div class="galereya-cell-overlay" />');return t.click(M.cellClick),b=b.add(t),a.append(t),t},H=function(i){var t={lowsrc:i.lowsrc||"",fullsrc:i.fullsrc||"",title:i.title||"",description:i.description||"",category:i.category||""};return t.category&&(t.category=t.category.toLowerCase(),-1===e.inArray(t.category,z)&&z.push(t.category)),A.push(t),t},Q=function(e){var i;s=k.find("img").each(function(e,t){i={lowsrc:t.getAttribute("src")||"",fullsrc:t.getAttribute("data-fullsrc")||"",title:t.getAttribute("title")||t.getAttribute("alt")||"",description:t.getAttribute("data-desc")||"",category:t.getAttribute("data-category")||""},H(i)}),k.options.load(function(i){if(i&&i.length)for(var t,a=0,s=i.length;a<s;a++)t=H(i[a]),U(t.lowsrc);e()})},W=function(){if(z.length>0){x=e('<ul class="galereya-cats" />'),t=e('<div class="galereya-top" />'),k.prepend(t.html(x)),x.append('<li class="galereya-cats-item"><span>'+k.options.noCategoryName+"</span></li>");for(var i=0;i<z.length;i++)x.append('<li class="galereya-cats-item"><span>'+z[i]+"</span></li>")}var g,u,f;s.wrapAll('<div class="galereya-grid" />').each(function(i,t){g=e(t),u=A[i].title,f=A[i].description,g.addClass("galereya-cell-img").wrap('<div class="galereya-cell" data-index="'+i+'"></div>').parent().append('<div class="galereya-cell-desc">                                <div class="galereya-cell-desc-title">'+u+'</div>                                <div class="galereya-cell-desc-text">'+f+"</div>                            </div>").append('<div class="galereya-cell-overlay" />'),g.attr("width",k.options.size+"px"),g.attr("height",k.options.size+"px"),g.parent().attr("width",k.options.size+"px"),g.parent().attr("height",k.options.size+"px")}),b=k.find(".galereya-cell"),a=k.find(".galereya-grid"),l=e('<div class="galereya-slider" />'),n=e('<div class="galereya-slider-container" />'),o=e('<div class="galereya-slider-nav right" />'),r=e('<div class="galereya-slider-nav left" />'),c=e('<div class="galereya-slider-desc" />'),d=e('<div class="galereya-slider-close" />'),p=e('<div class="galereya-slider-play" />'),l.addClass(k.options.modifier).append(n).append(o).append(r).append(c).append(c).append(d).append(p),e(document.body).append(l),k.show()},Y=function(i,t){if(!((i=i||0)>=s.length))if(clearTimeout(y),t&&A[i].category!==t)setTimeout(function(){Y(++i,t)},0);else{var a=s[i],l=function(){K?e(this).parent().show():e(this).parent().fadeIn(k.options.cellFadeInSpeed,"linear"),y=setTimeout(function(){Y(++i,t)},k.options.cellFadeInSpeed/2)};a.complete?l.call(a):e(a).attr("src",a.src).on("load",l),B(i),Z()}},B=function(i){var t,a=b[i];G(a,I.length),t=I.push(a)-1,e(a).addClass("visible").attr("data-visibleIndex",t)},G=function(e,i){var t,a,s,l;t=(l=i%N)*P+k.options.spacing*l,a=i>=N?(s=I[i-N]).offsetTop+s.offsetHeight+k.options.spacing:0,e.style.top=a+"px",e.style.left=t+"px"},J=function(){I=[],b.stop(!0,!0).fadeOut(200).removeClass("visible")},V=function(i){(i=i||0)>=b.length&&(i=0);var t=e(b[i]);t.addClass("wave"),setTimeout(function(){t.removeClass("wave"),V(++i)},k.options.waveTimeout)},X=function(e){w=e,x.empty().prepend('<li class="galereya-cats-item"><span>'+e+"</span></li>"),J(),e===k.options.noCategoryName?Y(0):(x.append('<li class="galereya-cats-item"><span>'+k.options.noCategoryName+"</span></li>"),Y(0,e));for(var i,t=0,a=z.length;t<a;t++)(i=z[t])!==e&&x.append('<li class="galereya-cats-item"><span>'+i+"</span></li>")},Z=function(){if(a.is(":visible")){j(),0===S.length&&(S=T.find(".galereya-slide-img")),S.css("margin-top",(e(window).height()-S.height())/2),a.width(f),a.height(h);for(var i=0,t=I.length;i<t;i++)G(I[i],i)}},$=function(i){if(K)setTimeout(function(){$(i)},50);else{le(),n.empty(),m=i;var t=R(l),a=function(){g=e("html").css("overflow"),u=e("body").css("overflow"),v=e(window).scrollTop(),e("html, body").css("overflow","hidden")};l.show(0,function(){l.addClass("opened"),E()?setTimeout(a,t+50):a()}),K=!0,ie(),ae()}},_=function(){if(K){e("html").css("overflow",g),e("body").css("overflow",u),e(window).scrollTop(v),e("html, body").css("overflow","");var i=R(l),t=function(){le(),D=[],n.empty(),l.hide(),K=!1};l.removeClass("opened"),E()?setTimeout(t,i+50):t()}},ee=function(i){clearInterval(C);var t,a,s=I[i],l=parseInt(s.getAttribute("data-index"),10);return t=e('<div class="galereya-slider-slide" />').html('<div class="galereya-slide-loader"></div>'),a=e('<img class="galereya-slide-img" src="'+A[l].fullsrc+'" alt="'+A[l].title+'" />').on("load",function(){t.html(a),a.css("margin-top",(e(window).height()-a.height())/2),C&&se()}),t},ie=function(i){i=i||"next",C&&(le(),se());var t,a,s,l=i.toLowerCase(),o=I.length;if("next"===l){if(0===D.length)t=m,l="";else if((t=m+1)>=o)return;(a=D[t])||((a=ee(t)).addClass(l),n.append(a),D[t]=a),te(a,"current"),te(T,"prev")}else if("prev"===l){if(0!==D.length&&(l=""),(t=m-1)<0)return;(a=D[t])||((a=ee(t)).addClass(l),n.prepend(a),D[t]=a),te(a,"current"),te(T,"next")}T=a,s=I[m=t].getAttribute("data-index"),c.empty().html('<div class="galereya-slider-desc-title">'+A[s].title+" </div>"+A[s].description),(S=a.find(".galereya-slide-img")).css("margin-top",(e(window).height()-S.height())/2),ae()},te=function(e,i){setTimeout(function(){e.removeClass("prev").removeClass("next").removeClass("current").addClass(i)},50)},ae=function(){var e=I.length;m>=e-1?(le(),p.hide(),o.hide()):(p.show(),o.show()),m<=0?r.hide():r.show()},se=function(){p.addClass("pause"),C=setInterval(function(){o.click()},k.options.slideShowSpeed)},le=function(){p.removeClass("pause"),clearInterval(C),C=null},ne=function(){e(window).on("resize",M.windowResize),e(document).ajaxComplete(M.windowResize),e(document.body).click(M.bodyClick).keydown(M.bodyKeyDown).keyup(M.bodyKeyUp),x.click(M.categoriesListClick),b.click(M.cellClick),o.click(M.sliderNextClick),r.click(M.sliderPrevClick),d.click(M.sliderCloseClick),p.click(M.sliderPlayClick)};return this.options=e.extend({},L,i),this.openSlider=$,this.closeSlider=_,this.changeCategory=X,this.startSlideShow=se,this.stopSlideShow=le,this.nextSlide=function(){o.click()},this.prevSlide=function(){r.click()},this.loadMore=function(e){if(e&&e.length){for(var i,t,a=0,s=b.length,l=s,n=e.length;a<n;a++,l++)i=H(e[a]),t=U(i.lowsrc),q(t,i);Y(s,w)}},O(),this.length>1&&this.each(function(){e(this).galereya(i)}),this}e.fn.galereya=i},"jQuery");