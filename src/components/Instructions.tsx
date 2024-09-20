import React from 'react'

function Instructions() {
  return (
    <div className="hidden bg-green-400 p-1 rounded-sm bg-opacity-60 absolute z-30 top-[-300%] text-[6px] font-semibold max-sm:block animate-fade-in">
    <span className="underline">How to use:</span>
    <div className="p-1 flex flex-col">
        <span>1. Type the symptom you are experiencing.</span>
        <span>2. Select a symptom.</span>
        <span>
            3. Press <span className="text-black">Enter</span>
        </span>
    </div>
</div>
  )
}

export default Instructions;