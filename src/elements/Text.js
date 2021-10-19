import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { bold, color, size, children, margin, textAlign } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    textAlign: textAlign,
  };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#fff',
  size: '14px',
  margin: 0,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.is_title ? '26px' : props.size)};
  font-weight: ${(props) => (props.bold ? '900' : '600')};
  ${(props) => (props.textAlign ? `text-align :${props.textAlign}` : '')};
  ${(props) => (props.margin ? `margin : ${props.margin}` : '')};
`;

export default Text;
