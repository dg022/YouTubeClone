(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{1180:function(e,t){},1183:function(e,t,a){},1184:function(e,t,a){},1185:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(22),o=a.n(r),i=a(35),l=a.n(i),c=a(56),m=a(5),u=a(6),d=a(8),p=a(7),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={term:""},e.change=function(t){e.setState({term:t.target.value})},e.submit=function(t){t.preventDefault(),e.props.Search(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"search-bar ui segment"},s.a.createElement("form",{onSubmit:this.submit,className:"ui form"},s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Video Search"),s.a.createElement("input",{onChange:this.change,value:this.state.term,type:"text"}))))}}]),a}(s.a.Component),h=a(57),v=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),f=(a(89),function(e){var t=e.vid,a=e.onVideoSelect;return s.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},s.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url}),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"header"},"  ",t.snippet.title),s.a.createElement("div",{className:"description"},"Updated 10 mins ago")))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return s.a.createElement(f,{vid:e,onVideoSelect:a})}));return s.a.createElement("div",{className:"ui relaxed divided list"},n)},b=a(58),S=a(1197),y=a(1199),N=(s.a.Component,function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={id:0,player:[],duration:0},e.internalChange=!1,e.started=!1,e.newMemberPause=!1,e.internalStart=1,e.videochange=function(t){3==t.target.playerInfo.playerState&&0==e.started&&(e.props.play(t.target.playerInfo.currentTime,e.state.id),e.started=!0,e.messageSent=!0,e.internalStart=0)},e.onPlay=function(t){!1===e.internalChange&&1==e.started&&1==e.internalStart?e.props.play(t.target.playerInfo.currentTime,e.state.id):(0==e.internalStart&&(e.internalStart=1),0==e.started&&(e.started=!0),!0===e.internalChange&&(e.internalChange=!1))},e.onPause=function(t){!1===e.internalChange&&1==e.started&&1==e.internalStart?(console.log("This should not be seen, in the other window"),e.props.pause(e.state.id)):(0==e.internalStart&&(e.internalStart=1),0==e.started&&(e.started=!0),1==e.newMemberPause&&(e.newMemberPause=!1),!0===e.internalChange&&(e.internalChange=!1))},e.componentWillReceiveProps=function(t){null!=e.props.video&&e.props.video.id.videoId!=t.video.id.videoId&&(e.started=!1),console.log(t.nPause),null!=e.state.player[0]&&1==t.nPause&&-1!=e.state.player[0].playerInfo.playerState&&null!=e.state.player[0]&&(e.props.StateReset(),e.internalChange=!0,console.log("IT HAS BEEN PAUSED: nPause == 1"),e.state.player[0].pauseVideo(),e.props.reset(e.state.player[0].getCurrentTime()),e.props.Reset()),null!=e.state.player[0]&&(e.internalChange=!0,1==t.joined?(console.log(""),e.props.joinedReset(),e.state.player[0].seekTo(t.time).pauseVideo(),e.started=!0):"PLAY"==t.PlayerState?(console.log("It got here... it played even when a new member joined"),e.props.StateReset(),e.state.player[0].seekTo(t.time).playVideo()):"PAUSE"==t.PlayerState&&(console.log("It got here... it played even when a new member joined"),e.props.StateReset(),e.state.player[0].pauseVideo()))},e.Ready=function(t){var a=e.state.player;a.push(t.target),e.setState({player:a,duration:a[0].getDuration(),id:e.props.id}),console.log("Ready: Video-Detail -> This should come second"),e.props.loaded()},e}return Object(u.a)(a,[{key:"render",value:function(){return null==this.props.video?s.a.createElement("div",null):s.a.createElement("div",null,s.a.createElement("div",{className:"ui embed"},s.a.createElement(b.a,{onStateChange:this.videochange,onPlay:this.onPlay,onPause:this.onPause,onReady:this.Ready,videoId:this.props.video.id.videoId,opts:{height:"390",width:"640",playerVars:{enablejsapi:1}}}),";"),s.a.createElement("div",{className:"ui segment"},s.a.createElement("h4",{className:"ui header"},this.props.video.snippet.title),s.a.createElement("p",null,this.props.video.snippet.description)))}}]),a}(s.a.Component)),w=a(62),C=a.n(w),j=function(e){return s.a.createElement("div",{className:"comment"},s.a.createElement("a",{className:"avatar"},s.a.createElement("img",{src:C.a.image.avatar()})),s.a.createElement("div",{className:"content"},s.a.createElement("a",{className:"author"}," ",e.name,"    "),s.a.createElement("div",{class:"metadata"},s.a.createElement("div",{className:"Date"},e.time)),s.a.createElement("div",{class:"text"},e.content)))},P=a(63),R=a.n(P),T=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={term:""},e.change=function(t){e.setState({term:t.target.value})},e.timeNow=function(){var e=new Date;return(e.getHours()<10?"0":"")+e.getHours()+":"+((e.getMinutes()<10?"0":"")+e.getMinutes())},e.submit=function(t){t.preventDefault();var a={Content:e.state.term,Name:e.props.name,Time:e.timeNow()};e.props.msg(a)},e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"search-bar ui segment"},s.a.createElement("form",{id:"myForm",onSubmit:this.submit,className:"ui form"},s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Send message"),s.a.createElement("input",{onChange:this.change,value:this.state.term,type:"text"}))))}}]),a}(s.a.Component),O=function(e){var t=e.msglist.map((function(e){return s.a.createElement(j,{content:e.Content,name:e.Name,time:e.Time})}));return s.a.createElement("div",{className:"ui comments"}," ",t)},V=(a(1183),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.change=function(t){e.setState({term:t.target.value})},e.submit=function(t){t.preventDefault(),e.props.enter(e.state.term)},e.submitName=function(t){t.preventDefault(),e.props.nameSubmission(e.state.term)},e.createRoom=function(){e.props.createRoom()},e.determineRender=function(){return null==e.props.roomStatus?s.a.createElement("div",{class:"ui middle aligned center aligned grid"},s.a.createElement("div",{class:"column"},s.a.createElement("h2",{class:"ui image header"},s.a.createElement("div",{class:"content"},"YouTube Party!")),s.a.createElement("div",null,s.a.createElement("img",{src:"https://img.icons8.com/clouds/150/000000/youtube-play.png"}),s.a.createElement("div",{className:"search-bar ui segment"},s.a.createElement("form",{onSubmit:e.submit,className:"ui form"},s.a.createElement("div",{className:"field"},s.a.createElement("div",{class:"ui left icon input"},s.a.createElement("i",{class:"terminal icon"}),s.a.createElement("input",{onChange:e.change,value:e.state.term,type:"text",placeholder:"Enter Code"})))))),s.a.createElement("div",{style:{marginTop:"10px"},onClick:e.submit,class:"ui fluid large red submit button"},"Join Session"),s.a.createElement("div",{style:{marginTop:"10px"},onClick:e.createRoom,class:"ui fluid large white submit button"},"Create Session"))):s.a.createElement("div",{class:"ui middle aligned center aligned grid"},s.a.createElement("div",{class:"column"},s.a.createElement("h2",{class:"ui image header"},s.a.createElement("div",{class:"content"},"YouTube Party!")),s.a.createElement("div",null,s.a.createElement("img",{src:"https://img.icons8.com/clouds/150/000000/youtube-play.png"}),s.a.createElement("div",{className:"search-bar ui segment"},s.a.createElement("form",{onSubmit:e.submitName,className:"ui form"},s.a.createElement("div",{className:"field"},s.a.createElement("div",{class:"ui left icon input"},s.a.createElement("i",{class:"user icon"}),s.a.createElement("input",{onChange:e.change,value:e.state.term,type:"text",placeholder:"Enter Name"})))))),s.a.createElement("div",{style:{marginTop:"10px"},onClick:e.submitName,class:"ui fluid large green submit button"},"Continue!")))},e}return Object(u.a)(a,[{key:"render",value:function(){return this.determineRender()}}]),a}(s.a.Component)),M=(a(1184),function(e){var t=e.msglist.map((function(e){if(console.log(e),null!=e)return s.a.createElement(j,{content:"joined",name:e})}));return s.a.createElement("div",{className:"ui comments"}," ",t)}),k=R()("https://agile-mountain-68964.herokuapp.com/"),I=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null,data:null,socketId:null,id:Math.floor(1e5*Math.random()),members:[],messages:[],newTime:0,time:0,onChange:-1,PlayerState:"",target:[],room:null,loaded:!1,error:0,newMemberPause:0,name:null},e.joined=!1,e.called=!1,e.loaded=function(){e.setState({loaded:!0}),console.log("This loaded:"),1==e.called&&(console.log("This loaded: this.state.joined == true"),k.emit("newMemberPause",e.state.room),e.called=!1)},e.send=function(t){k.emit("change color",t,e.state.room)},e.EmitSearch=function(t){k.emit("search",t,e.state.room)},e.componentWillMount=function(){k.on("change color",(function(t){e.setState({messages:t})})),k.on("search",(function(t){e.setState({videos:t.data.items,selectedVideo:t.data.items[0]})})),k.on("select",(function(t){e.setState({selectedVideo:t})})),k.on("play",(function(t,a){console.log("From APP.js: Play will now setState"),e.setState({time:t,PlayerState:"PLAY",id:a})})),k.on("pause",(function(t){e.setState({PlayerState:"PAUSE",id:t})})),k.on("memberTime",(function(t){1==e.state.joined&&(console.log(t),e.setState({time:t}))})),k.on("newTime",(function(t){e.setState({newTime:t})})),k.on("onChange",(function(t){e.setState({onChange:t})})),k.on("newMemberPause",(function(){e.setState({newMemberPause:1})})),k.on("n",(function(t){e.state.selectedVideo!=t&&(e.setState({selectedVideo:t}),console.log("n: setting joined:true, this should come first"),e.joined=!0)})),k.on("newMember",(function(t){null!=e.state.selectedVideo&&e.newMemberVideo(),console.log(t),e.setState({members:t})})),k.on("remove",(function(t){console.log(t),e.setState({members:t})})),k.on("enter",(function(t,a){"FAIL"!=t?(e.setState({room:t}),e.setState({socketId:a})):(console.log("The code you have entered does not exist in the data base, please try again"),e.setState({error:1}))}))},e.newMemberVideo=function(){console.log(e.state.room),k.emit("n",e.state.selectedVideo,e.state.room)},e.sendMessage=function(t){var a=e.state.messages;a.push(t),e.send(a)},e.pressPlay=function(t,a){k.emit("play",t,a,e.state.room)},e.pressPause=function(t){k.emit("pause",t,e.state.room)},e.newTime=function(t){k.emit("newTime",t,e.state.room)},e.Reset=function(){e.setState({newMemberPause:0})},e.search=function(){var t=Object(c.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/search",{params:{q:a,part:"snippet",type:"video",maxResults:5,key:"AIzaSyBSAzBSy4bhfG8JaCmptEDdreLpQXdAAbQ"}});case 2:n=t.sent,console.log(n),e.EmitSearch(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.enter=function(e){console.log(e),k.emit("enter",e)},e.nameSubmission=function(t){e.setState({name:t}),k.emit("newMember",t,e.state.socketId,e.state.room)},e.onChange=function(t){k.emit("onChange",t,e.state.room)},e.reset=function(t){k.emit("memberTime",t,e.state.room)},e.StateReset=function(){e.setState({PlayerState:""})},e.createRoom=function(){console.log("Ive been clic"),k.emit("createRoom")},e.onVideoSelect=function(t){k.emit("select",t,e.state.room)},e.close=function(){e.setState({error:0})},e.ErrorDecider=function(){return 1==e.state.error?s.a.createElement("div",{className:"cont"},s.a.createElement("div",{className:"ui segment"},s.a.createElement(V,{enter:e.enter,createRoom:e.createRoom,roomStatus:null})),s.a.createElement("div",{class:"ui negative message"},s.a.createElement("i",{onClick:e.close,class:"close icon"}),s.a.createElement("div",{class:"header"},"Invalid room code!"),s.a.createElement("p",null,"Try again, or create new session."))):s.a.createElement("div",{className:"cont"},s.a.createElement("div",{className:"ui segment"},s.a.createElement(V,{enter:e.enter,createRoom:e.createRoom,roomStatus:null})))},e.joinedReset=function(){console.log("joinedReset: Called"),e.joined=!1,e.called=!0},e.joined=function(){k.emit("joined",e.state.room)},e.EnterName=function(){return null==e.state.name?s.a.createElement("div",{className:"cont"},s.a.createElement("div",{className:"ui segment"},s.a.createElement(V,{nameSubmission:e.nameSubmission,roomStatus:e.state.room}))):s.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},s.a.createElement("h4",{className:"ui header"}," ROOM CODE: ",e.state.room),s.a.createElement(g,{Search:e.search}),s.a.createElement("div",{className:"ui grid"},s.a.createElement("div",{className:"ui row"},s.a.createElement("div",{className:"eleven wide column"},s.a.createElement(N,{loaded:e.loaded,Reset:e.Reset,joined:e.joined,joinedReset:e.joinedReset,StateReset:e.StateReset,reset:e.reset,nPause:e.state.newMemberPause,onChange:e.onChange,PlayerState:e.state.PlayerState,State:e.state.onChange,updatedTime:e.state.newTime,newTime:e.newTime,id:e.state.id,time:e.state.time,pause:e.pressPause,play:e.pressPlay,video:e.state.selectedVideo}),s.a.createElement("h4",{className:"ui header"}," Chat Room"),e.state.data,s.a.createElement("div",{className:"ui segment"},s.a.createElement(O,{msglist:e.state.messages})),s.a.createElement(T,{msg:e.sendMessage,name:e.state.name})),s.a.createElement("div",{className:"five wide column"},s.a.createElement(E,{videos:e.state.videos,onVideoSelect:e.onVideoSelect}),s.a.createElement("div",{className:"ui segment"},s.a.createElement("h4",{className:"ui header"}," Connected members"),s.a.createElement(M,{msglist:e.state.members,name:e.state.name}))))))},e}return Object(u.a)(a,[{key:"render",value:function(){return null==this.state.room?this.ErrorDecider():this.EnterName()}}]),a}(s.a.Component);o.a.render(s.a.createElement(I,null),document.querySelector("#root"))},66:function(e,t,a){e.exports=a(1185)},89:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.a6dd252a.chunk.js.map