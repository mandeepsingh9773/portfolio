"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const TAGS = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  section: motion.section,
  span: motion.span,
  ul: motion.ul,
  ol: motion.ol,
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}) {
  const MotionTag = TAGS[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
