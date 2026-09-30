import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { registerSchema } from '@/lib/validation';
import { setSession } from '@/lib/auth';
import bcrypt from 'bcryptjs';
export async function POST(request: Request) { try { const input = registerSchema.parse(await request.json()); const exists = await db.user.findFirst({ where: { OR: [{ email: input.email.toLowerCase() }, { username: input.username }] } }); if (exists) return NextResponse.json({ error: 'Email or username is already in use.' }, { status: 409 }); const user = await db.user.create({ data: { name: input.name, username: input.username, email: input.email.toLowerCase(), passwordHash: await bcrypt.hash(input.password, 12), timezone: input.timezone } }); await setSession(user.id); return NextResponse.json({ user: { id: user.id, name: user.name, username: user.username, email: user.email } }, { status: 201 }); } catch (error) { if (error instanceof Error && error.name === 'ZodError') return NextResponse.json({ error: 'Please check the form fields.' }, { status: 400 }); return NextResponse.json({ error: 'Unable to create your account.' }, { status: 500 }); } }
