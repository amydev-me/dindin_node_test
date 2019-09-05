const express = require('express');
const router  = new express.Router();
const {User} =require('../../db/models/user');

router.get('/users', async (req, res)=>{
    try{
        const users = await User.findAll();
        res.send(users);

    }catch(e){
        res.status(500).send();
    }
});