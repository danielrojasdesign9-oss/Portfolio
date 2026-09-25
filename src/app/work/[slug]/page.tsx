import { notFound } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { projectQuery, projectsQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { Rocket } from "@carbon/icons-react";
import Navbar from "@/components/Navbar";
import ProjectCover from "@/components/ProjectCover";
import GalleryImage from "@/components/GalleryImage";
import { getLocaleText, getLocaleContent, Locale } from "@/lib/utils-locale";
import PortableTable from "@/components/PortableTable";
import CarbonLinkButton from "@/components/ui/CarbonLinkButton";
import Footer from "@/components/Footer";
import SequentialNav from "@/components/SequentialNav";

const builder = imageUrlBuilder(client);

export const revalidate = 0;

export async function generateStaticParams() {
  const projects = await client.fetch(projectsQuery).catch(() => []);
  return projects.map((project: any) => ({ slug: project.slug }));
}

export default async function ProjectLayout({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { slug } = await params;
  const { lang = "en" } = await searchParams;
  const locale: Locale = (['en', 'es', 'jp'] as const).includes(lang as Locale) ? (lang as Locale) : 'en';

  const project = await client.fetch(projectQuery, { slug }).catch(() => null);

  if (!project || project.public === false) {
    notFound();
  }

  const allProjects = await client.fetch(projectsQuery).catch(() => []);
  const currentIndex = allProjects.findIndex((p: any) => p.slug === slug);
  const totalProjects = allProjects.length;

  const title = getLocaleText(project.title, locale);
  const category = getLocaleText(project.category, locale);
  const myRole = getLocaleText(project.myRole, locale);

  const introText = getLocaleText(project.introText, locale);
  const productVision = getLocaleText(project.productVision, locale);
  const content = getLocaleContent(project.content, locale);

  const t = {
    en: { back: "BACK", next: "Next", prev: "Prev", vision: "Product Vision", problem: "The Problem", prototype: "Interactive Prototype", of: "of" },
    es: { back: "VOLVER", next: "Siguiente", prev: "Anterior", vision: "Visión de Producto", problem: "El Problema", prototype: "Prototipo Interactivo", of: "de" },
    jp: { back: "戻る", next: "次へ", prev: "前へ", vision: "プロダクトビジョン", problem: "課題", prototype: "インタラクティブなプロトタイプ", of: "/" }
  }[locale];

  const projectsMeta: Record<string, any> = {
    "paycool-banking-gamification": { accent: "#635B9B" },
    "innu-ux-redesign-roadside-assistance": { accent: "#9FB2A9" },
    "tir-tax-information-reporting": { accent: "#0066FF" },
    "silin-government-tax-reporting": { accent: "#00A88F" },
    "linklight-assertive-communication": { accent: "#FFC107" },
    "e-signer-app-documentos-firmas-digitales": { accent: "#804D6D" }
  };

  const meta = projectsMeta[slug] || { accent: "#000000" };

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />

      <ProjectCover title={title} category={category} year={project.year ?? ""} />

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex flex-col gap-8 border-b border-[var(--color-border-subtle)] pb-10 md:flex-row md:items-start md:justify-between">
            <CarbonLinkButton
              href={`/work?lang=${locale}`}
              kind="ghost"
              size="sm"
              icon="ArrowLeft"
            >
              {t.back}
            </CarbonLinkButton>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4 w-full md:w-auto">
              {project.client && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-tertiary)]">Client</span>
                  <p className="text-lg font-bold">{project.client}</p>
                </div>
              )}
              {myRole && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-tertiary)]">Role</span>
                  <p className="text-lg font-bold">{myRole}</p>
                </div>
              )}
              {project.year && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-tertiary)]">Year</span>
                  <p className="text-lg font-bold">{project.year}</p>
                </div>
              )}
              {totalProjects > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-tertiary)]">
                    {t.of} {String(totalProjects).padStart(2, "0")}
                  </span>
                  <p className="text-lg font-bold">{String(currentIndex + 1).padStart(2, "0")}</p>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-10 md:space-y-12 lg:space-y-16">
              {/* 1. Problem Intro */}
              {introText && (
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-secondary)]">{t.problem}</span>
                  <div className="text-2xl md:text-3xl font-bold tracking-tight leading-tight italic max-w-2xl">
                    {introText}
                  </div>
                </div>
              )}

              {/* 2. Hero Image */}
              {(project.mainImageUrl || project.previewImageUrl) && (
                <figure className="space-y-3">
                  <div className="relative aspect-[16/10] rounded-[6px] overflow-hidden border border-[var(--color-border-subtle)]">
                    <Image
                      src={project.mainImageUrl || project.previewImageUrl}
                      alt={title}
                      fill
                      className="object-cover object-bottom"
                      priority
                    />
                  </div>
                  <figcaption className="border-l-2 border-[var(--color-primary)]/30 pl-4 max-w-2xl">
                    <p className="text-[13px] font-medium text-[var(--color-text-secondary)] leading-relaxed italic">
                      {title}{category ? ` — ${category}` : ""}{project.year ? ` · ${project.year}` : ""}
                    </p>
                  </figcaption>
                </figure>
              )}

              {/* 3. Product Vision */}
              {productVision && (
                <div className="py-6 border-y border-[var(--color-border-subtle)] space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-text-tertiary)] flex items-center gap-3">
                    <Rocket style={{ color: meta.accent }} />
                    {t.vision}
                  </h4>
                  <p className="text-xl md:text-2xl font-semibold tracking-tight italic leading-tight">
                    {productVision}
                  </p>
                </div>
              )}

              {/* 4. Case Study Content */}
              {content && (
                <div className="prose prose-xl max-w-none pt-6">
                  <PortableText
                    value={content}
                    components={{
                      types: {
                        portableTable: ({ value }: any) => (
                          <PortableTable rows={value?.rows || []} />
                        ),
                      },
                    }}
                  />
                </div>
              )}

              {/* 5. Figma Embed */}
              {project.figmaEmbedUrl && (
                <div className="space-y-6 pt-10 md:pt-12 border-t border-[var(--color-border-subtle)]">
                  <div className="flex items-center gap-4">
                    <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-secondary)]">{t.prototype}</span>
                    <div className="h-px flex-1 bg-[var(--color-border-subtle)]" />
                  </div>
                  <div className="relative aspect-video rounded-[6px] overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]">
                    <iframe
                      src={project.figmaEmbedUrl}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* 6. Dynamic Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-10 md:space-y-12 pt-10 md:pt-16 border-t border-[var(--color-border-subtle)]">
                  <div className="space-y-12 md:space-y-16">
                    {project.gallery.map((slide: any, i: number) => {
                      const sTitle = getLocaleText(slide?.title, locale);
                      const sSubtitle = getLocaleText(slide?.subtitle, locale);
                      const sDesc = getLocaleText(slide?.description, locale);
                      const images = slide?.images || [];

                      if (images.length === 0 && !sTitle && !sSubtitle && !sDesc) return null;

                      return (
                        <div key={slide._key || i} className="space-y-6">
                          {(sTitle || sSubtitle || sDesc) && (
                            <div className="space-y-4 border-b border-[var(--color-border-subtle)] pb-5">
                              <div className="space-y-3">
                                {sTitle && <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-secondary)]">{sTitle}</span>}
                                {sSubtitle && <h4 className="text-xl font-medium text-[var(--color-text-secondary)] leading-relaxed">{sSubtitle}</h4>}
                              </div>
                              {sDesc && <p className="text-base font-medium text-[var(--color-text-secondary)] leading-relaxed italic max-w-2xl whitespace-pre-line">{sDesc}</p>}
                            </div>
                          )}

                          <div className="space-y-2 md:space-y-4">
                            {images
                              .filter((img: any) => img?.url)
                              .map((img: any, imgIdx: number) => (
                                <GalleryImage
                                  key={img._key || imgIdx}
                                  src={img.url}
                                  alt={`${sTitle || "Gallery image"} ${imgIdx + 1}`}
                                  caption={getLocaleText(img?.caption, locale) || sSubtitle || sTitle || `${title} — ${locale === "es" ? "imagen" : locale === "jp" ? "画像" : "image"} ${imgIdx + 1}`}
                                />
                              ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Pagination - Sequential Navigation */}
              <footer className="pt-24 border-t border-[var(--color-border-subtle)]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                  <div className="flex items-center gap-4 text-center md:text-left w-full md:w-auto">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-primary)]">
                      {String(currentIndex + 1).padStart(2, "0")} {t.of} {String(totalProjects).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-12 md:gap-24">
                  {project.prevProject && (
                    <CarbonLinkButton
                      href={`/work/${project.prevProject.slug}?lang=${locale}`}
                      kind="ghost"
                      size="lg"
                      className="w-full min-w-0 text-left"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] block mb-1">{t.prev}</span>
                      <span className="font-display text-lg font-black tracking-tight block">{getLocaleText(project.prevProject.title, locale)}</span>
                    </CarbonLinkButton>
                  )}
                  {project.nextProject && (
                    <CarbonLinkButton
                      href={`/work/${project.nextProject.slug}?lang=${locale}`}
                      kind="ghost"
                      size="lg"
                      className="w-full min-w-0 md:text-right md:col-start-2"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] block mb-1">{t.next}</span>
                      <span className="font-display text-lg font-black tracking-tight block">{getLocaleText(project.nextProject.title, locale)}</span>
                    </CarbonLinkButton>
                  )}
                </div>
              </footer>
</div>
        </div>
      </section>

      <Footer locale={locale} />

      {/* Sequential Navigation Keyboard Support */}
      <SequentialNav
        prevSlug={project.prevProject?.slug}
        nextSlug={project.nextProject?.slug}
        locale={locale}
      />
    </main>
  );
}