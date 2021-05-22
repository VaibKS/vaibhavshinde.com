import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { getSlugs, getPostBySlug } from '@/utils/posts';
import BlogLayout from '@/layouts/blog';

const MDXComponents = {
  Image
};

export default function BlogPost({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents}></MDXRemote>
    </BlogLayout>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug('snippets', params.slug);
  return { props: { ...post } };
}

export async function getStaticPaths() {
  const slugs = getSlugs('snippets');
  return {
    paths: slugs.map((slug) => ({
      params: { slug }
    })),
    fallback: false
  };
}
