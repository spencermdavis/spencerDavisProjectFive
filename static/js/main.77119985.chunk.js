(this["webpackJsonpspencer-davis-project-five"]=this["webpackJsonpspencer-davis-project-five"]||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(18),a(9)),i=a(10),s=a(12),u=a(11),p=a(3),d=a.n(p);a(20);d.a.initializeApp({apiKey:"AIzaSyA-LzH3x6y4GOQRQvK4Htenjgf7DMYWrro",authDomain:"spencer-davis-project-five.firebaseapp.com",databaseURL:"https://spencer-davis-project-five.firebaseio.com",projectId:"spencer-davis-project-five",storageBucket:"spencer-davis-project-five.appspot.com",messagingSenderId:"998632952490",appId:"1:998632952490:web:4493592177e848c8cab6d3"});var m=d.a,v=(a(23),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({userInput:t.target.value},(function(){console.log(e.state.userInput)}))},e.handleClick=function(t){t.preventDefault(),m.database().ref().push(e.state.userInput),e.setState({userInput:""})},e.deleteBook=function(e){console.log(e),m.database().ref().child(e).remove()},e.state={cards:[],userInput:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.database().ref().on("value",(function(t){var a=t.val();console.log(a);var n=[];for(var r in a){var c={id:r,card:a[r]};n.push(c)}console.log(n),e.setState({cards:n})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"magic: the gathering collection manager"),r.a.createElement("form",{action:"submit"},r.a.createElement("label",{htmlFor:"newCard"},"Add a card to your collection"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.userInput,type:"text",id:"newCard"}),r.a.createElement("button",{onClick:this.handleClick},"Add Card"))),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.a.createElement("path",{fill:"#264653",fillOpacity:"1",d:"M0,224L0,96L288,96L288,32L576,32L576,128L864,128L864,224L1152,224L1152,96L1440,96L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"}))),r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",null,this.state.cards.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("p",null,t.card),r.a.createElement("button",{onClick:function(){e.deleteBook(t.id)}},"Remove Card"))})))),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.a.createElement("path",{fill:"#2a9d8f",fillOpacity:"1",d:"M0,224L0,96L288,96L288,32L576,32L576,128L864,128L864,224L1152,224L1152,96L1440,96L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"}))),r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"copyright spencer davis 2020"))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.77119985.chunk.js.map