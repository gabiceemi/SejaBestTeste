import { inject, injectable } from "tsyringe";

import { Fone } from "modules/fones/infra/entities/Fone";
import { IFonesRepository } from "modules/fones/repositories/IFonesRepository";

@injectable()
export class CreateFoneUseCase {
  constructor(
    @inject("FonesRepository")
    private fonesRepository: IFonesRepository
  ) {}

  async execute({
    codigo,
    numero,
    isCelular,
    pessoa_id
  }: ICreateFoneDTO): Promise<Fone> {
    const fone = await this.fonesRepository.create({
      codigo,
      numero,
      isCelular,
      pessoa_id
    });

    return fone;
  }
}