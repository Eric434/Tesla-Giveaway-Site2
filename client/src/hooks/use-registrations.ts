import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

type RegistrationInput = z.infer<typeof api.registrations.create.input>;

export function useRegister() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: RegistrationInput) => {
      const validated = api.registrations.create.input.parse(data);
      
      const res = await fetch(api.registrations.create.path, {
        method: api.registrations.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.registrations.create.responses[400].parse(await res.json());
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to register. Please try again.");
      }

      return api.registrations.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Registration Successful",
        description: "You have been entered into the Tesla giveaway.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Registration Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
