<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Description - Project de E-commerce

This project is part of an e-commerce system with the following technologies:

### Technologies

-   **Front-end:** <a href="https://github.com/LuizGustav0/nextjs-ecommerce" target="_blank">Next.js</a>
-   **Back-end:**
    -   **Orders:** <a href="https://github.com/LuizGustav0/nestjs-api-ecommerce-pedidos" target="_blank">Nest.js</a>
    -   **Catalog:** <a href="https://github.com/LuizGustav0/go-api-ecommerce" target="_blank">Golang</a>
    -   **Payments:** <a href="https://github.com/LuizGustav0/go-api-payments-ecommerce" target="_blank">Golang</a>
-   **Messaging:** RabbitMQ
-   **Database:** MySQL

### Project diagram

This diagram is essential for understanding the structure and communication between the different elements and/or microservices in the project. Check the repositories above and the ports where it is running.

<img src="diagrama.jpg"  alt="Diagrama" />

### Order to run:

### **Catalog:** <a href="https://github.com/LuizGustav0/go-api-ecommerce" target="_blank">Golang</a>

### **Orders:** <a href="https://github.com/LuizGustav0/nestjs-api-ecommerce-pedidos" target="_blank">Nest.js</a>

### **Payments:** <a href="https://github.com/LuizGustav0/go-api-payments-ecommerce" target="_blank">Golang</a>

### **Front-end:** <a href="https://github.com/LuizGustav0/nextjs-ecommerce" target="_blank">Next.js</a>

<img src="commerce.gif"  alt="Diagrama" />

## Installation

```bash
$ npm install
```

## Running the app

```bash
#Docker
docker-compose up -d

# DB
npm run fixture

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## command format all file with prettier

npx prettier --write .
