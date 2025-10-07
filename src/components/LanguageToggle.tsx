"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'sr' ? 'en' : 'sr');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300"
      >
        <motion.div
          className="flex items-center space-x-2"
          initial={false}
          animate={{ 
            x: language === 'sr' ? 0 : 20,
            opacity: language === 'sr' ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-medium">🇷🇸</span>
          <span className="text-sm font-medium">SR</span>
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center space-x-2"
          initial={false}
          animate={{ 
            x: language === 'en' ? 0 : -20,
            opacity: language === 'en' ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-medium">🇺🇸</span>
          <span className="text-sm font-medium">EN</span>
        </motion.div>
      </Button>
    </motion.div>
  );
}