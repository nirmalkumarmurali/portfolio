import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';
import { SOCIAL_LINKS, PROFILE_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 z-10">
        
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-medium tracking-wider mb-2">Hello, I am</h2>
            <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Nirmal Kumar Murali
            </h1>
            <h2 className="text-2xl sm:text-3xl text-slate-600 dark:text-gray-300 mb-6 font-light">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent font-semibold">
                Data Scientist & AI Developer
              </span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Transforming raw data into intelligent solutions through Machine Learning, Automation, and Artificial Intelligence.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-blue-500/30 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-blue-600/20 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-md group">
                <Github size={20} className="group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-blue-500/30 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-blue-600/20 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-md group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a href={SOCIAL_LINKS.resume}
                 className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-lg shadow-blue-500/25 group">
                <FileText size={20} className="group-hover:scale-110 transition-transform" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 dark:opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800">
               {/* Placeholder for professional photo */}
               <img 
                 src={PROFILE_IMAGE}
                 alt="Nirmal Kumar Murali" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
            </div>
            
            {/* Floating badges */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-4 -right-4 glass-card p-3 rounded-xl flex items-center gap-2"
            >
               <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-ping"></div>
               <span className="text-xs font-bold text-slate-700 dark:text-white">Open to work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 dark:text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-gray-500 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;