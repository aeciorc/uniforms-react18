import React from 'react';
import { filterDOMProps, useField } from 'uniforms';

function ErrorsField({ children, ...props }) {
  const { error, schema } = useField(name, props)[1];

  return !error && !children ? null : (
    <div {...filterDOMProps(props)}>
      {children}
      <ul>
        {schema.getErrorMessages(error).map((message, index) => (
          <li key={index} style={{ margin: '3px' }}>
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
}

ErrorsField.defaultProps = {
  style: {
    backgroundColor: 'rgba(255, 85, 0, 0.2)',
    border: '1px solid rgb(255, 85, 0)',
    borderRadius: '7px',
    margin: '20px 0px',
    padding: '10px',
  },
};

export default ErrorsField;