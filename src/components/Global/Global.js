import PropTypes from 'prop-types';
import './GlobalStyle.scss';
import './Grid.scss';

const Global = ({ children }) => {
  return children;
};

Global.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Global;
