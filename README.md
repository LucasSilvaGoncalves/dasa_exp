# Dasa EXP - Projeto NodeJS

Projeto Dasa EXP: API CRUD de cadastro de usuário e herói.

## Iniciando o projeto

O usuário deve acessar a pasta raiz do projeto e iniciar o comando: **nodemon index.js**

Com isso ele inicia o servidor NodeJS na URL: http://localhost:3000

### Pré-requisitos

O desenvolvimento do projeto foi realizado usando as seguintes plataformas:

- NodeJS v12.16.0
- MySQL v10.4.6

Então é recomendado que o usuário da aplicação use as mesma versôes.

O arquivo de script de tabelas está localizado em: dasa_exp/Docs/ScriptSQL/**script.sql** ( O usuário deve abrir o arquivo e realizar os comandos de criação de database, criar tabelas e inserir registros)

### Pacotes NodeJS

No projeto foi usado os seguintes pacotes/libs :

- Nodemon - Criar o servidor backend
- Restify - Criação de rotas da API
- Restify-errors - Trata e gerencia erros de requisição
- Knex - ORM Banco de dados

### Configurações

Configuração de banco de dados:

O usuário deve acessar o arquivo **index.js**, entre as linhas **6** e **14** existe os dados de configurações de banco de dados.

Exemplo:

```
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'dasa'
    }
});
```

### Consultandos os Endpoint API

Foi criado um **Swagger** com a documentação da API, o mesmo está localizado em: dasa_exp/Docs/Swagger/**swagger.yaml**


## Authors

**Lucas Gonçalves**


