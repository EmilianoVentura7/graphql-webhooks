const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./src/graphql/schema");
const { authenticate } = require("./src/middlewares/auth");

const app = express();

app.use(authenticate);

app.get("/", (req, res) => res.json({ msg: "Welcome. Go to /graphql" }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;
