import './ElevatedButton.css'


const Btn = ({icon, text, onClick}) => {
  return (
    <button className="e-btn" onClick={onClick}>
      <span>{icon}</span>
      <span>{ text }</span>

    </button>
  )
}

export default Btn