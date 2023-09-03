import { MockFonesRepository } from "@modules/fones/infra/repositories/FonesRepository.mock";
import { CreateFoneUseCase } from "./CreateFoneUseCase";

describe("CreateFoneUseCase", () => {
  it("Deve criar um novo Fone com sucesso", async () => {
    const fonesRepository = new MockFonesRepository();

    const createFoneUseCase = new CreateFoneUseCase(fonesRepository);

    fonesRepository.create = jest.fn().mockResolvedValue({
      id: "1",
      codigo: "55",
      numero: "999999999",
      isCelular: true,
      pessoa_id: "2",
      created_at: new Date(),
    });

    const novoFone = {
      codigo: "55",
      numero: "999999999",
      isCelular: true,
      pessoa_id: "2",
    };
    const result = await createFoneUseCase.execute(novoFone);

    expect(result).toMatchObject({
      id: "1",
      codigo: "55",
      numero: "999999999",
      isCelular: true,
      pessoa_id: "2",
    });
  });

  it("Deve lançar um erro ao tentar criar um Fone inválido", async () => {
    const fonesRepository = new MockFonesRepository();

    const createFoneUseCase = new CreateFoneUseCase(fonesRepository);

    fonesRepository.create = jest.fn().mockRejectedValue(new Error("Erro ao criar o Fone"));

    const dadosInvalidos = {
      codigo: "55",
      numero: "",
      isCelular: true,
      pessoa_id: "2",
    };

    await expect(createFoneUseCase.execute(dadosInvalidos)).rejects.toThrowError("Erro ao criar o Fone");
  });
});
