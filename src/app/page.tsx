import ProjectCard from "@/components/ProjectCard";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

// Hacemos que la página se revalide cada hora o sea dinámica
export const revalidate = 3600;

export default async function Home() {
  // Obtenemos los proyectos reales desde la base de datos de Sanity
  const projects = await client.fetch(projectsQuery);

  return (
    <main className="min-h-screen bg-background text-foreground p-8 md:p-24">
      <header className="max-w-4xl mx-auto mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Daniel Rojas
        </h1>
        <h2 className="text-2xl md:text-3xl text-primary font-medium mb-8">
          Product Designer
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
          I design to transform behaviors, solve complex problems, and build impactful experiences.
          I believe in accessible, sustainable, and universal solutions — ones that adapt to diverse audiences and contexts.
        </p>
      </header>

      <section className="max-w-7xl mx-auto">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-12 border-b border-border pb-4">
          Selected Work
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project: any) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              category={project.category}
              slug={project.slug}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
