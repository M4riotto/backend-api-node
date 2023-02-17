const express = require('express')
const mysql = require('mysql')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "Entrou na rota /user via GET"})
})

router.post('/', (req, res) => {
    res.json({message: "Entrou na rota /user via POST"})
})

module.exports = router