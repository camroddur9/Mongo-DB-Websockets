const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const response = require('./../../network/response')
const controller = require('./controller')

router.get('/', (req, res) => {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
    .then((messageList) => {
        response.success(req,res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, "unexpected", 500, e)
    })
})

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
        response.success(req,res, fullMessage, 201)
    })
    .catch( e => {
        response.error(req,res, "Informacion Invalida", 400, 'Error en el controlador')
    })
})

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch(e => {
        response.error(req, res, 'Internal Error', 500, e)
    })
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.success(req,res, `Usuario ${req.params.id} eliminado`, 200)
    })
    .catch(e => {
        response.error(req,res, 'Internal Error', 500, e)
    })
})

module.exports = router;