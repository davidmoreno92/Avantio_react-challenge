# Avantio React Challenge - Solution

## Getting Started

Project steps to prepare dev environment:

    git clone https://github.com/davidmoreno92/Avantio_react-challenge.git
    cd PATH/TO/PROJECT
    npm install

Project steps to run "dev mode" and build:

    npm run dev
    npm run build

Project steps to run tests:

    npm run test
    npm run coverage

## Dependencies

@r2wc/react-to-web-component
@reduxjs/toolkit
@types/react-redux
formik
framer-motion
jest-dom
react
react-dom
react-redux
react-router-dom
yup

## Notes

- Design is made to fit the container where it is displayed, it is simple but reusable. It could be improved by adding some props to customize it.
- Project has not too much effort in design. It just uses tailwind to show it correctly.
- React to Webcomponent is not finished. I tried @r2wc/react-to-web-component and it doesn't seem to work or they miss too much steps in their guides. (I'm using Vite and i would love to know how to do it)
- Unit test are done but the e2e tests are not. Technically is not so difficult but i would have to expend 2-3 hours more and i don't have time enough. (I would use Cypress)

## Improvement i would suggest

- Dinamically generating forms based in config file or props.
- Dinamically generating validations based in config file or props.
- Add all colors in variables and customize tailwind theme.
- Validation messages and translations.
- Cypress E2E test
