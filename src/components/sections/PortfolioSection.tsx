"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ExternalLink, 
  Github, 
  Sparkles,
  ArrowRight,
  Monitor,
  Smartphone,
  Globe
} from "lucide-react";

const projects = [
  {
    id: 1,
    titleKey: "portfolio.projects.ecommerce.title",
    categoryKey: "portfolio.projects.ecommerce.category",
    descriptionKey: "portfolio.projects.ecommerce.description",
    image: "/placeholder-project-1.jpg",
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Bootstrap", "Entity Framework"],
    featuresKeys: ["portfolio.projects.ecommerce.features.userAuth", "portfolio.projects.ecommerce.features.payment", "portfolio.projects.ecommerce.features.admin"],
    demoUrl: "#",
    githubUrl: "#",
    type: "web",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    titleKey: "portfolio.projects.taskManagement.title",
    categoryKey: "portfolio.projects.taskManagement.category",
    descriptionKey: "portfolio.projects.taskManagement.description",
    image: "/placeholder-project-2.jpg",
    technologies: ["Laravel", "PHP", "MySQL", "VueJS", "Blade Templates"],
    featuresKeys: ["portfolio.projects.taskManagement.features.realtime", "portfolio.projects.taskManagement.features.collaboration", "portfolio.projects.taskManagement.features.fileManagement"],
    demoUrl: "#",
    githubUrl: "#",
    type: "web",
    gradient: "from-green-500 to-blue-500"
  },
  {
    id: 3,
    titleKey: "portfolio.projects.dashboard.title",
    categoryKey: "portfolio.projects.dashboard.category",
    descriptionKey: "portfolio.projects.dashboard.description",
    image: "/placeholder-project-3.jpg",
    technologies: ["VueJS", "JavaScript", "Chart.js", "Tailwind CSS", "REST API"],
    featuresKeys: ["portfolio.projects.dashboard.features.visualization", "portfolio.projects.dashboard.features.charts", "portfolio.projects.dashboard.features.reports"],
    demoUrl: "#",
    githubUrl: "#",
    type: "web",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 4,
    titleKey: "portfolio.projects.portfolio.title",
    categoryKey: "portfolio.projects.portfolio.category",
    descriptionKey: "portfolio.projects.portfolio.description",
    image: "/placeholder-project-4.jpg",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    featuresKeys: ["portfolio.projects.portfolio.features.ssg", "portfolio.projects.portfolio.features.animations", "portfolio.projects.portfolio.features.responsive"],
    demoUrl: "#",
    githubUrl: "#",
    type: "web",
    gradient: "from-red-500 to-orange-500"
  },
  {
    id: 5,
    titleKey: "portfolio.projects.database.title",
    categoryKey: "portfolio.projects.database.category",
    descriptionKey: "portfolio.projects.database.description",
    image: "/placeholder-project-5.jpg",
    technologies: ["PostgreSQL", "SQL", "Stored Procedures", "Database Design", "Performance Tuning"],
    featuresKeys: ["portfolio.projects.database.features.optimization", "portfolio.projects.database.features.analysis", "portfolio.projects.database.features.backup"],
    demoUrl: "#",
    githubUrl: "#",
    type: "web",
    gradient: "from-yellow-500 to-green-500"
  },
  {
    id: 6,
    titleKey: "portfolio.projects.mobileApp.title",
    categoryKey: "portfolio.projects.mobileApp.category",
    descriptionKey: "portfolio.projects.mobileApp.description",
    image: "/placeholder-project-6.jpg",
    technologies: ["PWA", "Service Workers", "Responsive Design", "JavaScript", "CSS Grid"],
    featuresKeys: ["portfolio.projects.mobileApp.features.offline", "portfolio.projects.mobileApp.features.notifications", "portfolio.projects.mobileApp.features.experience"],
    demoUrl: "#",
    githubUrl: "#",
    type: "mobile",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "mobile":
      return Smartphone;
    case "web":
      return Monitor;
    case "game":
      return Globe;
    default:
      return Monitor;
  }
};

export default function PortfolioSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              {t('portfolio.badge')}
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold bros-gradient-text mb-6">
            {t('portfolio.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const TypeIcon = getTypeIcon(project.type);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 group overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Type Icon */}
                    <motion.div
                      className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <TypeIcon className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Project Links */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.demoUrl}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>

                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <motion.div
                        className="absolute top-8 left-8 text-white text-6xl font-mono"
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {"</>"}
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    {/* Category */}
                    <Badge 
                      variant="outline" 
                      className="mb-4 text-xs"
                    >
                      {t(project.categoryKey)}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {t(project.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {t(project.descriptionKey)}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-foreground">{t('portfolio.keyFeatures')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.featuresKeys.map((featureKey) => (
                          <Badge 
                            key={featureKey} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {t(featureKey)}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-foreground">{t('portfolio.technologies')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {t('portfolio.viewCaseStudy')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-8">
            {t('portfolio.cta.description')}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bros-gradient text-white border-0 px-8 py-4 text-lg font-semibold bros-glow hover:shadow-2xl transition-all duration-300"
            >
              {t('portfolio.cta.button')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}