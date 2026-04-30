import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  slug: string;
  imageUrl?: string;
}

export default function ProjectCard({ title, category, slug, imageUrl }: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-3xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md transition-all duration-500 ease-out hover:bg-slate-200/50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1">
        
        {/* Imagen Wrapper */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-white/5 dark:to-white/10 flex items-center justify-center">
              <span className="text-slate-400 dark:text-white/20 text-sm font-medium">No image</span>
            </div>
          )}
          
          {/* Overlay de Gradiente Cristalino (Se muestra al hacer hover) */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent dark:from-black/80 dark:via-black/20 dark:to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Contenido (Textos) */}
        <div className="relative p-6 flex flex-col gap-2 z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            {category}
          </p>
          <h3 className="text-2xl font-medium text-slate-900 dark:text-white tracking-tight flex items-center justify-between">
            {title}
            <span className="opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-indigo-600 dark:text-indigo-400">
              &rarr;
            </span>
          </h3>
        </div>
      </div>
    </Link>
  );
}
