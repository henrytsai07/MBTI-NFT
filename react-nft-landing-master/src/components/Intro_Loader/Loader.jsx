import React from "react";
import { motion } from "framer-motion";

import Image from "./Image"
import tia from "../../assets/Tia.jpg";
import kevin from "../../assets/Kevin.jpg";
import katie from "../../assets/Katie.jpg";
import henry from "../../assets/Henry.jpg";
import michelle from "../../assets/Michelle.jpg";


// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image-1" src = {michelle} />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img
            layoutId="main-image-1"
            src={henry}
            
            />
        </motion.div>
        <ImageBlock variants={item} id="image-3" src={tia} />
        <ImageBlock variants={item} id="image-4" src={kevin}/>
        <ImageBlock variants={item} id="image-5" src={katie}/>
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, id, src}) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <img src={src}/>
      {/* <Image
        // src={process.env.PUBLIC_URL + `assets/images/${id}.webp`}
        src={bunny_wiz}
        fallback="../../assets/images/image-1.jpg"
        alt={id}
      /> */}
    </motion.div>
  );
};
export default Loader;
