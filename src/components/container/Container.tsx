import React from 'react';
import './Container.css';

interface Props {
  children?: React.ReactNode;
  className?: string
}

const Container = ({children, className}: Props) => {
  return (
    <div className={className ? `container ${className}` : "container"}>
      {children}
    </div>
  );
}

export default Container;
