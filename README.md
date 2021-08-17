<p align="center">
  <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEeP04ofmiwkQ/company-logo_200_200/0/1627403457115?e=1637193600&v=beta&t=H0n4N64UqJZ7f231lBQrQnz4DLgh5serzvFb_q_1SZk" width="150" style="border-radius: 8px">
</p>

<h1 align="center">Desafio Back-end Node.js 🏆</h1>

- [Introdução](#introdução)
- [Requisitos 💻](#requisitos-)
- [Como utilizar a template? 🤔](#como-utilizar-a-template-)
- [Rotas da aplicação 🛣️](#rotas-da-aplicação-️)
	- [POST `/users`](#post-users)
	- [GET `/todos`](#get-todos)
	- [POST `/todos`](#post-todos)
	- [PUT `/todos/:id`](#put-todosid)
	- [PATCH `/todos/:id/done`](#patch-todosiddone)
	- [DELETE `/todos/:id`](#delete-todosid)
- [Entrega 📆](#entrega-)

---

## Introdução 

Neste desafio, você deverá criar uma aplicação para gerenciar tarefas (em inglês: "to-dos"). Será permitida a criação de um usuário com `name` e `username`, além disso fazer o CRUD de tarefas.

- Criar uma nova tarefa;
- Listar todas tarefas;
- Alterar o `title` e `deadline` (prazo) de uma tarefa existente;
- Marcar uma tarefa como realizada;
- Excluir uma tarefa;

## Requisitos 💻

Para executar o desafio, você precisa ter o [Node.js](https://nodejs.org/en/download/) instalado na sua máquina e algum software para testar as rotas, como [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/).

*Será um diferencial você realizar o desafio usando [TypeScript](https://www.typescriptlang.org/), porém não é obrigatório.*


## Como utilizar a template? 🤔

Para iniciar seu desafio, clique no seguinte botão: 

<p align="center">
  <img src="./.github/example.png" width="700" style="border-radius: 8px">
</p>

Após isso, dê um nome ao repositório e utilize o botão "Create repository from template".

Agora é só codar, boa sorte! 🤠



## Rotas da aplicação 🛣️

Na arquivo `index.js` dentro da pasta `src`, você deve completar onde não possui código com o código necessário para atingir os objetivos estabelecidos acima.

### POST `/users`

A rota deve receber `name` e `username` dentro do corpo da requisição (body). Ao cadastrar um novo usuário, ele deve ser armazenado dentro de um objeto no seguinte formato:

```js
{ 
	id: 'uuid', // precisa ser um uuid
	name: 'Leonardo Campello', 
	username: 'leonardo', 
	todos: []
}
```

Certifique-se que o ID seja um [UUID](https://www.npmjs.com/package/uuid), e de sempre iniciar a lista `todos` como um array vazio. O objeto de usuário deve ser retornado na resposta da requisição.

### GET `/todos`

A rota deve receber, pelo header da requisição, uma propriedade `username` contendo o username do usuário e retornar uma lista com todas as tarefas desse usuário.

### POST `/todos`

A rota deve receber `title` e `deadline` dentro do corpo da requisição e, uma propriedade `username` contendo o username do usuário dentro do header da requisição. Ao criar um novo **todo**, ele deve ser armazenado na lista `todos` do usuário que está criando essa tarefa. Cada tarefa deverá estar no seguinte formato:

```js
{ 
	id: 'uuid', // precisa ser um uuid
	title: 'Nome da tarefa',
	done: false, 
	deadline: '2021-02-27T00:00:00.000Z', 
	created_at: '2021-02-22T00:00:00.000Z'
}
```

**Observação**: Lembre-se de iniciar a propriedade `done` sempre como `false` ao criar um *todo*.

Para criar as datas, você pode usar o objeto [Date](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date) nativo do JavaScript.

### PUT `/todos/:id`

A rota deve receber, pelo header da requisição, uma propriedade `username` contendo o username do usuário e receber as propriedades `title`, `deadline` dentro do corpo. É preciso alterar **apenas** o `title` e o `deadline` da tarefa que possuir um `id` igual ao `id` presente nos parâmetros da rota.

### PATCH `/todos/:id/done`

A rota deve receber, pelo header da requisição, uma propriedade `username` contendo o username do usuário e alterar a propriedade `done` para `true` no *todo* que possuir um `id` igual ao `id` presente nos parâmetros da rota.

### DELETE `/todos/:id`

A rota deve receber, pelo header da requisição, uma propriedade `username` contendo o username do usuário e excluir um `todo` que possuir um `id` igual ao `id` presente nos parâmetros da rota.

## Entrega 📆

O prazo para entrega é dia 18/08/2021, caso você precise de mais tempo, por algum motivo, entre em contato comigo.

Esse desafio deve ser entregue via e-mail. Envie o link do repositório que você fez suas alterações.

📬 E-mail: leonardo.rodrigues@compliancetotal.com.br

