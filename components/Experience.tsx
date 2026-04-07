import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-slate-50 dark:bg-slate-900 border-4 border-blue-500 rounded-full z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                  <div className="glass-card p-6 rounded-2xl hover:border-blue-500/50 transition-colors bg-white dark:bg-slate-800/50 border-slate-100 dark:border-white/5">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:justify-start'}`}>
                      {item.type === 'work' ? (
                        <Briefcase className="text-blue-600 dark:text-blue-400" size={18} />
                      ) : (
                        <GraduationCap className="text-purple-600 dark:text-purple-400" size={18} />
                      )}
                      <span className="text-sm text-slate-500 dark:text-gray-400 font-mono">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{item.role}</h3>
                    <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-3">{item.company} | {item.location}</h4>
                    <ul className={`space-y-2 text-slate-600 dark:text-gray-400 text-sm ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                           <span className="text-blue-500 mt-1">•</span>
                           <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;