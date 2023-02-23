const express = require('express')
const router = express.Router()
const { getAllUsers, getSingleUser, createUser } = require('../controllers/userController')

router.route('/').get(getAllUsers).post(createUser)
router.get('/:id', getSingleUser)

module.exports = router
