import { motion } from "framer-motion";
import { RegistrationForm } from "@/components/RegistrationForm";
import { OptimusWidget } from "@/components/OptimusWidget";
import modelXImage from "@assets/360_F_313352416_lSHiu8AC34biJ7odCewqHAjiHZY6NK8y_1773104269380.webp";
import showroomImage from "@assets/360_F_1838283152_qfpoKtIbYiHxqJD6uIt4eIDEmlH5NXyx_1773104269395.webp";
import chargingImage from "@assets/360_F_238510680_CliLnIZXwz44kHmsZBHiLgDvr2jG1Vr3_1773104269434.webp";
import roadsterImage from "@assets/360_F_501367778_3k957g5X4ZhCoL5R1x8fp4n6XHTMvNtQ_1773104269456.webp";
import autopilotImage from "@assets/360_F_247195695_EEzogLt7rG86TDTim0bwHg9hAj5TIRVM_1773104269474.webp";
import modelSFrontImage from "@assets/360_F_286205752_FbZZdcM1qKFRhR2hAyHSWMHtSWB4TyWZ_1773104269492.webp";
import model3RoadImage from "@assets/360_F_343869624_GfdpUpiOJiUhoGazDF1ZmDbYiXDgEhcK_1773104269507.webp";
import modelYRoadImage from "@assets/360_F_569003359_huiYgvF8hFPdVLVrERoJ53hMisNG4xSQ_1773104269524.webp";

export default function Home() {
  const galleryImages = [
    { src: modelXImage, alt: "Tesla Model X", title: "Model X" },
    { src: showroomImage, alt: "Tesla Showroom", title: "Showroom" },
    { src: chargingImage, alt: "Tesla Charging", title: "Supercharging" },
    { src: roadsterImage, alt: "Tesla Roadster", title: "Roadster" },
    { src: autopilotImage, alt: "Tesla Autopilot", title: "Autopilot" },
    { src: modelSFrontImage, alt: "Tesla Model S", title: "Model S" },
    { src: model3RoadImage, alt: "Tesla Model 3", title: "Model 3" },
    { src: modelYRoadImage, alt: "Tesla Model Y", title: "Model Y" },
  ];

  return (
    <div className="min-h-screen w-full relative flex flex-col bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src={modelSFrontImage}
            alt="Tesla Model S"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Column: Hero Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full text-xs font-sans tracking-widest text-white/70 uppercase">
              Limited Time Event
            </div>
            <h1 className="text-5xl md:text-7xl font-sans font-light text-white leading-tight mb-6">
              EXPERIENCE<br />
              <span className="font-bold">THE FUTURE.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Register now for a chance to win a custom Tesla. Zero emissions. Zero compromises. Pure performance.
            </p>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-sans font-bold text-white">1.99s</div>
                <div className="text-xs font-sans tracking-widest text-white/40 uppercase mt-1">0-60 mph</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-sans font-bold text-white">396mi</div>
                <div className="text-xs font-sans tracking-widest text-white/40 uppercase mt-1">Range</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="text-3xl font-sans font-bold text-white">200mph</div>
                <div className="text-xs font-sans tracking-widest text-white/40 uppercase mt-1">Top Speed</div>
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
              <h2 className="text-2xl font-sans font-bold text-white mb-2 uppercase tracking-wide">
                Secure Your Entry
              </h2>
              <p className="text-white/50 mb-8 font-light">
                Enter your details below to participate in the official draw.
              </p>
              
              <RegistrationForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Gallery */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4 uppercase tracking-widest">Innovation Gallery</h2>
            <div className="w-24 h-1 bg-white mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-video group overflow-hidden rounded-lg cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-sans uppercase tracking-[0.3em] text-sm">{image.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Future Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={chargingImage}
            alt="Tesla Charging"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-sans font-bold text-white mb-8 uppercase"
          >
            Sustainable Energy
          </motion.h2>
          <p className="text-xl text-white/70 leading-relaxed font-light">
            Tesla is accelerating the world's transition to sustainable energy. We design and manufacture energy storage systems, and solar products, in addition to our world-class electric vehicles.
          </p>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 bg-black text-center">
        <p className="text-white/30 text-xs uppercase tracking-widest">
          &copy; 2026 Tesla Giveaway. All Rights Reserved.
        </p>
      </footer>

      <OptimusWidget />
    </div>
  );
}
