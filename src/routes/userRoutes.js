import express from 'express'

import {
  listAllusers,
  createUser,
  deleteUser,
  updateUser
} from '../controllers/userController.js'

const router = express.Router()

router.get('/', listAllusers);
router.post('/', createUser);
router.delete('/', deleteUser);
router.put('/', updateUser);

export default router