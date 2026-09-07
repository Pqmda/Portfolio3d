import React from 'react'

const defaultStyle = {
  position: 'absolute',
  bottom: '10vh',
  left: '45vw',
  zIndex: 10,
  cursor: 'pointer',
  padding: '0.5rem 1.1rem',
  fontSize: '0.85rem',
  color: '#ffffff',
  textDecoration: 'none',
  background: 'transparent',
  border: '1px solid #ffffff',
  borderRadius: '100px',
  fontFamily: 'sans-serif',
  transition: 'background-color 0.3s ease, color 0.3s ease',
}

const ResumeButton = ({ style }) => {
  return (
    
      <a href="/Cedric_Valencia.pdf"
      download
      className="resume-button"
      style={{ ...defaultStyle, ...style }}
      >
      Resume
    </a>
  )
}

export default ResumeButton