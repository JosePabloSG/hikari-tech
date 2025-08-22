import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder los 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/, "El nombre solo puede contener letras y espacios"),
  
  email: z
    .string()
    .min(1, "El correo electrónico es requerido")
    .email("Por favor ingresa un correo electrónico válido")
    .max(255, "El correo electrónico es demasiado largo"),
  
  description: z
    .string()
    .min(1, "La descripción es requerida")
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(1000, "La descripción no puede exceder los 1000 caracteres")
    .refine(
      (val) => val.trim().split(/\s+/).length >= 3,
      "La descripción debe contener al menos 3 palabras"
    ),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
