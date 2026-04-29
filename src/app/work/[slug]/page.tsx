import Link from "next/link";
import Image from "next/image";

// Interfaz que mapea con el esquema de Sanity
interface ProjectData {
  title: string;
  category: string;
  client: string;
  year: number;
  description: string;
  mainImage?: string;
  gallery: string[];
  techStack: string[];
}

export default async function ProjectLayout({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  
  // MOCK: En un entorno real haríamos fetch a Sanity: const project = await client.fetch(`*[_type == "project" && slug.current == "${slug}"][0]`)
  const project: ProjectData = {
    title: slug === "tir" ? "TIR" : "Project Title",
    category: "Tax information reporting",
    client: "Confidential",
    year: 2026,
    description: "I’ve worked across fields such as taxation, regulatory compliance, identity verification, digital signatures, e-commerce, and delivery services. This journey has shaped my ability to tackle complex challenges...",
    gallery: [],
    techStack: ["Figma", "React", "Next.js"]
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black px-6 py-24 md:px-12 lg:px-24 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <article className="max-w-6xl mx-auto flex flex-col gap-20">
        
        {/* Header Section */}
        <header className="flex flex-col gap-12">
          <Link href="/work" className="text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
            <span>&larr;</span> Back to Work
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8 flex flex-col gap-6">
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-black dark:text-white">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                {project.description}
              </p>
            </div>
            
            {/* Meta Data Sidebar */}
            <div className="md:col-span-4 flex flex-col gap-8 text-sm border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 pt-8 md:pt-0 md:pl-10">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-black dark:text-white uppercase tracking-wider text-xs">Client</span>
                <span className="text-gray-600 dark:text-gray-400">{project.client}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-black dark:text-white uppercase tracking-wider text-xs">Role / Category</span>
                <span className="text-gray-600 dark:text-gray-400">{project.category}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-black dark:text-white uppercase tracking-wider text-xs">Year</span>
                <span className="text-gray-600 dark:text-gray-400">{project.year}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-black dark:text-white uppercase tracking-wider text-xs">Tech Stack</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Image */}
        <div className="w-full aspect-[21/9] bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden relative">
           <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
             Main Project Image
           </div>
        </div>

        {/* Dynamic Gallery */}
        {project.gallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden relative">
                 <div className="w-full h-full flex items-center justify-center text-gray-400">
                   Gallery View {idx + 1}
                 </div>
              </div>
            ))}
          </div>
        )}
      </article>
    </main>
  );
}
