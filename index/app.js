var swiper=new Swiper(".js-smi-about",{navigation:{nextEl:".js-section_x__smi__arrow_next",prevEl:".js-section_x__smi__arrow_prev"}});if(faqBlockSwiper=document.querySelector(".js-faq__block__swiper"))var nameJson=JSON.parse(faqBlockSwiper.dataset.names);var swiper1=new Swiper(".js-faq__block__swiper",{navigation:{prevEl:".js-faq__block__button-prev",nextEl:".js-faq__block__button-next"},pagination:{el:".js-faq__block__pagination",clickable:!0,renderBullet:function(a,b){return'<span class="'+b+' faq__block__pagination-element">'+nameJson[a]+"</span>"}},spaceBetween:100}),singleSlider=new Swiper(".js__single_slider",{loop:!1,spaceBetween:30,pagination:{el:".swiper-pagination"}}),projectXSlider=new Swiper(".js_project__x__slider",{loop:!1,spaceBetween:30});function getBodyScrollTop(){return self.pageYOffset||document.documentElement&&document.documentElement.ScrollTop||document.body&&document.body.scrollTop}function animateChatBot(b){let a=0;for(let c of b)setTimeout(function(){c.classList.remove("d-none"),c.classList.add("blockVisible")},300*a),a++}function formHandler(a){if(document.querySelector(a)){let b=document.querySelector(a);b.addEventListener("submit",function(c){if(c.preventDefault(),$(this).attr("data-disabled"))return alert(123),!1;if(!1===b.checkValidity())c.stopPropagation();else{let a=$(b),d=new FormData(a[0]);$.ajax({type:a.attr("method"),url:a.attr("action"),processData:!1,contentType:!1,data:d,beforeSend:function(a){$(".js-btn_accessed").addClass("active"),$(".js-btn_accessed__span").text(""),$(".js-btn_accessed img").attr("src","/wp-content/themes/iart_new/images/preloder.gif")}}).done(function(a){$(".js-btn_accessed__span").text("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"),$(".js-btn_accessed img").addClass("d-none"),$(".js-btn_accessed__span").parent().attr("disabled",!0),$(this).attr("data-disabled",!0)})}},!1)}}function iOS(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}if($(function(){function b(b,c){let d=b.val(),a=d.length;if(a>=1e3){a=1e3;let e=d.slice(0,1e3);if(b.val(e),c.keyCode>=48&&c.keyCode<=57)return!1}$(".js_textarea__vacancy__count_symbol").text(a),console.log(a)}function c(){let a=getBodyScrollTop();$("body").toggleClass("body-lock"),$("body").hasClass("body-lock")?($("body").data("topY",a),$("body").css("top","-"+a+"px")):($("body").removeClass("body-lock"),$("body").removeAttr("style"),window.scrollTo(0,$("body").data("topY")))}function d(a){($block_wrap=a.parents(".js_filter_x__block__list")).find("input:checked").length>0?$block_wrap.addClass("filter_x__block__list--choosed"):$block_wrap.removeClass("filter_x__block__list--choosed")}function a(){$(".js__scrollbar_padding").each(function(e,f){let b=$(this).closest(".js__scroll_wrap").find(".container").outerWidth(),c=parseInt($(this).closest(".js__scroll_wrap").find(".container").css("paddingLeft")),d=$(this).closest(".js__scroll_wrap").width(),a=(d-b)/2+c;$(this).find(".simplebar-content>*:first-child").css({marginLeft:a+"px"}),$(this).find(".simplebar-content>*:last-child").css({marginRight:a+"px"})})}$(".js__scrollbar").each(function(){new SimpleBar($(this)[0],{})}),$(".js_faq__btn__drop").click(function(b){b.preventDefault();let a=$(this).parents(".faq__block__item");a.toggleClass("active"),a.find(".js_faq__block__item__answer").stop().slideToggle(400)}),$(".js_modal__menu__list__btn").click(function(a){a.preventDefault(),$(this).parents("li").children(".js_modal__menu__list__btn").toggleClass("active"),$(this).parent("li").find(".modal__menu__list__block").toggleClass("active")}),$(".js_modal__menu__list__block__back").click(function(a){a.preventDefault(),$(this).parents("li").find(".js_modal__menu__list__btn").toggleClass("active"),$(this).parents("li").find(".modal__menu__list__block").toggleClass("active")}),$(".js_modal__menu__list__btn_2").click(function(a){a.preventDefault(),$(this).toggleClass("active");let b=$(this).parent().parent();$(this).parent().find(".modal__menu__list--sub_menu_2").slideToggle(400,function(){(function(b){$(".js_modal__menu__bottom").removeAttr("style");let c=parseInt($(".modal__menu__top").css("margin-top"))+parseInt($(".modal__menu__top").css("margin-bottom"))+$(".modal__menu__top").height(),a=-(($(".js_modal__menu").outerHeight()-b-c)*1);a>0&&$(".js_modal__menu__bottom").css("margin-bottom",a)})(b.height())})}),$(".js_select").selectric({nativeOnMobile:!1}),$(".js_textarea__vacancy").keydown(function(a){b($(this),a)}),$(".js_textarea__vacancy").bind("paste",function(a){setTimeout(()=>{b($(this),a)},100)}),$(".js_mega__menu").hover(function(){$(".js_sub_menu__"+$(this).data("megamenu")).addClass("active"),$(this).addClass("--hover")},function(){function b(a,b){a.removeClass("--hover"),b.removeClass("active")}let c=!1,d=$(this),a=$(".js_sub_menu__"+$(this).data("megamenu"));a.hover(function(){c=!0},function(){b(d,a)}),setTimeout(()=>{c||b(d,a)},0)}),$(".js_ancor__two__screen").click(function(a){a.preventDefault(),$("html, body").animate({scrollTop:$(".js_ancor__category").offset().top},"slow")}),$(".js_btn_show__companies").click(function(a){a.preventDefault();let b=200;$(".js_home__companies .home__company_item").each(function(){$(this).is(":visible")||($(this).addClass("hide_x"),$(this).slideDown(400,function(){setTimeout(()=>{$(this).removeClass("hide_x")},b),b+=400}))}),$(this).fadeOut(400,function(){$(this).remove()})}),$(".js_btn__up").click(function(a){return a.preventDefault(),$("html, body").animate({scrollTop:0},"slow"),!1}),$(".js_btn_menu,.js_modal__menu__close,.js_modal__menu__overlay").click(function(a){a.preventDefault(),c(),$(".js_modal__menu__overlay").toggleClass("active"),$(".js_modal__menu").toggleClass("active")}),$(".js_lang_block__view").click(function(a){a.preventDefault(),$(this).parents(".js_lang_block").toggleClass("active"),$(this).parents(".js_lang_block").find(".js_lang_block__list").toggleClass("active")}),$(".js_input__field").focus(function(a){a.preventDefault(),$(this).parents("label").addClass("active")}),$(".js_input__field").blur(function(){""==$(this).val()?$(this).parents("label").removeClass("active"):$(this).parents("label").addClass("active")}),$(".js_btn_mobile__filter, .js_filter_x__top__close, .js_filter_x__overlay").click(function(a){a.preventDefault(),c(),$(".js_filter_x__overlay").toggleClass("active"),$(".js_filter_x").toggleClass("active")}),$(".js_filter_x__block__list input").change(function(a){a.preventDefault(),d($(this))}),0!=$(".js_filter_x__block__list input:checked").length&&(($block_wrap=$(".js_filter_x__block__list input:checked").parents(".js_filter_x__block__list")).find("input:checked").length>0?$block_wrap.addClass("filter_x__block__list--choosed"):$block_wrap.removeClass("filter_x__block__list--choosed")),$(".js__btn_clear_form").click(function(a){a.preventDefault(),$(".js_filter_x__block__form input:checkbox").each(function(){$(this).prop("checked",!1),d($(this))})}),$(window).resize(function(){a()}),a(),setTimeout(()=>{$(".js_bot__launch").removeClass("hide_launch_bot")},2500)}),$(document).ready(function(){$(".js-filter-taxonomy__input-select").change(function(d){let b=d.target.value,c=$(".js-product_card");for(let a of c){if(""===b){c.removeClass("d-none");break}a.dataset.tegProjects!==b?a.classList.add("d-none"):a.classList.remove("d-none")}}),$(".js-filter-taxonomy__input-select_1").change(function(d){let b=d.target.value,c=$(".js-section_x__products");for(let a of c){if(""===b){c.removeClass("d-none");break}a.dataset.typeCategory!==b?a.classList.add("d-none"):a.classList.remove("d-none")}}),$(".js-filter-taxonomy__term-button").click(function(e){let b=e.target,c=b.dataset.termButton,d=$(".js-section_x__products");for(let a of($(".js-filter-taxonomy__term-button").removeClass("active"),b.classList.add("active"),d)){if(""===c){d.removeClass("d-none");break}a.dataset.typeCategory!==c?a.classList.add("d-none"):a.classList.remove("d-none")}})}),$(function(){let a=$(".js-btn_load_more_projects");$(".js-filter__projects").on("change",function(h){let d=$(".js-filter__projects:checked"),b={tech:[],teg:[]};for(let c of d){let e=c.name,f=c.value;b[e].push(f)}let g=Object.keys(b).map(a=>a+"="+encodeURIComponent(b[a])).join("&");history.replaceState("","","?"+g),$.ajax({url:"https://"+window.location.host+"/wp-content/themes/iart_new/parts/projects/projects-ajax.php",data:b,method:"post",dataType:"html",success:function(b){$(".js-page_projects__list").html(b),a[0].dataset.paged=1,a[0].dataset.max_pages=$(".js-pages-count").data("pages_count"),a[0].dataset.paged<a[0].dataset.max_pages?a.removeClass("d-none"):a.addClass("d-none")}})}),$(".js-filter__projects-select").on("change",function(g){let d=$(".js-filter__projects-select"),a={tech:[],teg:[]};for(let b of d){let e=b.name,c=b.value;0!=c.length&&a[e].push(c)}let f=encodeURIComponent(JSON.stringify(a));history.replaceState("","","?"+f),$.ajax({url:"https://"+window.location.host+"/wp-content/themes/iart_new/parts/projects/projects-ajax.php",data:a,method:"post",dataType:"html",success:function(a){$(".js-page_projects__list").html(a)}})});let b="";$(".js-bot__inner").on("click",function(c){c.preventDefault();let a=c.target;if(a.classList.contains("js-bot-radio-y")&&($(".js-bot__item__info__buttons-radio").addClass("bot__item__info__buttons--choosed"),a.classList.add("active"),a.nextElementSibling.classList.remove("active"),animateChatBot($(".js-bot-set-name"))),a.classList.contains("js-bot-radio-n")&&($(".js-bot__item__info__buttons-radio").addClass("bot__item__info__buttons--choosed"),a.classList.add("active"),a.previousElementSibling.classList.remove("active"),animateChatBot($(".js-bot-set-name"))),a.classList.contains("js_bot_x__btn-set-user-name")){if(0===a.previousElementSibling.firstElementChild.value.length)return;b=a.previousElementSibling.firstElementChild.value,$(".js_set-user-name").val(b),$(".js_get-user-name").html(b),animateChatBot($(".js_get-user-name-block"))}a.classList.contains("js-bot-radio-tel")&&(a.parentElement.classList.add("bot__item__info__buttons--choosed"),a.classList.add("active"),a.nextElementSibling.classList.remove("active"),animateChatBot($(".js_bot-user-data"))),a.classList.contains("js-bot-radio-mail")&&(a.parentElement.classList.add("bot__item__info__buttons--choosed"),a.classList.add("active"),a.previousElementSibling.classList.remove("active"),animateChatBot($(".js_bot-user-data")))})}),null===document.getElementById("callback-block")&&document.getElementById("to-callback-link").classList.add("hidden-btn-callback"),formHandler(".js-form"),$('[name="userPhone"]').mask("+7 (999)-999-99-99"),iOS()&&$(".about-main_x").addClass("taxonomy-product-block__bg_iphone"),document.querySelector(".js-form-vacancy")){var a=$(".js-input-file__input"),b=$(".js-input-file__selected-files");a.change(function(e){if(a[0].files[0]){let d=a[0].files[0].name,c=a[0].files[0].type;"application/vnd.openxmlformats-officedocument.wordprocessingml.document"===c||"application/msword"===c||"application/vnd.openxmlformats-officedocument.wordprocessingml.template"===c||"application/vnd.ms-word.document.macroEnabled.12"===c||"application/vnd.ms-word.template.macroEnabled.12"===c||"application/pdf"===c?b[0].textContent="\u0424\u0430\u0439\u043B: "+d:(b[0].textContent="\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0430",a[0].value=null)}})}function closeFancybox(){$(function(){Fancybox.close()})}$(window).scroll(function(){let b=$(document).scrollTop(),a=25;720>$(window).width()&&(a=20),560>$(window).width()&&(a=15),b<a?$(".js-header_main").removeClass("header_main_sticky"):$(".js-header_main").addClass("header_main_sticky")}),$(function(){document.querySelector("#js-popup-news")&&window.setTimeout(function(){if(window.localStorage){if(localStorage.getItem("nextNewsletter")>new Date().getTime())return;var a=new Date;a=a.setHours(a.getHours()+24),localStorage.setItem("nextNewsletter",a)}Fancybox.show([{src:"#js-popup-news",type:"inline"}])},2e4),$(".js-popup-news__form").length&&$("body").on("submit",".js-popup-news__form",function(b){b.preventDefault();var a=new FormData(this);a.append("action","get_news_link"),$.ajax({type:"POST",contentType:!1,processData:!1,url:"/wp-admin/admin-ajax.php",data:a,success:function(a){a&&(Fancybox.close(),Fancybox.show([{src:"#js-popup-link",type:"inline"}]))}})}),$(".js-un-hiding-scheme").length&&$("body").on("click",".js-un-hiding-scheme",function(a){$(this).addClass("d-none"),$(".js-hiding-scheme").removeClass("d-none"),$(this).parent().addClass("bot-creature-scheme__buttons_activ"),$(".js-creature-scheme-images").addClass("bot-creature-scheme__scheme-images_unhidden")}),$(".js-hiding-scheme").length&&$("body").on("click",".js-hiding-scheme",function(b){$(this).addClass("d-none");let a=$(".js-un-hiding-scheme");a.removeClass("d-none"),a.parent().removeClass("bot-creature-scheme__buttons_activ"),$(".js-creature-scheme-images").removeClass("bot-creature-scheme__scheme-images_unhidden")})})
const scrollController={scrollPosition:0,disabledScroll(){scrollController.scrollPosition=window.scrollY,document.body.style.cssText=` overflow: hidden; position: fixed; top: -${scrollController.scrollPosition}px; left: 0; height: 100vh; width: 100vw; padding-right: ${window.innerWidth-document.body.offsetWidth}px `,document.documentElement.style.scrollBehavior="unset"},enabledScroll(){document.body.style.cssText="",window.scroll({top:scrollController.scrollPosition}),document.documentElement.style.scrollBehavior=""}},modalController=({modal:l,btnOpen:t,btnClose:o,time:e=300})=>{let n=document.querySelectorAll(t),r=document.querySelector(l);r.style.cssText=` display: flex; visibility: hidden; opacity: 0; transition: opacity ${e}ms ease-in-out; `;let i=l=>{let t=l.target;(o&&t.closest(o)||"Escape"===l.code)&&(r.style.opacity=0,setTimeout(()=>{r.style.visibility="hidden",scrollController.enabledScroll()},e),window.removeEventListener("keydown",i))},s=()=>{r.style.visibility="visible",r.style.opacity=1,window.addEventListener("keydown",i),scrollController.disabledScroll()};n.forEach(l=>{l.addEventListener("click",s)}),r.addEventListener("click",i)};modalController({modal:"#gt_lightbox",btnOpen:".switcher-popup.glink.nturl.notranslate",btnClose:".glink.nturl"}),modalController({modal:"#gt_lightbox",btnOpen:".switcher-popup.glink.nturl.notranslate",btnClose:"#gt_lightbox div span"}),modalController({modal:"#gt_fade",btnOpen:".switcher-popup.glink.nturl.notranslate",btnClose:"#gt_fade"});