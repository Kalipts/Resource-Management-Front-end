// pagination

export const resourcesPerPage = 5;
export const indexOfLastResource = currentPage =>
  currentPage * resourcesPerPage;
export const indexOfFirstResource = currentPage =>
  indexOfLastResource(currentPage) - resourcesPerPage;

export const prep = (currentPage, setCurrentPage) => {
  if (currentPage > 1) setCurrentPage(currentPage - 1);
};
export const nextp = (currentPage, setCurrentPage, persons) => {
  if (currentPage < persons.length / resourcesPerPage)
    setCurrentPage(currentPage + 1);
};

// modal
export const showPermission = (permissionNumber = 0) => {
  switch (permissionNumber) {
    case 0:
      return 'User';
    case 1:
      return 'Manager';
    case 2:
      return 'Admin';
    default:
      return 'Error';
  }
};
