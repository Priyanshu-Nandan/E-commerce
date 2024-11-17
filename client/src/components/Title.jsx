import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3 vg-title'>
      <p className='text-white-500'>{text1} <span className='text-white-700 font-medium'>{text2}</span></p>
    </div>
  )
}

export default Title
