"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Users, 
  Lightbulb, 
  Target, 
  Heart,
  Linkedin,
  Github,
  Twitter,
  Mail,
  Code,
  Rocket,
  Cloud,
  Smartphone
} from "lucide-react";

const founders = [
  {
    id: "miljan",
    icon: Code,
    skills: ["ASP.NET Core", "Laravel", "VueJS", "NextJS", "SQL", "PostgreSQL"],
    social: {
      linkedin: "#",
      github: "#", 
      twitter: "#",
      email: "miljan@broscode.com"
    },
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: "vladimir",
    icon: Cloud,
    skills: ["DevOps", "Docker", "Kubernetes", "CI/CD", "AWS", "Azure"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#", 
      email: "vladimir@broscode.com"
    },
    gradient: "from-green-500 to-teal-600"
  },
  {
    id: "lazar",
    icon: Smartphone,
    skills: ["React", "Vue.js", "TypeScript", "UI/UX", "Responsive Design", "Performance"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "lazar@broscode.com"
    },
    gradient: "from-pink-500 to-red-600"
  }
];

const values = [
  {
    icon: Lightbulb,
    id: "innovation",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    id: "quality", 
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Users,
    id: "collaboration",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Rocket,
    id: "growth",
    gradient: "from-green-500 to-emerald-500"
  }
];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bros-gradient rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bros-gradient rounded-full blur-2xl opacity-8"
        animate={{
          scale: [1.2, 0.9, 1.2],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 22,
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
              <Users className="w-4 h-4 mr-2" />
              {t('about.badge')}
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
            {t('about.title')}
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('about.description')}
          </motion.p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 group relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    background: [
                      "linear-gradient(135deg, rgba(0,172,238,0.05) 0%, transparent 100%)",
                      "linear-gradient(225deg, rgba(0,172,238,0.1) 0%, transparent 100%)",
                      "linear-gradient(135deg, rgba(0,172,238,0.05) 0%, transparent 100%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <CardContent className="p-8 text-center relative">
                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(0,172,238,0.4)",
                        "0 0 0 20px rgba(0,172,238,0)",
                        "0 0 0 0 rgba(0,172,238,0)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <founder.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Name */}
                  <motion.h3 
                    className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t(`about.founders.${founder.id}.name`)}
                  </motion.h3>

                  {/* Role */}
                  <motion.p 
                    className="text-primary font-semibold mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    {t(`about.founders.${founder.id}.role`)}
                  </motion.p>

                  {/* Bio */}
                  <motion.p 
                    className="text-muted-foreground mb-6 leading-relaxed text-sm"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {t(`about.founders.${founder.id}.bio`)}
                  </motion.p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {founder.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {[
                      { icon: Linkedin, href: founder.social.linkedin },
                      { icon: Github, href: founder.social.github },
                      { icon: Twitter, href: founder.social.twitter },
                      { icon: Mail, href: `mailto:${founder.social.email}` }
                    ].map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center group-hover:scale-110"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                className="text-center"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-4`}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(0,172,238,0.4)",
                      "0 0 0 15px rgba(0,172,238,0)",
                      "0 0 0 0 rgba(0,172,238,0)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {t(`about.values.${value.id}.title`)}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground text-sm leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {t(`about.values.${value.id}.description`)}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6"
            whileHover={{ 
              scale: 1.02,
              textShadow: "0px 0px 15px rgba(0,172,238,0.3)"
            }}
          >
            {t('about.journey.title')}
          </motion.h3>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {t('about.journey.description')}
          </motion.p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-8"
            whileHover={{ scale: 1.02 }}
          >
            {t('about.cta.ready')}
          </motion.h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bros-gradient text-white border-0 px-8 py-4 text-lg font-semibold"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t('about.cta.contact')}
              <Heart className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}