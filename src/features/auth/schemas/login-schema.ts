import { z } from "zod";
import en from "@/locale/en.json";

const v = en.validation;

export const loginSchema = z.object({
  email: z.string().trim().min(1, v.emailRequired).email(v.emailInvalid),
  password: z.string().min(1, v.passwordRequired),
});

export type LoginFormValues = z.infer<typeof loginSchema>;