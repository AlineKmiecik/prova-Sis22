import axios from "axios";
import { Request, Response } from "express";
import { FolhaDePagamentoRepository } from "../repositories/folhaDePagamentoRepository";

const folhaDePagamentoRepository = new FolhaDePagamentoRepository();

export class folhaDePagamentoController {
  listar(request: Request, response: Response) {
    // const folhasDePagamento = folhaDePagamentoRepository.cadastrar(request.body);
    // response.status(200).json({ message: "Cadastro de folha de pagamento", data: folhasDePagamento });
  }

  consultar(request: Request, response: Response) {
    const folhasDePagamento = folhaDePagamentoRepository.cadastrar(request.body);
    response.status(200).json({ message: "Cadastro de folha de pagamento", data: folhasDePagamento });
  }

  recebeDadosProcessados(request: Request, response: Response){
    const folhasDePagamento = request.body;
    console.log(folhasDePagamento);
  
  }

  

}
