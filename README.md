## Recaptcha v3 - vanilla js - express

Basic implamentation of [recaptcha v3](https://www.google.com/recaptcha/about/) in a mock loggin form build in vanilla js and a basic express app as backend to validate the recaptcha token.

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

- Node >v16

### Instalation

Go to a terminal and clone the project.

1. [Get a recaptcha credential](https://www.google.com/recaptcha/about/)
2. Clone the repo
   ```sh
   git clone https://github.com/juangrassob/captchav3-express-implementation.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your CATCHA_SECRET  and APP_PORT in `.env`
   ```js
   APP_PORT=3001
   CATCHA_SECRET=123
   ```
5. Replace you site key /public/index.html

Start the project by executing

```sg
    npm run dev
```
