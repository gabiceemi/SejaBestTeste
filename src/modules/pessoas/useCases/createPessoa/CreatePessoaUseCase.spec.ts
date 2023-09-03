import { MockPessoasRepository } from "@modules/pessoas/infra/typeorm/repositories/PessoasRepository.mock";
import { CreatePessoaUseCase } from "./CreatePessoaUseCase";
import { Pessoa } from "@modules/pessoas/infra/typeorm/entities/Pessoa";

const pessoasRepository = new MockPessoasRepository();
const createPessoaUseCase = new CreatePessoaUseCase(pessoasRepository);

describe("CreatePessoaUseCase", () => {
  it("Deve criar uma nova pessoa", async () => {
    const novaPessoa = await createPessoaUseCase.execute({
      nome: "Maria",
      sobrenome: "Santos",
    });

    expect(novaPessoa).toBeInstanceOf(Pessoa);
    expect(novaPessoa.nome).toBe("Maria");
    expect(novaPessoa.sobrenome).toBe("Santos");
  });
});