"use client";

import { motion } from "framer-motion";

function InfrastructureGapIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <defs>
        <linearGradient id="infrastructureGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
          <stop offset="100%" stopColor="rgba(5, 150, 105, 0.1)" />
        </linearGradient>
        <pattern id="crackPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0,20 Q20,10 40,20" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" fill="none"/>
          <path d="M20,0 Q30,20 20,40" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" fill="none"/>
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#infrastructureGradient)" />

      {/* Title */}
      <motion.text
        x="200"
        y="30"
        textAnchor="middle"
        fontSize="16"
        fill="currentColor"
        fontWeight="bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        India's Robotics Infrastructure
      </motion.text>

      {/* Fragmented Foundation */}
      <motion.g
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Broken platform base */}
        <motion.rect
          x="50"
          y="350"
          width="300"
          height="30"
          fill="url(#crackPattern)"
          stroke="rgba(239, 68, 68, 0.6)"
          strokeWidth="2"
          strokeDasharray="10,5"
          animate={{ 
            strokeDashoffset: [0, -15],
            y: [350, 355, 350]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        
        {/* Foundation cracks */}
        <motion.path
          d="M 100 350 L 110 330 L 120 350"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 280 350 L 270 330 L 260 350"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.g>

      {/* Hardware Scarcity */}
      <motion.g
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <text x="80" y="80" fontSize="12" fill="currentColor" fontWeight="bold">Hardware</text>
        
        {/* Empty hardware rack */}
        <motion.rect
          x="30"
          y="100"
          width="100"
          height="120"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Missing components */}
        <motion.g opacity="0.3">
          <rect x="40" y="110" width="80" height="15" rx="2" fill="none" stroke="currentColor" strokeDasharray="2,2" />
          <rect x="40" y="135" width="80" height="15" rx="2" fill="none" stroke="currentColor" strokeDasharray="2,2" />
          <rect x="40" y="160" width="80" height="15" rx="2" fill="none" stroke="currentColor" strokeDasharray="2,2" />
          <rect x="40" y="185" width="80" height="15" rx="2" fill="none" stroke="currentColor" strokeDasharray="2,2" />
        </motion.g>
        
        {/* Cost indicator */}
        <motion.text
          x="80"
          y="245"
          textAnchor="middle"
          fontSize="10"
          fill="#ef4444"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          5x Cost
        </motion.text>
      </motion.g>

      {/* Testing Facilities */}
      <motion.g
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <text x="200" y="80" fontSize="12" fill="currentColor" fontWeight="bold" textAnchor="middle">Testing</text>
        
        {/* Limited testing facility */}
        <motion.rect
          x="150"
          y="100"
          width="100"
          height="80"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{
            stroke: ["rgba(245, 158, 11, 0.8)", "rgba(217, 119, 6, 1)", "rgba(245, 158, 11, 0.8)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Limited equipment */}
        <motion.circle
          cx="175"
          cy="130"
          r="8"
          fill="none"
          stroke="rgba(245, 158, 11, 0.8)"
          strokeWidth="2"
          strokeDasharray="50,50"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.circle
          cx="225"
          cy="150"
          r="6"
          fill="none"
          stroke="rgba(245, 158, 11, 0.8)"
          strokeWidth="2"
          strokeDasharray="30,30"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Warning sign */}
        <motion.polygon
          points="200,160 210,175 190,175"
          fill="#f59e0b"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="200" y="172" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">!</text>
        
        <text x="200" y="195" textAnchor="middle" fontSize="10" fill="#f59e0b">Expensive</text>
      </motion.g>

      {/* Supply Chain */}
      <motion.g
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <text x="320" y="80" fontSize="12" fill="currentColor" fontWeight="bold">Supply Chain</text>
        
        {/* Fragmented supply chain */}
        <motion.g>
          {/* Broken chain links */}
          <motion.circle
            cx="290"
            cy="110"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M 298 118 L 312 132"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.circle
            cx="320"
            cy="140"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          
          <motion.path
            d="M 328 148 L 342 162"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
          <motion.path
            d="M 342 148 L 328 162"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
          
          <motion.circle
            cx="350"
            cy="170"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="20,10"
            animate={{ 
              scale: [1, 0.9, 1],
              rotate: 360
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.g>
        
        <text x="320" y="195" textAnchor="middle" fontSize="10" fill="#ef4444">Fragmented</text>
      </motion.g>

      {/* Central Infrastructure Gap */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {/* Gap hole */}
        <motion.circle
          cx="200"
          cy="270"
          r="40"
          fill="rgba(239, 68, 68, 0.1)"
          stroke="#ef4444"
          strokeWidth="3"
          strokeDasharray="10,5"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        
        {/* Gap symbol */}
        <motion.text
          x="200"
          y="280"
          textAnchor="middle"
          fontSize="24"
          fill="#ef4444"
          fontWeight="bold"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          GAP
        </motion.text>
      </motion.g>

      {/* Cost multiplier indicators */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {/* Flying cost indicators */}
        <motion.g
          animate={{ 
            y: [-10, 10, -10],
            x: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        >
          <circle cx="100" cy="300" r="12" fill="rgba(239, 68, 68, 0.8)" />
          <text x="100" y="305" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">₹₹₹</text>
        </motion.g>
        
        <motion.g
          animate={{ 
            y: [10, -10, 10],
            x: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <circle cx="300" cy="300" r="12" fill="rgba(239, 68, 68, 0.8)" />
          <text x="300" y="305" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">₹₹₹</text>
        </motion.g>
      </motion.g>

      {/* Comparison arrows pointing down */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.path
          d="M 80 240 L 80 260 M 75 255 L 80 260 L 85 255"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M 320 240 L 320 260 M 315 255 L 320 260 L 325 255"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
      </motion.g>

      {/* Bottom statistics */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.text
          x="200"
          y="390"
          textAnchor="middle"
          fontSize="12"
          fill="#ef4444"
          fontWeight="bold"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          5x Higher Development Costs vs Global Competitors
        </motion.text>
      </motion.g>

      {/* Floating debris representing inefficiency */}
      <motion.g>
        {[...Array(6)].map((_, i) => (
          <motion.polygon
            key={i}
            points={`${150 + i * 30},${200 + (i % 2) * 20} ${155 + i * 30},${195 + (i % 2) * 20} ${160 + i * 30},${200 + (i % 2) * 20} ${155 + i * 30},${205 + (i % 2) * 20}`}
            fill="rgba(239, 68, 68, 0.4)"
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
      </motion.g>
    </svg>
  );
}

export default InfrastructureGapIcon;
