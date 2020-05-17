var router =require("express").Router();
var notes = require("../db/db.json");


router.get("/notes", function(req, res){
    console.log(notes)
    res.json(notes)
})
router.post("/notes", function(req, res){
    console.log(req.body)
    notes.push(req.body)
    res.status(200).json(notes)
})
router.delete("/notes/:id", function(req, res){
    console.log(req.params)
    const {id}=req.params
    notes=notes.filter((note, i)=> {
        if(i !== parseInt(id)){
            console.log("not target note")
            return note
        }
    })
    res.json(notes)
})

module.exports = router;