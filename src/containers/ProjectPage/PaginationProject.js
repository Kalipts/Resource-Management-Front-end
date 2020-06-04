import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import { WrapperPagination } from './Style/StyledProject';

const PaginationProject = ({ onChangePage, currentPage, count }) => (
  <WrapperPagination>
    <Pagination
      count={count}
      onChange={onChangePage}
      page={currentPage}
      shape="rounded"
      color="primary"
      variant="outlined"
      disabled={count === 0}
    />
  </WrapperPagination>
);

PaginationProject.propTypes = {
  onChangePage: PropTypes.func,
};
export default PaginationProject;
