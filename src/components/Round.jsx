import React from 'react'
import './Round.css'

import { motion, useScroll } from "framer-motion";


function Round() {

    const { scrollYProgress } = useScroll();

  return (
    <div className='roun'>
        <figure className="progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>

    </div>
  )
}

export default Round