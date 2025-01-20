import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="notes" multiline source="notes" />
        <TextInput label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
