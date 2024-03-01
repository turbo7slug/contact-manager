const express = require("express");
const router =  express.Router();
const {getContacts,createContact,getContact,updateContact,deleteContact} =require("../controllers/contactController")

router.route("/").get(getContacts).post(createContact);//get all contacts

// router.route("/").post(createContact);//create a new contact

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);//get particular contact

// router.route("/:id").put(updateContact);//update

// router.route("/:id").delete(deleteContact);//delete




module.exports = router;