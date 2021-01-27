import { Rnd } from 'react-rnd'

const MAX_H = 4096
const MAX_W = 4096

const BoardImg = ({image, onHover, onEndHover}) => {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 600,
        height: 400,
        enableResizing: true
      }}
    >
      <span>
        <img style={
          { maxWidth: MAX_W, 
            maxHeight: MAX_H, 
            objectFit: 'cover'
          }} src={image} draggable="false" />
      </span>
    </Rnd>
  )
}

export default BoardImg