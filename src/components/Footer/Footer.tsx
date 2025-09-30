import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-50 text-blue-700 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-sm">© {new Date().getFullYear()} Livinn. All rights reserved.</span>
        <div className="space-x-4">
          <a className="text-sm hover:underline" href="#">Privacy</a>
          <a className="text-sm hover:underline" href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
