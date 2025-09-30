import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
}

export const Button: React.FC<Props> = ({ variant = 'primary', children, ...rest }) => {
  const base = 'px-4 py-2 rounded-md font-medium transition-colors focus:outline-none'
  const classes =
    variant === 'primary'
      ? `${base} bg-blue-600 text-white hover:bg-blue-700 shadow-sm`
      : `${base} border border-blue-600 text-blue-600 bg-white hover:bg-blue-50`

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
