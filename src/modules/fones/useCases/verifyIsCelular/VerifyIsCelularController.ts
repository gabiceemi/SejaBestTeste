import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { VerifyIsCelularUseCase } from "./VerifyIsCelularUseCase";

@injectable()
export class VerifyIsCelularController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { numero } = request.params;

    const verifyIsCelularUseCase = container.resolve(VerifyIsCelularUseCase);

    const fone = await verifyIsCelularUseCase.execute(numero);

    return response.status(201).json(fone).send();
  }
}