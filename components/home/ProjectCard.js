import { CodeIcon, ExternalLinkIcon } from '@heroicons/react/outline/';
import Link from 'next/link';

export default function ProjectCard({ title, subtext, href }) {
  const isExternal = href && /^https?:\/\//.test(href);

  // const card = (
  //   <div className="flex flex-row md:flex-col items-center p-4 bg-white cursor-pointer transform transition rounded-md border-2 text-gray-600 hover:text-gray-800 border-gray-100 hover:shadow-lg hover:scale-105 hover:z-10 space-x-4 md:space-x-0 md:space-y-3">
  //     {/* <div className="my-3">
  //       <CodeIcon className="h-10" />
  //     </div> */}
  //     <div className="space-y-1">
  //       <div className="flex items-center space-x-1 text-md font-bold tracking-tight">
  //         <h3>{title}</h3>
  //         {isExternal && <ExternalLinkIcon className="h-4 text-gray-400" />}
  //       </div>
  //       <div className="text-sm text-gray-700 leading-5">{subtext}</div>
  //     </div>
  //   </div>
  // );

  const card = (
    <div className="flex flex-col h-32 p-4 bg-white cursor-pointer transform transition rounded-md border-2 border-gray-100 text-gray-600 hover:text-gray-800 hover:shadow-lg hover:scale-105 hover:z-10 space-y-2">
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

// const ProjectCard = ({ title, subtext, href }) => {
//   const isExternal = href && /^https?:\/\//.test(href);

//   const card = (
//     <div className="flex flex-row items-center p-4 bg-white cursor-pointer transform transition rounded-md border-2 text-gray-600 hover:text-gray-800 border-gray-100 hover:shadow-lg hover:scale-105 hover:z-10 space-x-4 md:items-center">
//       <div className="my-3 md:pl-2">
//         <CodeIcon className="h-10" />
//       </div>
//       <div className="space-y-1">
//         <div className="flex items-center space-x-1 text-md font-bold tracking-tight">
//           <h3>{title}</h3>
//           {isExternal && <ExternalLinkIcon className="h-4 text-gray-400" />}
//         </div>
//         <div className="text-sm text-gray-700 leading-5">{subtext}</div>
//       </div>
//     </div>
//   );

//   if (isExternal)
//     return (
//       <a href={href} target="_blank">
//         {card}
//       </a>
//     );

//   if (href) return <Link href={href}>{card}</Link>;

//   return card;
// };

// export default ProjectCard;
