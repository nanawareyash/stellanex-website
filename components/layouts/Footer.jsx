
function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Stellanex. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ by the Stellanex Team
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer