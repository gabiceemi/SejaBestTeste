import { Request, Response } from "express";

import { container, injectable } from "tsyringe";

import { CreateFoneUseCase } from "./CreateFoneUseCase";

@injectable()
export class CreateFoneController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { 
      codigo,
      numero,
      isCelular,
      pessoa_id
    } = request.body;

    const createFoneUseCase = container.resolve(CreateFoneUseCase);

    const fone = await createFoneUseCase.execute({
      codigo,
      numero,
      isCelular,
      pessoa_id
    });

    return response.status(201).json(fone).send();
  }
}