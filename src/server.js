    import http from 'node:http'

    // - HTTP
    //      - Método HTTP
    //      -- URL

    // GET, POST, PUT, PATCH, DELETE

    // GET => Buscar um recurso  do back-end
    // POST => Criar um recurso no back-end
    // PUT => Atualizar um recurso no back-end
    // PATCH => Atualizar uma informação específica de um recurso do back-end
    // DELETE => Deletar um recurso do back-end

    // GET /users => Buscando usuários no back-end
    // POST /users => Criar um usuário no back-end

    // Stateful - Stateless

    // Cabeçalhos (Requisição/resposta) => MEtadados

    // HTTP Status Code

    const users = []

    const server = http.createServer((req, res) => {
        const { method, url } = req

        if (method == 'GET' && url == '/users') {
            return res
                .setHeader('Content-type', 'application/json')
                .end(JSON.stringify(users))
        } 

        if (method == 'POST' && url == '/users') {
            users.push({
                id: 1,
                name: 'Fulano',
                email: 'fulano@exemplo.com',
            })

            return res.writeHead(201).end()
        }

        return res.writeHead(404).end()
    })

    server.listen(3333)