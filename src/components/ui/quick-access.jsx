import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Award, 
  PenTool, 
  Mail,
  Zap,
  X
} from 'lucide-react';

const items = [
  { id: 'hero', icon: Home, label: 'Home', color: '#3b82f6' },
  { id: 'about', icon: User, label: 'About', color: '#8b5cf6' },
  { id: 'skills', icon: Cpu, label: 'Skills', color: '#10b981' },
  { id: 'projects', icon: Briefcase, label: 'Work', color: '#f59e0b' },
  { id: 'education', icon: GraduationCap, label: 'Edu', color: '#ec4899' },
  { id: 'certificates', icon: Award, label: 'Cert', color: '#06b6d4' },
  { id: 'blog', icon: PenTool, label: 'Blog', color: '#6366f1' },
  { id: 'contact', icon: Mail, label: 'Contact', color: '#f43f5e' },
];

export function QuickAccess() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-sm p-4 origin-center"
            >
              <div className="grid grid-cols-3 gap-3">
                {items.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection(item.id);
                    }}
                    initial={{ scale: 0, opacity: 0, y: 20 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }
                    }}
                    exit={{ 
                      scale: 0, 
                      opacity: 0, 
                      y: 20,
                      transition: { delay: (items.length - index) * 0.03 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-xl"
                  >
                    <div 
                      className="p-2 rounded-full bg-white/5 mb-1"
                      style={{ color: item.color }}
                    >
                      <item.icon size={20} />
                    </div>
                    <span className="text-[10px] font-medium text-gray-300">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative group h-11 px-6 rounded-xl overflow-hidden transition-all duration-300
          border backdrop-blur-md flex items-center gap-2
          ${isOpen 
            ? 'bg-red-500/10 border-red-500/30 text-red-400' 
            : 'bg-white/5 border-white/10 text-muted-foreground hover:border-white/20 hover:text-white'
          }
        `}
      >
        <span className="relative z-10 flex items-center gap-2 font-semibold text-sm">
          {isOpen ? <X size={18} /> : <Zap size={18} />}
          {isOpen ? 'Close' : 'Quick Access'}
        </span>
        
        {!isOpen && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        )}
      </motion.button>
    </div>
  );
}
