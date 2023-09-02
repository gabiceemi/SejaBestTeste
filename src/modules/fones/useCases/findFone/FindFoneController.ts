import { Request, Response } from "express";

import { container, injectable } from "tsyringe";

import { FindFoneUseCase } from "./FindFoneUseCase";

@injectable()
export class FindFoneController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { pessoa_id } = request.params;

    const findFoneUseCase = container.resolve(FindFoneUseCase);

    const fones = await findFoneUseCase.execute(pessoa_id);

    return response.status(201).json(fones).send();
  }
}