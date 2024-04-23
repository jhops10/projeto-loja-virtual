import { IUsuario } from '../interfaces/Usuario.interface';

export abstract class Usuario implements IUsuario {
  constructor(public id: number, public nome: string) {}

  getNome(): string {
    return this.nome;
  }
}
