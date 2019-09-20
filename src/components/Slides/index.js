import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import './index.scss'

import SponsorImage from '../SponsorImage'
import VenueMap from '../VenueMap'

const SLIDE_INTERVAL = 3000

const reset = slides => {
  slides.forEach((slide, i) => {
    slide.classList.remove('show')

    if (i === 0) {
      slide.classList.add('show')
    }
  })
}

const next = slides => {
  let index = slides.findIndex(elem => elem.classList.contains('show')) + 1

  if (index === slides.length) {
    index = 0
  }

  slides.forEach((slide, i) => {
    slide.classList.remove('show')
    if (i === index) {
      slide.classList.add('show')
    }
  })
}

const Slides = ({ stage }) => {
  const slides = useRef(null)
  const slideShowInterval = useRef(0)

  useEffect(() => {
    slides.current = Array.from(document.querySelectorAll('.slideshow'))

    reset(slides.current)
    slideShowInterval.current = setInterval(
      () => next(slides.current),
      SLIDE_INTERVAL
    )

    return () => {
      clearInterval(slideShowInterval.current)
    }
  }, [stage])

  return (
    <div className={classnames('mid-session-slides')}>
      <div className="sponsors slideshow ">
        <div className="sponsors-top">
          <SponsorImage image="mozilla" className="large" />
          <SponsorImage image="tresorit" className="large" />
          <SponsorImage image="vacuumlabs" className="large" />
          <SponsorImage image="oracle" className="large" />
        </div>
      </div>

      <div className="wifi slideshow">
        <svg
          className="wifi-logo"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 276.991 276.991"
        >
          <g>
            <circle cx="138.495" cy="207.653" r="41.494" />
            <path
              d="M138.495,97c-35.658,0-69.337,17.345-90.09,46.397c-5.921,8.288-4.001,19.806,4.286,25.726
              c8.287,5.922,19.807,4.001,25.726-4.286c13.846-19.383,36.305-30.954,60.078-30.954c23.773,0,46.232,11.571,60.078,30.954
              c3.6,5.039,9.268,7.724,15.021,7.724c3.709,0,7.455-1.116,10.704-3.438c8.287-5.92,10.207-17.438,4.286-25.726
              C207.831,114.345,174.153,97,138.495,97z"
            />
            <path
              d="M272.266,87.509c-34.077-37.918-82.835-59.665-133.771-59.665S38.801,49.592,4.725,87.512
              c-6.808,7.575-6.186,19.235,1.391,26.043c3.522,3.166,7.929,4.726,12.32,4.726c5.051-0.001,10.081-2.063,13.723-6.116
              c27.092-30.146,65.85-47.438,106.336-47.438c40.487,0,79.246,17.29,106.338,47.437c6.809,7.575,18.47,8.197,26.044,1.39
              C278.452,106.745,279.074,95.084,272.266,87.509z"
            />
          </g>
        </svg>
        <h1>AKVARIUM_FREE</h1>
        <h1>akvariumklub</h1>
      </div>

      <div className="sponsors slideshow ">
        <div className="sponsors-mid">
          <SponsorImage image="blackrock" className="medium" />
          <SponsorImage image="instructure" className="medium" />
          <SponsorImage image="bonomi" className="medium" />
          <SponsorImage image="supercharge" className="medium" />
          <SponsorImage image="microsoft" className="medium" />
          <SponsorImage image="risingstack" className="medium" />
          <SponsorImage image="epam" className="medium" />
          <SponsorImage image="mito" className="medium" />
          <SponsorImage image="sinnerschrader" className="medium" />
        </div>
        <div className="sponsors-bottom">
          <SponsorImage image="zalando" className="small" />
          <SponsorImage image="snyk" className="small" />
          <SponsorImage image="outfittery" className="small" />
        </div>
      </div>

      <div className="venue slideshow show">
        <VenueMap />
      </div>

      <div className="upnext slideshow">
        <h1>Coming up next</h1>

        <dl className="session-list">
          {stage.upcoming.map(session => (
            <React.Fragment key={session.topic}>
              <dd>{session.start}</dd>
              <dt>
                {session.topic}
                {session.name && (
                  <span className="session-name">by {session.name}</span>
                )}
              </dt>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Slides
