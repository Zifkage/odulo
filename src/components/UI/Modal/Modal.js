import React from 'react';
import './Modal.css';

const Modal = (props) => (
  <div onClick={props.close} className="backdrop">
    <div >
      {props.children}
    </div>
  </div>
);

export default Modal;