# Winter Arc

Full-stack foundation for a 90-day self-improvement platform.

## Stack

Next.js App Router, TypeScript, PostgreSQL, Prisma, Zod, bcryptjs, and signed HTTP-only session cookies.

## Local setup

1. Install Node.js 20+ and PostgreSQL.
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and a long `AUTH_SECRET`.
3. Install dependencies: `npm install`.
4. Create the schema: `npm run db:push` (or use `npm run db:migrate` for migrations).
5. Seed platform achievements: `npm run db:seed`.
6. Start development: `npm run dev`.

Open `http://localhost:3000`.

## Available API routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

Registration and login validate input, hash passwords, set secure HTTP-only cookies, and isolate future records by `userId`. Feature APIs will be added in the next implementation phases.
