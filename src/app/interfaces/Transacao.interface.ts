import { IProduto } from './Produto.interface';

export interface ITransacao {
  produtos: IProduto[];
  total: number;
  data: Date;
}
