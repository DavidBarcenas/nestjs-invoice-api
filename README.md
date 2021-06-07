# Invoice API

API to complement the [frontend challenge](https://github.com/DavidBarcenas/angular-invoice) with a CRUD and data persistence with MongoDB using the Nestjs framework. You can see the API deployed [here.](https://shrouded-thicket-06047.herokuapp.com/docs/)

### Features 

- Documentation with Swagger
- Deployed on Heroku
- Connection with MongoDB
- Using Docker

### Project setup

Clone/download the project and run `npm install` to build the dependencies the project needs.

#### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
#### Running Database

```bash
$ docker-compose up -d
```

### Notes

Don't forget to create your `.env` and `.prod.env` files to manage your environment variables.

```
MONGO_INITDB_ROOT_USERNAME
MONGO_INITDB_ROOT_PASSWORD
MONGO_INVOICE_COLLECTION
MONGO_CONNECTION
MONGO_HOST
MONGO_PORT
MONGO_DB
```

### License

Released under the [MIT licensed](LICENSE).
