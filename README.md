# ionic-sidemenu-react-starter

This is an opinionated version of the default Ionic Framework Sidemenu starter using React. Clone it to have a 100% ready starting point for any Ionic Framework project that includes the following features:

## Features

- ESLint integration with Prettier
- Automatic prettier formating on commits
- Automatic linting validation on commits
- Directory structure/organization
- Unit and integration testing using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- Code coverage
- E2E Testing using [Cypress](https://www.cypress.io)

## Opinions

- No `index` files: I hate 'em.
- Single quotes: I prefer double but most everyone likes single. With Prettier, it doesn't matter!
- 2 spaces

## Installation and Serving

```
git clone calendee/ionic-sidemenu-react-starter
npm install
ionic serve
```

^ That's it. Now, just open your browser to http://localhost:8100/

## Testing

- Unit tests while developing: `yarn test`
- Produce test coverage results: `yarn test:coverage:ci`
- E2E Tests: `yarn cypress:open`

## Coming Soon

- Theme switcher
