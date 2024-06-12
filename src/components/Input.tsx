import React from 'react'

function Input(props: any) {
  const { bgr, type, onchane } = props;
  return (
    <div>
      <input type={type} onChange={onchane} className={`w-[100%] ${bgr}`} />
    </div>
  )
}

export default Input
