// Frameworks
const restify = require('restify');
const err = require('restify-errors');

// Conexão ao banco de dados MYSQL usando o knex (promise)
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'dasa'
    }
});

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


// Servidor: http://localhost:3000
server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});

// usuarios TABLE

// GET - usuarios
server.get('/usuario', (req, res, next) => {

    knex('usuario').then((dados) => {
        res.send(dados);
    })

});

// POST - usuario
server.post('/usuario', (req, res, next) => {

    knex('usuario')
        .insert(req.body)
        .then((dados) => {
            res.send(dados);
    }, next)

});

// GET - usuario por ID
server.get('/usuario/:id', (req, res, next) => {

    const { id } = req.params;

    knex('usuario')
        .where('id', id)
        .first()
        .then((dados) => {
            if(!dados) return res.send(new err.BadRequestError ('Nada foi encontrado'))
            res.send(dados);
        }, next)

});

// PUT - usuario por ID
server.put('/usuario/:id', (req, res, next) => {

    const { id } = req.params;

    knex('usuario')
        .where('id', id)
        .update(req.body)
        .then((dados) => {
            if(!dados) return res.send(new err.BadRequestError ('Nada foi encontrado'))
            res.send('usuario atualizados!');
        }, next)

});

// DELETE - usuario por ID
server.del('/delete/:id', (req, res, next) => {

    const { id } = req.params;

    knex('usuario')
        .where('id', id)
        .delete(req.body)
        .then((dados) => {
            if(!dados) return res.send(new err.BadRequestError ('nada foi encontrado'))
            res.send('usuario excluidos');
        }, next)

});

// Heroi TABLE

// GET - herois
server.get('/heroi', (req, res, next) => {

    knex('heroi').then((dados) => {
        res.send(dados);
    })

});

// POST - hero
server.post('/heroi', (req, res, next) => {

    knex('heroi')
        .insert(req.body)
        .then((dados) => {
            res.send(dados);
    }, next)

});

// GET - heroi por ID
server.get('/heroi/:id', (req, res, next) => {

    const { id } = req.params;

    knex('heroi')
        .where('id', id)
        .first()
        .then((dados) => {
            if(!dados) return res.send(new err.BadRequestError ('nada foi encontrado'))
            res.send(dados);
        }, next)

});

// PUT - heroi por ID
server.put('/heroi/:id', (req, res, next) => {

    const { id } = req.params;

    knex('heroi')
        .where('id', id)
        .update(req.body)
        .then((dados) => {
            if(!dados) return res.send(new err.BadRequestError ('nada foi encontrado'))
            res.send('heroi atualizado!');
        }, next)

});

// DELETE - heroi por ID
server.del('/heroi/:id', (req, res, next) => {

    const { id } = req.params;

    knex('heroi')
        .where('id', id)
        .delete(req.body)
        .then((dados) => {
            if(!dados) return res.send(new err.BadRequestError ('nada foi encontrado'))
            res.send('heroi excluido');
        }, next)

});



// Busca usuário e verifica se o mesmo possui admin: campo admin == 1
async function getUser(req) {

// Busca no authorization do Header o Basic Authorization: USER:SENHA
basicAuth = Buffer.from(req.headers.authorization.split(" ")[1], 'base64').toString();
user = basicAuth.split(":");

login = user[0];
senha = user[1];

result = await knex('usuario').where({
                login: login,
                senha: senha
             }).select('id', 'admin');         

if (result[0].admin == 1){
    return true;
} else {
    return false;
}

}