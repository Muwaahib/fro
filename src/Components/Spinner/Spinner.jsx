import React from 'react'
import Styles from './Spinner.module.css'
import { Vortex } from 'react-loader-spinner'

const Spinner = () => {
    
  return (
   
    <div>
       <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
    </div>
  )
}

export default Spinner