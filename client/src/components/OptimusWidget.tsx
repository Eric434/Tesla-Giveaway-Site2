import { useState, useEffect } from "react";
import optimusImage from "@assets/optimus_1773103843324.jpg";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function OptimusWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Delay the appearance of Optimus slightly for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto"
        >
          {/* Speech Bubble */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="relative bg-white text-black px-5 py-3 rounded-2xl shadow-xl shadow-white/10 mb-8"
          >
            <p className="font-sans font-bold text-sm tracking-wide">
              Welcome!
            </p>
            {/* Bubble Tail */}
            <div className="absolute -bottom-2 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-white border-r-[12px] border-r-transparent transform rotate-[25deg]" />
          </motion.div>

          {/* Optimus Image Container */}
          <div className="relative group">
            <button 
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 z-10 p-1 bg-background/80 backdrop-blur border border-white/20 rounded-full text-white/50 hover:text-white hover:border-white transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Dismiss Optimus"
            >
              <X size={14} />
            </button>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl shadow-white/5 animate-wave-continuous bg-black">
              <img 
                src={optimusImage} 
                alt="Optimus" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
