# brett-genoe-construction-connect-backend

<h1> Construction Connect API </h1>

<h2>Backend Tech Stack</h2>
Express.js
Node.js
Knex
MySQL

<h2>Setup</h2>
<h3>Install NodeJS dependencies</h3>
npm i

<h3>Create and select the construction connect database in a separate MySQL terminal</h3>

CREATE DATABASE constructionconnect;

<h3>Create database tables with knex migrations</h3>

npm run migrate

<h3>Seed the tables with dummy data</h3>

npm run seed

<h3>Run Express App in development mode</h3>

npm run dev

<h3>Or to Start Express App</h3>

npm start
