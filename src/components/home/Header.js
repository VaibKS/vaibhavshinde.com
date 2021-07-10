import { motion } from 'framer-motion';
import SlideText from './SlideText';

export default function Header() {
  return (
    <>
      <motion.main
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <header className="w-full max-w-3xl p-6 mx-auto mt-28 mb-16 flex flex-col md:flex-row">
          <div className="space-y-4 text-center md:text-left">
            <div>
              <div className="text-gray-600">Hey, I'm</div>
              <h1 className="text-black text-4xl md:text-5xl font-extrabold tracking-tighter">
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
}
