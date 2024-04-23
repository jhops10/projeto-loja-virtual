import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../interfaces/Usuario.interface';
import { IProduto } from '../../interfaces/Produto.interface';
import { Produto } from '../../models/Produto';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent implements OnInit {
  exibirCarrinho: boolean = false;
  usuario!: IUsuario;
  produtos: IProduto[] = [
    new Produto(
      1,
      'Galaxy Watch4 BT',
      'O Galaxy Watch4 BT da Samsung é o smartwatch que oferece o mais completo conjunto de soluções.',
      'https://a-static.mlcdn.com.br/280x210/smartwatch-samsung-galaxy-watch4-bt-preto-44mm-16gb/magazineluiza/231240800/0c3a191f2cc919530eb44126d69682b8.jpg',
      1400
    ),
    new Produto(
      2,
      'Galaxy Active2',
      'Se você pensa que o smartwatch é apenas um acessório que marca as horas, precisa conhecer Samsung Galaxy Watch Active2.',
      'https://a-static.mlcdn.com.br/280x210/smartwatch-samsung-galaxy-watch-active2-preto-44mm-15gb/magazineluiza/226484600/e8ebc1e54489e50ca33b2bbde78ea57e.jpg',
      4100
    ),
    new Produto(
      3,
      'Galaxy Watch',
      'O Galaxy Watch6 LTE é o smartwatch que oferece o mais completo conjunto de funções.',
      'https://a-static.mlcdn.com.br/280x210/smartwatch-samsung-galaxy-watch4-bt-40mm-preto-16gb/magazineluiza/231241100/085a1da124806f964baa1f4b8452bf28.jpg',
      900
    ),
  ];

  constructor(
    private carrinhoService: CarrinhoService,
    private usuarioServerice: UsuarioService
  ) {}

  adicionarAoCarrinho(produto: IProduto): void {
    this.carrinhoService.adicionarProdutos(produto);
  }

  abrirCarrinho(): void {
    this.exibirCarrinho = true;
  }

  ngOnInit(): void {
    this.usuario = this.usuarioServerice.getUsuario();
    console.log(this.produtos);
  }
}
