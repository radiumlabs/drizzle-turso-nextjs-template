# Drizzle-Turso-Nextjs-Template

### [DrizzleORM](https://orm.drizzle.team/) - [Turso](https://turso.tech/) - [Next.js](https://nextjs.org/) - Starter Template.

## Use

Use this template to get start or as template. This template consist DrizzleORM, Turso, Zod, Next.js 13 App, TailwindCSS..

- Git Clone and Starts..

## Getting Started

#### Firstly, Copy your Turso Credentials url and auth token by using the following commands.

Setup your turso cli using [Turso CLI Setup Docs](https://docs.turso.tech/tutorials/get-started-turso-cli)

And then use following commands :- 

```bash

# login to turso account
turso auth login

# following command will create new database in turso (use your database name instead of db_name)
turso db create db_name

# to view database credentials - copy your database url
# you can also use the url highlighted by turso on turso dashboard like https://db_name-user_name.turso.io
turso db show db_name

# get your auth secret

turso db tokens create db_name -e none

# store all this credentials in .env file

```


Secondly, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Drizzle

To Create migration use following command: the following command is set in package.json file.

```bash
pnpm run generate
```

To Push local migration to Turso Database use following command: the following command is set in package.json file.

```bash
# after generating migration in the root directory drizzle folder is created and in that there is file with extension .sql use that file name below instead of migration_file
turso db shell db_name < drizzle/migration_file.sql
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Learn Next.js](https://nextjs.org/docs) - Next.js Docs
- [Learn DrizzleORM](https://orm.drizzle.team/) - DrizzleORM Docs
- [Learn Turso](https://turso.tech/docs) - Turso Docs

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.