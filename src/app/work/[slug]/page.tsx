import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { projectQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, ArrowRight, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCover from "@/components/ProjectCover";
import { getLocaleText, getLocaleContent, Locale } from "@/lib/utils-locale";

export const revalidate = 60;

export default async function ProjectLayout({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { slug } = await params;
  const { lang = "en" } = await searchParams;
  const locale = lang as Locale;

  const project = await client.fetch(projectQuery, { slug });

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F9F7F4] flex items-center justify-center">
        <p className="text-black font-black uppercase tracking-[0.5em] text-[12px]">Project not found</p>
      </div>
    );
  }

  const title = getLocaleText(project.title, locale);
  const introText = getLocaleText(project.introText, locale);
  const category = getLocaleText(project.category, locale);
  const myRole = getLocaleText(project.myRole, locale);
  const productVision = getLocaleText(project.productVision, locale);
  const content = getLocaleContent(project.content, locale);

  const t = {
    en: { back: "BACK", next: "Next", prev: "Prev", vision: "Product Vision", prototype: "Live Prototype", problem: "The Problem" },
    es: { back: "VOLVER", next: "Siguiente", prev: "Anterior", vision: "Visión de Producto", prototype: "Prototipo en vivo", problem: "El Problema" },
    jp: { back: "戻る", next: "次へ", prev: "前へ", vision: "プロダクトビジョン", prototype: "ライブプロトタイプ", problem: "課題" }
  }[locale];

  const isPaycool = title?.toLowerCase().includes("paycool");

  return (
    <main className="min-h-screen bg-[#F9F7F4] text-black selection:bg-black selection:text-white font-sans">
      <Navbar />

      <ProjectCover title={title} category={category} year={project.year ?? ""} />

      <section className="max-w-[1100px] mx-auto px-6 pb-20 md:pb-32 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Sticky Back Link */}
          <aside className="lg:col-span-4 h-fit sticky top-24 lg:top-32 z-50 py-4 lg:py-0 bg-[#F9F7F4]/80 backdrop-blur-sm lg:bg-transparent -mx-6 px-6 lg:mx-0 lg:px-0">
            <Link
              href={`/?lang=${locale}`}
              className="group text-[11px] font-black uppercase tracking-[0.4em] text-black/60 hover:text-black transition-all inline-flex items-center gap-3 bg-white lg:bg-transparent px-6 py-3 lg:p-0 rounded-full shadow-sm lg:shadow-none border border-black/5 lg:border-none"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              {t.back}
            </Link>

            <div className="hidden lg:block space-y-8 border-l border-black/10 pl-8 mt-12">
              {project.client && (
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-black/30 uppercase tracking-widest">Client</span>
                  <p className="text-lg font-bold">{project.client}</p>
                </div>
              )}
              {myRole && (
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-black/30 uppercase tracking-widest">Role</span>
                  <p className="text-lg font-bold">{myRole}</p>
                </div>
              )}
              {project.year && (
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-black/30 uppercase tracking-widest">Year</span>
                  <p className="text-lg font-bold">{project.year}</p>
                </div>
              )}
            </div>
          </aside>

          {/* Right: Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 1. Problem */}
            {introText && (
               <div className="space-y-2">
                  <span className="text-[8px] font-black uppercase tracking-[0.4em] text-black/20">{t.problem}</span>
                  <p className="text-lg md:text-xl font-medium tracking-tight leading-snug text-black/60 max-w-xl">
                    {introText}
                  </p>
               </div>
            )}

            {/* 2. Main Image */}
            {(project.mainImageUrl || project.previewImageUrl) && (
              <div className="relative aspect-[16/10] rounded-[12px] overflow-hidden border border-black/5 shadow-2xl">
                <Image
                  src={project.mainImageUrl || project.previewImageUrl}
                  alt={title}
                  fill
                  className="object-cover object-bottom"
                  priority
                />
              </div>
            )}

            {/* 3. Product Vision & Core Section - ZERO SPACE */}
            <div className="flex flex-col">
              {productVision && (
                 <div className="py-10 border-y border-black/5 space-y-2">
                    <h4 className="text-[8px] font-black uppercase tracking-[0.4em] text-black/20 italic flex items-center gap-2">
                       <Rocket className="w-3 h-3" />
                       {t.vision}
                    </h4>
                    <p className="text-lg md:text-xl font-medium tracking-tight leading-snug text-black/60 max-w-xl italic">
                       {productVision}
                    </p>
                 </div>
              )}

              {/* Paycool Special Layer (Framer CSS) */}
              {isPaycool && (
                <div className="relative w-full h-[min-content] flex flex-row justify-center items-center p-0 flex-nowrap gap-[10px] rounded-[10px] border border-black/5 bg-white/40 my-8 py-10 shadow-sm backdrop-blur-sm">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-black">P</div>
                      <p className="text-sm font-black uppercase tracking-widest">Paycool Flow Integration</p>
                   </div>
                </div>
              )}

              {/* 4. Core (Content) - Pegado */}
              {content && (
                <div className="prose prose-xl max-w-none prose-p:text-black/70 prose-p:leading-relaxed prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-black prose-headings:text-black prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-[12px] prose-img:border prose-img:border-black/5 mt-0">
                  <PortableText value={content} />
                </div>
              )}
            </div>

            {/* 5. Framer Embed */}
            {project.framerEmbedUrl && (
              <div className="space-y-6 pt-10 border-t border-black/5">
                 <h4 className="text-[9px] font-black uppercase tracking-[0.5em] text-black/30">{t.prototype}</h4>
                 <div className="relative w-full aspect-video rounded-[16px] overflow-hidden border border-black/10 bg-white shadow-2xl">
                    <iframe 
                       src={project.framerEmbedUrl} 
                       className="w-full h-full border-none"
                       allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                       sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    />
                 </div>
              </div>
            )}

            {/* Pagination */}
            <footer className="pt-24 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-12">
              {project.prevProject && (
                <Link href={`/work/${project.prevProject.slug}?lang=${locale}`} className="group space-y-3 flex flex-col items-start transition-transform hover:-translate-x-1">
                  <span className="flex items-center gap-2 text-[9px] font-black text-black/30 uppercase tracking-widest group-hover:text-black transition-colors">
                    {t.prev}
                  </span>
                  <p className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:underline underline-offset-4 decoration-2">
                    {getLocaleText(project.prevProject.title, locale)}
                  </p>
                </Link>
              )}
              
              <div className="hidden md:block w-px h-16 bg-black/5" />

              {project.nextProject && (
                <Link href={`/work/${project.nextProject.slug}?lang=${locale}`} className="group space-y-3 flex flex-col items-end text-right transition-transform hover:translate-x-1">
                  <span className="flex items-center justify-end gap-2 text-[9px] font-black text-black/30 uppercase tracking-widest group-hover:text-black transition-colors">
                    {t.next}
                  </span>
                  <p className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:underline underline-offset-4 decoration-2">
                    {getLocaleText(project.nextProject.title, locale)}
                  </p>
                </Link>
              )}
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
