# Message App

## Demo

![Demo](./assets/demo.gif)

## Getting Started

1. `pnpm install`
2. Copy `.env.example` to `.env.local` by running `cp .env.example .env.local`
3. Populate the `.env.local` with Clerk credentials
4. `docker compose up -d`
5. `pnpm dev`

## Scope

Minimum feature set:

- [x] Single chat room
- [x] Remember username between page loads, but no authentication required
- [x] No need to persist messages
- [x] Polling API (every 10 seconds)

There’s a number of other features and delighters that can be added to improve the app, such as:

- [ ] WebSockets
- [x] Persisting messages to a DB
- [x] Authentication
- [x] Multiple chat rooms

Put as much work into any part of the app as you’d like, it’s totally fine if it’s beautiful but has less functionality or if it’s feature complete and looks bare bones. We’re excited to see what you enjoy working on!
