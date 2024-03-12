const asyncHander = require("express-async-handler")
const Contact =require("../models/contact.model.js") ;

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHander(async (req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
})


//@desc Create new contacts
//@route POST /api/contacts
//@access public
const createContact= asyncHander(async(req,res)=>{
    console.log(req.body)
    const {name,email,phone}=req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const contact = await Contact.create({name,email,phone})
    res.status(201).json(contact);
})

//@desc Get a contact
//@route GET /api/contacts/:id
//@access public
const getContact= asyncHander(async(req,res)=>{
    const contact =await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
})


//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public
const updateContact=asyncHander(async(req,res)=>{

    const contact =await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    const updatedContact =await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updatedContact);
})

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact=asyncHander(async(req,res)=>{
  
    const contact =await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    await Contact.remove()
    res.status(200).json(contact);
})

module.exports={getContacts,createContact,getContact,updateContact,deleteContact};