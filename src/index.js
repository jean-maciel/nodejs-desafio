const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');

const app = express()

app.use(cors())
app.use(express.json())

const users = []

function checksExistsUserAccount(request, response, next) {
  if (request.headers.username) {
    const filtrado = users.filter(x => x.username == request.headers.username)
    if (filtrado.length == 1) {
      next()
    }
    else {
      response.status(500).send({ error: 'User not found.' })
    }
  }
  else {
    response.status(500).send({ error: 'Something went wrong.' })
  }
}

app.post('/users', (request, response) => {
  users.push({
    id: uuidv4(),
    name: request.body.name,
    username: request.body.username,
    todos: []
  })
  response.send("ok")
})

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const usuariosFiltrado = users.filter(x => x.username == request.headers.username)
  if (usuariosFiltrado.length == 1) {
    response.send(usuariosFiltrado[0].todos)
  } else {
    response.status(500).send({ error: 'User not found.' })
  }
})

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const usuariosFiltrado = users.filter(x => x.username == request.headers.username)
  if (usuariosFiltrado.length == 1) {
    const todoList = usuariosFiltrado[0].todos
    const todoItem = {
      id: uuidv4(),
      title: request.body.title,
      done: false,
      deadline: new Date(request.body.deadline),
      created_at: new Date()
    }
    todoList.push(todoItem)
    response.send(todoItem)
  } else {
    response.status(500).send({ error: 'User not found.' })
  }
})

app.put(
  '/todos/:id',
  checksExistsUserAccount,
  (request, response) => {
    const usuariosFiltrado = users.filter(x => x.username == request.headers.username)
    if (usuariosFiltrado.length == 1) {
      const todoList = usuariosFiltrado[0].todos
      const todoListFiltrado = todoList.filter(x => x.id == request.params.id)
      if (todoListFiltrado.length == 1) {
        todoListFiltrado[0].title = request.body.title
        todoListFiltrado[0].deadline = new Date(request.body.deadline)
        response.send(todoListFiltrado[0])
      } else {
        response.status(500).send({ error: 'Todo not found.' })
      }
    } else {
      response.status(500).send({ error: 'User not found.' })
    }
  }
)

app.patch(
  '/todos/:id/done',
  checksExistsUserAccount,
  (request, response) => {
    const usuariosFiltrado = users.filter(x => x.username == request.headers.username)
    if (usuariosFiltrado.length == 1) {
      const todoList = usuariosFiltrado[0].todos
      const todoListFiltrado = todoList.filter(x => x.id == request.params.id)
      if (todoListFiltrado.length == 1) {
        todoListFiltrado[0].done = true
        response.send(todoListFiltrado[0])
      } else {
        response.status(500).send({ error: 'Todo not found.' })
      }
    } else {
      response.status(500).send({ error: 'User not found.' })
    }
  }
)

app.delete(
  '/todos/:id',
  checksExistsUserAccount,
  (request, response) => {
    const usuariosFiltrado = users.filter(x => x.username == request.headers.username)
    if (usuariosFiltrado.length == 1) {
      const todoList = usuariosFiltrado[0].todos
      const index = todoList.findIndex(x => x.id == request.params.id)
      if (index > -1) {
        todoList.splice(index, 1);
        response.send(todoList)
      } else {
        response.status(500).send({ error: 'Todo not found.' })
      }
    } else {
      response.status(500).send({ error: 'User not found.' })
    }
  }
)

module.exports = app
