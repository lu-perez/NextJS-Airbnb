# NextJS13 + Prisma + MongoDB + TailwindCSS + NextAuth

## Create NextJS project

```bash
npx create-next-app --typescript
```

### Dev

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma

* Install

```bash
npm i -D prisma
npm i @prisma/client
```

* Initialize Prisma

```bash
npx prisma init
```

* Push DB prisma

```bash
npx prisma db push
```

## Next-Auth

* Install

```
npm i next-auth
npm i @next-auth/prisma-adapter
```
