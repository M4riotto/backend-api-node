import express from 'express'
import {
  listAllCourses,
  listIdCourses,
  createCourse,
  deleteCourse,
  updateCourse
} from '../controllers/courseController.js'

const router = express.Router()

router.get('/', listAllCourses) // SELECT
router.get('/byid', listIdCourses) // SELECT
router.post('/', createCourse) // INSERT
router.delete('/', deleteCourse) // DELETE
router.put('/', updateCourse) // UPDATE

export default router