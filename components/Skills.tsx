import React from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar
} from 'recharts';
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../constants';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const textColor = darkMode ? '#cbd5e1' : '#475569'; // slate-300 vs slate-600
  const tooltipBg = darkMode ? '#1e293b' : '#f8fafc';
  const tooltipBorder = darkMode ? '#334155' : '#e2e8f0';
  const tooltipText = darkMode ? '#f8fafc' : '#0f172a';

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills Dashboard</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-gray-400">Technical proficiency & professional capabilities</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Technical Skills Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pl-4 border-l-4 border-blue-500">Technical Stack</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={TECHNICAL_SKILLS}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fill: textColor, fontSize: 12 }} 
                    width={100}
                    interval={0}
                  />
                  <Tooltip 
                    cursor={{fill: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}}
                    contentStyle={{ backgroundColor: tooltipBg, borderColor: tooltipBorder, color: tooltipText }}
                  />
                  <Bar dataKey="level" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} animationDuration={1500} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Soft Skills Radar */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-card p-6 rounded-2xl flex flex-col items-center"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 self-start pl-4 border-l-4 border-purple-500">Soft Skills</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SOFT_SKILLS}>
                  <PolarGrid stroke={darkMode ? "#475569" : "#cbd5e1"} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: textColor, fontSize: 12 }} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                  />
                  <Tooltip 
                     contentStyle={{ backgroundColor: tooltipBg, borderColor: tooltipBorder, color: tooltipText }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>

        {/* Quick Tags for other tools */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
            {['Docker', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter', 'Linux', 'Agile', 'Jira', 'PostgreSQL', 'MongoDB'].map((tech, i) => (
                <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-gray-400 text-sm hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500 transition-colors cursor-default shadow-sm"
                >
                    {tech}
                </motion.span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;