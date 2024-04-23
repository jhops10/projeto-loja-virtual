import { Usuario } from './Usuario';

export class Cliente extends Usuario {
  constructor(id: number, nome: string) {
    super(id, nome);
  }

  override getNome(): string {
    return `Olá, ${this.nome}!`;
  }
}
