import { z } from "zod";
import en from "@/locale/en.json";

const v = en.validation;

export const forgotPasswordSchema = z.object({
  email: z.string().trim().min(1, v.emailRequired).email(v.emailInvalid),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;