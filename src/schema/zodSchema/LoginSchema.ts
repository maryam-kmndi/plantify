"use client";
import { z } from "zod";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const LoginSchema = z.object({
  email: z
    .string()
    .regex(emailRegex, "Invalid email format")
    .min(1, { message: "Email Required" }),

  password: z
    .string()
    .min(8, { message: "password must be at least 8 character" }),
});
