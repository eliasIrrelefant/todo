import * as express from 'express';
import { jwtHelper } from '../shared/jwt-helper';
import { controller } from './config.controller';

const router = express.Router();

router.get('/', jwtHelper, controller.getAction);
router.post('/', jwtHelper, controller.createAction);
router.put('/:id', jwtHelper, controller.updateAction);
router.delete('/:id', jwtHelper, controller.deleteAction);

export { router };
