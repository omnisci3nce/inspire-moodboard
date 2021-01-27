import { Rnd } from 'react-rnd'

const MAX_H = 4096
const MAX_W = 4096

const BoardImg = ({x, image, onHover, onEndHover}) => {
  return (
    <Rnd
      lockAspectRatio={true}
      default={{
        x: x,
        y: 50,
        width: 450,
        height: 253,
      }}
      enableResizing={{
        bottomLeft: true,
        bottomRight: true,
        topLeft: true,
        topRight: true,
      }}
      bounds='window'
    >
        <img
          style={{
            maxWidth: '100%',
            minHeight: '100%'
          }} 
          src={image} draggable="false" />
    </Rnd>
  )
}

export default BoardImg