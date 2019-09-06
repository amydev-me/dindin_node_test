### Requirements

- NodeJS
- NPX
- MySQL

### Installation

Switch to the project folder
```
cd /project_folder
npm install
```

### Config

Rename .env.example

Set the database connection in .env

```
    port = 3000
    DB_USERNAME= root
    DB_PASSWORD=password
    DB_DATABASE= database
    DB_HOST =127.0.0.1
```
Run the database migrations (Set the database connection in .env  before migrating)
```
npx sequelize-cli db:migrate
```
Run the database seeders
```
npx sequelize-cli db:seed:all
```

Start the local development server
```
    npm run dev
```


You can now access the server at http://localhost:PORT
