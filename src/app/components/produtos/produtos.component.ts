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
      'Iphone 14',
      'IPhone 14 Pro. Câmera grande-angular de 48 MP para capturar detalhes impressionantes.',
      'https://cdn.awsli.com.br/600x700/1861/1861669/produto/228944590200c04851c.jpg',
      6200
    ),
    new Produto(
      2,
      'Samsung S21',
      'As funcionalidades oferecidas pelo Samsung Galaxy S21 são muitas e inovadoras.',
      'https://i.zst.com.br/thumbs/12/2a/32/-731222761.jpg',
      4100
    ),
    new Produto(
      3,
      'Galaxy Watch',
      'O Galaxy Watch6 LTE é o smartwatch que oferece o mais completo conjunto de funções.',
      'https://m.media-amazon.com/images/I/61vvtvy5WOL._AC_UF1000,1000_QL80_.jpg',
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
