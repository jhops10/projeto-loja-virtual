import { Injectable } from '@angular/core';

import { CarrinhoDeCompras } from '../models/CarrinhoDeCompras';
import { IProduto } from '../interfaces/Produto.interface';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinho: CarrinhoDeCompras = new CarrinhoDeCompras();

  constructor() {}

  adicionarProdutos(produto: IProduto): void {
    this.carrinho.adicionarProduto(produto);
  }

  getProdutos(): IProduto[] {
    return this.carrinho.getProdutos();
  }

  getTotal(): number {
    return this.carrinho.calcularTotal();
  }
}
