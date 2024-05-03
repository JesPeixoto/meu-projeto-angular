import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  adicionarProduto(produto: any) {
    let produtos = this.obterProdutos();
    produtos.push(produto);
    this.atualizarLocalStorage(produtos);
  }

  editarProduto(index: number, produto: any) {
    let produtos = this.obterProdutos();
    produtos[index] = produto;
    this.atualizarLocalStorage(produtos);
  }

  removerProduto(index: number) {
    let produtos = this.obterProdutos();
    produtos.splice(index, 1);
    this.atualizarLocalStorage(produtos);
  }

  listarProdutos() {
    return this.obterProdutos();
  }

  buscarProdutos(termo: string) {
    let produtos = this.obterProdutos();
    return produtos.filter(produto => produto.nome.toLowerCase().includes(termo.toLowerCase()));
  }

  private obterProdutos(): any[] {
    return JSON.parse(localStorage.getItem('produtos') || '[]');
  }

  private atualizarLocalStorage(produtos: any[]) {
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }
}
