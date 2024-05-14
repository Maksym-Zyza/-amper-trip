import React from 'react';
import { DNA } from 'react-loader-spinner';

const Loader = ({ isLoading }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {isLoading && (
        <DNA
          visible={true}
          height="120"
          width="120"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />
      )}
    </div>
  );
};

export default Loader;
