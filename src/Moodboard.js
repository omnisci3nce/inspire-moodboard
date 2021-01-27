import { useState } from 'react'
import './Moodboard.css'
import BoardImg from './BoardImg'

const Moodboard = ({ images }) => {
  const [show, setShow] = useState(false)

  return (
    <div className={`moodboard ${show ? 'show-grid' : ''}`}>

      { images.map((img, i) => {
        return <BoardImg key={img.url} onHover={() => setShow(true)} onEndHover={() => setShow(false)} x={i * 150} image={img.url} />
      }) }

    </div>
  )
}

export default Moodboard