import React, { useState, useRef, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faIcons from '@fortawesome/free-solid-svg-icons';

import '../styles/accordian.css'

const Accordion = (props: { title: React.ReactNode; children: React.ReactNode }) => {
  const [active, setActive] = useState(false)
  const contentRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if ( contentRef && contentRef.current ) {
        contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
    }}, [contentRef, active])

  const toogleActive = () => {
    setActive(!active)
  }

  const titleStyle = {
    fontWeight: 800,
    fontSize: '25px',
  }

  return (
    <div className="accordion-section">
      <button className={active ? 'active': 'accordion-title'} onClick={toogleActive} style={{ borderRadius: '4px' }}>
        <p style={titleStyle}>{props.title}</p>
        <span className={active ? 'accordion-icon rotate': 'accordion-icon'}>
          <FontAwesomeIcon icon={faIcons.faChevronUp} />
        </span>
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
      >
        {props.children}
      </div>
    </div>
  )
}

export default Accordion