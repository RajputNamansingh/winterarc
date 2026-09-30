import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Winter Arc — 90 Days of Discipline', description: 'Build your body, sharpen your mind, and create momentum before the new year.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
