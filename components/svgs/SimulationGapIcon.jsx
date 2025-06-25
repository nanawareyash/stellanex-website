"use client";

import { motion } from "framer-motion";

function SimulationGapIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background split */}
      <defs>
        <linearGradient id="splitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
          <stop offset="49%" stopColor="rgba(168, 85, 247, 0.1)" />
          <stop offset="51%" stopColor="rgba(239, 68, 68, 0.1)" />
          <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
        </linearGradient>
        <filter id="glitch">
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
        </filter>
      </defs>
      <rect width="400" height="400" fill="url(#splitGradient)" />

      {/* Dividing line */}
      <motion.line
        x1="200"
        y1="0"
        x2="200"
        y2="400"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="10,5"
        opacity="0.3"
        animate={{ strokeDashoffset: [0, -15] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* SIMULATION Side (Left) */}
      <motion.g
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <text x="100" y="40" textAnchor="middle" fontSize="16" fill="currentColor" fontWeight="bold">SIMULATION</text>
        
        {/* Perfect simulated robot */}
        <motion.g
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "100px 150px" }}
        >
          {/* Robot body */}
          <motion.rect
            x="80"
            y="120"
            width="40"
            height="50"
            rx="8"
            fill="none"
            stroke="rgba(168, 85, 247, 0.8)"
            strokeWidth="2"
            animate={{
              stroke: ["rgba(168, 85, 247, 0.8)", "rgba(147, 51, 234, 1)", "rgba(168, 85, 247, 0.8)"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Robot head */}
          <motion.circle
            cx="100"
            cy="105"
            r="12"
            fill="none"
            stroke="rgba(168, 85, 247, 0.8)"
            strokeWidth="2"
            animate={{
              stroke: ["rgba(168, 85, 247, 0.8)", "rgba(147, 51, 234, 1)", "rgba(168, 85, 247, 0.8)"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Robot eyes */}
          <motion.circle cx="95" cy="102" r="2" fill="rgba(168, 85, 247, 0.8)" />
          <motion.circle cx="105" cy="102" r="2" fill="rgba(168, 85, 247, 0.8)" />
          
          {/* Robot arms */}
          <motion.line
            x1="80"
            y1="135"
            x2="65"
            y2="140"
            stroke="rgba(168, 85, 247, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "80px 135px" }}
          />
          <motion.line
            x1="120"
            y1="135"
            x2="135"
            y2="140"
            stroke="rgba(168, 85, 247, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ rotate: [10, -10, 10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "120px 135px" }}
          />
          
          {/* Robot legs */}
          <motion.line
            x1="90"
            y1="170"
            x2="90"
            y2="185"
            stroke="rgba(168, 85, 247, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <motion.line
            x1="110"
            y1="170"
            x2="110"
            y2="185"
            stroke="rgba(168, 85, 247, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Perfect environment indicators */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Perfect grid environment */}
          <g opacity="0.5">
            <line x1="20" y1="220" x2="180" y2="220" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1" />
            <line x1="20" y1="240" x2="180" y2="240" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1" />
            <line x1="20" y1="260" x2="180" y2="260" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1" />
            <line x1="40" y1="200" x2="40" y2="280" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1" />
            <line x1="80" y1="200" x2="80" y2="280" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1" />
            <line x1="120" y1="200" x2="120" y2="280" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1" />
            <line x1="160" y1="200" x2="160" y2="280" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="1" />
          </g>
          
          {/* Perfect performance metrics */}
          <motion.circle
            cx="50"
            cy="300"
            r="8"
            fill="rgba(34, 197, 94, 0.8)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <text x="70" y="305" fontSize="10" fill="currentColor">100% Success</text>
          
          <motion.circle
            cx="50"
            cy="320"
            r="8"
            fill="rgba(34, 197, 94, 0.8)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <text x="70" y="325" fontSize="10" fill="currentColor">Perfect Control</text>
          
          <motion.circle
            cx="50"
            cy="340"
            r="8"
            fill="rgba(34, 197, 94, 0.8)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
          <text x="70" y="345" fontSize="10" fill="currentColor">No Interference</text>
        </motion.g>
      </motion.g>

      {/* REALITY Side (Right) */}
      <motion.g
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <text x="300" y="40" textAnchor="middle" fontSize="16" fill="currentColor" fontWeight="bold">REALITY</text>
        
        {/* Struggling real robot */}
        <motion.g
          animate={{ 
            x: [0, 5, -3, 2, 0],
            y: [0, -2, 3, -1, 0],
            rotate: [0, -3, 2, -1, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "300px 150px" }}
        >
          {/* Robot body (distorted) */}
          <motion.rect
            x="280"
            y="120"
            width="40"
            height="50"
            rx="8"
            fill="none"
            stroke="rgba(239, 68, 68, 0.8)"
            strokeWidth="2"
            animate={{
              stroke: ["rgba(239, 68, 68, 0.8)", "rgba(220, 38, 38, 1)", "rgba(239, 68, 68, 0.8)"]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            filter="url(#glitch)"
          />
          
          {/* Robot head (tilted) */}
          <motion.circle
            cx="298"
            cy="105"
            r="12"
            fill="none"
            stroke="rgba(239, 68, 68, 0.8)"
            strokeWidth="2"
            animate={{
              stroke: ["rgba(239, 68, 68, 0.8)", "rgba(220, 38, 38, 1)", "rgba(239, 68, 68, 0.8)"]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Robot eyes (confused) */}
          <motion.circle 
            cx="293" 
            cy="102" 
            r="2" 
            fill="rgba(239, 68, 68, 0.8)"
            animate={{ scale: [1, 0.5, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.circle cx="303" cy="102" r="2" fill="rgba(239, 68, 68, 0.8)" />
          
          {/* Robot arms (erratic movement) */}
          <motion.line
            x1="280"
            y1="135"
            x2="265"
            y2="140"
            stroke="rgba(239, 68, 68, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ rotate: [-20, 30, -10, 15, -20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "280px 135px" }}
          />
          <motion.line
            x1="320"
            y1="135"
            x2="335"
            y2="140"
            stroke="rgba(239, 68, 68, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ rotate: [20, -30, 10, -15, 20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "320px 135px" }}
          />
          
          {/* Robot legs (unstable) */}
          <motion.line
            x1="290"
            y1="170"
            x2="288"
            y2="185"
            stroke="rgba(239, 68, 68, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ x1: [290, 288, 292, 290] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="310"
            y1="170"
            x2="312"
            y2="185"
            stroke="rgba(239, 68, 68, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ x1: [310, 312, 308, 310] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.g>

        {/* Chaotic environment */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* Irregular obstacles */}
          <motion.polygon
            points="250,230 270,225 275,245 255,250"
            fill="none"
            stroke="rgba(239, 68, 68, 0.6)"
            strokeWidth="2"
            animate={{ rotate: [0, 5, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.circle
            cx="330"
            cy="250"
            r="12"
            fill="none"
            stroke="rgba(239, 68, 68, 0.6)"
            strokeWidth="2"
            animate={{ scale: [1, 1.1, 0.9, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M 240 270 Q 260 260 280 275 Q 300 290 320 275"
            fill="none"
            stroke="rgba(239, 68, 68, 0.6)"
            strokeWidth="2"
            strokeDasharray="3,3"
            animate={{ strokeDashoffset: [0, -6] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Failed performance metrics */}
          <motion.circle
            cx="250"
            cy="300"
            r="8"
            fill="rgba(239, 68, 68, 0.8)"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <text x="270" y="305" fontSize="10" fill="currentColor">30% Success</text>
          
          <motion.circle
            cx="250"
            cy="320"
            r="8"
            fill="rgba(239, 68, 68, 0.8)"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <text x="270" y="325" fontSize="10" fill="currentColor">Sensor Drift</text>
          
          <motion.circle
            cx="250"
            cy="340"
            r="8"
            fill="rgba(239, 68, 68, 0.8)"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
          <text x="270" y="345" fontSize="10" fill="currentColor">Real World Chaos</text>
        </motion.g>
      </motion.g>

      {/* The Gap */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {/* Gap visualization */}
        <motion.path
          d="M 170 200 L 190 180 L 210 200 L 230 180"
          fill="none"
          stroke="#ef4444"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ 
            pathLength: [0, 1, 0],
            strokeWidth: [4, 6, 4]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        
        {/* Gap symbol */}
        <motion.circle
          cx="200"
          cy="190"
          r="15"
          fill="rgba(239, 68, 68, 0.2)"
          stroke="#ef4444"
          strokeWidth="2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="200" y="196" textAnchor="middle" fontSize="12" fill="#ef4444" fontWeight="bold">≠</text>
      </motion.g>

      {/* Failure statistics */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.text
          x="200"
          y="380"
          textAnchor="middle"
          fontSize="14"
          fill="#ef4444"
          fontWeight="bold"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          70% of simulated robots fail in reality
        </motion.text>
      </motion.g>

      {/* Floating error particles */}
      <motion.g>
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={220 + (i * 15)}
            cy={150 + (i % 3) * 20}
            r="2"
            fill="#ef4444"
            opacity="0.6"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2 + (i * 0.2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </motion.g>
    </svg>
  );
}

export default SimulationGapIcon;
