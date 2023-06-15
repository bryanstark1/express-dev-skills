const Skill = require('../models/skill');

const index = (req, res) => {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All Skills'
    });
  };

const show = (req, res) => {
    res.render('skills/show', {
        skills: Skill.getOne(req.params.id),
        title: 'Skill Details'
    });
};

module.exports = {
    index, 
    show
};