import { useState } from 'react'
import './Moodboard.css'
import BoardImg from './BoardImg'

const Moodboard = ({ images }) => {
  const [show, setShow] = useState(false)

  return (
    <div className={`moodboard ${show ? 'show-grid' : ''}`}>

      { images.map(img => {
        return <BoardImg onHover={() => setShow(true)} onEndHover={() => setShow(false)} image={img} />
      }) }

    </div>
  )
}

export default Moodboard