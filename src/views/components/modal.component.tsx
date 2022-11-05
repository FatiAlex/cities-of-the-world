import * as React from 'react';
import { Button, Modal as BModal } from 'react-bootstrap';
import { IModalProps } from './types/modal.component.types';

const Modal = (props: IModalProps) => {
  // handlers
  const handleDefaultHide = () => setShow(false);

  // props
  const {
    show,
    setShow,
    headerLabel,
    confirmLabel,
    handleConfirm,
    handleHide = handleDefaultHide,
    showFooter = false,
  } = props;

  // render
  return (
    <>
      <BModal show={show} onHide={handleHide}>
        <BModal.Header closeButton>
          <BModal.Title>{headerLabel}</BModal.Title>
        </BModal.Header>
        <BModal.Body>{props.children}</BModal.Body>
        {showFooter && (
          <BModal.Footer>
            <Button variant="secondary" onClick={handleHide}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              {confirmLabel}
            </Button>
          </BModal.Footer>
        )}
      </BModal>
    </>
  );
};

export default Modal;
