import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <label className="block">
      {label && <span className="text-sm text-blue-700 mb-1 block">{label}</span>}
      <input
        className="w-full px-3 py-2 rounded-md focus:ring-2focus:border-transparent bg-white focus:outline-0 "
        {...rest}
      />
    </label>
  )
}

