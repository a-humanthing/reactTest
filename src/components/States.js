import React from 'react'

const States = (data) => {
  return (
    <div className='bg-success'>
        <h1>{data.name}</h1>
        <h4>{data.lang}</h4>
    </div>
  )
}

export default States