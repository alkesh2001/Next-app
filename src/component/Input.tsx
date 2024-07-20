
import React, { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

interface userInput extends InputHTMLAttributes<HTMLInputElement>{
    type : string ,
    className : string ,
 }
const Input = forwardRef<HTMLInputElement ,  userInput>(function Input({
     type = "text",
     className = '',
     ...props
} , ref ){
    return (
        <div>
           <input ref={ref} type={type} {...props} className={`${className} text-white  px-3 h-10 text-md w-full outline-none `} />
        </div>
      )
})

export default Input
