
export const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 mt-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-sm">© {new Date().getFullYear()} <span className="text-orange-500 font-medium">Livinn</span>. All rights reserved.</span>
        <div className="space-x-6">
          <a className="text-sm hover:text-orange-500 transition-colors" href="#">Privacy</a>
          <a className="text-sm hover:text-orange-500 transition-colors" href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
