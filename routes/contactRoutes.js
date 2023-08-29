const express = require("express")
const router =   express.Router()

router.route('/').get((req, res) => {
    res.status(200).json({mesage: "Get all contacts"})
})

router.route('/').post((req, res) => {
    res.status(200).json({mesage: "Create Contact"})
})

router.route('/:id').get((req, res) => {
    res.status(200).json({mesage: `Get contact for ${req.params.id}`})
})

router.route('/:id').put((req, res) => {
    res.status(200).json({mesage: `Update contact for ${req.params.id}`})
})

router.route('/:id').delete((req, res) => {
    res.status(200).json({mesage: `Delete contact for ${req.params.id}`})
})

module.exports = router