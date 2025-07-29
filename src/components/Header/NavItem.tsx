import React from "react"

interface NavItemProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  isActive = false,
}) => {
  return (
    <li>
      <a
        href={href}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          isActive
            ? "bg-indigo-100 text-indigo-700 font-medium"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        {children}
      </a>
    </li>
  )
}

export default NavItem
