import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  slug: string;
  imageUrl?: string;
}

export default function ProjectCard({ title, category, slug, imageUrl }: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} className="group block w-full">
      <article className="flex flex-col gap-4">
        {/* Image Container with aspect ratio matching Framer minimalist style */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-xl">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-medium tracking-tight text-gray-900 dark:text-gray-100 transition-colors group-hover:text-black/70 dark:group-hover:text-white/70">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {category}
          </p>
        </div>
      </article>
    </Link>
  );
}
