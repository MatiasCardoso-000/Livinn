import React from 'react'

type Props = React.FormHTMLAttributes<HTMLFormElement>

export const Form = ({ children, ...rest }:Props) => {
  return (
    <form className=" bg-white  rounded-lg shadow-sm" {...rest}>
      {children}
    </form>
  )
}

export default Form
