"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[533],{5320:function(e,a,n){n.d(a,{z:function(){return c}});var t=n(1413),i=n(4925),s=(n(2791),"Button_btn__rk-ay"),r=n(3329),l=["text","onClick"],c=function(e){var a=e.text,n=e.onClick,c=(0,i.Z)(e,l);return(0,r.jsx)("button",(0,t.Z)((0,t.Z)({className:s,onClick:n},c),{},{children:a}))}},1648:function(e,a,n){n.d(a,{Q:function(){return C}});n(2791);var t="VanFilters_filtersWrapper__w+uQu",i="VanFilters_filterSection__KXZRA",s="VanFilters_location__mOdIT",r="VanFilters_list__FBu+L",l=n(6577),c=n(5320),o=n(3329),d=[{name:"automatic",label:"Automatic",icon:(0,o.jsx)(l.iU,{})},{name:"AC",label:"AC",icon:(0,o.jsx)(l.am,{})},{name:"TV",label:"TV",icon:(0,o.jsx)(l.lL,{})},{name:"kitchen",label:"Kitchen",icon:(0,o.jsx)(l.oy,{})},{name:"shower",label:"Shower/WC",icon:(0,o.jsx)(l.Pp,{})}],_=[{label:"Van",icon:(0,o.jsx)(l.zU,{})},{label:"Fully Integrated",icon:(0,o.jsx)(l.i8,{})},{label:"Alcove",icon:(0,o.jsx)(l.Zy,{})}],m="Checkbox_checkboxContainer__2jyFy",u="Checkbox_label__scbRi",h="Checkbox_hidden__EwqCN",x=function(e){var a=e.name,n=e.label,t=e.icon;return(0,o.jsxs)("div",{className:m,children:[(0,o.jsx)("input",{type:"checkbox",id:a,name:a,className:h}),(0,o.jsxs)("label",{htmlFor:a,className:u,children:[t,n]})]})},j="RadioButton_container__9VV9E",v="RadioButton_label__t98+e",f="RadioButton_hidden__l0Ph0",p=function(e){var a=e.label,n=e.icon;return(0,o.jsxs)("div",{className:j,children:[(0,o.jsx)("input",{className:f,type:"radio",id:a,name:"venType",value:a}),(0,o.jsxs)("label",{htmlFor:a,className:v,children:[n,a]})]})},C=function(){return(0,o.jsx)("div",{className:t,children:(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=e.target.elements,n=a.location,t=a.automatic,i=a.AC,s=a.TV,r=a.kitchen,l=a.shower,c=a.venType,o={location:n.value,automatic:t.checked,AC:i.checked,TV:s.checked,kitchen:r.checked,shower:l.checked,venType:c.value};console.log(o)},children:[(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("label",{htmlFor:"location",children:"Location"}),(0,o.jsx)("input",{type:"text",name:"location"}),(0,o.jsx)(l.Ye,{})]}),(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("h2",{children:"Filters"}),(0,o.jsx)("h3",{children:"Vehicle Equipment"}),(0,o.jsx)("div",{className:r,children:d.map((function(e){var a=e.name,n=e.label,t=e.icon;return(0,o.jsx)(x,{name:a,label:n,icon:t},n)}))}),(0,o.jsx)("h3",{children:"Vehicle Type"}),(0,o.jsx)("div",{className:r,children:_.map((function(e){var a=e.name,n=e.label,t=e.icon;return(0,o.jsx)(p,{name:a,label:n,icon:t},n)}))})]}),(0,o.jsx)(c.z,{type:"submit",text:"Search"})]})})}},2833:function(e,a,n){n.d(a,{Z:function(){return T}});var t=n(2791),i="VanList_list__KDVYM",s="VanList_itemWrapper__rS9x6",r="VanList_img__-N3ve",l="VanList_itemContent__L3C+6",c="VanList_firstLine__Uutwx",o="VanList_active__bBdpz",d="VanList_secondLine__nElDv",_="VanList_location__Elu6a",m="VanList_detailList__0+lMc",u=n(9439),h=n(4420),x=n(2829),j=n(6577),v="DetailsItem_detailsItem__cA3ZK",f="DetailsItem_icon__C9MbN",p="DetailsItem_value__PGtKN",C=n(3329),N={automatic:(0,C.jsx)(j.iU,{}),airConditioner:(0,C.jsx)(j.AK,{}),AC:(0,C.jsx)(j.am,{}),toilet:(0,C.jsx)(j.Xk,{}),CD:(0,C.jsx)(j.CD,{}),TV:(0,C.jsx)(j.lL,{}),kitchen:(0,C.jsx)(j.oy,{}),beds:(0,C.jsx)(j.QF,{}),radio:(0,C.jsx)(j.Y8,{}),shower:(0,C.jsx)(j.Pp,{}),freezer:(0,C.jsx)(j.SY,{}),microwave:(0,C.jsx)(j.oC,{}),gas:(0,C.jsx)(j.RP,{}),water:(0,C.jsx)(j.Bt,{}),hob:(0,C.jsx)(j.WD,{}),bathroom:(0,C.jsx)(j.ZS,{})},b=function(e){var a=e.detail,n=(0,u.Z)(a,2),t=n[0],i=n[1];return(0,C.jsxs)("li",{className:v,children:[(0,C.jsx)("span",{className:f,children:N[t]}),(0,C.jsx)("span",{className:p,children:i}),t]})},g=n(5320),D=n(1506),w=n(4164),k="Modal_modalOverlay__q5Qe9",y="Modal_modalContent__tvY28",L="Modal_button__DHHec",B=(0,t.forwardRef)((function(e,a){var n=e.children,i=(0,t.useRef)(),s=(0,t.useState)(!1),r=(0,u.Z)(s,2),l=r[0],c=r[1];(0,t.useImperativeHandle)(a,(function(){return{open:function(){c(!0),document.addEventListener("keydown",o)},close:function(){c(!1),document.removeEventListener("keydown",o)}}}));var o=(0,t.useCallback)((function(e){"Escape"===e.key&&a.current.close()}),[a]);return(0,t.useEffect)((function(){return function(){document.removeEventListener("keydown",o)}}),[o]),(0,w.createPortal)((0,C.jsx)(C.Fragment,{children:l&&(0,C.jsx)("div",{ref:i,className:k,onClick:function(e){e.target===i.current&&a.current.close()},children:(0,C.jsxs)("div",{className:y,children:[(0,C.jsx)("button",{className:L,onClick:function(){a.current.close()},children:(0,C.jsx)(j.x8,{})}),n]})})}),document.getElementById("modal-root"))})),V={modalContent:"CardDetails_modalContent__tmfLl",location:"CardDetails_location__h3fAm",images:"CardDetails_images__hIJZh",image:"CardDetails_image__4oPZ1",tabs:"CardDetails_tabs__q7hK2",tab:"CardDetails_tab__AYGHM",active:"CardDetails_active__eY7Ec",feature:"CardDetails_feature__80AZp",vehicleDetails:"CardDetails_vehicleDetails__eJLnM",reviews:"CardDetails_reviews__apKyZ",review:"CardDetails_review__Rdd7x",reviewHeader:"CardDetails_reviewHeader__-hN05",letter:"CardDetails_letter__DiseX",reviewAuthor:"CardDetails_reviewAuthor__SzLxS",reviewRating:"CardDetails_reviewRating__UxwAj",header:"CardDetails_header__TGgw3",icon:"CardDetails_icon__5c-NM",popIcon:"CardDetails_popIcon__uth1s",ratingBar:"CardDetails_ratingBar__nA3zm",title:"CardDetails_title__8zrqB",details:"CardDetails_details__CAvUL",ratingLocation:"CardDetails_ratingLocation__vHqhO",rating:"CardDetails_rating__-FY3U",locationBar:"CardDetails_locationBar__kDrj1",price:"CardDetails_price__vksph",gallery:"CardDetails_gallery__kO2fl",descriptionBar:"CardDetails_descriptionBar__o2CyG",description:"CardDetails_description__mt-du",hidden:"CardDetails_hidden__O-54p",buttonMore:"CardDetails_buttonMore__v63IX",footer:"CardDetails_footer__9qvJb",tabContent:"CardDetails_tabContent__ZYXcQ",detailsTitle:"CardDetails_detailsTitle__JxFcg",detailsList:"CardDetails_detailsList__DoQv1",detailTitle:"CardDetails_detailTitle__VUbtM",detailValue:"CardDetails_detailValue__rBEZn",featuresList:"CardDetails_featuresList__Ai7Xp",featuresItem:"CardDetails_featuresItem__2C3Af"},F={formTitle:"BookingForm_formTitle__rg6+n",bookingForm:"BookingForm_bookingForm__zfU+Q",slogan:"BookingForm_slogan__8UOaq",error:"BookingForm_error__ah4no",dateBar:"BookingForm_dateBar__WiSJP",icon:"BookingForm_icon__2zzpO"},A=function(){return(0,C.jsxs)("div",{className:F.bookingForm,children:[(0,C.jsx)("h4",{className:F.formTitle,children:"Book your campervan now"}),(0,C.jsx)("span",{className:F.slogan,children:"Stay connected! We are always ready to help you."}),(0,C.jsxs)("form",{className:F.form,onSubmit:function(e){e.preventDefault();var a=e.target.elements,n=a.name,t=a.email,i=a.date,s=a.comment,r={name:n.value,email:t.value,date:i.value,comment:s.value};console.log(r)},children:[(0,C.jsx)("input",{type:"text",name:"name",placeholder:"Name"}),(0,C.jsx)("input",{type:"email",name:"email",placeholder:"Email"}),(0,C.jsx)("div",{className:F.dateBar,children:(0,C.jsx)("input",{type:"date",name:"date"})}),(0,C.jsx)("textarea",{name:"comment",placeholder:"Comment",rows:"4"}),(0,C.jsx)(g.z,{text:"Send",type:"submit"})]})]})},R=function(e){var a,n,i=e.card,s=e.isDescription,r=e.setIsDescription,l=(0,t.useState)("features"),c=(0,u.Z)(l,2),o=c[0],d=c[1],_=(a=i.details,Object.keys(a).reduce((function(e,n){if(!a[n])return e;var t=n,i=n;return"airConditioner"===n&&(t="air conditioner"),e.push({name:t,value:a[n],iconName:i}),e}),[])),m=function(e){return[{name:"form",value:e.form},{name:"length",value:e.length},{name:"width",value:e.width},{name:"height",value:e.height},{name:"tank",value:e.tank},{name:"consumption",value:e.consumption}]}(i);return(0,C.jsxs)("section",{className:V.modalContent,children:[(0,C.jsxs)("header",{className:V.header,children:[(0,C.jsx)("h2",{className:V.title,children:i.name}),(0,C.jsxs)("div",{className:V.ratingLocation,children:[(0,C.jsxs)("div",{className:V.rating,onClick:function(){d("reviews")},children:[(0,C.jsx)(j.Ux,{}),(0,C.jsxs)("span",{className:V.ratingBar,children:[i.rating," (",i.reviews.length," Reviews)"]})]}),(0,C.jsxs)("div",{className:V.locationBar,children:[(0,C.jsx)(j.Ye,{}),(0,C.jsx)("span",{children:i.location})]})]}),(0,C.jsx)("span",{className:V.price,children:(n=i.price,n.toLocaleString("en-IE",{style:"currency",currency:"EUR",minimumFractionDigits:2}))})]}),(0,C.jsx)("div",{className:V.gallery,children:i.gallery.map((function(e,a){return(0,C.jsx)("img",{src:e,className:V.image,alt:"Slide ".concat(a)},a)}))}),(0,C.jsxs)("div",{className:V.descriptionBar,children:[(0,C.jsx)("p",{className:s?V.description:"".concat(V.description," ").concat(V.hidden),children:i.description}),(0,C.jsx)("button",{onClick:function(){r((function(e){return!e}))},className:V.buttonMore,children:s?"Read less":"Read more"})]}),(0,C.jsxs)("nav",{className:V.tabs,children:[(0,C.jsx)("button",{className:"".concat(V.tab," ").concat("features"===o?V.active:""),onClick:function(){return d("features")},children:"Features"}),(0,C.jsx)("button",{className:"".concat(V.tab," ").concat("reviews"===o?V.active:""),onClick:function(){return d("reviews")},children:"Reviews"})]}),(0,C.jsxs)("div",{className:V.footer,children:[(0,C.jsxs)("div",{className:V.tabContent,children:["features"===o&&(0,C.jsxs)("div",{className:V.features,children:[(0,C.jsx)("ul",{className:V.featuresList,children:_&&_.map((function(e){return(0,C.jsxs)("li",{className:V.featuresItem,children:[N[e.name],(0,C.jsx)("span",{children:e.value}),(0,C.jsx)("span",{children:e.name})]},e.name)}))}),(0,C.jsxs)("div",{className:V.vehicleDetails,children:[(0,C.jsx)("h4",{className:V.detailsTitle,children:"Vehicle details"}),(0,C.jsx)("ul",{className:V.detailsList,children:m.map((function(e,a){return(0,C.jsxs)("li",{children:[(0,C.jsx)("span",{className:V.detailTitle,children:e.name}),(0,C.jsx)("span",{className:V.detailValue,children:e.value})]},a)}))})]})]}),"reviews"===o&&(0,C.jsx)("div",{className:V.reviews,children:i.reviews.map((function(e,a){return(0,C.jsxs)("div",{className:V.review,children:[(0,C.jsxs)("div",{className:V.reviewHeader,children:[(0,C.jsx)("span",{className:V.letter,children:e.reviewer_name[0]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h3",{className:V.reviewAuthor,children:e.reviewer_name}),(0,C.jsx)("span",{className:V.reviewRating,children:Array.from({length:e.reviewer_rating},(function(e,a){return(0,C.jsx)(j.Ux,{})}))})]})]}),(0,C.jsx)("p",{className:V.comment,children:e.comment})]},a)}))})]}),(0,C.jsx)(A,{})]})]})},S=function(e){var a,n=e.item,i=(0,h.v9)(x._l),v=(0,h.I0)(),f=i.find((function(e){return e._id===n._id})),p=(0,t.useState)(),N=(0,u.Z)(p,2),w=N[0],k=N[1],y=(0,t.useState)(!0),L=(0,u.Z)(y,2),V=L[0],F=L[1],A=(0,t.useRef)();return(0,C.jsxs)("div",{className:s,children:[(0,C.jsx)(B,{ref:A,children:(0,C.jsx)(R,{card:w,isDescription:V,setIsDescription:F})}),(0,C.jsx)("div",{className:r,children:(0,C.jsx)("img",{src:n.gallery[0],alt:""})}),(0,C.jsxs)("div",{className:l,children:[(0,C.jsxs)("div",{className:c,children:[(0,C.jsx)("p",{children:n.name}),(0,C.jsxs)("p",{children:["\u20ac",n.price,(0,C.jsx)(j.mN,{className:f?o:"",onClick:function(){return v((0,D.j)(n))}})]})]}),(0,C.jsxs)("div",{className:d,children:[(0,C.jsx)(j.Ux,{}),n.rating,(0,C.jsxs)("span",{children:[" (","".concat(null===(a=n.reviews)||void 0===a?void 0:a.length)," Reviews)"]}),(0,C.jsxs)("span",{className:_,children:[(0,C.jsx)(j.Ye,{})," item.location"]})]}),(0,C.jsx)("p",{children:n.description}),(0,C.jsx)("ul",{className:m,children:Object.entries(n.details).map((function(e,a){return(0,C.jsx)(b,{detail:e},a)}))}),(0,C.jsx)(g.z,{text:"Show more",onClick:function(){return function(e){A.current.open(),F(!1),k(e)}(n)}})]})]},n._id)},T=function(e){var a=e.data,n=e.listRef;return(0,C.jsx)("div",{className:i,ref:n,children:a.length>0&&a.map((function(e){return(0,C.jsx)(S,{item:e},e._id)}))})}},2829:function(e,a,n){n.d(a,{Br:function(){return i},_l:function(){return s}});var t=n(3553),i=function(e){return e.data},s=function(e){return e.favorites};(0,t.P1)([i,function(e){return e.filter}],(function(e,a){var n=e.items,t=a.filter;return null===n||void 0===n?void 0:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}))}}]);
//# sourceMappingURL=533.84ca759f.chunk.js.map