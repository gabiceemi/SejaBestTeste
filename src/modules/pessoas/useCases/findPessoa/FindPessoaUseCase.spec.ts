import { MockPessoasRepository } from "@modules/pessoas/infra/typeorm/repositories/PessoasRepository.mock";
import { FindPessoaUseCase } from "./FindPessoaUseCase";

const pessoasRepository = new MockPessoasRepository();
const findPessoaUseCase = new FindPessoaUseCase(pessoasRepository);

describe("FindPessoaUseCase", () => {
  it("Deve encontrar uma pessoa existente", async () => {
    const nome = "João";
    const sobrenome = "Silva";

    const pessoa = await pessoasRepository.create({nome, sobrenome});

    const foundPessoa = await findPessoaUseCase.execute({
      nome: "João",
      sobrenome: "Silva",
    });

    expect(foundPessoa).toBeDefined();
    expect(foundPessoa?.nome).toBe("João");
    expect(foundPessoa?.sobrenome).toBe("Silva");
  });

  it("Deve retornar undefined se a pessoa não existir", async () => {
    const foundPessoa = await findPessoaUseCase.execute({
      nome: "Maria",
      sobrenome: "Santos",
    });

    expect(foundPessoa).toBeUndefined();
  });
});