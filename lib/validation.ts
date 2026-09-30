import { z } from 'zod';
export const registerSchema = z.object({ name: z.string().trim().min(2).max(80), username: z.string().trim().min(3).max(30).regex(/^[a-zA-Z0-9_]+$/), email: z.string().trim().email(), password: z.string().min(8).max(72), timezone: z.string().min(1).max(64).default('UTC') });
export const loginSchema = z.object({ identifier: z.string().trim().min(1), password: z.string().min(1) });
