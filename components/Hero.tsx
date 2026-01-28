"use client";
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

type Petal = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
};

type TechElement = {
  id: number;
  symbol: string;
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
};

const Hero = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [techElements, setTechElements] = useState<TechElement[]>([]);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const controls = useAnimation();

  const content = {
    en: {
      title: "IoT & Embedded Systems — Computer Engineering Student",
      slogan1: "Engineering resilience.",
      slogan2: "Where circuits grow petals.",
      viewProjects: "View Projects",
      downloadCV: "Download CV",
      scroll: "SCROLL"
    },
    fr: {
      title: "IoT & Systèmes Embarqués — Étudiante en Génie Informatique",
      slogan1: "Ingénierie de la résilience.",
      slogan2: "Où les circuits font pousser des pétales.",
      viewProjects: "Voir les Projets",
      downloadCV: "Télécharger CV",
      scroll: "DÉFILER"
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  useEffect(() => {
    // Generate floating sakura petals
    const generatePetals = () => {
      const newPetals = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
        size: 10 + Math.random() * 20
      }));
      setPetals(newPetals);
    };

    // Generate floating tech elements
    const generateTechElements = () => {
      const symbols = ['{ }', '<>', '[ ]', '()', '01', 'IoT', 'AI', 'ML', '⚡', '🔧', '💻', '🌐', '📡', '⚙️'];
      const newElements = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 15 + Math.random() * 10,
        size: 0.8 + Math.random() * 1.5
      }));
      setTechElements(newElements);
    };

    generatePetals();
    generateTechElements();
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const scrollToProjects = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Language Switcher - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50"
      >
        <motion.button
          onClick={toggleLanguage}
          className="relative flex items-center gap-2 px-4 py-2 bg-slate-900/40 backdrop-blur-md border border-pink-500/30 rounded-full overflow-hidden group"
          whileHover={{ scale: 1.05, borderColor: 'rgba(255, 61, 119, 0.6)' }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Hover Background Effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* EN/FR Toggle */}
          <span className="relative flex items-center gap-2 text-sm font-medium">
            <motion.span
              className={`transition-colors duration-300 ${
                language === 'en' ? 'text-pink-400' : 'text-gray-400'
              }`}
              animate={{ scale: language === 'en' ? 1.1 : 1 }}
            >
              EN
            </motion.span>
            <span className="text-gray-500">/</span>
            <motion.span
              className={`transition-colors duration-300 ${
                language === 'fr' ? 'text-pink-400' : 'text-gray-400'
              }`}
              animate={{ scale: language === 'fr' ? 1.1 : 1 }}
            >
              FR
            </motion.span>
          </span>

          {/* Globe Icon */}
          <motion.svg
            className="w-4 h-4 text-pink-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: language === 'fr' ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </motion.svg>
        </motion.button>
      </motion.div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 61, 119, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 61, 119, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M1920,200 Q1500,150 1000,200 T0,200"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff3d77" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff3d77" stopOpacity="1" />
            <stop offset="100%" stopColor="#4cc9f0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4cc9f0" stopOpacity="0" />
            <stop offset="50%" stopColor="#4cc9f0" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff3d77" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Tech Elements */}
      {techElements.map((element) => (
        <motion.div
          key={`tech-${element.id}`}
          className="absolute pointer-events-none font-mono text-cyan-400/20 select-none"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            fontSize: `${element.size}rem`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(element.id) * 20, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360]
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {element.symbol}
        </motion.div>
      ))}

      {/* Floating Sakura Petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute pointer-events-none"
          style={{
            left: `${petal.left}%`,
            top: '-50px'
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(petal.id) * 100, 0],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C12 2 8 6 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 6 12 2 12 2Z"
              fill="#ff9bb5"
              opacity="0.6"
            />
            <path
              d="M12 14C12 14 8 18 8 22C8 22 10 22 12 22C14 22 16 22 16 22C16 18 12 14 12 14Z"
              fill="#ffc7d4"
              opacity="0.4"
            />
          </svg>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl w-full text-center">
          {/* Floating Particles Around Name */}
          <div className="relative inline-block mb-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 bg-pink-400 rounded-full"
                style={{
                  left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 150}%`,
                  top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 150}%`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                  x: [0, Math.cos((i * Math.PI * 2) / 8) * 20, 0],
                  y: [0, Math.sin((i * Math.PI * 2) / 8) * 20, 0]
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}

            {/* Name with glitch effect */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 drop-shadow-2xl">
                HADDAJI
              </h1>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>
          </div>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light mb-6 tracking-wide px-4"
            key={`title-${language}`}
          >
            {content[language].title}
          </motion.p>

          {/* Slogan with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-12 px-4"
            key={`slogan-${language}`}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-pink-200/90 leading-relaxed">
              {content[language].slogan1}
              <br />
              <span className="text-cyan-300/80">{content[language].slogan2}</span>
            </p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-px w-32 sm:w-64 mx-auto bg-gradient-to-r from-transparent via-pink-500 to-transparent mb-12"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            key={`buttons-${language}`}
          >
            <motion.button
              onClick={scrollToProjects}
              className="relative px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium text-white overflow-hidden group w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                {content[language].viewProjects}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>

            <motion.button
              className="relative px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium text-pink-300 border-2 border-pink-500/50 rounded-full backdrop-blur-sm hover:bg-pink-500/10 transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 61, 119, 0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {content[language].downloadCV}
              </span>
            </motion.button>
          </motion.div>

          {/* Orbiting Elements Around Buttons */}
          <div className="relative mt-16 hidden md:block">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute left-1/2 top-0 w-1 h-1"
                style={{
                  transformOrigin: '0 0'
                }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.5
                }}
              >
                <motion.div
                  className="w-3 h-3 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"
                  style={{
                    position: 'absolute',
                    left: `${100 + i * 30}px`
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Tech Elements Floating - Larger & More Visible */}
          <motion.div
            className="absolute top-1/4 left-4 sm:left-12 text-cyan-400/40 text-4xl sm:text-6xl font-mono"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {'</>'}
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-4 sm:right-12 text-pink-400/40 text-4xl sm:text-5xl"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            🌸
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-8 sm:right-24 text-purple-400/30 text-3xl sm:text-5xl font-mono"
            animate={{
              x: [0, 15, 0],
              y: [0, -15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {'{ }'}
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 left-8 sm:left-24 text-cyan-400/30 text-3xl sm:text-4xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            ⚡
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="flex flex-col items-center gap-2 text-pink-300/60">
          <span className="text-sm font-light tracking-widest">{content[language].scroll}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;