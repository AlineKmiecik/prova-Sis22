import express from "express";
import { routes } from "./config/routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(54321, () => {
  console.log("Servidor rodando na porta 54321 ...");
});
