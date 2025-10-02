import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className:string;
  children:React.ReactNode
}

export const Button= ({ className, children, ...rest }:Props) => {
 
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}

export default Button
