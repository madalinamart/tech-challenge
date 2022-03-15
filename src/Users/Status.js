import React from 'react'

const Status = ({status}) => {

  return (
    <div>  
    <p>
    Works remote:
    {
        (!status ? (
            <span>NO</span>
        ) : (<span>YES</span>))
    }
  </p>
  </div>
  )
}

export default Status