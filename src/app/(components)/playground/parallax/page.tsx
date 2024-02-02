'use client'
import { useMotionValue, useTransform, motion } from 'framer-motion'

function Parallax({ children }: { children: React.ReactNode }) {
  const y = useMotionValue(0)
  const yParallax = useTransform(y, [0, 100], [0, -20])

  return (
    <motion.div
      style={{ y: yParallax }}
      onViewportEnter={() => y.set(100)}
      onViewportLeave={() => y.set(0)}
    >
      {children}
    </motion.div>
  )
}

const Page = () => {
  return (
    <Parallax>
      <div>My contents that will parallax</div>
    </Parallax>
  )
}

export default Page
