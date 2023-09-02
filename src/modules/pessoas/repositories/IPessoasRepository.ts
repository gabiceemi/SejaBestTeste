import { Pessoa } from "../infra/typeorm/entities/Pessoa";

export interface IPessoasRepository {
  create(data: ICreatePessoaDTO): Promise<Pessoa>;
  findPessoa(nome: string, sobrenome: string): Promise<Pessoa | undefined>;
  findAll(): Promise<Pessoa[]>;
}