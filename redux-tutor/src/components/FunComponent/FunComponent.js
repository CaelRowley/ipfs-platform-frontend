import React from 'react';
import './FunComponent.css';

const FunComponent = props => {
  const {
    componentText,
    componentText2
  } = props

  return (
    <div>
      <div>{componentText}</div>
      <div>{componentText2}</div>
    </div>
  );
}
export default FunComponent;