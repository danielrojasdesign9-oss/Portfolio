import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { client } from "@/sanity/lib/client";
import { projectsQuery, profileQuery } from "@/sanity/lib/queries";
import { getLocaleText, Locale } from "@/lib/utils-locale";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export const revalidate = 60;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = "en" } = await searchParams;
  const locale: Locale = (['en', 'es', 'jp'] as const).includes(lang as Locale) ? (lang as Locale) : 'en';

  const [sanityProjects, profile] = await Promise.all([
    client.fetch(projectsQuery).catch(() => []),
    client.fetch(profileQuery).catch(() => null),
  ]);
  const projects = sanityProjects || [];

  const heroHeadline = {
    en: "I make human experiences feel memorable, intuitive, and visually striking.",
    es: "Hago que las experiencias humanas se sientan memorables, intuitivas y que luzcan llamativas.",
    jp: "人間の体験を記憶に残り、直感的で、視覚的に印象的なものにします。"
  }[locale];

  const heroDescription = profile?.homeDescription
    ? getLocaleText(profile.homeDescription, locale)
    : locale === "es"
    ? "Arquitectando sistemas de productos impulsados por IA que escalan el impacto. Redefiniendo experiencias a través de interfaces conversacionales y desarrollo asistido por IA."
    : locale === "jp"
    ? "インパクトを拡大するAI駆動の製品システムを構築。対話型インターフェースとAI支援開発を通じて製品体験を再定義します。"
    : "Building AI-driven ecosystems that scale. I believe in using technology to handle the how, so we can focus on the why: human-centric strategy and projects with social purpose.";

  const email = profile?.email || "hello@danielrojas.design";
  const linkedinUrl = profile?.linkedinUrl || "https://www.linkedin.com/in/danielrojasdesign/";
  const githubUrl = profile?.githubUrl || "https://github.com/danielrojasdesign";

  const workCopy = {
    en: { kicker: "Selected work", title: "Projects", body: "Case studies across product, systems, and AI-assisted delivery." },
    es: { kicker: "Trabajo seleccionado", title: "Proyectos", body: "Casos de producto, sistemas y entrega asistida por IA." },
    jp: { kicker: "セレクトワーク", title: "作品", body: "プロダクト、システム、AI支援のケーススタディ。" },
  }[locale];

  return (
    <main id="main-content" className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />

      <HeroSection
        locale={locale}
        headline={heroHeadline}
        description={heroDescription}
        profileImageUrl={profile?.profileImageUrl}
        fullName={profile?.fullName}
        email={email}
        linkedinUrl={linkedinUrl}
        githubUrl={githubUrl}
      />

      <section id="projects" className="px-4 md:px-8 py-24 max-w-[1400px] mx-auto scroll-mt-[var(--header-height)]">
        <div className="mb-14 max-w-3xl">
          <p className="text-xl font-medium text-[var(--color-text-secondary)] mb-4">
            {workCopy.kicker}
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.88] mb-4">
            {workCopy.title}
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">{workCopy.body}</p>
        </div>
        <ProjectsSection projects={projects} locale={locale} />
      </section>

      <ContactSection locale={locale} profile={profile} />
      <Footer locale={locale} />
    </main>
  );
}
