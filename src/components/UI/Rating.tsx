import React from "react"

interface RatingProps {
  value: number
  max?: number
  size?: "sm" | "md" | "lg"
}

const Rating: React.FC<RatingProps> = ({ value, max = 5, size = "md" }) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  return (
    <div className={`flex items-center ${sizeClasses[size]}`}>
      <div className="flex text-yellow-400">
        {[...Array(max)].map((_, i) => (
          <i
            key={i}
            className={`fas fa-star ${
              i < Math.floor(value)
                ? "fas"
                : i < value
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }`}
          ></i>
        ))}
      </div>
      <span className="ml-2 text-gray-600 font-medium">{value.toFixed(1)}</span>
    </div>
  )
}

export default Rating
