import React from 'react'

const CustomStyle = {
    position: 'absolute',
    className: 'CameraLabel',
    top: '',
    left: '',
    right: '',
    bottom: '',
    color: '#ffffff',
    fontFamily: 'Wetnessday, sans-serif',
    fontSize: 'clamp(1.2rem, 1.8vw, 2rem)',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    zIndex: 10,
    pointerEvents: 'none',
}

const CameraLabel = ({ children, style = {} }) => {
  return (
    <div className={CustomStyle.className} style={{ ...CustomStyle, ...style }}>
      {children}
    </div>
  )
}

export default CameraLabel
