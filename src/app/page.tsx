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

  const [projects, profile] = await Promise.all([
    client.fetch(projectsQuery),
    client.fetch(profileQuery)
  ]);

  return (
    <main className="min-h-screen bg-[#F9F7F4] text-black selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero: 2 Column Layout */}
      <section className="pt-48 pb-32 px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto border-b border-black/5 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-4">
            <p className="text-[12px] font-black uppercase tracking-[0.5em] text-black/30">
              {locale === "es" ? "Diseñador de Producto" : locale === "jp" ? "プロダクトデザイナー" : "Product Designer"}
            </p>
            <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.82] uppercase text-black">
              Daniel<br />Rojas
            </h1>
          </div>
          <div className="lg:pb-4 max-w-lg">
            <p className="text-xl md:text-3xl font-medium text-black/80 leading-tight tracking-tight mb-8">
              {getLocaleText(profile?.tagline, locale) || "Digital Experience & Creative Solutions"}
            </p>
            <div className="flex gap-4">
               <Link href={`/about?lang=${locale}`} className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-8 py-4 rounded-full hover:opacity-80 transition-all">
                  {locale === "es" ? "Sobre mí" : "About Me"}
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="px-6 md:px-10 lg:px-16 pb-40 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, i: number) => {
            const title = getLocaleText(project.title, locale);
            const category = getLocaleText(project.category, locale);
            return (
              <Link
                key={project._id}
                href={`/work/${project.slug}?lang=${locale}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] rounded-[12px] overflow-hidden bg-black/5 mb-6 border border-black/5">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={title}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-black/10">No image</div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-black text-xl uppercase tracking-tighter text-black group-hover:underline underline-offset-4 decoration-2">
                      {title}
                    </h2>
                    <p className="text-[11px] font-bold text-black/40 mt-1 uppercase tracking-widest">{category}</p>
                  </div>
                  <span className="text-[11px] font-black text-black/20 uppercase">{project.year}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <ContactSection locale={locale} profile={profile} />

      {/* Footer Localizado */}
      <footer className="py-12 px-6 md:px-10 border-t border-black/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20">
          © {new Date().getFullYear()} {locale === "es" ? "TODOS LOS DERECHOS RESERVADOS" : locale === "jp" ? "全著作権所有" : "ALL RIGHTS RESERVED"}
        </p>
      </footer>
    </main>
  );
}
