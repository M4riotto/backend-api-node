import express from 'express'

import {
  listAllusers,
  listId,
  createUser,
  deleteUser,
  updateUser
} from '../controllers/userController.js'

const router = express.Router()

router.get('/', listAllusers);
router.get('/:id', listId);
router.post('/', createUser);
router.delete('/', deleteUser);
router.put('/', updateUser);

export default router