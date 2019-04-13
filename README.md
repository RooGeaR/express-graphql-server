# express-graphql-server

A basic implementation using Express, GraphQL and Sequelize.

## How to run the project

Install dependencies :

```shell
npm install
```

Edit `config/config.json` :

```json
{
    "development": {
        "username": "root",
        "password": null,
        "database": "graphql_sequelize",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        ...
    },
    "production": {
        ...
    }
}
```

Init and seed database :

```shell
sequelize db:migrate

sequelize db:seed:all
```

Run the project :

```shell
npm start
```

Open GraphiQL in your browser [http://localhost:8088/graphql](http://localhost:8088/graphql)

## Examples

Get list of users:

```graphql
query {
  users {
    first_name
    last_name
  }
}
```

_This will return only first 10 users!_

If you want to get another 10 users:

```graphql
query {
  users(offset: 10) {
    id
    first_name
  }
}
```

Or more than 10 users:

```graphql
query {
  users(first: 20) {
    id
    first_name
  }
}
```

Get name of user with ID = 1:

```GraphQL
query{
	user(id:1){
    first_name
    last_name
  }
}
```

Get list of comments:

```graphql
query {
  comments {
    content
  }
}
```

_This will return only first 10 comments!_

If you want to get another 10 comments:

```graphql
query {
  comments(offset: 10) {
    id
    content
  }
}
```

Or more than 10 comments:

```graphql
query {
  comments(first: 20) {
    id
    content
  }
}
```

Add new user and get his ID:

```graphql
mutation {
  createUser(
    user: {
      first_name: "Rose"
      last_name: "Tyler"
      created_at: "2019-04-19 14:00:35"
    }
  ) {
    id
  }
}
```

Add new user with some of his comments:

```graphql
mutation {
  createUser(
    user: {
      first_name: "Amy"
      last_name: "Pond"
      created_at: "2019-04-19 14:00:35"
      comments: [
        {
          content: "So is this how it works Doctor? You never interfere with the affairs of other peoples or planets, unless there are children crying?"
          created_at: "2019-04-19 14:00:35"
        }
        {
          content: "Now here's Amy Pond, standing in the freezing ocean, holding the body of her imaginary friend, and shouting at the sea to make him better."
          created_at: "2019-04-19 14:00:35"
        }
      ]
    }
  ) {
    id
  }
}
```

Delete specific comment ( comment with id 1 ) and return its id and content text:

```graphql
mutation {
  deleteComment(id: 1) {
    id
    content
  }
}
```

Update ( change ) specific comment :

```graphql
mutation {
  updateComment(id: 1, content: "Updating comment!") {
    id
    content
  }
}
```
