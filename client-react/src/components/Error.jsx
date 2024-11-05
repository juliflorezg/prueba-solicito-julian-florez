import React from 'react'

function Error({ message }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <p className="text-xl font-bold">
          Error: {message}
        </p>
      </div>
    </div>
  )
}

export default Error