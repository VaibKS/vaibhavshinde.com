import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';

const dataPath = path.join(process.cwd(), 'data');

export async function getPostBySlug(type, slug) {
  const source = fs.readFileSync(
    path.join(dataPath, type, `${slug}.mdx`),
    'utf-8'
  );

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require('remark-emoji')],
      rehypePlugins: [mdxPrism]
    }
  });
  return { mdxSource, frontMatter: { ...data } };
}

export function getSlugs(type) {
  return fs
    .readdirSync(path.join(dataPath, type))
    .map((slug) => slug.replace(/\.mdx$/, ''));
}

export function getAllPostsMetaData(type) {
  const files = fs.readdirSync(path.join(dataPath, type));
  const ret = files.reduce((allPosts, filename) => {
    const source = fs.readFileSync(
      path.join(dataPath, type, filename),
      'utf-8'
    );
    const { data } = matter(source);
    
    return [
      {
        ...data,
        slug: filename.replace(/\.mdx$/, '')
      },
      ...allPosts
    ];
  }, []);
  return ret;
}
