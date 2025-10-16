import React from 'react'

type Props = {
  children: React.ReactNode
}

const BlurBg: React.FC<Props> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-40 bg-transparent bg-opacity-40 backdrop-blur-md">
      {children}
    </div>
  )
}

export default BlurBg
