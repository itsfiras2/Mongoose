const express = require('express')
const router = express.Router()
const Persono = require('../model/Persono')

// update person 

// router.put('/updatepeo/:_id', (req, res) => {
//     const { _id } = req.params
//     const { name, age, favoriteFoods } = req.body
//     Persono.findByIdAndUpdate({ _id }, { $set: { name, age, favoriteFoods } })
//     .then((persono) => res.send(persono))
//         .catch((err) => console.log(err))
// })


// update with "hamburger"
router.put('/updateid/:_id', (req, res) => {
    const { _id } = req.params

    Persono.findByIdAndUpdate({ _id }, { $push: { favoriteFoods: "hamburger" } })

    .then(() => res.send('humbrger added succ'))
        .catch((err) => console.log(err))


})



// update with "age=20"
router.put('/updatename/:name', (req, res) => {
    const { name } = req.params

    Persono.findOneAndUpdate({ name }, { $set: { age: 20 } })

    .then(() => res.send('age added succ'))
        .catch((err) => console.log(err))


})

module.exports = router