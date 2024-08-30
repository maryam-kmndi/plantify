import { z } from "zod";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

interface dataProps {
  name: string;
  email: string;
  password: string;
}

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: "Name Required" }),

  email: z
    .string()
    .regex(emailRegex, "Invalid email format")
    .min(1, { message: "Email Required" }),

  password: z
    .string()
    .min(8, { message: "password must be at least 8 character" }),
});
