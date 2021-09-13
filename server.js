import express from "express";
import expressGraphQL from "express-graphql";
import { schema } from "./src/model/root.js";
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    // Define root schema
    schema: schema,
    // Enable GraphiQL UI on browser for writing query
    graphiql: true,
  })
);

app.listen(3000, () => console.log("Server Running"));
