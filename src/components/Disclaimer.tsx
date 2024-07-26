import React from 'react'

function Disclaimer() {
    const [showInfo, setShowInfo] = React.useState(false);
    
    return (
    <div className="absolute bottom-0 right-0 flex justify-end items-end p-5">
        <div className="flex justify-center items-center">
            <div
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
            className="font-mono bg-red-600 rounded-circle text-sm w-6 h-6 flex justify-center items-center bg-opacity-50 text-orange-400 cursor-pointer">
            i
        </div>
        {showInfo && (
            <div className="absolute right-full bg-red-600 py-1 px-2 rounded-md text-sm text-nowrap">
                This project is not intended to serve as a substitute for
                professional medical advice from a licensed physician.
            </div>
        )}
    </div>
</div>
  )
}

export default Disclaimer