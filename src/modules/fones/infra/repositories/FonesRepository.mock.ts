import { IFonesRepository } from "@modules/fones/repositories/IFonesRepository";
import { Fone } from "@modules/fones/infra/entities/Fone";

export class MockFonesRepository implements IFonesRepository {
  private fones: Fone[] = [];

  async create(data: ICreateFoneDTO): Promise<Fone> {
    const fone = new Fone();

    Object.assign(fone, { ...data });

    this.fones.push(fone);

    return fone;
  }

  async findByPessoa(pessoa_id: string): Promise<Fone[]> {
    const fones = this.fones.filter((fone) => fone.pessoa_id === pessoa_id);
    return fones;
  }

  async isCelular(numero: string): Promise<Fone | undefined> {
    return this.fones.find((fone) => fone.numero === numero && fone.isCelular);
  }
}
