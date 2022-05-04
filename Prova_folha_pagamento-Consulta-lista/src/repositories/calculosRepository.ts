import { FolhaDePagamento } from "../models/folhaPagamento";

export class CalculosRepository{

    calculoDeFolhaPagamento(folhaPagamento: FolhaDePagamento): FolhaDePagamento{
        folhaPagamento.bruto = folhaPagamento.horas * folhaPagamento.valorHora;
        folhaPagamento.irrf = this.calculoImpostoDeRenda(folhaPagamento);
        folhaPagamento.inss = this.calculoINSS(folhaPagamento);
        folhaPagamento.fgts = folhaPagamento.bruto * 0.08;
        console.log(folhaPagamento.bruto - folhaPagamento.irrf - folhaPagamento.inss);
        //folhaPagamento.liquido = folhaPagamento.bruto - folhaPagamento.irrf - folhaPagamento.inss;
        return folhaPagamento;
      }

    calculoImpostoDeRenda(folhaDePagamento: FolhaDePagamento): number {
        if (folhaDePagamento.bruto > 4664.68){
          if (869.36 < folhaDePagamento.bruto * 0.275){
            return 869.36
          }
          return folhaDePagamento.bruto * 0.275;
        }else
    
        if(folhaDePagamento.bruto >= 3751.06  ){
          if (636.13 < folhaDePagamento.bruto * 0.225){
            return 636.13
          }
          return folhaDePagamento.bruto * 0.225;
        }else
    
        if(folhaDePagamento.bruto >= 2826.66 ){
          if (354.80 < folhaDePagamento.bruto * 0.15){
            return 354.80
          }
          return folhaDePagamento.bruto * 0.15;
        }else 
    
        if(folhaDePagamento.bruto >= 1903.99 ){
          if (142.80 < folhaDePagamento.bruto * 0.075){
            return 142.80
          }
          return folhaDePagamento.bruto * 0.075;
    
        }else{
          return 0;
        }
      }
    
      calculoINSS(folhaDePagamento: FolhaDePagamento): number {
        if (folhaDePagamento.bruto > 5645.81){
          return 621.03;
        }else
        if(folhaDePagamento.bruto >= 2822.91  ){
          return folhaDePagamento.bruto * 0.11;
        }else
        if(folhaDePagamento.bruto >= 1693.73  ){
          return folhaDePagamento.bruto * 0.09;
        }else{
            return folhaDePagamento.bruto * 0.08;
        }
      }
}