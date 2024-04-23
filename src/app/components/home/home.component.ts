import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showProdutosComponent: boolean = false;
  nome!: string;

  constructor(private usuarioService: UsuarioService) {}

  entrarNaLoja(): void {
    this.showProdutosComponent = true;
    this.usuarioService.adicionarUsuario(new Cliente(1, this.nome));
    console.log(this.usuarioService.getUsuario());
  }
}
