import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <Container className="mt-10">
      <hr className="w-full border-1 border-gray-200 mb-8" />
      <footer className="grid grid-cols-1 md:grid-cols-2 space-y-3 mb-24 md:space-y-0 text-gray-500 transition hover:text-gray-700">
        <div className="flex flex-col space-y-3">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/snippets">
            <a>Snippets</a>
          </Link>
        </div>

        <div className="flex flex-col space-y-3">
          <a href="https://github.com/VaibKS">Twitter</a>
          <a href="https://github.com/VaibKS">GitHub</a>
          <a href="https://github.com/VaibKS">LinkedIn</a>
        </div>
      </footer>
    </Container>
  );
}
