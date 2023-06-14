const skills = [
    {
        id: 1,
        name: 'javascript',
        type: 'language'
    },
    {
        id: 2,
        name: 'node.js',
        type: 'framework'
    },
    {
        id: 3,
        name: 'express.js',
        type: 'framework'
    },
    {
        id: 4,
        name: 'html',
        type: 'language'
    },
    {
        id: 5,
        name: 'css',
        type: 'language'
    },
    {
        id: 6,
        name: 'jquery',
        type: 'framework'
    },
    {
        id: 7,
        name: 'git',
        type: 'tool'
    },
    {
        id: 8,
        name: 'github',
        type: 'service'
    }
];

const getAll = () => {
    return skills;
};

const getOne = (id) => {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

module.exports = {
    getAll,
    getOne
};