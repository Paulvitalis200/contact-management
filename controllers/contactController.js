const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    console.log("CONTACTS: ", contacts)
    res.status(200).json(contacts)
})

//@desc Create New contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
    console.log(req.body)
    // We need to install middleweare called jsson
    const { name, email, phone } = req.body

    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    res.status(200).json({ mesage: "Create Contact" })
})

//@desc Get contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ mesage: `Get contact for ${req.params.id}` })
})


//@desc Update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ mesage: `Update contact for ${req.params.id}` })
})


//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ mesage: `Delete contact ${req.params.id}` })
})



module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }