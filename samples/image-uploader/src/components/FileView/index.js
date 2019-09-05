import React from 'react';
import { Heading, Button, Paragraph, Asset } from '@contentful/forma-36-react-components';
import { FocalPoint } from './FocalPoint';

import Dropzone from '../Dropzone';

import './fileview.css';

export default function FileView(props) {
  const file = props.file;
  const type = file.contentType.split('/')[0];
  const prettySize = `${(file.details.size / 1000000).toFixed(2)} MB`;

  const onImageClick = e => {
    if (!props.selectingFocalPoint) {
      return;
    }

    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top; //y position within the element.

    const { width, height } = file.details.image;

    const widthRatio = width / rect.width;
    const heightRatio = height / rect.height;

    const actualX = Math.round(x * widthRatio);
    const actualY = Math.round(y * heightRatio);

    props.onSetFocalPoint({
      x: rect.left + x,
      y: rect.top + y
    });
    console.log(actualX, actualY);
  };

  return (
    <Dropzone
      className={`file-view viewport ${type === 'image' ? 'image-file' : 'non-image-file'}`}
      isDraggingOver={props.isDraggingOver}
      onDrop={props.onDropFiles}
      onDragOverStart={props.onDragOverStart}
      onDragOverEnd={props.onDragOverEnd}>
      {type === 'image' ? (
        <header
          style={{
            height: '300px',
            cursor: props.selectingFocalPoint ? 'crosshair' : 'auto'
          }}>
          <div style={{ position: 'relative' }}>
            <img
              style={{ display: 'block', margin: 'auto', maxWidth: '100%', height: 'auto' }}
              src={file.url}
              onClick={onImageClick}
            />
            {props.focalPoint && <FocalPoint focalPoint={props.focalPoint} />}
          </div>
        </header>
      ) : (
        <header>
          <Asset type={type} className="file-type-icon" />
        </header>
      )}
      <section className="details">
        <main>
          <Heading className="filename">{file.fileName}</Heading>
          {type === 'image' ? (
            <Paragraph className="row">
              <strong>Dimensions:</strong> {file.details.image.width}x{file.details.image.height}
            </Paragraph>
          ) : null}
          <Paragraph className="row">
            <strong>Size:</strong> {prettySize}
          </Paragraph>
          <Paragraph className="row">
            <strong>Type:</strong> {file.contentType}
          </Paragraph>
          <Paragraph className="row">
            <strong>Status:</strong> {props.isPublished ? 'Published' : 'Draft'}
          </Paragraph>
        </main>
        <nav className="buttonset">
          <Button buttonType="muted" className="button" onClick={props.onClickEdit}>
            Edit
          </Button>
          <Button buttonType="muted" className="button" onClick={props.onClickRemove}>
            Remove
          </Button>
        </nav>
        {props.focalPointEnabled ? (
          <nav className="buttonset">
            <Button
              buttonType={props.selectingFocalPoint ? 'primary' : 'muted'}
              className="button"
              onClick={props.onToggleFocalPointSelection}>
              Select focal point
            </Button>
          </nav>
        ) : null}
      </section>
    </Dropzone>
  );
}
