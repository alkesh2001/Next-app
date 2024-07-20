
import React, { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'

interface input extends ButtonHTMLAttributes <HTMLButtonElement >{
    className : string ,
    value : string
}

const Button = forwardRef<HTMLButtonElement , input>(function Button({
    className = " ",
    value='',
    ...props
} , ref ){
    return (
        <div> 
          <button ref={ref} {...props} className={`${className} text-black text-md`}>
            {value}
          </button>
        </div>
      )
})

export default Button
