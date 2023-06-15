const skills = [
  {
    id: 1,
    name: 'JavaScript',
    type: 'language',
    learned: true
  },
  {
    id: 2,
    name: 'Node.js',
    type: 'framework',
    learned: true
  },
  {
    id: 3,
    name: 'Express.js',
    type: 'framework',
    learned: true
  },
  {
    id: 4,
    name: 'HTML',
    type: 'language',
    learned: true
  },
  {
    id: 5,
    name: 'CSS',
    type: 'language',
    learned: true
  },
  {
    id: 6,
    name: 'JQuery',
    type: 'framework',
    learned: true
  },
  {
    id: 7,
    name: 'Git',
    type: 'tool',
    learned: true
  },
  {
    id: 8,
    name: 'GitHub',
    type: 'service',
    learned: true
  }
];

const getAll = () => {
  return skills;
};

const getOne = (id) => {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
};

const create = (newSkill) => {
  newSkill.id = Date.now() & 1000000;
  skills.push(newSkill);
};

const deleteOne = (id) => {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
};

const update = (id, updatedSkill) => {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
};

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};