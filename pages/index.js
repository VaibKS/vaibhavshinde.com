import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Header from '@/components/home/Header';
import RecentProjects from '@/components/home/RecentProjects';

import Footer from '@/components/Footer';

export default function Home() {
  const [loadContent, setLoadContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadContent(true);
    }, 1200);
  }, []);

  return (
    <div>
      <Head>
        <title>Vaibhav Shinde</title>
        <meta
          name="description"
          content="Full Stack Dev, UI/UX Design and Cyber Security enthusiast"
        />
        <meta name="twitter:title" content="Vaibhav Shinde" />
        <meta
          name="twitter:description"
          content="Full Stack Dev, UI/UX Design and Cyber Security enthusiast"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaibhavshinde.com/" />
        <meta property="og:title" content="Vaibhav Shinde" />
        <meta
          property="og:description"
          content="Full Stack Dev, UI/UX Design and Cyber Security enthusiast"
        />
      </Head>
      <Header />
      {loadContent && (
        <motion.main
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <RecentProjects />
          <Footer />
        </motion.main>
      )}
    </div>
  );
}
