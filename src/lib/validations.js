import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
});

export const validateEmail = (email) => {
  try {
    newsletterSchema.parse({ email });
    return { valid: true, error: null };
  } catch (error) {
    return { valid: false, error: error.errors[0]?.message || "Invalid email" };
  }
};