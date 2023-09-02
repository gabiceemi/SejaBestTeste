import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { CreatePessoaUseCase } from "./CreatePessoaUseCase";

@injectable()
export class CreatePessoaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, sobrenome } = request.body;

    const createPessoaUseCase = container.resolve(CreatePessoaUseCase);

    const pessoa = createPessoaUseCase.execute({
      nome,
      sobrenome
    });

    return response.status(201).json(pessoa).send();
  }
}