import React, { Component } from 'react';

export default class ModalLogin extends Component {
  render() {
    const { handleClose, show, children } = this.props;
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
        </section>
      </div>
    );
  }
}