import { inject, injectable } from "tsyringe";

import { Fone } from "@modules/fones/infra/entities/Fone";
import { IFonesRepository } from "@modules/fones/repositories/IFonesRepository";

@injectable()
export class FindFoneUseCase {
  constructor(
    @inject("FonesRepository")
    private fonesRepository: IFonesRepository
  ) {}

  async execute(pessoa_id: string): Promise<Fone[]> {
    const fones = await this.fonesRepository.findByPessoa(pessoa_id);

    if (!fones) {
      throw new Error("Telefone não encontrado");
    }

    return fones;
  }
}