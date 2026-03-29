import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface receber {
  cliente: String;
  vencimento: String;
  pagamento: String;
  valor: Number;
}
@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
  standalone: false,
})
export class ReceberPage implements OnInit {
  receber = {
    cliente: '',
    vencimento: '',
    pagamento: '',
    valor: null,
  };
  listaContasReceber: receber[] = [];
  cadastrarRecebimento() {
    const cliente = this.receber.cliente.trim();
    const vencimento = this.receber.vencimento;
    const pagamento = this.receber.pagamento;
    const valor = this.receber.valor;
    if (!cliente || !vencimento || !pagamento || valor == null || valor < 0) {
      return;
    }
    this.listaContasReceber.unshift({ cliente, vencimento, pagamento, valor });
    this.limparCampos();
  }
  limparCampos() {
    this.receber = {
      cliente: '',
      vencimento: '',
      pagamento: '',
      valor: null,
    };
  }
  excluirContas(i: number) {
    this.listaContasReceber.splice(i, 1);
  }
  constructor(private router: Router) {}
  ngOnInit() {}
}
