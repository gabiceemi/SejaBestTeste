import { inject, injectable } from "tsyringe";

import { Fone } from "modules/fones/infra/entities/Fone";
import { IFonesRepository } from "modules/fones/repositories/IFonesRepository";

@injectable()
export class VerifyIsCelularUseCase {
  constructor(
    @inject("FonesRepository")
    private fonesRepository: IFonesRepository
  ) {}

  async execute(numero: string): Promise<Fone> {
    const fone = await this.fonesRepository.isCelular(numero);

    return fone;
  }
}