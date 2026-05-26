// src/config/routes.ts


// Centralized route definitions for the application
export const CLIENT_ROUTES = {
  PUBLIC: {
    HOME: "/",
    PRICING: "/pricing",
    FEATURES: "/features",
  },

  AUTH: {
    LOGIN: "/login",
    SIGNUP: "/signup",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
  },

  APP: {
    DASHBOARD: "/dashboard",
    ANALYTICS: "/analytics",
    REPORTS: "/reports",
    SETTINGS: "/settings",
    PROFILE: "/profile",
  },
} as const;

// API route definitions for backend interactions
export const API_ROUTES = {
  AUTH: {
    LOGIN: "/api/auth/login",
    LOGOUT: "/api/auth/logout",
    SIGNUP: "/api/auth/signup",
    ME: "/api/auth/me",
  },

  DASHBOARD: {
    STATS: "/api/dashboard/stats",
    REVENUE: "/api/dashboard/revenue",
  },

  REPORTS: {
    LIST: "/api/reports",
    DETAIL: (id: string) => `/api/reports/${id}`,
  },
} as const;

export type ClientRoutes = typeof CLIENT_ROUTES;
export type ApiRoutes = typeof API_ROUTES;