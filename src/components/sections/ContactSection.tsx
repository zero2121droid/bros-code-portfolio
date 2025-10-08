"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Send, 
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Github,
  Twitter,
  Calendar,
  Zap,
  CheckCircle
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    titleKey: "contact.methods.email.title",
    descriptionKey: "contact.methods.email.description",
    value: "miljan@broscode.com",
    action: "mailto:miljan@broscode.com",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    titleKey: "contact.methods.phone.title",
    descriptionKey: "contact.methods.phone.description",
    value: "+381 60 123 4567",
    action: "tel:+38160123456",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Calendar,
    titleKey: "contact.methods.meeting.title",
    descriptionKey: "contact.methods.meeting.description",
    valueKey: "contact.methods.meeting.value",
    action: "#",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: MapPin,
    titleKey: "contact.methods.office.title",
    descriptionKey: "contact.methods.office.description",
    valueKey: "contact.methods.office.value",
    action: "#",
    gradient: "from-orange-500 to-red-500"
  }
];

const socialLinks = [
  { icon: Linkedin, url: "#", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: Github, url: "#", label: "GitHub", color: "hover:text-gray-600" },
  { icon: Twitter, url: "#", label: "Twitter", color: "hover:text-blue-400" }
];

export default function ContactSection() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 bros-gradient rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-96 h-96 bros-gradient rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

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
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <MessageCircle className="w-4 h-4 mr-2" />
              {t('contact.badge')}
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold bros-gradient-text mb-6">
            {t('contact.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bros-gradient rounded-full flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{t('contact.form.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.form.subtitle')}</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{t('contact.form.success.title')}</h4>
                    <p className="text-muted-foreground">
                      {t('contact.form.success.description')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          {t('contact.form.fullName')}
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t('contact.form.fullNamePlaceholder')}
                          required
                          className="transition-all duration-200 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          {t('contact.form.email')}
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t('contact.form.emailPlaceholder')}
                          required
                          className="transition-all duration-200 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          {t('contact.form.company')}
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder={t('contact.form.companyPlaceholder')}
                          className="transition-all duration-200 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          {t('contact.form.projectType')}
                        </label>
                        <select
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          title={t('contact.form.projectType')}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:border-primary transition-all duration-200"
                        >
                          <option value="">{t('contact.form.projectTypeOptions.select')}</option>
                          <option value="web-app">{t('contact.form.projectTypeOptions.webApp')}</option>
                          <option value="mobile-app">{t('contact.form.projectTypeOptions.mobileApp')}</option>
                          <option value="ai-ml">{t('contact.form.projectTypeOptions.aiMl')}</option>
                          <option value="ecommerce">{t('contact.form.projectTypeOptions.ecommerce')}</option>
                          <option value="enterprise">{t('contact.form.projectTypeOptions.enterprise')}</option>
                          <option value="consultation">{t('contact.form.projectTypeOptions.consultation')}</option>
                          <option value="other">{t('contact.form.projectTypeOptions.other')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {t('contact.form.budget')}
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        title={t('contact.form.budget')}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:border-primary transition-all duration-200"
                      >
                        <option value="">{t('contact.form.budgetOptions.select')}</option>
                        <option value="under-10k">{t('contact.form.budgetOptions.under10k')}</option>
                        <option value="10k-25k">{t('contact.form.budgetOptions.10k25k')}</option>
                        <option value="25k-50k">{t('contact.form.budgetOptions.25k50k')}</option>
                        <option value="50k-100k">{t('contact.form.budgetOptions.50k100k')}</option>
                        <option value="over-100k">{t('contact.form.budgetOptions.over100k')}</option>
                        <option value="discuss">{t('contact.form.budgetOptions.discuss')}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        {t('contact.form.message')}
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.messagePlaceholder')}
                        rows={5}
                        required
                        className="transition-all duration-200 focus:border-primary resize-none"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bros-gradient text-white border-0 py-3 text-lg font-semibold bros-glow hover:shadow-2xl transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <motion.div
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            {t('contact.form.sending')}
                          </div>
                        ) : (
                          <>
                            {t('contact.form.sendButton')}
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.titleKey}
                  href={method.action}
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <method.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {t(method.titleKey)}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t(method.descriptionKey)}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {method.valueKey ? t(method.valueKey) : method.value}
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <h4 className="text-lg font-semibold">{t('contact.hours.title')}</h4>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>{t('contact.hours.weekdays')}</span>
                      <span>{t('contact.hours.weekdaysTime')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('contact.hours.weekend')}</span>
                      <span>{t('contact.hours.weekendTime')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('contact.hours.responseTime')}</span>
                      <span className="text-primary font-medium">{t('contact.hours.responseValue')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">{t('contact.social.title')}</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        className={`w-12 h-12 bg-muted rounded-full flex items-center justify-center transition-colors duration-200 ${social.color}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    {t('contact.social.description')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2">{t('contact.urgentCta.title')}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('contact.urgentCta.description')}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {t('contact.urgentCta.button')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}