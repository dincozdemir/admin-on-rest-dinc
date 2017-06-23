// in posts.js
import React from 'react';
import {
  AutocompleteInput, Edit,
  SimpleForm,
  DisabledInput
} from 'admin-on-rest';
export { DeploymentIcon } from 'material-ui/svg-icons/action/home';


const DeploymentTitle = ({ record }) => {
    return <span>Deployment {record ? `"# ${record.id}"` : ''}</span>;
};

class DeploymentEdit extends React.Component {

  constructor() {
    super();
    this.state = {components: [
      { id: '-1', name: 'Select...' }
    ]};
  }

  componentDidMount() {
    console.log(this.state);
  }

  async handleUpdateInput(filterText){
    let response = await fetch(`http://localhost:8080/components/auto/${filterText}`);
    let components = await response.json();
    //console.log(components);
    this.setState({ components });

  };

  render() {
    return (
      <Edit title={<DeploymentTitle />} {...this.props}>
          <SimpleForm>
              <DisabledInput source="id" />
              <DisabledInput source="date" />
              <AutocompleteInput source="environment" choices={[
                  { id: 'dev', name: 'Dev' },
                  { id: 'test', name: 'Test' },
                  { id: 'preprod', name: 'PreProd' },
              ]} />
              <DisabledInput source="componentId" />
              <AutocompleteInput source="componentId" choices={this.state.components}
                setFilter={this.handleUpdateInput.bind(this)} />
          </SimpleForm>
      </Edit>
    )
  }
}

export default DeploymentEdit;
