import { Router } from 'express';

import { pessoasRoutes } from './pessoas.routes';
import { fonesRoutes } from './fones.routes';

export const router = Router();

router.use("/pessoas", pessoasRoutes);
router.use("/fones", fonesRoutes);