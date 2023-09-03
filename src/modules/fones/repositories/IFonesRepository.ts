import { Fone } from "../infra/entities/Fone";

export interface IFonesRepository {
  create(date: ICreateFoneDTO): Promise<Fone>;
  findByPessoa(pessoa_id: string): Promise<Fone[] | undefined>;
  isCelular(number: string): Promise<Fone | undefined>;
}