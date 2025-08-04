import React from 'react'

const ShimmerUi = () => {
  return (
    <div className="resturant-list">
       {Array(10).fill("").map((e, idx)=>{
        return <div key={idx} className="shimmer-card">
          <div className="img">
          <img/>
        </div>

        <div className='empty'></div>
        <div className='empty'></div>
        <div className='empty'></div>
        </div>
       })}
      </div>
  )
}

export default ShimmerUi