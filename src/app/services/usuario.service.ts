import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuario!: IUsuario;

  constructor() {}

  adicionarUsuario(usuario: IUsuario): void {
    this.usuario = usuario;
  }

  getUsuario(): IUsuario {
    return this.usuario;
  }
}
