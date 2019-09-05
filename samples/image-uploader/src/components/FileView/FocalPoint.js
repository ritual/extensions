import React from 'react';

export const FocalPoint = ({ focalPoint }) => (
  <div
    style={{
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: 'red',
      border: '1px solid grey',
      top: `${focalPoint.y - 4}px`,
      left: `${focalPoint.x - 4}px`,
      position: 'absolute'
    }}
  />
);
