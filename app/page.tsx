"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe, Mail, Github, Linkedin, Twitter, ArrowRight, Code, Briefcase, Award, GraduationCap, MessageSquare, FileText, ChevronDown, ExternalLink, Check } from 'lucide-react';

const PortfolioWebsite = () => {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const isRTL = language === 'ar';

  // Translations
  const t = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        services: 'Services',
        experience: 'Experience',
        education: 'Education',
        testimonials: 'Testimonials',
        blog: 'Blog',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hi, I\'m',
        name: 'Ahmed Nabil',
        title: 'IT Technical Support & Network Specialist',
        subtitle: 'Building Reliable IT & Network Solutions',
        description: 'IT Technical Support and Network Specialist with strong hands-on experience in networking, virtualization, CCTV systems, and security solutions. Skilled in troubleshooting, system administration, and enterprise network support.',
        cta1: 'View Skills',
        cta2: 'Get In Touch',
        available: 'Available for Work'
      },
      about: {
        title: 'About Me',
        subtitle: 'Technology, Support & Reliability',
        content: 'I am an IT Technical Support and Network Specialist with professional experience in networking, system troubleshooting, and virtualization technologies. I hold a Bachelor’s degree from Port Said University and multiple professional certifications including CCNA, MCSA, A+, and Network Security. I have strong communication skills, fast learning ability, and hands-on experience with Cisco routers and switches, Fortigate firewall, CCTV systems, and VMware virtualization.',
        stats: [
          { number: '2+', label: 'Years Experience' },
          { number: '10+', label: 'Certifications & Courses' },
          { number: '20+', label: 'Network Labs Completed' },
          { number: '100%', label: 'Commitment & Reliability' }
        ]
      },
      skills: {
        title: 'Skills & Expertise',
        subtitle: 'Technologies I Work With',
        categories: {
          frontend: 'Computer & User Support',
          backend: 'Networking',
          tools: 'Tools & Virtualization',
          soft: 'Soft Skills'
        }
      },
      projects: {
        title: 'Professional Experience',
        subtitle: 'Hands-on Practical Work',
        viewProject: 'View Details',
        viewCode: 'View Documentation'
      },
      services: {
        title: 'Services',
        subtitle: 'What I Offer',
        items: [
          {
            title: 'IT Technical Support',
            description: 'Troubleshooting hardware, software, printers, and operating systems for individuals and companies'
          },
          {
            title: 'Network Setup & Configuration',
            description: 'Installing and configuring routers, switches, VLANs, DNS, and DHCP'
          },
          {
            title: 'Virtualization',
            description: 'VMware virtualization setup and lab environments'
          },
          {
            title: 'Security & Surveillance',
            description: 'CCTV installation and Fortigate Firewall configuration'
          }
        ]
      },
      contact: {
        title: 'Let\'s Work Together',
        subtitle: 'Get In Touch',
        name: 'Ahmed Nabil',
        email: 'ahmed010nabile@gmail.com',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...'
      }
    },

    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'عني',
        skills: 'المهارات',
        projects: 'الخبرات العملية',
        services: 'الخدمات',
        experience: 'الخبرة',
        education: 'التعليم',
        testimonials: 'التوصيات',
        blog: 'المدونة',
        contact: 'تواصل'
      },
      hero: {
        greeting: 'مرحباً، أنا',
        name: 'أحمد نبيل',
        title: 'دعم فني وتقنيات الشبكات',
        subtitle: 'حلول موثوقة لتقنية المعلومات والشبكات',
        description: 'متخصص في الدعم الفني وتقنيات الشبكات مع خبرة عملية في الشبكات، أنظمة المراقبة، الافتراضية، وحلول الأمان. أمتلك مهارات قوية في استكشاف الأخطاء وإصلاحها ودعم أنظمة الشركات.',
        cta1: 'عرض المهارات',
        cta2: 'تواصل معي',
        available: 'متاح للعمل'
      },
      about: {
        title: 'نبذة عني',
        subtitle: 'التقنية، الدعم، والاعتمادية',
        content: 'أنا متخصص في الدعم الفني وتقنيات الشبكات ولدي خبرة عملية في الشبكات، استكشاف الأعطال، وأنظمة الافتراضية. حاصل على درجة البكالوريوس من جامعة بورسعيد وعدد من الشهادات الاحترافية مثل CCNA و MCSA و A+ وأمن الشبكات. أتمتع بمهارات تواصل قوية وسرعة التعلم وخبرة عملية على أجهزة سيسكو وأنظمة Fortigate وأنظمة المراقبة CCTV و VMware.',
        stats: [
          { number: '2+', label: 'سنوات خبرة' },
          { number: '10+', label: 'شهادات ودورات' },
          { number: '20+', label: 'تجارب شبكات عملية' },
          { number: '100%', label: 'التزام في العمل' }
        ]
      },
      skills: {
        title: 'المهارات والخبرات',
        subtitle: 'التقنيات التي أعمل بها',
        categories: {
          frontend: 'الدعم الفني للمستخدم',
          backend: 'الشبكات',
          tools: 'الأدوات والافتراضية',
          soft: 'المهارات الشخصية'
        }
      },
      projects: {
        title: 'الخبرات العملية',
        subtitle: 'تجارب عملية حقيقية',
        viewProject: 'عرض التفاصيل',
        viewCode: 'عرض المستندات'
      },
      services: {
        title: 'الخدمات',
        subtitle: 'ما أقدمه',
        items: [
          {
            title: 'الدعم الفني',
            description: 'حل مشاكل الأجهزة والبرامج والطابعات وأنظمة التشغيل'
          },
          {
            title: 'إعداد الشبكات',
            description: 'تركيب وإعداد الراوترات والسويتشات و VLAN و DNS و DHCP'
          },
          {
            title: 'الأنظمة الافتراضية',
            description: 'إعداد بيئات VMware الافتراضية'
          },
          {
            title: 'الأمن والمراقبة',
            description: 'تركيب أنظمة CCTV وإعداد جدار الحماية Fortigate'
          }
        ]
      },
      contact: {
        title: 'لنعمل معاً',
        subtitle: 'تواصل معي',
        name: 'اسمك',
        email: 'بريدك الإلكتروني',
        message: 'رسالتك',
        send: 'إرسال',
        sending: 'جاري الإرسال...'
      }
    }
  };


  const content = t[language];

  // Skills data (Updated based on CV)
  const skills = {
    frontend: [
      'Technical Support',
      'Computer Maintenance',
      'Touch Typing',
      'Microsoft Office',
      'User Support'
    ],
    backend: [
      'Networking Fundamentals',
      'Routing & Switching',
      'VLANs',
      'DNS',
      'DHCP'
    ],
    tools: [
      'VMware Virtualization',
      'Packet Tracer',
      'GNS3',
      'Cisco Routers',
      'Cisco Switches',
      'Fortigate Firewall',
      'CCTV Systems'
    ],
    soft: [
      'Self Learning',
      'Communication Skills',
      'Problem Solving',
      'Team Work',
      'Fast Adaptation',
      'Work Under Pressure'
    ]
  };

  // Projects data (Updated based on real IT & Network experience)
  const projects = [
    {
      title: 'Enterprise Network Lab',
      description: 'Design and implementation of a full enterprise network using VLANs, Routing, DNS, and DHCP with Cisco devices.',
      image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=600&fit=crop',
      tags: ['Cisco', 'VLAN', 'Routing', 'DNS', 'DHCP'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'VMware Virtualization Lab',
      description: 'Building and managing multiple virtual machines for servers and testing network environments using VMware.',
      image: 'https://images.unsplash.com/photo-1580894908361-967195033215?w=800&h=600&fit=crop',
      tags: ['VMware', 'Virtual Machines', 'Networking'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'CCTV & Security System Setup',
      description: 'Installation, configuration, and maintenance of CCTV systems and Fortigate Firewall for security monitoring.',
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=600&fit=crop',
      tags: ['CCTV', 'Fortigate', 'Security', 'Firewall'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ];


  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-40 ${theme === 'dark' ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-lg border-b ${theme === 'dark' ? 'border-slate-800' : 'border-gray-200'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
            >
              AH
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {Object.entries(content.nav).slice(0, 6).map(([key, value]) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  whileHover={{ scale: 1.05 }}
                  className={`text-sm font-medium ${theme === 'dark' ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-colors`}
                >
                  {value}
                </motion.a>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-200'}`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              {/* Language Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-200'} flex items-center gap-2`}
              >
                <Globe size={20} />
                <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'} border-t ${theme === 'dark' ? 'border-slate-700' : 'border-gray-200'}`}
          >
            <div className="px-4 py-4 space-y-3">
              {Object.entries(content.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium ${theme === 'dark' ? 'hover:text-purple-400' : 'hover:text-purple-600'}`}
                >
                  {value}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-400/10 border border-purple-500/20 mb-6"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm">{content.hero.available}</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-3xl lg:text-4xl block mb-2`}>
                  {content.hero.greeting}
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  {content.hero.name}
                </span>
              </h1>

              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-purple-400">
                {content.hero.title}
              </h2>

              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8 leading-relaxed`}>
                {content.hero.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                >
                  {content.hero.cta1}
                  <ArrowRight size={20} />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-gray-100'} border ${theme === 'dark' ? 'border-slate-700' : 'border-gray-300'} rounded-lg font-semibold transition-colors`}
                >
                  {content.hero.cta2}
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {[
                  { icon: Github, url: '#' },
                  { icon: Linkedin, url: '#' },
                  { icon: Twitter, url: '#' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-3 ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-gray-100'} rounded-lg border ${theme === 'dark' ? 'border-slate-700' : 'border-gray-300'} transition-colors`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Hero Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 rounded-full blur-3xl"
                />
                <div className={`relative ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-xl rounded-3xl p-8 border ${theme === 'dark' ? 'border-slate-700' : 'border-gray-300'}`}>
                  <div className="grid grid-cols-2 gap-4">
                    {[Code, Briefcase, Award, GraduationCap].map((Icon, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`${theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-100/50'} rounded-2xl p-6 flex items-center justify-center`}
                      >
                        <Icon size={48} className="text-purple-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-purple-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {content.about.title}
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {content.about.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6`}>
                {content.about.content}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {content.about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`${theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-100'} rounded-2xl p-6 text-center border ${theme === 'dark' ? 'border-slate-700' : 'border-gray-200'}`}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {content.skills.title}
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {content.skills.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${theme === 'dark' ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-lg rounded-2xl p-6 border ${theme === 'dark' ? 'border-slate-700' : 'border-gray-200'}`}
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  {content.skills.categories[category]}
                </h3>
                <div className="space-y-3">
                  {items.map((skill, j) => (
                    <motion.div
                      key={j}
                      whileHover={{ x: isRTL ? -5 : 5 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={16} className="text-cyan-400" />
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {content.projects.title}
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {content.projects.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`${theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-50'} rounded-2xl overflow-hidden border ${theme === 'dark' ? 'border-slate-700' : 'border-gray-200'} group`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      {content.projects.viewProject}
                    </a>
                    <a
                      href={project.codeUrl}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github size={16} />
                      {content.projects.viewCode}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {content.services.title}
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {content.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.services.items.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`${theme === 'dark' ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-lg rounded-2xl p-8 border ${theme === 'dark' ? 'border-slate-700' : 'border-gray-200'}`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="text-purple-400" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {content.contact.title}
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {content.contact.subtitle}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-50'} rounded-2xl p-8 border ${theme === 'dark' ? 'border-slate-700' : 'border-gray-200'}`}
          >
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {content.contact.name}
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:border-purple-500 transition-colors`}
                  placeholder={content.contact.name}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {content.contact.email}
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:border-purple-500 transition-colors`}
                  placeholder={content.contact.email}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {content.contact.message}
                </label>
                <textarea
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:border-purple-500 transition-colors resize-none`}
                  placeholder={content.contact.message}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                <Mail size={20} />
                {content.contact.send}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 ${theme === 'dark' ? 'bg-slate-900' : 'bg-gray-900'} text-white`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
                Ahmed Nabil
              </div>
              <p className="text-gray-400">
                  {language === 'en' 
                    ? 'Crafting innovative IT solutions, one line of code at a time.'
                    : 'ابتكار حلول تقنية متقدمة، سطر برمجي واحد في كل مرة.'}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{language === 'en' ? 'Quick Links' : 'روابط سريعة'}</h3>
              <div className="space-y-2">
                {Object.entries(content.nav).slice(0, 5).map(([key, value]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="block text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {value}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{language === 'en' ? 'Connect' : 'تواصل'}</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, url: '#' },
                  { icon: Linkedin, url: '#' },
                  { icon: Twitter, url: '#' },
                  { icon: Mail, url: '#' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>© 2025 Ahmed Hassan. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default  PortfolioWebsite ;