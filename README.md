# Backend Library

<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

## Table of Contents
- [Prerequiste](#prerequiste)
- [Instalation](#installation)
- [Structure Folder](#structure-folder)
- [Contributing](#contributing)
- [Related Project](#related-project)
- [Contact](#contact)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/).
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Redis - Download and Install [Redis](https://redis.io/)

## Installation
### Clone
```
$ git clone https://github.com/haras94/library-express-mysql.git
$ cd library-express-mysql
$ npm install
```

### Create Environment Variable
```
$ touch .env
$ nano .env
```

```
DB_HOST=YOUR_DB_HOST
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD
DB_NAME=YOUR_TABLE_NAME

SERVER_PORT=YOUR_PORT

EMAIL=YOUR_EMAIL_ACTIVATION
PASSWORD=YOUR_EMAIL_PASSWORD

SECRET_KEY=YOUR_SECRET_KEY

SERVER_HOST=YOUR_HOST
SERVER_PORT=YOUR_PORT
SERVER_PORT_FRONT=YOUR_PORT_FRONT_END
PORT_REDIS=YOUR_PORT_REDIS / default => 6379

```

### Start Development Server
```
$ npm run serve
```

## Structure Folder
```
\---src
|    \---Config
|    |   +---db.js            
|    \---Controllers
|    |   +---book.js
|    |   +---category.js
|    |   +---user.js
|    \---helpers
|    |   +---auth.js
|    |   +---helpers.js
|    |   +---redis.js
|    \---models
|    |   +---books.js
|    |   +---category.js
|    |   +---user.js
|    \---routers
|    |   +---books.js
|    |   +---category.js
|    |   +---index.js
|    |   +---user.js
+---app.js
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch  ```git checkout -b [feature]```
2. Commit your Changes ```git commit -m 'Add some feature'```
3. Push to the Branch ```git push origin [feature]```
4. Open a Pull Request

## Related Project

* [`Frontend-Library-VueJS`](https://github.com/haras94/frontend-library-vue-js)

## Contact

If you want to contact me you can reach me at <harunarrasyidsuparman@gmail.com>.
