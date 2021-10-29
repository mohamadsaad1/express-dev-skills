import * as skillDb from "../data/skill-db.js"

function index(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
    })
  })
}

function show(req, res) {
  skillDb.findById(req.params.id, function(error, skill) {
    console.log(skill)
    res.render("skills/show", {
      skill: skill,
      error: error
    })
  })
}

function newskill(req, res) {
  res.render("skills/new")
}

function create(req, res) {
  skillDb.create(req.body, function(error, skill) {
    res.redirect("/skills")
  })
}

function deleteskill(req, res) {
  skillDb.findByIdAndDelete(req.params.id, function(error, skill){
    res.redirect("/skills")
  })
}

export {
  index,
  show,
  newskill as new,
  create,
  deleteskill as delete

}