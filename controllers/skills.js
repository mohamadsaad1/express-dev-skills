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
  console.log(req.params.id)
  skillDb.findById(req.params.id, function(error, skill) {
    console.log(skill)
    res.render("skills/show", {
      skill: skill,
      error: error
    })
  })
}

function create(req, res) {
  console.log(req.body)
  skillDb.create(req.body, function(error, skill) {
    res.redirect("/skills")
  })
}
function newSkill(req, res) {
  res.render("skills/new")
}
function deleteSkill(req, res) {
  skillDb.findByIdAndDelete(req.params.id, function(error, skill) {
    res.redirect("/skills")
  })
}

export {
  index,
  show,
  create,
  newSkill as new,
  deleteSkill as delete
}