import { Request, Response } from "express";

import { container, injectable } from "tsyringe";

import { FindPessoaUseCase } from "./FindPessoaUseCase";

@injectable()
export class FindPessoaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, sobrenome } = request.params;

    const findPessoaUseCase = container.resolve(FindPessoaUseCase);

    const pessoa = findPessoaUseCase.execute({
      nome,
      sobrenome
    });

    return response.status(200).json(pessoa).send();
  }
}