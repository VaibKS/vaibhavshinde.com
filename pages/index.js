import Head from "next/head";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HomeProjects from "@/components/HomeProjects";

const SlideText = () => {
  const roles = [
    "Full Stack Dev",
    "UI/UX Design",
    "CyberSec",
    "Mobile App Dev",
  ];

  const [roleIndex, setRole] = useState(0);
  const [toggleRoles, setToggleRoles] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!toggleRoles) return;
      if (roleIndex < roles.length - 1) setRole((roleIndex) => roleIndex + 1);
      else setRole(0);
    }, 1500);
    return () => clearInterval(interval);
  }, [roleIndex, toggleRoles]);

  return (
    <AnimatePresence>
      <motion.span
        className="absolute text-blue-500 cursor-pointer"
        initial={{ y: 10, scale: 1.4, opacity: 1 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 10, scale: 0.2, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={roleIndex}
        onClick={() => setToggleRoles(!toggleRoles)}
      >
        {roles[roleIndex]}
      </motion.span>
    </AnimatePresence>
  );
};

const Header = () => {
  return (
    <>
      <motion.main
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <header className="w-full max-w-3xl p-6 mx-auto mt-28 mb-10 flex flex-col md:flex-row">
          <div className="space-y-4 text-center md:text-left">
            <div>
              <div className="text-gray-700">Hey, I'm</div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
                Vaibhav Shinde
              </h1>
            </div>
            <div className="text-sm text-gray-500 tracking-wide">
              I BUILD &amp; BREAK STUFF
            </div>
          </div>
          <div className="flex md:items-center justify-center md:justify-end flex-1 mt-12 md:mt-0">
            <div className="relative w-full h-16 text-4xl font-bold tracking-tighter">
              <div className="flex h-16 items-center justify-center md:justify-end mx-6">
                <SlideText />
              </div>
            </div>
          </div>
        </header>
      </motion.main>
    </>
  );
};

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
          <HomeProjects />
        </motion.main>
      )}
    </div>
  );
}
