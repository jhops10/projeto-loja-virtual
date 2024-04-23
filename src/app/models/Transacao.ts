import { IProduto } from '../interfaces/Produto.interface';
import { ITransacao } from '../interfaces/Transacao.interface';

export class Transacao implements ITransacao {
  constructor(
    public produtos: IProduto[],
    public total: number,
    public data: Date
  ) {}
}
