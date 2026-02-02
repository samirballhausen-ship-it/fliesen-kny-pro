import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  price?: string
  isHighlighted?: boolean
}

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  price,
  isHighlighted = false 
}: ServiceCardProps) => {
  return (
    <motion.div
      className={`relative p-6 rounded-xl border transition-all duration-300 ${
        isHighlighted
          ? 'bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200 shadow-lg scale-105'
          : 'bg-white border-gray-200 hover:border-primary-300 hover:shadow-lg'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {isHighlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Beliebt
          </span>
        </div>
      )}

      <div className="space-y-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          isHighlighted 
            ? 'bg-gradient-to-br from-primary-600 to-secondary-500' 
            : 'bg-primary-100'
        }`}>
          <Icon className={`w-6 h-6 ${
            isHighlighted ? 'text-white' : 'text-primary-600'
          }`} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <svg
                className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {price && (
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">ab {price}</span>
              <span className="text-gray-500 ml-1">/m²</span>
            </div>
          </div>
        )}

        <button className={`w-full font-medium py-3 px-4 rounded-lg transition-colors ${
          isHighlighted
            ? 'bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 text-white'
            : 'bg-gray-100 hover:bg-primary-50 text-gray-700 hover:text-primary-600'
        }`}>
          Mehr erfahren
        </button>
      </div>
    </motion.div>
  )
}