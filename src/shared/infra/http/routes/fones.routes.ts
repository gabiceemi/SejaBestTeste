import { Router } from "express";

import { CreateFoneController } from "@modules/fones/useCases/createFone/CreateFoneController";
import { FindFoneController } from "@modules/fones/useCases/findFone/FindFoneController";
import { VerifyIsCelularController } from "@modules/fones/useCases/verifyIsCelular/VerifyIsCelularController";

const createFoneController = new CreateFoneController();
const findFoneController = new FindFoneController();
const verifyIsCelularController = new VerifyIsCelularController();

export const fonesRoutes = Router();

fonesRoutes.post(
  "/",
  createFoneController.handle
);

fonesRoutes.get(
  "/:pessoa_id",
  findFoneController.handle
);

fonesRoutes.get(
  "/verify/:numero",
  verifyIsCelularController.handle
);