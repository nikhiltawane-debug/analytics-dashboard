import { z } from "zod";
import en from "@/locale/en.json";

const v = en.validation;

export const signupSchema = z
  .object({
    name: z.string().trim().min(1, v.nameRequired).min(3, v.nameMin),
    email: z.string().trim().min(1, v.emailRequired).email(v.emailInvalid),
    password: z.string().min(1, v.passwordRequired).min(6, v.passwordMin),
    confirmPassword: z
      .string()
      .min(1, v.confirmPasswordRequired)
      .min(6, v.confirmPasswordMin),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: v.passwordsDontMatch,
    path: ["confirmPassword"],
  });

export type SignUpFormValues = z.infer<typeof signupSchema>;
