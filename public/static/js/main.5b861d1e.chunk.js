(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{170:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(39),r=n.n(i),o=(n(170),n(10)),s=n(15),a=n(95),j=n(96),u=n.n(j),l=n(264),b=n(17),d=n(1);var O=function(e){var t=e.type,n=e.job,i=e.post,r=e.questions,j=e.setQuestions,O=new FormData,h=Object(c.useState)(""),x=Object(o.a)(h,2),f=x[0],p=x[1],m=Object(c.useState)(""),v=Object(o.a)(m,2),g=v[0],w=v[1],y=Object(c.useState)(!1),S=Object(o.a)(y,2),C=S[0],k=S[1],F=Object(c.useState)(!1),R=Object(o.a)(F,2),T=R[0],E=R[1],I=Object(c.useRef)(),J=(Object(c.useRef)(),Object(c.useRef)()),N=Object(b.useHistory)();return Object(c.useEffect)((function(){g&&fetch("/api/questions",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({link:g,duration:f,job_id:n.id})}).then((function(e){return e.json()})).then((function(e){"q2"===t&&j([].concat(Object(s.a)(r),[e])),console.log(e)})).then((function(){"q1"===t&&N.push("/create/".concat(n.id))}))}),[i]),Object(d.jsx)("div",{children:Object(d.jsx)(a.ReactMediaRecorder,{video:!0,audio:!0,onStop:function(e,t){O.append("file",t),O.append("upload_preset","test-video"),O.append("cloud_name","abusel"),u()(t).then((function(e){p(e)})),fetch(" https://api.cloudinary.com/v1_1/abusel/video/upload",{method:"post",body:O}).then((function(e){return e.json()})).then((function(e){w(e.url)})).catch((function(e){return console.log(e)}))},render:function(e){var t=e.status,n=e.startRecording,c=e.stopRecording,i=e.mediaBlobUrl,r=e.previewStream;return Object(d.jsxs)("div",{children:["recording"===t&&Object(d.jsx)("h2",{children:" Start talking now!"}),Object(d.jsx)(l.a,{color:"primary",variant:"outlined",onClick:function(){n(),setTimeout((function(){J.current.click()}),2e3),E(!0)},children:C?"New Attempt":"Start Recording"}),Object(d.jsx)(l.a,{color:"primary",variant:"outlined",onClick:function(){c(),E(!1);var e=I.current.srcObject.getTracks()[0];I.current.srcObject.removeTrack(e),I.current.src=i,k(!0)},children:"Stop Recording"}),Object(d.jsx)(l.a,{color:"primary",variant:"outlined",ref:J,style:{display:"none"},onClick:function(){I.current.srcObject=r,I.current.play()},children:"play"}),Object(d.jsxs)("div",{children:[T&&Object(d.jsx)("video",{ref:I,src:i||g,controls:!0,autoplay:!0,width:800}),!T&&Object(d.jsx)("video",{src:i||g,controls:!0,autoplay:!0,width:800})]}),Object(d.jsx)("div",{})]})}})})},h=n(23),x=n(274),f=n(276),p=n(255),m=n(265),v=n(282),g=n(269),w=n(279),y=n(275),S=n(281),C=n(108),k=n(280),F=n(133),R=n(273);function T(e){return Object(d.jsxs)(C.a,Object(h.a)(Object(h.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(d.jsx)(w.a,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}var E=Object(F.a)();function I(e){var t=e.setUser,n=Object(c.useState)(!1),i=Object(o.a)(n,2),r=i[0],s=i[1],a=Object(c.useState)(""),j=Object(o.a)(a,2),u=j[0],l=j[1],O=Object(b.useHistory)();return Object(d.jsx)(R.a,{theme:E,children:Object(d.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(d.jsx)(p.a,{}),Object(d.jsxs)(S.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(d.jsx)(x.a,{sx:{m:1,bgcolor:"secondary.main"}}),Object(d.jsx)(C.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(d.jsxs)(S.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var n=new FormData(e.currentTarget),c=JSON.stringify({name:n.get("firstName")+" "+n.get("lastName"),email:n.get("email"),password:u,is_company:r});console.log(c),fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:c}).then((function(e){e.ok?e.json().then((function(e){t(e),O.push("/"),console.log(e)})):e.json().then((function(e){return console.log(e)}))}))},sx:{mt:3},children:[Object(d.jsxs)(y.a,{container:!0,spacing:2,children:[Object(d.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(d.jsx)(m.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(d.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(d.jsx)(m.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),Object(d.jsx)(y.a,{item:!0,xs:12,children:Object(d.jsx)(m.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(d.jsx)(y.a,{item:!0,xs:12,children:Object(d.jsx)(m.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:u,onChange:function(e){return l(e.target.value)},autoComplete:"new-password"})}),Object(d.jsx)(y.a,{item:!0,xs:12,children:Object(d.jsx)(v.a,{control:Object(d.jsx)(g.a,{value:"isCompany",id:"isCompany",color:"primary",onChange:function(){return s((function(e){return!e}))}}),label:"I am a company"})})]}),Object(d.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(d.jsx)(y.a,{container:!0,justifyContent:"flex-end",children:Object(d.jsx)(y.a,{item:!0,children:Object(d.jsx)(w.a,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(d.jsx)(T,{sx:{mt:5}})]})})}function J(e){return Object(d.jsxs)(C.a,Object(h.a)(Object(h.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(d.jsx)(w.a,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}var N=Object(F.a)();function _(e){var t=e.setUser,n=Object(b.useHistory)();return Object(d.jsx)(R.a,{theme:N,children:Object(d.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(d.jsx)(p.a,{}),Object(d.jsxs)(S.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(d.jsx)(x.a,{sx:{m:1,bgcolor:"secondary.main"}}),Object(d.jsx)(C.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(d.jsxs)(S.a,{component:"form",onSubmit:function(e){e.preventDefault();var c=new FormData(e.currentTarget),i=JSON.stringify({email:c.get("email"),password:c.get("password")});fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:i}).then((function(e){e.ok?(e.json().then((function(e){t(e),console.log(e)})),n.push("/")):e.json().then((function(e){return console.log(e)}))}))},noValidate:!0,sx:{mt:1},children:[Object(d.jsx)(m.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(d.jsx)(m.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(d.jsx)(v.a,{control:Object(d.jsx)(g.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(d.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(d.jsxs)(y.a,{container:!0,children:[Object(d.jsx)(y.a,{item:!0,xs:!0,children:Object(d.jsx)(w.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(d.jsx)(y.a,{item:!0,children:Object(d.jsx)(w.a,{href:"/",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(d.jsx)(J,{sx:{mt:8,mb:4}})]})})}var q=n(25);var D=function(e){var t=e.user,n=e.setJob,i=Object(c.useState)([]),r=Object(o.a)(i,2),s=r[0],a=r[1],j=Object(b.useHistory)();return Object(c.useEffect)((function(){t.is_company&&fetch("/api/jobs").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[t]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"View Posted Jobs"}),s[0]&&Object(d.jsx)("ul",{children:s.filter((function(e){return e.user_id===t.id})).map((function(e){return Object(d.jsx)("li",{onClick:function(){n(e),j.push("/".concat(e.id))},children:e.title})}))})]}),Object(d.jsx)("div",{children:"or"}),Object(d.jsx)("div",{children:Object(d.jsx)(q.b,{to:"/create",children:Object(d.jsx)(l.a,{children:"Create a Job"})})})]})},P=n(272),H=n(292),W=n(268),A=n(256),L=["Name the Job","Create First Question","Finalize"];function Q(e){var t=e.setJob,n=e.job,i=e.user,r=c.useState(0),s=Object(o.a)(r,2),a=s[0],j=s[1],u=c.useState(new Set),l=Object(o.a)(u,2),x=l[0],p=l[1],m=Object(c.useState)(""),v=Object(o.a)(m,2),g=v[0],w=v[1],y=Object(c.useState)(!1),k=Object(o.a)(y,2),F=k[0],R=k[1];Object(b.useHistory)();Object(c.useEffect)((function(){}),[a]);var T=function(e){return 10===e},E=function(e){return x.has(e)};return Object(d.jsxs)(d.Fragment,{children:[0===a&&Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Please Name the Job"}),Object(d.jsx)(A.a,{value:g,onChange:function(e){return w(e.target.value)},placeholder:"Job Title"})]}),a>0&&Object(d.jsx)(O,{type:"q1",job:n,post:F}),Object(d.jsxs)(S.a,{sx:{width:"100%"},children:[Object(d.jsx)(P.a,{activeStep:a,children:L.map((function(e,t){var n={},c={};return T(t)&&(c.optional=Object(d.jsx)(C.a,{variant:"caption",children:"Optional"})),E(t)&&(n.completed=!1),Object(d.jsx)(H.a,Object(h.a)(Object(h.a)({},n),{},{children:Object(d.jsx)(W.a,Object(h.a)(Object(h.a)({},c),{},{children:e}))}),e)}))}),a===L.length?Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(C.a,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),Object(d.jsxs)(S.a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[Object(d.jsx)(S.a,{sx:{flex:"1 1 auto"}}),Object(d.jsx)(f.a,{onClick:function(){j(0)},children:"Reset"})]})]}):Object(d.jsxs)(c.Fragment,{children:[Object(d.jsxs)(C.a,{sx:{mt:2,mb:1},children:["Step ",a+1]}),Object(d.jsxs)(S.a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[Object(d.jsx)(f.a,{color:"inherit",disabled:0===a,onClick:function(){j((function(e){return e-1}))},sx:{mr:1},children:"Back"}),Object(d.jsx)(S.a,{sx:{flex:"1 1 auto"}}),T(a)&&Object(d.jsx)(f.a,{color:"inherit",onClick:function(){if(!T(a))throw new Error("You can't skip a step that isn't optional.");j((function(e){return e+1})),p((function(e){var t=new Set(e.values());return t.add(a),t}))},sx:{mr:1},children:"Skip"}),Object(d.jsx)(f.a,{onClick:function(){var e=x;E(a)&&(e=new Set(e.values())).delete(a),j((function(e){return e+1})),p(e),a===L.length-1&&(console.log("finished"),fetch("/api/jobs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:g,allow_multiple_attempts:!1,user_id:i.id})}).then((function(e){return e.json()})).then((function(e){return t(e)})).then((function(){return R((function(e){return!e}))})).then((function(){})))},children:a===L.length-1?"Finish":"Next"})]})]})]})]})}var U=function(e){var t=e.user,n=e.job,c=e.setJob;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Create a new job"}),Object(d.jsx)("h4",{children:n.title}),Object(d.jsx)(Q,{setJob:c,job:n,user:t})]})},V=n(270),z=n(283),B=n(284),Y=n(102),M=n.n(Y),G=n(263);var K=function(e){var t=e.job,n=(e.setJob,e.adding),i=e.interview,r=e.setInterview,s=Object(b.useParams)(),a=Object(c.useState)(!1),j=Object(o.a)(a,2),u=(j[0],j[1],Object(c.useState)([])),l=Object(o.a)(u,2),x=l[0],p=l[1],v=Object(c.useState)(!1),g=Object(o.a)(v,2),w=g[0],y=g[1],S=Object(c.useState)([]),k=Object(o.a)(S,2),F=k[0],R=k[1],T=Object(c.useState)(1),E=Object(o.a)(T,2),I=(E[0],E[1],Object(c.useState)("")),J=Object(o.a)(I,2),N=(J[0],J[1],Object(b.useHistory)());return Object(c.useEffect)((function(){}),[]),Object(c.useEffect)((function(){fetch("/api/jobs/".concat(s.job)).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){!n&&fetch("/api/interviewjob/".concat(t.id)).then((function(e){return e.json()})).then((function(e){return R(e)}))}),[t]),Object(c.useEffect)((function(){fetch("/api/jobs/".concat(t.id)).then((function(e){return e.json()})).then((function(e){return p(e.questions)}))}),[t]),Object(d.jsxs)("div",{children:[t.title,Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"View Questions:"}),x&&x.map((function(e){return Object(d.jsxs)(V.a,{children:[Object(d.jsx)(z.a,{expandIcon:Object(d.jsx)(M.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(d.jsxs)(C.a,{children:["Question ",x.indexOf(e)+1]})}),Object(d.jsx)(B.a,{children:Object(d.jsx)(C.a,{children:Object(d.jsx)("div",{children:Object(d.jsx)("video",{src:e.link,controls:!0,autoplay:!0,width:600})})})})]})}))]}),n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{type:"q2",questions:x,setQuestions:p,post:w,job:t}),Object(d.jsx)(f.a,{onClick:function(){return y((function(e){return!e}))},children:"Add Question"}),Object(d.jsx)(f.a,{onClick:function(){return N.push("/")},children:" Publish"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h3",{children:[" Link: http://localhost:4000/interview/",t.id]}),Object(d.jsxs)("h3",{children:["Interview Code: ",t.id]}),Object(d.jsx)("h5",{children:"View Interviews"}),F[0]&&Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(G.a,{disableClearable:!0,onChange:function(e,t){r(t)},disablePortal:!0,id:"combo-box-demo",options:F,getOptionLabel:function(e){return e.user.name},sx:{width:300},renderInput:function(e){return Object(d.jsx)(m.a,Object(h.a)(Object(h.a)({},e),{},{label:"Applicant"}))}}),Object(d.jsx)(f.a,{onClick:function(){i&&N.push("/interview/".concat(i.id))},children:"View Interview"})]})]})]})};var X=function(e){var t=e.interview,n=e.question,i=e.test,r=e.hide,s=e.setHide,j=new FormData,b=Object(c.useState)(""),O=Object(o.a)(b,2),h=O[0],x=O[1],f=Object(c.useState)(""),p=Object(o.a)(f,2),m=p[0],v=p[1],g=Object(c.useRef)(),w=Object(c.useRef)(),y=Object(c.useRef)(),S=Object(c.useState)(!1),C=Object(o.a)(S,2),k=C[0],F=C[1],R=Object(c.useState)(!1),T=Object(o.a)(R,2),E=T[0],I=T[1];return Object(c.useEffect)((function(){m&&fetch("/api/answers",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({link:m,duration:h,interview_id:t.id})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}),[k]),Object(c.useEffect)((function(){setTimeout((function(){g.current.click()}),1e3*n.duration+200)}),[i]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(a.ReactMediaRecorder,{video:!0,audio:!0,onStop:function(e,t){j.append("file",t),j.append("upload_preset","test-video"),j.append("cloud_name","abusel"),u()(t).then((function(e){x(e)})),fetch(" https://api.cloudinary.com/v1_1/abusel/video/upload",{method:"post",body:j}).then((function(e){return e.json()})).then((function(e){v(e.url)})).then((function(){return F((function(e){return!e}))})).catch((function(e){return console.log(e)}))},render:function(e){var t=e.status,c=e.startRecording,i=e.stopRecording,o=e.mediaBlobUrl,a=e.previewStream;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:t}),"recording"===t&&Object(d.jsx)("h2",{children:" Start talking now!"}),Object(d.jsx)("p",{ref:g,onClick:function(){c(),s(!0),setTimeout((function(){y.current.click()}),2e3),I(!0)}}),Object(d.jsx)(l.a,{color:"primary",variant:"outlined",ref:y,style:{display:"none"},onClick:function(){w.current.srcObject=a,w.current.play()},children:"play"}),Object(d.jsx)(l.a,{color:"primary",variant:"contained",onClick:function(){i(),I(!1)},children:"Stop Recording"}),!r&&Object(d.jsx)("video",{src:n.link,autoPlay:!0}),E&&Object(d.jsx)("video",{ref:w,src:o||m,controls:!0,autoplay:!0,width:800}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})}})})};var Z=function(e){var t=e.user,n=Object(c.useState)(""),i=Object(o.a)(n,2),r=i[0],s=i[1],a=Object(c.useState)(""),j=Object(o.a)(a,2),u=j[0],O=j[1],h=Object(c.useState)([]),x=Object(o.a)(h,2),f=x[0],p=x[1],m=Object(c.useState)(0),v=Object(o.a)(m,2),g=v[0],w=v[1],y=Object(c.useState)(!1),S=Object(o.a)(y,2),C=S[0],k=S[1],F=Object(c.useState)(0),R=Object(o.a)(F,2),T=R[0],E=R[1],I=Object(b.useParams)();return Object(c.useEffect)((function(){T&&!f&&fetch("/api/jobs/".concat(r)).then((function(e){return e.json()})).then((function(e){return p(e.questions)}))}),[T]),Object(c.useEffect)((function(){return s(I.jobId)}),[r,I.jobId,s]),Object(c.useEffect)((function(){fetch("/api/jobs/".concat(r)).then((function(e){return e.json()})).then((function(e){return p(e.questions)}))}),[r,s]),Object(d.jsxs)("div",{children:["job_id: ",r,Object(d.jsx)(l.a,{onClick:function(){E((function(e){return e+1})),console.log({jobId:r},f),f&&fetch("/api/interviews",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({job_id:r,user_id:t.id})}).then((function(e){if(e.ok)return e.json()})).then((function(e){return O(e)}))},children:"Start Interview"}),u&&f&&function(e){return e<f.length?Object(d.jsx)(X,{interview:u,question:f[e],test:e,hide:C,setHide:k}):Object(d.jsx)("div",{children:"Done!"})}(g),Object(d.jsx)(l.a,{onClick:function(){w((function(e){return e+1})),k(!1)},children:"Next Question"})]})};var $=function(e){var t=e.interview,n=e.setInterview,i=Object(c.useState)(""),r=Object(o.a)(i,2),a=r[0],j=r[1],u=Object(c.useState)([]),l=Object(o.a)(u,2),O=l[0],h=l[1],x=Object(b.useParams)();return Object(c.useEffect)((function(){fetch("/api/interviews/".concat(x.interviewId)).then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(c.useEffect)((function(){fetch("/api/jobs/".concat(t.job_id)).then((function(e){return e.json()})).then((function(e){return j(e)}))}),[t]),Object(c.useEffect)((function(){if(h([]),a&&t)for(var e=function(e){h((function(t){return[].concat(Object(s.a)(t),[a.questions[e]])})),h((function(n){return[].concat(Object(s.a)(n),[t.answers[e]])}))},n=0;n<t.answers.length;n++)e(n)}),[a]),Object(d.jsxs)(d.Fragment,{children:[t&&Object(d.jsxs)("h2",{children:[t.user.name," interview for ",a.title]}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{children:O.map((function(e){if(O.indexOf(e)%2===0)return Object(d.jsxs)(V.a,{children:[Object(d.jsx)(z.a,{expandIcon:Object(d.jsx)(M.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(d.jsxs)(C.a,{children:["Question ",O.indexOf(e)/2+1]})}),Object(d.jsx)(B.a,{children:Object(d.jsx)(C.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("video",{src:e.link,controls:!0,width:600}),Object(d.jsx)("video",{src:O[O.indexOf(e)+1].link,controls:!0,width:600})]})})})]})}))})]})};var ee=function(e){var t=e.user,n=Object(c.useState)(""),i=Object(o.a)(n,2),r=i[0],s=i[1],a=Object(b.useHistory)();return Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Welcome ",t.name,"!"]}),Object(d.jsx)("p",{children:"Please enter code below to go to an interview! "}),Object(d.jsxs)("div",{children:[Object(d.jsx)(A.a,{placeholder:"Interview Code",value:r,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)(f.a,{onClick:function(){a.push("/interview/".concat(r))},children:"Let's go"})]})]})},te=n(3),ne=n(288),ce=n(289),ie=n(285),re=n(131),oe=n.n(re),se=n(132),ae=n.n(se),je=n(287),ue=n(286),le=n(277),be=n(134),de=n(278),Oe=n(291),he=n(271),xe=n(261),fe=n(262),pe=n(129),me=n.n(pe),ve=n(103),ge=n(130),we=n.n(ge);var ye=function(e){var t=e.state,n=(e.setState,e.toggleDrawer),i=e.logoutFunc,r=Object(ve.useHistory)(),o=function(e){return Object(d.jsx)(S.a,{sx:{width:"top"===e||"bottom"===e?"auto":250},role:"presentation",onClick:n(e,!1),onKeyDown:n(e,!1),children:Object(d.jsxs)(Oe.a,{children:[Object(d.jsxs)(he.a,{button:!0,onClick:i,children:[Object(d.jsx)(xe.a,{children:Object(d.jsx)(me.a,{})}),Object(d.jsx)(fe.a,{primary:"Log Out"})]},"Log Out"),Object(d.jsxs)(he.a,{button:!0,onClick:function(){r.push("/")},children:[Object(d.jsx)(xe.a,{children:Object(d.jsx)(we.a,{})}),Object(d.jsx)(fe.a,{primary:"Home"})]},"Home")]})})};return Object(d.jsx)("div",{children:["left","right","top","bottom"].map((function(e){return Object(d.jsx)(c.Fragment,{children:Object(d.jsx)(de.a,{anchor:e,open:t[e],onClose:n(e,!1),children:o(e)})},e)}))})};var Se=function(e){var t=e.logoutFunc,n=(e.user,Object(ve.useHistory)()),i=c.useState({top:!1,left:!1,bottom:!1,right:!1}),r=Object(o.a)(i,2),s=r[0],a=r[1],j=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&a(Object(h.a)(Object(h.a)({},s),{},Object(te.a)({},e,t)))}},u=c.useState(!0),l=Object(o.a)(u,2),b=l[0],O=l[1],x=c.useState(null),f=Object(o.a)(x,2),p=f[0],m=f[1],g=function(){m(null)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ye,{state:s,setState:a,toggleDrawer:j,logoutFunc:t}),Object(d.jsxs)(S.a,{sx:{flexGrow:1},children:[Object(d.jsx)(ue.a,{children:Object(d.jsx)(v.a,{control:Object(d.jsx)(je.a,{checked:b,onChange:function(e){O(e.target.checked)},"aria-label":"login switch"}),label:b?"Logout":"Login"})}),Object(d.jsx)(ne.a,{position:"static",children:Object(d.jsxs)(ce.a,{children:[Object(d.jsx)(ie.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(d.jsx)(oe.a,{onClick:j("left",!0)})}),Object(d.jsx)(C.a,{variant:"h6",component:"div",sx:{flexGrow:1,cursor:"pointer"},onClick:function(){n.push("/")},children:"Interview Anywhere"}),b&&Object(d.jsxs)("div",{children:[Object(d.jsx)(ie.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit",children:Object(d.jsx)(ae.a,{})}),Object(d.jsxs)(be.a,{id:"menu-appbar",anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(p),onClose:g,children:[Object(d.jsx)(le.a,{onClick:g,children:"Profile"}),Object(d.jsx)(le.a,{onClick:g,children:"My account"})]})]})]})})]})]})};function Ce(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),a=s[0],j=s[1],u=Object(c.useState)(""),l=Object(o.a)(u,2),O=l[0],h=l[1],x=Object(c.useState)(""),f=Object(o.a)(x,2),p=f[0],m=f[1],v=Object(b.useHistory)();function g(){fetch("/api/logout",{method:"DELETE"}).then((function(e){return console.log(e)})),j(""),v.push("/")}return Object(c.useEffect)((function(){fetch("/api/videos").then((function(e){return e.json()})).then((function(e){return i(e)})),fetch("/api/me").then((function(e){e.ok&&e.json().then((function(e){return j(e)}))}))}),[]),a?a.is_company?Object(d.jsxs)(b.Switch,{children:[Object(d.jsx)(b.Route,{exact:!0,path:"/",children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(Se,{logoutFunc:g,user:a}),a.name,Object(d.jsx)(D,{user:a,setJob:h})]})}),Object(d.jsxs)(b.Route,{exact:!0,path:"/create",children:[Object(d.jsx)(Se,{logoutFunc:g,user:a}),Object(d.jsx)(U,{user:a,job:O,setJob:h})]}),Object(d.jsxs)(b.Route,{exact:!0,path:"/create/:createdJob",children:[Object(d.jsx)(Se,{logoutFunc:g,user:a}),Object(d.jsx)(K,{job:O,setJob:h,adding:!0})]}),Object(d.jsxs)(b.Route,{exact:!0,path:"/:job",children:[Object(d.jsx)(Se,{logoutFunc:g,user:a}),Object(d.jsx)(K,{job:O,setJob:h,adding:!1,interview:p,setInterview:m})]}),Object(d.jsxs)(b.Route,{exact:!0,path:"/interview/:interviewId",children:[Object(d.jsx)(Se,{logoutFunc:g,user:a}),Object(d.jsx)($,{user:a,interview:p,setInterview:m})]})]}):a.is_company?void 0:Object(d.jsxs)(b.Switch,{children:[Object(d.jsxs)(b.Route,{exact:!0,path:"/",children:[Object(d.jsx)(Se,{logoutFunc:g,user:a}),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(ee,{user:a}),n[0]&&n.map((function(e){return Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("video",{src:e.url,controls:!0,width:800})," ",Object(d.jsx)("p",{children:e.duration})]},e.id)}))]})]}),Object(d.jsxs)(b.Route,{exact:!0,path:"/interview/:jobId",children:[Object(d.jsx)(Se,{logoutFunc:g,user:a}),Object(d.jsx)(Z,{user:a})]})]}):Object(d.jsx)("div",{className:"app",children:Object(d.jsxs)(b.Switch,{children:[Object(d.jsxs)(b.Route,{exact:!0,path:"/",children:[Object(d.jsx)(I,{user:a,setUser:j}),a.name]}),Object(d.jsx)(b.Route,{exact:!0,path:"/login",children:Object(d.jsx)(_,{setUser:j})})]})})}r.a.render(Object(d.jsx)(q.a,{children:Object(d.jsx)(Ce,{})}),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.5b861d1e.chunk.js.map