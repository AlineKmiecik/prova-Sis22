import { Funcionario } from "./funcionario";

export type FolhaDePagamento ={
    mes: number;
    ano: number;
    horas: number;
    valorHora: number;
    bruto: number;
    irrf: number;
    inss: number;
    fgts: number;
    liquido: number;
    funcionario: Funcionario;

  }
  