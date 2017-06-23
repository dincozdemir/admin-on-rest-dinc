// in posts.js
import React from 'react';
import {
  List, Datagrid, Create,
  SimpleForm, DateField, TextField, EditButton,
  TextInput
} from 'admin-on-rest';
export { DeploymentIcon } from 'material-ui/svg-icons/action/home';

export const DeploymentList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="date" />
            <TextField label="Component" source="componentName" />
            <TextField source="environment" />
            <EditButton basePath="/deployments" />
        </Datagrid>
    </List>
);

export const DeploymentCreate = (props) => (
    <Create title="Create a Deployment" {...props}>
        <SimpleForm>
            <TextInput source="componentId" />
            <TextInput label="Component" source="componentName" />
            <TextInput source="environment" />
        </SimpleForm>
    </Create>
);
