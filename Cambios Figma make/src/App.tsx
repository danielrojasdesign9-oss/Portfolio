import { useState } from 'react';

const assetPathPrefix = "/assets";

const imgDanielRojas = `${assetPathPrefix}/e8bf6.png`;
const imgTir = `${assetPathPrefix}/8c021.png`;
const imgESigner = `${assetPathPrefix}/c0cd1.png`;
const imgSilin = `${assetPathPrefix}/53ee0.png`;
const imgLinklight = `${assetPathPrefix}/bbcf5.png`;
const imgInnu = `${assetPathPrefix}/1b270.png`;
const imgPaycool = `${assetPathPrefix}/82cd6.png`;
const imgTelemedCareAtHome = `${assetPathPrefix}/2627f.png`;
const imgFashionDtcTextileReviews = `${assetPathPrefix}/e5615.png`;
const imgEmailIcon = `${assetPathPrefix}/b9953.svg`;
const imgLinkedInIcon = `${assetPathPrefix}/6df9d.svg`;
const imgGitHubIcon = `${assetPathPrefix}/1960a.svg`;
const imgArrowIcon = `${assetPathPrefix}/a0f1b.svg`;
const imgGridIcon = `${assetPathPrefix}/4af42.svg`;
const imgCarouselIcon = `${assetPathPrefix}/dc025.svg`;
const imgEmailCTAIcon = `${assetPathPrefix}/6c0f2.svg`;
const imgLinkedInCTAIcon = `${assetPathPrefix}/75052.svg`;
const imgWhatsAppIcon = `${assetPathPrefix}/8d810.svg`;
const imgLightIcon = `${assetPathPrefix}/e687b.svg`;
const imgDarkIcon = `${assetPathPrefix}/2107e.svg`;
const imgSystemIcon = `${assetPathPrefix}/1754c.svg`;
const imgSettingsIcon = `${assetPathPrefix}/d5ec4.svg`;

const IBM_VAR = { fontVariationSettings: '"wdth" 100' } as const;

interface Project {
  id: string;
  title: string;
  num: string;
  desc: string;
  img: string;
  href: string;
  category: string;
  year?: string;
  imgCls: string;
}

const projects: Project[] = [
  {
    id: 'tir', title: 'TIR', num: '01', desc: 'Tax information reporting',
    img: imgTir, href: 'https://portfolio-ai-previ-git-585c56-danielrojasdesign9-5553s-projects.vercel.app/work/tir',
    category: 'tir',
    imgCls: 'absolute max-w-none h-[111.89%] left-0 top-0 w-full',
  },
  {
    id: 'esigner', title: 'E-Signer', num: '02', desc: 'Advanced electronic signature.',
    img: imgESigner, href: 'https://portfolio-ai-previ-git-585c56-danielrojasdesign9-5553s-projects.vercel.app/work/e-signer',
    category: 'esigner',
    imgCls: 'absolute max-w-none h-[111.89%] left-0 top-0 w-full',
  },
  {
    id: 'linklight', title: 'Linklight', num: '04', desc: 'Assertive Communication.',
    img: imgLinklight, href: 'https://portfolio-ai-previ-git-585c56-danielrojasdesign9-5553s-projects.vercel.app/work/linklight',
    category: 'assertive',
    imgCls: 'absolute max-w-none h-[111.89%] left-0 top-0 w-full',
  },
  {
    id: 'innu', title: 'Innu', num: '05', desc: 'Innovation culture management',
    img: imgInnu, href: 'https://portfolio-ai-previ-git-585c56-danielrojasdesign9-5553s-projects.vercel.app/work/innu',
    category: 'innovation',
    imgCls: 'absolute max-w-none h-[111.89%] left-0 top-0 w-full',
  },
  {
    id: 'silin', title: 'Silin', num: '03', desc: 'Tax reporting',
    img: imgSilin, href: 'https://portfolio-ai-previ-git-585c56-danielrojasdesign9-5553s-projects.vercel.app/work/silin',
    category: 'tir',
    imgCls: 'absolute max-w-none h-[111.89%] left-0 top-0 w-full',
  },
  {
    id: 'paycool', title: 'Paycool', num: '06', desc: 'Banking - Gamification',
    img: imgPaycool, href: 'https://portfolio-ai-previ-git-585c56-danielrojasdesign9-5553s-projects.vercel.app/work/paycool',
    category: 'banking',
    imgCls: 'absolute max-w-none h-[111.89%] left-0 top-0 w-full',
  },
  {
    id: 'telemed', title: 'Telemed — Care at home', num: '07', desc: 'Telemedicine',
    img: imgTelemedCareAtHome, href: 'https://portfolio-ai-previ-git-585c56-danielrojasdesign9-5553s-projects.vercel.app/work/telemed',
    category: 'telemedicine', year: '2026',
    imgCls: 'absolute max-w-none h-full top-0 w-[187.97%] left-[-43.99%]',
  },
  {
    id: 'fashion', title: 'Fashion DTC — Textile Reviews', num: '08', desc: 'Fashion E-commerce',
    img: imgFashionDtcTextileReviews, href: 'https://portfolio-ai-previ-git-585c56-danielrojasdesign9-5553s-projects.vercel.app/work/fashion-dtc',
    category: 'fashion', year: '2026',
    imgCls: 'absolute max-w-none h-full top-0 w-[187.97%] left-[-43.99%]',
  },
];

const filters = [
  { id: 'all', label: 'All projects' },
  { id: 'tir', label: 'Tax information reporting' },
  { id: 'esigner', label: 'Advanced electronic signature' },
  { id: 'assertive', label: 'Assertive Communication' },
  { id: 'innovation', label: 'Innovation culture management' },
  { id: 'banking', label: 'Banking - Gamification' },
  { id: 'telemedicine', label: 'Telemedicine' },
  { id: 'fashion', label: 'Fashion E-commerce' },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');

  const visible = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white min-h-screen">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <header
        data-node-id="1:343"
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[6px] bg-[rgba(255,255,255,0.96)] h-16 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
      >
        <div className="h-full max-w-[1853px] mx-auto px-6 relative flex items-center justify-between">

          {/* Left nav */}
          <nav className="flex gap-12 items-center" data-node-id="1:344">
            <a
              href="#"
              data-node-id="1:345"
              className="relative bg-[#f0f0f0] py-[3px] px-0"
            >
              <span
                className="font-ibm-plex-regular text-[16px] text-black tracking-[1.28px] uppercase leading-none"
                style={IBM_VAR}
              >Home</span>
              <span className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-black rounded-[2px]" data-node-id="1:347" />
            </a>
            <a
              href="#"
              className="font-ibm-plex-regular text-[16px] text-black tracking-[1.28px] uppercase leading-none"
              style={IBM_VAR}
            >Work</a>
            <a
              href="#"
              className="font-ibm-plex-regular text-[16px] text-black tracking-[1.28px] uppercase leading-none"
              style={IBM_VAR}
            >About</a>
          </nav>

          {/* Center name */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" data-node-id="1:362">
            <a
              href="#"
              className="font-ibm-plex-bold font-bold text-[16px] text-black tracking-[1.28px] uppercase leading-none"
              style={IBM_VAR}
            >Daniel Rojas</a>
          </div>

          {/* Right nav */}
          <div className="flex gap-5 items-center" data-node-id="1:349">
            <nav className="flex gap-5 items-center" data-node-id="1:350">
              <a
                href="#"
                className="font-ibm-plex-regular text-[16px] text-black tracking-[1.28px] uppercase leading-none"
                style={IBM_VAR}
              >Lab</a>
              <a
                href="#"
                className="font-ibm-plex-regular text-[16px] text-black tracking-[1.28px] uppercase leading-none"
                style={IBM_VAR}
              >Resources</a>
              <a
                href="#contact"
                className="font-ibm-plex-regular text-[16px] text-black tracking-[1.28px] uppercase leading-none"
                style={IBM_VAR}
              >Contact</a>
            </nav>
            <button
              data-node-id="1:358"
              className="bg-[#f0f0f0] border border-[#666] flex items-center justify-center size-10"
            >
              <img src={imgSettingsIcon} alt="Settings" className="size-5" />
            </button>
          </div>

        </div>
      </header>

      <main>

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section data-node-id="1:110" className="pt-[88px]">
          <div className="max-w-[1400px] mx-auto px-8 py-20">
            <div className="flex gap-20 items-start">

              {/* Left: photo + social links */}
              <div
                data-node-id="1:113"
                className="flex flex-col justify-between shrink-0"
                style={{ width: 'min(700px, 45%)' }}
              >
                <div
                  data-node-id="1:115"
                  className="relative overflow-hidden rounded-[8px]"
                  style={{ height: '515px' }}
                >
                  <img
                    alt="Daniel Rojas"
                    src={imgDanielRojas}
                    className="absolute"
                    style={{ height: '150%', left: '4.24%', top: '-25.09%', width: '95.76%', maxWidth: 'none' }}
                  />
                </div>

                <div
                  data-node-id="1:118"
                  className="flex flex-wrap gap-x-10 items-center justify-end mt-6"
                >
                  <span
                    data-node-id="1:120"
                    className="font-ibm-plex-bold font-bold text-[#444] text-[11px] tracking-[1.65px] uppercase leading-[16.5px]"
                    style={IBM_VAR}
                  >Connect</span>

                  <div className="flex gap-10 items-center" data-node-id="1:121">
                    <a
                      href="mailto:danielrojasdesign9@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center"
                      data-node-id="1:122"
                    >
                      <img src={imgEmailIcon} alt="" className="size-5" />
                      <span className="font-ibm-plex-medium font-medium text-[#333] text-[14px] leading-[20px]" style={IBM_VAR}>Email</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/danielrojas010/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center"
                      data-node-id="1:127"
                    >
                      <img src={imgLinkedInIcon} alt="" className="size-5" />
                      <span className="font-ibm-plex-medium font-medium text-[#333] text-[14px] leading-[20px]" style={IBM_VAR}>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/danielrojasdesign"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center"
                      data-node-id="1:132"
                    >
                      <img src={imgGitHubIcon} alt="" className="size-5" />
                      <span className="font-ibm-plex-medium font-medium text-[#333] text-[14px] leading-[20px]" style={IBM_VAR}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: headline + description + CTAs */}
              <div className="flex flex-col gap-10 flex-1 min-w-0" data-node-id="1:137">
                <div className="flex flex-col gap-10" data-node-id="1:138">
                  <h1
                    data-node-id="1:140"
                    className="font-space-grotesk font-black text-black"
                    style={{ fontSize: '76px', letterSpacing: '-3.8px', lineHeight: '69.92px' }}
                  >
                    I make human<br />
                    experiences<br />
                    feel memorable,<br />
                    intuitive, and<br />
                    visually striking.
                  </h1>
                  <p
                    data-node-id="1:142"
                    className="font-ibm-plex-medium font-medium text-[#333]"
                    style={{ fontSize: '20px', lineHeight: '33px', maxWidth: '576px', ...IBM_VAR }}
                  >
                    Building AI-driven ecosystems that scale. I design agent-ready
                    systems with tokens and docs for SaaS and Fintech — bridging
                    product, business and engineering through conversational
                    interfaces and LLM automations.
                  </p>
                </div>

                <div className="flex gap-4 items-start" data-node-id="1:143">
                  <a
                    href="#contact"
                    data-node-id="1:144"
                    className="relative bg-[#393939] border border-transparent rounded-[8px] min-h-[48px] flex items-center pl-4 pr-[63px] py-[14px] shrink-0"
                  >
                    <span className="font-ibm-plex-regular text-[14px] text-white tracking-[0.16px] leading-[18px]" style={IBM_VAR}>Let's Talk</span>
                    <img src={imgArrowIcon} alt="" className="absolute right-4 size-4" style={{ top: '14.99px' }} />
                  </a>
                  <a
                    href="#"
                    data-node-id="1:148"
                    className="relative bg-[#0f62fe] border border-transparent rounded-[8px] min-h-[48px] flex items-center pl-4 pr-[63px] py-[14px] shrink-0"
                  >
                    <span className="font-ibm-plex-regular text-[14px] text-white tracking-[0.16px] leading-[18px]" style={IBM_VAR}>About Me</span>
                    <img src={imgArrowIcon} alt="" className="absolute right-4 size-4" style={{ top: '14.99px' }} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Projects ───────────────────────────────────────────────── */}
        <section id="projects" data-node-id="1:152">
          <div className="max-w-[1400px] mx-auto px-8 pt-10 pb-8">

            {/* Section header row */}
            <div className="flex gap-4 items-end justify-between mb-6" data-node-id="1:153">
              <div className="flex flex-col gap-[15px]" data-node-id="1:154">
                <div
                  data-node-id="1:156"
                  className="font-ibm-plex-bold font-bold text-[#333] text-[20px] leading-[33px]"
                  style={IBM_VAR}
                >Selected work</div>
                <h2
                  data-node-id="1:158"
                  className="font-space-grotesk font-black text-black"
                  style={{ fontSize: '72px', letterSpacing: '-3.6px', lineHeight: '63.36px' }}
                >Projects</h2>
                <p
                  data-node-id="1:160"
                  className="font-ibm-plex-regular text-[#333] text-[18px] leading-[28px]"
                  style={IBM_VAR}
                >Case studies across product, systems, and AI-assisted delivery.</p>
              </div>

              {/* View mode toggle */}
              <div
                data-node-id="1:161"
                className="bg-white border border-[#222] rounded-[12px] flex gap-1 items-center p-[5px] shrink-0"
              >
                <button
                  data-node-id="1:162"
                  onClick={() => setViewMode('grid')}
                  className={`rounded-[12px] flex gap-2 items-center px-4 py-2 transition-colors ${viewMode === 'grid' ? 'bg-black' : ''}`}
                >
                  <img src={imgGridIcon} alt="" className="size-4" />
                  <span
                    data-node-id="1:168"
                    className={`font-ibm-plex-bold font-bold text-[11px] tracking-[1.32px] uppercase leading-[11px] ${viewMode === 'grid' ? 'text-white' : 'text-black'}`}
                    style={IBM_VAR}
                  >GRID</span>
                </button>
                <button
                  data-node-id="1:169"
                  onClick={() => setViewMode('carousel')}
                  className={`rounded-full flex gap-2 items-center px-4 py-2 transition-colors ${viewMode === 'carousel' ? 'bg-black' : ''}`}
                >
                  <img src={imgCarouselIcon} alt="" className="size-4" />
                  <span
                    data-node-id="1:174"
                    className={`font-ibm-plex-bold font-bold text-[11px] tracking-[1.32px] uppercase leading-[11px] ${viewMode === 'carousel' ? 'text-white' : 'text-black'}`}
                    style={IBM_VAR}
                  >CAROUSEL</span>
                </button>
              </div>
            </div>

            {/* Filters */}
            <div
              data-node-id="1:176"
              className="border-t border-[rgba(0,0,0,0.2)] pt-10 flex flex-wrap gap-x-2 gap-y-3 items-center mb-6"
            >
              <span
                data-node-id="1:177"
                className="font-ibm-plex-regular text-[#333] text-[18px] leading-[28px] mr-2"
                style={IBM_VAR}
              >Filter by:</span>
              {filters.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`border rounded-full h-[29px] flex items-center justify-center px-4 py-2 transition-colors ${
                    activeFilter === f.id ? 'bg-black border-black' : 'border-[#222] bg-transparent'
                  }`}
                >
                  <span
                    className={`font-ibm-plex-bold font-bold text-[11px] tracking-[1.32px] uppercase leading-[11px] ${activeFilter === f.id ? 'text-white' : 'text-[#333]'}`}
                    style={IBM_VAR}
                  >{f.label}</span>
                </button>
              ))}
            </div>

            {/* Project cards */}
            <div className="pt-6" data-node-id="1:194">
              {viewMode === 'grid' ? (
                <div
                  data-node-id="1:195"
                  className="grid grid-cols-4 gap-x-8 gap-y-6"
                >
                  {visible.map(p => <ProjectCard key={p.id} project={p} />)}
                </div>
              ) : (
                <div className="flex gap-8 overflow-x-auto pb-4">
                  {visible.map(p => (
                    <div key={p.id} className="shrink-0 w-72">
                      <ProjectCard project={p} />
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </section>

        {/* ── Contact CTA ─────────────────────────────────────────────── */}
        <section id="contact" data-node-id="1:280">
          <div className="max-w-[1400px] mx-auto px-8 pt-16 pb-8 border-t border-[#b8b8b8]">
            <div className="flex gap-20 items-end flex-wrap">

              {/* Left */}
              <div className="flex flex-col gap-[23px] shrink-0" style={{ width: 'min(448px, 100%)' }} data-node-id="1:281">
                <p
                  data-node-id="1:283"
                  className="font-ibm-plex-medium font-medium text-[#333] text-[20px] leading-[33px]"
                  style={IBM_VAR}
                >Let's work together</p>
                <h2
                  data-node-id="1:285"
                  className="font-space-grotesk font-black text-black"
                  style={{ fontSize: '72px', letterSpacing: '-3.6px', lineHeight: '64.8px' }}
                >
                  Have a brief,<br />not a form.
                </h2>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-6 items-start flex-1 min-w-0" data-node-id="1:286">
                <p
                  data-node-id="1:288"
                  className="font-ibm-plex-regular text-[#333] text-[18px] leading-[29.7px]"
                  style={IBM_VAR}
                >
                  Write directly. I reply to email, LinkedIn, and WhatsApp — no empty inbox theater.
                </p>
                <div className="flex gap-10 items-center flex-wrap" data-node-id="1:289">
                  <a
                    href="mailto:danielrojasdesign9@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-node-id="1:291"
                    className="bg-[#0f62fe] border border-transparent rounded-[8px] min-h-[48px] flex items-center gap-4 px-4 py-[15px] w-[206px]"
                  >
                    <img src={imgEmailCTAIcon} alt="" className="size-4 shrink-0" />
                    <span className="font-ibm-plex-regular text-[14px] text-white tracking-[0.16px] leading-[18px]" style={IBM_VAR}>Email</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/danielrojas010/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-node-id="1:296"
                    className="bg-[#393939] border border-transparent rounded-[8px] min-h-[48px] flex items-center gap-4 pl-[15px] pr-16 py-[14px] w-[276px]"
                  >
                    <img src={imgLinkedInCTAIcon} alt="" className="size-4 shrink-0" />
                    <span className="font-ibm-plex-regular text-[14px] text-white tracking-[0.16px] leading-[18px]" style={IBM_VAR}>LinkedIn</span>
                  </a>
                  <a
                    href="https://wa.me/573174446641"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-node-id="1:300"
                    className="border border-[#0f62fe] rounded-[8px] min-h-[48px] flex items-center gap-4 px-4 py-[15px] w-[250px]"
                  >
                    <img src={imgWhatsAppIcon} alt="" className="size-4 shrink-0" />
                    <span className="font-ibm-plex-regular text-[#0f62fe] text-[14px] tracking-[0.16px] leading-[18px]" style={IBM_VAR}>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer data-node-id="1:306" className="border-t border-[#b8b8b8] py-10">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center gap-12 flex-wrap" data-node-id="1:307">

          <p
            data-node-id="1:310"
            className="font-ibm-plex-regular text-[#444] text-[11px] tracking-[4.4px] leading-[16.5px] uppercase flex-1 min-w-[200px]"
            style={IBM_VAR}
          >© 2024 2026 ALL RIGHTS RESERVED</p>

          <div className="flex gap-6 items-center flex-wrap" data-node-id="1:311">

            {/* Theme */}
            <div className="flex gap-2 items-center pr-6 border-r border-[#b8b8b8]" data-node-id="1:312">
              <button data-node-id="1:313" className="bg-black flex items-center justify-center p-2 rounded-full">
                <img src={imgLightIcon} alt="Light theme" className="size-4" />
              </button>
              <button data-node-id="1:324" className="flex items-center justify-center p-2 rounded-full">
                <img src={imgDarkIcon} alt="Dark theme" className="size-4" />
              </button>
              <button data-node-id="1:327" className="flex items-center justify-center p-2 rounded-full">
                <img src={imgSystemIcon} alt="System theme" className="size-4" />
              </button>
            </div>

            {/* Language */}
            <div className="flex gap-2 items-center px-6 border-r border-[#b8b8b8]" data-node-id="1:330">
              <button data-node-id="1:331" className="bg-black flex items-center justify-center px-4 py-[6px] rounded-full">
                <span className="font-ibm-plex-medium font-medium text-[14px] text-white leading-[20px]" style={IBM_VAR}>English</span>
              </button>
              <button data-node-id="1:333" className="flex items-center justify-center px-4 py-[6px] rounded-full">
                <span className="font-ibm-plex-medium font-medium text-[#111] text-[14px] leading-[20px]" style={IBM_VAR}>Español</span>
              </button>
              <button data-node-id="1:335" className="flex items-center justify-center px-4 py-[6px] rounded-full">
                <span className="font-yahei text-[#111] text-[14px] leading-[20px]">日本語</span>
              </button>
            </div>

            {/* Accessibility level */}
            <div className="flex gap-2 items-center pl-6" data-node-id="1:337">
              <button data-node-id="1:338" className="flex items-center justify-center px-4 py-[6px] rounded-full">
                <span className="font-ibm-plex-medium font-medium text-[#111] text-[14px] leading-[20px]" style={IBM_VAR}>AA</span>
              </button>
              <button data-node-id="1:340" className="bg-black flex items-center justify-center px-4 py-[6px] rounded-full">
                <span className="font-ibm-plex-medium font-medium text-[14px] text-white leading-[20px]" style={IBM_VAR}>AAA</span>
              </button>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 items-start group"
    >
      <div className="aspect-[424/530] bg-white border border-[#b8b8b8] overflow-clip relative rounded-[6px] w-full">
        <img
          alt={project.title}
          src={project.img}
          className={project.imgCls}
        />
      </div>
      <div className="flex items-start justify-between pt-3 w-full">
        <span
          className="font-space-grotesk font-bold text-[18px] text-black tracking-[-0.45px] leading-[28px]"
        >{project.title}</span>
        <span
          className="font-ibm-plex-bold font-bold text-[#444] text-[11px] tracking-[2.2px] leading-[11px] mt-1"
          style={IBM_VAR}
        >{project.num}</span>
      </div>
      <div className="flex items-center justify-between w-full">
        <span
          className="font-ibm-plex-regular text-[#333] text-[12px] leading-[18px]"
          style={IBM_VAR}
        >{project.desc}</span>
        {project.year && (
          <span
            className="font-ibm-plex-bold font-bold text-[#444] text-[11px] tracking-[2.2px] leading-[11px]"
            style={IBM_VAR}
          >{project.year}</span>
        )}
      </div>
    </a>
  );
}
