"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[955],{7046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(5893),s=n(1151);const r={},i="Conversation history",a={id:"Part-1-labs/Conversation-history",title:"Conversation history",description:"Consumer conversational AI services like ChatGPT and Bing Chat use a trick to make the AI agent seem to remember the context of the conversation. The trick is that the foundation model is given the whole chat history at each turn, not just the latest prompt, but the user does not see this. An AI model cannot learn and has no memory of previous interactions if the user leaves and comes back but the application is using prompt engineering to add this 'memory'",source:"@site/docs/04-Part-1-labs/2-Conversation-history.md",sourceDirName:"04-Part-1-labs",slug:"/Part-1-labs/Conversation-history",permalink:"/Workshop-Interact-with-OpenAI-models/Part-1-labs/Conversation-history",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Prompting",permalink:"/Workshop-Interact-with-OpenAI-models/Part-1-labs/Basic-Prompting"},next:{title:"Prompt engineering techniques",permalink:"/Workshop-Interact-with-OpenAI-models/Part-1-labs/Prompt-engineering-techniques"}},h={},c=[];function d(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"conversation-history",children:"Conversation history"}),"\n",(0,o.jsx)(t.admonition,{title:"How to remember context?",type:"tip",children:(0,o.jsx)(t.p,{children:"Consumer conversational AI services like ChatGPT and Bing Chat use a trick to make the AI agent seem to remember the context of the conversation. The trick is that the foundation model is given the whole chat history at each turn, not just the latest prompt, but the user does not see this. An AI model cannot learn and has no memory of previous interactions if the user leaves and comes back but the application is using prompt engineering to add this 'memory'"})}),"\n",(0,o.jsx)(t.p,{children:"Let's see for ourselves how we can have a conversation with context."}),"\n",(0,o.jsx)(t.p,{children:"Try a conversation like this, enter the text below:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"How many neutrons are in a hydrogen nucleus?\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.strong,{children:"Send"}),". The AI agent will respond with something like:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"A hydrogen nucleus (also called a proton) has 0 neutrons.\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Without clearing the chat session"}),", add this response in the Chat Session:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What about the isotopes?\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Click ",(0,o.jsx)(t.strong,{children:"Send"}),". The agent will respond with an answer involving isotopes of hydrogen: deuterium (one neutron) and tritium (two neutrons). Even though your second prompt did not mention hydrogen or neutrons, the response used the context of the chat to provide a more useful answer."]}),"\n",(0,o.jsx)(t.p,{children:"The key here is sending previous prompts back into the next request provides the model with more context and grounding and therefore providing a more valuable answer to the end user."}),"\n",(0,o.jsx)(t.p,{children:"Now do clear the chat session, and then once again send the prompt:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What about the isotopes?\n"})}),"\n",(0,o.jsx)(t.p,{children:"Without the context of the prior messages, the model responds with a generalized answer about isotopes."}),"\n",(0,o.jsx)(t.admonition,{title:"Assignment",type:"info",children:(0,o.jsx)(t.p,{children:"Try having a conversation and make the model remember your name birthdate."})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(7294);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);