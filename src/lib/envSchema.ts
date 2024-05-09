import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string(),
});

export const envVars = envSchema.parse({
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
});
