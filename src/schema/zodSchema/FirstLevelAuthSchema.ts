import { z } from "zod";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const FirstLevelAuthSchema = z.object({
  email: z
    .string()
    .regex(emailRegex, "Please enter a valid email address")
    .min(1, { message: "Email Required" }),
});
