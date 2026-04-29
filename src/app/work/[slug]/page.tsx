import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { projectBySlugQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";

export default async function ProjectLayout({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  
  // Hacemos fetch del proyecto real desde Sanity usando el slug
  const project = await client.fetch(projectBySlugQuery, { slug });

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24 md:px-12 lg:px-24">
      <article className="max-w-6xl mx-auto flex flex-col gap-20">
        
        {/* Header Section */}
        <header className="flex flex-col gap-12">
          <Link href="/" className="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors flex items-center gap-2">
            <span>&larr;</span> Back to Home
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8 flex flex-col gap-6">
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-light">
                {project.introText}
              </p>
            </div>
            
            {/* Meta Data Sidebar */}
            <div className="md:col-span-4 flex flex-col gap-8 text-sm border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-10">
              <div className="flex flex-col gap-1">
                <span className="font-semibold uppercase tracking-wider text-xs text-foreground/50">Client</span>
                <span>{project.client}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold uppercase tracking-wider text-xs text-foreground/50">Role / Category</span>
                <span>{project.myRole} / {project.category}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold uppercase tracking-wider text-xs text-foreground/50">Year</span>
                <span>{project.year}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold uppercase tracking-wider text-xs text-foreground/50">Location</span>
                <span>{project.location}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Image */}
        {project.mainImageUrl && (
          <div className="w-full aspect-[21/9] bg-card rounded-2xl overflow-hidden relative">
            <Image
              src={project.mainImageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* My Goal / Strategy */}
        {project.myGoal && (
          <div className="max-w-4xl mx-auto text-center space-y-6 bg-primary/5 p-12 rounded-3xl border border-primary/10">
             <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">The Goal</h3>
             <p className="text-lg md:text-xl leading-relaxed text-foreground/80">{project.myGoal}</p>
          </div>
        )}

        {/* Rich Text: Project Core */}
        {project.content && (
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-medium prose-a:text-primary">
            <PortableText value={project.content} />
          </div>
        )}

      </article>
    </main>
  );
}
