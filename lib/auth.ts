import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
const secret = new TextEncoder().encode(process.env.AUTH_SECRET || 'development-only-secret-change-me');
const COOKIE = 'winter_arc_session';
export async function createSession(userId: string) { return new SignJWT({ userId }).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('7d').sign(secret); }
export async function setSession(userId: string) { (await cookies()).set(COOKIE, await createSession(userId), { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 7 }); }
export async function clearSession() { (await cookies()).delete(COOKIE); }
export async function getSessionUserId() { const token = (await cookies()).get(COOKIE)?.value; if (!token) return null; try { return (await jwtVerify(token, secret)).payload.userId as string; } catch { return null; } }
