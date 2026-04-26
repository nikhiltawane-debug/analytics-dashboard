import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";

// The "Smooth" UI font
export const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// Keep this for revenue, tables, and POS numbers
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});