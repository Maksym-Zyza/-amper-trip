import React from 'react';

const Error = ({ error }) => {
  return (
    <>
      {error && (
        <div
          style={{
            padding: '20px 0',
            fontSize: '20px',
            color: 'red',
          }}
        >
          {error}
        </div>
      )}
    </>
  );
};

export default Error;
