import React from 'react';
import PropTypes from 'prop-types';
import { Button, Heading, Modal } from '@contentful/forma-36-react-components';
import { FocalPointPreviewImage } from './FocalPointPreviewImage';

const FocalPointDemoModal = ({ file, focalPoint, onClose }) => (
  <>
    <Modal.Header title="Focal point preview" onClose={onClose} />
    <Modal.Content>
      <Heading element="h1">Aspect ratio demo</Heading>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FocalPointPreviewImage file={file} focalPoint={focalPoint} />
        <FocalPointPreviewImage
          file={file}
          focalPoint={focalPoint}
          wrapperWidth={590}
          wrapperHeight={375}
        />
      </div>
      <Heading element="h1">Zoom demo</Heading>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FocalPointPreviewImage file={file} focalPoint={focalPoint} />
        <FocalPointPreviewImage file={file} focalPoint={focalPoint} zoom={2} />
        <FocalPointPreviewImage file={file} focalPoint={focalPoint} zoom={3} />
      </div>
    </Modal.Content>
    <Modal.Controls>
      <Button onClick={onClose} buttonType="muted">
        Close
      </Button>
    </Modal.Controls>
  </>
);

FocalPointDemoModal.propTypes = {
  file: PropTypes.object.isRequired,
  focalPoint: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
};

export default FocalPointDemoModal;
