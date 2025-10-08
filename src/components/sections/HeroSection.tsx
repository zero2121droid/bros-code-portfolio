"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Rocket } from "lucide-react";
import Image from "next/image";
import { FloatingCode } from "../animations/ProgrammingAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-4 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bros-gradient rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bros-gradient rounded-full blur-3xl opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-64 sm:h-64 bros-gradient rounded-full blur-3xl opacity-10"
          animate={{
            scale: [0.8, 1.4, 0.8],
            rotate: [0, 270, 360],
            x: [-50, 50, -50],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Code Elements */}
      <FloatingCode />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 sm:py-0 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            className="mb-[-0rem] sm:mb-[-8rem] md:mb-[-2rem]"
            initial={{ opacity: 0, scale: 0.8, y: -100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 5,
              transition: { duration: 0.3, type: "spring", stiffness: 300 }
            }}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <Image
                src="/broscode.png"
                alt="Bros Code Logo"
                width={384}
                height={384}
                className="w-full h-full object-contain rounded-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-light px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            whileHover={{ 
              scale: 1.02,
              textShadow: "0px 0px 8px rgb(0,172,238)",
              transition: { duration: 0.3 }
            }}
          >
            {t('hero.tagline')}
          </motion.p>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            {t('hero.description')}
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            {[
              { icon: Code, label: t('hero.cleanCode'), delay: 0 },
              { icon: Zap, label: t('hero.lightningFast'), delay: 0.1 },
              { icon: Rocket, label: t('hero.innovative'), delay: 0.2 }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + item.delay,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotate: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 bros-gradient rounded-full flex items-center justify-center mb-2"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(0,172,238,0.4)",
                      "0 0 0 10px rgba(0,172,238,0)",
                      "0 0 0 0 rgba(0,172,238,0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <span className="text-xs sm:text-sm text-muted-foreground text-center">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="bros-gradient text-white border-0 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bros-glow hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
              >
                {t('hero.viewWork')}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                {t('hero.getInTouch')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}