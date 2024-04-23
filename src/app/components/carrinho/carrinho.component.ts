import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../interfaces/Produto.interface';
import { CarrinhoService } from '../../services/carrinho.service';
import { TransacaoService } from '../../services/transacao.service';
import { Transacao } from '../../models/Transacao';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
})
export class CarrinhoComponent implements OnInit {
  produtosSelecionados: IProduto[] = [];
  compraFinalizada: boolean = false;

  constructor(
    private carrinhoService: CarrinhoService,
    private transacaoService: TransacaoService
  ) {}

  ngOnInit(): void {
    this.produtosSelecionados = this.carrinhoService.getProdutos();
  }

  calcularTotal(): number {
    return this.carrinhoService.getTotal();
  }

  finalizarCompra(): void {
    let total = this.calcularTotal();
    let data = new Date();
    let transacao = new Transacao(this.produtosSelecionados, total, data);
    this.transacaoService.adicionarTransacao(transacao);
    this.compraFinalizada = true;
  }
}
