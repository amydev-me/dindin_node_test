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
### API

Part1 -1 URL
```
    @POST http://localhost:3000/api/nearest-gem
```
```
{
    "latitude" : 1.3273451,
    "longitude":103.8756757,
    "distance":1,
    "amount":[15,30]
}
```
Part1 -2 URL
```
    @POST http://localhost:3000/api/guess
```
```
{
	
"latitude" : 1.33125924,
"longitude":103.89804864
}
```