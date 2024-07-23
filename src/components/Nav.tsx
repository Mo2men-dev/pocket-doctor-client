import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='absolute flex w-full py-4 justify-center z-30 text-sm font-semibold'>
        <nav className='bg-black outline outline-blue-400 flex rounded-full p-2 justify-center animate-slideFadeIn'>
            <ul className='flex justify-center items-center '>
                <li className='mx-3'>
                    <Link to={'/'}>
                        <span className='text-white hover:text-blue-300 hover:underline'>Home</span>
                    </Link>
                </li>
                <li className='mx-3'>
                    <Link to={'/conditions'}>
                        <span className='text-white hover:text-blue-300 hover:underline'>Conditions</span>
                    </Link>
                </li>
                <li className='mx-3'>
                    <a href='https://mo2men-dev.github.io/pocketdoctor/about/'>
                        <span className='text-white hover:text-blue-300 hover:underline'>About</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav