import { redirect } from 'next/navigation';
import { getSessionUserId } from '@/lib/auth';
export default async function Dashboard() { if (!(await getSessionUserId())) redirect('/login'); return <main className="dashboard"><p className="eyebrow">YOUR WINTER ARC</p><h1>Today is yours.</h1><p className="lead">Your dashboard foundation is ready. Next phases will add onboarding, habits, goals, and progress.</p><div className="stat-grid"><div><b>0</b><span>Current streak</span></div><div><b>0%</b><span>Completion</span></div><div><b>0</b><span>XP earned</span></div></div></main> }
