export const ResourceModel = (
  permission = '',
  jobtitle = '',
  department = '',
  firstName = '',
  lastName = '',
  email = '',
  password = '',
) => {
  const resourceOBject = {
    permission,
    jobtitle,
    department,
    firstName,
    lastName,
    email,
    password,
  };
  return resourceOBject;
};

export const ResourceModelEdit = (
  _id = '',
  permission = '',
  jobtitle = '',
  department = '',
  firstName = '',
  lastName = '',
  email = '',
  password = '',
) => {
  const resourceOBject = {
    _id,
    permission,
    jobtitle,
    department,
    firstName,
    lastName,
    email,
    password,
  };
  return resourceOBject;
};

