import z from "zod";
import en from "@/locale/en.json";

const v = en.validation;

export const resetPasswordSchema = z
  .object({
    password: z.string().min(1, v.passwordRequired).min(8, v.passwordMin),
    confirmPassword: z
      .string()
      .min(1, v.confirmPasswordRequired)
      .min(8, v.confirmPasswordMin),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: v.passwordsDontMatch,
    path: ["confirmPassword"],
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
