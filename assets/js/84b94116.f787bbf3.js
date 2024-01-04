"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97],{4505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(5893),r=n(1151);const s={},a="Create Images",o={id:"labs/Create-Images",title:"Create Images",description:"The Azure OpenAI service includes the DALL-E model, which you can use to generate original images based on natural language prompts.",source:"@site/docs/04-labs/6-Create-Images.md",sourceDirName:"04-labs",slug:"/labs/Create-Images",permalink:"/Workshop-Interact-with-OpenAI-models/labs/Create-Images",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Function Calling",permalink:"/Workshop-Interact-with-OpenAI-models/labs/Function-Calling"},next:{title:"What We've Learned",permalink:"/Workshop-Interact-with-OpenAI-models/summary"}},c={},l=[{value:"What is DALL-E?",id:"what-is-dall-e",level:2},{value:"Be specific",id:"be-specific",level:2},{value:"Best practices",id:"best-practices",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"create-images",children:"Create Images"}),"\n",(0,i.jsx)(t.p,{children:"The Azure OpenAI service includes the DALL-E model, which you can use to generate original images based on natural language prompts."}),"\n",(0,i.jsx)(t.h2,{id:"what-is-dall-e",children:"What is DALL-E?"}),"\n",(0,i.jsx)(t.p,{children:"DALL-E is a neural network based model that can generate graphical data from natural language input. Put more simply, you can provide DALL-E with a description and it can generate an appropriate image."}),"\n",(0,i.jsx)(t.p,{children:"For example, you might submit the following natural language prompt to DALL-E:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",metastring:'title="User message"',children:"A squirrel on a motorcycle\n"})}),"\n",(0,i.jsx)(t.p,{children:"This prompt could result in the generation of graphical output such as the following image:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"squirrel",src:n(6377).Z+"",width:"1024",height:"1024"})}),"\n",(0,i.jsx)(t.p,{children:"The images generated by DALL-E are original; they are not retrieved from a curated image catalog. In other words, DALL-E is not a search system for finding appropriate images - it is an artificial intelligence (AI) model that generates new images based on the data on which it was trained."}),"\n",(0,i.jsx)(t.h2,{id:"be-specific",children:"Be specific"}),"\n",(0,i.jsxs)(t.p,{children:["In the Prompt box, enter a description of an image you\u2019d like to generate. For example, ",(0,i.jsx)(t.strong,{children:"An elephant on a skateboard"})," Then select Generate and view the image that is generated."]}),"\n",(0,i.jsxs)(t.p,{children:["Modify the prompt to provide a more specific description. For example ",(0,i.jsx)(t.strong,{children:"An elephant on a skateboard in the style of Picasso"}),". Then generate the new image and review the results."]}),"\n",(0,i.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsx)(t.p,{children:"To create effective and accurate images with DALL-E, here are some best practices to follow:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Clear and descriptive prompts"}),": Craft your text prompts to be clear and detailed. The more specific you are with your description, the more likely DALL-E will generate an image that matches your request. Include attributes such as the subject, action, environment, style, and any important details."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Use of adjectives"}),": Employ adjectives and adverbs to describe the qualities, emotions, and characteristics you want the image to convey. This helps in refining the generated image to better match your vision."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Balance detail with simplicity"}),": While details are important, overly complicated or contradictory prompts can confuse the AI, leading to unexpected results. Aim for a balance where your description provides enough context without being overly convoluted."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Experiment with different styles"}),": Specify artistic styles or influences if you want your image to have a particular aesthetic. For example, you could ask for an image in the style of Van Gogh or a futuristic concept art."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Iterative approach"}),": Often, the first image generated may not be perfect. Use it as a starting point and iteratively refine your prompt based on the output to get closer to your desired result."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Aspect ratio and composition"}),": If you have a preference for the image\u2019s composition or aspect ratio, include it in your prompt. For example, you might request a landscape-oriented image or a portrait with a subject off-center."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Cultural and contextual references"}),": If appropriate, include cultural or historical references to provide additional context that can help guide the image generation process."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Ethical considerations"}),": Be mindful of the ethical implications of your prompts. Avoid creating images that are offensive, perpetuate stereotypes, or infringe on copyrights."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Testing and learning"}),": Experiment with different prompts to understand how DALL-E interprets various descriptions. This learning process can help you improve the precision of your prompts over time."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Following guidelines"}),": Adhere to OpenAI's use-case policy and content guidelines when creating prompts. Avoid requesting images that are not allowed as per OpenAI's content policy."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Remember that AI image generation is still an evolving technology, and sometimes it may require a bit of trial and error to get the desired outcome. By following these best practices, you can improve your chances of creating high-quality images with DALL-E."}),"\n",(0,i.jsx)(t.admonition,{title:"Assignment",type:"tip",children:(0,i.jsx)(t.p,{children:"Have fun creating images, try and create images in different styles"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6377:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/squirrel-10f999d1fa1189e9d3e21effd0582be2.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(7294);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);