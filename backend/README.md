# Welcome to our backend!

Before doing anything, run the following command on the server base directory `'vecep/backend'`:

```
$ npm install
```

### Project environment keys
Ask for a contributor for the correct keys shown in `.env.example`. Create a `.env` file in the same level and paste those keys.

---

### Setting up a local database
If you are to run the project locally, it may be necessary to both setup and populate a MongoDB database on your machine (See: https://www.mongodb.com/docs/manual/administration/install-community/) .

1. **migrate-mongo** package is essential for running database migrations and seeds:

```
$ npm i -g migrate-mongo

# or if you prefer not installing globally

$ npx migrate-mongo <your-command> # install temporarily whenever you need
```

2. Make sure you have MongoDB properly installed on your machine.
5. Finally, in order to create our database an seed it, run:

```
$ npm run migrate:up
```

---

### Running the server
```
npm run dev
```
