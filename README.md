## Tech stack:

- [Next.js](https://nextjs.org)
- [Drizzle ORM](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [Postgres](https://www.postgresql.org)
- [TypeScript](https://www.typescriptlang.org)

## Benefits of using this monorepo:

- End to end type safety.
- Easily add new features and components.
- Can receive latest changes for customized ShadcnUI components.

## Install all dependencies

`npm install`

## Start the dev server

`npm run dev`

## Database Viewer

Developers should use [Drizzle Gateway](https://gateway.drizzle.team/docs/docker) as the database viewer.

```bash
docker pull ghcr.io/drizzle-team/gateway:latest
docker volume create drizzle-gateway
docker run -d \
  --name drizzle-gate \
  --restart always \
  -p 4983:4983 \
  -e PORT=4983 \
  -e STORE_PATH=./app \
  -e MASTERPASS=your_master_password \
  -v drizzle-gateway:/app \
  ghcr.io/drizzle-team/gateway:latest
```

Once it is running, open `http://localhost:4983`.

## Cron Jobs

Cron routes live under `src/app/api/cronjobs/**` and are registered in `vercel.json`.
