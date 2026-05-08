import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { projectQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);
import { ArrowLeft, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCover from "@/components/ProjectCover";
import GalleryImage from "@/components/GalleryImage";
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
  const category = getLocaleText(project.category, locale);
  const myRole = getLocaleText(project.myRole, locale);
  
  // Content extraction
  const introText = getLocaleText(project.introText, locale);
  const productVision = getLocaleText(project.productVision, locale);
  const content = getLocaleContent(project.content, locale);

  const t = {
    en: { back: "BACK", next: "Next", prev: "Prev", vision: "Product Vision", problem: "The Problem", prototype: "Interactive Prototype" },
    es: { back: "VOLVER", next: "Siguiente", prev: "Anterior", vision: "Visión de Producto", problem: "El Problema", prototype: "Prototipo Interactivo" },
    jp: { back: "戻る", next: "次へ", prev: "前へ", vision: "プロダクトビジョン", problem: "課題", prototype: "インタラクティブなプロトタイプ" }
  }[locale];

  // Accent Colors
  const projectsMeta: Record<string, any> = {
    "paycool": { accent: "#635B9B" },
    "innu": { accent: "#9FB2A9" },
    "tir": { accent: "#0066FF" },
    "silin": { accent: "#00A88F" },
    "linklight": { accent: "#FFC107" },
    "e-signer": { accent: "#804D6D" }
  };

  const meta = projectsMeta[slug] || { accent: "#000000" };

  return (
    <main className="min-h-screen bg-[#F9F7F4] text-black selection:bg-black selection:text-white font-sans">
      <Navbar />

      <ProjectCover title={title} category={category} year={project.year ?? ""} />

      <section className="max-w-[1100px] mx-auto px-6 py-20 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Sidebar */}
          <aside className="lg:col-span-4 h-fit sticky top-24 lg:top-32 z-50">
            <Link href={`/?lang=${locale}`} className="group text-[11px] font-black uppercase tracking-[0.4em] text-black/60 hover:text-black transition-all inline-flex items-center gap-3">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              {t.back}
            </Link>
            <div className="hidden lg:block space-y-8 border-l border-black/10 pl-8 mt-12">
              {project.client && (<div><span className="text-[9px] font-black text-black/30 uppercase tracking-widest">Client</span><p className="text-lg font-bold">{project.client}</p></div>)}
              {myRole && (<div><span className="text-[9px] font-black text-black/30 uppercase tracking-widest">Role</span><p className="text-lg font-bold">{myRole}</p></div>)}
              {project.year && (<div><span className="text-[9px] font-black text-black/30 uppercase tracking-widest">Year</span><p className="text-lg font-bold">{project.year}</p></div>)}
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12 lg:space-y-16">
            
            {/* 1. Problem Intro */}
            {introText && (
               <div className="space-y-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black/20">{t.problem}</span>
                  <div className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-black italic max-w-2xl">
                    {introText}
                  </div>
               </div>
            )}

            {/* 2. Hero Image */}
            {(project.mainImageUrl || project.previewImageUrl) && (
              <div className="relative aspect-[16/10] rounded-[12px] overflow-hidden border border-black/5 shadow-2xl">
                <Image src={project.mainImageUrl || project.previewImageUrl} alt={title} fill className="object-cover object-bottom" priority />
              </div>
            )}

            {/* 3. Product Vision */}
            {productVision && (
               <div className="py-6 border-y border-black/5 space-y-3">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 italic flex items-center gap-3">
                     <Rocket className="w-3.5 h-3.5" style={{ color: meta.accent }} />
                     {t.vision}
                  </h4>
                  <p className="text-xl md:text-2xl font-semibold tracking-tight text-black italic leading-tight">
                     {productVision}
                  </p>
               </div>
            )}

            {/* 4. Case Study Content */}
            {content && (
              <div className="prose prose-xl max-w-none pt-6">
                <PortableText value={content} />
              </div>
            )}

            {/* 5. FIGMA EMBED */}
            {project.figmaEmbedUrl && (
              <div className="space-y-6 pt-12 border-t border-black/5">
                <div className="flex items-center gap-4">
                   <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30">{t.prototype}</span>
                   <div className="h-px flex-1 bg-black/5" />
                </div>
                <div className="relative aspect-video rounded-[16px] overflow-hidden border border-black/10 shadow-2xl bg-black/5">
                   <iframe 
                      src={project.figmaEmbedUrl} 
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen 
                   />
                </div>
              </div>
            )}

            {/* 6. DYNAMIC GALLERY */}
            {project.gallery && project.gallery.length > 0 && (
               <div className="space-y-32 pt-16 border-t border-black/5">
                  <div className="space-y-40">
                     {project.gallery.map((slide: any, i: number) => {
                        const sTitle = locale === 'en' ? slide.titleEn : locale === 'es' ? slide.titleEs : slide.titleJp;
                        const sSubtitle = locale === 'en' ? slide.subtitleEn : locale === 'es' ? slide.subtitleEs : slide.subtitleJp;
                        const sDesc = locale === 'en' ? slide.descriptionEn : locale === 'es' ? slide.descriptionEs : slide.descriptionJp;
                        const images = slide.images || [];

                        if (images.length === 0 && !sTitle && !sSubtitle && !sDesc) return null;

                        return (
                           <div key={i} className="space-y-12">
                              {/* Header for this section */}
                              {(sTitle || sSubtitle || sDesc) && (
                                <div className="space-y-4 border-b border-black/5 pb-6">
                                   <div className="space-y-1">
                                      {sTitle && <p className="text-[13px] font-black uppercase tracking-[0.2em] text-black">{sTitle}</p>}
                                      {sSubtitle && <h4 className="text-xl font-medium text-black/60 leading-relaxed">{sSubtitle}</h4>}
                                   </div>
                                   {sDesc && <p className="text-base font-medium text-black/50 leading-relaxed italic max-w-2xl">{sDesc}</p>}
                                </div>
                              )}

                              <div className="space-y-24">
                                 {images.map((img: any, imgIdx: number) => {
                                    const sCaption = locale === 'en' ? img.captionEn : locale === 'es' ? img.captionEs : img.captionJp;

                                    return (
                                       <GalleryImage 
                                          key={imgIdx}
                                          src={img?.url || '/placeholder.png'} 
                                          alt={`${sTitle || "Gallery image"} ${imgIdx + 1}`} 
                                          caption={sCaption}
                                       />
                                    );
                                 })}
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            )}

            {/* Pagination */}
            <footer className="pt-24 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-12">
              {project.prevProject && (
                <Link href={`/work/${project.prevProject.slug}?lang=${locale}`} className="group space-y-3 flex flex-col items-start transition-transform hover:-translate-x-1">
                  <span className="text-[9px] font-black text-black/30 uppercase tracking-widest group-hover:text-black">{t.prev}</span>
                  <p className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:underline underline-offset-4 decoration-2">{getLocaleText(project.prevProject.title, locale)}</p>
                </Link>
              )}
              <div className="hidden md:block w-px h-16 bg-black/5" />
              {project.nextProject && (
                <Link href={`/work/${project.nextProject.slug}?lang=${locale}`} className="group space-y-3 flex flex-col items-end text-right transition-transform hover:translate-x-1">
                  <span className="text-[9px] font-black text-black/30 uppercase tracking-widest group-hover:text-black">{t.next}</span>
                  <p className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:underline underline-offset-4 decoration-2">{getLocaleText(project.nextProject.title, locale)}</p>
                </Link>
              )}
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
