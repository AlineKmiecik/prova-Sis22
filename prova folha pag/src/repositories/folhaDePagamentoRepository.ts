import { FolhaDePagamento } from "../models/folhaPagamento";
import { Funcionario } from "../models/funcionario";
import { CalculosRepository } from "./calculosRepository";

  const calculosrepository: CalculosRepository = new CalculosRepository();

  const folhasDePagamento: FolhaDePagamento[] = [];

export class FolhaDePagamentoRepository {

  cadastrar(folhaDePagamento: FolhaDePagamento): FolhaDePagamento[] {
    folhaDePagamento.liquido = 0;
    folhasDePagamento.push(folhaDePagamento);
    return folhasDePagamento;
  }

  calcular(folhaDePagamento: FolhaDePagamento): FolhaDePagamento[]{
    const folhasdePagamentoCalculada: FolhaDePagamento[] = [];
    folhasDePagamento.forEach(folhaPagamento => {
      console.log(folhaPagamento.liquido);
      if( folhaPagamento.liquido === 0 ){
        folhasdePagamentoCalculada.push(calculosrepository.calculoDeFolhaPagamento(folhaPagamento));
      }
    });

    return folhasdePagamentoCalculada;
  }

  listar(): FolhaDePagamento[] {
    return folhasDePagamento;
  }
  

//   consultarFolhaDePagamento(folhaDePagamento: FolhaDePagamento) : FolhaDePagamento{
//     let folhaPagamento = new FolhaDePagamento();
//     return 
//   }
  
}
