import PropTypes from 'prop-types';
import React from 'react';

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
    name: 'Zach'
}
export default RenderName;