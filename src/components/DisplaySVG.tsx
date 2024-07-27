import React from 'react'

function DisplaySVG({style, src}: {style: string, src: string}) {
  return <object data={`${src}`} className={`${style}`}></object>
}

export default DisplaySVG