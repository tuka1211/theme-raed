"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[427],{3863:(t,e,a)=>{a.d(e,{H:()=>r}),salla.event.setMaxListeners(20);class s extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,e){var a;return null===(a=this.getElement(t))||void 0===a?void 0:a.getAttribute(e)}val(t){return this.getAttribute(t,"value")}isUser(){return"user"===salla.config.get("user.type")}}const r=new s},2427:(t,e,a)=>{a.r(e),a.d(e,{salla_rating_modal:()=>i});var s=a(5570),r=a(3863);const i=class{constructor(t){(0,s.r)(this,t),this.stepsCount=0,this.currentIndex=0,this.submitted=[],this.orderId=salla.config.get("page.id"),this.rate_the_store=salla.lang.get("pages.rating.rate_the_store"),this.write_store_rate=salla.lang.get("pages.rating.write_store_rate"),this.rate_product_stars=salla.lang.get("pages.rating.rate_product_stars"),this.write_product_rate=salla.lang.get("pages.rating.write_product_rate"),this.rate_shipping=salla.lang.get("pages.rating.rate_shipping"),this.write_shipping_rate=salla.lang.get("pages.rating.write_shipping_rate"),this.thanks=salla.lang.get("pages.rating.thanks"),this.back=salla.lang.get("common.elements.back"),this.next=salla.lang.get("common.elements.next"),r.H.setHost(this.host),salla.event.on("rating::show",(()=>this.show())),salla.event.on("languages::translations.loaded",(()=>{this.rate_the_store=salla.lang.get("pages.rating.rate_the_store"),this.write_store_rate=salla.lang.get("pages.rating.write_store_rate"),this.rate_product_stars=salla.lang.get("pages.rating.rate_product_stars"),this.write_product_rate=salla.lang.get("pages.rating.write_product_rate"),this.rate_shipping=salla.lang.get("pages.rating.rate_shipping"),this.write_shipping_rate=salla.lang.get("pages.rating.write_shipping_rate"),this.thanks=salla.lang.get("pages.rating.thanks"),this.back=salla.lang.get("common.elements.back"),this.next=salla.lang.get("common.elements.next")}))}async show(){return this.modal.show().then((()=>this.order||salla.feedback.api.order(this.orderId).then((t=>this.order=t.data)))).then((()=>this.modal.setTitle(salla.lang.get("pages.rating.rate_order")+' <span class="unicode">(#'+this.order.id+")</span>"))).then((()=>this.modal.stopLoading())).then((()=>this.stepsCount=[this.order.testimonials_enabled,this.order.products_enabled,this.order.shipping_enabled].filter((t=>t)).length)).then((()=>setTimeout((()=>this.initiateRating()),100)))}async hide(){return this.modal.hide()}initiateRating(){this.handleWizard(),this.highlightSelectedStars(),salla.document.event.onSubmit(".s-rating-modal-stars-element",(function(t){t.preventDefault();let e=t.target.querySelectorAll(".s-rating-modal-btn-star.s-rating-modal-hovered"),a=e[e.length-1];if(!a)return;let s=parseInt(a.dataset.star,10);t.target.querySelector(".rating_hidden_input").value=s,t.target.querySelectorAll(".s-rating-modal-btn-star").forEach(((t,e)=>r.H.toggleElementClassIf(t,"s-rating-modal-selected","s-rating-modal-un-selected",(()=>e<s)))),t.target.querySelectorAll('.s-rating-modal-btn-star[aria-pressed="true"]').forEach((t=>t.removeAttribute("aria-pressed"))),a.setAttribute("aria-pressed","")}))}handleWizard(){this.steps=this.host.querySelectorAll(".s-rating-modal-step"),this.dots=this.host.querySelectorAll(".s-rating-modal-step-dot"),this.showActiveStep()}showActiveStep(t=null){var e;this.currentTab=t||this.steps[this.currentIndex],r.H.toggleClassIf(".s-rating-modal-step-dot","s-rating-modal-bg-gray","s-rating-modal-bg-primary",(t=>t!=this.dots[this.currentIndex])).toggleClassIf(".s-rating-modal-step","s-rating-modal-active","s-rating-modal-hidden",(t=>t==this.currentTab)),0!=this.currentIndex&&(r.H.toggleElementClassIf(this.currentTab,"s-rating-modal-unactive","s-rating-modal-hidden",(()=>!0)),setTimeout((()=>r.H.toggleElementClassIf(this.currentTab,"s-rating-modal-active","s-rating-modal-unactive",(()=>!0))),300));let a=null===(e=this.steps[this.currentIndex+1])||void 0===e?void 0:e.dataset.type;this.nextBtn.setText(a?salla.lang.get("pages.rating.rate")+" "+salla.lang.get("pages.rating."+a):salla.lang.get("pages.rating.send_ratings")),setTimeout((()=>{var t;return this.body.setAttribute("style","height:"+(null===(t=this.currentTab)||void 0===t?void 0:t.scrollHeight)+"px")}))}highlightSelectedStars(){let t=["s-rating-modal-hovered"];r.H.all(".s-rating-modal-stars-element",(e=>{let a=e.querySelectorAll(".s-rating-modal-btn-star");e.addEventListener("mouseout",(()=>a.forEach((e=>e.classList.remove(...t))))),a.forEach(((e,s)=>{e.addEventListener("mouseover",(()=>{if(e.classList.add(...t),s<=1)"BUTTON"===e.previousElementSibling.tagName&&e.previousElementSibling.classList.add(...t);else for(let e=0;e<s;e++)a[e].classList.add(...t)})),e.addEventListener("mouseout",(()=>e.classList.remove(...t)))}))}))}previousTab(){this.currentIndex>0&&this.currentIndex--,r.H.toggleElementClassIf(this.backBtn,"s-rating-modal-unvisiable","block",(()=>0==this.currentIndex)),this.showActiveStep()}submit(){this.submittedBefore()||this.validate(),salla.config.canLeave=!1,this.nextBtn.load().then((()=>this.submittedBefore()||this.sendFeedback())).then((()=>this.currentTab.querySelectorAll("[name],.s-rating-modal-btn-star").forEach((t=>t.setAttribute("disabled",""))))).then((()=>this.currentIndex<this.stepsCount&&this.currentIndex++)).then((()=>this.showActiveStep())).then((()=>r.H.toggleClassIf("#prev-btn","block","s-rating-modal-unvisiable",(()=>!0)))).finally((()=>{this.nextBtn.stop(),salla.config.canLeave=!0,this.currentIndex==this.stepsCount&&this.showThankYou(),this.modal.isClosable=!1}))}submittedBefore(){return this.submitted.includes(this.currentIndex)}validate(t=null,e=null){if(!t&&"products"==this.currentTab.dataset.type)return this.currentTab.querySelectorAll(".rating-outer-form").forEach((t=>this.validate(t,"product")));let a=(t=t||this.currentTab).querySelector(".rating_hidden_input").value,s=t.querySelector(".s-rating-modal-comment"),i=t.querySelector(".s-rating-modal-validation-msg");if(a&&s.value&&s.value.length>3)return s.classList.remove("s-has-error"),void(i.innerHTML="");throw e=e||t.dataset.type,r.H.toggleElementClassIf(s,"save","s-has-error",(t=>t.value.length>3)),i.innerHTML=a?salla.lang.get("common.errors.not_less_than_chars",{chars:4})+" "+s.getAttribute("placeholder"):salla.lang.get(`pages.rating.rate_${e}_stars`).replace(" (:item)","")}sendFeedback(){let t={};if(this.currentTab.querySelectorAll("[name]").forEach((e=>{let a=salla.helpers.inputData(e.name,e.value,t);t[a.name]=a.value})),0!=Object.keys(t).length)return t.order_id=this.orderId,t.type=this.currentTab.dataset.type,this.submitted.push(this.currentIndex),salla.feedback.api[this.currentTab.dataset.type](t)}showThankYou(){let t=10,e=setInterval((()=>{this.thanksTime.innerHTML="00:0"+t--,t>0||(clearInterval(e),this.thanksTime.remove(),this.hide().then((()=>window.location.reload())))}),1e3);this.host.querySelector(".s-rating-modal-footer").classList.add("s-rating-modal-unvisiable"),this.showActiveStep(this.thanksTab)}renderRatingStars(t,e="rating"){return(0,s.h)("form",{class:"s-rating-modal-stars-element"},(0,s.h)("input",{type:"hidden",class:"rating_hidden_input",name:e,value:""}),[1,2,3,4,5].map((e=>(0,s.h)("button",{type:"submit",class:"s-rating-modal-btn-star s-rating-modal-btn-star-"+t,"data-star":e},(0,s.h)("i",{class:"sicon-star2"})))))}render(){return(0,s.h)(s.H,{id:"s-rating"},(0,s.h)("salla-modal",{isLoading:!0,width:"md",ref:t=>this.modal=t},this.order?[(0,s.h)("div",{class:"s-rating-modal-wrapper",ref:t=>this.body=t},this.order.testimonials_enabled?(0,s.h)("div",{class:"rating-outer-form s-rating-modal-step-wrap s-rating-modal-step s-rating-modal-hidden","data-type":"store"},(0,s.h)("div",{class:"s-rating-modal-rounded-icon"},(0,s.h)("img",{src:salla.config.get("store.logo","https://assets.salla.sa/cp/assets/images/logo-new.png"),alt:"store name",class:"s-rating-modal-store-logo"})),(0,s.h)("h2",{class:"s-rating-modal-title"},this.rate_the_store),(0,s.h)("div",{class:"s-rating-modal-stars-company"}," ",this.renderRatingStars("large")),(0,s.h)("textarea",{id:"storeReview",name:"comment",class:"s-rating-modal-comment",placeholder:this.write_store_rate}),(0,s.h)("small",{class:"s-rating-modal-validation-msg"})):"",this.order.products_enabled?(0,s.h)("section",{class:"s-rating-modal-step s-rating-modal-hidden","data-type":"products"},this.order.products.map(((t,e)=>(0,s.h)("div",{class:"rating-outer-form s-rating-modal-product","data-stars-error":this.rate_product_stars},(0,s.h)("img",{src:t.product.thumbnail,alt:t.product.name,class:"s-rating-modal-product-img"}),(0,s.h)("div",{class:"s-rating-modal-product-details"},(0,s.h)("h3",{class:"s-rating-modal-product-title"}," ",t.product.name),(0,s.h)("div",{class:"s-rating-modal-stars-product"}," ",this.renderRatingStars("small",`products[${e}][rating]`)),(0,s.h)("input",{type:"hidden",name:`products[${e}][product_id]`,value:t.product.id}),(0,s.h)("textarea",{placeholder:this.write_product_rate,name:`products[${e}][comment]`,class:"s-rating-modal-comment"}),(0,s.h)("small",{class:"s-rating-modal-validation-msg"})))))):"",this.order.shipping_enabled?(0,s.h)("div",{class:"rating-outer-form s-rating-modal-step-wrap s-rating-modal-step s-rating-modal-hidden","data-type":"shipping"},(0,s.h)("input",{type:"hidden",name:"shipping_company_id",value:this.order.shipping.company.id}),this.order.shipping.company.logo?(0,s.h)("div",{class:"s-rating-modal-rounded-icon"},(0,s.h)("img",{src:this.order.shipping.company.logo,class:"s-rating-modal-shipping-logo",alt:this.order.shipping.company.name})):(0,s.h)("span",{class:"s-rating-modal-icon sicon-shipping-fast"}),(0,s.h)("div",{class:"s-rating-modal-title"}," ",this.rate_shipping+" "+this.order.shipping.company.name),(0,s.h)("div",{class:"s-rating-modal-stars-company"},this.renderRatingStars("large")),(0,s.h)("textarea",{name:"comment",class:"s-rating-modal-comment",placeholder:this.write_shipping_rate}),(0,s.h)("small",{class:"s-rating-modal-validation-msg"})):"",(0,s.h)("div",{class:"s-rating-modal-thanks s-rating-modal-hidden",ref:t=>this.thanksTab=t},(0,s.h)("span",{class:"s-rating-modal-icon sicon-check-circle2"}),(0,s.h)("h3",{class:"s-rating-modal-thanks-title"},this.thanks),(0,s.h)("div",{class:"s-rating-modal-thanks-msg",innerHTML:this.order.thanks_message}),(0,s.h)("time",{class:"s-rating-modal-thanks-time",ref:t=>this.thanksTime=t}))),(0,s.h)("div",{class:"s-rating-modal-footer"},(0,s.h)("button",{ref:t=>this.backBtn=t,onClick:()=>this.previousTab(),class:"s-rating-modal-btn s-rating-modal-unvisiable"},this.back),this.stepsCount>1?(0,s.h)("ul",{class:"s-rating-modal-dots"},[0,1,2].slice(0,this.stepsCount).map((()=>(0,s.h)("li",{class:"s-rating-modal-bg-gray s-rating-modal-step-dot"})))):"",(0,s.h)("salla-button",{"loader-position":"center",ref:t=>this.nextBtn=t,onClick:()=>this.submit()},this.next))]:""))}componentDidRender(){this.modal.querySelectorAll("[hidden]").forEach((t=>t.removeAttribute("hidden")))}componentDidLoad(){salla.event.dispatch("rating::ready",this)}get host(){return(0,s.g)(this)}};i.style="#s-rating-modal .unicode{unicode-bidi:plaintext}"}}]);