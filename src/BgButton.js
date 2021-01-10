import './BgButton.css'

const Btn = ({icon, text, onClick}) => {
  return (
    <button className="bg-btn" onClick={onClick}>
      <span>{icon}</span>
      <span>{ text }</span>
    </button>
  )
}

export default Btn