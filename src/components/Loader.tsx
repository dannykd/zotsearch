import React from 'react'
import { MutatingDots, MagnifyingGlass, InfinitySpin} from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className='flex flex-col items-center sm:py-8 sm:px-8 w-11/12 mx-auto mt-40 md:mt-40 justify-center'>
        <InfinitySpin 
        width='200'
        color="#3756C5"
        />
    </div>
  ) 
}

export default Loader