import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface pagar{
  fornecedor: String,
  vencimento: String,
  pagamento:String,
  valor:Number,
}
@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
  standalone: false,
})
export class PagarPage implements OnInit {
pagar={
  fornecedor: '',
  vencimento: '',
  pagamento:'',
  valor: null
}
  constructor(private router: Router) { }
  listaContasPagar: pagar[] = [];
   cadastrarPagamento(){
      const fornecedor = this.pagar.fornecedor.trim()
      const vencimento = this.pagar.vencimento;
      const pagamento = this.pagar.pagamento;
      const valor = this.pagar.valor;
  if (!fornecedor || !vencimento || !pagamento || valor == null || valor < 0) {
      return;
    }
      this.listaContasPagar.unshift({fornecedor,vencimento,pagamento,valor});
      this.limparCampos();
    }
  limparCampos(){
this.pagar={
  fornecedor: '',
  vencimento: '',
  pagamento:'',
  valor: null 
}
  }
  excluirContas(i:number){
this.listaContasPagar.splice(i,1)
  }
  ngOnInit() {
  }

}
