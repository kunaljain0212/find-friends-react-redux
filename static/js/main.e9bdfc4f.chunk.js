(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c);a(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);var i=a(1),l=a(2),s=a(4),h=a(3),u=function(e){return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.id,"?200x200"),alt:"Girl in a jacket"}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.contact),r.a.createElement("p",null,e.email)))},m=function(e){var t=e.data;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(u,{key:e.id,id:e.id,name:e.name,contact:e.contact,email:e.email})})))},d=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Friends",onChange:t}))},f={overflow:"scroll",border:"5px solid black",height:"800px"},p=function(e){return r.a.createElement("div",{style:f},e.children)},v=(a(14),function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).state={hasError:!1},n}return Object(l.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooooopss. This is not good!!"):this.props.children}}]),a}(n.Component)),E=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={data:[],searchfield:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var e=this,t=this.state.data.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.data.length?r.a.createElement("h1",null,"Loading!!!"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"FRIENDS"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(v,null,r.a.createElement(m,{data:t}))))}}]),a}(n.Component);o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.e9bdfc4f.chunk.js.map