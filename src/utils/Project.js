export const nameOfPerson = person =>
  `${person.name.first} ${person.name.last}`;

export const listPm = projects => {
  const list = [];
  const isExit = _id => list.find(item => item._id === _id);
  projects.map(project => {
    if (!isExit(project.pm._id)) {
      list.push({ _id: project.pm._id, name: nameOfPerson(project.pm) });
    }
    return project;
  });
  return list;
};

export const listAm = projects => {
  const list = [];
  const isExit = _id => list.find(item => item._id === _id);
  projects.map(project => {
    if (!isExit(project.am._id)) {
      list.push({ _id: project.am._id, name: nameOfPerson(project.am) });
    }
    return project;
  });
  return list;
};

export const getRandomColor = projects => {
  const colors = projects.map(project => project.color);
  const letters = '0123456789ABCDEF';
  let color = '#';
  const checkColor = col => colors.find(e => e === col);
  do {
    color = '#';
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
  } while (checkColor(color));
  return color;
};

export const projectDetail = project => {
  const pm = {
    _id: project.pm._id,
    avatar: project.pm.avatar,
    name: nameToObjectName(project.pm.name),
  };
  const am = {
    _id: project.am._id,
    avatar: project.am.avatar,
    name: nameToObjectName(project.am.name),
  };
  return { ...project, pm, am };
};

export const nameToObjectName = name => {
  const first = name.substr(0, name.indexOf(' '));
  const last = name.substr(name.indexOf(' ') + 1);
  return { first, last };
};
export const validate = (name, pm, am, notes) => {
  const errors = {};
  if (name === undefined || name === '') errors.name = '! Please enter name';
  if (!pm) errors.pm = `! Choose Project Manager`;
  if (!am) errors.am = `! Choose Assurance Manager `;
  if (notes === undefined || notes === '')
    errors.notes = `! Please enter notes`;
  return errors;
};
export const dialog = {
  active: 'Can not delete the active project!',
  hasBooking: 'Can not delete project have available',
  question: 'Do you want to delete project?',
};
