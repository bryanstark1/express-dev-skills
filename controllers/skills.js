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

const create = (req, res) => {
  Skill.create(req.body);
  res.redirect('/skills');
};

const deleteSkill = (req, res) => {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
};

module.exports = {
  index, 
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};