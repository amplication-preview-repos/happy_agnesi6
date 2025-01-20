import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ClientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="notes" multiline source="notes" />
        <TextInput label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
