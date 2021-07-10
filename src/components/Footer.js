import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

import Container from './Container';

export default function Footer({ className }) {
  return (
    <Container className={`mt-10 ${className}`}>
      <hr className="w-full border-1 border-gray-200 dark:border-gray-400 mb-8" />
      <footer className="grid grid-cols-1 md:grid-cols-2 space-y-8 mb-24 md:space-y-0 text-gray-500 transition">
        <div className="space-y-3">
          <h5 className="uppercase text-xs font-semibold tracking-wide text-gray-700 dark:text-gray-400">
            Links
          </h5>
          <div className="flex flex-col space-y-3">
            <Link href="/">
              <a className="hover:text-gray-700 dark:hover:text-gray-200">
                Home
              </a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-gray-700 dark:hover:text-gray-200">
                Blog
              </a>
            </Link>
            <Link href="/snippets">
              <a className="hover:text-gray-700 dark:hover:text-gray-200">
                Snippets
              </a>
            </Link>
          </div>
        </div>

        <div className="space-y-3 md:text-right">
          <h5 className="uppercase text-xs font-semibold tracking-wide text-gray-700 dark:text-gray-400">
            Socials
          </h5>
          <div className="flex flex-col space-y-3">
            <a
              className="hover:text-gray-700 dark:hover:text-gray-200"
              href="https://twitter.com/vaibhavk_shinde"
            >
              Twitter
            </a>
            <a
              className="hover:text-gray-700 dark:hover:text-gray-200"
              href="https://github.com/vaibhavshn"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
}
