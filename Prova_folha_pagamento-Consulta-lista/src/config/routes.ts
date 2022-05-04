import { Router } from "express";
import { folhaDePagamentoController } from "../controllers/folhaDePagamentoController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "API de folhas" });
});

routes.get("/folha/cadastrar", new folhaDePagamentoController().listar);
routes.get("/folha/consultar/cpf/mes/ano", new folhaDePagamentoController().consultar);
routes.get("/processarfolhas", new folhaDePagamentoController().recebeDadosProcessados);



export { routes };
