import { createClient } from '@sanity/client'
const c=createClient({projectId:'n0k6o0ax',dataset:'production',apiVersion:'2024-04-29',token:process.env.SANITY_WRITE_TOKEN,useCdn:false})
const p=await c.fetch('*[_type=="profile"][0]{_id,homeDescription}')
console.log(JSON.stringify(p.homeDescription,null,2))
const newDesc={ _type:'localeText', en:'Building AI-driven ecosystems that scale. I believe in using technology to handle the how, so we can focus on the why: human-centric strategy and projects with social purpose.', es:'Construyo ecosistemas de IA que escalan. Creo en usar la tecnología para resolver el cómo, y enfocarnos en el por qué: estrategia humana y proyectos con propósito social.', jp:p.homeDescription.jp }
await c.patch(p._id).set({homeDescription:newDesc}).commit()
console.log('patched homeDescription')
