"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProgrammingAnimation from "../animations/ProgrammingAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Zap,
  Brain,
  Cloud
} from "lucide-react";

const services = [
  {
    icon: Code2,
    titleKey: "services.fullStack.title",
    descriptionKey: "services.fullStack.description",
    technologies: ["ASP.NET", "Laravel", "NextJS", "VueJS", "TypeScript"],
    gradient: "from-blue-500 to-purple-600",
    animation: "coding" as const
  },
  {
    icon: Smartphone,
    titleKey: "services.mobile.title",
    descriptionKey: "services.mobile.description",
    technologies: ["React Native", "Progressive Web Apps", "Mobile-First Design", "Responsive UI"],
    gradient: "from-green-500 to-teal-600",
    animation: "terminal" as const
  },
  {
    icon: Globe,
    titleKey: "services.frontend.title",
    descriptionKey: "services.frontend.description",
    technologies: ["VueJS", "NextJS", "JavaScript", "Tailwind CSS", "Bootstrap"],
    gradient: "from-pink-500 to-red-600",
    animation: "data-flow" as const
  },
  {
    icon: Database,
    titleKey: "services.backend.title",
    descriptionKey: "services.backend.description",
    technologies: ["ASP.NET Core", "Laravel", "SQL Server", "PostgreSQL", "MySQL"],
    gradient: "from-yellow-500 to-orange-600",
    animation: "code-compile" as const
  },
  {
    icon: Brain,
    titleKey: "services.api.title",
    descriptionKey: "services.api.description",
    technologies: ["REST APIs", "JSON", "Authentication", "API Security", "Documentation"],
    gradient: "from-indigo-500 to-blue-600",
    animation: "bug-fix" as const
  },
  {
    icon: Cloud,
    titleKey: "services.database.title",
    descriptionKey: "services.database.description",
    technologies: ["SQL", "PostgreSQL", "Database Design", "Query Optimization", "Data Modeling"],
    gradient: "from-cyan-500 to-blue-600",
    animation: "deploy" as const
  }
];

export default function ServicesSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bros-gradient rounded-full blur-2xl opacity-10"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bros-gradient rounded-full blur-3xl opacity-8"
        animate={{
          scale: [1.2, 0.8, 1.2],
          x: [0, -80, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              {t('services.badge')}
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bros-gradient-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              textShadow: "0px 0px 20px rgba(0,172,238,0.5)"
            }}
          >
            {t('services.title')}
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('services.description')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 group relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ 
                    background: [
                      "linear-gradient(135deg, rgba(0,172,238,0.05) 0%, transparent 100%)",
                      "linear-gradient(225deg, rgba(0,172,238,0.1) 0%, transparent 100%)",
                      "linear-gradient(135deg, rgba(0,172,238,0.05) 0%, transparent 100%)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <CardContent className="p-8 relative">
                  {/* Programming Animation */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8, rotate: -10 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <ProgrammingAnimation type={service.animation} size="sm" />
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(0,172,238,0.4)",
                        "0 0 0 15px rgba(0,172,238,0)",
                        "0 0 0 0 rgba(0,172,238,0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {t(service.titleKey)}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {t(service.descriptionKey)}
                  </motion.p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: "30+", labelKey: "services.stats.projects" },
            { number: "6+", labelKey: "services.stats.technologies" },
            { number: "5+", labelKey: "services.stats.experience" },
            { number: "100%", labelKey: "services.stats.satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold bros-gradient-text mb-2"
                animate={{ 
                  textShadow: [
                    "0px 0px 0px rgba(0,172,238,0)",
                    "0px 0px 20px rgba(0,172,238,0.3)",
                    "0px 0px 0px rgba(0,172,238,0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-muted-foreground font-medium">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}