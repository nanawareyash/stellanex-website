"use client";

import { motion } from "framer-motion";

function IntegrationHellIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <defs>
        <radialGradient id="hellGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
          <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#hellGradient)" />

      {/* System A */}
      <motion.g
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.rect
          x="30"
          y="80"
          width="100"
          height="80"
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{
            stroke: ["rgba(59, 130, 246, 0.8)", "rgba(37, 99, 235, 1)", "rgba(59, 130, 246, 0.8)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="80"
          cy="120"
          r="15"
          fill="rgba(59, 130, 246, 0.3)"
          stroke="rgba(59, 130, 246, 0.8)"
          strokeWidth="2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="80" y="125" textAnchor="middle" fontSize="10" fill="currentColor">A</text>
        <text x="80" y="180" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.7">System A</text>
      </motion.g>

      {/* System B */}
      <motion.g
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.rect
          x="270"
          y="80"
          width="100"
          height="80"
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{
            stroke: ["rgba(16, 185, 129, 0.8)", "rgba(5, 150, 105, 1)", "rgba(16, 185, 129, 0.8)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.circle
          cx="320"
          cy="120"
          r="15"
          fill="rgba(16, 185, 129, 0.3)"
          stroke="rgba(16, 185, 129, 0.8)"
          strokeWidth="2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <text x="320" y="125" textAnchor="middle" fontSize="10" fill="currentColor">B</text>
        <text x="320" y="180" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.7">System B</text>
      </motion.g>

      {/* System C */}
      <motion.g
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.rect
          x="30"
          y="240"
          width="100"
          height="80"
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{
            stroke: ["rgba(168, 85, 247, 0.8)", "rgba(147, 51, 234, 1)", "rgba(168, 85, 247, 0.8)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle
          cx="80"
          cy="280"
          r="15"
          fill="rgba(168, 85, 247, 0.3)"
          stroke="rgba(168, 85, 247, 0.8)"
          strokeWidth="2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <text x="80" y="285" textAnchor="middle" fontSize="10" fill="currentColor">C</text>
        <text x="80" y="340" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.7">System C</text>
      </motion.g>

      {/* System D */}
      <motion.g
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.rect
          x="270"
          y="240"
          width="100"
          height="80"
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{
            stroke: ["rgba(245, 158, 11, 0.8)", "rgba(217, 119, 6, 1)", "rgba(245, 158, 11, 0.8)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.circle
          cx="320"
          cy="280"
          r="15"
          fill="rgba(245, 158, 11, 0.3)"
          stroke="rgba(245, 158, 11, 0.8)"
          strokeWidth="2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        />
        <text x="320" y="285" textAnchor="middle" fontSize="10" fill="currentColor">D</text>
        <text x="320" y="340" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.7">System D</text>
      </motion.g>

      {/* Complex Integration Mesh - The "Hell" */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {/* Tangled connection lines */}
        <motion.path
          d="M 130 120 Q 200 50 270 120"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{ 
            strokeDashoffset: [0, -10],
            pathLength: [0, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
        
        <motion.path
          d="M 80 160 Q 150 200 320 160"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{ 
            strokeDashoffset: [0, -10],
            pathLength: [0, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5,
            times: [0, 0.5, 1]
          }}
        />

        <motion.path
          d="M 130 280 Q 200 350 270 280"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{ 
            strokeDashoffset: [0, -10],
            pathLength: [0, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1,
            times: [0, 0.5, 1]
          }}
        />

        <motion.path
          d="M 80 240 Q 80 200 130 120"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{ 
            strokeDashoffset: [0, -10],
            pathLength: [0, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5,
            times: [0, 0.5, 1]
          }}
        />

        <motion.path
          d="M 320 240 Q 320 200 270 120"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{ 
            strokeDashoffset: [0, -10],
            pathLength: [0, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2,
            times: [0, 0.5, 1]
          }}
        />
      </motion.g>

      {/* Integration Adapters - The nightmare nodes */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        {/* Adapter 1 */}
        <motion.rect
          x="190"
          y="90"
          width="20"
          height="20"
          rx="4"
          fill="#ef4444"
          filter="url(#glow)"
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <text x="200" y="103" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">1</text>

        {/* Adapter 2 */}
        <motion.rect
          x="240"
          y="190"
          width="20"
          height="20"
          rx="4"
          fill="#ef4444"
          filter="url(#glow)"
          animate={{ 
            rotate: [360, 180, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <text x="250" y="203" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">2</text>

        {/* Adapter 3 */}
        <motion.rect
          x="140"
          y="190"
          width="20"
          height="20"
          rx="4"
          fill="#ef4444"
          filter="url(#glow)"
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <text x="150" y="203" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">3</text>

        {/* Adapter 4 */}
        <motion.rect
          x="190"
          y="290"
          width="20"
          height="20"
          rx="4"
          fill="#ef4444"
          filter="url(#glow)"
          animate={{ 
            rotate: [360, 180, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <text x="200" y="303" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">4</text>
      </motion.g>

      {/* Error symbols */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        {/* Floating error indicators */}
        <motion.path
          d="M 160 140 L 170 130 L 180 140 L 170 150 Z"
          fill="#dc2626"
          animate={{ 
            y: [-5, 5, -5],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <text x="170" y="143" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">!</text>

        <motion.path
          d="M 220 260 L 230 250 L 240 260 L 230 270 Z"
          fill="#dc2626"
          animate={{ 
            y: [5, -5, 5],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <text x="230" y="263" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">!</text>
      </motion.g>

      {/* Central chaos indicator */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 3 }}
      >
        <motion.circle
          cx="200"
          cy="200"
          r="25"
          fill="rgba(239, 68, 68, 0.2)"
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 190 190 L 210 210 M 210 190 L 190 210"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="200" y="235" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7">HELL</text>
      </motion.g>

      {/* Time waste indicator */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <motion.text
          x="200"
          y="30"
          textAnchor="middle"
          fontSize="14"
          fill="#ef4444"
          fontWeight="bold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Months of Integration Work
        </motion.text>
      </motion.g>
    </svg>
  );
}

export default IntegrationHellIcon;
