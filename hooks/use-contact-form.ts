import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactFormSchema } from "@/lib/validations/contact-form";

interface UseContactFormOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useContactForm = (options: UseContactFormOptions = {}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  const submitForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formUrl = process.env.NEXT_PUBLIC_GETFORM_URL;
    
    if (!formUrl) {
      console.error("NEXT_PUBLIC_GETFORM_URL no está configurada");
      setSubmitStatus('error');
      setIsSubmitting(false);
      options.onError?.(new Error("Configuración de formulario faltante"));
      return;
    }

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: "hikari-tech-website",
        }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      setSubmitStatus('success');
      form.reset();
      options.onSuccess?.();
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setSubmitStatus('error');
      const errorMessage = error instanceof Error ? error : new Error("Error desconocido");
      options.onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = form.handleSubmit(submitForm);

  return {
    form,
    isSubmitting,
    submitStatus,
    handleSubmit,
    formState: form.formState,
  };
};
