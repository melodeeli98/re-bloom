(this["webpackJsonpre-bloom"]=this["webpackJsonpre-bloom"]||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},15:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(9),l=t.n(r),s=(t(15),t(1)),i=t(2),c=t(4),m=t(3),u=t(7),p=(t(18),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.description,t=this.props.data.social.map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{href:e.url},o.a.createElement("i",{className:e.className})))}));return o.a.createElement("header",{id:"home"},o.a.createElement("nav",{id:"nav-wrap"},o.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),o.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),o.a.createElement("ul",{id:"nav",className:"nav"},o.a.createElement("li",{className:"current"},o.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Partnerships")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),o.a.createElement("div",{className:"row banner"},o.a.createElement("div",{className:"banner-text"},o.a.createElement("h1",{className:"responsive-headline"},e),o.a.createElement("h3",null,a),o.a.createElement("hr",null),o.a.createElement("ul",{className:"social"},t))),o.a.createElement("p",{className:"scrolldown"},o.a.createElement("a",{className:"smoothscroll",href:"#about"},o.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),h=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{href:e.url},o.a.createElement("i",{className:e.className})))}));return o.a.createElement("footer",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("ul",{className:"social-links"},e),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"\xa9 Copyright 2020 re:Bloom"),o.a.createElement("li",null,"Design by"," ",o.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),o.a.createElement("div",{id:"go-top"},o.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},o.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),d=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.logo,t=this.props.data.bio,n=this.props.data.address.street,r=this.props.data.address.city,l=this.props.data.address.state,s=this.props.data.address.zip,i=this.props.data.phone,c=this.props.data.email;return o.a.createElement("section",{id:"about"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"three columns"},o.a.createElement("img",{className:"logo",src:a,alt:"Logo"})),o.a.createElement("div",{className:"nine columns main-col"},o.a.createElement("h2",null,"About Us"),o.a.createElement("p",null,t),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"columns contact-details"},o.a.createElement("h2",null,"Contact Details"),o.a.createElement("p",{className:"address"},o.a.createElement("span",null,e),o.a.createElement("br",null),o.a.createElement("span",null,n,o.a.createElement("br",null),r," ",l,", ",s),o.a.createElement("br",null),o.a.createElement("span",null,i),o.a.createElement("br",null),o.a.createElement("span",null,c))),o.a.createElement("div",{className:"columns download"})))))}}]),t}(n.Component),f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.contactmessage;return o.a.createElement("section",{id:"contact"},o.a.createElement("h2",{style:{color:"white",textAlign:"center"}},"Interested in becoming a volunteer developer?"),o.a.createElement("div",{className:"row banner"},o.a.createElement("div",{className:"banner-text"},o.a.createElement("div",{className:"two columns header-col"}),o.a.createElement("div",{className:"ten columns"},o.a.createElement("p",{className:"gray"},e),o.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfzsY9hhopa3cQlb2efHzK0ZTIPOAqtkN8H1ug9-BE3Otv4hQ/viewform",title:"googleform",width:"640",height:"524",frameBorder:"0",marginHeight:"0",marginWidth:"0"},"Loading\u2026")))))}}]),t}(n.Component),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/"+e.image;return o.a.createElement("div",{key:e.title,className:"columns portfolio-item"},o.a.createElement("div",{className:"item-wrap"},o.a.createElement("img",{alt:e.title,src:a})),o.a.createElement("div",{className:"portfolio-item-meta",style:{textAlign:"center"}},o.a.createElement("h5",null,e.title)))}));return o.a.createElement("section",{id:"portfolio"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns collapsed"},o.a.createElement("h1",null,"Current partnerships"),o.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(n.Component),g=t(6),v=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),n=a.call(this,e),u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,{data:g.main}),o.a.createElement(d,{data:g.main}),o.a.createElement(E,{data:g.portfolio}),o.a.createElement(f,{data:g.main}),o.a.createElement(h,{data:g.main}))}}]),t}(n.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/re-bloom",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/re-bloom","/service-worker.js");b?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):w(e)}))}}()},6:function(e){e.exports=JSON.parse('{"main":{"name":"re:Bloom","description":"Helping small businesses go online.","logo":"logo.jpg","bio":"We are a group of college students and recent graduates who are volunteering to work on websites for small local businesses. From Wordpress development to full stack websites, we can help you create an online presence.","contactmessage":"Fill out this Google Form and we\'ll get back to you soon!","email":"abbey@re-bloom.org","address":{"street":"(Your Street)","city":"(Your City)","state":"(Your State)","zip":"(Your Zip/Postal Code)"},"phone":"(Your Phone Number)","social":[{"name":"facebook","url":"http://facebook.com/","className":"fa fa-facebook"},{"name":"twitter","url":"http://twitter.com","className":"fa fa-twitter"},{"name":"linkedin","url":"https://www.linkedin.com/","className":"fa fa-linkedin"},{"name":"instagram","url":"http://instagram.com/","className":"fa fa-instagram"},{"name":"github","url":"http://github.com/","className":"fa fa-github"},{"name":"skype","url":"http://skype.com","className":"fa fa-skype"}]},"portfolio":{"projects":[{"title":"Fake Company 1","image":"genericlogo.png"},{"title":"Fake Company 2","image":"genericlogo.png"}]},"testimonials":{"testimonials":[{"text":"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.","user":"Kareem Abdul Jabbar"},{"text":"That Tim Baker must be one of the most brilliant developers I\'ve ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!","user":"Steve Wozniak... impersonator"}]}}')}},[[10,1,2]]]);
//# sourceMappingURL=main.3a3fe848.chunk.js.map