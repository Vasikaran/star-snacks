const express = require('express');
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./graphql/schema/index');
const resolvers = require('./graphql/resolvers/index');

const app = express();
const port = 3000;

mongoose
  .connect(
    `mongodb+srv://${encodeURIComponent("stargroup")}:${encodeURIComponent(
      "jaNAO8cGIctAKQNQ"
    )}@cluster0.zpt9z.mongodb.net/starbakery?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Now connected to MongoDB!"))
  .catch(err => console.error("Something went wrong", err));

app.use(express.json());

app.use("/graphql", (req, res) => {
  return graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
    context: { req, res }
  })(req, res);
});


app.listen(port, () => console.log(`http://localhost:3000`))