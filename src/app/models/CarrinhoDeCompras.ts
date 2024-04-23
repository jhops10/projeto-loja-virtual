import { ICarrinho } from '../interfaces/Carrinho.interface';
import { IProduto } from '../interfaces/Produto.interface';

export class CarrinhoDeCompras implements ICarrinho {
  produtos: IProduto[] = [];

  adicionarProduto(produto: IProduto): void {
    this.produtos.push(produto);
  }

  getProdutos(): IProduto[] {
    return this.produtos;
  }

  calcularTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }
}
