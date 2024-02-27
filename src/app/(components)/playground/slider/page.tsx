'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ImageSlider = () => {
  const imageUrls = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c',
    'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8',
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % imageUrls.length)
  }

  const prevSlide = () => {
    setCurrentSlide((currentSlide + imageUrls.length - 1) % imageUrls.length)
  }

  useEffect(() => {
    slideRef.current?.classList.add('active') // Check if slideRef.current is not null
  }, [])

  return (
    <div className="slider-container relative mx-auto w-full overflow-hidden py-10 ">
      {imageUrls.map((url, index) => (
        <motion.div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : 'hidden'}`}
          ref={index === currentSlide ? slideRef : null}
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{
            scale: index === currentSlide ? 1.2 : 1,
            opacity: index === currentSlide ? 1 : 0.5,
          }}
          transition={{ duration: 0.9 }} // Add optional transition for smoothness
        >
          <img
            src={url}
            alt={`Slide ${index + 1}`}
            className="h-64 w-full object-cover"
          />
        </motion.div>
      ))}

      <button
        className="absolute left-5 top-1/2 -translate-y-1/2 rounded-md bg-gray-700 px-3 py-2 text-white opacity-75 hover:opacity-100"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="absolute right-5 top-1/2 -translate-y-1/2 rounded-md bg-gray-700 px-3 py-2 text-white opacity-75 hover:opacity-100"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
}

export default ImageSlider
