import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertRegistrationSchema } from "@shared/schema";
import { useRegister } from "@/hooks/use-registrations";
import { Loader2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type FormData = z.infer<typeof insertRegistrationSchema>;

export function RegistrationForm() {
  const { mutate: register, isPending } = useRegister();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(insertRegistrationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: FormData) => {
    register(data, {
      onSuccess: () => {
        setIsSuccess(true);
      },
    });
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel p-8 md:p-12 text-center rounded-lg border-l-4 border-l-white/20"
      >
        <h3 className="text-3xl font-sans font-light text-white mb-4">
          ENTRY CONFIRMED
        </h3>
        <p className="text-muted-foreground font-light text-lg mb-8 leading-relaxed">
          Your registration for the Tesla giveaway has been secured. Keep an eye on your inbox.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-sm font-sans tracking-widest text-white/50 hover:text-white transition-colors uppercase"
        >
          Submit another entry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <input
            {...formRegister("name")}
            type="text"
            id="name"
            placeholder=" "
            className="peer tesla-input"
          />
          <label 
            htmlFor="name" 
            className="absolute left-0 top-3 text-white/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-white font-sans uppercase tracking-wider"
          >
            Full Name
          </label>
          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            {...formRegister("email")}
            type="email"
            id="email"
            placeholder=" "
            className="peer tesla-input"
          />
          <label 
            htmlFor="email" 
            className="absolute left-0 top-3 text-white/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-white font-sans uppercase tracking-wider"
          >
            Email Address
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div className="relative">
          <input
            {...formRegister("phone")}
            type="tel"
            id="phone"
            placeholder=" "
            className="peer tesla-input"
          />
          <label 
            htmlFor="phone" 
            className="absolute left-0 top-3 text-white/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-white font-sans uppercase tracking-wider"
          >
            Phone Number (Optional)
          </label>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="tesla-button flex items-center justify-center gap-3 group"
      >
        {isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing
          </>
        ) : (
          <>
            Enter Giveaway
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-xs text-center text-white/30 mt-6 max-w-sm mx-auto">
        By entering, you agree to our Terms and Conditions and Privacy Policy. No purchase necessary to enter or win.
      </p>
    </form>
  );
}
