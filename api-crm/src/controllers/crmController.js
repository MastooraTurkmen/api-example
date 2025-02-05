const mongoose = require("mongoose");
import { ContractSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContractSchema)

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body)

    newContact.save((err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
}