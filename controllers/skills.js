const Skill = require('../models/skill');

const index = (req, res) => {
  res.render('skills/index', {
    skills: Skill.getAll(),
    title: 'All Skills'
  });
};

const show = (req, res) => {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: 'Skill Details'
  });
};

const newSkill = (req, res) => {
  res.render('skills/new', {title: 'New Skill'});
};

module.exports = {
  index, 
  show,
  new: newSkill
};