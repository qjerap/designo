import React from "react";
import { motion } from "framer-motion";

const Animation = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-0.35rem" }}
      animate={{ opacity: 1, translateY: "0rem" }}
      transition={{ duration: 0.55 }}
    >
      {props.children}
    </motion.div>
  );
};

export default Animation;