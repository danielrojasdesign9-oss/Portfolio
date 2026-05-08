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
      <div className="min-h-screen bg-[#F9F7F4] flex items-center justify-center text-black/30 uppercase tracking-[0.5em] text-[10px]">
        Project not found
      </div>
    );
  }

  const title = getLocaleText(project.title, locale);
  const introText = getLocaleText(project.introText, locale);
  const category = getLocaleText(project.category, locale);
  const myRole = getLocaleText(project.myRole, locale);
  const myGoal = getLocaleText(project.myGoal, locale);
  const productVision = getLocaleText(project.productVision, locale);
  const content = getLocaleContent(project.content, locale);

  const t = {
    en: { back: "BACK", next: "Next", prev: "Prev", vision: "Product Vision", goal: "Goal", prototype: "Live Prototype", problem: "The Problem" },
    es: { back: "VOLVER", next: "Siguiente", prev: "Anterior", vision: "Visión de Producto", goal: "Meta", prototype: "Prototipo en vivo", problem: "El Problema" },
    jp: { back: "戻る", next: "次へ", prev: "前へ", vision: "プロダクトビジョン", goal: "目標", prototype: "ライブプロトタイプ", problem: "課題" }
  }[locale];

  return (
    <main className="min-h-screen bg-[#F9F7F4] text-black selection:bg-black selection:text-white font-sans">
      <Navbar />

      <ProjectCover title={title} category={category} year={project.year ?? ""} />

      <section className="max-w-[1100px] mx-auto px-6 py-32 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* Left: Metadata */}
          <aside className="lg:col-span-4 h-fit lg:sticky lg:top-32 space-y-12">
            <Link
              href={`/?lang=${locale}`}
              className="group text-[10px] font-black uppercase tracking-[0.4em] text-black/40 hover:text-black transition-all inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
              {t.back}
            </Link>

            <div className="space-y-8 border-l border-black/10 pl-8">
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

          {/* Right: Content (Reordered) */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* 1. Pregunta (Problem) - Special Typography */}
            {introText && (
               <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">{t.problem}</span>
                  <p className="text-2xl md:text-4xl font-black tracking-tighter leading-tight uppercase text-black italic">
                    {introText}
                  </p>
               </div>
            )}

            {/* 2. Main Image (Hero) */}
            {(project.mainImageUrl || project.previewImageUrl) && (
              <div className="relative aspect-[16/10] rounded-[12px] overflow-hidden border border-black/5 shadow-2xl transition-transform hover:scale-[1.01] duration-700">
                <Image
                  src={project.mainImageUrl || project.previewImageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* 3. Product Vision - Size Refined (Around 14-16px visual weight) */}
            {productVision && (
               <div className="py-12 border-y border-black/5">
                  <h4 className="text-[14px] font-black uppercase tracking-[0.5em] text-black italic mb-4 flex items-center gap-3">
                     <Rocket className="w-4 h-4" />
                     {t.vision}
                  </h4>
                  <p className="text-xl md:text-2xl font-black tracking-tighter uppercase text-black italic leading-none">
                     {productVision}
                  </p>
               </div>
            )}

            {/* 4. Core (Content) */}
            {content && (
              <div className="prose prose-xl max-w-none prose-p:text-black/70 prose-p:leading-relaxed prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-black prose-headings:text-black prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-[12px] prose-img:border prose-img:border-black/5 pt-10">
                <PortableText value={content} />
              </div>
            )}

            {/* 5. Framer Embed - Last */}
            {project.framerEmbedUrl && (
              <div className="space-y-6 pt-10 border-t border-black/5">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30">{t.prototype}</h4>
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
