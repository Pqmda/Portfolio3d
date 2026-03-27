import React from 'react'



const CustomStyle = {
    position: 'absolute',
    className: 'Line',
    top: '',
    left: '',
    backgroundColor: '#ffffff',
    width: '',
    height: '0.1vh',
    zIndex: 10,
}

const Line = ({ style = {}, className = ''}) => {
  return (
    <>
        <div className = {CustomStyle.className} style={{...CustomStyle, ...style}}></div>
    </>
  )
}

export default Line