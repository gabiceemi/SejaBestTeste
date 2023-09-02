import { MockFonesRepository } from '@modules/fones/infra/repositories/FonesRepository.mock';
import { FindFoneUseCase } from './FindFoneUseCase';
import { Fone } from '@modules/fones/infra/entities/Fone';

describe('FindFoneUseCase', () => {
  let findFoneUseCase: FindFoneUseCase;
  let fonesRepository: MockFonesRepository;

  beforeEach(() => {
    fonesRepository = new MockFonesRepository();
    findFoneUseCase = new FindFoneUseCase(fonesRepository);
  });

  it('deve retornar uma lista de telefones', async () => {
    const pessoa_id = 'id-da-pessoa';
    const fone1: Fone = { id: '1', codigo: '55', numero: '9999999', isCelular: true, pessoa_id, created_at: new Date() };
    const fone2: Fone = { id: '2', codigo: '55', numero: '8888888', isCelular: false, pessoa_id, created_at: new Date() };
    const fone3: Fone = { id: '3', codigo: '55', numero: '7777777', isCelular: true, pessoa_id, created_at: new Date() };
    await fonesRepository.create(fone1);
    await fonesRepository.create(fone2);
    await fonesRepository.create(fone3);

    const telefones = await findFoneUseCase.execute(pessoa_id);

    expect(telefones).toHaveLength(3);
    expect(telefones).toContainEqual(fone1);
    expect(telefones).toContainEqual(fone2);
    expect(telefones).toContainEqual(fone3);
  });

  it('deve lançar um erro se nenhum telefone for encontrado', async () => {
    const pessoa_id = 'id-da-pessoa-sem-telefones';

    await expect(findFoneUseCase.execute(pessoa_id)).rejects.toThrowError('Telefone não encontrado');
  });
});
