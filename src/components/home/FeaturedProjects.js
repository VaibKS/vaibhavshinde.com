import ProjectCard from './ProjectCard';

export default function RecentProjects() {
  return (
    <div className="max-w-6xl px-6 mx-auto mt-24 md:mt-36">
      <div className="space-y-4">
        <div className="text-2xl text-black dark:text-gray-300 font-bold tracking-tight">
          Featured Projects
        </div>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard
            title="Linkous"
            subtext="A simple malicious link ranking/detection tool which uses machine learning"
          />
          <ProjectCard
            title="HTML Class Prefixer"
            subtext="Useful for prefixing class names for css libraries"
            href="https://prefixer.netlify.app"
          />
          <ProjectCard
            title="Gumroad Overlay"
            subtext="Clone of Gumroad Overlay Library with some extras"
            href="https://gumroad-overlay-vs.netlify.app"
          />
          <ProjectCard title="GCalc" subtext="A calculator of sorts [WIP]" />
          <ProjectCard
            title="enCode Code Editor"
            subtext="A very basic code editor I made while in high school"
            href="https://vaibks.github.io/editor"
          />
          <ProjectCard
            title="WhatsApp Bot library using Gupshup.io in C"
            subtext="Library in C made for OpenVenti project"
            href="https://github.com/VaibKS/whatsapp-bot-c"
          />
        </div>
      </div>
    </div>
  );
}
