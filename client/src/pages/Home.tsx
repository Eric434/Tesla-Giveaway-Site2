import { motion } from "framer-motion";
import { RegistrationForm } from "@/components/RegistrationForm";
import { OptimusWidget } from "@/components/OptimusWidget";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero dark futuristic car interior */}
        <img
          src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop"
          alt="Tesla Interior"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 px-4 py-12 md:py-24 mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Left Column: Hero Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left pt-12 lg:pt-0"
        >
          <div className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full text-xs font-display tracking-widest text-white/70 uppercase">
            Limited Time Event
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-light text-white leading-tight mb-6">
            EXPERIENCE
            <br />
            <span className="font-bold">THE FUTURE.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
            Register now for a chance to win a custom Tesla Model S. Zero
            emissions. Zero compromises. Pure performance.
          </p>

          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-display font-bold text-white">
                1.99s
              </div>
              <div className="text-xs font-display tracking-widest text-white/40 uppercase mt-1">
                0-60 mph
              </div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-display font-bold text-white">
                396mi
              </div>
              <div className="text-xs font-display tracking-widest text-white/40 uppercase mt-1">
                Range
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-3xl font-display font-bold text-white">
                200mph
              </div>
              <div className="text-xs font-display tracking-widest text-white/40 uppercase mt-1">
                Top Speed
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-md lg:max-w-lg"
        >
          <div className="glass-panel p-8 md:p-12 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <h2 className="text-2xl font-display font-bold text-white mb-2 uppercase tracking-wide">
              Secure Your Entry
            </h2>
            <p className="text-white/50 mb-8 font-light">
              Enter your details below to participate in the official draw.
            </p>

            <RegistrationForm />
          </div>
        </motion.div>
      </div>

      <OptimusWidget />
    </div>
  );
}
