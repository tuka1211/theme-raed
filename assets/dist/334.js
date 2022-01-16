"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[334],{602:(e,t,a)=>{a.d(t,{H:()=>r});class s extends salla.AppHelpers{setHost(e){this.host=e}getElement(e){return this.host.querySelector(e)}getAttribute(e,t){var a;return null===(a=this.getElement(e))||void 0===a?void 0:a.getAttribute(t)}val(e){return this.getAttribute(e,"value")}}const r=new s},334:(e,t,a)=>{a.r(t),a.d(t,{order_rating:()=>i});var s=a(531),r=a(602);const i=class{constructor(e){(0,s.r)(this,e),this.stars=[1,2,3,4,5],this.order={shipping:{id:5622},order_id:"179794",products:[{title:"ميكروفون عالى الجودة",image:"https://salla-dev.s3.eu-central-1.amazonaws.com/Mvyk/pMdEEyMVpZFj4L1Hrdm2g48AuiSx0TrKULBiOnPo.jpg",price:"‏10,978.00 ر.س",qty:"‏2",totalBefore:"‏1120 ر.س",discount:"-5%",total:"‏1064 ر.س",id:"2314513454",getOptimusRouteKey:"7351233357"},{title:"وحدة تحكم لمشغل العاب",image:"https://salla-dev.s3.eu-central-1.amazonaws.com/Mvyk/NOa4kHvOkd1hBWHk3JIgAo1602oVACfuWGFz3vXv.jpg",price:"‏10,978.00 ر.س",qty:"‏2",totalBefore:"‏1120 ر.س",discount:"-5%",total:"‏1064 ر.س",id:"9842833",getOptimusRouteKey:"735152357"},{title:"ساعة ذكية بنظام اندرويد",image:"https://salla-dev.s3.eu-central-1.amazonaws.com/Mvyk/T4kTqYNuPAZmPMLw1bx92RnjVMZyFszVXOUZQsFJ.jpg",price:"‏10,978.00 ر.س",qty:"‏2",totalBefore:"‏1120 ر.س",discount:"-5%",total:"‏1064 ر.س",id:"679822376",getOptimusRouteKey:"73233357"}],ratingMessage:{1:"غير راضي <span class='emoji mx-1'>😒</span>",2:"لم يعجبني <span class='emoji mx-1'>😌</span>",3:"معقول <span class='emoji mx-1'>🙄</span>",4:"أعجبني <span class='emoji mx-1'>👍</span>",5:"أعجبني جداً <span class='emoji mx-1'>🤩</span>"},settings:{isProductsRating:!0,isStoreRating:!0,isShippingRating:!0}},this.ratingChain=Promise.resolve(),this.wizardInex=0}componentDidRender(){this.initiateRating()}render(){return(0,s.h)(s.H,null,(0,s.h)("div",{class:"pannel__body"},this.order.settings.isStoreRating&&this.renderStoreRating(),this.order.settings.isProductsRating&&this.renderProductsRating(),this.order.settings.isShippingRating&&this.renderShippingRating()),(0,s.h)("div",{class:"pannel__footer relative flex justify-between items-center"},(0,s.h)("button",{id:"prev-btn",class:"font-bold text-sm text-primary hidden"},"السابق"),(0,s.h)("ul",{class:"flex justify-center text-center space-s-1.5 py-8 flex-1"},(0,s.h)("li",{class:"cursor-pointer w-2.5 h-2.5 bg-primary rounded-full transition-colors duration-300"}),(0,s.h)("li",{class:"cursor-pointer w-2.5 h-2.5 bg-gray-200 rounded-full transition-colors duration-300"}),(0,s.h)("li",{class:"cursor-pointer w-2.5 h-2.5 bg-gray-200 rounded-full transition-colors duration-300"})),(0,s.h)("button",{id:"next-btn",class:"btn btn-primary h-10 px-8 flex-none"},"التالي")))}renderProductsRating(){return(0,s.h)("section",{class:"step rating-section products-section hidden","data-type":"product"},(0,s.h)("div",{class:"bg-white mb-5 p-5 rounded-md overflow-hidden mb-10"},this.order.products.map(((e,t)=>{var a;return(0,s.h)("div",{class:"rating-outer-form","data-stars-error":`يرجى تقييم (${e.title}) بواسطة النجمات`},(0,s.h)("div",{class:"product-item mb-4"},(0,s.h)("div",{class:"mb-5"},(0,s.h)("div",{class:"flex space-s-5 mb-8"},(0,s.h)("img",{src:e.image,alt:e.title,class:"w-18 h-14 object-cover rounded-md"}),(0,s.h)("div",{class:"flex-1"},(0,s.h)("h3",{class:"section-title leading-5 mb-1.5 md:text-base"}," ",e.title),(0,s.h)("div",{class:"rw-product-entry__rate"},(0,s.h)("div",{class:"rating-wrap flex items-center space-s-4"},(0,s.h)("form",{class:"rate-element rate-element--has-label"},this.getStarsRating()),(0,s.h)("p",{class:"rate-label fix-align font-xsm my-0"})),(0,s.h)("input",{type:"hidden",name:"order_id",value:null===(a=this.order)||void 0===a?void 0:a.order_id}),(0,s.h)("input",{type:"hidden",name:`products[${t}][product_id]`,value:e.getOptimusRouteKey}),(0,s.h)("input",{type:"hidden",name:"type",value:"products"}),(0,s.h)("textarea",{"data-product-id":e.id,name:`products[${t}][comment]`,id:`productReview_${e.id}`,class:"comment form-input h-20 product-review",placeholder:`اضف رأيك عن المنتج (${e.title})`}),(0,s.h)("small",{class:"text-red-400 validation-message"})))))))}))))}renderStoreRating(){return(0,s.h)("section",{class:"step rating-section bg-white my-10 p-5 rounded-md mb-5 active","data-type":"store"},(0,s.h)("div",{class:"rating-outer-form","data-stars-error":"يرجى تقييم المتجر بواسطة النجمات"},(0,s.h)("input",{type:"hidden",name:"order_id",value:this.order.order_id}),(0,s.h)("input",{type:"hidden",name:"type",value:"store"}),(0,s.h)("h2",{class:"section-title text-lg font-bold mb-5"},"كيف كانت تجربتك مع المتجر هذه المرة"),(0,s.h)("div",{class:"mb-2"},(0,s.h)("textarea",{id:"storeReview",name:"comment",class:"form-input comment h-20",placeholder:"اضف رأيك عن المتجر.."})),(0,s.h)("div",{class:"rating-wrap flex items-center space-s-4"},(0,s.h)("form",{class:"rate-element rate-element--has-label"},this.getStarsRating()),(0,s.h)("p",{class:"rate-label fix-align font-sm center mb-0"})),(0,s.h)("small",{class:"text-red-400 validation-message"})))}renderShippingRating(){return(0,s.h)("section",{class:"step rating-section bg-white my-10 p-5 rounded-md mb-5 hidden","data-type":"shipping"},(0,s.h)("div",{class:"rating-outer-form","data-stars-error":"يرجى تقييم شركة الشحن بواسطة النجمات"},(0,s.h)("input",{type:"hidden",name:"order_id",value:this.order.order_id}),(0,s.h)("input",{type:"hidden",name:"shipping_company_id",value:this.order.shipping.id}),(0,s.h)("input",{type:"hidden",name:"type",value:"shipping"}),(0,s.h)("h2",{class:"section-title text-lg font-bold mb-5"},"خبرنا عن تجربتك مع شركة الشحن"),(0,s.h)("div",{class:"mb-2"},(0,s.h)("textarea",{id:"shippingReview",name:"comment",class:"form-input comment h-20 mb-2",placeholder:"اضف رأيك عن شركة الشحن"})),(0,s.h)("div",{class:"rating-wrap flex items-center space-s-4"},(0,s.h)("form",{class:"rate-element ratFeedbackPresentere-element--has-label"},this.getStarsRating()),(0,s.h)("p",{class:"rate-label fix-align font-sm center mb-0"})),(0,s.h)("small",{class:"text-red-400 validation-message"})))}getStarsRating(){return(0,s.h)("div",{class:"mb-1"},(0,s.h)("input",{type:"hidden",class:"rating_hidden_input",name:"rating",value:""}),this.stars.map((e=>(0,s.h)("button",{type:"submit",class:"btn btn--transparent px-1 text-lg text-gray-400 btn--star","data-star":e,"data-text":this.order.ratingMessage[`${e}`]},(0,s.h)("i",{class:"sicon-star2"})))))}initiateRating(){this.highlightSelectedStars(),this.starsRating(),this.handleWizard(),salla.event.on("submit::order-rating",(()=>this.sendRating().then((()=>window.location.reload()))))}handleWizard(){let e=document.querySelectorAll(".step"),t=document.querySelectorAll(".step").length;r.H.onClick("#prev-btn",(()=>{this.wizardInex>0&&this.wizardInex--,this.showActiveStep(e),0==this.wizardInex&&r.H.toggle("#prev-btn","hidden","block",(()=>!0))})),r.H.onClick("#next-btn",(()=>{this.ratingValidation(),this.wizardInex==t-1&&salla.event.dispatch("submit::order-rating"),this.wizardInex<t-1&&this.wizardInex++,this.showActiveStep(e),r.H.toggle("#prev-btn","block","hidden",(()=>!0))}))}showActiveStep(e){r.H.toggle(".step","hidden","active",(()=>!0)),r.H.toggleElement(e[this.wizardInex],"active","hidden",(()=>!0))}sendRating(){return r.H.all(".rating-section",(e=>{let t=e.dataset.type,a=[];e.querySelectorAll(".rating-outer-form").forEach((e=>{let s={};e.querySelectorAll("[name]").forEach((function(e){let t=salla.helpers.inputData(e.name,e.value,s);s[t.name]=t.value})),a=[],a.push(s),this.sendFeedback(t,a)}))})),this.ratingChain}sendFeedback(e,t){t&&0!=t.length&&(salla.config.canLeave=!1,this.ratingChain=salla.feedback.api[e](t[0]).then((function(){salla.config.canLeave=!0})).catch((()=>salla.config.canLeave=!0)))}ratingValidation(){let e="";if(document.querySelectorAll(".rating-section.active").forEach((t=>{t.querySelectorAll(".rating-outer-form").forEach((t=>{let a=t.querySelector(".rating_hidden_input"),s=t.querySelector(".comment"),r=t.querySelector(".section-title"),i=t.querySelector(".validation-message");if(a.value&&s.value&&s.value.length>3)return s.classList.remove("has-error"),null==r||r.classList.remove("has-error","text-red-400"),void(i.innerHTML="");s.value&&s.value.length>3?s.classList.remove("has-error"):s.classList.add("has-error"),null==r||r.classList.add("has-error","text-red-400"),e=a.value?salla.lang.get("common.errors.not_less_than_chars",{chars:4})+" "+s.getAttribute("placeholder"):t.dataset.starsError||salla.lang.get("pages.rating.rate_store_stars"),i.innerHTML=e}))})),e){let t=document.querySelectorAll(".has-error");throw t.length&&window.scrollTo({top:t[0].offsetTop-80}),new Error(e)}}highlightSelectedStars(){let e=["hovered","text-theme-yellow"];r.H.all(".rate-element",(t=>{let a=t.querySelectorAll(".btn--star");t.addEventListener("mouseout",(()=>t.querySelectorAll(".btn--star").forEach((t=>t.classList.remove(...e))))),a.forEach(((t,s)=>{t.addEventListener("mouseover",(()=>{if(t.classList.add(...e),s<=1)"BUTTON"===t.previousElementSibling.tagName&&t.previousElementSibling.classList.add(...e);else for(let t=0;t<s;t++)a[t].classList.add(...e)})),t.addEventListener("mouseout",(()=>{t.classList.contains(...e)&&t.classList.remove(...e)}))}))}))}starsRating(){let e=["selected","text-theme-yellow"];salla.document.event.onSubmit(".rate-element",(function(t){t.preventDefault();var a=t.target.querySelectorAll(".btn--star.hovered"),s=a[a.length-1];if(s){var r=parseInt(s.dataset.star,10);t.target.nextElementSibling.innerHTML=s.dataset.text,t.target.querySelector(".rating_hidden_input").value=r,t.target.querySelectorAll(".btn--star").forEach((function(t,a){a<r?t.classList.add(...e):t.classList.remove(...e)}));var i=t.target.querySelector('.star[aria-pressed="true"]');i&&i.removeAttribute("aria-pressed"),s.setAttribute("aria-pressed",!0)}}))}};i.style=":host{display:block}"}}]);