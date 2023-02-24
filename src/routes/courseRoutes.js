const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController')

const { listAllCourses, createCourse, deleteCourse, updateCourse } = courseController

router.put('/', listAllCourses);
router.post('/', createCourse);
router.delete('/', deleteCourse);
router.get('/', updateCourse);

module.exports = router;