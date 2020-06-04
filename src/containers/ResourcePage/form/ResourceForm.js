import React, { useContext, useEffect, useState } from 'react';
import PropTypes, { bool } from 'prop-types';
import row from './RowContent';
import { addResource, updateResource } from '../../../api/resourceApi';
import { grantPermissionResource } from '../../../api/authApi';
import { ResourceContext } from '../../../context/Resource';
import {
  Container,
  AddFormButton,
  AddFormButtonSpan,
  BodyForm,
  CancelFormButton,
  CancelFormButtonSpan,
  FooterForm,
  HeaderForm,
  HeaderTitle,
  Error,
} from '../Style/FormStyle';
import SelectCustom from './Dropdown';
import { dataPermission } from './Data';
import { showPermission } from '../Kit';
import { validateEmail, validatePass } from '../../../utils/validate';
import { validateForm } from './ValidateForm';

const ResourceForm = props => {
  const { editing, jobs, departments, onClose, show } = props;
  const { currentResource, initResource } = props;
  const resourceContext = useContext(ResourceContext);
  const { fetchResource } = resourceContext;
  const [resource, setResource] = useState(currentResource);
  const [role, setRole] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [departmentTitle, setDepartmentTitle] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (props.editing) setResource(currentResource);
    else setResource(initResource);
  }, [props]);
  const handleSubmit = async () => {
    const resourceObject = {
      _id: resource._id,
      jobtitle: jobTitle,
      department: departmentTitle,
      name: {
        first: resource.firstName,
        last: resource.lastName,
      },
      email: resource.email,
      password: resource.password,
    };
    const resourceObjectEdit = {
      _id: resource._id,
      jobtitle: jobTitle,
      department: departmentTitle,
      name: {
        first: resource.firstName,
        last: resource.lastName,
      },
      avatar:
        'https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg',
      role,
    };

    if (editing) {
      await updateResource(resourceObjectEdit);
      await grantPermissionResource(resourceObjectEdit);
    } else {
      try {
        const check = validateForm(
          setError,
          resourceObject.name.first,
          resourceObject.name.last,
          resourceObject.email,
          resourceObject.password,
          resourceObject.jobtitle,
          resourceObject.department,
        );
        if(check === 0) return ;
        await addResource(resourceObject);
      } catch (e) {
        const res = e.response.data.errors.message;
        if (res !== undefined) {
          setError(res);
        }
        return;
      }
    }

    fetchResource();
    onClose();
  };
  const handleChangeInput = event => {
    const { name, value } = event.target;
    setResource({ ...resource, [name]: value });
  };

  const resourceAction = props.editing ? 'Edit' : 'Add';

  let password = null;
  let email = null;
  let permission = (
    <SelectCustom
      data={dataPermission}
      titleTag="Permission"
      role={showPermission(resource.permission)}
      setRole={setRole}
    />
  );

  const job = (
    <SelectCustom
      data={jobs}
      titleTag="Job Title"
      role={resource.jobtitle.name}
      setRole={setJobTitle}
      haveId
      idItem={resource.jobtitle._id}
    />
  );
  const department = (
    <SelectCustom
      data={departments}
      titleTag="Department"
      role={resource.department.name}
      setRole={setDepartmentTitle}
      haveId
      idItem={resource.department._id}
    />
  );
  if (!editing) {
    password = row(
      'Password',
      'password',
      resource.password,
      handleChangeInput,
      'password',
    );
    email = row('Email', 'email', resource.email, handleChangeInput, 'email');
    permission = null;
  }

  if (!show) return null;
  return (
    <Container>
      <HeaderForm>
        <HeaderTitle>New Resource</HeaderTitle>
        <Error>{error}</Error>
      </HeaderForm>
      <BodyForm>
        {row('First Name', 'firstName', resource.firstName, handleChangeInput)}
        {row('Last Name', 'lastName', resource.lastName, handleChangeInput)}
        {email}
        {password}
        {permission}
        {job}
        {department}
      </BodyForm>

      <FooterForm>
        <AddFormButton onClick={handleSubmit}>
          <AddFormButtonSpan>{resourceAction} Resource</AddFormButtonSpan>
        </AddFormButton>
        <CancelFormButton onClick={onClose}>
          <CancelFormButtonSpan>Cancel</CancelFormButtonSpan>
        </CancelFormButton>
      </FooterForm>
    </Container>
  );
};

ResourceForm.propTypes = {
  editing: PropTypes.bool,
  show: bool,
  onClose: PropTypes.func,
  currentResource: PropTypes.object,
  initResource: PropTypes.object,
  jobs: PropTypes.array,
  departments: PropTypes.array,
};

export default ResourceForm;
