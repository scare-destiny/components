'use client'

import { motion } from 'framer-motion'

// https://blog.maximeheckel.com/posts/guide-animations-spark-joy-framer-motion/
// https://blog.maximeheckel.com/posts/advanced-animation-patterns-with-framer-motion/

const Example1 = () => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <p>Example 1</p>
      <motion.div
        style={{
          background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
          height: '50px',
          width: '50px',
          borderRadius: '10px',
        }}
        /**
          Below, the initial and animation field are set to declare a translation
          animation along the horizontal axis "x"
          Hence why we're setting an "x" field in both objects.
        **/
        initial={{
          x: -100,
        }}
        animate={{
          x: 100,
        }}
        /**
          The code below specifies the transition type for our element.
          You can comment the whole transition prop below, and Framer 
          Motion will fallback to "smart defaults".

          In this case, since we have a translation, the default transition type is
          spring, so you should see the element moving from left to right and "bounce"
          a when reaching its target state, like a spring!
        **/
        transition={{
          type: 'tween',
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          duration: 2,
        }}
      />
    </div>
  )
}

const Example2 = () => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <p>Example 2</p>
      <motion.div
        style={{
          background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
          height: '50px',
          width: '50px',
          borderRadius: '10px',
        }}
        /**
          Combining animations in Framer Motion is very easy!
          You can simply add extra fields to your initial and target object.
          Here for example, our element rotates between 0 and 180 degrees, if
          we want to have it translate horizontally at the same time, we can
          simply add an "x" field, like in the example above.

          I added these fields below, commented. If you uncomment them,
          you should see our element both rotate and translate at the same
          time.

          You can try changing the translation from horizontal to vertitcal, by
          replacing the "x" field with an "y" field.
        **/
        initial={{
          rotate: 0,
          // x: -100,
        }}
        animate={{
          rotate: 180,
          x: 100,
        }}
        transition={{
          type: 'tween',
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          duration: 2,
        }}
      />
    </div>
  )
}

const ExampleButton = () => {
  const buttonVariants = {
    hover: {
      scale: 1.5,
    },
    pressed: {
      scale: 0.5,
    },
    rest: {
      scale: 1,
    },
  }

  return (
    <motion.button
      className="border-2 border-black  bg-white px-8 py-0.5 text-sm uppercase text-neutral-700 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200"
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      variants={buttonVariants}
    >
      Brutal
    </motion.button>
  )
}

const Examples = () => (
  <div>
    <Example1 />
    <Example2 />
    <ExampleButton />
  </div>
)

export default Examples
