import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { projectsQuery, profileQuery } from "@/sanity/lib/queries";
import { getLocaleText, Locale } from "@/lib/utils-locale";
import ContactSection from "@/components/ContactSection";

export const revalidate = 60;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = "en" } = await searchParams;
  const locale = lang as Locale;

  const projects = await client.fetch(projectsQuery);
  const profile = await client.fetch(profileQuery);

  return (
    <main className="min-h-screen bg-[#F9F7F4] text-black selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto">
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30">
            {locale === "es" ? "Portafolio" : locale === "jp" ? "ポートフォリオ" : "Portfolio"} — {new Date().getFullYear()}
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.82] uppercase text-black">
            Daniel<br />Rojas
          </h1>
          <p className="text-lg md:text-2xl font-medium text-black/70 max-w-xl leading-snug">
            {getLocaleText(profile?.tagline, locale) || (
              locale === "es" ? "Diseñador de Producto & Experiencias Digitales" : "Product Designer & Digital Experience"
            )}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="px-6 md:px-10 lg:px-16 pb-40 max-w-[1400px] mx-auto">
        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-black/25 mb-10">
          {locale === "es" ? "Trabajo Seleccionado" : locale === "jp" ? "選ばれた作品" : "Selected Work"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project: any, i: number) => {
            const title = getLocaleText(project.title, locale);
            const category = getLocaleText(project.category, locale);
            return (
              <Link
                key={project._id}
                href={`/work/${project.slug}?lang=${locale}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden bg-black/5 mb-4">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={title}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-black/10 text-[10px] uppercase tracking-widest">
                      No image
                    </div>
                  )}
                  {/* Index badge */}
                  <span className="absolute top-4 left-4 text-[9px] font-black text-white/60 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-start justify-between gap-4 px-1">
                  <div>
                    <h2 className="font-black text-base md:text-lg uppercase tracking-tight text-black leading-tight group-hover:underline underline-offset-4 transition-all">
                      {title}
                    </h2>
                    {category && (
                      <p className="text-[10px] font-medium text-black/35 mt-1 uppercase tracking-widest">
                        {category}
                      </p>
                    )}
                  </div>
                  <span className="text-[10px] font-black text-black/20 mt-1 shrink-0">{project.year}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <ContactSection locale={locale} />

      {/* Footer */}
      <footer className="py-12 px-6 md:px-10 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-black/20">
          <span>Daniel Rojas</span>
          <span>
            © {new Date().getFullYear()} {locale === "es" ? "TODOS LOS DERECHOS RESERVADOS" : locale === "jp" ? "全著作権所有" : "ALL RIGHTS RESERVED"}
          </span>
        </div>
      </footer>
    </main>
  );
}
