import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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

export default SlideText;
