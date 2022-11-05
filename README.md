# Cities of the World

Frontend Challenge - React client that consumes an API and can list, show, create, update, and remove cities.

***

## IMPORTANT
### Things I would like to add/do with more time for developing

- Much more unit tests.
- More robust validations for the creation and editing form (like avoid 'e' '-' and '+' in number field).
- `react-i18next` library for internationalization to scale more easily to future languages.
- Work with a branching strategy like git flow instead of develop.
- I could use `redux` to manage the app state, but it is a small app soo I didn't want to overengineer.
***

### About the project
This is a project made in: 

- `React` with `Typescript`.
- `SASS` and `react-bootstrap` for styling.

I set it up without the use of "create-react-app".

It has an express mock server to be able to develop locally without depending on an API implementation.

### Prerequisites

For development, you will only need `Node.js` and `Git` installed in your environment.

### Install

    $ git clone https://github.com/FatiAlex/cities-of-the-world.git
    $ cd cities-of-the-world
    $ npm install

### Configuration

The project is ready to start working.

However, if you want to go against a real API, you can modify the URL in the `.env` file located at the root of the project.

### Running the project

```bash
npm run start
``` 

### Build for production

```bash
npm run build
```

