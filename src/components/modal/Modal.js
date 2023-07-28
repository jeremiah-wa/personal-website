import React from "react";
import ReactDOM from 'react-dom';
import { useModalContext } from "../../context/ModalContext";
import Card from "../card/Card"
import './Modal.css'


export default function Modal({className, children}) {
    const {showModal, closeModalHandler} = useModalContext();

    return (
      <>
          {
            showModal && ReactDOM.createPortal(<>
                <section id="backdrop" onClick={closeModalHandler}></section>
                <Card className={className}>{children}</Card>
                </>, document.querySelector('#overlays'))
          }
      </>
    )
}
