const express = require('express')
const router = express.Router()
const Persono = require('../model/Persono')





// remove person by id 

router.delete('/removepeo/:_id', (req, res) => {
    const { _id } = req.params
    Persono.findByIdAndDelete({ _id })
        .then((persono) => res.send(persono))
        .catch((err) => console.log(err))

})


// remove with name

router.delete('/removename/:name', (req, res) => {
    const { name } = req.params
    Persono.remove({ name }, { justOne: false })
        .then((persono) => res.send(persono))
        .catch((err) => console.log(err))

})



module.exports = router