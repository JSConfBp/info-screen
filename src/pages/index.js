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

    /*
    setStage({
      event: 'css',
      speaker: {
        id: 'damini',
        name: 'Damini Satya Kammakomati',
        topic:
          'Taming “Git”osaurus Using Mystical Trees: Understanding complex git trees in the developer fairyland',
        avatar:
          'https://jsconfbp.com/static/9e7e5271243bef3c85055651a32e8ce5/f4957/damini_satya.webp',
        color: 'white',
      },
      color: 'white',
      presentation: false,
      midSlide: false,
      timestamp: '2019-09-08T12:57:17.072Z',
      upcoming: [
        {
          topic: 'Lunch break',
        },
        {
          id: 'adam',
          name: 'Adam Giese',
          topic: 'Composing music with composed functions',
          avatar:
            'https://jsconfbp.com/static/efe4d5b8263d4c3b9aca9e4e13a55149/6fae7/adam_giese.webp',
          color: 'red',
        },
        {
          id: 'rebecca',
          name: 'Rebecca Hill',
          topic:
            'Essential JavaScript debugging tools for the modern detective',
          avatar:
            'https://jsconfbp.com/static/a9c029c4c6eecffca2b88d483a572cd5/80349/rebecca_hill.webp',
          color: 'green',
        },
        {
          topic: 'Coffee break',
        },
      ],
    }) */

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
      {stage && stage.event === 'js' && (
        <JSVisual presentation={stage.presentation} />
      )}
    </div>
  )
}

export default IndexPage
