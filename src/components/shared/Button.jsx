/* eslint-disable no-unreachable */
import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );

  Button.defaultProps = {
    version: "primary", // that is if nothing is passed
    type: "button",
    isDisabled: false,
  };

  Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
  };
}

export default Button;
