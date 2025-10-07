export type Language = 'sr' | 'en';

export const translations = {
  sr: {
    // Navigation
    nav: {
      home: "Početna",
      services: "Usluge", 
      portfolio: "Portfolio",
      about: "O nama",
      contact: "Kontakt"
    },
    // Hero Section
    hero: {
      tagline: "Full-Stack Web & Mobile Programeri",
      description: "Kreiramo moderne web aplikacije i mobilna rešenja koristeći ASP.NET, Laravel, VueJS, NextJS i robusne arhitekture baza podataka. Posvećeni čistom kodu i inovativnim digitalnim iskustvima.",
      cleanCode: "Čist Kod",
      lightningFast: "Munjevito Brz",
      innovative: "Inovativan",
      viewWork: "Pogledaj Naš Rad",
      getInTouch: "Kontaktiraj Nas"
    },
    // Services Section
    services: {
      badge: "Naša Stručnost",
      title: "Ono što radimo najbolje",
      description: "Od koncepta do implementacije, pružamo sveobuhvatna digitalna rešenja koja podstiču rast i inovacije za kompanije svih veličina.",
      fullStack: {
        title: "Full-Stack Web Razvoj",
        description: "Kompletne web aplikacije izgrađene sa modernim framework-ima i skalabilnim arhitekturama."
      },
      mobile: {
        title: "Mobilne Aplikacije", 
        description: "Cross-platform mobilne aplikacije i responzivne web aplikacije za sve uređaje."
      },
      frontend: {
        title: "Frontend Razvoj",
        description: "Moderni, interaktivni korisnički interfejsi sa najnovijim JavaScript framework-ima."
      },
      backend: {
        title: "Backend & Sistemi Baza Podataka",
        description: "Robusna server-side rešenja sa efikasnim dizajnom i optimizacijom baza podataka."
      },
      api: {
        title: "API Razvoj",
        description: "RESTful API-ji i web servisi koji pokreću moderne aplikacije i integracije."
      },
      database: {
        title: "Arhitektura Baze Podataka",
        description: "Optimizovan dizajn baze podataka, upiti i podešavanje performansi za skalabilne aplikacije."
      },
      stats: {
        projects: "Završenih Projekata",
        technologies: "Savladanih Tehnologija", 
        experience: "Godina Iskustva",
        satisfaction: "Zadovoljstvo Klijenata"
      }
    },
    // About Section
    about: {
      badge: "Naš Tim",
      title: "Poznaj Bros Code",
      description: "Mi smo tim od tri stručnjaka posvećena kreiranju digitalnih rešenja koja menjaju način na koji kompanije funkcionišu online.",
      founders: {
        miljan: {
          name: "Miljan Milojković",
          role: "Full-Stack Web & Mobile Developer",
          bio: "Osnivač i vodeći programer Bros Code-a. Stručnjak za moderne web tehnologije i mobilna rešenja. Specijalizovan za ASP.NET, Laravel, VueJS i NextJS sa jakim veštinama u SQL i PostgreSQL bazama podataka."
        },
        vladimir: {
          name: "Vladimir Gašević", 
          role: "DevOps Stručnjak",
          bio: "Naš DevOps guru koji osigurava da sve aplikacije rade besprekorno. Stručnjak za cloud infrastrukturu, automatizaciju deployments-a i optimizaciju sistema. Odličan u Docker-u, Kubernetes-u i CI/CD pipeline-ovima."
        },
        lazar: {
          name: "Lazar Vujović",
          role: "Frontend Programer", 
          bio: "Vrhunski frontend specialist odgovoran za kreiranje neverovatnih korisničkih interfejsa. Majstor modernih JavaScript framework-a, responzivnog dizajna i korisničkog iskustva koje ostavlja bez daha."
        }
      },
      values: {
        innovation: {
          title: "Inovacije na Prvom Mestu",
          description: "Uvek smo korak ispred, prihvatamo najnovije tehnologije i metodologije da bismo isporučili rešenja budućnosti već danas."
        },
        quality: {
          title: "Opsednuti Kvalitetom", 
          description: "Svaki red koda, svaki dizajn element i svaka interakcija korisnika je kreirana sa pažljivom pažnjom na detalje."
        },
        collaboration: {
          title: "Saradnja & Timski Rad",
          description: "Verujemo da najbolji rezultati dolaze kada rade zajedno kao tim, deleći znanje i strast za tehnologiju."
        },
        growth: {
          title: "Kontinuirani Rast",
          description: "Nikada ne prestajemo da učimo. Konstantno se razvijamo i prilagođavamo najnovijim trendovima u industriji."
        }
      },
      journey: {
        title: "Naše Putovanje",
        description: "Bros Code je nastao iz strasti trojice programera da stvaraju izuzetna digitalna iskustva. Kombinujemo našu ekspertizu u različitim oblastima da pružimo kompletna rešenja našim klijentima."
      },
      cta: {
        ready: "Spremni da kreirati nešto neverovatno?",
        contact: "Kontaktirajte Nas"
      }
    },
    // Portfolio Section
    portfolio: {
      badge: "Naš Portfolio",
      title: "Istaknuti Projekti", 
      description: "Otkrijte naš najnoviji rad koji obuhvata web aplikacije, mobilne aplikacije, AI rešenja i poslovne platforme koje prikazuju našu stručnost.",
      projects: {
        ecommerce: {
          title: "E-Commerce Platforma",
          category: "ASP.NET Core Razvoj",
          description: "Potpuna e-commerce platforma izgrađena sa ASP.NET Core, sa autentifikacijom korisnika, upravljanjem proizvodima i integracijom plaćanja.",
          features: {
            userAuth: "Autentifikacija Korisnika",
            payment: "Payment Gateway",
            admin: "Admin Panel"
          }
        },
        taskManagement: {
          title: "Sistem za Upravljanje Zadacima",
          category: "Laravel Razvoj",
          description: "Aplikacija za upravljanje projektima sa Laravel backend-om, sa saradnjom tima, praćenjem zadataka i notifikacijama u realnom vremenu.",
          features: {
            realtime: "Ažuriranja u Realnom Vremenu",
            collaboration: "Timska Saradnja",
            fileManagement: "Upravljanje Fajlovima"
          }
        },
        dashboard: {
          title: "Dashboard Analitika",
          category: "VueJS Frontend",
          description: "Interaktivni dashboard izgrađen sa VueJS za vizualizaciju podataka i analitiku, sa grafikonima, izveštajima i ažuriranjima u realnom vremenu.",
          features: {
            visualization: "Vizualizacija Podataka",
            charts: "Grafikoni u Realnom Vremenu",
            reports: "Izvoz Izveštaja"
          }
        },
        portfolio: {
          title: "Portfolio Sajt",
          category: "NextJS Razvoj",
          description: "Moderni portfolio sajt izgrađen sa NextJS i TypeScript, sa glatkim animacijama i responsive dizajnom.",
          features: {
            ssg: "SSG Optimizacija",
            animations: "Glatke Animacije",
            responsive: "Mobilno Responzivan"
          }
        },
        database: {
          title: "Sistem za Upravljanje Bazom Podataka",
          category: "PostgreSQL i SQL",
          description: "Sveobuhvatno rešenje baze podataka sa PostgreSQL, sa optimizovanim upitima, stored procedurama i alatima za analizu podataka.",
          features: {
            optimization: "Optimizacija Upita",
            analysis: "Analiza Podataka",
            backup: "Sistemi Rezervnih Kopija"
          }
        },
        mobileApp: {
          title: "Mobile-First Web App",
          category: "Responzivni Razvoj",
          description: "Progresivna web aplikacija sa mobile-first pristupom, sa offline mogućnostima i push notifikacijama.",
          features: {
            offline: "Offline Podrška",
            notifications: "Push Notifikacije",
            experience: "App-like Iskustvo"
          }
        }
      },
      keyFeatures: "Ključne Funkcionalnosti:",
      technologies: "Tehnologije:",
      viewCaseStudy: "Pogledaj Studiju Slučaja",
      cta: {
        description: "Spremni da vidite kako vaš projekat oživljava?",
        button: "Pokrenite Vaš Projekat"
      }
    },
    // Contact Section
    contact: {
      badge: "Kontaktirajte Nas",
      title: "Spremni da Pokrenete Vaš Projekat?",
      description: "Hajde da razgovaramo o vašim projektnim idejama i oživimo ih. Tu smo da vam pomognemo da izgradite izuzetna web i mobilna rešenja koja nadmašuju vaša očekivanja.",
      form: {
        title: "Pošaljite nam poruku",
        subtitle: "Odgovoriće vam u roku od 24 sata",
        fullName: "Puno Ime *",
        fullNamePlaceholder: "Petar Petrović",
        email: "Email Adresa *",
        emailPlaceholder: "petar@kompanija.com",
        company: "Naziv Kompanije",
        companyPlaceholder: "Vaša Kompanija",
        projectType: "Tip Projekta",
        projectTypeOptions: {
          select: "Izaberite tip projekta",
          webApp: "Web Aplikacija",
          mobileApp: "Mobilna Aplikacija",
          aiMl: "AI/ML Rešenje",
          ecommerce: "E-commerce Platforma",
          enterprise: "Poslovno Rešenje",
          consultation: "Konsultacija",
          other: "Ostalo"
        },
        budget: "Budžet",
        budgetOptions: {
          select: "Izaberite budžet",
          under10k: "Ispod 10.000€",
          "10k25k": "10.000€ - 25.000€",
          "25k50k": "25.000€ - 50.000€",
          "50k100k": "50.000€ - 100.000€",
          over100k: "Preko 100.000€",
          discuss: "Hajde da razgovaramo"
        },
        message: "Opis Projekta *",
        messagePlaceholder: "Recite nam o vašem projektu, ciljevima i specifičnim zahtevima...",
        sendButton: "Pošaljite Poruku",
        sending: "Šalje se...",
        success: {
          title: "Poruka Poslata!",
          description: "Hvala što ste nas kontaktirali. Uskoro ćemo vam odgovoriti!"
        }
      },
      methods: {
        email: {
          title: "Pošaljite Email",
          description: "Kontaktirajte nas preko emaila"
        },
        phone: {
          title: "Pozovite Nas",
          description: "Razgovarajte direktno sa našim timom"
        },
        meeting: {
          title: "Zakažite Sastanak",
          description: "Rezervišite konsultaciju",
          value: "Besplatna 30-min konsultacija"
        },
        office: {
          title: "Posetite Naš Ured",
          description: "Dođite da nas vidite uživo",
          value: "Beograd, Srbija"
        }
      },
      hours: {
        title: "Radno Vreme",
        weekdays: "Ponedeljak - Petak",
        weekdaysTime: "09:00 - 18:00 CET",
        weekend: "Vikend",
        weekendTime: "Samo hitna podrška",
        responseTime: "Vreme Odgovora",
        responseValue: "U roku od 24 sata"
      },
      social: {
        title: "Pratite Nas",
        description: "Budite u toku sa našim najnovijim projektima i uvidima"
      },
      urgentCta: {
        title: "Hitno vam je potrebno?",
        description: "Imate hitan projekat? Nudimo brze razvojne sprinte za vremenski kritične isporuke.",
        button: "Hitni Kontakt"
      }
    },
    // Footer Section
    footer: {
      company: {
        description: "Strastveni full-stack developeri koji kreiraju izuzetne web aplikacije i mobilna rešenja sa modernim tehnologijama i čistim kodirnim praksama.",
        links: {
          title: "Kompanija",
          aboutUs: "O Nama",
          ourTeam: "Naš Tim",
          careers: "Karijere",
          contact: "Kontakt"
        }
      },
      services: {
        title: "Usluge",
        webDevelopment: "Web Razvoj",
        mobileApps: "Mobilne Aplikacije",
        aiSolutions: "AI Rešenja",
        consulting: "Konsalting"
      },
      resources: {
        title: "Resursi",
        portfolio: "Portfolio",
        caseStudies: "Studije Slučaja",
        blog: "Blog",
        faq: "Često Postavljana Pitanja"
      },
      newsletter: {
        title: "Ostanite Ažurni",
        description: "Dobijte najnovije ažuriranja o našim projektima, tehnološkim uvidima i industrijskim trendovima.",
        placeholder: "Unesite vaš email",
        button: "Pretplatite se"
      },
      copyright: {
        allRights: "Sva prava zadržana.",
        madeWith: "Napravljeno sa",
        location: "u Beogradu"
      },
      backToTop: "Povratak na vrh"
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio", 
      about: "About",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      tagline: "Full-Stack Web & Mobile Developers",
      description: "Crafting modern web applications and mobile solutions with ASP.NET, Laravel, VueJS, NextJS, and robust database architectures. Passionate about clean code and innovative digital experiences.",
      cleanCode: "Clean Code",
      lightningFast: "Lightning Fast", 
      innovative: "Innovative",
      viewWork: "View Our Work",
      getInTouch: "Get In Touch"
    },
    // Services Section
    services: {
      badge: "Our Expertise",
      title: "What We Do Best",
      description: "From concept to deployment, we deliver comprehensive digital solutions that drive growth and innovation for businesses of all sizes.",
      fullStack: {
        title: "Full-Stack Web Development",
        description: "End-to-end web applications built with modern frameworks and scalable architectures."
      },
      mobile: {
        title: "Mobile Applications",
        description: "Cross-platform mobile apps and responsive web applications for all devices."
      },
      frontend: {
        title: "Frontend Development", 
        description: "Modern, interactive user interfaces with cutting-edge JavaScript frameworks."
      },
      backend: {
        title: "Backend & Database Systems",
        description: "Robust server-side solutions with efficient database design and optimization."
      },
      api: {
        title: "API Development",
        description: "RESTful APIs and web services that power modern applications and integrations."
      },
      database: {
        title: "Database Architecture",
        description: "Optimized database design, queries, and performance tuning for scalable applications."
      },
      stats: {
        projects: "Projects Completed",
        technologies: "Technologies Mastered",
        experience: "Years Experience",
        satisfaction: "Client Satisfaction"
      }
    },
    // About Section
    about: {
      badge: "Our Team",
      title: "Meet Bros Code",
      description: "We are a team of three specialists dedicated to creating digital solutions that transform how businesses operate online.",
      founders: {
        miljan: {
          name: "Miljan Milojković",
          role: "Full-Stack Web & Mobile Developer",
          bio: "Founder and lead developer of Bros Code. Expert in modern web technologies and mobile solutions. Specialized in ASP.NET, Laravel, VueJS, and NextJS with strong skills in SQL and PostgreSQL databases."
        },
        vladimir: {
          name: "Vladimir Gašević",
          role: "DevOps Specialist",
          bio: "Our DevOps guru who ensures all applications run flawlessly. Expert in cloud infrastructure, deployment automation, and system optimization. Excellent with Docker, Kubernetes, and CI/CD pipelines."
        },
        lazar: {
          name: "Lazar Vujović",
          role: "Frontend Developer",
          bio: "Top-tier frontend specialist responsible for creating amazing user interfaces. Master of modern JavaScript frameworks, responsive design, and user experiences that leave you breathless."
        }
      },
      values: {
        innovation: {
          title: "Innovation First",
          description: "We're always one step ahead, embracing the latest technologies and methodologies to deliver future solutions today."
        },
        quality: {
          title: "Quality Obsessed",
          description: "Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail."
        },
        collaboration: {
          title: "Collaboration & Teamwork",
          description: "We believe the best results come when working together as a team, sharing knowledge and passion for technology."
        },
        growth: {
          title: "Continuous Growth",
          description: "We never stop learning. We constantly evolve and adapt to the latest trends in the industry."
        }
      },
      journey: {
        title: "Our Journey",
        description: "Bros Code was born from the passion of three developers to create exceptional digital experiences. We combine our expertise in different areas to provide complete solutions to our clients."
      },
      cta: {
        ready: "Ready to create something amazing?",
        contact: "Contact Us"
      }
    },
    // Portfolio Section
    portfolio: {
      badge: "Our Portfolio",
      title: "Featured Projects",
      description: "Discover our latest work spanning web applications, mobile apps, AI solutions, and enterprise platforms that showcase our expertise.",
      projects: {
        ecommerce: {
          title: "E-Commerce Platform",
          category: "ASP.NET Core Development",
          description: "Full-featured e-commerce platform built with ASP.NET Core, featuring user authentication, product management, and payment integration.",
          features: {
            userAuth: "User Authentication",
            payment: "Payment Gateway",
            admin: "Admin Dashboard"
          }
        },
        taskManagement: {
          title: "Task Management System",
          category: "Laravel Development",
          description: "Project management application with Laravel backend, featuring team collaboration, task tracking, and real-time notifications.",
          features: {
            realtime: "Real-time Updates",
            collaboration: "Team Collaboration",
            fileManagement: "File Management"
          }
        },
        dashboard: {
          title: "Dashboard Analytics",
          category: "VueJS Frontend",
          description: "Interactive dashboard built with VueJS for data visualization and analytics, featuring charts, reports, and real-time data updates.",
          features: {
            visualization: "Data Visualization",
            charts: "Real-time Charts",
            reports: "Export Reports"
          }
        },
        portfolio: {
          title: "Portfolio Website",
          category: "NextJS Development",
          description: "Modern portfolio website built with NextJS and TypeScript, featuring smooth animations and responsive design.",
          features: {
            ssg: "SSG Optimization",
            animations: "Smooth Animations",
            responsive: "Mobile Responsive"
          }
        },
        database: {
          title: "Database Management System",
          category: "PostgreSQL & SQL",
          description: "Comprehensive database solution with PostgreSQL, featuring optimized queries, stored procedures, and data analysis tools.",
          features: {
            optimization: "Query Optimization",
            analysis: "Data Analysis",
            backup: "Backup Systems"
          }
        },
        mobileApp: {
          title: "Mobile-First Web App",
          category: "Responsive Development",
          description: "Progressive web application with mobile-first approach, featuring offline capabilities and push notifications.",
          features: {
            offline: "Offline Support",
            notifications: "Push Notifications",
            experience: "App-like Experience"
          }
        }
      },
      keyFeatures: "Key Features:",
      technologies: "Technologies:",
      viewCaseStudy: "View Case Study",
      cta: {
        description: "Ready to see your project come to life?",
        button: "Start Your Project"
      }
    },
    // Contact Section
    contact: {
      badge: "Get In Touch",
      title: "Ready to Start Your Project?",
      description: "Let's discuss your project ideas and bring them to life. We're here to help you build exceptional web and mobile solutions that exceed your expectations.",
      form: {
        title: "Send us a message",
        subtitle: "We'll get back to you within 24 hours",
        fullName: "Full Name *",
        fullNamePlaceholder: "John Doe",
        email: "Email Address *",
        emailPlaceholder: "john@company.com",
        company: "Company Name",
        companyPlaceholder: "Your Company",
        projectType: "Project Type",
        projectTypeOptions: {
          select: "Select project type",
          webApp: "Web Application",
          mobileApp: "Mobile Application",
          aiMl: "AI/ML Solution",
          ecommerce: "E-commerce Platform",
          enterprise: "Enterprise Solution",
          consultation: "Consultation",
          other: "Other"
        },
        budget: "Budget Range",
        budgetOptions: {
          select: "Select budget range",
          under10k: "Under $10,000",
          "10k25k": "$10,000 - $25,000",
          "25k50k": "$25,000 - $50,000",
          "50k100k": "$50,000 - $100,000",
          over100k: "Over $100,000",
          discuss: "Let's discuss"
        },
        message: "Project Description *",
        messagePlaceholder: "Tell us about your project, goals, and any specific requirements...",
        sendButton: "Send Message",
        sending: "Sending...",
        success: {
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll be in touch soon!"
        }
      },
      methods: {
        email: {
          title: "Email Us",
          description: "Get in touch via email"
        },
        phone: {
          title: "Call Us",
          description: "Speak directly with our team"
        },
        meeting: {
          title: "Schedule a Meeting",
          description: "Book a consultation call",
          value: "Free 30-min consultation"
        },
        office: {
          title: "Visit Our Office",
          description: "Come see us in person",
          value: "Belgrade, Serbia"
        }
      },
      hours: {
        title: "Office Hours",
        weekdays: "Monday - Friday",
        weekdaysTime: "9:00 AM - 6:00 PM CET",
        weekend: "Weekend",
        weekendTime: "Emergency support only",
        responseTime: "Response Time",
        responseValue: "Within 24 hours"
      },
      social: {
        title: "Follow Us",
        description: "Stay updated with our latest projects and insights"
      },
      urgentCta: {
        title: "Need it fast?",
        description: "Have an urgent project? We offer rapid development sprints for time-sensitive deliverables.",
        button: "Emergency Contact"
      }
    },
    // Footer Section
    footer: {
      company: {
        description: "Passionate full-stack developer creating exceptional web applications and mobile solutions with modern technologies and clean code practices.",
        links: {
          title: "Company",
          aboutUs: "About Us",
          ourTeam: "Our Team",
          careers: "Careers",
          contact: "Contact"
        }
      },
      services: {
        title: "Services",
        webDevelopment: "Web Development",
        mobileApps: "Mobile Apps",
        aiSolutions: "AI Solutions",
        consulting: "Consulting"
      },
      resources: {
        title: "Resources",
        portfolio: "Portfolio",
        caseStudies: "Case Studies",
        blog: "Blog",
        faq: "FAQ"
      },
      newsletter: {
        title: "Stay Updated",
        description: "Get the latest updates on our projects, tech insights, and industry trends.",
        placeholder: "Enter your email",
        button: "Subscribe"
      },
      copyright: {
        allRights: "All rights reserved.",
        madeWith: "Made with",
        location: "in Belgrade"
      },
      backToTop: "Back to top"
    }
  }
};