import axios from "axios";
import { Request, Response } from "express";
import { FolhaDePagamentoRepository } from "../repositories/folhaDePagamentoRepository";

const folhaDePagamentoRepository = new FolhaDePagamentoRepository();

export class folhaDePagamentoController {
  cadastrar(request: Request, response: Response) {
    const folhasDePagamento = folhaDePagamentoRepository.cadastrar(request.body);
    response.status(200).json({ message: "Cadastro de folha de pagamento", data: folhasDePagamento });
  }

  calcular(request: Request, response: Response) {
    const folhasDePagamento = folhaDePagamentoRepository.calcular(request.body);
    // axios
    //   .post("http://localhost:54321/processarfolhas", folhasDePagamento)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {  
    //     console.log(error); 
    //   });

    response.status(200).json({ message: "calculo da folha de pagamento", data: folhasDePagamento });
  }

//   listar(request: Request, response: Response) {
//     const produtos = produtoRepository.listar();
//     response.status(200).json({ message: "Listagem de produtos", data: produtos });
//   }

//   alterar(request: Request, response: Response) {
//     const produtos = produtoRepository.alterar(request.body);
//     response.status(200).json({ message: "Produto alterado", data: produtos });
//   }

//   deletar(request: Request, response: Response) {
//     const id = Number.parseInt(request.params.id);
//     const produtos = produtoRepository.remover(id);
//     response.status(200).json({ message: "Produto removido", data: produtos });
//   }
}
