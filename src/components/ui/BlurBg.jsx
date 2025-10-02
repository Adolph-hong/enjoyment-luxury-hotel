import React from 'react'

const BlurBg = ({ children }) => {
  return (
    <div className="fixed inset-0 z-40 bg-transparent bg-opacity-40 backdrop-blur-md">
      {children}
    </div>
  )
}

export default BlurBg
