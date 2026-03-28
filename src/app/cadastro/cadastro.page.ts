import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface cadastro {
  nome: String;
  tipo: String;
  endereco: String;
}
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage implements OnInit {
  cadastro = {
    nome: '',
    tipo: '',
    endereco: '',
  };
  constructor(private router: Router) {}
  listaCadastro: cadastro[] = [];
  cadastrarUsuario() {
    const nome = this.cadastro.nome.trim();
    const tipo = this.cadastro.tipo;
    const endereco = this.cadastro.endereco;

    if (!nome || !tipo || !endereco) {
      return;
    }

    this.listaCadastro.unshift({ nome, tipo, endereco });
    this.limparFormulario();
  }
  limparFormulario() {
    this.cadastro = {
      nome: '',
      tipo: '',
      endereco: '',
    };
  }
  excluirUsuario(index: number) {
    this.listaCadastro.splice(index, 1);
  }
  ngOnInit() {}
}
