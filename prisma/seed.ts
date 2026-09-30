import { PrismaClient, AchievementKey } from '@prisma/client';
const prisma = new PrismaClient();
const achievements = [
  ['FIRST_STEP', 'FIRST STEP', 'Complete your first day.', '✦', 50],
  ['SEVEN_DAY_FIRE', '7 DAY FIRE', 'Maintain a 7-day streak.', '🔥', 100],
  ['THIRTY_DAYS', '30 DAYS', 'Complete 30 challenge days.', '◈', 250],
  ['FIFTY_WORKOUTS', '50 WORKOUTS', 'Complete 50 workouts.', '⚡', 300],
  ['BOOKWORM', 'BOOKWORM', 'Read 500 pages.', '◉', 200],
  ['DEEP_WORKER', 'DEEP WORKER', 'Complete 25 hours of deep work.', '◒', 250],
  ['ARC_COMPLETE', 'ARC COMPLETE', 'Finish the full Winter Arc.', '★', 500]
] as const;
async function main() { for (const [key, name, description, icon, xpReward] of achievements) await prisma.achievement.upsert({ where: { key: key as AchievementKey }, update: {}, create: { key: key as AchievementKey, name, description, icon, xpReward } }); }
main().finally(() => prisma.$disconnect());
