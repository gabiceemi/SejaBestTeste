import { inject, injectable } from "tsyringe";

import { Pessoa } from "modules/pessoas/infra/typeorm/entities/Pessoa";
import { IPessoasRepository } from "modules/pessoas/repositories/IPessoasRepository";

@injectable()
export class FindPessoaUseCase {
  constructor(
    @inject("PessoasRepository")
    private pessoasRepository: IPessoasRepository
  ) {}

  async execute({
    nome,
    sobrenome
  }: ICreatePessoaDTO): Promise<Pessoa> {
    const pessoa = await this.pessoasRepository.findPessoa(nome, sobrenome);

    return pessoa;
  }
}