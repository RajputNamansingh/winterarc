import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { loginSchema } from '@/lib/validation';
import { setSession } from '@/lib/auth';
import bcrypt from 'bcryptjs';
export async function POST(request: Request) { try { const input = loginSchema.parse(await request.json()); const user = await db.user.findFirst({ where: { OR: [{ email: input.identifier.toLowerCase() }, { username: input.identifier }] } }); if (!user || !(await bcrypt.compare(input.password, user.passwordHash))) return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 }); await setSession(user.id); return NextResponse.json({ user: { id: user.id, name: user.name, username: user.username } }); } catch { return NextResponse.json({ error: 'Unable to sign in.' }, { status: 400 }); } }
