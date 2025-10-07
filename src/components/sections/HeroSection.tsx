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
          className="absolute top-20 left-20 w-72 h-72 bros-gradient rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bros-gradient rounded-full blur-3xl opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bros-gradient rounded-full blur-3xl opacity-10"
          animate={{
            scale: [0.8, 1.4, 0.8],
            rotate: [0, 270, 360],
            x: [-100, 100, -100],
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            className="mb-[-10rem]"
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
            <div className="relative w-96 h-96 mx-auto">
              <Image
                src="/broscode.png"
                alt="Bros Code Logo"
                width={384}
                height={384}
                className="rounded-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-light"
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
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            {t('hero.description')}
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            className="flex justify-center space-x-8 mb-12"
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
                  className="w-16 h-16 bros-gradient rounded-full flex items-center justify-center mb-2"
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
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bros-gradient text-white border-0 px-8 py-4 text-lg font-semibold bros-glow hover:shadow-2xl transition-all duration-300"
              >
                {t('hero.viewWork')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
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