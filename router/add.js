const express = require('express')
const router = express.Router()
const Persono = require('../model/Persono')




// add person
router.post('/addpeo', (req, res) => {
    // const { name, age, favoriteFoods } = req.body
    const newpersono = new Persono({
        name: req.body.name,
        age: req.body.age,
        favoriteFoods: req.body.favoriteFoods
    })


    newpersono.save()
        .then((persono) => res.send(persono))
        .catch((err) => console.log(err))
})



//Create many records
router.post("/createMany", (req, res) => {
    Persono.create(req.body); //insert in array
    res.send("create many record successfully");
});





module.exports = router