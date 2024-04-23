import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../interfaces/Produto.interface';
import { ITransacao } from '../../interfaces/Transacao.interface';
import { CarrinhoService } from '../../services/carrinho.service';
import { TransacaoService } from '../../services/transacao.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css',
})
export class ComprasComponent implements OnInit {
  produtosDoCarrinho: IProduto[] = [];
  transacoes: ITransacao[] = [];

  constructor(
    private carrinhoService: CarrinhoService,
    private transacaoService: TransacaoService
  ) {}

  ngOnInit(): void {
    this.produtosDoCarrinho = this.carrinhoService.getProdutos();
    this.transacoes = this.transacaoService.getTransacoes();
  }

  getTransacoes(): ITransacao[] {
    return this.transacoes;
  }
}
