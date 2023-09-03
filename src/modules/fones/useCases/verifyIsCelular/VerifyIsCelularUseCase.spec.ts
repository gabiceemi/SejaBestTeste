import { MockFonesRepository } from "@modules/fones/infra/repositories/FonesRepository.mock";
import { VerifyIsCelularUseCase } from "./VerifyIsCelularUseCase";

describe("VerifyIsCelularUseCase", () => {
  it("Deve retornar um Fone se for um celular", async () => {
    const fonesRepository = new MockFonesRepository();

    const verifyIsCelularUseCase = new VerifyIsCelularUseCase(fonesRepository);

    fonesRepository.isCelular = jest.fn().mockResolvedValue({
      id: "1",
      codigo: "55",
      numero: "999999999",
      isCelular: true,
      pessoa_id: "2",
      created_at: new Date(),
    });

    const numeroCelular = "999999999";
    const result = await verifyIsCelularUseCase.execute(numeroCelular);

    expect(result).toMatchObject({
      id: "1",
      codigo: "55",
      numero: "999999999",
      isCelular: true,
      pessoa_id: "2",
    });
  });

  it("Deve retornar null se não for um celular", async () => {
    const fonesRepository = new MockFonesRepository();

    const verifyIsCelularUseCase = new VerifyIsCelularUseCase(fonesRepository);

    fonesRepository.isCelular = jest.fn().mockResolvedValue(null);

    const numeroNaoCelular = "123456789";
    const result = await verifyIsCelularUseCase.execute(numeroNaoCelular);

    expect(result).toBeUndefined();
  });
});