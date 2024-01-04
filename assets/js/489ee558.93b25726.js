"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[153],{406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(5893),o=n(1151);const s={title:"Large Language Model (LLM)",slug:"/llms"},r=void 0,i={id:"concepts/Understand-LLMs",title:"Large Language Model (LLM)",description:"A large language model (LLM) is a type of AI that can process and produce natural language text. It learns from a massive amount of text data such as books, articles, and web pages to discover patterns and rules of language from them.",source:"@site/docs/03-concepts/2-Understand-LLMs.md",sourceDirName:"03-concepts",slug:"/llms",permalink:"/Workshop-Interact-with-OpenAI-models/llms",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Large Language Model (LLM)",slug:"/llms"},sidebar:"tutorialSidebar",previous:{title:"AI Models & Deployments",permalink:"/Workshop-Interact-with-OpenAI-models/ai-models"},next:{title:"Tokenization",permalink:"/Workshop-Interact-with-OpenAI-models/tokenization"}},l={},d=[{value:"How large is an LLM?",id:"how-large-is-an-llm",level:3},{value:"What are &quot;Foundational Models&quot;?",id:"what-are-foundational-models",level:3},{value:"How does LLM differ from NLP?",id:"how-does-llm-differ-from-nlp",level:3},{value:"What doesn&#39;t a LLM do?",id:"what-doesnt-a-llm-do",level:3}];function c(e){const t={em:"em",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"A large language model (LLM) is a type of AI that can process and produce natural language text. It learns from a massive amount of text data such as books, articles, and web pages to discover patterns and rules of language from them."}),"\n",(0,a.jsx)(t.h3,{id:"how-large-is-an-llm",children:"How large is an LLM?"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Alt Text",src:n(7127).Z+"",width:"2030",height:"1128"})}),"\n",(0,a.jsxs)(t.p,{children:["An LLM is built using a ",(0,a.jsx)(t.strong,{children:"neural network architecture"}),". It takes an input, has a number of hidden layers that break down different aspects of language, and then an output layer. People often report how the next foundational model is bigger than the last - what does this mean? The more parameters a model has, the more data it can process, learn from, and generate."]}),"\n",(0,a.jsxs)(t.p,{children:["For each connection between two neurons of the neural network architecture, there is a function: ",(0,a.jsx)(t.em,{children:"weight * input + bias"}),".  These produce numerical values that determine how the model processes language. They are rather large - reporting millions of parameters in 2018 to trillions of parameters calculated in 2023 (by GPT4)."]}),"\n",(0,a.jsx)(t.h3,{id:"what-are-foundational-models",children:'What are "Foundational Models"?'}),"\n",(0,a.jsxs)(t.p,{children:["A foundation model refers to a specific instance or version of an LLM, such as GPT-3, GPT-4 or Codex, that has been trained and fine-tuned on a large corpus of text or code (in the case of the Codex model). It takes in training data in all different formats and uses a ",(0,a.jsx)(t.strong,{children:"transformer architecture"})," to build a general model. From there adaptions and specializations can be created to achieve certain tasks via prompting or fine-tuning."]}),"\n",(0,a.jsx)(t.h3,{id:"how-does-llm-differ-from-nlp",children:"How does LLM differ from NLP?"}),"\n",(0,a.jsx)(t.p,{children:"How does a Large Language model differ from traditional Natural Language Processing (NLP) solutions? The table below provides some measures for comparison."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Traditional NLP"}),(0,a.jsx)(t.th,{children:"Large Language Models"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Needs one model per capability."}),(0,a.jsx)(t.td,{children:"Reuse single model for many NLP use cases"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Model trained on a finite set of labelled data"}),(0,a.jsx)(t.td,{children:"Foundation model trained on many TBs of unlabelled data"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Highly optimized for specific use case"}),(0,a.jsx)(t.td,{children:'Open-ended usage - use natural language to "prompt" the model to do something'})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"what-doesnt-a-llm-do",children:"What doesn't a LLM do?"}),"\n",(0,a.jsx)(t.p,{children:"While large language models drive rich and powerful generative AI experiences, it's important to remember that the LLM:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Does NOT Understand language."})," It's just a predictive engine. Based on text patterns it has previously seen, it can ",(0,a.jsx)(t.em,{children:"predict completions"})," for the given text input. It does not understand the context or meaning of that content - e,g, it does not understand math."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Does NOT Understand facts."})," There are no separate 'modes' for ",(0,a.jsx)(t.em,{children:"information retrieval"})," vs. ",(0,a.jsx)(t.em,{children:"creative writing"}),". The model just predicts the next most probable token in the ongoing sequence."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Does NOT Understand manners, emotion or ethics."})," Don't ",(0,a.jsx)(t.em,{children:"anthropomorphize"}),' LLMs by attributing human characteristics to them, or claiming they "understand" something. The output is simply the outcome of training data guided by the given prompts.']}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},7127:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/llm-001-da6e9df83e520a18f43984ad5118b9a7.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(7294);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);