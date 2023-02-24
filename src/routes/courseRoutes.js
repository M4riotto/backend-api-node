const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController')

const { listAllCourses, createCourse, deleteCourse, updateCourse } = courseController

router.get('/', listAllCourses);
router.post('/', createCourse);
router.delete('/', deleteCourse);
router.put('/', updateCourse);

module.exports = router; 