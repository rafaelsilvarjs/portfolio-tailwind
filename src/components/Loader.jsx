// src/components/Loader.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Carregando portfólio do Rafael...
        </h2>
        <motion.div
          className="h-1 w-40 bg-blue-500 rounded-full animate-pulse"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          style={{ transformOrigin: "center" }}
        />
      </motion.div>
    </div>
  );
}
