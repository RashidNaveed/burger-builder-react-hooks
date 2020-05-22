import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ShowModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle} className="">
        <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default React.memo(
  ShowModal,
  (prevProps, nextProps) =>
    nextProps.modal === prevProps.modal &&
    nextProps.children === prevProps.children
);
