import React from 'react'

import './custom-button.css'
const CustomButton = ({ children, ...otherProps }) => {
 return (
  <React.Fragment>
   <button className='custom-button' {...otherProps}>
    {children}
   </button>
  </React.Fragment>
 )
}

export default CustomButton