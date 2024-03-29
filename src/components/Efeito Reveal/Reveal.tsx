import React from "react";
import styles from "./Reveal.module.css";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface IRevealProps<T> {
  children: T;
  width?: number | string;
}

export default function Reveal({ children, width }: IRevealProps<React.ReactNode>){
  const ref = useRef<HTMLDivElement | null>(null)!;
  const inView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControl.start("visible");
    }
  }, [inView, mainControl]);

  return (
    <section className={styles.homesection} ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        className={styles.container}
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
