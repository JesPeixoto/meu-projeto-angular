import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  styleUrls: ['./formulario-produto.component.css']
})
export class FormularioProdutoComponent {
  produto: any = {};

  constructor(private produtoService: ProdutoService) { }

  salvar() {
    this.produtoService.adicionarProduto(this.produto);
    this.produto = {}; // Limpar o formulário após salvar
  }
}
