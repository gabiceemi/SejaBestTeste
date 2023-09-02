import { IPessoasRepository } from "@modules/pessoas/repositories/IPessoasRepository";
import { Pessoa } from "../entities/Pessoa";

class MockPessoasRepository implements IPessoasRepository {
  private pessoas: Pessoa[] = [];

  async create(data: ICreatePessoaDTO): Promise<Pessoa> {
    const pessoa = new Pessoa();
    
    pessoa.nome = data.nome;
    pessoa.sobrenome = data.sobrenome;

    this.pessoas.push(pessoa);
    return pessoa;
  }

  async findPessoa(nome: string, sobrenome: string): Promise<Pessoa | undefined> {
    return this.pessoas.find((pessoa) => pessoa.nome === nome && pessoa.sobrenome === sobrenome);
  }
  
  async findAll(): Promise<Pessoa[]> {
    return this.pessoas;
  }
}

export { MockPessoasRepository };