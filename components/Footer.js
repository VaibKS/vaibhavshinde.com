import Link from 'next/link';
import Container from './Container';

export default function Footer({ className }) {
  return (
    <Container className={`mt-10 ${className}`}>
      <hr className="w-full border-1 border-gray-200 mb-8" />
      <footer className="grid grid-cols-1 md:grid-cols-2 space-y-8 mb-24 md:space-y-0 text-gray-500 transition">
        <div className="space-y-3">
          <h5 className="uppercase text-xs font-semibold tracking-wide text-gray-700">
            Links
          </h5>
          <div className="flex flex-col space-y-3">
            <Link href="/">
              <a className="hover:text-gray-700">Home</a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-gray-700">Blog</a>
            </Link>
            <Link href="/snippets">
              <a className="hover:text-gray-700">Snippets</a>
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h5 className="uppercase text-xs font-semibold tracking-wide text-gray-700">
            Socials
          </h5>
          <div className="flex flex-col space-y-3">
            <a
              className="hover:text-gray-700"
              href="https://twitter.com/vaibhavk_shinde"
            >
              Twitter
            </a>
            <a className="hover:text-gray-700" href="https://github.com/VaibKS">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
}
