import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import fetch from 'isomorphic-unfetch'

import JSVisual from '../components/JSVisual'
import Slides from '../components/Slides'
import './index.scss'
const API_URL = 'https://stage-control.herokuapp.com/api/stage'

const emptyStage = {
  speaker: {
    name: '',
    topic: '',
  },
}

const IndexPage = (props) => {
  const [stage, setStage] = useState({
    upcoming: [],
  })

  useEffect(() => {
    console.log('useEffect init')

    if (window.location.search.includes('akvarium')) {
      document.querySelector('body').classList.add('rotate90')
    }

    fetch(API_URL, {
      
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => setStage(res))
      .catch((e) => console.error(e))


    return () => {}
  }, [false])

  return (
    <div className="info-screen">
      <Slides stage={stage} />
      <JSVisual presentation={stage.presentation} />
      
    </div>
  )
}

export default IndexPage
