import Head from 'next/head';
import { parseISO, format } from 'date-fns';
import 'prism-themes/themes/prism-atom-dark.css'
import Image from 'next/image';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <article className="w-full max-w-3xl mx-auto p-8 mt-12">
      <Head>
        <title>{frontMatter.title} - Vaibhav Shinde</title>
        <link rel="stylesheet" href="/path/to/styles/default.css" />
      </Head>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tighter leading-tight">
          {frontMatter.title}
        </h1>
        <div className="flex items-center space-x-3 text-gray-700">
          <div className="flex items-center space-x-2">
            <Image src="/static/images/avatar.jpg" width={24} height={24} className="rounded-full"/>
            <span className="text-gray-600 text-sm">
              Vaibhav Shinde
            </span>
          </div>
          <div className="text-sm text-gray-500 font-light">
            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
          </div>
        </div>
      </div>
      <div className="prose mt-8">{children}</div>
      <div className="mb-[200px]"></div>
    </article>
  );
}
