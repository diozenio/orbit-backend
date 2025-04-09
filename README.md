# Orbit Backend

> Backend service to support the [Orbit](https://github.com/diozenio/orbit) application.

## Features

- RESTful API for managing personal expenses
- Expense transactions categorized by type
- CRUD operations for:
  - Transactions
  - Transaction categories
- Integration with Prisma ORM
- Organized HTTP routes

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js >= 18
- Yarn
- Docker and Docker Compose

### Installation

```bash
git clone https://github.com/diozenio/orbit-backend.git
cd orbit-backend
yarn install
```

Create a `.env` file by copying the example:

```bash
cp .env.example .env
```

Or manually create a `.env` file with the following content:

```env
PORT=8080
NODE_ENV=development
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
```

### Running the Database

Start the database with Docker:

```bash
docker compose up -d
```

### Running Migrations

Apply Prisma migrations to your database:

```bash
yarn migrate
```

To open Prisma Studio:

```bash
yarn prisma
```

### Running the App

Run the development server:

```bash
yarn dev
```

## Folder Structure

orbit-backend/  
├── .vscode/ → VSCode workspace settings  
├── prisma/ → Prisma schema and migrations  
└── src/  
  ├── http/ → HTTP layer (routes, controllers, etc.)  
  ├── lib/ → Shared libraries and utilities  
  └── modules/ → Feature-based modules (e.g. expenses, transactions, categories)  
    ├── <feature>/ → Domain module  
    │  └── <sub-feature>/ → Actions like Create, Update, Delete, Get  
    └── ...

## Technologies Used

- Backend Framework: Fastify (https://fastify.dev/)
- ORM: Prisma (https://www.prisma.io/)
- Type Checking: TypeScript (https://www.typescriptlang.org/)
- Validation: Zod (https://zod.dev/)
- Bundler: tsup (https://tsup.egoist.dev/)
- Runtime: tsx (https://github.com/esbuild-kit/tsx)
- Environment Management: dotenv (https://github.com/motdotla/dotenv)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT (LICENSE)
