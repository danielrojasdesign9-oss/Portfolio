import ProjectCard from "@/components/ProjectCard";
import HorizontalProjects from "@/components/HorizontalProjects";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { projectsQuery, profileQuery } from "@/sanity/lib/queries";
import { getLocaleText, Locale } from "@/lib/utils-locale";

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

  const heroProjects = projects
    .filter((p: any) => p.imageUrl)
    .map((p: any) => ({
      _id: p._id,
      slug: p.slug,
      imageUrl: p.imageUrl,
      title: p.title,
      category: p.category
    }));

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero / Horizontal Projects Section */}
      <HorizontalProjects projects={heroProjects} locale={locale} />

      {/* About Section */}
      <AboutSection profile={profile} locale={locale} />

      {/* Contact Section */}
      <ContactSection locale={locale} />

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-white/5 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Daniel Rojas <br /> <span className="text-slate-400">Digital Solutions</span></h2>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-8 text-sm font-medium text-slate-500 dark:text-white/40">
            <a href="https://www.linkedin.com/in/danielrojasdesign/" target="_blank" className="hover:text-indigo-500 transition-colors">LinkedIn</a>
            <a href="http://localhost:6006" target="_blank" className="hover:text-indigo-500 transition-colors">Design System (Storybook)</a>
            <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-100 dark:border-white/5 text-[10px] uppercase tracking-widest text-slate-400 text-center">
          © {new Date().getFullYear()} Daniel Rojas. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
