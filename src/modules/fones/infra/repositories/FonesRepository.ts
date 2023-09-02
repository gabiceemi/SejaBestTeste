import { Repository, getRepository } from "typeorm";

import { IFonesRepository } from "modules/fones/repositories/IFonesRepository";
import { Fone } from "../entities/Fone";

export class FonesRepository implements IFonesRepository {
  private repository: Repository<Fone>;

  constructor() {
    this.repository = getRepository(Fone);
  }

  async create(data: ICreateFoneDTO): Promise<Fone> {
    const fone = this.repository.create(data);
    await this.repository.save(fone);

    return fone;
  }

  async findByPessoa(pessoa_id: string): Promise<Fone[] | undefined> {
    const fones = await this.repository.find({
      where: { pessoa_id },
    });

    return fones;
  }

  async isCelular(number: string): Promise<Fone | undefined> {
    const fone = await this.repository.findOne({
      where: { numero: number, isCelular: true },
    });

    return fone || undefined;
  }
}
