# **Advanced CRUD NestJS**

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/neliocursos/exemplo-readme/blob/main/LICENSE)

# Autor

👤 Cauã Soares

💼 https://www.linkedin.com/in/ocauasoares

# Estrutura do projeto

![Estrutura](https://raw.githubusercontent.com/ocsoares/images/master/advanced-crud-nestjs/structure.jpg)

Esse projeto é um **CRUD** avançado feito com NestJS, onde foi implementado autenticação e cache com a ferramenta **Redis**.

## Módulos e use-cases

![Módulos](https://raw.githubusercontent.com/ocsoares/images/master/advanced-crud-nestjs/modules.jpg)

![User use-cases](https://raw.githubusercontent.com/ocsoares/images/master/advanced-crud-nestjs/use-cases.jpg)

# Principais tecnologias e bibliotecas utilizadas

-   TypeScript
-   NestJS
-   Docker
-   Redis
-   PostgreSQL
-   Prisma
-   bcrypt
-   JWT

## Características e funcionalidades do projeto:

### Estrutural 🛠️

-   Clean Code
-   SOLID
-   Clean Architecture
-   PostgreSQL e Redis usados no **Docker**
    <br>
    <br>

### Funcionalidades 🎯

-   Rotas para **cadastro** e **login** de usuários
-   A rota de login é responsável por fornecer um **JWT** para se **autenticar** nas rotas **protegidas**
-   Cache nas rotas _/api/me_ e _/api/consult/id_...
-   As rotas com as funcionalidades do **CRUD** são **protegidas** e precisam de autenticação com JWT

# Executar o projeto localmente

Pré-requisitos: Typescript, NodeJS e Docker

```bash
# clonar o repositório
git clone https://github.com/ocsoares/Advanced-CRUD-NestJS

# instalar as bibliotecas
npm install

# criar um arquivo .env na pasta raíz do projeto

# configurar esse .env baseado no arquivo .env.example

# transpilar os arquivos do projeto para .js
npm run build

# iniciar o container do docker
docker-compose up

# executar o projeto
npm start
```
