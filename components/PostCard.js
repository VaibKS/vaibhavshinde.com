import Link from 'next/link';
import { format, parseISO } from 'date-fns';

export default function PostCard({ title, subtext, date, href }) {
  return (
    <Link href={href}>
      <a href={href}>
        <div className="cursor-pointer space-y-3">
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between transition text-gray-700 hover:text-gray-900">
            <h2 className="text-xl font-medium">{title}</h2>
            <span className="w-32 text-sm text-gray-500 text-left md:text-right">
              {format(parseISO(date), 'MMMM dd, yyyy')}
            </span>
          </div>
          <p className="text-gray-600">{subtext}</p>
        </div>
      </a>
    </Link>
  );
}
