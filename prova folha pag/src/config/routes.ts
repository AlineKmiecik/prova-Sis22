import { Router } from "express";
import { folhaDePagamentoController } from "../controllers/folhaDePagamentoController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "API de folhas" });
});


routes.post("/folha/cadastrar", new folhaDePagamentoController().cadastrar);
routes.get("/folha/calcular", new folhaDePagamentoController().calcular);



export { routes };
