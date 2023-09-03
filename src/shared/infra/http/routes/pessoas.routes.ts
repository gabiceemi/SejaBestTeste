import { Router } from "express";

import { CreatePessoaController } from "@modules/pessoas/useCases/createPessoa/CreatePessoaController";
import { FindPessoaController } from "@modules/pessoas/useCases/findPessoa/FindPessoaController";

const createPessoaController = new CreatePessoaController();
const findPessoaController = new FindPessoaController();

export const pessoasRoutes = Router();

pessoasRoutes.post(
  "/",
  createPessoaController.handle
);

pessoasRoutes.get(
  "/:nome/:sobrenome",
  findPessoaController.handle
);