import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface usuario {
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
  usuario = {
    nome: '',
    tipo: '',
    endereco: '',
  };
  constructor(private router: Router) {}
  listaCadastro: usuario[] = [];
  cadastrarUsuario() {
    const nome = this.usuario.nome.trim();
    const tipo = this.usuario.tipo;
    const endereco = this.usuario.endereco;

    if (!nome || !tipo || !endereco) {
      return;
    }

    this.listaCadastro.unshift({ nome, tipo, endereco });
    this.limparFormulario();
  }
  limparFormulario() {
    this.usuario = {
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
