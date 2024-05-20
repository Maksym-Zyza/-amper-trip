import React from 'react';
import { DNA } from 'react-loader-spinner';

const Loader = ({ isLoading }) => {
  const loaderStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      {isLoading && (
        <div style={loaderStyle}>
          {isLoading && (
            <DNA
              visible={true}
              height="160"
              width="160"
              ariaLabel="dna-loading"
              wrapperClass="dna-wrapper"
            />
          )}
        </div>
      )}
    </>
  );
};

export default Loader;
