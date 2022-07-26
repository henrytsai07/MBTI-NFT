import React from "react";
import { RiCloseLine } from "react-icons/ri";
import PropTypes from "prop-types";

export default class Error extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
  return (
    
      <div className="darkBG" onClick={this.onClose}>
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{this.props.title}</h5>
          </div>
          <button className="closeBtn" onClick={this.onClose}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
          {this.props.children}          
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={this.onClose}>
                close
              </button>
             
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}
}
Error.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};