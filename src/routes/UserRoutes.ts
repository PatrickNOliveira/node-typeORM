const { Router } = require('express')
// @ts-ignore
const UserController = require('@controllers/UserController')
const router = Router()

router.get('/users', UserController.all)
router.get('/users/:id', UserController.one)
router.put('/users/:id', UserController.update)
router.post('/users/', UserController.create)
router.delete('/users/:id', UserController.delete)
module.exports = router
