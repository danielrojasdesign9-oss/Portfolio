import ProjectCard from "@/components/ProjectCard";
import { ProjectHero } from "@/components/ui/ProjectHero";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

export const revalidate = 3600;

export default async function Home() {
  const projects = await client.fetch(projectsQuery);

  // Extraemos las URLs de las imágenes de los proyectos para el Hero
  const heroImages = projects
    .filter((p: any) => p.imageUrl)
    .map((p: any) => p.imageUrl)
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white">
      {/* Hero Section - Split Screen Isometric */}
      <section className="relative h-screen overflow-hidden">
        <ProjectHero 
          badgeText="Open for new opportunities"
          badgeLinkText="Download CV"
          titleLine1="Crafting digital products"
          titleLine2="with purpose"
          description="I'm Daniel Rojas, a Product Designer helping companies solve complex problems through human-centered design. Focused on impact, accessibility, and high-end aesthetics."
          primaryButtonText="View Case Studies"
          secondaryButtonText="About Me"
          projectImages={heroImages}
        />
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce hidden lg:block">
          <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
        </div>
      </section>

      {/* Grid de Proyectos - Connected to the Hero flow */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-32 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">
              Selected Work
            </h3>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
              Featured <br /> Projects
            </h2>
          </div>
          <p className="text-slate-500 dark:text-white/40 max-w-sm text-lg leading-relaxed font-light italic border-l border-indigo-500/30 pl-6">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {projects.map((project: any, index: number) => (
            <div key={project._id} className={index % 2 !== 0 ? "md:mt-24" : ""}>
              <ProjectCard
                title={project.title}
                category={project.category}
                slug={project.slug}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-white/5 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Let's build something <br /> meaningful.</h2>
            <a href="mailto:hello@danielrojas.design" className="text-xl text-indigo-500 hover:underline">hello@danielrojas.design</a>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500 dark:text-white/40">
            <a href="#" className="hover:text-indigo-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Dribbble</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Instagram</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-100 dark:border-white/5 text-xs text-slate-400">
          © {new Date().getFullYear()} Daniel Rojas. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
