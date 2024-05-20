import React from 'react';

const Error = ({ error }) => {
  const errorStyle = { padding: '20px 0', fontSize: '20px', color: 'red' };

  return <>{error && <div style={errorStyle}>{error}</div>}</>;
};

export default Error;
