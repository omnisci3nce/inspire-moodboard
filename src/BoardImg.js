const MAX_H = 256
const MAX_W = 256

const BoardImg = ({image, onHover, onEndHover}) => {
  return (
    <span onMouseEnter={onHover} onMouseLeave={onEndHover}>
      <img style={{ maxWidth: MAX_W, maxHeight: MAX_H, objectFit: 'cover' }} src={image} />
    </span>
  )
}

export default BoardImg