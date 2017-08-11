import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Required TextBox with error */
export default class ExampleRequired extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        required
        error="First name is required"
        onChange={() => {}}
      />
    )
  }
}