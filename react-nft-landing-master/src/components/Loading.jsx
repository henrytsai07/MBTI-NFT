import React from "react";
import ReactLoading from "react-loading";
import carrot from "../assets/carrot.png";
import { motion } from "framer-motion"



export default function Loading() {
  return (
    <motion.div className="loading" initial={{opacity: 0}} animate={{opacity:1}}  >
      <ReactLoading
        className="circle"
        type="spin"
        color="orange"
        height="10%"
        width="10%"
      />
        <motion.img className="carrot" src={carrot} alt="carrot" />

    </motion.div>
  );
}
