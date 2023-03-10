import express from 'express'
import {
  listAllCourses,
  listId,
  createCourse,
  deleteCourse,
  updateCourse
} from '../controllers/courseController.js'

const router = express.Router()

router.get('/', listAllCourses) // SELECT
router.post('/:id', listId) // SELECT ID
router.post('/', createCourse) // INSERT
router.delete('/', deleteCourse) // DELETE
router.put('/', updateCourse) // UPDATE

export default router