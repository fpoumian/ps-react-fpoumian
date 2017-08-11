import React from 'react';
import TextInputCSSModules from 'ps-react/TextInputCSSModules';

/** Required TextBox with error */
export default class ExampleRequired extends React.Component {
  render() {
    return (
      <TextInputCSSModules
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