import Container from '@/components/container';
import Footer from '@/components/footer';
import { getAllPostsMetaData } from '@/utils/posts';
import { format, parseISO } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';

const SnippetCard = ({ title, subtext, date, href }) => (
  <Link href={href}>
    <a href={href}>
      <div className="cursor-pointer space-y-3">
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
          <span className="text-sm text-gray-500">
            {format(parseISO(date), 'MMMM dd, yyyy')}
          </span>
        </div>
        <p className="text-gray-600">{subtext}</p>
      </div>
    </a>
  </Link>
);

export default function Blog({ posts }) {
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
          <p className="text-gray-800">
            I have written a total of {posts.length} snippets over the last few years.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16">
          {posts.map(post => (
            <SnippetCard key={post.slug} href={`/snippets/${post.slug}`} title={post.title} subtext={post.subtext} date={post.date}/>
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPostsMetaData('snippets')
  return {
    props: {
      posts: posts,
    }
  };
}
