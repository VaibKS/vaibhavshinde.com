import { useState } from 'react';
import Head from 'next/head';

import Container from '@/components/Container';
import PostCard from '@/components/PostCard';
import Footer from '@/components/Footer';
import { getAllPostsMetaData } from '@/utils/posts';
import { SearchIcon } from '@heroicons/react/outline';

export async function getStaticProps() {
  const posts = getAllPostsMetaData('blog');
  return {
    props: {
      posts: posts
    }
  };
}

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
        <title>Blog - Vaibhav Shinde</title>
      </Head>

      <Container className="mt-12">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
            Blog
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
          {filteredPosts.length === 0 && (
            <div className="text-center space-y-6">
              <h5 className="font-bold text-6xl text-blue-600">404</h5>
              <p className="text-gray-500">No posts found</p>
            </div>
          )}
          {filteredPosts.map((post) => (
            <PostCard
              key={post.slug}
              href={`/blog/${post.slug}`}
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
