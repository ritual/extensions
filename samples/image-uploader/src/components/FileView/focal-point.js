export const FocalPoint = ({ focalPoint }) => (
  <div
    style={{
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      backgroundColor: 'red',
      border: '1px solid grey',
      top: `${focalPoint.y}px`,
      left: `${focalPoint.x}px`,
      position: 'absolute'
    }}
  />
);
