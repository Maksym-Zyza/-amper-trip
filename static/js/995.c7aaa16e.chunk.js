"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[995],{5320:function(e,a,n){n.d(a,{z:function(){return c}});var t=n(1413),i=n(4925),r=(n(2791),"Button_btn__rk-ay"),s=n(3329),l=["text","onClick"],c=function(e){var a=e.text,n=e.onClick,c=(0,i.Z)(e,l);return(0,s.jsx)("button",(0,t.Z)((0,t.Z)({className:r,onClick:n},c),{},{children:a}))}},2325:function(e,a,n){n.d(a,{Q:function(){return D}});var t=n(2791),i="VanFilters_filtersWrapper__w+uQu",r="VanFilters_filterSection__KXZRA",s="VanFilters_location__mOdIT",l="VanFilters_list__FBu+L",c=n(6577),o=n(5320),d=n(3329),m=[{name:"automatic",label:"Automatic",icon:(0,d.jsx)(c.iU,{})},{name:"AC",label:"AC",icon:(0,d.jsx)(c.am,{})},{name:"TV",label:"TV",icon:(0,d.jsx)(c.lL,{})},{name:"kitchen",label:"Kitchen",icon:(0,d.jsx)(c.oy,{})},{name:"shower",label:"Shower/WC",icon:(0,d.jsx)(c.Pp,{})}],u=[{label:"Van",icon:(0,d.jsx)(c.zU,{}),value:"panelTruck"},{label:"Fully Integrated",icon:(0,d.jsx)(c.i8,{}),value:"fullyIntegrated"},{label:"Alcove",icon:(0,d.jsx)(c.Zy,{}),value:"alcove"}],_="Checkbox_checkboxContainer__2jyFy",h="Checkbox_label__scbRi",x="Checkbox_hidden__EwqCN",v=function(e){var a=e.name,n=e.label,t=e.icon;return(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("input",{type:"checkbox",id:a,name:a,className:x}),(0,d.jsxs)("label",{htmlFor:a,className:h,children:[t,n]})]})},j="RadioButton_container__9VV9E",f="RadioButton_label__t98+e",p="RadioButton_hidden__l0Ph0",C=function(e){var a=e.label,n=e.icon,t=e.value;return(0,d.jsxs)("div",{className:j,children:[(0,d.jsx)("input",{className:p,type:"radio",id:a,name:"form",value:t}),(0,d.jsxs)("label",{htmlFor:a,className:f,children:[n,a]})]})},N=n(7762),g=n(4420),b=n(9519),w=n(9373),D=function(e){var a=e.adverts,n=(0,g.I0)(),_=(0,t.useContext)(w.Z).resetPage,h=function(e){e.reset()};return(0,d.jsx)("div",{className:i,children:(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=function(e){var a=e.location,n=e.automatic,t=e.AC,i=e.TV,r=e.kitchen,s=e.shower,l=e.form,c={automatic:n.checked,AC:t.checked,TV:i.checked,kitchen:r.checked,shower:s.checked},o={};a.value&&(o.location=a.value),l.value&&(o.form=l.value);var d=Object.keys(c).filter((function(e){return!0===c[e]}));return d.length>0&&(o.details=d),o}(e.target),i=function(e,a){return e.filter((function(e){if(a.location&&!e.location.includes(a.location))return!1;if(a.form&&e.form!==a.form)return!1;if(a.details&&a.details.length>0){var n,t=(0,N.Z)(a.details);try{for(t.s();!(n=t.n()).done;){var i=n.value;if(!e.details[i])return!1}}catch(r){t.e(r)}finally{t.f()}}return!0}))}(a,t);_(),n((0,b.lZ)(i)),h(e.target)},children:[(0,d.jsxs)("div",{className:s,children:[(0,d.jsx)("label",{htmlFor:"location",children:"Location"}),(0,d.jsx)("input",{type:"text",name:"location"}),(0,d.jsx)(c.Ye,{})]}),(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("h2",{children:"Filters"}),(0,d.jsx)("h3",{children:"Vehicle Equipment"}),(0,d.jsx)("div",{className:l,children:m.map((function(e){var a=e.name,n=e.label,t=e.icon;return(0,d.jsx)(v,{name:a,label:n,icon:t},n)}))}),(0,d.jsx)("h3",{children:"Vehicle Type"}),(0,d.jsx)("div",{className:l,children:u.map((function(e){var a=e.value,n=e.label,t=e.icon;return(0,d.jsx)(C,{value:a,label:n,icon:t},n)}))})]}),(0,d.jsx)(o.z,{type:"submit",text:"Search"})]})})}},4871:function(e,a,n){n.d(a,{Z:function(){return P}});var t=n(2791),i="VanList_list__KDVYM",r="VanList_itemWrapper__rS9x6",s="VanList_img__-N3ve",l="VanList_itemContent__L3C+6",c="VanList_firstLine__Uutwx",o="VanList_active__bBdpz",d="VanList_secondLine__nElDv",m="VanList_location__Elu6a",u="VanList_detailList__0+lMc",_="VanList_noData__jI3YN",h=n(9439),x=n(4420),v=n(2829),j=n(6577),f="DetailsItem_detailsItem__cA3ZK",p="DetailsItem_icon__C9MbN",C="DetailsItem_value__PGtKN",N=n(3329),g={automatic:(0,N.jsx)(j.iU,{}),airConditioner:(0,N.jsx)(j.AK,{}),AC:(0,N.jsx)(j.am,{}),toilet:(0,N.jsx)(j.Xk,{}),CD:(0,N.jsx)(j.CD,{}),TV:(0,N.jsx)(j.lL,{}),kitchen:(0,N.jsx)(j.oy,{}),beds:(0,N.jsx)(j.QF,{}),radio:(0,N.jsx)(j.Y8,{}),shower:(0,N.jsx)(j.Pp,{}),freezer:(0,N.jsx)(j.SY,{}),microwave:(0,N.jsx)(j.oC,{}),gas:(0,N.jsx)(j.RP,{}),water:(0,N.jsx)(j.Bt,{}),hob:(0,N.jsx)(j.WD,{}),bathroom:(0,N.jsx)(j.ZS,{})},b=function(e){var a=e.detail,n=(0,h.Z)(a,2),t=n[0],i=n[1];return(0,N.jsxs)("li",{className:f,children:[(0,N.jsx)("span",{className:p,children:g[t]}),(0,N.jsx)("span",{className:C,children:i}),t]})},w=n(5320),D=n(1506),k=n(4164),y="Modal_modalOverlay__q5Qe9",L="Modal_modalContent__tvY28",Z="Modal_button__DHHec",A=(0,t.forwardRef)((function(e,a){var n=e.children,i=(0,t.useRef)(),r=(0,t.useState)(!1),s=(0,h.Z)(r,2),l=s[0],c=s[1];(0,t.useImperativeHandle)(a,(function(){return{open:function(){c(!0),document.addEventListener("keydown",o)},close:function(){c(!1),document.removeEventListener("keydown",o)}}}));var o=(0,t.useCallback)((function(e){"Escape"===e.key&&a.current.close()}),[a]);return(0,t.useEffect)((function(){return function(){document.removeEventListener("keydown",o)}}),[o]),(0,k.createPortal)((0,N.jsx)(N.Fragment,{children:l&&(0,N.jsx)("div",{ref:i,className:y,onClick:function(e){e.target===i.current&&a.current.close()},children:(0,N.jsxs)("div",{className:L,children:[(0,N.jsx)("button",{className:Z,onClick:function(){a.current.close()},children:(0,N.jsx)(j.x8,{})}),n]})})}),document.getElementById("modal-root"))})),V={modalContent:"CardDetails_modalContent__tmfLl",location:"CardDetails_location__h3fAm",images:"CardDetails_images__hIJZh",image:"CardDetails_image__4oPZ1",tabs:"CardDetails_tabs__q7hK2",tab:"CardDetails_tab__AYGHM",active:"CardDetails_active__eY7Ec",feature:"CardDetails_feature__80AZp",vehicleDetails:"CardDetails_vehicleDetails__eJLnM",reviews:"CardDetails_reviews__apKyZ",review:"CardDetails_review__Rdd7x",reviewHeader:"CardDetails_reviewHeader__-hN05",letter:"CardDetails_letter__DiseX",reviewAuthor:"CardDetails_reviewAuthor__SzLxS",reviewRating:"CardDetails_reviewRating__UxwAj",header:"CardDetails_header__TGgw3",icon:"CardDetails_icon__5c-NM",popIcon:"CardDetails_popIcon__uth1s",ratingBar:"CardDetails_ratingBar__nA3zm",title:"CardDetails_title__8zrqB",details:"CardDetails_details__CAvUL",ratingLocation:"CardDetails_ratingLocation__vHqhO",rating:"CardDetails_rating__-FY3U",locationBar:"CardDetails_locationBar__kDrj1",price:"CardDetails_price__vksph",gallery:"CardDetails_gallery__kO2fl",descriptionBar:"CardDetails_descriptionBar__o2CyG",description:"CardDetails_description__mt-du",hidden:"CardDetails_hidden__O-54p",buttonMore:"CardDetails_buttonMore__v63IX",footer:"CardDetails_footer__9qvJb",tabContent:"CardDetails_tabContent__ZYXcQ",detailsTitle:"CardDetails_detailsTitle__JxFcg",detailsList:"CardDetails_detailsList__DoQv1",detailTitle:"CardDetails_detailTitle__VUbtM",detailValue:"CardDetails_detailValue__rBEZn",featuresList:"CardDetails_featuresList__Ai7Xp",featuresItem:"CardDetails_featuresItem__2C3Af"},B=n(4942),z=n(1413),F=n(5218),I={formTitle:"BookingForm_formTitle__rg6+n",bookingForm:"BookingForm_bookingForm__zfU+Q",slogan:"BookingForm_slogan__8UOaq",error:"BookingForm_error__ah4no",dateBar:"BookingForm_dateBar__WiSJP",icon:"BookingForm_icon__2zzpO"},S="Input_wrapper__0GTG+",T="Input_error__unTgx",R=function(e){var a=e.type,n=e.name,t=e.placeholder,i=void 0===t?"":t,r=e.pattern,s=e.onChange,l=e.error;return(0,N.jsxs)("div",{className:S,children:[(0,N.jsx)("input",{type:a,name:n,placeholder:i,onChange:s,pattern:r}),l&&(0,N.jsx)("span",{className:T,children:l})]})},E="Textarea_wrapper__vNLId",U="Textarea_error__Nvsmk",q=function(e){var a=e.rows,n=e.name,t=e.placeholder,i=void 0===t?"":t,r=e.pattern,s=e.onChange,l=e.error;return(0,N.jsxs)("div",{className:E,children:[(0,N.jsx)("textarea",{rows:a,name:n,placeholder:i,onChange:s,pattern:r}),l&&(0,N.jsx)("span",{className:U,children:l})]})},M=function(){var e=(0,t.useState)({}),a=(0,h.Z)(e,2),n=a[0],i=a[1],r=(0,t.useState)({name:"",email:"",date:null,comment:""}),s=(0,h.Z)(r,2),l=s[0],c=s[1],o=function(e){var a=e.target,n=a.name,t=a.value;c((function(e){return(0,z.Z)((0,z.Z)({},e),{},(0,B.Z)({},n,t))}))};return(0,N.jsxs)("div",{className:I.bookingForm,children:[(0,N.jsx)("h4",{className:I.formTitle,children:"Book your campervan now"}),(0,N.jsx)("span",{className:I.slogan,children:"Stay connected! We are always ready to help you."}),(0,N.jsxs)("form",{className:I.form,onSubmit:function(e){e.preventDefault();var a=function(e){var a={};return e.name?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(e.name)||(a.name="Name is invalid"):a.name="Name is required",e.email?/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.email)||(a.email="Email is invalid"):a.email="Email is required",e.date||(a.date="Date is required"),e.comment?/^[a-zA-Z0-9\s.,!?']*$/.test(e.comment)||(a.comment="Comment is invalid"):a.comment="Comment is required",a}(l);i(a),0===Object.keys(a).length&&(F.ZP.success("Your request has been sent"),window.location.reload(),console.log(l))},children:[(0,N.jsx)(R,{type:"text",name:"name",placeholder:"Name",onChange:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",error:n.name}),(0,N.jsx)(R,{type:"email",name:"email",placeholder:"Email",onChange:o,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",error:n.email}),(0,N.jsx)(R,{type:"date",name:"date",onChange:o,error:n.date}),(0,N.jsx)(q,{name:"comment",placeholder:"Comment",onChange:o,rows:"4",pattern:"/^[a-zA-Z0-9\\s.,!?']*$/",error:n.comment}),(0,N.jsx)(w.z,{text:"Send",type:"submit"})]})]})},Y=function(e){var a,n,i=e.card,r=e.isDescription,s=e.setIsDescription,l=(0,t.useState)("features"),c=(0,h.Z)(l,2),o=c[0],d=c[1],m=(a=i.details,Object.keys(a).reduce((function(e,n){if(!a[n])return e;var t=n,i=n;return"airConditioner"===n&&(t="air conditioner"),e.push({name:t,value:a[n],iconName:i}),e}),[])),u=function(e){return[{name:"form",value:e.form},{name:"length",value:e.length},{name:"width",value:e.width},{name:"height",value:e.height},{name:"tank",value:e.tank},{name:"consumption",value:e.consumption}]}(i);return(0,N.jsxs)("section",{className:V.modalContent,children:[(0,N.jsxs)("header",{className:V.header,children:[(0,N.jsx)("h2",{className:V.title,children:i.name}),(0,N.jsxs)("div",{className:V.ratingLocation,children:[(0,N.jsxs)("div",{className:V.rating,onClick:function(){d("reviews")},children:[(0,N.jsx)(j.Ux,{}),(0,N.jsxs)("span",{className:V.ratingBar,children:[i.rating," (",i.reviews.length," Reviews)"]})]}),(0,N.jsxs)("div",{className:V.locationBar,children:[(0,N.jsx)(j.Ye,{}),(0,N.jsx)("span",{children:i.location})]})]}),(0,N.jsx)("span",{className:V.price,children:(n=i.price,n.toLocaleString("en-IE",{style:"currency",currency:"EUR",minimumFractionDigits:2}))})]}),(0,N.jsx)("div",{className:V.gallery,children:i.gallery.map((function(e,a){return(0,N.jsx)("img",{src:e,className:V.image,alt:"Slide ".concat(a)},a)}))}),(0,N.jsxs)("div",{className:V.descriptionBar,children:[(0,N.jsx)("p",{className:r?V.description:"".concat(V.description," ").concat(V.hidden),children:i.description}),(0,N.jsx)("button",{onClick:function(){s((function(e){return!e}))},className:V.buttonMore,children:r?"Read less":"Read more"})]}),(0,N.jsxs)("nav",{className:V.tabs,children:[(0,N.jsx)("button",{className:"".concat(V.tab," ").concat("features"===o?V.active:""),onClick:function(){return d("features")},children:"Features"}),(0,N.jsx)("button",{className:"".concat(V.tab," ").concat("reviews"===o?V.active:""),onClick:function(){return d("reviews")},children:"Reviews"})]}),(0,N.jsxs)("div",{className:V.footer,children:[(0,N.jsxs)("div",{className:V.tabContent,children:["features"===o&&(0,N.jsxs)("div",{className:V.features,children:[(0,N.jsx)("ul",{className:V.featuresList,children:m&&m.map((function(e){return(0,N.jsxs)("li",{className:V.featuresItem,children:[g[e.name],(0,N.jsx)("span",{children:e.value}),(0,N.jsx)("span",{children:e.name})]},e.name)}))}),(0,N.jsxs)("div",{className:V.vehicleDetails,children:[(0,N.jsx)("h4",{className:V.detailsTitle,children:"Vehicle details"}),(0,N.jsx)("ul",{className:V.detailsList,children:u.map((function(e,a){return(0,N.jsxs)("li",{children:[(0,N.jsx)("span",{className:V.detailTitle,children:e.name}),(0,N.jsx)("span",{className:V.detailValue,children:e.value})]},a)}))})]})]}),"reviews"===o&&(0,N.jsx)("div",{className:V.reviews,children:i.reviews.map((function(e,a){return(0,N.jsxs)("div",{className:V.review,children:[(0,N.jsxs)("div",{className:V.reviewHeader,children:[(0,N.jsx)("span",{className:V.letter,children:e.reviewer_name[0]}),(0,N.jsxs)("div",{children:[(0,N.jsx)("h3",{className:V.reviewAuthor,children:e.reviewer_name}),(0,N.jsx)("span",{className:V.reviewRating,children:Array.from({length:e.reviewer_rating},(function(e,a){return(0,N.jsx)(j.Ux,{})}))})]})]}),(0,N.jsx)("p",{className:V.comment,children:e.comment})]},a)}))})]}),(0,N.jsx)(M,{})]})]})},O=function(e){var a,n=e.item,i=(0,x.v9)(v._l),_=(0,x.I0)(),f=i.find((function(e){return e._id===n._id})),p=(0,t.useState)(),C=(0,h.Z)(p,2),g=C[0],k=C[1],y=(0,t.useState)(!0),L=(0,h.Z)(y,2),Z=L[0],V=L[1],B=(0,t.useRef)();return(0,N.jsxs)("div",{className:r,children:[(0,N.jsx)(A,{ref:B,children:(0,N.jsx)(Y,{card:g,isDescription:Z,setIsDescription:V})}),(0,N.jsx)("div",{className:s,children:(0,N.jsx)("img",{src:n.gallery[0],alt:""})}),(0,N.jsxs)("div",{className:l,children:[(0,N.jsxs)("div",{className:c,children:[(0,N.jsx)("p",{children:n.name}),(0,N.jsxs)("p",{children:["\u20ac",n.price,(0,N.jsx)(j.mN,{className:f?o:"",onClick:function(){return _((0,D.j)(n))}})]})]}),(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)(j.Ux,{}),n.rating,(0,N.jsxs)("span",{children:[" (","".concat(null===(a=n.reviews)||void 0===a?void 0:a.length)," Reviews)"]}),(0,N.jsxs)("span",{className:m,children:[(0,N.jsx)(j.Ye,{})," ",n.location]})]}),(0,N.jsx)("p",{children:n.description}),(0,N.jsx)("ul",{className:u,children:Object.entries(n.details).map((function(e,a){return(0,N.jsx)(b,{detail:e},a)}))}),(0,N.jsx)(w.z,{text:"Show more",onClick:function(){return function(e){B.current.open(),V(!1),k(e)}(n)}})]})]},n._id)},P=function(e){var a=e.data,n=e.listRef;return(0,N.jsx)("div",{className:i,ref:n,children:a.length>0?a.map((function(e){return(0,N.jsx)(O,{item:e},e._id)})):(0,N.jsx)("div",{className:_,children:"Nothing found, please try again or try later."})})}},2829:function(e,a,n){n.d(a,{Br:function(){return i},_l:function(){return r}});var t=n(3553),i=function(e){return e.data},r=function(e){return e.favorites};(0,t.P1)([i,function(e){return e.filter}],(function(e,a){var n=e.items,t=a.filter;return null===n||void 0===n?void 0:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}))}}]);
//# sourceMappingURL=995.c7aaa16e.chunk.js.map