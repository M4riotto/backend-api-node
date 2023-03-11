import express from 'express'
import {
  listAllCourses,
  listId,
  createCourse,
  deleteCourse,
  deletId,
  updateCourse
} from '../controllers/courseController.js'

const router = express.Router()

router.get('/', listAllCourses) // SELECT
router.get('/:id', listId) // SELECT ID
router.post('/', createCourse) // INSERT
router.delete('/', deleteCourse) // DELETE
router.delete('/:id', deletId) // DELETE
router.put('/', updateCourse) // UPDATE

export default router