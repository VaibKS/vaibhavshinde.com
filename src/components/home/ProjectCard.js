import { CodeIcon, ExternalLinkIcon } from '@heroicons/react/outline/';
import Link from 'next/link';

export default function ProjectCard({ title, subtext, href }) {
  const isExternal = href && /^https?:\/\//.test(href);

  const card = (
    <div className="flex flex-col md:h-32 p-4 cursor-pointer transform transition rounded-md border-2 border-gray-100 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-gray-800 hover:shadow-lg hover:scale-105 hover:z-10 space-y-2">
      <div className="space-x-1">
        <span className="text-md font-bold tracking-tight">{title}</span>
        {isExternal && (
          <ExternalLinkIcon className="inline h-4 text-gray-400" />
        )}
      </div>
      <div className="text-sm leading-5">{subtext}</div>
    </div>
  );

  if (isExternal)
    return (
      <a href={href} target="_blank">
        {card}
      </a>
    );

  if (href) return <Link href={href}>{card}</Link>;

  return card;
}
