import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  className?: string
}

const BaseContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  margin: auto;
  align-items: center;
`

const Container = ({children, className}: Props) => {
  return (
    <BaseContainer className={className ? `${className}` : ''}>
      {children}
    </BaseContainer>
  );
}

export default Container;
