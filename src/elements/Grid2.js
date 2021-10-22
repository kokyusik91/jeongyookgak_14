/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    type,
    width,
    height,
    flex_direct,
    is_flex,
    flex,
    children,
    margin,
    padding,
    justify,
    bg,
    display,
    aligns,
    border,
    _onClick,
  } = props;

  const styles = {
    width: width,
    height: height,
    flex: flex,
    padding: padding,
    margin: margin,
    justify: justify,
    bg: bg,
    aligns: aligns,
    is_flex: is_flex,
    flex_direct: flex_direct,
    flex: flex,
    display: display,
    border: border,
  };

  if (type === 'card') {
    return <CardGrid onClick={_onClick}>{children}</CardGrid>;
  }

  return (
    <React.Fragment>
      <GridDiv {...styles} onClick={_onClick}>
        {children}
      </GridDiv>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  // width: '100%',
  padding: false,
  margin: false,
  children: null,
  is_flex: false,
  bg: '#1c1c1c',
  aligns: 'center',
  _onClick: () => {},
  flex: false,
};

const CardGrid = styled.div`
  width: 24%;
  height: 250px;
  background-color: #f1f3f5;
  flex-wrap: wrap;
  position: relative;
`;

const GridDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: boreder-box;
  display: block;
  ${(props) => (props.is_flex ? `display:flex` : '')};
  ${(props) => (props.justify ? `justify-content:${props.justify}` : '')};
  ${(props) => (props.aligns ? `align-items:${props.aligns}` : '')};
  ${(props) =>
    props.flex_direct ? `flex-direction:${props.flex_direct}` : ''};
  ${(props) => (props.margin ? `margin:${props.margin}` : '')};
  ${(props) => (props.padding ? `padding:${props.padding}` : '')};
  ${(props) => (props.bg ? `background-color:${props.bg}` : '')};
  ${(props) => (props.flex ? `flex-grow:${props.flex}` : '')};
  ${(props) => (props.dipslay ? `display:${props.dipslay}` : '')};
  ${(props) => (props.border ? `border:${props.border}` : '')};
`;

export default Grid;
