import Container from '../Container';
import PostCard from '@/components/PostCard';

export default function RecentBlogPosts({ posts }) {
  return (
    <Container className="max-w-3xl md:px-6 mt-16 md:mt-28">
      <div className="space-y-8">
        <div className="text-2xl text-black dark:text-gray-300 font-bold tracking-tight">
          Latest Posts
        </div>
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              href={`/${post.type}/${post.slug}`}
              title={post.title}
              subtext={post.subtext}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
