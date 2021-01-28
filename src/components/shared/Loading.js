import React from 'react'
import clsx from 'clsx';

const Loading = ({ className }) => {
  const loaderClass = clsx('lds-ellipsis', className)

  return (
    <div className={loaderClass}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loading
