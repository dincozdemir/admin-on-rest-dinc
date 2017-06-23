import React, { Component } from 'react';
import { simpleRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';
import { DeploymentList, DeploymentCreate, DeploymentIcon } from './deployments';
import DeploymentEdit from './deployment/DeploymentEdit';

import Menu from './Menu';

class App extends Component {

  render() {
    let i;
    return (
      <Admin title="Octopus" menu={Menu} restClient={simpleRestClient('http://localhost:8080')}>
          <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
          <Resource name="deployments" list={DeploymentList} edit={DeploymentEdit} create={DeploymentCreate} icon={DeploymentIcon}/>
      </Admin>
    );
  }
}

export default App;
