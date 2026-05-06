import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { projectQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
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
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
  }

  const title = getLocaleText(project.title, locale);
  const introText = getLocaleText(project.introText, locale);
  const category = getLocaleText(project.category, locale);
  const myRole = getLocaleText(project.myRole, locale);
  const myGoal = getLocaleText(project.myGoal, locale);
  const content = getLocaleContent(project.content, locale);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30">
      <Navbar />
      <article className="max-w-6xl mx-auto px-6 py-24 md:px-12 lg:px-24 flex flex-col gap-20">
        
        {/* Header Section */}
        <header className="flex flex-col gap-12">
          <Link href={`/?lang=${locale}`} className="group text-sm font-medium text-foreground/50 hover:text-foreground transition-colors inline-flex items-center gap-2">
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {locale === "es" ? "Volver al inicio" : locale === "jp" ? "ホームに戻る" : "Back to Home"}
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8 flex flex-col gap-6">
              <h1 className="text-5xl md:text-8xl font-semibold tracking-tight leading-[1.1]">
                {title}
              </h1>
              <p className="text-xl md:text-3xl text-foreground/60 leading-relaxed font-light">
                {introText}
              </p>
            </div>
            
            {/* Meta Data Sidebar */}
            <div className="md:col-span-4 flex flex-col gap-8 text-sm border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-10">
              <div className="flex flex-col gap-1">
                <span className="font-semibold uppercase tracking-widest text-[10px] text-indigo-500">
                  {locale === "es" ? "Cliente" : locale === "jp" ? "クライアント" : "Client"}
                </span>
                <span className="text-base">{project.client}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold uppercase tracking-widest text-[10px] text-indigo-500">
                  {locale === "es" ? "Rol / Categoría" : locale === "jp" ? "役割 / カテゴリー" : "Role / Category"}
                </span>
                <span className="text-base">{myRole} / {category}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold uppercase tracking-widest text-[10px] text-indigo-500">
                  {locale === "es" ? "Año" : locale === "jp" ? "年" : "Year"}
                </span>
                <span className="text-base">{project.year}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold uppercase tracking-widest text-[10px] text-indigo-500">
                  {locale === "es" ? "Ubicación" : locale === "jp" ? "場所" : "Location"}
                </span>
                <span className="text-base">{project.location}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Preview Image */}
        {(project.previewImageUrl || project.mainImageUrl) && (
          <div className="w-full aspect-[16/9] bg-slate-100 dark:bg-card rounded-[40px] overflow-hidden relative shadow-2xl">
            <Image
              src={project.previewImageUrl || project.mainImageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* My Goal / Strategy */}
        {myGoal && (
          <div className="max-w-4xl mx-auto space-y-6 bg-slate-50 dark:bg-white/5 p-12 md:p-20 rounded-[40px] border border-border">
             <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">
               {locale === "es" ? "El Reto & Objetivo" : locale === "jp" ? "課題と目標" : "The Challenge & Goal"}
             </h3>
             <p className="text-2xl md:text-4xl leading-[1.3] text-foreground/90 font-light tracking-tight">{myGoal}</p>
          </div>
        )}

        {/* Rich Text: Project Core Content */}
        {content && (
          <div className="max-w-3xl mx-auto prose prose-2xl dark:prose-invert prose-headings:font-semibold prose-p:text-foreground/70 prose-p:leading-relaxed prose-img:rounded-3xl">
            <PortableText value={content} />
          </div>
        )}

        {/* Pagination Navigation */}
        <footer className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-12">
          {project.prevProject ? (
            <Link href={`/work/${project.prevProject.slug}?lang=${locale}`} className="group flex flex-col gap-4 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 group-hover:text-indigo-500 transition-colors flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" /> 
                {locale === "es" ? "Proyecto Anterior" : locale === "jp" ? "前のプロジェクト" : "Previous Project"}
              </span>
              <span className="text-3xl md:text-4xl font-medium group-hover:underline underline-offset-8 decoration-indigo-500/30 transition-all">
                {getLocaleText(project.prevProject.title, locale)}
              </span>
            </Link>
          ) : <div />}

          {project.nextProject ? (
            <Link href={`/work/${project.nextProject.slug}?lang=${locale}`} className="group flex flex-col gap-4 text-right items-end">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 group-hover:text-indigo-500 transition-colors flex items-center gap-2">
                {locale === "es" ? "Siguiente Proyecto" : locale === "jp" ? "次のプロジェクト" : "Next Project"} 
                <ArrowRight className="w-3 h-3" />
              </span>
              <span className="text-3xl md:text-4xl font-medium group-hover:underline underline-offset-8 decoration-indigo-500/30 transition-all">
                {getLocaleText(project.nextProject.title, locale)}
              </span>
            </Link>
          ) : <div />}
        </footer>

      </article>
    </main>
  );
}
