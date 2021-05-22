import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Header from '@/components/home/Header';
import RecentProjects from '@/components/home/RecentProjects';

import Footer from '@/components/footer';

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
        <title>Vaibhav Shinde - Developer, Designer</title>
      </Head>
      <Header />
      {loadContent && (
        <motion.main
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <RecentProjects />
          <Footer/>
        </motion.main>
      )}
    </div>
  );
}
