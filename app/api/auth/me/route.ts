import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getSessionUserId } from '@/lib/auth';
export async function GET() { const id = await getSessionUserId(); if (!id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }); const user = await db.user.findUnique({ where: { id }, select: { id: true, name: true, username: true, email: true, timezone: true } }); return NextResponse.json({ user }); }
