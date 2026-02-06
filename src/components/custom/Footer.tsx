import React from 'react'
import APP from '@/config'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8 relative z-10">
      <div className="border-t border-gray-200 dark:border-gray-700 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          ©{APP.year} {APP.copy}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
