import { Repository, getRepository } from "typeorm";

import { IPessoasRepository } from "modules/pessoas/repositories/IPessoasRepository";
import { Pessoa } from "../entities/Pessoa";

export class PessoasRepository implements IPessoasRepository {
  private repository: Repository<Pessoa>;

  constructor() {
    this.repository = getRepository(Pessoa);
  }

  async create(data: ICreatePessoaDTO): Promise<Pessoa> {
    const pessoa = this.repository.create(data);
    await this.repository.save(pessoa);

    return pessoa;
  }

  async findPessoa(nome: string, sobrenome: string): Promise<Pessoa | undefined> {
    const pessoa = await this.repository.findOne({
      where: { nome, sobrenome },
    });

    return pessoa || undefined;
  }

  async findAll(): Promise<Pessoa[]> {
    const pessoas = await this.repository.find();

    return pessoas;
  }
}
