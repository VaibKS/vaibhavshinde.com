import Container from "../Container";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => (
  <Container>
    <div className="space-y-4">
      <div className="text-2xl font-bold tracking-tight">Recent Projects</div>
      <div className="grid grid-cols-1 gap-4">
        <ProjectCard
          title="Linkous"
          subtext="A simple malicious link ranking/detection tool which uses machine learning"
          href="https://linkous.herokuapp.com"
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
          subtext="Clone of Gumroad Overlay Library with some extras"
          href="https://github.com/VaibKS/whatsapp-bot-c"
        />
      </div>
    </div>
  </Container>
);

export default RecentProjects;
