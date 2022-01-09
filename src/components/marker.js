import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 42px;
  height: 42px;
  /* background-color: red; */
  /* border: 2px solid red; */
  /* border-radius: 100%; */
  z-index: 1000;
  background-image: url('img/darts.png');
  background-repeat: no-repeat;
  user-select: none;
  /* transform: translate(-50%, -50%); */
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1001;
  }
`;

const Marker = ({ text, onClick }) => (
  <Wrapper
    alt={text}
    onClick={onClick}
  />
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;