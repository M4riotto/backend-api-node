const express = require('express')
const mysql = require('mysql')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "Entrou na rota /course via GET"})
})

router.post('/', (req, res) => {
    res.json({message: "Entrou na rota /course via POST"})
})

module.exports = router