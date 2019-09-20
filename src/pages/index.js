import React, { useEffect, useState, useRef } from 'react'
import fetch from 'isomorphic-unfetch'

import JSVisual from '../components/JSVisual'
import CSSVisual from '../components/CSSVisual'
import Slides from '../components/Slides'
import './index.scss'
const API_URL = 'https://stage-control.herokuapp.com/api/stage'

const IndexPage = props => {
  const fetchInterval = useRef(0)
  const [stage, setStage] = useState({
    upcoming: [],
  })

  const getStage = () => {
    fetch(API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setStage(res))
      .catch(e => console.error(e))
  }

  useEffect(() => {
    console.log('useEffect init')

    if (window.location.search.includes('akvarium')) {
      document.querySelector('body').classList.add('rotate90')
    }

    getStage()
    fetchInterval.current = setInterval(getStage, 30 * 1000)

    return () => {
      clearInterval(fetchInterval.current)
    }
  }, [false])

  return (
    <div className={`info-screen event-${stage.event}`}>
      <Slides stage={stage} />

      {stage && stage.event === 'css' && (
        <CSSVisual presentation={stage.presentation} />
      )}
      {stage && stage.event && stage.event.startsWith('js') && (
        <JSVisual presentation={stage.presentation} />
      )}
    </div>
  )
}

export default IndexPage
