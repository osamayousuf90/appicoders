import React from 'react'

const Button = ({ children, extraClass, ...otherProps }) => {
    return (
        <button {...otherProps}
            className={`
            cursor-pointer
            transition
            duration-300
            ease-in-out
            hover:scale-105
            inline-block
    py-3 px-8                           
    rounded-sm                          
    text-white                          
    font-semibold                      
    shadow-lg                           
    bg-gradient-to-b from-red-700 to-red-900 
    [text-shadow:0px_0px_5px_rgba(255,255,255,0.7),_0px_1px_1px_rgba(0,0,0,0.5)]
    [box-shadow:inset_0_1px_0_rgba(255,255,255,0.3),_0_2px_4px_rgba(0,0,0,0.5)]
    ${extraClass ? extraClass : ''}
`}
        >{children}</button>
    )
}

export default Button