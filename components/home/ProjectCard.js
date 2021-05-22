import { CodeIcon } from "@heroicons/react/outline/";
import Link from "next/link";

const ProjectCard = ({ title, subtext, href }) => {
  const card = (
    <div className="flex flex-row items-center p-4 bg-white cursor-pointer transform transition rounded-md border-2 border-gray-100 hover:shadow-lg hover:scale-105 hover:z-10 space-x-4 md:items-center">
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

export default ProjectCard;
