import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
var { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");

dotenv.config();

const app: Express = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server.");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
