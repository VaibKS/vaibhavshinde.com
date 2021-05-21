import Link from "next/link";

import Container from "./Container";
import { CodeIcon } from "@/components/icons.js";

const ProjectCard = ({ title, subtext, href }) => {
  const card = (
    <div className="flex flex-row items-center p-4 bg-white cursor-pointer transform transition rounded-md border-2 border-gray-100 hover:shadow-xl hover:scale-105 hover:z-10 space-x-4 md:items-center">
      <div className="my-3 md:pl-2">
        <CodeIcon className="h-10 text-gray-500" />
      </div>
      <div className="space-y-1">
        <div className="text-md font-bold tracking-tight">{title}</div>
        <div className="text-sm text-gray-700 leading-5">{subtext}</div>
      </div>
    </div>
  );

  if (href) {
    // check if url is external if it starts with https?://
    if (/^https?:\/\//.test(href))
      return (
        <a href={href} target="_blank">
          {card}
        </a>
      );
    return <Link href={href}>{card}</Link>;
  }

  return card;
};

export default function HomeProjects() {
  return (
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
          <ProjectCard
            title="GCalc"
            subtext="A calculator of sorts [WIP]"
            href="https://linkous.herokuapp.com"
          />
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
}
