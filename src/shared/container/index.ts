import { container } from "tsyringe";

import { FonesRepository } from "@modules/fones/infra/repositories/FonesRepository";
import { IFonesRepository } from "@modules/fones/repositories/IFonesRepository";

import { PessoasRepository } from "@modules/pessoas/infra/typeorm/repositories/PessoasRepository";
import { IPessoasRepository } from "@modules/pessoas/repositories/IPessoasRepository";

container.registerSingleton<IPessoasRepository>(
  "PessoasRepository",
  PessoasRepository
);

container.registerSingleton<IFonesRepository>(
  "FonesRepository",
  FonesRepository
);