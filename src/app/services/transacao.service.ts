import { Injectable } from '@angular/core';
import { ITransacao } from '../interfaces/Transacao.interface';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  transacoes: ITransacao[] = [];

  constructor() {}

  adicionarTransacao(transacao: ITransacao) {
    this.transacoes.push(transacao);
  }

  getTransacoes(): ITransacao[] {
    return this.transacoes;
  }
}
