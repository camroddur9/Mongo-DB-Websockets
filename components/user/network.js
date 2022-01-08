const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const response = require('./../../network/response')
const controller = require('./controller')

router.get('/', (req, res) => {
    controller.getUser()
    .then((userList) => {
        response.success(req,res, userList, 200)
    })
    .catch(e => {
        response.error(req,res,'Internal Error', 500, e)
    })
})

router.post('/', (req,res) => {
    controller.addUser(req.body.name)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(e => {
        response.error(req,res,'Internal Error', 500, e)
    })
})

router.patch('/:id', (req, res) => {
    controller.updateUser(req.params.id, req.body.name)
    .then(data => {
        response.success(req,res,data,200)
    })
    .catch(e => {
        response.error(req,res, "Internal Error", 500, e)
    })
})

router.delete('/:id', (req, res) => {
    controller.deleteUser(req.params.id)
    .then(() => {
        response.success(req,res, `Usuario con id ${req.params.id} eliminado`)
    })
    .catch(e => {
        response.error(req,res,'Internal Error', 500, e)
    })
})

module.exports = router