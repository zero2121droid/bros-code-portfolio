"use client";

import { motion } from "framer-motion";

// Since we don't have actual Lottie files yet, I'll create CSS-based programming animations
// You can replace these with actual Lottie animations later

interface ProgrammingAnimationProps {
  type: "coding" | "terminal" | "data-flow" | "code-compile" | "bug-fix" | "deploy";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ProgrammingAnimation({ 
  type, 
  size = "md", 
  className = "" 
}: ProgrammingAnimationProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32"
  };

  const animations = {
    coding: (
      <div className={`${sizeClasses[size]} ${className} relative overflow-hidden rounded-lg bg-black/10 dark:bg-white/5 border border-primary/20`}>
        <div className="absolute inset-2 font-mono text-xs">
          <motion.div
            className="text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
          >
            {"<div>"}
          </motion.div>
          <motion.div
            className="text-accent ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5, times: [0, 0.2, 0.4, 0.8, 1] }}
          >
            {"code"}
          </motion.div>
          <motion.div
            className="text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            {"</div>"}
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-1 right-1 w-1 h-3 bg-primary terminal-cursor"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>
    ),
    
    terminal: (
      <div className={`${sizeClasses[size]} ${className} relative overflow-hidden rounded-lg bg-black/90 dark:bg-black border border-primary/20`}>
        <div className="absolute top-1 left-1 right-1 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-t" />
        <div className="absolute inset-2 mt-3 font-mono text-xs text-green-400">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            className="overflow-hidden whitespace-nowrap"
          >
            $ npm run dev
          </motion.div>
          <motion.div
            className="text-primary text-[8px] mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
          >
            ✓ Ready
          </motion.div>
        </div>
      </div>
    ),
    
    "data-flow": (
      <div className={`${sizeClasses[size]} ${className} relative overflow-hidden rounded-lg bg-background border border-primary/20`}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{ x: -4, y: 8 + i * 4 }}
            animate={{ x: 100, y: 8 + i * 4 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
        <motion.div
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 border-2 border-primary rounded"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    ),
    
    "code-compile": (
      <div className={`${sizeClasses[size]} ${className} relative overflow-hidden rounded-lg bg-background border border-primary/20 flex items-center justify-center`}>
        <motion.div
          className="w-8 h-8 border-2 border-primary rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-xs font-mono text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {"{ }"}
        </motion.div>
      </div>
    ),
    
    "bug-fix": (
      <div className={`${sizeClasses[size]} ${className} relative overflow-hidden rounded-lg bg-red-500/10 border border-red-500/20`}>
        <motion.div
          className="absolute top-2 left-2 text-red-500 text-lg"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          🐛
        </motion.div>
        <motion.div
          className="absolute bottom-2 right-2 w-3 h-3 bg-green-500 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            times: [0, 0.3, 0.7, 1]
          }}
        />
      </div>
    ),
    
    deploy: (
      <div className={`${sizeClasses[size]} ${className} relative overflow-hidden rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center`}>
        <motion.div
          className="text-green-500 text-xl"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
        >
          🚀
        </motion.div>
        <motion.div
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
        />
      </div>
    )
  };

  return animations[type];
}

// Matrix-style falling code component
export function MatrixRain({ className = "" }: { className?: string }) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]();=+-*/";
  
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-primary/20 text-sm"
          style={{ left: `${i * 5}%` }}
          animate={{
            y: ["-100vh", "100vh"],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
        >
          {chars.charAt(Math.floor(Math.random() * chars.length))}
        </motion.div>
      ))}
    </div>
  );
}

// Floating code symbols
export function FloatingCode({ className = "" }: { className?: string }) {
  const symbols = ["</>", "{}", "[]", "()", "&&", "||", "===", "!=", "=>"];
  
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {symbols.map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-primary/10 text-2xl md:text-4xl font-bold"
          style={{
            left: `${10 + (i * 10)}%`,
            top: `${20 + (i % 3) * 30}%`
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
}