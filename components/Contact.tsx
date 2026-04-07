import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h2>
              <p className="text-slate-600 dark:text-gray-400 mb-8">
                I'm currently looking for new opportunities in Data Science and analytics as well as AI. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-600 dark:text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-gray-500">Email</p>
                    <a href={SOCIAL_LINKS.email} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">nirmalkumarmurali19@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-slate-600 dark:text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-gray-500">Location</p>
                    <p>Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-gray-400 mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-md shadow-blue-500/25"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;