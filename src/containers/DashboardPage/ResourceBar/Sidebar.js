import React, { useContext } from 'react';

import Profile from './Profile';
import { ResourceContext } from '../../../context/Resource';
import ContainerResource from './Style/ContainerResource';
import SearchBar from './Style/SeachBar';
import ResourceTable from './Style/ResourceTable';

import icon from '../../../images/search.ico';
import { useWindowSize } from '../../../utils/Window';

const Sidebar = () => {
  const resourceContext = useContext(ResourceContext);
  const { searchResult, updateSearch } = resourceContext;
  const [size] = useWindowSize();

  return (
    <ContainerResource id="resource_list" height={size.height}>
      <SearchBar>
        <input
          type="text"
          placeholder="Search"
          onChange={updateSearch.bind(this)}
        />
        <img alt="search-icon" src={icon} />
      </SearchBar>
      <ResourceTable numberOfResources={searchResult.length}>
        {searchResult &&
          searchResult.map(item => (
            <Profile
              resourceId={item._id.toString()}
              src={item.avatar}
              name={item.name}
              key={`${item._id.toString()}`}
            />
          ))}
      </ResourceTable>
    </ContainerResource>
  );
};

export default Sidebar;
