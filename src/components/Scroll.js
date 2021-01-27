import React from 'react';

const Scroll = ({ children }) => {
  return(
    <div style={{overflowY: 'scroll', border: '2px solid black', height: '100%'}}>
      {children}
    </div>
  )
}

export default Scroll;