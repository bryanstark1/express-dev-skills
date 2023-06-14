const Skill = require('../models/skill');

const index = (req, res) => {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  };

const show = (req, res) => {
    res.render('skills/show', {
        skills: Skill.getOne(req.params.id)
    });
};

module.exports = {
    index, 
    show
};