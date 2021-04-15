const express = require('express')
const router = express.Router()
const Persono = require('../model/Persono')




// find all person
router.get('/findall', (req, res) => {
    Persono.find()
        .then((persono) => res.send(persono))
        .catch((err) => console.log(err))

})




// find one with favorite Foods
router.get('/findfav/:favoriteFoods', (req, res) => {
    Persono.findOne({
            favoriteFoods: req.params.favoriteFoods
        })
        .then((persono) => res.send(persono))
        .catch((err) => console.log(err))

})



// find by id
router.get('/findid/:_id', (req, res) => {
    Persono.findById({
            _id: req.params._id
        })
        .then((persono) => res.send(persono))
        .catch((err) => console.log(err))

})

module.exports = router