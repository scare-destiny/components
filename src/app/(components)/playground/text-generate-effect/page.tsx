'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  let wordsArray = words.split(' ')

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const renderWords = () => {
    return (
      <motion.div className="overflow-hidden">
        {wordsArray.map((word, i) => (
          <motion.span
            key={word + i}
            className="text-black dark:text-white"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 2, delay: i * 0.2 }}
            viewport={{ once: true, margin: '0px 0px -200px' }}
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide  text-black dark:text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}

const Page = () => {
  return (
    <TextGenerateEffect words="Viverra Venustas Ipsum: Aurora whispers, serenely in the dawning hue, where ideas blossom like spring's first flora. Here, in the heart of creativity's realm, imagination unfurls its vibrant wings. Eloquentia Solis: Words, like golden rays, cascade, weaving tapestries of thought and wonder. Each sentence, a dance of light and shadow, painting visions of untold stories." />
  )
}

export default Page
