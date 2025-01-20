"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { SECTIONS } from "@/constants/homepage";

export const MobileNavMenu = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    closed: { opacity: 0, y: "-100%", transition: { duration: 0.6 } },
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      {isOpen ? (
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="absolute left-0 right-0 top-16 z-20 w-full flex-col items-center bg-accent text-invert p-6"
        >
          <div onClick={() => setIsOpen(false)}>
            {Object.values(SECTIONS).map(({ key, title }) => (
              <MenuItem href={`#${key}`} label={title} key={key} />
            ))}
          </div>
          <div />
        </motion.div>
      ) : null}
    </>
  );
};

const MenuItem = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="flex items-center p-4 text-lg hover:bg-surface-hover"
  >
    {label}
  </Link>
);

export default MobileNavMenu;
