# Pizzeria Bella Napoli

Sito web per una pizzeria con frontend in Next.js e backend headless in Strapi.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS
- Strapi 5 (SQLite in sviluppo)

## Struttura

- Frontend: `src/`
- Backend Strapi: `backend/`

## Avvio rapido (sviluppo)

### 1) Frontend

```bash
npm install
npm run dev
```

Frontend: http://localhost:3000

### 2) Backend (Strapi)

```bash
cd backend
npm install
npm run develop
```

Admin Strapi: http://localhost:1337/admin

### 3) Avvio contemporaneo

```bash
npm run dev:all
```

## Variabili d’ambiente

- Frontend: `NEXT_PUBLIC_STRAPI_API_URL` (default `http://localhost:1337`)
- Backend: creare `backend/.env` partendo da `backend/.env.example`

## Contenuti gestiti da Strapi

- Homepage (hero)
- Menù pizze
- Contatti
- Chi siamo (immagini)

## Build

```bash
npm run build
npm run start
```
