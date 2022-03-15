import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function MenuItem({ title, linkTo, imgSrc }) {
  return (
    <>
      <motion.div
        className="landingPage-Items"
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        whileTap={{ scale: 0.9 }}
      >
        <div className="menuNavWords">{title}</div>
        <NavLink to={linkTo}>
          <div className="">
            <img
              className="landingPage-Items"
              src={imgSrc}
              alt="not available"
            />
          </div>
        </NavLink>
      </motion.div>
    </>
  );
}
