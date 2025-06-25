"use client";

import { motion } from "framer-motion";

function DisconnectedToolsIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Grid */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#grid)" />

      {/* CAD Tool */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.rect
          x="50"
          y="50"
          width="80"
          height="60"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{
            stroke: ["rgba(59, 130, 246, 0.8)", "rgba(37, 99, 235, 1)", "rgba(59, 130, 246, 0.8)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 65 70 L 85 70 L 85 90 L 105 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3,3"
          animate={{ strokeDashoffset: [0, -6] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <text x="90" y="140" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.7">CAD</text>
      </motion.g>

      {/* Simulation Tool */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.circle
          cx="320"
          cy="80"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{
            stroke: ["rgba(168, 85, 247, 0.8)", "rgba(147, 51, 234, 1)", "rgba(168, 85, 247, 0.8)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "320px 80px" }}
        >
          <circle cx="310" cy="70" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="330" cy="70" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="330" cy="90" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="310" cy="90" r="3" fill="currentColor" opacity="0.6" />
        </motion.g>
        <text x="320" y="140" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.7">SIM</text>
      </motion.g>

      {/* Code Tool */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.rect
          x="50"
          y="290"
          width="80"
          height="60"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{
            stroke: ["rgba(16, 185, 129, 0.8)", "rgba(5, 150, 105, 1)", "rgba(16, 185, 129, 0.8)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.g>
          <motion.path
            d="M 65 310 L 75 310 M 65 320 L 85 320 M 65 330 L 80 330"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>
        <text x="90" y="380" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.7">CODE</text>
      </motion.g>

      {/* Control Tool */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.polygon
          points="290,320 320,300 350,320 320,340"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{
            stroke: ["rgba(239, 68, 68, 0.8)", "rgba(220, 38, 38, 1)", "rgba(239, 68, 68, 0.8)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.circle
          cx="320"
          cy="320"
          r="8"
          fill="currentColor"
          opacity="0.6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="320" y="380" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.7">CTRL</text>
      </motion.g>

      {/* Broken Connection Lines */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {/* CAD to SIM - Broken */}
        <motion.path
          d="M 130 80 L 180 80 M 220 80 L 290 80"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5,10"
          opacity="0.3"
          animate={{ strokeDashoffset: [0, -15] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="200"
          cy="80"
          r="4"
          fill="#ef4444"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* SIM to CTRL - Broken */}
        <motion.path
          d="M 320 110 L 320 160 M 320 200 L 320 290"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5,10"
          opacity="0.3"
          animate={{ strokeDashoffset: [0, -15] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
        <motion.circle
          cx="320"
          cy="180"
          r="4"
          fill="#ef4444"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* CTRL to CODE - Broken */}
        <motion.path
          d="M 290 320 L 240 320 M 200 320 L 130 320"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5,10"
          opacity="0.3"
          animate={{ strokeDashoffset: [0, -15] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.circle
          cx="220"
          cy="320"
          r="4"
          fill="#ef4444"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* CODE to CAD - Broken */}
        <motion.path
          d="M 90 290 L 90 240 M 90 200 L 90 110"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5,10"
          opacity="0.3"
          animate={{ strokeDashoffset: [0, -15] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />
        <motion.circle
          cx="90"
          cy="220"
          r="4"
          fill="#ef4444"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.g>

      {/* Frustration Indicators */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        {/* Warning triangles */}
        <motion.path
          d="M 200 200 L 210 180 L 190 180 Z"
          fill="#f59e0b"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="200" y="197" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">!</text>
      </motion.g>

      {/* Central disconnection symbol */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.circle
          cx="200"
          cy="200"
          r="20"
          fill="none"
          stroke="#ef4444"
          strokeWidth="3"
          strokeDasharray="0,20"
          animate={{ 
            strokeDasharray: ["0,126", "63,63", "0,126"],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
        <motion.path
          d="M 185 200 L 215 200"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ scaleX: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>
    </svg>
  );
}

export default DisconnectedToolsIcon;
