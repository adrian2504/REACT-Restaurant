(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{103:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),c=(t(100),t(101),t(102),t(103),t(20)),o=t(21),m=t(22),i=t(23),u=t(10),d=t(25),E=t(9),h=t(56),f=t(89),p="http://localhost:3001/",g=function(){return{type:"DISHES_LOADING"}},b=function(e){return{type:"DISHES_FAILED",payload:e}},N=function(e){return{type:"ADD_DISHES",payload:e}},v=function(e){return{type:"COMMENTS_FAILED",payload:e}},y=function(e){return{type:"ADD_COMMENTS",payload:e}},w=function(){return{type:"PROMOS_LOADING"}},M=function(e){return{type:"PROMOS_FAILED",payload:e}},O=function(e){return{type:"ADD_PROMOS",payload:e}},k=function(){return{type:"LEADERS_LOADING"}},L=function(e){return{type:"LEADERS_FAILED",payload:e}},S=function(e){return{type:"ADD_LEADERS",payload:e}},D=function(e){return{type:"ADD_FEEDBACK",payload:e}},j=t(153),C=t(154),F=t(155),A=t(156),x=t(157),I=t(158),T=t(7),R=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))};function _(e){var a=e.dish;e.onClick;return r.a.createElement(j.a,null,r.a.createElement(T.b,{to:"/menu/".concat(a.id)},r.a.createElement(C.a,{width:"100%",src:p+a.image,alt:a.name}),r.a.createElement(F.a,null,r.a.createElement(A.a,null,a.name))))}var q=function(e){var a=e.dishes.dishes.map((function(a){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:a.id},r.a.createElement(_,{dish:a,onClick:e.onClick}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(R,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(x.a,null,r.a.createElement(I.a,null,r.a.createElement(T.b,{to:"/home"},"Home")),r.a.createElement(I.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},P=t(159),H=t(160),Y=t(161),B=t(27);function W(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(R,null):n?r.a.createElement("h4",null,n):r.a.createElement(B.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(j.a,null,r.a.createElement(C.a,{src:p+a.image,alt:a.name}),r.a.createElement(P.a,null,r.a.createElement(A.a,null,a.name),a.designation?r.a.createElement(H.a,null,a.designation):null,r.a.createElement(Y.a,null,a.description))))}var U=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(W,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(W,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(W,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},G=t(57),z=t(19),J=t(162),K=t(163),Z=t(164),$=t(165),Q=function(e){return e&&e.length},V=function(e){return function(a){return!a||a.length<=e}},X=function(e){return function(a){return a&&a.length>=e}},ee=function(e){return!isNaN(Number(e))},ae=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},te=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(z.a)(n)),n}return Object(o.a)(t,[{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(G.a)({},n,t))}},{key:"handleSubmit",value:function(e){console.log("current state is: "+JSON.stringify(e)),alert("Currrent state is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(x.a,null,r.a.createElement(I.a,null,r.a.createElement(T.b,{to:"/home"},"Home")),r.a.createElement(I.a,{active:!0},"Contactus")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"MUMBAI",r.a.createElement("br",null),"INDIA",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"skype"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your feedback")),r.a.createElement("div",{class:"col-12 col-md-9"},r.a.createElement(E.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(J.a,{className:"form-group"},r.a.createElement(K.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(Z.a,{md:10},r.a.createElement(E.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:Q,minLength:X(3),maxLength:V(15)}}),r.a.createElement(E.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"minimum length must be greater than  2 charcaters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(J.a,{className:"form-group"},r.a.createElement(K.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(Z.a,{md:10},r.a.createElement(E.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:Q,minLength:X(3),maxLength:V(15)}}),r.a.createElement(E.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"minimum length must be greater than  2 charcaters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(J.a,{className:"form-group"},r.a.createElement(K.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(Z.a,{md:10},r.a.createElement(E.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Telephone Number",className:"form-control",validators:{required:Q,minLength:X(3),maxLength:V(15),isNumber:ee}}),r.a.createElement(E.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"minimum length must be greater than  2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(J.a,{className:"form-group"},r.a.createElement(K.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(Z.a,{md:10},r.a.createElement(E.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:Q,validEmail:ae}}),r.a.createElement(E.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid email address"}}))),r.a.createElement(J.a,{className:"form-group"},r.a.createElement(Z.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(K.a,{check:!0},r.a.createElement(E.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",r.a.createElement("strong",null,"May we contact you")))),r.a.createElement(Z.a,{md:{size:3,offset:1}},r.a.createElement(E.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email.")))),r.a.createElement(J.a,{className:"form-group"},r.a.createElement(K.a,{htmlFor:"feedback",md:2},"Your Feedback"),r.a.createElement(Z.a,{md:10},r.a.createElement(E.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(J.a,{className:"form-group"},r.a.createElement(Z.a,{md:{size:10,offset:2}},r.a.createElement($.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),ne=t(180),re=t(166),le=t(167),se=function(e){return e&&e.length},ce=function(e){return function(a){return!a||a.length<=e}},oe=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(z.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(z.a)(n)),n}return Object(o.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement($.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil"})," Submit Comment"),r.a.createElement(ne.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(re.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(le.a,null,r.a.createElement(E.LocalForm,{onSubmit:this.handleSubmit},r.a.createElement(J.a,{className:"form-group"},r.a.createElement(K.a,{htmlFor:"rating",md:12},"Rating"),r.a.createElement(Z.a,{md:{size:12}},r.a.createElement(E.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(J.a,{className:"form-group"},r.a.createElement(K.a,{htmlFor:"author",md:12},"Your Name"),r.a.createElement(Z.a,{md:12},r.a.createElement(E.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:se,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:ce(15)}}),r.a.createElement(E.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(J.a,{className:"form-group"},r.a.createElement(K.a,{htmlFor:"comment",md:12},"Comment"),r.a.createElement(Z.a,{md:12},r.a.createElement(E.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:5,className:"form-control"}))),r.a.createElement($.a,{type:"submit",value:"submit",color:"primary"},"Submit")))));var e}}]),t}(n.Component);function me(e){var a=e.dish;return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(B.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(j.a,null,r.a.createElement(C.a,{top:!0,src:p+a.image,alt:a.name}),r.a.createElement(P.a,null,r.a.createElement(A.a,null,a.name),r.a.createElement(Y.a,null,a.description)))))}function ie(e){var a=e.comments,t=e.postComment,n=e.dishId;return null!=a?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement(B.Stagger,{in:!0},a.map((function(e){return r.a.createElement(B.Fade,{in:!0,key:e.id},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author," ,"," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))}))),r.a.createElement(oe,{dishId:n,postComment:t})):r.a.createElement("div",null)}var ue=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(R,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(x.a,null,r.a.createElement(I.a,null,r.a.createElement(T.b,{to:"/menu"},"Menu")),r.a.createElement(I.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(me,{dish:e.dish}),r.a.createElement(ie,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):void 0},de=t(168),Ee=t(169);function he(e){var a=e.leader;return null!=a?r.a.createElement("div",{key:a.id,className:"col-12 mt-5"},r.a.createElement(de.a,{tag:"li"},r.a.createElement(de.a,{left:!0,middle:!0},r.a.createElement(de.a,{object:!0,src:p+a.image,alt:a.name})),r.a.createElement(de.a,{body:!0,className:"ml-5"},r.a.createElement(de.a,{heading:!0},a.name),a.designation,r.a.createElement("br",null),r.a.createElement("br",null),a.description))):r.a.createElement("div",null)}var fe=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(x.a,null,r.a.createElement(I.a,null,r.a.createElement(T.b,{to:"/home"},"Home")),r.a.createElement(I.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(j.a,null,r.a.createElement(Ee.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(P.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(j.a,null,r.a.createElement(P.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(de.a,{list:!0},e.leaders.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(R,null))):e.leaders.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.leaders.errMess)))):r.a.createElement(B.Stagger,{in:!0},e.leaders.leaders.map((function(e){return r.a.createElement(B.Fade,{in:!0},r.a.createElement(he,{leader:e}))})))))))},pe=t(170),ge=t(171),be=t(172),Ne=t(173),ve=t(174),ye=t(175),we=t(176),Me=t(177),Oe=t(178),ke=t(179),Le=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(z.a)(n)),n.toggleModal=n.toggleModal.bind(Object(z.a)(n)),n.handleLogin=n.handleLogin.bind(Object(z.a)(n)),n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("username: "+this.username.value+"password: "+this.password.value+"Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(ge.a,{onClick:this.toggleNav}),r.a.createElement(be.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Adrian dishBoard"})),r.a.createElement(Ne.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(ve.a,{navbar:!0},r.a.createElement(ye.a,null,r.a.createElement(T.c,{classnName:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home                                ")),r.a.createElement(ye.a,null,r.a.createElement(T.c,{classnName:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About us")),r.a.createElement(ye.a,null,r.a.createElement(T.c,{classnName:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(ye.a,null,r.a.createElement(T.c,{classnName:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(ve.a,{className:"ml-auto",navbar:!0},r.a.createElement(ye.a,null,r.a.createElement($.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(we.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"React Dishes"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unquie fusion experience. Our lip smacking creation will  tickle your culinary senses !!"))))),r.a.createElement(ne.a,{isOpen:this.state.isModalOpen,toggle:this.state.toggleModal},r.a.createElement(re.a,{toggle:this.state.toggleModal},"Login"),r.a.createElement(le.a,null,r.a.createElement(Me.a,{onSubmit:this.handleLogin},r.a.createElement(Oe.a,null,r.a.createElement(K.a,{htmlFor:"username"},"Username"),r.a.createElement(ke.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(Oe.a,null,r.a.createElement(K.a,{htmlFor:"password"},"Password"),r.a.createElement(ke.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(Oe.a,{check:!0},r.a.createElement(K.a,{check:!0}),r.a.createElement(ke.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember Me"),r.a.createElement($.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var Se=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(T.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(T.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(T.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(T.b,{to:"/contactus"},"Contact Us")),r.a.createElement("li",null,r.a.createElement(T.b,{to:"/about"},"About us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"Mumbai, Maharashtra, India",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2020 React-Webpage")))))},De=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Le,null),r.a.createElement(h.a,null,r.a.createElement(f.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(u.d,{location:this.props.location},r.a.createElement(u.b,{path:"/home",component:function(){return r.a.createElement(U,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(u.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(fe,{leaders:e.props.leaders})}}),r.a.createElement(u.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(q,{dishes:e.props.dishes})}}),r.a.createElement(u.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(ue,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(u.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(te,{postFeedback:e.props.postfeedback,resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(u.a,{to:"/home"})))),r.a.createElement(Se,null))}}]),t}(n.Component),je=Object(u.g)(Object(d.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{fetchDishes:function(){e((function(e){return e(g(!0)),fetch(p+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(N(a))})).catch((function(a){return e(b(a.message))}))}))},resetFeedbackForm:function(){e(E.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(p+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(y(a))})).catch((function(a){return e(v(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(w()),fetch(p+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(O(a))})).catch((function(a){return e(M(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(k()),fetch(p+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(S(a))})).catch((function(a){return e(L(a.message))}))}))},postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(p+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},postFeedback:function(a,t,n,r,l,s,c){return e(function(e,a,t,n,r,l,s){return function(c){var o={firstnName:e,lastname:a,telnum:t,email:l,agree:n,contactType:r,message:s};return o.date=(new Date).toISOString(),fetch(p+"feedback",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return c(D(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r,l,s,c))}}}))(De)),Ce=(t(151),t(12)),Fe=t(26),Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(Ce.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(Ce.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(Ce.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(Ce.a)({},e,{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Ce.a)({},e,{errMess:a.payload});case"ADD_COMMENT":var t=a.payload;return t.id=e.comments.length,t.date=(new Date).toISOString(),Object(Ce.a)({},e,{comments:e.comments.concat(t)});default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(Ce.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(Ce.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(Ce.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(Ce.a)({},e,{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(Ce.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(Ce.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Re=t(92),_e=t(93),qe=t.n(_e),Pe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},He=Object(Fe.createStore)(Object(Fe.combineReducers)(Object(Ce.a)({dishes:Ae,comments:xe,promotions:Ie,leaders:Te},Object(E.createForms)({feedback:Pe}))),Object(Fe.applyMiddleware)(Re.a,qe.a)),Ye=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.Provider,{store:He},r.a.createElement(T.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(je,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,a,t){e.exports=t(152)}},[[95,1,2]]]);
//# sourceMappingURL=main.e9273c23.chunk.js.map