import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { SearchIcon } from '@heroicons/react/outline';

import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { getAllPostsMetaData } from '@/utils/posts';

const SnippetCard = ({ title, subtext, date, href }) => (
  <Link href={href}>
    <a href={href}>
      <div className="cursor-pointer space-y-3">
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-medium">{title}</h2>
          <span className="w-32 text-sm text-gray-500 text-left md:text-right">
            {format(parseISO(date), 'MMMM dd, yyyy')}
          </span>
        </div>
        <p className="text-gray-600">{subtext}</p>
      </div>
    </a>
  </Link>
);

export default function Blog({ posts }) {
  const [query, setQuery] = useState('');

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.subtext.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Snippets - Vaibhav Shinde</title>
      </Head>

      <Container className="mt-12">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Snippets
          </h1>
          <div className="flex items-center">
            <input
              className="w-full px-3 py-2 pr-10 text-gray-700 bg-white border outline-none transition focus:border-blue-500 focus:ring-1 rounded-md ring-blue-500 focus:shadow-xs"
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchIcon className="-ml-8 w-5 h-5 cursor-pointer text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16">
          {filteredPosts.length == 0 && (
            <div className="text-center space-y-6">
              <h5 className="font-bold text-6xl text-blue-600">404</h5>
              <p className="text-gray-500">No posts found</p>
            </div>
          )}
          {filteredPosts.map((post) => (
            <SnippetCard
              key={post.slug}
              href={`/snippets/${post.slug}`}
              title={post.title}
              subtext={post.subtext}
              date={post.date}
            />
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPostsMetaData('snippets');
  return {
    props: {
      posts: posts
    }
  };
}
